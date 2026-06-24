import { useTranslation } from 'react-i18next'
import { integrationLogoById, integrationsBackgroundMarkStyle } from './integrationAssets'

export function IntegrationsCenterCard() {
  const { t } = useTranslation()

  return (
    <div
      className="relative z-[2] col-span-full flex h-[156px] items-center justify-center border border-dotted border-[#EAEEE4]/[0.08] bg-[#050700] max-[1200px]:order-10 min-[811px]:h-[188px] min-[1201px]:col-start-2 min-[1201px]:col-end-5 min-[1201px]:row-start-3 min-[1201px]:row-end-5 min-[1201px]:h-auto"
    >
      <div
        data-testid="integrations-background-mark"
        className="integrations-background-mark pointer-events-none absolute left-1/2 top-1/2 z-0 size-[104px] -translate-x-1/2 -translate-y-1/2 opacity-[0.32] min-[811px]:size-[128px] min-[1201px]:size-[149px]"
        style={integrationsBackgroundMarkStyle}
      />
      <div className="relative z-[2] flex flex-col items-center justify-center gap-1 text-center min-[811px]:flex-row min-[811px]:gap-3 min-[1201px]:flex-col min-[1201px]:gap-[8px]">
        <div className="flex flex-col items-center justify-center gap-1 min-[811px]:flex-row min-[811px]:gap-3">
          <h2 className="font-rethink-sans text-[22px] font-bold leading-[1.1] tracking-[-0.045em] text-[#EAEEE4]/80 min-[811px]:text-[25px] min-[1201px]:text-[40px]">
            {t('home.integrations.titleStart')}
          </h2>
          <img src={integrationLogoById.svg741987204_12580} alt="mundpay" className="h-[24px] w-[130px] opacity-80 min-[811px]:h-[27px] min-[811px]:w-[146px] min-[1201px]:h-[35px] min-[1201px]:w-[189px]" />
        </div>
        <h2 className="text-center font-rethink-sans text-[22px] font-bold leading-[1.1] tracking-[-0.045em] text-[#EAEEE4]/80 min-[811px]:text-[25px] min-[1201px]:text-[40px]">
          {t('home.integrations.titleEnd')}
        </h2>
      </div>
    </div>
  )
}
