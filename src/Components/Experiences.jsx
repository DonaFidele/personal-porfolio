import React from "react";
import Reveal from "./Reveal";

const experiences = [
  {
    period: "2024 — Present",
    role: "AI & Full-Stack Engineer",
    company: "Independent Projects",
    description: "Building production-minded RAG applications, intelligent agents, and full-stack products from idea to deployment.",
  },
  {
    period: "2023 — 2024",
    role: "Data & Machine Learning Developer",
    company: "Digital Innovation Lab",
    description: "Designed data workflows and machine learning prototypes to turn complex datasets into useful decisions.",
  },
  {
    period: "2022 — 2023",
    role: "Software Engineering Intern",
    company: "Technology Studio",
    description: "Shipped responsive web experiences and internal tools while learning collaborative engineering practices.",
  },
];

const Experiences = () => (
  <section id="experiences" className="py-24 bg-bg">
    <div className="max-w-6xl mx-auto px-6">
      <Reveal>
        <p className="font-mono text-xs text-accent mb-2">./experiences</p>
        <h2 className="font-mono text-3xl sm:text-4xl font-bold text-text mb-10">Where I&apos;ve been building</h2>
      </Reveal>

      <div className="flex flex-col border-y border-border">
        {experiences.map((experience, index) => (
          <Reveal key={experience.role} delay={index * 80}>
            <article className="grid gap-4 border-b border-border py-6 last:border-b-0 md:grid-cols-[150px_1fr] md:gap-8">
              <p className="font-mono text-xs text-accent">{experience.period}</p>
              <div>
                <h3 className="font-mono text-lg font-semibold text-text">{experience.role}</h3>
                <p className="mt-1 font-mono text-sm text-muted">{experience.company}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{experience.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experiences;
