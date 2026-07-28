import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SplitHeading from "../components/SplitHeading";
import PageHeader from "../components/PageHeader";
import SEOHead from "../components/SEOHead";
import { useTranslation } from "react-i18next";

const CONTACTS = [
  { icon: Phone, label: "Tel", value: "+91 98219 14642", href: "tel:+919821914642" },
  { icon: Mail, label: "Email", value: "vaishnavanghri@gmail.com", href: "mailto:vaishnavanghri@gmail.com" },
  { icon: MapPin, label: "Address", value: "ISKCON Navi Mumbai, Maharashtra, India", href: "https://maps.google.com/?q=ISKCON+Navi+Mumbai" },
];

export default function Contact() {
  const { t } = useTranslation();
  const languages = t("contact.fields.languages", { returnObjects: true });
  const roles = t("contact.fields.roles", { returnObjects: true });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div data-testid="page-contact">
      <SEOHead
        title="Contact"
        description="Reach Swastha NavJeevan — write to us, call us, or join our WhatsApp community. We're here for patients, caregivers and survivors."
        canonical="/contact"
      />

      <PageHeader
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        italic={t("contact.italic")}
        subtitle={t("contact.subtitle")}
        testId="contact-header"
      />

      <section className="pb-20" data-testid="contact-details">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONTACTS.map((c, i) => (
              <Reveal key={c.label} delay={i + 1} className="snj-card p-8">
                <c.icon className="w-6 h-6" strokeWidth={1.3} aria-hidden="true" />
                <div className="mt-8 text-[12px] uppercase tracking-[0.2em] text-[#6F6F6F]">{c.label}</div>
                <a
                  href={c.href}
                  className="block mt-3 font-serif text-[22px] leading-tight hover:opacity-70 transition"
                  data-testid={`contact-${c.label.toLowerCase()}-link`}
                  target={c.label === "Address" ? "_blank" : undefined}
                  rel={c.label === "Address" ? "noopener noreferrer" : undefined}
                >
                  {c.value}
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact form */}
      <section className="py-20 bg-[#fafafa] border-y border-black/5" data-testid="contact-form">
        <Container size="narrow">
          <Reveal>
            <div className="text-[12px] uppercase tracking-[0.22em] text-[#6F6F6F]">{t("contact.sendMessage")}</div>
          </Reveal>
          <SplitHeading
            className="mt-6 font-serif text-[40px] md:text-[60px] leading-[1] tracking-[-0.02em]"
            depKey={t("contact.tellUs") + t("contact.tellUsItalic")}
          >
            {t("contact.tellUs")} <i className="text-[#6F6F6F]">{t("contact.tellUsItalic")}</i>
          </SplitHeading>

          {submitted ? (
            <Reveal delay={1}>
              <div className="mt-16 snj-card p-10 text-center">
                <div className="font-serif text-[48px] text-[#6F6F6F]">{t("contact.received")}</div>
                <p className="mt-4 text-[#6F6F6F] leading-relaxed max-w-sm mx-auto">
                  {t("contact.receivedBody")}
                </p>
              </div>
            </Reveal>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5"
              data-testid="snj-contact-form"
              noValidate
            >
              <input type="text" placeholder={t("contact.fields.name")} required className="bg-white border border-black/10 rounded-2xl px-5 py-4 outline-none focus:border-black/40 transition-colors" aria-label={t("contact.fields.name")} data-testid="contact-input-name" />
              <input type="tel" placeholder={t("contact.fields.phone")} className="bg-white border border-black/10 rounded-2xl px-5 py-4 outline-none focus:border-black/40 transition-colors" aria-label={t("contact.fields.phone")} data-testid="contact-input-phone" />
              <input type="email" placeholder={t("contact.fields.email")} required className="bg-white border border-black/10 rounded-2xl px-5 py-4 outline-none focus:border-black/40 transition-colors" aria-label={t("contact.fields.email")} data-testid="contact-input-email" />
              <input type="text" placeholder={t("contact.fields.city")} className="bg-white border border-black/10 rounded-2xl px-5 py-4 outline-none focus:border-black/40 transition-colors" aria-label={t("contact.fields.city")} data-testid="contact-input-city" />
              <input type="text" placeholder={t("contact.fields.district")} className="bg-white border border-black/10 rounded-2xl px-5 py-4 outline-none focus:border-black/40 transition-colors" aria-label={t("contact.fields.district")} data-testid="contact-input-district" />
              <select defaultValue="" className="bg-white border border-black/10 rounded-2xl px-5 py-4 outline-none focus:border-black/40 transition-colors text-[#1a1a1a]" aria-label={t("contact.fields.language")} data-testid="contact-select-language">
                <option value="" disabled>{t("contact.fields.language")}</option>
                {Array.isArray(languages) && languages.map((l) => <option key={l}>{l}</option>)}
              </select>
              <select defaultValue="" className="bg-white border border-black/10 rounded-2xl px-5 py-4 outline-none focus:border-black/40 transition-colors text-[#1a1a1a]" aria-label={t("contact.fields.role")} data-testid="contact-select-role">
                <option value="" disabled>{t("contact.fields.role")}</option>
                {Array.isArray(roles) && roles.map((r) => <option key={r}>{r}</option>)}
              </select>
              <input type="text" placeholder={t("contact.fields.cancerType")} className="bg-white border border-black/10 rounded-2xl px-5 py-4 outline-none focus:border-black/40 transition-colors" aria-label={t("contact.fields.cancerType")} data-testid="contact-input-cancer-type" />
              <textarea rows={5} placeholder={t("contact.fields.message")} required className="md:col-span-2 bg-white border border-black/10 rounded-2xl px-5 py-4 outline-none focus:border-black/40 transition-colors resize-none" aria-label={t("contact.fields.message")} data-testid="contact-input-message" />
              <button type="submit" className="btn-pill md:col-span-2 justify-self-start" data-testid="contact-submit">
                {t("contact.fields.submit")} <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="md:col-span-2 text-[12px] text-[#6F6F6F]">{t("contact.fields.privacy")}</p>
            </form>
          )}
        </Container>
      </section>

      {/* WhatsApp */}
      <section className="py-12" data-testid="contact-whatsapp">
        <Container>
          <Reveal>
            <div className="snj-card p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="text-[12px] uppercase tracking-[0.22em] text-[#6F6F6F]">{t("contact.whatsappTitle")}</div>
                <SplitHeading
                  as="h3"
                  className="mt-4 font-serif text-[36px] md:text-[52px] leading-[1] tracking-[-0.02em]"
                  depKey={t("contact.joinCircle") + t("contact.joinCircleItalic")}
                >
                  {t("contact.joinCircle")} <i className="text-[#6F6F6F]">{t("contact.joinCircleItalic")}</i>
                </SplitHeading>
                <p className="mt-4 text-[#6F6F6F] max-w-md leading-relaxed">
                  {t("contact.joinCircleBody")}
                </p>
              </div>
              <a
                href="https://wa.me/919821914642?text=Namaste%2C%20I%27d%20like%20to%20join%20the%20Swastha%20NavJeevan%20community."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill"
                data-testid="contact-whatsapp-cta"
                aria-label="Open WhatsApp to join the SNJ community"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" /> {t("contact.openWhatsApp")} <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Map */}
      <section className="pb-32" data-testid="contact-map">
        <Container>
          <Reveal>
            <div className="rounded-[24px] overflow-hidden border border-black/5">
              <iframe
                title="ISKCON Navi Mumbai location"
                src="https://www.google.com/maps?q=ISKCON+Navi+Mumbai&output=embed"
                className="w-full h-[460px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}