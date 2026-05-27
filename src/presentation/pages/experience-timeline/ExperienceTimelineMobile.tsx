import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, VIEWPORT_ONCE } from "@/presentation/animations/MotionConfig";
import type { ExperienceMilestone } from "@/presentation/pages/experience-timeline/ExperienceTimelineConfig";
import { ExperienceTimelineHeader } from "@/presentation/pages/experience-timeline/ExperienceTimelineHeader";
import { ExperienceTimelineMilestoneCard } from "@/presentation/pages/experience-timeline/ExperienceTimelineMilestoneCard";

export interface ExperienceTimelineMobileProps {
  readonly milestones: readonly ExperienceMilestone[];
}

export function ExperienceTimelineMobile({ milestones }: ExperienceTimelineMobileProps) {
  return (
    <section className="relative w-full overflow-hidden px-6 py-20 md:px-12 md:py-24 bg-zinc-950/20 lg:hidden">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mb-10"
        >
          <motion.div variants={fadeInUp}>
            <ExperienceTimelineHeader />
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08, 0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="relative space-y-6"
        >
          <div
            className="absolute left-[11px] top-2 bottom-2 w-px bg-zinc-800/80"
            aria-hidden
          />
          {milestones.map((milestone, idx) => (
            <motion.div key={milestone.year} variants={fadeInUp} className="relative pl-8">
              <span
                className="absolute left-0 top-6 flex h-[22px] w-[22px] items-center justify-center rounded-full border border-indigo-500/40 bg-zinc-950 font-mono text-[9px] font-bold text-indigo-400"
                aria-hidden
              >
                {String(idx + 1).padStart(2, "0")}
              </span>
              <ExperienceTimelineMilestoneCard milestone={milestone} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
