"use client";

import { useEffect, useState } from "react";

export default function InkToggle() {
  const [ink, setInk] = useState<"charcoal" | "crimson">("charcoal");

  useEffect(() => {
    const saved = (localStorage.getItem("ink") as "charcoal" | "crimson") || "charcoal";
    setInk(saved);
  }, []);

  function toggle() {
    const next = ink === "charcoal" ? "crimson" : "charcoal";
    setInk(next);
    if (next === "crimson") {
      document.documentElement.setAttribute("data-ink", "crimson");
    } else {
      document.documentElement.removeAttribute("data-ink");
    }
    localStorage.setItem("ink", next);
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle ink color"
      title={ink === "charcoal" ? "Switch to red ink" : "Switch to black ink"}
      className="group flex items-center gap-2 text-sm eyebrow transition-opacity hover:opacity-80"
    >
      <span
        className="inline-block h-4 w-4 rounded-full border border-ink/40"
        style={{ backgroundColor: "rgb(var(--ink))" }}
      />
      <span className="not-italic">{ink === "charcoal" ? "black" : "red"}</span>
    </button>
  );
}
