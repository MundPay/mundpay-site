import type { ReactNode } from 'react'

type GlobalCardProps = {
  children: ReactNode
  title: string
}

export function GlobalCard({ children, title }: GlobalCardProps) {
  return (
    <article className="relative h-[250px] w-full overflow-hidden border border-[#EAEEE4]/[0.05] bg-[#050700] min-[811px]:h-[260px]">
      <h3 className="relative z-[2] px-4 pt-[26px] text-center font-rethink-sans text-[19px] font-bold leading-[1.1] tracking-[-0.045em] text-[#EAEEE4] min-[811px]:text-[20px] min-[1201px]:pt-[30px] min-[1201px]:text-[22px]">
        {title}
      </h3>
      <div className="absolute inset-x-0 bottom-0 top-[60px] z-[1] min-[1201px]:top-[66px]">{children}</div>
    </article>
  )
}
