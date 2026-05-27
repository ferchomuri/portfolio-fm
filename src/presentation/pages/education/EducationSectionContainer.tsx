"use client";

import { EducationSection } from "@/presentation/pages/education/EducationSection";
import { EDUCATION_SECTION_CONFIG } from "@/presentation/pages/education/EducationSectionConfig";

export function EducationSectionContainer() {
  return <EducationSection items={EDUCATION_SECTION_CONFIG.ITEMS} />;
}
