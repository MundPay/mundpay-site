import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AwardsCarousel } from './AwardsCarousel'
import { awardSlides } from './awardsData'

export type AwardSlideDirection = -1 | 1

function getPreviousSlideIndex(current: number) {
  return current === 0 ? awardSlides.length - 1 : current - 1
}

function getNextSlideIndex(current: number) {
  return (current + 1) % awardSlides.length
}

export function AwardsSection() {
  const { t } = useTranslation()
  const [activeSlide, setActiveSlide] = useState(0)
  const [slideDirection, setSlideDirection] = useState<AwardSlideDirection>(1)

  const goToPrevious = () => {
    setSlideDirection(-1)
    setActiveSlide(getPreviousSlideIndex)
  }

  const goToNext = () => {
    setSlideDirection(1)
    setActiveSlide(getNextSlideIndex)
  }

  useEffect(() => {
    const autoplayTimer = window.setInterval(() => {
      setSlideDirection(1)
      setActiveSlide(getNextSlideIndex)
    }, 4000)

    return () => {
      window.clearInterval(autoplayTimer)
    }
  }, [])

  return (
    <section
      id="premios"
      className="relative z-[2] w-full overflow-hidden bg-[#050700] text-[#EAEEE4]"
    >
      <div className="mx-auto flex w-full max-w-[1120px] items-start px-4 py-16 min-[811px]:px-8 min-[811px]:py-24 min-[1201px]:h-[574px] min-[1201px]:px-0 min-[1201px]:py-0 min-[1201px]:pt-[104px]">
        <div className="grid w-full grid-cols-1 border-y border-[#EAEEE4]/10 min-[811px]:h-[326px] min-[811px]:grid-cols-2 min-[1201px]:grid-cols-[560px_560px]">
          <div className="flex flex-col justify-center py-10 min-[811px]:h-full min-[811px]:py-0 min-[811px]:pr-10 min-[1201px]:pr-[72px]">
            <p className="font-instrument-serif text-[18px] font-normal italic leading-[1.1] tracking-[0.01em] text-[#EAEEE4]">
              {t('home.awards.eyebrow')}
            </p>
            <h2 className="mt-5 font-rethink-sans text-[30px] font-bold leading-[1.1] tracking-[-0.045em] text-[#EAEEE4] min-[811px]:text-[35px] min-[1201px]:mt-[24px] min-[1201px]:text-[40px]">
              {t('home.awards.title')}
            </h2>
            <p className="mt-4 max-w-[470px] font-space-grotesk text-[16px] font-semibold leading-[1.45] tracking-[-0.03em] text-[#EAEEE4]/70 min-[1201px]:mt-[18px] min-[1201px]:text-[18px]">
              {t('home.awards.description')}
            </p>
          </div>

          <AwardsCarousel
            activeSlide={activeSlide}
            direction={slideDirection}
            onNext={goToNext}
            onPrevious={goToPrevious}
          />
        </div>
      </div>
    </section>
  )
}
