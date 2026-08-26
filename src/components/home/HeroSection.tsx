import { useCallback, useState } from "react";
import { DashboardPreview } from "./dashboard/DashboardPreview";
import { HeaderNav } from "./HeaderNav";
import { HeroBackground } from "./HeroBackground";
import { HeroCopy } from "./HeroCopy";
import { StatsMarquee } from "./StatsMarquee";
import { StartNowModal } from "./StartNowModal";
import type { HomeVariant } from "./HomeVariant";
import { LeadCaptureModal } from "../lp/LeadCaptureModal";

type HeroSectionProps = {
  variant?: HomeVariant;
};

export function HeroSection({ variant = "default" }: HeroSectionProps) {
  const [isStartNowModalOpen, setIsStartNowModalOpen] = useState(false);
  const openStartNowModal = useCallback(() => setIsStartNowModalOpen(true), []);
  const closeStartNowModal = useCallback(
    () => setIsStartNowModalOpen(false),
    [],
  );

  return (
    <section className="relative mx-auto w-full max-w-300">
      <HeroBackground />
      <HeaderNav onStartNow={openStartNowModal} variant={variant} />
      <HeroCopy onStartNow={openStartNowModal} />
      <DashboardPreview />
      <StatsMarquee />
      {variant === "lp" ? (
        <LeadCaptureModal
          isOpen={isStartNowModalOpen}
          onClose={closeStartNowModal}
        />
      ) : (
        <StartNowModal
          isOpen={isStartNowModalOpen}
          onClose={closeStartNowModal}
        />
      )}
    </section>
  );
}
