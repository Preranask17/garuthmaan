import Header from "@/components/Header";
import ScrollAircraftBackground from "@/components/ScrollAircraftBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Milestones from "@/components/Milestones";
import Hangar from "@/components/Hangar";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-[#08090B] text-white">
      <ScrollAircraftBackground />
      
      <div className="relative z-10">
        <Header />
        
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
          <div className="eyebrow mb-4">Students First. Hardware Always.</div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 max-w-3xl">ENGINEERING BEYOND THE CLASSROOM</h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-10">We are a collective of engineering students across different branches with an inordinate passion for flight. We design, test, break, and fly custom RC aircraft—learning practical engineering by actually doing it.</p>
          <div className="flex gap-4">
            <button className="btn-gold">Explore Our Work</button>
            <button className="btn-glass">Meet the Team</button>
          </div>
        </section>

        {/* HOW WE OPERATE */}
        <section className="py-24 px-4 max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">HOW WE OPERATE</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="glass-panel p-6">
              <h4 className="font-bold mb-2">Aerodynamics & Design</h4>
              <p className="text-slate-400 text-sm">Running airfoils through XFLR5, finding static margins, and sizing fuselages in OpenVSP for flight stability before cutting any material.</p>
            </div>
            <div className="glass-panel p-6">
              <h4 className="font-bold mb-2">3D CAD Modeling and Analysis</h4>
              <p className="text-slate-400 text-sm">Building full assemblies in Fusion 360 and SolidWorks, designing ribs, internal bays, and mounts optimized for field repairs.</p>
            </div>
            <div className="glass-panel p-6">
              <h4 className="font-bold mb-2">Power Systems & Avionics</h4>
              <p className="text-slate-400 text-sm">Sizing ESCs and motors, soldering flight controllers, and configuring receivers for responsive control.</p>
            </div>
            <div className="glass-panel p-6">
              <h4 className="font-bold mb-2">Hands-On Fabrication</h4>
              <p className="text-slate-400 text-sm">Cutting foam with precision knives, laying carbon fibre rods for reinforcement, and iron-on filming for durable airframes.</p>
            </div>
          </div>
        </section>
        
        <About/>
        <Milestones/>
        <Hangar/>
        <Blogs/>
        <Contact/>
      </div>
    </main>
  );
}