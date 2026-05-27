"use client";

import { HeroSection } from "@/presentation/pages/hero/HeroSection";
import { buildHeroRoles } from "@/presentation/pages/hero/HeroSectionConfig";
import { useHeroAnimations } from "@/presentation/pages/hero/hooks/useHeroAnimations";
import { PROFILE } from "@/data/repositories/profile-repository";

export function HeroSectionContainer() {
  const roles = buildHeroRoles();
  const { roleIndex, terminalLine } = useHeroAnimations(roles);

  return (
    <HeroSection
      fullName={PROFILE.fullName}
      title={PROFILE.title}
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
