"use client";

import { EducationSection } from "@/presentation/pages/education/EducationSection";
import { getEducationSectionConfig } from "@/presentation/pages/education/EducationSectionConfig";
import { useI18n } from "@/presentation/i18n";

export function EducationSectionContainer() {
  const { locale } = useI18n();
  const sectionConfig = getEducationSectionConfig(locale);

  return <EducationSection key={locale} sectionConfig={sectionConfig} items={sectionConfig.ITEMS} />;
}
