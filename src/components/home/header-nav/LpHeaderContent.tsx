import { Logo } from '../../brand/Logo'
import { LanguageSwitcher } from '../LanguageSwitcher'
import { getNavSurfaceClassName } from './headerNavStyles'
import { LpHeaderCtaButton } from './LpHeaderCtaButton'

type LpHeaderContentProps = {
  ctaLabel: string
  isLight: boolean
  onStartNow: () => void
}

export function LpHeaderContent({ ctaLabel, isLight, onStartNow }: LpHeaderContentProps) {
  return (
    <>
      <div
        className={getNavSurfaceClassName(
          isLight,
          'flex min-h-14 w-fit max-w-full items-center justify-between gap-2 px-2 py-1.5 sm:gap-3 sm:px-3 xl:max-w-[512.17px] xl:px-4 xl:py-2',
        )}
      >
        <Logo
          dark={isLight}
          className="shrink-0 pl-1 xl:pl-0"
          imageClassName="block h-6 w-24 max-w-full object-contain sm:w-36"
        />
        <div className="flex items-center gap-1 xl:hidden">
          <LanguageSwitcher compact isLight={isLight} />
          <LpHeaderCtaButton compact label={ctaLabel} onClick={onStartNow} />
        </div>
      </div>

      <div
        className={getNavSurfaceClassName(
          isLight,
          'hidden min-h-14 items-center gap-1 p-1.5 xl:flex',
        )}
      >
        <LanguageSwitcher isLight={isLight} />
        <LpHeaderCtaButton label={ctaLabel} onClick={onStartNow} />
      </div>
    </>
  )
}
