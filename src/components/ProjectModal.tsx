import React, { useState } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  Database, 
  ShieldCheck, 
  Workflow,
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  if (!project) return null;

  return (
    <div 
      id="project-case-study-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-[#0b101c] border border-slate-700/80 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-[#0e1424] flex items-start justify-between gap-4 sticky top-0 z-20">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                CASE STUDY // {project.id.toUpperCase()}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm font-mono text-cyan-400/90 mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            id="close-project-modal-btn"
            aria-label="Close Project Case Study"
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* 01 Overview */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold mb-2">
              <span>01 — OVERVIEW</span>
            </div>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* 02 Engineering Focus & Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs font-mono text-amber-400 font-bold mb-2">
                02A — THE ENGINEERING CHALLENGE
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs font-mono text-emerald-400 font-bold mb-2">
                02B — ARCHITECTURAL SOLUTION
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {project.solution}
              </p>
            </div>
          </div>

          {/* 03 Interactive Architecture Pipeline */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs font-mono text-cyan-400 font-bold">
                03 — PIPELINE & ARCHITECTURE SPECIFICATION
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                Click any step to inspect
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                {project.architectureNodes.map((node, index) => {
                  const isNodeActive = selectedNode === node.id;
                  return (
                    <React.Fragment key={node.id}>
                      <button
                        type="button"
                        onClick={() => setSelectedNode(isNodeActive ? null : node.id)}
                        className={`text-left px-3 py-2 rounded-lg border text-xs font-mono transition-all ${
                          isNodeActive
                            ? 'bg-cyan-950 border-cyan-500 text-cyan-200 shadow-md ring-1 ring-cyan-400'
                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                        }`}
                      >
                        <div className="text-[10px] text-slate-500 font-semibold">{node.category}</div>
                        <div className="font-bold text-slate-200 mt-0.5">{node.label}</div>
                        {node.tech && (
                          <div className="text-[10px] text-cyan-400/90">{node.tech}</div>
                        )}
                      </button>
                      {index < project.architectureNodes.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-slate-600 shrink-0 hidden sm:block" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Inspector for selected node */}
              {selectedNode && (
                <div className="mt-3 p-3 rounded-lg bg-cyan-950/40 border border-cyan-800/60 text-xs font-mono animate-in fade-in duration-150">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold mb-1">
                    <Info className="w-3.5 h-3.5" />
                    <span>
                      {project.architectureNodes.find(n => n.id === selectedNode)?.label} — {project.architectureNodes.find(n => n.id === selectedNode)?.category}
                    </span>
                  </div>
                  <p className="text-slate-300 font-sans text-xs mt-1">
                    {project.architectureNodes.find(n => n.id === selectedNode)?.description}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* 04 Engineering Highlights strictly from resume */}
          <div>
            <div className="text-xs font-mono text-cyan-400 font-bold mb-3">
              04 — ENGINEERING HIGHLIGHTS & IMPLEMENTATION
            </div>
            <div className="space-y-2.5">
              {project.engineeringHighlights.map((highlight, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 05 Technologies */}
          <div>
            <div className="text-xs font-mono text-cyan-400 font-bold mb-2">
              05 — TECHNOLOGIES & TOOLING
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono text-slate-200 bg-slate-900 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 06 Key Takeaways */}
          <div>
            <div className="text-xs font-mono text-cyan-400 font-bold mb-2">
              06 — KEY ENGINEERING TAKEAWAYS
            </div>
            <ul className="space-y-2 font-mono text-xs text-slate-300">
              {project.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-[#0e1424] flex items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-400">
            Source repo: <span className="text-slate-300">github.com/junaid528</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={`modal-github-link-${project.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
