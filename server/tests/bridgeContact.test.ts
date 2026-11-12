import { createServer, type Server } from 'node:http';
import type { AddressInfo } from 'node:net';
import request from 'supertest';
import { Resend } from 'resend';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { createApp } from '../src/app.js';
import { BridgeContactService } from '../src/services/bridgeContactService.js';
import { TurnstileService } from '../src/services/turnstileService.js';
import { createTestContext, type TestContext, validPayload } from './helpers.js';

const contact = {
  submissionId: '2f84b8c4-68f1-4ac2-9850-726f73e389aa',
  turnstileToken: 'test-token',
  name: 'Pessoa Teste',
  company: 'Empresa Teste',
  email: ' CONTACT@EXAMPLE.INVALID ',
  country: 'br',
  volume: 'v1',
  message: '<script>alert("test")</script>',
  consent: true,
  language: 'es',
  website: '',
} as const;

let context: TestContext;
let provider: Server;
let providerStatus: number;
let providerBody: unknown;
let latency: number;
let received: { key: string | undefined; body: Record<string, unknown> }[];
let verificationBody: unknown;
let verificationStatus: number;
let verificationLatency: number;
let verified: Record<string, unknown>[];
let mailService: BridgeContactService;

beforeEach(async () => {
  providerStatus = 200;
  providerBody = { id: 'resend-test-id' };
  latency = 0;
  received = [];
  verified = [];
  verificationBody = { success: true, hostname: 'mundpay.com', action: 'bridge_contact' };
  verificationStatus = 200;
  verificationLatency = 0;
  provider = createServer((req, res) => {
    let body = '';
    req.setEncoding('utf8');
    req.on('data', (chunk: string) => { body += chunk; });
    req.on('end', () => {
      if (req.url === '/siteverify') {
        verified.push(JSON.parse(body) as Record<string, unknown>);
        setTimeout(() => {
          if (res.destroyed) return;
          res.writeHead(verificationStatus, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(verificationBody));
        }, verificationLatency).unref();
        return;
      }
      received.push({
        key: req.headers['idempotency-key'] as string | undefined,
        body: JSON.parse(body) as Record<string, unknown>,
      });
      setTimeout(() => {
        if (res.destroyed) return;
        res.writeHead(providerStatus, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(providerBody));
      }, latency).unref();
    });
  });
  await new Promise<void>((resolve) => { provider.listen(0, '127.0.0.1', resolve); });
  const address = provider.address() as AddressInfo;
  context = await createTestContext({ RESEND_TIMEOUT_MS: '1000', RATE_LIMIT_MAX_REQUESTS: '100', TURNSTILE_TIMEOUT_MS: '1000' });
  const client = new Resend('re_test_local', { baseUrl: `http://127.0.0.1:${address.port}` });
  const service = new BridgeContactService({
    apiKey: 're_test_local',
    from: 'Mundpay <bridge@example.invalid>',
    to: 'team@example.invalid',
    timeoutMs: context.env.RESEND_TIMEOUT_MS,
  }, context.logger, client);
  mailService = service;
  const turnstile = new TurnstileService({
    secretKey: 'test-secret', allowedHostnames: ['mundpay.com'], timeoutMs: context.env.TURNSTILE_TIMEOUT_MS,
  }, (_url, options) => fetch(`http://127.0.0.1:${address.port}/siteverify`, options));
  context.app = createApp({
    env: context.env,
    logger: context.logger,
    assignmentRepository: context.repository,
    leadAssignmentService: context.service,
    bridgeContactService: service,
    turnstileService: turnstile,
  });
});

afterEach(async () => {
  provider.closeAllConnections();
  await new Promise<void>((resolve, reject) => {
    provider.close((error) => { if (error) reject(error); else resolve(); });
  });
  await context.cleanup();
});

