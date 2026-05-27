import { SECTION_IDS } from "@/domain/constants/sections";
import { ARCHITECTURE_MODES } from "@/domain/types/architecture-playground";
import type {
  ArchitectureMode,
  ArchitectureModeOption,
  ArchitectureNode,
  ArchitectureStat,
} from "@/domain/types/architecture-playground";

export const ARCHITECTURE_PLAYGROUND_CONFIG = {
  SECTION_ID: SECTION_IDS.PLAYGROUND,
  EYEBROW: "05 // INTERACTIVE ARCHITECTURE SIMULATOR",
  TITLE: "Interactive Architecture Playground",
  DESCRIPTION:
    "A dynamic engineering workbench simulating core structural software paradigms. Click toggle targets to trigger smooth morph transforms.",
  CANVAS_HINT: "SIMULATOR RUNNING // CLICK NODES TO INSPECT COMPONENT METRICS",
  SPECS_TITLE: "paradigm specs",
  TELEMETRY_TITLE: "COMPONENT TELEMETRY",
  TELEMETRY_STATUS: "ACTIVE",
  TELEMETRY_FOOTER: "> query status: ok. packet stream stabilized.",
  DEFAULT_MODE: ARCHITECTURE_MODES.MFE as ArchitectureMode,
  MODES: [
    { id: ARCHITECTURE_MODES.MFE, label: "Microfrontend (MFE)" },
    { id: ARCHITECTURE_MODES.CLEAN, label: "Clean Architecture" },
    { id: ARCHITECTURE_MODES.MVC, label: "MVC Loop" },
  ] satisfies readonly ArchitectureModeOption[],
  NODES: {
    [ARCHITECTURE_MODES.MFE]: [
      { id: "shell", label: "App Shell", x: 50, y: 50, type: "indigo", role: "Orchestrator Host" },
      { id: "remote1", label: "Remote A", x: 18, y: 22, type: "indigo", role: "Search Sub-App" },
      { id: "remote2", label: "Remote B", x: 82, y: 22, type: "indigo", role: "Checkout Sub-App" },
      { id: "remote3", label: "Shared Core", x: 50, y: 85, type: "zinc", role: "Federated Commons" },
    ],
    [ARCHITECTURE_MODES.CLEAN]: [
      { id: "domain", label: "Domain Core", x: 50, y: 50, type: "emerald", role: "Pure Entities" },
      { id: "usecase", label: "Use Cases", x: 50, y: 22, type: "emerald", role: "Business Logic" },
      { id: "adapter", label: "Adapters", x: 18, y: 50, type: "zinc", role: "Mappers & APIs" },
      { id: "infra", label: "Infrastructure", x: 82, y: 50, type: "zinc", role: "NextJS Framework" },
    ],
    [ARCHITECTURE_MODES.MVC]: [
      { id: "controller", label: "Controller", x: 50, y: 18, type: "indigo", role: "Request Interceptor" },
      { id: "model", label: "Model", x: 18, y: 74, type: "zinc", role: "Database State" },
      { id: "view", label: "View", x: 82, y: 74, type: "emerald", role: "Interactive DOM" },
    ],
  } satisfies Record<ArchitectureMode, readonly ArchitectureNode[]>,
  EXPLANATIONS: {
    [ARCHITECTURE_MODES.MFE]:
      "Decouples application logic into isolated runtime federated blocks. App Shell acts as dynamic host, resolving dependencies over network boundaries safely without redeploying other systems.",
    [ARCHITECTURE_MODES.CLEAN]:
      "Enforces strict dependency boundaries. Pure domain core coordinates business rules without dependencies on external frameworks, databases, or client-side UI configurations.",
    [ARCHITECTURE_MODES.MVC]:
      "Implements classic structural separation. Controller receives active view input events, optimizes database state schemas inside Model, and instructs View to render clean output.",
  } satisfies Record<ArchitectureMode, string>,
  STATS: {
    [ARCHITECTURE_MODES.MFE]: [
      { label: "COUPLE TYPE", val: "Loosely Federated" },
      { label: "BUILD SPEED", val: "Independent" },
      { label: "FAULT PROFILE", val: "Isolated Node" },
    ],
    [ARCHITECTURE_MODES.CLEAN]: [
      { label: "COUPLE TYPE", val: "Strict Concentric" },
      { label: "BUILD SPEED", val: "Monolithic Bund" },
      { label: "FAULT PROFILE", val: "Zero Leakage" },
    ],
    [ARCHITECTURE_MODES.MVC]: [
      { label: "COUPLE TYPE", val: "Cyclic Loop" },
      { label: "BUILD SPEED", val: "Unified" },
      { label: "FAULT PROFILE", val: "Bidirectional" },
    ],
  } satisfies Record<ArchitectureMode, readonly ArchitectureStat[]>,
};

export const getArchitectureNodesForMode = (
  mode: ArchitectureMode,
): readonly ArchitectureNode[] => ARCHITECTURE_PLAYGROUND_CONFIG.NODES[mode];

export const getDefaultNodeIdForMode = (mode: ArchitectureMode): string =>
  ARCHITECTURE_PLAYGROUND_CONFIG.NODES[mode][0]?.id ?? "";
