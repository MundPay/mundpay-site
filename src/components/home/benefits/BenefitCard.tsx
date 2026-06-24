import type { CSSProperties, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type BenefitCardProps = {
  title: string
  description: ReactNode
  visual: ReactNode
  className?: string
  contentClassName?: string
  titleClassName?: string
  titleTextWrap?: CSSProperties['textWrap']
  descriptionClassName?: string
}

const titleStyleBase = {
  fontFeatureSettings: '"blwf" on, "cv09" on, "cv03" on, "cv04" on, "cv11" on',
} as CSSProperties

export function BenefitCard({
  title,
  description,
  visual,
  className,
  contentClassName,
  titleClassName,
  titleTextWrap = 'balance',
  descriptionClassName,
}: BenefitCardProps) {
  return (
    <article
      className={twMerge(
        'relative min-h-[384px] overflow-hidden border-[#EAEEE40D] bg-[#050700] md:h-[480px]',
        className,
      )}
    >
      <div
        className={twMerge(
          'relative z-10 flex max-w-[448px] w-full flex-col gap-4 p-10',
          contentClassName,
        )}
      >
        <h3
          className={twMerge(
            'font-rethink-sans text-[24px] font-bold leading-[1.25] tracking-[-0.04em] text-[#EAEEE3E6]',
            titleClassName,
          )}
          style={{
            ...titleStyleBase,
            textWrap: titleTextWrap,
          } as CSSProperties}
        >
          {title}
        </h3>
        <p
          className={twMerge(
            'font-space-grotesk text-[16px] font-normal leading-[1.5] tracking-[-0.02em] text-[#EAEEE4BF]',
            descriptionClassName,
          )}
        >
          {description}
        </p>
      </div>
      {visual}
    </article>
  )
}
