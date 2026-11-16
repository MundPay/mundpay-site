import { bridgeFlags, bridgeLogos } from './bridgeAssets'
import { useBridgeTranslation } from './useBridgeTranslation'

type BridgeMethodTagProps = {
  name: string
  mark: keyof typeof bridgeLogos | Uppercase<string>
  countries: readonly (keyof typeof bridgeFlags)[]
}

export function BridgeMethodTag({ name, mark, countries }: BridgeMethodTagProps) {
  const { t } = useBridgeTranslation()
  const logo = Object.hasOwn(bridgeLogos, mark) ? bridgeLogos[mark as keyof typeof bridgeLogos] : null

  return (
    <span className="tag">
      {logo ? (
        <img className="si" src={logo} alt="" width="16" height="16" />
      ) : (
        <span className="lt" aria-hidden="true">
          {mark}
        </span>
      )}
      {name}
      <span className="fls">
        {countries.map((country) => (
          <img
            key={country}
            className="fl"
            src={bridgeFlags[country]}
            alt={t('c_' + country)}
            width="20"
            height="15"
            decoding="async"
          />
        ))}
      </span>
    </span>
  )
}
