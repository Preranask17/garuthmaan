"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const hangarImages = [
  { id: 1, src: "/Hangar/photo1.jpeg" },
  { id: 2, src: "/Hangar/photo2.jpeg" },
  { id: 3, src: "/Hangar/photo3.jpeg" },
  { id: 4, src: "/Hangar/photo4.jpeg" },
  { id: 5, src: "/Hangar/photo5.jpeg" },
  { id: 6, src: "/Hangar/photo6.jpeg" },
  { id: 7, src: "/Hangar/photo7.jpeg" },
  { id: 8, src: "/Hangar/photo8.jpeg" },
  { id: 9, src: "/Hangar/photo9.jpeg" },
  { id: 10, src: "/Hangar/photo10.jpeg" },
  { id: 11, src: "/Hangar/photo11.jpeg" },
];

export default function Hangar() {
  const [selected, setSelected] = useState<number | null>(null);

  const getGridClasses = (i: number) => {
    if (i % 6 === 0) return "md:col-span-2 md:row-span-2 aspect-[16/10]"; // Large featured
    if (i % 6 === 3) return "md:col-span-2 aspect-[16/7]"; // Wide banner
    if (i % 6 === 5) return "md:row-span-2 aspect-[9/16]"; // Tall portrait
    return "aspect-[4/3]"; // Standard
  };

  return (
    <section id="hangar" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="eyebrow text-center mb-2">THE HANGAR</div>
      <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white text-center mb-16">A treasure trove of planes that were built…</h3>
      
      {/* Asymmetric Mosaic Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr grid-flow-dense">
        {hangarImages.map((item, i) => (
          <motion.div 
            key={item.id}
            whileHover={{ scale: 1.02 }}
            className={`glass-panel p-1 rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#FFD700] transition-colors ${getGridClasses(i)}`}
            onClick={() => setSelected(i)}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image 
                    src={item.src} 
                    alt="Aircraft" 
                    fill 
                    className="object-cover" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    onError={(e) => (e.currentTarget.src = "/default-aero.jpg")} 
                />
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
            <motion.div className="relative p-2 max-w-5xl w-full" onClick={e => e.stopPropagation()}>
              <button className="absolute -top-12 right-0 text-white text-2xl z-10" onClick={() => setSelected(null)}>✕</button>
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/15">
                <Image 
                    src={hangarImages[selected].src} 
                    alt="Aircraft" 
                    fill 
                    className="object-contain" 
                    onError={(e) => (e.currentTarget.src = "/default-aero.jpg")} 
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}