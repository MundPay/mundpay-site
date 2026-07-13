import { mundpayAssets } from '../../assets/mundpayAssets'

const stats = [
  {
    icon: mundpayAssets.yearlySalesIcon,
    label: '+300 thousand sales per year',
  },
  {
    icon: mundpayAssets.usersIcon,
    label: '+30 thousand users',
  },
  {
    icon: mundpayAssets.countriesIcon,
    label: 'Accepted in over 190 countries',
  },
]

const marqueeItems = [...stats, ...stats, ...stats]

export function StatsMarquee() {
  return (
    <section className="relative z-10 mx-auto h-[164px] w-full max-w-300 bg-[#050700] before:absolute before:inset-y-0 before:left-1/2 before:z-0 before:w-screen before:-translate-x-1/2 before:bg-[#050700] after:pointer-events-none after:absolute after:inset-x-1/2 after:bottom-0 after:z-20 after:h-px after:w-screen after:-translate-x-1/2 after:bg-[#EAEEE40D]">
      <span className="pointer-events-none absolute inset-x-1/2 top-0 z-20 h-px w-screen -translate-x-1/2 bg-[#EAEEE40D]" />
      <span className="pointer-events-none absolute left-0 top-0 z-20 h-full w-px bg-[#EAEEE40D]" />
      <span className="pointer-events-none absolute right-0 top-0 z-20 h-full w-px bg-[#EAEEE40D]" />
      <div className="relative z-10 h-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-[linear-gradient(90deg,#050700_0%,rgba(5,7,0,0)_100%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-[linear-gradient(270deg,#050700_0%,rgba(5,7,0,0)_100%)]" />
        <ul className="flex h-full w-max items-center gap-6 [animation:stats-marquee_28s_linear_infinite]">
          {marqueeItems.map((item, index) => (
            <li key={`${item.label}-${index}`} className="flex h-12 shrink-0 items-center gap-6">
              <div className="flex h-12 shrink-0 items-center gap-3 rounded-[32px] border border-[#EAEEE305] px-4">
                <span className="relative size-6 shrink-0 select-none opacity-70">
                  <img
                    src={item.icon}
                    alt=""
                    className="absolute inset-0 size-full object-cover object-center"
                  />
                </span>
                <span className="whitespace-nowrap font-space-grotesk text-[16px] font-normal leading-[1.5] tracking-[-0.02em] text-[#EAEEE4BF]">
                  {item.label}
                </span>
              </div>
              <span className="shrink-0 text-[18px] leading-none text-[#A2D035]">{'\u2726'}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
