import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSelector from "./LanguageSelector";

export const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const lastY = useRef(0);

  const NAV_ITEMS = [
    { key: "about", to: "/about" },
    { key: "programme", to: "/programme" },
    { key: "science", to: "/science" },
    { key: "people", to: "/people" },
    { key: "explore", to: "/explore" },
    { key: "research", to: "/research" },
    { key: "challenge", to: "/challenge" },
    { key: "getInvolved", to: "/get-involved" },
    { key: "contact", to: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      // Only hide after the user has scrolled past the navbar zone
      if (y > 100) {
        setHidden(y > lastY.current);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4"
      data-testid="site-navbar"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: hidden ? "-120%" : 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className={`mx-auto max-w-[1280px] rounded-full px-4 md:px-6 py-2.5 flex items-center justify-between glass-nav transition-all duration-500 ${
          scrolled ? "glass-nav-scrolled" : ""
        }`}
      >
        <Link
          to="/"
          className="font-serif text-2xl md:text-[26px] tracking-tight text-black px-2"
          data-testid="nav-logo"
          aria-label="Swastha NavJeevan home"
        >
          Swastha NavJeevan<span className="align-super text-[10px] text-[#6F6F6F] ml-0.5">®</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-6 text-[13.5px] text-black/80 font-medium">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                data-testid={`nav-link-${item.key.toLowerCase()}`}
                className="relative block py-1 group"
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"
                      }`}
                    >
                      {t(`nav.${item.key}`)}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-px bg-black"
                        transition={{ type: "spring", bounce: 0.15, duration: 0.45 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSelector />
          <Link
            to="/get-involved"
            className="btn-pill btn-pill-sm hidden md:inline-flex"
            data-testid="nav-cta-begin-journey"
          >
            {t("nav.beginJourney")} <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.7} />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-full hover:bg-black/5"
            data-testid="nav-mobile-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden mx-auto max-w-[1280px] mt-2 rounded-3xl glass-nav glass-nav-scrolled p-6"
            data-testid="nav-mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-4 text-[15px]">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    data-testid={`nav-mobile-link-${item.key.toLowerCase()}`}
                    className={({ isActive }) =>
                      `block py-1 ${isActive ? "text-black" : "text-black/70"}`
                    }
                  >
                    {t(`nav.${item.key}`)}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/get-involved"
                  className="btn-pill btn-pill-sm w-full justify-center"
                  data-testid="nav-mobile-cta-begin-journey"
                >
                  {t("nav.beginJourney")} <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.7} />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;