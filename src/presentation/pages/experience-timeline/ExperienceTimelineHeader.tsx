import { Calendar } from "lucide-react";
import type { ExperienceTimelineConfig } from "@/presentation/pages/experience-timeline/ExperienceTimelineConfig";

export interface ExperienceTimelineHeaderProps {
  readonly sectionConfig: ExperienceTimelineConfig;
}

export function ExperienceTimelineHeader({ sectionConfig }: ExperienceTimelineHeaderProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-start gap-2 text-indigo-400 font-mono text-[10px] font-bold tracking-widest sm:text-xs">
        <Calendar className="mt-0.5 h-4 w-4 shrink-0" />
        <span className="leading-snug break-words">{sectionConfig.EYEBROW}</span>
      </div>
      <h2 className="text-2xl font-extrabold tracking-tight text-zinc-100 sm:text-3xl lg:text-4xl">
        {sectionConfig.TITLE}
      </h2>
      <p className="max-w-2xl text-xs text-zinc-400 font-sans leading-relaxed sm:text-sm">
        {sectionConfig.DESCRIPTION}
      </p>
    </div>
  );
}
