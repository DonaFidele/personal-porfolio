import React, { useState } from "react";
import {
  Check,
  Clipboard,
  Download,
  ExternalLink,
} from "lucide-react";
import Reveal from "./Reveal";
import { certificates } from "../../data/certificates";

const LINKEDIN_URL = "https://www.linkedin.com/in/dona-houekpoeha/details/certifications";

function CertificateCard({ certificate }) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(certificate.url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className="group relative overflow-hidden rounded-lg border border-[#30363d] bg-[#161b22] transition-all duration-300 ease-out hover:scale-[1.04] hover:border-[#f0883e] focus-within:scale-[1.04] focus-within:border-[#f0883e]">
      <div className="aspect-[1.55] overflow-hidden border-b border-[#30363d] bg-[#0d1117]">
        <img
          src={certificate.imageUrl}
          alt={`Preview of ${certificate.title} certificate`}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex min-h-28 flex-col gap-2 p-4">
        <h3 className="font-mono text-sm font-semibold leading-snug text-[#f0f6fc]">{certificate.title}</h3>
        <p className="font-mono text-[11px] text-[#8b949e]">{certificate.issuer} · {certificate.date}</p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center gap-3 bg-[#0d1117]/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
        <a
          href={certificate.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${certificate.title}`}
          title="Open certificate"
          className="flex size-10 items-center justify-center rounded-full border border-[#30363d] bg-[#161b22] text-[#f0f6fc] transition-colors hover:border-[#f0883e] hover:text-[#f0883e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f0883e]"
        >
          <ExternalLink aria-hidden="true" className="size-4" />
        </a>
        <a
          href={certificate.downloadUrl}
          download
          aria-label={`Download ${certificate.title}`}
          title="Download certificate"
          className="flex size-10 items-center justify-center rounded-full border border-[#30363d] bg-[#161b22] text-[#f0f6fc] transition-colors hover:border-[#f0883e] hover:text-[#f0883e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f0883e]"
        >
          <Download aria-hidden="true" className="size-4" />
        </a>
        <button
          type="button"
          onClick={copyLink}
          aria-label={copied ? "Certificate link copied" : `Copy ${certificate.title} link`}
          title={copied ? "Copied!" : "Copy certificate link"}
          className="flex size-10 items-center justify-center rounded-full border border-[#30363d] bg-[#161b22] text-[#f0f6fc] transition-colors hover:border-[#f0883e] hover:text-[#f0883e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f0883e]"
        >
          {copied ? <Check aria-hidden="true" className="size-4" /> : <Clipboard aria-hidden="true" className="size-4" />}
        </button>
        {copied && <span className="absolute bottom-4 rounded border border-[#f0883e]/50 bg-[#161b22] px-2 py-1 font-mono text-[10px] text-[#f0883e]">copié !</span>}
      </div>
    </article>
  );
}

export default function CertificatesSection() {
  return (
    <section id="certificates" className="border-y border-[#30363d] bg-[#0d1117] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-10">
            <p className="font-mono text-xs text-[#f0883e]">./certificates</p>
            <div className="divider-line mt-8" aria-hidden="true" />
          </div>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {certificates.slice(0, 6).map((certificate, index) => (
            <Reveal key={certificate.title} delay={index * 50}>
              <CertificateCard certificate={certificate} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <div className="mt-10 text-center">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-sm text-[#f0883e] transition-colors hover:text-[#ffb77a] focus:outline-none focus-visible:underline">
              See all certificates on LinkedIn ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
