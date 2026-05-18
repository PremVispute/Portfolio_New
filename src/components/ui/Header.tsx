"use client";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => !!el,
    );
    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/60 dark:bg-black/40 border-b border-black/[0.06] dark:border-white/[0.08] backdrop-blur-xl"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <a
          href="#top"
          className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-md"
          aria-label="Prem Vispute — home"
        >
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg glass overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-sky-500 opacity-90" />
            <span className="relative font-din font-bold text-white text-sm">
              PV
            </span>
          </span>
          <h1 className="hidden sm:block text-base md:text-lg font-bold font-din tracking-tight text-slate-900 dark:text-white">
            PREM <span className="gradient-text">VISPUTE</span>
          </h1>
        </a>

        <nav aria-label="Primary" className="flex items-center">
          <ul className="flex items-center gap-1 rounded-full glass px-1.5 py-1.5">
            {SECTIONS.map((s) => {
              const isActive = active === s.id;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative inline-flex items-center px-3 md:px-4 py-1.5 text-xs md:text-sm font-medium font-din rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                      isActive
                        ? "text-white"
                        : "text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 shadow-md shadow-indigo-500/30"
                      />
                    )}
                    <span className="relative">{s.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
