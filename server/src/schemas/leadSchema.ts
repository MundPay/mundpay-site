import { z } from 'zod';
import type { Lead } from '../types/lead.js';

const collapseSpaces = (value: string): string => value.trim().replace(/\s+/g, ' ');

export const leadPayloadSchema = z.object({
  name: z.string().transform(collapseSpaces).pipe(z.string().min(3).max(120).refine(
    (value) => value.split(' ').filter(Boolean).length >= 2,
    'Name must include first and last name',
  )),
  email: z.string().trim().toLowerCase().pipe(z.email().max(254)),
  whatsapp: z.string().trim().regex(/^\+[1-9]\d{7,14}$/, 'WhatsApp must use international E.164 format'),
  revenue: z.enum(['up-to-10k', '10k-to-50k', '50k-to-200k', '200k-to-1m', 'above-1m']),
  platform: z.enum(['hotmart', 'kiwify', 'perfectpay', 'cartpanda', 'digistore24', 'clickbank', 'other']),
  source: z.literal('lp'),
  language: z.enum(['pt-BR', 'en']),
  submittedAt: z.iso.datetime().optional(),
}).strict();

export function toLead(payload: z.infer<typeof leadPayloadSchema>, receivedAt = new Date()): Lead {
  return {
    name: payload.name,
    email: payload.email,
    whatsapp: payload.whatsapp,
    revenue: payload.revenue,
    platform: payload.platform,
    source: payload.source,
    language: payload.language,
    receivedAt: receivedAt.toISOString(),
  };
}
