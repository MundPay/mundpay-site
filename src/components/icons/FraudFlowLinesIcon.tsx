import { motion, type Transition } from 'motion/react'

type FraudFlowLinesIconProps = {
  frameTransition: Transition
}

const flowPaths = {
  sale1: 'M 112 42 L 205 42 C 258 42 250 116 346 116',
  sale2: 'M 112 87 L 215 87 C 260 87 262 128 346 128',
  sale3: 'M 112 132 L 346 132',
  sale4: 'M 112 177 L 215 177 C 260 177 262 140 346 140',
  sale5: 'M 112 222 L 205 222 C 258 222 250 148 346 148',
}

export function FraudFlowLinesIcon({ frameTransition }: FraudFlowLinesIconProps) {
  return (
    <svg
      viewBox="0 0 660 260"
      className="absolute inset-0 size-full overflow-visible"
      fill="none"
      aria-hidden="true"
    >
      {Object.values(flowPaths).map((path) => (
        <path
          key={path}
          d={path}
          stroke="#D4D4D8"
          strokeWidth="1"
          strokeLinecap="round"
        />
      ))}

      <motion.path
        d={flowPaths.sale1}
        stroke="#D03535"
        strokeWidth="1.15"
        strokeLinecap="round"
        initial={false}
        animate={{
          opacity: [0, 0, 1, 1, 1, 1, 0, 0],
          pathLength: [0, 0, 1, 1, 1, 1, 0, 0],
        }}
        transition={frameTransition}
      />

      <motion.path
        d={flowPaths.sale2}
        stroke="#A2D035"
        strokeWidth="1.15"
        strokeLinecap="round"
        initial={false}
        animate={{
          opacity: [0, 0, 0, 0, 1, 1, 0, 0],
          pathLength: [0, 0, 0, 0, 1, 1, 0, 0],
        }}
        transition={frameTransition}
      />
    </svg>
  )
}
