"use client";

import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useI18n } from "@/utils/helpers/I18nProvider";

type SocialKey = "email" | "whatsapp" | "linkedin" | "instagram";

type Social = {
  href: string;
  key: SocialKey;
  icon: React.ReactNode;
  accent: string;
  external: boolean;
};

const SOCIALS: Social[] = [
  {
    href: "mailto:premvispute@gmail.com",
    key: "email",
    icon: <FaEnvelope />,
    accent: "from-rose-500 to-orange-500",
    external: false,
  },
  {
    href: "https://wa.me/919702714557/?text=I%20am%20interested%20in%20your%20work",
    key: "whatsapp",
    icon: <FaWhatsapp />,
    accent: "from-emerald-500 to-teal-500",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/premvispute/",
    key: "linkedin",
    icon: <FaLinkedin />,
    accent: "from-sky-500 to-blue-600",
    external: true,
  },
  {
    href: "https://www.instagram.com/premvispute/",
    key: "instagram",
    icon: <FaInstagram />,
    accent: "from-fuchsia-500 to-pink-500",
    external: true,
  },
];

const LOCATION_META = [
  {
    accent: "from-amber-500 to-orange-600",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.49043247675!2d54.94755469726561!3d25.07575569410303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1715000000000",
    title: "Map showing Dubai, UAE",
  },
  {
    accent: "from-indigo-500 to-fuchsia-500",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.03900799053!2d72.88118615!3d19.082250749999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1724655652187",
    title: "Map showing Mumbai, Maharashtra",
  },
] as const;

export default function Contact() {
  const { content } = useI18n();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 scroll-mt-24"
    >
      <div className="text-center mb-10">
        <p className="font-din text-xs sm:text-sm tracking-[0.3em] text-slate-500 dark:text-slate-400">
          {content.contact.kicker}
        </p>
        <h2
          id="contact-heading"
          className="mt-2 font-din font-bold text-3xl sm:text-4xl md:text-5xl"
        >
          {content.contact.headingPre}{" "}
          <span className="gradient-text">{content.contact.headingAccent}</span>
        </h2>
        <p className="mt-3 font-din text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          {content.contact.subtitle}
        </p>
      </div>

      <div className="relative glass-strong rounded-3xl p-6 md:p-10 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl float-slow"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl float-slow"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Email CTA */}
          <div>
            <p className="font-din text-sm text-slate-500 dark:text-slate-400">
              {content.contact.bestWay}
            </p>
            <a
              href="mailto:premvispute@gmail.com"
              className="mt-2 inline-flex items-center gap-2 group"
            >
              <span className="font-din font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white group-hover:gradient-text transition-colors">
                premvispute@gmail.com
              </span>
              <FaArrowUpRightFromSquare className="text-slate-500 dark:text-slate-400 group-hover:text-indigo-500 transition-colors" />
            </a>
            <p className="mt-4 font-din text-slate-600 dark:text-slate-300 text-sm">
              {content.contact.splitting}
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  aria-label={content.contact.socials[s.key]}
                  {...(s.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group relative overflow-hidden rounded-2xl glass h-20 flex flex-col items-center justify-center gap-1 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                  <span
                    className={`relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${s.accent} text-white shadow-md text-lg`}
                  >
                    {s.icon}
                  </span>
                  <span className="relative text-xs font-din font-medium text-slate-700 dark:text-slate-200">
                    {content.contact.socials[s.key]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:h-80">
            {content.contact.locations.map((loc, index) => {
              const meta = LOCATION_META[index] ?? LOCATION_META[0];
              return (
                <div
                  key={loc.city}
                  className="relative rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/10 min-h-[10rem]"
                >
                  <iframe
                    title={meta.title}
                    src={meta.src}
                    className="absolute inset-0 h-full w-full"
                    style={{
                      border: 0,
                      filter: "saturate(0.85) contrast(1.05)",
                    }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 flex items-end justify-between">
                    <div>
                      <p className="font-din font-bold text-white text-sm inline-flex items-center gap-1.5 drop-shadow-md">
                        <FaMapMarkerAlt />
                        {loc.city}
                      </p>
                      <p className="font-din text-[11px] text-white/80 drop-shadow">
                        {loc.note}
                      </p>
                    </div>
                    <span
                      className={`rounded-full bg-gradient-to-r ${meta.accent} px-2.5 py-0.5 text-[10px] font-semibold font-din text-white shadow`}
                    >
                      {loc.badge}
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
