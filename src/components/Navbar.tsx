import React, { useState, useEffect } from 'react';
import { ShieldAlert, Menu, X, Radio, Activity } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cpuUsage, setCpuUsage] = useState(12);

  // Monitor scroll state for styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // CPU load simulation to add high-tech flavor
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage((prev) => {
        const change = Math.floor(Math.random() * 5) - 2;
        const next = prev + change;
        return Math.max(8, Math.min(34, next));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Core', target: 'hero' },
    { name: 'Features', target: 'features' },
    { name: 'Lattice Tech', target: 'technology' },
    { name: 'Diagnostics', target: 'stats' },
    { name: 'Evolution', target: 'timeline' },
    { name: 'Synchronizers', target: 'testimonials' },
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050508]/90 border-b border-[#00f3ff]/20 backdrop-blur-md py-3.5 shadow-[0_4px_30px_rgba(0,243,255,0.08)]'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Immersive UI Gradient Rotated Logo */}
        <div
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 cursor-pointer group"
          id="nav-logo"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-[#00f3ff] via-[#bc13fe] to-[#ff00e6] rounded-sm rotate-45 flex items-center justify-center transition-transform duration-300 group-hover:rotate-90">
            <div className="w-4 h-4 bg-[#050508] rounded-sm"></div>
          </div>
          <span className="text-lg sm:text-xl font-black tracking-tighter uppercase italic text-white">
            Cyborg<span className="text-[#00f3ff]">.OS</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollToSection(link.target)}
              className="font-mono text-[11px] text-white/60 hover:text-[#00f3ff] uppercase tracking-[0.2em] transition-colors duration-200 cursor-pointer relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#00f3ff] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#00f3ff]"></span>
            </button>
          ))}
          <span className="text-pink-500 font-mono text-[10px] tracking-wider animate-pulse hover:text-pink-400 cursor-pointer" onClick={() => scrollToSection('stats')}>[ Live Feed ]</span>
        </div>

        {/* Interactive Stats Dashboard Segment & CTA */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Biometric Status Indicator */}
          <div className="border border-white/10 bg-white/5 rounded px-2.5 py-1.5 flex items-center space-x-2.5 backdrop-blur-sm">
            <Activity className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
            <div className="text-left leading-none">
              <div className="font-mono text-[9px] text-white/40 uppercase tracking-wider">BIO-SYNC</div>
              <div className="font-mono text-[10px] text-emerald-400 font-bold tracking-wider">99.8%</div>
            </div>
          </div>

          {/* Core Load */}
          <div className="border border-white/10 bg-white/5 rounded px-2.5 py-1.5 flex items-center space-x-2.5 backdrop-blur-sm">
            <ShieldAlert className="w-3.5 h-3.5 text-[#00f3ff] animate-pulse" />
            <div className="text-left leading-none">
              <div className="font-mono text-[9px] text-white/40 uppercase tracking-wider">CPU</div>
              <div className="font-mono text-[10px] text-[#00f3ff] font-bold tracking-wider">{cpuUsage}%</div>
            </div>
          </div>

          {/* Initiate Link Border Action */}
          <button
            onClick={() => scrollToSection('features')}
            className="px-5 py-2 border border-[#00f3ff] text-[#00f3ff] font-mono text-[10px] uppercase tracking-widest hover:bg-[#00f3ff]/10 rounded-xs transition-colors duration-200 cursor-pointer"
          >
            Initiate Link
          </button>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-[#00f3ff] focus:outline-none focus:ring-0 p-1"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#050508]/98 border-b border-[#00f3ff]/20 backdrop-blur-xl transition-[height] duration-300 shadow-2xl">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="block w-full text-left font-mono text-[12px] text-white/60 hover:text-[#00f3ff] uppercase tracking-widest py-2 border-b border-white/5"
              >
                {link.name}
              </button>
            ))}

            {/* Mobile Stats Segment */}
            <div className="pt-3 flex flex-col gap-2">
              <div className="border border-white/10 bg-white/5 rounded p-2.5 flex items-center space-x-2.5">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-xs text-white/60">Bio-Sync Mode: <strong className="text-emerald-400 font-medium">99.8%</strong></span>
              </div>
              <div className="border border-white/10 bg-white/5 rounded p-2.5 flex items-center space-x-2.5">
                <ShieldAlert className="w-4 h-4 text-[#00f3ff]" />
                <span className="font-mono text-xs text-white/60">Lattice Load: <strong className="text-[#00f3ff] font-medium">{cpuUsage}%</strong></span>
              </div>
              <button
                onClick={() => scrollToSection('features')}
                className="w-full mt-2 py-2.5 border border-[#00f3ff] text-[#00f3ff] font-mono text-xs text-center uppercase tracking-wider hover:bg-[#00f3ff]/10 transition-colors"
              >
                Initiate Link
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
