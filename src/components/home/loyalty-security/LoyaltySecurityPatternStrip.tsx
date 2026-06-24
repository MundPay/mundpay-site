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

type LoyaltySecurityPatternStripProps = {
  side?: 'left' | 'right'
}

export function LoyaltySecurityPatternStrip({ side = 'left' }: LoyaltySecurityPatternStripProps) {
  return (
    <div
      className={twMerge(
        'pointer-events-none absolute inset-y-0 z-[1] w-[40px] overflow-visible',
        side === 'left'
          ? 'left-0 border-l border-[#0507001A]'
          : 'right-0 border-r border-[#0507001A]',
      )}
    >
      <div data-loyalty-pattern-image className="absolute inset-0 opacity-20" style={patternStyle} />
    </div>
  )
}
