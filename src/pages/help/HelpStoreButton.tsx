import { AppleIcon } from '../../components/icons/AppleIcon'
import { PlayStoreIcon } from '../../components/icons/PlayStoreIcon'

type HelpStoreButtonProps = {
  href: string
  icon: 'apple' | 'play'
  label: string
}

export function HelpStoreButton({ href, icon, label }: HelpStoreButtonProps) {
  const Icon = icon === 'apple' ? AppleIcon : PlayStoreIcon

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="flex h-[32px] w-fit items-center gap-2 rounded-full bg-[#EAEEE4]/[0.05] px-3.5 text-[13px] font-bold leading-none text-[#EAEEE4]/75 transition hover:bg-[#A2D035]/10 hover:text-[#EAEEE4]"
    >
      <Icon className="size-4" />
      {label}
    </a>
  )
}
