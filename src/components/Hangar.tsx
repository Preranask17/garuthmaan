"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const aircraft = Array(6).fill({
  name: "Vayu Mk. II",
  tag: "SAE REGULAR CLASS",
  desc: "Custom balsa & carbon-fiber airframe optimized for maximum payload capacity."
});

export default function Hangar() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="hangar" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="eyebrow mb-2">THE HANGAR</div>
      <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-16">A treasure trove of planes that were built…</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {aircraft.map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.03 }}
            className="glass-panel p-4 cursor-pointer group"
            onClick={() => setSelected(i)}
          >
            <div className="aspect-video bg-white/5 rounded-lg mb-4" />
            <motion.div 
              initial={{ opacity: 0.8, y: 0 }}
              whileHover={{ opacity: 1, y: -4 }}
              className="px-2"
            >
              <h4 className="font-bold text-white group-hover:text-[#FFD700] transition-colors">{item.name}</h4>
              <p className="text-[#FFD700] text-[10px] uppercase font-mono tracking-widest mb-2">{item.tag}</p>
              <p className="text-slate-400 text-xs">{item.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div className="glass-panel p-12 max-w-2xl w-full" onClick={e => e.stopPropagation()}>
              <h3 className="text-2xl font-bold mb-4">{aircraft[selected].name}</h3>
              <p className="text-slate-400">Detailed build specifications go here...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}