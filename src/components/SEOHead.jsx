import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../context/LanguageContext";

const BASE_URL = "https://swasthanavjeevan.org";
const DEFAULT_IMG = `${BASE_URL}/og-image.jpg`;

export default function SEOHead({
  title,
  description = "A holistic cancer healing programme by ISKCON Navi Mumbai — body, mind, intelligence and soul. Free monthly retreat for patients, caregivers and survivors.",
  ogImage = DEFAULT_IMG,
  canonical,
  noIndex = false,
}) {
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";
  const fullTitle = title ? `${title} | Swastha NavJeevan` : "Swastha NavJeevan — Holistic Cancer Healing";
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      <link rel="canonical" href={canonicalUrl} />
      {canonical && LANGUAGES.map((l) => (
        <link key={l.code} rel="alternate" hrefLang={l.code} href={`${BASE_URL}${canonical}`} />
      ))}

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Swastha NavJeevan" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
