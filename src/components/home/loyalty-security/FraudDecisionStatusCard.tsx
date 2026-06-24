import { motion } from "motion/react";
import {
  approvedOpacity,
  analyzingOpacity,
  frameTransition,
  rejectedOpacity,
} from "./fraudPreventionAnimationConfig";

function SpinnerIcon() {
  return (
    <motion.span
      className="block size-3 rounded-full border border-[#71717A]/25 border-t-[#71717A]"
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

export function FraudDecisionStatusCard() {
  return (
    <motion.div
      className="absolute left-[430px] top-[94px] z-20 flex h-[72px] w-[190px] items-center justify-center overflow-hidden rounded-2xl border shadow-[0_4px_6px_rgba(0,0,0,0.12)]"
      initial={false}
      animate={{
        backgroundColor: [
          "#FFFFFF",
          "#FFFFFF",
          "#D03535",
          "#D03535",
          "#A2D035",
          "#A2D035",
          "#FFFFFF",
          "#FFFFFF",
        ],
        borderColor: [
          "#D4D4D8",
          "#D4D4D8",
          "#D03535",
          "#D03535",
          "#A2D035",
          "#A2D035",
          "#D4D4D8",
          "#D4D4D8",
        ],
        scale: [1, 1, 1.015, 1, 1.015, 1, 1, 1],
      }}
      transition={frameTransition}
    >
      <motion.div
        className="absolute flex items-center gap-2 font-space-grotesk text-xs font-medium tracking-[-0.02em] text-[#27272A]"
        animate={{ opacity: analyzingOpacity, y: [0, 0, -4, -4, -4, -4, 0, 0] }}
        transition={frameTransition}
      >
        <SpinnerIcon />
        <span>Analyzing sale...</span>
      </motion.div>

      <motion.p
        className="absolute font-space-grotesk text-xs font-semibold tracking-[-0.02em] text-white"
        animate={{ opacity: rejectedOpacity, y: [4, 4, 0, 0, -4, -4, 4, 4] }}
        transition={frameTransition}
      >
        Venda Recusada
      </motion.p>

      <motion.p
        className="absolute font-space-grotesk text-xs font-semibold tracking-[-0.02em] text-white"
        animate={{ opacity: approvedOpacity, y: [4, 4, 4, 4, 0, 0, 4, 4] }}
        transition={frameTransition}
      >
        Venda Aprovada
      </motion.p>
    </motion.div>
  );
}
