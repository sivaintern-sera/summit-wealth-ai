import React from 'react'

export default function Solutions() {
  const solutionsData = [
    {
      num: '01',
      title: 'K–12 Education',
      items: [
        'AI literacy and safe-use training',
        'AI workload reduction workshops',
        'AI procurement and vendor review',
        'Department-specific playbooks',
        'Predictive intelligence command center',
        'AI policy development and rollout support',
        'Federal and state grant tracker with alerts'
      ]
    },
    {
      num: '02',
      title: 'Higher Education',
      items: [
        'AI leadership command center',
        'Dropout detector',
        'AI advisor',
        'Workforce readiness meter'
      ]
    },
    {
      num: '03',
      title: 'Small Businesses',
      items: [
        'Support ticket volume and first-contact resolution',
        'Cross-platform data drift and manual orchestration',
        'Supply chain exceptions and predictive intelligence',
        'Revenue leakage detection, mitigation, and agents'
      ]
    },
    {
      num: '04',
      title: 'Professionals',
      items: [
        'Travel planning and multi-step booking agent',
        'Personal finance, subscriptions, and expense agent',
        'Email triage, calendar, and scheduling agent',
        'Autonomous e-commerce, deal finding, and returns agent',
        'Health, wellness, and daily life admin agent'
      ]
    }
  ]

  return (
    <section id="solutions" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-4xl sm:text-5xl font-normal text-white tracking-tight">
            Summit's Solutions
          </h2>
          <p className="text-slate-400 text-base mt-2 font-light">
            Built per sector, scoped to one measurable constraint, and governed before launch.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutionsData.map((sol) => (
            <div
              key={sol.num}
              className="glass-card p-6 border border-white/10 hover:border-[#E8B4A0]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-slate-500 mb-2">
                  {sol.num}
                </div>
                <h3 className="text-2xl font-normal text-white mb-6">
                  {sol.title}
                </h3>

                <ul className="space-y-3">
                  {sol.items.map((item, i) => (
                    <li key={i} className="text-xs text-slate-300 font-light flex items-start gap-2.5">
                      <span className="w-3 h-0.5 bg-[#E8B4A0] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
