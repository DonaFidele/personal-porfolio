import React from "react";
import { Mail, ArrowRight, Circle } from "lucide-react";
import Terminal from "./Terminal";

const focusAreas = ["Agentic AI", "RAG Systems", "NLP" ,"Full-Stack Development"];

const Hero = ({ isLoaded }) => {
  return (
    <header id="top" className="min-h-screen flex items-center pt-24 pb-16 bg-grid">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
          {/* LEFT — copy */}
          <div
            className={`space-y-7 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface font-mono text-xs text-muted">
              <Circle className="w-2 h-2 fill-accent2 text-accent2 animate-pulseDot" />
              open to backend / AI systems collaborations
            </div>

            <h1 className="font-mono text-4xl sm:text-5xl font-bold leading-[1.15] text-text">
              I turn ideas into reality
              <br />
              <span className="text-accent">with AI</span> and{" "}
              <span className="text-accent2">ambitions into systems.</span>
            </h1>

            <p className="text-muted text-base sm:text-lg max-w-lg leading-relaxed">
AI Systems Engineer working across full-stack web development and agentic AI , from React interfaces to RAG pipelines and multi-agent systems in production.
            </p>

            <div className="flex flex-wrap gap-2">
              {focusAreas.map((f) => (
                <span
                  key={f}
                  className="font-mono text-xs px-3 py-1.5 rounded-md border border-border text-muted"
                >
                  {f}
                </span>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-md bg-accent text-bg font-mono font-semibold text-sm flex items-center gap-2 hover:bg-accentSoft transition-colors"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-md border border-border font-mono font-semibold text-sm text-text flex items-center gap-2 hover:border-accent hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </div>
          </div>

          {/* RIGHT — terminal signature element (replaces photo) */}
          <div
            className={`transition-all duration-700 delay-150 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Terminal />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
