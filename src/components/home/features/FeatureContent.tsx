import type { CSSProperties } from 'react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import type { Feature } from './featuresData'
import { PatternStrip } from './PatternStrip'

const featureTitleStyle = {
  fontFeatureSettings: '"blwf" on, "cv09" on, "cv03" on, "cv04" on, "cv11" on',
  textWrap: 'balance',
} as CSSProperties

const featureDescriptionStyle = {
  textWrap: 'balance',
} as CSSProperties

const featureMotion = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.32, ease: 'easeOut' },
} as const

type FeatureContentProps = {
  feature: Feature
}

export function FeatureContent({ feature }: FeatureContentProps) {
  const { t } = useTranslation()

  return (
    <div className="relative flex h-full min-w-0 items-center overflow-hidden border-r border-[#0507001A]">
      <PatternStrip side="right" />
      <motion.div
        key={feature.id}
        initial={featureMotion.initial}
        animate={featureMotion.animate}
        transition={featureMotion.transition}
        className="relative z-[2] flex w-full min-w-0 flex-col pr-[40px]"
      >
        <div className="flex w-full flex-col items-start">
          <div className="relative flex h-min w-full flex-col content-start items-start justify-start gap-[16px] overflow-visible p-[40px]">
            <h3
              className="font-rethink-sans text-[24px] font-bold leading-[1.25] tracking-[-0.04em] text-[#050700]"
              style={featureTitleStyle}
            >
              {t(`home.features.items.${feature.translationKey}.title`)}
            </h3>
            <p
              className="font-space-grotesk text-[18px] font-normal leading-[1.5] tracking-[-0.02em] text-[#050700]"
              style={featureDescriptionStyle}
            >
              {t(`home.features.items.${feature.translationKey}.description`)}
            </p>
          </div>

          <div className="w-full overflow-hidden border border-[#0507001A] bg-[#EAEEE4] shadow-[0_20px_80px_rgba(5,7,0,0.04)]">
            <div className="flex h-6 items-center gap-2 border-b border-[#0507001A] px-3">
              <span className="size-2 rounded-full bg-[#0507001A]" />
              <span className="size-2 rounded-full bg-[#0507001A]" />
              <span className="size-2 rounded-full bg-[#0507001A]" />
            </div>
            <video
              key={feature.media}
              className="block h-[374px] w-full bg-[#050700] object-cover"
              src={feature.media}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
