import React from 'react';
import { 
  ArrowRight, 
  Terminal as TerminalIcon, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Briefcase, 
  Sparkles,
  Layers,
  FileDown
} from 'lucide-react';
import { profileData } from '../data/profile';
import { HeroSystemVisual } from './HeroSystemVisual';

interface HeroProps {
  onOpenResumeNotice?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeNotice }) => {
  return (
    <section 
      id="hero" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-800/60"
    >
      {/* Background ambient lighting - restrained, non-glowing technical tone */}
      <div className="absolute inset-0 tech-grid-pattern pointer-events-none opacity-40"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-950/20 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Core Positioning & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-950/60 text-cyan-300 border border-cyan-800/60 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                {profileData.heroEyebrow}
              </span>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-slate-300 bg-slate-900/80 border border-slate-800 shadow-sm">
                <Briefcase className="w-3 h-3 text-emerald-400" />
                <span>Neo Technology Solutions, UK</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 
              id="hero-headline"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold tracking-tight text-white leading-[1.18]"
            >
              Building Intelligent Systems That Turn Complex Problems Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                Production-Ready AI Experiences.
              </span>
            </h1>

            {/* Supporting Paragraph from Resume */}
            <p 
              id="hero-summary"
              className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl"
            >
              {profileData.summary}
            </p>

            {/* Key Technical Metatags */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-slate-400">
              <span className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-slate-300">
                Python & FastAPI
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-slate-300">
                LangChain & RAG
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-slate-300">
                Microsoft Azure
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-slate-300">
                Microservices & MLOps
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                id="hero-cta-projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all shadow-md shadow-cyan-950/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                id="hero-cta-contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                <span>Let's Connect</span>
              </a>

              <button
                type="button"
                onClick={onOpenResumeNotice}
                id="hero-cta-resume"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 transition-all"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Links & Location metadata */}
            <div className="pt-4 flex flex-wrap items-center gap-5 text-sm text-slate-400 border-t border-slate-800/60">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github-link"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="font-mono text-xs">github/junaid528</span>
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin-link"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="font-mono text-xs">linkedin/mohammedjunaid-khan</span>
              </a>

              <a
                href={`mailto:${profileData.email}`}
                id="hero-email-link"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="font-mono text-xs">{profileData.email}</span>
              </a>

              <div className="flex items-center gap-1 text-slate-500 text-xs">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{profileData.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Conceptual AI Architecture Visualizer */}
          <div className="lg:col-span-5">
            <HeroSystemVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
