import React from 'react'

export default function ImplementationStrategy() {
  const stages = [
    {
      title: 'Diagnose',
      desc: 'Map the workflow, systems, data, exceptions, and current cost with the people who own the number.',
      artifact: 'Current-state map and quantified problem statement'
    },
    {
      title: 'Design',
      desc: 'Define the future workflow, architecture, ownership, controls, and measurement method.',
      artifact: 'Solution design, business case, and risk register'
    },
    {
      title: 'Govern',
      desc: 'Set permissions, business rules, review gates, evaluation criteria, and the off switch before build.',
      artifact: 'Governance charter and release criteria'
    },
    {
      title: 'Integrate',
      desc: 'Release one bounded implementation against real cases with named reviewers and rollback.',
      artifact: 'Working release, runbook, training, audit trail'
    },
    {
      title: 'Measure',
      desc: 'Compare against the agreed baseline: value, quality, adoption, exception rates, and risk.',
      artifact: 'Outcome report and scale-or-stop recommendation'
    }
  ]

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-4xl sm:text-5xl font-normal text-white tracking-tight">
            Our implementation strategy
          </h2>
          <p className="text-slate-400 text-base mt-2 font-light">
            Five stages, each ending in a decision-ready artifact. You can stop at any gate.
          </p>
        </div>

        {/* 5 Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stages.map((stg, i) => (
            <div
              key={stg.title}
              className="glass-card p-6 border border-white/10 flex flex-col justify-between hover:border-[#2FC4B7]/40 transition-all"
            >
              <div>
                <div className="text-xs font-mono text-[#2FC4B7] mb-2 font-bold">
                  STAGE 0{i + 1}
                </div>
                <h3 className="text-2xl font-normal text-white mb-4">
                  {stg.title}
                </h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed mb-6">
                  {stg.desc}
                </p>
              </div>

              {/* Artifact Badge */}
              <div className="pt-4 border-t border-white/10">
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-[11px] text-slate-300 font-light">
                  <span className="text-[#E8B4A0] font-semibold block mb-0.5">Artifact —</span>
                  {stg.artifact}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
