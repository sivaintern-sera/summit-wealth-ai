import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function Hero({ onNavigate }) {
  return (
    <section id="home" className="relative pt-12 pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="radial-glow-top" />
      <div className="radial-glow-left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Forecast Period Tag */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E8B4A0]/30 bg-[#E8B4A0]/10 text-[#E8B4A0] text-xs font-mono tracking-widest uppercase shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8B4A0] animate-pulse" />
            Future Forecast Period: 2027 – 2030
          </div>
        </div>

        {/* Hero Title */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.05]">
            The $15 Trillion <br />
            <span className="font-serif italic font-normal text-[#E8B4A0] drop-shadow-sm">
              AI Economic Shift
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            By 2030, AI is projected to contribute 14% to global GDP. We are moving past the 2026 deployment phase into a decade of industrial-scale cognitive automation.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold btn-rose-glow text-[#050B18] transition-all"
            >
              Schedule a Demo
            </button>
            <a
              href="#solutions"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-medium btn-teal-outline transition-all"
            >
              Explore Our Capabilities
            </a>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 sm:mt-24">
          
          {/* Metric 1 */}
          <div className="glass-card p-6 border-l-2 border-l-[#2FC4B7] glass-card-teal">
            <div className="text-xs font-mono tracking-wider text-[#2FC4B7] uppercase mb-2">
              2030 Target Revenue
            </div>
            <div className="text-4xl font-bold text-white tracking-tight mb-1">
              $2,840B
            </div>
            <div className="text-xs text-slate-400 font-light">
              Annual global AI software
            </div>
          </div>

          {/* Metric 2 */}
          <div className="glass-card p-6 border-l-2 border-l-[#E8B4A0]/50">
            <div className="text-xs font-mono tracking-wider text-slate-400 uppercase mb-2">
              Compute Efficiency
            </div>
            <div className="text-4xl font-bold text-white tracking-tight mb-1">
              12x
            </div>
            <div className="text-xs text-slate-400 font-light">
              Energy-to-inference gain
            </div>
          </div>

          {/* Metric 3 */}
          <div className="glass-card p-6 border-l-2 border-l-white/20">
            <div className="text-xs font-mono tracking-wider text-slate-400 uppercase mb-2">
              Edge Nodes 2030
            </div>
            <div className="text-4xl font-bold text-white tracking-tight mb-1">
              15.4B
            </div>
            <div className="text-xs text-slate-400 font-light">
              Active IoT AI probes
            </div>
          </div>

          {/* Metric 4 */}
          <div className="glass-card p-6 border-l-2 border-l-[#E8B4A0]">
            <div className="text-xs font-mono tracking-wider text-[#E8B4A0] uppercase mb-2">
              Avg ROI 2030
            </div>
            <div className="text-4xl font-bold text-white tracking-tight mb-1">
              8.2x
            </div>
            <div className="text-xs text-slate-400 font-light">
              Mature sector benchmark
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
