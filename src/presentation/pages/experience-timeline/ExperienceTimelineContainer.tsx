"use client";

import { ExperienceTimeline } from "@/presentation/pages/experience-timeline/ExperienceTimeline";
import { EXPERIENCE_TIMELINE_CONFIG } from "@/presentation/pages/experience-timeline/ExperienceTimelineConfig";
import { useExperienceTimelineDesktopScroll } from "@/presentation/pages/experience-timeline/hooks/useExperienceTimelineDesktopScroll";

export function ExperienceTimelineContainer() {
  const desktopScroll = useExperienceTimelineDesktopScroll();

  return (
    <ExperienceTimeline
      milestones={EXPERIENCE_TIMELINE_CONFIG.MILESTONES}
      desktopScroll={desktopScroll}
    />
  );
}
