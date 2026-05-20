"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useI18n } from "@/utils/helpers/I18nProvider";

gsap.registerPlugin(ScrollTrigger);

const heroVideoSrc =
  process.env.NODE_ENV === "production"
    ? "/Portfolio_New/videos/hero-portfolio.scrub.mp4"
    : "/videos/hero-portfolio.scrub.mp4";

export default function Hero() {
  const { content } = useI18n();
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const hero = heroRef.current;
      const video = videoRef.current;
      const overlay = overlayRef.current;
      if (!hero || !video) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        if (overlay) overlay.style.opacity = "1";
        return;
      }

      // Entrance: stagger headline lines + CTAs
      if (overlay) {
        gsap.from(overlay.querySelectorAll<HTMLElement>("[data-reveal]"), {
          y: 24,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.1,
        });
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

      const scrubTrigger = ScrollTrigger.create({
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

      // Fade overlay out as user scrolls into the page
      let fadeTween: gsap.core.Tween | null = null;
      if (overlay) {
        fadeTween = gsap.to(overlay, {
          opacity: 0,
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "30% top",
            scrub: true,
          },
        });
      }

      const handleLoaded = () => {
        ScrollTrigger.refresh();
        scheduleTick();
      };

      const primeForSafari = () => {
        const p = video.play();
        if (p && typeof p.then === "function") {
          p.then(() => {
            video.pause();
            video.currentTime = 0;
            scheduleTick();
          }).catch(() => {});
        }
      };

      video.addEventListener("loadedmetadata", handleLoaded);
      video.addEventListener("loadeddata", handleLoaded);
      video.addEventListener("canplay", primeForSafari, { once: true });
      if (video.readyState >= 1) handleLoaded();
      if (video.readyState >= 3) primeForSafari();

      return () => {
        if (rafId) cancelAnimationFrame(rafId);
        video.removeEventListener("loadedmetadata", handleLoaded);
        video.removeEventListener("loadeddata", handleLoaded);
        video.removeEventListener("canplay", primeForSafari);
        scrubTrigger.kill();
        fadeTween?.scrollTrigger?.kill();
        fadeTween?.kill();
      };
    },
    { scope: heroRef },
  );

  return (
    <section
      id="top"
      ref={heroRef}
      aria-label="Intro"
      className="relative h-[300vh] bg-black"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover opacity-90"
          muted
          playsInline
          preload="auto"
          autoPlay
          disablePictureInPicture
          aria-hidden="true"
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>

        {/* Vignette + scrim for readable text */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.55)_100%)]"
        />

        {/* Floating glass orbs */}
        <div
          aria-hidden="true"
          className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl float-slow"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-10 -right-16 h-80 w-80 rounded-full bg-fuchsia-500/25 blur-3xl float-slow"
          style={{ animationDelay: "2s" }}
        />

        <div
          ref={overlayRef}
          className="relative z-10 h-full w-full flex flex-col items-center justify-center px-6 text-center"
        >
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[24rem] w-[min(92vw,70rem)] -translate-x-1/2 -translate-y-[44%] rounded-[3rem] bg-black/40 blur-3xl"
          />

          <span
            data-reveal
            className="relative inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs sm:text-sm font-medium font-din text-white/95 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {content.hero.badge}
          </span>

          <h2
            data-reveal
            className="relative mt-6 max-w-5xl font-din text-4xl font-bold leading-[0.95] tracking-tight text-white drop-shadow-[0_10px_28px_rgba(0,0,0,0.85)] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {content.hero.greeting}{" "}
            <span className="gradient-text inline-block [filter:drop-shadow(0_8px_26px_rgba(0,0,0,0.9))]">
              {content.hero.name}
            </span>
          </h2>

          <p
            data-reveal
            className="relative mt-4 max-w-2xl font-din text-base leading-relaxed text-white/92 drop-shadow-[0_8px_22px_rgba(0,0,0,0.9)] sm:text-lg md:text-xl [&_strong]:font-medium [&_strong]:text-white"
            dangerouslySetInnerHTML={{ __html: content.hero.introHtml }}
          />

          <div
            data-reveal
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold font-din text-white bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-400 hover:to-fuchsia-400 shadow-lg shadow-indigo-500/25 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
            >
              {content.hero.ctaWork}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold font-din text-white glass hover:bg-white/15 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              {content.hero.ctaContact}
            </a>
          </div>

          <div data-reveal className="mt-8 flex items-center gap-3">
            <a
              href="https://github.com/PremVispute"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="h-10 w-10 rounded-full glass flex items-center justify-center text-white/90 hover:text-white hover:bg-white/15 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/premvispute/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="h-10 w-10 rounded-full glass flex items-center justify-center text-white/90 hover:text-white hover:bg-white/15 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              className="h-10 w-10 rounded-full glass flex items-center justify-center text-white/90 hover:text-white hover:bg-white/15 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <FaXTwitter />
            </a>
          </div>

          <a
            data-reveal
            href="#about"
            aria-label="Scroll to about section"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 inline-flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-md"
          >
            <span className="text-xs font-din tracking-widest">
              {content.hero.scroll}
            </span>
            <FaArrowDown className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
