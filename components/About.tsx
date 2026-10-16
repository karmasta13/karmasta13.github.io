import { about, profile } from "@/lib/content";
import { Section, SectionHeading } from "./Section";

export default function About({ index }: { index?: number }) {
  const c = profile.contact;
  return (
    <Section id="about" variant="white" pinned index={index}>
      <SectionHeading title="About me" />
      <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-ink/85">
        {about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p>
          I share opportunities, my journey, and the new things I am learning on
          Instagram, where I go by{" "}
          <a
            href={c.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-medium text-accent"
          >
            {c.instagram}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
