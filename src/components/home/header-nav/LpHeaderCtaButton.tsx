type LpHeaderCtaButtonProps = {
  label: string
  onClick: () => void
}

export function LpHeaderCtaButton({ label, onClick }: LpHeaderCtaButtonProps) {
  return (
    <button
      type="button"
      className="flex min-h-11 cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-[#A2D035] px-4 font-space-grotesk text-[14px] font-bold uppercase leading-none tracking-[-0.03em] text-[#050700] shadow-[0_0_26px_rgba(162,208,53,0.18)] transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A2D035] sm:px-5 sm:text-[15px]"
      onClick={onClick}
    >
      {label}
    </button>
  )
}
