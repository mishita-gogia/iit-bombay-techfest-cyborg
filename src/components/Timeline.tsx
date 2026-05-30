import React from 'react';
import { TIMELINE } from '../data';
import { TimelineMilestone } from '../types';
import { Share2, Milestone, Hourglass, Landmark } from 'lucide-react';

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'achieved':
      return {
        text: 'Achieved',
        bg: 'bg-emerald-500/10 text-emerald-400 border-white/10',
        dot: 'bg-emerald-400 shadow-[0_0_8px_#10b981]',
      };
    case 'integrating':
      return {
        text: 'Active Integration',
        bg: 'bg-[#00f3ff]/10 text-[#00f3ff] border-white/10 animate-pulse',
        dot: 'bg-[#00f3ff] shadow-[0_0_8px_#00f3ff] animate-ping',
      };
    case 'theoretical':
      return {
        text: 'Theoretical / R&D',
        bg: 'bg-amber-500/10 text-amber-400 border-white/10',
        dot: 'bg-amber-400 shadow-[0_0_8px_#f59e0b]',
      };
    default:
      return {
        text: 'Locked',
        bg: 'bg-white/5 text-white/30 border-white/5',
        dot: 'bg-white/20',
      };
  }
};

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-24 border-t border-white/5 bg-[#050508]/40">
      
      {/* Absolute decorative background element */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none immersive-grid" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-[#bc13fe]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 font-mono text-xs tracking-widest text-white/40 uppercase mb-4 py-1.5 px-4 border border-white/10 rounded-sm bg-white/5">
            <Share2 className="w-3.5 h-3.5 text-[#00f3ff]" />
            <span>Anthropological Transitions</span>
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-white mb-4 tracking-tight uppercase">
            Evolutionary Timeline
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Follow the systemic escalation from standard frail biology into integrated cyborg structures and deep quantum consciousness upload coordinates.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative max-w-4xl mx-auto font-sans">
          {/* Vertical connecting line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#ff00e6] via-[#00f3ff] to-[#bc13fe]/20 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {TIMELINE.map((milestone: TimelineMilestone, idx) => {
              const isEven = idx % 2 === 0;
              const badge = getStatusBadge(milestone.status);

              return (
                <div
                  key={milestone.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Tracker Node (Dot) */}
                  <div className="absolute left-6 md:left-1/2 top-6 w-4 h-4 rounded-full border border-white/10 bg-[#050508] z-10 -translate-x-1/2 flex items-center justify-center">
                    <span className={`w-2 h-2 rounded-full ${badge.dot}`} />
                  </div>

                  {/* Empty space counterpart for centering */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Milestone Card content */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 text-left">
                    <div className="relative group overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md rounded-sm p-6 sm:p-7 shadow-[0_4px_30px_rgba(0,0,0,0.3)] hover:border-[#00f3ff]/30 transition-all duration-300">
                      
                      {/* Active holographic lines on hover */}
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#00f3ff] to-transparent transition-all duration-500 group-hover:w-full" />
                      
                      {/* Metadata tag header line */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 font-mono">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-[#00f3ff] font-bold tracking-wider">{milestone.year}</span>
                          <span className="text-white/20">|</span>
                          <span className="text-[10px] text-white/40 uppercase tracking-widest">{milestone.era}</span>
                        </div>
                        <span className={`text-[9px] px-2.5 py-0.5 rounded-sm border uppercase tracking-widest ${badge.bg}`}>
                          {badge.text}
                        </span>
                      </div>

                      {/* Main Title heading */}
                      <h3 className="font-sans font-bold text-lg text-white mb-3 uppercase tracking-tight">
                        {milestone.title}
                      </h3>

                      {/* Description copy */}
                      <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-5">
                        {milestone.description}
                      </p>

                      {/* Integrations checklist bubbles */}
                      <div>
                        <div className="font-mono text-[9px] text-white/40 uppercase tracking-widest mb-2">Core Component Syncs:</div>
                        <div className="flex flex-wrap gap-1.5">
                          {milestone.integrations.map((item, i) => (
                            <span
                              key={i}
                              className="font-mono text-[9px] text-white/60 bg-[#050508]/60 px-2 py-1 rounded-sm border border-white/10"
                            >
                              + {item}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
