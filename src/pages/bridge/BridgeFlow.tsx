import { useBridgeTranslation } from './useBridgeTranslation'
import { PaymentFlowDiagram } from './visuals/PaymentFlowDiagram'
import { bridgeStyle } from './bridgeStyle'

const steps = [
  { title: 'Pay-in', description: 'how1_p', currency: 'how_loc' },
  { title: 'Pay-out', description: 'how2_p', currency: 'how_loc' },
  { title: 'how3_t', description: 'how3_p', currency: 'how_usdt' },
] as const

export function BridgeFlow({ paused }: { paused: boolean }) {
  const { t } = useBridgeTranslation()

  return (
    <section className="sec band" id="como-funciona" aria-labelledby="h-cf">
      <div className="wrap">
        <div className="split rv">
          <div>
            <h2 id="h-cf">{t('how_h2')}</h2>
          </div>
          <p>{t('how_p')}</p>
        </div>
        <div className="flow3d rv" aria-hidden="true">
          <div className="plane">
            <PaymentFlowDiagram paused={paused} />
            <div className="node n1">
              <b>01</b>
              <span>Pay-in</span>
              <small>Pix · SPEI · PSE · Nequi</small>
            </div>
            <div className="node n2">
              <b>02</b>
              <span>Pay-out</span>
              <small>{t('how_n2')}</small>
            </div>
            <div className="node n3">
              <b>03</b>
              <span>{t('sol3_t')}</span>
              <small>₮ on-chain</small>
            </div>
          </div>
        </div>
        <ol className="steps">
          {steps.map(({ title, description, currency }, index) => (
            <li key={title} className="step rv" style={bridgeStyle('--i', index)}>
              <span className="n" aria-hidden="true">
                0{index + 1}
              </span>
              <h3>{title === 'how3_t' ? t(title) : title}</h3>
              <p>{t(description)}</p>
              <span className="cur">{t(currency)}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
