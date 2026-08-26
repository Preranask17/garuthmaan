import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Milestones from '@/components/Milestones';
import Gallery from '@/components/Gallery';
import Hangar from '@/components/Hangar';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PaperPlaneWrapper from '@/components/PaperPlaneWrapper';

export default function Home() {
  return (
    <main className="bg-[#0A0C10] text-white min-h-screen relative overflow-x-hidden pt-20">
      <PaperPlaneWrapper />
      <div className="relative z-10">
        <Header/>
        <Hero/>
        <About/>
        <Milestones/>
        <Gallery/>
        <Hangar/>
        <Blogs/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
}