import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative min-h-[62vh] flex items-end pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden text-white">
      {image ? (
        <img
          src={image}
          alt={imageAlt ?? ""}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--color-navy-deep)_0%,var(--color-navy)_60%,var(--color-teal)_140%)] opacity-95" />
      <div className="orb animate-orb-float w-[520px] h-[520px] -top-40 -right-40 bg-[var(--color-teal)]/25" />
      <div className="orb animate-orb-float w-[380px] h-[380px] bottom-0 -left-20 bg-[var(--color-gold)]/20" />

      <div className="container-wide relative z-10 animate-rise">
        <div className="eyebrow eyebrow-onDark mb-4">{eyebrow}</div>
        <h1
          className="display-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.02] max-w-4xl"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {lead && (
          <p
            className="mt-6 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: lead }}
          />
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
