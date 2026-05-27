import { SECTION_IDS } from "@/domain/constants/sections";
import { SITE_COPY } from "@/domain/constants/site";

export interface HeaderNavItem {
  readonly id: string;
  readonly label: string;
}

export const HEADER_CONFIG = {
  BRAND: SITE_COPY.PLATFORM_BRAND,
  STATUS: SITE_COPY.PLATFORM_STATUS,
  CONNECT_LABEL: "CONNECT",
  CONTACT_HASH: `#${SECTION_IDS.CONTACT}`,
  SCROLL_THRESHOLD: 20,
  SCROLL_OFFSET_RATIO: 1 / 3,
  HEADER_ANIMATION: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  NAV_SPRING: { type: "spring" as const, stiffness: 380, damping: 30 },
  MOBILE_SPRING: { type: "spring" as const, stiffness: 380, damping: 36 },
  NAV_ITEMS: [
    { id: SECTION_IDS.HERO, label: "Dashboard" },
    { id: SECTION_IDS.SYSTEM_STATUS, label: "Telemetry" },
    { id: SECTION_IDS.CAPABILITIES, label: "Skills" },
    { id: SECTION_IDS.TIMELINE, label: "Timeline" },
    { id: SECTION_IDS.DEPLOYMENTS, label: "Deployments" },
    { id: SECTION_IDS.PLAYGROUND, label: "Playground" },
    { id: SECTION_IDS.AI_LAB, label: "AI Sandbox" },
  ] satisfies readonly HeaderNavItem[],
};

export const buildSectionHref = (sectionId: string): string => `#${sectionId}`;
