import { useTranslation } from 'react-i18next'
import { mundpayAssets } from '../../../assets/mundpayAssets'

export function RewardCard() {
  const { t, i18n } = useTranslation()
  const image = i18n.resolvedLanguage === 'en'
    ? mundpayAssets.nextRewardPreviewEn
    : mundpayAssets.nextRewardPreview

  return (
    <div className="hidden max-h-[323px] max-w-[255.89px] overflow-hidden rounded-xl border border-[#27272a] bg-[#09090b] md:block">
      <img
        src={image}
        alt={t('home.dashboard.nextRewardAlt')}
        className="block h-auto max-h-[323px] w-full max-w-[255.89px]"
      />
    </div>
  )
}
