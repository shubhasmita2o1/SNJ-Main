import React from "react";
import { ArrowUpRight, BookOpen, FlaskConical, FileText } from "lucide-react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SplitHeading from "../components/SplitHeading";
import PageHeader from "../components/PageHeader";
import DownloadCard from "../components/DownloadCard";
import SEOHead from "../components/SEOHead";
import AnimatedCounter from "../components/AnimatedCounter";
import { useTranslation } from "react-i18next";

const FRAMEWORKS = [
  {
    icon: BookOpen,
    n: "01",
    title: "NCCN / ASCO Guidelines",
    desc: "The SNJ programme is designed in alignment with NCCN integrative oncology guidelines and ASCO clinical frameworks for survivorship care.",
  },
  {
    icon: FlaskConical,
    n: "02",
    title: "FACT-G & HADS Scales",
    desc: "Participant wellbeing is measured using validated instruments — Functional Assessment of Cancer Therapy–General (FACT-G) and Hospital Anxiety and Depression Scale (HADS).",
  },
  {
    icon: FileText,
    n: "03",
    title: "Mindfulness-Based Interventions",
    desc: "SNJ's meditation and breath protocols draw on published MBSR (Mindfulness-Based Stress Reduction) trials in oncology populations.",
  },
  {
    icon: BookOpen,
    n: "04",
    title: "Bhakti & Spirituality",
    desc: "The spiritual care dimension integrates published psycho-oncology research on meaning-making, existential wellbeing and religious coping.",
  },
  {
    icon: FlaskConical,
    n: "05",
    title: "Ayurvedic Oncology",
    desc: "Evidence-based Ayurvedic interventions from Swaayu Cancer Care Centre are selected for safety and adjunctive benefit, not as replacement therapy.",
  },
  {
    icon: FileText,
    n: "06",
    title: "PSQI Sleep & FACIT Fatigue",
    desc: "Outcome domains include sleep quality (Pittsburgh Sleep Quality Index) and cancer-related fatigue (FACIT-Fatigue), both tracked monthly.",
  },
];

const PUBLICATIONS = [
  {
    title: "Integrative Oncology: A Field Guide",
    authors: "Society for Integrative Oncology (SIO)",
    year: "2023",
    type: "Guideline",
  },
  {
    title: "Yoga for Cancer Survivors — Systematic Review",
    authors: "Cramer et al.",
    year: "2022",
    type: "Meta-analysis",
  },
  {
    title: "Mindfulness-Based Cancer Recovery",
    authors: "Carlson & Speca",
    year: "2021",
    type: "Clinical Study",
  },
  {
    title: "Bhakti and Spiritual Wellbeing in Oncology",
    authors: "BAHRC Research Unit",
    year: "2023",
    type: "Working Paper",
  },
];

const DOWNLOADS = [
  {
    title: "SNJ Scientific Framework",
    language: "EN",
    category: "Research",
    description: "The evidence base for our 4D model, 2H·2R·2L framework and outcome metrics.",
  },
  {
    title: "HCHR Outcome Summary",
    language: "EN · HI",
    category: "Outcomes",
    description: "Aggregated wellbeing outcomes from retreat cohorts — anonymised and attributed.",
  },
  {
    title: "Integrative Oncology One-Pager",
    language: "EN",
    category: "Overview",
    description: "A single-page reference for referring oncologists and hospital partners.",
  },
];

export default function Research() {
  const { t } = useTranslation();

  return (
    <div data-testid="page-research">
      <SEOHead
        title="Research & Publications"
        description="The evidence base behind Swastha NavJeevan — integrative oncology frameworks, validated measurement scales, and published references."
        canonical="/research"
      />

      <PageHeader
        eyebrow={t("research.eyebrow")}
        title={t("research.title")}
        italic={t("research.italic")}
        subtitle={t("research.subtitle")}
        testId="research-header"
      />

      {/* Scientific Frameworks */}
      <section className="py-24 md:py-32" data-testid="research-frameworks">
        <Container>
          <Reveal>
            <div className="text-[12px] uppercase tracking-[0.22em] text-[#6F6F6F]">
              {t("research.scientificFrameworks")}
            </div>
          </Reveal>
          <SplitHeading
            className="mt-4 font-serif text-[40px] md:text-[60px] leading-[1] tracking-[-0.02em] max-w-[700px]"
            depKey={t("research.builtOnTitle") + t("research.builtOnItalic")}
          >
            {t("research.builtOnTitle")} <i className="text-[#6F6F6F]">{t("research.builtOnItalic")}</i>
          </SplitHeading>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FRAMEWORKS.map((f, i) => (
              <Reveal key={f.n} delay={(i % 3) + 1} className="snj-card p-8">
                <f.icon className="w-5 h-5" strokeWidth={1.3} />
                <div className="mt-6 text-[11px] tracking-[0.2em] text-[#6F6F6F]">
                  <AnimatedCounter
                    to={parseInt(f.n, 10)}
                    format={(n) => String(n).padStart(2, "0")}
                  />
                </div>
                <div className="mt-2 font-serif text-[26px] leading-tight">{f.title}</div>
                <p className="mt-4 text-[13px] text-[#6F6F6F] leading-relaxed">{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Publications — sticky left heading / scrolling right cards */}
      <section className="py-24 bg-[#fafafa] border-y border-black/5" data-testid="research-publications">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            {/* Sticky left */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <div className="text-[12px] uppercase tracking-[0.22em] text-[#6F6F6F]">{t("research.keyReferences")}</div>
              </Reveal>
              <SplitHeading
                className="mt-6 font-serif text-[40px] md:text-[56px] leading-[1] tracking-[-0.02em]"
                depKey={t("research.selectedPublications") + t("research.selectedPublicationsItalic")}
              >
                {t("research.selectedPublications")} <i className="text-[#6F6F6F]">{t("research.selectedPublicationsItalic")}</i>
              </SplitHeading>
            </div>

            {/* Scrolling right */}
            <div className="lg:col-span-7 space-y-4 lg:pt-4">
              {PUBLICATIONS.map((p) => (
                <Reveal key={p.title} delay={1} className="snj-card p-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="flex-1">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-[#6F6F6F]">{p.type} · {p.year}</div>
                    <div className="mt-2 font-serif text-[22px] leading-tight">{p.title}</div>
                    <div className="mt-1 text-[13px] text-[#6F6F6F]">{p.authors}</div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-black/30 shrink-0" />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24" data-testid="research-downloads">
        <Container>
          <Reveal>
            <div className="text-[12px] uppercase tracking-[0.22em] text-[#6F6F6F]">{t("research.downloads")}</div>
          </Reveal>
          <SplitHeading
            className="mt-6 font-serif text-[36px] md:text-[52px] leading-[1] tracking-[-0.02em]"
            depKey={t("research.takeEvidenceTitle") + t("research.takeEvidenceItalic")}
          >
            {t("research.takeEvidenceTitle")} <i className="text-[#6F6F6F]">{t("research.takeEvidenceItalic")}</i>
          </SplitHeading>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {DOWNLOADS.map((d, i) => (
              <Reveal key={d.title} delay={i + 1}>
                <DownloadCard {...d} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}