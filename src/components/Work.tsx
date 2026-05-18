import Image from "next/image";
import { FaGithub, FaCode, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import githubImg from "@/utils/images/githubImg.png";
import leetcodeImg from "@/utils/images/leetcodeImg.png";

type Project = {
  title: string;
  description: string;
  href: string;
  image: typeof githubImg;
  imageAlt: string;
  badge: string;
  icon: React.ReactNode;
  accent: string;
};

const PROJECTS: Project[] = [
  {
    title: "GitHub",
    description:
      "Open-source work, side-projects, and experiments — from MERN apps to ML notebooks.",
    href: "https://github.com/PremVispute",
    image: githubImg,
    imageAlt: "GitHub profile preview",
    badge: "Profile",
    icon: <FaGithub />,
    accent: "from-slate-700 to-slate-900",
  },
  {
    title: "LeetCode",
    description:
      "DSA practice — daily problem-solving across arrays, graphs, DP and more.",
    href: "https://leetcode.com/u/heisenbergOG/",
    image: leetcodeImg,
    imageAlt: "LeetCode profile preview",
    badge: "DSA",
    icon: <SiLeetcode />,
    accent: "from-amber-500 to-orange-600",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="py-24 scroll-mt-24"
    >
      <div className="text-center mb-10">
        <p className="font-din text-xs sm:text-sm tracking-[0.3em] text-slate-500 dark:text-slate-400">
          PORTFOLIO
        </p>
        <h2
          id="work-heading"
          className="mt-2 font-din font-bold text-3xl sm:text-4xl md:text-5xl"
        >
          Check out my <span className="gradient-text">work</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${p.title} in new tab`}
            className="group relative block glass-strong rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            <div
              aria-hidden="true"
              className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
            />

            <div className="relative p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`h-10 w-10 rounded-xl bg-gradient-to-br ${p.accent} text-white flex items-center justify-center shadow-md`}
                >
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-din font-bold text-lg text-slate-900 dark:text-white">
                    {p.title}
                  </h3>
                  <span className="font-din text-xs text-slate-500 dark:text-slate-400">
                    {p.badge}
                  </span>
                </div>
              </div>
              <FaArrowUpRightFromSquare className="text-slate-500 dark:text-slate-400 group-hover:text-indigo-500 transition-colors" />
            </div>

            <div className="relative px-5">
              <p className="font-din text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {p.description}
              </p>
            </div>

            <div className="relative mt-4 px-5 pb-5">
              <div className="rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/10 bg-white/40 dark:bg-white/[0.02]">
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  className="w-full h-auto opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                  unoptimized
                />
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href="https://github.com/PremVispute?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold font-din text-slate-700 dark:text-slate-100 glass hover:bg-white/40 dark:hover:bg-white/[0.08] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
        >
          <FaCode />
          Browse all repositories
        </a>
      </div>
    </section>
  );
}
