import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import { features } from './featuresData'
import { PatternStrip } from './PatternStrip'

const tabLabelStyle = {
  fontFeatureSettings: '"blwf" on, "cv09" on, "cv03" on, "cv04" on, "cv11" on',
  fontSynthesis: 'none',
} as CSSProperties

const tabGuidePositions = ['left-[40px]', 'left-[55px]']

type FeatureTabsProps = {
  activeIndex: number
  menuOffset: number
  onTabClick: (index: number) => void
}

export function FeatureTabs({ activeIndex, menuOffset, onTabClick }: FeatureTabsProps) {
  const { t } = useTranslation()

  return (
    <aside className="relative h-full overflow-hidden border-r border-[#0507001A]">
      <PatternStrip />
      {tabGuidePositions.map((position) => (
        <div key={position} className={`absolute inset-y-0 ${position} z-[2] w-px bg-[#0507001A]`} />
      ))}
      <nav
        className="relative z-10 flex h-full w-[257px] flex-col items-start gap-6 px-10 pt-[180px]"
        style={{
          transform: `translateY(${menuOffset}px)`,
          willChange: 'transform',
        }}
      >
        {features.map((feature, index) => {
          const isActive = activeIndex === index

          return (
            <button
              key={feature.id}
              type="button"
              onClick={() => onTabClick(index)}
              className="group flex w-full cursor-pointer items-center justify-start gap-2 text-left"
            >
              <span
                className={twMerge(
                  'size-[15px] flex-none transition-colors duration-300',
                  isActive ? 'bg-[#A2D035]' : 'bg-[#AAAAB5]',
                )}
              />
              <span
                className={twMerge(
                  'whitespace-nowrap font-instrument-serif text-[14px] font-normal italic leading-[1.6] tracking-[-0.02em] text-[#29282C] transition-colors duration-300',
                  isActive ? 'text-[#09090B]' : 'group-hover:text-[#09090B]',
                )}
                style={tabLabelStyle}
              >
                &mdash; {t(`home.features.items.${feature.translationKey}.navLabel`)} &mdash;
              </span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
