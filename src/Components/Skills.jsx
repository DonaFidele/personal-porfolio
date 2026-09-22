import React from "react";
import Reveal from "./Reveal";

const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C++", "C", "PHP", "SQL"],
  },
  {
    category: "AI / Machine Learning",
    items: ["PyTorch", "TensorFlow", "Keras", "NumPy", "Pandas", "scikit-learn", "Matplotlib", "Seaborn", "NLTK", "Hugging Face Transformers", "ANN", "CNN", "RNN/LSTM"]
,
  },
  {
    category: "LLM",
    items:  ["Vercel AI SDK", "RAG", "Hugging Face"],
  },
  {
    category: "Full-Stack Development",
    items: ["React", "Next.js", "Django", "Laravel", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap", "REST APIs", "HTML", "CSS"],
  },
    {
    category: "DevOps / Infrastructure",
    items: ["Git", "GitHub", "Docker", "Linux/bash", "Postman", "Jupyter Notebook", "Google Colab", "Figma", "Photoshop", "Power BI", "Excel"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
  },

];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="mb-14">
            <p className="font-mono text-xs text-accent mb-2">./skills</p>
            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-text">
              What I work with
            </h2>
            <p className="text-muted mt-3 max-w-xl">
              Grouped the way I actually reach for them — low-level systems work,
              model internals, and the backend plumbing that ties it together.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 60}>
              <div className="h-full border border-border rounded-xl p-6 bg-surface hover:border-accent/50 transition-colors">
                <h3 className="font-mono text-sm text-accent2 mb-4 tracking-wide">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-3 py-1.5 rounded-md bg-bg border border-border text-text/90 hover:border-accent hover:text-accent transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
