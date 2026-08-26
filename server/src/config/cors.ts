export const corsOriginsByEnvironment = {
  development: [],
  test: [],
  production: [
    'https://mundpay.com',
    'https://www.mundpay.com',
    'https://mundpay.com.br',
    'https://www.mundpay.com.br',
  ],
} as const;

export type ApplicationEnvironment = keyof typeof corsOriginsByEnvironment;

export function getDefaultCorsOrigins(environment: ApplicationEnvironment): string[] {
  return [...corsOriginsByEnvironment[environment]];
}
