import React, { useState } from 'react';
import { GraduationCap, Award, Calendar, School, Table as TableIcon, LayoutGrid } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const CredentialsSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  return (
    <section id="education" className="py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
              <span>Formal Education</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>Engineering & Secondary Credentials</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
              Academic Credentials
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Academic history with engineering background from Rajasthan Technical University and CBSE schooling in Jodhpur.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs shrink-0">
            <button
              onClick={() => setViewMode('cards')}
              className={`flex items-center gap-1.5 px-3 py-1.5 font-medium rounded-md transition-colors ${
                viewMode === 'cards'
                  ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Cards</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-1.5 px-3 py-1.5 font-medium rounded-md transition-colors ${
                viewMode === 'table'
                  ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>PDF Table</span>
            </button>
          </div>
        </div>

        {/* View Mode: Interactive Cards */}
        {viewMode === 'cards' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resumeData.education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-xs hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Level / Badge */}
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                    <span className="font-semibold text-blue-700 dark:text-blue-400">{edu.level}</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {edu.year}
                    </span>
                  </div>

                  {/* Degree Name */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {edu.degree}
                  </h3>

                  {/* Institute & Board */}
                  <div className="mt-3 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    <p className="flex items-start gap-2 font-medium text-slate-800 dark:text-slate-200">
                      <School className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{edu.institute}</span>
                    </p>
                    <p className="text-slate-500 dark:text-slate-500 pl-6">
                      {edu.boardUniversity}
                    </p>
                  </div>

                  {edu.details && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                      {edu.details}
                    </p>
                  )}
                </div>

                {/* Score Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Score Achieved</span>
                  <span className="text-base font-extrabold text-blue-700 dark:text-blue-400 font-mono tabular-nums">
                    {edu.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* View Mode: Replica of PDF Academic Table */
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-3.5 px-4 sm:px-6">Degree / Class</th>
                    <th className="py-3.5 px-4 sm:px-6">Name of the Institute</th>
                    <th className="py-3.5 px-4 sm:px-6">University / Board</th>
                    <th className="py-3.5 px-4 sm:px-6 text-center">Percentage / CGPA</th>
                    <th className="py-3.5 px-4 sm:px-6 text-right">Year</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {resumeData.education.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="py-4 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">
                        {row.degree}
                        <div className="text-[11px] text-slate-400 font-normal">{row.level}</div>
                      </td>
                      <td className="py-4 px-4 sm:px-6 font-medium text-slate-800 dark:text-slate-200">
                        {row.institute}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-slate-600 dark:text-slate-400">
                        {row.boardUniversity}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-center font-bold text-blue-700 dark:text-blue-400 font-mono tabular-nums">
                        {row.grade}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-right font-mono text-slate-600 dark:text-slate-400 tabular-nums">
                        {row.year}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
