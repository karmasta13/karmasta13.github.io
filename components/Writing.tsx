import { writing } from "@/lib/content";
import { Section, SectionHeading } from "./Section";

export default function Writing({ index }: { index?: number }) {
  return (
    <Section id="writing" index={index}>
      <SectionHeading title="Writing" />
      <ul className="divide-y divide-ink/15">
        {writing.map((w) => (
          <li key={w.title} className="py-5 first:pt-0">
            <a
              href={w.href}
              target={w.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1"
            >
              <h3 className="font-display text-xl font-bold tracking-tight">
                <span className="link-underline">{w.title}</span>
              </h3>
              <span className="eyebrow text-sm">{w.source}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
