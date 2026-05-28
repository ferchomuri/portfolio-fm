"use client";

import { motion } from "framer-motion";
import { GitBranch, ExternalLink } from "lucide-react";
import { alternateReveal, staggerContainer, VIEWPORT_ONCE } from "@/presentation/animations/MotionConfig";
import {
  type DeploymentsSectionConfig,
  type DeploymentProjectConfig,
} from "@/presentation/pages/deployments/DeploymentsSectionConfig";
import { DeploymentsProjectVisual } from "@/presentation/pages/deployments/DeploymentsProjectVisual";

export interface DeploymentsSectionProps {
  readonly sectionConfig: DeploymentsSectionConfig;
  readonly projects: readonly DeploymentProjectConfig[];
}

export function DeploymentsSection({ sectionConfig, projects }: DeploymentsSectionProps) {
  return (
    <section
      id={sectionConfig.SECTION_ID}
      className="relative w-full overflow-hidden px-6 py-24 md:px-12 bg-zinc-950/20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mb-20 space-y-4"
        >
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold tracking-widest">
            <GitBranch className="h-4 w-4" />
            <span>{sectionConfig.EYEBROW}</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl">
            {sectionConfig.TITLE}
          </h2>
          <p className="max-w-2xl text-sm text-zinc-400 leading-relaxed font-sans">
            {sectionConfig.DESCRIPTION}
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={project.title}
                variants={alternateReveal(idx)}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
                className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center"
              >
                <div
                  className={`lg:col-span-6 overflow-hidden rounded-2xl border border-zinc-800/40 shadow-2xl ${
                    isEven ? "lg:order-first" : "lg:order-last"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.025 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="relative aspect-video w-full rounded-2xl overflow-hidden cursor-pointer"
                  >
                    <DeploymentsProjectVisual variant={project.visualVariant} />
                  </motion.div>
                </div>

                <div
                  className={`lg:col-span-6 space-y-6 flex flex-col justify-center ${
                    isEven ? "lg:order-last" : "lg:order-first"
                  }`}
                >
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] font-bold text-indigo-400 tracking-wider">
                      {project.tag}
                    </span>
                    <h3 className="text-2xl font-extrabold text-zinc-100 tracking-tight">
                      {project.title}
                    </h3>
                    <h4 className="font-mono text-[10px] text-zinc-500 font-medium uppercase tracking-widest">
                      {project.category}
                    </h4>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-zinc-900 bg-zinc-900/30 px-3 py-1 font-mono text-[9px] font-medium text-zinc-400"
                      >
                        {item.toUpperCase()}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 pt-4 border-t border-zinc-900 sm:flex-row sm:gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex min-h-11 items-center justify-center gap-2 rounded-full bg-zinc-900 border border-zinc-800 px-5 py-3 font-mono text-[10px] font-bold text-zinc-200 transition-all duration-300 hover:border-indigo-500/40 hover:text-white hover:scale-[1.03] active:scale-[0.98] sm:justify-start"
                      data-cursor="pointer"
                    >
                      <span>{sectionConfig.LAUNCH_LABEL}</span>
                      <ExternalLink className="h-3 w-3 text-indigo-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      title={sectionConfig.SOURCE_UNAVAILABLE_TITLE}
                      className="flex min-h-11 cursor-not-allowed items-center justify-center gap-2 rounded-full border border-zinc-900/60 px-5 py-3 font-mono text-[10px] font-bold text-zinc-600 opacity-50 sm:justify-start"
                    >
                      <svg
                        className="h-3.5 w-3.5 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      <span>{sectionConfig.SOURCE_LABEL}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
