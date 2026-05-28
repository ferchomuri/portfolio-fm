"use client";

import { useMemo, useState } from "react";
import { ArchitecturePlayground } from "@/presentation/pages/architecture-playground/ArchitecturePlayground";
import {
  getArchitecturePlaygroundConfig,
  getArchitectureNodesForMode,
  getDefaultNodeIdForMode,
} from "@/presentation/pages/architecture-playground/ArchitecturePlaygroundConfig";
import { buildArchitectureConnections } from "@/domain/services/build-architecture-connections";
import type { ArchitectureMode } from "@/domain/types/architecture-playground";
import { useI18n } from "@/presentation/i18n";

export function ArchitecturePlaygroundContainer() {
  const { locale } = useI18n();
  const sectionConfig = getArchitecturePlaygroundConfig(locale);
  const [activeMode, setActiveMode] = useState<ArchitectureMode>(sectionConfig.DEFAULT_MODE);
  const [activeNodeId, setActiveNodeId] = useState<string>(
    getDefaultNodeIdForMode(locale, sectionConfig.DEFAULT_MODE),
  );

  const nodes = useMemo(
    () => getArchitectureNodesForMode(locale, activeMode),
    [activeMode, locale],
  );

  const connections = useMemo(
    () => buildArchitectureConnections(activeMode, nodes),
    [activeMode, nodes],
  );

  const selectedNode =
    nodes.find((node) => node.id === activeNodeId) ?? nodes[0] ?? {
      id: "",
      label: "",
      x: 0,
      y: 0,
      type: "zinc" as const,
      role: "",
    };

  const handleSelectMode = (mode: ArchitectureMode) => {
    setActiveMode(mode);
    setActiveNodeId(getDefaultNodeIdForMode(locale, mode));
  };

  return (
    <ArchitecturePlayground
      key={locale}
      sectionConfig={sectionConfig}
      activeMode={activeMode}
      activeNodeId={activeNodeId}
      modes={sectionConfig.MODES}
      nodes={nodes}
      connections={connections}
      explanation={sectionConfig.EXPLANATIONS[activeMode]}
      stats={sectionConfig.STATS[activeMode]}
      selectedNode={selectedNode}
      onSelectMode={handleSelectMode}
      onSelectNode={setActiveNodeId}
    />
  );
}
