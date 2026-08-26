import { mkdtemp, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import type { Express } from 'express';
import type { Logger } from 'pino';
import { createApp } from '../src/app.js';
import { parseEnv, type Env } from '../src/config/env.js';
import { AssignmentStateRepository } from '../src/repositories/assignmentStateRepository.js';
import { LeadAssignmentService } from '../src/services/leadAssignmentService.js';
import type { CreateDealCommand, CreateDealResult, DataCrazyClient } from '../src/types/dataCrazy.js';
import { createLogger } from '../src/utils/logger.js';

export const validPayload = {
  name: 'Maria da Silva',
  email: 'MARIA@EXAMPLE.COM ',
  whatsapp: '+5511999999999',
  revenue: '10k-to-50k',
  platform: 'hotmart',
  source: 'lp',
  language: 'pt-BR',
  submittedAt: '2026-08-24T12:00:00.000Z',
} as const;

export class RecordingClient implements DataCrazyClient {
  readonly commands: CreateDealCommand[] = [];
  error: Error | undefined;
  delayMs = 0;

  async createDeal(command: CreateDealCommand): Promise<CreateDealResult> {
    this.commands.push(command);
    if (this.delayMs > 0) await new Promise((resolve) => setTimeout(resolve, this.delayMs));
    if (this.error) throw this.error;
    return { leadId: `lead-${this.commands.length}` };
  }
}

export interface TestContext {
  app: Express;
  env: Env;
  logger: Logger;
  directory: string;
  statePath: string;
  repository: AssignmentStateRepository;
  client: RecordingClient;
  service: LeadAssignmentService;
  cleanup(): Promise<void>;
}

export async function createTestContext(overrides: NodeJS.ProcessEnv = {}): Promise<TestContext> {
  const directory = await mkdtemp(join(tmpdir(), 'mundpay-crm-'));
  const statePath = join(directory, 'assignment-state.json');
  const env = parseEnv({
    NODE_ENV: 'test',
    PORT: '3000',
    CORS_ALLOWED_ORIGINS: 'https://mundpay.com',
    ASSIGNMENT_STATE_PATH: statePath,
    DATACRAZY_MOCK: 'true',
    RATE_LIMIT_WINDOW_MS: '60000',
    RATE_LIMIT_MAX_REQUESTS: '100',
    REQUEST_BODY_LIMIT: '20kb',
    LOG_LEVEL: 'silent',
    ...overrides,
  });
  const logger = createLogger('silent');
  const repository = new AssignmentStateRepository(statePath, logger);
  const client = new RecordingClient();
  const service = new LeadAssignmentService(repository, client, {
    alex: { attendantId: 'alex-attendant', stageId: 'alex-stage' },
    brenno: { attendantId: 'brenno-attendant', stageId: 'brenno-stage' },
  }, logger);
  const app = createApp({ env, logger, assignmentRepository: repository, leadAssignmentService: service });
  return {
    app, env, logger, directory, statePath, repository, client, service,
    cleanup: () => rm(directory, { recursive: true, force: true }),
  };
}
