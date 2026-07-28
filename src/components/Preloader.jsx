import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SEEN_KEY = "snj-loaded";

export default function Preloader() {
  const [show, setShow] = useState(() => {
    try {
      return !sessionStorage.getItem(SEEN_KEY);
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (!show) return;
    // Progress bar animates for ~1.9s, then we hold briefly before fade-out
    const id = setTimeout(() => {
      try { sessionStorage.setItem(SEEN_KEY, "1"); } catch {}
      setShow(false);
    }, 2500);
    return () => clearTimeout(id);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center select-none"
          exit={{ opacity: 0, scale: 1.03, filter: "blur(6px)" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Logo */}
          <motion.p
            className="font-serif text-white text-[34px] md:text-[50px] tracking-tight"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Swastha NavJeevan
            <span className="text-white/25 text-[13px] align-super ml-1.5">®</span>
          </motion.p>

          {/* Progress bar */}
          <motion.div
            className="mt-10 w-44 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            <div className="h-px bg-white/10 w-full" />
            <motion.div
              className="absolute top-0 left-0 h-px bg-white"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.9, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
            />
          </motion.div>

          <motion.p
            className="mt-5 text-[10px] text-white/25 tracking-[0.3em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            Loading
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}