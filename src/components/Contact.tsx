"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-4">
      <div className="eyebrow text-center mb-2">No Experience Required. Just Curiosity.</div>
      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white text-center mb-16">GET IN THE WORKSHOP</h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="glass-panel p-8">
            <h3 className="text-xl font-bold mb-4">Join The Team</h3>
            <p className="text-slate-400 text-sm">You don't need to be a cad expert or an electronics geek (but if you are, great!). As long as you have an open mind and are willing to learn, you have a place at our fabrication table.</p>
        </div>
        <div className="glass-panel p-8">
            <h3 className="text-xl font-bold mb-4">Sponsors & Partners</h3>
            <p className="text-slate-400 text-sm">Support directly fuels student projects, tools, and workshop materials. Partner with students who practice real engineering every day, just for the love of it.</p>
        </div>
      </div>
      
      <div className="glass-panel p-8 max-w-2xl mx-auto text-center">
        <h4 className="font-bold mb-4">Contact</h4>
        <p className="text-gold mb-2">teamgaruthmaam@jyothyit.ac.in</p>
        <p className="text-slate-400 text-sm">Harshini Priya V: +91 99808 55637</p>
        <p className="text-slate-400 text-sm">Achutha A Kaddi: +91 81975 96655</p>
      </div>
    </section>
  );
};

export default Contact;