import { Cpu } from "lucide-react";
import type { FooterConfig } from "@/presentation/pages/footer/FooterConfig";

export interface FooterProps {
  readonly footerConfig: FooterConfig;
}

export function Footer({ footerConfig }: FooterProps) {
  return (
    <footer className="w-full border-t border-zinc-900 bg-zinc-950 py-12 px-6 md:px-12 text-[10px] font-mono text-zinc-500">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/25">
              <Cpu className="h-3 w-3" />
            </div>
            <span className="font-bold text-zinc-300">{footerConfig.BRAND}</span>
          </div>
          <p className="text-[9px] text-zinc-600">
            © {footerConfig.YEAR} {footerConfig.COPYRIGHT_NAME}.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-zinc-900 pt-4 sm:border-t-0 sm:pt-0">
          <div className="flex flex-col">
            <span className="text-zinc-600 text-[8px] uppercase">
              {footerConfig.ENVIRONMENT_LABEL}
            </span>
            <span className="text-zinc-400 font-semibold uppercase">
              {footerConfig.ENVIRONMENT_VALUE}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-zinc-600 text-[8px] uppercase">
              {footerConfig.LIGHTHOUSE_LABEL}
            </span>
            <span className="text-emerald-400 font-bold">
              {footerConfig.LIGHTHOUSE_VALUE}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-zinc-600 text-[8px] uppercase">
              {footerConfig.BUILD_LABEL}
            </span>
            <span className="text-zinc-400 font-semibold uppercase flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {footerConfig.BUILD_VALUE}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
