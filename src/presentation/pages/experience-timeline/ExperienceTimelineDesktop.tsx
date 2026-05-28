import type { RefObject } from "react";
import { motion, type MotionValue } from "framer-motion";
import type { ExperienceMilestone } from "@/presentation/pages/experience-timeline/ExperienceTimelineConfig";
import type { ExperienceTimelineConfig } from "@/presentation/pages/experience-timeline/ExperienceTimelineConfig";
import { ExperienceTimelineHeader } from "@/presentation/pages/experience-timeline/ExperienceTimelineHeader";
import { ExperienceTimelineMilestoneCard } from "@/presentation/pages/experience-timeline/ExperienceTimelineMilestoneCard";

export interface ExperienceTimelineDesktopProps {
  readonly sectionConfig: ExperienceTimelineConfig;
  readonly milestones: readonly ExperienceMilestone[];
  readonly containerRef: RefObject<HTMLDivElement | null>;
  readonly translateX: MotionValue<string>;
  readonly scrollYProgress: MotionValue<number>;
}

export function ExperienceTimelineDesktop({
  sectionConfig,
  milestones,
  containerRef,
  translateX,
  scrollYProgress,
}: ExperienceTimelineDesktopProps) {
  return (
    <div
      ref={containerRef}
      className="relative hidden h-[250vh] w-full lg:block xl:h-[280vh]"
    >
      <div className="sticky top-0 flex h-screen max-h-screen w-full flex-col overflow-hidden bg-zinc-950/20">
        <div className="w-full shrink-0 px-6 pt-20 md:px-12 md:pt-24 z-20">
          <div className="max-w-7xl mx-auto w-full">
            <ExperienceTimelineHeader sectionConfig={sectionConfig} />
          </div>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center overflow-hidden px-6 md:px-12">
          <div className="max-w-7xl mx-auto w-full h-full overflow-hidden">
            <motion.div style={{ x: translateX }} className="flex h-full items-center gap-8">
              {milestones.map((milestone) => (
                <ExperienceTimelineMilestoneCard key={milestone.year} milestone={milestone} />
              ))}
              <div
                aria-hidden
                className="shrink-0 w-[min(100vw,80rem)] md:w-[min(calc(100vw-6rem),80rem)]"
              />
            </motion.div>
          </div>
        </div>

        <div className="w-full shrink-0 px-6 pb-10 pt-4 md:px-12 md:pb-16 z-20">
          <div className="max-w-7xl mx-auto w-full flex flex-col gap-2 font-mono text-[9px] text-zinc-500">
            <div className="flex items-center justify-between gap-4">
              <span className="truncate">{sectionConfig.PROGRESS_LABEL}</span>
              <span className="shrink-0">{sectionConfig.MILESTONE_COUNT_LABEL}</span>
            </div>
            <div className="h-1 w-full rounded-full bg-zinc-900 overflow-hidden border border-zinc-800/10">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="h-full bg-indigo-500 origin-left"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
