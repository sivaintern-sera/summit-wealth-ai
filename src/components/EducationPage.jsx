import React, { useState, useMemo } from 'react'

const SNAPSHOT_STATS = [
  { value: '50%', label: 'of teachers report no AI training' },
  { value: '28 pts', label: 'training gap by district poverty' },
  { value: '45%', label: 'of principals report any AI policy' },
]

const POVERTY_BARS = [
  { label: 'Low poverty', sub: '(<25%)', value: 56 },
  { label: 'Moderate', sub: '(25–75%)', value: 38 },
  { label: 'High poverty', sub: '(>75%)', value: 28 },
]

const ROLES = [
  {
    id: 'k12-teachers',
    label: 'K-12 teachers',
    tag: 'K-12 · CLASSROOM',
    title: 'K-12 teachers',
    desc: 'Teachers are already using AI for planning, differentiation, and feedback — usually with tools nobody vetted. Without training, student data ends up in unapproved systems and grading decisions lose their paper trail.',
    agent: 'A lesson-planning and differentiation assistant grounded in the district curriculum map and IEP accommodations — drafts only, never a submitted grade.',
    agentNote: 'Comparable to curriculum assistants deployed in large district pilots.',
    benchmarkStat: '5.9 hrs/week reported saved',
    benchmarkNote: 'Self-reported by weekly AI-using teachers (Gallup / Walton, 2025).',
    benchmarkThreshold: 'Pilot threshold: one verified hour weekly on planning and feedback.',
    coverage: ['Approved tool list', 'Student data boundaries', 'Prompting for lesson design', 'Feedback vs. grading', 'Detector limitations', 'Disclosure to families'],
    guardrails: 'No student-identifiable data leaves approved tools; AI-assisted feedback is labeled; grades of record require teacher authorship; every class posts its AI-use expectations.',
    measures: ['Planning time per unit', 'Feedback turnaround time', 'Approved-tool usage rate', 'Data incident count', 'Family disclosure coverage'],
  },
  {
    id: 'school-admin',
    label: 'School administrators',
    tag: 'K-12 · BUILDING LEVEL',
    title: 'School administrators',
    desc: 'Administrators field parent questions, vendor pitches, and staff requests for AI tools with no shared approval process — decisions get made ad hoc, building by building.',
    agent: 'A vendor-review and policy-drafting assistant grounded in the district-approved tool list and current AI policy — recommendations only, never a final approval.',
    agentNote: 'Comparable to procurement-review copilots used in district central offices.',
    benchmarkStat: '3.2 hrs/week reported saved',
    benchmarkNote: 'Self-reported by administrators screening AI-tool requests.',
    benchmarkThreshold: 'Pilot threshold: one verified vendor review cycle per month.',
    coverage: ['Vendor intake checklist', 'Data-sharing agreement review', 'Staff request triage', 'Family communication templates', 'Escalation path', 'Policy version control'],
    guardrails: 'No tool reaches a classroom without a signed data-sharing agreement; every approval is logged with an owner and a review date; policy exceptions require named sign-off.',
    measures: ['Vendor review turnaround', 'Approved-tool catalog size', 'Staff request backlog', 'Policy exception count', 'Audit log completeness'],
  },
  {
    id: 'principals',
    label: 'Principals',
    tag: 'K-12 · SCHOOL LEADERSHIP',
    title: 'Principals',
    desc: 'Principals are accountable for how AI touches grading, discipline, and family communication in their building, but rarely have a way to see where staff are already using it.',
    agent: 'A building-level adoption dashboard summarizing approved-tool usage, incident reports, and training completion — visibility only, no staff evaluation function.',
    agentNote: 'Comparable to dashboards used to track building-level compliance initiatives.',
    benchmarkStat: '41% faster incident response',
    benchmarkNote: 'Reported by principals with a standing AI-use dashboard.',
    benchmarkThreshold: 'Pilot threshold: one documented incident review cycle.',
    coverage: ['Building-level adoption view', 'Incident intake and review', 'Staff training completion', 'Family disclosure tracking', 'Grade-integrity spot checks', 'Board reporting basics'],
    guardrails: 'Every AI-related incident is logged and reviewed within a week; staff training completion is visible by department; no dashboard metric is used in individual staff evaluation.',
    measures: ['Training completion rate', 'Incident review turnaround', 'Family disclosure coverage', 'Grade-integrity spot-check rate', 'Board reporting cadence'],
  },
  {
    id: 'district-leadership',
    label: 'District leadership',
    tag: 'DISTRICT · CENTRAL OFFICE',
    title: 'District leadership',
    desc: 'District leaders own the policy and the public risk, but usually inherit a patchwork of building-level decisions made before any policy existed.',
    agent: 'A district-wide policy and risk-register assistant that consolidates building-level adoption, exceptions, and open questions into one reviewable record.',
    agentNote: 'Comparable to governance registers used in multi-school-system rollouts.',
    benchmarkStat: '3 fewer unresolved exceptions per quarter',
    benchmarkNote: 'Reported by districts running a consolidated risk register.',
    benchmarkThreshold: 'Pilot threshold: one full-district policy review cycle.',
    coverage: ['District policy drafting', 'Cross-building risk register', 'Board and community reporting', 'Grant and funding alignment', 'Vendor contract review', 'Crisis communication plan'],
    guardrails: 'Every building operates under one published policy; open exceptions are reviewed on a fixed cadence; public statements about AI use are reviewed before release.',
    measures: ['Policy adoption by building', 'Open exception count', 'Board reporting cadence', 'Vendor contract review rate', 'Community complaint volume'],
  },
  {
    id: 'counselors-advisors',
    label: 'Counselors & advisors',
    tag: 'K-12 & HIGHER ED · SUPPORT',
    title: 'Counselors & advisors',
    desc: 'Counselors are starting to use AI for scheduling, recommendation drafting, and early-warning triage — high-stakes work where an unreviewed error can follow a student for years.',
    agent: 'A drafting assistant for recommendation letters and intervention notes, grounded only in the student record the counselor already has access to — drafts require counselor sign-off.',
    agentNote: 'Comparable to advising copilots used in large higher-ed advising centers.',
    benchmarkStat: '4.1 hrs/week reported saved',
    benchmarkNote: 'Self-reported by counselors using a drafting assistant for routine correspondence.',
    benchmarkThreshold: 'Pilot threshold: one verified caseload cycle.',
    coverage: ['Student-record access boundaries', 'Drafting vs. final sign-off', 'Early-warning triage limits', 'Family and student disclosure', 'Bias spot-checks', 'Escalation for high-risk cases'],
    guardrails: 'Every AI-assisted recommendation or note is reviewed and signed by the counselor before it is sent; high-risk triage flags always route to a human first.',
    measures: ['Drafting time saved', 'Sign-off rate before send', 'High-risk flag response time', 'Disclosure coverage', 'Bias spot-check frequency'],
  },
  {
    id: 'it-infosec',
    label: 'IT & information security',
    tag: 'DISTRICT & INSTITUTION · IT',
    title: 'IT & information security',
    desc: 'IT is asked to secure and support tools that were often already in use before anyone in the department knew about them, with student data as the risk surface.',
    agent: 'An access-and-audit console mapping which roles reach which AI tools through SSO, with permission changes and data-egress attempts logged automatically.',
    agentNote: 'Comparable to SSO-integrated audit consoles used in regulated K-12 and higher-ed environments.',
    benchmarkStat: '62% fewer unmanaged tool instances',
    benchmarkNote: 'Reported after a district-wide SSO and permissions sweep.',
    benchmarkThreshold: 'Pilot threshold: one completed shadow-IT discovery pass.',
    coverage: ['SSO and role-based permissions', 'Shadow-IT discovery', 'Data-egress monitoring', 'Vendor security review', 'Incident response runbook', 'Retention and deletion policy'],
    guardrails: 'Every AI tool in use is inventoried and mapped to SSO; unmanaged tools are flagged within a fixed window; data-egress attempts trigger an automatic review.',
    measures: ['Unmanaged tool count', 'SSO coverage rate', 'Data-egress alert volume', 'Vendor security review backlog', 'Incident response time'],
  },
  {
    id: 'higher-ed-faculty',
    label: 'Higher-ed faculty',
    tag: 'HIGHER ED · FACULTY',
    title: 'Higher-ed faculty',
    desc: 'Faculty are redesigning assignments and grading under pressure, often without institutional guidance on what counts as acceptable AI use in coursework.',
    agent: 'An assignment-redesign assistant that proposes process-evidence-based assessment structures aligned to the course learning objectives — faculty approve every change.',
    agentNote: 'Comparable to assessment-redesign support used across large public university systems.',
    benchmarkStat: '2x faster assignment redesign',
    benchmarkNote: 'Reported by faculty redesigning assessments around process evidence.',
    benchmarkThreshold: 'Pilot threshold: one redesigned course module.',
    coverage: ['Course AI-use statement', 'Assignment redesign support', 'Process-evidence grading', 'Detector-limitation training', 'Academic-integrity referral path', 'Syllabus language library'],
    guardrails: 'Every syllabus states the course-level AI policy; grading decisions rely on process evidence rather than detector scores alone; integrity referrals follow one documented path.',
    measures: ['Course policy publication rate', 'Redesigned-assignment share', 'Detector-score-only grading incidents', 'Integrity referral turnaround', 'Faculty training completion'],
  },
]

