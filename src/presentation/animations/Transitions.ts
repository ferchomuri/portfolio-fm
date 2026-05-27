export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;
export const EASE_INOUT = [0.65, 0, 0.35, 1] as const;
export const EASE_BOUNCE_SUBTLE = [0.34, 1.3, 0.64, 1] as const;

export const DURATIONS = {
  FAST: 0.2,
  NORMAL: 0.4,
  SLOW: 0.8,
  CINEMATIC: 1.2,
} as const;

export const TRANSITIONS = {
  PREMIUM_SLOW: {
    duration: DURATIONS.SLOW,
    ease: EASE_PREMIUM,
  },
  PREMIUM_NORMAL: {
    duration: DURATIONS.NORMAL,
    ease: EASE_PREMIUM,
  },
  PREMIUM_FAST: {
    duration: DURATIONS.FAST,
    ease: EASE_PREMIUM,
  },
  PREMIUM_CINEMATIC: {
    duration: DURATIONS.CINEMATIC,
    ease: EASE_PREMIUM,
  },
} as const;
