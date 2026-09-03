import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  Terminal,
  BookOpen
} from 'lucide-react';
import { certificationsData } from '../data/education';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-24 border-b border-slate-800/60 bg-[#080c14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-800/50 mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>07 // PROFESSIONAL CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Certifications & Technical Training
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Industry training spanning Artificial Intelligence fundamentals, Generative AI application development, and full-stack backend development.
          </p>
        </div>

        {/* 4 Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certificationsData.map((cert, index) => (
            <div
              key={cert.title}
              id={`cert-card-${index}`}
              className="rounded-xl border border-slate-800/90 bg-[#0c121e]/90 p-5 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">
                    CERT // 0{index + 1}
                  </span>
                </div>

                <span className="text-[11px] font-mono text-cyan-400 font-semibold uppercase tracking-wider block mb-1">
                  {cert.issuer}
                </span>

                <h3 className="text-base font-bold text-white tracking-tight leading-snug mb-2">
                  {cert.title}
                </h3>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{cert.credentialType}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
