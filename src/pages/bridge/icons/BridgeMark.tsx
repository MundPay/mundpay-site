export function BridgeMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" aria-hidden="true">
      <path
        d="M3 21c0-6.1 4.9-11 11-11s11 4.9 11 11"
        fill="none"
        stroke="#A2D035"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path d="M3 21h22" stroke="#EAEDE4" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M9 21v-5M14 21v-8M19 21v-5" stroke="#A2D035" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