const STATEMENTS = [
  'We have a written, published policy on student and staff AI use.',
  'Every employee has completed foundational AI literacy and data-privacy training.',
  'Staff can correctly say which data may enter which approved tool.',
  'Consequential decisions — grading, discipline, eligibility, aid — have documented human authority.',
  'AI tools are reached through SSO with role-based permissions and audit logs.',
  'Our AI-facing tools have been tested against WCAG 2.1 AA.',
  'Assessments have been redesigned around process evidence rather than detector scores.',
  'Every AI pilot has a baseline, an owner, subgroup measures, and a go/no-go date.',
]

const MAX_SCORE = STATEMENTS.length * 2

function resultForScore(score) {
  if (score <= 5) {
    return {
      label: 'Exposed',
      desc: 'Adoption is running ahead of governance. We would start with policy, data boundaries, and foundational training.',
    }
  }
  if (score <= 10) {
    return {
      label: 'Developing',
      desc: 'Foundations exist but coverage is uneven. We would close the specific gaps before scaling further.',
    }
  }
  if (score <= 15) {
    return {
      label: 'Structured',
      desc: 'Most controls are in place. We would validate edge cases and formalize measurement.',
    }
  }
  return {
    label: 'Governed',
    desc: 'Controls, training, and measurement are in place. We would benchmark against peers and stress-test edge cases.',
  }
}

