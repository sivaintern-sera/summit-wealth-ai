import React, { useState } from 'react'

const NEEDS_OPTIONS = [
  'AI workflow',
  'Education AI',
  'Revenue leakage',
  'Automation',
  'Custom agent',
  'Healthcare workforce',
  'EB-5 readiness',
  'Not sure',
]

const URGENCY_OPTIONS = ['Immediate', 'Within a month', 'This quarter', 'Exploring']

export default function ContactPage() {
  const [selectedNeeds, setSelectedNeeds] = useState(['AI workflow'])
  const [urgency, setUrgency] = useState('Immediate')
  const [submitted, setSubmitted] = useState(false)

  const toggleNeed = (need) => {
    setSelectedNeeds((prev) =>
      prev.includes(need) ? prev.filter((n) => n !== need) : [...prev, need]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="relative py-16">
      <div className="radial-glow-top" />
      <div className="radial-glow-left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
          {/* Form */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-normal text-white tracking-tight mb-4">
              What is the constraint?
            </h1>
            <p className="text-slate-400 text-sm font-light mb-8 max-w-xl leading-relaxed">
              Describe the workflow, revenue gap, capacity problem, or regulated pathway you are trying to address. We review every inquiry for fit before recommending a meeting or assessment.
            </p>

            {submitted ? (
              <div className="glass-card border border-[#2FC4B7]/30 p-8 text-center">
                <h3 className="text-xl font-normal text-white mb-2">Thank you.</h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  A principal will review this and follow up if it's a fit for a 30-minute Operational Constraint Review.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card border border-white/10 p-6 sm:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs text-slate-400 font-light mb-1.5 block">Your name</span>
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#2FC4B7]/50 transition-colors"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs text-slate-400 font-light mb-1.5 block">Work email</span>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.org"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#2FC4B7]/50 transition-colors"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs text-slate-400 font-light mb-1.5 block">Organization</span>
                    <input
                      type="text"
                      required
                      placeholder="Organization name"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#2FC4B7]/50 transition-colors"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs text-slate-400 font-light mb-1.5 block">Your role in this decision</span>
                    <input
                      type="text"
                      placeholder="e.g. COO, VP Revenue Operations"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#2FC4B7]/50 transition-colors"
                    />
                  </label>
                </div>

                <div>
                  <span className="text-xs text-slate-400 font-light mb-2 block">What needs to change?</span>
                  <div className="flex flex-wrap gap-2">
                    {NEEDS_OPTIONS.map((need) => (
                      <button
                        key={need}
                        type="button"
                        onClick={() => toggleNeed(need)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                          selectedNeeds.includes(need)
                            ? 'bg-[#2FC4B7] text-[#050B18] border-[#2FC4B7] font-semibold'
                            : 'border-white/15 text-slate-300 hover:text-white hover:border-white/30'
                        }`}
                      >
                        {need}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs text-slate-400 font-light mb-1.5 block">
                      Current impact — time, revenue, capacity, or risk
                    </span>
                    <input
                      type="text"
                      placeholder="e.g. ~40 staff hours per week"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#2FC4B7]/50 transition-colors"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs text-slate-400 font-light mb-1.5 block">When does this need attention?</span>
                    <select
                      value={urgency}
                      onChange={(e) => setUrgency(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-sm text-white focus:outline-none focus:border-[#2FC4B7]/50 transition-colors"
                    >
                      {URGENCY_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0A1426]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="text-xs text-slate-400 font-light mb-1.5 block">
                    Describe the problem in two or three sentences
                  </span>
                  <textarea
                    required
                    rows={4}
                    placeholder="Example: Our team receives approximately 800 requests each month by email. Staff re-enter the same information into two systems, and we cannot reliably see which cases have stalled."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#2FC4B7]/50 transition-colors resize-y"
                  />
                </label>

                <div className="p-3.5 rounded-lg bg-white/[0.02] border border-dashed border-white/15 text-xs text-slate-500 font-light">
                  Attach an existing process map or brief — do not upload sensitive personal, student, health, immigration, or financial records.
                  <input type="file" className="block mt-2 text-xs text-slate-400" />
                </div>

                <div>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full text-sm font-semibold btn-rose-glow transition-all"
                  >
                    Request a Constraint Review
                  </button>
                  <p className="text-xs text-slate-500 font-light mt-3">
                    Two or three sentences are enough. No prepared brief is required.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="glass-card border border-white/10 p-6">
              <h4 className="text-[11px] font-mono tracking-widest uppercase text-[#2FC4B7] mb-4">
                What happens next
              </h4>
              <ol className="space-y-4">
                {[
                  'A principal reads the problem and checks for fit — not a sales qualification script.',
                  'A 30-minute Operational Constraint Review: problem, owner, urgency, available evidence.',
                  'A recommended next step only when the issue is specific enough to assess.',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-xs font-mono text-slate-500 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-xs text-slate-300 font-light leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="glass-card border border-white/10 p-6">
              <h4 className="text-[11px] font-mono tracking-widest uppercase text-slate-400 mb-3">Privacy</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Please do not submit confidential records or regulated personal data through this form. We will establish an approved method for sensitive information if an engagement proceeds.
              </p>
            </div>

            <div className="glass-card border border-white/10 p-6">
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                This is a fit and problem-definition conversation — not a product demonstration. Please bring the process, outcome, or decision that needs to improve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
