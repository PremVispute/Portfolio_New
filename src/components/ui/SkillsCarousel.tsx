"use client";
import { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import { skillsData } from "@/utils/helpers/skillsData";

export default function SkillsCarousel() {
  useEffect(() => {
    const skillsContainer = document.querySelector(".skills-container");
    const totalWidth = skillsContainer?.scrollWidth;

    if (skillsContainer) skillsContainer.innerHTML += skillsContainer.innerHTML;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (totalWidth && !prefersReducedMotion) {
      gsap.to(".skills-container", {
        x: -totalWidth / 2,
        duration: 20,
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);
  return (
    <>
      <h2 className="text-center text-3xl font-semibold font-din mt-16 bg-border-image">
        Tech Stack I Use
      </h2>
      <div className="skills-section overflow-hidden bg-gray-900 py-10 mt-4 md:w-3/4 w-[calc(100%-2rem)] max-w-md md:max-w-none mx-auto">
        <div className="skills-container flex space-x-10" aria-hidden="true">
          {skillsData.map((data) => (
            <Image
              key={data.id}
              src={data.imgLabel}
              alt=""
              className="skill-item"
              height={100}
            />
          ))}
        </div>
      </div>
    </>
  );
}
