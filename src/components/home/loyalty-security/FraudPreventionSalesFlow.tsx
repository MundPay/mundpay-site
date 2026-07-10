import { motion, type Transition } from "motion/react";
import { CheckMarkIcon } from "../../icons/CheckMarkIcon";
import { FraudFlowLinesIcon } from "../../icons/FraudFlowLinesIcon";
import { XMarkIcon } from "../../icons/XMarkIcon";

type SaleState = "active" | "dim" | "declined" | "approved";

type FraudPreventionSalesFlowProps = {
  analyzingFirstSaleOpacity: number[];
  analyzingNextSaleOpacity: number[];
  approvedOpacity: number[];
  frameTransition: Transition;
  rejectedOpacity: number[];
  statusTransition: Transition;
};

function SaleIcon({ state }: { state: SaleState }) {
  if (state === "declined") {
    return (
      <div className="flex size-[18px] items-center justify-center rounded bg-[#D03535] text-white">
        <XMarkIcon className="size-3" />
      </div>
    );
  }

  if (state === "approved") {
    return (
      <div className="flex size-[18px] items-center justify-center rounded bg-[#A2D035] text-white">
        <CheckMarkIcon className="size-3" />
      </div>
    );
  }

  return (
    <div className="size-[18px] rounded border-2 border-[#E4E4E7] bg-[#F4F4F5]" />
  );
}

function SaleItem({
  title,
  price,
  state,
  top,
}: {
  title: string;
  price: string;
  state: SaleState;
  top: number;
}) {
  const isDim = state === "dim";
  const isDeclined = state === "declined";
  const isApproved = state === "approved";

  return (
    <div
      className="absolute left-0 flex items-start gap-3"
      style={{
        top,
        opacity: isDim ? 0.38 : 1,
      }}
    >
      <div className="pt-[9px]">
        <SaleIcon state={state} />
      </div>

      <div>
        <p
          className={[
            "font-space-grotesk text-[10px] leading-[1.2] tracking-[-0.02em]",
            isDeclined && "text-[#D03535]",
            isApproved && "text-[#859933]",
            isDim && "text-[#70707B]",
            !isDeclined && !isApproved && !isDim && "text-[#27272A]",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {title}
        </p>

        <p
          className={[
            "mt-1 font-space-grotesk text-xs font-medium leading-[1.2] tracking-[-0.02em]",
            isDeclined && "text-[#D03535]",
            isApproved && "text-[#859933]",
            !isDeclined && !isApproved && "text-[#27272A]",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {price}
        </p>
      </div>
    </div>
  );
}

function SaleGroup({
  variant,
}: {
  variant: "analyzing" | "analyzingNextSale" | "rejected" | "approved";
}) {
  const sales = [
    {
      title: "Sale #1",
      price: "R$ 100,00",
      top: 23,
      state: variant === "analyzing" ? "active" : "declined",
    },
    {
      title: "Sale #2",
      price: "R$ 145,50",
      top: 68,
      state:
        variant === "approved"
          ? "approved"
          : variant === "analyzingNextSale"
            ? "active"
            : "dim",
    },
    { title: "Sale #3", price: "R$ 167,80", top: 113, state: "dim" },
    { title: "Sale #4", price: "R$ 199,90", top: 158, state: "dim" },
    { title: "Sale #5", price: "R$ 574,99", top: 203, state: "dim" },
  ] satisfies Array<{
    title: string;
    price: string;
    top: number;
    state: SaleState;
  }>;

  return (
    <div className="absolute inset-0">
      {sales.map((sale) => (
        <SaleItem key={sale.title} {...sale} />
      ))}
    </div>
  );
}

export function FraudPreventionSalesFlow({
  analyzingFirstSaleOpacity,
  analyzingNextSaleOpacity,
  approvedOpacity,
  frameTransition,
  rejectedOpacity,
  statusTransition,
}: FraudPreventionSalesFlowProps) {
  return (
    <>
      <FraudFlowLinesIcon
        frameTransition={frameTransition}
        statusTransition={statusTransition}
      />

      <motion.div
        className="absolute inset-0"
        animate={{ opacity: analyzingFirstSaleOpacity }}
        transition={statusTransition}
      >
        <SaleGroup variant="analyzing" />
      </motion.div>

      <motion.div
        className="absolute inset-0"
        animate={{ opacity: rejectedOpacity }}
        transition={statusTransition}
      >
        <SaleGroup variant="rejected" />
      </motion.div>

      <motion.div
        className="absolute inset-0"
        animate={{ opacity: analyzingNextSaleOpacity }}
        transition={statusTransition}
      >
        <SaleGroup variant="analyzingNextSale" />
      </motion.div>

      <motion.div
        className="absolute inset-0"
        animate={{ opacity: approvedOpacity }}
        transition={statusTransition}
      >
        <SaleGroup variant="approved" />
      </motion.div>
    </>
  );
}
