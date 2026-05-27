export const CUSTOM_CURSOR_CONFIG = {
  COARSE_POINTER_QUERY: "(pointer: coarse)",
  SPRING: { damping: 40, stiffness: 450 },
  INITIAL_POSITION: -100,
  SPOTLIGHT_SIZE: 400,
  SPOTLIGHT_BLUR: 80,
  RING_SIZE: 24,
  HOVER_SCALE: 1.5,
  INTERACTIVE_SELECTORS: "button, a, [role='button'], [data-cursor='pointer'], input, textarea",
} as const;
