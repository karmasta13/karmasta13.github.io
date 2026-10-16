import type { Metadata } from "next";
import { Playfair_Display, EB_Garamond, Inter } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const serif = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const ui = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ui",
  display: "swap",
});

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
    <html
      lang="en"
      className={`${display.variable} ${serif.variable} ${ui.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: inkInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
