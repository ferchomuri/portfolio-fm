import { SECTION_IDS } from "@/domain/constants/sections";
import { I18N_LOCALES, type Locale } from "@/presentation/i18n";

export interface AILabSectionConfig {
  readonly SECTION_ID: string;
  readonly EYEBROW: string;
  readonly TITLE: string;
  readonly DESCRIPTION: string;
  readonly PANEL_TITLE: string;
  readonly PANEL_STAGE: string;
  readonly PARSE_LABEL: string;
  readonly FILTER_LABEL: string;
  readonly OPTIMIZED_LABEL: string;
  readonly INPUT_LABEL: string;
  readonly AGENT_STATUS_LABEL: string;
  readonly AGENT_STATUS_VALUE: string;
  readonly OPTIMIZED_SIZE_LABEL: string;
  readonly OPTIMIZED_SIZE_VALUE: string;
  readonly ANALYZING_MESSAGE: string;
  readonly LOG_INTERVAL_MS: number;
  readonly TERMINAL_LOGS: readonly string[];
}

const AI_LAB_TIMING = {
  LOG_INTERVAL_MS: 1500,
} as const;

const AI_LAB_SECTION_CONFIG_EN: AILabSectionConfig = {
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
  ...AI_LAB_TIMING,
  TERMINAL_LOGS: [
    "Initializing code optimization agent v1.4.2...",
    "Loading bundle file: app.main.js (184.2 KB)",
    "Analyzing Abstract Syntax Tree (AST) structure...",
    "✔ Found 4 circular dependency loops. Resolving automatically.",
    "✔ Identifed 12 dead import branches. Pruning tree...",
    "Recompiling dynamic imports... done in 18.4ms",
    "✔ Success! New bundle size: 42.5 KB (45% weight reduction!)",
  ],
};

const AI_LAB_SECTION_CONFIG_ES: AILabSectionConfig = {
  SECTION_ID: SECTION_IDS.AI_LAB,
  EYEBROW: "06 // CONSOLA COMPILADOR BUILD",
  TITLE: "Herramientas AST y Compilador IA",
  DESCRIPTION:
    "Inspeccion de estructuras profundas de tooling de desarrollo. Demostracion de compilacion AST por agente, eliminacion de imports muertos, resolucion de dependencias circulares y pipelines de compresion.",
  PANEL_TITLE: "COMPRESION COMPILADOR AST",
  PANEL_STAGE: "ETAPA // BUILD",
  PARSE_LABEL: "PARSEAR",
  FILTER_LABEL: "FILTRAR",
  OPTIMIZED_LABEL: "OPTIMIZADO",
  INPUT_LABEL: "AST de entrada",
  AGENT_STATUS_LABEL: "Estado del agente:",
  AGENT_STATUS_VALUE: "COMPILANDO",
  OPTIMIZED_SIZE_LABEL: "Optimizado:",
  OPTIMIZED_SIZE_VALUE: "-141.7 KB",
  ANALYZING_MESSAGE: "Analizando bundles de codigo...",
  ...AI_LAB_TIMING,
  TERMINAL_LOGS: [
    "Inicializando agente de optimizacion de codigo v1.4.2...",
    "Cargando bundle: app.main.js (184.2 KB)",
    "Analizando estructura Abstract Syntax Tree (AST)...",
    "✔ Encontrados 4 loops de dependencia circular. Resolviendo automaticamente.",
    "✔ Identificadas 12 ramas de import muertas. Podando arbol...",
    "Recompilando imports dinamicos... listo en 18.4ms",
    "✔ Exito! Nuevo tamano de bundle: 42.5 KB (45% de reduccion!)",
  ],
};

export const getAILabSectionConfig = (locale: Locale): AILabSectionConfig => {
  if (locale === I18N_LOCALES.ES) {
    return AI_LAB_SECTION_CONFIG_ES;
  }
  return AI_LAB_SECTION_CONFIG_EN;
};

/** @deprecated Use getAILabSectionConfig(locale). */
export const AI_LAB_SECTION_CONFIG = AI_LAB_SECTION_CONFIG_EN;
