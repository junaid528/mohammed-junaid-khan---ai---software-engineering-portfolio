import React from 'react';
import { 
  ShieldCheck, 
  Maximize2, 
  Database, 
  Cpu, 
  CheckCircle2, 
  Terminal, 
  Layers, 
  GitBranch,
  Server
} from 'lucide-react';
import { engineeringPrinciples, profileData } from '../data/profile';

export const About: React.FC = () => {
  const principleIcons = [
    <ShieldCheck className="w-5 h-5 text-cyan-400" key="1" />,
    <Maximize2 className="w-5 h-5 text-sky-400" key="2" />,
    <Database className="w-5 h-5 text-emerald-400" key="3" />,
    <Cpu className="w-5 h-5 text-indigo-400" key="4" />
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-slate-800/60 bg-[#080c14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-800/50 mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // PROFESSIONAL PERSPECTIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering With Purpose
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            I turn complex business and technical challenges into reliable, production-ready AI-powered experiences. My background spans Generative AI pipeline design, Retrieval-Augmented Generation (RAG), high-throughput backend APIs, and scalable Microsoft Azure cloud workflows.
          </p>
        </div>

        {/* Narrative & Engineering Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Main narrative block */}
          <div className="lg:col-span-7 bg-[#0b101b] border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Disciplined AI & Software Craftsmanship</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Modern AI systems require much more than a simple prompt wrapper. They demand robust software engineering: disciplined data ingestion pipelines, deterministic verification guardrails, modular database schemas, and resilient microservice architectures.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              As a Computer Science and Engineering (Data Science) graduate currently engineering cloud backends and REST APIs at Neo Technology Solutions, I bridge the gap between experimental generative algorithms and resilient, cost-optimized enterprise software.
            </p>

            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs text-slate-400">
              <div>
                <span className="text-slate-500 block">Primary Focus</span>
                <span className="text-slate-200 font-medium">GenAI & Backend</span>
              </div>
              <div>
                <span className="text-slate-500 block">Cloud Hosting</span>
                <span className="text-slate-200 font-medium">Microsoft Azure</span>
              </div>
              <div>
                <span className="text-slate-500 block">Methodology</span>
                <span className="text-slate-200 font-medium">CI/CD & MLOps</span>
              </div>
            </div>
          </div>

          {/* Quick Technical Competencies Card */}
          <div className="lg:col-span-5 bg-[#0b101b] border border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                <GitBranch className="w-4 h-4 text-emerald-400" />
                <span>Core Engineering Tenets</span>
              </h3>
              <ul className="space-y-3 font-mono text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Systematic problem-solving with strict edge-case validation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>RAG pipelines with contextual vector indexing & chunking</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>High-throughput FastAPI & Flask asynchronous API design</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Payload optimization & execution cost tuning in Azure</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Continuous integration, unit testing & server diagnostics</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <span className="text-[11px] font-mono text-slate-500">
                // POSITIONING: SOFTWARE ENGINEER | GENERATIVE AI & CLOUD
              </span>
            </div>
          </div>
        </div>

        {/* Engineering Philosophy Cards (4 Principles) */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Server className="w-5 h-5 text-cyan-400" />
              <span>Engineering Philosophy</span>
            </h3>
            <span className="font-mono text-xs text-slate-500">
              [4_CORE_PILLARS]
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {engineeringPrinciples.map((principle, index) => (
              <div 
                key={principle.number}
                id={`philosophy-card-${index}`}
                className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-5 hover:border-cyan-800/60 hover:bg-slate-900/70 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-slate-700 transition-colors">
                    {principleIcons[index]}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-500">
                    {principle.number}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {principle.title}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
