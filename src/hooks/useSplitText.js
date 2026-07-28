import { useLayoutEffect, useEffect, useRef } from "react";
import SplitType from "split-type";

export default function useSplitText({ deps = [] } = {}) {
  const ref = useRef(null);
  const splitRef = useRef(null);

  // Runs synchronously before paint — hides words to prevent FOUC
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (splitRef.current) {
      splitRef.current.revert();
      splitRef.current = null;
    }

    el.style.visibility = "hidden";
    const split = new SplitType(el, { types: "words" });
    splitRef.current = split;

    if (split.words) {
      split.words.forEach((w) => {
        w.style.opacity = "0";
        w.style.transform = "translateY(22px)";
        w.style.display = "inline-block";
        w.style.willChange = "opacity, transform";
      });
    }

    el.style.visibility = "";

    return () => {
      if (splitRef.current) {
        splitRef.current.revert();
        splitRef.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  // IO-triggered animation after layout split
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animate = () => {
      const words = splitRef.current?.words;
      if (!words) return;
      words.forEach((w, i) => {
        const delay = i * 55;
        setTimeout(() => {
          w.style.transition = `opacity 750ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 750ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`;
          w.style.opacity = "1";
          w.style.transform = "translateY(0)";
        }, delay);
      });
    };

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) {
      requestAnimationFrame(animate);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        animate();
        obs.disconnect();
      },
      { threshold: 0.1 }
    );
    obs.observe(el);

    return () => obs.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}