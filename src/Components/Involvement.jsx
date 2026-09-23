import React from "react";
import { HeartHandshake } from "lucide-react";
import Reveal from "./Reveal";

const involvementItems = [
  {
    period: "Jun 2026 — Present",
    role: "Incubator Fellow — Venture Scaling",
    organization: "FAST (Fund for Alumni Startups in Transition) · Cohort 3 IDEA · Mastercard Foundation",
    location: "Cotonou, Benin",
    description:
      "Selected for an incubator supporting startups founded by Mastercard Foundation alumni to develop MonTuteur, a digital platform connecting parents, students and qualified tutors to improve access to reliable, affordable tutoring in remote areas.",
  },
  {
    period: "2024 — Present",
    role: "Active Member",
    organization: "BAMFA — Beninese Association of Mastercard Foundation Alumni",
    location: "Abomey-Calavi, Benin",
    description:
      "Alumni network engagement; connecting Mastercard Foundation Scholar alumni to share opportunities, knowledge, and community support.",
  },
  {
    period: "Jul 2023 — Present",
    role: "Active Member",
    organization: "One Million Leaders Africa (OMLA)",
    location: "Abomey-Calavi, Benin",
    description:
      "Organized educational donation initiatives for primary-school students; led community-development projects including water-access improvement; coordinated logistics with local stakeholders. Co-organized a fundraiser with fellow Mastercard Foundation Scholars to fund and install solar kits for a primary school in Kogbétohoué, Klouékanmey.",
  },
  {
    period: "Dec 2023 — Jun 2025",
    role: "Gold Award Participant & Peer Mentor — Leadership Development",
    organization: "The Duke of Edinburgh's International Award",
    location: "Remote",
    description:
      "Taught digital skills to 15 middle-school girls and led a 13-girl working group to Gold Level certification (11 of 13 certified, 85% vs. 43% nationally); achieved Gold Level myself alongside full-time university coursework.",
  },
  {
    period: "Apr 2023 — Apr 2024",
    role: "Global Ambassador — Technology Advocacy",
    organization: "Human AI",
    location: "Remote",
    description:
      "Amplified Human AI's ethical-AI and digital-literacy mission by resharing foundation activities across my network and personally inviting ~20 people to conferences and sessions.",
  },
];

const Involvement = () => (
  <section id="involvement" className="bg-bg pb-28">
    <div className="mx-auto max-w-4xl px-6">
      <Reveal>
        <div className="mb-14 flex items-center gap-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-accent">
            <HeartHandshake aria-hidden="true" className="size-5" strokeWidth={1.75} />
          </span>
          <div className="flex flex-col">
            <span className="font-mono text-xs text-accent">./volunteering</span>
            <h2 className="font-mono text-2xl font-bold tracking-tight text-text sm:text-3xl">
              Volunteering &amp; Community
            </h2>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-7 md:grid-cols-2">
        {involvementItems.map((item, index) => (
          <Reveal key={item.role} delay={index * 90}>
            <article className="flex h-full flex-col rounded-xl border border-border bg-surface p-8 transition-colors hover:border-accent">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{item.period}</p>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-text">{item.role}</h3>
              <p className="mt-2 font-mono text-sm leading-relaxed text-accent2">
                {item.organization}
                {item.location && <span className="text-muted"> · {item.location}</span>}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Involvement;
