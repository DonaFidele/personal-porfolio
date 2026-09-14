import React from "react";
import { FolderGit2, Brain, Users, Layers } from "lucide-react";
import Reveal from "./Reveal";

const stats = [
  {
    icon: <FolderGit2 className="w-5 h-5" />,
    value: "15+",
    label: "Repositories shipped",
    sub: "From-scratch DL engines, systems tools, AI agents",
  },
  {
    icon: <Brain className="w-5 h-5" />,
    value: "10+",
    label: "ML / DL architectures",
    sub: "ANN, CNN, RNN, LSTM, Transformers — built by hand",
  },
  {
    icon: <Users className="w-5 h-5" />,
    value: "30",
    label: "GitHub followers",
    sub: "github.com/DonaFidele",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    value: "20+",
    label: "Technologies in the stack",
    sub: "Python, TypeScript, Java, React, Vercel AI SDK, PostgreSQL...",
  },
];

const Stats = () => {
  return (
    <section className="py-16 border-y border-border bg-surface/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="bg-bg p-6 h-full hover:bg-surface transition-colors">
                <div className="text-accent mb-3">{s.icon}</div>
                <h3 className="font-mono text-3xl font-bold text-text">{s.value}</h3>
                <p className="text-sm font-semibold text-text mt-1">{s.label}</p>
                <p className="text-xs text-muted mt-1">{s.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
