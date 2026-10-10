import React, { useState } from 'react';
import { Award, CheckCircle2, Cloud, ShieldCheck, Trophy, Sparkles } from 'lucide-react';
import { resumeData, AccoladeItem } from '../data/resumeData';

export const AccoladesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredAccolades = resumeData.accolades.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'oracle') return item.issuer.toLowerCase().includes('oracle');
    if (activeFilter === 'azure') return item.issuer.toLowerCase().includes('microsoft') || item.title.includes('Azure');
    if (activeFilter === 'hackathon') return item.type === 'Competition';
    if (activeFilter === 'ibm') return item.issuer.toLowerCase().includes('ibm');
    return true;
  });

  const getIcon = (item: AccoladeItem) => {
    if (item.issuer === 'Oracle') return <Cloud className="w-5 h-5 text-red-600 dark:text-red-400" />;
    if (item.issuer === 'Microsoft') return <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    if (item.type === 'Competition') return <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
    return <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
  };

  return (
    <section id="accolades" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
              <span>Certifications & Honors</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>Cloud & Hackathon Accolades</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
              Accolades & Certifications
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Professional credentials across Oracle Cloud Infrastructure, Microsoft Azure associate suite, IBM, and national-level hackathons.
            </p>
          </div>

          {/* Interactive Filters */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs overflow-x-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors ${
                activeFilter === 'all'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All ({resumeData.accolades.length})
            </button>
            <button
              onClick={() => setActiveFilter('oracle')}
              className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors ${
                activeFilter === 'oracle'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Oracle Cloud
            </button>
            <button
              onClick={() => setActiveFilter('azure')}
              className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors ${
                activeFilter === 'azure'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Microsoft Azure
            </button>
            <button
              onClick={() => setActiveFilter('hackathon')}
              className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors ${
                activeFilter === 'hackathon'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Hackathon
            </button>
            <button
              onClick={() => setActiveFilter('ibm')}
              className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors ${
                activeFilter === 'ibm'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              IBM
            </button>
          </div>
        </div>

        {/* Accolades Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAccolades.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-slate-850 border border-slate-200/90 dark:border-slate-800 rounded-xl p-6 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-2xs">
                    {getIcon(item)}
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                      {item.issuer}
                    </span>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500 tabular-nums">
                      {item.year}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
                  {item.details}
                </p>
              </div>

              {item.badgeCode && (
                <div className="mt-5 pt-3 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 dark:text-slate-500 uppercase tracking-wider font-medium text-[11px]">Cred Code</span>
                  <span className="font-mono text-slate-700 dark:text-slate-300 tabular-nums">
                    {item.badgeCode}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