export default function EducationPage({ onNavigate }) {
  const [activeRoleId, setActiveRoleId] = useState(ROLES[0].id)
  const [answers, setAnswers] = useState({})

  const activeRole = ROLES.find((r) => r.id === activeRoleId)
  const answeredCount = Object.keys(answers).length
  const score = useMemo(() => Object.values(answers).reduce((sum, v) => sum + v, 0), [answers])
  const result = resultForScore(score)

  return (
    <div className="relative">
      <div className="radial-glow-top" />
      <div className="radial-glow-left" />

      {/* Hero */}
      <section className="pt-16 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 text-[#2FC4B7] text-xs font-mono tracking-widest uppercase mb-6">
                <span className="w-8 h-px bg-[#2FC4B7]" />
                AI for Education
              </div>
              <h1 className="text-4xl sm:text-5xl font-normal text-white tracking-tight leading-tight">
                Give your K-12 &amp; Higher Ed administrators and educators more capacity to{' '}
                <em className="font-serif italic text-[#E8B4A0] not-italic sm:italic">serve</em>.
              </h1>
              <p className="text-slate-300 text-base font-light mt-6 leading-relaxed max-w-xl">
                Institutions are being asked to adopt AI faster than governance can absorb it. We build the guardrails first, then the capability, so adoption does not create a compliance problem later.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 rounded-full text-sm font-semibold btn-rose-glow transition-all"
                >
                  Discuss an Education AI Pilot
                </button>
                <button
                  onClick={() => onNavigate('home')}
                  className="px-6 py-3.5 rounded-full text-sm font-medium border border-white/15 text-slate-300 hover:text-white hover:border-white/30 transition-all"
                >
                  Back to AI/ML
                </button>
              </div>
            </div>

            {/* Snapshot Card */}
            <div className="glass-card relative overflow-hidden p-6 sm:p-8 border border-white/10 rounded-2xl">
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[#2FC4B7]/10 blur-3xl pointer-events-none" />

              <div className="relative text-center text-[11px] font-mono tracking-widest uppercase text-slate-400 mb-6">
                AI Training &amp; Policy Snapshot
              </div>
              <div className="relative grid grid-cols-3 gap-3 mb-8">
                {SNAPSHOT_STATS.map((s) => (
                  <div
                    key={s.label}
                    className="relative overflow-hidden text-center p-4 rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/10"
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-[#E8B4A0]/15 blur-2xl pointer-events-none" />
                    <div className="relative text-2xl sm:text-3xl font-normal text-white font-serif drop-shadow-[0_0_12px_rgba(232,180,160,0.25)]">
                      {s.value}
                    </div>
                    <div className="relative text-[10px] text-slate-400 font-light mt-1 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="relative p-5 sm:p-6 rounded-2xl bg-black/20 border border-white/10">
                <div className="text-[11px] font-mono tracking-widest uppercase text-[#2FC4B7] mb-4 text-center">
                  Training Gap by District Poverty Level
                </div>
                <div className="flex items-end justify-center gap-10 sm:gap-14 px-4">
                  {(() => {
                    const maxValue = Math.max(...POVERTY_BARS.map((b) => b.value))
                    const maxBarHeight = 176
                    return POVERTY_BARS.map((b) => (
                      <div key={b.label} className="flex flex-col items-center gap-3 flex-1">
                        <span className="text-base font-semibold text-white">{b.value}%</span>
                        <div className="w-full flex justify-center items-end" style={{ height: maxBarHeight }}>
                          <div
                            className="w-12 sm:w-14 rounded-t-xl bg-gradient-to-t from-[#D49B85] to-[#F7DDD0] shadow-[0_0_24px_rgba(232,180,160,0.55)]"
                            style={{ height: `${(b.value / maxValue) * maxBarHeight}px` }}
                          />
                        </div>
                        <span className="text-[10px] text-slate-400 text-center leading-tight">
                          {b.label}
                          <br />
                          {b.sub}
                        </span>
                      </div>
                    ))
                  })()}
                </div>
                <div className="text-[10px] text-slate-500 font-light text-center mt-4">
                  External evidence — district survey on AI in education, 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Selector */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight max-w-3xl">
            A principal and an IT architect do not need the same workshop.
          </h2>
          <p className="text-slate-400 text-sm font-light mt-3 max-w-2xl leading-relaxed">
            Each role controls different decisions, data, and risks. Pick one to see why training is needed, what we cover, the agent we help them build, and how we measure whether it worked.
          </p>

          <div className="flex flex-wrap gap-2 mt-8 mb-8">
            {ROLES.map((role) => (
              <button
                key={role.id}
                onClick={() => setActiveRoleId(role.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                  role.id === activeRoleId
                    ? 'border-[#E8B4A0]/50 bg-[#E8B4A0]/10 text-[#E8B4A0]'
                    : 'border-white/10 text-slate-300 hover:text-white hover:border-white/25'
                }`}
              >
                {role.label}
              </button>
            ))}
          </div>

          <div className="glass-card border border-white/10 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-[#2FC4B7] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2FC4B7]" />
              {activeRole.tag}
            </div>
            <h3 className="text-2xl sm:text-3xl font-normal text-white mb-4">{activeRole.title}</h3>
            <p className="text-sm text-slate-300 font-light leading-relaxed max-w-3xl mb-8">{activeRole.desc}</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left column */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-[11px] font-mono tracking-widest uppercase text-slate-400 mb-3 font-semibold">
                    Workshop Coverage
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeRole.coverage.map((c) => (
                      <span
                        key={c}
                        className="px-3 py-1.5 rounded-full text-[11px] font-medium bg-white/[0.03] border border-white/10 text-slate-300"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[11px] font-mono tracking-widest uppercase text-[#E8B4A0] mb-3 font-semibold">
                    Guardrails We Install
                  </h4>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">{activeRole.guardrails}</p>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <h4 className="text-[11px] font-mono tracking-widest uppercase text-slate-400 mb-2 font-semibold">
                    The Agent They Build
                  </h4>
                  <p className="text-xs text-slate-300 font-light leading-relaxed mb-2">{activeRole.agent}</p>
                  <p className="text-[10px] text-slate-500 font-light">{activeRole.agentNote}</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <h4 className="text-[11px] font-mono tracking-widest uppercase text-slate-400 mb-2 font-semibold">
                    Observed Benchmark
                  </h4>
                  <div className="text-xl font-normal text-white font-serif mb-1">{activeRole.benchmarkStat}</div>
                  <p className="text-[10px] text-slate-500 font-light">{activeRole.benchmarkNote}</p>
                  <p className="text-[10px] text-slate-500 font-light mt-1">{activeRole.benchmarkThreshold}</p>
                </div>

                <div>
                  <h4 className="text-[11px] font-mono tracking-widest uppercase text-slate-400 mb-3 font-semibold">
                    How We Measure It
                  </h4>
                  <ul className="space-y-1.5">
                    {activeRole.measures.map((m) => (
                      <li key={m} className="text-xs text-slate-300 font-light flex items-start gap-2">
                        <span className="text-[#2FC4B7]">→</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self-assessment */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card border border-white/10 p-6 sm:p-10">
            <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight">
              Where does your institution actually stand?
            </h2>
            <p className="text-slate-400 text-sm font-light mt-2 max-w-2xl leading-relaxed">
              Eight statements. Answer honestly against each — the result is a starting position for a conversation, not a grade. Nothing is transmitted.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 mt-8">
              <div className="space-y-3">
                {STATEMENTS.map((statement, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10"
                  >
                    <span className="text-sm text-slate-200 font-light flex-1">{statement}</span>
                    <div className="flex items-center gap-2 shrink-0">
                      {[{ label: 'Yes', v: 2 }, { label: 'Partly', v: 1 }, { label: 'No', v: 0 }].map((opt) => (
                        <button
                          key={opt.label}
                          onClick={() => setAnswers((a) => ({ ...a, [i]: opt.v }))}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                            answers[i] === opt.v
                              ? 'bg-[#2FC4B7] text-[#050B18] border-[#2FC4B7] font-semibold'
                              : 'border-white/15 text-slate-300 hover:text-white hover:border-white/30'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="glass-card border border-white/10 p-6 text-center">
                  <div className="text-[11px] font-mono tracking-widest uppercase text-slate-400 mb-3">
                    {answeredCount} of {STATEMENTS.length} answered
                  </div>
                  <div className="text-4xl font-normal text-white font-serif">{score}</div>
                  <div className="text-xs text-slate-500 mb-3">of {MAX_SCORE}</div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden mb-6">
                    <div
                      className="h-full progress-bar-rose transition-all duration-500"
                      style={{ width: `${(score / MAX_SCORE) * 100}%` }}
                    />
                  </div>
                  <div className="text-lg font-normal text-white font-serif mb-2">{result.label}</div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">{result.desc}</p>
                </div>

                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full px-5 py-3 rounded-full text-sm font-semibold btn-rose-glow transition-all"
                >
                  Book a full assessment
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full px-5 py-3 rounded-full text-sm font-medium btn-teal-outline transition-all"
                >
                  Schedule training sessions
                </button>
                <p className="text-[10px] text-slate-500 font-light text-center leading-relaxed">
                  A full assessment covers all roles, all eight compliance domains, and produces your baseline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-10 sm:p-14 text-center border-2 border-[#2FC4B7]/30 bg-gradient-to-b from-[#2FC4B7]/10 via-transparent to-transparent">
            <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight mb-4">
              See it against your own policy, in 30 minutes.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
              Bring one workflow — grading, advising, intake, communications, or procurement. We show the governed version, the training required, and what we would measure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold btn-rose-glow transition-all"
              >
                Schedule a Demo
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-medium btn-teal-outline transition-all"
              >
                Plan an Education Pilot
              </button>
            </div>
            <p className="text-xs font-mono text-slate-500 mt-6">
              No prepared brief required · District, campus, and independent schools
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
