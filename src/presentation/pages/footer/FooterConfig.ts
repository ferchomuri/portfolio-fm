import { getCurrentYear } from "@/domain/services/get-current-year";
import { I18N_LOCALES, type Locale } from "@/presentation/i18n";

export interface FooterConfig {
  readonly BRAND: string;
  readonly COPYRIGHT_NAME: string;
  readonly ENVIRONMENT_LABEL: string;
  readonly ENVIRONMENT_VALUE: string;
  readonly LIGHTHOUSE_LABEL: string;
  readonly LIGHTHOUSE_VALUE: string;
  readonly BUILD_LABEL: string;
  readonly BUILD_VALUE: string;
  readonly YEAR: number;
}

const FOOTER_CONFIG_EN: FooterConfig = {
  BRAND: "PLATFORM // ARCH PORTFOLIO",
  COPYRIGHT_NAME: "FERNANDO MURILLO",
  ENVIRONMENT_LABEL: "Environment",
  ENVIRONMENT_VALUE: "NextJS // V8 ENGINE",
  LIGHTHOUSE_LABEL: "Lighthouse score",
  LIGHTHOUSE_VALUE: "100 // PERFECT",
  BUILD_LABEL: "Build status",
  BUILD_VALUE: "PASSING",
  YEAR: getCurrentYear(),
};

const FOOTER_CONFIG_ES: FooterConfig = {
  BRAND: "PLATAFORMA // ARCH PORTFOLIO",
  COPYRIGHT_NAME: "FERNANDO MURILLO",
  ENVIRONMENT_LABEL: "Entorno",
  ENVIRONMENT_VALUE: "NextJS // MOTOR V8",
  LIGHTHOUSE_LABEL: "Puntuacion Lighthouse",
  LIGHTHOUSE_VALUE: "100 // PERFECTO",
  BUILD_LABEL: "Estado del build",
  BUILD_VALUE: "APROBADO",
  YEAR: getCurrentYear(),
};

export const getFooterConfig = (locale: Locale): FooterConfig => {
  if (locale === I18N_LOCALES.ES) {
    return FOOTER_CONFIG_ES;
  }
  return FOOTER_CONFIG_EN;
};

/** @deprecated Use getFooterConfig(locale). */
export const FOOTER_CONFIG = FOOTER_CONFIG_EN;
