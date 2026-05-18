"use client";
import { FaDownload } from "react-icons/fa6";
import { FaEye, FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import SkillsCarousel from "./ui/SkillsCarousel";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Skills() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const iconLinkClasses =
    "rounded-full p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400";

  return (
    <section id="skills" aria-labelledby="skills-heading">
      <h2
        id="skills-heading"
        className="text-center text-3xl font-semibold font-din mt-12 mb-2"
      >
        Skills
      </h2>
      <div className="flex flex-col md:flex-row justify-evenly">
        <div className="flex bg-gray-900 rounded-2xl border-black md:w-96 md:mx-0 mx-4 h-20 justify-evenly items-center my-10">
          <div className="text-center flex flex-col justify-evenly">
            <p className="text-2xl font-semibold text-slate-100">RESUME</p>
            <p className="font-semibold text-gray-300">2024 CV</p>
          </div>
          <a
            href="/Portfolio_New/Prem_Vispute_Resume.pdf"
            download
            aria-label="Download resume PDF"
            className={iconLinkClasses}
          >
            <FaDownload className="text-5xl text-gray-300 transition-colors duration-200 hover:text-slate-100" />
          </a>
          <a
            href="/Portfolio_New/Prem_Vispute_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View resume PDF in new tab"
            className={iconLinkClasses}
          >
            <FaEye className="text-5xl text-gray-300 transition-colors duration-200 hover:text-slate-100" />
          </a>
        </div>
        <div
          role="radiogroup"
          aria-label="Color theme"
          className="flex bg-gray-900 rounded-2xl border-black md:w-72 md:mx-0 mx-4 justify-evenly items-center h-20 my-10"
        >
          <input
            type="radio"
            id="dark-mode"
            name="theme"
            value="dark"
            checked={theme === "dark"}
            className="sr-only peer/dark focus-visible:outline-none"
            onChange={() => setTheme("dark")}
          />
          <label
            htmlFor="dark-mode"
            aria-label="Switch to dark mode"
            className={`w-32 h-16 rounded-2xl cursor-pointer transition-colors duration-200 transform active:scale-95 ${
              theme === "dark" ? "text-slate-100 bg-gray-800" : "text-gray-300"
            } flex justify-center items-center peer-focus-visible/dark:ring-2 peer-focus-visible/dark:ring-blue-400`}
          >
            <FaMoon className="text-5xl transition-colors duration-200 hover:text-slate-100" />
          </label>
          <input
            type="radio"
            id="light-mode"
            name="theme"
            value="light"
            checked={theme === "light"}
            className="sr-only peer/light focus-visible:outline-none"
            onChange={() => setTheme("light")}
          />
          <label
            htmlFor="light-mode"
            aria-label="Switch to light mode"
            className={`w-32 h-16 rounded-2xl cursor-pointer transition-colors duration-200 transform active:scale-95 ${
              theme === "light" ? "text-slate-100 bg-gray-800" : "text-gray-300"
            } flex justify-center items-center peer-focus-visible/light:ring-2 peer-focus-visible/light:ring-blue-400`}
          >
            <MdLightMode className="text-5xl transition-colors duration-200 hover:text-slate-100" />
          </label>
        </div>
      </div>
      <SkillsCarousel />
    </section>
  );
}
