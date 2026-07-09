import { twMerge } from 'tailwind-merge'

type HeaderAuthLinksProps = {
  isLight: boolean
  logInLabel: string
  onSignUp: () => void
  signUpLabel: string
}

type HeaderAuthLinkProps = {
  children: string
  href: string
  isLight: boolean
  rel?: string
  side: 'left' | 'right'
}

type HeaderAuthButtonProps = {
  children: string
  isLight: boolean
  onClick: () => void
  side: 'left' | 'right'
}

function getAuthItemClassName(isLight: boolean, side: 'left' | 'right') {
  return twMerge(
    'flex min-h-10 min-w-[72px] cursor-pointer items-center justify-center border px-2.5 py-0.5 uppercase transition hover:bg-[#A2D035]/10',
    side === 'left' ? 'rounded-l-full' : 'rounded-r-full border-l-0',
    isLight
      ? 'border-[#050700]/10 bg-[#050700]/[0.02] text-[#050700]'
      : 'border-[#EAEEE4]/10 bg-[#A2D035]/[0.02] text-[#EAEEE4]',
    side === 'left' && 'border-r-[#050700]/45',
  )
}

export function HeaderAuthLinks({ isLight, logInLabel, onSignUp, signUpLabel }: HeaderAuthLinksProps) {
  return (
    <div className="hidden flex-none items-center overflow-hidden rounded-full md:flex">
      <HeaderAuthButton isLight={isLight} onClick={onSignUp} side="left">
        {signUpLabel}
      </HeaderAuthButton>
      <HeaderAuthLink
        href="https://login.mundpay.com/login"
        isLight={isLight}
        rel="noopener"
        side="right"
      >
        {logInLabel}
      </HeaderAuthLink>
    </div>
  )
}

function HeaderAuthButton({ children, isLight, onClick, side }: HeaderAuthButtonProps) {
  return (
    <button type="button" onClick={onClick} className={getAuthItemClassName(isLight, side)}>
      {children}
    </button>
  )
}

function HeaderAuthLink({ children, href, isLight, rel, side }: HeaderAuthLinkProps) {
  return (
    <a
      href={href}
      rel={rel}
      className={getAuthItemClassName(isLight, side)}
    >
      {children}
    </a>
  )
}
