"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0C10] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Col 1: Branding */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-full object-cover border border-[#FFD700]" />
            <div>
                <div className="text-white font-bold">TEAM GARUTHMAAN</div>
                <div className="text-[10px] text-[#FFD700] font-mono tracking-widest uppercase">AEROSPACE CLUB</div>
            </div>
          </div>
          <div className="text-[#FFD700] text-xs font-mono tracking-widest uppercase my-3">STUDENTS FIRST. HARDWARE ALWAYS.</div>
          <p className="text-gray-400 text-sm max-w-xs">A student engineering collective dedicated to designing, testing, and flying custom RC aircraft.</p>
        </div>

        {/* Col 2: Navigation */}
        <div>
          <h4 className="text-white font-mono text-sm uppercase font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {["About", "Milestones", "Hangar", "Blogs", "Contact"].map(link => (
              <li key={link}><a href={`#${link.toLowerCase()}`} className="hover:text-[#FFD700] transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Col 3: Resources */}
        <div>
          <h4 className="text-white font-mono text-sm uppercase font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {["Aero Guides & Handbooks", "XFLR5 Analysis Notes", "CAD Assemblies", "Flight Checklists"].map(res => (
              <li key={res}><a href="#" className="hover:text-[#FFD700] transition-colors">{res}</a></li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact */}
        <div>
          <h4 className="text-white font-mono text-sm uppercase font-semibold mb-4">Contact</h4>
          <a href="mailto:teamgaruthmaam@jyothyit.ac.in" className="font-mono text-sm text-[#FFD700] hover:underline block mb-2">teamgaruthmaam@jyothyit.ac.in</a>
          <div className="text-sm text-gray-400 space-y-1 mb-4">
            <p>Harshini Priya V: +91 99808 55637</p>
            <p>Achutha A Kaddi: +91 81975 96655</p>
            <p className="text-xs pt-2">Jyothy Institute of Technology, Bangalore, Karnataka.</p>
          </div>
          <div className="flex gap-2">
            {["INSTAGRAM", "LINKEDIN", "YOUTUBE"].map(social => (
              <a key={social} href="#" className="border border-white/10 px-3 py-1 text-xs font-mono text-gray-400 hover:border-[#FFD700] hover:text-[#FFD700] transition-all rounded">{social}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 mt-12 pt-8 flex justify-between items-center text-xs text-gray-500 font-mono">
        <p>© 2026 Team Garuthmaan. All rights reserved.</p>
        <p>Jyothy Institute of Technology</p>
      </div>
    </footer>
  );
}