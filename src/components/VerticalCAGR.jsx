import React from 'react'

export default function VerticalCAGR() {
  const industries = [
    { name: 'Healthcare', rate: 33, color: 'teal' },
    { name: 'Gov & Defense', rate: 38, color: 'rose' },
    { name: 'Finance', rate: 29, color: 'teal' },
    { name: 'Manufacturing', rate: 35, color: 'rose' },
    { name: 'Retail', rate: 27, color: 'teal' },
    { name: 'Education', rate: 31, color: 'rose' },
  ]

  return (
    <section className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main CAGR Bar Chart (2 Cols) */}
          <div className="lg:col-span-2 glass-card p-6 sm:p-8 border border-white/10">
            <h2 className="text-3xl font-normal text-white tracking-tight mb-1">
              2030 Vertical CAGR Forecast
            </h2>
            <p className="text-slate-400 text-sm mb-8 font-light">
              Comparing the growth rate of AI adoption across major industries, 2027 – 2030.
            </p>

            <div className="space-y-5">
              {industries.map(ind => (
                <div key={ind.name} className="flex items-center gap-4">
                  <div className="w-32 text-xs font-medium text-slate-300 text-right shrink-0">
                    {ind.name}
                  </div>
                  
                  {/* Progress Track */}
                  <div className="flex-1 h-7 bg-white/5 rounded-full p-1 overflow-hidden relative border border-white/5">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${
                        ind.color === 'teal' ? 'progress-bar-teal' : 'progress-bar-rose'
                      }`}
                      style={{ width: `${(ind.rate / 45) * 100}%` }}
                    />
                  </div>

                  <div className="w-12 text-xs font-mono font-bold text-[#2FC4B7] text-left shrink-0">
                    {ind.rate}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Callouts (1 Col) */}
          <div className="space-y-6 flex flex-col justify-between">
            
            {/* Leadership Outlook Card */}
            <div className="glass-card p-6 border border-white/10 flex-1">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                Leadership Outlook
              </h3>

              <ul className="space-y-4 text-xs font-light text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#2FC4B7]/20 text-[#2FC4B7] flex items-center justify-center font-mono font-bold shrink-0 text-[10px]">1</span>
                  <span><strong className="text-white font-medium">Healthcare</strong> leads in absolute dollar value ($680B market).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#2FC4B7]/20 text-[#2FC4B7] flex items-center justify-center font-mono font-bold shrink-0 text-[10px]">2</span>
                  <span><strong className="text-white font-medium">Finance</strong> reaches full penetration in risk-modeling by 2028.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#2FC4B7]/20 text-[#2FC4B7] flex items-center justify-center font-mono font-bold shrink-0 text-[10px]">3</span>
                  <span><strong className="text-white font-medium">Retail</strong> transitions to fully predictive inventory management.</span>
                </li>
              </ul>
            </div>

            {/* Strategic Tip for 2030 Card */}
            <div className="glass-card p-6 border-l-4 border-l-[#E8B4A0] bg-gradient-to-br from-[#E8B4A0]/10 to-transparent">
              <h4 className="text-sm font-semibold text-[#E8B4A0] uppercase tracking-wider mb-2 font-mono">
                Strategic Tip for 2030
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                The winners of the 2030 AI economy will not sell models — they will sell verifiable outcomes. Shift billing from seat-based to success-based by 2027.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
