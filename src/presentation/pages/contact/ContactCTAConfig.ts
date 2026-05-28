import { SECTION_IDS } from "@/domain/constants/sections";
import { I18N_LOCALES, type Locale } from "@/presentation/i18n";

export interface ContactCTAConfig {
  readonly SECTION_ID: string;
  readonly EYEBROW: string;
  readonly TITLE: string;
  readonly DESCRIPTION: string;
  readonly CONSOLE_LABEL: string;
  readonly BOOT_COMMAND: string;
  readonly HANDSHAKE_WARNING: string;
  readonly EMAIL_LABEL: string;
  readonly EMAIL_PLACEHOLDER: string;
  readonly MESSAGE_LABEL: string;
  readonly MESSAGE_PLACEHOLDER: string;
  readonly SUBMIT_LABEL: string;
  readonly SUBMITTING_LABEL: string;
  readonly SUCCESS_TITLE: string;
  readonly SUCCESS_MESSAGE: string;
  readonly LINKEDIN_FALLBACK_LABEL: string;
  readonly CONFIG_ERROR: string;
  readonly SEND_ERROR: string;
  readonly BOOT_LOG_DELAY_MS: number;
  readonly BOOT_READY_DELAY_MS: number;
  readonly BOOT_LOGS: readonly string[];
}

const CONTACT_TIMING = {
  BOOT_LOG_DELAY_MS: 600,
  BOOT_READY_DELAY_MS: 1000,
} as const;

const CONTACT_CTA_CONFIG_EN: ContactCTAConfig = {
  SECTION_ID: SECTION_IDS.CONTACT,
  EYEBROW: "07 // SECURE COMMUNICATION PORTAL",
  TITLE: "Open Communication Channel",
  DESCRIPTION:
    "Submit a telemetry payload to establish a secure email pipeline. Responses average within 24 operational hours.",
  CONSOLE_LABEL: "Secure operator console",
  BOOT_COMMAND: "> sh boot-channel.sh",
  HANDSHAKE_WARNING:
    "Handshake protocol: RSA-4096 stream channel. Encrypting payloads.",
  EMAIL_LABEL: "Operator email address",
  EMAIL_PLACEHOLDER: "operator@system.io",
  MESSAGE_LABEL: "Transmission Payload",
  MESSAGE_PLACEHOLDER: "Write message details...",
  SUBMIT_LABEL: "BROADCAST SHIELD HANDSHAKE",
  SUBMITTING_LABEL: "TRANSMITTING...",
  SUCCESS_TITLE: "Transmission broadcasted successfully",
  SUCCESS_MESSAGE:
    "Secure handshake established. Payload received and cached inside my Edge network cluster. Talk to you soon!",
  LINKEDIN_FALLBACK_LABEL: "LinkedIn",
  CONFIG_ERROR:
    "Email pipeline is not configured yet. Missing NEXT_PUBLIC_EMAILJS_* environment variables.",
  SEND_ERROR: "Transmission failed. Please try again, or contact me via LinkedIn.",
  ...CONTACT_TIMING,
  BOOT_LOGS: [
    "pinging portfolio-gateway... 200 OK",
    "mounting secure ssh-tunnel-layer... [DONE]",
    "establishing connection to edge node cluster...",
    "✔ channel established. boot sequence successful.",
  ],
};

const CONTACT_CTA_CONFIG_ES: ContactCTAConfig = {
  SECTION_ID: SECTION_IDS.CONTACT,
  EYEBROW: "07 // PORTAL DE COMUNICACION SEGURA",
  TITLE: "Canal de Comunicacion Abierto",
  DESCRIPTION:
    "Envia un payload de telemetria para establecer un pipeline de email seguro. Respuestas promedio en 24 horas operativas.",
  CONSOLE_LABEL: "Consola segura del operador",
  BOOT_COMMAND: "> sh boot-channel.sh",
  HANDSHAKE_WARNING:
    "Protocolo handshake: canal RSA-4096. Encriptando payloads.",
  EMAIL_LABEL: "Email del operador",
  EMAIL_PLACEHOLDER: "operador@system.io",
  MESSAGE_LABEL: "Payload de Transmision",
  MESSAGE_PLACEHOLDER: "Escribe los detalles del mensaje...",
  SUBMIT_LABEL: "TRANSMITIR HANDSHAKE SHIELD",
  SUBMITTING_LABEL: "TRANSMITIENDO...",
  SUCCESS_TITLE: "Transmision enviada exitosamente",
  SUCCESS_MESSAGE:
    "Handshake seguro establecido. Payload recibido y cacheado en mi cluster Edge. ¡Hablamos pronto!",
  LINKEDIN_FALLBACK_LABEL: "LinkedIn",
  CONFIG_ERROR:
    "El pipeline de email no esta configurado. Faltan variables NEXT_PUBLIC_EMAILJS_*.",
  SEND_ERROR: "La transmision fallo. Intenta de nuevo o contactame por LinkedIn.",
  ...CONTACT_TIMING,
  BOOT_LOGS: [
    "ping a portfolio-gateway... 200 OK",
    "montando capa ssh-tunnel segura... [LISTO]",
    "estableciendo conexion al cluster edge...",
    "✔ canal establecido. secuencia de arranque exitosa.",
  ],
};

export const getContactCTAConfig = (locale: Locale): ContactCTAConfig => {
  if (locale === I18N_LOCALES.ES) {
    return CONTACT_CTA_CONFIG_ES;
  }
  return CONTACT_CTA_CONFIG_EN;
};

/** @deprecated Use getContactCTAConfig(locale). */
export const CONTACT_CTA_CONFIG = CONTACT_CTA_CONFIG_EN;
