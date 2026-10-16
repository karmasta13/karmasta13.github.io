"use client";

import { useState } from "react";
import { experience } from "@/lib/content";
import { Section, SectionHeading } from "./Section";

const INITIAL = 3;

export default function Experience({ index }: { index?: number }) {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? experience : experience.slice(0, INITIAL);
  const hiddenCount = experience.length - INITIAL;

  return (
    <Section id="experience" variant="white" index={index}>
      <SectionHeading title="Experience" />
      <div className="relative border-l border-ink/25 pl-6 sm:pl-8">
        {shown.map((e) => (
          <div key={e.period + e.title} className="relative mb-10 last:mb-0">
            <span
              className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full sm:-left-[39px]"
              style={{ backgroundColor: "rgb(var(--accent))" }}
            />
            <p className="eyebrow text-sm">{e.period}</p>
            <h3 className="mt-1 font-display text-xl font-bold tracking-tight">
              {e.title}
            </h3>
            <p className="text-sm text-ink/70">{e.org}</p>
            <ul className="mt-3 space-y-2 text-ink/80">
              {e.bullets.map((b, i) => (
                <li key={i} className="relative pl-5">
                  <span className="absolute left-0 top-0 text-accent">·</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {hiddenCount > 0 && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="link-underline mt-8 text-sm font-medium text-accent"
        >
          {expanded ? "Show fewer roles" : `Show ${hiddenCount} more role${hiddenCount > 1 ? "s" : ""}`}
        </button>
      )}
    </Section>
  );
}
