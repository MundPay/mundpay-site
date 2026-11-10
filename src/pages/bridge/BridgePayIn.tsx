import { useEffect, useState } from 'react'
import { formatMoney } from './bridgeFormat'
import { BridgeCheckIcon } from './icons/BridgeCheckIcon'
import { useBridgeTranslation } from './useBridgeTranslation'

const methods = [
  ['Pix', 'BRL', 250],
  ['SPEI', 'MXN', 840],
  ['PSE', 'COP', 187000],
  ['Yape', 'PEN', 172],
] as const

export function BridgePayIn({ paused }: { paused: boolean }) {
  const { language, t } = useBridgeTranslation()
  const [index, setIndex] = useState(0)
  const [automatic, setAutomatic] = useState(true)
  const [, currency, amount] = methods[index]

  useEffect(() => {
    if (!automatic || paused || matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const interval = window.setInterval(() => {
      if (!document.hidden) setIndex((current) => (current + 1) % methods.length)
    }, 2600)
    return () => window.clearInterval(interval)
  }, [automatic, paused])

  return (
    <div className="sim sim-in">
      <div className="si-amt">
        <small>{t('sim_total')}</small>
        <b className="tn">{formatMoney(language, currency, amount)}</b>
      </div>
      <div
        className="si-m"
        role="group"
        aria-label={t('sim_methods')}
        onFocus={() => setAutomatic(false)}
        onPointerEnter={() => setAutomatic(false)}
      >
        {methods.map(([name], position) => (
          <button
            key={name}
            type="button"
            aria-pressed={index === position}
            onClick={() => {
              setAutomatic(false)
              setIndex(position)
            }}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="si-ok">
        <BridgeCheckIcon />
        <span>{t('sim_ok')}</span>
      </div>
    </div>
  )
}
