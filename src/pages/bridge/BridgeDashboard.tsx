import { useState } from 'react'
import { BridgeRichText } from './BridgeRichText'
import { BridgeStatement } from './BridgeStatement'
import { exportBridgeStatement } from './bridgeStatementData'
import { BridgeTabs } from './BridgeTabs'
import { BridgeVolumeChart } from './BridgeVolumeChart'
import { formatNumber } from './bridgeFormat'
import { BridgeDownloadIcon } from './icons/BridgeDownloadIcon'
import { BridgeMark } from './icons/BridgeMark'
import { useBridgeTranslation } from './useBridgeTranslation'

const views = [
  ['geral', 'tb_ov'],
  ['dep', 'tb_dep'],
  ['pag', 'tb_pay'],
  ['saldo', 'tb_bal'],
  ['api', null],
] as const

export function BridgeDashboard() {
  const { t, language } = useBridgeTranslation()
  const [active, setActive] = useState(0)
  const tabs = views.map(([id, title]) => ({ id: 'td-' + id, label: title ? t(title) : 'API' }))
  const [view] = views[active]

  return (
    <section className="sec bgd" id="painel" aria-labelledby="h-pn">
      <div className="wrap">
        <div className="split rv">
          <div>
            <h2 id="h-pn">
              <BridgeRichText name="dash_h2" />
            </h2>
          </div>
          <p>{t('dash_p')}</p>
        </div>
        <div className="browser rv" id="dash" data-view={view}>
          <div className="bar">
            <span className="dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="lbl">{t('demo')}</span>
          </div>
          <div className="dash">
            <BridgeTabs
              label={t('dash_tabs')}
              className="side"
              panel="dpanel"
              items={tabs}
              active={active}
              onChange={setActive}
              vertical
            >
              <BridgeMark className="mk" />
            </BridgeTabs>
            <div className="dmain" id="dpanel" role="tabpanel" aria-labelledby={tabs[active].id}>
              <div className="top">
                <div className="top-h">
                  <div>
                    <small>{t('greet')}</small>
                    <b>{t('greet_n')}</b>
                  </div>
                  <button
                    className="btn-ex"
                    type="button"
                    onClick={() => exportBridgeStatement(view, language, t)}
                  >
                    <BridgeDownloadIcon />
                    <span>{t('export')}</span>
                  </button>
                </div>
                <div className="drow">
                  <div className="balc">
                    <small>{t('k_bal')}</small>
                    <b className="tn">
                      <span>{formatNumber(language, 48213.4, 2)}</span>
                      <i>USDT</i>
                    </b>
                  </div>
                  <div className="kpis">
                    <div>
                      <small>{t('k_pend')}</small>
                      <b className="tn">{formatNumber(language, 3870.15, 2)}</b>
                    </div>
                    <div>
                      <small>{t('k_set')}</small>
                      <b className="tn">{formatNumber(language, 312940.8, 2)}</b>
                    </div>
                  </div>
                </div>
              </div>
              <BridgeVolumeChart />
              <BridgeStatement />
              <div className="d-api">
                <strong>{t('api_t')}</strong>
                <pre>
                  <code>
                    {
                      'POST /api/v1/deposits\nPOST /api/v1/withdrawals\nGET  /api/v1/payment-methods?country=MEX\nGET  /api/v1/wallet\n\n'
                    }
                    <span className="c">{t('api_wh')}</span>
                  </code>
                </pre>
              </div>
              <p className="d-foot">{t('dfoot')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
