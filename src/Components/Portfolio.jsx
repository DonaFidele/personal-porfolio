import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import Skills from "./Skills";
import Projects from "./Projects";
import CertificatesSection from "./CertificatesSection";
import Contacts from "./Contacts";

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY || 0;
      const scrollThreshold = document.documentElement.scrollHeight * 0.5;
      setScrollY(scrollPosition);
      setShowBackToTop(scrollPosition > scrollThreshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar scrollY={scrollY} />

      <main>
        <Hero isLoaded={isLoaded} />
        <Stats />
        <Skills />
        <Projects />
        <CertificatesSection />
        <Contacts />
      </main>

      <footer className="py-10 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-muted">
          <span>dona@systems:~$ echo "thanks for stopping by"</span>
          <span>© {new Date().getFullYear()} Dona Houekpoeha</span>
        </div>
      </footer>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 flex size-10 items-center justify-center rounded-full border-[1.5px] border-[#f0883e] bg-transparent text-[#f0883e] opacity-0 transition-[opacity,border-width] duration-300 hover:border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f0883e] ${showBackToTop ? "pointer-events-auto opacity-100 animate-[gentle-bounce_1.6s_ease-in-out_infinite]" : "pointer-events-none"}`}
      >
        <ArrowUp aria-hidden="true" className="size-4" strokeWidth={2} />
      </button>
    </div>
  );
}
