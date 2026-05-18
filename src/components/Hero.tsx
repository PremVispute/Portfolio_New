"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const heroVideoSrc =
  process.env.NODE_ENV === "production"
    ? "/Portfolio_New/videos/hero-portfolio-reveal.mp4"
    : "/videos/hero-portfolio-reveal.mp4";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(
    () => {
      const hero = heroRef.current;
      const video = videoRef.current;
      if (!hero || !video) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        const seekToEnd = () => {
          if (Number.isFinite(video.duration) && video.duration > 0) {
            video.currentTime = video.duration;
          }
        };
        if (video.readyState >= 1) seekToEnd();
        else
          video.addEventListener("loadedmetadata", seekToEnd, { once: true });
        return;
      }

      let targetTime = 0;
      let rafId = 0;

      const tick = () => {
        rafId = 0;
        if (
          !Number.isFinite(video.duration) ||
          video.duration <= 0 ||
          video.readyState < 2
        ) {
          return;
        }
        const diff = targetTime - video.currentTime;
        if (Math.abs(diff) < 0.015) {
          video.currentTime = targetTime;
          return;
        }
        video.currentTime += diff * 0.25;
        rafId = requestAnimationFrame(tick);
      };

      const scheduleTick = () => {
        if (!rafId) rafId = requestAnimationFrame(tick);
      };

      const trigger = ScrollTrigger.create({
        trigger: hero,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (!Number.isFinite(video.duration) || video.duration <= 0) return;
          targetTime = video.duration * self.progress;
          scheduleTick();
        },
      });

      const handleLoaded = () => {
        ScrollTrigger.refresh();
        scheduleTick();
      };

      video.addEventListener("loadedmetadata", handleLoaded);
      video.addEventListener("loadeddata", handleLoaded);
      if (video.readyState >= 1) handleLoaded();

      return () => {
        if (rafId) cancelAnimationFrame(rafId);
        video.removeEventListener("loadedmetadata", handleLoaded);
        video.removeEventListener("loadeddata", handleLoaded);
        trigger.kill();
      };
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      aria-label="Intro animation"
      className="relative h-[300vh] bg-black"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
