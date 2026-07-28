import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionTitle } from "@/components/site/Section";

// Only use the image you confirmed exists
import drSuraDas from "@/assets/people/giri.png";

export const Route = createFileRoute("/people")({
  head: () => ({
    meta: [
      { title: "Our People — Swastha NavJeevan" },
      { name: "description", content: "Core team, scientific collaborators, and generous donors behind HCHR." },
    ],
  }),
  component: People,
});

function People() {
  return (
    <>
      <PageHero
        eyebrow="Our Community"
        title="Science Meets Wisdom"
        lead="A rare convergence of global oncology credentials and Vedic depth — united by the conviction that healing must be complete."
        image={drSuraDas}
      />

      {/* ====================== CORE TEAM ====================== */}
      <Section tone="white">
        <div className="container-wide">
          <SectionTitle
            eyebrow="THE TEAM"
            title="Science Meets Wisdom"
            lead="A rare convergence of global oncology credentials and Vedic depth."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            <TeamMember image={drSuraDas} name="Dr. Sura Das" role="Institutional Sponsor" desc="Temple President, ISKCON Navi Mumbai" />
            <TeamMember image={drSuraDas} name="Dr. Purushottam Das" role="Principal Research Investigator" desc="Ph.D. Life Sciences — ACTREC-TMC" />
            <TeamMember image={drSuraDas} name="Dr. Vaishnavanghri Sevak Das" role="Programme Director" desc="Ph.D. Polymer Chemistry" />
            <TeamMember image={drSuraDas} name="Dr. Amogh Gaurang Das" role="Technology & IP Adviser" desc="Ph.D. AI Application" />
            <TeamMember image={drSuraDas} name="Dr. Kiran Kalyankar" role="Clinical Ayurvedic Partner" desc="Ayurvedic Oncologist" />
            <TeamMember image={drSuraDas} name="Mr. Neeraj Kumar" role="Programme Coordinator" desc="Global IoT School" />
          </div>
        </div>
      </Section>

      {/* ====================== SCIENTIFIC COLLABORATORS ====================== */}
      <Section tone="cream">
        <div className="container-wide">
          <SectionTitle
            eyebrow="SCIENTIFIC COLLABORATORS"
            title="Building the Evidence Together"
            lead="Working with India's leading minds in oncology and integrative medicine."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Collaborator image={drSuraDas} name="Dr. Amit Joshi" role="Prof. & Head, Medical Oncology" org="ACTREC-TMC" />
            <Collaborator image={drSuraDas} name="Dr. Vikram Gota" role="Prof. & In-charge, Integrative Oncology" org="ACTREC-TMC" />
            <Collaborator image={drSuraDas} name="Dr. Nandita Saikia" role="Professor, Population Sciences" org="IIPS Mumbai" />
            <Collaborator image={drSuraDas} name="Dr. Jyotiranjan Behuria" role="Principal Investigator" org="IKS - Science & Consciousness" />
            <Collaborator image={drSuraDas} name="Dr. Avinash Tippani" role="Clinical Collaborator" org="Integrative Oncology" />
          </div>
        </div>
      </Section>

      {/* ====================== DONORS - MATCHING SCREENSHOT ====================== */}
      <Section tone="cream">
        <div className="container-wide">
          <div className="text-center mb-6">
            <span className="inline-block bg-amber-100 text-amber-800 text-xs font-medium tracking-widest px-6 py-2 rounded-full">CHAMPIONS OF HEALING</span>
          </div>

          <SectionTitle
            eyebrow="Our First Patron"
            title="Healing 200 patients costs nothing. Healing a million requires champions."
            lead="HCHR’s first seed fund came from a statesman who understood that cancer care must reach every Indian."
          />

          <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
            <div>
              <img 
                src={drSuraDas} 
                alt="Shri Ramsheth Thakur with team" 
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="mt-4 text-center text-sm text-amber-700 font-medium">
                SEED FUND COMMITMENT — ₹1 Crore<br />
                Inaugural Donation • HCHR • May 2026
              </div>
            </div>

            <div>
              <div className="uppercase text-xs tracking-widest text-amber-600 mb-2">FOUNDING PATRON</div>
              <h3 className="text-3xl font-semibold mb-3">Shri Ramsheth Thakur</h3>
              <p className="text-muted-foreground">Former Member of Parliament, Lok Sabha • Distinguished Guest, HCHR Inaugural Ceremony</p>

              <blockquote className="mt-8 italic border-l-4 border-amber-400 pl-6 text-lg">
                “Cancer does not spare anyone — rich or poor, known or unknown. Every Indian deserves healing beyond medicine. I am honoured to be the first to stand with HCHR in making that a reality.”
              </blockquote>

              <div className="flex flex-wrap gap-3 mt-8">
                <div className="bg-white border px-4 py-2 rounded-full text-sm">Funds 10+ Monthly Retreats</div>
                <div className="bg-white border px-4 py-2 rounded-full text-sm">Reaches 500+ Patients</div>
                <div className="bg-white border px-4 py-2 rounded-full text-sm">Seeds ACTREC-TMC RCT</div>
              </div>

              <button className="mt-10 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold transition-colors">
                Become a Patron →
              </button>
            </div>
          </div>

          {/* Giving Tiers */}
          <div className="mt-20 bg-[#0A1F2C] text-white rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-amber-400">₹50K</div>
                <div className="font-semibold mt-2">Sponsor 1 Full Retreat</div>
                <div className="text-sm opacity-70 mt-1">Covers all 4 sessions • Meals • Materials</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-400">₹5L</div>
                <div className="font-semibold mt-2">City Expansion Partner</div>
                <div className="text-sm opacity-70 mt-1">Launch HCHR in a new city or ISKCON centre</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-400">₹1Cr+</div>
                <div className="font-semibold mt-2">Founding Patron</div>
                <div className="text-sm opacity-70 mt-1">Name a programme centre • Co-fund ACTREC RCT</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

// ====================== REUSABLE COMPONENTS ======================
function TeamMember({ image, name, role, desc }: any) {
  return (
    <div className="text-center group">
      <div className="relative mx-auto w-40 h-40 mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-gold/30 group-hover:border-gold transition-colors" />
        <img src={image} alt={name} className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl" />
      </div>
      <h3 className="font-semibold text-xl mb-1">{name}</h3>
      <p className="text-teal-600 text-sm font-medium">{role}</p>
      <p className="text-gray-600 text-sm mt-3 px-4 leading-snug">{desc}</p>
    </div>
  );
}

function Collaborator({ image, name, role, org }: any) {
  return (
    <div className="bg-white rounded-3xl p-8 flex gap-6 items-start border border-transparent hover:border-teal-200 transition-all">
      <div className="w-20 h-20 flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-full border-2 border-teal-100" />
      </div>
      <div>
        <h4 className="font-semibold text-lg">{name}</h4>
        <p className="text-teal-700 text-sm">{role}</p>
        <p className="text-gray-500 text-sm mt-1">{org}</p>
      </div>
    </div>
  );
}
