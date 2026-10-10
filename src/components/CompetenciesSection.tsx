import React, { useState, useMemo } from 'react';
import { Cpu, Search, Check, Copy, Code2, Database, Layers, Terminal, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface CompetenciesSectionProps {
  onNotify: (msg: string) => void;
}

export const CompetenciesSection: React.FC<CompetenciesSectionProps> = ({ onNotify }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    "Programming Languages": <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
    "Technology & Enterprise ERP": <Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
    "Databases & Management Tools": <Database className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
    "Techno-Functional Modules": <Layers className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
    "DevOps, OS & Collaboration": <Terminal className="w-4 h-4 text-slate-700 dark:text-slate-300" />
  };

  const filteredCategories = useMemo(() => {
    return resumeData.competencies
      .filter((cat) => activeCategory === 'all' || cat.category === activeCategory)
      .map((cat) => {
        if (!searchQuery.trim()) return cat;
        const q = searchQuery.toLowerCase();
        const matchingSkills = cat.skills.filter(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            s.context?.toLowerCase().includes(q) ||
            s.level.toLowerCase().includes(q)
        );
        return {
          ...cat,
          skills: matchingSkills
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [activeCategory, searchQuery]);

  const copyAllSkills = () => {
    const text = resumeData.competencies
      .map((cat) => `${cat.category}:\n${cat.skills.map((s) => `• ${s.name} (${s.level})`).join('\n')}`)
      .join('\n\n');
    navigator.clipboard.writeText(text);
    onNotify('All competencies copied to clipboard for ATS/Recruiting!');
  };

  return (
    <section id="competencies" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
              <span>Technical Matrix</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>Enterprise & Cloud Specialization</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
              Key Competencies
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Comprehensive technical skillset extracted from production environments in Oracle EBS R12, PL/SQL engineering, Oracle Integration Cloud, and database architectures.
            </p>
          </div>

          <button
            onClick={copyAllSkills}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors shrink-0"
          >
            <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            <span>Copy Full Skills List</span>
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8 space-y-3">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search specific skill, tool, or library (e.g. PL/SQL, P2P, JIRA)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
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

            {/* Category Segmented Tabs */}
            <div className="flex items-center gap-1 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg overflow-x-auto text-xs">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                All Skills
              </button>
              {resumeData.competencies.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors ${
                    activeCategory === cat.category
                      ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {cat.category.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Competencies Grid */}
        <div className="space-y-8">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="bg-slate-50/70 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-2xs">
                    {categoryIcons[group.category] || <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {group.category}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {group.description}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 font-mono tabular-nums">
                  {group.skills.length} competencies
                </span>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-5">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-lg p-3.5 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-xs transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                          {skill.name}
                        </h4>
                        <span
                          className={`text-xs font-semibold shrink-0 ${
                            skill.level === 'Expert'
                              ? 'text-blue-700 dark:text-blue-400'
                              : skill.level === 'Advanced'
                              ? 'text-slate-700 dark:text-slate-300'
                              : 'text-slate-500 dark:text-slate-400'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      {skill.context && (
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                          {skill.context}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 text-center">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">No skills match your query "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-3 px-3 py-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
