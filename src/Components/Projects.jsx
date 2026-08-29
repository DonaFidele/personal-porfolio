import React from "react";
import { Github, Lock, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  {
    title: "TorchLessCUDA",
    description:
      "A deep learning framework built entirely from scratch in modern C++20 and CUDA — custom tensor ops, hand-written GPU kernels, and CNN training/inference with no ML frameworks underneath.",
    tags: ["C++", "CUDA", "Deep Learning", "GPU Programming"],
    github: "https://github.com/ANSHAM1/TOrchLessCUDA",
    status: "Public",
  },
  {
    title: "Insertion.AI",
    description:
      "A multi-agent engineering assistant that turns project ideas into structured development plans, initializes repos, tracks real progress through Git, and adapts execution using LLM orchestration.",
    tags: ["Python", "LangGraph", "FastAPI", "Redis", "Temporal"],
    github: "https://github.com/ANSHAM1/Insertion.AI",
    status: "Public",
  },
  {
    title: "SentinelAI_Nids",
    description:
      "An AI-driven network intrusion detection system — LSTM-based anomaly detection running on top of real-time, async packet processing in Rust.",
    tags: ["Rust", "Async", "Deep Learning", "Cybersecurity"],
    github: "https://github.com/ANSHAM1/SentinelAI_Nids",
    status: "Public",
  },
  {
    title: "ContextFlow.AI",
    description:
      "An AI research assistant powered by LLMs, RAG, and LangGraph for document understanding, multi-step reasoning, and context-aware answers.",
    tags: ["Python", "RAG", "LangChain", "Vector DB"],
    github: "https://github.com/ANSHAM1/ContextFlow.AI",
    status: "Public",
  },
  {
    title: "ExperimentOS",
    description:
      "A distributed platform for defining, executing, monitoring, and analyzing long-running ML experiments, built on an async, event-driven backend.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Distributed Systems"],
    github: null,
    status: "Private",
  },
  {
    title: "Embedded_LSM_KV_Database",
    description:
      "A lightweight embedded key-value database built from scratch in modern C++, implementing an LSM-tree storage engine with write-ahead logging and SSTable persistence.",
    tags: ["C++", "Databases", "Systems Programming"],
    github: "https://github.com/ANSHAM1/Embedded_LSM_KV_Database",
    status: "Public",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-surface/40 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="mb-14">
            <p className="font-mono text-xs text-accent mb-2">./projects</p>
            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-text">
              Selected work
            </h2>
            <p className="text-muted mt-3 max-w-xl">
              Systems and models built from first principles — most of these
              exist because I wanted to understand what a framework was
              hiding from me.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <div className="h-full flex flex-col justify-between border border-border rounded-xl p-6 bg-bg hover:border-accent/50 hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-mono text-lg font-bold text-text leading-snug">
                      {p.title}
                    </h3>
                    <span
                      className={`shrink-0 font-mono text-[10px] px-2 py-1 rounded border ${
                        p.status === "Private"
                          ? "border-border text-muted"
                          : "border-accent2/40 text-accent2"
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>

                  <p className="text-sm text-muted leading-relaxed mb-5">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-surface border border-border text-text/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-sm text-text hover:text-accent transition-colors w-fit"
                  >
                    <Github className="w-4 h-4" />
                    View source
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 font-mono text-sm text-muted w-fit">
                    <Lock className="w-4 h-4" />
                    Private repository
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-10 text-center">
            <a
              href="https://github.com/ANSHAM1?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-accent transition-colors"
            >
              See all repositories on GitHub
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
