import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionTitle } from "@/components/site/Section";
import { FourDShowcase } from "@/components/site/FourDShowcase";
import facilityImg from "@/assets/facility-retreat.jpg";
import dimBody from "@/assets/dim-body.jpg";

const artTherapies = [
  { icon: "🎵", title: "Sound & Music Therapy", desc: "Rhythm, chanting and instrumental music reduce anxiety, pain and treatment fatigue — Cochrane 2016." },
  { icon: "✍️", title: "Expressive Writing", desc: "Structured writing sessions lift immune markers and lower disease severity — JAMA 1999." },
  { icon: "🎨", title: "Visual Art & Craft", desc: "Painting, clay and mandala work reduce nausea and pain during chemotherapy — Palliat Med RCT." },
  { icon: "🌿", title: "Nature Immersion", desc: "Structured time in gardens and quiet outdoor spaces reduces prefrontal rumination — Stanford / PNAS 2015." },
  { icon: "🧘", title: "Movement & Dance", desc: "Adaptive movement helps restore body confidence and mobility during and after treatment." },
  { icon: "💬", title: "Peer Circles", desc: "Small group dialogue with fellow patients — proven to reduce isolation and existential distress." },
];

const monthlySchedules = [
  { month: "July 2026", date: "19 July", day: "Sunday", time: "7:30 AM – 1:00 PM" },
  { month: "August 2026", date: "16 August", day: "Sunday", time: "7:30 AM – 1:00 PM" },
  { month: "September 2026", date: "20 September", day: "Sunday", time: "7:30 AM – 1:00 PM" },
];

const sessions = [
  {
    number: "01",
    title: "Awakening the Body",
    time: "07:30 — 08:30",
    desc: "Gentle yoga, breath and movement designed for the recovering body. Led by certified yoga therapists trained in cancer care.",
    dimension: "Body"
  },
  {
    number: "02",
    title: "Stillness of Mind",
    time: "08:45 — 09:45",
    desc: "Mindfulness, guided meditation and breath-based emotional regulation.",
    dimension: "Mind"
  },
  {
    number: "03",
    title: "Wisdom of Intelligence",
    time: "10:00 — 11:15",
    desc: "Integrative oncology insights, nutrition, daily rhythm, ayurvedic counsel. Includes Creative Arts & Cognitive Rehabilitation — music, visual art, expressive writing, chess, craft, gardening.",
    dimension: "Intelligence"
  },
  {
    number: "04",
    title: "Voice of the Soul",
    time: "11:30 — 13:00",
    desc: "Bhakti, kirtan, gratitude practice, story circles, prasadam.",
    dimension: "Soul"
  },
];

export const Route = createFileRoute("/programme")({
  head: () => ({
    meta: [
      { title: "HCHR Half-Day Programme — Swastha NavJeevan" },
      {
        name: "description",
        content: "Half-Day Cancer Healing Retreat (HCHR) — One Morning. Four Returns to Wholeness.",
      },
      { property: "og:title", content: "HCHR Half-Day Programme — Swastha NavJeevan" },
      { property: "og:description", content: "One Morning. Four Returns to Wholeness." },
      { property: "og:image", content: dimBody },
    ],
  }),
  component: Programme,
});

