"use client";

import { useState } from "react";
import { profile } from "@/lib/content";
import { Section, SectionHeading } from "./Section";
import { CvButton } from "./CvRequest";

const c = profile.contact;

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact({ index }: { index?: number }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
          <CvButton className="mt-8 inline-block rounded-full border border-ink/50 px-6 py-2.5 text-sm tracking-wide transition-colors hover:bg-ink hover:text-paper" />
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} className="card-frame rounded-sm p-6 sm:p-8">
          <input type="hidden" name="access_key" value={profile.web3formsKey} />
          <input type="hidden" name="subject" value="New message from labbi.com.np" />
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="eyebrow mb-1 block text-sm not-italic">
                Name
              </label>
              <input id="name" name="name" type="text" required className={field} />
            </div>
            <div>
              <label htmlFor="email" className="eyebrow mb-1 block text-sm not-italic">
                Email
              </label>
              <input id="email" name="email" type="email" required className={field} />
            </div>
            <div>
              <label htmlFor="message" className="eyebrow mb-1 block text-sm not-italic">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className={`${field} resize-y`}
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-5 w-full rounded-full border border-accent bg-accent px-6 py-2.5 text-sm tracking-wide text-paper transition-opacity hover:opacity-85 disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          {status === "sent" && (
            <p className="mt-3 text-sm text-ink/80" aria-live="polite">
              Thank you. I will be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm text-accent" aria-live="polite">
              Something went wrong. Please email {c.email} directly.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
