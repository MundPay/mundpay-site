import { useTranslation } from 'react-i18next'
import { mundpayAssets } from '../../../assets/mundpayAssets'
import { ArrowRightIcon } from '../../icons/ArrowRightIcon'

const earningsCtaHref = '/'

const ctaButtonClassName =
  'group mt-5 inline-flex h-12 min-w-40 cursor-pointer items-center justify-between rounded-full bg-[#050700] px-5 font-space-grotesk text-[12px] font-bold uppercase leading-none tracking-[-0.03em] text-white shadow-[0_8px_24px_rgba(5,7,0,0.16)] transition-transform duration-200 hover:scale-[1.02] min-[811px]:mt-[24px] min-[811px]:h-[52px] min-[811px]:min-w-[168px] min-[811px]:px-6 min-[1201px]:h-[56px] min-[1201px]:min-w-[178px] min-[1201px]:text-[14px]'

function EarningsCtaImage() {
  return (
    <img
      src={mundpayAssets.ctaWoman}
      alt=""
      className="absolute right-[-72px] top-0 z-[1] h-[248px] w-[460px] max-w-none object-cover min-[811px]:bottom-0 min-[811px]:left-[300px] min-[811px]:right-auto min-[811px]:top-auto min-[811px]:h-[400px] min-[811px]:w-[740px] min-[1201px]:left-[360px] min-[1201px]:h-[454px] min-[1201px]:w-[840px]"
    />
  )
}

function EarningsCtaButton() {
  const { t } = useTranslation()

  return (
    <a href={earningsCtaHref} className={ctaButtonClassName}>
      {t('home.earningsCta.ctaLabel')}
      <ArrowRightIcon className="ml-5 size-5 text-white" />
    </a>
  )
}

export function EarningsCtaSection() {
  const { t } = useTranslation()
  const titleLines = [
    t('home.earningsCta.title.lineOne'),
    t('home.earningsCta.title.lineTwo'),
  ]

  return (
    <section className="relative z-[2] min-h-[390px] w-full overflow-hidden bg-[#A2D035] text-[#050700] min-[811px]:min-h-[420px] min-[1201px]:min-h-[454px]">
      <div className="relative mx-auto h-[390px] w-full max-w-[1200px] min-[811px]:h-[420px] min-[1201px]:h-[454px]">
        <EarningsCtaImage />

        <div className="absolute inset-0 z-[2] w-full">
          <div className="absolute bottom-8 left-5 min-[811px]:left-16 min-[811px]:top-[104px] min-[1201px]:left-[120px] min-[1201px]:top-[112px]">
            <h2 className="w-[260px] font-rethink-sans text-[28px] font-bold leading-[1.08] tracking-[-0.04em] text-[#050700] min-[811px]:w-[310px] min-[811px]:text-[34px] min-[1201px]:w-[330px] min-[1201px]:text-[40px]">
              {titleLines.map((line, index) => (
                <span key={line}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-3 w-[280px] font-space-grotesk text-[14px] font-normal leading-[1.45] tracking-[-0.02em] text-[#050700] min-[811px]:mt-[16px] min-[811px]:w-[390px] min-[811px]:text-[16px] min-[1201px]:mt-[18px] min-[1201px]:w-[446px] min-[1201px]:text-[18px]">
              {t('home.earningsCta.description')}
            </p>
            <EarningsCtaButton />
          </div>
        </div>
      </div>
    </section>
  )
}
