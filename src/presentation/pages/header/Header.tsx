"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Terminal, Menu, X } from "lucide-react";
import {
  buildSectionHref,
  type HeaderConfig,
  type HeaderNavItem,
} from "@/presentation/pages/header/HeaderConfig";
import { I18N_LOCALES, type Locale } from "@/presentation/i18n";

export interface HeaderProps {
  readonly headerConfig: HeaderConfig;
  readonly activeItem: string;
  readonly scrolled: boolean;
  readonly mobileMenuOpen: boolean;
  readonly navItems: readonly HeaderNavItem[];
  readonly locale: Locale;
  readonly onToggleMobileMenu: () => void;
  readonly onCloseMobileMenu: () => void;
  readonly onLocaleChange: (locale: Locale) => void;
}

export function Header({
  headerConfig,
  activeItem,
  scrolled,
  mobileMenuOpen,
  navItems,
  locale,
  onToggleMobileMenu,
  onCloseMobileMenu,
  onLocaleChange,
}: HeaderProps) {
  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/30 py-3"
            : "bg-transparent"
        }`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={headerConfig.HEADER_ANIMATION}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
            <Cpu className="h-5 w-5" />
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="truncate font-mono text-sm font-semibold tracking-wider text-zinc-100">
              {headerConfig.BRAND}
            </span>
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 font-medium">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              {headerConfig.STATUS}
            </div>
          </div>
        </div>

        <nav
          key={locale}
          className="hidden md:flex items-center gap-1 rounded-full border border-zinc-800/40 bg-zinc-900/50 p-1.5 backdrop-blur-sm"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <a
                key={item.id}
                href={buildSectionHref(item.id)}
                className={`relative flex min-h-11 items-center px-4 py-2.5 font-mono text-xs transition-colors duration-200 ${
                  isActive ? "text-zinc-50" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 z-[-1] rounded-full bg-indigo-500/10 border border-indigo-500/30"
                    transition={headerConfig.NAV_SPRING}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:flex items-center rounded-full border border-zinc-800/40 bg-zinc-900/50 p-1">
            <button
              type="button"
              onClick={() => onLocaleChange(I18N_LOCALES.EN)}
              className={`min-h-9 rounded-full px-3 font-mono text-[10px] font-bold transition-colors ${
                locale === I18N_LOCALES.EN
                  ? "bg-indigo-500/20 text-indigo-300"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
              aria-pressed={locale === I18N_LOCALES.EN}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onLocaleChange(I18N_LOCALES.ES)}
              className={`min-h-9 rounded-full px-3 font-mono text-[10px] font-bold transition-colors ${
                locale === I18N_LOCALES.ES
                  ? "bg-indigo-500/20 text-indigo-300"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
              aria-pressed={locale === I18N_LOCALES.ES}
            >
              ES
            </button>
          </div>

          <a
            href={headerConfig.CONTACT_HASH}
            className="hidden sm:flex min-h-11 items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2.5 font-mono text-xs font-semibold text-zinc-300 transition-all duration-200 hover:border-indigo-500/50 hover:text-zinc-50 hover:bg-zinc-900"
            data-cursor="pointer"
          >
            <Terminal className="h-3.5 w-3.5 text-indigo-400" />
            <span>{headerConfig.CONNECT_LABEL}</span>
          </a>

          <button
            type="button"
            onClick={onToggleMobileMenu}
            className="flex md:hidden min-h-11 min-w-11 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950/80 text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-50"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              aria-label="Close navigation menu"
              onClick={onCloseMobileMenu}
            />
            <motion.nav
              id="mobile-nav-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={headerConfig.MOBILE_SPRING}
              className="fixed top-0 right-0 z-50 flex h-full w-[min(100vw-3rem,20rem)] flex-col border-l border-zinc-800/40 bg-zinc-950/95 px-6 pb-8 pt-24 backdrop-blur-md md:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-1">
                <div className="mb-4 flex items-center rounded-full border border-zinc-800/40 bg-zinc-900/50 p-1">
                  <button
                    type="button"
                    onClick={() => onLocaleChange(I18N_LOCALES.EN)}
                    className={`min-h-10 flex-1 rounded-full font-mono text-[10px] font-bold transition-colors ${
                      locale === I18N_LOCALES.EN
                        ? "bg-indigo-500/20 text-indigo-300"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                    aria-pressed={locale === I18N_LOCALES.EN}
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    onClick={() => onLocaleChange(I18N_LOCALES.ES)}
                    className={`min-h-10 flex-1 rounded-full font-mono text-[10px] font-bold transition-colors ${
                      locale === I18N_LOCALES.ES
                        ? "bg-indigo-500/20 text-indigo-300"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                    aria-pressed={locale === I18N_LOCALES.ES}
                  >
                    ES
                  </button>
                </div>

                {navItems.map((item) => {
                  const isActive = activeItem === item.id;
                  return (
                    <a
                      key={item.id}
                      href={buildSectionHref(item.id)}
                      onClick={onCloseMobileMenu}
                      className={`flex min-h-11 items-center rounded-lg px-4 py-3 font-mono text-sm transition-colors ${
                        isActive
                          ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/30"
                          : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>

              <a
                href={headerConfig.CONTACT_HASH}
                onClick={onCloseMobileMenu}
                className="mt-6 flex min-h-11 items-center justify-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-600 px-4 py-3 font-mono text-xs font-bold text-white transition-colors hover:bg-indigo-500"
              >
                <Terminal className="h-4 w-4" />
                <span>{headerConfig.CONNECT_LABEL}</span>
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
