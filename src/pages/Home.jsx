import React from "react";
import { motion } from "framer-motion";
import {
  Eye,
  Compass,
  Quote,
  CalendarDays,
  MapPin,
} from "lucide-react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SEOHead from "../components/SEOHead";
import SNJWheel from "../components/home/SNJWheel";
import RotatingMessage from "../components/home/RotatingMessage";
import pillarBody from "../assets/images/image-1.jpeg";
import pillarMind from "../assets/images/image-2.jpeg";
import pillarIntelligence from "../assets/images/image-3.jpeg";
import pillarSoul from "../assets/images/image-4.jpeg";

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

const PILLAR_TILES = [
  { key: "body", img: pillarBody, label: "The Body", sanskrit: "Annamaya", note: "Nutrition & gentle movement" },
  { key: "mind", img: pillarMind, label: "The Mind", sanskrit: "Manomaya", note: "Mindfulness & calm" },
  { key: "intelligence", img: pillarIntelligence, label: "Intelligence", sanskrit: "Vijnanamaya", note: "Art, music & clarity" },
  { key: "soul", img: pillarSoul, label: "The Soul", sanskrit: "Anandamaya", note: "Meaning & inner strength" },
];

const galleryContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};
const galleryTile = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

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
                  <motion.span
                    variants={heroLine}
                    className="block whitespace-nowrap text-[40px] sm:text-[64px] lg:text-[84px]"
                  >
                    Swastha <span style={{ color: "#e7d9a8" }}>NavJeevan</span>
                  </motion.span>
                </span>
              </h1>

              <motion.p
                variants={fadeIn}
                className="mt-4 font-serif text-[20px] italic tracking-wide text-[#e7d9a8] sm:text-[24px]"
              >
                Healthy New Life
              </motion.p>

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
                Swastha NavJeevan — <i className="text-white/90">"Healthy New Life"</i> — is a free,
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
              className="lg:col-span-6 lg:-mt-10"
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
              <div className="mt-6">
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

      {/* ============== MISSION & VISION + FOUR PILLARS ============== */}
      <section
        className="relative overflow-hidden pb-[72px] pt-20 md:pt-24"
        data-testid="section-mission-vision"
        style={{
          background:
            "radial-gradient(1100px 560px at 12% 2%, rgba(31,138,128,0.07) 0%, transparent 55%), radial-gradient(900px 520px at 92% 44%, rgba(201,162,75,0.06) 0%, transparent 55%)",
        }}
      >
        {/* soft blurred accent glows tie the whole story together */}
        <div
          className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(47,176,163,0.16) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-[-6%] top-[52%] h-80 w-80 rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(201,162,75,0.14) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          {/* ---------- Section header ---------- */}
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

          {/* ---------- Vision & Mission premium cards (48px below title) ---------- */}
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
            {/* Mission */}
            <Reveal>
              <article
                className="group relative h-full rounded-[20px] p-[1.5px] transition-transform duration-500"
                style={{
                  background:
                    "linear-gradient(155deg, rgba(31,138,128,0.4) 0%, rgba(47,176,163,0.12) 45%, rgba(31,138,128,0.06) 100%)",
                }}
                data-testid="mission-card"
              >
                <div
                  className="relative flex h-full flex-col overflow-hidden rounded-[19px] p-8 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_30px_70px_rgba(31,138,128,0.2)] md:p-10"
                  style={{
                    background: "linear-gradient(160deg, #eef5f5 0%, #e2eef0 100%)",
                    boxShadow: "0 12px 40px rgba(11,42,51,0.06)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#1f8a80]/30 bg-white/50 text-[#1f8a80] transition-all duration-500 group-hover:border-[#1f8a80]/60 group-hover:bg-white">
                      <Compass className="h-6 w-6" strokeWidth={1.4} aria-hidden="true" />
                    </span>
                    <div className="flex flex-col">
                      <span className="font-serif text-[14px] italic text-[#1f8a80]">Ch. 01</span>
                      <span className="text-[11px] uppercase tracking-[0.3em] text-[#1f8a80]">Mission</span>
                    </div>
                  </div>
                  <p className="mt-7 font-serif text-[23px] leading-[1.42] text-[#12343b] md:text-[29px]">
                    To systematically advance the science of holistic healing to society at large, and
                    to educate all people in the integrated wisdom of{" "}
                    <i className="text-[#1f8a80]">Body · Mind · Intelligence · Consciousness</i> — in
                    order to address the root imbalance underlying human disease and to achieve real and
                    lasting wellness in the world.
                  </p>
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-40 transition-opacity duration-500 group-hover:opacity-70"
                    style={{ background: "radial-gradient(circle, #2fb0a3 0%, transparent 70%)" }}
                    aria-hidden="true"
                  />
                </div>
              </article>
            </Reveal>

            {/* Vision */}
            <Reveal delay={1}>
              <article
                className="group relative h-full rounded-[20px] p-[1.5px] transition-transform duration-500"
                style={{
                  background:
                    "linear-gradient(155deg, rgba(201,162,75,0.5) 0%, rgba(201,162,75,0.14) 45%, rgba(176,125,63,0.06) 100%)",
                }}
                data-testid="vision-card"
              >
                <div
                  className="relative flex h-full flex-col overflow-hidden rounded-[19px] p-8 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_30px_70px_rgba(201,162,75,0.24)] md:p-10"
                  style={{
                    background: "linear-gradient(160deg, #f7ecdd 0%, #f2e3ea 100%)",
                    boxShadow: "0 12px 40px rgba(11,42,51,0.06)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#c9a24b]/40 bg-white/50 text-[#b07d3f] transition-all duration-500 group-hover:border-[#c9a24b]/70 group-hover:bg-white">
                      <Eye className="h-6 w-6" strokeWidth={1.4} aria-hidden="true" />
                    </span>
                    <div className="flex flex-col">
                      <span className="font-serif text-[14px] italic text-[#b07d3f]">Ch. 02</span>
                      <span className="text-[11px] uppercase tracking-[0.3em] text-[#b07d3f]">Vision</span>
                    </div>
                  </div>
                  <p className="mt-7 font-serif text-[23px] leading-[1.42] text-[#4a2e2a] md:text-[29px]">
                    To become the world&rsquo;s leading organisation of holistic healing for cancer
                    patients, caregivers, families, and survivors — transforming every journey through
                    cancer into a path of{" "}
                    <i className="text-[#b07d3f]">renewed health and happiness</i>, deep rejuvenation
                    and resilience, and a life of lasting wellness.
                  </p>
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-40 transition-opacity duration-500 group-hover:opacity-70"
                    style={{ background: "radial-gradient(circle, #c9a24b 0%, transparent 70%)" }}
                    aria-hidden="true"
                  />
                </div>
              </article>
            </Reveal>
          </div>

          {/* ---------- Four Pillars gallery (56px below cards) ---------- */}
          <div className="mt-14" data-testid="section-pillars">
            {/* connector accent */}
            <Reveal>
              <div className="mb-8 flex items-center gap-4" aria-hidden="true">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#1c2b2d]/12 to-transparent" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#c9a24b]" />
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#1c2b2d]/12 to-transparent" />
              </div>
            </Reveal>

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

            <motion.div
              className="mt-10 grid grid-cols-2 gap-x-4 gap-y-7 sm:gap-x-5 lg:grid-cols-4"
              variants={galleryContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              {PILLAR_TILES.map((t) => (
                <motion.figure key={t.key} variants={galleryTile} data-testid={`pillar-tile-${t.key}`}>
                  <div className="group relative aspect-[3/4] overflow-hidden rounded-[18px] bg-[#0b2a33] shadow-[0_14px_40px_rgba(11,42,51,0.1)] transition-[transform,box-shadow] duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] will-change-transform hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(11,42,51,0.2)]">
                    <img
                      src={t.img}
                      alt={`${t.label} — ${t.note}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.025]"
                    />
                    {/* desktop/tablet: hover-reveal overlay caption */}
                    <div
                      className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-[#07171b]/75 via-[#07171b]/15 to-transparent opacity-0 transition-opacity duration-[600ms] ease-out group-hover:opacity-100 sm:block"
                      aria-hidden="true"
                    />
                    <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 hidden translate-y-2 p-5 opacity-0 transition-all duration-[600ms] ease-out group-hover:translate-y-0 group-hover:opacity-100 sm:block">
                      <div className="text-[10px] uppercase tracking-[0.28em] text-[#e7d9a8]">{t.sanskrit}</div>
                      <div className="mt-1 font-serif text-[20px] italic leading-tight text-white md:text-[22px]">{t.label}</div>
                    </figcaption>
                  </div>
                  {/* mobile: always-visible caption below the tile */}
                  <figcaption className="mt-3 text-center sm:hidden">
                    <div className="text-[10px] uppercase tracking-[0.28em] text-[#c9a24b]">{t.sanskrit}</div>
                    <div className="mt-1 font-serif text-[18px] italic leading-tight text-[#1c2b2d]">{t.label}</div>
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>
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
                <i className="text-white/90">'Krishna Sanjeevani'</i> before 200+ patients, physicians
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
                { img: INAUG_3, label: "Governor's Message" },
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
                "Modern medicine has given us cures — but healing also needs humanity, faith and
                compassion. This retreat brings the spirit back to cancer care, and that is what makes
                it truly <i className="text-[#e7d9a8]">Indian</i>."
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