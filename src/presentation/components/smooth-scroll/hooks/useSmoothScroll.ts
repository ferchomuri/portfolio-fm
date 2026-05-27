"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import {
  SMOOTH_SCROLL_CONFIG,
  smoothScrollEasing,
} from "@/presentation/components/smooth-scroll/SmoothScrollConfig";

export const useSmoothScroll = (): void => {
  useEffect(() => {
    if (window.matchMedia(SMOOTH_SCROLL_CONFIG.REDUCED_MOTION_QUERY).matches) {
      return;
    }

    const lenis = new Lenis({
      duration: SMOOTH_SCROLL_CONFIG.DURATION,
      easing: smoothScrollEasing,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: SMOOTH_SCROLL_CONFIG.WHEEL_MULTIPLIER,
      infinite: false,
    });

    let rafId = 0;
    const raf = (time: number): void => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    const handleAnchorClick = (event: MouseEvent): void => {
      const target = event.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href");
      if (href?.startsWith("#") && href.length > 1) {
        event.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          lenis.scrollTo(element as HTMLElement, {
            offset: SMOOTH_SCROLL_CONFIG.ANCHOR_OFFSET,
            duration: SMOOTH_SCROLL_CONFIG.DURATION,
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);
};
