import { z } from 'zod';

const singleLine = (value: string): string => value.trim().replace(/\s+/g, ' ');

export const bridgeContactSchema = z.object({
  submissionId: z.uuid(),
  name: z.string().transform(singleLine).pipe(z.string().min(2).max(120)),
  company: z.string().transform(singleLine).pipe(z.string().min(1).max(160)),
  email: z.string().trim().toLowerCase().pipe(z.email().max(254)),
  country: z.enum(['br', 'mx', 'co', 'cl', 'pe', 'ar', 'ec', 'cr', 'other']),
  volume: z.enum(['v1', 'v2', 'v3', 'v4']),
  message: z.string().trim().max(5_000).default(''),
  consent: z.literal(true),
  language: z.enum(['pt-BR', 'en', 'es']),
  website: z.string().max(200).default(''),
}).strict();

export type BridgeContact = z.infer<typeof bridgeContactSchema>;
