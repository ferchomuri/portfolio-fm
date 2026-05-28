import { PROFILE } from "@/data/repositories/profile-repository";
import { SECTION_IDS } from "@/domain/constants/sections";
import { I18N_LOCALES, type Locale } from "@/presentation/i18n";

export interface HeroSectionConfig {
  readonly SECTION_ID: string;
  readonly STATUS_BADGE: string;
  readonly DESCRIPTION: string;
  readonly LINKEDIN_DISPLAY: string;
  readonly PRIMARY_CTA: { readonly LABEL: string; readonly HREF: string };
  readonly SECONDARY_CTA: { readonly LABEL: string; readonly HREF: string };
  readonly ROLES: readonly string[];
  readonly ROLE_ROTATION_MS: number;
  readonly TERMINAL_MAX_LINE: number;
  readonly TERMINAL_LINE_INTERVAL_MS: number;
  readonly TERMINAL_COMMAND: string;
  readonly TERMINAL_LINES: readonly string[];
  readonly TELEMETRY_LABEL: string;
  readonly LIVE_FEED_LABEL: string;
  readonly TERMINAL_TITLE: string;
  readonly DASHBOARD_METRICS: readonly {
    readonly value: string;
    readonly label: string;
    readonly accent?: boolean;
  }[];
  readonly NODE_LABELS: readonly string[];
}

const HERO_TIMING = {
  ROLE_ROTATION_MS: 3000,
  TERMINAL_MAX_LINE: 3,
  TERMINAL_LINE_INTERVAL_MS: 1200,
} as const;

const HERO_SECTION_CONFIG_EN: HeroSectionConfig = {
  SECTION_ID: SECTION_IDS.HERO,
  STATUS_BADGE: "CORE AGENT // DEPLOYED READY",
  DESCRIPTION:
    "6 years of experience in banking, e-commerce, and enterprise systems. Specialist in microfrontends, clean architecture, and AI-assisted workflows.",
  LINKEDIN_DISPLAY: "linkedin.com/in/fernando-murillo",
  PRIMARY_CTA: {
    LABEL: "RUN INTERACTIVE SIMULATOR",
    HREF: `#${SECTION_IDS.PLAYGROUND}`,
  },
  SECONDARY_CTA: {
    LABEL: "EXPLORE TIMELINE",
    HREF: `#${SECTION_IDS.TIMELINE}`,
  },
  ROLES: [PROFILE.title],
  ...HERO_TIMING,
  TERMINAL_COMMAND: "> pnpm run monitor --env=prod",
  TERMINAL_LINES: [
    "✔ edge clusters connected (US-EAST, EU-WEST, AP-NE)",
    "✔ telemetry systems streaming successfully",
    "LCP: 0.8s | FID: 12ms | CLS: 0.00",
  ],
  TELEMETRY_LABEL: "TELEMETRY // NODES",
  LIVE_FEED_LABEL: "LIVE FEED",
  TERMINAL_TITLE: "TERMINAL_LOGS",
  DASHBOARD_METRICS: [
    { value: "62%", label: "Debt Reduction", accent: false },
    { value: "2h→45m", label: "Delivery Speed", accent: false },
    { value: "6+", label: "Years Exp", accent: true },
  ],
  NODE_LABELS: ["HOST_US", "EDGE_EU", "HOST_AP"],
};

const HERO_SECTION_CONFIG_ES: HeroSectionConfig = {
  SECTION_ID: SECTION_IDS.HERO,
  STATUS_BADGE: "AGENTE CORE // LISTO PARA DESPLIEGUE",
  DESCRIPTION:
    "6 años de experiencia en banca, e-commerce y sistemas enterprise. Especialista en microfrontends, arquitectura limpia y workflows asistidos por IA.",
  LINKEDIN_DISPLAY: "linkedin.com/in/fernando-murillo",
  PRIMARY_CTA: {
    LABEL: "EJECUTAR SIMULADOR",
    HREF: `#${SECTION_IDS.PLAYGROUND}`,
  },
  SECONDARY_CTA: {
    LABEL: "EXPLORAR LINEA DE TIEMPO",
    HREF: `#${SECTION_IDS.TIMELINE}`,
  },
  ROLES: ["Ingeniero Frontend Senior"],
  ...HERO_TIMING,
  TERMINAL_COMMAND: "> pnpm run monitor --env=prod",
  TERMINAL_LINES: [
    "✔ clusters edge conectados (US-EAST, EU-WEST, AP-NE)",
    "✔ sistemas de telemetria transmitiendo correctamente",
    "LCP: 0.8s | FID: 12ms | CLS: 0.00",
  ],
  TELEMETRY_LABEL: "TELEMETRIA // NODOS",
  LIVE_FEED_LABEL: "FEED EN VIVO",
  TERMINAL_TITLE: "TERMINAL_LOGS",
  DASHBOARD_METRICS: [
    { value: "62%", label: "Reduccion de Deuda", accent: false },
    { value: "2h→45m", label: "Velocidad de Entrega", accent: false },
    { value: "6+", label: "Anios Exp", accent: true },
  ],
  NODE_LABELS: ["HOST_US", "EDGE_EU", "HOST_AP"],
};

export const getHeroSectionConfig = (locale: Locale): HeroSectionConfig => {
  if (locale === I18N_LOCALES.ES) {
    return HERO_SECTION_CONFIG_ES;
  }
  return HERO_SECTION_CONFIG_EN;
};

export const buildHeroRoles = (locale: Locale): readonly string[] =>
  getHeroSectionConfig(locale).ROLES;

/** @deprecated Use getHeroSectionConfig(locale). */
export const HERO_SECTION_CONFIG = HERO_SECTION_CONFIG_EN;
