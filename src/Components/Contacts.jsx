import React, { useState } from "react";
import { Mail, Github, Linkedin, Code2, Sparkles, Copy, Check } from "lucide-react";
import Reveal from "./Reveal";

const EMAIL = "ansham.maurya.microsoft@gmail.com";

const links = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/ANSHAM1",
    href: "https://github.com/ANSHAM1",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "ansham-maurya",
    href: "https://www.linkedin.com/in/ansham-maurya-69ab80297/",
    icon: Linkedin,
  },
  {
    label: "LeetCode",
    value: "Ansham_Maurya",
    href: "https://leetcode.com/Ansham_Maurya/",
    icon: Code2,
  },
  {
    label: "Hugging Face",
    value: "ANSHAM1",
    href: "https://huggingface.co/ANSHAM1",
    icon: Sparkles,
  },
];

const Contacts = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard API unavailable — link still works
    }
  };

  return (
    <section id="contact" className="py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start">
          {/* LEFT — why reach out */}
          <Reveal>
            <p className="font-mono text-xs text-accent mb-2">./contact</p>
            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-text mb-6">
              Let's talk systems
            </h2>
            <p className="text-muted leading-relaxed max-w-md mb-8">
              I'm open to backend engineering, AI systems, and distributed
              systems roles, along with focused collaborations or research
              projects. If it involves building something from first
              principles, I'm interested.
            </p>

            <div className="space-y-4 font-mono text-sm text-text">
              <div className="flex gap-3">
                <span className="text-accent">▸</span>
                <span>Low-level systems engineering — C++, CUDA, Rust</span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent">▸</span>
                <span>Agentic AI & LLM orchestration pipelines</span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent">▸</span>
                <span>Backend architecture & distributed systems</span>
              </div>
            </div>
          </Reveal>

          {/* RIGHT — direct links */}
          <Reveal delay={100}>
            <div className="border border-border rounded-xl bg-surface overflow-hidden">
              {links.map(({ label, value, href, icon: Icon }, i) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between px-5 py-4 hover:bg-surfaceHover transition-colors ${
                    i !== links.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-accent">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-muted">{label}</p>
                      <p className="font-mono text-sm text-text">{value}</p>
                    </div>
                  </div>

                  {label === "Email" && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        copyEmail();
                      }}
                      aria-label="Copy email address"
                      className="text-muted hover:text-accent transition-colors p-2"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-accent2" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
