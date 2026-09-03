import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  ArrowUp,
  Heart,
  Cpu
} from 'lucide-react';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-[#06090f] border-t border-slate-800/80 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Identity */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <span className="font-mono text-sm font-bold text-white tracking-tight">
                Mohammed Junaid Khan
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                PROD-READY
              </span>
            </div>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Software Engineer • Generative AI • Cloud
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5 font-mono">
              Mysore, Karnataka, India • Neo Technology Solutions, UK
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profileData.email}`}
              className="p-2.5 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
              aria-label="Email Me"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              id="footer-back-to-top-btn"
              className="p-2.5 rounded-lg text-slate-400 hover:text-cyan-300 bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
              aria-label="Scroll back to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 Mohammed Junaid Khan. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <span>Engineered with React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
