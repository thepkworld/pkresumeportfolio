import React, { useState } from 'react';
import { User, Calendar, MapPin, Languages, Music, Film, Trophy, Copy, Check, Download, Mail, Phone, ExternalLink } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface PersonalDetailsSectionProps {
  onNotify: (msg: string) => void;
  onOpenContactModal: () => void;
}

export const PersonalDetailsSection: React.FC<PersonalDetailsSectionProps> = ({ onNotify, onOpenContactModal }) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    onNotify(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  // Generate and download a real vCard (.vcf)
  const downloadVCard = () => {
    const vCardContent = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:Praveen Kumar Mandhania',
      'N:Mandhania;Praveen;Kumar;;',
      'TITLE:Oracle Integration & PLSQL Developer',
      'TEL;TYPE=CELL:+916377365122',
      'EMAIL;TYPE=INTERNET:kumarpraveenofficial@gmail.com',
      'ADR;TYPE=HOME:;;6-G-163\\, Kudi Bhagtasni Housing Board;Jodhpur;Rajasthan;342005;India',
      'URL:https://www.linkedin.com/in/praveen-kumar',
      'NOTE:Oracle Integration Cloud\\, PL/SQL\\, Oracle EBS R12 Specialist',
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Praveen_Kumar_Mandhania.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    onNotify('Downloaded Praveen Kumar Mandhania vCard (.vcf)!');
  };

  return (
    <section id="personal-details" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
              <span>Biographical Information</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>Personal Profile</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
              Personal Details & Background
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Authentic background details recorded from official resume documentation, including permanent address, linguistic proficiencies, and personal interests.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={downloadVCard}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
              <span>Download Contact Card (.vcf)</span>
            </button>
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </button>
          </div>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Official Biographical Records (8 cols) */}
          <div className="lg:col-span-8 bg-slate-50/70 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-7 space-y-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 pb-3 border-b border-slate-200 dark:border-slate-700">
              Identity & Address Records
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Father's Name */}
              <div className="space-y-1">
                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  Father's Name
                </span>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  {resumeData.personalInfo.fatherName}
                </p>
              </div>

              {/* Date of Birth */}
              <div className="space-y-1">
                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  Date of Birth
                </span>
                <p className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                  {resumeData.personalInfo.dateOfBirth}
                </p>
              </div>
            </div>

            {/* Permanent Address */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-700 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  Permanent Address
                </span>
                <button
                  onClick={() => copyText(resumeData.personalInfo.permanentAddress, 'Address')}
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  {copiedItem === 'Address' ? <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedItem === 'Address' ? 'Copied' : 'Copy Address'}</span>
                </button>
              </div>
              <div className="p-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-mono">
                {resumeData.personalInfo.permanentAddress}
              </div>
            </div>

            {/* Languages Known */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-700 space-y-3">
              <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Languages className="w-3.5 h-3.5 text-slate-400" />
                Languages Known
              </span>
              <div className="flex flex-wrap gap-3">
                {resumeData.personalInfo.languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-3.5 py-2 rounded-lg text-xs"
                  >
                    <span className="font-bold text-slate-900 dark:text-white">{lang.name}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-medium">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hobbies & Leisure Interests (4 cols) */}
          <div className="lg:col-span-4 bg-slate-50/70 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 pb-3 border-b border-slate-200 dark:border-slate-700">
                Hobbies & Interests
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Personal pastimes and activities for relaxation, fitness, and analytical rejuvenation outside work:
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <div className="p-2 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 rounded-md">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Playing Cricket</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Team strategy & athleticism</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <div className="p-2 bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-400 rounded-md">
                    <Music className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Listening to Music</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Focus & acoustic melody</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <div className="p-2 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 rounded-md">
                    <Film className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Watching Movies</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Cinematography & narrative storytelling</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Quick Action */}
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
              <a
                href={`mailto:${resumeData.personalInfo.email}?subject=Career Opportunity for Praveen Kumar Mandhania`}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Send Direct Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
