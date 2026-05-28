import { SECTION_IDS } from "@/domain/constants/sections";
import { ICON_NAMES } from "@/domain/types/icon-name";
import type { IconName } from "@/domain/types/icon-name";
import { I18N_LOCALES, type Locale } from "@/presentation/i18n";

export interface CapabilityCategoryConfig {
  readonly id: string;
  readonly label: string;
  readonly iconName: IconName;
}

export interface CapabilityItemConfig {
  readonly name: string;
  readonly level: number;
  readonly detail: string;
  readonly metric: string;
  readonly metricLabel: string;
}

export interface CapabilitiesSectionConfig {
  readonly SECTION_ID: string;
  readonly EYEBROW: string;
  readonly TITLE: string;
  readonly DESCRIPTION: string;
  readonly DEFAULT_CATEGORY_ID: string;
  readonly CATEGORIES: readonly CapabilityCategoryConfig[];
  readonly CAPABILITIES: Record<string, readonly CapabilityItemConfig[]>;
}

const CAPABILITIES_SECTION_CONFIG_EN: CapabilitiesSectionConfig = {
  SECTION_ID: SECTION_IDS.CAPABILITIES,
  EYEBROW: "02 // CAPABILITIES MATRIX",
  TITLE: "Platform Engineering",
  DESCRIPTION:
    "A comprehensive view of my engineering competency toolkit, separated by technical layer. Select a domain tab to inspect telemetry breakdowns and metric details.",
  DEFAULT_CATEGORY_ID: "frontend",
  CATEGORIES: [
    { id: "frontend", label: "Frontend", iconName: ICON_NAMES.CODE },
    { id: "backend", label: "Backend & APIs", iconName: ICON_NAMES.SERVER },
    { id: "cloud", label: "Cloud & DevOps", iconName: ICON_NAMES.CLOUD },
    { id: "testing", label: "Testing & Architecture", iconName: ICON_NAMES.SHIELD },
    { id: "ai", label: "AI-Assisted Development", iconName: ICON_NAMES.BRAIN },
  ] satisfies readonly CapabilityCategoryConfig[],
  CAPABILITIES: {
    frontend: [
      {
        name: "React / Next.js / TypeScript",
        level: 95,
        detail:
          "React, Next.js, React Native, Angular, TypeScript, SSR/SSG, performance optimization, and Design Systems.",
        metric: "Daily",
        metricLabel: "Usage",
      },
      {
        name: "Microfrontends (Module Federation)",
        level: 90,
        detail:
          "Microfrontends architecture with Webpack Module Federation, host/remotes design, and cross-team delivery patterns.",
        metric: "MFE",
        metricLabel: "Focus",
      },
      {
        name: "UI Libraries & Styling",
        level: 88,
        detail:
          "Tailwind CSS, Material UI, Ant Design, HTML5/CSS3, responsive systems, and reusable component patterns.",
        metric: "UI",
        metricLabel: "Scope",
      },
      {
        name: "Performance & DX",
        level: 90,
        detail:
          "Core Web Vitals, render profiling, bundle optimization, and clean developer workflows.",
        metric: "High",
        metricLabel: "Impact",
      },
    ],
    backend: [
      {
        name: "Node.js / REST APIs",
        level: 82,
        detail:
          "Node.js and REST APIs in microservices contexts, with strong focus on frontend integration and contract clarity.",
        metric: "APIs",
        metricLabel: "Layer",
      },
      {
        name: "Python / Django",
        level: 75,
        detail:
          "Python and Django for backend services, including serverless patterns and integration work.",
        metric: "Python",
        metricLabel: "Stack",
      },
      {
        name: ".NET / C# / SQL Server",
        level: 70,
        detail:
          "ASP.NET, C#, and SQL Server for internal enterprise applications and tooling.",
        metric: ".NET",
        metricLabel: "Experience",
      },
      {
        name: "Microservices / Serverless",
        level: 72,
        detail:
          "Microservices and serverless approaches, including AWS Lambda-based components.",
        metric: "Cloud",
        metricLabel: "Approach",
      },
    ],
    cloud: [
      {
        name: "AWS / AWS Lambda",
        level: 75,
        detail:
          "AWS fundamentals with hands-on contributions in serverless workloads and integration patterns.",
        metric: "Lambda",
        metricLabel: "Hands-on",
      },
      {
        name: "Docker / Linux",
        level: 78,
        detail:
          "Dockerized workflows and Linux-first development for consistent environments.",
        metric: "Dev",
        metricLabel: "Workflows",
      },
      {
        name: "CI/CD / GitHub Actions",
        level: 80,
        detail:
          "CI/CD pipelines using GitHub Actions to automate checks, builds, and delivery flows.",
        metric: "CI/CD",
        metricLabel: "Automation",
      },
      {
        name: "Firebase",
        level: 65,
        detail: "Firebase experience for app services and rapid prototyping contexts.",
        metric: "Tools",
        metricLabel: "Services",
      },
    ],
    testing: [
      {
        name: "Jest / TDD",
        level: 85,
        detail:
          "Unit and integration testing with Jest; TDD practices for predictable and maintainable systems.",
        metric: "Jest",
        metricLabel: "Primary",
      },
      {
        name: "Clean Architecture / SOLID",
        level: 88,
        detail:
          "Clean Architecture boundaries, SOLID principles, and pragmatic design patterns for long-lived codebases.",
        metric: "SOLID",
        metricLabel: "Principles",
      },
      {
        name: "Design Patterns",
        level: 82,
        detail:
          "Common patterns applied to frontend platform work and modular code organization.",
        metric: "Patterns",
        metricLabel: "Toolbox",
      },
      {
        name: "Code Review",
        level: 90,
        detail:
          "Strong code review habits focused on correctness, maintainability, and delivery velocity.",
        metric: "PRs",
        metricLabel: "Leadership",
      },
    ],
    ai: [
      {
        name: "Cursor / Copilot / ChatGPT / Claude",
        level: 90,
        detail:
          "AI-assisted development tools used to accelerate delivery, improve test creation, and reduce repetitive work.",
        metric: "AI",
        metricLabel: "Tooling",
      },
      {
        name: "Prompt Engineering",
        level: 78,
        detail:
          "Practical prompt engineering to drive consistent outputs for coding, debugging, and refactoring tasks.",
        metric: "Prompts",
        metricLabel: "Skill",
      },
      {
        name: "Automation Workflows",
        level: 75,
        detail:
          "Workflow automation using AI and scripting to reduce cycle time across development tasks.",
        metric: "DX",
        metricLabel: "Focus",
      },
      {
        name: "AI/ML Training (in progress)",
        level: 65,
        detail:
          "Ongoing training and experimentation with AI/ML to expand practical engineering applications.",
        metric: "Learning",
        metricLabel: "Status",
      },
    ],
  },
};

