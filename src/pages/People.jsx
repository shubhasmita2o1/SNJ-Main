
import React from "react";
import { useTranslation } from "react-i18next";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import PageHeader from "../components/PageHeader";

const PEOPLE = [
  {
    name: "Dr. Vaishnavanghri Sevak Das",
    role: "Director · BVCE, Educational Wing, ISKCON Navi Mumbai",
    bio: "Spiritual educator and founding voice of SNJ — guides the contemplative architecture of the retreat.",
    img: "https://images.unsplash.com/photo-1758691461935-202e2ef6b69f?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  },
  {
    name: "Dr. Purushottam Das",
    role: "Principal Research Investigator · Idea Originator, HCHR",
    bio: "Architect of the 4D framework and the scientific underpinning of the Holistic Cancer Healing Retreat.",
    img: "https://images.unsplash.com/photo-1758691462126-2ee47c8bf9e7?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  },
  {
    name: "Dr. Kiran Kalyankar",
    role: "Clinical Ayurveda Lead · Swaayu Cancer Care Centre",
    bio: "Integrative oncology and ayurveda clinician — leads the clinical bridge between traditions and treatment.",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  },
  {
    name: "Mr. Neeraj Kumar Jha",
    role: "Programme Coordinator · RSVP & Primary Contact",
    bio: "First voice of welcome — coordinates retreat logistics, participants, facilitators and family communication.",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  },
  {
    name: "Mr. Suresa Hari Das",
    role: "Community Liaison · ISKCON Navi Mumbai",
    bio: "Devotee-volunteer connecting the SNJ retreat to the wider community of seekers and supporters.",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  },
  {
    name: "The HCHR Circle",
    role: "Facilitators · Volunteers · Allies",
    bio: "An ever-growing circle of doctors, monks, yoga teachers, nutritionists and devoted volunteers.",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  },
];

export default function People() {
  const { t } = useTranslation();

  return (
    <div data-testid="page-people">
      <PageHeader
        eyebrow={t("people.eyebrow")}
        title={t("people.title")}
        italic={t("people.italic")}
        subtitle={t("people.subtitle")}
        testId="people-header"
      />

      <section className="pb-32" data-testid="people-grid">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PEOPLE.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) + 1} className="snj-card overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden bg-[#f5f5f5]">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                    style={{ filter: "grayscale(0.15) contrast(1.02)" }}
                  />
                </div>
                <div className="p-7">
                  <div className="font-serif text-[26px] leading-tight">{p.name}</div>
                  <div className="mt-2 text-[12px] uppercase tracking-[0.18em] text-[#6F6F6F]">
                    {p.role}
                  </div>
                  <p className="mt-4 text-[14px] text-[#6F6F6F] leading-relaxed">{p.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
