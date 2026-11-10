import { useBridgeTranslation } from './useBridgeTranslation'
import { BridgeDepositIcon } from './icons/BridgeDepositIcon'
import { BridgeCoinIcon } from './icons/BridgeCoinIcon'
import { BridgeWalletIcon } from './icons/BridgeWalletIcon'
import { BalanceSparkline } from './visuals/BalanceSparkline'
import { BridgeCount } from './BridgeCount'
import { bridgeStyle } from './bridgeStyle'
import { formatMoney, formatNumber } from './bridgeFormat'

export function BridgeHeroPreview({ paused }: { paused: boolean }) {
  const { t, language } = useBridgeTranslation()

  return (
    <div className="mock bi" style={bridgeStyle('--i', 3)} role="img" aria-label={t('mock_aria')}>
      <div className="mock-top">
        <span className="dots" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span className="lbl">{t('demo')}</span>
        <span className="live">
          <i></i>
          <span>{t('live')}</span>
        </span>
      </div>
      <ol className="tl" aria-hidden="true">
        <li className="s1">
          <span className="ic">
            <BridgeDepositIcon />
          </span>
          <div>
            <strong>{t('tl1')}</strong>
            <small className="tn">{formatMoney(language, 'BRL', 250)}</small>
          </div>
          <span className="st">{t('st1')}</span>
        </li>
        <li className="s2">
          <span className="ic">
            <BridgeWalletIcon />
          </span>
          <div>
            <strong>{t('tl2')}</strong>
            <small className="tn">{formatMoney(language, 'COP', 380000)}</small>
          </div>
          <span className="st">{t('st2')}</span>
        </li>
        <li className="s3">
          <span className="ic">
            <BridgeCoinIcon />
          </span>
          <div>
            <strong>{t('tl3')}</strong>
            <small className="tn">+ {formatNumber(language, 46.21, 2)} USDT</small>
          </div>
          <span className="st">{t('st3')}</span>
        </li>
      </ol>
      <div className="bal" aria-hidden="true">
        <div className="bal-top">
          <div>
            <small>{t('bal_l')}</small>
            <span className="v tn">
              <span>
                <BridgeCount value={48213.4} digits={2} paused={paused} />
              </span>
              <em>USDT</em>
            </span>
          </div>
          <BalanceSparkline />
        </div>
        <div className="wal">
          <BridgeWalletIcon />
          <span>{t('wal')}</span>
          <b>…a91f</b>
        </div>
      </div>
    </div>
  )
}
