type TurnstileOptions = {
  sitekey: string
  action: 'bridge_contact'
  language: string
  theme: 'light'
  size: 'flexible' | 'compact'
  appearance: 'interaction-only'
  'response-field': false
  'refresh-expired': 'auto'
  callback: (token: string) => void
  'expired-callback': () => void
  'error-callback': () => boolean
  'timeout-callback': () => void
}

export type TurnstileApi = {
  render: (container: HTMLElement, options: TurnstileOptions) => string
  remove: (widgetId: string) => void
}

type TurnstileWindow = Window & { turnstile?: TurnstileApi }

let scriptPromise: Promise<TurnstileApi> | undefined

export function loadBridgeTurnstile(): Promise<TurnstileApi> {
  const existingApi = (window as TurnstileWindow).turnstile
  if (existingApi) return Promise.resolve(existingApi)
  if (scriptPromise) return scriptPromise

  scriptPromise = new Promise<TurnstileApi>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    const timeout = window.setTimeout(fail, 10_000)

    function fail() {
      window.clearTimeout(timeout)
      script.onload = null
      script.onerror = null
      script.remove()
      reject(new Error('Turnstile could not be loaded'))
    }

    script.onerror = fail
    script.onload = () => {
      const api = (window as TurnstileWindow).turnstile
      if (!api) {
        fail()
        return
      }
      window.clearTimeout(timeout)
      script.onload = null
      script.onerror = null
      resolve(api)
    }
    document.head.appendChild(script)
  }).catch((error: unknown) => {
    scriptPromise = undefined
    throw error
  })

  return scriptPromise
}
