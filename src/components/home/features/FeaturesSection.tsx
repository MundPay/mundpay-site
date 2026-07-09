import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { FeatureContent } from './FeatureContent'
import { FeatureStackItem } from './FeatureStackItem'
import { features } from './featuresData'
import { FeatureTabs } from './FeatureTabs'
import { useFeatureScroll } from './useFeatureScroll'

const eyebrowStyle = {
  fontFeatureSettings: 'normal',
  fontSynthesis: 'none',
} as CSSProperties

export function FeaturesSection() {
  const { t } = useTranslation()
  const { activeIndex, handleTabClick, menuOffset, scrollRef } = useFeatureScroll(features.length)
  const activeFeature = features[activeIndex]

  return (
    <section
      id="features1"
      className="relative z-[2] flex w-full justify-center bg-[#EAEEE4] text-[#050700]"
    >
      <div className="relative z-[3] flex w-full max-w-[1200px] flex-col">
        <header className="relative flex min-h-[288px] w-full flex-col items-start justify-end gap-2 overflow-hidden border-x border-b border-[#0507001A] bg-[#EAEEE4] px-4 pb-10 pt-20 min-[811px]:flex-row min-[811px]:items-end min-[811px]:gap-2 min-[811px]:px-8 min-[811px]:pb-16 min-[811px]:pt-24 min-[1201px]:px-10 min-[1201px]:pb-20 min-[1201px]:pt-28">
          <div className="relative z-[2] flex min-w-0 flex-1 flex-col items-start gap-2 overflow-hidden">
            <p
              className="font-instrument-serif text-[18px] font-normal italic leading-[1.1] tracking-[0.01em] text-[#050700]"
              style={eyebrowStyle}
            >
              {t('home.features.eyebrow')}
            </p>
            <h2 className="max-w-[600px] font-rethink-sans text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-[#050700] min-[600px]:text-[32px] min-[811px]:text-[36px] min-[1201px]:text-[40px]">
              {t('home.features.title')}
            </h2>
          </div>
          <p className="relative z-[2] max-w-[560px] font-space-grotesk text-[15px] font-normal leading-[1.5] tracking-[-0.02em] text-[#050700] min-[811px]:max-w-[420px] min-[811px]:pb-4 min-[811px]:text-right min-[811px]:text-[16px] min-[1201px]:text-[18px]">
            {t('home.features.description')}
          </p>
        </header>

        <div ref={scrollRef} className="relative min-h-[420vh] border-x border-[#0507001A] max-[810px]:hidden">
          <div className="sticky top-0 grid h-screen grid-cols-[257px_minmax(0,1fr)] overflow-hidden bg-[#EAEEE4]">
            <FeatureTabs
              activeIndex={activeIndex}
              menuOffset={menuOffset}
              onTabClick={handleTabClick}
            />
            <FeatureContent feature={activeFeature} />
          </div>

          {features.slice(1).map((feature, index) => (
            <div
              key={feature.id}
              id={feature.id}
              className="absolute h-px w-px"
              style={{ top: `${((index + 1) / (features.length - 1)) * 100}%` }}
            />
          ))}
        </div>

        <div className="border-x border-[#0507001A] min-[811px]:hidden">
          {features.map((feature) => (
            <FeatureStackItem key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
