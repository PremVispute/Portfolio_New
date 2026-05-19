"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  contentByLocale,
  defaultLocale,
  getLocaleOption,
  isLocale,
  localeOptions,
  type Content,
  type Locale,
  type LocaleOption,
  type TextDirection,
} from "@/content";

type I18nContextValue = {
  content: Content;
  direction: TextDirection;
  locale: Locale;
  localeOption: LocaleOption;
  locales: readonly LocaleOption[];
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);
const storageKey = "prem-vispute-locale";

function getBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return defaultLocale;

  const candidates = navigator.languages.length
    ? navigator.languages
    : [navigator.language];

  for (const language of candidates) {
    const normalized = language.toLowerCase().split("-")[0];
    if (isLocale(normalized)) return normalized;
  }

  return defaultLocale;
}

export default function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(storageKey);
    setLocaleState(
      savedLocale && isLocale(savedLocale) ? savedLocale : getBrowserLocale(),
    );
  }, []);

  const content = contentByLocale[locale];
  const localeOption = getLocaleOption(locale);
  const direction = localeOption.direction;

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
    document.title = content.meta.title;

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (description) description.content = content.meta.description;

    window.localStorage.setItem(storageKey, locale);
  }, [content.meta.description, content.meta.title, direction, locale]);

  const value = useMemo<I18nContextValue>(
    () => ({
      content,
      direction,
      locale,
      localeOption,
      locales: localeOptions,
      setLocale: setLocaleState,
    }),
    [content, direction, locale, localeOption],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }

  return context;
}
