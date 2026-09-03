import React from 'react';
import { 
  Cpu, 
  Workflow, 
  Server, 
  Database, 
  Cloud, 
  ArrowDown, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { stackLayers } from '../data/skills';

export const EngineeringStack: React.FC = () => {
  const layerIcons = [
    <Cpu className="w-4 h-4 text-cyan-400" key="1" />,
    <Workflow className="w-4 h-4 text-sky-400" key="2" />,
    <Server className="w-4 h-4 text-emerald-400" key="3" />,
    <Database className="w-4 h-4 text-indigo-400" key="4" />,
    <Cloud className="w-4 h-4 text-amber-400" key="5" />
  ];

  return (
    <div id="engineering-stack-visual" className="my-16">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <span>Engineering Architecture Stack</span>
          </h3>
          <p className="text-xs font-mono text-slate-400 mt-1">
            // 5-TIER TECHNICAL COMPOSITION: FOUNDATION THROUGH CLOUD HOSTING
          </p>
        </div>
        <span className="hidden sm:inline-flex text-[11px] font-mono text-slate-500 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
          FULL_SYSTEM_SPEC
        </span>
      </div>

      <div className="space-y-3">
        {stackLayers.map((layer, index) => (
          <div key={layer.layer} className="relative">
            <div className="rounded-xl border border-slate-800 bg-[#0c121e] p-4 sm:p-5 hover:border-slate-700 transition-colors shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    {layerIcons[index]}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold text-cyan-400">
                        TIER 0{index + 1}
                      </span>
                      <span className="text-sm font-bold text-white font-mono">
                        {layer.layer}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800">
                        {layer.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-sans mt-1">
                      {layer.description}
                    </p>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 md:justify-end shrink-0 max-w-md">
                  {layer.items.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:border-cyan-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Subtle flow connector */}
            {index < stackLayers.length - 1 && (
              <div className="flex items-center justify-center my-1">
                <div className="h-3 w-0.5 bg-slate-800"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
