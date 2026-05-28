import type {
  ExperienceMilestone,
  ExperienceTimelineConfig,
} from "@/presentation/pages/experience-timeline/ExperienceTimelineConfig";
import { ExperienceTimelineMobile } from "@/presentation/pages/experience-timeline/ExperienceTimelineMobile";
import { ExperienceTimelineDesktop } from "@/presentation/pages/experience-timeline/ExperienceTimelineDesktop";
import type { ExperienceTimelineDesktopProps } from "@/presentation/pages/experience-timeline/ExperienceTimelineDesktop";

export interface ExperienceTimelineProps {
  readonly sectionConfig: ExperienceTimelineConfig;
  readonly milestones: readonly ExperienceMilestone[];
  readonly desktopScroll: Pick<
    ExperienceTimelineDesktopProps,
    "containerRef" | "translateX" | "scrollYProgress"
  >;
}

export function ExperienceTimeline({
  sectionConfig,
  milestones,
  desktopScroll,
}: ExperienceTimelineProps) {
  return (
    <div id={sectionConfig.SECTION_ID} className="relative w-full">
      <ExperienceTimelineMobile sectionConfig={sectionConfig} milestones={milestones} />
      <ExperienceTimelineDesktop
        sectionConfig={sectionConfig}
        milestones={milestones}
        {...desktopScroll}
      />
    </div>
  );
}
