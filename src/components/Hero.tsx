"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { client } from "@/sanity/client";

const Hero = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    client.fetch(`*[_type == "homeSection"][0]`).then(setData);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="eyebrow mb-4">{data?.tagline || "Students First. Hardware Always."}</div>
      <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 max-w-3xl">{data?.title || "ENGINEERING BEYOND THE CLASSROOM"}</h1>
      <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-10">{data?.description || "We are a collective of engineering students across different branches with an inordinate passion for flight. We design, test, break, and fly custom RC aircraft—learning practical engineering by actually doing it."}</p>
      <div className="flex gap-4">
        <button className="btn-gold">{data?.ctaWork || "Explore Our Work"}</button>
        <button className="btn-glass">{data?.ctaTeam || "Meet the Team"}</button>
      </div>
    </section>
  );
};

export default Hero;