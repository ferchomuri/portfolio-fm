import { SECTION_IDS } from "@/domain/constants/sections";
import { ICON_NAMES } from "@/domain/types/icon-name";
import type { IconName } from "@/domain/types/icon-name";
import { I18N_LOCALES, type Locale } from "@/presentation/i18n";

export interface SystemStatusMetricConfig {
  readonly iconName: IconName;
  readonly label: string;
  readonly value: string;
  readonly description: string;
  readonly status: string;
}

export interface SystemStatusSectionConfig {
  readonly SECTION_ID: string;
  readonly EYEBROW: string;
  readonly TITLE: string;
  readonly DESCRIPTION: string;
  readonly FOOTER_LOG: string;
  readonly METRICS: readonly SystemStatusMetricConfig[];
}

const SYSTEM_STATUS_SECTION_CONFIG_EN: SystemStatusSectionConfig = {
  SECTION_ID: SECTION_IDS.SYSTEM_STATUS,
  EYEBROW: "01 // PRODUCTION SYSTEM STATUS",
  TITLE: "Live Engineering Telemetry",
  DESCRIPTION:
    "Real performance telemetry compiled across production environments. No hand-waiving—backed directly by static analyzer statistics, network headers, and Lighthouse audits.",
  FOOTER_LOG: "LOGS // STREAM_ON",
  METRICS: [
    {
      iconName: ICON_NAMES.ACTIVITY,
      label: "Technical Debt Reduction",
      value: "62%",
      description:
        "Reduced technical debt from 40 → 15 items through microfrontends and Clean Architecture.",
      status: "OPTIMAL",
    },
    {
      iconName: ICON_NAMES.CLOUD_LIGHTNING,
      label: "Component Delivery Speed",
      value: "2h → 45m",
      description:
        "Faster component delivery using AI-assisted workflows and reusable patterns.",
      status: "OPTIMAL",
    },
    {
      iconName: ICON_NAMES.CPU,
      label: "Teams Led",
      value: "Up to 6",
      description:
        "Technical leadership across teams, including consistent code review and delivery support.",
      status: "STABLE",
    },
    {
      iconName: ICON_NAMES.SHIELD_CHECK,
      label: "Experience",
      value: "6+ years",
      description:
        "B2B and enterprise delivery experience across banking, e-commerce, and internal systems.",
      status: "ACTIVE",
    },
  ],
};

const SYSTEM_STATUS_SECTION_CONFIG_ES: SystemStatusSectionConfig = {
  SECTION_ID: SECTION_IDS.SYSTEM_STATUS,
  EYEBROW: "01 // ESTADO DEL SISTEMA EN PRODUCCION",
  TITLE: "Telemetria de Ingenieria en Vivo",
  DESCRIPTION:
    "Telemetria de rendimiento real compilada en entornos de produccion. Sin suposiciones: respaldada por analizadores estaticos, headers de red y auditorias Lighthouse.",
  FOOTER_LOG: "LOGS // STREAM_ON",
  METRICS: [
    {
      iconName: ICON_NAMES.ACTIVITY,
      label: "Reduccion de Deuda Tecnica",
      value: "62%",
      description:
        "Deuda tecnica reducida de 40 → 15 items mediante microfrontends y Clean Architecture.",
      status: "OPTIMAL",
    },
    {
      iconName: ICON_NAMES.CLOUD_LIGHTNING,
      label: "Velocidad de Entrega de Componentes",
      value: "2h → 45m",
      description:
        "Entrega de componentes mas rapida con workflows asistidos por IA y patrones reutilizables.",
      status: "OPTIMAL",
    },
    {
      iconName: ICON_NAMES.CPU,
      label: "Equipos Liderados",
      value: "Hasta 6",
      description:
        "Liderazgo tecnico en equipos, incluyendo code review constante y soporte de entrega.",
      status: "ESTABLE",
    },
    {
      iconName: ICON_NAMES.SHIELD_CHECK,
      label: "Experiencia",
      value: "6+ años",
      description:
        "Experiencia B2B y enterprise en banca, e-commerce y sistemas internos.",
      status: "ACTIVO",
    },
  ],
};

export const getSystemStatusSectionConfig = (locale: Locale): SystemStatusSectionConfig => {
  if (locale === I18N_LOCALES.ES) {
    return SYSTEM_STATUS_SECTION_CONFIG_ES;
  }
  return SYSTEM_STATUS_SECTION_CONFIG_EN;
};

/** @deprecated Use getSystemStatusSectionConfig(locale). */
export const SYSTEM_STATUS_SECTION_CONFIG = SYSTEM_STATUS_SECTION_CONFIG_EN;
