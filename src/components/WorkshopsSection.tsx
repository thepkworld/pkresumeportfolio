import React from 'react';
import { Presentation, BookOpen, Calendar, MapPin, UserCheck } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const WorkshopsSection: React.FC = () => {
  return (
    <section id="workshops" className="py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
            <span>Continuous Learning</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span>Seminars & Skill Sessions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
            Workshops, Conferences & Seminars
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Specialized technical development programs in algorithms, data structures, and emerging computer application technologies.
          </p>
        </div>

        {/* 2-Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.workshops.map((w, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                    {w.type}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {w.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {w.title}
                </h3>

                <div className="mt-3 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                  <p className="flex items-center gap-1.5 font-medium text-slate-800 dark:text-slate-200">
                    <UserCheck className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Host / Speaker: {w.speakerOrInstitution || w.organizer}</span>
                  </p>
                  <p className="text-slate-500 dark:text-slate-500 pl-5">
                    Institution: {w.organizer}
                  </p>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-4 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                  {w.summary}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500">
                <span>Verified Attendance & Certification</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-medium">Completed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
