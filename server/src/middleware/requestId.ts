import { randomUUID } from 'node:crypto';
import type { NextFunction, Request, Response } from 'express';

const requestIdPattern = /^[A-Za-z0-9._:-]{1,100}$/;

export function requestId(req: Request, _res: Response, next: NextFunction): void {
  void _res;
  const supplied = req.header('x-request-id');
  const id = supplied && requestIdPattern.test(supplied) ? supplied : randomUUID();
  req.requestId = id;
  next();
}

declare global {
  // Express exposes this namespace specifically for request augmentation.
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      requestId: string;
    }
  }
}
