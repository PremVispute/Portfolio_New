import Image from "next/image";
import mainBG from "@/utils/images/mainBG.jpg";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ExpoScaleEase } from "gsap/EasePack";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ExpoScaleEase);

export default function Hero() {
  useGSAP(() => {
    gsap.to(".mainBG", {
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "top 50%",
        scrub: true,
      },
      autoAlpha: 0,
      duration: 1,
      scale: 4,
      ease: ExpoScaleEase.config(1, 2),
    });
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <Image
        src={mainBG}
        alt="mainBG"
        className="mainBG"
        layout="fill"
        objectFit="cover"
        unoptimized={true}
      />
      <h1 className="absolute top-36 text-center w-full md:text-xl italic font-semibold">
        “Design is not just what it looks like and feels like. Design is how it
        works.” <br />- Steve Jobs
      </h1>
    </div>
  );
}
