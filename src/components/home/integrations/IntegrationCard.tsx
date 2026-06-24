import type { CSSProperties } from 'react'
import { integrationLogoById } from './integrationAssets'
import type { IntegrationCardData } from './integrationsData'

type IntegrationCardProps = IntegrationCardData & {
  index: number
}

function getIntegrationCardStyle({ col, row }: Pick<IntegrationCardData, 'col' | 'row'>) {
  return {
    '--integration-col': col,
    '--integration-row': row,
  } as CSSProperties
}

function getResponsiveCardClassName(index: number) {
  const shouldShowOnMobile = index < 4 || (index >= 10 && index < 14)
  const centeredTabletCard = index === 0 || index === 19
  const startsSecondTabletRow = index === 1

  return [
    'relative z-[1] flex h-[76px] w-full items-center justify-center border border-dotted border-[#EAEEE4]/[0.08] px-3 max-[1200px]:[order:var(--integration-order)] min-[811px]:h-[84px] min-[811px]:px-4 min-[1201px]:h-[94px] min-[1201px]:w-[240px] min-[1201px]:px-[24px] min-[1201px]:[grid-column:var(--integration-col)] min-[1201px]:[grid-row:var(--integration-row)]',
    centeredTabletCard ? 'min-[811px]:max-[1200px]:col-start-2' : '',
    startsSecondTabletRow ? 'min-[811px]:max-[1200px]:col-start-1 min-[811px]:max-[1200px]:row-start-2' : '',
    shouldShowOnMobile ? '' : 'max-[810px]:hidden',
  ].join(' ')
}

export function IntegrationCard({ label, logo, iconBg, col, row, index }: IntegrationCardProps) {
  return (
    <div
      className={getResponsiveCardClassName(index)}
      style={{
        ...getIntegrationCardStyle({ col, row }),
        '--integration-order': index < 10 ? 0 : 20,
      } as CSSProperties}
    >
      <div className="flex items-center gap-3 opacity-60 min-[1201px]:gap-[14px]">
        {iconBg ? (
          <span
            className="flex size-7 shrink-0 items-center justify-center overflow-hidden rounded-[8px] min-[1201px]:size-8"
            style={{ backgroundColor: iconBg }}
          >
            <img src={integrationLogoById[logo]} alt="" className="block size-5 object-contain min-[1201px]:size-[22px]" loading="lazy" />
          </span>
        ) : (
          <img src={integrationLogoById[logo]} alt="" className="block size-7 rounded-[8px] object-contain min-[1201px]:size-8" loading="lazy" />
        )}
        <span className="font-space-grotesk text-[13px] font-normal leading-[1.5] tracking-[-0.04em] text-[#EAEEE4] min-[811px]:text-[14px] min-[1201px]:text-[16px]">
          {label}
        </span>
      </div>
    </div>
  )
}
