"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const hangarImages = [
  { id: 1, src: "/Hangar/photo1.jpeg", title: "Vayu Mk. I", tag: "SAE 2024", desc: "First prototype construction." },
  { id: 2, src: "/Hangar/photo2.jpeg", title: "Vayu Mk. II", tag: "SAE 2026", desc: "Carbon fiber reinforced." },
  { id: 3, src: "/Hangar/photo3.jpeg", title: "Athena DBF", tag: "AIAA 2025", desc: "Multi-mission optimization." },
  { id: 4, src: "/Hangar/photo4.jpeg", title: "Wiring Setup", tag: "AVIONICS", desc: "Avionics and integration." },
  { id: 5, src: "/Hangar/photo5.jpeg", title: "Wind Tunnel", tag: "ANALYSE", desc: "Airfoil testing." },
  { id: 6, src: "/Hangar/photo6.jpeg", title: "Maiden Flight", tag: "TESTING", desc: "Maiden flight." },
  { id: 7, src: "/Hangar/photo7.jpeg", title: "Carbon Layup", tag: "BUILD", desc: "Fiber reinforcement." },
  { id: 8, src: "/Hangar/photo8.jpeg", title: "CAD Model", tag: "DESIGN", desc: "Fusion 360 assembly." },
  { id: 9, src: "/Hangar/photo9.jpeg", title: "Fuselage", tag: "BUILD", desc: "Tapered fuselage work." },
  { id: 10, src: "/Hangar/photo10.jpeg", title: "Ground Test", tag: "TESTING", desc: "Thrust verification." },
  { id: 11, src: "/Hangar/photo11.jpeg", title: "Team Hangar", tag: "TEAM", desc: "Workshop overview." },
];

export default function Hangar() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="hangar" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="eyebrow text-center mb-2">THE HANGAR</div>
      <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white text-center mb-16">A treasure trove of planes that were built…</h3>
      
      {/* Mosaic Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hangarImages.map((item, i) => (
          <motion.div 
            key={item.id}
            whileHover={{ scale: 1.03 }}
            className={`glass-panel p-2 rounded-xl overflow-hidden cursor-pointer group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
            onClick={() => setSelected(i)}
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image 
                    src={item.src} 
                    alt={item.title} 
                    fill 
                    className="object-cover" 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                    onError={(e) => (e.currentTarget.src = "/default-aero.jpg")} 
                />
            </div>
            <div className="p-4">
              <span className="text-[10px] font-mono tracking-widest text-[#FFD700] mb-1 block">[{item.tag}]</span>
              <h4 className="font-bold text-white text-lg group-hover:text-[#FFD700] transition-colors">{item.title}</h4>
              <p className="text-gray-400 text-xs">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0C10]/95 backdrop-blur-2xl"
            onClick={() => setSelected(null)}
          >
            <motion.div className="glass-panel p-8 max-w-4xl w-full border border-white/15 rounded-3xl" onClick={e => e.stopPropagation()}>
              <button className="absolute top-4 right-4 text-white" onClick={() => setSelected(null)}>✕</button>
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                <Image src={hangarImages[selected].src} alt={hangarImages[selected].title} fill className="object-cover" onError={(e) => (e.currentTarget.src = "/default-aero.jpg")} />
              </div>
              <h3 className="text-3xl font-bold mb-2">{hangarImages[selected].title}</h3>
              <p className="text-[#FFD700] font-mono text-sm mb-4">[{hangarImages[selected].tag}]</p>
              <p className="text-slate-300">{hangarImages[selected].desc}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}