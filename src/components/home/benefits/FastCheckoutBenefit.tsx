import { useTranslation } from 'react-i18next'
import { BenefitCard } from './BenefitCard'
import { BenefitLottie } from './BenefitLottie'
import fastestCheckoutAnimation from '../../../assets/lottie/fastest-checkout.json'

export function FastCheckoutBenefit() {
  const { t } = useTranslation()

  return (
    <BenefitCard
      title={t('home.benefits.cards.fastCheckout.title')}
      description={t('home.benefits.cards.fastCheckout.description')}
      className="border-l border-r border-t"
      contentClassName="mt-[260px] max-w-[348px] p-8 min-[811px]:mt-0 min-[811px]:max-w-[360px] min-[1201px]:mt-[140px]"
      descriptionClassName="w-[284px] max-w-full"
      visual={
        <div className="absolute left-1/2 top-0 h-[260px] w-full -translate-x-1/2 overflow-hidden min-[811px]:bottom-[-48px] min-[811px]:left-auto min-[811px]:right-0 min-[811px]:top-auto min-[811px]:h-[330px] min-[811px]:translate-x-0 min-[1201px]:right-10 min-[1201px]:h-[480px] min-[1201px]:w-[304px]">
          <BenefitLottie
            animationData={fastestCheckoutAnimation}
            className="h-full w-full"
          />
        </div>
      }
    />
  )
}
