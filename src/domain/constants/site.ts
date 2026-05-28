import { getSiteCopy } from "@/presentation/i18n/site-copy";
import { I18N_LOCALES } from "@/presentation/i18n";

const SITE_COPY_EN = getSiteCopy(I18N_LOCALES.EN);

/** Default English site copy for server components and metadata. */
export const SITE_COPY = SITE_COPY_EN;
