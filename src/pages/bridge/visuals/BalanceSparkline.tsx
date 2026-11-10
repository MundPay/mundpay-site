export function BalanceSparkline() {
  return (
    <svg aria-hidden="true" className="spark" viewBox="0 0 110 44" fill="none">
      <path
        d="M2 36 14 30 26 33 40 20 54 24 68 12 82 16 96 6 108 9"
        stroke="#A2D035"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 36 14 30 26 33 40 20 54 24 68 12 82 16 96 6 108 9V44H2z"
        fill="url(#sg)"
        opacity=".5"
      />
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#A2D035" stopOpacity=".35" />
          <stop offset="1" stopColor="#A2D035" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
