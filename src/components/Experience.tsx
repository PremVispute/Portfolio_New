import { FaMapMarkerAlt } from "react-icons/fa";
import { FaBriefcase, FaCalendar } from "react-icons/fa6";

type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  current?: boolean;
  bullets: string[];
  stack: string[];
  accent: string;
};

const ROLES: Role[] = [
  {
    company: "Omnis Solutio",
    title: "Full-Stack Engineer",
    period: "Nov 2025 — Present",
    location: "Dubai, UAE",
    current: true,
    bullets: [
      "Building the merchant ecosystem for a payment gateway — dashboards, checkout, SDKs and CMS integrations used by businesses for online payments.",
      "Designed a backend-driven frontend with a configurable theming layer so branding (logo, font, colors) and most UI changes ship via config — no frontend redeploys.",
      "Researched plugin ecosystems across WooCommerce, WordPress, Shopify and Wix; proposed a scalable implementation strategy.",
      "Shipped the company's global web platform with localization and region-specific content across 6 countries.",
    ],
    stack: ["TypeScript", "React", "Node.js", "JavaScript"],
    accent: "from-amber-500 to-orange-600",
  },
  {
    company: "Golden Legand Leasing & Finance",
    title: "Full-Stack Engineer",
    period: "Jul 2024 — Nov 2025",
    location: "Mumbai, India",
    bullets: [
      "Led full-stack development of 4+ enterprise web platforms in React, TypeScript and Next.js with a focus on responsive, high-performance UI.",
      "Built backend REST APIs in Java and PostgreSQL powering a Loan Management System (LMS) and secure payment gateway integrations.",
      "Audited and refactored large portions of the codebase across 3 projects — structure, readability, modern best practices.",
      "Mentored 10 engineers on React and Git workflows; authored internal best-practice docs to improve onboarding.",
    ],
    stack: ["TypeScript", "React", "Next.js", "Node.js", "Java", "PostgreSQL"],
    accent: "from-indigo-500 to-fuchsia-500",
  },
  {
    company: "M2P Fintech",
    title: "SDE 1",
    period: "Jul 2022 — Jul 2024",
    location: "Mumbai, India",
    bullets: [
      "Optimized the UI of the Core Banking System (CBS) application for Turing 3.0 using EJS, JavaScript and jQuery.",
      "Led the Turing 3.0 → React migration and built a drag-and-drop form builder that let non-React users create forms independently, cutting UI dev time.",
      "Led a team of 5 designing Turing 4.0's UI; contributed to backend services in Java and MySQL.",
    ],
    stack: ["React", "Node.js", "Java", "MySQL", "jQuery"],
    accent: "from-sky-500 to-blue-600",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-24 scroll-mt-24"
    >
      <div className="text-center mb-12">
        <p className="font-din text-xs sm:text-sm tracking-[0.3em] text-slate-500 dark:text-slate-400">
          EXPERIENCE
        </p>
        <h2
          id="experience-heading"
          className="mt-2 font-din font-bold text-3xl sm:text-4xl md:text-5xl"
        >
          Where I&apos;ve <span className="gradient-text">shipped</span>
        </h2>
        <p className="mt-3 font-din text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          Four years across three FinTech companies in India and the UAE.
        </p>
      </div>

      <ol className="relative space-y-6 md:space-y-8 md:pl-6 md:before:absolute md:before:left-2 md:before:top-2 md:before:bottom-2 md:before:w-px md:before:bg-gradient-to-b md:before:from-indigo-500/50 md:before:via-fuchsia-500/40 md:before:to-transparent">
        {ROLES.map((role) => (
          <li key={role.company} className="relative">
            <span
              aria-hidden="true"
              className={`hidden md:block absolute -left-[18px] top-6 h-3.5 w-3.5 rounded-full bg-gradient-to-br ${role.accent} ring-4 ring-white dark:ring-[#121212] shadow-md`}
            />
            <article className="glass-strong rounded-3xl p-5 md:p-7 relative overflow-hidden transition-transform duration-300 hover:-translate-y-0.5">
              <div
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${role.accent} opacity-60`}
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
                        Current
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
                      className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-br ${role.accent}`}
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
        ))}
      </ol>
    </section>
  );
}
