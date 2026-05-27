import { SECTION_IDS } from "@/domain/constants/sections";

export interface EducationItemConfig {
  readonly title: string;
  readonly institution: string;
  readonly period: string;
  readonly note?: string;
}

export const EDUCATION_SECTION_CONFIG = {
  SECTION_ID: SECTION_IDS.EDUCATION,
  EYEBROW: "05 // EDUCATION",
  TITLE: "Education & Training",
  DESCRIPTION:
    "Academic background and ongoing training aligned with modern frontend and full stack delivery.",
  ITEMS: [
    {
      title: "Master’s in Application and Web Services Development",
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
  ] satisfies readonly EducationItemConfig[],
};
