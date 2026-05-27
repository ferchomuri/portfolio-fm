import { SECTION_IDS } from "@/domain/constants/sections";

export const AI_LAB_SECTION_CONFIG = {
  SECTION_ID: SECTION_IDS.AI_LAB,
  EYEBROW: "06 // BUILD COMPILER CONSOLE",
  TITLE: "AST Tooling & AI Compiler",
  DESCRIPTION:
    "Inspecting deep developer-tooling structures. Demonstrating direct agent AST compilation, dead import branch elimination, circular dependency resolving, and real compression telemetry pipelines.",
  PANEL_TITLE: "AST COMPILER COMPRESSION",
  PANEL_STAGE: "STAGE // BUILD",
  PARSE_LABEL: "PARSE",
  FILTER_LABEL: "FILTER",
  OPTIMIZED_LABEL: "OPTIMIZED",
  INPUT_LABEL: "Input AST",
  AGENT_STATUS_LABEL: "Agent Status:",
  AGENT_STATUS_VALUE: "COMPILING",
  OPTIMIZED_SIZE_LABEL: "Optimized:",
  OPTIMIZED_SIZE_VALUE: "-141.7 KB",
  ANALYZING_MESSAGE: "Analyzing code bundles...",
  LOG_INTERVAL_MS: 1500,
  TERMINAL_LOGS: [
    "Initializing code optimization agent v1.4.2...",
    "Loading bundle file: app.main.js (184.2 KB)",
    "Analyzing Abstract Syntax Tree (AST) structure...",
    "✔ Found 4 circular dependency loops. Resolving automatically.",
    "✔ Identifed 12 dead import branches. Pruning tree...",
    "Recompiling dynamic imports... done in 18.4ms",
    "✔ Success! New bundle size: 42.5 KB (45% weight reduction!)",
  ] as const,
};
