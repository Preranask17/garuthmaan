"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollAircraftBackground() {
  const { scrollYProgress } = useScroll();
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        style={{ rotateX, rotateY, scale }}
        className="absolute inset-0 flex items-center justify-center opacity-10"
      >
        <svg viewBox="0 0 200 200" className="w-[80vw] h-[80vh] stroke-gold fill-none stroke-[0.5]">
          <path d="M100 20 L20 180 L180 180 Z" />
          <line x1="100" y1="20" x2="100" y2="180" />
        </svg>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0C10]/60 via-[#0A0C10]/90 to-[#0A0C10]" />
    </div>
  );
}