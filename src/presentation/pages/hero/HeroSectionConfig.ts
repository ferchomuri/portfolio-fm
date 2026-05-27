import { PROFILE } from "@/data/repositories/profile-repository";
import { SECTION_IDS } from "@/domain/constants/sections";

export const HERO_SECTION_CONFIG = {
  SECTION_ID: SECTION_IDS.HERO,
  STATUS_BADGE: "CORE AGENT // DEPLOYED READY",
  DESCRIPTION:
    "6 años de experiencia en banca, e-commerce y sistemas enterprise. Especialista en microfrontends, arquitectura limpia y workflows asistidos por IA.",
  LINKEDIN_DISPLAY: "linkedin.com/in/fernando-murillo",
  PRIMARY_CTA: {
    LABEL: "RUN INTERACTIVE SIMULATOR",
    HREF: `#${SECTION_IDS.PLAYGROUND}`,
  },
  SECONDARY_CTA: {
    LABEL: "EXPLORE TIMELINE",
    HREF: `#${SECTION_IDS.TIMELINE}`,
  },
  ROLES: [PROFILE.title] as const,
  ROLE_ROTATION_MS: 3000,
  TERMINAL_MAX_LINE: 3,
  TERMINAL_LINE_INTERVAL_MS: 1200,
  TERMINAL_COMMAND: "> pnpm run monitor --env=prod",
  TERMINAL_LINES: [
    "✔ edge clusters connected (US-EAST, EU-WEST, AP-NE)",
    "✔ telemetry systems streaming successfully",
    "LCP: 0.8s | FID: 12ms | CLS: 0.00",
  ] as const,
  TELEMETRY_LABEL: "TELEMETRY // NODES",
  LIVE_FEED_LABEL: "LIVE FEED",
  TERMINAL_TITLE: "TERMINAL_LOGS",
  DASHBOARD_METRICS: [
    { value: "62%", label: "Debt Reduction", accent: false },
    { value: "2h→45m", label: "Delivery Speed", accent: false },
    { value: "6+", label: "Years Exp", accent: true },
  ] as const,
  NODE_LABELS: ["HOST_US", "EDGE_EU", "HOST_AP"] as const,
};

export const buildHeroRoles = (): readonly string[] => HERO_SECTION_CONFIG.ROLES;
