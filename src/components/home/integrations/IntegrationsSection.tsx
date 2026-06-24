import { IntegrationCard } from './IntegrationCard'
import { integrationCards } from './integrationsData'
import { IntegrationsCenterCard } from './IntegrationsCenterCard'
import { IntegrationsOverlay } from './IntegrationsOverlay'

export function IntegrationsSection() {
  return (
    <section
      id="integrations"
      className="relative z-[2] w-full overflow-hidden border-y border-[#EAEEE4]/10 bg-[#050700] text-[#EAEEE4]"
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-start justify-center px-6 py-20 min-[811px]:px-10 min-[811px]:py-24 min-[1201px]:h-[788px] min-[1201px]:px-4 min-[1201px]:py-0 min-[1201px]:pt-[112px]">
        <div className="relative grid w-full max-w-[1200px] grid-cols-2 min-[811px]:grid-cols-3 min-[1201px]:h-[564px] min-[1201px]:w-[1200px] min-[1201px]:shrink-0 min-[1201px]:grid-cols-[repeat(5,240px)] min-[1201px]:grid-rows-[repeat(6,94px)]">
          {integrationCards.map((card, index) => (
            <IntegrationCard key={card.label} index={index} {...card} />
          ))}

          <IntegrationsCenterCard />
          <IntegrationsOverlay />
        </div>
      </div>
    </section>
  )
}
