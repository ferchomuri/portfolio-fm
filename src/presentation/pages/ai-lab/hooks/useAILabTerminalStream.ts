"use client";

import { useEffect, useState } from "react";
import { AI_LAB_SECTION_CONFIG } from "@/presentation/pages/ai-lab/AILabSectionConfig";

export interface AILabTerminalStreamState {
  readonly logs: readonly string[];
  readonly isStreaming: boolean;
}

export const useAILabTerminalStream = (): AILabTerminalStreamState => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const logInterval = setInterval(() => {
      setLogs((prev) => {
        if (prev.length < AI_LAB_SECTION_CONFIG.TERMINAL_LOGS.length) {
          return [...prev, AI_LAB_SECTION_CONFIG.TERMINAL_LOGS[prev.length]];
        }
        return prev;
      });
    }, AI_LAB_SECTION_CONFIG.LOG_INTERVAL_MS);

    return () => clearInterval(logInterval);
  }, []);

  return {
    logs,
    isStreaming: logs.length < AI_LAB_SECTION_CONFIG.TERMINAL_LOGS.length,
  };
};
