import { awards } from "@/lib/content";
import { Section, SectionHeading } from "./Section";

export default function Awards({ index }: { index?: number }) {
  return (
    <Section id="awards" index={index}>
      <SectionHeading title="Awards & recognition" />
      <div className="grid gap-5 sm:grid-cols-3">
        {awards.map((a) => (
          <article key={a.title} className="card-frame rounded-sm p-6">
            <h3 className="font-display text-lg font-bold leading-snug tracking-tight">
              {a.title}
            </h3>
            <p className="mt-2 text-sm text-ink/80">{a.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
