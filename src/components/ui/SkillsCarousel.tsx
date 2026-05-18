"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { skillsData } from "@/utils/helpers/skillsData";

export default function SkillsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const totalWidth = el.scrollWidth;
    el.innerHTML += el.innerHTML;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!prefersReducedMotion && totalWidth > 0) {
      const tween = gsap.to(el, {
        x: -totalWidth,
        duration: 30,
        repeat: -1,
        ease: "linear",
      });
      return () => {
        tween.kill();
      };
    }
  }, []);

  return (
    <div className="relative mt-10 glass rounded-2xl overflow-hidden py-8">
      {/* Edge fades */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/80 dark:from-[#0a0a0f]/80 to-transparent z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white/80 dark:from-[#0a0a0f]/80 to-transparent z-10"
      />
      <div
        ref={containerRef}
        className="flex space-x-12 will-change-transform"
        aria-hidden="true"
      >
        {skillsData.map((data) => (
          <div
            key={data.id}
            className="flex items-center justify-center h-20 w-24 flex-shrink-0 grayscale-[20%] hover:grayscale-0 transition"
          >
            <Image
              src={data.imgLabel}
              alt=""
              height={70}
              className="object-contain max-h-16"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
