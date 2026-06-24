import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import trackOrderIcon from '../../assets/image/3507a8cc41-jtN9X3wUuHlfmuioJIF8R1zXPkU.svg'
import { Logo } from '../brand/Logo'
import { LanguageSwitcher } from './LanguageSwitcher'

const navItems = [
  { key: 'about', href: '#benefits' },
  { key: 'globalSale', href: '#global' },
  { key: 'blog', href: 'https://mundpay.com/blog' },
  { key: 'help', href: '/me-ajuda' },
] as const

export function HeaderNav() {
  const { t } = useTranslation()
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    const updateNavTheme = () => {
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
      <div className="mx-auto flex w-full max-w-300 items-center justify-between px-10 py-5">
        <nav
          className={twMerge(
            'flex min-h-14 w-auto items-center gap-3 rounded-[32px] border px-4 py-2 shadow-[0_8px_16px_rgba(0,0,0,0.1)] transition-all duration-500 lg:min-w-[512.17px]',
            isLight
              ? 'border-[#050700]/5 bg-[#EAEEE4]/90 shadow-[0_8px_24px_rgba(5,7,0,0.08)] backdrop-blur-xl'
              : 'border-white/[0.04] bg-[linear-gradient(180deg,rgb(11,11,14)_0%,#050700_100%)]',
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
              'hidden items-center gap-7 font-space-grotesk text-[16px] font-normal leading-[1.5] tracking-[-0.02em] transition-colors duration-500 md:flex',
              isLight ? 'text-[#050700]/75' : 'text-[#EAEEE4BF]',
            )}
          >
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener' : undefined}
                className={twMerge(
                  'whitespace-nowrap transition',
                  isLight ? 'hover:text-[#050700]' : 'hover:text-white',
                )}
              >
                {t(`home.nav.items.${item.key}`)}
              </a>
            ))}
          </div>
        </nav>

        <div
          className={twMerge(
            'flex min-h-14 w-auto items-center gap-1 rounded-[32px] border p-1.5 font-space-grotesk text-[16px] font-bold uppercase leading-none tracking-[-0.03em] shadow-[0_8px_16px_rgba(0,0,0,0.1)] transition-all duration-500 lg:min-w-[456px]',
            isLight
              ? 'border-[#050700]/5 bg-[#EAEEE4]/90 shadow-[0_8px_24px_rgba(5,7,0,0.08)] backdrop-blur-xl'
              : 'border-white/[0.04] bg-[linear-gradient(180deg,rgb(11,11,14)_0%,#050700_100%)]',
          )}
        >
          <LanguageSwitcher isLight={isLight} />
          <a
            href="/"
            className="flex h-10 min-w-[166px] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#A2D035] px-4 text-[#050700] shadow-[0_0_26px_rgba(162,208,53,0.18)] transition hover:bg-[#A2D035]"
          >
            <img src={trackOrderIcon} alt="" className="size-4 shrink-0" />
            <span className="hidden whitespace-nowrap sm:inline">
              {t('home.nav.findOrder')}
            </span>
          </a>
          <div className="hidden flex-none items-center overflow-hidden rounded-full md:flex">
            <a
              href="/"
              className={twMerge(
                'flex min-h-10 min-w-[72px] items-center justify-center rounded-l-full border border-r-0 px-2.5 py-0.5 transition hover:bg-[#A2D035]/10',
                isLight
                  ? 'border-[#050700]/10 bg-[#050700]/[0.02] text-[#050700]'
                  : 'border-[#EAEEE4]/10 bg-[#A2D035]/[0.02] text-[#EAEEE4]',
              )}
            >
              {t('home.nav.signUp')}
            </a>
            <a
              href="https://login.mundpay.com/login"
              rel="noopener"
              className={twMerge(
                'flex min-h-10 min-w-[72px] items-center justify-center rounded-r-full border border-l-0 px-2.5 py-0.5 transition hover:bg-[#A2D035]/10',
                isLight
                  ? 'border-[#050700]/10 bg-[#050700]/[0.02] text-[#050700]'
                  : 'border-[#EAEEE4]/10 bg-[#A2D035]/[0.02] text-[#EAEEE4]',
              )}
            >
              {t('home.nav.logIn')}
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
