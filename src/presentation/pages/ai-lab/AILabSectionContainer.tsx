"use client";

import { AILabSection } from "@/presentation/pages/ai-lab/AILabSection";
import { getAILabSectionConfig } from "@/presentation/pages/ai-lab/AILabSectionConfig";
import { useAILabTerminalStream } from "@/presentation/pages/ai-lab/hooks/useAILabTerminalStream";
import { useI18n } from "@/presentation/i18n";

export function AILabSectionContainer() {
  const { locale } = useI18n();
  const sectionConfig = getAILabSectionConfig(locale);
  const { logs, isStreaming } = useAILabTerminalStream(sectionConfig);

  return (
    <AILabSection
      key={locale}
      sectionConfig={sectionConfig}
      logs={logs}
      isStreaming={isStreaming}
    />
  );
}
