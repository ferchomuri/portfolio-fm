import { SECTION_IDS } from "@/domain/constants/sections";
import { PROFILE } from "@/data/repositories/profile-repository";

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

export const DEPLOYMENTS_SECTION_CONFIG = {
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
