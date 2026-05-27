"use client";

import { Header } from "@/presentation/pages/header/Header";
import { HEADER_CONFIG } from "@/presentation/pages/header/HeaderConfig";
import { useHeaderNavigation } from "@/presentation/pages/header/hooks/useHeaderNavigation";

export function HeaderContainer() {
  const navigation = useHeaderNavigation();

  return (
    <Header
      activeItem={navigation.activeItem}
      scrolled={navigation.scrolled}
      mobileMenuOpen={navigation.mobileMenuOpen}
      navItems={HEADER_CONFIG.NAV_ITEMS}
      onToggleMobileMenu={navigation.onToggleMobileMenu}
      onCloseMobileMenu={navigation.onCloseMobileMenu}
    />
  );
}
