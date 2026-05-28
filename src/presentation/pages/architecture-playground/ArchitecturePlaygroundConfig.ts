import { SECTION_IDS } from "@/domain/constants/sections";
import { ARCHITECTURE_MODES } from "@/domain/types/architecture-playground";
import type {
  ArchitectureMode,
  ArchitectureModeOption,
  ArchitectureNode,
  ArchitectureStat,
} from "@/domain/types/architecture-playground";
import { I18N_LOCALES, type Locale } from "@/presentation/i18n";

export interface ArchitecturePlaygroundConfig {
  readonly SECTION_ID: string;
  readonly EYEBROW: string;
  readonly TITLE: string;
  readonly DESCRIPTION: string;
  readonly CANVAS_HINT: string;
  readonly SPECS_TITLE: string;
  readonly TELEMETRY_TITLE: string;
  readonly TELEMETRY_STATUS: string;
  readonly TELEMETRY_FOOTER: string;
  readonly DEFAULT_MODE: ArchitectureMode;
  readonly MODES: readonly ArchitectureModeOption[];
  readonly NODES: Record<ArchitectureMode, readonly ArchitectureNode[]>;
  readonly EXPLANATIONS: Record<ArchitectureMode, string>;
  readonly STATS: Record<ArchitectureMode, readonly ArchitectureStat[]>;
}

const NODE_LAYOUT: Record<
  ArchitectureMode,
  readonly Omit<ArchitectureNode, "label" | "role">[]
> = {
  [ARCHITECTURE_MODES.MFE]: [
    { id: "shell", x: 50, y: 50, type: "indigo" },
    { id: "remote1", x: 18, y: 22, type: "indigo" },
    { id: "remote2", x: 82, y: 22, type: "indigo" },
    { id: "remote3", x: 50, y: 85, type: "zinc" },
  ],
  [ARCHITECTURE_MODES.CLEAN]: [
    { id: "domain", x: 50, y: 50, type: "emerald" },
    { id: "usecase", x: 50, y: 22, type: "emerald" },
    { id: "adapter", x: 18, y: 50, type: "zinc" },
    { id: "infra", x: 82, y: 50, type: "zinc" },
  ],
  [ARCHITECTURE_MODES.MVC]: [
    { id: "controller", x: 50, y: 18, type: "indigo" },
    { id: "model", x: 18, y: 74, type: "zinc" },
    { id: "view", x: 82, y: 74, type: "emerald" },
  ],
};

const buildNodes = (
  mode: ArchitectureMode,
  labels: readonly { readonly label: string; readonly role: string }[],
): readonly ArchitectureNode[] =>
  NODE_LAYOUT[mode].map((node, index) => ({
    ...node,
    label: labels[index]?.label ?? "",
    role: labels[index]?.role ?? "",
  }));

const ARCHITECTURE_PLAYGROUND_CONFIG_EN: ArchitecturePlaygroundConfig = {
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
  DEFAULT_MODE: ARCHITECTURE_MODES.MFE,
  MODES: [
    { id: ARCHITECTURE_MODES.MFE, label: "Microfrontend (MFE)" },
    { id: ARCHITECTURE_MODES.CLEAN, label: "Clean Architecture" },
    { id: ARCHITECTURE_MODES.MVC, label: "MVC Loop" },
  ],
  NODES: {
    [ARCHITECTURE_MODES.MFE]: buildNodes(ARCHITECTURE_MODES.MFE, [
      { label: "App Shell", role: "Orchestrator Host" },
      { label: "Remote A", role: "Search Sub-App" },
      { label: "Remote B", role: "Checkout Sub-App" },
      { label: "Shared Core", role: "Federated Commons" },
    ]),
    [ARCHITECTURE_MODES.CLEAN]: buildNodes(ARCHITECTURE_MODES.CLEAN, [
      { label: "Domain Core", role: "Pure Entities" },
      { label: "Use Cases", role: "Business Logic" },
      { label: "Adapters", role: "Mappers & APIs" },
      { label: "Infrastructure", role: "NextJS Framework" },
    ]),
    [ARCHITECTURE_MODES.MVC]: buildNodes(ARCHITECTURE_MODES.MVC, [
      { label: "Controller", role: "Request Interceptor" },
      { label: "Model", role: "Database State" },
      { label: "View", role: "Interactive DOM" },
    ]),
  },
  EXPLANATIONS: {
    [ARCHITECTURE_MODES.MFE]:
      "Decouples application logic into isolated runtime federated blocks. App Shell acts as dynamic host, resolving dependencies over network boundaries safely without redeploying other systems.",
    [ARCHITECTURE_MODES.CLEAN]:
      "Enforces strict dependency boundaries. Pure domain core coordinates business rules without dependencies on external frameworks, databases, or client-side UI configurations.",
    [ARCHITECTURE_MODES.MVC]:
      "Implements classic structural separation. Controller receives active view input events, optimizes database state schemas inside Model, and instructs View to render clean output.",
  },
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
  },
};

