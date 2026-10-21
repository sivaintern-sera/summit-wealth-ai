import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight, AlertTriangle } from 'lucide-react'

export default function IndustryProblems() {
  const scrollRef = useRef(null)

  const sectors = [
    {
      id: 'k12',
      tag: 'SECTOR 01',
      title: 'K–12 Education',
      adoption: [
        '85% of teachers and 86% of students used AI in 2024–25.',
        '53% use AI for homework; 30% use it daily.',
        '54% of middle/high schoolers and 53% of core teachers actively use AI (RAND 2025).'
      ],
      costOfInaction: [
        { label: 'Lost time', desc: 'Non-users forfeit 5.9 hours per week — roughly six weeks per school year.' },
        { label: 'Missed potential', desc: '72% of teachers get zero AI guidance, trading deeper learning for confusion.' },
        { label: 'Productivity drag', desc: 'Delays forfeit a projected 15% efficiency gain.' }
      ]
    },
    {
      id: 'highered',
      tag: 'SECTOR 02',
      title: 'Higher Education',
      adoption: [
        '92% of students and 91% of administrators use generative AI.',
        '94% of student users apply AI to assessed work.',
        '66% of institutions report campus-wide adoption, up from 49%.'
      ],
      costOfInaction: [
        { label: 'Slower growth', desc: 'Campuses with clear AI strategies are 2x more likely to grow revenue.' },
        { label: 'Wasted effort', desc: 'Ignores up to a 15% labor productivity gain in operations and advising.' },
        { label: 'Career risk', desc: 'Non-AI graduates face weaker employability in a two-track job market.' }
      ]
    },
    {
      id: 'smallbiz',
      tag: 'SECTOR 03',
      title: 'Small Businesses',
      adoption: [
        'Ranked the #1 SMB technology trend; 58–68% use AI regularly.',
        '82–98% use embedded AI tools; the median firm uses five.',
        '60%+ report higher productivity; 89% cite clear value.'
      ],
      costOfInaction: [
        { label: 'Higher overhead', desc: 'Non-users work slower and pay more to operate.' },
        { label: 'Lost output', desc: 'Surrenders a 15%+ per-worker output gain to rivals.' },
        { label: 'Lower margins', desc: 'Misses proven cost cuts and profit gains — agreed by 93% of AI users.' }
      ]
    },
    {
      id: 'professionals',
      tag: 'SECTOR 04',
      title: 'Professionals',
      adoption: [
        '57% of Americans use AI personally; 55% interact with it daily.',
        '22% of all workers use AI on the job — 52% in tech, 42% in education, 38% in finance.',
        '51% use AI for core tasks; 20% have automated past manual duties.'
      ],
      costOfInaction: [
        { label: 'Lost value', desc: 'Non-users waste ~5 hours per week (~240 hrs/yr) — worth up to $19,000 annually.' },
        { label: 'Career risk', desc: 'Non-users fall behind as 90% of peers adopt AI skills.' },
        { label: 'Missed upside', desc: 'Structured AI users are 3.5x more likely to see concrete career growth.' }
      ]
    }
  ]

  const scrollByCard = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 400, behavior: 'smooth' })
  }

  return (
    <section id="education" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl sm:text-5xl font-normal text-white tracking-tight">
              Current industry problems
            </h2>
            <p className="text-slate-400 text-base mt-2 font-light max-w-xl">
              Adoption is already here. The cost is concentrated in the organizations that have not structured it.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scrollByCard(-1)}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#2FC4B7] hover:bg-[#2FC4B7]/10 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollByCard(1)}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#2FC4B7] hover:bg-[#2FC4B7]/10 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sliding Sector Cards */}
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory">
          {sectors.map((sec) => (
            <div
              key={sec.id}
              className="glass-card p-6 sm:p-8 border border-white/10 opacity-95 hover:opacity-100 transition-all duration-300 flex flex-col justify-between shrink-0 w-[85vw] sm:w-[360px] md:w-[calc((100%-3rem)/3)] snap-start"
            >
              <div>
                <div className="text-xs font-mono text-[#E8B4A0] tracking-wider uppercase mb-2">
                  {sec.tag}
                </div>
                <h3 className="text-3xl font-normal text-white mb-6">
                  {sec.title}
                </h3>

                {/* Adoption & Usage */}
                <div className="mb-8">
                  <h4 className="text-[11px] font-mono tracking-widest uppercase text-slate-400 mb-3 font-semibold">
                    Adoption & Usage
                  </h4>
                  <ul className="space-y-3">
                    {sec.adoption.map((item, i) => (
                      <li key={i} className="text-xs text-slate-300 font-light flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2FC4B7] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cost of Inaction */}
                <div>
                  <h4 className="text-[11px] font-mono tracking-widest uppercase text-[#E8B4A0] mb-3 font-semibold flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Cost of Inaction
                  </h4>
                  <div className="space-y-3">
                    {sec.costOfInaction.map((coi, i) => (
                      <div key={i} className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                        <div className="text-xs font-semibold text-white mb-0.5">
                          {coi.label} —
                        </div>
                        <div className="text-[11px] text-slate-400 font-light">
                          {coi.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
