import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  Trophy
} from 'lucide-react';
import { educationData, achievementData } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 border-b border-slate-800/60 bg-[#090e18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-800/50 mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>06 // ACADEMIC BACKGROUND & RIGOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Academic Honors
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Formal training in Computer Science and Engineering with specialization in Data Science, anchored by strong mathematical, algorithmic, and statistical foundations.
          </p>
        </div>

        {/* Academic Topper Achievement Highlight Card */}
        <div 
          id="academic-topper-achievement"
          className="mb-12 rounded-2xl border-2 border-amber-500/40 bg-gradient-to-r from-amber-950/20 via-slate-900/80 to-[#0c121e] p-6 sm:p-8 shadow-xl relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-950/80 text-amber-300 border border-amber-700/60">
                    ACADEMIC EXCELLENCE
                  </span>
                  <span className="text-xs font-mono text-amber-400 font-semibold">
                    {achievementData.grade}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {achievementData.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-slate-300 mt-1">
                  {achievementData.field}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-2xl leading-relaxed">
                  {achievementData.description}
                </p>
              </div>
            </div>

            <div className="shrink-0 font-mono text-right sm:border-l sm:border-slate-800 sm:pl-6">
              <div className="text-xs text-slate-400">Second Year Benchmark</div>
              <div className="text-2xl font-extrabold text-amber-300">CGPA 9.11</div>
              <div className="text-[11px] text-slate-500">Cohort Rank: #1</div>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((item, index) => (
            <div
              key={item.institution}
              id={`education-card-${index}`}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all ${
                index === 0
                  ? 'border-cyan-800/80 bg-[#0c1322] shadow-xl ring-1 ring-cyan-500/30'
                  : 'border-slate-800/80 bg-slate-900/40 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {item.period}
                  </span>
                  {item.gradeHighlight && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                      {item.gradeHighlight}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                  {item.institution}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-sans mb-3">
                  {item.degree}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="font-semibold text-slate-200">{item.grade}</span>
                <span className="flex items-center gap-1 text-[11px] text-slate-500">
                  <MapPin className="w-3 h-3" />
                  {item.location.split(',')[0]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
