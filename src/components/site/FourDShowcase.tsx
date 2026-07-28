import { useEffect, useState } from "react";
import dimBody from "@/assets/dim-body.jpg";
import dimMind from "@/assets/dim-mind.jpg";
import dimIntel from "@/assets/dim-intelligence.jpg";
import dimSoul from "@/assets/dim-soul.jpg";

export type Dim = {
  key: string;
  label: string;
  title: string;
  desc: string;
  evidence: string;
  image: string;
  tint: string; // gradient overlay from navy to accent
};

export const dimensions: Dim[] = [
 {
  key: "body",
  label: "🌿 Session 1 · Body",
  title: "Anti-Cancer Nutrition & Integrative Movement",
  desc: "Evidence-based anti-cancer nutrition, yoga therapy, therapeutic movement, and Ayurvedic dietary protocols.",
  evidence: "51% fatigue ↓ · Cochrane 2017",
  image: dimBody,
  tint: "from-[var(--color-navy-deep)]/70 to-[var(--color-teal)]/40",
},
{
  key: "mind",
  label: "🧘 Session 2 · Mind",
  title: "Mindfulness & Emotional Resilience",
  desc: "Mindfulness-Based Stress Reduction, guided imagery, emotional release, and cognitive restructuring.",
  evidence: "54% anxiety ↓ · J Clin Oncol 2013",
  image: dimMind,
  tint: "from-[var(--color-navy-deep)]/75 to-[var(--color-navy)]/40",
},
{
  key: "intelligence",
  label: "🎨 Session 3 · Intelligence",
  title: "Creative Arts & Cognitive Rehabilitation",
  desc: "Art-based therapies — music, visual art, expressive writing, chess, craft, gardening. World-first protocol for cognitive rehabilitation.",
  evidence: "NK cells ↑ · Chemo-brain rehab · SIO",
  image: dimIntel,
  tint: "from-[var(--color-navy-deep)]/75 to-[oklch(0.35_0.08_60)]/45",
},
{
  key: "soul",
  label: "✨ Session 4 · Soul",
  title: "Meditation & Spiritual Healing",
  desc: "Guided meditation, sound therapy, meaning-making, and spiritual resilience — the dimension medicine cannot reach.",
  evidence: "Existential distress ↓ · Pargament 2011",
  image: dimSoul,
  tint: "from-[var(--color-navy-deep)]/75 to-[var(--color-gold)]/35",
},
];
export function FourDShowcase({ auto = true }: { auto?: boolean }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setActive((i) => (i + 1) % dimensions.length), 5200);
    return () => clearInterval(id);
  }, [auto]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] items-stretch">
      {/* Stage */}
      <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:min-h-[560px] shadow-[var(--shadow-elegant)] bg-[var(--color-navy-deep)]">
        {dimensions.map((d, i) => (
          <div
            key={d.key}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== active}
          >
            <img
              src={d.image}
              alt={`${d.title.replace(/&amp;/g, "&")} — ${d.label}`}
              className="absolute inset-0 h-full w-full object-cover scale-[1.02]"
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${d.tint}`} />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 text-white">
              <div className="eyebrow eyebrow-onDark mb-3">{d.label}</div>
              <h3
                className="display-serif text-3xl sm:text-4xl leading-tight"
                dangerouslySetInnerHTML={{ __html: d.title }}
              />
              <p className="mt-3 max-w-lg text-sm sm:text-base text-white/85 leading-relaxed"
                 dangerouslySetInnerHTML={{ __html: d.desc }} />
              <div className="mt-4 inline-block text-[11px] font-semibold tracking-widest uppercase text-[var(--color-gold-bright)] bg-[var(--color-gold)]/15 px-3 py-1 rounded-full">
                {d.evidence}
              </div>
            </div>
          </div>
        ))}

        {/* Progress rail */}
        <div className="absolute top-4 right-4 flex gap-1.5 z-10">
          {dimensions.map((d, i) => (
            <button
              key={d.key}
              type="button"
              aria-label={`Show ${d.title.replace(/&amp;/g, "&")}`}
              onClick={() => setActive(i)}
              className={`h-1 rounded-full transition-all ${
                i === active ? "w-8 bg-[var(--color-gold-bright)]" : "w-4 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Rail */}
      <ol className="grid gap-3">
        {dimensions.map((d, i) => (
          <li key={d.key}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className={`w-full text-left rounded-xl border p-5 transition-all ${
                i === active
                  ? "bg-white border-[var(--color-gold)] shadow-[var(--shadow-soft)]"
                  : "bg-white/60 border-transparent hover:bg-white"
              }`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-teal)]">
                  {d.label}
                </span>
                <span className={`display-serif text-2xl ${i === active ? "text-[var(--color-gold)]" : "text-[var(--color-navy)]/30"}`}>
                  0{i + 1}
                </span>
              </div>
              <div
                className="display-serif text-xl mt-1 text-[var(--color-navy)]"
                dangerouslySetInnerHTML={{ __html: d.title }}
              />
              {i === active && (
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed"
                   dangerouslySetInnerHTML={{ __html: d.desc }} />
              )}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
