"use client";

import { useMemo, useState } from "react";
import { ArchitecturePlayground } from "@/presentation/pages/architecture-playground/ArchitecturePlayground";
import {
  ARCHITECTURE_PLAYGROUND_CONFIG,
  getArchitectureNodesForMode,
  getDefaultNodeIdForMode,
} from "@/presentation/pages/architecture-playground/ArchitecturePlaygroundConfig";
import { buildArchitectureConnections } from "@/domain/services/build-architecture-connections";
import type { ArchitectureMode } from "@/domain/types/architecture-playground";

export function ArchitecturePlaygroundContainer() {
  const [activeMode, setActiveMode] = useState<ArchitectureMode>(
    ARCHITECTURE_PLAYGROUND_CONFIG.DEFAULT_MODE,
  );
  const [activeNodeId, setActiveNodeId] = useState<string>(
    getDefaultNodeIdForMode(ARCHITECTURE_PLAYGROUND_CONFIG.DEFAULT_MODE),
  );

  const nodes = useMemo(() => getArchitectureNodesForMode(activeMode), [activeMode]);

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
    setActiveNodeId(getDefaultNodeIdForMode(mode));
  };

  return (
    <ArchitecturePlayground
      activeMode={activeMode}
      activeNodeId={activeNodeId}
      modes={ARCHITECTURE_PLAYGROUND_CONFIG.MODES}
      nodes={nodes}
      connections={connections}
      explanation={ARCHITECTURE_PLAYGROUND_CONFIG.EXPLANATIONS[activeMode]}
      stats={ARCHITECTURE_PLAYGROUND_CONFIG.STATS[activeMode]}
      selectedNode={selectedNode}
      onSelectMode={handleSelectMode}
      onSelectNode={setActiveNodeId}
    />
  );
}
