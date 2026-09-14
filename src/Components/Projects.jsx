import React from "react";
import { Github, Lock, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  {
    title: "dona-chat",
    description:
      "A RAG-powered chatbot built with Next.js, Vercel AI SDK, and PostgreSQL (Neon) — enabling contextual retrieval and document-grounded conversations with an LLM.",
    tags: ["Next.js", "TypeScript", "Vercel AI SDK", "RAG", "PostgreSQL"],
    github: "https://github.com/DonaFidele/dona-chat",
    status: "Public",
  },
  {
    title: "oxymore-generator-cq",
    description:
      "An AI that turns two opposing words (an oxymoron) into an original poem. Anyone can create, publish, and share their own verses, generated from their emotions in the moment. Powered by a language model and carefully crafted prompt engineering, for sincere poetry — never generic.",
    tags: ["Next.js", "Vercel AI SDK", "Prompt Engineering", "Poetry Generation"],
    github: "https://github.com/DonaFidele/oxymore-generator-cq",
    status: "Public",
  },
{
  title: "Puissance4",
  description:
    "A terminal-based implementation of Connect Four in Python, playable against a rule-based computer opponent. The opponent evaluates the board to detect winning moves, block the player's threats, and otherwise picks a strategic column — all through hand-coded decision logic, no machine learning involved.",
  tags: ["Python", "Game Development", "Algorithm Design"],
  github: "https://github.com/DonaFidele/Puissance4",
  status: "Public",
},
{
  title: "JeuPendu",
  description:
    "A terminal-based Hangman game in Python. The player guesses a randomly selected word letter by letter within a limited number of attempts, with ASCII-art intro/win screens and a persistent score-tracking system saved to a local file.",
  tags: ["Python", "Game Development", "File I/O"],
  github: "https://github.com/DonaFidele/JeuPendu",
  status: "Public",
},
  {
  title: "friare-mentorship-plateforme",
  description:
    "Frontend for the FRIARE mentorship program platform (Fondation Ratheil pour une IA Responsable et Efficiente). Built with React and Tailwind CSS, featuring role-based access (admin/mentor/mentee) for recruitment management, scheduling, courses, and certificate generation.",
  tags: ["React", "Tailwind CSS", "Role-Based Access"],
  github: null,
  status: "Private",
},
  {
  title: "friare-mentorship-back",
  description:
    "Backend for the FRIARE mentorship program platform (Fondation Ratheil pour une IA Responsable et Efficiente). Built with Laravel and MySQL, exposing REST APIs for role-based user management (admin/mentor/mentee), recruitment, scheduling, and certificate generation.",
  tags: ["Laravel", "MySQL", "REST APIs"],
  github: null,
  status: "Private",
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
              href="https://github.com/DonaFidele?tab=repositories"
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
