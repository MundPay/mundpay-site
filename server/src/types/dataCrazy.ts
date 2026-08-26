import type { Lead, ManagerName } from './lead.js';

export interface CreateDealCommand {
  lead: Lead;
  manager: ManagerName;
  attendantId: string;
  stageId: string;
  requestId: string;
}

export interface CreateDealResult {
  leadId: string;
}

export interface DataCrazyClient {
  createDeal(command: CreateDealCommand): Promise<CreateDealResult>;
}
