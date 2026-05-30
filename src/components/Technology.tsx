import React, { useState } from 'react';
import { BrainCircuit, Sparkles, Network, Gauge, Server, Cpu, Database, Activity, Compass, Network as NetIcon } from 'lucide-react';
import { TECHNOLOGIES } from '../data';
import { Technology } from '../types';

const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'BrainCircuit':
      return <BrainCircuit className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Network':
      return <Network className={className} />;
    case 'Gauge':
      return <Gauge className={className} />;
    case 'Server':
      return <Server className={className} />;
    default:
      return <Cpu className={className} />;
  }
};

const getAccentColor = (id: string, originalColor: string) => {
  switch (id) {
    case 'tech-ai':
      return '#00f3ff';
    case 'tech-robotics':
      return '#ff00e6';
    case 'tech-neural':
      return '#bc13fe';
    default:
      return originalColor;
  }
};

export default function TechnologySection() {
  const [selectedTechId, setSelectedTechId] = useState<string>(TECHNOLOGIES[0].id);

  const activeTech = TECHNOLOGIES.find((t) => t.id === selectedTechId) || TECHNOLOGIES[0];
  const activeColor = getAccentColor(activeTech.id, activeTech.accentColor);

  // Render secondary interactive visual representation based on visual type
  const renderHUDVisual = (type: string, color: string) => {
    const visualColor = getAccentColor(activeTech.id, color);
    
    switch (type) {
      case 'matrix':
        return (
          <div className="relative w-full h-full min-h-[160px] bg-[#050508] rounded-sm border border-white/10 p-3 overflow-hidden font-mono text-[9px] text-[#00f3ff] select-none">
            <div className="absolute top-2 right-2 flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00f3ff] animate-ping"></span>
              <span className="text-[8px] text-white/40">REALTIME_LOGS</span>
            </div>
            <div className="space-y-1 text-left opacity-80 h-32 overflow-hidden scrollbar-none select-none">
              <div className="text-[#00f3ff]">[OK] INITIALIZE LATTICAL_NET</div>
              <div className="text-white/40">[!] SYS_COGNITIVE // SYNC RATIO: 99.82%</div>
              <div className="text-white/40">0x098A: MAPPING NEUROMORPHIC NODES</div>
              <div className="text-emerald-400">[SUCCESS] BRAIN_STREAM_CHANNEL READY</div>
              <div className="text-[#bc13fe]">0xF23B: EMBEDDING MEMORY ADDRESS BUS...</div>
              <div className="text-white/40">INTELLIGENCE COGNITION INFERENCE: PASS</div>
              <div className="text-[#00f3ff]">&gt; active_quants.load_cognitive_weights()</div>
              <div className="text-emerald-400">[SUCCESS] SYNAP_WEIGHTS 512GB BOUNDED</div>
            </div>
          </div>
        );
      case 'grid':
        return (
          <div className="relative w-full h-full min-h-[160px] bg-[#050508] rounded-sm border border-white/10 flex items-center justify-center p-4">
            <div className="absolute top-2 left-2 font-mono text-[8px] text-white/40 uppercase">Kinetic Actuation Vector</div>
            
            {/* Animated skeletal muscle wave line using SVG */}
            <svg className="w-full h-24 stroke-[#ff00e6] fill-none" viewBox="0 0 200 100">
              <rect x="10" y="10" width="180" height="80" rx="2" fill="rgba(255, 0, 230, 0.03)" stroke="rgba(255, 0, 230, 0.15)" strokeWidth="1" />
              <line x1="20" y1="50" x2="180" y2="50" stroke="rgba(255,255,255,0.03)" />
              <line x1="100" y1="20" x2="100" y2="80" stroke="rgba(255,255,255,0.03)" />
              <path
                d="M 20,50 Q 60,10 100,50 T 180,50"
                strokeWidth="2"
                className="animate-[pulse_2s_infinite]"
              />
              <path
                d="M 20,50 Q 60,90 100,50 T 180,50"
                strokeWidth="1.5"
                strokeDasharray="4,4"
              />
              <circle cx="100" cy="50" r="4" fill="#ff00e6" className="animate-ping" />
            </svg>
          </div>
        );
      case 'graph':
        return (
          <div className="relative w-full h-full min-h-[160px] bg-[#050508] rounded-sm border border-white/10 p-3 flex flex-col justify-between">
            <div className="absolute top-2 right-2 font-mono text-[8px] text-[#bc13fe] uppercase tracking-wider">Direct Neural Mapping</div>
            <div className="flex-1 flex items-center justify-center pt-3">
              {/* Point scatter map */}
              <div className="relative w-32 h-20 border border-white/5 rounded-sm overflow-hidden">
                <span className="absolute top-4 left-6 w-2 h-2 bg-[#bc13fe] rounded-full animate-ping"></span>
                <span className="absolute top-4 left-6 w-2 h-2 bg-[#bc13fe] rounded-full"></span>
                
                <span className="absolute bottom-6 right-8 w-2 h-2 bg-[#bc13fe] rounded-full animate-ping"></span>
                <span className="absolute bottom-6 right-8 w-2 h-2 bg-[#bc13fe] rounded-full"></span>

                <span className="absolute top-12 right-12 w-1.5 h-1.5 bg-[#00f3ff] rounded-full"></span>
                <span className="absolute bottom-10 left-10 w-2 h-2 bg-[#ff00e6] rounded-full"></span>

                {/* SVG connection lines in background */}
                <svg className="absolute inset-0 w-full h-full stroke-[#bc13fe]/20 stroke-[0.5]" fill="none">
                  <line x1="24" y1="16" x2="116" y2="72" />
                  <line x1="24" y1="16" x2="40" y2="40" />
                  <line x1="40" y1="40" x2="116" y2="72" />
                  <line x1="116" y1="72" x2="120" y2="16" />
                </svg>
              </div>
            </div>
            <div className="font-mono text-[8px] text-white/40 flex justify-between">
              <span>SYNC_INDEX: 4096 CHANNELS</span>
              <span className="text-[#bc13fe]">ACTIVE: OK</span>
            </div>
          </div>
        );
      case 'radar':
        return (
          <div className="relative w-full h-full min-h-[160px] bg-[#050508] rounded-sm border border-white/10 p-3 flex items-center justify-center">
            <div className="absolute top-2 left-2 font-mono text-[8px] text-emerald-400 uppercase">Soma-Actuation Feedback</div>
            
            {/* Radar scanner sweep visual using SVG */}
            <svg className="w-24 h-24 animate-[spin_8s_linear_infinite]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(16, 185, 129, 0.1)" strokeWidth="1" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="1" />
              <circle cx="50" cy="50" r="15" fill="none" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="1" />
              <line x1="50" y1="5" x2="50" y2="95" stroke="rgba(16, 185, 129, 0.1)" />
              <line x1="5" y1="50" x2="95" y2="50" stroke="rgba(16, 185, 129, 0.1)" />
              <line x1="50" y1="50" x2="80" y2="20" stroke="rgba(16, 185, 129, 0.6)" strokeWidth="1.5" />
            </svg>
            <div className="absolute bottom-2 right-2 font-mono text-[8px] text-emerald-400">FPS: 60 // PING: 0ms</div>
          </div>
        );
      case 'waves':
        return (
          <div className="relative w-full h-full min-h-[160px] bg-[#050508] rounded-sm border border-white/10 p-3 flex flex-col justify-between">
            <div className="absolute top-2 right-2 font-mono text-[8px] text-amber-500 uppercase">Quantum Wave Alignment</div>
            <div className="flex-1 flex items-center justify-center space-x-1.5 pt-4">
              {/* Fluctuating equalizer bands representing qubits */}
              {[40, 80, 55, 95, 30, 75, 45, 60].map((height, idx) => (
                <div
                  key={idx}
                  style={{ height: `${height}%` }}
                  className="w-1.5 bg-amber-500/80 rounded-t animate-[pulse_1.5s_infinite] origin-bottom shadow-[0_0_8px_#f59e0b]"
                />
              ))}
            </div>
            <div className="font-mono text-[8px] text-white/40 text-center uppercase">Qubit state superposition integrity: 99.98%</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="technology" className="relative py-24 border-t border-white/5 bg-[#050508]/40">
      {/* Absolute decorative back glow */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none immersive-grid" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#00f3ff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 font-mono text-xs tracking-widest text-white/40 uppercase mb-4 py-1.5 px-4 border border-white/10 rounded-sm bg-white/5">
            <NetIcon className="w-3.5 h-3.5 text-[#bc13fe] animate-spin" />
            <span>Lattice Hardware Specifications</span>
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-white mb-4 tracking-tight uppercase">
            Our Core Technology Pillars
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Select a specialized module within the physical Hybrid Framework to review precise electrical, mechanical, 
            and neurological performance matrices.
          </p>
        </div>

        {/* Interactive Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Interactive Vert Tab Links */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {TECHNOLOGIES.map((tech: Technology) => {
              const isSelected = tech.id === selectedTechId;
              const techAccentColor = getAccentColor(tech.id, tech.accentColor);
              return (
                <button
                  key={tech.id}
                  onClick={() => setSelectedTechId(tech.id)}
                  className={`w-full text-left p-4 rounded-sm border transition-all duration-300 flex items-center justify-between cursor-pointer focus:outline-none ${
                    isSelected
                      ? 'bg-white/5 border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.5)] scale-[1.01]'
                      : 'bg-[#050508]/40 border-white/5 hover:border-white/10 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-10 h-10 rounded-sm flex items-center justify-center border transition-colors ${
                        isSelected
                          ? 'border-transparent text-white'
                          : 'border-white/10 text-gray-500'
                      }`}
                      style={
                        isSelected
                          ? { backgroundColor: techAccentColor, boxShadow: `0 0 10px ${techAccentColor}80` }
                          : {}
                      }
                    >
                      <IconComponent name={tech.iconName} className="w-4.5 h-4.5" />
                    </div>
                    <div className="text-left">
                      <div className="font-sans font-bold text-sm text-[white]">{tech.name}</div>
                      <div className="font-mono text-[9px] text-white/40 uppercase tracking-widest">{tech.tagline.slice(0, 32)}...</div>
                    </div>
                  </div>
                  
                  {/* Selected Indicator LED */}
                  <div className="flex items-center space-x-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        isSelected ? 'animate-pulse scale-125' : 'opacity-20'
                      }`}
                      style={{ backgroundColor: techAccentColor }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic HUD Diagnostics Display */}
          <div className="lg:col-span-7">
            <div className={`relative overflow-hidden rounded-sm border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300`} style={{ boxShadow: `0 0 30px ${activeColor}15` }}>
              
              {/* HUD corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/20" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-5">
                <div className="text-left">
                  <div className="font-mono text-[10px] tracking-widest text-white/40 uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeColor }}></span>
                    <span>TECH_SECTOR_0{TECHNOLOGIES.indexOf(activeTech) + 1}</span>
                  </div>
                  <h3 className="font-sans font-black text-xl sm:text-2xl text-white mt-1 uppercase">
                    {activeTech.name}
                  </h3>
                </div>
                <div className="px-3 py-1 border border-white/10 bg-[#050508] rounded-sm text-left leading-none font-mono text-[9px]">
                  <span className="text-white/40 uppercase block mb-1">STABLE SECURE_LINK</span>
                  <span style={{ color: activeColor }} className="font-bold">STATUS: STREAMING</span>
                </div>
              </div>

              {/* Specification explanation */}
              <div className="text-left mb-6">
                <div className="font-mono text-[10px] text-white/40 uppercase mb-2">FUNCTIONAL OUTLINE:</div>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-sans">
                  {activeTech.description}
                </p>
              </div>

              {/* Specs & Hardware HUD Display Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                
                {/* Tech specifications sheet */}
                <div className="border border-white/10 bg-[#050508]/60 rounded-sm p-4 text-left">
                  <div className="font-mono text-[9px] text-white/40 uppercase tracking-widest border-b border-white/10 pb-2 mb-3">
                    System Parameters // HW_SPEC
                  </div>
                  <ul className="space-y-2 font-mono text-[10px] text-white/60">
                    {activeTech.specifications.map((spec, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-white/40 font-bold">&#8212;</span>
                        <span className="leading-relaxed">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Simulated dynamic hardware graphic panel */}
                <div className="flex flex-col justify-between">
                  <div className="font-mono text-[9px] text-white/40 uppercase tracking-widest text-left mb-2">
                    Active Vector Visualizer
                  </div>
                  {renderHUDVisual(activeTech.hudVisualType, activeTech.accentColor)}
                </div>

              </div>
              
              {/* HUD footer readout code */}
              <div className="flex justify-between items-center text-[8px] font-mono text-white/30 mt-6 pt-4 border-t border-white/10">
                <span>SYSTEM_ENCRYPT: HYBRID-AES-512</span>
                <span>CORE_LATTICE://{activeTech.id.toUpperCase()}</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
