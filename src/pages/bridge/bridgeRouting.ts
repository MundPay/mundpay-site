import type { SupportedLanguage } from '../../i18n/resources'

export type BridgeLocale = SupportedLanguage | 'es'

export const spanishBridgePath = '/es/bridge'
export const spanishBridgeDescription =
  'Pay-in y pay-out locales en América Latina, con liquidación en USDT.'

export function isSpanishBridgePath(pathname: string) {
  return pathname.toLowerCase().replace(/\/+$/, '') === spanishBridgePath
}
