import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/Gemini_Generated_Image_q9h3qoq9h3qoq9h3.png";
import ctaLamp from "@/assets/cta-lamp.jpg";
import { FourDShowcase, dimensions } from "@/components/site/FourDShowcase";
import { Section, SectionTitle } from "@/components/site/Section";
import { ArrowRight, Heart, Shield, Sparkles, Users } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swastha NavJeevan — Holistic Cancer Healing for All" },
      {
        name: "description",
        content:
          "India's first four-dimensional integrative oncology programme — free for every cancer patient, irrespective of faith. Evidence-based. Side-effect free.",
      },
      { property: "og:title", content: "Swastha NavJeevan — Holistic Cancer Healing for All" },
      {
        property: "og:description",
        content:
          "Body · Mind · Intelligence · Soul. A free integrative retreat for cancer patients, open to every faith.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* ── HERO ───────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden text-white">
        <img
          src={heroImg}
          alt="Sunrise over a temple sanctuary — the setting for the Swastha NavJeevan retreat"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,oklch(0.15_0.05_264_/_0.92)_0%,oklch(0.28_0.08_265_/_0.82)_45%,oklch(0.35_0.08_190_/_0.55)_100%)]" />

        <div className="orb animate-orb-float w-[560px] h-[560px] -top-32 -right-32 bg-[var(--color-teal)]/25" />
        <div className="orb animate-orb-float w-[420px] h-[420px] bottom-0 left-4 bg-[var(--color-gold)]/25" style={{ animationDelay: "-3s" }} />

        <div className="container-wide relative z-10 animate-rise">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold tracking-[0.22em] uppercase text-[var(--color-gold-bright)] mb-6">
            <span>BAHRC</span>
            <span className="w-1 h-1 rounded-full bg-[var(--color-gold-bright)]/60" />
            <span>ISKCON Navi Mumbai</span>
            <span className="w-1 h-1 rounded-full bg-[var(--color-gold-bright)]/60" />
            <span>Open to Every Faith</span>
          </div>

          <h1 className="display-serif text-5xl sm:text-6xl lg:text-8xl leading-[1] max-w-5xl">
            Healing Beyond Medicine
            <span className="block font-semibold gold-underline mt-2">Swastha NavJeevan</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base sm:text-xl text-white/80 leading-relaxed font-light">
            India's first integrative oncology programme addressing all four dimensions of the
            cancer patient — <em>Body, Mind, Intelligence, and Soul</em> — simultaneously.
            Evidence-based. Side-effect free. <strong className="text-white"> Free for all.</strong>
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Inaugurated by the Governor of Maharashtra",
              "ACTREC–TMC Research Collaboration",
              "NCCN · ASCO · ESMO · SIO Aligned",
              "200+ patients served at inaugural retreat",
            ].map((t) => (
              <span
                key={t}
                className="text-xs font-medium px-3 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/get-involved" className="btn-gold btn-gold-hover">
              Book a Free Consultation <ArrowRight size={16} />
            </Link>
            <Link to="/programme" className="btn-outline-light hover:bg-white/10">
              Explore the 4D Programme
            </Link>
          </div>

          <dl className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl">
            {[
              ["200+", "Patients at inaugural retreat"],
              ["₹0", "Cost to participants · always free"],
              ["4", "Healing dimensions · unique worldwide"],
              ["0", "Side effects · non-pharmacological"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="display-serif text-3xl sm:text-4xl text-[var(--color-gold-bright)]">{v}</dt>
                <dd className="text-xs text-white/60 mt-1.5">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Governor pull-quote */}
        <aside className="hidden md:block absolute right-6 bottom-8 max-w-xs bg-white/8 backdrop-blur-lg border border-white/15 rounded-xl p-5">
          <div className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-gold-bright)] font-bold mb-2">
            Governor of Maharashtra · 30 May 2026
          </div>
          <blockquote className="display-serif italic text-white/90 text-base leading-snug">
            "The healing process cannot be only medicines. It requires courage, compassion, and
            community."
          </blockquote>
          <div className="text-[11px] text-white/50 mt-2">Inaugural Address</div>
        </aside>
      </section>

    {/* ── 2H · 2R · 2L FRAMEWORK ───────────────────────────── */}
<Section tone="cream">
  <div className="container-wide">
    <SectionTitle
      eyebrow="The 2H · 2R · 2L Framework"
      title="A <span className='text-[var(--color-gold)]'>Triad of Wholeness</span>"
      lead="A holistic framework integrating physical health, psychological resilience, and spiritual well-being to help every patient live with strength, meaning, and hope."
    />

    <div className="mt-12 grid gap-6 lg:grid-cols-3">

      {/* 2H */}
      <div className="rounded-3xl border border-sky-500/20 bg-[var(--color-navy)]/5 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
        <div className="text-center">
          <div className="display-serif text-6xl text-sky-400">2H</div>

          <h3 className="mt-4 text-2xl font-semibold text-[var(--color-navy)]">
            Health & Happiness
          </h3>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Physical foundation through evidence-based nutrition, therapeutic
            movement, restorative sleep, yoga, and lifestyle protocols that
            improve strength, vitality, and quality of life.
          </p>
        </div>
      </div>

      {/* 2R */}
      <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
        <div className="text-center">
          <div className="display-serif text-6xl text-emerald-500">2R</div>

          <h3 className="mt-4 text-2xl font-semibold text-[var(--color-navy)]">
            Rejuvenation & Resilience
          </h3>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Psychological and cognitive restoration through mindfulness,
            emotional healing, art therapies, creative expression, and
            evidence-based rehabilitation that rebuilds inner resilience.
          </p>
        </div>
      </div>

      {/* 2L */}
      <div className="rounded-3xl border border-amber-500/20 bg-amber-500/5 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
        <div className="text-center">
          <div className="display-serif text-6xl text-[var(--color-gold)]">
            2L
          </div>

          <h3 className="mt-4 text-2xl font-semibold text-[var(--color-navy)]">
            Longevity & Lovely Life
          </h3>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Spiritual consciousness, purpose, meaning, fearlessness, and
            identity beyond illness—helping patients experience a life of
            dignity, fulfillment, and inner peace.
          </p>
        </div>
      </div>
    </div>

    {/* Quote */}
    <div className="mt-10 rounded-2xl border border-[var(--color-gold)]/15 bg-[var(--color-gold)]/5 p-6 text-center">
      <p className="italic text-muted-foreground">
        Rooted in the{" "}
        <span className="font-medium text-[var(--color-navy)]">
          Sushruta Samhita's
        </span>{" "}
        definition of total health —
        <span className="font-medium text-[var(--color-gold)]">
          {" "}
          "Swastha: established in the Self"
        </span>
        . Aligned with modern biopsychosocial-spiritual models of holistic
        well-being.
      </p>
    </div>

    {/* Highlights */}
    <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

      <div className="text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-2xl">
          🆓
        </div>
        <h4 className="font-semibold text-[var(--color-navy)]">
          Always Free
        </h4>
        <p className="mt-2 text-sm text-muted-foreground">
          Zero cost to every patient, always.
        </p>
      </div>

      <div className="text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
          🌍
        </div>
        <h4 className="font-semibold text-[var(--color-navy)]">
          Non-Sectarian
        </h4>
        <p className="mt-2 text-sm text-muted-foreground">
          Open to people of every faith and background.
        </p>
      </div>

      <div className="text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-2xl">
          🧪
        </div>
        <h4 className="font-semibold text-[var(--color-navy)]">
          Evidence-Based
        </h4>
        <p className="mt-2 text-sm text-muted-foreground">
          NCCN • ASCO • ESMO • SIO aligned therapies.
        </p>
      </div>

      <div className="text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
          ♾️
        </div>
        <h4 className="font-semibold text-[var(--color-navy)]">
          Globally Replicable
        </h4>
        <p className="mt-2 text-sm text-muted-foreground">
          Designed for adoption across 600+ ISKCON centres in 70+ countries.
        </p>
      </div>

    </div>
  </div>
</Section>
  

      {/* ── 4D LIVE SHOWCASE ───────────────────── */}
      <Section tone="white" id="four-d">
        <div className="container-wide">
          <SectionTitle
            eyebrow="The Four-Dimensional Framework"
            title="Four sessions. <span class='text-[var(--color-gold)]'>One complete healing.</span>"
            lead="Each dimension is a proven, standalone therapy. Together, delivered in a single week, they treat the patient — not just the disease."
          />
          <div className="mt-12">
            <FourDShowcase />
          </div>
          <div className="mt-10">
            <Link to="/programme" className="btn-outline-navy hover:bg-[var(--color-navy)] hover:text-white">
              See the full programme →
            </Link>
          </div>
        </div>
      </Section>

      {/* ── STATS / WHY ───────────────────────── */}
      <Section tone="gradient-navy">
        <div className="orb w-[500px] h-[500px] -top-40 -right-40 bg-[var(--color-teal)]/25" />
        <div className="container-wide grid gap-12 lg:grid-cols-2 items-center relative z-10">
          <SectionTitle
            onDark
            eyebrow="Why This, Why Now"
            title="70% of cancer patients want <span class='text-[var(--color-gold-bright)]'>whole-person care</span>. Fewer than 5% receive it."
            lead="The evidence for integrative oncology is overwhelming — yet access remains a privilege of the few. Swastha NavJeevan changes that."
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { n: "51%", l: "Reduction in fatigue with yoga", s: "Cramer et al. · 24 RCTs · 2017", c: "teal" },
              { n: "58%", l: "Lower anxiety with MBSR", s: "Carlson et al. · J Clin Oncol", c: "gold" },
              { n: "1.4M", l: "New cancer cases in India / yr", s: "GLOBOCAN 2022", c: "white" },
              { n: "₹0", l: "Financial burden on families", s: "HCHR · Always free", c: "orange" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl bg-white/5 border border-white/10 p-5 backdrop-blur-sm lift">
                <div
                  className="display-serif text-4xl leading-none"
                  style={{
                    color:
                      s.c === "teal" ? "var(--color-teal-bright)" :
                      s.c === "gold" ? "var(--color-gold-bright)" :
                      s.c === "orange" ? "#E8845B" :
                      "rgba(255,255,255,0.92)",
                  }}
                >
                  {s.n}
                </div>
                <div className="mt-2 text-sm text-white/70">{s.l}</div>
                <div className="mt-1 text-[10px] tracking-widest uppercase text-white/35">{s.s}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA ───────────────────────────────── */}
      <section className="relative py-24 overflow-hidden text-white">
        <img src={ctaLamp} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,oklch(0.15_0.05_264_/_0.88),oklch(0.28_0.08_265_/_0.6))]" />
        <div className="container-narrow relative z-10 text-center">
          <div className="eyebrow eyebrow-onDark mb-4">Every patient. Every faith. Always free.</div>
          <h2 className="display-serif text-4xl sm:text-5xl leading-tight">
            If you or someone you love is facing cancer —
            <span className="block gold-underline mt-2">this retreat is for you.</span>
          </h2>
          <p className="mt-5 text-white/80 max-w-xl mx-auto">
            Speak with a member of our care team. No forms, no fees, no obligation — just a
            conversation about how we can help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/get-involved" className="btn-gold btn-gold-hover">
              Book a Free Consultation <ArrowRight size={16} />
            </Link>
            <Link to="/evidence" className="btn-outline-light hover:bg-white/10">
              Read the Evidence
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
