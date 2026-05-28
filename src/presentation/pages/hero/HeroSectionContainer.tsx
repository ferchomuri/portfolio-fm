"use client";

import { HeroSection } from "@/presentation/pages/hero/HeroSection";
import { buildHeroRoles, getHeroSectionConfig } from "@/presentation/pages/hero/HeroSectionConfig";
import { useHeroAnimations } from "@/presentation/pages/hero/hooks/useHeroAnimations";
import { useI18n } from "@/presentation/i18n";
import { PROFILE } from "@/data/repositories/profile-repository";

export function HeroSectionContainer() {
  const { locale } = useI18n();
  const sectionConfig = getHeroSectionConfig(locale);
  const roles = buildHeroRoles(locale);
  const { roleIndex, terminalLine } = useHeroAnimations(roles, sectionConfig);

  return (
    <HeroSection
      sectionConfig={sectionConfig}
      fullName={PROFILE.fullName}
      title={roles[roleIndex] ?? PROFILE.title}
      email={PROFILE.email}
      location={PROFILE.location}
      photoSrc={PROFILE.photo.src}
      photoAlt={PROFILE.photo.alt}
      githubHref={PROFILE.links.github}
      linkedinHref={PROFILE.links.linkedin}
      roles={roles}
      roleIndex={roleIndex}
      terminalLine={terminalLine}
    />
  );
}
