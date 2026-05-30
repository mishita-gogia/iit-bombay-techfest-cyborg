import React, { useState } from 'react';
import { ChevronRight, Cpu, Terminal, Radio } from 'lucide-react';

export default function Hero() {
  const [terminalInput, setTerminalInput] = useState('');
  const [logs, setLogs] = useState<string[]>([
    'INITIATING LATTICE CONNECTION...',
    'NEURO-LINK: ESTABLISHED (COM-9)',
    'BIO-SYNAP INTEGRITY: 99.82%',
    'Ready for cognitive enhancement query.',
  ]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const cmd = terminalInput.trim().toLowerCase();
    let reply = `SYSTEM_ERR: Command "${cmd}" unknown. Use 'help'.`;

    if (cmd === 'help') {
      reply = 'SUPPORTED: help | sync | diagnostics | overclock | quantum';
    } else if (cmd === 'sync') {
      reply = 'SYNCHRONIZING: wetware cortical calibration initiated... Done.';
    } else if (cmd === 'diagnostics') {
      reply = 'ACTIVE INDICES: reflex=0.08ms, bandwidth=840TB/s, sync=optimal';
    } else if (cmd === 'overclock') {
      reply = 'WARNING: Nanite adrenaline release requires somatic approval... Approved.';
    } else if (cmd === 'quantum') {
      reply = 'COMPUTING: Localization states resolved across 256 physical qubits.';
    }

    setLogs((prev) => [...prev, `usr@hybrid:~$ ${terminalInput}`, reply]);
    setTerminalInput('');
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#00f3ff]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#bc13fe]/5 rounded-full blur-[100px] -z-10" />

      {/* Background Cyber-Grid for Hero area */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none immersive-grid"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Texts */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10 relative">
          {/* Big Underlying Watermark Text */}
          <div className="absolute -left-16 -top-24 text-[130px] sm:text-[180px] font-black text-white/[0.03] select-none pointer-events-none tracking-tighter uppercase leading-none">
            HYBRID
          </div>

          {/* Protocol Tagline */}
          <h2 className="text-[12px] uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[#00f3ff] mb-4 font-mono font-bold">
            Protocol 0.4.1 // Human-AI Collaboration
          </h2>

          <h1 className="font-sans text-5xl sm:text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight mb-6 uppercase">
            The Future <br/>is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] via-[#bc13fe] to-[#ff00e6] relative drop-shadow-[0_0_15px_rgba(0,243,255,0.25)]">
              Hybrid
            </span>
          </h1>

          <p className="text-white/60 text-base sm:text-lg max-w-xl mb-8 leading-relaxed font-sans border-l-2 border-[#bc13fe] pl-6">
            Seamlessly integrate neural architecture with quantum processing. Establish a high-fidelity
            neural link with localized quantum clusters, transcending the biological limit through surgical cybernetic refinement.
          </p>

          {/* CTA Buttons - SKEWED */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
            <button
              onClick={() => {
                const spec = document.getElementById('features');
                spec?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-[#00f3ff] text-black font-black uppercase tracking-tighter text-sm skew-x-[-10deg] shadow-[0_4px_25px_rgba(0,243,255,0.3)] hover:shadow-[0_4px_35px_rgba(0,243,255,0.5)] transition-all duration-300 hover:scale-[1.03] flex items-center justify-center gap-2 cursor-pointer rounded-xs"
            >
              Access the Matrix <ChevronRight className="w-4 h-4 text-black" />
            </button>
            <button
              onClick={() => {
                const tech = document.getElementById('technology');
                tech?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 border border-white/20 hover:border-[#00f3ff]/40 text-white font-bold uppercase tracking-tighter text-sm skew-x-[-10deg] bg-transparent hover:bg-white/5 transition-all duration-300 cursor-pointer text-center rounded-xs"
            >
              Whitepaper
            </button>
          </div>

          {/* Interactive Micro Terminal Shell */}
          <div className="w-full max-w-md hidden sm:block border border-white/5 bg-black/40 backdrop-blur-md rounded-lg p-4 font-mono text-[11px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)] relative group">
            <div className="absolute top-1 right-2 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f3ff] opacity-60 animate-ping"></span>
              <span className="text-[9px] text-[#52525b]">SYS_ACTIVE</span>
            </div>
            <div className="flex items-center space-x-2 border-b border-white/5 pb-2 mb-3">
              <Terminal className="w-3.5 h-3.5 text-[#00f3ff]" />
              <span className="text-gray-400 font-bold uppercase tracking-wider text-[10px]">Cortical Shell Diagnostics</span>
            </div>
            <div className="space-y-1 text-left text-[#00f3ff]/80 max-h-24 overflow-y-auto mb-3 scrollbar-none">
              {logs.map((log, i) => (
                <div key={i} className="leading-5">
                  {log}
                </div>
              ))}
            </div>
            <form onSubmit={handleCommandSubmit} className="flex items-center space-x-2 border-t border-white/5 pt-2">
              <span className="text-white/40 font-semibold">usr@hybrid:~$</span>
              <input
                type="text"
                placeholder="type 'help' for protocols..."
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                className="flex-1 bg-transparent text-gray-200 outline-none border-none p-0 focus:ring-0 placeholder:text-gray-700 caret-[#00f3ff] font-mono text-[11px]"
              />
            </form>
          </div>
        </div>

        {/* Cyber Holographic Illustration Display */}
        <div className="lg:col-span-5 flex justify-center items-center z-10 w-full relative">
          {/* Decorative Floating Label from Immersive UX */}
          <div className="absolute -right-16 top-1/2 -rotate-90 origin-right text-[9px] text-white/5 uppercase tracking-[0.8em] pointer-events-none font-mono">
            NEURAL_DYNAMICS_ESTABLISHED_2026
          </div>

          <div className="relative w-full max-w-[280px] sx:max-w-[340px] md:max-w-[400px] aspect-square rounded-lg border border-[#00f3ff]/15 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl p-4 md:p-6 shadow-[0_12px_44px_rgba(0,0,0,0.8)] flex justify-center items-center group">
            
            {/* Ambient scanning lines (overlay effect) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(0,243,255,0.02),rgba(188,19,254,0.01),rgba(255,0,230,0.02))] bg-[length:100%_4px,6px_100%] pointer-events-none rounded-lg z-20"></div>

            {/* Glowing framing brackets */}
            <div className="absolute -top-1.5 -left-1.5 w-6 h-6 border-t-2 border-l-2 border-[#00f3ff] rounded-tl-sm shadow-[0_0_10px_#00f3ff]"></div>
            <div className="absolute -top-1.5 -right-1.5 w-6 h-6 border-t-2 border-r-2 border-[#00f3ff] rounded-tr-sm shadow-[0_0_10px_#00f3ff]"></div>
            <div className="absolute -bottom-1.5 -left-1.5 w-6 h-6 border-b-2 border-l-2 border-[#00f3ff] rounded-bl-sm shadow-[0_0_10px_#00f3ff]"></div>
            <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 border-b-2 border-r-2 border-[#00f3ff] rounded-br-sm shadow-[0_0_10px_#00f3ff]"></div>

            {/* Simulated target lock element */}
            <div className="absolute top-4 left-4 font-mono text-[8px] text-[#00f3ff]/60 leading-none">
              COORD_LOC: 49.332-901<br />
              LOCK: SECURE
            </div>
            
            {/* Animated Scanning Laser Sweep Line */}
            <div className="absolute left-[5%] right-[5%] w-[90%] h-[1.5px] bg-gradient-to-r from-transparent via-[#00f3ff] to-transparent shadow-[0_0_12px_#00f3ff] animate-[scan-line_4s_ease-in-out_infinite] z-20"></div>

            {/* Holographic Cyborg image generated inside skill */}
            <div className="relative rounded-sm overflow-hidden border border-white/10 w-full h-full bg-[#050508] flex items-center justify-center">
              <img
                src="/src/assets/images/cyborg_hologram_1780085964332.png"
                alt="Cyborg Neural Interface Hologram"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              />
              
              {/* Overlay dynamic code noise details */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#050508]/80 border border-white/5 backdrop-blur-md p-2.5 rounded font-mono text-[9px] text-white/60 leading-tight text-left select-none">
                <div className="flex justify-between text-[#00f3ff] border-b border-white/5 pb-1 mb-1 font-bold">
                  <span>BIO_QUANTUM_LATTICE_CORE</span>
                  <span>SYNC_CAL_99.12</span>
                </div>
                <div>SYNAPTIC_MAP_OCT: OK</div>
                <div>EXA_REASONER_COGNITIVE: SECURE // COM-LINK</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
