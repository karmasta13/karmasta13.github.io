"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/content";

const OPEN_EVENT = "open-cv";

/** Button that opens the shared CV request modal. */
export function CvButton({
  className,
  children = "Request my CV",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent(OPEN_EVENT))}
      className={className}
    >
      {children}
    </button>
  );
}

type Status = "idle" | "sending" | "sent" | "error";

/** Mounted once. Listens for the open event and renders the request form. */
export default function CvRequestModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onOpen = () => {
      // Remember what had focus so we can restore it when the modal closes.
      triggerRef.current = document.activeElement as HTMLElement | null;
      setStatus("idle");
      setOpen(true);
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";

    // Move focus into the dialog (first focusable element).
    const focusables = () =>
      Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) ?? []
      ).filter((el) => el.offsetParent !== null);
    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      // Trap Tab focus within the dialog.
      if (e.key === "Tab") {
        const items = focusables();
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      // Restore focus to the trigger when closing.
      triggerRef.current?.focus();
    };
  }, [open]);

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

  if (!open) return null;

  const field =
    "w-full rounded-sm border border-ink/30 bg-paper/40 px-4 py-2.5 text-ink outline-none transition-colors focus:border-accent";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cvTitle"
    >
      <div
        className="absolute inset-0 bg-ink/50"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        className="card-frame surface-paper relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-sm p-6 sm:p-8"
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 text-2xl leading-none text-ink/70 hover:text-ink"
        >
          &times;
        </button>
        <h2 id="cvTitle" className="font-display text-2xl font-bold">
          Request my CV
        </h2>

        {status === "sent" ? (
          <p className="mt-4 text-ink/85">
            Thanks. I read every request myself and will send my CV to your
            email soon.
          </p>
        ) : (
          <>
            <p className="mt-2 text-ink/80">
              I read every request myself. Tell me a little about you and I will
              send my CV to your email.
            </p>
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <input type="hidden" name="access_key" value={profile.web3formsKey} />
              <input type="hidden" name="subject" value="CV request from labbi.com.np" />
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="cv-name" className="eyebrow mb-1 block text-sm not-italic">
                    Name
                  </label>
                  <input id="cv-name" name="name" type="text" required className={field} />
                </div>
                <div>
                  <label htmlFor="cv-email" className="eyebrow mb-1 block text-sm not-italic">
                    Email
                  </label>
                  <input id="cv-email" name="email" type="email" required className={field} />
                </div>
              </div>
              <div>
                <label htmlFor="cv-org" className="eyebrow mb-1 block text-sm not-italic">
                  Organization
                </label>
                <input id="cv-org" name="organization" type="text" className={field} />
              </div>
              <div>
                <label htmlFor="cv-reason" className="eyebrow mb-1 block text-sm not-italic">
                  Reason
                </label>
                <select id="cv-reason" name="reason" required defaultValue="" className={field}>
                  <option value="" disabled>
                    Choose one
                  </option>
                  <option>Fellowship</option>
                  <option>Speaking</option>
                  <option>Hiring</option>
                  <option>Collaboration</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="cv-note" className="eyebrow mb-1 block text-sm not-italic">
                  Note (optional)
                </label>
                <textarea id="cv-note" name="message" rows={3} className={`${field} resize-y`} />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-full border border-accent bg-accent px-6 py-2.5 text-sm tracking-wide text-paper transition-opacity hover:opacity-85 disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send request"}
              </button>
              {status === "error" && (
                <p className="text-sm text-accent" aria-live="polite">
                  Something went wrong. Please email {profile.contact.email} directly.
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
