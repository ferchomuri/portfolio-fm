"use client";

import type { SystemStatusMetricConfig } from "@/presentation/pages/system-status/SystemStatusSectionConfig";
import { SystemStatusMetricCard } from "@/presentation/pages/system-status/SystemStatusMetricCard";
import { useSpotlightCoords } from "@/presentation/pages/system-status/hooks/useSpotlightCoords";
import { FeatureIcon } from "@/presentation/components/feature-icon";

export interface SystemStatusMetricCardContainerProps {
  readonly metric: SystemStatusMetricConfig;
  readonly footerLog: string;
}

export function SystemStatusMetricCardContainer({
  metric,
  footerLog,
}: SystemStatusMetricCardContainerProps) {
  const spotlight = useSpotlightCoords();
  return (
    <SystemStatusMetricCard
      footerLog={footerLog}
      icon={<FeatureIcon name={metric.iconName} className="h-5 w-5 text-indigo-400" />}
      label={metric.label}
      value={metric.value}
      description={metric.description}
      status={metric.status}
      spotlightX={spotlight.coords.x}
      spotlightY={spotlight.coords.y}
      spotlightHovered={spotlight.hovered}
      onSpotlightMouseMove={spotlight.onMouseMove}
      onSpotlightMouseEnter={spotlight.onMouseEnter}
      onSpotlightMouseLeave={spotlight.onMouseLeave}
    />
  );
}
