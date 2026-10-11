import React from "react";
import Reveal from "./Reveal";

export default function SectionHeader({ icon, command, label }) {
  return (
    <Reveal>
      <div className="mb-10 flex items-center gap-4">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-accent">
          {React.createElement(icon, { "aria-hidden": true, className: "size-5", strokeWidth: 1.75 })}
        </span>
        <div className="flex flex-col">
          <span className="font-mono text-xs text-accent">{command}</span>
          <h2 className="font-mono text-lg font-bold tracking-tight text-text sm:text-xl">{label}</h2>
        </div>
        <div className="divider-line ml-4 flex-1" aria-hidden="true" />
      </div>
    </Reveal>
  );
}

