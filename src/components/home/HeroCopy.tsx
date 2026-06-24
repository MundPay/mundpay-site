import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import heroCtaArrow from '../../assets/image/881e1cc716-zeybPPuqmikW1tRr9OARiAHIVfM.svg'

type HeroCopyProps = {
  onStartNow: () => void
}

const heroCopyMotion = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay: 0.1, ease: 'easeOut' },
} as const

const ctaButtonClassName =
  'group relative mx-auto mt-7 inline-flex h-[58px] min-w-[182px] cursor-pointer items-center justify-between rounded-full bg-[rgba(162,209,52,0.2)] p-px font-space-grotesk text-[16px] font-bold uppercase leading-none tracking-[-0.03em] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_1px_1px_rgba(0,0,0,0.25),0_0_0_0_rgba(162,208,53,0.2)] transition-all duration-200 hover:bg-[#A2D035] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_1px_1px_rgba(0,0,0,0.25),0_0_0_8px_rgba(162,208,53,0.2)]'

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
      <button
        type="button"
        onClick={onStartNow}
        className={ctaButtonClassName}
      >
        <span className="flex h-full w-full items-center justify-between gap-8 whitespace-nowrap rounded-full bg-[linear-gradient(180deg,rgb(11,11,14)_0%,#050700_100%)] px-6">
          {t('home.hero.ctaLabel')}
          <img src={heroCtaArrow} alt="" className="size-6 shrink-0" />
        </span>
      </button>
    </motion.div>
  )
}
