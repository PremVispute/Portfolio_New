"use client";

import { useEffect, useRef, useState } from "react";
import { FaCheck, FaChevronDown, FaGlobe } from "react-icons/fa6";
import { useI18n } from "@/utils/helpers/I18nProvider";
import type { Locale } from "@/content";

export default function LanguageSwitcher() {
  const { content, direction, locale, localeOption, locales, setLocale } =
    useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelect = (nextLocale: Locale) => {
    setLocale(nextLocale);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative flex-shrink-0">
      <button
        type="button"
        aria-label={content.language.label}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((value) => !value)}
        className="group relative inline-flex h-10 items-center gap-2 rounded-full glass px-2.5 text-xs font-semibold font-din text-slate-800 dark:text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/70 dark:hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
      >
        <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full overflow-hidden text-white shadow-md">
          <span
            aria-hidden="true"
            className={`absolute inset-0 bg-gradient-to-br ${localeOption.accent}`}
          />
          <FaGlobe className="relative text-[13px]" />
        </span>
        <span className="hidden sm:inline min-w-6 text-center">
          {localeOption.shortLabel}
        </span>
        <FaChevronDown
          aria-hidden="true"
          className={`hidden sm:block text-[10px] text-slate-500 dark:text-slate-300 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute top-full mt-3 w-72 max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl glass-strong shadow-2xl shadow-indigo-500/10 transition-all duration-300 ${
          direction === "rtl"
            ? "left-0 origin-top-left"
            : "right-0 origin-top-right"
        } ${
          open
            ? "translate-y-0 scale-100 opacity-100 pointer-events-auto"
            : "-translate-y-2 scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-500"
        />
        <div className="p-3">
          <p className="px-2 pb-2 font-din text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
            {content.language.title}
          </p>
          <div
            role="listbox"
            aria-label={content.language.label}
            className="grid gap-1.5"
          >
            {locales.map((option) => {
              const selected = option.code === locale;
              return (
                <button
                  key={option.code}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => handleSelect(option.code)}
                  className={`group/item relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left font-din transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                    selected
                      ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                      : "text-slate-700 hover:bg-white/70 dark:text-slate-200 dark:hover:bg-white/[0.08]"
                  }`}
                >
                  <span className="relative inline-flex h-8 w-8 flex-shrink-0 items-center justify-center overflow-hidden rounded-full text-[11px] font-bold text-white shadow-md">
                    <span
                      aria-hidden="true"
                      className={`absolute inset-0 bg-gradient-to-br ${option.accent}`}
                    />
                    <span className="relative">{option.shortLabel}</span>
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold leading-tight">
                      {option.nativeName}
                    </span>
                    <span
                      className={`block text-xs leading-tight ${
                        selected
                          ? "text-white/70 dark:text-slate-700"
                          : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {option.label}
                    </span>
                  </span>
                  {selected && (
                    <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/15 dark:bg-slate-950/10">
                      <FaCheck aria-hidden="true" className="text-xs" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
