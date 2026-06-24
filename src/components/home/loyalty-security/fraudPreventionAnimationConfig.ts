import type { Transition } from "motion/react";

export const frameTransition: Transition = {
  duration: 8.4,
  repeat: Infinity,
  ease: "easeInOut",
  times: [0, 0.12, 0.16, 0.46, 0.5, 0.8, 0.84, 1],
};

export const analyzingOpacity = [1, 1, 0, 0, 0, 0, 1, 1];
export const rejectedOpacity = [0, 0, 1, 1, 0, 0, 0, 0];
export const approvedOpacity = [0, 0, 0, 0, 1, 1, 0, 0];
