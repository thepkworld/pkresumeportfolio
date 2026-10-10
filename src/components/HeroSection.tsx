import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Copy, Check, Download, ArrowDown, Award, Briefcase, ExternalLink, Sparkles, Terminal } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import portraitImg from '../assets/images/praveen_mandhania_portrait_1791624352402.jpg';

interface HeroSectionProps {
  onNotify: (msg: string) => void;
  onOpenPrintModal: () => void;
  onOpenContactModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNotify, onOpenPrintModal, onOpenContactModal }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    onNotify(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="overview" className="relative pt-10 pb-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typographic & Career Profile */}
          <div className="lg:col-span-7 space-y-6">
            {/* Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-blue-700 dark:text-blue-400 uppercase">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                Oracle Integration & PLSQL Developer
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-slate-500 dark:text-slate-400">BFSI Domain Specialist</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">HSBC Active</span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {resumeData.personalInfo.name}
              </h1>
              <p className="mt-2 text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300">
                {resumeData.personalInfo.role}
              </p>
            </div>

            {/* Professional Summary from PDF */}
            <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700 rounded-xl p-5 sm:p-6 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base shadow-2xs">
              <p className="font-semibold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Professional Summary</span>
              </p>
              <p>
                {resumeData.personalInfo.summary}
              </p>
            </div>

            {/* Direct Contact Metadata Row with Quick Copy */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              {/* Phone */}
              <div className="group flex items-center justify-between p-3 bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
                <a
                  href={`tel:${resumeData.personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-2 font-medium hover:text-blue-600 dark:hover:text-blue-400 truncate"
                  title="Call Praveen"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="truncate">{resumeData.personalInfo.phone}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(resumeData.personalInfo.phone, 'Phone number')}
                  className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1 rounded"
                  title="Copy Phone"
                >
                  {copiedField === 'Phone number' ? <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>

              {/* Email */}
              <div className="group flex items-center justify-between p-3 bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
                <a
                  href={`mailto:${resumeData.personalInfo.email}`}
                  className="flex items-center gap-2 font-medium hover:text-blue-600 dark:hover:text-blue-400 truncate"
                  title="Email Praveen"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="truncate">{resumeData.personalInfo.email}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(resumeData.personalInfo.email, 'Email address')}
                  className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1 rounded"
                  title="Copy Email"
                >
                  {copiedField === 'Email address' ? <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="group flex items-center justify-between p-3 bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
                <a
                  href="https://www.linkedin.com/in/praveen-kumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-medium hover:text-blue-600 dark:hover:text-blue-400 truncate"
                  title="Visit LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="truncate">LinkedIn: {resumeData.personalInfo.linkedin}</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                </a>
                <button
                  onClick={() => copyToClipboard("https://www.linkedin.com/in/praveen-kumar", 'LinkedIn URL')}
                  className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1 rounded"
                  title="Copy LinkedIn URL"
                >
                  {copiedField === 'LinkedIn URL' ? <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 rounded-lg shadow-sm hover:shadow transition-all"
              >
                <Briefcase className="w-4 h-4" />
                <span>Explore Experience</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onOpenPrintModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                <span>Print / ATS CV</span>
              </button>
              <a
                href="/praveen-mandhania-resume-portfolio.zip"
                download="praveen-mandhania-resume-portfolio.zip"
                onClick={() => onNotify('Downloading project files in .zip...')}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/80 rounded-lg transition-colors"
                title="Download full source code in .zip"
              >
                <Download className="w-4 h-4" />
                <span>Download .ZIP</span>
              </a>
              <button
                onClick={onOpenContactModal}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                <MapPin className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Jodhpur, Rajasthan</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Anchor & Verified Credentials Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 shadow-sm tech-glow-blue">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 mb-4 flex items-center justify-center">
                {!imageError ? (
                  <img
                    src={portraitImg}
                    alt="Praveen Kumar Mandhania - Oracle Integration & PLSQL Developer"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-white p-6 text-center">
                    <span className="text-3xl font-extrabold tracking-wider font-mono text-blue-400">PKM</span>
                    <span className="text-xs text-slate-300 mt-2 font-medium">Praveen Kumar Mandhania</span>
                    <span className="text-[11px] text-blue-400 mt-0.5">Oracle Integration & PLSQL Developer</span>
                  </div>
                )}
              </div>

              {/* Candidate Info Strip */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/80 pb-2.5">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Current Role</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">Oracle Integration Engineer</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/80 pb-2.5">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Current Employer</span>
                  <span className="text-xs font-bold text-blue-700 dark:text-blue-400">HSBC</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/80 pb-2.5">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Previous Orgs</span>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">TCS · Infosys</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Key Certifications</span>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300 text-right">OCI Associate & Azure</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-medium">
                  <Award className="w-3.5 h-3.5" />
                  Verified Credentials
                </span>
                <span>Active in BFSI ERP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metrics KPI Strip Below Hero Split */}
        <div className="mt-14 pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6">
            {resumeData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700 rounded-xl p-4 transition-all hover:bg-white dark:hover:bg-slate-750 hover:shadow-xs"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-mono tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                  {stat.context}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
