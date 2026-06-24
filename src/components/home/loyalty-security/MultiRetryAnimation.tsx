import { motion } from "motion/react";
import {
  MultiRetryHeader,
  StepAcquirers,
} from "./MultiRetryAcquirers";
import { loopTransition } from "./multiRetryAnimationConfig";
import { MultiRetryCheckoutVisual } from "./MultiRetryCheckoutVisual";

export function MultiRetryAnimation() {
  return (
    <div
      className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#F4F4F5] lg:min-h-[500px]"
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [1, 1, 1, 1, 1],
        }}
        transition={loopTransition}
      >
        <MultiRetryHeader />

        <motion.div
          className="absolute left-1/2 top-[95px] flex -translate-x-1/2 items-start"
          animate={{
            opacity: [1, 1, 1, 1, 1],
          }}
          transition={loopTransition}
        >
          <StepAcquirers />
        </motion.div>

        <MultiRetryCheckoutVisual loopTransition={loopTransition} />
      </motion.div>
    </div>
  );
}
