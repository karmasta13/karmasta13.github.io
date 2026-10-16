import { speaking } from "@/lib/content";
import { Section, SectionHeading } from "./Section";

function Group({
  heading,
  items,
}: {
  heading: string;
  items: { title: string; description: string }[];
}) {
  return (
    <div>
      <h3 className="eyebrow mb-4 text-base">{heading}</h3>
      <div className="space-y-5">
        {items.map((it) => (
          <div key={it.title}>
            <p className="font-display text-lg font-semibold tracking-tight">
              {it.title}
            </p>
            <p className="mt-0.5 text-ink/80">{it.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Speaking({ index }: { index?: number }) {
  return (
    <Section id="speaking" variant="white" index={index}>
      <SectionHeading title="Speaking & advocacy" />
      <p className="mb-10 max-w-3xl text-lg leading-relaxed text-ink/85">
        {speaking.intro}
      </p>
      <div className="grid gap-12 md:grid-cols-2">
        <Group heading="Mentorship" items={speaking.mentorship} />
        <Group heading="Speaking & panels" items={speaking.panels} />
      </div>
      <div className="mt-12">
        <h3 className="eyebrow mb-4 text-base">Topics I speak on</h3>
        <ul className="flex flex-wrap gap-2.5">
          {speaking.topics.map((t) => (
            <li
              key={t}
              className="rounded-full border border-ink/30 px-4 py-1.5 text-sm text-ink/80"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
