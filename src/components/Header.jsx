import React, { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'education', label: 'AI in Education' },
  { id: 'automations', label: 'AI Automations' },
  { id: 'workforce', label: 'EB-5 & Workforce' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function Header({ page, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const go = (id) => {
    onNavigate(id)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0 })
  }

  return (
    <header className="sticky top-0 z-50 bg-[#050B18]/45 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.06)]">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#0A1628] via-[#10223B] to-[#0A1628] py-2 text-center text-xs sm:text-sm font-medium border-b border-white/5 px-4 text-slate-300">
        Have an expensive workflow, revenue gap, or workforce constraint?{' '}
        <button
          onClick={() => go('contact')}
          className="text-[#E8B4A0] hover:underline inline-flex items-center gap-1 font-semibold transition-colors"
        >
          Start with a 30-minute Operational Constraint Review
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <button onClick={() => go('home')} className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E8B4A0] to-[#C98B75] flex items-center justify-center shadow-lg shadow-[#E8B4A0]/20 group-hover:scale-105 transition-transform">
              <div className="w-4 h-4 rounded-xs bg-[#050B18]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
              <span className="text-[#E8B4A0]">S</span><span className="font-serif italic font-normal">t</span><span className="text-[#E8B4A0]">R</span><span className="font-serif italic font-normal">y</span><span className="text-[#E8B4A0]">K</span><span className="font-serif italic font-normal">r</span> <span className="font-serif italic font-normal text-[#E8B4A0]">Ai</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all backdrop-blur-sm ${
                  page === item.id
                    ? 'font-semibold text-white bg-[#2FC4B7]/15 border border-[#2FC4B7]/30 shadow-[0_0_20px_rgba(47,196,183,0.15)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => go('contact')}
              className="px-5 py-2.5 rounded-full text-xs font-semibold btn-rose-glow transition-all duration-300"
            >
              Discuss a Business Constraint
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A1426] border-b border-white/10 px-4 pt-2 pb-6 space-y-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                page === item.id ? 'text-white bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => go('contact')}
            className="block w-full text-center mt-4 px-5 py-3 rounded-full text-sm font-semibold btn-rose-glow"
          >
            Discuss a Business Constraint
          </button>
        </div>
      )}
    </header>
  )
}
