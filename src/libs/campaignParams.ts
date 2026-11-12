/**
 * Parâmetros de campanha (UTM, fbclid, gclid) que o visitante trouxe ao chegar no site.
 *
 * Ficam guardados na sessão para sobreviver à navegação interna e são repassados nos links
 * de cadastro, para que o pixel do gateway saiba de qual campanha veio a conta.
 */

const CAMPAIGN_PARAM_NAMES = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'fbclid',
  'gclid',
] as const

const STORAGE_KEY = 'mundpay:campaign-params'

function readStoredCampaignParams(): URLSearchParams {
  try {
    return new URLSearchParams(sessionStorage.getItem(STORAGE_KEY) ?? '')
  } catch {
    return new URLSearchParams()
  }
}

/**
 * Guarda os parâmetros de campanha da URL de chegada. Uma chegada nova com campanha
 * substitui a anterior; uma chegada sem campanha mantém o que já estava guardado.
 */
export function captureCampaignParams(): void {
  const landingParams = new URLSearchParams(window.location.search)
  const campaignParams = new URLSearchParams()

  CAMPAIGN_PARAM_NAMES.forEach((name) => {
    const value = landingParams.get(name)

    if (value) campaignParams.set(name, value)
  })

  if (!campaignParams.toString()) return

  try {
    sessionStorage.setItem(STORAGE_KEY, campaignParams.toString())
  } catch {
    // sem storage os parâmetros valem só para a página de chegada
  }
}

/** Acrescenta ao link os parâmetros de campanha guardados, sem sobrescrever os que ele já tem. */
export function withCampaignParams(url: string): string {
  const campaignParams = readStoredCampaignParams()

  if (!campaignParams.toString()) return url

  const target = new URL(url)

  campaignParams.forEach((value, name) => {
    if (!target.searchParams.has(name)) target.searchParams.set(name, value)
  })

  return target.toString()
}
