import { motion } from "motion/react";
import {
  approvedOpacity,
  analyzingFirstSaleOpacity,
  analyzingNextSaleOpacity,
  failedSaleOpacity,
  frameTransition,
  rejectedOpacity,
  statusTransition,
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
          analyzingFirstSaleOpacity={analyzingFirstSaleOpacity}
          analyzingNextSaleOpacity={analyzingNextSaleOpacity}
          approvedOpacity={approvedOpacity}
          failedSaleOpacity={failedSaleOpacity}
          frameTransition={frameTransition}
          rejectedOpacity={rejectedOpacity}
          statusTransition={statusTransition}
        />

        <FraudPreventionDecision />
      </motion.div>
    </div>
  );
}
