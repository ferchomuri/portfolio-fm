import type { Variants } from "framer-motion";
import { EASE_PREMIUM, DURATIONS } from "./Transitions";

export const VIEWPORT_ONCE = { once: true, margin: "-100px" };

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATIONS.NORMAL, ease: EASE_PREMIUM },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.SLOW, ease: EASE_PREMIUM },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.SLOW, ease: EASE_PREMIUM },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATIONS.SLOW, ease: EASE_PREMIUM },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATIONS.SLOW, ease: EASE_PREMIUM },
  },
};

export const staggerContainer = (
  staggerChildren = 0.08,
  delayChildren = 0,
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const floatDashboard: Variants = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export const pulseNode: Variants = {
  animate: {
    scale: [1, 1.25, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export const hoverLiftCard: Variants = {
  rest: { y: 0, scale: 1, borderColor: "rgba(63, 63, 70, 0.4)" },
  hover: {
    y: -4,
    scale: 1.015,
    borderColor: "rgba(99, 102, 241, 0.6)",
    transition: {
      duration: DURATIONS.FAST,
      ease: EASE_PREMIUM,
    },
  },
};

export const alternateReveal = (index: number): Variants => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATIONS.SLOW,
      ease: EASE_PREMIUM,
    },
  },
});
