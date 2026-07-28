import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MESSAGES = [
  "Medicine heals the tumour. We heal the whole person.",
  "Healthy New Life",
  "Resilience • Longevity • Happiness",
  "Four Sessions. One Complete Healing.",
  "A New Life, Not Just a Treated Tumour.",
  "Body • Mind • Intelligence • Soul",
  "Evidence-Based Integrative Oncology",
  "Healing Beyond Medicine",
  "Whole Person. Whole Healing.",
  "Transforming Cancer Care Through Holistic Healing.",
];

export default function RotatingMessage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((p) => (p + 1) % MESSAGES.length);
    }, 3400);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-6 backdrop-blur-md"
      style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.35)" }}
      data-testid="hero-rotating-message"
    >
      {/* Accent bar */}
      <span
        className="absolute left-0 top-0 h-full w-[3px]"
        style={{ background: "linear-gradient(to bottom, #2fb0a3, #c9a24b)" }}
        aria-hidden="true"
      />

      <div className="flex items-center gap-2 pl-3">
        <span className="h-1.5 w-1.5 rounded-full bg-[#c9a24b]" aria-hidden="true" />
        <span className="text-[10px] uppercase tracking-[0.32em] text-white/45">The SNJ Ethos</span>
      </div>

      <div className="relative mt-3 min-h-[60px] pl-3">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[22px] leading-[1.25] text-white sm:text-[26px]"
          >
            {MESSAGES[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="mt-4 flex gap-1.5 pl-3" aria-hidden="true">
        {MESSAGES.map((_, i) => (
          <span
            key={i}
            className="h-1 rounded-full transition-all duration-500"
            style={{
              width: i === index ? 22 : 6,
              background: i === index ? "#2fb0a3" : "rgba(255,255,255,0.2)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
