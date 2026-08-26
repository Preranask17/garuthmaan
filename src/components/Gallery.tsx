"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="eyebrow mb-2">GALLERY</div>
      <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-16">WORKSHOP & FLIGHTS</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            className="glass-panel aspect-square flex items-center justify-center border border-white/10"
          >
            <span className="text-slate-600 font-mono">Photo {i + 1}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}