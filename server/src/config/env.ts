import { z } from 'zod';
import { getDefaultCorsOrigins } from './cors.js';

const booleanString = z.enum(['true', 'false']).transform((value) => value === 'true');
const positiveInteger = z.coerce.number().int().positive();

const baseSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().min(1).max(65535).default(3000),
  CORS_ALLOWED_ORIGINS: z.string().min(1).optional(),
  ASSIGNMENT_STATE_PATH: z.string().min(1).default('./data/assignment-state.json'),
  DATACRAZY_API_URL: z.string().default(''),
  DATACRAZY_API_TOKEN: z.string().default(''),
  DATACRAZY_ALEX_ATTENDANT_ID: z.string().default(''),
  DATACRAZY_ALEX_STAGE_ID: z.string().default(''),
  DATACRAZY_BRENNO_ATTENDANT_ID: z.string().default(''),
  DATACRAZY_BRENNO_STAGE_ID: z.string().default(''),
  DATACRAZY_TIMEOUT_MS: positiveInteger.default(10_000),
  DATACRAZY_MOCK: booleanString.default(true),
  RATE_LIMIT_WINDOW_MS: positiveInteger.default(60_000),
  RATE_LIMIT_MAX_REQUESTS: positiveInteger.default(10),
  REQUEST_BODY_LIMIT: z.string().regex(/^\d+(?:b|kb|mb)$/i, 'Invalid body-size limit').default('20kb'),
  LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace', 'silent']).default('info'),
});

export type Env = z.infer<typeof baseSchema> & { corsAllowedOrigins: string[] };

export function parseEnv(input: NodeJS.ProcessEnv = process.env): Env {
  const parsed = baseSchema.parse(input);
  const additionalCorsOrigins = parsed.CORS_ALLOWED_ORIGINS
    ? parsed.CORS_ALLOWED_ORIGINS.split(',').map((item) => item.trim()).filter(Boolean)
    : [];
  const corsAllowedOrigins = [
    ...new Set([...getDefaultCorsOrigins(parsed.NODE_ENV), ...additionalCorsOrigins]),
  ];

  if (parsed.NODE_ENV === 'production' && corsAllowedOrigins.includes('*')) {
    throw new Error('CORS wildcard is forbidden in production');
  }

  if (!parsed.DATACRAZY_MOCK) {
    const required = [
      'DATACRAZY_API_URL', 'DATACRAZY_API_TOKEN', 'DATACRAZY_ALEX_ATTENDANT_ID',
      'DATACRAZY_ALEX_STAGE_ID', 'DATACRAZY_BRENNO_ATTENDANT_ID',
      'DATACRAZY_BRENNO_STAGE_ID',
    ] as const;
    const missing = required.filter((key) => parsed[key].trim() === '');
    if (missing.length > 0) throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
    const apiUrl = new URL(parsed.DATACRAZY_API_URL);
    if (!['http:', 'https:'].includes(apiUrl.protocol)) throw new Error('DATACRAZY_API_URL must use HTTP or HTTPS');
  }

  return { ...parsed, corsAllowedOrigins };
}
