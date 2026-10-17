import { speaking } from "@/lib/content";
import { Section, SectionHeading } from "./Section";
import SpeakingGroup from "./SpeakingGroup";

export default function Speaking({ index }: { index?: number }) {
  return (
    <Section id="speaking" variant="white" index={index}>
      <SectionHeading title="Speaking & advocacy" />
      <p className="mb-10 max-w-3xl text-lg leading-relaxed text-ink/85">
        {speaking.intro}
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <SpeakingGroup heading="Mentorship" items={speaking.mentorship} />
        <SpeakingGroup heading="Speaking & panels" items={speaking.panels} />
        <SpeakingGroup heading="Workshops" items={speaking.workshops} />
        <SpeakingGroup heading="Governance" items={speaking.governance} />
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
