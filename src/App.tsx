import React from 'react';
import InteractiveBackground from './components/InteractiveBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TechnologySection from './components/Technology';
import Statistics from './components/Statistics';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen text-[#eeeeef] bg-[#070709] overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* 1. Global Interactive Ambient Web Background */}
      <InteractiveBackground />

      {/* 2. Navigation Control Block */}
      <Navbar />

      {/* 3. Main Landing Layout Stream */}
      <main className="relative z-10">
        {/* Section 1: Hero Segment */}
        <Hero />

        {/* Section 2: Features Cards Grid */}
        <Features />

        {/* Section 3: Interactive Lattical Technology specs */}
        <TechnologySection />

        {/* Section 4: Live Telemetry Diagnostics (Animated counters) */}
        <Statistics />

        {/* Section 5: Evolutionary Synthesis Timeline */}
        <Timeline />

        {/* Section 6: Verified Testimonial Interfaces */}
        <Testimonials />
      </main>

      {/* 4. Sub-lattical System Footer */}
      <Footer />
    </div>
  );
}

