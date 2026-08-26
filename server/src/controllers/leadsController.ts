import type { RequestHandler } from 'express';
import { leadPayloadSchema, toLead } from '../schemas/leadSchema.js';
import type { LeadAssignmentService } from '../services/leadAssignmentService.js';

export function createLeadsController(service: LeadAssignmentService): RequestHandler {
  return async (req, res) => {
    const payload = leadPayloadSchema.parse(req.body);
    const result = await service.assign(toLead(payload), req.requestId);
    res.status(201).json({ success: true, leadId: result.leadId });
  };
}
