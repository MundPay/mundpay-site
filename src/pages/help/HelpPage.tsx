import { HelpFooter } from './HelpFooter'
import { HelpHero } from './HelpHero'
import { HelpNavbar } from './HelpNavbar'

export function HelpPage() {
  return (
    <main className="min-h-screen bg-[#050700] text-[#EAEEE4]">
      <HelpNavbar />
      <HelpHero />
      <HelpFooter />
    </main>
  )
}
