import heroCtaArrow from '../../assets/image/881e1cc716-zeybPPuqmikW1tRr9OARiAHIVfM.svg'

export function PrimaryCtaArrow() {
  return (
    <span aria-hidden="true" className="relative size-6 shrink-0 overflow-hidden">
      <span className="absolute inset-0 flex w-14 -translate-x-8 items-center gap-2 transition-transform duration-[280ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0">
        <img src={heroCtaArrow} alt="" className="size-6 shrink-0" />
        <img src={heroCtaArrow} alt="" className="size-6 shrink-0" />
      </span>
    </span>
  )
}
