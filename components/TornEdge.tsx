// A ragged "torn paper" edge filled with a section's own surface color, placed
// at the top of a section so that as the section scrolls up over the previous
// one it looks like a torn sheet of paper being laid on top.
//
// The profile layers a few sine waves (long + medium + fine) with a little
// smoothed noise so the tear undulates organically instead of a uniform zigzag.

const W = 1440;
const H = 26;
const N = 220;

function frac(x: number) {
  return x - Math.floor(x);
}

function noise(i: number) {
  return frac(Math.sin(i * 127.1 + 311.7) * 43758.5453);
}

// Value noise: interpolate between integer samples for soft roughness.
function smoothNoise(t: number) {
  const x = t * 48;
  const i = Math.floor(x);
  const f = x - i;
  const u = f * f * (3 - 2 * f);
  return noise(i) + (noise(i + 1) - noise(i)) * u;
}

// Returns the tear height at position t in [0,1], normalized to [0,1].
function edgeY(t: number) {
  let y = 0.46;
  y += 0.27 * Math.sin(t * Math.PI * 2 * 2.1 + 0.6); // long wave
  y += 0.14 * Math.sin(t * Math.PI * 2 * 5.3 + 2.2); // medium
  y += 0.07 * Math.sin(t * Math.PI * 2 * 11.7 + 4.1); // fine
  y += 0.1 * (smoothNoise(t) - 0.5) * 2; // paper roughness
  return Math.max(0.06, Math.min(0.94, y));
}

function topPath() {
  // ragged top, flush bottom at y=H
  let d = `M0,${H}`;
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const x = t * W;
    const y = edgeY(t) * H;
    d += ` L${x.toFixed(1)},${y.toFixed(2)}`;
  }
  return d + ` L${W},${H} Z`;
}

function bottomPath() {
  // flush top at y=0, ragged along the bottom
  let d = `M0,0`;
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const x = t * W;
    const y = H - edgeY(t) * H;
    d += ` L${x.toFixed(1)},${y.toFixed(2)}`;
  }
  return d + ` L${W},0 Z`;
}

export default function TornEdge({
  variant = "white",
  side = "top",
}: {
  variant?: "paper" | "white";
  side?: "top" | "bottom";
}) {
  const fill = variant === "white" ? "rgb(var(--sheet))" : "rgb(var(--paper))";
  const top = side === "top";
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className="pointer-events-none absolute left-0 z-0 h-[26px] w-full"
      style={{
        fill,
        [top ? "top" : "bottom"]: "-25px",
        filter: top
          ? "drop-shadow(0 -1.5px 1.5px rgb(17 15 14 / 0.07))"
          : "drop-shadow(0 1.5px 1.5px rgb(17 15 14 / 0.07))",
      }}
    >
      <path d={top ? topPath() : bottomPath()} />
    </svg>
  );
}
