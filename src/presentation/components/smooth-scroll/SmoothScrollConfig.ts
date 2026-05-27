export const SMOOTH_SCROLL_CONFIG = {
  DURATION: 1.2,
  ANCHOR_OFFSET: -80,
  WHEEL_MULTIPLIER: 1.0,
  REDUCED_MOTION_QUERY: "(prefers-reduced-motion: reduce)",
} as const;

export const smoothScrollEasing = (t: number): number =>
  Math.min(1, 1.001 - Math.pow(2, -10 * t));
