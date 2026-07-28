import { useRef, useEffect } from "react";

export default function HorizontalScroll({ children, className = "", header, bgClass = "" }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const PAD = 128; // accounts for px-16 on both sides

    const init = () => {
      if (window.innerWidth < 1024) {
        section.style.height = "";
        track.style.transform = "";
        return;
      }
      const dist = Math.max(0, track.scrollWidth - window.innerWidth + PAD);
      section.style.height = dist > 0 ? `calc(100vh + ${dist}px)` : "";
    };

    const update = () => {
      if (window.innerWidth < 1024) return;
      const rect = section.getBoundingClientRect();
      const sectionH = section.offsetHeight;
      const dist = Math.max(0, track.scrollWidth - window.innerWidth + PAD);
      if (!dist) return;
      const progress = Math.max(0, Math.min(1, -rect.top / (sectionH - window.innerHeight)));
      track.style.transform = `translateX(-${progress * dist}px)`;
    };

    const onResize = () => { init(); update(); };

    init();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div ref={sectionRef}>
      {/* sticky container — full viewport height on desktop */}
      <div className={`lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center overflow-hidden py-16 lg:py-0 ${bgClass}`}>
        {header && (
          <div className="px-8 md:px-16 mb-10 lg:mb-14">{header}</div>
        )}
        <div
          ref={trackRef}
          className={`flex flex-wrap lg:flex-nowrap gap-6 px-8 md:px-16 ${className}`}
          style={{ willChange: "transform" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}