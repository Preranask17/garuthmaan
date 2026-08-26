import Header from '@/components/Header';
import ScrollAircraftBackground from '@/components/ScrollAircraftBackground';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Milestones from '@/components/Milestones';
import Hangar from '@/components/Hangar';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-[#0A0C10] text-white min-h-screen relative overflow-x-hidden">
      <ScrollAircraftBackground />
      <div className="relative z-10">
        <Header/>
        <Hero/>
        <About/>
        <Milestones/>
        <Hangar/>
        <Blogs/>
        <Contact/>
      </div>
    </main>
  );
}