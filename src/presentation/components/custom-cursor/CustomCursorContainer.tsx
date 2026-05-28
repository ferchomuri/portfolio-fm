"use client";

import { useEffect, useState } from "react";
import { CustomCursor } from "@/presentation/components/custom-cursor/CustomCursor";
import { useCustomCursor } from "@/presentation/components/custom-cursor/hooks/useCustomCursor";

export function CustomCursorContainer() {
  const [isMounted, setIsMounted] = useState(false);
  const viewModel = useCustomCursor();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !viewModel.isSupported) {
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
