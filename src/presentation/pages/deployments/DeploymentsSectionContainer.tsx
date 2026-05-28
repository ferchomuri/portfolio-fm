"use client";

import { DeploymentsSection } from "@/presentation/pages/deployments/DeploymentsSection";
import { getDeploymentsSectionConfig } from "@/presentation/pages/deployments/DeploymentsSectionConfig";
import { useI18n } from "@/presentation/i18n";

export function DeploymentsSectionContainer() {
  const { locale } = useI18n();
  const sectionConfig = getDeploymentsSectionConfig(locale);

  return (
    <DeploymentsSection
      key={locale}
      sectionConfig={sectionConfig}
      projects={sectionConfig.PROJECTS}
    />
  );
}
