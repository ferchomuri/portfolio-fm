"use client";

import { useEffect, useState } from "react";
import type { AILabSectionConfig } from "@/presentation/pages/ai-lab/AILabSectionConfig";

export interface AILabTerminalStreamState {
  readonly logs: readonly string[];
  readonly isStreaming: boolean;
}

export const useAILabTerminalStream = (
  config: Pick<AILabSectionConfig, "TERMINAL_LOGS" | "LOG_INTERVAL_MS">,
): AILabTerminalStreamState => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const logInterval = setInterval(() => {
      setLogs((prev) => {
        if (prev.length < config.TERMINAL_LOGS.length) {
          return [...prev, config.TERMINAL_LOGS[prev.length] ?? ""];
        }
        return prev;
      });
    }, config.LOG_INTERVAL_MS);

    return () => clearInterval(logInterval);
  }, [config.LOG_INTERVAL_MS, config.TERMINAL_LOGS]);

  return {
    logs,
    isStreaming: logs.length < config.TERMINAL_LOGS.length,
  };
};
