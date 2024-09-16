import { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import { skillsData } from "@/utils/helpers/skillsData";

export default function SkillsCarousel() {
  useEffect(() => {
    const skillsContainer = document.querySelector(".skills-container");
    const totalWidth = skillsContainer?.scrollWidth;

    if (skillsContainer) skillsContainer.innerHTML += skillsContainer.innerHTML;

    if (totalWidth)
      gsap.to(".skills-container", {
        x: -totalWidth / 2,
        duration: 50,
        repeat: -1,
        ease: "linear",
      });
  }, []);
  return (
    <>
      <p className="text-center text-3xl font-semibold font-din mt-16">
        Tech Stack I Use
      </p>
      <div className="skills-section overflow-hidden bg-gray-900 py-10 mt-4 w-1/2 mx-auto">
        <div className="skills-container flex space-x-10">
          {skillsData.map((data) => (
            <>
              <Image
                src={data.imgLabel}
                alt="wordpressImg"
                className="skill-item"
                width={200}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
