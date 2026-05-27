export interface EmailEnvConfig {
  readonly serviceId: string;
  readonly templateId: string;
  readonly publicKey: string;
}

export const getEmailEnvConfig = (): EmailEnvConfig | null => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return null;
  }

  return { serviceId, templateId, publicKey };
};
