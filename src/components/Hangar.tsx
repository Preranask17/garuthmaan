"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const aircraft = [
  { name: "Vayu Mk. II", category: "SAE REGULAR", specs: { span: "2.5m", weight: "3kg", motor: "600KV", battery: "6S 5000mAh", status: "FLIGHT READY" } },
  { name: "Athena DBF", category: "AIAA DBF", specs: { span: "1.8m", weight: "2kg", motor: "800KV", battery: "4S 3000mAh", status: "DESIGN PHASE" } },
];

export default function Hangar() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="hangar" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="eyebrow mb-2 text-center">THE HANGAR</div>
      <h3 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">A treasure trove of planes that were built…</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {aircraft.map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.03 }}
            className="glass-panel p-4 cursor-pointer group"
            onClick={() => setSelected(i)}
          >
            <div className="aspect-video bg-white/5 rounded-lg mb-4" />
            <div className="px-2">
              <h4 className="font-bold text-white group-hover:text-[#FFD700] transition-colors">{item.name}</h4>
              <p className="text-[#FFD700] text-[10px] uppercase font-mono tracking-widest mb-2">{item.category}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0C10]/90 backdrop-blur-2xl"
            onClick={() => setSelected(null)}
          >
            <motion.div className="glass-panel p-8 max-w-xl w-full border border-white/15" onClick={e => e.stopPropagation()}>
              <h3 className="text-2xl font-bold mb-6">{aircraft[selected].name}</h3>
              <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                {Object.entries(aircraft[selected].specs).map(([k,v]) => <div key={k}><span className="text-slate-400 capitalize">{k}:</span> {v}</div>)}
              </div>
              <button className="btn-glass" onClick={() => setSelected(null)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}