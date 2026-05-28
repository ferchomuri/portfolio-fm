import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Terminal as TerminalIcon, ArrowRight, Mail, MapPin, Play, Radio } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  floatDashboard,
  pulseNode,
  VIEWPORT_ONCE,
} from "@/presentation/animations/MotionConfig";
import type { HeroSectionConfig } from "@/presentation/pages/hero/HeroSectionConfig";

export interface HeroDashboardMetric {
  readonly value: string;
  readonly label: string;
  readonly accent?: boolean;
}

export interface HeroSectionProps {
  readonly sectionConfig: HeroSectionConfig;
  readonly fullName: string;
  readonly title: string;
  readonly email: string;
  readonly location: string;
  readonly photoSrc: string;
  readonly photoAlt: string;
  readonly githubHref: string;
  readonly linkedinHref: string;
  readonly roles: readonly string[];
  readonly roleIndex: number;
  readonly terminalLine: number;
}

export function HeroSection({
  sectionConfig,
  fullName,
  title,
  email,
  location,
  photoSrc,
  photoAlt,
  githubHref,
  linkedinHref,
  roles,
  roleIndex,
  terminalLine,
}: HeroSectionProps) {
  return (
    <section
      id={sectionConfig.SECTION_ID}
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-6 pt-24 md:px-12"
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px] glow-breath-1" />
        <div className="absolute bottom-[20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-emerald-500/5 blur-[150px] glow-breath-2" />
        <div className="cyber-grid absolute inset-0 opacity-40" />
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 max-w-7xl mx-auto w-full">
        <motion.div
          className="flex flex-col justify-center lg:col-span-7 space-y-6"
          variants={staggerContainer(0.12, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3 py-1 font-mono text-xs font-semibold text-indigo-400"
          >
            <Radio className="h-3 w-3 animate-pulse" />
            <span>{sectionConfig.STATUS_BADGE}</span>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-3">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl md:text-6xl">
              {fullName}
              <br />
              <span className="relative inline-flex max-w-full text-indigo-400">
                <span className="invisible select-none sm:whitespace-nowrap">{title}</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 15, opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -15, opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 top-0 sm:whitespace-nowrap"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="max-w-xl text-base text-zinc-400 sm:text-lg leading-relaxed font-sans"
          >
            {sectionConfig.DESCRIPTION}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-2 text-sm text-zinc-400"
          >
            <a
              href={`mailto:${email}`}
              className="flex min-h-11 items-center gap-2 w-fit py-2 hover:text-zinc-200 transition-colors"
              data-cursor="pointer"
            >
              <Mail className="h-4 w-4 shrink-0 text-indigo-400" />
              <span className="font-mono text-xs break-all">{email}</span>
            </a>
            <a
              href={linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center gap-2 w-fit py-2 hover:text-zinc-200 transition-colors"
              data-cursor="pointer"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              <span className="font-mono text-xs">{sectionConfig.LINKEDIN_DISPLAY}</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-indigo-400" />
              <span className="font-mono text-xs">{location}</span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-2">
            <a
              href={sectionConfig.PRIMARY_CTA.HREF}
              className="group flex min-h-11 items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-mono text-xs font-bold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:bg-indigo-500 hover:scale-[1.03] active:scale-[0.98]"
              data-cursor="pointer"
            >
              <span>{sectionConfig.PRIMARY_CTA.LABEL}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href={sectionConfig.SECONDARY_CTA.HREF}
              className="flex min-h-11 items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/80 px-6 py-3 font-mono text-xs font-bold text-zinc-300 transition-all duration-300 hover:border-zinc-700 hover:text-zinc-50 hover:bg-zinc-900 hover:scale-[1.03] active:scale-[0.98]"
              data-cursor="pointer"
            >
              <Play className="h-3.5 w-3.5 text-indigo-400" />
              <span>{sectionConfig.SECONDARY_CTA.LABEL}</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center lg:col-span-5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <motion.div
            variants={floatDashboard}
            animate="animate"
            className="relative w-full max-w-md rounded-2xl border border-zinc-800/80 bg-zinc-950/80 p-5 shadow-2xl backdrop-blur-sm"
          >
            <div className="mb-4 flex items-center gap-3 border-b border-zinc-800/60 pb-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border border-indigo-500/25 bg-zinc-900/40">
                <Image
                  src={photoSrc}
                  alt={photoAlt}
                  fill
                  sizes="44px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                  {title}
                </span>
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href={githubHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center gap-1.5 px-1 text-[10px] text-zinc-400 hover:text-zinc-200 transition-colors"
                    data-cursor="pointer"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                    <span className="font-mono">GitHub</span>
                  </a>
                  <a
                    href={linkedinHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center gap-1.5 px-1 text-[10px] text-zinc-400 hover:text-zinc-200 transition-colors"
                    data-cursor="pointer"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                    <span className="font-mono">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-4 flex items-center justify-between border-b border-zinc-800/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-indigo-500 animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                  {sectionConfig.TELEMETRY_LABEL}
                </span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[9px] text-emerald-400 bg-emerald-950/20 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <Radio className="h-2.5 w-2.5" />
                <span>{sectionConfig.LIVE_FEED_LABEL}</span>
              </div>
            </div>

            <div className="relative mb-4 h-40 w-full rounded-lg border border-zinc-900 bg-zinc-900/30 overflow-hidden">
              <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M 50 80 Q 150 20 200 80 T 350 80"
                  fill="transparent"
                  stroke="rgba(99, 102, 241, 0.15)"
                  strokeWidth="2"
                />
                <motion.path
                  d="M 50 80 Q 150 20 200 80 T 350 80"
                  fill="transparent"
                  stroke="rgba(129, 140, 248, 0.8)"
                  strokeWidth="2"
                  strokeDasharray="15 30"
                  animate={{ strokeDashoffset: [0, -120] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                />
                <path
                  d="M 50 80 H 350"
                  fill="transparent"
                  stroke="rgba(16, 185, 129, 0.1)"
                  strokeWidth="1.5"
                />
                <motion.path
                  d="M 50 80 H 350"
                  fill="transparent"
                  stroke="rgba(52, 211, 153, 0.6)"
                  strokeWidth="1.5"
                  strokeDasharray="10 20"
                  animate={{ strokeDashoffset: [0, 60] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                />
              </svg>

              <div className="absolute top-[68px] left-[35px] flex flex-col items-center">
                <motion.div
                  variants={pulseNode}
                  animate="animate"
                  className="h-3.5 w-3.5 rounded-full bg-indigo-500 border border-black shadow-lg shadow-indigo-500/50"
                />
                <span className="mt-1 font-mono text-[8px] text-zinc-500">
                  {sectionConfig.NODE_LABELS[0]}
                </span>
              </div>

              <div className="absolute top-[68px] left-[185px] flex flex-col items-center">
                <motion.div
                  variants={pulseNode}
                  animate="animate"
                  className="h-3.5 w-3.5 rounded-full bg-emerald-500 border border-black shadow-lg shadow-emerald-500/50"
                />
                <span className="mt-1 font-mono text-[8px] text-zinc-500">
                  {sectionConfig.NODE_LABELS[1]}
                </span>
              </div>

              <div className="absolute top-[68px] left-[335px] flex flex-col items-center">
                <motion.div
                  variants={pulseNode}
                  animate="animate"
                  className="h-3.5 w-3.5 rounded-full bg-indigo-500 border border-black shadow-lg shadow-indigo-500/50"
                />
                <span className="mt-1 font-mono text-[8px] text-zinc-500">
                  {sectionConfig.NODE_LABELS[2]}
                </span>
              </div>
            </div>

            <div className="rounded-lg border border-zinc-900 bg-black p-3 font-mono text-[10px] text-zinc-400 shadow-inner">
              <div className="mb-2 flex items-center justify-between border-b border-zinc-900 pb-1.5">
                <div className="flex items-center gap-1.5">
                  <TerminalIcon className="h-3 w-3 text-indigo-400" />
                  <span className="text-zinc-500">{sectionConfig.TERMINAL_TITLE}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-zinc-500">{sectionConfig.TERMINAL_COMMAND}</div>
                {terminalLine >= 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-indigo-300"
                  >
                    {sectionConfig.TERMINAL_LINES[0]}
                  </motion.div>
                )}
                {terminalLine >= 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-emerald-400"
                  >
                    {sectionConfig.TERMINAL_LINES[1]}
                  </motion.div>
                )}
                {terminalLine >= 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-zinc-300"
                  >
                    <span className="text-indigo-400">LCP</span>: 0.8s |{" "}
                    <span className="text-indigo-400">FID</span>: 12ms |{" "}
                    <span className="text-indigo-400">CLS</span>: 0.00
                  </motion.div>
                )}
                <div className="flex items-center gap-0.5">
                  <span className="text-zinc-600">&gt;</span>
                  <span className="inline-block h-3.5 w-1.5 bg-zinc-400 animate-pulse" />
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-zinc-900 pt-3 text-center">
              {sectionConfig.DASHBOARD_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className={`flex flex-col ${metric.label === "Delivery Speed" ? "border-x border-zinc-900" : ""}`}
                >
                  <span
                    className={`font-mono text-xs font-bold ${metric.accent ? "text-emerald-400" : "text-zinc-200"}`}
                  >
                    {metric.value}
                  </span>
                  <span className="font-sans text-[8px] text-zinc-500 uppercase tracking-wider">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