function Programme() {
  return (
    <>
      <PageHero
        eyebrow="HCHR Half-Day Retreat"
        title="Healing is not just the killing of Cancer — it is treating whole Cancer patient."
        lead="A 4-hour transformative retreat designed for people affected by cancer — patients, caregivers, and survivors."
        image={dimBody}
        imageAlt="Participants in a healing circle at Swastha NavJeevan"
      />

      {/* About HCHR */}
      <Section tone="white">
        <div className="container-wide max-w-4xl">
          <SectionTitle
            eyebrow="About HCHR"
            title="A Complete Integrative Healing Experience"
            lead="Grounded in AYUSH wisdom and international oncology guidelines (NCCN • ASCO • ESMO • SIO)"
          />

          <div className="prose prose-lg mt-12 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              The <strong>Half-Day Cancer Healing Retreat (HCHR)</strong> is a gentle yet powerful 
              immersive programme that addresses the Body, Mind, Intelligence and Soul 
              dimensions of healing.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mt-14">
              <div>
                <h4 className="font-semibold text-navy mb-5 text-xl">Programme Objective</h4>
                <ul className="space-y-4 text-[15px]">
                  <li className="flex gap-3"><span className="text-gold mt-1">•</span>Build a basic understanding of the Holistic Healing approach to cancer</li>
                  <li className="flex gap-3"><span className="text-gold mt-1">•</span>Understand the 4-dimensional approach to getting better Quality of Life</li>
                  <li className="flex gap-3"><span className="text-gold mt-1">•</span>Begin the 30-Day Challenge &amp; lifestyle training journey</li>
                  <li className="flex gap-3"><span className="text-gold mt-1">•</span>Become a positive driver of your own cancer recovery journey</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-navy mb-5 text-xl">Who Should Attend</h4>
                <div className="flex flex-wrap gap-3">
                  {["Cancer Patients", "Caregivers", "Survivors", "Family Members"].map((role) => (
                    <span key={role} className="inline-block bg-cream px-6 py-3 rounded-full text-sm font-medium">
                      {role}
                    </span>
                  ))}
                </div>
                <p className="mt-8 text-sm text-muted-foreground">All faiths welcome • All income groups</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 4D Framework */}
      <Section tone="cream">
        <div className="container-wide">
          <SectionTitle
            eyebrow="The 4D Framework"
            title="Four Sessions. One Complete Experience."
            lead="Every HCHR retreat follows the same proven 4-dimensional structure."
          />
          <div className="mt-12">
            <FourDShowcase />
          </div>
        </div>
      </Section>

      {/* Enhanced Timeline with Better UI & Animations */}
      <Section tone="white">
        <div className="container-wide max-w-5xl">
          <SectionTitle
            eyebrow="THE RETREAT TIMELINE"
            title="One Morning.<br/>Four Returns to Wholeness."
            lead="A carefully designed half-day journey that nurtures every dimension of your being."
          />

          <div className="mt-16 space-y-8">
            {sessions.map((session, index) => (
              <div
                key={session.number}
                className="group relative bg-white border border-gray-100 hover:border-gold rounded-3xl p-8 md:p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-8 md:items-center">
                  {/* Left: Time & Number */}
                  <div className="flex-shrink-0 md:w-48">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold to-amber-600 text-white font-semibold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                      {session.number}
                    </div>
                    <div className="mt-6 text-3xl font-light tracking-tight text-navy">
                      {session.time}
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-semibold text-navy group-hover:text-gold transition-colors">
                      {session.title}
                    </h3>
                    <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
                      {session.desc}
                    </p>
                    <div className="mt-6">
                      <span className="inline-block px-6 py-2.5 bg-cream text-navy text-sm font-medium rounded-full border border-gold/20">
                        {session.dimension}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subtle decorative line */}
                <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden md:block" />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="inline-block bg-cream px-8 py-4 rounded-2xl text-lg text-navy">
              The programme concludes with sattvic lunch and take-home resources.
            </p>
          </div>
        </div>
      </Section>

      {/* Monthly Schedule */}
      <Section tone="cream">
        <div className="container-wide">
          <SectionTitle
            eyebrow="Monthly Schedule"
            title="Upcoming Half-Day Retreats"
            lead="Sessions are held on selected Sundays. Choose a date that works for you."
          />

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {monthlySchedules.map((sched, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-all">
                <div className="uppercase text-gold text-sm tracking-widest mb-1">{sched.month}</div>
                <div className="text-3xl font-semibold text-navy">{sched.date}</div>
                <div className="text-muted-foreground mt-1">{sched.day} • {sched.time}</div>
                
                <div className="mt-10">
                  <Link 
                    to="/get-involved" 
                    className="btn-gold btn-gold-hover w-full block text-center py-3.5"
                  >
                    Register for this date
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Who It’s For + Free Commitment */}
      <section className="relative overflow-hidden bg-[var(--color-navy-deep)] text-white py-20">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="eyebrow eyebrow-onDark">Who It’s For</div>
            <h2 className="display-serif text-4xl leading-tight mt-4">Anyone touched by cancer.</h2>
            <ul className="mt-8 space-y-4 text-lg text-white/90">
              <li>• Cancer patients currently in treatment</li>
              <li>• Cancer survivors at any stage</li>
              <li>• Caregivers and family members</li>
              <li>• All ages, all faiths (or none)</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 lg:p-14">
            <div className="uppercase tracking-widest text-gold text-sm mb-4">Our Commitment</div>
            <h3 className="display-serif text-3xl leading-tight">Completely free of charge — forever.</h3>
            <p className="mt-6 text-white/80 leading-relaxed">
              The HCHR Half-Day Retreat is offered at no cost to every participant. 
              All sessions, meals, materials, and follow-up resources are fully sponsored.
            </p>
            <div className="mt-10">
              <Link to="/get-involved" className="btn-gold btn-gold-hover inline-block">Reserve Your Spot →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Art Therapies */}
      <Section tone="white">
        <div className="container-wide">
          <SectionTitle
            eyebrow="Supporting Practices"
            title="Creative Arts &amp; Cognitive Rehabilitation"
            lead="These gentle practices are integrated across the four dimensions."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artTherapies.map((a) => (
              <div key={a.title} className="rounded-2xl bg-white p-8 lift hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{a.icon}</div>
                <h3 className="display-serif text-xl text-[var(--color-navy)]">{a.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}