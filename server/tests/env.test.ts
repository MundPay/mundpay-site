import { describe, expect, it } from 'vitest';
import { parseEnv } from '../src/config/env.js';

describe('environment validation', () => {
  it('requires an explicit CRM mode', () => {
    expect(() => parseEnv({ NODE_ENV: 'production' })).toThrow(/DATACRAZY_MOCK/);
  });

  it('uses the production domains from the CORS config by default', () => {
    const env = parseEnv({ NODE_ENV: 'production', DATACRAZY_MOCK: 'true' });
    expect(env.corsAllowedOrigins).toEqual([
      'https://mundpay.com',
      'https://www.mundpay.com',
      'https://mundpay.com.br',
      'https://www.mundpay.com.br',
    ]);
  });

  it('adds environment origins without replacing configured origins', () => {
    const env = parseEnv({
      NODE_ENV: 'production',
      DATACRAZY_MOCK: 'true',
      CORS_ALLOWED_ORIGINS: 'http://localhost:5199,https://mundpay.com',
    });
    expect(env.corsAllowedOrigins).toEqual([
      'https://mundpay.com',
      'https://www.mundpay.com',
      'https://mundpay.com.br',
      'https://www.mundpay.com.br',
      'http://localhost:5199',
    ]);
  });

  it('forbids wildcard CORS in production', () => {
    expect(() => parseEnv({ NODE_ENV: 'production', CORS_ALLOWED_ORIGINS: '*', DATACRAZY_MOCK: 'true' })).toThrow();
  });

  it('requires CRM configuration in real mode', () => {
    expect(() => parseEnv({ NODE_ENV: 'production', CORS_ALLOWED_ORIGINS: 'https://mundpay.com', DATACRAZY_MOCK: 'false' })).toThrow(/DATACRAZY_API_URL/);
  });
});
