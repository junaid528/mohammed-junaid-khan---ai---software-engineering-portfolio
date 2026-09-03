import React, { useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Phone, 
  MapPin, 
  FileDown, 
  Check, 
  Copy, 
  ArrowRight, 
  Terminal,
  Send,
  Sparkles
} from 'lucide-react';
import { profileData } from '../data/profile';

interface ContactProps {
  onOpenResumeNotice: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResumeNotice }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(profileData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(subject || 'Engineering Discussion')}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#090e18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-800/50 mb-4">
              <Mail className="w-3.5 h-3.5" />
              <span>08 // INITIATE COLLABORATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Let's Build Something Intelligent.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              I'm open to opportunities involving Generative AI, backend engineering, cloud systems, intelligent applications, and production-focused software engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Direct Contact Cards */}
            <div className="md:col-span-6 space-y-4">
              {/* Email Card */}
              <div className="rounded-xl border border-slate-800/90 bg-[#0c121e]/90 p-5 flex items-center justify-between gap-4 shadow-lg">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/80 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a 
                      href={`mailto:${profileData.email}`}
                      className="text-sm font-mono font-bold text-white hover:text-cyan-300 transition-colors truncate block"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  id="copy-email-btn"
                  className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800 shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin-btn"
                className="rounded-xl border border-slate-800/90 bg-[#0c121e]/90 p-5 flex items-center justify-between gap-4 hover:border-slate-700 transition-colors shadow-lg group block"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-800/80 flex items-center justify-center text-blue-400 shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Professional Network
                    </span>
                    <span className="text-sm font-mono font-bold text-white group-hover:text-cyan-300 transition-colors truncate block">
                      linkedin.com/in/mohammedjunaid-khan
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 shrink-0" />
              </a>

              {/* GitHub Card */}
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-github-btn"
                className="rounded-xl border border-slate-800/90 bg-[#0c121e]/90 p-5 flex items-center justify-between gap-4 hover:border-slate-700 transition-colors shadow-lg group block"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-200 shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Source Code
                    </span>
                    <span className="text-sm font-mono font-bold text-white group-hover:text-cyan-300 transition-colors truncate block">
                      github.com/junaid528
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 shrink-0" />
              </a>

              {/* Phone Card (strictly in contact section as requested) */}
              <div className="rounded-xl border border-slate-800/90 bg-[#0c121e]/90 p-5 flex items-center justify-between gap-4 shadow-lg">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-800/80 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Phone (Direct)
                    </span>
                    <span className="text-sm font-mono font-bold text-white block">
                      {profileData.phone}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyPhone}
                  id="copy-phone-btn"
                  className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800 shrink-0"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Resume download quick action */}
              <button
                type="button"
                onClick={onOpenResumeNotice}
                id="contact-resume-action-btn"
                className="w-full py-3.5 px-4 rounded-xl border border-cyan-800/70 bg-cyan-950/40 hover:bg-cyan-950/70 text-cyan-300 font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download / Inspect Verified Resume (PDF)</span>
              </button>
            </div>

            {/* Quick Dispatch Message Form */}
            <div className="md:col-span-6 bg-[#0c121e] border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 pb-3 border-b border-slate-800">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Quick Message Dispatch</span>
              </div>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject / Discussion Topic
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. AI Engineering Role / Generative AI Project"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Project Requirements / Notes
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe the opportunity, pipeline requirements, or architectural objectives..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full py-3 rounded-xl font-semibold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all flex items-center justify-center gap-2 shadow-md shadow-cyan-950/40"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message via Email Client</span>
                  </button>
                  <span className="block text-[11px] font-mono text-slate-500 text-center mt-2">
                    Direct recipient: {profileData.email}
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
