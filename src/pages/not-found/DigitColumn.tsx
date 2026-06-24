import { notFoundDigitRepeatCount } from './notFoundData'

type DigitColumnProps = {
  digit: '4' | '0'
  direction: 'up' | 'down'
  className?: string
}

export function DigitColumn({ digit, direction, className = '' }: DigitColumnProps) {
  return (
    <div className={`relative h-[1320px] w-[205px] overflow-hidden md:w-[230px] ${className}`}>
      <div
        className={
          direction === 'up'
            ? 'not-found-digit-column not-found-digit-column-up'
            : 'not-found-digit-column not-found-digit-column-down'
        }
      >
        {Array.from({ length: notFoundDigitRepeatCount }).map((_, index) => (
          <span
            key={`${digit}-${index}`}
            className="block h-[280px] text-center font-rethink-sans text-[255px] font-black leading-[0.82] tracking-[-0.08em] text-[#EAEEE4]/[0.045] md:h-[320px] md:text-[315px]"
          >
            {digit}
          </span>
        ))}
      </div>
    </div>
  )
}
