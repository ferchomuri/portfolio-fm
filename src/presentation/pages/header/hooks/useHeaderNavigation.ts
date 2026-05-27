"use client";

import { useEffect, useState } from "react";
import { HEADER_CONFIG } from "@/presentation/pages/header/HeaderConfig";

export interface HeaderNavigationViewModel {
  readonly activeItem: string;
  readonly scrolled: boolean;
  readonly mobileMenuOpen: boolean;
  readonly onToggleMobileMenu: () => void;
  readonly onCloseMobileMenu: () => void;
}

export const useHeaderNavigation = (): HeaderNavigationViewModel => {
  const [activeItem, setActiveItem] = useState(HEADER_CONFIG.NAV_ITEMS[0].id);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > HEADER_CONFIG.SCROLL_THRESHOLD);

      const sections = HEADER_CONFIG.NAV_ITEMS.map((item) =>
        document.getElementById(item.id),
      );
      const scrollPosition =
        window.scrollY + window.innerHeight * HEADER_CONFIG.SCROLL_OFFSET_RATIO;

      for (let index = sections.length - 1; index >= 0; index -= 1) {
        const section = sections[index];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveItem(HEADER_CONFIG.NAV_ITEMS[index].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return {
    activeItem,
    scrolled,
    mobileMenuOpen,
    onToggleMobileMenu: () => setMobileMenuOpen((open) => !open),
    onCloseMobileMenu: () => setMobileMenuOpen(false),
  };
};
