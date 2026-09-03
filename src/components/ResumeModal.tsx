import React from 'react';
import { 
  X, 
  Download, 
  FileText, 
  CheckCircle2, 
  ExternalLink, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code2,
  AlertCircle
} from 'lucide-react';
import { profileData } from '../data/profile';
import { experiencesData } from '../data/experience';
import { projectsData } from '../data/projects';
import { educationData, achievementData, certificationsData } from '../data/education';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      id="resume-view-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-[#0b101c] border border-slate-700 rounded-2xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-[#0e1424] flex items-center justify-between gap-4 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-800/80 flex items-center justify-center text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                Curriculum Vitae / Resume
              </h2>
              <p className="text-xs font-mono text-slate-400">
                Mohammed Junaid Khan — Verified Resume Overview
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Mohammed_Junaid_Khan_Resume.pdf"
              id="modal-direct-download-pdf-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              id="close-resume-modal-btn"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Notice for user */}
        <div className="bg-cyan-950/30 border-b border-cyan-800/40 px-5 py-3 flex items-start gap-2.5 text-xs text-cyan-200 font-mono">
          <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <span>Direct PDF download targets </span>
            <code className="bg-slate-900 px-1 py-0.5 rounded text-cyan-300 border border-slate-800">public/resume.pdf</code>
            <span>. Below is the verified complete resume text extracted strictly from the source of truth.</span>
          </div>
        </div>

        {/* Structured Resume Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans text-sm">
          {/* Header Card */}
          <div className="border-b border-slate-800 pb-5">
            <h1 className="text-2xl font-black text-white">{profileData.name}</h1>
            <p className="text-cyan-400 font-mono text-xs mt-1">{profileData.role}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 font-mono mt-2">
              <span>Email: {profileData.email}</span>
              <span>Phone: {profileData.phone}</span>
              <span>Location: {profileData.location}</span>
              <span>GitHub: github.com/junaid528</span>
            </div>
            <p className="mt-3 text-slate-300 text-xs leading-relaxed">
              {profileData.summary}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5" />
              Experience
            </h3>
            <div className="space-y-4">
              {experiencesData.map((exp) => (
                <div key={exp.id} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center justify-between text-xs font-semibold text-white">
                    <span>{exp.role} — {exp.company}</span>
                    <span className="font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-slate-300">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5" />
              Education & Honors
            </h3>
            <div className="space-y-2">
              {educationData.map((edu, i) => (
                <div key={i} className="p-3 rounded-lg bg-slate-900/40 border border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white">{edu.institution}</span>
                    <div className="text-slate-400">{edu.degree}</div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-cyan-300 font-bold">{edu.grade}</span>
                    <div className="text-slate-500 text-[10px]">{edu.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Award className="w-3.5 h-3.5" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {certificationsData.map((cert, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800 text-xs">
                  <div className="font-semibold text-white">{cert.title}</div>
                  <div className="text-[11px] font-mono text-cyan-400">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-[#0e1424] flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">
            Source: Mohammed Junaid Khan Resume
          </span>
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Mohammed_Junaid_Khan_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
