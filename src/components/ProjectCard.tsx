import React, { useState } from 'react';
import { 
  ArrowRight, 
  Github, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Workflow, 
  ShieldCheck,
  Maximize2
} from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      id={`project-card-${project.id}`}
      className="rounded-2xl border border-slate-800/90 bg-[#0c121e]/90 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700/80 transition-all duration-200 shadow-xl group"
    >
      <div>
        {/* Card Header & Category Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-cyan-950/70 text-cyan-300 border border-cyan-800/60">
            {project.category}
          </span>
          <span className="text-[11px] font-mono text-slate-500">
            ARCH_ID: {project.id}
          </span>
        </div>

        <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1 mb-4">
          {project.subtitle}
        </p>

        {/* Overview paragraph */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {project.overview}
        </p>

        {/* Architectural Flow Mini-Visualizer */}
        <div className="mb-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
            <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
              <Workflow className="w-3.5 h-3.5" />
              SYSTEM ARCHITECTURE PIPELINE
            </span>
            <span className="text-[10px] text-slate-500 font-mono">
              {project.architectureNodes.length} NODES
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
            {project.architectureNodes.map((node, i) => (
              <React.Fragment key={node.id}>
                <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  {node.label}
                </span>
                {i < project.architectureNodes.length - 1 && (
                  <span className="text-slate-600">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Engineering Highlights (First 2 always visible, remaining when expanded) */}
        <div className="space-y-2 mb-6">
          <div className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider">
            Engineering Highlights:
          </div>
          {(expanded ? project.engineeringHighlights : project.engineeringHighlights.slice(0, 2)).map((hl, index) => (
            <div key={index} className="flex items-start gap-2.5 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span>{hl}</span>
            </div>
          ))}

          {project.engineeringHighlights.length > 2 && (
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 pt-1"
            >
              {expanded ? (
                <>
                  <span>Show less</span>
                  <ChevronUp className="w-3 h-3" />
                </>
              ) : (
                <>
                  <span>+{project.engineeringHighlights.length - 2} more technical highlights</span>
                  <ChevronDown className="w-3 h-3" />
                </>
              )}
            </button>
          )}
        </div>
      </div>

      <div>
        {/* Tech tags */}
        <div className="pt-4 border-t border-slate-800/80 mb-5">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span 
                key={tech}
                className="px-2.5 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onOpenModal(project)}
            id={`open-case-study-${project.id}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/60 transition-all shadow-sm group-hover:bg-cyan-950 group-hover:border-cyan-800"
          >
            <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Detailed Case Study</span>
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-mono text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
