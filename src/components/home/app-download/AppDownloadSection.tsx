import appGrafismos from '../../../assets/image/app-grafismos.svg'
import { AppDownloadContent } from './AppDownloadContent'
import { PhoneMockup } from './PhoneMockup'

export function AppDownloadSection() {
  return (
    <section
      id="app"
      className="relative z-[2] w-full overflow-hidden border-b border-[#EAEEE4]/10 bg-[#050700] py-12 text-[#EAEEE4] min-[811px]:py-16 min-[1201px]:h-[560px] min-[1201px]:py-0"
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center px-4 min-[811px]:px-8 min-[1201px]:h-full min-[1201px]:px-0">
        <div className="grid w-full grid-cols-1 border border-[#EAEEE4]/10 min-[811px]:h-[420px] min-[811px]:grid-cols-2 min-[1201px]:h-[464px]">
          <div className="relative h-[300px] overflow-hidden bg-[#EAEEE4] min-[811px]:h-auto">
            <img
              src={appGrafismos}
              alt=""
              className="absolute left-0 top-[-66px] h-[430px] w-full max-w-none opacity-100 min-[811px]:h-[520px] min-[1201px]:h-[596px]"
              aria-hidden="true"
            />
            <PhoneMockup />
          </div>

          <AppDownloadContent />
        </div>
      </div>
    </section>
  )
}
