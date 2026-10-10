import React, { useState } from 'react';
import { Printer, Menu, X, Mail, Download, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onOpenPrintModal: () => void;
  onOpenContactModal: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenPrintModal, 
  onOpenContactModal,
  isDark,
  onToggleTheme 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-16">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#overview"
            className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
          >
            PRAVEEN KUMAR MANDHANIA
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a
              href="#experience"
              className="hover:text-slate-900 dark:hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
            >
              Experience
            </a>
            <a
              href="#competencies"
              className="hover:text-slate-900 dark:hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
            >
              Competencies
            </a>
            <a
              href="#education"
              className="hover:text-slate-900 dark:hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
            >
              Education
            </a>
            <a
              href="#accolades"
              className="hover:text-slate-900 dark:hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
            >
              Accolades
            </a>
            <a
              href="#personal-details"
              className="hover:text-slate-900 dark:hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
            >
              Personal Details
            </a>
          </nav>

          {/* Zone 3: 1 primary action + theme toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Dark/Light Mode Switcher */}
            <button
              onClick={onToggleTheme}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
              aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Project .ZIP Download */}
            <a
              href="/praveen-mandhania-resume-portfolio.zip"
              download="praveen-mandhania-resume-portfolio.zip"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/80 rounded-lg transition-colors whitespace-nowrap shrink-0"
              title="Download full project source code as .ZIP"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Project .ZIP</span>
            </a>

            {/* Export ATS CV Modal Button */}
            <button
              onClick={onOpenPrintModal}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 rounded-lg shadow-2xs hover:shadow-xs transition-colors whitespace-nowrap shrink-0"
            >
              Export ATS CV
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-md focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md"
          >
            Experience
          </a>
          <a
            href="#competencies"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md"
          >
            Key Competencies
          </a>
          <a
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md"
          >
            Academic Credentials
          </a>
          <a
            href="#accolades"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md"
          >
            Accolades & Certifications
          </a>
          <a
            href="#workshops"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md"
          >
            Workshops & Seminars
          </a>
          <a
            href="#personal-details"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md"
          >
            Personal Details
          </a>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <a
              href="/praveen-mandhania-resume-portfolio.zip"
              download="praveen-mandhania-resume-portfolio.zip"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 rounded-md transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Project .ZIP</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-md"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Praveen</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrintModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-white bg-slate-900 dark:bg-blue-600 rounded-md"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Export ATS Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
