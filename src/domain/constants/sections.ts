export const SECTION_IDS = {
  HERO: "hero",
  SYSTEM_STATUS: "system-status",
  CAPABILITIES: "capabilities",
  TIMELINE: "timeline",
  EDUCATION: "education",
  DEPLOYMENTS: "deployments",
  PLAYGROUND: "playground",
  AI_LAB: "ai-lab",
  CONTACT: "contact",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];
