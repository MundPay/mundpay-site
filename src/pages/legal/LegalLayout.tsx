import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { mundpayAssets } from '../../assets/mundpayAssets'
import { LegalFooter } from './LegalFooter'
import { legalSidebarRoutes, type LegalRoute } from './legalRoutes'

type LegalLayoutProps = {
  children: ReactNode
}

function LegalSidebarLink({ item }: { item: LegalRoute }) {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const { pathname } = useLocation()
  const { t } = useTranslation()
  const isActive = pathname === `/${item.path}`

  useEffect(() => {
    if (isActive && window.innerWidth < 768) {
      linkRef.current?.scrollIntoView({ block: 'nearest', inline: 'center' })
    }
  }, [isActive])

  return (
    <Link
      ref={linkRef}
      to={`/${item.path}`}
      aria-current={isActive ? 'page' : undefined}
      className={twMerge(
        'flex h-13 shrink-0 items-center whitespace-nowrap border-l px-5 font-space-grotesk text-[14px] font-bold leading-none tracking-[-0.025em] transition sm:text-[15px] md:w-full',
        isActive
          ? 'border-mundpay-lime bg-mundpay-cream/5 text-mundpay-cream'
          : 'border-transparent text-mundpay-cream/60 hover:bg-mundpay-cream/[0.03] hover:text-mundpay-cream',
      )}
    >
      {t(`legal.routes.${item.translationKey}`)}
    </Link>
  )
}

export function LegalLayout({ children }: LegalLayoutProps) {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen bg-mundpay-ink text-mundpay-cream">
      <header className="sticky top-0 z-30 border-b border-mundpay-cream/[0.03] bg-mundpay-ink/95 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1175px] items-center justify-between gap-3 px-5 py-5 md:px-0">
          <nav className="flex min-h-14 min-w-0 items-center rounded-[32px] border border-white/[0.04] bg-[linear-gradient(180deg,rgb(11,11,14)_0%,#050700_100%)] px-4 py-2 shadow-[0_8px_16px_rgba(0,0,0,0.1)]">
            <Link to="/" aria-label="Mundpay home" className="flex shrink-0 items-center">
              <img src={mundpayAssets.logoWhite} alt="mundpay" className="h-6 w-auto max-w-[124px] sm:max-w-none" />
            </Link>
            <span className="mx-4 hidden h-4 w-px shrink-0 bg-mundpay-cream/10 sm:block" />
            <span className="hidden shrink-0 font-instrument-serif text-[15px] italic leading-none text-mundpay-cream sm:inline">
              {t('home.nav.legalAreaLabel')}
            </span>
            <span className="mx-5 hidden h-4 w-px shrink-0 bg-mundpay-cream/10 md:block" />
            <Link
              to="/"
              className="hidden h-10 items-center rounded-full px-3 font-space-grotesk text-[16px] font-medium leading-none tracking-[-0.02em] text-mundpay-cream/75 transition hover:text-mundpay-cream md:flex"
            >
              {t('home.nav.knowMundpay')}
            </Link>
          </nav>

          <div className="flex min-h-14 shrink-0 items-center gap-1 rounded-[32px] border border-white/[0.04] bg-[linear-gradient(180deg,rgb(11,11,14)_0%,#050700_100%)] p-1.5 font-space-grotesk text-[13px] font-bold uppercase leading-none tracking-[-0.03em] shadow-[0_8px_16px_rgba(0,0,0,0.1)] sm:text-[16px]">
            <a
              href="https://app.mundpay.com/login"
              target="_blank"
              rel="noopener"
              className="flex h-10 items-center justify-center rounded-full px-3 text-mundpay-cream transition hover:bg-mundpay-cream/5 sm:px-4"
            >
              {t('home.nav.logIn')}
            </a>
            <a
              href="https://app.mundpay.com/register"
              target="_blank"
              rel="noopener"
              className="flex h-10 items-center justify-center rounded-full bg-mundpay-lime/[0.02] px-3 text-mundpay-cream transition hover:bg-mundpay-lime/10 sm:px-4"
            >
              {t('home.nav.signUp')}
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-[1182px] grid-cols-1 px-5 md:grid-cols-[272px_910px] md:px-0">
        <aside>
          <nav className="flex gap-2 overflow-x-auto border-x border-b border-mundpay-cream/[0.02] py-4 md:block md:overflow-visible md:py-0">
            {legalSidebarRoutes.map((item) => (
              <LegalSidebarLink key={item.path} item={item} />
            ))}
          </nav>
        </aside>

        <div className="border-r border-mundpay-cream/[0.02]">
          <section className="min-h-[calc(100vh-96px)] px-0 py-12 md:px-[96px] md:py-12 lg:px-[120px]">
            {children}
          </section>

          <LegalFooter />
        </div>
      </div>
    </main>
  )
}
