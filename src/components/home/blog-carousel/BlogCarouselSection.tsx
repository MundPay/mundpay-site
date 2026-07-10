import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BlogButton } from './BlogButton'
import { BlogCard } from './BlogCard'
import { blogCarouselConfig, blogPosts } from './blogCarouselData'
import { useBlogCarousel } from './useBlogCarousel'

export function BlogCarouselSection() {
  const { t } = useTranslation()
  const { autoplayDelay, dragThreshold, gap } = blogCarouselConfig
  const [visibleCards, setVisibleCards] = useState<number>(blogCarouselConfig.visibleCards)
  const { activeIndex, dragOffset, finishDrag, goTo, handleClickCapture, handlePointerDown, handlePointerMove, isDragging } =
    useBlogCarousel({
      autoplayDelay,
      dragThreshold,
      itemCount: blogPosts.length,
    })
  const trackItems = [...blogPosts, ...blogPosts.slice(0, visibleCards)]
  const itemWidth = `calc((100% - ${gap * (visibleCards - 1)}px) / ${visibleCards})`
  const translate = `calc(${activeIndex} * (((100% - ${gap * (visibleCards - 1)}px) / ${visibleCards}) + ${gap}px) * -1 + ${dragOffset}px)`

  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(window.matchMedia('(max-width: 810px)').matches ? 1 : blogCarouselConfig.visibleCards)
    }

    updateVisibleCards()
    window.addEventListener('resize', updateVisibleCards)

    return () => window.removeEventListener('resize', updateVisibleCards)
  }, [])

  return (
    <section className="relative z-[2] w-full overflow-hidden border-y border-[#EAEEE4]/10 bg-[#050700] py-12 text-[#EAEEE4] min-[811px]:py-14 min-[1201px]:h-[540px] min-[1201px]:py-0">
      <div className="mx-auto h-full w-full max-w-[1200px] px-4 min-[811px]:px-8 min-[1201px]:px-0 min-[1201px]:pt-[46px]">
        <div className="flex flex-col items-start gap-6 min-[811px]:flex-row min-[811px]:justify-between min-[811px]:gap-8">
          <div>
            <h2 className="font-rethink-sans text-[34px] font-bold leading-[1.12] tracking-[-0.055em] text-[#EAEEE4] min-[811px]:text-[40px] min-[1201px]:text-[48px]">
              {t('home.blogCarousel.title.lineOne')}
              <br />
              {t('home.blogCarousel.title.lineTwo')}
            </h2>
            <p className="mt-[10px] max-w-[520px] font-space-grotesk text-[18px] font-semibold leading-[1.45] tracking-[-0.04em] text-[#EAEEE4]/62 min-[811px]:max-w-[430px] min-[811px]:text-[21px] min-[1201px]:text-[24px]">
              {t('home.blogCarousel.description')}
            </p>
          </div>

          <BlogButton />
        </div>

        <div
          className="relative mt-8 h-[300px] select-none overflow-hidden min-[811px]:mt-[38px] min-[811px]:h-[242px]"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 7.5%, black 92.5%, transparent 100%)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 7.5%, black 92.5%, transparent 100%)',
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={finishDrag}
          onPointerCancel={finishDrag}
          onPointerLeave={finishDrag}
          onClickCapture={handleClickCapture}
        >
          <div
            className="flex h-full cursor-grab touch-pan-y gap-[10px] active:cursor-grabbing"
            style={{
              transform: `translateX(${translate})`,
              transition: isDragging ? 'none' : 'transform 650ms cubic-bezier(0.76, 0, 0.24, 1)',
            }}
          >
            {trackItems.map((post, index) => (
              <BlogCard key={`${post.href}-${index}`} post={post} width={itemWidth} />
            ))}
          </div>

          <div className="absolute bottom-[10px] left-1/2 z-[5] flex -translate-x-1/2 items-center rounded-full bg-black/20 px-[10px] py-[10px]">
            {blogPosts.map((post, index) => (
              <button
                key={post.href}
                type="button"
                aria-label={t('home.blogCarousel.carousel.pageLabel', { page: index + 1 })}
                onClick={() => goTo(index)}
                className="flex size-[20px] items-center justify-center"
              >
                <span
                  className={`size-[10px] rounded-full bg-[#DEE0D7] transition-opacity duration-200 ${
                    index === activeIndex % blogPosts.length ? 'opacity-100' : 'opacity-50'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
