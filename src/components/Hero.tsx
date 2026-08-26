"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center z-10"
      >
        <div className="text-gold font-mono tracking-[0.5em] uppercase mb-4">Exploring New Frontiers</div>
        <h1 className="text-7xl md:text-9xl font-black text-gold tracking-tighter">TEAM GARUTHMAAN</h1>
      </motion.div>
    </section>
  );
};

export default Hero;