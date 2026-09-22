import React from "react";
import Reveal from "./Reveal";

const experienceGroups = [
  {
    key: "work",
    label: "./experiences",
    title: "Work experience",
    items: [
      {
        period: "2024 — Present",
        role: "AI & Full-Stack Engineer",
        organization: "Independent Projects",
        description: "Building production-minded RAG applications, intelligent agents, and full-stack products from idea to deployment.",
      },
      {
        period: "2023 — 2024",
        role: "Data & Machine Learning Developer",
        organization: "Digital Innovation Lab",
        description: "Designed data workflows and machine learning prototypes to turn complex datasets into useful decisions.",
      },
      {
        period: "2022 — 2023",
        role: "Software Engineering Intern",
        organization: "Technology Studio",
        description: "Shipped responsive web experiences and internal tools while learning collaborative engineering practices.",
      },
    ],
  },
  {
    key: "education",
    label: "./education",
    title: "Education",
    items: [
      {
        period: "2021 — 2025",
        role: "B.Sc. in Computer Science",
        organization: "University of Abomey-Calavi",
        description: "Focused on software engineering, data systems, algorithms, and building useful technology for real communities.",
      },
      {
        period: "2023 — 2024",
        role: "Data Science Fellowship",
        organization: "Africa Tech Up / ISHEERO",
        description: "Advanced training in Python, statistics, NLP, and applied machine learning through practical projects.",
      },
    ],
  },
  {
    key: "community",
    label: "./volunteering",
    title: "Volunteering & community",
    items: [
      {
        period: "2023 — Present",
        role: "Digital Skills Mentor",
        organization: "Youth Tech Community",
        description: "Helping students discover programming, data, and responsible AI through workshops and peer mentoring.",
      },
      {
        period: "2022 — 2024",
        role: "Community Organizer",
        organization: "Open Source & Learning Network",
        description: "Coordinated learning sessions, shared resources, and collaborative projects for early-career builders.",
      },
    ],
  },
];

const Experiences = () => (
  <section id="experiences" className="bg-bg py-24">
    <div className="mx-auto max-w-6xl px-6">
      <Reveal>
        <p className="mb-2 font-mono text-xs text-accent">./experiences</p>
        <h2 className="mb-12 font-mono text-3xl font-bold text-text sm:text-4xl">A timeline of learning and impact</h2>
      </Reveal>

      <div className="flex flex-col gap-16">
        {experienceGroups.map((group) => (
          <div key={group.key}>
            <Reveal>
              <div className="mb-6 flex items-center gap-4">
                <h3 className="shrink-0 font-mono text-sm font-bold uppercase tracking-[0.16em] text-text">{group.title}</h3>
                <div className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>
            </Reveal>

            <div className="flex flex-col border-y border-border">
              {group.items.map((item, index) => (
                <Reveal key={item.role} delay={index * 80}>
                  <article className="grid gap-4 border-b border-border py-6 last:border-b-0 md:grid-cols-[150px_1fr] md:gap-8">
                    <p className="font-mono text-xs text-accent">{item.period}</p>
                    <div>
                      <h4 className="font-mono text-lg font-semibold text-text">{item.role}</h4>
                      <p className="mt-1 font-mono text-sm text-muted">{item.organization}</p>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{item.description}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experiences;
