import type { Transition } from "motion/react";

export const frameTransition: Transition = {
  duration: 9,
  repeat: Infinity,
  ease: "easeInOut",
  times: [0, 0.12, 0.16, 0.38, 0.41, 0.79, 0.82, 1],
};

export const statusTransition: Transition = {
  duration: 9,
  repeat: Infinity,
  ease: "linear",
  times: [0, 0.38, 0.41, 0.53, 0.56, 0.79, 0.82, 0.985, 0.999, 1],
};

export const analyzingOpacity = [1, 1, 0, 0, 1, 1, 0, 0, 1, 1];
export const analyzingFirstSaleOpacity = [1, 1, 0, 0, 0, 0, 0, 0, 1, 1];
export const analyzingNextSaleOpacity = [0, 0, 0, 0, 1, 1, 0, 0, 0, 0];
export const rejectedOpacity = [0, 0, 1, 1, 0, 0, 0, 0, 0, 0];
export const failedSaleOpacity = [0, 0, 1, 1, 1, 1, 1, 1, 0, 0];
export const approvedOpacity = [0, 0, 0, 0, 0, 0, 1, 1, 0, 0];
