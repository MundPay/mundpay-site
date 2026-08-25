import pino, { type Logger } from 'pino';

export function createLogger(level = 'info'): Logger {
  return pino({
    level,
    redact: {
      paths: [
        'req.headers.authorization', 'req.headers.cookie', 'req.body', 'res.body', '*.email', '*.whatsapp',
        '*.name', '*.token', '*.apiToken', 'command.lead',
      ],
      censor: '[REDACTED]',
    },
  });
}
