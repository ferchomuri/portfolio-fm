import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { fadeInUp, staggerContainer, VIEWPORT_ONCE } from "@/presentation/animations/MotionConfig";
import type { SystemStatusSectionConfig } from "@/presentation/pages/system-status/SystemStatusSectionConfig";

export interface SystemStatusSectionProps {
  readonly sectionConfig: SystemStatusSectionConfig;
  readonly metricCards: readonly ReactNode[];
}

export function SystemStatusSection({ sectionConfig, metricCards }: SystemStatusSectionProps) {
  return (
    <section
      id={sectionConfig.SECTION_ID}
      className="relative w-full overflow-hidden px-6 py-24 md:px-12 bg-zinc-950/30"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mb-12 space-y-4"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold tracking-widest"
          >
            <Activity className="h-4 w-4" />
            <span>{sectionConfig.EYEBROW}</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl"
          >
            {sectionConfig.TITLE}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="max-w-2xl text-sm text-zinc-400 leading-relaxed"
          >
            {sectionConfig.DESCRIPTION}
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08, 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {metricCards.map((card, index) => (
            <div key={index}>{card}</div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
