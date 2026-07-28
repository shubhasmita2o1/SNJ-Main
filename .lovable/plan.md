## Plan: Swastha NavJeevan multi-page React site

Turning the 2865-line HTML into a polished, multi-page React app using the project's TanStack Start stack, with the brochure's luxury theme (deep navy, teal, gold on cream) and freshly generated relevant imagery (no stock, no placeholders).

### Design system (from brochure)
- Colors → CSS tokens in `src/styles.css` (oklch): navy `#0D1F3C` / `#1B3A6B`, teal `#0A6E6E` / `#0D8F8F`, gold `#C8922A` / `#E8B84B`, cream `#FAF7F2`.
- Typography: Cormorant Garamond (display) + DM Sans (body), loaded via `<link>` in `__root.tsx`.
- Reusable primitives: `Section`, `Tag`, `Button` variants (gold / teal / outline-navy / outline-white), `SectionTitle`, plus a fixed translucent nav and a rich footer.
- Micro-interactions: scroll-reveal, orb float in hero, hover lifts on cards — subtle, luxurious, not gimmicky.

### Routes (multi-page)
```
/                      Home (hero, 4D framework preview, why HCHR, first patron, CTA)
/about                 Programme story, hierarchy (BAHRC → HCHR → SNJ), team
/programme             The 4D framework in depth + art-based therapies + facilities
/evidence              Global science, research roadmap, science slides, citations, collaborators
/gallery               "Day History Was Made" photo grid + lightbox + events
/get-involved          Three audiences (patients / partners / researchers), resources, contact
```

Shared layout via `__root.tsx` `<Outlet />` with `<SiteHeader>` + `<SiteFooter>`. Each route defines its own `head()` (title/description/og). Sitemap + robots per stack rules.

### "4D live images"
Four hero-grade generated images (1536×1024, premium tier) representing the four dimensions — **Body** (yoga silhouette at dawn on temple steps), **Mind** (meditation with soft aurora light), **Intelligence** (open Bhagavad Gita with warm lamp glow), **Soul** (kirtan/lamps at ISKCON archway). Rendered as a rotating showcase on `/programme` (auto-advancing crossfade + parallax on hover) and previewed on the home page. Plus a cinematic hero image (temple + dawn light + soft gold particles).

### Image generation queue (all saved under `src/assets/`)
1. `hero-temple-dawn.jpg` — ISKCON Navi Mumbai temple silhouette at dawn, soft gold light, mist
2. `dim-body.jpg` — silhouette practicing yoga on stone steps, teal-navy palette, cinematic
3. `dim-mind.jpg` — figure meditating, soft aurora, luxury editorial
4. `dim-intelligence.jpg` — open Sanskrit manuscript with brass lamp, warm bokeh
5. `dim-soul.jpg` — devotees with oil lamps at dusk, gold/navy, painterly
6. `facility-retreat.jpg` — serene retreat garden, marble + greenery
7. `about-founders.jpg` — abstract editorial "science meets wisdom" still life

All via `imagegen--generate_image` premium tier where text-legibility isn't needed → standard/fast otherwise. Batched in parallel.

### Technical details
- Content: extract copy verbatim from the uploaded HTML — no lorem ipsum, no invented claims.
- Components: `src/components/site/` for Header, Footer, Hero, FourDShowcase, Stat, TeamCard, GalleryLightbox, ResourceCard, AudienceTabs.
- No business logic changes; static content site. Contact form is a styled UI only (no backend) unless user asks.
- SEO: unique `head()` per route, JSON-LD `MedicalOrganization` on home, semantic H1 per page, alt text on every image, `sitemap.xml` + `robots.txt`.
- Accessibility: focus states on gold buttons, aria-labels on nav toggle & lightbox, prefers-reduced-motion respected.

### Out of scope (unless asked)
- Working contact form / mailer, i18n, CMS, Lovable Cloud, video, actual PDF resource downloads (buttons will link to `mailto:` or `#`).

Ready to build on approval. Approx 15–20 new files.
