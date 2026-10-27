import { useTranslation } from 'react-i18next'
import { mundpayAssets } from '../../../assets/mundpayAssets'

export function SalesChart() {
  const { t, i18n } = useTranslation()
  const image = i18n.resolvedLanguage === 'en'
    ? mundpayAssets.paidSalesPreviewEn
    : mundpayAssets.paidSalesPreview

  return (
    <div className="max-h-[324px] max-w-[553px] overflow-hidden rounded-xl border border-[#27272a] bg-[#09090b]">
      <img
        src={image}
        alt={t('home.dashboard.paidSalesAlt')}
        className="block h-auto max-h-[324px] w-full max-w-[553px]"
      />
    </div>
  )
}
