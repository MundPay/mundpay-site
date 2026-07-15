import { motion } from "motion/react";
import { BoltSpinnerIcon } from "../../icons/BoltSpinnerIcon";
import { CheckMarkIcon } from "../../icons/CheckMarkIcon";
import { ChevronRightIcon } from "../../icons/ChevronRightIcon";
import { XMarkIcon } from "../../icons/XMarkIcon";
import { loopTransition } from "./multiRetryAnimationConfig";

type AcquirerStatus = "idle" | "analyzing" | "declined" | "approved";

type Acquirer = {
  name: string;
  status: AcquirerStatus;
};

function BoltIcon() {
  return (
    <motion.span
      className="block size-3.5 text-[#71717A]"
      animate={{ rotate: 360 }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <BoltSpinnerIcon className="size-3.5" />
    </motion.span>
  );
}

function StatusIcon({ status }: { status: AcquirerStatus }) {
  if (status === "declined") {
    return (
      <div className="flex size-5 items-center justify-center rounded bg-[#D03535] text-white">
        <XMarkIcon className="size-3" />
      </div>
    );
  }

  if (status === "approved") {
    return (
      <div className="flex size-5 items-center justify-center rounded bg-[#A2D035] text-white">
        <CheckMarkIcon className="size-3.5" />
      </div>
    );
  }

  return <div className="size-5 rounded bg-[#E4E4E7]" />;
}

function AcquirerItem({ acquirer }: { acquirer: Acquirer }) {
  const statusLabel = {
    idle: "Analyzing...",
    analyzing: "Analyzing...",
    declined: "Declined",
    approved: "Approved",
  }[acquirer.status];

  const statusClassName = {
    idle: "text-[#9F9FA9]",
    analyzing: "text-[#9F9FA9]",
    declined: "text-[#D03535]",
    approved: "text-[#7AA600]",
  }[acquirer.status];

  return (
    <div className="flex items-start gap-2">
      <StatusIcon status={acquirer.status} />

      <div className="space-y-0.5">
        <p className="font-space-grotesk text-xs font-medium leading-none tracking-[-0.02em] text-[#27272A]">
          {acquirer.name}
        </p>

        <motion.p
          key={`${acquirer.name}-${acquirer.status}`}
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          className={`font-space-grotesk text-[10px] leading-none tracking-[-0.02em] ${statusClassName}`}
        >
          {statusLabel}
        </motion.p>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex w-[50px] items-center justify-center pt-1.5">
      <div className="h-px flex-1 bg-[#E4E4E7]" />
      <div className="mx-1 flex size-3.5 items-center justify-center rounded-full border border-[#D9D9DE] text-[#C7C7CF]">
        <ChevronRightIcon className="size-2.5" />
      </div>
      <div className="h-px flex-1 bg-[#E4E4E7]" />
    </div>
  );
}

export function MultiRetryHeader() {
  return (
    <div className="absolute left-1/2 top-6 flex h-12 -translate-x-1/2 items-center justify-center rounded-xl bg-[#EFEFF0] p-1 shadow-[inset_0_0_2px_rgba(0,0,0,0.05)]">
      <div className="flex h-10 items-center gap-2 rounded-lg border border-black/[0.06] bg-[#F4F4F5] px-4">
        <BoltIcon />

        <p className="font-space-grotesk text-xs font-medium tracking-[-0.02em] text-[#27272A]">
          Sale status
        </p>
      </div>
    </div>
  );
}

export function StepAcquirers() {
  return (
    <>
      <AnimatedAcquirer
        name="Acquirer A"
        statusFrames={[
          "analyzing",
          "analyzing",
          "analyzing",
          "analyzing",
          "analyzing",
          "declined",
          "declined",
          "declined",
          "declined",
          "declined",
          "declined",
          "declined",
          "declined",
          "declined",
          "analyzing",
          "analyzing",
        ]}
      />
      <Connector />
      <AnimatedAcquirer
        name="Acquirer B"
        statusFrames={[
          "analyzing",
          "analyzing",
          "analyzing",
          "analyzing",
          "analyzing",
          "analyzing",
          "analyzing",
          "analyzing",
          "declined",
          "declined",
          "declined",
          "declined",
          "declined",
          "declined",
          "analyzing",
          "analyzing",
        ]}
      />
      <Connector />
      <AnimatedAcquirer
        name="Acquirer C"
        statusFrames={[
          "analyzing",
          "analyzing",
          "analyzing",
          "analyzing",
          "analyzing",
          "analyzing",
          "analyzing",
          "analyzing",
          "analyzing",
          "analyzing",
          "analyzing",
          "approved",
          "approved",
          "approved",
          "analyzing",
          "analyzing",
        ]}
      />
    </>
  );
}

function AnimatedAcquirer({
  name,
  statusFrames,
}: {
  name: string;
  statusFrames: AcquirerStatus[];
}) {
  return (
    <motion.div animate={{ opacity: [1, 1, 1, 1, 1, 1] }} transition={loopTransition}>
      <DynamicAcquirer name={name} statusFrames={statusFrames} />
    </motion.div>
  );
}

function DynamicAcquirer({
  name,
  statusFrames,
}: {
  name: string;
  statusFrames: AcquirerStatus[];
}) {
  return (
    <motion.div>
      {statusFrames.map((status, index) => (
        <motion.div
          key={`${name}-${status}-${index}`}
          className="absolute"
          initial={false}
          animate={{
            opacity: statusFrames.map((_, frameIndex) =>
              frameIndex === index ? 1 : 0,
            ),
          }}
          transition={loopTransition}
        >
          <AcquirerItem acquirer={{ name, status }} />
        </motion.div>
      ))}

      <div className="invisible">
        <AcquirerItem acquirer={{ name, status: "analyzing" }} />
      </div>
    </motion.div>
  );
}
