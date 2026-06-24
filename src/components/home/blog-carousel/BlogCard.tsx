import { BottomBlur } from './BottomBlur'
import type { BlogPost } from './blogCarouselData'

type BlogCardProps = {
  post: BlogPost
  width: string
}

export function BlogCard({ post, width }: BlogCardProps) {
  return (
    <a
      href={post.href}
      target="_blank"
      rel="noopener noreferrer"
      draggable={false}
      className="relative h-full shrink-0 overflow-hidden rounded-[13px] border border-[#EAEEE4]/12"
      style={{ width }}
    >
      <img src={post.image} alt="" draggable={false} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-[#050700]/88" />
      <BottomBlur />
      <p className="absolute inset-x-5 bottom-16 z-[3] font-rethink-sans text-[16px] font-bold leading-[1.25] tracking-[-0.04em] text-[#EAEEE4] min-[811px]:inset-x-[30px] min-[811px]:text-[18px]">
        {post.title}
      </p>
    </a>
  )
}
