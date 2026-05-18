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
          alt=""
          unoptimized
          className="border-image"
        />
        <div className="content bg-white dark:bg-[#121212]">
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
