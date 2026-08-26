"use client";

import React from "react";
import { motion } from "framer-motion";

const Blogs = () => {
  return (
    <section id="blogs" className="py-24 max-w-7xl mx-auto px-4">
      <div className="eyebrow text-center mb-2">Open Notes for Fellow Builders</div>
      <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white text-center mb-8">THE AERO GUIDES & HANDBOOKS</h3>
      <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-center max-w-3xl mx-auto mb-16">Written by students, for anyone who wants to build. We document what works (and what crashed) so you don't have to start from scratch. Short, direct guides covering tail sizing, wing geometry, XFLR5 analysis, Fusion 360 airframe modeling, and maiden flight checklists.</p>
    </section>
  );
};

export default Blogs;