import React, { useState } from "react";
import { Github, Linkedin, ChevronDown, FileText, Menu, X } from "lucide-react";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

const resumes = [
  { label: "Systems Engineer", href: "resume/SE_Role_Resume.pdf" },
  { label: "AI / Deep Learning", href: "resume/AI_Role_Resume.pdf" },
  { label: "Web Developer", href: "resume/WD_Role_Resume.pdf" },
];

const Navbar = ({ scrollY }) => {
  const [open, setOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 40
          ? "bg-bg/90 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Branding */}
        <a href="#top" className="font-mono text-sm sm:text-base text-text flex items-center gap-1 shrink-0">
          <span className="text-accent">dona</span>
          <span className="text-muted">@</span>
          <span className="text-accent2">systems</span>
          <span className="text-muted">:~$</span>
          <span className="w-2 h-4 bg-accent ml-1 animate-blink" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted hover:text-text transition-colors"
            >
              <span className="text-accent">./</span>
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setResumeOpen((v) => !v)}
              onBlur={() => setTimeout(() => setResumeOpen(false), 150)}
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-border text-sm font-mono text-text hover:border-accent hover:text-accent transition-colors"
            >
              <FileText className="w-4 h-4" />
              resume
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {resumeOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-surface border border-border rounded-md shadow-xl overflow-hidden">
                {resumes.map((r) => (
                  <a
                    key={r.href}
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-sm font-mono text-text hover:bg-surfaceHover hover:text-accent transition-colors"
                  >
                    {r.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-2">
            {[
              { icon: Github, link: "https://github.com/DonaFidele", label: "GitHub" },
              { icon: Linkedin, link: "https://www.linkedin.com/in/dona-houekpoeha/", label: "LinkedIn" },
            ].map(({ icon, link, label }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
              >
                {React.createElement(icon, { className: "w-4 h-4" })}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bg border-t border-border px-6 py-6 flex flex-col gap-4 font-mono text-sm">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-muted hover:text-text transition-colors"
            >
              <span className="text-accent">./</span>
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-border">
            {resumes.map((r) => (
              <a
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
              >
                resume — {r.label}
              </a>
            ))}
          </div>
          <div className="flex gap-3 pt-2">
            <a href="https://github.com/DonaFidele" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent">GitHub</a>
            <a href="https://www.linkedin.com/in/dona-houekpoeha/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent">LinkedIn</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
