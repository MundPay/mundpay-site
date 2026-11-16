import { createInstance } from 'i18next'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { normalizeLanguage } from '../../i18n/languageRouting'
import { bridge as spanishBridge } from '../../i18n/locales/es/bridge'
import { defaultLanguage } from '../../i18n/resources'
import { isSpanishBridgePath, type BridgeLocale } from './bridgeRouting'

const spanishI18n = createInstance()
void spanishI18n.init({
  lng: 'es',
  fallbackLng: false,
  initAsync: false,
  resources: { es: { translation: { bridge: spanishBridge } } },
  interpolation: { escapeValue: false },
})

export function useBridgeTranslation() {
  const { pathname } = useLocation()
  const spanish = isSpanishBridgePath(pathname)
  const { t, i18n } = useTranslation('translation', {
    keyPrefix: 'bridge',
    i18n: spanish ? spanishI18n : undefined,
  })
  const language: BridgeLocale = spanish
    ? 'es'
    : (normalizeLanguage(i18n.resolvedLanguage) ?? defaultLanguage)

  return { t, language, i18n }
}
