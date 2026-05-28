import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";
import { fadeInUp, staggerContainer, VIEWPORT_ONCE } from "@/presentation/animations/MotionConfig";
import type {
  CapabilitiesSectionConfig,
  CapabilityItemConfig,
} from "@/presentation/pages/capabilities/CapabilitiesSectionConfig";

export interface CapabilityCategoryViewModel {
  readonly id: string;
  readonly label: string;
  readonly icon: ReactNode;
}

export interface CapabilitiesSectionProps {
  readonly sectionConfig: CapabilitiesSectionConfig;
  readonly categories: readonly CapabilityCategoryViewModel[];
  readonly activeCategory: string;
  readonly activeCapabilities: readonly CapabilityItemConfig[];
  readonly onSelectCategory: (categoryId: string) => void;
}

export function CapabilitiesSection({
  sectionConfig,
  categories,
  activeCategory,
  activeCapabilities,
  onSelectCategory,
}: CapabilitiesSectionProps) {
  return (
    <section
      id={sectionConfig.SECTION_ID}
      className="relative w-full overflow-hidden px-6 py-24 md:px-12"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="flex flex-col justify-center lg:col-span-4 space-y-6"
          >
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold tracking-widest">
              <Zap className="h-4 w-4" />
              <span>{sectionConfig.EYEBROW}</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl">
              {sectionConfig.TITLE}
            </h2>

            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              {sectionConfig.DESCRIPTION}
            </p>

            <div className="flex flex-col gap-2 rounded-xl border border-zinc-800/40 bg-zinc-950/50 p-2 backdrop-blur-sm">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => onSelectCategory(cat.id)}
                    className={`relative flex min-h-11 items-center gap-3 rounded-lg px-4 py-3 font-mono text-xs font-semibold tracking-wider transition-all duration-300 ${
                      isActive ? "text-indigo-400" : "text-zinc-500 hover:text-zinc-300"
                    }`}
                    data-cursor="pointer"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCapCategory"
                        className="absolute inset-0 rounded-lg border border-indigo-500/20 bg-indigo-500/5"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    {cat.icon}
                    <span>{cat.label.toUpperCase()}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <div className="lg:col-span-8 flex items-center justify-center">
            <div className="w-full relative min-h-[350px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  variants={staggerContainer(0.06, 0.05)}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-full"
                >
                  {activeCapabilities.map((tech) => (
                    <motion.div
                      key={tech.name}
                      variants={fadeInUp}
                      className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-800/30 bg-zinc-950/70 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/60"
                    >
                      <div>
                        <div className="flex items-start justify-between">
                          <h3 className="font-mono text-xs font-bold text-zinc-200">{tech.name}</h3>
                          <div className="flex items-center gap-1 text-[8px] font-mono font-medium text-indigo-400 bg-indigo-950/20 px-2 py-0.5 rounded-full border border-indigo-500/15">
                            {tech.metric}
                          </div>
                        </div>
                        <p className="mt-3 text-[11px] text-zinc-500 leading-relaxed font-sans">
                          {tech.detail}
                        </p>
                      </div>
                      <div className="mt-5 space-y-1.5">
                        <div className="flex items-center justify-between text-[9px] font-mono text-zinc-600">
                          <span>{tech.metricLabel.toUpperCase()}</span>
                          <span className="text-zinc-400">{tech.level}% COMPLETE</span>
                        </div>
                        <div className="h-1 w-full rounded-full bg-zinc-900 overflow-hidden">
                          <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: `${tech.level}%` }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            className="h-full bg-indigo-500"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
