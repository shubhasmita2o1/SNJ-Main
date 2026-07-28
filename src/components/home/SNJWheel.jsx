import React from "react";
import { Compass, Dumbbell, Salad, Heart, Brain, Lightbulb, Users, Sun } from "lucide-react";

const MEDITATION_IMG =
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=srgb&fm=jpg&q=85&w=800";

const DIMENSIONS = [
  { label: "PURPOSE", Icon: Compass },
  { label: "PHYSICAL", Icon: Dumbbell },
  { label: "NUTRITIONAL", Icon: Salad },
  { label: "EMOTIONAL", Icon: Heart },
  { label: "MENTAL", Icon: Brain },
  { label: "INTELLECTUAL", Icon: Lightbulb },
  { label: "SOCIAL", Icon: Users },
  { label: "SPIRITUAL", Icon: Sun },
];

export default function SNJWheel() {
  const R = 44; // radius in %

  return (
    <div
      className="snj-wheel-group relative mx-auto aspect-square w-full max-w-[540px]"
      data-testid="snj-wheel"
      aria-label="The SNJ Wheel — eight dimensions of whole-person healing"
    >
      {/* Soft glow */}
      <div
        className="snj-glow absolute inset-[8%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(47,176,163,0.35) 0%, rgba(201,162,75,0.12) 45%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Static dotted orbits */}
      <div className="snj-orbit absolute inset-[4%]" aria-hidden="true" />
      <div className="snj-orbit absolute inset-[20%] opacity-60" aria-hidden="true" />

      {/* Rotating ring with nodes */}
      <div className="snj-wheel-ring absolute inset-0">
        {DIMENSIONS.map(({ label, Icon }, i) => {
          const theta = (i / DIMENSIONS.length) * Math.PI * 2 - Math.PI / 2;
          const left = 50 + R * Math.cos(theta);
          const top = 50 + R * Math.sin(theta);
          return (
            <div
              key={label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${left}%`, top: `${top}%` }}
            >
              <div className="snj-wheel-node group/node flex flex-col items-center gap-2">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-[#eadfae] backdrop-blur-md transition-all duration-500 group-hover/node:scale-110 group-hover/node:border-[#2fb0a3]/70 group-hover/node:bg-[#2fb0a3]/20 group-hover/node:text-white"
                  style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.25)" }}
                  data-testid={`wheel-node-${label.toLowerCase()}`}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.4} aria-hidden="true" />
                </div>
                <span className="whitespace-nowrap text-[9.5px] font-medium uppercase tracking-[0.22em] text-white/55 transition-colors duration-500 group-hover/node:text-white">
                  {label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Center medallion */}
      <div className="absolute left-1/2 top-1/2 h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2">
        <div
          className="relative h-full w-full overflow-hidden rounded-full border border-white/20"
          style={{ boxShadow: "0 0 0 8px rgba(47,176,163,0.12), 0 20px 60px rgba(0,0,0,0.45)" }}
        >
          <img
            src={MEDITATION_IMG}
            alt="A patient in calm meditation at the heart of the SNJ wheel"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, rgba(11,42,51,0.15) 0%, rgba(11,42,51,0.65) 100%)",
            }}
          />
          <div className="absolute inset-0 flex items-end justify-center pb-4">
            <span className="font-serif text-[22px] italic leading-none text-white/95">SNJ</span>
          </div>
        </div>
      </div>
    </div>
  );
}
