import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionTitle } from "@/components/site/Section";
import { X, Download, Play, ExternalLink } from "lucide-react";

// Sample assets
import heroImg from "@/assets/hero-temple-dawn.jpg";
import sampleAvatar from "@/assets/people/giri.png"; // Replace with actual images for media items

const mediaItems = [
  { type: "photo", src: sampleAvatar, title: "Inaugural Lamp Lighting", caption: "Dr. Sura Das lights the lamp at the first HCHR retreat, May 30 2026", date: "30 May 2026" },
  { type: "photo", src: sampleAvatar, title: "Adaptive Yoga Session", caption: "Gentle movement practice for cancer patients", date: "31 May 2026" },
  { type: "video", src: "#", title: "Patient Story — Mrs. Meena Sharma", caption: "How HCHR helped during chemotherapy", date: "2 June 2026" },
];

const pressCoverage = [
  { title: "Times of India", date: "1 June 2026", desc: "ISKCON Navi Mumbai launches free integrative cancer healing programme", link: "#" },
  { title: "Maharashtra Times", date: "3 June 2026", desc: "HCHR: Where ancient wisdom meets modern oncology", link: "#" },
];

const testimonials = [
  {
    name: "Mrs. Meena Sharma",
    role: "Breast Cancer Survivor, Cohort 1",
    text: "I came with fear and left with peace. The combination of medical guidance, meditation, and community support gave me strength I never knew I had.",
    date: "June 2026"
  },
  {
    name: "Mr. Rajesh Patel",
    role: "Lung Cancer Patient",
    text: "The doctors at ACTREC-TMC are guiding us medically, but the soul-level healing at HCHR is what truly helped my family and me cope.",
    date: "June 2026"
  },
];

const resources = [
  { title: "HCHR Programme Brochure 2026", file: "/brochures/hchr-brochure-2026.pdf", size: "2.4 MB" },
  { title: "Integrative Oncology Evidence Summary", file: "/brochures/integrative-oncology-evidence.pdf", size: "1.8 MB" },
  { title: "Patient Journey & Expectations Guide", file: "/brochures/patient-journey-guide.pdf", size: "980 KB" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery & Media — Swastha NavJeevan" },
      { name: "description", content: "Photos, videos, press coverage, testimonials and downloadable resources from HCHR." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments of Healing"
        lead="Real stories. Real people. Real transformation."
        image={heroImg}
      />

      {/* Media Gallery */}
      <Section tone="cream">
        <div className="container-wide">
          <SectionTitle eyebrow="Media Gallery" title="From the Inaugural Retreat" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaItems.map((item, i) => (
              <div 
                key={i}
                onClick={() => item.type === "photo" && setLightboxIndex(i)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow hover:shadow-xl transition-all"
              >
                <div className="relative aspect-video">
                  <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="text-xs text-teal-600 uppercase tracking-widest">{item.date}</div>
                  <h3 className="font-semibold mt-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Press Coverage */}
      <Section tone="white">
        <div className="container-wide">
          <SectionTitle eyebrow="In the News" title="Press Coverage" />
          <div className="mt-10 space-y-6">
            {pressCoverage.map((article, i) => (
              <a href={article.link} key={i} target="_blank" className="block group">
                <div className="flex items-start gap-6 bg-cream p-6 rounded-2xl hover:bg-amber-50 transition-colors">
                  <div className="flex-1">
                    <div className="text-xs text-teal-600">{article.date}</div>
                    <h3 className="font-semibold text-xl mt-2 group-hover:text-teal-700 transition-colors">{article.title}</h3>
                    <p className="text-gray-600 mt-2">{article.desc}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section tone="cream">
        <div className="container-wide">
          <SectionTitle eyebrow="Voices of Healing" title="Real Stories from Real Patients" />
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-gold/10 rounded-3xl p-8">
                <p className="italic text-lg leading-relaxed">“{t.text}”</p>
                <div className="mt-6 border-t pt-6">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Downloadable Resources */}
      <Section tone="navy">
        <div className="container-wide">
          <SectionTitle eyebrow="Resources" title="Downloadable Materials" tone="white" />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((res, i) => (
              <a
                key={i}
                href={res.file}
                download
                className="group flex items-center gap-5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl p-6 transition-all"
              >
                <div className="bg-white/10 p-4 rounded-xl">
                  <Download className="w-8 h-8 text-amber-400" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-white">{res.title}</div>
                  <div className="text-xs text-white/60">{res.size}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}