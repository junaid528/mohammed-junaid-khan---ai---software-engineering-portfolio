import React from 'react';
import { 
  Terminal, 
  Bot, 
  Workflow, 
  Database, 
  Cloud, 
  Code2, 
  CheckCircle2, 
  Cpu, 
  Layers 
} from 'lucide-react';
import { skillCategoriesData } from '../data/skills';
import { EngineeringStack } from './EngineeringStack';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-5 h-5 text-cyan-400" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-sky-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-amber-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-slate-800/60 bg-[#080c14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-800/50 mb-4">
            <Code2 className="w-3.5 h-3.5" />
            <span>05 // TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Skillset & Domain Expertise
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Categorized across Generative AI architectures, foundation model orchestration, vector and relational databases, cloud hosting in Microsoft Azure, and core backend software engineering.
          </p>
        </div>

        {/* 5 Domain Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {skillCategoriesData.map((category) => (
            <div
              key={category.title}
              id={`skill-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="rounded-2xl border border-slate-800/90 bg-[#0c121e]/90 p-6 flex flex-col justify-between hover:border-slate-700/80 transition-colors shadow-lg"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {category.description}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-200 bg-slate-900 border border-slate-800/90 hover:border-cyan-500/50 hover:text-cyan-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>{category.skills.length} Capabilities</span>
                <span>Production Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Stack Visualization (5 tiers) */}
        <EngineeringStack />
      </div>
    </section>
  );
};
