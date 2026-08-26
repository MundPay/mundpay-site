export class AppError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly code: string,
    readonly retryable = false,
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export class DataCrazyError extends Error {
  constructor(
    message: string,
    readonly kind: 'bad_request' | 'rate_limited' | 'server_error' | 'timeout' | 'invalid_response' | 'unavailable',
  ) {
    super(message);
    this.name = 'DataCrazyError';
  }
}

export function toPublicCrmError(error: unknown): AppError {
  if (error instanceof DataCrazyError) {
    if (error.kind === 'rate_limited' || error.kind === 'unavailable') {
      return new AppError('CRM temporarily unavailable', 503, 'CRM_UNAVAILABLE', true);
    }
    return new AppError('CRM request failed', 502, 'CRM_FAILURE');
  }
  return new AppError('CRM request failed', 502, 'CRM_FAILURE');
}
