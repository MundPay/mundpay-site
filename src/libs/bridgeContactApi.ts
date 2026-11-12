import type { BridgeLocale } from '../pages/bridge/bridgeRouting'

export type BridgeContactPayload = {
  name: string
  company: string
  email: string
  country: string
  volume: string
  message: string
  consent: boolean
  language: BridgeLocale
  website: string
}

export class BridgeContactError extends Error {
  readonly status: number | undefined

  constructor(status?: number) {
    super('Bridge contact submission failed')
    this.name = 'BridgeContactError'
    this.status = status
  }
}

const apiBaseUrl = (import.meta.env.VITE_API_URL ?? '').replace(/\/$/, '')

export function createBridgeSubmissionId(): string {
  if (typeof crypto.randomUUID === 'function') return crypto.randomUUID()

  const bytes = crypto.getRandomValues(new Uint8Array(16))
  bytes[6] = (bytes[6] & 0x0f) | 0x40
  bytes[8] = (bytes[8] & 0x3f) | 0x80
  const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0'))
  return [
    hex.slice(0, 4).join(''),
    hex.slice(4, 6).join(''),
    hex.slice(6, 8).join(''),
    hex.slice(8, 10).join(''),
    hex.slice(10).join(''),
  ].join('-')
}

export async function submitBridgeContact(
  payload: BridgeContactPayload & { submissionId: string; turnstileToken: string },
): Promise<void> {
  let response: Response
  try {
    response = await fetch(`${apiBaseUrl}/api/bridge/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(35_000),
    })
  } catch {
    throw new BridgeContactError()
  }

  const result: unknown = await response.json().catch(() => null)
  if (
    response.status !== 202 ||
    typeof result !== 'object' ||
    result === null ||
    !('success' in result) ||
    result.success !== true
  ) {
    throw new BridgeContactError(response.status)
  }
}