const CAPABILITIES_SECTION_CONFIG_ES: CapabilitiesSectionConfig = {
  SECTION_ID: SECTION_IDS.CAPABILITIES,
  EYEBROW: "02 // MATRIZ DE CAPACIDADES",
  TITLE: "Ingenieria de Plataforma",
  DESCRIPTION:
    "Vista integral de mi toolkit de competencias, separado por capa tecnica. Selecciona un dominio para inspeccionar telemetria y metricas.",
  DEFAULT_CATEGORY_ID: "frontend",
  CATEGORIES: [
    { id: "frontend", label: "Frontend", iconName: ICON_NAMES.CODE },
    { id: "backend", label: "Backend y APIs", iconName: ICON_NAMES.SERVER },
    { id: "cloud", label: "Cloud y DevOps", iconName: ICON_NAMES.CLOUD },
    { id: "testing", label: "Testing y Arquitectura", iconName: ICON_NAMES.SHIELD },
    { id: "ai", label: "Desarrollo Asistido por IA", iconName: ICON_NAMES.BRAIN },
  ],
  CAPABILITIES: {
    frontend: [
      {
        name: "React / Next.js / TypeScript",
        level: 95,
        detail:
          "React, Next.js, React Native, Angular, TypeScript, SSR/SSG, optimizacion de rendimiento y Design Systems.",
        metric: "Diario",
        metricLabel: "Uso",
      },
      {
        name: "Microfrontends (Module Federation)",
        level: 90,
        detail:
          "Arquitectura microfrontends con Webpack Module Federation, diseno host/remotes y patrones de entrega multi-equipo.",
        metric: "MFE",
        metricLabel: "Foco",
      },
      {
        name: "UI Libraries y Estilos",
        level: 88,
        detail:
          "Tailwind CSS, Material UI, Ant Design, HTML5/CSS3, sistemas responsive y patrones de componentes reutilizables.",
        metric: "UI",
        metricLabel: "Alcance",
      },
      {
        name: "Rendimiento y DX",
        level: 90,
        detail:
          "Core Web Vitals, profiling de render, optimizacion de bundles y workflows limpios para desarrolladores.",
        metric: "Alto",
        metricLabel: "Impacto",
      },
    ],
    backend: [
      {
        name: "Node.js / REST APIs",
        level: 82,
        detail:
          "Node.js y REST APIs en contextos de microservicios, con foco en integracion frontend y claridad de contratos.",
        metric: "APIs",
        metricLabel: "Capa",
      },
      {
        name: "Python / Django",
        level: 75,
        detail:
          "Python y Django para servicios backend, incluyendo patrones serverless e integracion.",
        metric: "Python",
        metricLabel: "Stack",
      },
      {
        name: ".NET / C# / SQL Server",
        level: 70,
        detail:
          "ASP.NET, C# y SQL Server para aplicaciones enterprise internas y tooling.",
        metric: ".NET",
        metricLabel: "Experiencia",
      },
      {
        name: "Microservicios / Serverless",
        level: 72,
        detail:
          "Enfoques microservicios y serverless, incluyendo componentes con AWS Lambda.",
        metric: "Cloud",
        metricLabel: "Enfoque",
      },
    ],
    cloud: [
      {
        name: "AWS / AWS Lambda",
        level: 75,
        detail:
          "Fundamentos AWS con contribuciones hands-on en cargas serverless y patrones de integracion.",
        metric: "Lambda",
        metricLabel: "Hands-on",
      },
      {
        name: "Docker / Linux",
        level: 78,
        detail:
          "Workflows dockerizados y desarrollo Linux-first para entornos consistentes.",
        metric: "Dev",
        metricLabel: "Workflows",
      },
      {
        name: "CI/CD / GitHub Actions",
        level: 80,
        detail:
          "Pipelines CI/CD con GitHub Actions para automatizar checks, builds y flujos de entrega.",
        metric: "CI/CD",
        metricLabel: "Automatizacion",
      },
      {
        name: "Firebase",
        level: 65,
        detail: "Experiencia Firebase para servicios de app y prototipado rapido.",
        metric: "Tools",
        metricLabel: "Servicios",
      },
    ],
    testing: [
      {
        name: "Jest / TDD",
        level: 85,
        detail:
          "Testing unitario e integracion con Jest; practicas TDD para sistemas predecibles y mantenibles.",
        metric: "Jest",
        metricLabel: "Principal",
      },
      {
        name: "Clean Architecture / SOLID",
        level: 88,
        detail:
          "Limites de Clean Architecture, principios SOLID y patrones pragmaticos para codebases de larga vida.",
        metric: "SOLID",
        metricLabel: "Principios",
      },
      {
        name: "Patrones de Diseno",
        level: 82,
        detail:
          "Patrones comunes aplicados a plataformas frontend y organizacion modular de codigo.",
        metric: "Patrones",
        metricLabel: "Toolbox",
      },
      {
        name: "Code Review",
        level: 90,
        detail:
          "Habitos fuertes de code review enfocados en correccion, mantenibilidad y velocidad de entrega.",
        metric: "PRs",
        metricLabel: "Liderazgo",
      },
    ],
    ai: [
      {
        name: "Cursor / Copilot / ChatGPT / Claude",
        level: 90,
        detail:
          "Herramientas de desarrollo asistido por IA para acelerar entrega, mejorar tests y reducir trabajo repetitivo.",
        metric: "IA",
        metricLabel: "Tooling",
      },
      {
        name: "Prompt Engineering",
        level: 78,
        detail:
          "Prompt engineering practico para outputs consistentes en coding, debugging y refactoring.",
        metric: "Prompts",
        metricLabel: "Habilidad",
      },
      {
        name: "Workflows de Automatizacion",
        level: 75,
        detail:
          "Automatizacion de workflows con IA y scripting para reducir cycle time en tareas de desarrollo.",
        metric: "DX",
        metricLabel: "Foco",
      },
      {
        name: "Formacion AI/ML (en curso)",
        level: 65,
        detail:
          "Formacion y experimentacion continua con AI/ML para expandir aplicaciones practicas en ingenieria.",
        metric: "Aprendizaje",
        metricLabel: "Estado",
      },
    ],
  },
};

export const getCapabilitiesSectionConfig = (locale: Locale): CapabilitiesSectionConfig => {
  if (locale === I18N_LOCALES.ES) {
    return CAPABILITIES_SECTION_CONFIG_ES;
  }
  return CAPABILITIES_SECTION_CONFIG_EN;
};

/** @deprecated Use getCapabilitiesSectionConfig(locale). */
export const CAPABILITIES_SECTION_CONFIG = CAPABILITIES_SECTION_CONFIG_EN;

export type CapabilityCategoryId = keyof typeof CAPABILITIES_SECTION_CONFIG_EN.CAPABILITIES;
