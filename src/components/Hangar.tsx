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

  // Helper to adjust spans to create a gapless mosaic pattern
  const getGridClasses = (i: number) => {
    const patterns = [
      "md:col-span-2 md:row-span-2", // Large featured
      "",                             // Standard
      "",                             // Standard
      "md:col-span-2",                // Wide banner
      "",                             // Standard
      "md:row-span-2"                 // Tall portrait
    ];
    return patterns[i % 6];
  };

  return (
    <section id="hangar" className="py-20 px-0 max-w-full">
      <div className="eyebrow text-center mb-2">THE HANGAR</div>
      <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white text-center mb-16">A treasure trove of planes that were built…</h3>
      
      {/* Gapless Mosaic Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-0 auto-rows-fr grid-flow-dense">
        {hangarImages.map((item, i) => (
          <motion.div 
            key={item.id}
            whileHover={{ scale: 1.02 }}
            className={`relative overflow-hidden cursor-pointer ${getGridClasses(i)}`}
            onClick={() => setSelected(i)}
          >
            <div className="relative w-full h-full aspect-[4/3] md:aspect-auto">
                <Image 
                    src={item.src} 
                    alt="Aircraft" 
                    fill 
                    className="object-cover w-full h-full" 
                    sizes="(max-width: 768px) 100vw, 25vw" 
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
            <motion.div className="relative p-0 max-w-5xl w-full" onClick={e => e.stopPropagation()}>
              <button className="absolute -top-12 right-0 text-white text-2xl z-10" onClick={() => setSelected(null)}>✕</button>
              <div className="relative aspect-video overflow-hidden">
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