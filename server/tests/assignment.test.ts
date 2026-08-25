import { readdir, readFile, writeFile } from 'node:fs/promises';
import { afterEach, describe, expect, it } from 'vitest';
import { DataCrazyError } from '../src/utils/errors.js';
import { createTestContext, type TestContext, validPayload } from './helpers.js';
import { leadPayloadSchema, toLead } from '../src/schemas/leadSchema.js';

let context: TestContext | undefined;
afterEach(async () => { await context?.cleanup(); context = undefined; });
const lead = toLead(leadPayloadSchema.parse(validPayload));

describe('round-robin assignment', () => {
  it('starts at Alex when state does not exist and alternates exactly', async () => {
    context = await createTestContext();
    await context.service.assign(lead, 'one');
    await context.service.assign(lead, 'two');
    await context.service.assign(lead, 'three');
    await context.service.assign(lead, 'four');
    expect(context.client.commands.map((command) => command.manager)).toEqual(['alex', 'brenno', 'alex', 'brenno']);
    expect(context.client.commands.map(({ attendantId, stageId }) => ({ attendantId, stageId }))).toEqual([
      { attendantId: 'alex-attendant', stageId: 'alex-stage' },
      { attendantId: 'brenno-attendant', stageId: 'brenno-stage' },
      { attendantId: 'alex-attendant', stageId: 'alex-stage' },
      { attendantId: 'brenno-attendant', stageId: 'brenno-stage' },
    ]);
  });

  it('serializes concurrent calls through the in-memory mutex', async () => {
    context = await createTestContext();
    context.client.delayMs = 5;
    const service = context.service;
    await Promise.all(Array.from({ length: 10 }, (_, index) => service.assign(lead, `request-${index}`)));
    expect(context.client.commands.map((command) => command.manager)).toEqual([
      'alex', 'brenno', 'alex', 'brenno', 'alex', 'brenno', 'alex', 'brenno', 'alex', 'brenno',
    ]);
  });

  it('recovers deterministically from corrupt state', async () => {
    context = await createTestContext();
    await writeFile(context.statePath, '{broken', 'utf8');
    expect(await context.repository.getNextManager()).toBe('alex');
  });

  it('uses atomic rename and leaves no temporary file', async () => {
    context = await createTestContext();
    await context.repository.saveNextManager('brenno');
    expect(JSON.parse(await readFile(context.statePath, 'utf8'))).toEqual({ nextManager: 'brenno' });
    expect((await readdir(context.directory)).filter((name) => name.endsWith('.tmp'))).toEqual([]);
  });

  it('does not advance the turn when CRM creation fails', async () => {
    context = await createTestContext();
    context.client.error = new DataCrazyError('failed', 'server_error');
    await expect(context.service.assign(lead, 'failed')).rejects.toMatchObject({ status: 502 });
    expect(await context.repository.getNextManager()).toBe('alex');
    context.client.error = undefined;
    await context.service.assign(lead, 'success');
    expect(context.client.commands.at(-1)?.manager).toBe('alex');
    expect(await context.repository.getNextManager()).toBe('brenno');
  });
});
