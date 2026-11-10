import { BridgePayIn } from './BridgePayIn'
import { useBridgeTranslation } from './useBridgeTranslation'
import { SettlementDiagram } from './visuals/SettlementDiagram'
import { BridgeRichText } from './BridgeRichText'
import { bridgeStyle } from './bridgeStyle'
import { formatMoney } from './bridgeFormat'

export function BridgeSolutions({ paused }: { paused: boolean }) {
  const { t, language } = useBridgeTranslation()

  return (
    <section className="sec" id="solucoes" aria-labelledby="h-sol">
      <div className="wrap">
        <div className="sec-head rv">
          <h2 id="h-sol">
            <BridgeRichText name="sol_h2" />
          </h2>
        </div>
        <div className="cards4 grid gap-4">
          <article className="card rv" style={bridgeStyle('--i', 0)}>
            <BridgePayIn paused={paused} />
            <div>
              <span className="no">01</span>
              <h3>Pay-in</h3>
              <p>{t('sol1_p')}</p>
            </div>
          </article>
          <article className="card rv" style={bridgeStyle('--i', 1)}>
            <div className="sim" aria-hidden="true">
              <div className="so-row">
                <i></i>
                <b></b>
                <span className="tn">{formatMoney(language, 'COP', 380000)}</span>
                <em>{t('st2')}</em>
              </div>
              <div className="so-row">
                <i></i>
                <b></b>
                <span className="tn">{formatMoney(language, 'PEN', 420)}</span>
                <em>{t('st2')}</em>
              </div>
              <div className="so-row">
                <i></i>
                <b></b>
                <span className="tn">{formatMoney(language, 'MXN', 1850)}</span>
                <em>{t('st2')}</em>
              </div>
            </div>
            <div>
              <span className="no">02</span>
              <h3>Pay-out</h3>
              <p>{t('sol2_p')}</p>
            </div>
          </article>
          <article className="card rv" style={bridgeStyle('--i', 2)}>
            <div className="sim sim-usdt" aria-hidden="true">
              <SettlementDiagram />
            </div>
            <div>
              <span className="no">03</span>
              <h3>{t('sol3_t')}</h3>
              <p>{t('sol3_p')}</p>
            </div>
          </article>
          <article className="card rv" style={bridgeStyle('--i', 3)}>
            <div className="sim sim-fr" aria-hidden="true">
              <div className="scan"></div>
              <div className="fr-row">
                <span className="tn">
                  <span>{t('sim_tx')}</span> 0412
                </span>
                <b>{t('sim_appr')}</b>
              </div>
              <div className="fr-row">
                <span className="tn">
                  <span>{t('sim_tx')}</span> 0413
                </span>
                <b className="rv2">{t('sim_rev')}</b>
              </div>
              <div className="fr-row">
                <span className="tn">
                  <span>{t('sim_tx')}</span> 0414
                </span>
                <b>{t('sim_appr')}</b>
              </div>
            </div>
            <div>
              <span className="no">04</span>
              <h3>{t('sol4_t')}</h3>
              <p>{t('sol4_p')}</p>
            </div>
          </article>
        </div>
        <p className="sec-line serif rv">{t('sol_line')}</p>
      </div>
    </section>
  )
}
