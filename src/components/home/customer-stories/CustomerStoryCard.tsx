import type { CustomerStory } from './customerStoriesData'

type CustomerStoryCardProps = {
  story: CustomerStory
  width: string
}

export function CustomerStoryCard({ story, width }: CustomerStoryCardProps) {
  return (
    <article className="relative h-full shrink-0 overflow-hidden" style={{ width }}>
      <img src={story.image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/15 to-black/82" />
      <div className="absolute inset-x-0 bottom-0 px-[24px] pb-[26px]">
        <h3 className="font-rethink-sans text-[18px] font-bold leading-[1.2] tracking-[-0.04em] text-[#EAEEE4]">
          {story.name}
        </h3>
        <p className="mt-[12px] font-space-grotesk text-[14px] font-medium leading-[1.35] tracking-[-0.03em] text-[#EAEEE4]/72">
          {story.role}
        </p>
        <p className="mt-[14px] font-space-grotesk text-[14px] font-semibold leading-none tracking-[-0.03em] text-[#EAEEE4]/60">
          {story.handle}
        </p>
      </div>
    </article>
  )
}
