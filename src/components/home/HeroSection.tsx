import { useCallback, useState } from "react";
import { DashboardPreview } from "./dashboard/DashboardPreview";
import { HeaderNav } from "./HeaderNav";
import { HeroBackground } from "./HeroBackground";
import { HeroCopy } from "./HeroCopy";
import { StatsMarquee } from "./StatsMarquee";
import { StartNowModal } from "./StartNowModal";

export function HeroSection() {
  const [isStartNowModalOpen, setIsStartNowModalOpen] = useState(false);
  const openStartNowModal = useCallback(() => setIsStartNowModalOpen(true), []);
  const closeStartNowModal = useCallback(
    () => setIsStartNowModalOpen(false),
    [],
  );

  return (
    <section className="relative mx-auto w-full max-w-300">
      <HeroBackground />
      <HeaderNav onStartNow={openStartNowModal} />
      <HeroCopy onStartNow={openStartNowModal} />
      <DashboardPreview />
      <StatsMarquee />
      <StartNowModal
        isOpen={isStartNowModalOpen}
        onClose={closeStartNowModal}
      />
    </section>
  );
}
