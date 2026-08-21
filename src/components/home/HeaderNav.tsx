import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import { normalizeLanguage, withLanguagePrefix } from '../../i18n/languageRouting'
import { defaultLanguage } from '../../i18n/resources'
import { Logo } from '../brand/Logo'
import type { HomeVariant } from './HomeVariant'
import { HeaderAuthLinks } from './header-nav/HeaderAuthLinks'
import { HeaderMenuLink } from './header-nav/HeaderMenuLink'
import { getNavSurfaceClassName } from './header-nav/headerNavStyles'
import { LpHeaderContent } from './header-nav/LpHeaderContent'
import { TrackOrderLink } from './header-nav/TrackOrderLink'
import { MobileHeaderMenu } from './header-nav/MobileHeaderMenu'
import { LanguageSwitcher } from './LanguageSwitcher'

const navItems = [
  { key: 'about', href: '#benefits' },
  { key: 'globalSale', href: '#global' },
  { key: 'blog', href: 'https://mundpay.com/blog' },
  { key: 'help', href: '/me-ajuda' },
] as const

type HeaderNavProps = {
  onStartNow: () => void
  variant?: HomeVariant
}

export function HeaderNav({ onStartNow, variant = 'default' }: HeaderNavProps) {
  const { i18n, t } = useTranslation()
  const [isLight, setIsLight] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const currentLanguage = normalizeLanguage(i18n.resolvedLanguage) ?? defaultLanguage

  useEffect(() => {
    const updateNavTheme = () => {
      if (window.innerWidth >= 1280) {
        setIsMobileMenuOpen(false)
      }

      const featuresSection = document.getElementById('features1')

      if (!featuresSection) {
        setIsLight(false)
        return
      }

      const rect = featuresSection.getBoundingClientRect()
      const triggerPoint = window.innerHeight * 0.3
      const sectionHasReachedTrigger = rect.top <= triggerPoint
      const sectionStillCoversHeader = rect.bottom > 96

      setIsLight(sectionHasReachedTrigger && sectionStillCoversHeader)
    }

    updateNavTheme()
    window.addEventListener('scroll', updateNavTheme, { passive: true })
    window.addEventListener('resize', updateNavTheme)

    return () => {
      window.removeEventListener('scroll', updateNavTheme)
      window.removeEventListener('resize', updateNavTheme)
    }
  }, [])

  return (
    <motion.header
      className={twMerge(
        'fixed inset-x-0 top-9 z-40 w-full border-0 border-transparent transition-colors duration-500',
        isLight ? 'bg-[#EAEEE4]' : 'bg-[#050700]',
      )}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-300 items-center justify-between px-4 py-3 xl:px-10 xl:py-5">
        {variant === 'lp' ? (
          <LpHeaderContent
            ctaLabel={t('home.lp.headerCta')}
            isLight={isLight}
            onStartNow={onStartNow}
          />
        ) : (
          <>
            <div
              className={getNavSurfaceClassName(
                isLight,
                'relative z-10 flex min-h-14 w-full items-center justify-between px-3 py-1.5 xl:hidden',
              )}
            >
              <Logo
                dark={isLight}
                className="shrink-0 pl-1"
                imageClassName="block h-6 w-36 max-w-full object-contain"
              />
              <MobileHeaderMenu
                isLight={isLight}
                isOpen={isMobileMenuOpen}
                onOpenChange={setIsMobileMenuOpen}
                onStartNow={onStartNow}
              />
            </div>

            <nav
              className={getNavSurfaceClassName(
                isLight,
                'hidden min-h-14 w-auto items-center gap-3 px-4 py-2 xl:flex xl:min-w-[512.17px]',
              )}
            >
              <Logo
                dark={isLight}
                className="shrink-0"
                imageClassName="block h-6 w-36 min-w-36 max-w-none shrink-0 object-contain"
              />
              <span
                className={twMerge(
                  'hidden h-4 w-px flex-none transition-colors duration-500 sm:block',
                  isLight ? 'bg-[#050700]/12' : 'bg-white/12',
                )}
              />
              <div
                className={twMerge(
                  'hidden items-center gap-1 font-space-grotesk text-[16px] font-normal leading-[1.5] tracking-[-0.02em] transition-colors duration-500 xl:flex',
                  isLight ? 'text-[#050700]/75' : 'text-[#EAEEE4BF]',
                )}
              >
                {navItems.map((item) => (
                  <HeaderMenuLink
                    key={item.key}
                    href={
                      item.key === 'help'
                        ? withLanguagePrefix(item.href, currentLanguage)
                        : item.href
                    }
                    isLight={isLight}
                    label={t(`home.nav.items.${item.key}`)}
                  />
                ))}
              </div>
            </nav>

            <div
              className={getNavSurfaceClassName(
                isLight,
                'hidden min-h-14 w-auto items-center gap-1 p-1.5 font-space-grotesk text-[16px] font-bold uppercase leading-none tracking-[-0.03em] xl:flex xl:min-w-[456px]',
              )}
            >
              <LanguageSwitcher isLight={isLight} />
              <TrackOrderLink label={t('home.nav.findOrder')} />
              <HeaderAuthLinks
                isLight={isLight}
                signUpLabel={t('home.nav.signUp')}
                logInLabel={t('home.nav.logIn')}
                onSignUp={onStartNow}
              />
            </div>
          </>
        )}
      </div>
    </motion.header>
  )
}
