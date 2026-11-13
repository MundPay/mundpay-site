import type { RequestHandler } from 'express';
import { bridgeContactSchema } from '../schemas/bridgeContactSchema.js';
import type { BridgeContactService } from '../services/bridgeContactService.js';
import type { TurnstileService } from '../services/turnstileService.js';
import { AppError } from '../utils/errors.js';

export function createBridgeContactController(
  service?: BridgeContactService,
  turnstile?: TurnstileService,
): RequestHandler {
  return async (req, res) => {
    const { turnstileToken, ...contact } = bridgeContactSchema.parse(req.body);
    if (contact.website) {
      res.status(202).json({ success: true });
      return;
    }
    if (!service) throw new AppError('Contact service unavailable', 503, 'CONTACT_UNAVAILABLE');
    if (!turnstile) throw new AppError('Verification unavailable', 503, 'TURNSTILE_UNAVAILABLE');

    await turnstile.verify(turnstileToken);
    await service.send(contact, req.requestId);
    res.status(202).json({ success: true });
  };
}
