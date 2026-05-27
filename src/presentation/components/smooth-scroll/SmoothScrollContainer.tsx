"use client";

import type { ReactNode } from "react";
import { SmoothScroll } from "@/presentation/components/smooth-scroll/SmoothScroll";
import { useSmoothScroll } from "@/presentation/components/smooth-scroll/hooks/useSmoothScroll";

export interface SmoothScrollContainerProps {
  readonly children: ReactNode;
}

export function SmoothScrollContainer({ children }: SmoothScrollContainerProps) {
  useSmoothScroll();
  return <SmoothScroll>{children}</SmoothScroll>;
}
