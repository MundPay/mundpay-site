import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { mundpayAssets } from '../../assets/mundpayAssets'
import { LanguageSwitcher } from '../../components/home/LanguageSwitcher'
import { helpNavbarLinks } from './helpData'

export function HelpNavbar() {
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-30 bg-mundpay-ink/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1175px] items-center justify-between gap-3 px-5 py-2 md:px-0">
        <nav className="flex min-h-14 min-w-0 items-center rounded-[32px] border border-white/[0.04] bg-[linear-gradient(180deg,rgb(11,11,14)_0%,#050700_100%)] px-4 py-2 shadow-[0_8px_16px_rgba(0,0,0,0.1)]">
          <Link to={helpNavbarLinks.help} aria-label="Mundpay help" className="flex shrink-0 items-center">
            <img src={mundpayAssets.logoWhite} alt="mundpay" className="h-6 w-auto max-w-[124px] sm:max-w-none" />
          </Link>
          <span className="mx-4 hidden h-4 w-px shrink-0 bg-mundpay-cream/10 sm:block" />
          <span className="hidden shrink-0 font-instrument-serif text-[15px] italic leading-none text-mundpay-cream sm:inline">
            {t('home.nav.helpAreaLabel')}
          </span>
          <span className="mx-5 hidden h-4 w-px shrink-0 bg-mundpay-cream/10 md:block" />
          <Link
            to={helpNavbarLinks.home}
            className="hidden h-10 items-center rounded-full px-3 font-space-grotesk text-[16px] font-medium leading-none tracking-[-0.02em] text-mundpay-cream/75 transition hover:text-mundpay-cream md:flex"
          >
            {t('home.nav.knowMundpay')}
          </Link>
        </nav>

        <div className="flex min-h-14 shrink-0 items-center gap-1 rounded-[32px] border border-white/[0.04] bg-[linear-gradient(180deg,rgb(11,11,14)_0%,#050700_100%)] p-1.5 font-space-grotesk text-[13px] font-bold uppercase leading-none tracking-[-0.03em] shadow-[0_8px_16px_rgba(0,0,0,0.1)] sm:text-[16px]">
          <LanguageSwitcher isLight={false} />
          <a
            href={helpNavbarLinks.login}
            target="_blank"
            rel="noopener"
            className="flex h-10 items-center justify-center rounded-full px-3 text-mundpay-cream transition hover:bg-mundpay-cream/5 sm:px-4"
          >
            {t('home.nav.logIn')}
          </a>
          <a
            href={helpNavbarLinks.register}
            target="_blank"
            rel="noopener"
            className="flex h-10 items-center justify-center rounded-full bg-mundpay-lime/[0.02] px-3 text-mundpay-cream transition hover:bg-mundpay-lime/10 sm:px-4"
          >
            {t('home.nav.signUp')}
          </a>
        </div>
      </div>
    </header>
  )
}
