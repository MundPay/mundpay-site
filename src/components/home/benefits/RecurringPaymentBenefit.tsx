import { useTranslation } from 'react-i18next'
import { BenefitCard } from './BenefitCard'
import { BenefitLottie } from './BenefitLottie'
import recurringPaymentAnimation from '../../../assets/lottie/recurring-payment.json'

export function RecurringPaymentBenefit() {
  const { t } = useTranslation()

  return (
    <BenefitCard
      title={t('home.benefits.cards.recurringPayment.title')}
      description={t('home.benefits.cards.recurringPayment.description')}
      className="border-l border-t max-[810px]:border-r"
      contentClassName="mt-[252px] max-w-[373.33px] p-8 md:mt-[264px] md:p-8"
      descriptionClassName="w-[309.33px] max-w-full"
      visual={
        <div className="absolute left-1/2 top-5 h-[260px] w-[min(100%,370px)] -translate-x-1/2 overflow-hidden">
          <BenefitLottie
            animationData={recurringPaymentAnimation}
            className="h-full w-full"
          />
        </div>
      }
    />
  )
}
