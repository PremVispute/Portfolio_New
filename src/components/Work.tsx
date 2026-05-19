"use client";

import Image from "next/image";
import {
  FaGithub,
  FaArrowUpRightFromSquare,
  FaBrain,
  FaGem,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { useI18n } from "@/utils/helpers/I18nProvider";
import githubImg from "@/utils/images/githubImg.png";
import leetcodeImg from "@/utils/images/leetcodeImg.png";

type ProjectMeta = {
  stack: string[];
  icon: React.ReactNode;
  accent: string;
};

const PROJECT_META: ProjectMeta[] = [
  {
    stack: ["Python", "spaCy", "NLTK", "GoLang", "Node.js"],
    icon: <FaBrain />,
    accent: "from-indigo-500 to-fuchsia-500",
  },
  {
    stack: ["React", "Node.js", "PostgreSQL"],
    icon: <FaGem />,
    accent: "from-sky-500 to-cyan-500",
  },
];

type ProfileMeta = {
  href: string;
  image: typeof githubImg;
  imageAlt: string;
  icon: React.ReactNode;
  accent: string;
};

const PROFILE_META: ProfileMeta[] = [
  {
    href: "https://github.com/PremVispute",
    image: githubImg,
    imageAlt: "GitHub profile preview",
    icon: <FaGithub />,
    accent: "from-slate-700 to-slate-900",
  },
  {
    href: "https://leetcode.com/u/heisenbergOG/",
    image: leetcodeImg,
    imageAlt: "LeetCode profile preview",
    icon: <SiLeetcode />,
    accent: "from-amber-500 to-orange-600",
  },
];

export default function Work() {
  const { content } = useI18n();

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="py-24 scroll-mt-24"
    >
      <div className="text-center mb-10">
        <p className="font-din text-xs sm:text-sm tracking-[0.3em] text-slate-500 dark:text-slate-400">
          {content.work.kicker}
        </p>
        <h2
          id="work-heading"
          className="mt-2 font-din font-bold text-3xl sm:text-4xl md:text-5xl"
        >
          {content.work.headingPre}{" "}
          <span className="gradient-text">{content.work.headingAccent}</span>
        </h2>
        <p className="mt-3 font-din text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          {content.work.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {content.work.projects.map((project, index) => {
          const meta = PROJECT_META[index] ?? PROJECT_META[0];
          return (
            <article
              key={project.title}
              className="group relative glass-strong rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${meta.accent} opacity-70`}
              />
              <div
                aria-hidden="true"
                className={`absolute inset-0 bg-gradient-to-br ${meta.accent} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`}
              />

              <div className="relative p-6 flex items-start gap-4">
                <div
                  className={`h-11 w-11 flex-shrink-0 rounded-xl bg-gradient-to-br ${meta.accent} text-white flex items-center justify-center shadow-md text-lg`}
                >
                  {meta.icon}
                </div>
                <div className="min-w-0">
                  <span className="font-din text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    {project.badge}
                  </span>
                  <h3 className="mt-1 font-din font-bold text-lg md:text-xl text-slate-900 dark:text-white leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-din text-sm text-slate-600 dark:text-slate-300">
                    {project.tagline}
                  </p>
                </div>
              </div>

              <div className="relative px-6 pb-6 space-y-3 font-din text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-slate-500 dark:text-slate-400">
                    {content.work.labels.problem}
                  </p>
                  <p className="mt-1">{project.problem}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-slate-500 dark:text-slate-400">
                    {content.work.labels.build}
                  </p>
                  <p className="mt-1">{project.build}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {meta.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-black/[0.08] dark:border-white/10 bg-white/40 dark:bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-12">
        <p className="text-center font-din text-xs sm:text-sm tracking-[0.3em] text-slate-500 dark:text-slate-400">
          {content.work.labels.alsoOn}
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.work.profiles.map((profile, index) => {
            const meta = PROFILE_META[index] ?? PROFILE_META[0];
            return (
              <a
                key={profile.title}
                href={meta.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={content.work.labels.openIn.replace(
                  "{name}",
                  profile.title,
                )}
                className="group relative block glass rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 bg-gradient-to-br ${meta.accent} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`}
                />

                <div className="relative p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-10 w-10 rounded-xl bg-gradient-to-br ${meta.accent} text-white flex items-center justify-center shadow-md`}
                    >
                      {meta.icon}
                    </div>
                    <div>
                      <h3 className="font-din font-bold text-base text-slate-900 dark:text-white">
                        {profile.title}
                      </h3>
                      <span className="font-din text-xs text-slate-500 dark:text-slate-400">
                        {content.work.labels.profile}
                      </span>
                    </div>
                  </div>
                  <FaArrowUpRightFromSquare className="text-slate-500 dark:text-slate-400 group-hover:text-indigo-500 transition-colors" />
                </div>

                <div className="relative px-5 pb-5">
                  <p className="font-din text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {profile.description}
                  </p>
                  <div className="mt-4 rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/10 bg-white/40 dark:bg-white/[0.02]">
                    <Image
                      src={meta.image}
                      alt={meta.imageAlt}
                      className="w-full h-auto opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                      unoptimized
                    />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
