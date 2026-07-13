import trackOrderIcon from '../../../assets/image/3507a8cc41-jtN9X3wUuHlfmuioJIF8R1zXPkU.svg'

type TrackOrderLinkProps = {
  label: string
}

export function TrackOrderLink({ label }: TrackOrderLinkProps) {
  return (
    <a
      href="https://orders.mundpay.com/"
      target='_blank'
      className="flex h-10 min-w-[166px] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#A2D035] px-4 text-[#050700] shadow-[0_0_26px_rgba(162,208,53,0.18)] transition hover:bg-[#A2D035]"
    >
      <img src={trackOrderIcon} alt="" className="size-4 shrink-0" />
      <span className="hidden whitespace-nowrap sm:inline">{label}</span>
    </a>
  )
}
