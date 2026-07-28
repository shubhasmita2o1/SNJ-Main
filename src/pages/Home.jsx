import React from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Brain,
  Lightbulb,
  Sparkles,
  Quote,
  CalendarDays,
  MapPin,
} from "lucide-react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SEOHead from "../components/SEOHead";
import SNJWheel from "../components/home/SNJWheel";
import RotatingMessage from "../components/home/RotatingMessage";

const HERO_BG =
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?crop=entropy&cs=srgb&fm=jpg&q=85&w=2000";
const INAUG_MAIN =
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600";
const INAUG_1 =
  "https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=srgb&fm=jpg&q=85&w=900";
const INAUG_2 =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=srgb&fm=jpg&q=85&w=900";
const INAUG_3 =
  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?crop=entropy&cs=srgb&fm=jpg&q=85&w=900";

const PILLARS = [
  {
    n: "01",
    title: "Unlocking Secret of Healthy Body",
    sub: "Physical",
    desc: "Restoring vitality through nutrition, movement and evidence-based physical rehabilitation.",
    Icon: HeartPulse,
  },
  {
    n: "02",
    title: "Emotional Resilience",
    sub: "Mind",
    desc: "Mind–body therapy, art and meaning-centred practices that steady the heart through fear.",
    Icon: Brain,
  },
  {
    n: "03",
    title: "Sharpening Intellect",
    sub: "Intelligence",
    desc: "Clarity, understanding and informed decision-making across the full journey of care.",
    Icon: Lightbulb,
  },
  {
    n: "04",
    title: "Leveraging Innate Potential",
    sub: "Soul · Consciousness",
    desc: "Meaning, faith and inner strength — the spiritual dimension modern medicine leaves untouched.",
    Icon: Sparkles,
  },
];

