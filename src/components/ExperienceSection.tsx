import React, { useState, useMemo } from 'react';
import { Briefcase, Building2, Calendar, Search, Filter, ChevronRight, CheckCircle2, Layers } from 'lucide-react';
import { resumeData, ExperienceItem } from '../data/resumeData';
import { ExperienceDetailModal } from './ExperienceDetailModal';

export const ExperienceSection: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<string>('all');
  const [selectedModule, setSelectedModule] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalExp, setActiveModalExp] = useState<ExperienceItem | null>(null);

  // Collect distinct modules
  const allModules = useMemo(() => {
    const set = new Set<string>();
    resumeData.experiences.forEach(exp => exp.modules.forEach(m => set.add(m)));
    return Array.from(set);
  }, []);

  // Filter experiences
  const filteredExperiences = useMemo(() => {
    return resumeData.experiences.filter(exp => {
      // Company filter
      if (selectedCompany !== 'all' && exp.company !== selectedCompany) {
        return false;
      }
      // Module filter
      if (selectedModule !== 'all' && !exp.modules.includes(selectedModule)) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesRole = exp.role.toLowerCase().includes(q);
        const matchesCompany = exp.company.toLowerCase().includes(q);
        const matchesTech = exp.technologies.some(t => t.toLowerCase().includes(q));
        const matchesContrib = exp.keyContributions.some(c => c.toLowerCase().includes(q));
        const matchesModule = exp.modules.some(m => m.toLowerCase().includes(q));
        return matchesRole || matchesCompany || matchesTech || matchesContrib || matchesModule;
      }
      return true;
    });
  }, [selectedCompany, selectedModule, searchQuery]);

  return (
    <section id="experience" className="py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
              <span>Career History</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>4 Years Total Experience</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
              Professional Experience
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Hands-on engineering across HSBC, Tata Consultancy Services, and Infosys delivering robust PL/SQL packages, Oracle EBS R12 integrations, and AIM documentation.
            </p>
          </div>

          {/* Quick Stats Capsule */}
          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 shrink-0">
            <span>3 Enterprise Employers</span>
            <span aria-hidden="true">·</span>
            <span>BFSI & ERP Focus</span>
          </div>
        </div>

        {/* Interactive Controls Bar */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 mb-8 shadow-xs space-y-3">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search technologies, modules (e.g. OIC, P2P, MD70)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-slate-900 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Company Segmented Filter */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-x-auto">
              <button
                onClick={() => setSelectedCompany('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                  selectedCompany === 'all'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                All Companies ({resumeData.experiences.length})
              </button>
              {resumeData.experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setSelectedCompany(exp.company)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                    selectedCompany === exp.company
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>

          {/* Module Filter Chips */}
          <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 overflow-x-auto text-xs">
            <span className="text-slate-400 font-medium shrink-0 flex items-center gap-1">
              <Filter className="w-3 h-3" />
              Filter by Module:
            </span>
            <button
              onClick={() => setSelectedModule('all')}
              className={`px-2.5 py-1 rounded text-xs transition-colors whitespace-nowrap ${
                selectedModule === 'all'
                  ? 'bg-blue-600 text-white font-medium'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              All Modules
            </button>
            {allModules.map((m) => (
              <button
                key={m}
                onClick={() => setSelectedModule(selectedModule === m ? 'all' : m)}
                className={`px-2.5 py-1 rounded text-xs transition-colors whitespace-nowrap ${
                  selectedModule === m
                    ? 'bg-blue-600 text-white font-medium'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Cards Stream */}
        {filteredExperiences.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 text-center">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">No matching experience found.</p>
            <p className="text-xs text-slate-500 mt-1">Try adjusting your search query or module filter.</p>
            <button
              onClick={() => {
                setSelectedCompany('all');
                setSelectedModule('all');
                setSearchQuery('');
              }}
              className="mt-3 px-3 py-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredExperiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-7 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
                      <span className="font-bold text-blue-700 dark:text-blue-400 text-sm flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        {exp.company}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {exp.duration}
                      </span>
                      {exp.isCurrent && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Present Role</span>
                        </>
                      )}
                      {exp.domain && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>{exp.domain}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 self-start sm:self-auto shrink-0 text-xs">
                    {exp.metrics && exp.metrics.length > 0 && (
                      <div className="hidden sm:flex items-center gap-2 text-slate-500 dark:text-slate-400">
                        {exp.metrics.map((metric, idx) => (
                          <React.Fragment key={idx}>
                            {idx > 0 && <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>}
                            <span>{metric.label}: <strong className="text-slate-900 dark:text-white font-mono tabular-nums">{metric.value}</strong></span>
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                    <button
                      onClick={() => setActiveModalExp(exp)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-md transition-colors"
                    >
                      <span>Deep Dive</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Key Contributions verbatim from PDF */}
                <div className="py-4 space-y-2.5">
                  <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Key Contributions & Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.keyContributions.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology and Module Badges */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-3 sm:items-center justify-between text-xs">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-slate-400 dark:text-slate-500 font-medium mr-1">Tech Stack:</span>
                    {exp.technologies.map((tech, tIdx) => (
                      <button
                        key={tIdx}
                        onClick={() => setSearchQuery(tech)}
                        className="px-2 py-0.5 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-blue-700 dark:hover:text-blue-300 rounded border border-slate-200 dark:border-slate-700 transition-colors"
                        title={`Filter by ${tech}`}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0 text-slate-500 dark:text-slate-400">
                    <Layers className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-medium text-slate-700 dark:text-slate-300">Modules:</span>
                    <span>{exp.modules.join(', ')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <ExperienceDetailModal
        experience={activeModalExp}
        onClose={() => setActiveModalExp(null)}
      />
    </section>
  );
};
