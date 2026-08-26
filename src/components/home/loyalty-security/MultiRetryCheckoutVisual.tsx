import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { CheckMarkIcon } from "../../icons/CheckMarkIcon";
import { CursorPointerIcon } from "../../icons/CursorPointerIcon";
import { ListLinesIcon } from "../../icons/ListLinesIcon";
import { PlusCircleIcon } from "../../icons/PlusCircleIcon";
import { TagOutlineIcon } from "../../icons/TagOutlineIcon";

type MultiRetryCheckoutVisualProps = {
  loopTransition: {
    readonly duration: number;
    readonly delay: number;
    readonly times: number[];
    readonly repeat: number;
    readonly ease: "linear";
  };
};

const completeOrderOpacity = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1];
const processingOpacity = [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
const approvedOpacity = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0];

function SpinnerIcon() {
  return (
    <motion.span
      className="block size-3 rounded-full border border-white/40 border-t-white"
      animate={{ rotate: 360 }}
      transition={{
        duration: 0.9,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

function SkeletonLine({ className = "" }: { className?: string }) {
  return <div className={`rounded bg-[#F1F1F1] ${className}`} />;
}

function CheckoutSkeleton({ loopTransition }: MultiRetryCheckoutVisualProps) {
  return (
    <div className="absolute left-1/2 top-[135px] h-[320px] w-[610px] -translate-x-1/2 overflow-hidden rounded-[14px] border border-[#E4E4E7] bg-[#FAFAFA] shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-[#A2D035]"
        animate={{ opacity: approvedOpacity }}
        transition={loopTransition}
      />

      <div className="relative z-10 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SkeletonLine className="size-10 rounded-full" />
            <div className="space-y-2">
              <SkeletonLine className="h-2.5 w-24" />
              <SkeletonLine className="h-3.5 w-36" />
            </div>
          </div>

          <div className="flex h-7 w-32 items-center gap-2 rounded-md border border-[#E4E4E7] bg-[#FAFAFA] px-2 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
            <TagOutlineIcon className="size-3.5 text-[#18181B]" />
            <SkeletonLine className="h-2.5 flex-1" />
          </div>
        </div>
      </div>

      <div className="border-t border-[#E4E4E7] p-5">
        <div className="mb-6 flex items-center gap-2">
          <div className="flex size-4 items-center justify-center rounded-full bg-[#E4E4E7]">
            <PlusCircleIcon className="size-3 text-[#71717A]" />
          </div>
          <SkeletonLine className="h-2.5 w-28" />
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-5">
          {["w-24", "w-28", "w-20", "w-28"].map((widthClassName, index) => (
            <div key={`${widthClassName}-${index}`} className="space-y-2">
              <SkeletonLine className="h-2.5 w-24" />
              <div className="rounded-md border border-[#E4E4E7] px-3 py-3">
                <SkeletonLine className={`h-2.5 ${widthClassName}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/95 to-transparent" />
    </div>
  );
}

function PurchaseSummary({ loopTransition }: MultiRetryCheckoutVisualProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      className="absolute left-1/2 top-[340px] z-20 w-[340px] -translate-x-1/2 rounded-md bg-[#FAFAFA] p-4 shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
      initial={{ opacity: 0, y: 46 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.15, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-5 flex items-center gap-2">
        <div className="flex size-5 items-center justify-center rounded-full bg-[#E4E4E7]">
          <ListLinesIcon className="size-3.5 text-[#71717A]" />
        </div>

        <p className="font-space-grotesk text-[10px] font-medium text-[#09090B]">
          {t("home.loyaltySecurity.animation.purchaseSummary")}
        </p>
      </div>

      <div className="mb-3 flex items-center justify-between">
        <p className="font-space-grotesk text-[8px] text-[#71717A]">
          {t("home.loyaltySecurity.animation.productName")}
        </p>

        <p className="font-space-grotesk text-[8px] font-medium text-[#09090B]">
          {t("home.loyaltySecurity.animation.installmentPrice")}
        </p>
      </div>

      <motion.div
        className="relative flex h-8 items-center justify-center rounded-md bg-[#059669] font-space-grotesk text-[10.5px] font-semibold text-white shadow-[0_1px_2px_rgba(0,0,0,0.12)]"
        animate={{
          scale: [1, 1, 0.975, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        }}
        transition={loopTransition}
      >
        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: completeOrderOpacity }}
          transition={loopTransition}
        >
          {t("home.loyaltySecurity.animation.completeOrder")}
        </motion.span>

        <motion.span
          className="absolute inset-0 flex items-center justify-center gap-2"
          animate={{ opacity: processingOpacity }}
          transition={loopTransition}
        >
          <SpinnerIcon />
          {t("home.loyaltySecurity.animation.processing")}
        </motion.span>

        <motion.span
          className="absolute inset-0 flex items-center justify-center gap-2"
          animate={{ opacity: approvedOpacity }}
          transition={loopTransition}
        >
          <CheckMarkIcon className="size-3.5" />
          {t("home.loyaltySecurity.animation.paymentApproved")}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

function Cursor({ loopTransition }: MultiRetryCheckoutVisualProps) {
  return (
    <motion.div
      className="absolute z-30"
      animate={{
        x: [455, 430, 430, 430, 430, 430, 430, 430, 430, 430, 430, 430, 430, 430, 455, 455],
        y: [500, 438, 438, 438, 438, 438, 438, 438, 438, 438, 438, 438, 438, 438, 500, 500],
        opacity: [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        scale: [1, 1, 0.82, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      }}
      transition={loopTransition}
    >
      <CursorPointerIcon className="size-6 drop-shadow-sm" />
    </motion.div>
  );
}

function AnimatedBorder({ loopTransition }: MultiRetryCheckoutVisualProps) {
  return (
    <motion.div
      className="pointer-events-none absolute left-1/2 top-[135px] z-20 h-[320px] w-[610px] -translate-x-1/2 rounded-[14px] border"
      animate={{
        borderColor: [
          "rgba(228,228,231,1)",
          "rgba(228,228,231,1)",
          "rgba(228,228,231,1)",
          "rgba(228,228,231,1)",
          "rgba(228,228,231,1)",
          "rgba(208,53,53,1)",
          "rgba(208,53,53,1)",
          "rgba(208,53,53,1)",
          "rgba(208,53,53,1)",
          "rgba(208,53,53,1)",
          "rgba(208,53,53,1)",
          "rgba(162,208,53,1)",
          "rgba(162,208,53,1)",
          "rgba(162,208,53,1)",
          "rgba(228,228,231,1)",
          "rgba(228,228,231,1)",
        ],
      }}
      transition={loopTransition}
    />
  );
}

export function MultiRetryCheckoutVisual({ loopTransition }: MultiRetryCheckoutVisualProps) {
  return (
    <>
      <CheckoutSkeleton loopTransition={loopTransition} />
      <AnimatedBorder loopTransition={loopTransition} />
      <PurchaseSummary loopTransition={loopTransition} />
      <Cursor loopTransition={loopTransition} />
    </>
  );
}
