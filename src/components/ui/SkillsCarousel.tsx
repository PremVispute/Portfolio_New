import { useEffect } from "react";
import gsap from "gsap";

export default function SkillsCarousel() {
  useEffect(() => {
    const skillsContainer = document.querySelector(".skills-container");
    const totalWidth = skillsContainer?.scrollWidth;

    if (skillsContainer) skillsContainer.innerHTML += skillsContainer.innerHTML;

    if (totalWidth)
      gsap.to(".skills-container", {
        x: -totalWidth / 2,
        duration: 20,
        repeat: -1,
        ease: "linear",
      });
  }, []);
  return (
    <div className="skills-section overflow-hidden bg-gray-900 py-10">
      <div className="skills-container flex space-x-8">
        <div className="skill-item text-3xl text-white">HTML</div>
        <div className="skill-item text-3xl text-white">CSS</div>
        <div className="skill-item text-3xl text-white">JavaScript</div>
        <div className="skill-item text-3xl text-white">React</div>
        <div className="skill-item text-3xl text-white">Node.js</div>
        <div className="skill-item text-3xl text-white">Tailwind CSS</div>
        {/* Add more skills as needed */}
      </div>
    </div>
  );
}
