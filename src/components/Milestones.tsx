"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { client } from "@/sanity/client";

const milestones = [
  { year: "2024", title: "Team Founded", status: "COMPLETED" },
  { year: "2025", title: "AIAA DBF Entry", status: "COMPLETED" },
  { year: "2026", title: "SAE Aero Design", status: "COMPLETED" },
  { year: "2027", title: "Next Gen Flight", status: "IN PROGRESS" },
];

export default function Milestones() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    client.fetch(`*[_type == "aboutSection"][0]`).then(setData);
  }, []);

  return (
    <section id="milestones" className="py-20 px-4 max-w-7xl mx-auto">
      <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-16 text-center">
        {data?.milestonesTitle || "MILESTONES"}
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {milestones.map((m, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -4, scale: 1.02 }}
            className="glass-panel p-6"
          >
            <div className="text-[#FFD700] font-mono text-sm mb-2">{m.year}</div>
            <h3 className="text-xl font-bold mb-4">{m.title}</h3>
            <span className="text-[10px] font-mono tracking-widest bg-white/5 border border-gold/20 text-[#FFD700] px-2 py-1 rounded">
              [{m.status}]
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}