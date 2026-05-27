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
import { HomePage } from "@/presentation/pages/home/HomePage";
import { SmoothScrollContainer } from "@/presentation/components/smooth-scroll";
import { SystemStatusSectionContainer } from "@/presentation/pages/system-status";

export function HomePageContainer() {
  return (
    <SmoothScrollContainer>
      <HomePage
        customCursor={<CustomCursorContainer />}
        header={<HeaderContainer />}
        main={
          <>
            <HeroSectionContainer />
            <SystemStatusSectionContainer />
            <CapabilitiesSectionContainer />
            <ExperienceTimelineContainer />
            <EducationSectionContainer />
            <DeploymentsSectionContainer />
            <ArchitecturePlaygroundContainer />
            <AILabSectionContainer />
            <ContactCTAContainer />
          </>
        }
        footer={<FooterContainer />}
      />
    </SmoothScrollContainer>
  );
}
