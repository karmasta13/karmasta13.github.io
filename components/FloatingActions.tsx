"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/content";

const c = profile.contact;

function Instagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true" focusable="false">
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.82-2.05 3.75-2.05C20.5 8.65 22 10.6 22 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9z" />
    </svg>
  );
}

function Mail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true" focusable="false">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function ChevronUp() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true" focusable="false">
      <path d="m6 15 6-6 6 6" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true" focusable="false">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [showCue, setShowCue] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 600);
      setShowCue(window.scrollY < 200);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const base =
    "flex h-11 w-11 items-center justify-center rounded-full border shadow-sm";
  const ghost =
    `${base} border-ink/15 bg-paper text-ink hover:border-accent hover:text-accent`;
  const primary = `${base} border-accent bg-accent text-white hover:opacity-90`;

  return (
    <nav
      aria-label="Quick actions"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5 print:hidden"
    >
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className={ghost}
        >
          <ChevronUp />
        </button>
      )}
      <a
        href={c.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={ghost}
      >
        <Instagram />
      </a>
      <a
        href={c.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={ghost}
      >
        <LinkedIn />
      </a>
      <div className="flex items-center gap-2">
        {showCue && (
          <a
            href="#about"
            aria-label="Scroll to content"
            className="flex items-center gap-1 whitespace-nowrap rounded-full border border-ink/15 bg-paper px-3.5 py-2 text-sm font-medium text-ink shadow-sm transition-colors hover:border-accent hover:text-accent"
          >
            Scroll down
            <span className="scroll-cue inline-flex">
              <ChevronDown />
            </span>
          </a>
        )}
        <a href="#contact" aria-label="Contact me" title="Contact me" className={primary}>
          <Mail />
        </a>
      </div>
    </nav>
  );
}
