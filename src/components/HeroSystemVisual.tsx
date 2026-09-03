import React, { useState } from 'react';
import { 
  ArrowDown, 
  Cpu, 
  Database, 
  Server, 
  Cloud, 
  Sparkles, 
  Radio, 
  ShieldCheck, 
  Layers, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface StageInfo {
  id: string;
  stageNumber: string;
  name: string;
  tag: string;
  technologies: string;
  detail: string;
  accent: string;
}

export const HeroSystemVisual: React.FC = () => {
  const [activeStage, setActiveStage] = useState<string>('rag');

  const stages: StageInfo[] = [
    {
      id: 'input',
      stageNumber: '01',
      name: 'MULTIMODAL INGESTION',
      tag: 'Data Stream',
      technologies: 'Text • Voice Audio • OCR Optical Feeds',
      detail: 'Standardizes disparate real-time inputs into structured payload chunks with schema validation before processing.',
      accent: 'border-slate-700 bg-slate-900/90 text-slate-300'
    },
    {
      id: 'orchestration',
      stageNumber: '02',
      name: 'AI ORCHESTRATION & AGENTS',
      tag: 'Reasoning Engine',
      technologies: 'LangChain • Agent Graphs • LLM Calls',
      detail: 'Executes goal decomposition, prompt formatting, tool calling logic, and safety guardrails to regulate model behavior.',
      accent: 'border-cyan-800/80 bg-cyan-950/40 text-cyan-300'
    },
    {
      id: 'rag',
      stageNumber: '03',
      name: 'KNOWLEDGE & VECTOR RAG',
      tag: 'Context Grounding',
      technologies: 'Embeddings • Vector Search • Semantic Store',
      detail: 'Retrieves relevant domain chunks via cosine similarity to ground responses and prevent model hallucination.',
      accent: 'border-emerald-800/80 bg-emerald-950/40 text-emerald-300'
    },
    {
      id: 'backend',
      stageNumber: '04',
      name: 'BACKEND SERVICES & APIS',
      tag: 'Microservices',
      technologies: 'Python • FastAPI • Flask • Async Queues',
      detail: 'High-throughput payload orchestration, secure query parsing, and robust error recovery under enterprise load.',
      accent: 'border-blue-800/80 bg-blue-950/40 text-blue-300'
    },
    {
      id: 'infrastructure',
      stageNumber: '05',
      name: 'CLOUD INFRASTRUCTURE & MLOPS',
      tag: 'Production Ops',
      technologies: 'Microsoft Azure • Docker • CI/CD • Diagnostics',
      detail: 'Scalable cloud infrastructure hosting, automated testing, server log diagnostics, and resource cost optimization.',
      accent: 'border-indigo-800/80 bg-indigo-950/40 text-indigo-300'
    },
    {
      id: 'output',
      stageNumber: '06',
      name: 'INTELLIGENT APPLICATION',
      tag: 'Delivered Experience',
      technologies: 'Production APIs • Client Applications',
      detail: 'Validated, low-latency, deterministic AI-powered experiences meeting enterprise SLAs.',
      accent: 'border-cyan-700/80 bg-slate-900 text-cyan-400'
    }
  ];

  return (
    <div 
      id="hero-system-visual" 
      className="relative rounded-2xl border border-slate-800/90 bg-[#0c121e]/90 p-5 sm:p-6 shadow-2xl backdrop-blur-xl overflow-hidden"
    >
      {/* Visual Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
          </div>
          <span className="text-[11px] font-mono text-slate-400 pl-2">
            pipeline_arch.sys
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-cyan-950/70 text-cyan-300 border border-cyan-800/60">
            <Radio className="w-2.5 h-2.5 animate-pulse text-cyan-400" />
            LIVE SPEC
          </span>
        </div>
      </div>

      {/* Caption badge */}
      <div className="mb-4 text-[11px] text-slate-400 font-mono flex items-center justify-between">
        <span>// CONCEPTUAL ENGINEERING DOMAIN PIPELINE</span>
        <span className="text-slate-500 text-[10px]">Hover or click node</span>
      </div>

      {/* Interactive Architecture Flow Stack */}
      <div className="space-y-2 relative">
        {stages.map((stage, idx) => {
          const isSelected = activeStage === stage.id;
          return (
            <div key={stage.id} className="relative">
              <button
                type="button"
                id={`visual-stage-btn-${stage.id}`}
                onClick={() => setActiveStage(stage.id)}
                onMouseEnter={() => setActiveStage(stage.id)}
                className={`w-full text-left p-2.5 sm:p-3 rounded-lg border transition-all duration-200 flex items-center justify-between group ${
                  isSelected 
                    ? `${stage.accent} ring-1 ring-cyan-500/40 shadow-lg scale-[1.01]` 
                    : 'border-slate-800/90 bg-slate-900/50 hover:bg-slate-800/60 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="font-mono text-[10px] text-slate-500 font-semibold w-5 shrink-0">
                    {stage.stageNumber}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold font-mono tracking-tight text-slate-200 truncate group-hover:text-white">
                        {stage.name}
                      </span>
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 truncate">
                      {stage.technologies}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-1.5 pl-2">
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-black/30 text-cyan-300 font-semibold' : 'bg-slate-800/80 text-slate-400'
                  }`}>
                    {stage.tag}
                  </span>
                </div>
              </button>

              {/* Connector line between steps */}
              {idx < stages.length - 1 && (
                <div className="h-2 flex items-center justify-center my-0.5">
                  <div className="w-0.5 h-full bg-slate-800"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Dynamic Detail Card */}
      {activeStage && (
        <div className="mt-4 p-3 rounded-lg bg-slate-950/90 border border-slate-800 text-xs font-mono animate-in fade-in duration-150">
          <div className="flex items-center justify-between text-[11px] text-cyan-400 font-bold mb-1">
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              {stages.find(s => s.id === activeStage)?.name}
            </span>
            <span className="text-slate-500 text-[10px]">
              Active Inspect
            </span>
          </div>
          <p className="text-slate-300 text-xs leading-relaxed font-sans mt-1">
            {stages.find(s => s.id === activeStage)?.detail}
          </p>
        </div>
      )}

      {/* Verification footnote strictly from prompt */}
      <div className="mt-3 text-[10px] font-mono text-slate-500 flex items-center gap-1.5 border-t border-slate-800/60 pt-2.5">
        <CheckCircle2 className="w-3 h-3 text-cyan-500" />
        <span>Conceptual domain representation: Python • LangChain • FastAPI • Azure</span>
      </div>
    </div>
  );
};
