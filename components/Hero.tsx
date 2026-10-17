import { profile, stats } from "@/lib/content";
import Illustration from "./Illustration";
import { CvButton } from "./CvRequest";

export default function Hero() {
  return (
    <section
      id="top"
      style={{ zIndex: 0 }}
      className="surface-paper sticky top-0 flex min-h-screen scroll-mt-20 items-start"
    >
      <div className="mx-auto w-full max-w-content px-6 pt-20 pb-16">
        <div className="card-frame surface-paper animate-fade-up rounded-sm px-6 py-12 sm:px-12 sm:py-14">
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Intro */}
            <div className="order-2 text-center md:order-1 md:text-left">
              <p className="eyebrow mb-3 font-display text-xl sm:text-2xl">
                {profile.greeting}
              </p>
              <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-4 font-sans text-base  leading-relaxed text-ink/85 sm:text-lg">
                {profile.title}
              </p>
              <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ink/80 md:mx-0">
                {profile.tagline}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                <a
                  href="#contact"
                  className="rounded-full border border-accent bg-accent px-7 py-3 text-base font-medium tracking-wide text-white transition-opacity hover:opacity-85"
                >
                  Get in touch
                </a>
                <CvButton className="rounded-full border border-ink/50 px-7 py-3 text-base tracking-wide transition-colors hover:bg-ink hover:text-white" />
              </div>
            </div>

            {/* Illustration */}
            <div className="order-1 md:order-2">
              <Illustration
                src="/wave-mask.png"
                alt={`Line drawing of ${profile.name} waving at a laptop`}
                className="mx-auto aspect-[976/638] w-full max-w-md"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid gap-6 border-t border-ink/20 pt-8 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="font-display text-3xl font-bold text-accent sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-ink/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
