import React, { useState } from "react";
import { ArrowUpRight, HeartHandshake, HandHeart, HelpingHand, X } from "lucide-react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import PageHeader from "../components/PageHeader";
import SEOHead from "../components/SEOHead";
import { useTranslation } from "react-i18next";

function RegistrationForm({ card, onClose }) {
  const { t } = useTranslation();
  const roles = t("getInvolved.form.roles", { returnObjects: true });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[400] flex items-end md:items-center justify-center p-4 md:p-0"
      role="dialog"
      aria-modal="true"
      aria-label={`${card.title} registration form`}
    >
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-[600px] max-h-[90svh] overflow-y-auto glass-nav glass-nav-scrolled rounded-[24px] p-8 md:p-10 shadow-2xl">
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#6F6F6F]">{card.sub}</div>
            <h3 className="mt-2 font-serif text-[36px] leading-tight">{card.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/6 transition"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div className="font-serif text-[40px] text-[#6F6F6F]">{t("getInvolved.form.thankYou")}</div>
            <p className="mt-4 text-[#6F6F6F] leading-relaxed">
              {t("getInvolved.form.thankYouBody")}
            </p>
            <button onClick={onClose} className="btn-pill mt-8">
              {t("common.close")} <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            noValidate
          >
            <input
              type="text"
              placeholder={t("getInvolved.form.name")}
              required
              className="bg-white/70 border border-black/10 rounded-2xl px-5 py-4 outline-none focus:border-black/40 transition-colors"
              aria-label={t("getInvolved.form.name")}
            />
            <input
              type="tel"
              placeholder={t("getInvolved.form.phone")}
              className="bg-white/70 border border-black/10 rounded-2xl px-5 py-4 outline-none focus:border-black/40 transition-colors"
              aria-label={t("getInvolved.form.phone")}
            />
            <input
              type="email"
              placeholder={t("getInvolved.form.email")}
              required
              className="bg-white/70 border border-black/10 rounded-2xl px-5 py-4 outline-none focus:border-black/40 transition-colors"
              aria-label={t("getInvolved.form.email")}
            />
            <input
              type="text"
              placeholder={t("getInvolved.form.city")}
              className="bg-white/70 border border-black/10 rounded-2xl px-5 py-4 outline-none focus:border-black/40 transition-colors"
              aria-label={t("getInvolved.form.city")}
            />
            <input
              type="text"
              placeholder={t("getInvolved.form.district")}
              className="bg-white/70 border border-black/10 rounded-2xl px-5 py-4 outline-none focus:border-black/40 transition-colors"
              aria-label={t("getInvolved.form.district")}
            />
            <select
              defaultValue=""
              required
              className="bg-white/70 border border-black/10 rounded-2xl px-5 py-4 outline-none focus:border-black/40 transition-colors text-[#1a1a1a]"
              aria-label={t("getInvolved.form.role")}
            >
              <option value="" disabled>{t("getInvolved.form.role")}</option>
              {Array.isArray(roles) && roles.map((r) => <option key={r}>{r}</option>)}
            </select>
            <textarea
              rows={4}
              placeholder={t("getInvolved.form.message")}
              className="md:col-span-2 bg-white/70 border border-black/10 rounded-2xl px-5 py-4 outline-none focus:border-black/40 transition-colors resize-none"
              aria-label={t("getInvolved.form.message")}
            />
            <div className="md:col-span-2">
              <button type="submit" className="btn-pill">
                {t("getInvolved.form.submit")} <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="mt-4 text-[12px] text-[#6F6F6F]">{t("getInvolved.form.privacy")}</p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default function GetInvolved() {
  const { t } = useTranslation();
  const [activeForm, setActiveForm] = useState(null);

  const PATHS = [
    {
      icon: HeartHandshake,
      n: "01",
      title: t("getInvolved.card1.title"),
      sub: t("getInvolved.card1.sub"),
      desc: t("getInvolved.card1.desc"),
      cta: t("getInvolved.card1.cta"),
    },
    {
      icon: HandHeart,
      n: "02",
      title: t("getInvolved.card2.title"),
      sub: t("getInvolved.card2.sub"),
      desc: t("getInvolved.card2.desc"),
      cta: t("getInvolved.card2.cta"),
    },
    {
      icon: HelpingHand,
      n: "03",
      title: t("getInvolved.card3.title"),
      sub: t("getInvolved.card3.sub"),
      desc: t("getInvolved.card3.desc"),
      cta: t("getInvolved.card3.cta"),
    },
  ];

  return (
    <div data-testid="page-get-involved">
      <SEOHead
        title="Get Involved"
        description="Join the Swastha NavJeevan circle — attend a healing retreat, volunteer your skills, or partner with us to sustain free cancer care programmes."
        canonical="/get-involved"
      />

      <PageHeader
        eyebrow={t("getInvolved.eyebrow")}
        title={t("getInvolved.title")}
        italic={t("getInvolved.italic")}
        subtitle={t("getInvolved.subtitle")}
        testId="get-involved-header"
      />

      <section className="pb-32" data-testid="get-involved-pathways">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PATHS.map((p, i) => (
              <Reveal key={p.title} delay={i + 1} className="snj-card p-8 flex flex-col">
                <p.icon className="w-7 h-7" strokeWidth={1.2} aria-hidden="true" />
                <div className="mt-8 text-[11px] uppercase tracking-[0.22em] text-[#6F6F6F]">
                  Pathway {p.n}
                </div>
                <div className="mt-3 font-serif text-[44px] leading-none">{p.title}</div>
                <div className="mt-2 text-[12px] uppercase tracking-[0.18em] text-[#6F6F6F]">{p.sub}</div>
                <p className="mt-6 text-[#6F6F6F] text-[14px] leading-relaxed flex-1">{p.desc}</p>
                <button
                  onClick={() => setActiveForm(p)}
                  className="btn-pill btn-pill-sm mt-8 self-start"
                  data-testid={`pathway-cta-${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {p.cta} <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {activeForm && (
        <RegistrationForm card={activeForm} onClose={() => setActiveForm(null)} />
      )}
    </div>
  );
}
