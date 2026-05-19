import ar from "./ar.json";
import de from "./de.json";
import en from "./en.json";
import es from "./es.json";
import fr from "./fr.json";
import ja from "./ja.json";
import zh from "./zh.json";

export type TextDirection = "ltr" | "rtl";

export type LocaleOption = {
  code: Locale;
  label: string;
  nativeName: string;
  shortLabel: string;
  direction: TextDirection;
  accent: string;
};

export type Content = typeof en;

export const localeOptions = [
  {
    code: "en",
    label: "English",
    nativeName: "English",
    shortLabel: "EN",
    direction: "ltr",
    accent: "from-sky-500 to-indigo-500",
  },
  {
    code: "ar",
    label: "Arabic",
    nativeName: "العربية",
    shortLabel: "AR",
    direction: "rtl",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    code: "fr",
    label: "French",
    nativeName: "Français",
    shortLabel: "FR",
    direction: "ltr",
    accent: "from-blue-500 to-rose-500",
  },
  {
    code: "es",
    label: "Spanish",
    nativeName: "Español",
    shortLabel: "ES",
    direction: "ltr",
    accent: "from-amber-500 to-red-500",
  },
  {
    code: "de",
    label: "German",
    nativeName: "Deutsch",
    shortLabel: "DE",
    direction: "ltr",
    accent: "from-zinc-700 to-amber-500",
  },
  {
    code: "zh",
    label: "Chinese",
    nativeName: "中文",
    shortLabel: "ZH",
    direction: "ltr",
    accent: "from-red-500 to-yellow-500",
  },
  {
    code: "ja",
    label: "Japanese",
    nativeName: "日本語",
    shortLabel: "JA",
    direction: "ltr",
    accent: "from-rose-500 to-slate-600",
  },
] as const;

export type Locale = "en" | "ar" | "fr" | "es" | "de" | "zh" | "ja";

export const defaultLocale: Locale = "en";

export const contentByLocale: Record<Locale, Content> = {
  en,
  ar,
  fr,
  es,
  de,
  zh,
  ja,
};

export function isLocale(value: string): value is Locale {
  return localeOptions.some((locale) => locale.code === value);
}

export function getLocaleOption(locale: Locale): LocaleOption {
  return (
    localeOptions.find((option) => option.code === locale) ?? localeOptions[0]
  );
}