const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const heroLine = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  return (
    <div data-testid="page-home" className="bg-[#FAF7F2] text-[#1c2b2d]">
      <SEOHead canonical="/" />

      {/* ================= HERO ================= */}
      <section
        className="relative w-full overflow-hidden"
        style={{ background: "#0b2a33" }}
        aria-label="Hero"
        data-testid="hero-section"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src={HERO_BG}
            alt=""
            className="h-full w-full object-cover"
            style={{ opacity: 0.32 }}
          />
        </div>
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(135deg, rgba(9,32,40,0.96) 0%, rgba(11,42,51,0.86) 42%, rgba(23,110,102,0.62) 100%)",
          }}
        />
        <div className="grain absolute inset-0" aria-hidden="true" />

        <div
          className="snj-orb absolute -left-10 top-24 h-72 w-72 opacity-40"
          style={{ background: "radial-gradient(circle, #2fb0a3 0%, transparent 70%)", animation: "snjFloat 14s ease-in-out infinite" }}
          aria-hidden="true"
        />
        <div
          className="snj-orb absolute right-[8%] top-[40%] h-64 w-64 opacity-30"
          style={{ background: "radial-gradient(circle, #c9a24b 0%, transparent 70%)", animation: "snjFloat2 18s ease-in-out infinite" }}
          aria-hidden="true"
        />
        <div
          className="snj-orb absolute bottom-16 left-[30%] h-56 w-56 opacity-25"
          style={{ background: "radial-gradient(circle, #2fb0a3 0%, transparent 70%)", animation: "snjFloat 20s ease-in-out infinite" }}
          aria-hidden="true"
        />

        <Container className="relative z-10 pt-36 pb-24 md:pt-44 md:pb-28">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
            <motion.div
              className="lg:col-span-6"
              variants={heroStagger}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={fadeIn} className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#c9a24b]" />
                <span className="text-[11px] uppercase tracking-[0.26em] text-[#e7d9a8]">
                  Bhaktivedanta Ayurvedic Healing &amp; Research Centre
                </span>
              </motion.div>

              <h1
                className="mt-7 font-serif leading-[0.92] tracking-[-0.02em] text-white"
                data-testid="hero-headline"
              >
                <span className="snj-mask">
                  <motion.span variants={heroLine} className="block text-[58px] sm:text-[84px] lg:text-[104px]">
                    Swastha
                  </motion.span>
                </span>
                <span className="snj-mask">
                  <motion.span
                    variants={heroLine}
                    className="block text-[58px] sm:text-[84px] lg:text-[104px]"
                    style={{ color: "#e7d9a8" }}
                  >
                    NavJeevan
                  </motion.span>
                </span>
              </h1>

              <motion.p
                variants={fadeIn}
                className="mt-6 font-serif text-[22px] italic tracking-wide text-[#8fd8cf] sm:text-[26px]"
              >
                Resilience • Longevity • Happiness
              </motion.p>

              <motion.p
                variants={fadeIn}
                className="mt-6 max-w-[560px] text-[15px] leading-[1.75] text-white/75 md:text-[16px]"
              >
                Swastha NavJeevan — <i className="text-white/90">“Healthy New Life”</i> — is a free,
                evidence-based programme that restores the dignity, calm and strength a cancer takes
                away. Its flagship is the Holistic Cancer Healing Retreat (HCHR), the world&rsquo;s
                first protocol to weave nutrition, mind-body therapy, art and meaning-centred therapy
                into one structured, four-dimensional path to recovery.
              </motion.p>

              <motion.div variants={fadeIn} className="mt-9 max-w-[520px]">
                <RotatingMessage />
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              <div className="text-center">
                <div className="text-[11px] uppercase tracking-[0.3em] text-[#e7d9a8]">The SNJ Wheel</div>
                <div className="mt-2 font-serif text-[26px] italic text-white/85 md:text-[30px]">
                  Eight Dimensions. One Whole Person
                </div>
              </div>
              <div className="mt-8">
                <SNJWheel />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ============== ETHOS MARQUEE ============== */}
      <section className="overflow-hidden border-y border-[#1c2b2d]/8 py-8" aria-hidden="true">
        <div className="marquee flex items-center gap-10 whitespace-nowrap font-serif text-[24px] text-[#1c2b2d]/35 md:text-[34px]">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-10 pr-10">
              <span>Body</span><span className="text-[#c9a24b]">◦</span>
              <span><i>Mind</i></span><span className="text-[#c9a24b]">◦</span>
              <span>Intelligence</span><span className="text-[#c9a24b]">◦</span>
              <span><i>Soul</i></span><span className="text-[#c9a24b]">◦</span>
              <span>Healing Beyond Medicine</span><span className="text-[#c9a24b]">◦</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============== MISSION & VISION ============== */}
      <section className="py-24 md:py-32" data-testid="section-mission-vision">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#1f8a80]" />
                <span className="text-[11px] uppercase tracking-[0.26em] text-[#1f8a80]">
                  Purpose
                </span>
              </div>
            </Reveal>
            <Reveal delay={1} strong>
              <h2 className="mt-6 font-serif text-[40px] leading-[1.02] tracking-[-0.02em] md:text-[62px]">
                Our Mission <i className="text-[#1f8a80]">and Vision</i>
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal>
              <article
                className="relative h-full overflow-hidden rounded-[26px] border border-[#1f8a80]/15 p-10 md:p-12"
                style={{ background: "linear-gradient(160deg, #eaf2f4 0%, #dfeef0 100%)" }}
                data-testid="mission-card"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-[15px] italic text-[#1f8a80]">Ch. 01</span>
                  <span className="text-[11px] uppercase tracking-[0.3em] text-[#1f8a80]">Mission</span>
                </div>
                <p className="mt-7 font-serif text-[24px] leading-[1.4] text-[#12343b] md:text-[30px]">
                  To systematically advance the science of holistic healing to society at large, and
                  to educate all people in the integrated wisdom of{" "}
                  <i className="text-[#1f8a80]">Body · Mind · Intelligence · Consciousness</i> — in
                  order to address the root imbalance underlying human disease and to achieve real and
                  lasting wellness in the world.
                </p>
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-40"
                  style={{ background: "radial-gradient(circle, #2fb0a3 0%, transparent 70%)" }}
                  aria-hidden="true"
                />
              </article>
            </Reveal>

            <Reveal delay={1}>
              <article
                className="relative h-full overflow-hidden rounded-[26px] border border-[#c9a24b]/25 p-10 md:p-12"
                style={{ background: "linear-gradient(160deg, #f7ecdd 0%, #f2e3ea 100%)" }}
                data-testid="vision-card"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-[15px] italic text-[#b07d3f]">Ch. 02</span>
                  <span className="text-[11px] uppercase tracking-[0.3em] text-[#b07d3f]">Vision</span>
                </div>
                <p className="mt-7 font-serif text-[24px] leading-[1.4] text-[#4a2e2a] md:text-[30px]">
                  To become the world&rsquo;s leading organisation of holistic healing for cancer
                  patients, caregivers, families, and survivors — transforming every journey through
                  cancer into a path of{" "}
                  <i className="text-[#b07d3f]">renewed health and happiness</i>, deep rejuvenation
                  and resilience, and a life of lasting wellness.
                </p>
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-40"
                  style={{ background: "radial-gradient(circle, #c9a24b 0%, transparent 70%)" }}
                  aria-hidden="true"
                />
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============== FOUR PILLARS ============== */}
      <section className="py-24 md:py-32" data-testid="section-pillars">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#1f8a80]" />
                <span className="text-[11px] uppercase tracking-[0.26em] text-[#1f8a80]">
                  The Four Pillars
                </span>
              </div>
            </Reveal>
            <Reveal delay={1} strong>
              <h2 className="mt-6 font-serif text-[40px] leading-[1.02] tracking-[-0.02em] md:text-[62px]">
                Four dimensions. <i className="text-[#1f8a80]">One complete healing.</i>
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.n} delay={(i % 4) + 1}>
                <article
                  className="group relative flex h-full flex-col rounded-[22px] border border-[#1c2b2d]/8 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_rgba(11,42,51,0.12)]"
                  data-testid={`pillar-card-${p.n}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-[40px] leading-none text-[#1c2b2d]/12">{p.n}</span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eef4f2] text-[#1f8a80] transition-colors duration-500 group-hover:bg-[#1f8a80] group-hover:text-white">
                      <p.Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-8 text-[10px] uppercase tracking-[0.24em] text-[#c9a24b]">{p.sub}</div>
                  <h3 className="mt-2 font-serif text-[24px] leading-[1.15]">{p.title}</h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-[#1c2b2d]/60">{p.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============== INAUGURATION ============== */}
      <section
        className="relative overflow-hidden py-24 md:py-32"
        style={{ background: "#0b2a33" }}
        data-testid="section-inauguration"
      >
        <div
          className="snj-orb absolute right-[6%] top-16 h-64 w-64 opacity-25"
          style={{ background: "radial-gradient(circle, #c9a24b 0%, transparent 70%)", animation: "snjFloat 16s ease-in-out infinite" }}
          aria-hidden="true"
        />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#c9a24b]" />
                <span className="text-[11px] uppercase tracking-[0.26em] text-[#e7d9a8]">Inauguration</span>
              </div>
            </Reveal>
            <Reveal delay={1} strong>
              <h2 className="mt-6 font-serif text-[36px] leading-[1.05] tracking-[-0.02em] text-white md:text-[56px]">
                Inaugurated by the Hon&rsquo;ble{" "}
                <i className="text-[#e7d9a8]">Governor of Maharashtra</i>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <div className="mt-6 flex flex-wrap items-center gap-6 text-[13px] text-white/70">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-[#8fd8cf]" strokeWidth={1.6} aria-hidden="true" />
                  30 May 2026
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#8fd8cf]" strokeWidth={1.6} aria-hidden="true" />
                  ISKCON Kharghar
                </span>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.8] text-white/70">
                Hon&rsquo;ble Governor Shri Jishnu Dev Varma unveiled India&rsquo;s first Holistic
                Cancer Healing Retreat and launched the divine music therapy{" "}
                <i className="text-white/90">‘Krishna Sanjeevani’</i> before 200+ patients, physicians
                and dignitaries at ISKCON Kharghar.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <figure className="group relative h-[300px] overflow-hidden rounded-[24px] border border-white/10 md:h-[440px]">
                <img
                  src={INAUG_MAIN}
                  alt="Governor addressing 200+ patients, physicians and dignitaries at the inauguration"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <figcaption className="absolute bottom-5 left-6 text-[13px] uppercase tracking-[0.2em] text-white/85">
                  The Unveiling · ISKCON Kharghar
                </figcaption>
              </figure>
            </Reveal>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { img: INAUG_1, label: "Banner Unveiled" },
                { img: INAUG_2, label: "Felicitation" },
                { img: INAUG_3, label: "Governor’s Message" },
              ].map((c, i) => (
                <Reveal key={c.label} delay={(i % 3) + 1}>
                  <figure className="group relative h-[120px] overflow-hidden rounded-[18px] border border-white/10 sm:h-[130px] lg:h-[133px]">
                    <img
                      src={c.img}
                      alt={c.label}
                      className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                    <figcaption className="absolute bottom-3 left-4 text-[11px] uppercase tracking-[0.18em] text-white/85">
                      {c.label}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={1}>
            <blockquote className="mx-auto mt-20 max-w-4xl text-center">
              <Quote className="mx-auto h-9 w-9 text-[#c9a24b]/70" strokeWidth={1.1} aria-hidden="true" />
              <p className="mt-7 font-serif text-[26px] leading-[1.35] text-white md:text-[42px]">
                “Modern medicine has given us cures — but healing also needs humanity, faith and
                compassion. This retreat brings the spirit back to cancer care, and that is what makes
                it truly <i className="text-[#e7d9a8]">Indian</i>.”
              </p>
              <footer className="mt-8 text-[12px] uppercase tracking-[0.24em] text-white/55">
                — His Excellency Shri Jishnu Dev Varma
              </footer>
            </blockquote>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}