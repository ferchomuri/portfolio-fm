"use client";

import { useMemo, useState } from "react";
import { CapabilitiesSection } from "@/presentation/pages/capabilities/CapabilitiesSection";
import {
  CAPABILITIES_SECTION_CONFIG,
  type CapabilityCategoryId,
} from "@/presentation/pages/capabilities/CapabilitiesSectionConfig";
import { FeatureIcon } from "@/presentation/components/feature-icon";

export function CapabilitiesSectionContainer() {
  const [activeCategory, setActiveCategory] = useState<string>(
    CAPABILITIES_SECTION_CONFIG.DEFAULT_CATEGORY_ID,
  );

  const categories = useMemo(
    () =>
      CAPABILITIES_SECTION_CONFIG.CATEGORIES.map((category) => ({
        id: category.id,
        label: category.label,
        icon: <FeatureIcon name={category.iconName} className="h-4 w-4" />,
      })),
    [],
  );

  const activeCapabilities =
    CAPABILITIES_SECTION_CONFIG.CAPABILITIES[activeCategory as CapabilityCategoryId] ??
    CAPABILITIES_SECTION_CONFIG.CAPABILITIES.frontend;

  return (
    <CapabilitiesSection
      categories={categories}
      activeCategory={activeCategory}
      activeCapabilities={activeCapabilities}
      onSelectCategory={setActiveCategory}
    />
  );
}
