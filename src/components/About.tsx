"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { client } from "@/sanity/client";

export default function About() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    client.fetch(`*[_type == "aboutSection"][0]`).then(setData);
  }, []);

  const operations = [
    { title: "Aerodynamics & Design", desc: "Running airfoils through XFLR5, finding static margins, and sizing fuselages in OpenVSP for flight stability before cutting any material." },
    { title: "3D CAD Modeling and Analysis", desc: "Building full assemblies in Fusion 360 and SolidWorks, designing ribs, internal bays, and mounts optimized for field repairs." },
    { title: "Power Systems & Avionics", desc: "Sizing ESCs and motors, soldering flight controllers, and configuring receivers for responsive control." },
    { title: "Hands-On Fabrication", desc: "Cutting foam with precision knives, laying carbon fibre rods for reinforcement, and iron-on filming for durable airframes." }
  ];

  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="eyebrow mb-2">{data?.title || "HOW WE OPERATE"}</div>
      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-16">{data?.mission || "ENGINEERING BEYOND THE CLASSROOM"}</h2>
      
      <div className="grid md:grid-cols-4 gap-6">
        {operations.map((op, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -5 }} 
            className="glass-panel p-6"
          >
            <h4 className="font-bold mb-2 text-white">{op.title}</h4>
            <p className="text-slate-400 text-sm">{op.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}