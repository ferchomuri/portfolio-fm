"use client";

import { ContactCTA } from "@/presentation/pages/contact/ContactCTA";
import { getContactCTAConfig } from "@/presentation/pages/contact/ContactCTAConfig";
import { useContactBootSequence } from "@/presentation/pages/contact/hooks/useContactBootSequence";
import { useContactForm } from "@/presentation/pages/contact/hooks/useContactForm";
import { useI18n } from "@/presentation/i18n";

export function ContactCTAContainer() {
  const { locale } = useI18n();
  const sectionConfig = getContactCTAConfig(locale);
  const boot = useContactBootSequence(sectionConfig);
  const form = useContactForm(sectionConfig);

  return (
    <ContactCTA
      key={locale}
      sectionConfig={sectionConfig}
      bootState={boot.bootState}
      bootLogs={boot.logs}
      email={form.email}
      message={form.message}
      submitted={form.submitted}
      isSending={form.isSending}
      error={form.error}
      linkedinHref={form.linkedinHref}
      onEmailChange={form.onEmailChange}
      onMessageChange={form.onMessageChange}
      onSubmit={form.onSubmit}
    />
  );
}
