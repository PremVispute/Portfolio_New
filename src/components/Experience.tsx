"use client";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaBriefcase, FaCalendar } from "react-icons/fa6";
import { useI18n } from "@/utils/helpers/I18nProvider";

const ROLE_ACCENTS = [
  "from-amber-500 to-orange-600",
  "from-indigo-500 to-fuchsia-500",
  "from-sky-500 to-blue-600",
] as const;

export default function Experience() {
  const { content } = useI18n();

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-24 scroll-mt-24"
    >
      <div className="text-center mb-12">
        <p className="font-din text-xs sm:text-sm tracking-[0.3em] text-slate-500 dark:text-slate-400">
          {content.experience.kicker}
        </p>
        <h2
          id="experience-heading"
          className="mt-2 font-din font-bold text-3xl sm:text-4xl md:text-5xl"
        >
          {content.experience.headingPre}{" "}
          <span className="gradient-text">
            {content.experience.headingAccent}
          </span>
        </h2>
        <p className="mt-3 font-din text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          {content.experience.subtitle}
        </p>
      </div>

      <ol className="relative space-y-6 md:space-y-8 md:pl-6 md:before:absolute md:before:left-2 md:before:top-2 md:before:bottom-2 md:before:w-px md:before:bg-gradient-to-b md:before:from-indigo-500/50 md:before:via-fuchsia-500/40 md:before:to-transparent">
        {content.experience.roles.map((role, index) => {
          const accent = ROLE_ACCENTS[index] ?? ROLE_ACCENTS[0];
          return (
            <li key={role.company} className="relative">
              <span
                aria-hidden="true"
                className={`hidden md:block absolute -left-[18px] top-6 h-3.5 w-3.5 rounded-full bg-gradient-to-br ${accent} ring-4 ring-white dark:ring-[#121212] shadow-md`}
              />
              <article className="glass-strong rounded-3xl p-5 md:p-7 relative overflow-hidden transition-transform duration-300 hover:-translate-y-0.5">
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent} opacity-60`}
                />

                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-din font-bold text-xl md:text-2xl text-slate-900 dark:text-white">
                        {role.company}
                      </h3>
                      {role.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 px-2.5 py-0.5 text-[11px] font-semibold font-din">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          </span>
                          {content.experience.current}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 inline-flex items-center gap-2 font-din text-sm font-semibold text-slate-700 dark:text-slate-200">
                      <FaBriefcase className="text-slate-400" />
                      {role.title}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs font-din text-slate-600 dark:text-slate-300">
                    <span className="inline-flex items-center gap-1.5 rounded-full glass px-2.5 py-1">
                      <FaCalendar className="text-indigo-500" />
                      {role.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full glass px-2.5 py-1">
                      <FaMapMarkerAlt className="text-fuchsia-500" />
                      {role.location}
                    </span>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-sm md:text-[15px] font-din text-slate-700 dark:text-slate-300 leading-relaxed">
                  {role.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span
                        aria-hidden="true"
                        className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-br ${accent}`}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {role.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-black/[0.08] dark:border-white/10 bg-white/40 dark:bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium font-din text-slate-700 dark:text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
