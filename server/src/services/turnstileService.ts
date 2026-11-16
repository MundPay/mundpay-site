import { z } from 'zod';
import { AppError } from '../utils/errors.js';

interface TurnstileConfiguration {
  secretKey: string;
  allowedHostnames: string[];
  timeoutMs: number;
}

const verificationSchema = z.object({
  success: z.boolean(),
  hostname: z.string().optional(),
  action: z.string().optional(),
  'error-codes': z.array(z.string()).optional(),
});

export class TurnstileService {
  constructor(
    private readonly configuration: TurnstileConfiguration,
    private readonly request: typeof fetch = fetch,
  ) {}

  async verify(token: string): Promise<void> {
    try {
      const response = await this.request('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret: this.configuration.secretKey, response: token }),
        signal: AbortSignal.timeout(this.configuration.timeoutMs),
      });
      if (!response.ok) throw new AppError('Verification unavailable', 503, 'TURNSTILE_UNAVAILABLE');

      const verification = verificationSchema.parse(await response.json());
      if (verification['error-codes']?.some((code) => [
        'missing-input-secret', 'invalid-input-secret', 'internal-error',
      ].includes(code))) {
        throw new AppError('Verification unavailable', 503, 'TURNSTILE_UNAVAILABLE');
      }
      if (
        !verification.success ||
        verification.action !== 'bridge_contact' ||
        !verification.hostname ||
        !this.configuration.allowedHostnames.includes(verification.hostname.toLowerCase())
      ) {
        throw new AppError('Verification failed. Please try again.', 403, 'TURNSTILE_REJECTED');
      }
    } catch (error) {
      if (error instanceof AppError) throw error;
      // Never expose or log the token, secret, or provider response.
      throw new AppError('Verification unavailable', 503, 'TURNSTILE_UNAVAILABLE');
    }
  }
}
