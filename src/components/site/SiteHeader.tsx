import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/about", label: "About" },
  { to: "/programme", label: "Programme" },
  { to: "/science", label: "Science" },
  { to: "/people", label: "People" },
  { to: "/evidence", label: "Evidence" },
  { to: "/gallery", label: "Gallery" },
  { to: "/challenge", label: "Challenge" },
  { to: "/contact", label: "Contact" },
  { to: "/research", label: "Research" },
  { to: "/get-involved", label: "Get Involved" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const onDark = pathname === "/" && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[oklch(0.15_0.05_264_/_0.85)] shadow-[0_2px_24px_oklch(0_0_0_/_0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between py-4">
        <Link to="/" className="flex flex-col leading-none" aria-label="Swastha NavJeevan home">
          <span className="display-serif text-lg text-white">Swastha NavJeevan</span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-gold-bright)] mt-0.5">
            Holistic Cancer Healing · BAHRC
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[13px] font-medium text-white/80 hover:text-[var(--color-gold-bright)] transition-colors tracking-wide"
              activeProps={{ className: "text-[var(--color-gold-bright)]" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/get-involved"
            className="btn-gold btn-gold-hover !py-2 !px-4 !text-[12px]"
          >
            Book Free Consultation
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          className="lg:hidden text-white p-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[var(--color-navy-deep)] border-t border-white/10">
          <nav className="container-wide flex flex-col py-4 gap-1" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-3 text-white/85 hover:text-[var(--color-gold-bright)] text-sm"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/get-involved" className="btn-gold btn-gold-hover mt-3 justify-center !text-[13px]">
              Book Free Consultation
            </Link>
          </nav>
        </div>
      )}

      {/* Keep header text readable on non-hero pages */}
      {!onDark && !scrolled && (
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[var(--color-navy-deep)]/95 to-transparent" />
      )}
    </header>
  );
}
