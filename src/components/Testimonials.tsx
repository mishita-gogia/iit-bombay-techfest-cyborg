import React from 'react';
import { TESTIMONIALS } from '../data';
import { Testimonial } from '../types';
import { Quote, Activity, RefreshCw, MessageSquare } from 'lucide-react';

const getBiometricBadge = (status: string) => {
  switch (status) {
    case 'OPTIMAL':
      return 'text-emerald-400 bg-emerald-500/10 border-white/10';
    case 'STABLE':
      return 'text-[#00f3ff] bg-[#00f3ff]/10 border-white/10';
    case 'OVERCLOCKED':
      return 'text-[#ff00e6] bg-[#ff00e6]/10 border-white/10 animate-pulse';
    default:
      return 'text-white/30 bg-white/5 border-white/5';
  }
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 border-t border-white/5 bg-[#050508]/40">
      
      {/* Background flare overlays */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none immersive-grid" />
      <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[350px] bg-[#00f3ff]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 font-mono text-xs tracking-widest text-white/40 uppercase mb-4 py-1.5 px-4 border border-white/10 rounded-sm bg-white/5">
            <MessageSquare className="w-3.5 h-3.5 text-[#00f3ff]" />
            <span>Synchronizer Transmissions</span>
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-white mb-4 tracking-tight uppercase">
            Transmissions
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Listen to verified field testimonials from somatic operators actively working in neural-link mode, aerospace operations, and micro-surgery.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial: Testimonial) => {
            const bioClass = getBiometricBadge(testimonial.biometricStatus);

            return (
              <div
                key={testimonial.id}
                className="group relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md rounded-sm p-6 sm:p-7 shadow-[0_4px_30px_rgba(0,0,0,0.3)] hover:border-[#00f3ff]/30 transition-all duration-300"
              >
                
                {/* Visual HUD grid element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00f3ff]/[0.01] bg-[radial-gradient(rgba(0,243,255,0.15)_1px,transparent_1px)] bg-[size:10px_10px] rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <Quote className="w-8 h-8 text-[#00f3ff]/10 group-hover:text-[#00f3ff]/20 absolute top-6 right-6 transition-colors duration-200" />

                {/* Main Quote Column */}
                <p className="text-white/80 text-sm leading-relaxed text-left font-sans italic mb-8 relative z-10">
                  "{testimonial.quote}"
                </p>

                {/* Bio HUD Metadata Grid */}
                <div className="border border-white/10 bg-[#050508]/60 rounded-sm p-3.5 mb-6 text-left relative z-10">
                  <div className="grid grid-cols-3 gap-2 font-mono text-[9px] text-white/40">
                    <div className="leading-tight">
                      <div className="uppercase tracking-widest">AUG_LEVEL</div>
                      <div className="text-white font-bold mt-1 uppercase tracking-normal">{testimonial.augmentationLevel}</div>
                    </div>
                    <div className="leading-tight">
                      <div className="uppercase tracking-widest">SYNC_RATE</div>
                      <div className="text-[#00f3ff] font-bold mt-1">{testimonial.syncRate}</div>
                    </div>
                    <div className="leading-tight">
                      <div className="uppercase tracking-widest">BIOMETRIC</div>
                      <div className="mt-1">
                        <span className={`inline-block px-1.5 py-0.5 rounded-sm border text-[8px] font-bold tracking-widest ${bioClass}`}>
                          {testimonial.biometricStatus}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Header Block */}
                <div className="flex items-center space-x-3.5 border-t border-white/10 pt-5 text-left relative z-10">
                  {/* Glowing cyber avatar ring */}
                  <div className="relative w-11 h-11 rounded-full p-0.5 bg-[#050508] border border-white/10 flex items-center justify-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#050508] shadow-[0_0_8px_#10b981]" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-white uppercase">{testimonial.name}</h4>
                    <span className="font-mono text-[10px] text-white/40 block mt-0.5">{testimonial.role}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
