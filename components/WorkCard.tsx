"use client";

import { useState } from "react";
import type { Work } from "@/lib/content";

function TagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5">
      <path d="M20.6 13.4 11 3.8a2 2 0 0 0-1.4-.6H5a2 2 0 0 0-2 2v4.6a2 2 0 0 0 .6 1.4l9.6 9.6a2 2 0 0 0 2.8 0l4.6-4.6a2 2 0 0 0 0-2.8Z" />
      <circle cx="7.5" cy="7.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Heart({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M12 21s-7.5-4.6-10-9.3C.6 8.9 2 5.5 5.2 5.5c2 0 3.2 1.1 3.8 2.1.6-1 1.8-2.1 3.8-2.1 3.2 0 4.6 3.4 3.2 6.2C17.5 16.4 12 21 12 21Z" />
    </svg>
  );
}

export default function WorkCard({
  work,
  className = "",
}: {
  work: Work;
  className?: string;
}) {
  const [liked, setLiked] = useState(false);
  const tag = work.stat ? `${work.stat} ${work.statLabel}` : work.kicker;
  const external = work.href.startsWith("http");

  return (
    <article
      className={`flex flex-col border border-ink/15 bg-white p-3.5 shadow-sm transition-shadow hover:shadow-md ${className}`}
    >
      {/* Top bar: category tag + save heart */}
      <div className="flex items-center justify-between px-1 pt-0.5">
        {tag && (
          <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-ink/70">
            <span className="text-accent">
              <TagIcon />
            </span>
            {tag}
          </span>
        )}
        <button
          type="button"
          onClick={() => setLiked((v) => !v)}
          aria-pressed={liked}
          aria-label={liked ? "Saved" : "Save"}
          className="ml-auto text-accent/70 transition-colors hover:text-accent"
        >
          <Heart filled={liked} />
        </button>
      </div>

      {/* Inset framed image */}
      <div className="mt-3 overflow-hidden border border-ink/10 bg-ink/[0.04] p-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={work.image}
          alt={work.title}
          className="h-44 w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col items-center p-4 text-center">
        <h3 className="font-display text-xl font-bold tracking-tight">
          {work.title}
        </h3>
        <p className="mt-1 text-xs text-ink/70">{work.role}</p>
        <p className="mt-2 flex-1 text-sm text-ink/80">{work.description}</p>
        <a
          href={work.href}
          target={external ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="mt-4 rounded-full bg-accent px-6 py-2 text-sm font-medium text-white transition-opacity hover:opacity-85"
        >
          View work
        </a>
      </div>
    </article>
  );
}
