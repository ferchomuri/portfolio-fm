import type {
  ArchitectureConnection,
  ArchitectureMode,
  ArchitectureNode,
} from "@/domain/types/architecture-playground";

const findNodeCoordinates = (
  nodes: readonly ArchitectureNode[],
  id: string,
): { x: number; y: number } => {
  const node = nodes.find((item) => item.id === id);
  return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
};

export const buildArchitectureConnections = (
  mode: ArchitectureMode,
  nodes: readonly ArchitectureNode[],
): ArchitectureConnection[] => {
  const coords = (nodeId: string) => findNodeCoordinates(nodes, nodeId);

  if (mode === "mfe") {
    return [
      { from: coords("shell"), to: coords("remote1"), color: "rgba(99, 102, 241, 0.4)" },
      { from: coords("shell"), to: coords("remote2"), color: "rgba(99, 102, 241, 0.4)" },
      { from: coords("shell"), to: coords("remote3"), color: "rgba(161, 161, 170, 0.4)" },
    ];
  }

  if (mode === "clean") {
    return [
      { from: coords("usecase"), to: coords("domain"), color: "rgba(16, 185, 129, 0.4)" },
      { from: coords("adapter"), to: coords("domain"), color: "rgba(161, 161, 170, 0.4)" },
      { from: coords("infra"), to: coords("adapter"), color: "rgba(161, 161, 170, 0.4)" },
    ];
  }

  return [
    { from: coords("view"), to: coords("controller"), color: "rgba(16, 185, 129, 0.4)" },
    { from: coords("controller"), to: coords("model"), color: "rgba(99, 102, 241, 0.4)" },
    { from: coords("model"), to: coords("view"), color: "rgba(161, 161, 170, 0.4)" },
  ];
};
