"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="eyebrow text-center mb-2">NO EXPERIENCE REQUIRED. JUST CURIOSITY.</div>
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">GET IN THE WORKSHOP</h2>

      {/* 2-Column Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="glass-panel p-8">
          <h3 className="text-xl font-bold text-white mb-4">Join The Team</h3>
          <p className="text-slate-400 text-sm leading-relaxed">You don't need to be a cad expert or an electronics geek (but if you are, great!). As long as you have an open mind and are willing to learn, you have a place at our fabrication table.</p>
        </div>
        <div className="glass-panel p-8">
          <h3 className="text-xl font-bold text-white mb-4">Sponsors & Partners</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Support directly fuels student projects, tools, and workshop materials. Partner with students who practice real engineering every day, just for the love of it.</p>
        </div>
      </div>

      {/* Direct Contact Bar */}
      <div className="glass-panel p-8 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-sm text-slate-400">Email: </span>
            <a href="mailto:teamgaruthmaam@jyothyit.ac.in" className="text-[#FFD700] hover:underline font-bold">teamgaruthmaam@jyothyit.ac.in</a>
          </div>
          <div className="text-sm text-slate-400">
            Harshini Priya V: <span className="text-white">+91 99808 55637</span> | 
            Achutha A Kaddi: <span className="text-white"> +91 81975 96655</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 pt-8 text-center">
        <p className="text-slate-500 text-xs tracking-widest uppercase">© TEAM GARUTHMAAN — AEROSPACE CLUB. ALL RIGHTS RESERVED.</p>
      </div>
    </section>
  );
}