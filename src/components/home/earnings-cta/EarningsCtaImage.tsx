import { useTranslation } from 'react-i18next'
import { mundpayAssets } from '../../../assets/mundpayAssets'

const imageClassName = 'absolute right-[-72px] top-0 z-[1] h-[248px] w-[460px] max-w-none object-cover min-[811px]:bottom-0 min-[811px]:left-[300px] min-[811px]:right-auto min-[811px]:top-auto min-[811px]:h-[400px] min-[811px]:w-[740px] min-[1201px]:left-[360px] min-[1201px]:h-[454px] min-[1201px]:w-[840px]'

export function EarningsCtaImage() {
  const { i18n } = useTranslation()
  const isEnglish = i18n.resolvedLanguage === 'en'

  const image = isEnglish ? mundpayAssets.ctaWomanEn : mundpayAssets.ctaWoman

  return (
    <img
      src={image}
      alt=""
      className={imageClassName}
    />
  )
}
