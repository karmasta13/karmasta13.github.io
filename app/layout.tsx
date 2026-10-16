import type { Metadata } from "next";
import { profile } from "@/lib/content";
// Self-hosted fonts (no build-time Google Fonts fetch — reliable in CI).
import "@fontsource-variable/playfair-display";
import "@fontsource-variable/playfair-display/wght-italic.css";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.tagline,
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    type: "website",
  },
};

// Apply the saved ink color before paint to avoid a flash.
const inkInit = `(function(){try{var t=localStorage.getItem('ink');if(t==='crimson'){document.documentElement.setAttribute('data-ink','crimson');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: inkInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
