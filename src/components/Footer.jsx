import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Container from "./Container";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-black/5 mt-24" data-testid="site-footer">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="font-serif text-[44px] leading-[1] tracking-tight text-[#1A1A1A]">
              Swastha
              <br />
              <i className="text-[#6F6F6F]">NavJeevan</i>
            </div>
            <p className="mt-5 text-[#6F6F6F] text-sm max-w-md leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[12px] uppercase tracking-[0.18em] text-[#6F6F6F]">{t("footer.explore")}</div>
            <ul className="mt-5 space-y-3 text-[14px]">
              <li><Link to="/about" className="hover:opacity-60 transition">{t("nav.about")}</Link></li>
              <li><Link to="/programme" className="hover:opacity-60 transition">{t("nav.programme")}</Link></li>
              <li><Link to="/science" className="hover:opacity-60 transition">{t("nav.science")}</Link></li>
              <li><Link to="/people" className="hover:opacity-60 transition">{t("nav.people")}</Link></li>
              <li><Link to="/research" className="hover:opacity-60 transition">{t("nav.research")}</Link></li>
              <li><Link to="/challenge" className="hover:opacity-60 transition">{t("nav.challenge")}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[12px] uppercase tracking-[0.18em] text-[#6F6F6F]">{t("footer.engage")}</div>
            <ul className="mt-5 space-y-3 text-[14px]">
              <li><Link to="/explore" className="hover:opacity-60 transition">{t("nav.explore")}</Link></li>
              <li><Link to="/get-involved" className="hover:opacity-60 transition">{t("nav.getInvolved")}</Link></li>
              <li><Link to="/contact" className="hover:opacity-60 transition">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[12px] uppercase tracking-[0.18em] text-[#6F6F6F]">{t("footer.reach")}</div>
            <ul className="mt-5 space-y-3 text-[14px] text-[#6F6F6F]">
              <li>ISKCON Navi Mumbai</li>
              <li>+91 98219 14642</li>
              <li>vaishnavanghri@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-black/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] text-[#6F6F6F] leading-relaxed tracking-wide">
          <div>© {new Date().getFullYear()} Swastha NavJeevan. {t("footer.copyright")}</div>
          <div className="flex items-center gap-6 flex-col md:flex-row">
            <span>{t("footer.healing")}</span>
            <span>{t("footer.initiative")}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
