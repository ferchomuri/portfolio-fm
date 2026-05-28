import { SECTION_IDS } from "@/domain/constants/sections";
import { I18N_LOCALES, type Locale } from "@/presentation/i18n";

export interface EducationItemConfig {
  readonly title: string;
  readonly institution: string;
  readonly period: string;
  readonly note?: string;
}

export interface EducationSectionConfig {
  readonly SECTION_ID: string;
  readonly EYEBROW: string;
  readonly TITLE: string;
  readonly DESCRIPTION: string;
  readonly ITEMS: readonly EducationItemConfig[];
}

const EDUCATION_SECTION_CONFIG_EN: EducationSectionConfig = {
  SECTION_ID: SECTION_IDS.EDUCATION,
  EYEBROW: "05 // EDUCATION",
  TITLE: "Education & Training",
  DESCRIPTION:
    "Academic background and ongoing training aligned with modern frontend and full stack delivery.",
  ITEMS: [
    {
      title: "Master's in Application and Web Services Development",
      institution: "Universidad Internacional de Valencia (Spain)",
      period: "2022–2025",
    },
    {
      title: "Computer Systems Engineering",
      institution: "Universidad Israel (Quito)",
      period: "2013–2019",
    },
    {
      title: "AI/ML training",
      institution: "Anyone AI",
      period: "In progress",
      note: "Continuous learning focused on practical AI/ML applications for software engineering.",
    },
  ],
};

const EDUCATION_SECTION_CONFIG_ES: EducationSectionConfig = {
  SECTION_ID: SECTION_IDS.EDUCATION,
  EYEBROW: "05 // EDUCACION",
  TITLE: "Educacion y Formacion",
  DESCRIPTION:
    "Formacion academica y capacitacion continua alineada con entrega moderna frontend y full stack.",
  ITEMS: [
    {
      title: "Maestria en Desarrollo de Aplicaciones y Servicios Web",
      institution: "Universidad Internacional de Valencia (Espana)",
      period: "2022–2025",
    },
    {
      title: "Ingenieria en Sistemas Informaticos",
      institution: "Universidad Israel (Quito)",
      period: "2013–2019",
    },
    {
      title: "Formacion en AI/ML",
      institution: "Anyone AI",
      period: "En curso",
      note: "Aprendizaje continuo enfocado en aplicaciones practicas de AI/ML para ingenieria de software.",
    },
  ],
};

export const getEducationSectionConfig = (locale: Locale): EducationSectionConfig => {
  if (locale === I18N_LOCALES.ES) {
    return EDUCATION_SECTION_CONFIG_ES;
  }
  return EDUCATION_SECTION_CONFIG_EN;
};

/** @deprecated Use getEducationSectionConfig(locale). */
export const EDUCATION_SECTION_CONFIG = EDUCATION_SECTION_CONFIG_EN;
