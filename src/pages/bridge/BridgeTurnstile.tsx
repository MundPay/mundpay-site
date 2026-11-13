import { useEffect, useRef, useState } from 'react'
import { loadBridgeTurnstile, type TurnstileApi } from './loadBridgeTurnstile'
import { useBridgeTranslation } from './useBridgeTranslation'

type BridgeTurnstileProps = {
  onTokenChange: (token: string) => void
}

const siteKey = (import.meta.env.VITE_TURNSTILE_SITE_KEY ?? '').trim()

export function BridgeTurnstile({ onTokenChange }: BridgeTurnstileProps) {
  const { t, language } = useBridgeTranslation()
  const container = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    if (!siteKey) return
    let disposed = false
    let api: TurnstileApi | undefined
    let widgetId: string | undefined

    function failed() {
      if (disposed) return
      onTokenChange('')
      setStatus('error')
    }

    void loadBridgeTurnstile().then((loadedApi) => {
      if (disposed || !container.current) return
      api = loadedApi
      widgetId = api.render(container.current, {
        sitekey: siteKey,
        action: 'bridge_contact',
        language,
        theme: 'light',
        size: container.current.clientWidth < 300 ? 'compact' : 'flexible',
        appearance: 'interaction-only',
        'response-field': false,
        'refresh-expired': 'auto',
        callback: (token) => {
          if (disposed) return
          onTokenChange(token)
          setStatus('ready')
        },
        'expired-callback': () => {
          if (disposed) return
          onTokenChange('')
          setStatus('loading')
        },
        'error-callback': () => {
          failed()
          return true
        },
        'timeout-callback': failed,
      })
    }).catch(failed)

    return () => {
      disposed = true
      onTokenChange('')
      if (api && widgetId !== undefined) api.remove(widgetId)
    }
  }, [language, attempt, onTokenChange])

  return (
    <div className="min-w-0">
      <div ref={container} />
      {!siteKey ? (
        <p className="text-sm" role="status">{t('f_unavailable')}</p>
      ) : status === 'error' ? (
        <div className="text-sm">
          <p role="alert">{t('f_verification_error')}</p>
          <button
            type="button"
            className="mt-2 rounded underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-current"
            onClick={() => {
              onTokenChange('')
              setStatus('loading')
              setAttempt((value) => value + 1)
            }}
          >
            {t('f_verification_retry')}
          </button>
        </div>
      ) : status === 'loading' ? (
        <p className="text-sm" role="status">{t('f_verification_pending')}</p>
      ) : null}
    </div>
  )
}
