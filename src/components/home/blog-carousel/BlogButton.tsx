import { useTranslation } from 'react-i18next'
import { BlogArrowRightIcon } from '../../icons/BlogArrowRightIcon'
import { blogHref } from './blogCarouselData'

export function BlogButton() {
  const { t } = useTranslation()

  return (
    <a
      href={blogHref}
      rel="noopener noreferrer"
      className="group relative flex h-14 w-[220px] items-center overflow-hidden rounded-full bg-[rgba(162,209,52,0.20)] pl-6 pr-5 font-rethink-sans text-[14px] font-bold uppercase leading-none tracking-[-0.04em] text-[#EAEEE4] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_1px_1px_rgba(0,0,0,0.25)] min-[811px]:mt-[72px] min-[811px]:h-16 min-[811px]:w-[248px] min-[811px]:text-[16px] min-[1201px]:h-[70px] min-[1201px]:w-[276px] min-[1201px]:pl-[32px] min-[1201px]:pr-[24px] min-[1201px]:text-[18px]"
    >
      <span className="absolute inset-px rounded-full bg-gradient-to-b from-[#0B0B0E] to-[#050700]" />
      <span className="relative z-[1]">{t('home.blogCarousel.buttonLabel')}</span>
      <span className="absolute right-1.5 top-1/2 z-[1] flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#050700] transition-transform duration-300 group-hover:translate-x-[3px] min-[811px]:size-12 min-[1201px]:right-[8px] min-[1201px]:size-[54px]">
        <BlogArrowRightIcon className="size-6 min-[1201px]:size-[28px]" />
      </span>
    </a>
  )
}