describe('Bridge contact via Resend HTTP', () => {
  it('sends to the configured team, escapes content, and preserves the idempotency key on retry', async () => {
    for (let attempt = 0; attempt < 2; attempt += 1) {
      const response = await request(context.app).post('/api/bridge/contact').send({ ...contact, turnstileToken: `test-token-${attempt}` });
      expect(response.status).toBe(202);
      expect(response.body).toEqual({ success: true });
    }
    expect(received).toHaveLength(2);
    expect(received[0]).toEqual(received[1]);
    expect(received[0]?.key).toBe(`bridge-contact/${contact.submissionId}`);
    expect(received[0]?.body).toMatchObject({
      from: 'Mundpay <bridge@example.invalid>',
      to: ['team@example.invalid'],
      reply_to: 'contact@example.invalid',
    });
    expect(received[0]?.body.html).toContain('&lt;script&gt;');
    expect(received[0]?.body.html).not.toContain('<script>');
    expect(received[0]?.body.text).toContain('Idioma do formulário: es');
    expect(verified).toEqual([
      { secret: 'test-secret', response: 'test-token-0' },
      { secret: 'test-secret', response: 'test-token-1' },
    ]);
    expect(JSON.stringify(received)).not.toContain('test-token');
    expect(context.client.commands).toHaveLength(0);
  });

  it.each([
    { consent: false }, { country: 'unknown' }, { language: 'fr' },
    { to: 'other@example.invalid' }, { message: 'x'.repeat(5_001) },
    { turnstileToken: undefined }, { turnstileToken: '' }, { turnstileToken: 'x'.repeat(2049) },
  ])('rejects invalid or client-controlled routing fields', async (invalid) => {
    expect((await request(context.app).post('/api/bridge/contact').send({ ...contact, ...invalid })).status).toBe(422);
    expect(received).toHaveLength(0);
    expect(verified).toHaveLength(0);
  });

  it('discards the honeypot without calling the provider', async () => {
    const response = await request(context.app).post('/api/bridge/contact').send({ ...contact, website: 'spam' });
    expect(response.status).toBe(202);
    expect(received).toHaveLength(0);
    expect(verified).toHaveLength(0);
  });

  it.each([
    { success: false, 'error-codes': ['invalid-input-response'] },
    { success: false, 'error-codes': ['timeout-or-duplicate'] },
    { success: true, hostname: 'evil.invalid', action: 'bridge_contact' },
    { success: true, hostname: 'mundpay.com.evil.invalid', action: 'bridge_contact' },
    { success: true, hostname: 'mundpay.com', action: 'other_form' },
    { success: true },
  ])('rejects invalid verification, hostname or action without sending mail: %j', async (body) => {
    verificationBody = body;
    const response = await request(context.app).post('/api/bridge/contact').send(contact);
    expect(response.status).toBe(403);
    expect(response.body).toMatchObject({ error: { code: 'TURNSTILE_REJECTED' } });
    expect(received).toHaveLength(0);
  });

  it.each([
    { success: false, 'error-codes': ['invalid-input-secret'] },
    { success: false, 'error-codes': ['internal-error'] },
    { success: 'not-a-boolean', secret: 'private-provider-details' },
  ])('handles verification configuration and malformed responses without leaking details: %j', async (body) => {
    verificationBody = body;
    const response = await request(context.app).post('/api/bridge/contact').send(contact);
    expect(response.status).toBe(503);
    expect(response.body).toMatchObject({ error: { code: 'TURNSTILE_UNAVAILABLE' } });
    expect(JSON.stringify(response.body)).not.toMatch(/test-secret|test-token|private-provider/);
    expect(received).toHaveLength(0);
  });

  it('does not send email when verification responds with an HTTP error', async () => {
    verificationStatus = 503;
    expect((await request(context.app).post('/api/bridge/contact').send(contact)).status).toBe(503);
    expect(received).toHaveLength(0);
  });

  it('aborts a slow verification without sending email', async () => {
    verificationLatency = 1500;
    expect((await request(context.app).post('/api/bridge/contact').send(contact)).status).toBe(503);
    expect(verified).toHaveLength(1);
    expect(received).toHaveLength(0);
  });

  it('does not bypass verification when Turnstile is unconfigured but email is configured', async () => {
    const unconfigured = createApp({
      env: context.env,
      logger: context.logger,
      assignmentRepository: context.repository,
      leadAssignmentService: context.service,
      bridgeContactService: mailService,
    });
    const response = await request(unconfigured).post('/api/bridge/contact').send(contact);
    expect(response.status).toBe(503);
    expect(response.body).toMatchObject({ error: { code: 'TURNSTILE_UNAVAILABLE' } });
    expect(verified).toHaveLength(0);
    expect(received).toHaveLength(0);
  });

  it('reports an unavailable endpoint when the optional mail service is not configured', async () => {
    const unconfigured = createApp({
      env: context.env,
      logger: context.logger,
      assignmentRepository: context.repository,
      leadAssignmentService: context.service,
    });
    const response = await request(unconfigured).post('/api/bridge/contact').send(contact);
    expect(response.status).toBe(503);
    expect(received).toHaveLength(0);
  });

  it('rejects provider errors and malformed success responses without exposing provider messages', async () => {
    providerStatus = 403;
    providerBody = { name: 'validation_error', message: 'private provider details' };
    const rejected = await request(context.app).post('/api/bridge/contact').send(contact);
    expect(rejected.status).toBe(502);
    expect(JSON.stringify(rejected.body)).not.toContain('private');
    providerStatus = 200;
    providerBody = {};
    expect((await request(context.app).post('/api/bridge/contact').send(contact)).status).toBe(502);
  });

  it('aborts a slow provider and returns a timeout instead of success', async () => {
    latency = 1500;
    const response = await request(context.app).post('/api/bridge/contact').send(contact);
    expect(response.status).toBe(504);
    expect(received).toHaveLength(1);
  });

  it('limits contact submissions independently from the CRM route', async () => {
    context.env.RATE_LIMIT_MAX_REQUESTS = 1;
    const limited = createApp({
      env: context.env,
      logger: context.logger,
      assignmentRepository: context.repository,
      leadAssignmentService: context.service,
    });
    expect((await request(limited).post('/api/bridge/contact').send(contact)).status).toBe(503);
    expect((await request(limited).post('/api/bridge/contact').send(contact)).status).toBe(429);
    expect((await request(limited).post('/api/leads').send(validPayload)).status).toBe(201);
  });
});
