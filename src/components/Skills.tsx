"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaDownload, FaEye } from "react-icons/fa";
import {
  FaMoon,
  FaSun,
  FaCode,
  FaServer,
  FaToolbox,
  FaBrain,
} from "react-icons/fa6";
import { useI18n } from "@/utils/helpers/I18nProvider";
import SkillsCarousel from "./ui/SkillsCarousel";

type CategoryStyle = {
  icon: React.ReactNode;
  accent: string;
};

const CATEGORY_STYLES: CategoryStyle[] = [
  {
    icon: <FaCode />,
    accent: "from-indigo-500 to-sky-500",
  },
  {
    icon: <FaServer />,
    accent: "from-emerald-500 to-teal-500",
  },
  {
    icon: <FaToolbox />,
    accent: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: <FaBrain />,
    accent: "from-amber-500 to-rose-500",
  },
];

export default function Skills() {
  const { content } = useI18n();
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const current = mounted
    ? theme === "system"
      ? resolvedTheme
      : theme
    : undefined;
  const isDark = current === "dark";

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24 scroll-mt-24"
    >
      <div className="text-center mb-10">
        <p className="font-din text-xs sm:text-sm tracking-[0.3em] text-slate-500 dark:text-slate-400">
          {content.skills.kicker}
        </p>
        <h2
          id="skills-heading"
          className="mt-2 font-din font-bold text-3xl sm:text-4xl md:text-5xl"
        >
          {content.skills.headingPre}{" "}
          <span className="gradient-text">{content.skills.headingAccent}</span>
        </h2>
      </div>

      {/* Toolbar: resume + theme */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 glass rounded-2xl p-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white">
            <FaDownload />
          </div>
          <div>
            <p className="font-din font-semibold text-slate-900 dark:text-white">
              {content.skills.resume.title}
            </p>
            <p className="font-din text-xs text-slate-600 dark:text-slate-400">
              {content.skills.resume.subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/Portfolio_New/Prem_Vispute_Resume.pdf"
            download
            aria-label={content.skills.resume.downloadAria}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium font-din text-white bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-400 hover:to-fuchsia-400 shadow-md shadow-indigo-500/25 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
          >
            <FaDownload /> {content.skills.resume.download}
          </a>
          <a
            href="/Portfolio_New/Prem_Vispute_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={content.skills.resume.previewAria}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium font-din text-slate-700 dark:text-slate-100 glass hover:bg-white/40 dark:hover:bg-white/[0.08] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            <FaEye /> {content.skills.resume.preview}
          </a>

          {/* Theme switch */}
          <div
            role="radiogroup"
            aria-label={content.skills.resume.themeGroup}
            className="relative inline-flex items-center rounded-full glass p-1"
          >
            <button
              type="button"
              role="radio"
              aria-checked={mounted ? !isDark : false}
              aria-label={content.skills.resume.lightLabel}
              onClick={() => setTheme("light")}
              className={`relative z-10 h-8 w-8 rounded-full flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                mounted && !isDark
                  ? "text-white"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {mounted && !isDark && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-md"
                />
              )}
              <FaSun className="relative" />
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={mounted ? isDark : false}
              aria-label={content.skills.resume.darkLabel}
              onClick={() => setTheme("dark")}
              className={`relative z-10 h-8 w-8 rounded-full flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                mounted && isDark
                  ? "text-white"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {mounted && isDark && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 shadow-md"
                />
              )}
              <FaMoon className="relative" />
            </button>
          </div>
        </div>
      </div>

      {/* Category grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {content.skills.categories.map((category, index) => {
          const style = CATEGORY_STYLES[index] ?? CATEGORY_STYLES[0];
          return (
            <div
              key={category.title}
              className="group relative glass rounded-2xl p-5 overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                aria-hidden="true"
                className={`absolute -top-12 -right-12 h-28 w-28 rounded-full bg-gradient-to-br ${style.accent} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-300`}
              />
              <div
                className={`relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${style.accent} text-white shadow-md`}
              >
                {style.icon}
              </div>
              <h3 className="relative mt-4 font-din font-semibold text-lg text-slate-900 dark:text-white">
                {category.title}
              </h3>
              <ul className="relative mt-2 flex flex-wrap gap-1.5">
                {category.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-md border border-black/[0.08] dark:border-white/10 bg-white/40 dark:bg-white/[0.03] px-2 py-0.5 text-xs font-din text-slate-700 dark:text-slate-200"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Carousel */}
      <h3 className="text-center text-base sm:text-lg font-semibold font-din mt-12 mb-3 text-slate-600 dark:text-slate-300">
        {content.skills.carouselTitle}
      </h3>
      <SkillsCarousel />
    </section>
  );
}
