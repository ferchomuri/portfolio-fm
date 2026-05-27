"use client";

import { AILabSection } from "@/presentation/pages/ai-lab/AILabSection";
import { useAILabTerminalStream } from "@/presentation/pages/ai-lab/hooks/useAILabTerminalStream";

export function AILabSectionContainer() {
  const { logs, isStreaming } = useAILabTerminalStream();

  return <AILabSection logs={logs} isStreaming={isStreaming} />;
}
