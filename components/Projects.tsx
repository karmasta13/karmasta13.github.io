"use client";

import { useState } from "react";
import { projects } from "@/lib/content";
import { Section, SectionHeading } from "./Section";

const INITIAL = 4;

export default function Projects({ index }: { index?: number }) {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? projects : projects.slice(0, INITIAL);
  const hiddenCount = projects.length - INITIAL;

  return (
    <Section id="projects" variant="white" index={index}>
      <SectionHeading title="A few other things I've built" />
      <div className="grid gap-5 sm:grid-cols-2">
        {shown.map((p) => (
          <article key={p.title} className="card-frame flex flex-col rounded-sm p-6">
            <h3 className="font-display text-xl font-bold tracking-tight">
              {p.title}
            </h3>
            <p className="mt-2 flex-1 text-ink/80">{p.description}</p>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-4 inline-block self-start text-sm font-medium text-accent"
            >
              GitHub →
            </a>
          </article>
        ))}
      </div>
      {hiddenCount > 0 && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="link-underline mt-8 text-sm font-medium text-accent"
        >
          {expanded ? "Show fewer projects" : `Show ${hiddenCount} more projects`}
        </button>
      )}
    </Section>
  );
}
