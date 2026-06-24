import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { notFoundCopy } from './notFoundData'

export function NotFoundContent() {
  const { t } = useTranslation()

  return (
    <section className="relative z-[2] mx-auto flex min-h-screen w-full max-w-[900px] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-rethink-sans text-[46px] font-black leading-[0.98] tracking-[-0.025em] text-[#EAEEE4] sm:text-[60px] md:text-[66px]">
        {t('notFound.title')}
      </h1>
      <p className="mt-[22px] font-space-grotesk text-[20px] font-medium leading-[1.35] tracking-[-0.02em] text-[#EAEEE4]/65 md:text-[24px]">
        {t('notFound.description')}
      </p>

      <Link
        to={notFoundCopy.ctaHref}
        className="mt-[46px] flex h-[56px] items-center justify-center rounded-full border border-[#EAEEE4]/10 bg-[#050700] px-[33px] font-rethink-sans text-[16px] font-black uppercase leading-none tracking-[-0.005em] text-[#EAEEE4] shadow-[0_0_0_0_rgba(162,208,53,0)] [word-spacing:0.14em] transition-[border-color,box-shadow,background-color] duration-300 hover:border-[#A2D035] hover:bg-[#080A04] hover:shadow-[0_0_0_10px_rgba(162,208,53,0.18)]"
      >
        {t('notFound.ctaLabel')}
      </Link>
    </section>
  )
}
