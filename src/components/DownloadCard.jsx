import React from "react";
import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function DownloadCard({ title, language, category, description, href = "#" }) {
  const { t } = useTranslation();
  return (
    <div className="snj-card p-7 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {category && (
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#6F6F6F] mb-2">{category}</div>
          )}
          <div className="font-serif text-[22px] leading-tight">{title}</div>
          {language && (
            <div className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-[#6F6F6F]">{language}</div>
          )}
        </div>
      </div>
      {description && (
        <p className="text-[13px] text-[#6F6F6F] leading-relaxed">{description}</p>
      )}
      <a
        href={href}
        download
        className="btn-pill btn-pill-sm self-start mt-auto"
        aria-label={`Download ${title}`}
      >
        <Download className="w-3.5 h-3.5" /> {t("common.download")}
      </a>
    </div>
  );
}
