import { AnimatePresence, motion } from "motion/react";
import { useTranslation } from "react-i18next";
import type { LoyaltySecurityTab } from "./loyaltySecurityData";
import { MultiRetryAnimation } from "./MultiRetryAnimation";
import { FraudPreventionAnimation } from "./FraudPreventionAnimation";

const panelMotion = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.24, ease: "easeOut" },
} as const;

type LoyaltySecurityPanelProps = {
  activeTab: LoyaltySecurityTab;
};

export function LoyaltySecurityPanel({ activeTab }: LoyaltySecurityPanelProps) {
  const { t } = useTranslation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab.translationKey}
        initial={panelMotion.initial}
        animate={panelMotion.animate}
        exit={panelMotion.exit}
        transition={panelMotion.transition}
        className="grid min-h-[500px] grid-cols-1 min-[1201px]:h-[500px] min-[1201px]:grid-cols-[373px_minmax(0,1fr)]"
      >
        <div className="flex flex-col justify-end border-b border-[#0507001A] bg-[#EAEEE4] p-6 sm:p-8 min-[1201px]:border-b-0 min-[1201px]:border-r min-[1201px]:p-10 min-[1201px]:pb-12">
          <h3 className="font-rethink-sans text-[24px] font-bold leading-[1.2] tracking-[-0.04em] text-[#050700]">
            {t(`home.loyaltySecurity.tabs.${activeTab.translationKey}.title`)}
          </h3>

          <p className="mt-5 w-full font-space-grotesk text-[18px] font-normal leading-[1.42] tracking-[-0.02em] text-[#050700] min-[1201px]:max-w-[300px]">
            {t(
              `home.loyaltySecurity.tabs.${activeTab.translationKey}.description`,
            )}
          </p>
        </div>

        <div className="relative min-h-[360px] min-w-0 overflow-hidden bg-[#F4F4F5] min-[1201px]:min-h-0">
          {activeTab.translationKey === "smartMultitry" ? (
            <MultiRetryAnimation />
          ) : (
            <FraudPreventionAnimation />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
