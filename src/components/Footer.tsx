import React, { useState } from 'react';
import { Github, Twitter, Linkedin, Radio, Send, ShieldAlert, Cpu } from 'lucide-react';

export default function Footer() {
  const [emailAddress, setEmailAddress] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailAddress.trim()) return;
    setSubscribed(true);
    setEmailAddress('');
    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#050508] pt-16 pb-12 overflow-hidden">
      
      {/* Absolute backglow vector */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none immersive-grid" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#00f3ff]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 font-sans">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-white/10 pb-12">
          
          <div className="md:col-span-4 text-left">
            {/* Logo */}
            <div className="flex items-center space-x-2.5 mb-5 cursor-pointer group">
              <Radio className="w-5.5 h-5.5 text-[#00f3ff] animate-pulse" />
              <span className="font-sans font-black tracking-widest text-white flex items-center gap-1 text-base sm:text-lg uppercase">
                HYBRID<span className="text-[#00f3ff]">.NET</span>
              </span>
            </div>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
              Forging the ultimate alliance between human synaptic intellect and localized exascale quantum computing. 
              The biological limitation ends now.
            </p>
            {/* Social media connections */}
            <div className="flex space-x-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-sm bg-[#050508] border border-white/10 flex items-center justify-center hover:border-[#00f3ff] hover:text-[#00f3ff] text-white/40 transition-colors duration-200"
                aria-label="GitHub Page"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-sm bg-[#050508] border border-white/10 flex items-center justify-center hover:border-[#bc13fe] hover:text-[#bc13fe] text-white/40 transition-colors duration-200"
                aria-label="Twitter Page"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-sm bg-[#050508] border border-white/10 flex items-center justify-center hover:border-[#ff00e6] hover:text-[#ff00e6] text-white/40 transition-colors duration-200"
                aria-label="LinkedIn Page"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2 text-left">
            <h4 className="font-mono text-[10px] text-white uppercase tracking-widest font-black mb-4">// Lattice Sectors</h4>
            <ul className="space-y-2.5 font-mono text-[11px] text-white/40">
              <li>
                <a onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#00f3ff] transition-colors cursor-pointer">
                  _Core Link
                </a>
              </li>
              <li>
                <a onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#00f3ff] transition-colors cursor-pointer">
                  _Augmentation Features
                </a>
              </li>
              <li>
                <a onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#00f3ff] transition-colors cursor-pointer">
                  _Lattice Tech Specs
                </a>
              </li>
              <li>
                <a onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#00f3ff] transition-colors cursor-pointer">
                  _Telemetry Diagnostics
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 text-left">
            <h4 className="font-mono text-[10px] text-white uppercase tracking-widest font-black mb-4">// Firmware Support</h4>
            <ul className="space-y-2.5 font-mono text-[11px] text-white/40">
              <li>
                <span className="text-white/20 block leading-tight">Sector Gateway:</span>
                <span className="text-white/60">sector9-shanghai.hybrid.net</span>
              </li>
              <li>
                <span className="text-white/20 block leading-tight">Quantum Net Address:</span>
                <span className="text-white/60">quantum-sublattice://node-883A</span>
              </li>
              <li>
                <span className="text-white/20 block leading-tight">Support Node Link:</span>
                <span className="text-white/60">support@hybrid-neural.net</span>
              </li>
            </ul>
          </div>

          {/* Subscribing to direct neural broadcast */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-mono text-[10px] text-white uppercase tracking-widest font-black mb-4">// Broadcast subscription</h4>
            <p className="text-white/60 text-xs leading-relaxed mb-4">
              Link your address to receive automated system updates on firmware, neural patches, and cybernetic unlocks.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="relative flex items-center bg-[#050508] border border-white/10 focus-within:border-[#00f3ff]/30 rounded-sm p-1">
                <input
                  type="email"
                  required
                  placeholder="neuro-addr@node.xyz"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  className="flex-1 bg-transparent text-white text-xs font-mono outline-none border-none max-w-[170px] pl-2 focus:ring-0 placeholder:text-white/20"
                />
                <button
                  type="submit"
                  className="p-2 bg-[#00f3ff]/20 hover:bg-[#00f3ff]/30 text-[#00f3ff] rounded-sm transition-colors cursor-pointer"
                  aria-label="Subscribe Sync Link"
                >
                  <Send className="w-3 h-3" />
                </button>
              </div>
              {subscribed && (
                <div className="font-mono text-[9px] text-[#00f3ff] leading-none mt-1 animate-pulse flex items-center space-x-1 uppercase tracking-widest">
                  <span className="w-1 h-1 bg-[#00f3ff] rounded-full inline-block animate-ping" />
                  <span>SYNCHRONIZED: address linked</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Lower row footer credentials */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-white/30 font-mono text-[10px] text-center">
          <div className="flex items-center space-x-2">
            <Cpu className="w-3.5 h-3.5 text-[#00f3ff]/40" />
            <span>&copy; {currentYear} HYBRID.NET // UNIFIED CONSCIOUSNESS ALLIANCE</span>
          </div>
          <div className="flex items-center space-x-2.5">
            <span className="hover:text-white transition-all cursor-pointer">SECURITY PROTOCOLS</span>
            <span>&middot;</span>
            <span className="hover:text-white transition-all cursor-pointer">WETWARE PRIVACY</span>
            <span>&middot;</span>
            <span className="hover:text-white transition-all cursor-pointer">COGNITIVE COMPLIANCE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
