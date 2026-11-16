import { useLocation, useNavigate } from 'react-router-dom'
import { withLanguagePrefix } from '../../i18n/languageRouting'
import { i18next } from '../../i18n'
import { spanishBridgePath, type BridgeLocale } from './bridgeRouting'
import { useBridgeTranslation } from './useBridgeTranslation'

const languages = [
  { code: 'pt-BR', label: 'PT, Português', short: 'PT' },
  { code: 'en', label: 'EN, English', short: 'EN' },
  { code: 'es', label: 'ES, Español', short: 'ES' },
] as const

export function BridgeLanguage() {
  const { t, language } = useBridgeTranslation()
  const { search, hash } = useLocation()
  const navigate = useNavigate()

  function selectLanguage(next: BridgeLocale) {
    if (next === language) return
    const params = new URLSearchParams(search)
    params.delete('lang')
    const query = params.toString()
    const path = next === 'es' ? spanishBridgePath : withLanguagePrefix('/bridge', next)
    if (next !== 'es') void i18next.changeLanguage(next)
    void navigate(path + (query ? '?' + query : '') + hash, { preventScrollReset: true })
  }

  return (
    <div className="lang" role="group" aria-label={t('lang_label')}>
      {languages.map(({ code, label, short }) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-label={label}
          aria-pressed={language === code}
          onClick={() => selectLanguage(code)}
        >
          {short}
        </button>
      ))}
    </div>
  )
}
