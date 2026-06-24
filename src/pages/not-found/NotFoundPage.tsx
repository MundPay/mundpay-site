import { NotFoundBackground } from './NotFoundBackground'
import { NotFoundContent } from './NotFoundContent'

export function NotFoundPage() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#08090C] text-[#EAEEE4]">
      <NotFoundBackground />
      <NotFoundContent />
    </main>
  )
}
