import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionTitle } from "@/components/site/Section";
import dimBody from "@/assets/dim-body.jpg";

export const Route = createFileRoute("/science")({
  head: () => ({
    meta: [
      { title: "Science & Evidence — Swastha NavJeevan" },
      {
        name: "description",
        content: "Global validation of the HCHR 4D Programme. Aligned with NCCN, ASCO, ESMO, SIO and AYUSH standards.",
      },
      { property: "og:title", content: "Science & Evidence — Swastha NavJeevan" },
      { property: "og:image", content: dimBody },
    ],
  }),
  component: Science,
});

function Science() {
  const centres = [
    {
      name: "Memorial Sloan Kettering",
      body: true,
      mind: true,
      intelligence: "partial",
      consciousness: false,
      free: false,
    },
    {
      name: "MD Anderson Cancer Center",
      body: true,
      mind: true,
      intelligence: "partial",
      consciousness: false,
      free: false,
    },
    {
      name: "Mayo Clinic",
      body: true,
      mind: true,
      intelligence: false,
      consciousness: false,
      free: false,
    },
    {
      name: "AIIMS Delhi — CIMR",
      body: true,
      mind: true,
      intelligence: false,
      consciousness: false,
      free: false,
    },
    {
      name: "Tata Memorial Centre — AYUSH Wing",
      body: true,
      mind: true,
      intelligence: false,
      consciousness: false,
      free: false,
    },
    {
      name: "HCHR — Swastha NavJeevan",
      body: true,
      mind: true,
      intelligence: true,
      consciousness: true,
      free: true,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="P4 Science"
        title="Backed by Global Oncology Science"
        lead="Every intervention has a peer-reviewed evidence base. Same standards as the world's best cancer centres — delivered freely."
        image={dimBody}
      />

      {/* Global Validation */}
      <Section tone="white">
        <div className="container-wide">
          <SectionTitle
            eyebrow="Global Validation"
            title="The World Is Moving Here.<br/>HCHR Is Already There."
            lead="The world's top cancer centres offer these therapies individually. HCHR is the first programme anywhere to bring all four dimensions — Body, Mind, Intelligence, and Consciousness — into a single integrated, evidence-based, free protocol."
          />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 pr-8 font-medium">Programme / Centre</th>
                  <th className="text-center py-4 px-6">Body</th>
                  <th className="text-center py-4 px-6">Mind</th>
                  <th className="text-center py-4 px-6">Intelligence</th>
                  <th className="text-center py-4 px-6">Consciousness</th>
                  <th className="text-center py-4 px-6">Free</th>
                </tr>
              </thead>
              <tbody>
                {centres.map((centre, i) => (
                  <tr key={i} className={`border-b ${i === centres.length - 1 ? "bg-gold/5" : ""}`}>
                    <td className="py-5 pr-8 font-medium">{centre.name}</td>
                    <td className="text-center py-5">{centre.body ? "✓" : "–"}</td>
                    <td className="text-center py-5">{centre.mind ? "✓" : "–"}</td>
                    <td className="text-center py-5">
                      {centre.intelligence === true ? "✓" : centre.intelligence === "partial" ? "◑" : "–"}
                    </td>
                    <td className="text-center py-5">{centre.consciousness ? "✓" : "–"}</td>
                    <td className="text-center py-5 font-semibold text-gold">
                      {centre.free ? "✓" : "–"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex gap-6 text-sm text-muted-foreground">
            <span>✓ Formally offered</span>
            <span>◑ Partial / individual therapies only</span>
            <span>– Not offered as programme</span>
          </div>
        </div>
      </Section>

      {/* AYUSH & India Context */}
      <Section tone="cream">
        <div className="container-wide">
          <SectionTitle
            eyebrow="Ministry of AYUSH • 2024-25"
            title="India's AYUSH Priority: Integrative Oncology"
            lead=""
          />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-orange-50 border border-orange-200 rounded-3xl p-8">
              <h4 className="font-semibold text-orange-800 mb-4">Key Developments</h4>
              <ul className="space-y-4 text-sm">
                <li>• AYUSH Ministry signed MoU with Tata Memorial Centre for Integrative Oncology</li>
                <li>• CCRAS launched dedicated Integrative Oncology research programme under AYUSH</li>
                <li>• National Cancer Grid India adopted Integrative Oncology as a clinical priority</li>
                <li>• HCHR is a natural candidate for AYUSH Health & Wellness Centre integration</li>
              </ul>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8">
              <h4 className="font-semibold text-emerald-800 mb-4">India’s Top Institutions Are Ready</h4>
              <ul className="space-y-4 text-sm">
                <li>• ACTREC–TMC AYUSH Wing operational in Kharghar — metres from ISKCON Navi Mumbai</li>
                <li>• HCHR Phase III RCT discussions underway with Dr. Amit Joshi & Dr. Vikram Gota, ACTREC-TMC</li>
                <li>• AIIMS Delhi’s Centre for Integrative Medicine & Research (CIMR) actively researches yoga & mind-body for cancer</li>
                <li>• HCHR’s evidence base aligns fully with National Cancer Grid India protocols</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Research Roadmap */}
      <Section tone="teal">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="inline-block bg-teal-700 text-white text-sm font-medium tracking-widest px-6 py-2 rounded-full mb-4">
              RESEARCH ROADMAP
            </div>
            <h2 className="text-5xl font-serif tracking-tight">From Temple to Clinical Trial</h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center flex-shrink-0 font-semibold">1</div>
                  <div>
                    <h4 className="font-semibold">Inaugural Programme Completed</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      200+ participants. Validated multi-domain outcome data collected using internationally standardised instruments. 30 May 2026.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center flex-shrink-0 font-semibold">2</div>
                  <div>
                    <h4 className="font-semibold">ACTREC–TMC Discussions Initiated</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Dr. Amit Joshi & Dr. Vikram Gota. Phase III RCT protocol development underway.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-teal-200 text-teal-800 flex items-center justify-center flex-shrink-0 font-semibold">3</div>
                  <div>
                    <h4 className="font-semibold">Monthly Programme Running</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Ongoing retreats. Continuous data collection. Facilitator training development.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-teal-200 text-teal-800 flex items-center justify-center flex-shrink-0 font-semibold">4</div>
                  <div>
                    <h4 className="font-semibold">Phase III RCT Submission</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      CTRI registration. Multi-centre expansion across ISKCON network.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-teal-200 text-teal-800 flex items-center justify-center flex-shrink-0 font-semibold">5</div>
                  <div>
                    <h4 className="font-semibold">Publication & Policy Impact</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Peer-reviewed publication. AYUSH Ministry recognition. National Cancer Grid integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-teal-900/90 text-white p-8 rounded-3xl">
                <p className="text-sm opacity-80 mb-6">
                  ACTREC is located in Kharghar, metres from our temple. Dr. Purushottam Das is an ACTREC alumnus. The collaboration is both geographic and personal.
                </p>

                <div className="space-y-4 text-sm border-t border-white/20 pt-6">
                  <p><strong>RESEARCH PARTNERS</strong></p>
                  <p>Dr. Amit Joshi — Prof. & Head, Medical Oncology, ACTREC-TMC</p>
                  <p>Dr. Vikram Gota — Prof. & In-charge, Integrative Oncology, ACTREC-TMC</p>
                  <p>Dr. Purushottam Das — Principal Research Investigator, BAHRC & BVCE</p>
                </div>

                <Link 
                  to="/contact" 
                  className="mt-10 block w-full text-center bg-amber-500 hover:bg-amber-600 transition-colors text-black font-semibold py-4 rounded-2xl"
                >
                  Propose Research Collaboration →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Conference Section */}
      <Section tone="navy">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline text-amber-400 text-sm tracking-widest">AYUSH NATIONAL CONFERENCE 2025 • ACTREC-TMC</div>
              <h2 className="text-5xl font-serif mt-4 leading-tight">
                Presented at the AYUSH National Conference on Integrative Oncology 2025
              </h2>
            </div>

            <div className="grid md:grid-cols-5 gap-10 items-start">
              <div className="md:col-span-3">
                <p className="text-lg">
                  The HCHR framework was presented at <strong>Samaakalan 2.0</strong> — the National Conference on Integrative Oncology, organised by the AYUSH Centre of Excellence (CoE) at ACTREC–Tata Memorial Centre in collaboration with CCRAS. Our four-dimensional framework was appreciated by the scientific community and is now being developed into a formal clinical trial.
                </p>

                <div className="mt-8 bg-white/10 border border-white/20 rounded-3xl p-8">
                  <h4 className="font-semibold mb-3">CONFERENCE OUTCOME</h4>
                  <p className="italic">
                    “Our framework was very much appreciated and now working towards clinical trial with ACTREC–Tata Memorial Hospital”
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  <div className="bg-white/10 text-white text-sm px-5 py-2 rounded-full">Samaakalan 2.0</div>
                  <div className="bg-white/10 text-white text-sm px-5 py-2 rounded-full">ACTREC-TMC AYUSH CoE</div>
                  <div className="bg-white/10 text-white text-sm px-5 py-2 rounded-full">Phase III RCT Pathway</div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="bg-white/5 rounded-3xl p-2">
                  <div className="bg-[#0A1F2C] rounded-2xl p-6 text-center">
                    <div className="text-amber-400 uppercase text-xs tracking-widest mb-4">
                      This program Idea was presented at the AYUSH National Conference 2025
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="aspect-video bg-zinc-800 rounded-xl overflow-hidden">
                        {/* Conference photo 1 placeholder */}
                        <div className="w-full h-full bg-gradient-to-br from-teal-900 to-amber-900 flex items-center justify-center text-[10px] text-white/50">Conference Photo</div>
                      </div>
                      <div className="aspect-video bg-zinc-800 rounded-xl overflow-hidden">
                        {/* Conference photo 2 placeholder */}
                        <div className="w-full h-full bg-gradient-to-br from-teal-900 to-amber-900 flex items-center justify-center text-[10px] text-white/50">Conference Photo</div>
                      </div>
                    </div>
                    <p className="text-xs text-rose-400 mt-6 font-medium">
                      Our framework was very much appreciated and now working towards clinical trial with ACTREC-Tata Memorial Hospital
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Closing Statement */}
      <Section tone="white">
        <div className="container-wide max-w-3xl text-center">
          <h2 className="display-serif text-4xl">World's First 4D Protocol</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            The world's best cancer centres offer body and mind care. Some are beginning to offer individual art therapies. None offer a structured, integrated protocol addressing all four dimensions — Body, Mind, Intelligence, and Consciousness — simultaneously, freely, and with a documented evidence base for each.
          </p>
          <p className="mt-8 font-medium">HCHR is that programme.</p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="px-6 py-2 bg-white border border-gray-200 rounded-full text-sm">World's First 4D Protocol</div>
            <div className="px-6 py-2 bg-white border border-gray-200 rounded-full text-sm">NCCN · ASCO · ESMO · SIO Aligned</div>
            <div className="px-6 py-2 bg-white border border-gray-200 rounded-full text-sm">Zero Side Effects • Free for All</div>
          </div>

          <div className="mt-12">
            <Link to="/programme" className="btn-gold btn-gold-hover">
              Explore the Programme
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}