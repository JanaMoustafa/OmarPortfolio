import About from "@/components/About";
import Agencies from "@/components/Agencies";
import AISection from "@/components/AISection";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Nav from "@/components/Nav";
import Property from "@/components/Property";
import Skills from "@/components/Skills";
import SmoothScroll from "@/components/SmoothScroll";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <a
        href="#main"
        className="sr-only z-[70] rounded bg-ivory px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Agencies />
        <Work />
        <AISection />
        <Journey />
        <Property />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
