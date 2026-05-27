import { Calendar } from "lucide-react";
import { EXPERIENCE_TIMELINE_CONFIG } from "@/presentation/pages/experience-timeline/ExperienceTimelineConfig";

export function ExperienceTimelineHeader() {
  return (
    <div className="space-y-3">
      <div className="flex items-start gap-2 text-indigo-400 font-mono text-[10px] font-bold tracking-widest sm:text-xs">
        <Calendar className="mt-0.5 h-4 w-4 shrink-0" />
        <span className="leading-snug break-words">{EXPERIENCE_TIMELINE_CONFIG.EYEBROW}</span>
      </div>
      <h2 className="text-2xl font-extrabold tracking-tight text-zinc-100 sm:text-3xl lg:text-4xl">
        {EXPERIENCE_TIMELINE_CONFIG.TITLE}
      </h2>
      <p className="max-w-2xl text-xs text-zinc-400 font-sans leading-relaxed sm:text-sm">
        {EXPERIENCE_TIMELINE_CONFIG.DESCRIPTION}
      </p>
    </div>
  );
}
