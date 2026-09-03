import React, { useState, useRef, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  CornerDownLeft, 
  Check, 
  Copy, 
  Trash2, 
  HelpCircle,
  Play
} from 'lucide-react';
import { profileData } from '../data/profile';

interface CommandOutput {
  command: string;
  response: string | string[];
  isError?: boolean;
}

export const Terminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'whoami',
      response: [
        'Mohammed Junaid Khan',
        'Software Engineer | Generative AI & Cloud Engineering',
        'Location: Mysore, Karnataka, India'
      ]
    },
    {
      command: 'focus',
      response: [
        '• Generative AI & Autonomous Agents',
        '• RAG Pipelines & Knowledge Indexing',
        '• High-Throughput Backend Microservices (FastAPI / Flask)',
        '• Enterprise Cloud Infrastructure (Microsoft Azure)',
        '• MLOps, CI/CD & Automated System Verification'
      ]
    },
    {
      command: 'build',
      response: 'Turning complex problems into production-ready AI experiences with zero hallucination and high reliability.'
    }
  ]);
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const commandLibrary: Record<string, string | string[]> = {
    whoami: [
      'Mohammed Junaid Khan',
      'Software Engineer | Generative AI & Cloud Engineering',
      'Location: Mysore, Karnataka, India'
    ],
    focus: [
      '• Generative AI & Autonomous Agents',
      '• RAG Pipelines & Knowledge Indexing',
      '• High-Throughput Backend Microservices (FastAPI / Flask)',
      '• Enterprise Cloud Infrastructure (Microsoft Azure)',
      '• MLOps, CI/CD & Automated System Verification'
    ],
    build: 'Turning complex problems into production-ready AI experiences with zero hallucination and high reliability.',
    stack: [
      '• AI: GPT, LLaMA, Gemini, LangChain, LlamaIndex, HuggingFace',
      '• Backend: Python, FastAPI, Flask, REST APIs',
      '• Databases: PostgreSQL, MongoDB, Pinecone, FAISS, Weaviate',
      '• Cloud & Ops: Microsoft Azure, Docker, Kubernetes, CI/CD, MLflow'
    ],
    experience: [
      '• Software Engineer Intern @ Neo Technology Solutions, UK (June 2026 - Present)',
      '  Backend cloud workflows, Azure hosting, REST APIs, microservices, payload optimization.',
      '• Android App Development Intern @ MindMatrix (Feb 2026 - May 2026)',
      '  Kotlin, MVVM, data pipelines, automated testing logic.'
    ],
    projects: [
      '1. UniLingo AI — Multimodal AI Agent (Text, Voice, OCR) with RAG & Guardrails',
      '2. Majestic Pipeline — High-Throughput FastAPI & PostgreSQL Automation Pipeline',
      '3. Smart Knowledge Index — Data-Driven Configuration & Operational Asset Indexing'
    ],
    contact: [
      `Email: ${profileData.email}`,
      `GitHub: ${profileData.github}`,
      `LinkedIn: ${profileData.linkedin}`,
      `Phone: ${profileData.phone}`
    ],
    help: [
      'Available commands:',
      '  whoami      Display engineer identity and specialization',
      '  focus       View core technical engineering focus areas',
      '  build       Show engineering mission and philosophy',
      '  stack       Inspect 5-tier technology stack',
      '  experience  Review professional work history',
      '  projects    List key featured architecture projects',
      '  contact     Show verified contact coordinates',
      '  clear       Clear terminal history',
      '  help        Show this help manual'
    ]
  };

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (commandLibrary[trimmed]) {
      setHistory(prev => [...prev, { command: trimmed, response: commandLibrary[trimmed] }]);
    } else {
      setHistory(prev => [
        ...prev, 
        { 
          command: trimmed, 
          response: `Command not found: "${trimmed}". Type "help" to see available commands.`,
          isError: true 
        }
      ]);
    }

    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const copyLog = () => {
    const text = history
      .map(h => `$ ${h.command}\n${Array.isArray(h.response) ? h.response.join('\n') : h.response}`)
      .join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-20 border-b border-slate-800/60 bg-[#070b12] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Terminal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-800/50 mb-2">
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>INTERACTIVE DEVELOPER SHELL</span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Interactive Systems Terminal
            </h2>
          </div>

          {/* Quick command triggers */}
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
            <span className="text-slate-500 text-[11px] mr-1">Quick run:</span>
            {['whoami', 'focus', 'stack', 'experience', 'projects', 'help'].map((cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={() => handleCommand(cmd)}
                className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-800 transition-colors"
              >
                ${cmd}
              </button>
            ))}
          </div>
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl border border-slate-800 bg-[#090e18] shadow-2xl overflow-hidden font-mono text-xs">
          {/* Top bar */}
          <div className="px-4 py-3 bg-[#0d1424] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-[11px] text-slate-400 pl-2">
                junaid@workstation: ~/ai-systems
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyLog}
                className="p-1 text-slate-400 hover:text-white rounded"
                title="Copy Terminal Output"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => setHistory([])}
                className="p-1 text-slate-400 hover:text-white rounded"
                title="Clear Terminal"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Console Output */}
          <div className="p-4 sm:p-6 space-y-4 max-h-[380px] overflow-y-auto leading-relaxed">
            <div className="text-slate-500 text-[11px]">
              // MOHAMMED JUNAID KHAN — SYSTEM SHELL v2.4 (INTERACTIVE INTERFACE)
              <br />
              // Type "help" or click the quick pills above to inspect engineering architecture.
            </div>

            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                  <span className="text-slate-600">$</span>
                  <span>{item.command}</span>
                </div>
                <div className={`${item.isError ? 'text-rose-400' : 'text-slate-300'} pl-4`}>
                  {Array.isArray(item.response) ? (
                    item.response.map((line, lIdx) => (
                      <div key={lIdx} className="leading-5">
                        {line}
                      </div>
                    ))
                  ) : (
                    <div>{item.response}</div>
                  )}
                </div>
              </div>
            ))}

            <div ref={bottomRef} />
          </div>

          {/* Terminal Input Row */}
          <div className="px-4 py-3 bg-[#0b101c] border-t border-slate-800/80 flex items-center gap-2">
            <span className="text-cyan-400 font-bold">$</span>
            <input
              type="text"
              id="terminal-input"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type a command (e.g., 'focus', 'stack', 'projects')..."
              className="w-full bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none text-xs font-mono"
            />
            <button
              onClick={() => handleCommand(inputVal)}
              className="p-1.5 text-cyan-400 hover:text-cyan-300 rounded hover:bg-slate-800"
              aria-label="Run command"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
