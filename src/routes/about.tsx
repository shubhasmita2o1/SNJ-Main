import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionTitle } from "@/components/site/Section";
import logo from "@/assets/logo.PNG";
import ctaLamp from "@/assets/cta-lamp.jpg";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Swastha NavJeevan | Holistic Cancer Healing" },
    ],
  }),
  component: About,
});

const institutions = [
  {
    name: "ISKCON Navi Mumbai",
    role: "Spiritual Home & Host",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Bhaktivedanta College of Vedic Education (BVCE)",
    //role: "Value Education & Human Development",
    desc: "Ministry of Education recognised degree-granting institution. 3,500+ students trained. 2 PhDs in Bhagavad-Gita research. The academic foundation for all that follows.",
  },
  {
    name: "BAHRC",
    //role: "Research & Retreat Infrastructure",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Swaayu Cancer Care Centre",
    //role: "Integrative Ayurvedic Partner",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function About() {
  return (
    <>
      {/* Header Logo & Title */}
      <section className="bg-[#0A1428] pt-32 pb-20">
        <div className="container-wide text-center">
          <div className="flex justify-center mb-8">
            <img src={logo} alt="Swastha NavJeevan" className="h-40 w-auto" />
          </div>
          <h1 className="text-6xl font-serif text-white">Swastha NavJeevan</h1>
          <p className="text-xl text-white/80 mt-3">"New Life in Health" — A Holistic Cancer Wellness Initiative</p>
          <p className="text-sm text-white/60 mt-2">Body • Mind • Intelligence • Soul — Science, AYUSH & Vedic Wisdom, Unified</p>
        </div>
      </section>

     {/* Mission & Vision */}
<Section tone="white">
  <div className="container-wide max-w-[1700px] mx-auto px-6 lg:px-12">

    {/* Heading */}
    <div className="text-center mb-20">
      <p className="uppercase tracking-[0.4em] text-teal-600 font-semibold text-sm">
        OUR PURPOSE
      </p>

      <h2 className="mt-5 text-5xl md:text-6xl font-serif text-[#0F1E3A]">
        Mission & Vision
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-600">
        Swastha NavJeevan integrates scientific research, Ayurveda, spirituality,
        psychology and compassionate care into one unified healing journey.
      </p>
    </div>

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">

      {/* Mission Card */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        className="
        relative
        overflow-hidden
        rounded-[36px]
        p-14
        min-h-[500px]
        bg-gradient-to-br
        from-[#13254A]
        via-[#0F1E3A]
        to-[#08111F]
        text-white
        shadow-[0_30px_80px_rgba(0,0,0,.25)]
        border border-white/10
        "
      >

        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">

          <div className="flex items-center gap-5 mb-10">

            <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center text-3xl">
              🎯
            </div>

            <div>

              <div className="uppercase tracking-[0.3em] text-orange-300 text-sm">
                Our Mission
              </div>

              <h3 className="font-serif text-4xl mt-2">
                Advancing Holistic Healing
              </h3>

            </div>

          </div>

          <p className="text-xl leading-10 text-white/90">
  To systematically advance the science of holistic healing to society at
  large, and educate all people in the integrated wisdom of
  <span className="text-amber-300 font-semibold">
    {" "}Body, Mind, Intelligence and Consciousness
  </span>
  , in order to address the root imbalance underlying human disease and
  achieve real and lasting wellness in the world.
  <br />
  <br />
  <span className="text-amber-300 font-semibold">
    HCHR — the Holistic Cancer Healing Retreat
  </span>{" "}
  is our flagship expression of this mission: a structured,
  non-pharmacological, AYUSH-rooted programme aligned with NCCN, ASCO,
  ESMO, and SIO guidelines. We serve cancer patients, caregivers, and
  survivors completely free of charge through India's temple
  infrastructure, delivering a holistic healing model with zero side
  effects and universal accessibility.
</p>

        </div>

      </motion.div>

      {/* Vision Card */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6, delay: .15 }}
        viewport={{ once: true }}
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        className="
        relative
        overflow-hidden
        rounded-[36px]
        p-14
        min-h-[500px]
        bg-gradient-to-br
        from-[#13254A]
        via-[#0F1E3A]
        to-[#08111F]
        text-white
        shadow-[0_30px_80px_rgba(0,0,0,.25)]
        border border-white/10
        "
      >

        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">

          <div className="flex items-center gap-5 mb-10">

            <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center text-3xl">
              ✨
            </div>

            <div>

              <div className="uppercase tracking-[0.3em] text-yellow-300 text-sm">
                Our Vision
              </div>

              <h3 className="font-serif text-4xl mt-2">
                A World Beyond Survival
              </h3>

            </div>

          </div>

        <p className="text-xl leading-10 text-white/90">
  To become the world's leading organisation for
  <span className="text-amber-300 font-semibold">
    {" "}holistic healing for cancer patients, caregivers, families, and survivors
  </span>
  — transforming every journey through cancer into a path of renewed health
  and happiness, deep rejuvenation, resilience, and lifelong wellness.
  <br />
  <br />
  We envision <span className="text-amber-300 font-semibold">Swastha NavJeevan</span> as
  the world's gold standard in holistic cancer care—clinically validated
  through a Phase III Randomized Controlled Trial (RCT) with
  <span className="text-amber-300 font-semibold">
    {" "}ACTREC–Tata Memorial Centre
  </span>
  , adopted across 600+ ISKCON centres in 70 countries, integrated into
  India's National Cancer Grid, and ultimately recognised by the World
  Health Organization (WHO) as a global cancer survivorship framework. A model that proves: healing must be complete, or it is not healing.
  <br />
  <br />
  {/* <span className="italic text-amber-200">
    "Healing must be complete, or it is not healing."
  </span> */}
</p>  

        </div>

      </motion.div>

    </div>

  </div>
</Section>

      {/* Four Institutions */}
      <Section tone="cream">
        <div className="container-wide">
          <SectionTitle
            eyebrow="Four Institutions, One Intention"
            title="Built on devotion.<br/>Bound by science."
            lead=""
          />

          <div className="mt-20 space-y-24">
            {institutions.map((inst, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="grid lg:grid-cols-12 gap-12 items-center"
              >
                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="text-teal-600 uppercase text-sm tracking-widest mb-2">{inst.role}</div>
                  <h3 className="text-4xl font-serif mb-6">{inst.name}</h3>
                  <p className="text-lg text-muted-foreground">{inst.desc}</p>
                </div>
                <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img src={ctaLamp} alt={inst.name} className="rounded-3xl shadow-xl w-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Origin Story */}
      <Section tone="white">
        <div className="container-wide max-w-3xl">
          <SectionTitle
            eyebrow="The Origin Story"
            title="Lorem ipsum"
            lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <p className="mt-8 text-lg text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Section>

      {/* Final CTA */}
      <Section tone="gradient-navy">
        <div className="container-narrow text-center">
          <h2 className="text-4xl font-serif text-white mb-4">Healing is not just the killing of cancer — it is treating the whole cancer patient.</h2>
          <p className="text-white/80 text-lg">Every patient, every faith, completely free of charge.</p>
          <Link to="/get-involved" className="btn-gold btn-gold-hover mt-10">Begin Journey</Link>
        </div>
      </Section>
    </>
  );
}