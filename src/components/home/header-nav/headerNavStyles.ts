import { twMerge } from 'tailwind-merge'

export function getNavSurfaceClassName(isLight: boolean, className: string) {
  return twMerge(
    'rounded-[32px] border shadow-[0_8px_16px_rgba(0,0,0,0.1)] transition-all duration-500',
    isLight
      ? 'border-[#050700]/5 bg-[#EAEEE4]/90 shadow-[0_8px_24px_rgba(5,7,0,0.08)] backdrop-blur-xl'
      : 'border-white/[0.04] bg-[linear-gradient(180deg,rgb(11,11,14)_0%,#050700_100%)]',
    className,
  )
}
