import React from 'react'

const READINESS_REGISTER = [
  { item: 'Project business plan and job-creation methodology', owner: 'Economist (independent)', status: 'In review' },
  { item: 'Offering documents and disclosure package', owner: 'Securities counsel', status: 'Not started' },
  { item: 'Immigration eligibility and filing strategy', owner: 'Immigration counsel', status: 'In review' },
  { item: 'Construction and site readiness evidence', owner: 'Project sponsor', status: 'Complete' },
  { item: 'Public claim and marketing review', owner: 'Summit coordination', status: 'Blocked — pending counsel' },
]

const STATUS_STYLES = {
  'In review': 'text-[#E8B4A0] bg-[#E8B4A0]/10 border-[#E8B4A0]/30',
  'Not started': 'text-slate-400 bg-white/5 border-white/10',
  Complete: 'text-[#2FC4B7] bg-[#2FC4B7]/10 border-[#2FC4B7]/30',
  'Blocked — pending counsel': 'text-red-300 bg-red-400/10 border-red-400/30',
}

export default function WorkforcePage({ onNavigate }) {
  return (
    <div className="relative">
      <div className="radial-glow-top" />
      <div className="radial-glow-left" />

      {/* Hero */}
      <section className="pt-16 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E8B4A0]/30 bg-[#E8B4A0]/10 text-[#E8B4A0] text-xs font-mono tracking-widest uppercase mb-6">
                Capital · Credentialing · Capacity
              </div>
              <h1 className="text-4xl sm:text-5xl font-normal text-white tracking-tight leading-tight">
                Build the capacity required to grow responsibly.
              </h1>
              <p className="text-slate-300 text-base font-light mt-6 leading-relaxed max-w-xl">
                Summit coordinates employer demand, workforce forecasting, credentialing, candidate pathways, project readiness, disclosure, and the independent professionals required for regulated processes.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 rounded-full text-sm font-semibold btn-rose-glow transition-all"
                >
                  Discuss Employer Needs
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 rounded-full text-sm font-medium btn-teal-outline transition-all"
                >
                  Request an Introductory Review
                </button>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 relative">
              <img
                src="/assets/45568048-63c3-404d-a249-6331c6c85cbf.png"
                alt="Illustrative pathway map"
                className="w-full h-auto"
              />
              <div className="absolute bottom-2 right-3 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                Illustrative pathway map — not client data
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice cards */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-card p-6 sm:p-8 border border-white/10">
              <div className="text-[11px] font-mono tracking-widest uppercase text-[#2FC4B7] mb-3">
                Practice — Healthcare Workforce
              </div>
              <h3 className="text-xl sm:text-2xl font-normal text-white mb-3">
                A reliable view of demand, pipeline, and risk.
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                Employers rarely hold one picture of role-and-site demand, credential milestones, onboarding status, and retention risk. Summit builds it, then keeps it operating.
              </p>
              <ul className="space-y-2.5">
                {[
                  'Role-and-site workforce forecast',
                  'Credentialing operating model with milestone owners',
                  'Ethical recruitment standards and candidate disclosure',
                  'Onboarding and retention risk reporting',
                ].map((i) => (
                  <li key={i} className="text-xs text-slate-300 font-light flex items-start gap-2.5">
                    <span className="w-3 h-0.5 bg-[#2FC4B7] mt-2 shrink-0" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 sm:p-8 border border-white/10">
              <div className="text-[11px] font-mono tracking-widest uppercase text-[#E8B4A0] mb-3">
                Practice — EB-5 Project Readiness
              </div>
              <h3 className="text-xl sm:text-2xl font-normal text-white mb-3">
                Documentation, disclosure, and defined professional roles.
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                Project information, professional responsibilities, and publication controls are usually fragmented across parties. Summit coordinates readiness — it does not replace licensed counsel.
              </p>
              <ul className="space-y-2.5">
                {[
                  'Readiness register of documents and owners',
                  'Unresolved-question log with escalation path',
                  'Publication controls before any public claim',
                  'Coordination with independent licensed professionals',
                ].map((i) => (
                  <li key={i} className="text-xs text-slate-300 font-light flex items-start gap-2.5">
                    <span className="w-3 h-0.5 bg-[#E8B4A0] mt-2 shrink-0" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Readiness register */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card border border-white/10 p-6 sm:p-8 overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-white tracking-tight">
                Readiness register — illustrative
              </h2>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                Sample structure, not a client project
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[560px]">
                <thead>
                  <tr className="text-[11px] font-mono tracking-widest uppercase text-slate-500 border-b border-white/10">
                    <th className="pb-3 pr-4 font-medium">Item</th>
                    <th className="pb-3 pr-4 font-medium">Professional Owner</th>
                    <th className="pb-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {READINESS_REGISTER.map((row) => (
                    <tr key={row.item} className="border-b border-white/5 last:border-0">
                      <td className="py-3.5 pr-4 text-sm text-slate-200 font-light">{row.item}</td>
                      <td className="py-3.5 pr-4 text-sm text-[#2FC4B7] font-light">{row.owner}</td>
                      <td className="py-3.5">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-medium border ${STATUS_STYLES[row.status]}`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence + boundary */}
      <section className="py-12 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-card p-6 sm:p-8 border border-white/10">
              <div className="text-[11px] font-mono tracking-widest uppercase text-slate-500 mb-4">
                External market evidence — not Summit results
              </div>
              <div className="text-4xl sm:text-5xl font-normal text-white font-serif mb-2">1.9M</div>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                healthcare openings projected per year, on average, from 2024 through 2034.
              </p>
              <p className="text-[10px] text-slate-500 font-light mt-3">
                Source: U.S. Bureau of Labor Statistics, 2025
              </p>
            </div>

            <div className="glass-card p-6 sm:p-8 border border-white/10">
              <div className="text-[11px] font-mono tracking-widest uppercase text-slate-500 mb-4">
                Boundary note
              </div>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Summit provides information, readiness, operational coordination, and documentation standards. Legal, immigration, securities, licensure, and investment determinations remain with the appropriate licensed professionals and government agencies. USCIS administers the EB-5 program and determines immigration eligibility and adjudication.
              </p>
              <p className="text-xs text-slate-400 font-light mt-4">
                Summit does not guarantee immigration outcomes, visa availability, or investment returns.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
