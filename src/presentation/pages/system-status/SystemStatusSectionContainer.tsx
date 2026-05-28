"use client";

import { SystemStatusSection } from "@/presentation/pages/system-status/SystemStatusSection";
import { getSystemStatusSectionConfig } from "@/presentation/pages/system-status/SystemStatusSectionConfig";
import { SystemStatusMetricCardContainer } from "@/presentation/pages/system-status/SystemStatusMetricCardContainer";
import { useI18n } from "@/presentation/i18n";

export function SystemStatusSectionContainer() {
  const { locale } = useI18n();
  const sectionConfig = getSystemStatusSectionConfig(locale);

  const metricCards = sectionConfig.METRICS.map((metric) => (
    <SystemStatusMetricCardContainer
      key={metric.label}
      metric={metric}
      footerLog={sectionConfig.FOOTER_LOG}
    />
  ));

  return <SystemStatusSection sectionConfig={sectionConfig} metricCards={metricCards} />;
}
