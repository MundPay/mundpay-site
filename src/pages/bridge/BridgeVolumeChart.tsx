import { bridgeStyle } from './bridgeStyle'
import { useBridgeTranslation } from './useBridgeTranslation'

const bars = [
  ['br', 128, 78],
  ['mx', 92, 57],
  ['co', 74, 46],
  ['cl', 44, 28],
  ['pe', 36, 23],
  ['ar', 29, 18],
  ['ec', 12, 8],
  ['cr', 8, 5],
] as const

export function BridgeVolumeChart() {
  const { t } = useBridgeTranslation()
  const volumes = bars.map(([code, value]) => t('c_' + code) + ' ' + value + 'k').join(', ')

  return (
    <div className="bars-card">
      <h3>
        <span className="tt">{t('chart_t')}</span> <span>{t('chart_s')}</span>
      </h3>
      <div className="bars" role="img" aria-label={t('chart_aria') + ' ' + volumes}>
        {bars.map(([code, value, height]) => (
          <div key={code}>
            <b>{value}k</b>
            <i style={bridgeStyle('--h', height + '%')} />
            {code.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  )
}
