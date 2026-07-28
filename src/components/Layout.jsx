import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import AnnouncementPopup from "./AnnouncementPopup";
import AnnouncementFloat from "./AnnouncementFloat";
import ScrollProgress from "./ScrollProgress";
import Preloader from "./Preloader";
import PageTransition from "./PageTransition";
import useLenis, { getLenis } from "../hooks/useLenis";

export default function Layout() {
  useLenis();

  const location = useLocation();
  const [announcementOpen, setAnnouncementOpen] = useState(false);

  // Scroll-to-top on route change — use Lenis when ready, native fallback
  useEffect(() => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setAnnouncementOpen(true), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white" data-testid="site-layout">
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <main className="pt-0">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
      <WhatsAppFloat />
      <AnnouncementFloat onClick={() => setAnnouncementOpen(true)} />
      <AnnouncementPopup open={announcementOpen} onClose={() => setAnnouncementOpen(false)} />
    </div>
  );
}