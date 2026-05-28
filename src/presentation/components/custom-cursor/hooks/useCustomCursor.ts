"use client";

import { useEffect, useState } from "react";
import type { MotionValue } from "framer-motion";
import { useMotionValue, useSpring } from "framer-motion";
import { CUSTOM_CURSOR_CONFIG } from "@/presentation/components/custom-cursor/CustomCursorConfig";

export interface CustomCursorViewModel {
  readonly isVisible: boolean;
  readonly isHovered: boolean;
  readonly cursorXSpring: MotionValue<number>;
  readonly cursorYSpring: MotionValue<number>;
  readonly isSupported: boolean;
}

export const useCustomCursor = (): CustomCursorViewModel => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  const cursorX = useMotionValue<number>(CUSTOM_CURSOR_CONFIG.INITIAL_POSITION);
  const cursorY = useMotionValue<number>(CUSTOM_CURSOR_CONFIG.INITIAL_POSITION);
  const cursorXSpring = useSpring(cursorX, CUSTOM_CURSOR_CONFIG.SPRING);
  const cursorYSpring = useSpring(cursorY, CUSTOM_CURSOR_CONFIG.SPRING);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(CUSTOM_CURSOR_CONFIG.COARSE_POINTER_QUERY);
    const nextIsSupported = !mediaQueryList.matches;
    setIsSupported(nextIsSupported);

    if (!nextIsSupported) {
      return;
    }

    const moveCursor = (event: MouseEvent): void => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = (): void => {
      setIsVisible(false);
    };

    const handleMouseEnter = (): void => {
      setIsVisible(true);
    };

    const handleMouseOver = (event: MouseEvent): void => {
      const target = event.target as HTMLElement;
      const isInteractive = Boolean(
        target.closest(CUSTOM_CURSOR_CONFIG.INTERACTIVE_SELECTORS),
      );
      setIsHovered(isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return {
    isVisible,
    isHovered,
    cursorXSpring,
    cursorYSpring,
    isSupported,
  };
};
