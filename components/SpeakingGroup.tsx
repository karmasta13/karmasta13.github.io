"use client";

import { useState } from "react";

const LIMIT = 3;

export default function SpeakingGroup({
  heading,
  items,
}: {
  heading: string;
  items: { title: string; description: string }[];
}) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = items.length > LIMIT;
  const shown = expanded ? items : items.slice(0, LIMIT);

  return (
    <div className="flex flex-col rounded-lg border border-ink/15 bg-white p-6 shadow-sm">
      <h3 className="eyebrow mb-5 text-base">{heading}</h3>
      <ul className="flex-1 divide-y divide-ink/10">
        {shown.map((it) => (
          <li key={it.title} className="py-3.5 first:pt-0 last:pb-0">
            <p className="font-display text-base font-semibold tracking-tight">
              {it.title}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink/65">
              {it.description}
            </p>
          </li>
        ))}
      </ul>
      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="link-underline mt-5 self-start text-sm font-medium text-accent"
        >
          {expanded ? "See less" : `See ${items.length - LIMIT} more`}
        </button>
      )}
    </div>
  );
}
