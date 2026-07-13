import type { CSSProperties } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { loyaltySecurityTabs } from './loyaltySecurityData'
import { LoyaltySecurityPanel } from './LoyaltySecurityPanel'
import { LoyaltySecurityPatternStrip } from './LoyaltySecurityPatternStrip'
import { LoyaltySecurityTabs } from './LoyaltySecurityTabs'

const eyebrowStyle = {
  fontFeatureSettings: 'normal',
  fontSynthesis: 'none',
} as CSSProperties

export function LoyaltySecuritySection() {
  const { t } = useTranslation()
  const [activeIndex, setActiveIndex] = useState(0)
  const activeTab = loyaltySecurityTabs[activeIndex]

  return (
    <section className="relative z-[2] flex w-full justify-center bg-[#EAEEE4] text-[#050700]">
      <div className="relative z-[3] w-full max-w-[1200px] max-h-[918px] pb-14 border-t border-[#0507001A]">
        <LoyaltySecurityPatternStrip />
        <LoyaltySecurityPatternStrip side="right" />

        <div className="relative z-[2] mx-4 flex flex-col items-center sm:mx-8 lg:mx-10">
          <header className="flex min-h-[260px] flex-col items-center justify-end px-4 pb-12 pt-14 text-center sm:px-8 lg:min-h-[300px] lg:px-10 lg:pb-[60px] lg:pt-14">
            <p
              className="font-instrument-serif text-[18px] font-normal italic leading-[1.1] tracking-[0.01em] text-[#050700]"
              style={eyebrowStyle}
            >
              {t('home.loyaltySecurity.eyebrow')}
            </p>
            <h2 className="mt-4 max-w-[640px] font-rethink-sans text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#050700] lg:text-[40px]">
              {t('home.loyaltySecurity.title')}
            </h2>
            <p className="mt-6 max-w-[560px] font-space-grotesk text-base font-normal leading-[1.45] tracking-[-0.02em] text-[#29282C] lg:text-[18px]">
              {t('home.loyaltySecurity.description')}
            </p>
          </header>

          <div className="relative h-auto w-full max-w-[1120px] overflow-hidden border border-[#0507001A] bg-[#EAEEE4] min-[1201px]:h-[564px]">
            <LoyaltySecurityTabs
              activeIndex={activeIndex}
              onTabClick={setActiveIndex}
              tabs={loyaltySecurityTabs}
            />
            <LoyaltySecurityPanel activeTab={activeTab} />
          </div>
        </div>
      </div>
    </section>
  )
}
