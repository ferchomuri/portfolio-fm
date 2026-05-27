import { SECTION_IDS } from "@/domain/constants/sections";

export const CONTACT_CTA_CONFIG = {
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
  BOOT_LOG_DELAY_MS: 600,
  BOOT_READY_DELAY_MS: 1000,
  BOOT_LOGS: [
    "pinging portfolio-gateway... 200 OK",
    "mounting secure ssh-tunnel-layer... [DONE]",
    "establishing connection to edge node cluster...",
    "✔ channel established. boot sequence successful.",
  ] as const,
};
