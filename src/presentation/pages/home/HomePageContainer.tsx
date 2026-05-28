"use client";

import { AILabSectionContainer } from "@/presentation/pages/ai-lab";
import { ArchitecturePlaygroundContainer } from "@/presentation/pages/architecture-playground";
import { CapabilitiesSectionContainer } from "@/presentation/pages/capabilities";
import { ContactCTAContainer } from "@/presentation/pages/contact";
import { CustomCursorContainer } from "@/presentation/components/custom-cursor";
import { DeploymentsSectionContainer } from "@/presentation/pages/deployments";
import { EducationSectionContainer } from "@/presentation/pages/education";
import { ExperienceTimelineContainer } from "@/presentation/pages/experience-timeline";
import { FooterContainer } from "@/presentation/pages/footer";
import { HeaderContainer } from "@/presentation/pages/header";
import { HeroSectionContainer } from "@/presentation/pages/hero";
import { HOME_PAGE_CONFIG } from "@/presentation/pages/home/HomePageConfig";
import { SmoothScrollContainer } from "@/presentation/components/smooth-scroll";
import { SystemStatusSectionContainer } from "@/presentation/pages/system-status";
import { I18nProvider } from "@/presentation/i18n";

export function HomePageContainer() {
  return (
    <I18nProvider>
      <SmoothScrollContainer>
        <CustomCursorContainer />
        <div className={HOME_PAGE_CONFIG.SHELL_CLASS}>
          <HeaderContainer />
          <main className={HOME_PAGE_CONFIG.MAIN_CLASS}>
            <HeroSectionContainer />
            <SystemStatusSectionContainer />
            <CapabilitiesSectionContainer />
            <ExperienceTimelineContainer />
            <EducationSectionContainer />
            <DeploymentsSectionContainer />
            <ArchitecturePlaygroundContainer />
            <AILabSectionContainer />
            <ContactCTAContainer />
          </main>
          <FooterContainer />
        </div>
      </SmoothScrollContainer>
    </I18nProvider>
  );
}
