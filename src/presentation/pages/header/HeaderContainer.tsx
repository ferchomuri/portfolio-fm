"use client";

import { Header } from "@/presentation/pages/header/Header";
import { getHeaderConfig } from "@/presentation/pages/header/HeaderConfig";
import { useHeaderNavigation } from "@/presentation/pages/header/hooks/useHeaderNavigation";
import { useI18n } from "@/presentation/i18n";

export function HeaderContainer() {
  const navigation = useHeaderNavigation();
  const { locale, setLocale } = useI18n();
  const headerConfig = getHeaderConfig(locale);

  return (
    <Header
      headerConfig={headerConfig}
      activeItem={navigation.activeItem}
      scrolled={navigation.scrolled}
      mobileMenuOpen={navigation.mobileMenuOpen}
      navItems={headerConfig.NAV_ITEMS}
      locale={locale}
      onToggleMobileMenu={navigation.onToggleMobileMenu}
      onCloseMobileMenu={navigation.onCloseMobileMenu}
      onLocaleChange={setLocale}
    />
  );
}
