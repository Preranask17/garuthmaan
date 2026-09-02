"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const joinInterests = ["CAD", "Aerodynamics", "Electronics", "Flying"];

export default function Contact() {
  const [modal, setModal] = useState<"join" | "sponsor" | null>(null);

  return (
    <section id="contact" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="eyebrow text-center mb-2">NO EXPERIENCE REQUIRED. JUST CURIOSITY.</div>
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">GET IN THE WORKSHOP</h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
        <div className="glass-panel p-6 rounded-lg flex flex-col">
          <h3 className="text-lg font-bold text-white mb-2">Join The Team</h3>
          <p className="text-xs text-gray-300 leading-relaxed mb-4 flex-grow">You don't need to be a cad expert or an electronics geek. As long as you have an open mind and are willing to learn, you have a place at our fabrication table.</p>
          <button onClick={() => setModal("join")} className="border border-white/20 bg-white/5 text-gray-300 text-xs font-mono font-semibold px-4 py-2 rounded-md transition-all duration-300 hover:border-[#FFD700] hover:bg-[#FFD700] hover:text-black self-start">Join The Team</button>
        </div>
        <div className="glass-panel p-6 rounded-lg flex flex-col">
          <h3 className="text-lg font-bold text-white mb-2">Sponsors & Partners</h3>
          <p className="text-xs text-gray-300 leading-relaxed mb-4 flex-grow">Support directly fuels student projects, tools, and workshop materials. Partner with students who practice real engineering every day.</p>
          <button onClick={() => setModal("sponsor")} className="border border-white/20 bg-white/5 text-gray-300 text-xs font-mono font-semibold px-4 py-2 rounded-md transition-all duration-300 hover:border-[#FFD700] hover:bg-[#FFD700] hover:text-black self-start">Become a Sponsor</button>
        </div>
      </div>
      
      <AnimatePresence>
        {modal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0C10]/90 backdrop-blur-2xl" onClick={() => setModal(null)}>
            <motion.div className="glass-panel p-8 max-w-md w-full" onClick={e => e.stopPropagation()}>
              <h3 className="text-xl font-bold mb-4">{modal === "join" ? "Join Application" : "Sponsorship Inquiry"}</h3>
              <form className="space-y-4">
                <input placeholder="Name" className="w-full bg-white/5 p-2 rounded" />
                <input placeholder="Email" className="w-full bg-white/5 p-2 rounded" />
                {modal === "join" && <select className="w-full bg-white/5 p-2 rounded">{joinInterests.map(i => <option key={i}>{i}</option>)}</select>}
                <a href={`mailto:teamgaruthmaam@jyothyit.ac.in`} className="btn-gold block text-center">Submit</a>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}