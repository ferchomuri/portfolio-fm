import type { ReactNode } from "react";

export interface SmoothScrollProps {
  readonly children: ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  return <>{children}</>;
}
