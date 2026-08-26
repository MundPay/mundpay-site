import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

type Status = "analyzing" | "approved" | "declined";

const sequence: Status[] = ["analyzing", "approved", "analyzing", "declined"];

const CARD_WIDTH = 186;
const GAP = 16;
const STEP = CARD_WIDTH + GAP;
const TRACK_CARD_COUNT = 96;
const TRACK_START_INDEX = 42;
const TRACK_LOOP_STEPS = 18;
const FOCUS_OFFSET_X = 16;

const statusConfig = {
  analyzing: {
    labelKey: "home.benefits.cards.fraudSecurity.animation.analyzing",
    border: "rgba(236, 243, 223, 0.34)",
    borderStyle: "dashed",
    iconBg: "rgb(47, 50, 44)",
  },
  approved: {
    labelKey: "home.benefits.cards.fraudSecurity.animation.approved",
    border: "rgb(162, 208, 53)",
    borderStyle: "solid",
    iconBg: "rgb(162, 208, 53)",
  },
  declined: {
    labelKey: "home.benefits.cards.fraudSecurity.animation.declined",
    border: "rgb(208, 53, 53)",
    borderStyle: "solid",
    iconBg: "rgb(208, 53, 53)",
  },
} satisfies Record<
  Status,
  { labelKey: string; border: string; borderStyle: string; iconBg: string }
>;

function PlaceholderCard() {
  return (
    <div className="h-[104px] w-[186px] shrink-0 rounded-xl border border-black bg-[#11130c] p-4">
      <div className="mb-5 flex items-center gap-3">
        <div className="size-8 rounded-full bg-white/[0.035]" />
        <div className="space-y-2">
          <div className="h-2 w-[92px] rounded-full bg-white/[0.035]" />
          <div className="h-2 w-[56px] rounded-full bg-white/[0.035]" />
        </div>
      </div>

      <div className="space-y-3">
        <div className="h-2 w-[74px] rounded-full bg-white/[0.025]" />
        <div className="flex justify-between">
          <div className="h-2 w-[60px] rounded-full bg-white/[0.025]" />
          <div className="h-2 w-[48px] rounded-full bg-white/[0.025]" />
        </div>
      </div>
    </div>
  );
}

export function FraudSecurityVisual() {
  const { t } = useTranslation();
  const [statusIndex, setStatusIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);

  const status = sequence[statusIndex];
  const config = statusConfig[status];
  const isAnalyzing = status === "analyzing";
  const visualCardIndex = cardIndex % TRACK_LOOP_STEPS;
  const isTrackResetFrame = cardIndex > 0 && visualCardIndex === 0;

  useEffect(() => {
    const timeout = window.setTimeout(
      () => {
        setStatusIndex((current) => (current + 1) % sequence.length);

        if (status === "analyzing") {
          setCardIndex((current) => current + 1);
        }
      },
      status === "analyzing" ? 3200 : 1700,
    );

    return () => window.clearTimeout(timeout);
  }, [status]);

  return (
    <div className="absolute inset-x-0 top-0 h-[320px] overflow-hidden">
      <div className="absolute left-1/2 top-[140px] h-[300px] w-[720px] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-1/2 top-[4px] flex -translate-x-[calc(50%+0px)] gap-4 opacity-35">
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
        </div>

        <div
          className="absolute top-[116px] h-[104px] w-[590px] -translate-x-1/2 overflow-hidden"
          style={{ left: `calc(50% + ${FOCUS_OFFSET_X}px)` }}
        >
          <motion.div
            className="flex gap-4"
            animate={{ x: visualCardIndex * STEP }}
            transition={{
              duration: isTrackResetFrame ? 0 : isAnalyzing ? 3.2 : 0.8,
              ease: [0.45, 0, 0.15, 1],
            }}
            style={{ marginLeft: -STEP * TRACK_START_INDEX }}
          >
            {Array.from({ length: TRACK_CARD_COUNT }).map((_, index) => (
              <PlaceholderCard key={index} />
            ))}
          </motion.div>
        </div>

        <div className="absolute left-1/2 top-[228px] flex -translate-x-[calc(50%-0px)] gap-4 opacity-35">
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
        </div>

        <motion.div
          className="absolute top-[116px] h-[104px] w-[186px] -translate-x-1/2 rounded-xl"
          animate={{ borderColor: config.border }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            left: `calc(50% + ${FOCUS_OFFSET_X}px)`,
            borderWidth: 1,
            borderStyle: config.borderStyle,
            boxShadow:
              status === "declined"
                ? "0 0 18px rgba(208,53,53,0.18)"
                : status === "approved"
                  ? "0 0 18px rgba(162,208,53,0.18)"
                  : "0 0 18px rgba(236,243,223,0.08)",
          }}
        />

        <motion.div
          className="absolute top-[198px] flex -translate-x-1/2 items-center gap-2 rounded-md border bg-[#0a0c05] px-3 py-2 shadow-[0_0_14px_rgba(162,208,53,0.08)]"
          animate={{ borderColor: config.border }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ left: `calc(50% + ${FOCUS_OFFSET_X}px)` }}
        >
          <div
            className="flex size-4 items-center justify-center rounded-sm"
            style={{ backgroundColor: config.iconBg }}
          >
            {status !== "analyzing" && (
              <span className="text-[10px] font-bold leading-none text-black">
                ✓
              </span>
            )}
          </div>

          <span className="whitespace-nowrap font-['Space_Grotesk'] text-xs font-medium leading-none tracking-[-0.02em] text-[#EAEDE4]">
            {t(config.labelKey)}
          </span>
        </motion.div>
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: isAnalyzing ? 1 : 0.6 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_38%,transparent_0%,transparent_21%,rgba(5,7,0,0.14)_42%,rgba(5,7,0,0.52)_72%,#050700_91%)]" />

        <motion.div
          className="absolute inset-0 backdrop-blur-[1.5px] [mask-image:radial-gradient(circle_at_64%_38%,transparent_0%,transparent_24%,black_44%)] [-webkit-mask-image:radial-gradient(circle_at_64%_38%,transparent_0%,transparent_24%,black_44%)]"
          animate={{ opacity: isAnalyzing ? 1 : 0.25 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
