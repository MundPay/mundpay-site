import type { Logger } from 'pino';
import { Resend } from 'resend';
import type { BridgeContact } from '../schemas/bridgeContactSchema.js';
import { buildBridgeContactEmail } from '../templates/bridgeContactEmail.js';
import { AppError } from '../utils/errors.js';

interface BridgeContactConfiguration {
  apiKey: string;
  from: string;
  to: string;
  timeoutMs: number;
}

export class BridgeContactService {
  constructor(
    private readonly configuration: BridgeContactConfiguration,
    private readonly logger: Logger,
    private readonly resend = new Resend(configuration.apiKey),
  ) {}

  async send(contact: BridgeContact, requestId: string): Promise<void> {
    const signal = AbortSignal.timeout(this.configuration.timeoutMs);

    try {
      const { data, error } = await this.resend.emails.send({
        from: this.configuration.from,
        to: [this.configuration.to],
        replyTo: contact.email,
        ...buildBridgeContactEmail(contact),
        tags: [{ name: 'source', value: 'bridge' }],
      }, {
        idempotencyKey: `bridge-contact/${contact.submissionId}`,
        signal,
      });

      if (signal.aborted) throw new AppError('Email request timed out', 504, 'CONTACT_TIMEOUT');
      if (error || !data?.id) {
        this.logger.warn({ event: 'bridge_contact_rejected', requestId, providerStatus: error?.statusCode }, 'Bridge email rejected');
        throw new AppError('Email could not be sent', 502, 'CONTACT_SEND_FAILED');
      }

      this.logger.info({ event: 'bridge_contact_sent', requestId, emailId: data.id }, 'Bridge email accepted');
    } catch (error) {
      if (error instanceof AppError) throw error;
      this.logger.warn({ event: 'bridge_contact_unavailable', requestId }, 'Bridge email unavailable');
      if (signal.aborted) throw new AppError('Email request timed out', 504, 'CONTACT_TIMEOUT');
      throw new AppError('Email service unavailable', 503, 'CONTACT_UNAVAILABLE');
    }
  }
}
