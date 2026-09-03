"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";

const hangarImages = [
  { id: 1, src: "/Hangar/photo1.jpeg" }, { id: 2, src: "/Hangar/photo2.jpeg" },
  { id: 3, src: "/Hangar/photo3.jpeg" }, { id: 4, src: "/Hangar/photo4.jpeg" },
  { id: 5, src: "/Hangar/photo5.jpeg" }, { id: 6, src: "/Hangar/photo6.jpeg" },
  { id: 7, src: "/Hangar/photo7.jpeg" }, { id: 8, src: "/Hangar/photo8.jpeg" },
  { id: 9, src: "/Hangar/photo9.jpeg" }, { id: 10, src: "/Hangar/photo10.jpeg" },
  { id: 11, src: "/Hangar/photo11.jpeg" },
];

export default function Hangar() {
  const [selected, setSelected] = useState<number | null>(null);
  const [sanityImages, setSanityImages] = useState<any[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const query = `*[_type == "hangarPhoto"] | order(publishedAt desc)`;
        const data = await client.fetch(query);
        setSanityImages(data);
      } catch (err) {
        console.warn("Sanity fetch failed, using local assets", err);
      }
    };
    fetchPhotos();
  }, []);

  const getGridClasses = (type: string | undefined, i: number) => {
    if (sanityImages.length > 0) {
      switch(type) {
        case "hero": return "md:col-span-8 md:row-span-2";
        case "tall": return "md:col-span-4 md:row-span-2";
        case "banner": return "md:col-span-7 md:row-span-1";
        default: return "md:col-span-3 md:row-span-1";
      }
    }
    const patterns = [
      "md:col-span-8 md:row-span-2", "md:col-span-4 md:row-span-2",
      "md:col-span-6 md:row-span-1", "md:col-span-3 md:row-span-1",
      "md:col-span-3 md:row-span-1", "md:col-span-7 md:row-span-1",
      "md:col-span-5 md:row-span-1"
    ];
    return patterns[i % 7];
  };

  const images = sanityImages.length > 0 ? sanityImages : hangarImages;

  return (
    <section id="hangar" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="eyebrow text-center mb-2">THE HANGAR</div>
      <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white text-center mb-16">A treasure trove of planes that were built…</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 auto-rows-[220px] grid-flow-row-dense">
        {images.map((item: any, i: number) => (
          <motion.div 
            key={item._id || item.id}
            whileHover={{ scale: 1.02 }}
            className={`relative overflow-hidden rounded-lg cursor-pointer border border-[#FFD700]/20 hover:border-[#FFD700]/70 transition-all duration-300 ${sanityImages.length > 0 ? getGridClasses(item.aspectRatio, i) : getGridClasses("default", i)}`}
            onClick={() => setSelected(i)}
          >
            <Image 
                src={sanityImages.length > 0 ? urlFor(item.image).url() : item.src} 
                alt="Aircraft" 
                fill 
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" 
                onError={(e) => (e.currentTarget.src = "/default-aero.jpg")} 
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0C10]/95 backdrop-blur-2xl"
            onClick={() => setSelected(null)}
          >
            <motion.div className="relative p-0 max-w-5xl w-full" onClick={e => e.stopPropagation()}>
              <button className="absolute -top-12 right-0 text-white text-2xl z-10" onClick={() => setSelected(null)}>✕</button>
              <div className="relative aspect-video rounded-none overflow-hidden">
                <Image 
                    src={sanityImages.length > 0 ? urlFor(images[selected].image).url() : images[selected].src} 
                    alt="Aircraft" 
                    fill 
                    className="object-contain" 
                    onError={(e) => (e.currentTarget.src = "/default-aero.jpg")} 
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}