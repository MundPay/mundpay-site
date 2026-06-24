import { DigitColumn } from './DigitColumn'
import { notFoundDigits } from './notFoundData'

export function NotFoundBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(75,78,96,0.22),rgba(8,9,12,0)_38%),linear-gradient(180deg,rgba(5,7,0,0.18),rgba(8,9,12,0.92))]" />

      <div className="pointer-events-none absolute inset-x-0 top-[-72px] flex justify-center opacity-100 [mask-image:linear-gradient(180deg,transparent_0%,black_10%,black_78%,transparent_100%)]">
        {notFoundDigits.map((item, index) => (
          <DigitColumn
            key={`${item.digit}-${index}`}
            digit={item.digit}
            direction={item.direction}
            className={item.className}
          />
        ))}
      </div>
    </>
  )
}
