import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { PrimaryCtaButton } from '../layout/PrimaryCtaButton'

type HeroCopyProps = {
  onStartNow: () => void
}

const heroCopyMotion = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay: 0.1, ease: 'easeOut' },
} as const

export function HeroCopy({ onStartNow }: HeroCopyProps) {
  const { t } = useTranslation()
  const titleLines = [
    t('home.hero.title.lineOne'),
    t('home.hero.title.lineTwo'),
  ]
  const descriptionLines = [
    t('home.hero.description.lineOne'),
    t('home.hero.description.lineTwo'),
  ]

  return (
    <motion.div
      className="relative z-10 mx-auto max-w-[1200px] px-5 pt-[244px] text-center"
      initial={heroCopyMotion.initial}
      animate={heroCopyMotion.animate}
      transition={heroCopyMotion.transition}
    >
      <h1 className="mx-auto max-w-[350px] font-rethink-sans text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-white min-[811px]:max-w-none">
        {titleLines.map((line) => (
          <span key={line} className="block min-[811px]:whitespace-nowrap">
            {line}
          </span>
        ))}
      </h1>
      <p className="mx-auto mt-7 max-w-[340px] font-space-grotesk text-[20px] font-normal leading-[1.5] tracking-[-0.02em] text-[#EAEEE4BF] min-[811px]:max-w-none">
        {descriptionLines.map((line) => (
          <span key={line} className="block min-[811px]:whitespace-nowrap">
            {line}
          </span>
        ))}
      </p>
      <PrimaryCtaButton onClick={onStartNow}>
        {t('home.hero.ctaLabel')}
      </PrimaryCtaButton>
    </motion.div>
  )
}
