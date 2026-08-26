"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Milestones", href: "#milestones" },
  { name: "Gallery", href: "#gallery" },
  { name: "Hangar", href: "#hangar" },
  { name: "Blogs", href: "#blogs" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <nav className="glass-panel px-6 py-3 flex items-center justify-between max-w-7xl mx-auto rounded-2xl">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-full object-cover border-2 border-[#FFD700]" />
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-wider text-white">TEAM GARUTHMAAN</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navItems.map(item => (
            <a 
              key={item.name} 
              href={item.href}
              className={`text-xs font-mono tracking-widest uppercase transition-colors ${activeSection === item.href.substring(1) ? "text-[#FFD700]" : "text-slate-300 hover:text-[#FFD700]"}`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex gap-3">
          <a href="#contact" className="btn-glass">Workshop</a>
          <a href="#contact" className="btn-gold">Join</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass-panel mt-2 p-6 flex flex-col gap-4 rounded-2xl"
          >
            {navItems.map(item => (
              <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-white text-lg font-bold">{item.name}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}