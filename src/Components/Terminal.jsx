import React, { useEffect, useState } from "react";

// Each entry: a command line and the output it prints.
const sequence = [
  { cmd: "whoami", out: "Dona Houekpoeha — AI Systems Engineer" },
{
    cmd: "cat focus.txt",
    out: "Agentic AI · NLP · Computer Vision",
},
{
    cmd: "cat stack.txt",
    out: "Python · TypeScript · React · Java · Vercel AI SDK · PostgreSQL",
},
  { cmd: "status --check", out: "[ONLINE] open to collaborations & internships" },
];

const TYPE_SPEED = 28; // ms per character
const LINE_PAUSE = 450; // pause after a line completes

const Terminal = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const [typedCmd, setTypedCmd] = useState("");
  const [typedOut, setTypedOut] = useState("");
  const [phase, setPhase] = useState("cmd"); // cmd -> out -> done
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (lineIndex >= sequence.length) return;
    const current = sequence[lineIndex];

    if (phase === "cmd") {
      if (typedCmd.length < current.cmd.length) {
        const t = setTimeout(
          () => setTypedCmd(current.cmd.slice(0, typedCmd.length + 1)),
          TYPE_SPEED
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("out"), LINE_PAUSE / 2);
      return () => clearTimeout(t);
    }

    if (phase === "out") {
      if (typedOut.length < current.out.length) {
        const t = setTimeout(
          () => setTypedOut(current.out.slice(0, typedOut.length + 1)),
          TYPE_SPEED / 1.6
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        setHistory((h) => [...h, current]);
        setTypedCmd("");
        setTypedOut("");
        setPhase("cmd");
        setLineIndex((i) => i + 1);
      }, LINE_PAUSE);
      return () => clearTimeout(t);
    }
  }, [phase, typedCmd, typedOut, lineIndex]);

  const finished = lineIndex >= sequence.length;

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="absolute -inset-3 bg-accent/10 blur-2xl rounded-2xl" aria-hidden="true" />
      <div className="relative bg-surface border border-border rounded-xl shadow-2xl overflow-hidden">
        {/* title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-[#111925]">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <span className="w-3 h-3 rounded-full bg-[#f0883e]" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
          <span className="ml-3 text-xs font-mono text-muted">dona@systems — bash</span>
        </div>

        {/* body */}
        <div className="p-5 font-mono text-[13px] sm:text-sm leading-relaxed min-h-[220px]">
          {history.map((h, i) => (
            <div key={i} className="mb-2">
              <div>
                <span className="text-accent2">➜</span>{" "}
                <span className="text-accent">~</span>{" "}
                <span className="text-text">{h.cmd}</span>
              </div>
              <div className="text-muted pl-4">{h.out}</div>
            </div>
          ))}

          {!finished && (
            <div>
              <div>
                <span className="text-accent2">➜</span>{" "}
                <span className="text-accent">~</span>{" "}
                <span className="text-text">{typedCmd}</span>
                {phase === "cmd" && <span className="inline-block w-2 h-4 bg-accent align-middle ml-0.5 animate-blink" />}
              </div>
              {phase === "out" && (
                <div className="text-muted pl-4">
                  {typedOut}
                  <span className="inline-block w-2 h-4 bg-muted align-middle ml-0.5 animate-blink" />
                </div>
              )}
            </div>
          )}

          {finished && (
            <div>
              <span className="text-accent2">➜</span>{" "}
              <span className="text-accent">~</span>{" "}
              <span className="w-2 h-4 bg-accent inline-block align-middle animate-blink" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
