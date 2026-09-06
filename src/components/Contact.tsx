"use client";

import React from "react";

interface ContactProps {
  joinTeamFormUrl?: string;
  sponsorFormUrl?: string;
}

export default function Contact({ joinTeamFormUrl, sponsorFormUrl }: ContactProps) {
  const handleJoinClick = () => {
    if (joinTeamFormUrl && joinTeamFormUrl.trim() !== '') {
      window.open(joinTeamFormUrl, '_blank', 'noopener,noreferrer');
    } else {
      alert("There is no link available right now. Please contact the club for details.");
    }
  };

  const handleSponsorClick = () => {
    if (sponsorFormUrl && sponsorFormUrl.trim() !== '') {
      window.open(sponsorFormUrl, '_blank', 'noopener,noreferrer');
    } else {
      alert("There is no link available right now. Please contact the club for details.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="eyebrow text-center mb-2">NO EXPERIENCE REQUIRED. JUST CURIOSITY.</div>
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">GET IN THE WORKSHOP</h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
        <div className="glass-panel p-6 rounded-lg flex flex-col">
          <h3 className="text-lg font-bold text-white mb-2">Join The Team</h3>
          <p className="text-xs text-gray-300 leading-relaxed mb-4 flex-grow">You don&apos;t need to be a cad expert or an electronics geek. As long as you have an open mind and are willing to learn, you have a place at our fabrication table.</p>
          <button onClick={handleJoinClick} className="border border-white/20 bg-white/5 text-gray-300 text-xs font-mono font-semibold px-4 py-2 rounded-md transition-all duration-300 hover:border-[#FFD700] hover:bg-[#FFD700] hover:text-black self-start">Join The Team</button>
        </div>
        <div className="glass-panel p-6 rounded-lg flex flex-col">
          <h3 className="text-lg font-bold text-white mb-2">Sponsors & Partners</h3>
          <p className="text-xs text-gray-300 leading-relaxed mb-4 flex-grow">Support directly fuels student projects, tools, and workshop materials. Partner with students who practice real engineering every day.</p>
          <button onClick={handleSponsorClick} className="border border-white/20 bg-white/5 text-gray-300 text-xs font-mono font-semibold px-4 py-2 rounded-md transition-all duration-300 hover:border-[#FFD700] hover:bg-[#FFD700] hover:text-black self-start">Become a Sponsor</button>
        </div>
      </div>
    </section>
  );
}