import { Trans } from 'react-i18next'
import type { bridge } from '../../i18n/locales/pt-BR/bridge'
import { useBridgeTranslation } from './useBridgeTranslation'

const components = {
  highlight: <span className="hl" />,
  serif: <span className="serif" />,
  code: <code />,
}

export function BridgeRichText({ name }: { name: keyof typeof bridge }) {
  const { i18n } = useBridgeTranslation()
  return <Trans i18n={i18n} i18nKey={'bridge.' + name} components={components} />
}
