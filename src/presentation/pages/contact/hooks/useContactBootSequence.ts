"use client";

import { useEffect, useState } from "react";
import { CONTACT_CTA_CONFIG } from "@/presentation/pages/contact/ContactCTAConfig";

export type ContactBootState = "booting" | "ready";

export interface ContactBootSequenceState {
  readonly bootState: ContactBootState;
  readonly logs: readonly string[];
}

export const useContactBootSequence = (): ContactBootSequenceState => {
  const [bootState, setBootState] = useState<ContactBootState>("booting");
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const logTimers = CONTACT_CTA_CONFIG.BOOT_LOGS.map((log, idx) =>
      setTimeout(() => {
        setLogs((prev) => [...prev, log]);
        if (idx === CONTACT_CTA_CONFIG.BOOT_LOGS.length - 1) {
          setTimeout(() => {
            setBootState("ready");
          }, CONTACT_CTA_CONFIG.BOOT_READY_DELAY_MS);
        }
      }, (idx + 1) * CONTACT_CTA_CONFIG.BOOT_LOG_DELAY_MS),
    );

    return () => {
      logTimers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return { bootState, logs };
};
