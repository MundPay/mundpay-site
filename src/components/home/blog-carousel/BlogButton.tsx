import { useTranslation } from 'react-i18next'
import { BlogArrowRightIcon } from '../../icons/BlogArrowRightIcon'
import { blogHref } from './blogCarouselData'

export function BlogButton() {
  const { t } = useTranslation()

  return (
    <a
      href={blogHref}
      rel="noopener noreferrer"
      className="group relative inline-flex min-h-14 min-w-[220px] w-max cursor-pointer items-center rounded-full bg-[rgba(162,209,52,0.2)] p-px font-rethink-sans text-[14px] font-bold uppercase leading-none tracking-[-0.04em] text-[#EAEEE4] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_1px_1px_rgba(0,0,0,0.25),0_0_0_0_rgba(162,208,53,0.2)] transition-[background-color,box-shadow] duration-200 hover:bg-[#A2D035] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_1px_1px_rgba(0,0,0,0.25),0_0_0_8px_rgba(162,208,53,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A2D035] min-[811px]:mt-[72px]"
    >
      <span className="flex min-h-[54px] w-full items-center justify-between gap-4 whitespace-nowrap rounded-full bg-gradient-to-b from-[#0B0B0E] to-[#050700] py-[3px] pl-[22px] pr-[3px]">
        <span>{t('home.blogCarousel.buttonLabel')}</span>
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-transparent bg-[#050700] transition-colors duration-200 group-hover:border-[#A2D035]">
          <BlogArrowRightIcon className="size-6" />
        </span>
      </span>
    </a>
  )
}
