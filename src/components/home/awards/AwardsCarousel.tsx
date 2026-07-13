import type { ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { ChevronLeftIcon } from '../../icons/ChevronLeftIcon'
import { ChevronRightIcon } from '../../icons/ChevronRightIcon'
import type { AwardSlideDirection } from './AwardsSection'
import { awardSlides } from './awardsData'

type AwardsCarouselProps = {
  activeSlide: number
  direction: AwardSlideDirection
  onNext: () => void
  onPrevious: () => void
}

const slideVariants = {
  enter: (direction: AwardSlideDirection) => ({
    x: direction === 1 ? '100%' : '-100%',
  }),
  center: {
    x: 0,
  },
  exit: (direction: AwardSlideDirection) => ({
    x: direction === 1 ? '-100%' : '100%',
  }),
}

export function AwardsCarousel({ activeSlide, direction, onNext, onPrevious }: AwardsCarouselProps) {
  const { t } = useTranslation()
  const activeAward = awardSlides[activeSlide]

  return (
    <div className="group relative h-[260px] overflow-hidden border-x border-[#EAEEE4]/10 min-[811px]:h-full">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_right,transparent_0%,#000_5%,#000_95%,transparent_100%)]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={activeAward}
            src={activeAward}
            alt=""
            className="absolute inset-0 h-full w-full select-none object-cover"
            custom={direction}
            draggable={false}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.68, ease: [0.45, 0, 0.2, 1] }}
          />
        </AnimatePresence>
      </div>

      <div className="pointer-events-none absolute inset-4 flex items-center justify-between opacity-100 transition-opacity duration-150 min-[811px]:inset-[20px] min-[811px]:opacity-0 min-[811px]:group-hover:opacity-100">
        <CarouselButton label={t('home.awards.carousel.previousLabel')} onClick={onPrevious}>
          <ChevronLeftIcon className="size-[28px]" />
        </CarouselButton>
        <CarouselButton label={t('home.awards.carousel.nextLabel')} onClick={onNext}>
          <ChevronRightIcon className="size-[28px]" />
        </CarouselButton>
      </div>
    </div>
  )
}

function CarouselButton({
  children,
  label,
  onClick,
}: {
  children: ReactNode
  label: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="pointer-events-auto flex size-[44px] cursor-pointer items-center justify-center rounded-full bg-black/20 text-[#EAEEE4] transition-colors duration-150 hover:bg-black/40"
    >
      {children}
    </button>
  )
}
