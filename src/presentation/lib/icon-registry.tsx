import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Brain,
  Cloud,
  CloudLightning,
  Code,
  Cpu,
  Server,
  Shield,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { ICON_NAMES, type IconName } from "@/domain/types/icon-name";

const ICON_REGISTRY: Record<IconName, LucideIcon> = {
  [ICON_NAMES.ACTIVITY]: Activity,
  [ICON_NAMES.CLOUD_LIGHTNING]: CloudLightning,
  [ICON_NAMES.CPU]: Cpu,
  [ICON_NAMES.SHIELD_CHECK]: ShieldCheck,
  [ICON_NAMES.CODE]: Code,
  [ICON_NAMES.SERVER]: Server,
  [ICON_NAMES.CLOUD]: Cloud,
  [ICON_NAMES.SHIELD]: Shield,
  [ICON_NAMES.BRAIN]: Brain,
  [ICON_NAMES.ZAP]: Zap,
};

export const resolveIcon = (name: IconName): LucideIcon => ICON_REGISTRY[name];
