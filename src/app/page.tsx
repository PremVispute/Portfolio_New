"use client";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Header from "@/components/ui/Header";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Work />
    </>
  );
}
