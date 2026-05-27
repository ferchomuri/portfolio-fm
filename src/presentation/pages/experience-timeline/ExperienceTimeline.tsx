import { EXPERIENCE_TIMELINE_CONFIG } from "@/presentation/pages/experience-timeline/ExperienceTimelineConfig";
import { ExperienceTimelineMobile } from "@/presentation/pages/experience-timeline/ExperienceTimelineMobile";
import { ExperienceTimelineDesktop } from "@/presentation/pages/experience-timeline/ExperienceTimelineDesktop";
import type { ExperienceTimelineDesktopProps } from "@/presentation/pages/experience-timeline/ExperienceTimelineDesktop";

export interface ExperienceTimelineProps {
  readonly milestones: typeof EXPERIENCE_TIMELINE_CONFIG.MILESTONES;
  readonly desktopScroll: Pick<
    ExperienceTimelineDesktopProps,
    "containerRef" | "translateX" | "scrollYProgress"
  >;
}

export function ExperienceTimeline({ milestones, desktopScroll }: ExperienceTimelineProps) {
  return (
    <div id={EXPERIENCE_TIMELINE_CONFIG.SECTION_ID} className="relative w-full">
      <ExperienceTimelineMobile milestones={milestones} />
      <ExperienceTimelineDesktop milestones={milestones} {...desktopScroll} />
    </div>
  );
}
