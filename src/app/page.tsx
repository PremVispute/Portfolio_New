"use client";
import Image from "next/image";
import mainBG from "../utils/images/mainBG.jpg";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ExpoScaleEase } from "gsap/EasePack";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ExpoScaleEase);

export default function Home() {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(false);
    } else if (scrolled <= 100) {
      setVisible(true);
    }
  };

  useEffect(() => {
    gsap.to(".image", {
      scrollTrigger: {
        trigger: ".base",
        start: "top bottom",
        end: "top 50%",
        scrub: true,
        markers: true,
      },
      autoAlpha: 0,
      duration: 1,
      scale: 4,
      ease: ExpoScaleEase.config(1, 2),
    });

    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <Image
          src={mainBG}
          alt="mainBG"
          className="image"
          layout="fill"
          objectFit="cover"
        />
        {visible && (
          <h1 className="absolute top-36 text-center w-full text-3xl italic font-semibold">
            “Design is not just what it looks like and feels like. Design is how
            it works.” <br />- Steve Jobs
          </h1>
        )}
      </div>
      <div className="base h-96">Hello</div>
      <div className="base h-96">Hello</div>
      <div className="base h-96">Hello</div>
      <div className="base h-96">Hello</div>
    </>
  );
}