const ARCHITECTURE_PLAYGROUND_CONFIG_ES: ArchitecturePlaygroundConfig = {
  ...ARCHITECTURE_PLAYGROUND_CONFIG_EN,
  EYEBROW: "05 // SIMULADOR DE ARQUITECTURA INTERACTIVO",
  TITLE: "Laboratorio de Arquitectura Interactivo",
  DESCRIPTION:
    "Banco de trabajo dinamico que simula paradigmas estructurales de software. Haz clic en los nodos para inspeccionar metricas de componentes.",
  CANVAS_HINT: "SIMULADOR ACTIVO // CLIC EN NODOS PARA INSPECCIONAR METRICAS",
  SPECS_TITLE: "especificaciones del paradigma",
  TELEMETRY_TITLE: "TELEMETRIA DE COMPONENTES",
  TELEMETRY_STATUS: "ACTIVO",
  TELEMETRY_FOOTER: "> estado query: ok. stream de paquetes estabilizado.",
  MODES: [
    { id: ARCHITECTURE_MODES.MFE, label: "Microfrontend (MFE)" },
    { id: ARCHITECTURE_MODES.CLEAN, label: "Arquitectura Limpia" },
    { id: ARCHITECTURE_MODES.MVC, label: "Ciclo MVC" },
  ],
  NODES: {
    [ARCHITECTURE_MODES.MFE]: buildNodes(ARCHITECTURE_MODES.MFE, [
      { label: "App Shell", role: "Host Orquestador" },
      { label: "Remote A", role: "Sub-App Busqueda" },
      { label: "Remote B", role: "Sub-App Checkout" },
      { label: "Nucleo Compartido", role: "Comunes Federados" },
    ]),
    [ARCHITECTURE_MODES.CLEAN]: buildNodes(ARCHITECTURE_MODES.CLEAN, [
      { label: "Nucleo Dominio", role: "Entidades Puras" },
      { label: "Casos de Uso", role: "Logica de Negocio" },
      { label: "Adaptadores", role: "Mappers y APIs" },
      { label: "Infraestructura", role: "Framework NextJS" },
    ]),
    [ARCHITECTURE_MODES.MVC]: buildNodes(ARCHITECTURE_MODES.MVC, [
      { label: "Controlador", role: "Interceptor de Requests" },
      { label: "Modelo", role: "Estado de Base de Datos" },
      { label: "Vista", role: "DOM Interactivo" },
    ]),
  },
  EXPLANATIONS: {
    [ARCHITECTURE_MODES.MFE]:
      "Desacopla la logica en bloques federados aislados en runtime. App Shell actua como host dinamico, resolviendo dependencias en la red sin redesplegar otros sistemas.",
    [ARCHITECTURE_MODES.CLEAN]:
      "Impone limites estrictos de dependencia. El nucleo de dominio puro coordina reglas de negocio sin depender de frameworks externos, bases de datos o configuraciones UI.",
    [ARCHITECTURE_MODES.MVC]:
      "Implementa separacion estructural clasica. El controlador recibe eventos de la vista, optimiza el estado en el modelo e instruye a la vista para renderizar salida limpia.",
  },
  STATS: {
    [ARCHITECTURE_MODES.MFE]: [
      { label: "TIPO ACOPLAMIENTO", val: "Federado Debil" },
      { label: "VELOCIDAD BUILD", val: "Independiente" },
      { label: "PERFIL FALLOS", val: "Nodo Aislado" },
    ],
    [ARCHITECTURE_MODES.CLEAN]: [
      { label: "TIPO ACOPLAMIENTO", val: "Concentrico Estricto" },
      { label: "VELOCIDAD BUILD", val: "Bundle Monolitico" },
      { label: "PERFIL FALLOS", val: "Cero Fugas" },
    ],
    [ARCHITECTURE_MODES.MVC]: [
      { label: "TIPO ACOPLAMIENTO", val: "Loop Ciclico" },
      { label: "VELOCIDAD BUILD", val: "Unificado" },
      { label: "PERFIL FALLOS", val: "Bidireccional" },
    ],
  },
};

export const getArchitecturePlaygroundConfig = (
  locale: Locale,
): ArchitecturePlaygroundConfig => {
  if (locale === I18N_LOCALES.ES) {
    return ARCHITECTURE_PLAYGROUND_CONFIG_ES;
  }
  return ARCHITECTURE_PLAYGROUND_CONFIG_EN;
};

export const getArchitectureNodesForMode = (
  locale: Locale,
  mode: ArchitectureMode,
): readonly ArchitectureNode[] => getArchitecturePlaygroundConfig(locale).NODES[mode];

export const getDefaultNodeIdForMode = (locale: Locale, mode: ArchitectureMode): string =>
  getArchitecturePlaygroundConfig(locale).NODES[mode][0]?.id ?? "";

/** @deprecated Use getArchitecturePlaygroundConfig(locale). */
export const ARCHITECTURE_PLAYGROUND_CONFIG = ARCHITECTURE_PLAYGROUND_CONFIG_EN;
