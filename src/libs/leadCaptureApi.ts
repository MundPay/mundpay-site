export type LeadPayload = {
  name: string
  email: string
  whatsapp: string
  revenue: string
  platform: string
  source: 'lp'
  language: 'pt-BR' | 'en'
}

type LeadSuccessResponse = {
  success: true
  leadId: string
  requestId: string
}

type LeadErrorResponse = {
  error?: {
    message?: string
  }
  requestId?: string
}

export class LeadSubmissionError extends Error {
  readonly requestId?: string
  readonly status?: number

  constructor(message: string, options: { requestId?: string; status?: number } = {}) {
    super(message)
    this.name = 'LeadSubmissionError'
    this.requestId = options.requestId
    this.status = options.status
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function getRequestId(result: unknown) {
  if (!isRecord(result) || typeof result.requestId !== 'string') return undefined

  return result.requestId
}

function isLeadSuccessResponse(result: unknown): result is LeadSuccessResponse {
  return (
    isRecord(result) &&
    result.success === true &&
    typeof result.leadId === 'string' &&
    typeof result.requestId === 'string'
  )
}

function getApiErrorMessage(result: unknown) {
  if (!isRecord(result) || !isRecord(result.error)) return undefined

  return typeof result.error.message === 'string' ? result.error.message : undefined
}

export async function submitLead(payload: LeadPayload) {
  let response: Response

  try {
    response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
  } catch {
    throw new LeadSubmissionError('Lead API network request failed')
  }

  const result: unknown = await response.json().catch(() => null)
  const requestId = getRequestId(result)

  if (import.meta.env.DEV && requestId) {
    console.info('[lead-capture] Request ID:', requestId)
  }

  if (response.status !== 201) {
    const errorResult = result as LeadErrorResponse | null

    throw new LeadSubmissionError(
      getApiErrorMessage(errorResult) ?? `Lead API returned HTTP ${response.status}`,
      { requestId, status: response.status },
    )
  }

  if (!isLeadSuccessResponse(result)) {
    throw new LeadSubmissionError('Lead API returned an invalid success response', {
      requestId,
      status: response.status,
    })
  }

  return result
}
