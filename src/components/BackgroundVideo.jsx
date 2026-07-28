import React, { useEffect, useRef, useState } from "react";

export const BackgroundVideo = ({
  src,
  poster,
  fadeMs = 600,
  brightness = 0.78,
  blurPx = 1.5,
}) => {
  const videoRef = useRef(null);
  const rafRef = useRef(null);
  const [opacity, setOpacity] = useState(0);

  // Fade video in on first play
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setOpacity(1);
    v.addEventListener("playing", onPlay);
    if (!v.paused) setOpacity(1);
    v.play().catch(() => {});
    return () => v.removeEventListener("playing", onPlay);
  }, [src]);

  // RAF-based parallax — writes directly to DOM, zero React re-renders
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const update = () => {
      // scale(1.1) provides enough vertical headroom so the top edge never
      // becomes visible while the section is still in the viewport
      const y = Math.min(window.scrollY * 0.18, 180);
      v.style.transform = `translate3d(0, ${y}px, 0) scale(1.1)`;
      rafRef.current = requestAnimationFrame(update);
    };
    rafRef.current = requestAnimationFrame(update);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      data-testid="hero-background-video-wrapper"
      aria-hidden="true"
    >
      {/* Ken Burns layer — slow scale-in animation; overflow-hidden above clips excess */}
      <div
        className="absolute inset-0"
        style={{ animation: "kenBurns 24s ease-in-out infinite alternate" }}
      >
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          poster={poster}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity,
            filter: `blur(${blurPx}px) brightness(${brightness})`,
            transition: `opacity ${fadeMs}ms ease`,
            willChange: "transform",
          }}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 hero-overlay pointer-events-none" />
      <div className="absolute inset-0 hero-vignette pointer-events-none" />

      {/* Ambient film grain */}
      <div className="absolute inset-0 grain pointer-events-none" />
    </div>
  );
};

export default BackgroundVideo;