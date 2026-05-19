"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useI18n } from "@/utils/helpers/I18nProvider";

export default function Footer() {
  const { content } = useI18n();
  const year = new Date().getFullYear().toString();

  return (
    <footer className="relative mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="font-din text-sm text-slate-600 dark:text-slate-400 text-center sm:text-start [&_strong]:font-semibold [&_strong]:text-slate-900 dark:[&_strong]:text-white"
            dangerouslySetInnerHTML={{ __html: content.footer.designedHtml }}
          />
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/PremVispute"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="h-9 w-9 rounded-full glass flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-indigo-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/premvispute/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="h-9 w-9 rounded-full glass flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-indigo-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <p className="text-center font-din text-xs text-slate-500 dark:text-slate-500 py-6">
          {content.footer.rights.replace("{year}", year)}
        </p>
      </div>
    </footer>
  );
}
