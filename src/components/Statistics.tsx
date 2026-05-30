import React, { useEffect, useState } from 'react';
import { STATISTICS } from '../data';
import { Cpu, Terminal, Radio, ShieldAlert, Wifi } from 'lucide-react';

export default function Statistics() {
  const [sync, setSync] = useState(0);
  const [latency, setLatency] = useState(10);
  const [bandwidth, setBandwidth] = useState(0);
  const [population, setPopulation] = useState(0);

  // Counter animation loop
  useEffect(() => {
    let startTime: number | null = null;
    const duration = 1500; // 1.5s total duration

    const animateCounters = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Interpolations
      setSync(Number((progress * 99.82).toFixed(2)));
      // Latency counts down from 10ms to 0.08ms
      setLatency(Number((10 - progress * (10 - 0.08)).toFixed(2)));
      setBandwidth(Number((progress * 840).toFixed(0)));
      setPopulation(Number((progress * 12.4).toFixed(1)));

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    const frameId = requestAnimationFrame(animateCounters);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const getStatClass = (color: string) => {
    switch (color) {
      case 'cyan': return { text: 'text-[#00f3ff]', stroke: 'stroke-[#00f3ff]', bg: 'bg-[#00f3ff]/10', border: 'border-white/10 group-hover:border-[#00f3ff]/30', barBg: 'bg-[#00f3ff]' };
      case 'purple': return { text: 'text-[#bc13fe]', stroke: 'stroke-[#bc13fe]', bg: 'bg-[#bc13fe]/10', border: 'border-white/10 group-hover:border-[#bc13fe]/30', barBg: 'bg-[#bc13fe]' };
      case 'rose': return { text: 'text-[#ff00e6]', stroke: 'stroke-[#ff00e6]', bg: 'bg-[#ff00e6]/10', border: 'border-white/10 group-hover:border-[#ff00e6]/30', barBg: 'bg-[#ff00e6]' };
      case 'emerald': return { text: 'text-emerald-400', stroke: 'stroke-emerald-500', bg: 'bg-emerald-500/10', border: 'border-white/10 group-hover:border-emerald-500/30', barBg: 'bg-emerald-400' };
      default: return { text: 'text-[#00f3ff]', stroke: 'stroke-[#00f3ff]', bg: 'bg-[#00f3ff]/10', border: 'border-white/10', barBg: 'bg-[#00f3ff]' };
    }
  };

  return (
    <section id="stats" className="relative py-24 border-t border-white/5 bg-[#050508]/80">
      
      {/* Background radial overlays */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none immersive-grid" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#00f3ff]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 font-mono text-xs tracking-widest text-white/40 uppercase mb-4 py-1.5 px-4 border border-white/10 rounded-sm bg-white/5">
            <ShieldAlert className="w-3.5 h-3.5 text-[#ff00e6] animate-pulse" />
            <span>Planetary Performance Overviews</span>
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-white mb-4 tracking-tight uppercase">
            Telemetry Dashboard
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Real-time biometric data points aggregate across millions of global client nodes operating on our decentralized quantum mesh.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {STATISTICS.map((stat) => {
            const sc = getStatClass(stat.neonColor);
            
            // Map the interpolated counts
            let displayValue: string | number = '';
            if (stat.id === 'stat-sync') displayValue = sync;
            else if (stat.id === 'stat-latency') displayValue = latency;
            else if (stat.id === 'stat-power') displayValue = bandwidth;
            else if (stat.id === 'stat-population') displayValue = population;

            return (
              <div
                key={stat.id}
                className={`group relative overflow-hidden bg-white/5 backdrop-blur-md border ${sc.border} p-5 flex flex-col justify-between rounded-sm transition-all duration-300 hover:scale-[1.015]`}
              >
                {/* HUD technical markers */}
                <span className="absolute top-4 right-4 font-mono font-black text-[10px] text-white/20">
                  {stat.id === 'stat-sync' ? '01' : stat.id === 'stat-latency' ? '02' : stat.id === 'stat-power' ? '03' : '04'}
                </span>

                <div className="text-left mb-6">
                  {/* Glowing tag label */}
                  <span className={`text-[10px] font-mono tracking-widest uppercase font-bold block mb-2 ${sc.text}`}>
                    // {stat.label}
                  </span>

                  {/* Counter Value */}
                  <div className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2 flex items-baseline">
                    <span className="drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] font-bold">
                      {displayValue}
                    </span>
                    <span className="text-sm font-normal text-white/40 ml-1 uppercase">
                      {stat.suffix}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-white/40 text-xs leading-relaxed font-sans mt-3">
                    {stat.description}
                  </p>
                </div>

                {/* Cyber progress/meter loader */}
                <div>
                  <div className="flex justify-between items-center font-mono text-[9px] text-white/30 mb-2 uppercase tracking-wider">
                    <span>SECTOR_ALIGNMENT</span>
                    <span>{stat.progress}%</span>
                  </div>
                  <div className="h-1 w-full bg-[#050508] rounded-xs overflow-hidden">
                    <div
                      style={{ width: `${stat.progress}%` }}
                      className={`h-full transition-all duration-1000 ${sc.barBg}`}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Faux Dashboard HUD terminal block at bottom */}
        <div className="mt-6 border border-white/10 bg-white/5 backdrop-blur-md p-4 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <Cpu className="w-5 h-5 text-[#00f3ff] animate-spin" style={{ animationDuration: '6s' }} />
            <div className="leading-tight">
              <div className="font-mono text-xs text-white">Hybrid.net Decentralized Validator Core</div>
              <div className="font-mono text-[9px] text-white/40 uppercase tracking-widest">BLOCK_LEVEL: 88,409 // SIGNA_SECURE</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest font-bold">ALL GLOBAL NODES ONLINE</span>
          </div>
        </div>

      </div>
    </section>
  );
}
