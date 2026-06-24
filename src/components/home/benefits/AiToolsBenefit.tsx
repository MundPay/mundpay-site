import { useTranslation } from 'react-i18next'
import { BenefitCard } from './BenefitCard'
import { BenefitLottie } from './BenefitLottie'
import aiToolsAnimation from '../../../assets/lottie/ai-tools.json'

export function AiToolsBenefit() {
  const { t } = useTranslation()

  return (
    <BenefitCard
      title={t('home.benefits.cards.aiTools.title')}
      description={t('home.benefits.cards.aiTools.description')}
      className="border-l border-r border-t"
      contentClassName="mt-[228px] max-w-[373.33px] p-8 md:mt-[238px] md:p-8"
      descriptionClassName="w-[309.33px] max-w-full"
      visual={
        <div className="absolute left-1/2 top-4 h-[237px] w-[min(100%,370px)] -translate-x-1/2 overflow-hidden">
          <BenefitLottie
            animationData={aiToolsAnimation}
            className="h-full w-full"
          />
        </div>
      }
    />
  )
}
