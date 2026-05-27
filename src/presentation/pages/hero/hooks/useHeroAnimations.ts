"use client";

import { useEffect, useState } from "react";
import { HERO_SECTION_CONFIG } from "@/presentation/pages/hero/HeroSectionConfig";

export interface HeroAnimationsState {
  readonly roleIndex: number;
  readonly terminalLine: number;
}

export const useHeroAnimations = (roles: readonly string[]): HeroAnimationsState => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [terminalLine, setTerminalLine] = useState(0);

  useEffect(() => {
    const roleTimer =
      roles.length > 1
        ? setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }, HERO_SECTION_CONFIG.ROLE_ROTATION_MS)
        : undefined;

    const terminalTimer = setInterval(() => {
      setTerminalLine((prev) =>
        prev < HERO_SECTION_CONFIG.TERMINAL_MAX_LINE ? prev + 1 : prev,
      );
    }, HERO_SECTION_CONFIG.TERMINAL_LINE_INTERVAL_MS);

    return () => {
      if (roleTimer) clearInterval(roleTimer);
      clearInterval(terminalTimer);
    };
  }, [roles.length]);

  return { roleIndex, terminalLine };
};
