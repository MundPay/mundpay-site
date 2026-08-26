import { createHash } from 'node:crypto';
import type { Logger } from 'pino';
import { z } from 'zod';
import type { CreateDealCommand, CreateDealResult, DataCrazyClient } from '../types/dataCrazy.js';
import { DataCrazyError } from '../utils/errors.js';

const mockResultSchema = z.object({ leadId: z.string().min(1) }).strict();
const leadResponseSchema = z.object({ id: z.string().min(1) }).passthrough();
const leadSearchSchema = z.object({
  data: z.array(z.object({
    id: z.string().min(1),
    phone: z.string().optional(),
    rawPhone: z.string().optional(),
  }).passthrough()),
}).passthrough();
const businessResponseSchema = z.object({ id: z.string().min(1) }).passthrough();

export interface RealDataCrazyClientConfiguration {
  apiUrl: string;
  apiToken: string;
  timeoutMs: number;
}

/**
 * Keeps the internal, validated command separate from any future vendor payload.
 * The real adapter remains disabled while the lead-response and automation rules
 * are confirmed with Data Crazy. Mock mode never performs network requests.
 */
export function mapLeadToDataCrazyInput(command: CreateDealCommand): CreateDealCommand {
  return { ...command, lead: { ...command.lead } };
}

export class MockDataCrazyClient implements DataCrazyClient {
  createDeal(command: CreateDealCommand): Promise<CreateDealResult> {
    const input = mapLeadToDataCrazyInput(command);
    const sanitizedLead = {
      name: input.lead.name,
      email: input.lead.email,
      whatsapp: input.lead.whatsapp,
      revenue: input.lead.revenue,
      platform: input.lead.platform,
      source: input.lead.source,
      language: input.lead.language,
      receivedAt: input.lead.receivedAt,
    };
    console.log(`[DATACRAZY_MOCK] ${JSON.stringify(sanitizedLead)}`);
    const digest = createHash('sha256').update(input.requestId).digest('hex').slice(0, 20);
    return Promise.resolve(mockResultSchema.parse({ leadId: `mock_${digest}` }));
  }
}

export class RealDataCrazyClient implements DataCrazyClient {
  private readonly apiUrl: string;

  constructor(
    private readonly configuration: RealDataCrazyClientConfiguration,
    private readonly logger: Logger,
  ) {
    this.apiUrl = configuration.apiUrl.replace(/\/$/, '');
  }

  async createDeal(command: CreateDealCommand): Promise<CreateDealResult> {
    const input = mapLeadToDataCrazyInput(command);
    const leadId = await this.findLeadId(input.lead.whatsapp)
      ?? await this.createLeadAndResolveId(input);

    const response = await this.request('/api/v1/businesses', {
      method: 'POST',
      body: JSON.stringify({
        leadId,
        stageId: input.stageId,
        attendantId: input.attendantId,
      }),
    });
    const business = businessResponseSchema.safeParse(await readJson(response));
    if (!business.success) throw new DataCrazyError('Invalid business response', 'invalid_response');

    this.logger.info(
      { event: 'datacrazy_business_created', requestId: input.requestId, businessId: business.data.id },
      'Data Crazy business created',
    );
    return { leadId };
  }

  private async createLeadAndResolveId(command: CreateDealCommand): Promise<string> {
    const response = await this.request('/api/v1/leads', {
      method: 'POST',
      body: JSON.stringify({
        name: command.lead.name,
        phone: command.lead.whatsapp,
        email: command.lead.email,
        source: command.lead.source,
        attendant: { id: command.attendantId },
      }),
    });
    const responseText = await response.text();
    if (responseText.trim() !== '') {
      const parsed = leadResponseSchema.safeParse(parseJson(responseText));
      if (parsed.success) return parsed.data.id;
    }

    for (const delayMs of [0, 100, 250]) {
      if (delayMs > 0) await delay(delayMs);
      const leadId = await this.findLeadId(command.lead.whatsapp);
      if (leadId) return leadId;
    }
    throw new DataCrazyError('Created lead could not be resolved', 'invalid_response');
  }

  private async findLeadId(phone: string): Promise<string | undefined> {
    const query = new URLSearchParams({ searchType: 'phone', search: phone, take: '20' });
    const response = await this.request(`/api/v1/leads?${query.toString()}`, { method: 'GET' });
    const parsed = leadSearchSchema.safeParse(await readJson(response));
    if (!parsed.success) throw new DataCrazyError('Invalid lead search response', 'invalid_response');
    const expectedPhone = onlyDigits(phone);
    return parsed.data.data.find((lead) => onlyDigits(lead.rawPhone ?? lead.phone ?? '') === expectedPhone)?.id;
  }

  private async request(path: string, init: RequestInit): Promise<Response> {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.configuration.timeoutMs);
    try {
      const response = await fetch(`${this.apiUrl}${path}`, {
        ...init,
        headers: {
          authorization: `Bearer ${this.configuration.apiToken}`,
          'content-type': 'application/json',
        },
        signal: controller.signal,
      });
      if (response.ok) return response;
      if (response.status === 429) throw new DataCrazyError('Data Crazy rate limit', 'rate_limited');
      if (response.status >= 500) throw new DataCrazyError('Data Crazy server error', 'server_error');
      throw new DataCrazyError('Data Crazy rejected the request', 'bad_request');
    } catch (error) {
      if (error instanceof DataCrazyError) throw error;
      if (controller.signal.aborted) throw new DataCrazyError('Data Crazy request timed out', 'timeout');
      throw new DataCrazyError('Data Crazy is unavailable', 'unavailable');
    } finally {
      clearTimeout(timeout);
    }
  }
}

async function readJson(response: Response): Promise<unknown> {
  return parseJson(await response.text());
}

function parseJson(value: string): unknown {
  try {
    return JSON.parse(value) as unknown;
  } catch {
    throw new DataCrazyError('Data Crazy returned invalid JSON', 'invalid_response');
  }
}

function onlyDigits(value: string): string {
  return value.replace(/\D/g, '');
}

function delay(milliseconds: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
