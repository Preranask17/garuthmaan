"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  { title: "Coders", desc: "Developing flight software & simulation." },
  { title: "Builders", desc: "Airframe fabrication & composite layup." },
  { title: "Designers", desc: "CAD, aerodynamics, and structural design." },
  { title: "Pilot Enthusiasts", desc: "RC operations & flight testing." }
];

const tools = ["Fusion 360", "XFLR5", "Soldering", "Foam Cutting", "3D Printing"];

const springTransition = { type: "spring", stiffness: 350, damping: 25 };

const About = () => {
  const [activeRole, setActiveRole] = useState<string | null>(null);

  return (
    <motion.section id="about" className="py-24 max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Role Checklist */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white mb-6">Who Can Join</h3>
          {roles.map(role => (
            <motion.div key={role.title}>
              <motion.button
                onClick={() => setActiveRole(activeRole === role.title ? null : role.title)}
                whileHover={{ scale: 1.025, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={springTransition}
                className={`w-full glass-card p-4 rounded-xl text-left border ${activeRole === role.title ? 'border-gold' : 'border-transparent'}`}
              >
                {role.title}
              </motion.button>
              <AnimatePresence>
                {activeRole === role.title && (
                  <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="text-sm text-slate-400 p-2 italic">{role.desc}</motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <div className="glass-card rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Tools</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map(tool => (
              <motion.div key={tool} whileHover={{ scale: 1.05 }} className="glass-card-gold px-4 py-2 rounded-lg text-sm text-gold border border-gold/20">
                {tool}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="glass-card rounded-3xl p-8 flex flex-col justify-between">
           <h3 className="text-2xl font-bold text-white">Workshop</h3>
           <div className="h-40 glass-card-gold rounded-xl flex items-center justify-center text-gold">Map Placeholder</div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
