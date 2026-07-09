import type { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { PrimaryCtaArrow } from './PrimaryCtaArrow'

type PrimaryCtaButtonProps = ComponentPropsWithoutRef<'button'>

const primaryCtaClassName =
  'group relative mx-auto mt-7 inline-flex h-[58px] min-w-[182px] cursor-pointer items-center justify-between rounded-full bg-[rgba(162,209,52,0.2)] p-px font-space-grotesk text-[16px] font-bold uppercase leading-none tracking-[-0.03em] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_1px_1px_rgba(0,0,0,0.25),0_0_0_0_rgba(162,208,53,0.2)] transition-all duration-200 hover:bg-[#A2D035] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_1px_1px_rgba(0,0,0,0.25),0_0_0_8px_rgba(162,208,53,0.2)]'

const primaryCtaInnerClassName =
  'flex h-full w-full items-center justify-between gap-8 whitespace-nowrap rounded-full bg-[linear-gradient(180deg,rgb(11,11,14)_0%,#050700_100%)] px-6'

export function PrimaryCtaButton({
  children,
  className,
  type = 'button',
  ...props
}: PrimaryCtaButtonProps) {
  return (
    <button type={type} className={twMerge(primaryCtaClassName, className)} {...props}>
      <span className={primaryCtaInnerClassName}>
        {children}
        <PrimaryCtaArrow />
      </span>
    </button>
  )
}
