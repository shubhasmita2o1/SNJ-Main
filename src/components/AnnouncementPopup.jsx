import React, { useState, useEffect } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AnnouncementPopup({ open, onClose }) {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      requestAnimationFrame(() => setVisible(true));
    } else if (mounted) {
      setVisible(false);
      const timer = setTimeout(() => setMounted(false), 400);
      return () => clearTimeout(timer);
    }
  }, [open]);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 z-[500] flex items-end md:items-center justify-center md:justify-end px-4 pb-6 md:pr-6 md:pb-0 pointer-events-none"
      aria-live="polite"
    >
      <div
        className="pointer-events-auto max-w-[380px] w-full"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1) translateY(0)" : "scale(0.94) translateY(12px)",
          transition: "opacity 400ms cubic-bezier(0.22,1,0.36,1), transform 400ms cubic-bezier(0.22,1,0.36,1)",
        }}
        role="dialog"
        aria-modal="false"
        aria-label="Announcement"
      >
        <div className="glass-nav glass-nav-scrolled rounded-[22px] p-6 shadow-2xl border border-black/6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#6F6F6F]">{t("announcement.upcoming")}</div>
              <h3 className="mt-2 font-serif text-[26px] leading-tight">{t("announcement.title")}</h3>
              <p className="mt-3 text-[13px] text-[#6F6F6F] leading-relaxed">{t("announcement.body")}</p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-black/6 transition shrink-0"
              aria-label="Dismiss announcement"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="mt-5 flex gap-3">
            <Link to="/get-involved" onClick={onClose} className="btn-pill btn-pill-sm flex-1 justify-center">
              {t("announcement.cta1")} <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <button onClick={onClose} className="text-[12px] text-[#6F6F6F] hover:text-black transition px-3">
              {t("announcement.dismiss")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
