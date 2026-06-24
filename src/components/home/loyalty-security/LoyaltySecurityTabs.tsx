import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import type { LoyaltySecurityTab } from './loyaltySecurityData'

type LoyaltySecurityTabsProps = {
  activeIndex: number
  onTabClick: (index: number) => void
  tabs: LoyaltySecurityTab[]
}

export function LoyaltySecurityTabs({
  activeIndex,
  onTabClick,
  tabs,
}: LoyaltySecurityTabsProps) {
  const { t } = useTranslation()

  return (
    <div className="grid h-[64px] grid-cols-2 border-b border-[#0507001A]">
      {tabs.map((tab, index) => {
        const isActive = activeIndex === index

        return (
          <button
            key={tab.translationKey}
            type="button"
            onClick={() => onTabClick(index)}
            className={twMerge(
              'cursor-pointer border-r border-[#0507001A] px-4 font-space-grotesk text-[16px] font-normal leading-none tracking-[-0.02em] transition-colors duration-200 last:border-r-0',
              isActive
                ? 'border-b border-b-[#A2D035] bg-[#E2EAD2] text-[#050700]'
                : 'bg-[#EAEEE4] text-[#050700] hover:bg-[#E2EAD2]/55',
            )}
          >
            <span className="block whitespace-nowrap">
              {t(`home.loyaltySecurity.tabs.${tab.translationKey}.label`)}
            </span>
          </button>
        )
      })}
    </div>
  )
}
