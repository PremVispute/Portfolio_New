"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="content-with-border">
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
