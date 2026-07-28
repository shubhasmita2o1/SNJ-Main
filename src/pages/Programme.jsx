import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SplitHeading from "../components/SplitHeading";
import PageHeader from "../components/PageHeader";
import SEOHead from "../components/SEOHead";
import { useTranslation } from "react-i18next";

export default function Programme() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(null);

  const SESSIONS = t("programme.sessions", { returnObjects: true });
  const FACTS = t("programme.facts", { returnObjects: true });
  const MONTHS = t("programme.months", { returnObjects: true });

  const toggle = (i) => setExpanded(expanded === i ? null : i);

  return (
    <div data-testid="page-programme">
      <SEOHead
        title="Programme"
        description="The Holistic Cancer Healing Retreat (HCHR) — a four-session monthly retreat for cancer patients, caregivers and survivors. Free, bilingual, evidence-based."
        canonical="/programme"
      />

      <PageHeader
        eyebrow={t("programme.eyebrow")}
        title={t("programme.title")}
        italic={t("programme.italic")}
        subtitle={t("programme.subtitle")}
        testId="programme-header"
      />

      {/* Facts strip */}
      <section className="py-12" data-testid="programme-facts">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {FACTS.map((f, i) => (
              <Reveal key={f.k} delay={i + 1} className="snj-card p-7">
                <div className="font-serif text-[36px] leading-none">{f.k}</div>
                <div className="mt-3 text-[12px] uppercase tracking-[0.18em] text-[#6F6F6F]">{f.v}</div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Interactive timeline */}
      <section className="py-24 md:py-32" data-testid="programme-sessions">
        <Container>
          <Reveal>
            <div className="text-[12px] uppercase tracking-[0.22em] text-[#6F6F6F]">{t("programme.timelineEyebrow")}</div>
          </Reveal>
          <SplitHeading
            className="mt-6 font-serif text-[40px] md:text-[64px] leading-[1.02] tracking-[-0.02em] max-w-[900px]"
            depKey={t("programme.timelineTitle") + t("programme.timelineTitleItalic")}
          >
            {t("programme.timelineTitle")} <i className="text-[#6F6F6F]">{t("programme.timelineTitleItalic")}</i>
          </SplitHeading>

          <div className="mt-16 space-y-3" role="list" aria-label="Retreat sessions">
            {SESSIONS.map((s, i) => (
              <Reveal key={s.n} delay={1}>
                <div className="snj-card overflow-hidden" role="listitem">
                  <button
                    onClick={() => toggle(i)}
                    className="w-full text-left p-7 md:p-9 flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
                    aria-expanded={expanded === i}
                    aria-controls={`session-detail-${i}`}
                  >
                    <div className="md:w-44 shrink-0">
                      <div className="text-[11px] tracking-[0.2em] uppercase text-[#6F6F6F]">{s.n}</div>
                      <div className="mt-2 font-serif text-[28px] leading-tight">{s.time}</div>
                    </div>
                    <div className="flex-1">
                      <div className="font-serif text-[28px] md:text-[36px] leading-tight">{s.title}</div>
                      <p className="mt-3 text-[#6F6F6F] leading-relaxed">{s.desc}</p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-black/40 shrink-0 transition-transform duration-300 ${expanded === i ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    id={`session-detail-${i}`}
                    className="overflow-hidden transition-all duration-500"
                    style={{ maxHeight: expanded === i ? "200px" : "0", opacity: expanded === i ? 1 : 0 }}
                  >
                    <div className="px-7 md:px-9 pb-8 md:pl-[calc(11rem+2.5rem)] text-[14px] text-[#6F6F6F] leading-relaxed border-t border-black/5 pt-5">
                      {s.detail}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Monthly schedule — horizontal scroll on desktop */}
      <section className="bg-[#fafafa] border-y border-black/5" data-testid="programme-monthly">
        <Container className="pt-24 pb-10">
          <Reveal>
            <div className="text-[12px] uppercase tracking-[0.22em] text-[#6F6F6F]">{t("programme.scheduleEyebrow")}</div>
          </Reveal>
          <SplitHeading
            className="mt-6 font-serif text-[40px] md:text-[60px] leading-[1] tracking-[-0.02em]"
            depKey={t("programme.scheduleTitle") + t("programme.scheduleTitleItalic")}
          >
            {t("programme.scheduleTitle")} <i className="text-[#6F6F6F]">{t("programme.scheduleTitleItalic")}</i>
          </SplitHeading>
        </Container>

        <Container className="py-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {MONTHS.map((m) => (
              <Reveal key={m.month} className="snj-card p-6">
                <div className="text-[11px] uppercase tracking-[0.2em] text-[#6F6F6F]">{m.date}</div>
                <div className="mt-3 font-serif text-[26px] leading-none">{m.month}</div>
                <div className="mt-2 text-[12px] text-[#6F6F6F] italic">{m.theme}</div>
              </Reveal>
            ))}
          </div>
        </Container>

        <Container className="pb-16">
          <Reveal>
            <p className="mt-6 text-[13px] text-[#6F6F6F] max-w-lg leading-relaxed">
              {t("programme.scheduleNote")}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Who it's for */}
      <section className="py-24" data-testid="programme-who">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
              <SplitHeading
                as="h3"
                className="font-serif text-[40px] md:text-[60px] leading-[1] tracking-[-0.02em]"
                depKey={t("programme.whoTitle") + t("programme.whoTitleItalic")}
              >
                {t("programme.whoTitle")} <i className="text-[#6F6F6F]">{t("programme.whoTitleItalic")}</i>
              </SplitHeading>
            </div>
            <div className="md:col-span-7 space-y-5 text-[#6F6F6F] leading-relaxed">
              <Reveal delay={1}><p>{t("programme.whoP1")}</p></Reveal>
              <Reveal delay={2}><p>{t("programme.whoP2")}</p></Reveal>
              <Reveal delay={3}><p>{t("programme.whoP3")}</p></Reveal>
            </div>
          </div>
          <Reveal delay={2}>
            <div className="mt-16">
              <Link to="/get-involved" className="btn-pill" data-testid="programme-cta-register">
                {t("programme.whoCta")} <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}