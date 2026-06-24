import { motion } from "motion/react";
import { ShieldLockIcon } from "../../icons/ShieldLockIcon";
import { frameTransition } from "./fraudPreventionAnimationConfig";
import { FraudDecisionStatusCard } from "./FraudDecisionStatusCard";

function SecurityChip() {
  return (
    <motion.div
      className="absolute left-[350px] top-[94px] z-20 flex size-[72px] items-center justify-center rounded-2xl border p-1 shadow-[0_4px_6px_rgba(0,0,0,0.12)]"
      initial={false}
      animate={{
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
        scale: [1, 1, 1.02, 1, 1.02, 1, 1, 1],
      }}
      transition={frameTransition}
    >
      <motion.div
        className="relative flex size-full items-center justify-center overflow-hidden rounded-xl border"
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
            "#E4E4E7",
            "#E4E4E7",
            "rgba(255,255,255,0.6)",
            "rgba(255,255,255,0.6)",
            "rgba(255,255,255,0.6)",
            "rgba(255,255,255,0.6)",
            "#E4E4E7",
            "#E4E4E7",
          ],
        }}
        transition={frameTransition}
      >
        <motion.div
          className="absolute inset-2 rounded-lg"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.45) 1px, transparent 1px)",
            backgroundSize: "7px 7px",
          }}
          animate={{
            opacity: [0.08, 0.08, 0.42, 0.42, 0.42, 0.42, 0.08, 0.08],
          }}
          transition={frameTransition}
        />

        <motion.div
          className="relative z-10"
          initial={false}
          animate={{
            color: [
              "#D4D4D8",
              "#D4D4D8",
              "#FFFFFF",
              "#FFFFFF",
              "#FFFFFF",
              "#FFFFFF",
              "#D4D4D8",
              "#D4D4D8",
            ],
          }}
          transition={frameTransition}
        >
          <ShieldLockIcon className="size-[26px]" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function SignalConnector() {
  return (
    <motion.div
      className="absolute left-[422px] top-[111px] z-10 flex h-9 w-5 flex-col justify-center gap-[3px]"
      initial={false}
      animate={{
        opacity: [0.45, 0.45, 1, 1, 1, 1, 0.45, 0.45],
      }}
      transition={frameTransition}
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <motion.span
          key={index}
          className="h-px rounded-full"
          initial={false}
          animate={{
            backgroundColor: [
              "#D4D4D8",
              "#D4D4D8",
              "#D03535",
              "#D03535",
              "#A2D035",
              "#A2D035",
              "#D4D4D8",
              "#D4D4D8",
            ],
            width: index % 2 === 0 ? 14 : 10,
          }}
          transition={frameTransition}
        />
      ))}
    </motion.div>
  );
}

export function FraudPreventionDecision() {
  return (
    <>
      <SecurityChip />
      <SignalConnector />
      <FraudDecisionStatusCard />
    </>
  );
}
