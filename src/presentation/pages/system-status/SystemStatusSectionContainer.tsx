"use client";

import { SystemStatusSection } from "@/presentation/pages/system-status/SystemStatusSection";
import { SYSTEM_STATUS_SECTION_CONFIG } from "@/presentation/pages/system-status/SystemStatusSectionConfig";
import { SystemStatusMetricCardContainer } from "@/presentation/pages/system-status/SystemStatusMetricCardContainer";

export function SystemStatusSectionContainer() {
  const metricCards = SYSTEM_STATUS_SECTION_CONFIG.METRICS.map((metric) => (
    <SystemStatusMetricCardContainer key={metric.label} metric={metric} />
  ));

  return <SystemStatusSection metricCards={metricCards} />;
}
