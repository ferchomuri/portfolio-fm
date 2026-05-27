import { SECTION_IDS } from "@/domain/constants/sections";
import { ICON_NAMES } from "@/domain/types/icon-name";
import type { IconName } from "@/domain/types/icon-name";

export interface SystemStatusMetricConfig {
  readonly iconName: IconName;
  readonly label: string;
  readonly value: string;
  readonly description: string;
  readonly status: string;
}

export const SYSTEM_STATUS_SECTION_CONFIG = {
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
  ] satisfies readonly SystemStatusMetricConfig[],
};
