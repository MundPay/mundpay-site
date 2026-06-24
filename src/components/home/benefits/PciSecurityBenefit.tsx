import { useTranslation } from 'react-i18next'
import { BenefitCard } from './BenefitCard'
import { BenefitLottie } from './BenefitLottie'
import pciSecurityAnimation from '../../../assets/lottie/pci-security.json'

export function PciSecurityBenefit() {
  const { t } = useTranslation()

  return (
    <BenefitCard
      title={t('home.benefits.cards.pciSecurity.title')}
      description={t('home.benefits.cards.pciSecurity.description')}
      className="border-b border-l border-t max-[810px]:border-r"
      contentClassName="mt-[272px] max-w-[560px] p-8 md:mt-[284px] md:p-8"
      descriptionClassName="w-[496px] max-w-full"
      visual={
        <div className="absolute left-1/2 top-0 h-[271px] w-full -translate-x-1/2 overflow-hidden">
          <BenefitLottie
            animationData={pciSecurityAnimation}
            className="h-full w-full"
          />
        </div>
      }
    />
  )
}
