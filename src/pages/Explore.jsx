import React, { useState } from "react";
import { Download, Play, Quote } from "lucide-react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SplitHeading from "../components/SplitHeading";
import PageHeader from "../components/PageHeader";
import DownloadCard from "../components/DownloadCard";
import SEOHead from "../components/SEOHead";
import { useTranslation } from "react-i18next";

const GALLERY = [
  { src: "https://images.unsplash.com/photo-1545389336-cf090694435e?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200", h: "h-[520px]", caption: "Morning kirtan circle", category: "Spiritual" },
  { src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200", h: "h-[320px]", caption: "Mindful breath", category: "Movement" },
  { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200", h: "h-[400px]", caption: "Sangha gathering", category: "Community" },
  { src: "https://images.unsplash.com/photo-1604881991720-f91add269bed?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200", h: "h-[520px]", caption: "Ayurvedic herbs", category: "Wellness" },
  { src: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200", h: "h-[360px]", caption: "Lamp lighting", category: "Spiritual" },
  { src: "https://images.unsplash.com/photo-1513097847644-f00cfe868607?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200", h: "h-[440px]", caption: "Quiet prayer", category: "Spiritual" },
  { src: "https://images.unsplash.com/photo-1547100037-3308164630f2?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200", h: "h-[300px]", caption: "Lotus at dawn", category: "Nature" },
  { src: "https://images.unsplash.com/photo-1600340053706-32d1278206ef?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200", h: "h-[380px]", caption: "Forest meditation", category: "Movement" },
  { src: "https://images.unsplash.com/photo-1758999422230-3c6269bbc349?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200", h: "h-[480px]", caption: "Healing gathering", category: "Community" },
];

const GALLERY_CATS = ["All", "Spiritual", "Movement", "Community", "Wellness", "Nature"];

const VIDEO_PLACEHOLDERS = [
  { title: "HCHR Retreat Overview", duration: "8:42", img: "https://images.unsplash.com/photo-1545389336-cf090694435e?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
  { title: "Morning Yoga Session", duration: "24:15", img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
  { title: "Dr. Talk: Integrative Oncology", duration: "32:08", img: "https://images.unsplash.com/photo-1604881991720-f91add269bed?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
];

const TESTIMONIALS = [
  {
    quote: "I came as a patient who had lost faith in my body. I left as someone who remembered — even this body is trying. The SNJ retreat did not cure my cancer. But it healed something deeper.",
    name: "Sunita R.",
    role: "Breast cancer survivor, Navi Mumbai",
  },
  {
    quote: "As a caregiver, I was invisible — drowning in appointments and fear. The retreat gave me a morning where I was seen, held, and reminded that I too need to heal.",
    name: "Arvind K.",
    role: "Caregiver, Thane",
  },
  {
    quote: "The kirtan session broke something open in me. I am not a spiritual person by habit. But the room was full of people who understood without words.",
    name: "Meera S.",
    role: "Ovarian cancer patient, Pune",
  },
];

const PRESS = [
  { outlet: "Times of India", headline: "ISKCON's cancer healing programme bridges bhakti and oncology", year: "2024" },
  { outlet: "Ayurveda Today", headline: "Integrative oncology: the SNJ model", year: "2023" },
  { outlet: "Maharashtra Times", headline: "मुफ्त कर्करोग उपचार रिट्रीट — एक अनोखी पहल", year: "2024" },
];

const DOWNLOADS = [
  { title: "SNJ Programme Brochure", language: "EN · HI", category: "Overview", description: "Complete overview of the HCHR retreat — schedule, faculty, eligibility and registration." },
  { title: "HCHR Retreat Schedule", language: "EN", category: "Schedule", description: "The detailed session-by-session timetable for a standard HCHR retreat day." },
  { title: "Scientific One-Pager", language: "EN", category: "Research", description: "A quick-reference evidence summary for oncologists, hospitals and CSR partners." },
  { title: "Volunteer Handbook", language: "EN · HI", category: "Volunteer", description: "How to prepare, what to expect and our code of care for all SNJ volunteers." },
];

export default function Explore() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter);

  return (
    <div data-testid="page-explore">
      <SEOHead
        title="Explore"
        description="Real photographs, attributed testimonials, session recordings and downloadable resources from the Swastha NavJeevan retreats."
        canonical="/explore"
      />

      <PageHeader
        eyebrow={t("explore.eyebrow")}
        title={t("explore.title")}
        italic={t("explore.italic")}
        subtitle={t("explore.subtitle")}
        testId="explore-header"
      />

      {/* Photo gallery with category filters */}
      <section className="pb-20" data-testid="explore-gallery">
        <Container>
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter gallery by category">
              {GALLERY_CATS.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-[12px] uppercase tracking-[0.18em] border transition-all ${
                    filter === cat
                      ? "bg-black text-white border-black"
                      : "border-black/12 text-black/70 hover:border-black/30"
                  }`}
                  aria-pressed={filter === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {filtered.map((g, i) => (
              <Reveal key={`${g.caption}-${i}`} delay={(i % 4) + 1} className="mb-6 break-inside-avoid">
                <div className="relative overflow-hidden rounded-[20px] group">
                  <img
                    src={g.src}
                    alt={g.caption}
                    className={`w-full ${g.h} object-cover transition-transform duration-[1200ms] group-hover:scale-105`}
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 text-[11px] uppercase tracking-[0.2em] text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                    {g.caption}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Video gallery */}
      <section className="py-20 bg-[#fafafa] border-y border-black/5" data-testid="explore-video">
        <Container>
          <Reveal>
            <div className="text-[12px] uppercase tracking-[0.22em] text-[#6F6F6F]">{t("explore.sessionRecordings")}</div>
          </Reveal>
          <SplitHeading
            className="mt-6 font-serif text-[40px] md:text-[60px] leading-[1.02] tracking-[-0.02em]"
            depKey={t("explore.watchTitle") + t("explore.watchItalic")}
          >
            {t("explore.watchTitle")} <i className="text-[#6F6F6F]">{t("explore.watchItalic")}</i>
          </SplitHeading>
          <Reveal delay={2}>
            <p className="mt-6 text-[#6F6F6F] max-w-md leading-relaxed">
              {t("explore.watchBody")}
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {VIDEO_PLACEHOLDERS.map((v, i) => (
              <Reveal key={v.title} delay={i + 1}>
                <div className="snj-card overflow-hidden group">
                  <div className="relative aspect-video">
                    <img
                      src={v.img}
                      alt={v.title}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center transition-transform group-hover:scale-110">
                        <Play className="w-5 h-5 text-black ml-0.5" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[11px] px-2 py-0.5 rounded">
                      {v.duration}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="font-serif text-[20px] leading-tight">{v.title}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-24" data-testid="explore-testimonials">
        <Container>
          <Reveal>
            <div className="text-[12px] uppercase tracking-[0.22em] text-[#6F6F6F]">{t("explore.testimonials")}</div>
          </Reveal>
          <SplitHeading
            className="mt-6 font-serif text-[40px] md:text-[60px] leading-[1] tracking-[-0.02em]"
            depKey={t("explore.inTheirWords") + t("explore.inTheirWordsItalic")}
          >
            {t("explore.inTheirWords")} <i className="text-[#6F6F6F]">{t("explore.inTheirWordsItalic")}</i>
          </SplitHeading>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item, i) => (
              <Reveal key={item.name} delay={i + 1} className="snj-card p-8 flex flex-col">
                <Quote className="w-6 h-6 text-black/20 mb-6" strokeWidth={1.2} aria-hidden="true" />
                <p className="font-serif text-[20px] leading-[1.4] flex-1">{item.quote}</p>
                <div className="mt-8 pt-6 border-t border-black/5">
                  <div className="text-[14px] font-medium">{item.name}</div>
                  <div className="mt-1 text-[12px] uppercase tracking-[0.16em] text-[#6F6F6F]">{item.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Press coverage */}
      <section className="py-20 bg-[#fafafa] border-y border-black/5" data-testid="explore-press">
        <Container>
          <Reveal>
            <div className="text-[12px] uppercase tracking-[0.22em] text-[#6F6F6F]">{t("explore.pressCoverage")}</div>
          </Reveal>
          <SplitHeading
            className="mt-6 font-serif text-[36px] md:text-[52px] leading-[1] tracking-[-0.02em]"
            depKey={t("explore.asCoveredBy") + t("explore.asCoveredByItalic")}
          >
            {t("explore.asCoveredBy")} <i className="text-[#6F6F6F]">{t("explore.asCoveredByItalic")}</i>
          </SplitHeading>
          <div className="mt-10 space-y-4">
            {PRESS.map((p, i) => (
              <Reveal key={p.headline} delay={1} className="snj-card p-7 flex items-center gap-8">
                <div className="text-[11px] uppercase tracking-[0.2em] text-[#6F6F6F] shrink-0 w-[140px]">{p.outlet}</div>
                <div className="flex-1 font-serif text-[20px] leading-tight">{p.headline}</div>
                <div className="text-[12px] text-[#6F6F6F] shrink-0">{p.year}</div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Download centre */}
      <section className="py-24" data-testid="explore-resources">
        <Container>
          <Reveal>
            <div className="text-[12px] uppercase tracking-[0.22em] text-[#6F6F6F]">{t("explore.downloadCentre")}</div>
          </Reveal>
          <SplitHeading
            as="h3"
            className="mt-6 font-serif text-[36px] md:text-[52px] leading-[1] tracking-[-0.02em]"
            depKey={t("explore.takeIt") + t("explore.takeItItalic")}
          >
            {t("explore.takeIt")} <i className="text-[#6F6F6F]">{t("explore.takeItItalic")}</i>
          </SplitHeading>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {DOWNLOADS.map((d, i) => (
              <Reveal key={d.title} delay={(i % 4) + 1}>
                <DownloadCard {...d} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}