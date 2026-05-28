"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

export const I18N_LOCALES = {
  EN: "en",
  ES: "es",
} as const;

export type Locale = (typeof I18N_LOCALES)[keyof typeof I18N_LOCALES];

interface I18nContextValue {
  readonly locale: Locale;
  readonly setLocale: (locale: Locale) => void;
}

const I18N_STORAGE_KEY = "portfolio-locale";

const I18nContext = createContext<I18nContextValue | null>(null);

export interface I18nProviderProps {
  readonly children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(I18N_LOCALES.EN);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(I18N_STORAGE_KEY);
    if (storedLocale === I18N_LOCALES.EN || storedLocale === I18N_LOCALES.ES) {
      setLocaleState(storedLocale);
    }
    setIsHydrated(true);
  }, []);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(I18N_STORAGE_KEY, nextLocale);
    document.documentElement.lang = nextLocale;
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }
    document.documentElement.lang = locale;
    window.localStorage.setItem(I18N_STORAGE_KEY, locale);
  }, [isHydrated, locale]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
    }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
