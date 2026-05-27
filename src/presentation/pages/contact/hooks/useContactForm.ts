"use client";

import { useState, type FormEvent } from "react";
import { sendContactMessage } from "@/data/repositories/contact-repository";
import { PROFILE } from "@/data/repositories/profile-repository";
import { CONTACT_CTA_CONFIG } from "@/presentation/pages/contact/ContactCTAConfig";

export interface ContactFormState {
  readonly email: string;
  readonly message: string;
  readonly submitted: boolean;
  readonly isSending: boolean;
  readonly error: string | null;
  readonly linkedinHref: string;
  readonly onEmailChange: (value: string) => void;
  readonly onMessageChange: (value: string) => void;
  readonly onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}

export const useContactForm = (): ContactFormState => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setError(null);

    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    if (!trimmedEmail || !trimmedMessage) {
      return;
    }

    try {
      setIsSending(true);
      await sendContactMessage({
        fromEmail: trimmedEmail,
        message: trimmedMessage,
      });
      setSubmitted(true);
      setEmail("");
      setMessage("");
    } catch (sendError) {
      const message =
        sendError instanceof Error && sendError.message === "EMAIL_CONFIG_MISSING"
          ? CONTACT_CTA_CONFIG.CONFIG_ERROR
          : CONTACT_CTA_CONFIG.SEND_ERROR;
      setError(message);
    } finally {
      setIsSending(false);
    }
  };

  return {
    email,
    message,
    submitted,
    isSending,
    error,
    linkedinHref: PROFILE.links.linkedin,
    onEmailChange: setEmail,
    onMessageChange: setMessage,
    onSubmit,
  };
};
