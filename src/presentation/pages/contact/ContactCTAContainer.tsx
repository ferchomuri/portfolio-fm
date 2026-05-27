"use client";

import { ContactCTA } from "@/presentation/pages/contact/ContactCTA";
import { useContactBootSequence } from "@/presentation/pages/contact/hooks/useContactBootSequence";
import { useContactForm } from "@/presentation/pages/contact/hooks/useContactForm";

export function ContactCTAContainer() {
  const boot = useContactBootSequence();
  const form = useContactForm();

  return (
    <ContactCTA
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
