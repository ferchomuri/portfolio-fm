import { SECTION_IDS } from "@/domain/constants/sections";
import { PROFILE } from "@/data/repositories/profile-repository";
import { I18N_LOCALES, type Locale } from "@/presentation/i18n";

export const DEPLOYMENT_VISUAL_VARIANTS = {
  SOFTWARE_FACTORY_MFE: "software-factory-mfe",
  BANKING_ENTITY_MFE: "banking-entity-mfe",
  DATA_ANALYTICS_CONSULTANCY_MIGRATION: "data-analytics-consultancy-migration",
} as const;

export type DeploymentVisualVariant =
  (typeof DEPLOYMENT_VISUAL_VARIANTS)[keyof typeof DEPLOYMENT_VISUAL_VARIANTS];

export interface DeploymentProjectConfig {
  readonly title: string;
  readonly tag: string;
  readonly category: string;
  readonly description: string;
  readonly stack: readonly string[];
  readonly github: string;
  readonly demo: string;
  readonly visualVariant: DeploymentVisualVariant;
}

export interface DeploymentsSectionConfig {
  readonly SECTION_ID: string;
  readonly EYEBROW: string;
  readonly TITLE: string;
  readonly DESCRIPTION: string;
  readonly LAUNCH_LABEL: string;
  readonly SOURCE_LABEL: string;
  readonly SOURCE_UNAVAILABLE_TITLE: string;
  readonly PROJECTS: readonly DeploymentProjectConfig[];
}

const DEPLOYMENTS_SECTION_CONFIG_EN: DeploymentsSectionConfig = {
  SECTION_ID: SECTION_IDS.DEPLOYMENTS,
  EYEBROW: "04 // CORE ENGINE DEPLOYMENTS",
  TITLE: "Selected Platforms & Projects",
  DESCRIPTION:
    "Technical platforms engineered across core environments. Grounded in architecture design, visual standards, and modular infrastructure.",
  LAUNCH_LABEL: "LAUNCH CONSOLE",
  SOURCE_LABEL: "SOURCE CODE",
  SOURCE_UNAVAILABLE_TITLE: "Source code unavailable",
  PROJECTS: [
    {
      title: "Software Factory Microfrontend Migration",
      tag: "01 // SOFTWARE FACTORY DELIVERY",
      category: "Software Factory Modernization",
      description:
        "Microfrontend migration across key product modules with a Clean Architecture approach. Focused on reducing technical debt and improving delivery speed in a software factory environment.",
      stack: ["Next.js", "Webpack Module Federation", "Clean Architecture", "Tailwind CSS"],
      github: PROFILE.links.github,
      demo: PROFILE.links.linkedin,
      visualVariant: DEPLOYMENT_VISUAL_VARIANTS.SOFTWARE_FACTORY_MFE,
    },
    {
      title: "Banking Entity Microfrontend Implementation",
      tag: "02 // BANKING MFE PLATFORM",
      category: "Banking Frontend Platform",
      description:
        "Microfrontend implementation using Webpack Module Federation in a multi-team ecosystem. Focused on delivery velocity, shared standards, and scalable collaboration for a banking entity.",
      stack: ["React", "Angular", "Webpack Module Federation", "Jest"],
      github: PROFILE.links.github,
      demo: PROFILE.links.linkedin,
      visualVariant: DEPLOYMENT_VISUAL_VARIANTS.BANKING_ENTITY_MFE,
    },
    {
      title: "Data Analytics Consultancy Angular Migration (7 to 14)",
      tag: "03 // CONSULTANCY MIGRATION",
      category: "Data and Analytics Modernization",
      description:
        "Full migration from Angular 7 to Angular 14 across a multi-module application using the Strangler Pattern, enabling incremental modernization with minimal business disruption in a data and analytics consultancy context.",
      stack: ["Angular", "Strangler Pattern", "AWS Lambda", "Python"],
      github: PROFILE.links.github,
      demo: PROFILE.links.linkedin,
      visualVariant: DEPLOYMENT_VISUAL_VARIANTS.DATA_ANALYTICS_CONSULTANCY_MIGRATION,
    },
  ] satisfies readonly DeploymentProjectConfig[],
};

const DEPLOYMENTS_SECTION_CONFIG_ES: DeploymentsSectionConfig = {
  SECTION_ID: SECTION_IDS.DEPLOYMENTS,
  EYEBROW: "04 // DESPLIEGUES DEL MOTOR PRINCIPAL",
  TITLE: "Plataformas y Proyectos Seleccionados",
  DESCRIPTION:
    "Plataformas tecnicas desarrolladas en entornos clave. Basadas en diseno de arquitectura, estandares visuales e infraestructura modular.",
  LAUNCH_LABEL: "ABRIR CONSOLA",
  SOURCE_LABEL: "CODIGO FUENTE",
  SOURCE_UNAVAILABLE_TITLE: "Codigo fuente no disponible",
  PROJECTS: [
    {
      title: "Migracion de Microfrontends en Software Factory",
      tag: "01 // ENTREGA SOFTWARE FACTORY",
      category: "Modernizacion de Software Factory",
      description:
        "Migracion de microfrontends en modulos clave del producto con enfoque de Clean Architecture. Orientada a reducir deuda tecnica y mejorar la velocidad de entrega en un entorno de software factory.",
      stack: ["Next.js", "Webpack Module Federation", "Clean Architecture", "Tailwind CSS"],
      github: PROFILE.links.github,
      demo: PROFILE.links.linkedin,
      visualVariant: DEPLOYMENT_VISUAL_VARIANTS.SOFTWARE_FACTORY_MFE,
    },
    {
      title: "Implementacion de Microfrontends para Entidad Bancaria",
      tag: "02 // PLATAFORMA BANCARIA MFE",
      category: "Plataforma Frontend Bancaria",
      description:
        "Implementacion de microfrontends con Webpack Module Federation en un ecosistema de multiples equipos. Enfocada en velocidad de entrega, estandares compartidos y colaboracion escalable para una entidad bancaria.",
      stack: ["React", "Angular", "Webpack Module Federation", "Jest"],
      github: PROFILE.links.github,
      demo: PROFILE.links.linkedin,
      visualVariant: DEPLOYMENT_VISUAL_VARIANTS.BANKING_ENTITY_MFE,
    },
    {
      title: "Migracion Angular en Consultoria de Data Analytics (7 a 14)",
      tag: "03 // MIGRACION EN CONSULTORIA",
      category: "Modernizacion de Datos y Analitica",
      description:
        "Migracion completa de Angular 7 a Angular 14 en una aplicacion multimodulo usando Strangler Pattern. Permitio modernizacion incremental con minima disrupcion del negocio en una consultoria de datos y analitica.",
      stack: ["Angular", "Strangler Pattern", "AWS Lambda", "Python"],
      github: PROFILE.links.github,
      demo: PROFILE.links.linkedin,
      visualVariant: DEPLOYMENT_VISUAL_VARIANTS.DATA_ANALYTICS_CONSULTANCY_MIGRATION,
    },
  ] satisfies readonly DeploymentProjectConfig[],
};

export const getDeploymentsSectionConfig = (locale: Locale): DeploymentsSectionConfig => {
  if (locale === I18N_LOCALES.ES) {
    return DEPLOYMENTS_SECTION_CONFIG_ES;
  }
  return DEPLOYMENTS_SECTION_CONFIG_EN;
};
