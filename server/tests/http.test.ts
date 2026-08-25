import request from 'supertest';
import { afterEach, describe, expect, it } from 'vitest';
import { DataCrazyError } from '../src/utils/errors.js';
import { createTestContext, type TestContext, validPayload } from './helpers.js';

let context: TestContext | undefined;
afterEach(async () => { await context?.cleanup(); context = undefined; });

describe('HTTP API', () => {
  it('reports health and readiness without contacting the CRM', async () => {
    context = await createTestContext();
    const health = await request(context.app).get('/health');
    const ready = await request(context.app).get('/ready');
    expect(health.status).toBe(200);
    expect(health.body).toMatchObject({ status: 'healthy', persistence: 'accessible', crmMode: 'mock' });
    expect(ready.status).toBe(200);
    expect(ready.body).toMatchObject({ status: 'ready', persistence: 'accessible' });
    expect(context.client.commands).toHaveLength(0);
  });

  it('creates a valid lead, normalizes it, and ignores submittedAt as official time', async () => {
    context = await createTestContext();
    const response = await request(context.app).post('/api/leads').send(validPayload);
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({ success: true, leadId: 'lead-1' });
    expect(response.body).toEqual({ success: true, leadId: 'lead-1' });
    expect(context.client.commands[0]?.lead.email).toBe('maria@example.com');
    expect(context.client.commands[0]?.lead.receivedAt).not.toBe(validPayload.submittedAt);
    expect(response.headers['x-powered-by']).toBeUndefined();
  });

  it.each([
    ['name without surname', { name: 'Maria' }],
    ['invalid email', { email: 'invalid' }],
    ['WhatsApp without country code', { whatsapp: '11999999999' }],
    ['invalid revenue', { revenue: 'unknown' }],
    ['invalid platform', { platform: 'unknown' }],
  ])('rejects %s', async (_label, invalidPart) => {
    context = await createTestContext();
    const response = await request(context.app).post('/api/leads').send({ ...validPayload, ...invalidPart });
    expect(response.status).toBe(422);
    expect(response.body).toMatchObject({ error: { code: 'VALIDATION_ERROR' } });
  });

  it('rejects unknown fields', async () => {
    context = await createTestContext();
    const response = await request(context.app).post('/api/leads').send({ ...validPayload, managerId: 'attacker-choice' });
    expect(response.status).toBe(422);
  });

  it('rejects unsupported content types', async () => {
    context = await createTestContext();
    const response = await request(context.app).post('/api/leads').type('form').send({ name: 'Maria Silva' });
    expect(response.status).toBe(415);
    expect(response.body).toMatchObject({ error: { code: 'UNSUPPORTED_MEDIA_TYPE' } });
  });

  it('rejects JSON bodies above the configured limit', async () => {
    context = await createTestContext({ REQUEST_BODY_LIMIT: '1kb' });
    const response = await request(context.app).post('/api/leads').send({ ...validPayload, name: `Maria ${'S'.repeat(2_000)}` });
    expect(response.status).toBe(413);
    expect(response.body).toMatchObject({ error: { code: 'PAYLOAD_TOO_LARGE' } });
  });

  it.each([
    ['bad_request', 502],
    ['rate_limited', 503],
    ['server_error', 502],
    ['timeout', 502],
    ['invalid_response', 502],
  ] as const)('maps CRM %s without leaking internals', async (kind, status) => {
    context = await createTestContext();
    context.client.error = new DataCrazyError('secret vendor response and token', kind);
    const response = await request(context.app).post('/api/leads').send(validPayload);
    expect(response.status).toBe(status);
    expect(JSON.stringify(response.body)).not.toContain('secret');
    expect(JSON.stringify(response.body)).not.toContain('token');
  });

  it('enforces the lead-specific rate limit', async () => {
    context = await createTestContext({ RATE_LIMIT_MAX_REQUESTS: '1' });
    expect((await request(context.app).post('/api/leads').send(validPayload)).status).toBe(201);
    const response = await request(context.app).post('/api/leads').send(validPayload);
    expect(response.status).toBe(429);
    expect(response.body).toMatchObject({ error: { code: 'RATE_LIMITED' } });
  });

  it('allows configured CORS origins and rejects unknown origins', async () => {
    context = await createTestContext();
    const allowed = await request(context.app).options('/api/leads').set('Origin', 'https://mundpay.com');
    expect(allowed.status).toBe(204);
    expect(allowed.headers['access-control-allow-origin']).toBe('https://mundpay.com');
    const rejected = await request(context.app).options('/api/leads').set('Origin', 'https://evil.example');
    expect(rejected.status).toBe(403);
    expect(rejected.body).toMatchObject({ error: { code: 'CORS_FORBIDDEN' } });
  });

  it('returns JSON for unknown routes', async () => {
    context = await createTestContext();
    const response = await request(context.app).get('/missing');
    expect(response.status).toBe(404);
    expect(response.type).toContain('json');
    expect(response.body).toMatchObject({ error: { code: 'NOT_FOUND' } });
  });
});
