import { useTranslation } from 'react-i18next'
import { ArrowRightIcon } from '../../icons/ArrowRightIcon'
import { pricingCopy } from './pricingData'
import { PricingPortrait } from './PricingPortrait'
import { PricingTable } from './PricingTable'

const pricingCtaClassName =
  'group mt-[28px] inline-flex h-[56px] min-w-[178px] cursor-pointer items-center justify-between rounded-full bg-[#050700] px-[24px] font-space-grotesk text-[14px] font-bold uppercase leading-none tracking-[-0.03em] text-white shadow-[0_8px_24px_rgba(5,7,0,0.14)] transition-transform duration-200 hover:scale-[1.02]'

function PricingCtaButton() {
  const { t } = useTranslation()

  return (
    <a href={pricingCopy.ctaHref} className={pricingCtaClassName}>
      {t('home.pricing.ctaLabel')}
      <ArrowRightIcon className="ml-5 size-5 text-white" />
    </a>
  )
}

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
              <PricingCtaButton />
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
