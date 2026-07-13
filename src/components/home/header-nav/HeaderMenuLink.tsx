import { twMerge } from 'tailwind-merge'

function isExternalHref(href: string) {
  return href.startsWith('http')
}

type HeaderMenuLinkProps = {
  href: string
  isLight: boolean
  label: string
}

export function HeaderMenuLink({ href, isLight, label }: HeaderMenuLinkProps) {
  const external = isExternalHref(href)

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener' : undefined}
      className={twMerge(
        'whitespace-nowrap rounded-full px-3 py-1.5 transition-[background-color,color] duration-[400ms] ease-[cubic-bezier(.44,0,.56,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        isLight
          ? 'hover:bg-[#050700]/[0.04] hover:text-[#050700] focus-visible:outline-[#050700]/40'
          : 'hover:bg-[#EAEEE4]/[0.04] hover:text-[#EAEEE4] focus-visible:outline-[#EAEEE4]/40',
      )}
    >
      {label}
    </a>
  )
}
