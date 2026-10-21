import React from 'react'

const EVIDENCE_ROWS = [
  { label: 'Baseline', desc: 'What was happening before the intervention.' },
  { label: 'Scope', desc: 'The workflow, site, population, or period measured.' },
  { label: 'Result', desc: 'The observed change, including unfavorable findings.' },
  { label: 'Source', desc: 'The system or institution the measure came from.' },
  { label: 'Validation', desc: 'The client owner or independent party that reviewed it.' },
  { label: 'Limits', desc: 'What the result does not establish.' },
]

const PRINCIPLES = [
  { num: '01', title: 'Business case before build', desc: 'We establish the cost of the current state, the decision owner, and the target measure before recommending technology.' },
  { num: '02', title: 'Production over presentation', desc: 'Prototypes are tested against real cases, users, and exceptions. A demonstration is not a deployment.' },
  { num: '03', title: 'Human authority stays visible', desc: 'Escalation, approval, override, and deactivation are designed before launch — not retrofitted.' },
  { num: '04', title: 'Designed for existing operations', desc: 'Systems are built around the tools, permissions, policies, and teams that must operate them.' },
  { num: '05', title: 'Evidence before expansion', desc: 'Every release has a baseline, monitoring plan, decision date, and criteria to scale, revise, or stop.' },
]

const PHASES = [
  { num: '01', title: 'Discover', desc: 'Map the workflow, systems, data, people, exceptions, risks, and current cost.', gate: 'Is the problem material, measurable, and suitable for Summit?' },
  { num: '02', title: 'Design', desc: 'Future workflow, architecture, ownership, controls, integration, and measurement method.', gate: 'Does expected value justify the cost, effort, and risk?' },
  { num: '03', title: 'Deploy', desc: 'One bounded release against real cases, with named reviewers, monitoring, and rollback.', gate: 'Is performance reliable enough to remain live or expand?' },
  { num: '04', title: 'Measure', desc: 'Compare with the agreed baseline: value, quality, adoption, exception rates, and risk.', gate: 'Scale, revise, transfer, or stop?' },
]

const TEAM = [
  { role: 'Principal — Applied AI', desc: 'Workflow diagnosis, solution architecture, deployment governance' },
  { role: 'Principal — Revenue Intelligence', desc: 'Leakage quantification, controls design, finance validation' },
  { role: 'Practice Lead — Workforce', desc: 'Demand forecasting, credentialing operations, employer coordination' },
  { role: 'Named collaborator', desc: 'Legal, immigration, securities, or clinical specialist, engaged per scope' },
]

export default function AboutPage() {
  return (
    <div className="relative">
      <div className="radial-glow-top" />
      <div className="radial-glow-left" />

      {/* Intro */}
      <section className="pt-16 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[11px] font-mono tracking-widest uppercase text-[#E8B4A0] mb-4">
                About Summit Wealth
              </div>
              <h1 className="text-4xl sm:text-5xl font-normal text-white tracking-tight leading-tight mb-6">
                Senior by design.
                <br />
                <em className="font-serif italic text-[#E8B4A0]">Specialist</em> by need.
              </h1>
              <p className="text-slate-300 text-sm font-light leading-relaxed mb-4">
                Summit removes the operational constraints that block growth — broken workflows, preventable revenue loss, and shortages of workforce capacity — and builds measurable systems to address them.
              </p>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                Engagements are led by the principals accountable for the recommendation. Where the work requires engineering, education, healthcare, economic analysis, legal, immigration, securities, credentialing, or community expertise, the relevant specialist is identified before the engagement begins.
              </p>
            </div>

            <div className="glass-card border border-white/10 p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white mb-1">No borrowed credibility. No invented outcomes.</h3>
              <p className="text-xs text-slate-400 font-light mb-6">Every published outcome will include:</p>
              <div className="space-y-4">
                {EVIDENCE_ROWS.map((row) => (
                  <div key={row.label} className="grid grid-cols-[110px_1fr] gap-4 pb-3 border-b border-white/5 last:border-0 last:pb-0">
                    <div className="text-[11px] font-mono tracking-widest uppercase text-[#2FC4B7]">{row.label}</div>
                    <div className="text-xs text-slate-300 font-light leading-relaxed">{row.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight mb-3">
            A smaller first move. A clearer path to value.
          </h2>
          <p className="text-slate-400 text-sm font-light mb-10 max-w-2xl leading-relaxed">
            The fastest way to waste an AI, revenue, or workforce investment is to begin with a solution before defining the constraint.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PRINCIPLES.map((p) => (
              <div key={p.num} className="glass-card p-5 border border-white/10">
                <div className="text-xs font-mono text-[#E8B4A0] mb-3 font-bold">{p.num}</div>
                <h4 className="text-base font-semibold text-white mb-2 leading-snug">{p.title}</h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight mb-3">
            From constraint to controlled result.
          </h2>
          <p className="text-slate-400 text-sm font-light mb-10 max-w-2xl leading-relaxed">
            Each phase produces a decision-ready artifact. A decision gate is not a delay — it is how Summit prevents an uncertain pilot from becoming an expensive operating dependency.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PHASES.map((p) => (
              <div key={p.num} className="glass-card p-6 border border-white/10 flex flex-col justify-between hover:border-[#2FC4B7]/40 transition-all">
                <div>
                  <div className="text-xs font-mono text-[#2FC4B7] mb-2 font-bold">PHASE {p.num}</div>
                  <h3 className="text-2xl font-normal text-white mb-3">{p.title}</h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed mb-5">{p.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-[11px] text-slate-300 font-light">
                    <span className="text-[#E8B4A0] font-semibold block mb-0.5">Gate —</span>
                    {p.gate}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-2">
            <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight">
              The people behind the work.
            </h2>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
              Published only after verification
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {TEAM.map((person) => (
              <div key={person.role} className="glass-card border border-white/10 overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-white/[0.04] to-transparent relative flex items-end p-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    verified portrait →
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-white mb-1.5">{person.role}</h4>
                  <p className="text-[11px] text-slate-400 font-light leading-relaxed">{person.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-slate-500 font-light leading-relaxed max-w-3xl">
            Names, roles, credentials, licenses, partnerships, client references, and collaborator relationships appear publicly only after confirmation. Summit's AI governance method is aligned to — not certified by —{' '}
            <a
              href="https://www.nist.gov/itl/ai-risk-management-framework"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2FC4B7] underline hover:text-white transition-colors"
            >
              the NIST AI Risk Management Framework
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
