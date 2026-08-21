import { useTranslation } from 'react-i18next'
import { PrimaryCtaLink } from '../../layout/PrimaryCtaLink'
import { PricingPortrait } from './PricingPortrait'
import { PricingTable } from './PricingTable'

export function PricingSection() {
  const { t } = useTranslation()

  return (
    <section id="taxas" className="relative z-[2] w-full overflow-hidden bg-[#EAEEE4] py-12 min-[1201px]:h-[815px] min-[1201px]:py-0">
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-start px-4 min-[811px]:px-8 min-[1201px]:px-0 min-[1201px]:pt-[56px]">
        <div className="grid h-[704px] w-full border border-[#0507001A] min-[1201px]:w-[1200px] min-[1201px]:grid-cols-[560px_640px]">
          <div className="relative h-full min-[1201px]:border-r min-[1201px]:border-[#0507001A]">
            <div className="px-5 pt-8 min-[811px]:px-[32px] min-[811px]:pt-[42px]">
              <h2 className="max-w-[720px] font-rethink-sans text-[30px] font-bold leading-[1.08] tracking-[-0.045em] text-[#050700] min-[811px]:text-[34px] min-[1201px]:max-w-[470px] min-[1201px]:text-[36px]">
                {t('home.pricing.title')}
              </h2>
              <p className="mt-[10px] max-w-[720px] font-space-grotesk text-[16px] font-medium leading-[1.35] tracking-[-0.03em] text-[#29282C]/55 min-[1201px]:text-[18px]">
                {t('home.pricing.subtitle')}
              </p>
              <PrimaryCtaLink
                href="https://login.mundpay.com/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('home.pricing.ctaLabel')}
              </PrimaryCtaLink>
            </div>

            <PricingTable />

            <div className="absolute bottom-0 left-0 flex h-[78px] w-full items-center bg-[#050700] px-5 font-space-grotesk text-[14px] font-semibold leading-[1.4] tracking-[-0.03em] text-[#EAEEE4]/72 min-[811px]:px-[32px] min-[1201px]:text-[15px]">
              {t('home.pricing.enterpriseNote')}
            </div>
          </div>

          <PricingPortrait />
        </div>
      </div>
    </section>
  )
}
