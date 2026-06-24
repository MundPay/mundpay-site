import { useTranslation } from 'react-i18next'
import { AiToolsBenefit } from './AiToolsBenefit'
import { FastCheckoutBenefit } from './FastCheckoutBenefit'
import { FraudSecurityBenefit } from './FraudSecurityBenefit'
import { LogoBenefit } from './LogoBenefit'
import { PciSecurityBenefit } from './PciSecurityBenefit'
import { RecurringPaymentBenefit } from './RecurringPaymentBenefit'
import { SellGloballyBenefit } from './SellGloballyBenefit'

export function BenefitsSection() {
  const { t } = useTranslation()
  const titleLines = [
    t('home.benefits.title.lineOne'),
    t('home.benefits.title.lineTwo'),
  ]

  return (
    <section id="benefits" className="relative bg-[#050700] pb-28 pt-[120px]">
      <div className="mx-auto flex w-full max-w-300 flex-col items-center px-10">
        <div className="mx-auto flex max-w-[620px] flex-col items-center gap-6 text-center">
          <h2 className="font-rethink-sans text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-[#EAEEE4]">
            {titleLines.map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>
          <p className="font-space-grotesk text-[20px] font-normal leading-[1.5] tracking-[-0.02em] text-[#EAEEE4BF]">
            {t('home.benefits.description')}
          </p>
        </div>

        <div className="mt-16 w-full max-w-[1120px] overflow-visible">
          <div className="grid grid-cols-1 min-[811px]:grid-cols-2 min-[1201px]:grid-cols-[448px_672px]">
            <SellGloballyBenefit />
            <FastCheckoutBenefit />
          </div>
          <div className="grid grid-cols-1 min-[811px]:grid-cols-2 min-[1201px]:grid-cols-[373.33px_373px_373.33px]">
            <RecurringPaymentBenefit />
            <LogoBenefit />
            <AiToolsBenefit />
          </div>
          <div className="grid grid-cols-1 min-[811px]:grid-cols-2 min-[1201px]:grid-cols-[560px_560px]">
            <PciSecurityBenefit />
            <FraudSecurityBenefit />
          </div>
        </div>
      </div>
    </section>
  )
}
