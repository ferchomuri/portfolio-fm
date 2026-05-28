"use client";

import { ExperienceTimeline } from "@/presentation/pages/experience-timeline/ExperienceTimeline";
import { getExperienceTimelineConfig } from "@/presentation/pages/experience-timeline/ExperienceTimelineConfig";
import { useExperienceTimelineDesktopScroll } from "@/presentation/pages/experience-timeline/hooks/useExperienceTimelineDesktopScroll";
import { useI18n } from "@/presentation/i18n";

export function ExperienceTimelineContainer() {
  const { locale } = useI18n();
  const sectionConfig = getExperienceTimelineConfig(locale);
  const desktopScroll = useExperienceTimelineDesktopScroll();

  return (
    <ExperienceTimeline
      key={locale}
      sectionConfig={sectionConfig}
      milestones={sectionConfig.MILESTONES}
      desktopScroll={desktopScroll}
    />
  );
}
