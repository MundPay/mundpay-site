export const managerNames = ['alex', 'brenno'] as const;
export type ManagerName = (typeof managerNames)[number];

export interface Lead {
  name: string;
  email: string;
  whatsapp: string;
  revenue: 'up-to-10k' | '10k-to-50k' | '50k-to-200k' | '200k-to-1m' | 'above-1m';
  platform: 'hotmart' | 'kiwify' | 'perfectpay' | 'cartpanda' | 'digistore24' | 'clickbank' | 'other';
  source: 'lp';
  language: 'pt-BR' | 'en';
  receivedAt: string;
}

export interface AssignmentTargetConfiguration {
  attendantId: string;
  stageId: string;
}
