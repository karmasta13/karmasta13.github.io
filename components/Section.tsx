import TornEdge from "./TornEdge";

export function Section({
  id,
  variant = "paper",
  pinned = false,
  index = 0,
  children,
  className = "",
}: {
  id?: string;
  variant?: "paper" | "white";
  pinned?: boolean;
  index?: number;
  children: React.ReactNode;
  className?: string;
}) {
  const white = variant === "white";
  return (
    <section
      id={id}
      style={{ zIndex: index }}
      className={[
        "section-pad relative scroll-mt-20",
        white ? "surface-white" : "surface-paper",
        index > 0 ? "-mt-[25px]" : "",
        pinned ? "sticky top-0 flex min-h-screen items-center" : "",
        className,
      ].join(" ")}
    >
      {index > 0 && <TornEdge variant={variant} />}
      <div className="relative z-10 mx-auto w-full max-w-content px-6">
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <div className="accent-rule mt-5 w-16" />
    </div>
  );
}
