import { createServer } from 'node:http';
import { createApp } from './app.js';
import { parseEnv } from './config/env.js';
import { AssignmentStateRepository } from './repositories/assignmentStateRepository.js';
import { MockDataCrazyClient, RealDataCrazyClient } from './services/dataCrazyService.js';
import { LeadAssignmentService } from './services/leadAssignmentService.js';
import { createLogger } from './utils/logger.js';

const env = parseEnv();
const logger = createLogger(env.LOG_LEVEL);
const repository = new AssignmentStateRepository(env.ASSIGNMENT_STATE_PATH, logger);
const dataCrazyClient = env.DATACRAZY_MOCK
  ? new MockDataCrazyClient()
  : new RealDataCrazyClient({
      apiUrl: env.DATACRAZY_API_URL,
      apiToken: env.DATACRAZY_API_TOKEN,
      timeoutMs: env.DATACRAZY_TIMEOUT_MS,
    }, logger);
const service = new LeadAssignmentService(repository, dataCrazyClient, {
  alex: { attendantId: env.DATACRAZY_ALEX_ATTENDANT_ID, stageId: env.DATACRAZY_ALEX_STAGE_ID },
  brenno: { attendantId: env.DATACRAZY_BRENNO_ATTENDANT_ID, stageId: env.DATACRAZY_BRENNO_STAGE_ID },
}, logger);
const app = createApp({ env, logger, assignmentRepository: repository, leadAssignmentService: service });
const server = createServer(app);

server.requestTimeout = env.DATACRAZY_TIMEOUT_MS + 5_000;
server.headersTimeout = Math.min(60_000, server.requestTimeout + 1_000);
server.keepAliveTimeout = 5_000;

server.listen(env.PORT, () => {
  logger.info({ event: 'server_started', port: env.PORT, crmMode: env.DATACRAZY_MOCK ? 'mock' : 'real' }, 'Server started');
});

let shuttingDown = false;
function shutdown(signal: string): void {
  if (shuttingDown) return;
  shuttingDown = true;
  logger.info({ event: 'shutdown_started', signal }, 'Graceful shutdown started');
  server.close((error) => {
    if (error) {
      logger.error({ err: error }, 'Shutdown failed');
      process.exitCode = 1;
    }
  });
  setTimeout(() => {
    logger.error({ event: 'shutdown_timeout' }, 'Shutdown timed out');
    process.exit(1);
  }, 10_000).unref();
}

process.on('SIGTERM', () => { shutdown('SIGTERM'); });
process.on('SIGINT', () => { shutdown('SIGINT'); });
process.on('uncaughtException', (error) => {
  logger.fatal({ err: error }, 'Uncaught exception');
  shutdown('uncaughtException');
});
process.on('unhandledRejection', (error) => {
  logger.fatal({ err: error }, 'Unhandled rejection');
  shutdown('unhandledRejection');
});
