import type { CSSProperties } from 'react'
import { twMerge } from 'tailwind-merge'
import featurePattern from '../../../assets/image/423250d82e-zkZcqLYKrbf3IcoLGmkQF4odXvY.svg'

const patternStyle = {
  backgroundImage: `url("${featurePattern}")`,
  backgroundRepeat: 'repeat',
  backgroundPosition: 'left top',
  backgroundSize: '31.5px auto',
  border: 0,
} as CSSProperties

type PatternStripProps = {
  side?: 'left' | 'right'
}

export function PatternStrip({ side = 'left' }: PatternStripProps) {
  return (
    <div
      data-feature-pattern-strip={side}
      className={twMerge(
        'pointer-events-none absolute inset-y-0 z-[1] w-[40px] overflow-visible opacity-20',
        side === 'left' ? 'left-0' : 'right-0',
      )}
    >
      <div data-feature-pattern-image className="absolute inset-0" style={patternStyle} />
      <span
        className={twMerge(
          'absolute inset-y-0 w-px bg-[#0507001A]',
          side === 'left' ? 'right-0' : 'left-0',
        )}
      />
    </div>
  )
}
