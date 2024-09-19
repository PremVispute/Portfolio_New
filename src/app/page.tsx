"use client";
import Image from "next/image";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Work from "@/components/Work";
import borderImg from "@/utils/images/p_icons.jpeg";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="content-with-border">
        <Image
          src={borderImg}
          alt="Border image"
          objectFit="cover"
          unoptimized={true}
          className="border-image"
        />
        <div className="content">
          <About />
          <Skills />
          <Work />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
