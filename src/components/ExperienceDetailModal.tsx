import React from 'react';
import { X, CheckCircle, Building2, Calendar, FileText, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { ExperienceItem } from '../data/resumeData';

interface ExperienceDetailModalProps {
  experience: ExperienceItem | null;
  onClose: () => void;
}

export const ExperienceDetailModal: React.FC<ExperienceDetailModalProps> = ({ experience, onClose }) => {
  if (!experience) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between z-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>{experience.company}</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>{experience.duration}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
              {experience.role}
            </h3>
            {experience.domain && (
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Domain: {experience.domain}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Key Metrics / Highlights */}
          {experience.metrics && experience.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {experience.metrics.map((m, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl p-3">
                  <div className="text-xs text-slate-500 dark:text-slate-400">{m.label}</div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white font-mono tabular-nums">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Key Contributions */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Key Contributions & Deliverables</span>
            </h4>
            <ul className="space-y-3">
              {experience.keyContributions.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Modules Handled */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Techno-Functional Modules</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {experience.modules.map((mod, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-md"
                >
                  {mod}
                </span>
              ))}
            </div>
          </div>

          {/* Technology & Tools */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Technology Stack & Tooling</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {experience.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 rounded-md border border-blue-100 dark:border-blue-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* AIM Documentation & QA Note */}
          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 rounded-xl p-4 text-xs text-slate-600 dark:text-slate-300 space-y-1.5">
            <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
              <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Methodology & Documentation Standards</span>
            </div>
            <p>
              Strict adherence to Oracle Application Implementation Methodology (AIM), authoring high-precision MD70 (Technical Design) and MD50 (Functional Design) documents, accompanied by comprehensive test plan matrices and regression verification.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
