import React, { useState } from 'react';
import { 
  Workflow, 
  ArrowDown, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Database, 
  Server, 
  Cloud, 
  ShieldCheck, 
  Activity,
  Terminal,
  Sparkles,
  Info
} from 'lucide-react';

interface PipelineLayer {
  step: string;
  name: string;
  subtitle: string;
  category: string;
  icon: React.ReactNode;
  purpose: string;
  technicalImplementation: string;
  guardrailsOrMetrics: string;
}

export const ArchitecturePipeline: React.FC = () => {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number>(2);

  const layers: PipelineLayer[] = [
    {
      step: '01',
      name: 'USER & INTERACTION INGESTION',
      subtitle: 'Client Payload Entry',
      category: 'Input Layer',
      icon: <Terminal className="w-4 h-4 text-cyan-400" />,
      purpose: 'Accepts multimodal queries across text, audio streams, and OCR document scans from client applications.',
      technicalImplementation: 'Payload schema validation, rate-limiting tokens, input size sanitization, and encoding normalization.',
      guardrailsOrMetrics: 'Prevents malformed payloads before allocating downstream compute resources.'
    },
    {
      step: '02',
      name: 'INPUT PREPROCESSING & TOKENIZATION',
      subtitle: 'Payload Sanitization & Chunking',
      category: 'Data Prep',
      icon: <Layers className="w-4 h-4 text-sky-400" />,
      purpose: 'Normalizes raw formats, parses OCR optical blocks, transcribes audio, and segments inputs into bounded semantic chunks.',
      technicalImplementation: 'Token count boundary detection, text cleansing pipelines, and format standardizations.',
      guardrailsOrMetrics: 'Guarantees context length fits foundation model context windows.'
    },
    {
      step: '03',
      name: 'LLM & AGENT ORCHESTRATION',
      subtitle: 'Multi-Step Generative Reasoning',
      category: 'Orchestration Layer',
      icon: <Cpu className="w-4 h-4 text-emerald-400" />,
      purpose: 'Decomposes complex requests, coordinates tool execution, dynamically structures prompts, and regulates agent loop state.',
      technicalImplementation: 'LangChain and agent frameworks, multi-step workflow graphs, structured output schemas, and dynamic few-shot templates.',
      guardrailsOrMetrics: 'Enforces deterministic state transitions and prevents infinite reasoning loops.'
    },
    {
      step: '04',
      name: 'RETRIEVAL & SEMANTIC SEARCH',
      subtitle: 'Cosine Similarity Query Engine',
      category: 'Retrieval Layer',
      icon: <Workflow className="w-4 h-4 text-blue-400" />,
      purpose: 'Queries indexed domain data using dense vector embeddings to fetch relevant factual context.',
      technicalImplementation: 'HuggingFace embedding models, similarity threshold filtering, and hybrid keyword-vector indexing.',
      guardrailsOrMetrics: 'Ensures only context exceeding cosine similarity thresholds is passed to the generation prompt.'
    },
    {
      step: '05',
      name: 'KNOWLEDGE & VECTOR INDEX',
      subtitle: 'High-Dimensional Storage',
      category: 'Persistence Layer',
      icon: <Database className="w-4 h-4 text-indigo-400" />,
      purpose: 'Houses partitioned corporate records, operational metrics, and indexed documentation embeddings.',
      technicalImplementation: 'Cloud vector partitions, FAISS/Pinecone indexing concepts, and synchronized relational PostgreSQL metadata.',
      guardrailsOrMetrics: 'Strict tenant isolation and encrypted vector storage partitions.'
    },
    {
      step: '06',
      name: 'SYSTEM RULES & GUARDRAILS',
      subtitle: 'Hallucination Suppression',
      category: 'Safety & Policy',
      icon: <ShieldCheck className="w-4 h-4 text-rose-400" />,
      purpose: 'Constrains model outputs to verified facts, suppresses hallucination, and filters out policy violations.',
      technicalImplementation: 'Negative prompt rules, citation validation, structured JSON schema parsing, and fallback deterministic handlers.',
      guardrailsOrMetrics: 'Zero tolerance for ungrounded claims in enterprise workflows.'
    },
    {
      step: '07',
      name: 'BACKEND SERVICES & APIS',
      subtitle: 'Microservice Coordination',
      category: 'Service Layer',
      icon: <Server className="w-4 h-4 text-cyan-400" />,
      purpose: 'Executes core business logic, routes asynchronous workloads, and exposes standardized REST endpoints.',
      technicalImplementation: 'Python, FastAPI, and Flask asynchronous handlers, connection pooling, and payload compression.',
      guardrailsOrMetrics: 'Optimized payload delivery speeds and responsive response structures.'
    },
    {
      step: '08',
      name: 'CLOUD INFRASTRUCTURE',
      subtitle: 'Scalable Enterprise Compute',
      category: 'Cloud Layer',
      icon: <Cloud className="w-4 h-4 text-amber-400" />,
      purpose: 'Hosts microservices and backend workflows with automated scaling and high availability.',
      technicalImplementation: 'Microsoft Azure hosting, Docker containerization, and automated environment provisioning.',
      guardrailsOrMetrics: 'Continuous resource scaling and execution cost optimization during deployment cycles.'
    },
    {
      step: '09',
      name: 'OBSERVABILITY & TESTING',
      subtitle: 'Diagnostics & Quality Verification',
      category: 'MLOps & Reliability',
      icon: <Activity className="w-4 h-4 text-teal-400" />,
      purpose: 'Monitors server logs, diagnoses latency bottlenecks, and executes continuous automated testing suites.',
      technicalImplementation: 'Log analysis, CI/CD automated test runs, unit coverage, and runtime exception tracking.',
      guardrailsOrMetrics: 'Immediate anomaly detection and automated rollback triggers.'
    },
    {
      step: '10',
      name: 'PRODUCTION APPLICATION',
      subtitle: 'Validated User Experience',
      category: 'Application Layer',
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
      purpose: 'Delivers intelligent, low-latency, and grounded AI-driven capabilities to end users.',
      technicalImplementation: 'Clean API contracts, predictable payload schemas, and robust client integration.',
      guardrailsOrMetrics: 'SLA-backed response reliability and consistent UX.'
    }
  ];

  const currentLayer = layers[selectedLayerIndex];

  return (
    <section id="architecture" className="py-20 md:py-28 border-b border-slate-800/60 bg-[#090e18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-800/50 mb-4">
            <Workflow className="w-3.5 h-3.5" />
            <span>04 // TECHNICAL ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Build AI Systems
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            A step-by-step conceptual representation of my engineering pipeline — illustrating how raw inputs flow through orchestration, vector retrieval, safety guardrails, backend APIs, and cloud infrastructure to produce dependable production software.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 px-2.5 py-1 rounded text-[11px] font-mono text-slate-400 bg-slate-900 border border-slate-800">
            <span>// NOTE: Conceptual representation of engineering stack & pipeline methodology</span>
          </div>
        </div>

        {/* Interactive Master Pipeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 10-Step Interactive Pipeline List */}
          <div className="lg:col-span-7 space-y-2">
            {layers.map((layer, index) => {
              const isSelected = selectedLayerIndex === index;
              return (
                <button
                  key={layer.step}
                  type="button"
                  id={`pipeline-step-btn-${index}`}
                  onClick={() => setSelectedLayerIndex(index)}
                  className={`w-full text-left p-3 sm:p-3.5 rounded-xl border transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-500/80 shadow-md ring-1 ring-cyan-500/30'
                      : 'bg-slate-950/60 border-slate-800/90 hover:bg-slate-900/60 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-mono text-xs font-bold text-slate-500 w-6 shrink-0">
                      {layer.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                      {layer.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-mono font-bold text-slate-200 group-hover:text-white truncate">
                        {layer.name}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 truncate">
                        {layer.subtitle}
                      </div>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded shrink-0 ml-2 ${
                    isSelected ? 'bg-cyan-950 text-cyan-300 font-semibold' : 'bg-slate-900 text-slate-500'
                  }`}>
                    {layer.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Layer Inspector */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div 
              id="architecture-layer-detail"
              className="rounded-2xl border border-slate-700/80 bg-[#0c121e] p-6 shadow-2xl space-y-6"
            >
              <div className="border-b border-slate-800 pb-4">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    STAGE {currentLayer.step} // {currentLayer.category.toUpperCase()}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Active Layer Spec
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {currentLayer.name}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  {currentLayer.subtitle}
                </p>
              </div>

              {/* Purpose */}
              <div>
                <h4 className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider mb-2">
                  Layer Purpose & Mission:
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed font-sans bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                  {currentLayer.purpose}
                </p>
              </div>

              {/* Technical Implementation */}
              <div>
                <h4 className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider mb-2">
                  Technical Implementation & Tooling:
                </h4>
                <p className="text-xs text-slate-300 font-mono leading-relaxed bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                  {currentLayer.technicalImplementation}
                </p>
              </div>

              {/* Guardrails / Quality Metrics */}
              <div>
                <h4 className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider mb-2">
                  Reliability & Verification Guardrail:
                </h4>
                <p className="text-xs text-slate-300 font-sans leading-relaxed bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                  {currentLayer.guardrailsOrMetrics}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>Domain: Python • LangChain • FastAPI • Azure</span>
                <span>Step {selectedLayerIndex + 1} of 10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
