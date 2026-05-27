import { SECTION_IDS } from "@/domain/constants/sections";
import { PROFILE } from "@/data/repositories/profile-repository";

export const DEPLOYMENT_VISUAL_VARIANTS = {
  PPM_MICROFRONTEND: "ppm-microfrontend",
  PRODUBANCO_MFE: "produbanco-mfe",
  KIN_ANGULAR_MIGRATION: "kin-angular-migration",
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
      title: "PPM Microfrontend Migration",
      tag: "01 // MICROFRONTENDS DELIVERY",
      category: "Platform Modernization",
      description:
        "Microfrontend migration across key modules (checkout, memberships, product listing) with a Clean Architecture approach. Focused on reducing technical debt and improving delivery speed through AI-assisted workflows.",
      stack: ["Next.js", "Webpack Module Federation", "Clean Architecture", "Tailwind CSS"],
      github: PROFILE.links.github,
      demo: PROFILE.links.linkedin,
      visualVariant: DEPLOYMENT_VISUAL_VARIANTS.PPM_MICROFRONTEND,
    },
    {
      title: "Produbanco Microfrontend Implementation",
      tag: "02 // CROSS-TEAM MFE",
      category: "Enterprise Frontend Platform",
      description:
        "Microfrontend implementation using Webpack Module Federation in an ecosystem of 8 teams. Focused on delivery velocity, shared standards, and scalable collaboration.",
      stack: ["React", "Angular", "Webpack Module Federation", "Jest"],
      github: PROFILE.links.github,
      demo: PROFILE.links.linkedin,
      visualVariant: DEPLOYMENT_VISUAL_VARIANTS.PRODUBANCO_MFE,
    },
    {
      title: "Kin Analytics Angular Migration (7 → 14)",
      tag: "03 // STRANGLER MIGRATION",
      category: "Large-Scale Frontend Upgrade",
      description:
        "Full migration from Angular 7 to Angular 14 across a 6-module application using the Strangler Pattern, enabling incremental modernization with minimal business disruption.",
      stack: ["Angular", "Strangler Pattern", "AWS Lambda", "Python"],
      github: PROFILE.links.github,
      demo: PROFILE.links.linkedin,
      visualVariant: DEPLOYMENT_VISUAL_VARIANTS.KIN_ANGULAR_MIGRATION,
    },
  ] satisfies readonly DeploymentProjectConfig[],
};
