import { selectedWork } from "@/lib/content";
import { Section, SectionHeading } from "./Section";
import WorkCard from "./WorkCard";

// Staggered vertical offset per column: each column shifts down a step while
// keeping the same card height (translate shifts without shrinking).
const offset = ["", "lg:translate-y-6", "lg:translate-y-12"];

export default function Work({ index }: { index?: number }) {
  return (
    <Section id="work" variant="white" index={index}>
      <SectionHeading title="Some of my works" />
      <div className="mx-auto grid max-w-5xl gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
        {selectedWork.map((w, i) => (
          <WorkCard key={w.title} work={w} className={offset[i % 3]} />
        ))}
      </div>
    </Section>
  );
}
