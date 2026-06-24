import type { SVGProps } from 'react'

type MockupChartIconProps = SVGProps<SVGSVGElement>

export function MockupChartIcon({ className = 'h-[74px] w-[142px]', ...props }: MockupChartIconProps) {
  return (
    <svg viewBox="0 0 142 74" className={className} fill="none" aria-hidden="true" {...props}>
      <path
        d="M0 58.5 17.8 39.2 32.7 23 40.7.2h14.6l27.8 30.2 25.8 28h7.7l25.4-27.7 14.9-16.2h12.5L182.8.2"
        stroke="#A2D035"
        strokeWidth=".8"
      />
      <path
        d="M17.8 39.2 0 58.5V69h142V30.7l-25.4 27.7h-7.7l-25.8-28L55.3.2H40.7L32.7 23 17.8 39.2Z"
        fill="url(#mockupChartFill)"
      />
      <defs>
        <linearGradient id="mockupChartFill" x1="71" x2="71" y1="0" y2="69" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A2D035" stopOpacity=".72" />
          <stop offset="1" stopColor="#A2D035" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
