import { selectedWork } from "@/lib/content";
import { Section, SectionHeading } from "./Section";

// Staggered vertical offset per column: 1st up, 2nd down, 3rd further down.
const offset = ["", "lg:mt-12", "lg:mt-24"];

export default function Work({ index }: { index?: number }) {
  return (
    <Section id="work" variant="white" index={index}>
      <SectionHeading title="Some of my works" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {selectedWork.map((w, i) => (
          <article
            key={w.title}
            className={`flex flex-col overflow-hidden rounded-xl border border-ink/15 bg-white shadow-sm ${offset[i % 3]}`}
          >
            <div className="aspect-[16/10] w-full overflow-hidden bg-ink/[0.04]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={w.image}
                alt={w.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col items-center p-5 text-center">
              <span className="mb-2 rounded-full border border-ink/20 px-3 py-0.5 text-xs text-ink/70">
                {w.stat ? `${w.stat} ${w.statLabel}` : w.kicker}
              </span>
              <h3 className="font-display text-xl font-bold tracking-tight">
                {w.title}
              </h3>
              <p className="mt-1 text-xs text-ink/55">{w.role}</p>
              <p className="mt-2 flex-1 text-sm text-ink/80">{w.description}</p>
              <a
                href={w.href}
                target={w.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="mt-4 rounded-full bg-accent px-6 py-2 text-sm font-medium text-white transition-opacity hover:opacity-85"
              >
                View work
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
