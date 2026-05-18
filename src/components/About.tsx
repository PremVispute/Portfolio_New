import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa6";
import profileImg from "@/utils/images/79bd2eba-2ca0-4c9e-84c6-d4d02227937d.webp";

const STATS = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "10+", label: "Technologies" },
];

const TAGS = ["React", "Next.js", "TypeScript", "Node.js", "Python", "MongoDB"];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 scroll-mt-24"
    >
      <div className="text-center mb-10">
        <p className="font-din text-xs sm:text-sm tracking-[0.3em] text-slate-500 dark:text-slate-400">
          ABOUT ME
        </p>
        <h2
          id="about-heading"
          className="mt-2 font-din font-bold text-3xl sm:text-4xl md:text-5xl"
        >
          A bit <span className="gradient-text">about me</span>
        </h2>
      </div>

      <div className="glass-strong rounded-3xl p-6 md:p-10 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
        />

        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 -m-1 rounded-full conic-ring blur-[1px]" />
            <div className="relative rounded-full p-[3px] bg-slate-900 dark:bg-black">
              <Image
                src={profileImg}
                alt="Prem Vispute profile photo"
                width={148}
                height={148}
                className="rounded-full object-cover"
                unoptimized
                priority
              />
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-din font-bold text-2xl md:text-3xl text-slate-900 dark:text-white">
              Prem Vispute
            </h3>
            <p className="mt-1 text-sm font-semibold font-din tracking-widest gradient-text">
              FRONT-END · FULL-STACK · AI / ML
            </p>

            <p className="mt-4 text-slate-700 dark:text-slate-300 font-din leading-relaxed">
              A professional merging creativity and technology. I primarily work
              with the{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                MERN stack
              </span>{" "}
              and have a growing focus on AI/ML. When I&apos;m not building
              things, I&apos;m travelling or down a YouTube rabbit hole on the
              latest tech.
            </p>

            <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-3 text-sm font-din text-slate-700 dark:text-slate-300">
              <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5">
                <FaMapMarkerAlt className="text-indigo-500" />
                Mumbai, India
              </span>
              <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5">
                <FaBriefcase className="text-fuchsia-500" />
                Full-stack Developer
              </span>
              <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5">
                <FaGraduationCap className="text-sky-500" />
                CS Graduate
              </span>
            </div>

            <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-2">
              {TAGS.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-black/[0.08] dark:border-white/10 bg-white/40 dark:bg-white/[0.03] px-3 py-1 text-xs font-medium font-din text-slate-700 dark:text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative mt-10 grid grid-cols-3 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-4 text-center">
              <p className="font-din font-bold text-2xl md:text-3xl gradient-text">
                {s.value}
              </p>
              <p className="mt-1 text-xs sm:text-sm font-din text-slate-600 dark:text-slate-400">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
