import { useBridgeTranslation } from './useBridgeTranslation'
import { BridgeBrand } from './BridgeBrand'

export function BridgeFooter() {
  const { t } = useBridgeTranslation()

  return (
    <footer>
      <div className="wrap ft">
        <div>
          <BridgeBrand />
          <p className="copy">{t('meta_desc')}</p>
        </div>
        <p className="legal-l">© 2026 Mundpay</p>
      </div>
    </footer>
  )
}
