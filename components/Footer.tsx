import { profile } from "@/lib/content";

export default function Footer() {
  const c = profile.contact;
  return (
    <footer className="mx-auto max-w-content px-6 pb-12">
      <div className="ink-rule mb-6 opacity-40" />
      <div className="flex flex-col items-center justify-between gap-3 text-sm text-ink/70 sm:flex-row">
        <p className="font-display">
          © 2026 {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-5">
          <a
            href={`mailto:${c.email}`}
            className="link-underline hover:text-ink"
          >
            Email
          </a>
          <a
            href={c.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-ink"
          >
            Instagram
          </a>
          <a
            href={c.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-ink"
          >
            GitHub
          </a>
          <a
            href={c.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-ink"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
