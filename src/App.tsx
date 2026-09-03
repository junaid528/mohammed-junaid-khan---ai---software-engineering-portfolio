import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ArchitecturePipeline } from './components/ArchitecturePipeline';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Terminal } from './components/Terminal';
import { GitHubRepos } from './components/GitHubRepos';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Sticky Header */}
      <Navbar onOpenResumeNotice={() => setResumeModalOpen(true)} />

      <main id="main-content">
        {/* Hero with AI System Visualizer */}
        <Hero onOpenResumeNotice={() => setResumeModalOpen(true)} />

        {/* About & Engineering Philosophy */}
        <About />

        {/* Primary Experience (Neo Tech Solutions & MindMatrix) */}
        <Experience />

        {/* Featured Projects with Architecture Pipelines */}
        <Projects />

        {/* Conceptual AI Architecture: How I Build AI Systems */}
        <ArchitecturePipeline />

        {/* Skills & 5-Tier Engineering Stack */}
        <Skills />

        {/* Education & Academic Topper Achievement */}
        <Education />

        {/* Verified Certifications */}
        <Certifications />

        {/* Interactive Developer Terminal */}
        <Terminal />

        {/* Public GitHub Repositories */}
        <GitHubRepos />

        {/* Contact & Dispatch */}
        <Contact onOpenResumeNotice={() => setResumeModalOpen(true)} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Resume Document & Download Modal */}
      <ResumeModal 
        isOpen={resumeModalOpen} 
        onClose={() => setResumeModalOpen(false)} 
      />
    </div>
  );
}
