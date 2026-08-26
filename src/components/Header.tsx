"use client";

import React from "react";
import { motion } from "framer-motion";

const navItems = ["Home", "About", "Team", "History", "Sponsors", "Gallery", "Contact"];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <nav className="glass-panel px-6 py-3 flex items-center justify-between max-w-7xl mx-auto rounded-2xl">
        {/* Branding Area (Left) */}
        <div className="flex items-center gap-4">
          <img 
            src="/logo.png" 
            alt="Team Garuthmaan Logo" 
            className="w-14 h-14 rounded-full object-cover border-2 border-[#FFD700]" 
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg sm:text-xl tracking-wider text-white">TEAM GARUTHMAAN</span>
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#FFD700]">AEROSPACE CLUB</span>
          </div>
        </div>

        {/* Navigation (Center) */}
        <div className="flex gap-6">
          {navItems.map(item => (
            <motion.a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.05, color: "#FFD700" }}
              transition={{ duration: 0.2 }}
              className="text-xs font-mono tracking-widest text-slate-300 hover:text-[#FFD700] uppercase transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Action Buttons (Right) */}
        <div className="flex gap-3">
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-glass">Visit Workshop</motion.button>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-gold">Join The Club</motion.button>
        </div>
      </nav>
    </header>
  );
}