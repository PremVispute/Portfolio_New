import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

type Social = {
  href: string;
  label: string;
  icon: React.ReactNode;
  accent: string;
  external: boolean;
};

const SOCIALS: Social[] = [
  {
    href: "mailto:premvispute@gmail.com",
    label: "Email",
    icon: <FaEnvelope />,
    accent: "from-rose-500 to-orange-500",
    external: false,
  },
  {
    href: "https://wa.me/919702714557/?text=I%20am%20interested%20in%20your%20work",
    label: "WhatsApp",
    icon: <FaWhatsapp />,
    accent: "from-emerald-500 to-teal-500",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/premvispute/",
    label: "LinkedIn",
    icon: <FaLinkedin />,
    accent: "from-sky-500 to-blue-600",
    external: true,
  },
  {
    href: "https://www.instagram.com/premvispute/",
    label: "Instagram",
    icon: <FaInstagram />,
    accent: "from-fuchsia-500 to-pink-500",
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 scroll-mt-24"
    >
      <div className="text-center mb-10">
        <p className="font-din text-xs sm:text-sm tracking-[0.3em] text-slate-500 dark:text-slate-400">
          CONTACT
        </p>
        <h2
          id="contact-heading"
          className="mt-2 font-din font-bold text-3xl sm:text-4xl md:text-5xl"
        >
          Let&apos;s <span className="gradient-text">build something</span>
        </h2>
        <p className="mt-3 font-din text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          Open to freelance, full-time roles, and interesting collaborations.
          Drop a message — I&apos;ll get back within a day.
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
              Best way to reach me
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
              Based in Mumbai, IN · Available worldwide (remote)
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
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
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/10 aspect-[4/3] md:aspect-auto md:h-80">
            <iframe
              title="Map showing Mumbai, Maharashtra"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.03900799053!2d72.88118615!3d19.082250749999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1724655652187!5m2!1sen!2sin"
              className="absolute inset-0 h-full w-full"
              style={{ border: 0, filter: "saturate(0.85) contrast(1.05)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
