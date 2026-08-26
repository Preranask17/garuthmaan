"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const sanitizeText = (str: string): string => {
  if (!str) return "";
  return str
    .replace(/<!\[CDATA\[/gi, "")        .replace(/\]\]>/gi, "")
    .replace(/<[^>]*>/g, "") // strip HTML tags
    .replace(/&#8217;|&#39;|&#8216;/g, "'")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&#8212;|&#8211;/g, "—")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .trim();
};

const defaultGuides = [
  { title: "XFLR5 Airfoil Selection Guide", tag: "AERODYNAMICS", brief: "How we calculate neutral points and size main wings.", link: "#" },
  { title: "Fusion 360 Airframe Modeling", tag: "CAD & 3D", brief: "Designing ribs, internal bays, and spar slots.", link: "#" },
  { title: "Maiden Flight Setup", tag: "AVIONICS", brief: "ESCs sizing, motor thrust testing, and config.", link: "#" },
  { title: "Carbon Fiber Layup", tag: "BUILD", brief: "Composite techniques for lightweight airframes.", link: "#" }
];

export default function Blogs() {
  const [posts, setPosts] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/api/substack");
        const result = await response.json();
        if (result.success && result.posts.length > 0) {
          setPosts(result.posts.map((p: any) => ({ 
            ...p, 
            tag: "SUBSTACK", 
            brief: sanitizeText(p.snippet),
            title: sanitizeText(p.title)
          })));
        } else {
          setPosts(defaultGuides);
        }
      } catch (e) {
        setPosts(defaultGuides);
      }
    };
    fetchArticles();
  }, []);

  const visiblePosts = posts.slice(currentIndex, currentIndex + 3);

  return (
    <section id="blogs" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="eyebrow text-center mb-2">OPEN NOTES FOR FELLOW BUILDERS</div>
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">THE AERO GUIDES & HANDBOOKS</h2>

      {/* Carousel */}
      <div className="relative flex items-center gap-4">
        <button onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))} className="glass-panel p-2 rounded-full hover:bg-white/10"><ChevronLeft /></button>
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
          {visiblePosts.map((post, i) => (
            <motion.div key={i} whileHover={{ y: -4 }} className="glass-panel rounded-xl overflow-hidden flex flex-col">
              <img src={post.image || "/default-aero.jpg"} alt={post.title} className="h-40 w-full object-cover" />
              <div className="p-6 flex-grow">
                <span className="text-[10px] font-mono tracking-widest text-[#FFD700] mb-2 block">[{post.tag}]</span>
                <h4 className="font-bold text-white mb-2">{post.title}</h4>
                <p className="text-slate-400 text-xs mb-4">{post.brief}</p>
              </div>
              <a href={post.link} target="_blank" className="mx-6 mb-6 bg-[#FFD700] text-black font-semibold text-sm px-4 py-2 rounded-full text-center">Read Guide →</a>
            </motion.div>
          ))}
        </div>

        <button onClick={() => setCurrentIndex(Math.min(posts.length - 3, currentIndex + 1))} className="glass-panel p-2 rounded-full hover:bg-white/10"><ChevronRight /></button>
      </div>

      <div className="text-center mt-12">
        <button onClick={() => setIsModalOpen(true)} className="bg-[#FFD700] text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-400 transition-all">View All Blogs</button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-[#0A0C10]/90 backdrop-blur-2xl"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-4xl max-h-[80vh] rounded-3xl border border-white/15 bg-[#0B0D12]/95 backdrop-blur-2xl p-8 overflow-y-auto relative z-10"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-white"><X /></button>
              <h2 className="text-3xl font-bold mb-8">All Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map((post, i) => (
                  <div key={i} className="glass-panel p-4">
                    <h4 className="font-bold mb-2">{post.title}</h4>
                    <a href={post.link} target="_blank" className="text-[#FFD700] text-sm">Read Guide →</a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}