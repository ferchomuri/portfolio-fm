import { Briefcase, ChevronRight } from "lucide-react";
import type { ExperienceMilestone } from "@/presentation/pages/experience-timeline/ExperienceTimelineConfig";

export interface ExperienceTimelineMilestoneCardProps {
  readonly milestone: ExperienceMilestone;
}

export function ExperienceTimelineMilestoneCard({
  milestone,
}: ExperienceTimelineMilestoneCardProps) {
  return (
    <article className="relative flex w-full shrink-0 flex-col justify-between rounded-2xl border border-zinc-800/40 bg-zinc-950/80 p-5 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/60 sm:p-6 lg:w-[380px]">
      <div>
        <div className="flex items-center justify-between gap-3 border-b border-zinc-900 pb-3">
          <span className="font-mono text-[10px] font-bold text-indigo-400 tracking-wider break-words">
            {milestone.year}
          </span>
          <Briefcase className="h-4 w-4 shrink-0 text-zinc-500" />
        </div>

        <div className="mt-4">
          <h3 className="text-base font-bold text-zinc-100 tracking-tight sm:text-lg">
            {milestone.role}
          </h3>
          <h4 className="mt-0.5 font-mono text-[9px] font-semibold text-zinc-500 tracking-widest break-words">
            {milestone.company}
          </h4>
        </div>

        <p className="mt-3 text-xs text-zinc-400 leading-relaxed">{milestone.description}</p>
      </div>

      <div className="mt-6 border-t border-zinc-900/60 pt-4 space-y-2 text-[10px] font-sans text-zinc-500 leading-relaxed">
        {milestone.bullets.map((bullet) => (
          <div key={bullet} className="flex gap-2 items-start">
            <ChevronRight className="h-3 w-3 shrink-0 text-indigo-500/80 mt-0.5" />
            <span>{bullet}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
