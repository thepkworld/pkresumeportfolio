import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SlidingShowcaseSection } from './components/SlidingShowcaseSection';
import { OracleWorkflowSimulator } from './components/OracleWorkflowSimulator';
import { ExperienceSection } from './components/ExperienceSection';
import { CompetenciesSection } from './components/CompetenciesSection';
import { CredentialsSection } from './components/CredentialsSection';
import { AccoladesSection } from './components/AccoladesSection';
import { WorkshopsSection } from './components/WorkshopsSection';
import { PersonalDetailsSection } from './components/PersonalDetailsSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { PrintResumeModal } from './components/PrintResumeModal';
import { ContactModal } from './components/ContactModal';
import { Briefcase, Cpu, GraduationCap, Award, BookOpen, User, Sparkles, GitBranch } from 'lucide-react';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Theme state: dark or light, synced with localStorage and html class
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('praveen_portfolio_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('praveen_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('praveen_portfolio_theme', 'light');
    }
  }, [isDark]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white flex flex-col font-sans transition-colors">
      {/* Toast Notification Container */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

      {/* Top Bar Navigation with Dark/Light Theme Toggle */}
      <Navbar
        onOpenPrintModal={() => setIsPrintModalOpen(true)}
        onOpenContactModal={() => setIsContactModalOpen(true)}
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
      />

      {/* Quick Section Jump Sub-bar for Easy Navigation */}
      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-16 z-30 shadow-2xs overflow-x-auto no-print transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1 sm:gap-2 py-2 text-xs font-medium text-slate-600 dark:text-slate-300">
            <span className="text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider text-[10px] mr-2 shrink-0 hidden sm:inline">
              Sections:
            </span>
            <a
              href="#overview"
              className="px-2.5 py-1 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors whitespace-nowrap shrink-0"
            >
              Summary
            </a>
            <a
              href="#showcase"
              className="flex items-center gap-1 px-2.5 py-1 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
              <span>Showcase</span>
            </a>
            <a
              href="#experience"
              className="flex items-center gap-1 px-2.5 py-1 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors whitespace-nowrap shrink-0"
            >
              <Briefcase className="w-3 h-3 text-blue-600 dark:text-blue-400" />
              <span>Experience</span>
            </a>
            <a
              href="#workflows"
              className="flex items-center gap-1 px-2.5 py-1 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors whitespace-nowrap shrink-0"
            >
              <GitBranch className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
              <span>Workflows</span>
            </a>
            <a
              href="#competencies"
              className="flex items-center gap-1 px-2.5 py-1 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors whitespace-nowrap shrink-0"
            >
              <Cpu className="w-3 h-3 text-purple-600 dark:text-purple-400" />
              <span>Competencies</span>
            </a>
            <a
              href="#education"
              className="flex items-center gap-1 px-2.5 py-1 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors whitespace-nowrap shrink-0"
            >
              <GraduationCap className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
              <span>Education</span>
            </a>
            <a
              href="#accolades"
              className="flex items-center gap-1 px-2.5 py-1 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors whitespace-nowrap shrink-0"
            >
              <Award className="w-3 h-3 text-amber-600 dark:text-amber-400" />
              <span>Accolades</span>
            </a>
            <a
              href="#workshops"
              className="flex items-center gap-1 px-2.5 py-1 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors whitespace-nowrap shrink-0"
            >
              <BookOpen className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
              <span>Workshops</span>
            </a>
            <a
              href="#personal-details"
              className="flex items-center gap-1 px-2.5 py-1 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors whitespace-nowrap shrink-0"
            >
              <User className="w-3 h-3 text-slate-600 dark:text-slate-400" />
              <span>Personal Details</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content Area with Segregated Sections */}
      <main className="flex-1">
        {/* 1. Header & Summary Section */}
        <HeroSection
          onNotify={showToast}
          onOpenPrintModal={() => setIsPrintModalOpen(true)}
          onOpenContactModal={() => setIsContactModalOpen(true)}
        />

        {/* 2. Interactive Sliding Showcase Section (New) */}
        <div id="showcase">
          <SlidingShowcaseSection />
        </div>

        {/* 3. Professional Experience */}
        <ExperienceSection />

        {/* 4. Oracle ERP & Integration Architecture Simulator (New) */}
        <div id="workflows">
          <OracleWorkflowSimulator />
        </div>

        {/* 5. Key Competencies */}
        <CompetenciesSection onNotify={showToast} />

        {/* 6. Academic Credentials */}
        <CredentialsSection />

        {/* 7. Accolades & Certifications */}
        <AccoladesSection />

        {/* 8. Workshops / Conferences / Seminars */}
        <WorkshopsSection />

        {/* 9. Personal Details */}
        <PersonalDetailsSection
          onNotify={showToast}
          onOpenContactModal={() => setIsContactModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrintModal={() => setIsPrintModalOpen(true)}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      {/* Printable ATS Resume Modal */}
      <PrintResumeModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        onNotify={showToast}
      />

      {/* Contact & Message Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        onNotify={showToast}
      />
    </div>
  );
}
