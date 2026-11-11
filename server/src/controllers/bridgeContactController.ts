import type { RequestHandler } from 'express';
import { bridgeContactSchema } from '../schemas/bridgeContactSchema.js';
import type { BridgeContactService } from '../services/bridgeContactService.js';
import { AppError } from '../utils/errors.js';

export function createBridgeContactController(service?: BridgeContactService): RequestHandler {
  return async (req, res) => {
    const contact = bridgeContactSchema.parse(req.body);
    if (contact.website) {
      res.status(202).json({ success: true });
      return;
    }
    if (!service) throw new AppError('Contact service unavailable', 503, 'CONTACT_UNAVAILABLE');

    await service.send(contact, req.requestId);
    res.status(202).json({ success: true });
  };
}
