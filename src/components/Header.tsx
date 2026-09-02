"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Milestones", href: "#milestones" },
  { name: "Hangar", href: "#hangar" },
  { name: "Blogs", href: "#blogs" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.href.substring(1));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-[#0A0C10] border-b border-white/10 shadow-xl">
      <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto h-full">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-full object-cover border-2 border-[#FFD700]" />
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-wider text-white">TEAM GARUTHMAAN</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navItems.map(item => (
            <motion.a 
              key={item.name} 
              href={item.href}
              whileHover={{ scale: 1.05 }}
              className={`text-xs font-mono tracking-widest uppercase transition-colors ${activeSection === item.href.substring(1) ? "text-[#FFD700]" : "text-gray-400 hover:text-white"}`}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Action Buttons (Right) */}
        <div className="hidden md:flex gap-3">
          <a href="#contact" className="btn-glass">Workshop</a>
          <a href="#contact" className="btn-gold">Join</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#0A0C10] p-6 flex flex-col gap-4 border-b border-white/10"
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