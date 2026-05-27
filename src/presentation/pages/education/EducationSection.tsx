import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { fadeInUp, staggerContainer, VIEWPORT_ONCE } from "@/presentation/animations/MotionConfig";
import {
  EDUCATION_SECTION_CONFIG,
  type EducationItemConfig,
} from "@/presentation/pages/education/EducationSectionConfig";

export interface EducationSectionProps {
  readonly items: readonly EducationItemConfig[];
}

export function EducationSection({ items }: EducationSectionProps) {
  return (
    <section
      id={EDUCATION_SECTION_CONFIG.SECTION_ID}
      className="relative w-full overflow-hidden px-6 py-24 md:px-12 bg-zinc-950/20"
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
            <GraduationCap className="h-4 w-4" />
            <span>{EDUCATION_SECTION_CONFIG.EYEBROW}</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl"
          >
            {EDUCATION_SECTION_CONFIG.TITLE}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="max-w-2xl text-sm text-zinc-400 leading-relaxed font-sans"
          >
            {EDUCATION_SECTION_CONFIG.DESCRIPTION}
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08, 0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {items.map((item) => (
            <motion.div
              key={`${item.title}-${item.period}`}
              variants={fadeInUp}
              className="relative overflow-hidden rounded-2xl border border-zinc-800/40 bg-zinc-950/70 p-6 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/60"
            >
              <div className="flex items-start justify-between gap-4 border-b border-zinc-900 pb-3">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-zinc-100 tracking-tight">{item.title}</h3>
                  <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                    {item.institution}
                  </p>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-indigo-500/20 bg-indigo-500/5 text-indigo-400">
                  <Award className="h-4 w-4" />
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <p className="font-mono text-[10px] font-semibold text-indigo-400 tracking-wider">
                  {item.period}
                </p>
                {item.note && (
                  <p className="text-xs text-zinc-500 leading-relaxed">{item.note}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
