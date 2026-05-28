"use client";

import { Footer } from "@/presentation/pages/footer/Footer";
import { getFooterConfig } from "@/presentation/pages/footer/FooterConfig";
import { useI18n } from "@/presentation/i18n";

export function FooterContainer() {
  const { locale } = useI18n();
  const footerConfig = getFooterConfig(locale);

  return <Footer key={locale} footerConfig={footerConfig} />;
}
