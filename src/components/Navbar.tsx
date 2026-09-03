import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  Terminal as TerminalIcon,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { profileData } from '../data/profile';

interface NavbarProps {
  onOpenResumeNotice?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeNotice }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'experience', 'projects', 'architecture', 'skills', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleResumeClick = (e: React.MouseEvent) => {
    // If resume notice handler is provided, let user know or open
    if (onOpenResumeNotice) {
      onOpenResumeNotice();
    }
  };

  return (
    <header 
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#hero" 
          id="nav-brand-link"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg px-1 py-0.5"
        >
          <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 group-hover:text-cyan-300 transition-colors shadow-inner">
            <span className="font-mono text-sm font-bold tracking-tight">&lt;JK/&gt;</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-100 group-hover:text-white tracking-tight flex items-center gap-2">
              Mohammed Junaid Khan
              <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/60">
                SWE • GenAI
              </span>
            </span>
            <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Neo Tech Solutions UK
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/60 rounded-full px-3 py-1.5 shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase()}`}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-950/70 border border-cyan-800/50 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-github-btn"
            aria-label="GitHub Profile"
            className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 rounded-lg transition-colors border border-transparent hover:border-slate-700"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-linkedin-btn"
            aria-label="LinkedIn Profile"
            className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 rounded-lg transition-colors border border-transparent hover:border-slate-700"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <button
            onClick={handleResumeClick}
            id="nav-resume-btn"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/50 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={handleResumeClick}
            id="mobile-resume-nav-btn"
            className="px-2.5 py-1 rounded text-xs font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="nav-mobile-toggle-btn"
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer" 
          className="lg:hidden bg-[#0a0f1c]/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-2 backdrop-blur-xl animate-in fade-in slide-in-from-top-3 duration-200"
        >
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`mobile-nav-${link.name.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 flex items-center justify-between border border-transparent hover:border-slate-700/50"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
                aria-label="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenResumeNotice) onOpenResumeNotice();
              }}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 shadow flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5" />
              Download Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
