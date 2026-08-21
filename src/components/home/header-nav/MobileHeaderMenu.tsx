import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import trackOrderIcon from '../../../assets/image/3507a8cc41-jtN9X3wUuHlfmuioJIF8R1zXPkU.svg'
import { MenuIcon } from '../../icons/MenuIcon'
import { XMarkIcon } from '../../icons/XMarkIcon'
import { AppDrawer } from '../../shared/AppDrawer'

type MobileHeaderMenuProps = {
  isLight: boolean
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  onStartNow: () => void
}

export function MobileHeaderMenu({
  isLight,
  isOpen,
  onOpenChange,
  onStartNow,
}: MobileHeaderMenuProps) {
  const { t } = useTranslation()

  const closeMenu = () => onOpenChange(false)

  const handleStartNow = () => {
    closeMenu()
    onStartNow()
  }

  return (
    <AppDrawer
      direction="left"
      open={isOpen}
      onOpenChange={onOpenChange}
      title={t('home.nav.mobileMenuLabel')}
      tone={isLight ? 'light' : 'dark'}
      trigger={
        <button
          type="button"
          aria-label={t(isOpen ? 'home.nav.closeMenu' : 'home.nav.openMenu')}
          className={twMerge(
            'flex size-11 shrink-0 items-center justify-center rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
            isLight
              ? 'bg-[#050700] text-[#EAEEE4] focus-visible:outline-[#050700]/40'
              : 'bg-[#A2D035] text-[#050700] focus-visible:outline-[#A2D035]',
          )}
        >
          {isOpen ? <XMarkIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </button>
      }
    >
      <nav
        aria-label={t('home.nav.mobileMenuLabel')}
        className="mx-auto flex w-full max-w-xl flex-col gap-2 pt-4 font-space-grotesk text-[15px] font-bold uppercase leading-none tracking-[-0.02em]"
      >
        <a
          href="https://orders.mundpay.com/"
          target="_blank"
          rel="noopener"
          className="flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#A2D035] px-5 text-center text-[#050700] transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A2D035]"
          onClick={closeMenu}
        >
          <img src={trackOrderIcon} alt="" className="size-4 shrink-0" />
          {t('home.nav.findOrder')}
        </a>
        <button
          type="button"
          className={twMerge(
            'flex min-h-13 items-center justify-center rounded-full border px-5 text-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
            isLight
              ? 'border-[#050700]/10 text-[#050700] hover:bg-[#050700]/5 focus-visible:outline-[#050700]/40'
              : 'border-[#EAEEE4]/10 text-[#EAEEE4] hover:bg-[#EAEEE4]/5 focus-visible:outline-[#EAEEE4]/40',
          )}
          onClick={handleStartNow}
        >
          {t('home.nav.startNow')}
        </button>
        <a
          href="https://login.mundpay.com/login"
          rel="noopener"
          className={twMerge(
            'flex min-h-13 items-center justify-center rounded-full border px-5 text-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
            isLight
              ? 'border-[#050700]/10 text-[#050700] hover:bg-[#050700]/5 focus-visible:outline-[#050700]/40'
              : 'border-[#EAEEE4]/10 text-[#EAEEE4] hover:bg-[#EAEEE4]/5 focus-visible:outline-[#EAEEE4]/40',
          )}
          onClick={closeMenu}
        >
          {t('home.nav.myAccount')}
        </a>
      </nav>
    </AppDrawer>
  )
}
