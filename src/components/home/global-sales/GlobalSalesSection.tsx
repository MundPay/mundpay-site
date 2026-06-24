import { useTranslation } from 'react-i18next'
import { GlobalCard } from './GlobalCard'
import { globalSalesLotties } from './globalSalesData'
import { LanguagesAnimation } from './LanguagesAnimation'
import { LottieFrame } from './LottieFrame'
import { PaymentMethodsAnimation } from './PaymentMethodsAnimation'

export function GlobalSalesSection() {
  const { t } = useTranslation()

  return (
    <section
      id="global"
      className="relative z-[2] w-full overflow-hidden bg-[#050700] text-[#EAEEE4]"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col px-4 py-20 min-[811px]:px-10 min-[811px]:py-[120px] min-[1201px]:h-[905px] min-[1201px]:px-0 min-[1201px]:pb-0 min-[1201px]:pt-[150px]">
        <div className="grid grid-cols-1 items-start gap-6 min-[811px]:grid-cols-2 min-[811px]:gap-12 min-[1201px]:grid-cols-[520px_520px] min-[1201px]:gap-20 min-[1201px]:px-10">
          <h2 className="font-rethink-sans text-[28px] font-bold leading-[1.05] tracking-[-0.045em] text-[#EAEEE4] min-[811px]:text-[31px] min-[1201px]:text-[34px]">
            {t('home.globalSales.title')}
          </h2>
          <p className="max-w-[520px] font-space-grotesk text-[16px] font-semibold leading-[1.45] tracking-[-0.03em] text-[#EAEEE4]/75 min-[1201px]:text-[18px]">
            {t('home.globalSales.description')}
          </p>
        </div>

        <div className="mt-[44px] grid w-full grid-cols-1 border border-[#EAEEE4]/[0.05] min-[811px]:grid-cols-2 min-[1201px]:h-[520px]">
          <GlobalCard title={t('home.globalSales.cards.languages')}>
            <LanguagesAnimation />
          </GlobalCard>
          <GlobalCard title={t('home.globalSales.cards.countries')}>
            <LottieFrame {...globalSalesLotties.countries} />
          </GlobalCard>
          <GlobalCard title={t('home.globalSales.cards.coins')}>
            <LottieFrame {...globalSalesLotties.coins} />
          </GlobalCard>
          <GlobalCard title={t('home.globalSales.cards.paymentMethods')}>
            <PaymentMethodsAnimation />
          </GlobalCard>
        </div>
      </div>
    </section>
  )
}
