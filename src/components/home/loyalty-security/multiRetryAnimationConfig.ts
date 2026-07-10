const baseStepDuration = 3.4;
const finalStepHoldDuration = 2.5;
const loopDuration = baseStepDuration * 4 + finalStepHoldDuration;

export const loopTransition = {
  duration: loopDuration,
  times: [
    0,
    baseStepDuration / loopDuration,
    (baseStepDuration * 2) / loopDuration,
    (baseStepDuration * 3) / loopDuration,
    (baseStepDuration * 3 + finalStepHoldDuration) / loopDuration,
    1,
  ],
  repeat: Infinity,
  ease: "easeInOut" as const,
};
