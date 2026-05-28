"use client";

import { useMemo, useState } from "react";
import { CapabilitiesSection } from "@/presentation/pages/capabilities/CapabilitiesSection";
import {
  getCapabilitiesSectionConfig,
  type CapabilityCategoryId,
} from "@/presentation/pages/capabilities/CapabilitiesSectionConfig";
import { FeatureIcon } from "@/presentation/components/feature-icon";
import { useI18n } from "@/presentation/i18n";

export function CapabilitiesSectionContainer() {
  const { locale } = useI18n();
  const sectionConfig = getCapabilitiesSectionConfig(locale);
  const [activeCategory, setActiveCategory] = useState(sectionConfig.DEFAULT_CATEGORY_ID);

  const categories = useMemo(
    () =>
      sectionConfig.CATEGORIES.map((category) => ({
        id: category.id,
        label: category.label,
        icon: <FeatureIcon name={category.iconName} className="h-4 w-4" />,
      })),
    [sectionConfig.CATEGORIES],
  );

  const activeCapabilities =
    sectionConfig.CAPABILITIES[activeCategory as CapabilityCategoryId] ??
    sectionConfig.CAPABILITIES.frontend;

  return (
    <CapabilitiesSection
      key={locale}
      sectionConfig={sectionConfig}
      categories={categories}
      activeCategory={activeCategory}
      activeCapabilities={activeCapabilities}
      onSelectCategory={setActiveCategory}
    />
  );
}
