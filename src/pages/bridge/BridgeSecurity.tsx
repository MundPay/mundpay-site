import { useBridgeTranslation } from './useBridgeTranslation'
import { BridgeCheckIcon } from './icons/BridgeCheckIcon'
import { BridgeShieldIcon } from './icons/BridgeShieldIcon'
import { BridgeIdentityIcon } from './icons/BridgeIdentityIcon'
import { BridgeLedgerIcon } from './icons/BridgeLedgerIcon'
import { BridgeRichText } from './BridgeRichText'
import { bridgeStyle } from './bridgeStyle'

const protections = [
  { icon: BridgeShieldIcon, title: 'seg1' },
  { icon: BridgeIdentityIcon, title: 'seg2' },
  { icon: BridgeCheckIcon, title: 'seg3', description: 'seg3_p' },
  { icon: BridgeLedgerIcon, title: 'seg4', description: 'seg4_p' },
] as const

export function BridgeSecurity() {
  const { t } = useBridgeTranslation()

  return (
    <section className="sec" id="seguranca" aria-labelledby="h-seg">
      <div className="wrap">
        <div className="sec-head rv">
          <h2 id="h-seg">
            <BridgeRichText name="seg_h2" />
          </h2>
        </div>
        <div className="sec4">
          {protections.map((protection, index) => {
            const { icon: Icon, title } = protection
            return (
              <article key={title} className="card rv" style={bridgeStyle('--i', index)}>
                <Icon />
                {'description' in protection ? (
                  <div>
                    <h3>{t(title)}</h3>
                    <p>{t(protection.description)}</p>
                  </div>
                ) : (
                  <h3>{t(title)}</h3>
                )}
              </article>
            )
          })}
        </div>
        <div className="legal rv">
          <p>{t('seg_legal')}</p>
        </div>
      </div>
    </section>
  )
}
