import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../context/LanguageContext";

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const lang = i18n.language;
  const current = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-black/5 transition text-[13px] font-medium text-black/80"
        aria-label="Select language"
        aria-expanded={open}
      >
        <Globe className="w-3.5 h-3.5" strokeWidth={1.6} />
        <span>{current.native}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} strokeWidth={1.8} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 glass-nav glass-nav-scrolled rounded-2xl shadow-xl border border-black/6 py-1.5 z-[200]">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => { i18n.changeLanguage(l.code); setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-[13px] flex items-center justify-between hover:bg-black/4 transition ${
                l.code === lang ? "font-medium text-black" : "text-black/70"
              }`}
            >
              <span>{l.native}</span>
              <span className="text-[11px] text-[#6F6F6F]">{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
