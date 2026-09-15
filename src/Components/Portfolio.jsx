import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY || 0);
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
    </div>
  );
}
