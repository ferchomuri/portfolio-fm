"use client";

import { useRef, type RefObject } from "react";
import { useScroll, useTransform, type MotionValue } from "framer-motion";

export interface ExperienceTimelineDesktopScrollState {
  readonly containerRef: RefObject<HTMLDivElement | null>;
  readonly translateX: MotionValue<string>;
  readonly scrollYProgress: MotionValue<number>;
}

export const useExperienceTimelineDesktopScroll = (): ExperienceTimelineDesktopScrollState => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const translateX = useTransform(scrollYProgress, [0, 1], ["65vw", "-110%"]);

  return { containerRef, translateX, scrollYProgress };
};
