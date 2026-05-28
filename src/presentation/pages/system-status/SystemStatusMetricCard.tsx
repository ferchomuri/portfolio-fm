import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { hoverLiftCard } from "@/presentation/animations/MotionConfig";
export interface SystemStatusMetricCardProps {
  readonly footerLog: string;
  readonly icon: ReactNode;
  readonly label: string;
  readonly value: string;
  readonly description: string;
  readonly status: string;
  readonly spotlightX: number;
  readonly spotlightY: number;
  readonly spotlightHovered: boolean;
  readonly onSpotlightMouseMove: (event: React.MouseEvent<HTMLDivElement>) => void;
  readonly onSpotlightMouseEnter: () => void;
  readonly onSpotlightMouseLeave: () => void;
}

export function SystemStatusMetricCard({
  footerLog,
  icon,
  label,
  value,
  description,
  status,
  spotlightX,
  spotlightY,
  spotlightHovered,
  onSpotlightMouseMove,
  onSpotlightMouseEnter,
  onSpotlightMouseLeave,
}: SystemStatusMetricCardProps) {
  return (
    <motion.div
      variants={hoverLiftCard}
      initial="rest"
      whileHover="hover"
      onMouseMove={onSpotlightMouseMove}
      onMouseEnter={onSpotlightMouseEnter}
      onMouseLeave={onSpotlightMouseLeave}
      className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-800/40 bg-zinc-950/70 p-6 backdrop-blur-sm transition-all duration-300"
    >
      {spotlightHovered && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(150px circle at ${spotlightX}px ${spotlightY}px, rgba(99, 102, 241, 0.08), transparent 80%)`,
          }}
        />
      )}

      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-400">
          {icon}
        </div>
        <span className="flex items-center gap-1.5 font-mono text-[9px] text-emerald-400 bg-emerald-950/20 px-2 py-0.5 rounded-full border border-emerald-500/15">
          <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
          {status}
        </span>
      </div>

      <div className="mt-8">
        <span className="font-mono text-3xl font-extrabold tracking-tight text-zinc-100">
          {value}
        </span>
        <h3 className="mt-1 font-mono text-xs font-semibold tracking-wider text-zinc-400 uppercase">
          {label}
        </h3>
        <p className="mt-2 text-xs text-zinc-500 leading-relaxed">{description}</p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-zinc-900 pt-4 text-[10px] font-mono text-zinc-500">
        <span>{footerLog}</span>
        <ArrowUpRight className="h-3 w-3 text-zinc-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </motion.div>
  );
}
