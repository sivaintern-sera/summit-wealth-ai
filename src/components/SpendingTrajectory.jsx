import React, { useState } from 'react'

export default function SpendingTrajectory() {
  const [activeTab, setActiveTab] = useState('total')

  const totalMarketData = [
    { year: '2026 (baseline)', value: 600, label: '$600B' },
    { year: '2027', value: 920, label: '$920B' },
    { year: '2028', value: 1380, label: '$1,380B' },
    { year: '2029', value: 2010, label: '$2,010B' },
    { year: '2030', value: 2840, label: '$2,840B' }
  ]

  const infraData = [
    { year: '2026 (baseline)', value: 180, label: '$180B' },
    { year: '2027', value: 310, label: '$310B' },
    { year: '2028', value: 520, label: '$520B' },
    { year: '2029', value: 850, label: '$850B' },
    { year: '2030', value: 1290, label: '$1,290B' }
  ]

  const currentData = activeTab === 'total' ? totalMarketData : infraData
  const axisMax = activeTab === 'total' ? 3000 : 1400
  const axisStep = activeTab === 'total' ? 500 : 200
  const yAxisTicks = []
  for (let v = axisMax; v >= 0; v -= axisStep) yAxisTicks.push(v)

  // Maps a data value to an SVG y-coordinate within the 0-300 viewBox (baseline at y=260, axisMax at y=20)
  const valueToY = (value) => 260 - (value / axisMax) * 240

  return (
    <section className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Container */}
        <div className="glass-card p-6 sm:p-10 border border-white/10 relative overflow-hidden">
          
          {/* Header & Toggle */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight">
                Global Spending Trajectory
              </h2>
              <p className="text-slate-400 text-sm mt-1 font-light">
                Projected enterprise AI platform and infrastructure spending ($ billions)
              </p>
            </div>

            {/* Toggle */}
            <div className="inline-flex p-1 rounded-full bg-black/40 border border-white/10">
              <button
                onClick={() => setActiveTab('total')}
                className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
                  activeTab === 'total'
                    ? 'bg-[#2FC4B7] text-[#050B18] shadow-md font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Total Market
              </button>
              <button
                onClick={() => setActiveTab('infra')}
                className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
                  activeTab === 'infra'
                    ? 'bg-[#E8B4A0] text-[#050B18] shadow-md font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Infrastructure
              </button>
            </div>
          </div>

          {/* SVG Growth Chart */}
          <div className="relative pt-6 pb-2">
            <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-2 px-2">
              <span className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${activeTab === 'total' ? 'bg-[#2FC4B7]' : 'bg-[#E8B4A0]'}`} />
                {activeTab === 'total' ? 'Global AI revenue ($B)' : 'Infrastructure spending ($B)'}
              </span>
            </div>

            <div className="flex gap-2">
              {/* Y Axis Labels */}
              <div className="flex flex-col justify-between h-64 sm:h-80 text-[10px] sm:text-xs font-mono text-slate-500 pb-3 shrink-0">
                {yAxisTicks.map((v) => (
                  <span key={v}>${v.toLocaleString()}B</span>
                ))}
              </div>

              <div className="h-64 sm:h-80 w-full relative">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 300" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradientTotal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2FC4B7" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#2FC4B7" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="chartGradientInfra" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#E8B4A0" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#E8B4A0" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines */}
                  {yAxisTicks.map((v) => (
                    <line
                      key={v}
                      x1="0" x2="1000"
                      y1={valueToY(v)} y2={valueToY(v)}
                      stroke={v === 0 ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.06)'}
                      strokeDasharray={v === 0 ? undefined : '4 4'}
                    />
                  ))}

                  {(() => {
                    const xCoords = [50, 250, 450, 650, 850]
                    const points = currentData.map((pt, i) => [xCoords[i], valueToY(pt.value)])
                    const [p0, p1, p2, , p4] = points
                    const linePath = `M ${p0[0]},${p0[1]} Q ${p1[0]},${p1[1]} ${p2[0]},${p2[1]} T ${p4[0]},${p4[1]}`
                    const areaPath = `${linePath} L ${p4[0]},260 L ${p0[0]},260 Z`
                    return (
                      <>
                        {/* Area Fill */}
                        <path
                          d={areaPath}
                          fill={activeTab === 'total' ? 'url(#chartGradientTotal)' : 'url(#chartGradientInfra)'}
                          className="transition-all duration-700 ease-in-out"
                        />

                        {/* Main Stroke Curve */}
                        <path
                          d={linePath}
                          fill="none"
                          stroke={activeTab === 'total' ? '#E8B4A0' : '#2FC4B7'}
                          strokeWidth="3.5"
                          className="transition-all duration-700 ease-in-out"
                        />

                        {/* Data Points */}
                        {currentData.map((pt, idx) => {
                          const [x, y] = points[idx]
                          return (
                            <g key={pt.year} className="group cursor-pointer">
                              <circle
                                cx={x}
                                cy={y}
                                r="6"
                                fill={activeTab === 'total' ? '#2FC4B7' : '#E8B4A0'}
                                stroke="#050B18"
                                strokeWidth="2"
                                className="transition-all duration-300 group-hover:r-8"
                              />
                              <text
                                x={x}
                                y={y - 14}
                                textAnchor="middle"
                                fill="#FFFFFF"
                                fontSize="12"
                                fontWeight="600"
                                fontFamily="monospace"
                              >
                                {pt.label}
                              </text>
                            </g>
                          )
                        })}
                      </>
                    )
                  })()}
                </svg>
              </div>
            </div>

            {/* X Axis Labels */}
            <div className="flex justify-between text-xs font-mono text-slate-400 pt-3 border-t border-white/10 px-4 ml-10 sm:ml-12">
              {currentData.map(d => (
                <span key={d.year}>{d.year}</span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
