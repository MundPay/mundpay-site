import { bridgeCountries } from './bridgeCountries'
import { BridgeHeroPreview } from './BridgeHeroPreview'
import { useBridgeTranslation } from './useBridgeTranslation'
import { BridgeLink } from './BridgeLink'
import { BridgeRichText } from './BridgeRichText'
import { BridgeCount } from './BridgeCount'
import { bridgeFlags } from './bridgeAssets'
import { bridgeStyle } from './bridgeStyle'

export function BridgeHero({ paused, onShowUpcoming }: { paused: boolean; onShowUpcoming: () => void }) {
  const { t } = useBridgeTranslation()

  return (
    <section className="hero" id="topo">
      <div className="wrap">
        <div>
          <span className="eyebrow bi" style={bridgeStyle('--i', 0)}>
            {t('hero_eb')}
          </span>
          <h1 className="bi" style={bridgeStyle('--i', 1)}>
            <BridgeRichText name="hero_h1" />
          </h1>
          <p className="lede bi" style={bridgeStyle('--i', 2)}>
            {t('hero_lede')}
          </p>
          <div className="cta-row bi" style={bridgeStyle('--i', 3)}>
            <BridgeLink className="btn btn-p btn-lg btn-glint" href="#contato">
              {t('cta_team')}
            </BridgeLink>
            <BridgeLink className="btn btn-g btn-lg" href="#cobertura">
              {t('cta_cov')}
            </BridgeLink>
          </div>
          <div
            className="pills bi"
            style={bridgeStyle('--i', 4)}
            role="group"
            aria-label={t('pill_group')}
          >
            {bridgeCountries.map(({ code }) => (
              <a key={code} className="pill" href="#cobertura">
                <img
                  className="fl"
                  src={bridgeFlags[code]}
                  alt=""
                  width="20"
                  height="15"
                  decoding="async"
                />
                {code.toUpperCase()}
              </a>
            ))}
            <a className="pill soon" href="#cobertura" onClick={onShowUpcoming}>
              {t('pill_soon')}
            </a>
          </div>
          <div className="proof bi" style={bridgeStyle('--i', 5)}>
            <div>
              <b className="tn">
                <BridgeCount value={8} paused={paused} />
              </b>
              <span>{t('proof_c')}</span>
            </div>
            <div>
              <b className="tn">
                <BridgeCount value={100} suffix="+" paused={paused} />
              </b>
              <span>{t('proof_m')}</span>
            </div>
            <div>
              <b className="tn">
                <BridgeCount value={7} prefix="+" paused={paused} />
              </b>
              <span>{t('proof_s')}</span>
            </div>
          </div>
        </div>

        <BridgeHeroPreview paused={paused} />
      </div>
    </section>
  )
}
