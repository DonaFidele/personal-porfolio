import React, { useState } from "react";
import { Send } from "lucide-react";
import Reveal from "./Reveal";

const EMAIL = "houekpoehafidele@gmail.com";

const Contacts = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    setIsSent(true);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start">
          {/* LEFT — why reach out */}
          <Reveal>
            <p className="font-mono text-xs text-accent mb-2">./contact</p>
            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-text mb-6">
              Let's talk systems
            </h2>
            <p className="text-muted leading-relaxed max-w-md mb-8">
I'm open to AI/RAG systems, and agentic AI collaborations or research projects, full-stack development, with a growing interest in computer vision. If it involves turning an idea into something real and usable, I'm interested.            </p>

            <div className="space-y-4 font-mono text-sm text-text">
              <div className="flex gap-3">
                <span className="text-accent">▸</span>
                <span>Full-stack web development - React, TypeScript, Laravel</span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent">▸</span>
                <span>LLM Applications & RAG pipelines - Vercel AI SDK</span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent">▸</span>
                <span>Machine Learning & NLP - exploring Computer Vision</span>
              </div>
            </div>
          </Reveal>

          {/* RIGHT — contact form and direct links */}
          <Reveal delay={100}>
            <div className="flex flex-col gap-6">
              <form
                onSubmit={handleSubmit}
                className="border border-border rounded-xl bg-surface p-5 sm:p-6"
              >
                <div className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="contact-name" className="font-mono text-xs text-muted">
                      name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="mt-2 w-full rounded-md border border-border bg-bg px-3 py-2.5 font-mono text-sm text-text placeholder:text-muted/60 outline-none transition-colors focus:border-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="font-mono text-xs text-muted">
                      email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-md border border-border bg-bg px-3 py-2.5 font-mono text-sm text-text placeholder:text-muted/60 outline-none transition-colors focus:border-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="font-mono text-xs text-muted">
                      message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your idea..."
                      className="mt-2 w-full resize-y rounded-md border border-border bg-bg px-3 py-2.5 font-mono text-sm text-text placeholder:text-muted/60 outline-none transition-colors focus:border-accent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-accent px-4 py-2.5 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-bg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <Send aria-hidden="true" className="h-4 w-4" />
                    Send message
                  </button>
                  {isSent && <p role="status" className="font-mono text-xs text-accent">Votre client email a été ouvert pour envoyer le message.</p>}
                </div>
              </form>

            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
