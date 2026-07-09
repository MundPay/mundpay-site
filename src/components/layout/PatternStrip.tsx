import type { CSSProperties } from 'react'
import { twMerge } from 'tailwind-merge'

const patternMask =
  'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27126%27 height=%27126%27 viewBox=%270 0 126 126%27%3E%3Cpath fill=%27none%27 stroke=%27white%27 stroke-width=%272%27 d=%27M-1 24 24-1M-1 66 67-2M-1 108 108-1M21 128 127 22m1 41-65 65m67-25-25 25%27/%3E%3C/svg%3E")'

const patternStyle = {
  backgroundColor: 'currentColor',
  border: 0,
  maskImage: patternMask,
  maskPosition: 'left top',
  maskRepeat: 'repeat',
  maskSize: '31.5px 31.5px',
  WebkitMaskImage: patternMask,
  WebkitMaskPosition: 'left top',
  WebkitMaskRepeat: 'repeat',
  WebkitMaskSize: '31.5px 31.5px',
} as CSSProperties

type PatternStripProps = {
  side?: 'left' | 'right'
  opacity?: number
  lineClassName?: string
  className?: string
  imageClassName?: string
  divider?: boolean
  dividerClassName?: string
}

export function PatternStrip({
  side = 'left',
  opacity = 0.2,
  lineClassName,
  className,
  imageClassName,
  divider = false,
  dividerClassName,
}: PatternStripProps) {
  return (
    <div
      data-pattern-strip={side}
      className={twMerge(
        'pointer-events-none absolute inset-y-0 z-[1] w-[40px] overflow-visible',
        'text-[#050700]',
        side === 'left' ? 'left-0' : 'right-0',
        lineClassName,
        className,
      )}
      style={{ opacity }}
    >
      <div
        data-pattern-strip-image
        className={twMerge('absolute inset-0', imageClassName)}
        style={patternStyle}
      />

      {divider ? (
        <span
          data-pattern-strip-divider
          className={twMerge(
            'absolute inset-y-0 w-px bg-[#0507001A]',
            side === 'left' ? 'right-0' : 'left-0',
            dividerClassName,
          )}
        />
      ) : null}
    </div>
  )
}
