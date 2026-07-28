
import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SplitHeading from "../components/SplitHeading";
import PageHeader from "../components/PageHeader";

const GUIDELINES = [
  { code: "NCCN", name: "National Comprehensive Cancer Network" },
  { code: "ASCO", name: "American Society of Clinical Oncology" },
  { code: "ESMO", name: "European Society for Medical Oncology" },
  { code: "SIO", name: "Society for Integrative Oncology" },
];

const TOOLS = [
  { code: "FACT-G", name: "Functional Assessment of Cancer Therapy — General" },
  { code: "HADS", name: "Hospital Anxiety and Depression Scale" },
  { code: "FACIT", name: "Functional Assessment of Chronic Illness Therapy" },
  { code: "PSQI", name: "Pittsburgh Sleep Quality Index" },
];

export default function Science() {
  const { t } = useTranslation();
  const circleRef = useRef(null);

  // Animate SVG circle stroke on scroll into view
  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;
    const len = circle.getTotalLength ? circle.getTotalLength() : 565;
    circle.style.strokeDasharray = `${len}`;
    circle.style.strokeDashoffset = `${len}`;

    const section = document.querySelector("[data-testid='science-outcomes']");
    if (!section) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        circle.style.transition = "stroke-dashoffset 2.6s cubic-bezier(0.22, 1, 0.36, 1)";
        circle.style.strokeDashoffset = "0";
        obs.disconnect();
      },
      { threshold: 0.2 }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  return (
    <div data-testid="page-science">
      <PageHeader
        eyebrow={t("science.eyebrow")}
        title={t("science.title")}
        italic={t("science.italic")}
        subtitle={t("science.subtitle")}
        testId="science-header"
      />

      {/* Guidelines — sticky left / scrolling right (4 cards) */}
      <section className="py-24" data-testid="science-guidelines">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <div className="text-[12px] uppercase tracking-[0.22em] text-[#6F6F6F]">{t("science.alignedWith")}</div>
              </Reveal>
              <SplitHeading
                className="mt-6 font-serif text-[40px] md:text-[60px] leading-[1.02] tracking-[-0.02em]"
                depKey={t("science.frameworksTitle") + t("science.frameworksItalic")}
              >
                {t("science.frameworksTitle")} <i className="text-[#6F6F6F]">{t("science.frameworksItalic")}</i>
              </SplitHeading>
            </div>

            <div className="lg:col-span-7 space-y-5 lg:pt-4">
              {GUIDELINES.map((g, i) => (
                <Reveal key={g.code} delay={1} className="snj-card p-8 flex items-start gap-6">
                  <div className="font-serif text-[44px] leading-none w-28 shrink-0">{g.code}</div>
                  <div>
                    <div className="text-[18px]">{g.name}</div>
                    <p className="mt-2 text-[#6F6F6F] text-sm leading-relaxed">
                      {t("science.designReferences", { code: g.code })}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Outcome Tools — sticky left / scrolling right (4 tool cards) + animated SVG */}
      <section className="py-24 relative overflow-hidden" data-testid="science-outcomes">
        {/* Decorative animated circle */}
        <svg
          className="absolute -right-32 top-1/2 -translate-y-1/2 w-[560px] h-[560px] pointer-events-none"
          viewBox="0 0 200 200"
          aria-hidden="true"
          fill="none"
        >
          <circle
            ref={circleRef}
            cx="100"
            cy="100"
            r="90"
            stroke="black"
            strokeWidth="0.4"
            opacity="0.06"
          />
        </svg>

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <div className="text-[12px] uppercase tracking-[0.22em] text-[#6F6F6F]">{t("science.instruments")}</div>
              </Reveal>
              <SplitHeading
                as="h3"
                className="mt-6 font-serif text-[36px] md:text-[52px] leading-[1.02] tracking-[-0.02em]"
                depKey={t("science.measureTitle") + t("science.measureItalic")}
              >
                {t("science.measureTitle")} <i className="text-[#6F6F6F]">{t("science.measureItalic")}</i>
              </SplitHeading>
            </div>

            <div className="lg:col-span-7 space-y-5 lg:pt-4">
              {TOOLS.map((tool, i) => (
                <Reveal key={tool.code} delay={i + 1} className="snj-card p-7">
                  <div className="font-serif text-[34px] leading-none">{tool.code}</div>
                  <p className="mt-4 text-[13px] text-[#6F6F6F] leading-relaxed">{tool.name}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20" data-testid="science-research-note">
        <Container size="narrow">
          <Reveal>
            <p className="font-serif text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.015em]">
              {t("science.researchNote")}{" "}
              <i className="text-[#6F6F6F]">{t("science.researchNoteLinkText")}</i>{" "}
              {t("science.researchNoteEnd")}
            </p>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}