import { useEffect } from "react";
import gsap from "gsap";
import reactImg from "@/utils/images/react-original-wordmark.210x256.png";
import Image from "next/image";

export default function SkillsCarousel() {
  useEffect(() => {
    const skillsContainer = document.querySelector(".skills-container");
    const totalWidth = skillsContainer?.scrollWidth;

    if (skillsContainer) skillsContainer.innerHTML += skillsContainer.innerHTML;

    if (totalWidth)
      gsap.to(".skills-container", {
        x: -totalWidth / 2,
        duration: 30,
        repeat: -1,
        ease: "linear",
      });
  }, []);
  return (
    <>
      <div className="skills-section overflow-hidden bg-gray-900 py-10 mt-16 w-1/2 mx-auto">
        <div className="skills-container flex space-x-10">
          <Image src={reactImg} alt="reactImg" className="skill-item" />
          <Image src={reactImg} alt="reactImg" className="skill-item" />
          <Image src={reactImg} alt="reactImg" className="skill-item" />
          <Image src={reactImg} alt="reactImg" className="skill-item" />
          <Image src={reactImg} alt="reactImg" className="skill-item" />
          <Image src={reactImg} alt="reactImg" className="skill-item" />
          {/* Add more skills as needed */}
        </div>
      </div>
      <p className="text-center text-3xl font-semibold font-din mt-4">
        Tech Stack I Use
      </p>
    </>
  );
}
