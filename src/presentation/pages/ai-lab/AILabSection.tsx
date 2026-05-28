import { motion } from "framer-motion";
import { Terminal, BrainCircuit } from "lucide-react";
import { staggerContainer, VIEWPORT_ONCE } from "@/presentation/animations/MotionConfig";
import type { AILabSectionConfig } from "@/presentation/pages/ai-lab/AILabSectionConfig";

export interface AILabSectionProps {
  readonly sectionConfig: AILabSectionConfig;
  readonly logs: readonly string[];
  readonly isStreaming: boolean;
}

export function AILabSection({ sectionConfig, logs, isStreaming }: AILabSectionProps) {
  return (
    <section
      id={sectionConfig.SECTION_ID}
      className="relative w-full overflow-hidden px-6 py-24 md:px-12"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-md rounded-2xl border border-zinc-800/40 bg-zinc-950 p-6 shadow-2xl backdrop-blur-sm min-h-[380px] flex flex-col justify-between">
              <div className="mb-4 flex items-center justify-between border-b border-zinc-900 pb-3">
                <div className="flex items-center gap-2">
                  <BrainCircuit className="h-4.5 w-4.5 text-indigo-400" />
                  <span className="font-mono text-[10px] font-bold text-zinc-300">
                    {sectionConfig.PANEL_TITLE}
                  </span>
                </div>
                <span className="font-mono text-[8px] text-zinc-500">
                  {sectionConfig.PANEL_STAGE}
                </span>
              </div>

              <div className="relative h-44 w-full rounded-lg border border-zinc-900 bg-zinc-900/10 overflow-hidden flex items-center justify-center">
                <svg
                  className="absolute inset-0 h-full w-full pointer-events-none"
                  viewBox="0 0 330 180"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="50"
                    y1="90"
                    x2="140"
                    y2="40"
                    stroke="rgba(161, 161, 170, 0.2)"
                    strokeWidth="1"
                  />
                  <line
                    x1="50"
                    y1="90"
                    x2="140"
                    y2="140"
                    stroke="rgba(161, 161, 170, 0.2)"
                    strokeWidth="1"
                  />
                  <line
                    x1="140"
                    y1="40"
                    x2="280"
                    y2="90"
                    stroke="rgba(99, 102, 241, 0.3)"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="140"
                    y1="140"
                    x2="280"
                    y2="90"
                    stroke="rgba(99, 102, 241, 0.3)"
                    strokeWidth="1.5"
                  />
                  <motion.circle
                    cx="50"
                    cy="90"
                    r="3"
                    fill="#6366f1"
                    animate={{ cx: [50, 140, 280], cy: [90, 40, 90] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  />
                  <motion.circle
                    cx="50"
                    cy="90"
                    r="3"
                    fill="#10b981"
                    animate={{ cx: [50, 140, 280], cy: [90, 140, 90] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 }}
                  />
                </svg>

                <div className="absolute top-[16%] left-[36%] -translate-x-1/2 flex flex-col items-center">
                  <div className="h-6 w-12 rounded bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-center">
                    <span className="font-mono text-[7px] text-indigo-400">
                      {sectionConfig.PARSE_LABEL}
                    </span>
                  </div>
                </div>

                <div className="absolute top-[71%] left-[36%] -translate-x-1/2 flex flex-col items-center">
                  <div className="h-6 w-12 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    <span className="font-mono text-[7px] text-zinc-500">
                      {sectionConfig.FILTER_LABEL}
                    </span>
                  </div>
                </div>

                <div className="absolute top-[43%] left-[79%] -translate-x-1/2 flex flex-col items-center">
                  <div className="h-6 w-[56px] rounded bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center animate-pulse">
                    <span className="font-mono text-[7px] text-emerald-400 font-semibold">
                      {sectionConfig.OPTIMIZED_LABEL}
                    </span>
                  </div>
                </div>

                <div className="absolute top-[43%] left-[8%] -translate-x-1/2 flex flex-col items-center">
                  <span className="font-mono text-[8px] text-zinc-600 uppercase">
                    {sectionConfig.INPUT_LABEL}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex justify-between border-t border-zinc-900 pt-3 font-mono text-[9px] text-zinc-500">
                <span>
                  {sectionConfig.AGENT_STATUS_LABEL}{" "}
                  <span className="text-emerald-400 font-bold">
                    {sectionConfig.AGENT_STATUS_VALUE}
                  </span>
                </span>
                <span>
                  {sectionConfig.OPTIMIZED_SIZE_LABEL}{" "}
                  <span className="text-zinc-300 font-semibold">
                    {sectionConfig.OPTIMIZED_SIZE_VALUE}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="flex flex-col justify-center space-y-6 lg:col-span-6"
          >
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold tracking-widest">
              <Terminal className="h-4 w-4" />
              <span>{sectionConfig.EYEBROW}</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl">
              {sectionConfig.TITLE}
            </h2>

            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              {sectionConfig.DESCRIPTION}
            </p>

            <div className="rounded-xl border border-zinc-900 bg-black p-4 font-mono text-[10px] text-zinc-400 shadow-inner min-h-[180px] flex flex-col justify-between">
              <div className="space-y-1.5">
                {logs.map((log, idx) => {
                  const isSuccess = log.includes("✔");
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className={isSuccess ? "text-emerald-400" : "text-zinc-300"}
                    >
                      {log}
                    </motion.div>
                  );
                })}
                {isStreaming && (
                  <div className="flex items-center gap-1.5 text-zinc-500">
                    <span>{sectionConfig.ANALYZING_MESSAGE}</span>
                    <span className="h-2 w-2 rounded-full bg-indigo-500 animate-ping" />
                  </div>
                )}
              </div>

              <div className="mt-4 flex items-center gap-0.5 border-t border-zinc-900 pt-3">
                <span className="text-zinc-600">&gt;</span>
                <span className="inline-block h-3.5 w-1.5 bg-zinc-400 animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
