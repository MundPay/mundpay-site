import type { Logger } from 'pino';
import type { AssignmentStateRepository } from '../repositories/assignmentStateRepository.js';
import type { DataCrazyClient, CreateDealResult } from '../types/dataCrazy.js';
import type { AssignmentTargetConfiguration, Lead, ManagerName } from '../types/lead.js';
import { AppError, toPublicCrmError } from '../utils/errors.js';

export interface ManagerConfigurations {
  alex: AssignmentTargetConfiguration;
  brenno: AssignmentTargetConfiguration;
}

export class LeadAssignmentService {
  private queue: Promise<void> = Promise.resolve();

  constructor(
    private readonly repository: AssignmentStateRepository,
    private readonly dataCrazyClient: DataCrazyClient,
    private readonly configuration: ManagerConfigurations,
    private readonly logger: Logger,
  ) {}

  assign(lead: Lead, requestId: string): Promise<CreateDealResult> {
    return this.withMutex(async () => {
      const manager = await this.repository.getNextManager();
      const managerConfiguration = this.configuration[manager];
      let result: CreateDealResult;
      try {
        result = await this.dataCrazyClient.createDeal({
          lead,
          manager,
          attendantId: managerConfiguration.attendantId,
          stageId: managerConfiguration.stageId,
          requestId,
        });
      } catch (error) {
        this.logger.error({ event: 'crm_assignment_failed', manager, requestId, err: error }, 'CRM assignment failed');
        throw toPublicCrmError(error);
      }
      try {
        await this.repository.saveNextManager(otherManager(manager));
      } catch (error) {
        this.logger.error({ event: 'assignment_state_write_failed', manager, requestId, err: error }, 'Assignment state write failed after CRM success');
        throw new AppError('Internal server error', 500, 'INTERNAL_ERROR');
      }
      return result;
    });
  }

  private async withMutex<T>(operation: () => Promise<T>): Promise<T> {
    const previous = this.queue;
    let release: () => void = () => undefined;
    this.queue = new Promise<void>((resolve) => { release = resolve; });
    await previous;
    try {
      return await operation();
    } finally {
      release();
    }
  }
}

function otherManager(manager: ManagerName): ManagerName {
  return manager === 'alex' ? 'brenno' : 'alex';
}
