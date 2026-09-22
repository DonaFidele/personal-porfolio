import React from "react";
import Reveal from "./Reveal";

const involvementItems = [
  {
    period: "Dec 2023 — Jun 2025",
    role: "Gold Award Participant & Peer Mentor — Leadership Development",
    organization: "The Duke of Edinburgh's International Award",
    description: "Taught digital skills to 15 middle school girls and led a 13-girl working group through the award: 11 of 13 were certified (85% vs. 43% nationally). Achieved the Gold Level alongside full-time university coursework and mentored student cohorts through award milestones.",
  },
  {
    period: "Apr 2023 — Apr 2024",
    role: "Global Ambassador — Technology Advocacy",
    organization: "Human AI",
    description: "Represented the organization by sharing its ethical-AI and digital-literacy sessions with my network. Attended sessions including ‘Les enjeux de l'intelligence artificielle’ (certificate of participation).",
  },
  {
    period: "May 2023 — Aug 2024",
    role: "Team Member — Community Fundraising",
    organization: "NYADIS / OMLA Community",
    description: "Co-organized a fundraiser with fellow Mastercard Foundation Scholars to fund solar-kit donations for a primary school in Kogbétohoué, Klouékanmey. Helped raise funds and travelled with the team to install the kits.",
  },
  {
    period: "Jun 2026 — Present",
    role: "Incubator Fellow — Venture Scaling",
    organization: "FAST (Fund for Alumni Startups in Transition), Cohort 3 IDEA, Mastercard Foundation",
    description: "Selected for an incubator supporting startups founded by Mastercard Foundation alumni. Selected idea: MonTuteur, a digital platform connecting parents, students and qualified tutors to improve access to reliable, affordable tutoring in remote areas.",
  },
];

const Involvement = () => (
  <section id="involvement" className="bg-bg py-24">
    <div className="mx-auto max-w-6xl px-6">
      <Reveal>
        <p className="mb-2 font-mono text-xs text-accent">./involvement</p>
        <h2 className="mb-12 font-mono text-3xl font-bold text-text sm:text-4xl">Volunteering & Community</h2>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-2">
        {involvementItems.map((item, index) => (
          <Reveal key={item.role} delay={index * 80}>
            <article className="h-full border border-border bg-surface p-6 transition-colors hover:border-accent">
              <p className="font-mono text-xs text-accent">{item.period}</p>
              <h3 className="mt-3 font-mono text-base font-semibold leading-relaxed text-text">{item.role}</h3>
              <p className="mt-1 font-mono text-sm text-muted">{item.organization}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Involvement;
