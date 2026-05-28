import { SECTION_IDS } from "@/domain/constants/sections";
import { I18N_LOCALES, type Locale } from "@/presentation/i18n";
import { getSiteCopy } from "@/presentation/i18n/site-copy";

export interface HeaderNavItem {
  readonly id: string;
  readonly label: string;
}

export interface HeaderConfig {
  readonly BRAND: string;
  readonly STATUS: string;
  readonly CONNECT_LABEL: string;
  readonly CONTACT_HASH: string;
  readonly SCROLL_THRESHOLD: number;
  readonly SCROLL_OFFSET_RATIO: number;
  readonly HEADER_ANIMATION: { readonly duration: number; readonly ease: readonly [number, number, number, number] };
  readonly NAV_SPRING: { readonly type: "spring"; readonly stiffness: number; readonly damping: number };
  readonly MOBILE_SPRING: { readonly type: "spring"; readonly stiffness: number; readonly damping: number };
  readonly NAV_ITEMS: readonly HeaderNavItem[];
}

const HEADER_CONFIG_BASE = {
  CONTACT_HASH: `#${SECTION_IDS.CONTACT}`,
  SCROLL_THRESHOLD: 20,
  SCROLL_OFFSET_RATIO: 1 / 3,
  HEADER_ANIMATION: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  NAV_SPRING: { type: "spring" as const, stiffness: 380, damping: 30 },
  MOBILE_SPRING: { type: "spring" as const, stiffness: 380, damping: 36 },
} as const;

const HEADER_CONFIG_EN: HeaderConfig = {
  ...HEADER_CONFIG_BASE,
  BRAND: "",
  STATUS: "",
  CONNECT_LABEL: "CONNECT",
  NAV_ITEMS: [
    { id: SECTION_IDS.HERO, label: "Dashboard" },
    { id: SECTION_IDS.SYSTEM_STATUS, label: "Telemetry" },
    { id: SECTION_IDS.CAPABILITIES, label: "Skills" },
    { id: SECTION_IDS.TIMELINE, label: "Timeline" },
    { id: SECTION_IDS.DEPLOYMENTS, label: "Deployments" },
    { id: SECTION_IDS.PLAYGROUND, label: "Playground" },
    { id: SECTION_IDS.AI_LAB, label: "AI Sandbox" },
  ],
};

const HEADER_CONFIG_ES: HeaderConfig = {
  ...HEADER_CONFIG_BASE,
  BRAND: "",
  STATUS: "",
  CONNECT_LABEL: "CONECTAR",
  NAV_ITEMS: [
    { id: SECTION_IDS.HERO, label: "Panel" },
    { id: SECTION_IDS.SYSTEM_STATUS, label: "Telemetria" },
    { id: SECTION_IDS.CAPABILITIES, label: "Habilidades" },
    { id: SECTION_IDS.TIMELINE, label: "Linea de tiempo" },
    { id: SECTION_IDS.DEPLOYMENTS, label: "Despliegues" },
    { id: SECTION_IDS.PLAYGROUND, label: "Laboratorio" },
    { id: SECTION_IDS.AI_LAB, label: "Sandbox IA" },
  ],
};

export const getHeaderConfig = (locale: Locale): HeaderConfig => {
  const site = getSiteCopy(locale);
  const config = locale === I18N_LOCALES.ES ? HEADER_CONFIG_ES : HEADER_CONFIG_EN;
  return {
    ...config,
    BRAND: site.PLATFORM_BRAND,
    STATUS: site.PLATFORM_STATUS,
  };
};

/** @deprecated Use getHeaderConfig(locale) for locale-aware copy. */
export const HEADER_CONFIG = HEADER_CONFIG_EN;

export const buildSectionHref = (sectionId: string): string => `#${sectionId}`;
