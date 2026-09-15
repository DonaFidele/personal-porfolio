import React, { useState } from "react";
import { Mail, Github, Linkedin, Code2, Sparkles, Copy, Check } from "lucide-react";
import Reveal from "./Reveal";

const EMAIL = "houekpoehafidele@gmail.com";

const links = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/DonaFidele",
    href: "https://github.com/DonaFidele",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "dona-houekpoeha",
    href: "https://www.linkedin.com/in/dona-houekpoeha/",
    icon: Linkedin,
  },
  {
    label: "LeetCode",
    value: "houekpoehafidele",
    href: "https://leetcode.com/u/houekpoehafidele/",
    icon: Code2,
  },
  {
    label: "Hugging Face",
    value: "DonaFidele",
    href: "https://huggingface.co/DonaFidele",
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
I'm open to AI/RAG systems, and agentic AI collaborations or research projects, full-stack development, with a growing interest in computer vision. If it involves turning an idea into something real and usable, I'm interested.            </p>

            <div className="space-y-4 font-mono text-sm text-text">
              <div className="flex gap-3">
                <span className="text-accent">▸</span>
                <span>Full-stack web development - React, Java, Laravel</span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent">▸</span>
                <span>Agentic AI & RAG pipelines - Vercel AI SDK</span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent">▸</span>
                <span>Machine Learning & NLP - exploring Computer Vision</span>
              </div>
            </div>
          </Reveal>

          {/* RIGHT — direct links */}
          <Reveal delay={100}>
            <div className="border border-border rounded-xl bg-surface overflow-hidden">
              {links.map(({ label, value, href, icon }, i) => (
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
                      {React.createElement(icon, { className: "w-4 h-4" })}
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
