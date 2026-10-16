"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", id: "about", label: "About" },
  { href: "#work", id: "work", label: "Work" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#speaking", id: "speaking", label: "Speaking" },
];

function Laptop() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="rgb(var(--accent))"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="5" width="16" height="11" rx="1.5" />
      <path d="M2 20h20" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export default function Nav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = ["top", ...links.map((l) => l.id)];
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const threshold = window.scrollY + 140;
        let current = "";
        for (const id of ids) {
          const el = document.getElementById(id);
          if (!el) continue;
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (top <= threshold) current = id;
        }
        setActive(current === "top" ? "" : current);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className="surface-paper sticky top-0 z-30 font-sans">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-6 py-3.5">
        {/* Left: brand */}
        <a href="#top" className="flex shrink-0 items-center gap-2">
          <Laptop />
          <span className="text-[15px] font-semibold tracking-tight text-ink">
            Tech with Labbi
          </span>
        </a>

        {/* Center: links with active pill */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "true" : undefined}
                className={
                  "rounded-full px-4 py-1.5 text-sm transition-colors " +
                  (isActive
                    ? "border border-ink/15 bg-white/80 text-ink shadow-sm"
                    : "border border-transparent text-ink/65 hover:text-ink")
                }
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Get in touch pill */}
        <a
          href="#contact"
          className="flex shrink-0 items-center gap-2 rounded-full border border-ink/25 bg-white/50 px-4 py-1.5 text-sm text-ink transition-colors hover:border-ink/50 hover:bg-white/80"
        >
          Get in touch
          <ArrowUpRight />
        </a>
      </div>
    </header>
  );
}
