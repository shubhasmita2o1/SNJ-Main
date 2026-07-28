import type { ReactNode } from "react";

export function Section({
  id,
  className = "",
  children,
  tone = "cream",
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  tone?: "cream" | "white" | "navy" | "navy-deep" | "teal" | "gradient-navy";
}) {
  const toneClasses: Record<string, string> = {
    cream: "bg-[var(--color-cream)] text-[var(--color-ink)]",
    white: "bg-white text-[var(--color-ink)]",
    navy: "bg-[var(--color-navy)] text-white",
    "navy-deep": "bg-[var(--color-navy-deep)] text-white",
    teal: "bg-[var(--color-teal)] text-white",
    "gradient-navy":
      "bg-[linear-gradient(135deg,var(--color-navy-deep)_0%,var(--color-navy)_100%)] text-white",
  };
  return (
    <section id={id} className={`relative overflow-hidden py-20 sm:py-28 ${toneClasses[tone]} ${className}`}>
      {children}
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  eyebrowTone = "gold",
  title,
  lead,
  onDark = false,
  align = "left",
}: {
  eyebrow?: string;
  eyebrowTone?: "gold" | "teal" | "navy";
  title: string;
  lead?: string;
  onDark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && (
        <div
          className={`eyebrow ${
            onDark ? "eyebrow-onDark" : `eyebrow-${eyebrowTone}`
          } mb-4`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`display-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.08] ${
          onDark ? "text-white" : "text-[var(--color-navy)]"
        }`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {lead && (
        <p
          className={`mt-5 text-base sm:text-lg leading-relaxed max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${onDark ? "text-white/75" : "text-muted-foreground"}`}
          dangerouslySetInnerHTML={{ __html: lead }}
        />
      )}
    </div>
  );
}
