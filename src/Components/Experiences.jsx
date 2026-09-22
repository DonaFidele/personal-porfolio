import React from "react";
import Reveal from "./Reveal";

const educationItems = [
  {
    period: "Aug 2021 — Mar 2025",
    role: "B.Sc. in Computer Science (Software Engineering)",
    organization: "University of Abomey-Calavi – IFRI",
    description: "GPA: 14.54/20 (Mention Bien) | Mastercard Foundation Scholars Program, Fully-Funded Recipient | Interests: Music, Fitness, Volunteering & Community Service",
    details: [
      "Final-year thesis: EntretienIA - real-time AI job-interview simulation platform (grade 18/20), supervised by Prof. Eugène C. Ezin",
      "Research article from final-year project (EntretienIA), accepted at the COSTIC ESATIC 2026 colloquium",
      "Ranked 2nd out of 84 students - cumulative GPA 15.26/20; Mastercard Foundation Scholar"
    ],
  },
  {
    period: "Jul 2023 — Jul 2024",
    role: "Data Science Track — Technical Training",
    organization: "GirlLEAD Women in Data",
    description: "Remote",
    details: [
      "Awarded merit-based access to international data science tracks and tech hackathons",
      "Completed the Data Science Track on DataCamp (Python, SQL, machine-learning pipelines)"
    ],
  },
  {
    period: "Feb 11 — Jun 14, 2023",
    role: "Data Science Trainee — Advanced Analytics & NLP",
    organization: "Africa Tech Up Tour – ISHEERO",
    description: "Sémé City, Benin",
    details: [
      "Selected for a competitive 4-month intensive data science program through OpenClassrooms",
      "Fine-tuned a Hugging Face model to classify customer reviews as positive, negative or mixed"
    ],
  },
];

const workExperienceItems = [
  {
    period: "Feb 2024 — Aug 2024",
    role: "Artificial Intelligence Intern — Data Analysis & Modeling",
    organization: "AUTCHA",
    description: "Arconville, Benin",
    details: [
      "Conducted exploratory data analysis on 20,000+ data points across 17+ features of Gozem delivery data to identify patterns supporting delivery-route optimization"
    ],
  },
  {
    period: "Jul 2025 — Dec 2025",
    role: "Full-Stack Web Developer — Platform Engineering",
    organization: "Dwinitech",
    description: "Cotonou, Benin",
    details: [
      "Developed campaign-management and user-profile modules for AfriMediaX using React.js and Laravel",
      "Integrated secure REST APIs with asynchronous token-based session management, and built dynamic web pages in Webflow CMS with reusable components"
    ],
  },
  {
    period: "Aug 2024 — Sep 2024",
    role: "Full-Stack Developer Intern — Application Maintenance",
    organization: "FUN HIGH TECH",
    description: "Abomey-Calavi, Benin",
    details: [
      "Maintained dynamic, database-driven web applications using PHP to deploy secure server-side functionalities",
      "Optimized MySQL queries and structured front-end interfaces with HTML5, CSS3 and JavaScript"
    ],
  },
];

const awardsItems = [
  {
    period: "Nov 2023",
    role: "Fiscathon — 1st Place, National Winner",
    description: "Co-designed and pitched an AI-powered tax forecasting platform with an integrated chatbot for fiscal queries; 1st among 18 teams (90+ participants) nationwide; developed its Node.js backend.",
  },
  {
    period: "Dec 2023",
    role: "JSTIM Hackathon — 1st Place, National Winner & Abdoulaye Bio-Tchane Innovation Prize",
    description: "Led a 3-member team to pitch an AI solution recommending study pathways based on job-market trends; 1st among 10 finalist teams; developed its Node.js backend.",
  },
];

const Experiences = () => (
  <section id="experiences" className="bg-bg py-24">
    <div className="mx-auto max-w-6xl px-6">
      <Reveal>
        <p className="mb-2 font-mono text-xs text-accent">./experience</p>
        <h2 className="mb-16 font-mono text-3xl font-bold text-text sm:text-4xl">Experience & Education</h2>
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left Column: Education */}
        <div>
          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <h3 className="shrink-0 font-mono text-sm font-bold uppercase tracking-[0.16em] text-text">Education</h3>
              <div className="h-px flex-1 bg-border" aria-hidden="true" />
            </div>
          </Reveal>

          <div className="flex flex-col border-y border-border">
            {educationItems.map((item, index) => (
              <Reveal key={item.role} delay={index * 80}>
                <article className="border-b border-border py-6 last:border-b-0">
                  <p className="font-mono text-xs text-accent">{item.period}</p>
                  <h4 className="mt-2 font-mono text-base font-semibold text-text">{item.role}</h4>
                  <p className="mt-1 font-mono text-sm text-muted">{item.organization}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{item.description}</p>
                  {item.details && (
                    <ul className="mt-3 space-y-1">
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex gap-2 text-xs text-muted">
                          <span className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right Column: Work Experience & Awards */}
        <div>
          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <h3 className="shrink-0 font-mono text-sm font-bold uppercase tracking-[0.16em] text-text">Professional Experience</h3>
              <div className="h-px flex-1 bg-border" aria-hidden="true" />
            </div>
          </Reveal>

          <div className="flex flex-col border-y border-border">
            {workExperienceItems.map((item, index) => (
              <Reveal key={item.role} delay={index * 80}>
                <article className="border-b border-border py-6 last:border-b-0">
                  <p className="font-mono text-xs text-accent">{item.period}</p>
                  <h4 className="mt-2 font-mono text-base font-semibold text-text">{item.role}</h4>
                  <p className="mt-1 font-mono text-sm text-muted">{item.organization}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{item.description}</p>
                  {item.details && (
                    <ul className="mt-3 space-y-1">
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex gap-2 text-xs text-muted">
                          <span className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={workExperienceItems.length * 80 + 80}>
            <div className="mt-8 border-y border-border">
              <div className="mb-4 flex items-center gap-4 pt-6">
                <h3 className="shrink-0 font-mono text-sm font-bold uppercase tracking-[0.16em] text-text">Awards</h3>
                <div className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>

              <div className="flex flex-col">
                {awardsItems.map((item, index) => (
                  <Reveal key={item.role} delay={(workExperienceItems.length + index + 1) * 80}>
                    <article className="border-b border-border py-4 last:border-b-0">
                      <p className="font-mono text-xs text-accent">{item.period}</p>
                      <h4 className="mt-2 font-mono text-sm font-semibold text-text">{item.role}</h4>
                      <p className="mt-2 text-xs leading-relaxed text-muted">{item.description}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default Experiences;
