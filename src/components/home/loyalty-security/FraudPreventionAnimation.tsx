import { motion } from "motion/react";
import {
  approvedOpacity,
  analyzingOpacity,
  frameTransition,
  rejectedOpacity,
} from "./fraudPreventionAnimationConfig";
import {
  FraudPreventionDecision,
} from "./FraudPreventionDecision";
import { FraudPreventionSalesFlow } from "./FraudPreventionSalesFlow";

export function FraudPreventionAnimation() {
  return (
    <div
      className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#F4F4F5] lg:min-h-[500px]"
      aria-hidden="true"
    >
      <motion.div
        className="absolute left-1/2 top-[132px] h-[260px] w-[660px] -translate-x-1/2"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <FraudPreventionSalesFlow
          approvedOpacity={approvedOpacity}
          analyzingOpacity={analyzingOpacity}
          frameTransition={frameTransition}
          rejectedOpacity={rejectedOpacity}
        />

        <FraudPreventionDecision />
      </motion.div>
    </div>
  );
}
