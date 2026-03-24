import React from 'react';

const statItems = [
  { label: 'Yield impact', value: '+19%', tone: 'text-green-300' },
  { label: 'Input waste', value: '-34%', tone: 'text-cyan-300' },
  { label: 'Retention', value: '92%', tone: 'text-blue-300' }
];

const ProjectThumbnail = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="relative overflow-hidden rounded-2xl border border-blue-400/30 bg-slate-900/60 shadow-[0_20px_70px_-30px_rgba(16,185,129,0.65)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_25px_90px_-25px_rgba(16,185,129,0.85)] group">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/65 via-slate-950/30 to-transparent pointer-events-none" style={{ backdropFilter: 'blur(8px)' }} />
        <div className="p-4 sm:p-5 md:p-6 relative flex h-56 md:h-72 xl:h-80" style={{ aspectRatio: '16 / 9' }}>
          <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-slate-800/65 px-3 py-1 text-xs font-semibold text-cyan-100 backdrop-blur-md border border-cyan-200/20">
            <span className="bg-cyan-500/20 px-2 py-0.5 rounded">Case Study</span>
          </div>
          <div className="absolute top-3 right-3 inline-flex items-center gap-2 rounded-full bg-slate-800/65 px-3 py-1 text-xs font-semibold text-blue-100 backdrop-blur-md border border-blue-200/20">
            System Overview
          </div>

          <div className="flex grow items-stretch gap-3 md:gap-4">
            <div className="relative w-[60%] rounded-xl bg-slate-800/80 border border-blue-400/20 p-3 md:p-4 backdrop-blur-sm">
              {/* mini dashboard */}
              <div className="space-y-2">
                <div className="text-xs text-slate-300 font-medium uppercase tracking-wider">Crop yield trend</div>
                <div className="relative mt-1 h-20 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-400/10 border border-slate-500/30 overflow-hidden">
                  <svg viewBox="0 0 240 80" className="w-full h-full">
                    <defs>
                      <linearGradient id="yieldGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    <path d="M 0 62 Q 30 40 60 45 T 120 30 T 180 40 T 240 25" fill="none" stroke="#22d3ee" strokeWidth="3" />
                    <path d="M0 68 L0 45 Q 30 25 60 30 T120 17 T180 25 T240 12 L240 70 Z" fill="url(#yieldGradient)" opacity="0.75" />
                  </svg>
                </div>
              </div>

              <div className="mt-3 space-y-2">
                <div className="text-xs text-slate-300 font-medium uppercase tracking-wider">Market prices</div>
                <div className="grid grid-cols-4 gap-1">
                  {[28, 42, 34, 48].map((height, idx) => (
                    <div key={idx} className="h-14 rounded-sm bg-gradient-to-t from-sky-400/80 to-blue-700/40 self-end" style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                {statItems.map((item) => (
                  <div key={item.label} className="rounded-lg bg-slate-900/70 p-2 border border-slate-500/20 text-center">
                    <div className={`text-sm font-bold ${item.tone}`}>{item.value}</div>
                    <div className="text-[11px] text-slate-300">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-[40%] rounded-xl bg-slate-900/80 border border-cyan-300/20 p-3 md:p-4 backdrop-blur-sm">
              <div className="text-xs text-slate-300 uppercase tracking-wider font-medium">Architecture flow</div>
              <div className="mt-3 h-full flex flex-col justify-between">
                {[
                  { text: 'Weather API', accent: 'text-sky-300' },
                  { text: 'Backend', accent: 'text-cyan-300' },
                  { text: 'ML Model', accent: 'text-emerald-300' },
                  { text: 'Dashboard', accent: 'text-blue-300' }
                ].map((node, idx) => (
                  <div key={node.text} className="relative">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-cyan-300" />
                      <span className={`text-sm font-semibold ${node.accent}`}>
                        {node.text}
                      </span>
                    </div>
                    {idx < 3 && (
                      <div className="absolute left-1.5 top-5 h-8 border-l border-cyan-300/60" />
                    )}
                  </div>
                ))}
              </div>

              <svg className="absolute inset-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path d="M 20 18 L 40 35 L 20 52 L 40 69" fill="none" stroke="url(#lineGlow)" strokeWidth="2" strokeDasharray="2 2" />
                <path d="M 40 35 L 62 35" fill="none" stroke="url(#lineGlow)" strokeWidth="2" strokeDasharray="2 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectThumbnail;
