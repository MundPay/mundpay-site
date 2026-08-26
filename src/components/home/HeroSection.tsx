import { DashboardPreview } from "./dashboard/DashboardPreview";
import { HeaderNav } from "./HeaderNav";
import { HeroBackground } from "./HeroBackground";
import { HeroCopy } from "./HeroCopy";
import { StatsMarquee } from "./StatsMarquee";
import type { HomeVariant } from "./HomeVariant";

type HeroSectionProps = {
  onStartNow: () => void;
  variant?: HomeVariant;
};

export function HeroSection({ onStartNow, variant = "default" }: HeroSectionProps) {
  return (
    <section className="relative mx-auto w-full max-w-300">
      <HeroBackground />
      <HeaderNav onStartNow={onStartNow} variant={variant} />
      <HeroCopy onStartNow={onStartNow} />
      <DashboardPreview />
      <StatsMarquee />
    </section>
  );
}
