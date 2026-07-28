import React from "react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SplitHeading from "../components/SplitHeading";
import PageHeader from "../components/PageHeader";
import SEOHead from "../components/SEOHead";
import { useTranslation } from "react-i18next";

const INSTITUTIONS = [
  {
    key: "iskcon",
    name: "ISKCON Navi Mumbai",
    logoAlt: "ISKCON Navi Mumbai logo placeholder",
    img: "https://images.unsplash.com/photo-1545389336-cf090694435e?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  },
  {
    key: "bvce",
    name: "BVCE",
    logoAlt: "BVCE logo placeholder",
    img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  },
  {
    key: "bahrc",
    name: "BAHRC",
    logoAlt: "BAHRC logo placeholder",
    img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  },
  {
    key: "swaayu",
    name: "Swaayu Cancer Care Centre",
    logoAlt: "Swaayu Cancer Care Centre logo placeholder",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  },
];

const IMG_1 =
  "https://images.unsplash.com/photo-1758999422230-3c6269bbc349?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400";
const IMG_2 =
  "https://images.unsplash.com/photo-1547100037-194ff69f5dcb?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400";

export default function About() {
  const { t } = useTranslation();

  return (
    <div data-testid="page-about">
      <SEOHead
        title="About"
        description="Swastha NavJeevan was born at the meeting point of bhakti, science and human suffering — the work of ISKCON Navi Mumbai, BVCE, BAHRC and Swaayu."
        canonical="/about"
      />

      <PageHeader
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        italic={t("about.italic")}
        subtitle={t("about.subtitle")}
        testId="about-header"
      />

      <section className="pb-24" data-testid="about-image-block">
        <Container>
          <Reveal>
            <img
              src={IMG_1}
              alt="Quiet retreat space at ISKCON Navi Mumbai"
              className="w-full h-[420px] md:h-[560px] object-cover rounded-[24px]"
              loading="lazy"
            />
          </Reveal>
        </Container>
      </section>

      {/* Four institutions */}
      <section className="py-20 md:py-28" data-testid="about-institutions">
        <Container>
          <Reveal>
            <div className="text-[12px] uppercase tracking-[0.22em] text-[#6F6F6F]">
              {t("about.institutionsEyebrow")}
            </div>
          </Reveal>
          <SplitHeading
            className="mt-6 font-serif text-[40px] md:text-[64px] leading-[1] tracking-[-0.02em] max-w-[900px]"
            depKey={t("about.institutionsTitle") + t("about.institutionsTitleItalic")}
          >
            {t("about.institutionsTitle")} <i className="text-[#6F6F6F]">{t("about.institutionsTitleItalic")}</i>
          </SplitHeading>

          <div className="mt-20 space-y-20">
            {INSTITUTIONS.map((inst, i) => (
              <div key={inst.key} data-testid={`about-institution-${inst.key}`}>
                <Reveal>
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}>
                    <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                      <Reveal>
                        <div className="w-16 h-16 rounded-2xl bg-black/4 border border-black/6 flex items-center justify-center mb-6">
                          <span className="text-[11px] uppercase tracking-[0.2em] text-[#6F6F6F]">{inst.logoAlt}</span>
                        </div>
                      </Reveal>
                      <Reveal delay={1}>
                        <div className="text-[11px] uppercase tracking-[0.22em] text-[#6F6F6F]">{t(`about.${inst.key}Role`)}</div>
                      </Reveal>
                      <SplitHeading
                        as="h3"
                        className="mt-3 font-serif text-[36px] md:text-[52px] leading-[1.02] tracking-[-0.02em]"
                        depKey={inst.name}
                      >
                        {inst.name}
                      </SplitHeading>
                      <Reveal delay={2}>
                        <p className="mt-6 text-[#6F6F6F] leading-relaxed max-w-[520px]">{t(`about.${inst.key}Desc`)}</p>
                      </Reveal>
                    </div>
                    <Reveal delay={1} className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                      <img
                        src={inst.img}
                        alt={inst.name}
                        className="w-full h-[360px] object-cover rounded-[20px]"
                        loading="lazy"
                      />
                    </Reveal>
                  </div>
                </Reveal>
                {i < INSTITUTIONS.length - 1 && (
                  <div className="mt-20 border-t border-black/5" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Origin story */}
      <section className="py-24" data-testid="about-origin-story">
        <Container size="narrow">
          <Reveal>
            <div className="text-[12px] uppercase tracking-[0.22em] text-[#6F6F6F]">
              {t("about.originEyebrow")}
            </div>
          </Reveal>
          <SplitHeading
            as="h3"
            className="mt-6 font-serif text-[40px] md:text-[60px] leading-[1.02] tracking-[-0.02em]"
            depKey={t("about.originTitle") + t("about.originTitleItalic")}
          >
            {t("about.originTitle")} <i className="text-[#6F6F6F]">{t("about.originTitleItalic")}</i>.
          </SplitHeading>
          <Reveal delay={2}>
            <p className="mt-8 text-[#6F6F6F] leading-relaxed">
              {t("about.originP1")}
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-6 text-[#6F6F6F] leading-relaxed">
              {t("about.originP2")}
            </p>
          </Reveal>
          <Reveal delay={4}>
            <img
              src={IMG_2}
              alt="Lotus — symbol of beauty arising from deep water"
              className="mt-14 w-full h-[420px] object-cover rounded-[20px]"
              loading="lazy"
            />
          </Reveal>
        </Container>
      </section>
    </div>
  );
}