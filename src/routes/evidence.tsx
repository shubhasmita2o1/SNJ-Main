import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionTitle } from "@/components/site/Section";
import intelImg from "@/assets/dim-intelligence.jpg";

const citations = [
  { c: "teal", text: "Cramer H et al. Yoga for cancer — <em>Psychooncology</em> 2017 · 24 RCTs · 51% fatigue reduction" },
  { c: "teal", text: "Carlson LE et al. MBSR in cancer — <em>J Clin Oncol</em> 2013 · NK cells ↑ · cortisol normalised" },
  { c: "gold", text: "Bradt J et al. Music for cancer — <em>Cochrane</em> 2016 · anxiety ↓ · pain ↓ · fatigue ↓" },
  { c: "gold", text: "Smyth JM et al. Expressive writing — <em>JAMA</em> 1999 · immune markers ↑ · disease severity ↓" },
  { c: "navy", text: "Greenlee H et al. SIO systematic review — <em>CA Cancer J Clin</em> 2017 · yoga · meditation · acupuncture" },
  { c: "navy", text: "Pargament KI. Spiritual care in cancer — <em>J Clin Psychol</em> 2011 · existential distress ↓ · resilience ↑" },
  { c: "teal", text: "Riley J et al. Craft in cancer care — <em>Palliat Med</em> RCT · pain ↓ · nausea ↓ during chemotherapy" },
  { c: "gold", text: "Bratman GN et al. Nature therapy — <em>PNAS</em> 2015 · prefrontal rumination ↓ · Stanford study" },
];

const roadmap = [
  { year: "Phase 0", title: "Programme launch", desc: "Inaugural cohort of 200+ patients at BAHRC. Baseline outcome data captured." },
  { year: "Phase I", title: "Observational study", desc: "Prospective single-arm study across three cohorts. QoL, distress and biomarker endpoints." },
  { year: "Phase II", title: "Comparative trial", desc: "Standard care vs. standard care + Swastha NavJeevan. Multi-site with ACTREC–TMC." },
  { year: "Phase III", title: "National scale-up", desc: "Multi-centre RCT and open-source protocol for adoption by cancer centres across India." },
];

export const Route = createFileRoute("/evidence")({
  head: () => ({
    meta: [
      { title: "Evidence & Research — Swastha NavJeevan" },
      {
        name: "description",
        content:
          "Every therapy in Swastha NavJeevan is grounded in peer-reviewed oncology science. Explore citations, guideline alignment and our clinical research roadmap.",
      },
      { property: "og:title", content: "Evidence & Research — Swastha NavJeevan" },
      { property: "og:description", content: "RCT-backed integrative oncology, aligned with NCCN, ASCO, ESMO and SIO." },
      { property: "og:image", content: intelImg },
      { property: "og:url", content: "/evidence" },
    ],
    links: [{ rel: "canonical", href: "/evidence" }],
  }),
  component: Evidence,
});

function Evidence() {
  return (
    <>
      <PageHero
        eyebrow="Evidence & Research"
        title="Backed by global <span class='gold-underline'>oncology science.</span>"
        lead="Every dimension of the programme is grounded in peer-reviewed evidence — indexed on PubMed and aligned with NCCN, ASCO, ESMO and the Society for Integrative Oncology."
        image={intelImg}
        imageAlt="An open journal, brass reading lamp and study materials — the contemplative dimension"
      />

      <Section tone="cream">
        <div className="container-wide">
          <SectionTitle
            eyebrow="Guideline Alignment"
            title="Integrative oncology, done properly."
            lead="Our four dimensions map directly to the therapies recommended in the world's leading cancer care guidelines."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { org: "NCCN", desc: "US National Comprehensive Cancer Network — supportive care and integrative therapy panels." },
              { org: "ASCO", desc: "American Society of Clinical Oncology — endorses yoga, mindfulness and acupuncture." },
              { org: "ESMO", desc: "European Society for Medical Oncology — clinical practice guidelines on integrative care." },
              { org: "SIO", desc: "Society for Integrative Oncology — systematic reviews across yoga, meditation and music therapy." },
            ].map(({ org, desc }) => (
              <div key={org} className="rounded-2xl bg-white p-6 lift">
                <div className="display-serif text-3xl text-[var(--color-navy)]">{org}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-wide">
          <SectionTitle
            eyebrow="Key Citations"
            title="The peer-reviewed backbone."
            lead="A curated selection from our full evidence brief — every citation is peer-reviewed and indexed in PubMed / MEDLINE."
          />
          <div className="mt-10 grid md:grid-cols-2 gap-3">
            {citations.map((cit) => (
              <div
                key={cit.text}
                className="rounded-lg bg-[var(--color-cream)] px-4 py-3 text-sm text-foreground/85 leading-relaxed"
                style={{
                  borderLeft: `3px solid var(--color-${cit.c === "navy" ? "navy" : cit.c})`,
                }}
                dangerouslySetInnerHTML={{ __html: cit.text }}
              />
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground text-center">
            Full bibliography available on request via <a href="mailto:research@swasthanavjeevan.org" className="underline">research@swasthanavjeevan.org</a>.
          </p>
        </div>
      </Section>

      <Section tone="teal">
        <div className="container-wide">
          <SectionTitle
            onDark
            eyebrow="Research Roadmap"
            title="From retreat to <span class='text-[var(--color-gold-bright)]'>clinical trial.</span>"
            lead="A staged research pathway — from observational data to a multi-centre Phase III trial — designed with ACTREC–Tata Memorial Centre."
          />
          <ol className="mt-12 grid md:grid-cols-4 gap-4">
            {roadmap.map((r, i) => (
              <li key={r.year} className="rounded-2xl bg-white/8 border border-white/15 p-6 backdrop-blur-sm">
                <div className="text-[11px] tracking-[0.2em] uppercase text-[var(--color-gold-bright)] font-bold">Step 0{i + 1}</div>
                <div className="display-serif text-2xl mt-2">{r.year}</div>
                <div className="text-sm text-white/70 mt-0.5">{r.title}</div>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">{r.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>
    </>
  );
}
