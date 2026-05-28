"use client";

import { useEffect, useState } from "react";
import type { HeroSectionConfig } from "@/presentation/pages/hero/HeroSectionConfig";

export interface HeroAnimationsState {
  readonly roleIndex: number;
  readonly terminalLine: number;
}

export const useHeroAnimations = (
  roles: readonly string[],
  config: Pick<
    HeroSectionConfig,
    "ROLE_ROTATION_MS" | "TERMINAL_MAX_LINE" | "TERMINAL_LINE_INTERVAL_MS"
  >,
): HeroAnimationsState => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [terminalLine, setTerminalLine] = useState(0);

  useEffect(() => {
    const roleTimer =
      roles.length > 1
        ? setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }, config.ROLE_ROTATION_MS)
        : undefined;

    const terminalTimer = setInterval(() => {
      setTerminalLine((prev) =>
        prev < config.TERMINAL_MAX_LINE ? prev + 1 : prev,
      );
    }, config.TERMINAL_LINE_INTERVAL_MS);

    return () => {
      if (roleTimer) clearInterval(roleTimer);
      clearInterval(terminalTimer);
    };
  }, [config.TERMINAL_LINE_INTERVAL_MS, config.TERMINAL_MAX_LINE, config.ROLE_ROTATION_MS, roles.length]);

  return { roleIndex, terminalLine };
};
