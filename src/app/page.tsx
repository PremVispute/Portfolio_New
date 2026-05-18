import Hero from "@/components/Hero";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import CursorGlow from "@/components/ui/CursorGlow";
import Header from "@/components/ui/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Header />
      <Hero />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <About />
        <Experience />
        <Skills />
        <Work />
        <Contact />
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}
