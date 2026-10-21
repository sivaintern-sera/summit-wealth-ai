import React from 'react'

const CONSTRAINTS_IN = ['Time lost in workflows', 'Revenue lost between systems', 'Capacity lost to workforce gaps']
const OUTCOMES_OUT = ['Faster cycle time', 'Protected revenue', 'Greater service capacity', 'Traceable decisions']
const OPERATING_LAYER = ['Diagnose', 'Design', 'Govern', 'Integrate', 'Measure']

const ENTRY_POINTS = [
  {
    num: '01',
    tag: 'Intake & Re-keying',
    title: 'Stop typing the same record twice.',
    desc: 'Requests arrive by email and form, then staff re-enter the same information into two or three systems with no reliable view of what has stalled.',
    deliverable: 'One documented workflow with a time baseline, automation architecture, review points, and implementation estimate.',
    cta: 'Identify an Automation',
  },
  {
    num: '02',
    tag: 'Classification & Routing',
    title: 'Send each case to the right owner, first time.',
    desc: 'Triage depends on tenure and memory. Misrouted work is discovered late, and exception handling is invisible to the people accountable for it.',
    deliverable: 'Routing rule set with confidence thresholds, human review queue, and exception reporting.',
    cta: 'Review a Workflow',
  },
  {
    num: '03',
    tag: 'Follow-up & Escalation',
    title: 'Close the gap where value leaks out.',
    desc: 'Renewals, unbilled work, and stalled cases depend on someone remembering. Nobody owns the follow-up, so revenue quietly ages out.',
    deliverable: 'Quantified opportunity register validated with finance and the operational owner.',
    cta: 'Find Revenue Leakage',
  },
  {
    num: '04',
    tag: 'Custom AI Agents',
    title: 'Task-specific agents, on approved knowledge only.',
    desc: 'Employees cannot reliably find approved knowledge or complete multistep work across systems without leaving the sanctioned path.',
    deliverable: 'Agent charter: approved sources, permissions, tools, escalation, evaluation, and release criteria.',
    cta: 'Design an Agent Use Case',
  },
]

const GOVERNANCE_PILLARS = [
  { num: '01', title: 'Permissions', desc: 'Role-based access to systems and data, defined before build.' },
  { num: '02', title: 'Business rules', desc: 'Explicit boundaries on what the system may recommend or change.' },
  { num: '03', title: 'Review gates', desc: 'A named human owner for every consequential decision.' },
  { num: '04', title: 'Monitoring', desc: 'Audit record of request, context, output, reviewer, and resolution.' },
  { num: '05', title: 'Rollback', desc: 'An accessible off switch and a documented path back.' },
]

export default function AutomationsPage({ onNavigate }) {
  return (
    <div className="relative">
      <div className="radial-glow-top" />
      <div className="radial-glow-left" />

      {/* Hero */}
      <section className="pt-16 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2FC4B7]/30 bg-[#2FC4B7]/10 text-[#2FC4B7] text-xs font-mono tracking-widest uppercase mb-6">
                Applied Intelligence · Governed Deployment
              </div>
              <h1 className="text-4xl sm:text-5xl font-normal text-white tracking-tight leading-tight">
                Automate the work that quietly costs you the most.
              </h1>
              <p className="text-slate-300 text-base font-light mt-6 leading-relaxed max-w-xl">
                Summit finds the repetitive operational work draining hours from your team — then builds automations with permissions, business rules, review gates, monitoring, and rollback, measured against a baseline agreed before a line of code is written.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 rounded-full text-sm font-semibold btn-rose-glow transition-all"
                >
                  Book an Operational Constraint Review
                </button>
                <a
                  href="#capabilities"
                  className="px-6 py-3.5 rounded-full text-sm font-medium btn-teal-outline transition-all"
                >
                  Explore Our Capabilities
                </a>
              </div>
              <p className="text-xs font-mono text-slate-500 mt-6 leading-relaxed">
                One defined problem · One accountable owner · One baseline
                <br />
                A scale-or-stop decision at every stage.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 relative">
              <img
                src="/assets/dec7d4b6-fc6c-44e9-afe4-89eae1b318d4.png"
                alt="Illustrative operating map"
                className="w-full h-auto"
              />
              <div className="absolute bottom-2 right-3 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                Illustrative operating map — not client data
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Constraints -> Operating Layer -> Outcomes */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 items-center">
            <div className="space-y-3">
              <div className="text-[11px] font-mono tracking-widest uppercase text-slate-500 mb-2">Constraints In</div>
              {CONSTRAINTS_IN.map((c) => (
                <div key={c} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-slate-200 font-light">
                  {c}
                </div>
              ))}
            </div>

            <div className="hidden lg:flex justify-center text-slate-500 text-xl">→</div>

            <div className="glass-card border border-[#2FC4B7]/30 p-6 text-center">
              <div className="text-[11px] font-mono tracking-widest uppercase text-[#2FC4B7] mb-4">
                Summit Operating Layer
              </div>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {OPERATING_LAYER.map((s) => (
                  <span key={s} className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.05] border border-white/10 text-slate-200">
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Every stage produces a decision-ready artifact. Continue only when the evidence supports the next investment.
              </p>
            </div>

            <div className="hidden lg:flex justify-center text-slate-500 text-xl">→</div>

            <div className="space-y-3">
              <div className="text-[11px] font-mono tracking-widest uppercase text-slate-500 mb-2">Outcomes Out</div>
              {OUTCOMES_OUT.map((o) => (
                <div key={o} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-slate-200 font-light">
                  {o}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Entry points */}
      <section id="capabilities" className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight">
              Start where the constraint is measurable.
            </h2>
            <p className="text-slate-400 text-sm font-light max-w-md">
              Four automation entry points. Each begins with one documented workflow, a time baseline, and an implementation estimate you can decline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ENTRY_POINTS.map((ep) => (
              <div key={ep.num} className="glass-card p-6 sm:p-8 border border-white/10 hover:border-[#E8B4A0]/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono tracking-widest uppercase text-[#E8B4A0] mb-2">
                    {ep.num} — {ep.tag}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-normal text-white mb-3">{ep.title}</h3>
                  <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">{ep.desc}</p>
                  <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 text-[11px] text-slate-300 font-light mb-6">
                    <span className="text-[#E8B4A0] font-semibold block mb-0.5">First deliverable —</span>
                    {ep.deliverable}
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="self-start px-5 py-2.5 rounded-full text-xs font-semibold btn-rose-glow transition-all"
                >
                  {ep.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance pillars */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight">
              Nothing ships without these five.
            </h2>
            <p className="text-[11px] font-mono tracking-widest uppercase text-slate-500">
              Aligned to NIST AI RMF · Govern · Map · Measure · Manage
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {GOVERNANCE_PILLARS.map((p) => (
              <div key={p.num} className="glass-card p-5 border border-white/10">
                <div className="text-xs font-mono text-[#2FC4B7] mb-2 font-bold">{p.num}</div>
                <h4 className="text-base font-semibold text-white mb-2">{p.title}</h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
