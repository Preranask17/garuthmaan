"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

// Editable milestone content — update years/titles/descriptions here
const milestonesData = [
  {
    year: "2021",
    title: "Team Foundation & Initial Conceptualization",
    description:
      "A handful of builders sketch the first airframes and set the team's engineering-first culture.",
  },
  {
    year: "2023",
    title: "First Prototype RC Flight Test",
    description:
      "Maiden flights validate our airfoils, structures, and radio setup in real field conditions.",
  },
  {
    year: "2024",
    title: "Competition Entry & Technical Review",
    description:
      "Design reports, presentations, and flight rounds judged against national competition standards.",
  },
  {
    year: "2025",
    title: "Advanced Avionics & Payload Integration",
    description:
      "Telemetry, stabilized flight controllers, and payload drops push every airframe further.",
  },
  {
    year: "2026",
    title: "Next-Gen Autonomous Flight Architecture",
    description:
      "Waypoint navigation and onboard sensing take the fleet toward full autonomy.",
  },
];

// Fractions along the SVG path where each milestone node sits
const NODE_FRACTIONS = [0.04, 0.26, 0.5, 0.74, 0.96];

// Fallback node coordinates (viewBox 1200x420) for first paint before measurement
const FALLBACK_POINTS = [
  { x: 60, y: 300 },
  { x: 330, y: 190 },
  { x: 600, y: 210 },
  { x: 870, y: 230 },
  { x: 1140, y: 140 },
];

interface PlanePos {
  x: number;
  y: number;
  angle: number;
}

export default function Milestones() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const [plane, setPlane] = useState<PlanePos>({ ...FALLBACK_POINTS[0], angle: 0 });
  const [nodePts, setNodePts] = useState<{ x: number; y: number }[]>(FALLBACK_POINTS);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Measure node anchor points once the path is laid out (and on resize)
  useEffect(() => {
    const measure = () => {
      const path = pathRef.current;
      if (!path) return;
      try {
        const len = path.getTotalLength();
        setNodePts(
          NODE_FRACTIONS.map((f) => {
            const pt = path.getPointAtLength(f * len);
            return { x: pt.x, y: pt.y };
          })
        );
      } catch {
        // Keep fallback points if measurement is unavailable
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Glide the airplane along the curve as the user scrolls the section
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const path = pathRef.current;
    if (!path) return;
    try {
      const len = path.getTotalLength();
      const clamped = Math.max(0, Math.min(1, v));
      const dist = clamped * len;
      const pt = path.getPointAtLength(dist);
      const ahead = path.getPointAtLength(Math.min(len, dist + 2));
      const angle = (Math.atan2(ahead.y - pt.y, ahead.x - pt.x) * 180) / Math.PI;
      setPlane({ x: pt.x, y: pt.y, angle });
    } catch {
      // Ignore measurement errors mid-scroll
    }
  });

  return (
    <section id="milestones" ref={sectionRef} className="py-20 px-4 max-w-7xl mx-auto bg-transparent">
      <div className="eyebrow mb-2">OUR JOURNEY</div>
      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-10">
        BUILT ACROSS YEARS, NOT JUST SEASONS
      </h2>

      {/* Curved flight trail with airplane riding the rail */}
      <div className="relative w-full">
        <svg viewBox="0 0 1200 420" className="w-full h-auto" aria-hidden="true">
          <defs>
            <filter id="trail-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Soft glow underlay */}
          <path
            d="M 0 300 C 180 300 240 120 440 150 S 700 330 880 220 S 1100 90 1200 140"
            fill="none"
            stroke="#EAB308"
            strokeOpacity="0.25"
            strokeWidth="10"
            strokeLinecap="round"
            filter="url(#trail-glow)"
          />
          {/* Main gold trail with dashed contrail */}
          <path
            ref={pathRef}
            d="M 0 300 C 180 300 240 120 440 150 S 700 330 880 220 S 1100 90 1200 140"
            fill="none"
            stroke="#EAB308"
            strokeOpacity="0.8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="10 8"
            filter="url(#trail-glow)"
          />

          {/* Milestone nodes anchored on the curve */}
          {nodePts.map((pt, i) => (
            <g key={i}>
              <circle cx={pt.x} cy={pt.y} r="10" fill="#0A0C10" stroke="#EAB308" strokeOpacity="0.4" strokeWidth="2" />
              <circle cx={pt.x} cy={pt.y} r="4.5" fill="#EAB308" />
            </g>
          ))}

          {/* Airplane gliding on the rail, auto-rotated to the tangent */}
          <g transform={`translate(${plane.x} ${plane.y}) rotate(${plane.angle})`}>
            <g transform="translate(-16 -10)">
              <path
                d="M2 10 L30 10 L14 2 L12 8 L12 12 L14 18 Z"
                fill="#EAB308"
                stroke="#FFF7CC"
                strokeWidth="1"
                strokeLinejoin="round"
              />
              <circle cx="26" cy="10" r="2.2" fill="#FFF7CC" />
            </g>
          </g>
        </svg>
      </div>

      {/* Milestone cards with vertical leader lines */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-2">
        {milestonesData.map((m, i) => (
          <motion.div
            key={m.year}
            whileHover={{ y: -4, scale: 1.02 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-px h-8 bg-yellow-500/40" />
            <div className="glass-panel p-6 w-full">
              <div className="text-yellow-400 font-mono text-sm mb-2">{m.year}</div>
              <h3 className="text-base font-bold text-white mb-2">{m.title}</h3>
              <p className="text-zinc-300 text-xs leading-relaxed">{m.description}</p>
              <span
                className={`inline-block mt-4 text-[10px] font-mono tracking-widest px-2 py-1 rounded border ${
                  i === milestonesData.length - 1
                    ? "bg-yellow-500/10 border-yellow-500/40 text-yellow-400"
                    : "bg-white/5 border-white/10 text-zinc-300"
                }`}
              >
                {i === milestonesData.length - 1 ? "[IN PROGRESS]" : "[COMPLETED]"}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}