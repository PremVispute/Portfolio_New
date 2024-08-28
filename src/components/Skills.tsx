import { FaDownload } from "react-icons/fa6";
import { FaEye, FaGithub, FaMoon } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdLightMode } from "react-icons/md";
import { useState } from "react";

export default function Skills() {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      {/* <div className="flex flex-row">
        <p>This site is designed, developed & maintained by me</p>
        <p>Check out my work and coding skills</p>
      </div> */}
      <div className="flex flex-row justify-evenly" id="skills">
        <div
          className="flex bg-gray-900 rounded-2xl border-black w-96 h-20 justify-evenly items-center"
          id="skills"
        >
          <div className="text-center flex flex-col justify-evenly">
            <p className="text-2xl font-semibold">RESUME</p>
            <p className="font-semibold text-gray-400">2024 CV</p>
          </div>
          <FaDownload className="text-5xl text-gray-400 hover:text-slate-200" />
          <FaEye className="text-5xl text-gray-400 hover:text-slate-200" />
        </div>
        <div className="flex bg-gray-900 rounded-2xl border-black w-72 justify-evenly items-center h-20">
          <input
            type="radio"
            id="dark-mode"
            name="theme"
            value="dark"
            className="hidden"
            onChange={() => setTheme("dark")}
          />
          <label
            htmlFor="dark-mode"
            className={`w-32 h-16 rounded-2xl cursor-pointer transition transform active:scale-90 ${
              theme === "dark" ? "text-slate-200 bg-gray-800" : "text-gray-400"
            } flex justify-center items-center`}
          >
            <FaMoon className="text-5xl hover:text-slate-200" />
          </label>

          <input
            type="radio"
            id="light-mode"
            name="theme"
            value="light"
            className="hidden"
            onChange={() => setTheme("light")}
          />
          <label
            htmlFor="light-mode"
            className={`w-32 h-16 rounded-2xl cursor-pointer transition transform active:scale-90 ${
              theme === "light" ? "text-slate-200 bg-gray-800" : "text-gray-400"
            } flex justify-center items-center`}
          >
            <MdLightMode className="text-5xl hover:text-slate-200" />
          </label>
        </div>
      </div>
    </>
  );
}
