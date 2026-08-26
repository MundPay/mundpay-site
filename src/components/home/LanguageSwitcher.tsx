import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import brazilFlag from '../../assets/image/e1d425d910-MwQ1uNop6fB9tCS9BuqD3t0PXYQ.png'
import unitedStatesFlag from '../../assets/image/c4a9921e72-gFEkeGlHOODB9yVcObGjUek8.png'
import { LanguageChevronIcon } from '../icons/LanguageChevronIcon'
import type { SupportedLanguage } from '../../i18n/resources'
import { withLanguagePrefix } from '../../i18n/languageRouting'

type LanguageSwitcherProps = {
  compact?: boolean
  isLight: boolean
}

const languageOptions: Array<{
  value: SupportedLanguage
  shortLabel: string
  flag: string
}> = [
  { value: 'pt-BR', shortLabel: 'PT', flag: brazilFlag },
  { value: 'en', shortLabel: 'EN', flag: unitedStatesFlag },
]

function getCurrentLanguage(language?: string): SupportedLanguage {
  return language === 'pt-BR' ? 'pt-BR' : 'en'
}

export function LanguageSwitcher({ compact = false, isLight }: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation()
  const navigate = useNavigate()
  const { hash, pathname, search } = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const switcherRef = useRef<HTMLDivElement>(null)
  const currentLanguage = getCurrentLanguage(i18n.resolvedLanguage)
  const currentOption =
    languageOptions.find((option) => option.value === currentLanguage) ??
    languageOptions[0]

  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      if (!switcherRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleLanguageChange = (language: SupportedLanguage) => {
    setIsOpen(false)
    void i18n.changeLanguage(language)

    const nextPath = withLanguagePrefix(`${pathname}${search}${hash}`, language)

    if (nextPath !== `${pathname}${search}${hash}`) {
      navigate(nextPath)
    }
  }

  return (
    <div
      ref={switcherRef}
      className={twMerge(
        'relative h-10 w-[78px] flex-none',
        compact && 'w-11',
      )}
    >
      <button
        type="button"
        className={twMerge(
          'flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-transparent px-3 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-mundpay-lime',
          compact && 'gap-1 px-1.5',
          isLight
            ? 'text-mundpay-ink hover:bg-mundpay-ink/[0.025]'
            : 'text-mundpay-cream hover:bg-mundpay-cream/[0.035]',
        )}
        aria-label={t('home.nav.languageSelectLabel')}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <img
          src={currentOption.flag}
          alt=""
          className="size-5 rounded-full object-cover"
        />
        <span className="sr-only">{currentOption.shortLabel}</span>
        <LanguageChevronIcon
          className={twMerge(
            'size-3 flex-none transition-transform',
            isOpen && 'rotate-180',
          )}
        />
      </button>

      {isOpen ? (
        <div
          role="listbox"
          aria-label={t('home.nav.languageSelectLabel')}
          className={twMerge(
            'absolute left-0 top-[46px] z-50 w-full overflow-hidden rounded-[12px] border py-1 shadow-[0_14px_28px_rgba(0,0,0,0.24)]',
            compact && 'w-[78px]',
            isLight
              ? 'border-mundpay-ink/10 bg-mundpay-cream text-mundpay-ink'
              : 'border-mundpay-cream/12 bg-mundpay-ink text-mundpay-cream',
          )}
        >
          {languageOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={option.value === currentLanguage}
              className={twMerge(
                'flex h-9 w-full items-center gap-2 px-3 text-left font-space-grotesk text-[14px] font-semibold leading-none transition-colors focus:outline-none',
                option.value === currentLanguage
                  ? 'bg-mundpay-lime text-mundpay-ink'
                  : isLight
                    ? 'text-mundpay-ink/80 hover:bg-mundpay-ink/8 focus:bg-mundpay-ink/8'
                    : 'text-mundpay-cream/80 hover:bg-mundpay-cream/10 focus:bg-mundpay-cream/10',
              )}
              onClick={() => handleLanguageChange(option.value)}
            >
              <img
                src={option.flag}
                alt=""
                className="size-5 rounded-full object-cover"
              />
              <span>{option.shortLabel}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
