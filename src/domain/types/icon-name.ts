export const ICON_NAMES = {
  ACTIVITY: "activity",
  CLOUD_LIGHTNING: "cloud-lightning",
  CPU: "cpu",
  SHIELD_CHECK: "shield-check",
  CODE: "code",
  SERVER: "server",
  CLOUD: "cloud",
  SHIELD: "shield",
  BRAIN: "brain",
  ZAP: "zap",
} as const;

export type IconName = (typeof ICON_NAMES)[keyof typeof ICON_NAMES];
