import { SECTION_IDS } from "@/domain/constants/sections";

export interface ExperienceMilestone {
  readonly year: string;
  readonly role: string;
  readonly company: string;
  readonly description: string;
  readonly bullets: readonly string[];
}

export const EXPERIENCE_TIMELINE_CONFIG = {
  SECTION_ID: SECTION_IDS.TIMELINE,
  EYEBROW: "03 // PROFESSIONAL STORY TIMELINE",
  TITLE: "System Architecture Journey",
  DESCRIPTION:
    "Scroll down to advance the timeline. Explore progression highlights, tech stacks, and modular projects.",
  PROGRESS_LABEL: "TIMELINE PROGRESS // ACTIVE STREAM",
  MILESTONE_COUNT_LABEL: "milestones: 04",
  MILESTONES: [
    {
      year: "08/2025 – PRESENT",
      role: "Software Developer",
      company: "PPM",
      description:
        "Senior Frontend Engineer focused on microfrontends, Clean Architecture, and AI-assisted workflows to improve delivery speed and code quality.",
      bullets: [
        "Reduced technical debt by 62% (40 → 15 items) via microfrontend migration and Clean Architecture.",
        "Improved delivery speed with AI tools: components 62% faster (2h → 45m) and tests 50% faster.",
        "Technical leadership of a 4-engineer team, reviewing 5–6 PRs per week.",
      ],
    },
    {
      year: "05/2024 – 08/2025",
      role: "Full Stack Developer (Frontend)",
      company: "Produbanco",
      description:
        "Frontend-focused full stack developer working in a multi-team ecosystem, building microfrontends and improving delivery throughput.",
      bullets: [
        "Implemented microfrontend architecture with Webpack Module Federation across 8 teams.",
        "Increased delivery speed by ~30% through shared patterns and streamlined workflows.",
        "Technical leadership for a 6-engineer frontend team.",
      ],
    },
    {
      year: "05/2021 – 05/2024",
      role: "Full Stack Developer (Frontend)",
      company: "Kin Analytics (Remote)",
      description:
        "Remote full stack developer with a strong frontend focus, delivering large migrations and contributing to cloud modernization initiatives.",
      bullets: [
        "Migrated Angular 7 → Angular 14 across a 6-module application using the Strangler Pattern.",
        "Contributed to migrating a legacy PHP platform to microservices using AWS Lambda + Python.",
        "Worked across React, React Native, Angular, Python, and Django stacks.",
      ],
    },
    {
      year: "03/2019 – 05/2021",
      role: "Technology Analyst",
      company: "Pérez Bustamante & Ponce",
      description:
        "Technology analyst building internal business applications and automations for operational efficiency.",
      bullets: [
        "Built internal apps with ASP.NET, C#, and SQL Server.",
        "Automated operational tasks with scripting and workflow improvements.",
      ],
    },
  ] satisfies readonly ExperienceMilestone[],
};
