"use client";

import { useState } from "react";
import { profile } from "@/lib/content";
import { Section, SectionHeading } from "./Section";

const c = profile.contact;

export default function Contact({ index }: { index?: number }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${name || "someone"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:${c.email}?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full rounded-sm border border-ink/30 bg-paper/40 px-4 py-2.5 text-ink outline-none transition-colors focus:border-accent";

  return (
    <Section id="contact" index={index}>
      <SectionHeading title="Let's work together" />
      <div className="grid gap-12 md:grid-cols-[1fr_1.1fr]">
        {/* Left: invite + details */}
        <div>
          <p className="max-w-md text-lg leading-relaxed text-ink/85">
            My inbox is open. I would love to hear about fellowships, speaking
            invitations, and collaborations in civic tech, AI governance, and
            digital inclusion. Send me a note and I will reply.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="font-display font-bold">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${c.email}`}
                  className="link-underline text-ink/80 hover:text-ink"
                >
                  {c.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-display font-bold">Based in</dt>
              <dd className="mt-1 text-ink/80">{c.location}</dd>
            </div>
          </dl>
          <a
            href={profile.cvUrl}
            className="mt-8 inline-block rounded-full border border-ink/50 px-6 py-2.5 text-sm tracking-wide transition-colors hover:bg-ink hover:text-paper"
          >
            Request my CV
          </a>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} className="card-frame rounded-sm p-6 sm:p-8">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="eyebrow mb-1 block text-sm not-italic">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={field}
              />
            </div>
            <div>
              <label htmlFor="email" className="eyebrow mb-1 block text-sm not-italic">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={field}
              />
            </div>
            <div>
              <label htmlFor="message" className="eyebrow mb-1 block text-sm not-italic">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${field} resize-y`}
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 w-full rounded-full border border-accent bg-accent px-6 py-2.5 text-sm tracking-wide text-paper transition-opacity hover:opacity-85"
          >
            Send message
          </button>
        </form>
      </div>
    </Section>
  );
}
