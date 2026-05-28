"use client";

import { useEffect, useState } from "react";
import type { ContactCTAConfig } from "@/presentation/pages/contact/ContactCTAConfig";

export type ContactBootState = "booting" | "ready";

export interface ContactBootSequenceState {
  readonly bootState: ContactBootState;
  readonly logs: readonly string[];
}

export const useContactBootSequence = (
  config: Pick<ContactCTAConfig, "BOOT_LOGS" | "BOOT_LOG_DELAY_MS" | "BOOT_READY_DELAY_MS">,
): ContactBootSequenceState => {
  const [bootState, setBootState] = useState<ContactBootState>("booting");
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const logTimers = config.BOOT_LOGS.map((log, idx) =>
      setTimeout(() => {
        setLogs((prev) => [...prev, log]);
        if (idx === config.BOOT_LOGS.length - 1) {
          setTimeout(() => {
            setBootState("ready");
          }, config.BOOT_READY_DELAY_MS);
        }
      }, (idx + 1) * config.BOOT_LOG_DELAY_MS),
    );

    return () => {
      logTimers.forEach((timer) => clearTimeout(timer));
    };
  }, [config.BOOT_LOG_DELAY_MS, config.BOOT_LOGS, config.BOOT_READY_DELAY_MS]);

  return { bootState, logs };
};
