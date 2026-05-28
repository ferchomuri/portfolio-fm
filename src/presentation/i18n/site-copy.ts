import { I18N_LOCALES, type Locale } from "@/presentation/i18n";

export interface SiteCopy {
  readonly METADATA_DESCRIPTION: string;
  readonly PLATFORM_BRAND: string;
  readonly PLATFORM_STATUS: string;
  readonly FOOTER_BRAND: string;
  readonly FOOTER_ENVIRONMENT: string;
  readonly FOOTER_LIGHTHOUSE: string;
  readonly FOOTER_BUILD_STATUS: string;
  readonly LAYOUT_SHELL_CLASS: string;
}

const SITE_COPY_EN: SiteCopy = {
  METADATA_DESCRIPTION:
    "Fernando Murillo's portfolio: Senior Frontend Engineer with 6 years of experience in banking, e-commerce, and enterprise systems. Specialist in microfrontends, clean architecture, and AI-assisted workflows.",
  PLATFORM_BRAND: "PLATFORM // ARCH",
  PLATFORM_STATUS: "SYSTEM.ACTIVE",
  FOOTER_BRAND: "PLATFORM // ARCH PORTFOLIO",
  FOOTER_ENVIRONMENT: "NextJS // V8 ENGINE",
  FOOTER_LIGHTHOUSE: "100 // PERFECT",
  FOOTER_BUILD_STATUS: "PASSING",
  LAYOUT_SHELL_CLASS:
    "flex min-h-screen flex-col bg-zinc-950 font-sans antialiased text-zinc-50 relative selection:bg-indigo-500/30 selection:text-indigo-200",
};

const SITE_COPY_ES: SiteCopy = {
  METADATA_DESCRIPTION:
    "Portfolio de Fernando Murillo: Ingeniero Frontend Senior con 6 años de experiencia en banca, e-commerce y sistemas enterprise. Especialista en microfrontends, arquitectura limpia y workflows asistidos por IA.",
  PLATFORM_BRAND: "PLATAFORMA // ARCH",
  PLATFORM_STATUS: "SISTEMA.ACTIVO",
  FOOTER_BRAND: "PLATAFORMA // ARCH PORTFOLIO",
  FOOTER_ENVIRONMENT: "NextJS // MOTOR V8",
  FOOTER_LIGHTHOUSE: "100 // PERFECTO",
  FOOTER_BUILD_STATUS: "APROBADO",
  LAYOUT_SHELL_CLASS: SITE_COPY_EN.LAYOUT_SHELL_CLASS,
};

export const getSiteCopy = (locale: Locale): SiteCopy => {
  if (locale === I18N_LOCALES.ES) {
    return SITE_COPY_ES;
  }
  return SITE_COPY_EN;
};
