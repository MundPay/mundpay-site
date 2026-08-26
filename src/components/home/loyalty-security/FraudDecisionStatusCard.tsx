import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  approvedOpacity,
  analyzingOpacity,
  rejectedOpacity,
  statusTransition,
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
  const { t } = useTranslation();

  return (
    <motion.div
      className="absolute left-[430px] top-[94px] z-20 flex h-[72px] w-[190px] items-center justify-center rounded-2xl border p-1 shadow-[0_4px_6px_rgba(0,0,0,0.12)]"
      initial={false}
      animate={{
        borderColor: [
          "#D4D4D8",
          "#D4D4D8",
          "#D03535",
          "#D03535",
          "#D4D4D8",
          "#D4D4D8",
          "#A2D035",
          "#A2D035",
          "#D4D4D8",
          "#D4D4D8",
        ],
      }}
      transition={statusTransition}
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
            "#FFFFFF",
            "#FFFFFF",
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
            "#E4E4E7",
            "#E4E4E7",
            "rgba(255,255,255,0.6)",
            "rgba(255,255,255,0.6)",
            "#E4E4E7",
            "#E4E4E7",
          ],
        }}
        transition={{
          backgroundColor: statusTransition,
          borderColor: statusTransition,
        }}
      >
        <motion.div
          className="absolute inset-2 rounded-lg"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.45) 1px, transparent 1px)",
            backgroundSize: "7px 7px",
          }}
          animate={{
            opacity: [0.08, 0.08, 0.42, 0.42, 0.08, 0.08, 0.42, 0.42, 0.08, 0.08],
          }}
          transition={statusTransition}
        />

        <motion.div
          className="absolute flex items-center gap-2 font-space-grotesk text-xs font-medium tracking-[-0.02em] text-[#27272A]"
          animate={{ opacity: analyzingOpacity, y: [0, 0, -4, -4, 0, 0, -4, -4, 0, 0] }}
          transition={{
            opacity: statusTransition,
            y: statusTransition,
          }}
        >
          <SpinnerIcon />
          <span>{t("home.loyaltySecurity.animation.analyzingSale")}</span>
        </motion.div>

        <motion.p
          className="absolute font-space-grotesk text-xs font-semibold tracking-[-0.02em] text-white"
          animate={{ opacity: rejectedOpacity, y: [4, 4, 0, 0, -4, -4, -4, -4, 4, 4] }}
          transition={{
            opacity: statusTransition,
            y: statusTransition,
          }}
        >
          {t("home.loyaltySecurity.animation.saleDeclined")}
        </motion.p>

        <motion.p
          className="absolute font-space-grotesk text-xs font-semibold tracking-[-0.02em] text-white"
          animate={{ opacity: approvedOpacity, y: [4, 4, 4, 4, 4, 4, 0, 0, 4, 4] }}
          transition={{
            opacity: statusTransition,
            y: statusTransition,
          }}
        >
          {t("home.loyaltySecurity.animation.saleApproved")}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
