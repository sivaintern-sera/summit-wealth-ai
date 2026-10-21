import React from 'react'

export function CTASection({ onNavigate }) {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="glass-card p-10 sm:p-16 text-center border-2 border-[#E8B4A0]/30 relative overflow-hidden bg-gradient-to-b from-[#E8B4A0]/10 via-transparent to-transparent">

          <div className="radial-glow-top" />

          <h2 className="text-4xl sm:text-6xl font-normal text-white tracking-tight leading-tight max-w-3xl mx-auto mb-6">
            Bring us the constraint you cannot afford to leave unresolved.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            A 30-minute demo and problem-definition conversation. We determine the problem, owner, urgency, and whether Summit is the right firm — before proposing anything.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-9 py-4 rounded-full text-sm font-semibold btn-rose-glow text-[#050B18] transition-all"
            >
              Schedule a Demo
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-9 py-4 rounded-full text-sm font-medium btn-teal-outline transition-all"
            >
              Send Us the Problem
            </button>
          </div>

          <p className="text-xs font-mono text-slate-400 mt-6">
            No prepared brief is required. Two or three sentences about the current problem are enough.
          </p>

        </div>

      </div>
    </section>
  )
}

export function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#030712] border-t border-white/10 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="md:col-span-2 space-y-3">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E8B4A0] to-[#C98B75] flex items-center justify-center">
                <div className="w-4 h-4 rounded-xs bg-[#050B18]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                Summit <span className="font-serif italic font-normal text-[#E8B4A0]">Wealth</span>
              </span>
            </button>
            <p className="text-xs text-slate-400 font-light max-w-md leading-relaxed">
              Applied intelligence · Revenue clarity
              <br />
              Workforce capacity · Evidence before claims
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-mono text-[#E8B4A0] uppercase tracking-wider mb-4 font-semibold">
              Services
            </h4>
            <ul className="space-y-2 text-xs font-light text-slate-400">
              <li><button onClick={() => onNavigate('automations')} className="hover:text-white transition-colors">AI Automations</button></li>
              <li><button onClick={() => onNavigate('automations')} className="hover:text-white transition-colors">Custom AI Agents</button></li>
              <li><button onClick={() => onNavigate('workforce')} className="hover:text-white transition-colors">EB-5 & Workforce</button></li>
            </ul>
          </div>

          {/* Firm */}
          <div>
            <h4 className="text-xs font-mono text-[#E8B4A0] uppercase tracking-wider mb-4 font-semibold">
              Firm
            </h4>
            <ul className="space-y-2 text-xs font-light text-slate-400">
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">About</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">Evidence standard</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-[#E8B4A0]">
            <span>Legal</span>
            <span className="text-slate-500">·</span>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Accessibility</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a>
          </div>
          <div className="text-xs font-mono text-slate-500">
            © {new Date().getFullYear()} Summit Wealth AI Inc. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  )
}
