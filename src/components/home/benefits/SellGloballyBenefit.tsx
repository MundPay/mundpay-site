import { useTranslation } from 'react-i18next'
import { BenefitCard } from './BenefitCard'
import { BenefitLottie } from './BenefitLottie'
import sellGloballyAnimation from '../../../assets/lottie/sell-globally.json'

export function SellGloballyBenefit() {
  const { t } = useTranslation()

  return (
    <BenefitCard
      title={t('home.benefits.cards.sellGlobally.title')}
      description={
        <>
          {t('home.benefits.cards.sellGlobally.description.lineOne')}
          <br />
          {t('home.benefits.cards.sellGlobally.description.lineTwo')}
        </>
      }
      className="border-l border-t max-[810px]:border-r"
      contentClassName="max-w-[448px] p-8 md:p-8"
      descriptionClassName="w-[384px] max-w-full"
      visual={
        <div className="absolute bottom-0 left-0 h-[260px] w-full overflow-hidden">
          <BenefitLottie
            animationData={sellGloballyAnimation}
            className="h-full w-full"
          />
        </div>
      }
    />
  )
}
