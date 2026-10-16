// Renders the hand-drawn line art as a themeable CSS mask so the stroke
// color follows the active ink (charcoal / crimson).
export default function Illustration({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`illustration ${className}`}
      style={{ ["--mask" as string]: `url(${src})` }}
    />
  );
}
