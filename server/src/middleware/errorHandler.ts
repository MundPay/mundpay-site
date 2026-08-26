import type { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { AppError } from '../utils/errors.js';

export const errorHandler: ErrorRequestHandler = (error, req, res, _next) => {
  void req;
  void _next;
  if (error instanceof ZodError) {
    res.status(422).json({
      success: false,
      error: { code: 'VALIDATION_ERROR', message: 'Invalid request payload', issues: error.issues.map((issue) => ({ path: issue.path.join('.'), message: issue.message })) },
    });
    return;
  }

  if (error instanceof SyntaxError && 'status' in error && error.status === 400) {
    res.status(400).json({ success: false, error: { code: 'INVALID_JSON', message: 'Malformed JSON body' } });
    return;
  }

  if (error instanceof Error && 'status' in error && error.status === 413) {
    res.status(413).json({ success: false, error: { code: 'PAYLOAD_TOO_LARGE', message: 'Request body is too large' } });
    return;
  }

  const appError = error instanceof AppError
    ? error
    : new AppError('Internal server error', 500, 'INTERNAL_ERROR');
  res.status(appError.status).json({
    success: false,
    error: { code: appError.code, message: appError.message },
  });
};
