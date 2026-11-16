import { bridgeCountries } from './bridgeCountries'
import { bridgeFlags } from './bridgeAssets'
import { BridgeRichText } from './BridgeRichText'
import { BridgeTabs } from './BridgeTabs'
import { useBridgeTranslation } from './useBridgeTranslation'

type BridgeCoverageProps = {
  active: number
  onChange: (index: number) => void
}

export function BridgeCoverage({ active, onChange }: BridgeCoverageProps) {
  const { t } = useBridgeTranslation()
  const tabs = [
    { id: 'tab-now', label: t('tab_now') },
    { id: 'tab-soon', label: t('tab_soon') },
  ]
  const methodNames: Record<string, string> = {
    '@bt': t('m_bt'),
    '@cash': t('m_cash'),
    '@oth': t('m_oth'),
  }

  return (
    <section className="sec" id="cobertura" aria-labelledby="h-cob">
      <div className="wrap">
        <div className="split rv">
          <div>
            <h2 id="h-cob">
              <BridgeRichText name="cov_h2" />
            </h2>
          </div>
          <p>{t('cov_p')}</p>
        </div>
        <BridgeTabs
          label={t('cov_tabs')}
          className="tabs rv"
          panel="cov-panel"
          items={tabs}
          active={active}
          onChange={onChange}
        />
        <div id="cov-panel" role="tabpanel" aria-labelledby={tabs[active].id} tabIndex={0}>
          <div className="countries rv grid gap-3" id="cov-now" hidden={active !== 0}>
            <div className="horizon now">
              <h3>
                <BridgeRichText name="hz_h" />
              </h3>
              <p>{t('hz_p')}</p>
            </div>
            {bridgeCountries.map(({ code, currency, name, methods }) => (
              <article className="ct" key={code}>
                <header>
                  <img
                    className="fl"
                    src={bridgeFlags[code]}
                    alt=""
                    width="28"
                    height="21"
                    loading="lazy"
                    decoding="async"
                  />
                  <h3>{t(name)}</h3>
                  <span className="cur">{currency}</span>
                </header>
                <div className="flags">
                  <span className="flag">Pay-in</span>
                  <span className="flag">Pay-out</span>
                </div>
                <p className="meth">
                  {methods.map((method) => methodNames[method] ?? method).join(' · ')}
                </p>
              </article>
            ))}
          </div>
          <div className="countries grid gap-3" id="cov-soon" hidden={active !== 1}>
            <div className="horizon soon">
              <h3>{t('soon_h')}</h3>
              <p>{t('soon_p')}</p>
            </div>
          </div>
          <p className="note rv">
            <b>{t('note_b')}</b> <span>{t('note_t')}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
