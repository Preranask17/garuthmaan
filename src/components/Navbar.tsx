'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  workshopFormUrl?: string;
  joinTeamFormUrl?: string;
  sponsorFormUrl?: string;
}

export default function Navbar({
  workshopFormUrl,
  joinTeamFormUrl,
}: NavbarProps) {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = ['about', 'milestones', 'hangar', 'blogs', 'contact'];
    
    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection('home');
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleJoinClick = () => {
    if (joinTeamFormUrl && joinTeamFormUrl.trim() !== '') {
      window.open(joinTeamFormUrl, '_blank', 'noopener,noreferrer');
    } else {
      alert("There is no link available right now. Please contact the club for details.");
    }
  };

  const getLinkClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `text-[11px] uppercase tracking-widest transition ${
      isActive
        ? 'font-bold text-amber-400'
        : 'font-semibold text-zinc-400 hover:text-amber-400'
    }`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-zinc-900 bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-amber-400/40 bg-black">
            <Image
              src="/logo.png"
              alt="Team Garuthmaan Logo"
              width={40}
              height={40}
              className="object-contain p-0.5"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <span className="text-base font-bold tracking-wider text-white">
            TEAM GARUTHMAAN
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className={getLinkClasses('home')}>
            HOME
          </Link>
          <Link href="#about" className={getLinkClasses('about')}>
            ABOUT
          </Link>
          <Link href="#milestones" className={getLinkClasses('milestones')}>
            MILESTONES
          </Link>
          <Link href="#hangar" className={getLinkClasses('hangar')}>
            HANGAR
          </Link>
          <Link href="#blogs" className={getLinkClasses('blogs')}>
            BLOGS
          </Link>
          <Link href="#contact" className={getLinkClasses('contact')}>
            CONTACT
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {workshopFormUrl && workshopFormUrl.trim() !== '' ? (
            <a
              href={workshopFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-800 bg-[#121212] px-6 py-2.5 text-xs font-semibold text-white transition hover:bg-zinc-800"
            >
              Workshop
            </a>
          ) : null}
          <button
            onClick={handleJoinClick}
            className="rounded-lg bg-[#facc15] px-6 py-2.5 text-xs font-bold text-black transition hover:bg-yellow-400"
          >
            Join
          </button>
        </div>

      </div>
    </header>
  );
}