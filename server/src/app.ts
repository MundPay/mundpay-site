import cors from 'cors';
import express, { type Express, type Request, type RequestHandler } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { pinoHttp } from 'pino-http';
import type { Logger } from 'pino';
import { createLeadsController } from './controllers/leadsController.js';
import type { Env } from './config/env.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { requestId } from './middleware/requestId.js';
import type { AssignmentStateRepository } from './repositories/assignmentStateRepository.js';
import type { LeadAssignmentService } from './services/leadAssignmentService.js';
import { AppError } from './utils/errors.js';

export interface AppDependencies {
  env: Env;
  logger: Logger;
  assignmentRepository: AssignmentStateRepository;
  leadAssignmentService: LeadAssignmentService;
}

export function createApp(dependencies: AppDependencies): Express {
  const { env, logger, assignmentRepository, leadAssignmentService } = dependencies;
  const app = express();
  app.disable('x-powered-by');
  app.set('trust proxy', 1);

  app.use(requestId);
  app.use(pinoHttp({
    logger,
    autoLogging: false,
    genReqId: (req) => (req as Request).requestId,
  }));
  app.use(helmet());
  app.use(cors({
    origin(origin, callback) {
      if (!origin || env.corsAllowedOrigins.includes(origin)) return callback(null, true);
      return callback(new AppError('Origin is not allowed', 403, 'CORS_FORBIDDEN'));
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    maxAge: 600,
  }));

  app.get('/health', statusController('healthy', assignmentRepository, env));
  app.get('/ready', statusController('ready', assignmentRepository, env));

  const leadRateLimiter = rateLimit({
    windowMs: env.RATE_LIMIT_WINDOW_MS,
    limit: env.RATE_LIMIT_MAX_REQUESTS,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    handler(req, res) {
      void req;
      res.status(429).json({
        success: false,
        error: { code: 'RATE_LIMITED', message: 'Too many requests' },
      });
    },
  });
  app.post(
    '/api/leads',
    leadRateLimiter,
    requireJson,
    express.json({ limit: env.REQUEST_BODY_LIMIT, strict: true }),
    createLeadsController(leadAssignmentService),
  );

  app.use(notFoundHandler);
  app.use(errorHandler);
  return app;
}

const requireJson: RequestHandler = (req, _res, next) => {
  if (!req.is('application/json')) {
    next(new AppError('Content-Type must be application/json', 415, 'UNSUPPORTED_MEDIA_TYPE'));
    return;
  }
  next();
};

function statusController(
  state: 'healthy' | 'ready',
  repository: AssignmentStateRepository,
  env: Env,
): RequestHandler {
  return async (req, res) => {
    void req;
    try {
      await repository.ensureAccessible();
      res.json({
        status: state,
        persistence: 'accessible',
        crmMode: env.DATACRAZY_MOCK ? 'mock' : 'real',
      });
    } catch {
      res.status(503).json({
        status: 'unavailable',
        persistence: 'inaccessible',
      });
    }
  };
}
