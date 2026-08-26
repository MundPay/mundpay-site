import { access, mkdir, readFile, rename, unlink, writeFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import { dirname } from 'node:path';
import { randomUUID } from 'node:crypto';
import { z } from 'zod';
import type { Logger } from 'pino';
import type { ManagerName } from '../types/lead.js';

const stateSchema = z.object({ nextManager: z.enum(['alex', 'brenno']) }).strict();

export class AssignmentStateRepository {
  constructor(
    private readonly statePath: string,
    private readonly logger: Logger,
  ) {}

  async ensureAccessible(): Promise<void> {
    const directory = dirname(this.statePath);
    await mkdir(directory, { recursive: true });
    await access(directory, constants.R_OK | constants.W_OK);
  }

  async getNextManager(): Promise<ManagerName> {
    await this.ensureAccessible();
    try {
      const content = await readFile(this.statePath, 'utf8');
      const parsed = stateSchema.safeParse(JSON.parse(content) as unknown);
      if (parsed.success) return parsed.data.nextManager;
      this.logger.warn({ event: 'assignment_state_invalid' }, 'Assignment state is invalid; resetting to Alex');
    } catch (error) {
      if (isMissingFile(error)) return 'alex';
      if (error instanceof SyntaxError) {
        this.logger.warn({ event: 'assignment_state_corrupt' }, 'Assignment state is corrupt; resetting to Alex');
      } else {
        throw error;
      }
    }
    return 'alex';
  }

  async saveNextManager(nextManager: ManagerName): Promise<void> {
    await this.ensureAccessible();
    const temporaryPath = `${this.statePath}.${process.pid}.${randomUUID()}.tmp`;
    const content = `${JSON.stringify({ nextManager }, null, 2)}\n`;
    try {
      await writeFile(temporaryPath, content, { encoding: 'utf8', mode: 0o600, flag: 'wx' });
      await rename(temporaryPath, this.statePath);
    } catch (error) {
      await unlink(temporaryPath).catch(() => undefined);
      throw error;
    }
  }
}

function isMissingFile(error: unknown): boolean {
  return error instanceof Error && 'code' in error && error.code === 'ENOENT';
}
