import React, { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SplitHeading from "../components/SplitHeading";
import PageHeader from "../components/PageHeader";
import SEOHead from "../components/SEOHead";
import { useTranslation } from "react-i18next";

const WEEKS = [
  {
    week: "Week 1",
    theme: "Body Awareness",
    days: [
      { d: 1, label: "Morning stretch — 10 min gentle movement" },
      { d: 2, label: "Diaphragmatic breathing — 5 min" },
      { d: 3, label: "Body scan meditation — 15 min" },
      { d: 4, label: "Walk barefoot on grass — 10 min" },
      { d: 5, label: "Gentle yoga nidra — 20 min" },
      { d: 6, label: "Nutrition: cook one warm, seasonal meal" },
      { d: 7, label: "Rest day: gratitude journaling — 5 min" },
    ],
  },
  {
    week: "Week 2",
    theme: "Mind & Breath",
    days: [
      { d: 8, label: "Anulom vilom pranayama — 10 min" },
      { d: 9, label: "One minute of silence — notice 5 sounds" },
      { d: 10, label: "Write down 3 fears — then breathe through each" },
      { d: 11, label: "Mindful eating — one meal without a screen" },
      { d: 12, label: "Bhramari (humming) breath — 5 min" },
      { d: 13, label: "Spend 20 min in nature without phone" },
      { d: 14, label: "Rest day: write a letter to your body" },
    ],
  },
  {
    week: "Week 3",
    theme: "Wisdom & Discernment",
    days: [
      { d: 15, label: "Read one page of the Bhagavad Gita" },
      { d: 16, label: "Ask one medical question you have been avoiding" },
      { d: 17, label: "Learn one thing about your cancer type" },
      { d: 18, label: "Declutter one drawer — simplify one corner" },
      { d: 19, label: "Say no to one thing that drains you" },
      { d: 20, label: "Call someone who helped you — thank them" },
      { d: 21, label: "Rest day: review your daily rhythm" },
    ],
  },
  {
    week: "Week 4",
    theme: "Soul & Community",
    days: [
      { d: 22, label: "Kirtan or devotional music — 15 min" },
      { d: 23, label: "Offer a meal to someone who needs it" },
      { d: 24, label: "Share your healing story — even just one sentence" },
      { d: 25, label: "Light a diya — sit in stillness for 10 min" },
      { d: 26, label: "Write your intention for the next year" },
      { d: 27, label: "Join or revisit the SNJ WhatsApp community" },
      { d: 28, label: "Rest day: meditate on the word 'wholeness'" },
    ],
  },
  {
    week: "Days 29–30",
    theme: "Integration",
    days: [
      { d: 29, label: "Repeat your single favourite practice from the month" },
      { d: 30, label: "Write a letter to yourself — to open in 90 days" },
    ],
  },
];

export default function Challenge() {
  const { t } = useTranslation();
  const [checked, setChecked] = useState({});

  const PILLARS = t("challenge.pillars", { returnObjects: true });
  const weekLabels = t("challenge.weekLabels", { returnObjects: true });
  const weekThemes = t("challenge.weekThemes", { returnObjects: true });

  const toggle = (day) => setChecked((prev) => ({ ...prev, [day]: !prev[day] }));
  const doneCount = Object.values(checked).filter(Boolean).length;

  return (
    <div data-testid="page-challenge">
      <SEOHead
        title="30-Day Wellbeing Challenge"
        description="A structured 30-day daily wellbeing programme grounded in the SNJ 4D Framework — body, mind, intelligence and soul."
        canonical="/challenge"
      />

      <PageHeader
        eyebrow={t("challenge.eyebrow")}
        title={t("challenge.title")}
        italic={t("challenge.italic")}
        subtitle={t("challenge.subtitle")}
        testId="challenge-header"
      />

      {/* Progress counter */}
      <section className="pb-16" data-testid="challenge-progress">
        <Container>
          <Reveal className="snj-card p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <div>
              <div className="text-[12px] uppercase tracking-[0.22em] text-[#6F6F6F]">{t("challenge.yourProgress")}</div>
              <div className="mt-3 font-serif text-[60px] leading-none">
                {doneCount}<span className="text-[#6F6F6F] text-[36px]">/30</span>
              </div>
              <div className="mt-2 text-[13px] text-[#6F6F6F]">{t("challenge.daysCompleted")}</div>
            </div>
            <div className="w-full md:w-[60%]">
              <div className="w-full h-2 bg-black/6 rounded-full overflow-hidden">
                <div
                  className="h-full bg-black rounded-full transition-all duration-700"
                  style={{ width: `${(doneCount / 30) * 100}%` }}
                />
              </div>
              <div className="mt-3 text-[12px] text-[#6F6F6F]">
                {t("challenge.progressNote")}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 4D Pillars */}
      <section className="pb-24" data-testid="challenge-pillars">
        <Container>
          <Reveal>
            <div className="text-[12px] uppercase tracking-[0.22em] text-[#6F6F6F]">{t("challenge.groundedIn")}</div>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PILLARS.map((p, i) => (
              <Reveal key={p.k} delay={i + 1} className="snj-card p-6">
                <div className="font-serif text-[34px] leading-none">{p.k}</div>
                <p className="mt-3 text-[13px] text-[#6F6F6F] leading-relaxed">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Weekly calendar — horizontal scroll (timeline) */}
      <section className="pb-32" data-testid="challenge-calendar">
        <Container className="pb-10">
          <Reveal>
            <div className="text-[12px] uppercase tracking-[0.22em] text-[#6F6F6F]">{t("challenge.calendarTitle")}</div>
          </Reveal>
          <SplitHeading
            className="mt-6 font-serif text-[40px] md:text-[60px] leading-[1] tracking-[-0.02em]"
            depKey={t("challenge.onePractice") + t("challenge.onePracticeItalic")}
          >
            {t("challenge.onePractice")} <i className="text-[#6F6F6F]">{t("challenge.onePracticeItalic")}</i>
          </SplitHeading>
        </Container>

        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WEEKS.map((w, wi) => (
              <Reveal key={w.week} delay={(wi % 2) + 1}>
                <div className="flex items-baseline gap-4 mb-5">
                  <div className="font-serif text-[28px] leading-none">{weekLabels[wi]}</div>
                  <div className="text-[12px] uppercase tracking-[0.2em] text-[#6F6F6F]">{weekThemes[wi]}</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {w.days.map((day) => (
                    <button
                      key={day.d}
                      onClick={() => toggle(day.d)}
                      className={`snj-card p-4 text-left transition-all ${
                        checked[day.d] ? "bg-black text-white border-black" : ""
                      }`}
                      aria-pressed={!!checked[day.d]}
                    >
                      <div className="flex items-start gap-3">
                        <span className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          checked[day.d] ? "bg-white border-white" : "border-black/20"
                        }`}>
                          {checked[day.d] && <Check className="w-3 h-3 text-black" strokeWidth={2.5} />}
                        </span>
                        <div>
                          <div className={`text-[11px] tracking-[0.18em] mb-1 ${checked[day.d] ? "text-white/60" : "text-[#6F6F6F]"}`}>
                            {t("challenge.dayLabel")} {day.d}
                          </div>
                          <div className={`text-[12px] leading-snug ${checked[day.d] ? "line-through opacity-70" : ""}`}>
                            {day.label}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#fafafa] border-y border-black/5" data-testid="challenge-cta">
        <Container size="narrow">
          <SplitHeading
            className="font-serif text-[40px] md:text-[60px] leading-[1] tracking-[-0.02em] text-center"
            depKey={t("challenge.deeperRetreat") + t("challenge.deeperRetreatItalic")}
          >
            {t("challenge.deeperRetreat")} <i className="text-[#6F6F6F]">{t("challenge.deeperRetreatItalic")}</i>
          </SplitHeading>
          <Reveal delay={1}>
            <p className="mt-8 text-center text-[#6F6F6F] max-w-md mx-auto leading-relaxed">
              {t("challenge.deeperRetreatBody")}
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-10 flex justify-center">
              <Link to="/get-involved" className="btn-pill">
                {t("challenge.joinRetreat")} <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}