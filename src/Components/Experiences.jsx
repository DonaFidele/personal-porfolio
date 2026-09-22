import React from "react";
import { GraduationCap, Briefcase, Trophy } from "lucide-react";
import Reveal from "./Reveal";

const educationItems = [
  {
    period: "Aug 2021 — Mar 2025",
    role: "B.Sc. in Computer Science (Software Engineering)",
    organization: "University of Abomey-Calavi – IFRI",
    location: "Abomey-Calavi, Benin",
    description:
      "GPA: 14.54/20 (Mention Bien) · Mastercard Foundation Scholars Program, Fully-Funded Recipient",
    details: [
      "Final-year thesis: EntretienIA — real-time AI job-interview simulation platform (grade 18/20), supervised by Prof. Eugène C. Ezin",
      "Research article from the EntretienIA project accepted at the COSTIC ESATIC 2026 colloquium",
      "Ranked 2nd out of 84 students — cumulative GPA 15.26/20",
    ],
    tags: ["Music", "Fitness", "Volunteering & Community Service"],
  },
  {
    period: "Feb 11 — Jun 14, 2023",
    role: "Data Science Trainee — Advanced Analytics & NLP",
    organization: "Africa Tech Up Tour – iSHEERO",
    location: "Sèmè City, Benin",
    details: [
      "Selected for a competitive 4-month intensive data science program through OpenClassrooms",
      "Fine-tuned a Hugging Face model to classify customer reviews as positive, negative or mixed",
    ],
  },
  {
    period: "Jul 2023 — Jul 2024",
    role: "Data Science Track — Technical Training",
    organization: "GirlLEAD Women in Data",
    location: "Remote",
    details: [
      "Awarded merit-based access to international data science tracks and tech hackathons",
      "Completed the Data Science Track on DataCamp (Python, SQL, machine-learning pipelines)",
    ],
  },
];

const workExperienceItems = [
  {
    period: "Jul 2025 — Dec 2025",
    role: "Full-Stack Web Developer — Platform Engineering",
    organization: "Dwrintech",
    location: "Cotonou, Benin",
    details: [
      "Developed campaign-management and user-profile modules for AfriMediaX using React.js and Laravel",
      "Integrated secure REST APIs with asynchronous token-based session management, and built dynamic web pages in Webflow CMS with reusable components",
    ],
  },
  {
    period: "Aug 2024 — Sep 2024",
    role: "Full-Stack Developer Intern — Application Maintenance",
    organization: "FUN HIGH TECH",
    location: "Abomey-Calavi, Benin",
    details: [
      "Maintained dynamic, database-driven web applications using PHP to deploy secure server-side functionalities",
      "Optimized MySQL queries and structured front-end interfaces with HTML5, CSS3 and JavaScript",
    ],
  },
  {
    period: "Feb 2024 — Aug 2024",
    role: "Artificial Intelligence Intern — Data Analysis & Modeling",
    organization: "ALITCHA",
    location: "Arconville, Benin",
    details: [
      "Conducted exploratory data analysis on 20,000+ data points across 17+ features of Gozem delivery data to identify patterns supporting delivery-route optimization",
    ],
  },
];

const awardsItems = [
  {
    period: "Nov 2023",
    role: "Fiscathon — 1st Place, National Winner",
    description:
      "Co-designed and pitched an AI-powered tax-forecasting platform with an integrated chatbot for fiscal queries; 1st among 18 teams (90+ participants) nationwide; developed its Node.js backend.",
  },
  {
    period: "Dec 2023",
    role: "JSTIM Hackathon — 1st Place, National Winner & Abdoulaye Bio-Tchane Innovation Prize",
    description:
      "Led a 3-member team to pitch an AI solution recommending study pathways based on job-market trends; 1st among 10 finalist teams; developed its Node.js backend.",
  },
];

const SectionHeader = ({ icon: Icon, label, command }) => (
  <Reveal>
    <div className="mb-10 flex items-center gap-4">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-accent">
        <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
      </span>
      <div className="flex flex-col">
        <span className="font-mono text-xs text-accent">{command}</span>
        <h3 className="font-mono text-lg font-bold tracking-tight text-text sm:text-xl">{label}</h3>
      </div>
      <div className="ml-2 hidden h-px flex-1 bg-border sm:block" aria-hidden="true" />
    </div>
  </Reveal>
);

const TimelineItem = ({ item, delay, isLast }) => (
  <Reveal delay={delay}>
    <article className="relative pl-10 pb-14 last:pb-0 sm:pl-12">
      {/* rail */}
      {!isLast && (
        <span
          className="absolute left-[7px] top-3 bottom-0 w-px bg-border sm:left-[9px]"
          aria-hidden="true"
        />
      )}
      {/* dot */}
      <span
        className="absolute left-0 top-1.5 flex size-[15px] items-center justify-center rounded-full border-2 border-accent bg-bg sm:size-[19px]"
        aria-hidden="true"
      >
        <span className="size-1.5 rounded-full bg-accent" />
      </span>

      <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{item.period}</p>
      <h4 className="mt-3 text-lg font-semibold leading-snug text-text">{item.role}</h4>
      <p className="mt-1.5 font-mono text-sm text-accent2">
        {item.organization}
        {item.location && <span className="text-muted"> · {item.location}</span>}
      </p>

      {item.description && (
        <p className="mt-4 text-sm leading-relaxed text-muted">{item.description}</p>
      )}

      {item.details && (
        <ul className="mt-4 space-y-2.5">
          {item.details.map((detail, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="mt-2 inline-block size-1.5 flex-shrink-0 rounded-full bg-accent2/70" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}

      {item.tags && (
        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  </Reveal>
);

const Experiences = () => (
  <section id="experiences" className="bg-bg py-28">
    <div className="mx-auto max-w-4xl px-6">
      <Reveal>
        <p className="mb-2 font-mono text-xs text-accent">./experience</p>
        <h2 className="mb-20 font-mono text-3xl font-bold text-text sm:text-4xl">
          Experience &amp; Education
        </h2>
      </Reveal>

      {/* Education */}
      <div className="mb-24">
        <SectionHeader icon={GraduationCap} label="Education" command="~/education" />
        <div>
          {educationItems.map((item, index) => (
            <TimelineItem
              key={item.role}
              item={item}
              delay={index * 90}
              isLast={index === educationItems.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Professional Experience */}
      <div className="mb-24">
        <SectionHeader icon={Briefcase} label="Professional Experience" command="~/work" />
        <div>
          {workExperienceItems.map((item, index) => (
            <TimelineItem
              key={item.role}
              item={item}
              delay={index * 90}
              isLast={index === workExperienceItems.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Awards */}
      <div>
        <SectionHeader icon={Trophy} label="Awards" command="~/awards" />
        <div className="grid gap-6 sm:grid-cols-2">
          {awardsItems.map((item, index) => (
            <Reveal key={item.role} delay={index * 90}>
              <article className="flex h-full flex-col rounded-xl border border-border bg-surface p-7 transition-colors hover:border-accent">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                  {item.period}
                </p>
                <h4 className="mt-3 text-base font-semibold leading-snug text-text">{item.role}</h4>
                <p className="mt-4 text-sm leading-relaxed text-muted">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experiences;
