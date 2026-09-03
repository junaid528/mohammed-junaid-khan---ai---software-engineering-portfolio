import React, { useState } from 'react';
import { 
  FolderGit2, 
  Terminal, 
  Sparkles, 
  Layers, 
  SlidersHorizontal 
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'genai') return project.technologies.some(t => ['LangChain', 'HuggingFace', 'RAG', 'Vector Stores'].includes(t));
    if (activeFilter === 'pipelines') return project.technologies.some(t => ['FastAPI', 'PostgreSQL', 'SQL', 'Python'].includes(t));
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-slate-800/60 bg-[#080c14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-800/50 mb-4">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>03 // FEATURED ENGINEERING PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Production Architectures & Systems
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              In-depth technical case studies detailing multimodal Generative AI agents, enterprise data ingestion pipelines, and retrieval-augmented database indices.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeFilter === 'all'
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/70 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Systems ({projectsData.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('genai')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeFilter === 'genai'
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/70 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Generative AI & RAG
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('pipelines')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeFilter === 'pipelines'
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/70 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Enterprise Data Pipelines
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* Modals */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
