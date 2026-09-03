import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Terminal,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { experiencesData } from '../data/experience';

export const Experience: React.FC = () => {
  const currentRole = experiencesData.find(e => e.isCurrent);
  const previousRoles = experiencesData.filter(e => !e.isCurrent);

  return (
    <section id="experience" className="py-20 md:py-28 border-b border-slate-800/60 bg-[#090e18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-800/50 mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>02 // PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production Engineering & Systems Work
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Hands-on technical engineering deploying backend cloud workflows, designing microservices, and managing scalable Microsoft Azure infrastructure.
          </p>
        </div>

        {/* Current Primary Role - Heroic Card */}
        {currentRole && (
          <div className="mb-12">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Primary / Active Professional Engagement</span>
            </div>

            <div 
              id="current-experience-card"
              className="rounded-2xl border-2 border-cyan-800/70 bg-gradient-to-b from-[#0e1626] to-[#0b101c] p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle accent ribbon */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 blur-3xl pointer-events-none"></div>

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-800/70 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      CURRENT ROLE
                    </span>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800/50">
                      Enterprise Cloud & Backend
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {currentRole.role}
                  </h3>

                  <div className="text-lg font-semibold text-cyan-300 mt-1 flex items-center gap-2">
                    <span>{currentRole.company}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400 text-sm font-normal">{currentRole.location}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-2 text-xs font-mono text-slate-400 shrink-0">
                  <div className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{currentRole.period}</span>
                  </div>
                  <span className="text-slate-500 text-[11px]">Remote Engagement</span>
                </div>
              </div>

              {/* Responsibilities list strictly from resume */}
              <div className="py-6">
                <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Key Technical Responsibilities & Systems Engineering
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentRole.responsibilities.map((resp, i) => (
                    <div 
                      key={i} 
                      className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/80 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs font-mono text-slate-500 mb-3">
                  TECHNOLOGIES & DOMAINS:
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentRole.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium text-slate-200 bg-slate-800/80 border border-slate-700 hover:border-cyan-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Previous Experience - Secondary presentation */}
        {previousRoles.length > 0 && (
          <div>
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
              Previous Professional Experience
            </div>

            <div className="grid grid-cols-1 gap-6">
              {previousRoles.map((role) => (
                <div
                  key={role.id}
                  id={`previous-experience-${role.id}`}
                  className="rounded-xl border border-slate-800/90 bg-slate-900/30 p-6 hover:border-slate-700/80 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/60">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {role.role}
                      </h3>
                      <div className="text-sm text-slate-400 mt-0.5">
                        <span className="text-slate-300 font-medium">{role.company}</span>
                        <span className="mx-2 text-slate-600">•</span>
                        <span>{role.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800/80 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{role.period}</span>
                    </div>
                  </div>

                  <div className="py-4">
                    <ul className="space-y-2.5">
                      {role.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                          <ChevronRight className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-2">
                    {role.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
