import React from 'react';
import { CircuitBoard } from 'lucide-react';
import { FEATURES } from '../data';
import { Feature } from '../types';

const getGlowStyles = (color: string, index: number) => {
  const numStr = `0${index + 1}`;
  
  switch (color) {
    case 'cyan':
      return {
        textAccent: 'text-[#00f3ff]',
        textColorClass: 'text-[#00f3ff]',
        accentBorder: 'border-white/10 group-hover:border-[#00f3ff]/30',
        decorElement: (
          <div className="w-10 h-10 border border-[#00f3ff] mb-4 flex items-center justify-center">
            <div className="w-4 h-4 bg-[#00f3ff] animate-pulse"></div>
          </div>
        ),
        numStr,
      };
    case 'purple':
      return {
        textAccent: 'text-[#bc13fe]',
        textColorClass: 'text-[#bc13fe]',
        accentBorder: 'border-white/10 group-hover:border-[#bc13fe]/30',
        decorElement: (
          <div className="w-10 h-10 border border-[#bc13fe] mb-4 flex items-center justify-center">
            <div className="w-6 h-1 bg-[#bc13fe]"></div>
          </div>
        ),
        numStr,
      };
    case 'rose':
      return {
        textAccent: 'text-[#ff00e6]',
        textColorClass: 'text-[#ff00e6]',
        accentBorder: 'border-white/10 group-hover:border-[#ff00e6]/30',
        decorElement: (
          <div className="w-10 h-10 border border-[#ff00e6] mb-4 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border-2 border-[#ff00e6]"></div>
          </div>
        ),
        numStr,
      };
    default:
      return {
        textAccent: 'text-white/60',
        textColorClass: 'text-white/60',
        accentBorder: 'border-white/10 group-hover:border-white/30',
        decorElement: (
          <div className="w-10 h-10 border border-white/20 mb-4 flex items-center justify-center">
            <div className="w-4 h-4 border border-white/40 rotate-45"></div>
          </div>
        ),
        numStr,
      };
  }
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 border-t border-white/5 bg-[#050508]/80">
      {/* Absolute decorative background grids */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none immersive-grid" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#bc13fe]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 font-mono text-xs tracking-widest text-white/40 uppercase mb-4 py-1.5 px-4 border border-white/10 rounded-sm bg-white/5">
            <CircuitBoard className="w-3.5 h-3.5 text-[#00f3ff] animate-pulse" />
            <span>Integrated Biological Augmentations</span>
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-white mb-4 tracking-tight uppercase">
            Transcend Organic Limits
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Seamlessly integrate direct somatic mesh networks, designed to optimize, defend, and accelerate the organic core system.
          </p>
        </div>

        {/* Feature Cards Grid (Immersive UI Glassmorphism Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((feat: Feature, idx: number) => {
            const styles = getGlowStyles(feat.glowColor, idx);

            return (
              <div
                key={feat.id}
                className={`group relative overflow-hidden bg-white/5 backdrop-blur-md border ${styles.accentBorder} p-5 transition-all duration-300 hover:scale-[1.015] flex flex-col justify-between min-h-[220px] rounded-sm`}
              >
                {/* Floating Absolute Number on top right */}
                <div className={`absolute top-4 right-4 font-mono font-bold text-sm ${styles.textAccent}`}>
                  {styles.numStr}
                </div>

                <div>
                  {/* Neon Custom Shape Placeholder */}
                  {styles.decorElement}

                  {/* Header */}
                  <h3 className="font-bold text-sm uppercase tracking-wider mb-2 text-white">
                    {feat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-white/40 leading-relaxed mb-4">
                    {feat.description}
                  </p>
                </div>

                {/* Status bar */}
                <div className="pt-3 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-white/30 uppercase tracking-wider">
                  <span>LATENCY: 0.08ms</span>
                  <span className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-emerald-400">ACTIVE</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
