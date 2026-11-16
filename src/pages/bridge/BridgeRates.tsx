import { useBridgeTranslation } from './useBridgeTranslation'
import { BridgeLink } from './BridgeLink'
import { BridgeRichText } from './BridgeRichText'

export function BridgeRates() {
  const { t } = useBridgeTranslation()

  return (
    <section className="sec taxas" id="taxas" aria-labelledby="h-tx">
      <div className="wrap">
        <h2 id="h-tx" className="rv">
          <BridgeRichText name="tax_h2" />
        </h2>
        <p className="rv">{t('tax_p')}</p>
        <BridgeLink className="btn btn-p btn-lg rv" href="#contato">
          {t('tax_cta')}
        </BridgeLink>
      </div>
    </section>
  )
}
