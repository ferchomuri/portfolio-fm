import { SITE_COPY } from "@/domain/constants/site";
import { getCurrentYear } from "@/domain/services/get-current-year";

export const FOOTER_CONFIG = {
  BRAND: SITE_COPY.FOOTER_BRAND,
  COPYRIGHT_NAME: "FERNANDO MURILLO",
  ENVIRONMENT_LABEL: "Environment",
  ENVIRONMENT_VALUE: SITE_COPY.FOOTER_ENVIRONMENT,
  LIGHTHOUSE_LABEL: "Lighthouse score",
  LIGHTHOUSE_VALUE: SITE_COPY.FOOTER_LIGHTHOUSE,
  BUILD_LABEL: "Build status",
  BUILD_VALUE: SITE_COPY.FOOTER_BUILD_STATUS,
  YEAR: getCurrentYear(),
};
