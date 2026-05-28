import { SECTION_IDS } from "@/domain/constants/sections";
import { I18N_LOCALES, type Locale } from "@/presentation/i18n";

export interface ExperienceMilestone {
  readonly year: string;
  readonly role: string;
  readonly company: string;
  readonly description: string;
  readonly bullets: readonly string[];
}

export interface ExperienceTimelineConfig {
  readonly SECTION_ID: string;
  readonly EYEBROW: string;
  readonly TITLE: string;
  readonly DESCRIPTION: string;
  readonly PROGRESS_LABEL: string;
  readonly MILESTONE_COUNT_LABEL: string;
  readonly MILESTONES: readonly ExperienceMilestone[];
}

const EXPERIENCE_TIMELINE_CONFIG_EN: ExperienceTimelineConfig = {
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
  ],
};

const EXPERIENCE_TIMELINE_CONFIG_ES: ExperienceTimelineConfig = {
  SECTION_ID: SECTION_IDS.TIMELINE,
  EYEBROW: "03 // LINEA DE TIEMPO PROFESIONAL",
  TITLE: "Trayectoria de Arquitectura de Sistemas",
  DESCRIPTION:
    "Desplazate hacia abajo para avanzar en la linea de tiempo. Explora hitos, stacks tecnologicos y proyectos modulares.",
  PROGRESS_LABEL: "PROGRESO TIMELINE // STREAM ACTIVO",
  MILESTONE_COUNT_LABEL: "hitos: 04",
  MILESTONES: [
    {
      year: "08/2025 – ACTUAL",
      role: "Desarrollador de Software",
      company: "PPM",
      description:
        "Ingeniero Frontend Senior enfocado en microfrontends, Clean Architecture y workflows asistidos por IA para mejorar velocidad de entrega y calidad de codigo.",
      bullets: [
        "Reduccion de deuda tecnica del 62% (40 → 15 items) via migracion a microfrontends y Clean Architecture.",
        "Mejora de velocidad de entrega con herramientas IA: componentes 62% mas rapido (2h → 45m) y tests 50% mas rapido.",
        "Liderazgo tecnico de un equipo de 4 ingenieros, revisando 5–6 PRs por semana.",
      ],
    },
    {
      year: "05/2024 – 08/2025",
      role: "Desarrollador Full Stack (Frontend)",
      company: "Produbanco",
      description:
        "Desarrollador full stack con foco frontend en un ecosistema multi-equipo, construyendo microfrontends y mejorando throughput de entrega.",
      bullets: [
        "Implementacion de arquitectura microfrontend con Webpack Module Federation en 8 equipos.",
        "Incremento de velocidad de entrega ~30% mediante patrones compartidos y workflows optimizados.",
        "Liderazgo tecnico de un equipo frontend de 6 ingenieros.",
      ],
    },
    {
      year: "05/2021 – 05/2024",
      role: "Desarrollador Full Stack (Frontend)",
      company: "Kin Analytics (Remoto)",
      description:
        "Desarrollador full stack remoto con fuerte foco frontend, entregando migraciones grandes y contribuyendo a modernizacion cloud.",
      bullets: [
        "Migracion Angular 7 → Angular 14 en aplicacion de 6 modulos usando Strangler Pattern.",
        "Contribucion a migracion de plataforma PHP legacy a microservicios con AWS Lambda + Python.",
        "Trabajo con stacks React, React Native, Angular, Python y Django.",
      ],
    },
    {
      year: "03/2019 – 05/2021",
      role: "Analista de Tecnologia",
      company: "Pérez Bustamante & Ponce",
      description:
        "Analista de tecnologia construyendo aplicaciones internas y automatizaciones para eficiencia operativa.",
      bullets: [
        "Desarrollo de apps internas con ASP.NET, C# y SQL Server.",
        "Automatizacion de tareas operativas con scripting y mejoras de workflow.",
      ],
    },
  ],
};

export const getExperienceTimelineConfig = (locale: Locale): ExperienceTimelineConfig => {
  if (locale === I18N_LOCALES.ES) {
    return EXPERIENCE_TIMELINE_CONFIG_ES;
  }
  return EXPERIENCE_TIMELINE_CONFIG_EN;
};

/** @deprecated Use getExperienceTimelineConfig(locale). */
export const EXPERIENCE_TIMELINE_CONFIG = EXPERIENCE_TIMELINE_CONFIG_EN;
