import { afterEach, describe, expect, it, vi } from 'vitest';
import { RealDataCrazyClient } from '../src/services/dataCrazyService.js';
import type { CreateDealCommand } from '../src/types/dataCrazy.js';
import { createLogger } from '../src/utils/logger.js';

const command: CreateDealCommand = {
  lead: {
    name: 'Maria Silva',
    email: 'maria@example.com',
    whatsapp: '+5511999999999',
    revenue: '10k-to-50k',
    platform: 'hotmart',
    source: 'lp',
    language: 'pt-BR',
    receivedAt: '2026-08-24T12:00:00.000Z',
  },
  manager: 'alex',
  attendantId: 'alex-attendant',
  stageId: 'alex-stage',
  requestId: 'request-001',
};

afterEach(() => { vi.unstubAllGlobals(); });

describe('RealDataCrazyClient', () => {
  it('reuses an existing lead and creates the business in the selected stage', async () => {
    const fetchMock = vi.fn<(input: string | URL | Request, init?: RequestInit) => Promise<Response>>()
      .mockResolvedValueOnce(jsonResponse({ data: [{ id: 'lead-1', rawPhone: '5511999999999' }] }))
      .mockResolvedValueOnce(jsonResponse({ id: 'business-1' }));
    vi.stubGlobal('fetch', fetchMock);
    const client = createClient();

    await expect(client.createDeal(command)).resolves.toEqual({ leadId: 'lead-1' });
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(fetchMock.mock.calls[1]?.[0]).toBe('https://api.example.com/api/v1/businesses');
    expect(fetchMock.mock.calls[1]?.[1]?.body).toBe(JSON.stringify({
      leadId: 'lead-1',
      stageId: 'alex-stage',
      attendantId: 'alex-attendant',
    }));
  });

  it('creates a missing lead, resolves its ID by phone, then creates the business', async () => {
    const fetchMock = vi.fn<(input: string | URL | Request, init?: RequestInit) => Promise<Response>>()
      .mockResolvedValueOnce(jsonResponse({ data: [] }))
      .mockResolvedValueOnce(new Response(null, { status: 201 }))
      .mockResolvedValueOnce(jsonResponse({ data: [{ id: 'lead-2', rawPhone: '5511999999999' }] }))
      .mockResolvedValueOnce(jsonResponse({ id: 'business-2' }));
    vi.stubGlobal('fetch', fetchMock);
    const client = createClient();

    await expect(client.createDeal(command)).resolves.toEqual({ leadId: 'lead-2' });
    expect(fetchMock).toHaveBeenCalledTimes(4);
    expect(fetchMock.mock.calls[1]?.[0]).toBe('https://api.example.com/api/v1/leads');
    expect(fetchMock.mock.calls[1]?.[1]?.body).toBe(JSON.stringify({
      name: 'Maria Silva',
      phone: '+5511999999999',
      email: 'maria@example.com',
      source: 'lp',
      attendant: { id: 'alex-attendant' },
    }));
  });
});

function createClient(): RealDataCrazyClient {
  return new RealDataCrazyClient({
    apiUrl: 'https://api.example.com/',
    apiToken: 'test-token',
    timeoutMs: 1_000,
  }, createLogger('silent'));
}

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}
