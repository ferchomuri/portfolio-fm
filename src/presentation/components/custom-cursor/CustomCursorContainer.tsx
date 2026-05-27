"use client";

import { CustomCursor } from "@/presentation/components/custom-cursor/CustomCursor";
import { useCustomCursor } from "@/presentation/components/custom-cursor/hooks/useCustomCursor";

export function CustomCursorContainer() {
  const viewModel = useCustomCursor();

  if (!viewModel.isSupported) {
    return null;
  }

  return (
    <CustomCursor
      isVisible={viewModel.isVisible}
      isHovered={viewModel.isHovered}
      cursorXSpring={viewModel.cursorXSpring}
      cursorYSpring={viewModel.cursorYSpring}
    />
  );
}
