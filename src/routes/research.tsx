import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionTitle } from "@/components/site/Section";
import { ExternalLink, FileText, Award, Users } from "lucide-react";

const publications = [
  {
    title: "HCHR 4D Integrative Oncology Framework: Rationale and Protocol Design",
    authors: "Purushottam Das, Amit Joshi, Vikram Gota et al.",
    journal: "Journal of Integrative Oncology",
    year: "2026",
    status: "Under Review",
    link: "#",
  },
  {
    title: "Feasibility of a Multi-Domain 4D Wellbeing Intervention in Cancer Patients: Inaugural Cohort Outcomes",
    authors: "Amit Joshi, Vikram Gota, Purushottam Das",
    journal: "ACTREC-TMC Internal Report",
    year: "2026",
    status: "In Preparation",
    link: "#",
  },
];

const keyDocuments = [
  {
    title: "HCHR Scientific Framework & 4D Protocol v1.2",
    type: "PDF",
    size: "2.8 MB",
    link: "/docs/hchr-scientific-framework-v1.2.pdf",
    description: "Complete theoretical foundation, intervention design, outcome measures and implementation protocol",
  },
  {
    title: "ClinicalTrials.gov Pre-Registration",
    type: "NCT",
    size: "External",
    link: "https://clinicaltrials.gov/study/NCT00000000", // ← Replace with real NCT later
    description: "Official trial registration on ClinicalTrials.gov",
  },
  {
    title: "Ethics Committee Approval Letter (ACTREC-TMC)",
    type: "PDF",
    size: "1.1 MB",
    link: "/docs/ec-approval-hchr-2026.pdf",
    description: "Institutional Ethics Committee approval for HCHR study",
  },
];

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research & Publications — Swastha NavJeevan" },
      { name: "description", content: "Scientific framework, clinical trial registration, ethics approvals and peer-reviewed publications for researchers and clinicians." },
    ],
  }),
  component: Research,
});

function Research() {
  return (
    <>
      <PageHero
        eyebrow="P9 Research"
        title="Rigorous. Transparent. Integrative."
        lead="HCHR was designed from day one as a research-backed programme. We are committed to the highest standards of scientific transparency and ethical conduct."
        image="/assets/research-hero.jpg"
      />

      <Section tone="white">
        <div className="container-wide max-w-4xl">
          <SectionTitle
            eyebrow="Our Approach"
            title="Science with Soul"
            lead="Every intervention in HCHR is grounded in peer-reviewed literature. The programme is both a clinical service and a living research platform."
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center bg-teal-50 border border-teal-100 rounded-3xl p-8">
              <div className="text-4xl mb-4">📋</div>
              <h4 className="font-semibold">Preregistered</h4>
              <p className="text-sm text-teal-700 mt-2">ClinicalTrials.gov</p>
            </div>
            <div className="text-center bg-amber-50 border border-amber-100 rounded-3xl p-8">
              <div className="text-4xl mb-4">✅</div>
              <h4 className="font-semibold">Ethics Approved</h4>
              <p className="text-sm text-amber-700 mt-2">ACTREC-TMC IRB</p>
            </div>
            <div className="text-center bg-purple-50 border border-purple-100 rounded-3xl p-8">
              <div className="text-4xl mb-4">📄</div>
              <h4 className="font-semibold">Open Science</h4>
              <p className="text-sm text-purple-700 mt-2">Transparent & reproducible</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Scientific Framework */}
      <Section tone="cream">
        <div className="container-wide">
          <SectionTitle
            eyebrow="Core Document"
            title="HCHR 4D Scientific Framework"
          />
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600">
              The complete rationale, theoretical foundation, intervention design, outcome measures, and implementation protocol.
            </p>
            <a 
              href="/docs/hchr-scientific-framework-v1.2.pdf" 
              className="inline-flex items-center gap-3 mt-8 bg-white border border-gray-200 hover:border-teal-300 px-8 py-4 rounded-2xl font-medium transition-all"
            >
              <FileText className="w-5 h-5" />
              Download Full Framework (PDF, 2.8 MB)
            </a>
          </div>
        </div>
      </Section>

      {/* Publications */}
      <Section tone="white">
        <div className="container-wide">
          <SectionTitle
            eyebrow="Publications"
            title="Peer-Reviewed & In Progress"
          />

          <div className="mt-10 space-y-6">
            {publications.map((pub, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <div className="text-sm text-teal-600">{pub.journal} • {pub.year}</div>
                  <h3 className="text-xl font-semibold mt-3 leading-tight">{pub.title}</h3>
                  <p className="text-sm text-gray-600 mt-3">{pub.authors}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs px-4 py-1 bg-amber-100 text-amber-700 rounded-full">{pub.status}</span>
                  {pub.link !== "#" && (
                    <a href={pub.link} className="flex items-center gap-2 text-teal-600 hover:underline">
                      View <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Key Documents */}
      <Section tone="navy">
        <div className="container-wide">
          <SectionTitle
            eyebrow="For Researchers"
            title="Key Documents"
            tone="white"
          />

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {keyDocuments.map((doc, i) => (
              <a
                key={i}
                href={doc.link}
                target={doc.link.startsWith("http") ? "_blank" : undefined}
                className="group bg-white/10 border border-white/20 hover:bg-white/15 rounded-3xl p-8 flex gap-6 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  {doc.type === "PDF" ? <FileText className="w-6 h-6 text-amber-400" /> : <Award className="w-6 h-6 text-amber-400" />}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-white group-hover:text-amber-300 transition-colors">{doc.title}</div>
                  <div className="text-sm text-white/60 mt-1">{doc.description}</div>
                  <div className="text-xs text-white/50 mt-3">{doc.size}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}