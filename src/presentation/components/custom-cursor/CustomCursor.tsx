import { motion } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { CUSTOM_CURSOR_CONFIG } from "@/presentation/components/custom-cursor/CustomCursorConfig";

export interface CustomCursorProps {
  readonly isVisible: boolean;
  readonly isHovered: boolean;
  readonly cursorXSpring: MotionValue<number>;
  readonly cursorYSpring: MotionValue<number>;
}

export function CustomCursor({
  isVisible,
  isHovered,
  cursorXSpring,
  cursorYSpring,
}: CustomCursorProps) {
  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-30 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: CUSTOM_CURSOR_CONFIG.SPOTLIGHT_SIZE,
          height: CUSTOM_CURSOR_CONFIG.SPOTLIGHT_SIZE,
          filter: `blur(${CUSTOM_CURSOR_CONFIG.SPOTLIGHT_BLUR}px)`,
        }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400 bg-indigo-400/5 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: CUSTOM_CURSOR_CONFIG.RING_SIZE,
          height: CUSTOM_CURSOR_CONFIG.RING_SIZE,
          scale: isHovered ? CUSTOM_CURSOR_CONFIG.HOVER_SCALE : 1,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          borderColor: isHovered
            ? "rgba(129, 140, 248, 1)"
            : "rgba(165, 180, 252, 0.5)",
          backgroundColor: isHovered
            ? "rgba(129, 140, 248, 0.15)"
            : "rgba(165, 180, 252, 0.02)",
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
