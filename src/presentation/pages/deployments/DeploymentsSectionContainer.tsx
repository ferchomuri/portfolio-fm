"use client";

import { DeploymentsSection } from "@/presentation/pages/deployments/DeploymentsSection";
import { DEPLOYMENTS_SECTION_CONFIG } from "@/presentation/pages/deployments/DeploymentsSectionConfig";

export function DeploymentsSectionContainer() {
  return <DeploymentsSection projects={DEPLOYMENTS_SECTION_CONFIG.PROJECTS} />;
}
