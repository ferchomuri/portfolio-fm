"use client";

import { motion } from "framer-motion";
import type { DeploymentVisualVariant } from "@/presentation/pages/deployments/DeploymentsSectionConfig";
import { DEPLOYMENT_VISUAL_VARIANTS } from "@/presentation/pages/deployments/DeploymentsSectionConfig";

export interface DeploymentsProjectVisualProps {
  readonly variant: DeploymentVisualVariant;
}

export function DeploymentsProjectVisual({ variant }: DeploymentsProjectVisualProps) {
  if (variant === DEPLOYMENT_VISUAL_VARIANTS.PPM_MICROFRONTEND) {
    return (
      <div className="relative flex h-full w-full items-center justify-center bg-zinc-950 p-6">
        <div className="grid grid-cols-3 gap-3 w-full max-w-[280px]">
          <div className="col-span-3 rounded-lg border border-indigo-500/30 bg-indigo-500/5 p-3 text-center">
            <span className="font-mono text-[9px] text-indigo-400 font-bold">
              HOST CONTAINER // APP SHELL
            </span>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-2.5 text-center">
            <span className="block font-mono text-[8px] text-zinc-500">REMOTE_A</span>
            <span className="font-mono text-[7px] text-zinc-600">Checkout</span>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-2.5 text-center">
            <span className="block font-mono text-[8px] text-zinc-500">REMOTE_B</span>
            <span className="font-mono text-[7px] text-zinc-600">Search</span>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-2.5 text-center flex flex-col justify-center items-center gap-1">
            <span className="block font-mono text-[8px] text-zinc-500">REMOTE_C</span>
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-ping" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === DEPLOYMENT_VISUAL_VARIANTS.PRODUBANCO_MFE) {
    return (
      <div className="relative flex h-full w-full items-center justify-center bg-zinc-950 p-6">
        <div className="w-full max-w-[280px] space-y-4">
          <div className="flex gap-2">
            <div className="h-10 flex-1 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center">
              <span className="font-mono text-[8px] text-zinc-500">#030303</span>
            </div>
            <div className="h-10 flex-1 rounded bg-indigo-600 flex items-center justify-center">
              <span className="font-mono text-[8px] text-white">#6366f1</span>
            </div>
            <div className="h-10 flex-1 rounded bg-emerald-500 flex items-center justify-center">
              <span className="font-mono text-[8px] text-black">#10b981</span>
            </div>
          </div>
          <div className="space-y-1.5 font-mono text-[8px] text-zinc-500">
            <div className="flex justify-between border-b border-zinc-900 pb-1">
              <span>--font-sans</span>
              <span className="text-zinc-400">&quot;Geist Sans&quot;, sans-serif</span>
            </div>
            <div className="flex justify-between border-b border-zinc-900 pb-1">
              <span>--spacing-fluid-lg</span>
              <span className="text-zinc-400">clamp(2rem, 4vw, 4rem)</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center bg-zinc-950 p-6">
      <div className="relative h-24 w-full max-w-[280px] rounded-lg border border-zinc-900 bg-zinc-900/30 overflow-hidden">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 20 50 Q 80 15 140 50 T 260 50"
            fill="transparent"
            stroke="rgba(99, 102, 241, 0.2)"
            strokeWidth="1.5"
          />
          <motion.path
            d="M 20 50 Q 80 15 140 50 T 260 50"
            fill="transparent"
            stroke="rgba(129, 140, 248, 0.7)"
            strokeWidth="1.5"
            strokeDasharray="8 16"
            animate={{ strokeDashoffset: [0, -50] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </svg>
        <div className="absolute top-[42px] left-[15px] h-4 w-4 rounded bg-indigo-500 border border-black shadow" />
        <div className="absolute top-[42px] left-[132px] h-4 w-4 rounded-full bg-emerald-500 border border-black shadow animate-pulse" />
        <div className="absolute top-[42px] left-[249px] h-4 w-4 rounded bg-indigo-500 border border-black shadow" />
      </div>
    </div>
  );
}
