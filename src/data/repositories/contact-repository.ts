import emailjs from "@emailjs/browser";
import { getEmailEnvConfig } from "@/data/sources/email-env-source";
import { getProfile } from "@/data/repositories/profile-repository";

export interface ContactMessagePayload {
  readonly fromEmail: string;
  readonly message: string;
}

export const sendContactMessage = async (
  payload: ContactMessagePayload,
): Promise<void> => {
  const config = getEmailEnvConfig();
  if (!config) {
    throw new Error("EMAIL_CONFIG_MISSING");
  }

  const profile = getProfile();

  await emailjs.send(
    config.serviceId,
    config.templateId,
    {
      from_email: payload.fromEmail,
      message: payload.message,
      to_email: profile.email,
      from_name: "Portfolio Contact",
    },
    { publicKey: config.publicKey },
  );
};
