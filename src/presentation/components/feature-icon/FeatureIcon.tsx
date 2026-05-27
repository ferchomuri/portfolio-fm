import { createElement, type ReactElement } from "react";
import { resolveIcon } from "@/presentation/lib/icon-registry";
import type { IconName } from "@/domain/types/icon-name";

export interface FeatureIconProps {
  readonly name: IconName;
  readonly className?: string;
}

export function FeatureIcon({ name, className }: FeatureIconProps): ReactElement {
  return createElement(resolveIcon(name), { className });
}
