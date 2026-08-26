"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const defaultGuides = [
  {
    title: "XFLR5 Airfoil Selection & Static Margin Guide",
    tag: "AERODYNAMICS",
    subtext: "How we calculate neutral points and size main wings before CAD modeling."
  },
  {
    title: "Fusion 360 Airframe Modeling Checklist",
    tag: "CAD & 3D",
    subtext: "Designing ribs, internal bays, and spar slots optimized for quick field repairs."
  },
  {
    title: "Maiden Flight & Power System Setup",
    tag: "AVIONICS",
    subtext: "ESCs sizing, motor thrust testing, and receiver config step-by-step."
  }
];

export default function Blogs() {
  const [guides] = useState(defaultGuides);

  return (
    <section id="blogs" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="eyebrow text-center mb-2">OPEN NOTES FOR FELLOW BUILDERS</div>
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">THE AERO GUIDES & HANDBOOKS</h2>
      <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-center max-w-3xl mx-auto mb-16">
        Written by students, for anyone who wants to build. We document what works (and what crashed) so you don't have to start from scratch. Short, direct guides covering tail sizing, wing geometry, XFLR5 analysis, Fusion 360 airframe modeling, and maiden flight checklists.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {guides.map((guide, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4, scale: 1.02 }}
            className="glass-panel p-6 flex flex-col"
          >
            <span className="text-[10px] font-mono tracking-widest text-[#FFD700] mb-3 inline-block">[{guide.tag}]</span>
            <h4 className="font-bold text-white mb-3 text-lg">{guide.title}</h4>
            <p className="text-slate-400 text-sm flex-grow">{guide.subtext}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}