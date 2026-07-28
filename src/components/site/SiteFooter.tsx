import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-navy-deep)] text-white/70">
      <div className="container-wide py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2 max-w-md">
          <div className="display-serif text-2xl text-white">Swastha NavJeevan</div>
          <div className="text-[11px] tracking-[0.22em] uppercase text-[var(--color-gold-bright)] mt-1">
            Holistic Cancer Healing Retreat
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            A four-dimensional integrative oncology programme for every cancer patient —
            regardless of faith, background, or means. Delivered free at the
            Bhaktivedanta Ayurvedic Healing &amp; Research Centre, ISKCON Navi Mumbai.
          </p>
        </div>

        <div>
          <div className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold-bright)] mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/programme" className="hover:text-white">The 4D Programme</Link></li>
            <li><Link to="/evidence" className="hover:text-white">Evidence &amp; Research</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link to="/get-involved" className="hover:text-white">Get Involved</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold-bright)] mb-4">Contact</div>
          <ul className="space-y-2 text-sm">
            <li>BAHRC, ISKCON Navi Mumbai,<br />Kharghar, Maharashtra, India</li>
            <li><a href="mailto:care@swasthanavjeevan.org" className="hover:text-white">care@swasthanavjeevan.org</a></li>
            <li>Patient support: +91 22 0000 0000</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Bhaktivedanta Ayurvedic Healing &amp; Research Centre. All rights reserved.</div>
          <div>Open to all cancer patients irrespective of religion, caste, or income.</div>
        </div>
      </div>
    </footer>
  );
}
