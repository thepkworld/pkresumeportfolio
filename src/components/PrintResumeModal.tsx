import React, { useRef } from 'react';
import { X, Printer, Copy, Check, FileDown, ExternalLink, Download } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface PrintResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNotify: (msg: string) => void;
}

export const PrintResumeModal: React.FC<PrintResumeModalProps> = ({ isOpen, onClose, onNotify }) => {
  const resumeRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyPlaintextResume = () => {
    const lines: string[] = [
      resumeData.personalInfo.name,
      resumeData.personalInfo.role,
      `Phone: ${resumeData.personalInfo.phone} | Email: ${resumeData.personalInfo.email} | LinkedIn: ${resumeData.personalInfo.linkedin}`,
      '',
      'PROFESSIONAL SUMMARY',
      resumeData.personalInfo.summary,
      '',
      'EXPERIENCE',
      ...resumeData.experiences.flatMap((exp) => [
        `Role: ${exp.role}`,
        `Company: ${exp.company}`,
        `Duration: ${exp.duration}`,
        `Technology: ${exp.technologies.join(', ')}`,
        'Key Contributions:',
        ...exp.keyContributions.map((c) => `• ${c}`),
        ''
      ]),
      'ACADEMIC CREDENTIALS',
      ...resumeData.education.map(
        (e) => `• ${e.degree} - ${e.institute} (${e.boardUniversity}) | ${e.grade} | ${e.year}`
      ),
      '',
      'KEY COMPETENCIES',
      ...resumeData.competencies.map(
        (c) => `${c.category}: ${c.skills.map((s) => s.name).join(', ')}`
      ),
      '',
      'ACCOLADE',
      ...resumeData.accolades.map((a) => `• ${a.title} (${a.issuer}, ${a.year})`),
      '',
      'WORKSHOPS/CONFERENCES/SEMINARS',
      ...resumeData.workshops.map((w) => `• ${w.title} - ${w.organizer} (${w.date})`),
      '',
      'PERSONAL DETAILS',
      `• Father's Name: ${resumeData.personalInfo.fatherName}`,
      `• Date of Birth: ${resumeData.personalInfo.dateOfBirth}`,
      `• Permanent Address: ${resumeData.personalInfo.permanentAddress}`,
      `• Languages Known: ${resumeData.personalInfo.languages.map((l) => `${l.name} (${l.proficiency})`).join(', ')}`,
      `• Hobbies and Interests: ${resumeData.personalInfo.hobbies.join(', ')}`
    ];

    navigator.clipboard.writeText(lines.join('\n'));
    onNotify('Plaintext resume copied to clipboard!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Printer className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-bold tracking-tight">Printable ATS Resume & Export</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/praveen-mandhania-resume-portfolio.zip"
              download="praveen-mandhania-resume-portfolio.zip"
              onClick={() => onNotify('Downloading project files in .zip...')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
              title="Download full project source code as .ZIP"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Project .ZIP</span>
            </a>
            <button
              onClick={copyPlaintextResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors"
              title="Copy as plain text"
            >
              <Copy className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Copy Plaintext</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white rounded-lg border border-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content - Scrollable Document View */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-slate-100 dark:bg-slate-950">
          {/* Paper Document Container */}
          <div
            ref={resumeRef}
            className="max-w-[800px] mx-auto bg-white p-8 sm:p-12 shadow-md border border-slate-200 text-slate-900 font-sans space-y-6 text-sm"
          >
            {/* Document Header */}
            <div className="border-b-2 border-slate-900 pb-4">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                {resumeData.personalInfo.name}
              </h1>
              <p className="text-sm font-semibold text-slate-700 mt-0.5">
                {resumeData.personalInfo.role}
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 mt-2 font-mono">
                <span>{resumeData.personalInfo.phone}</span>
                <span>•</span>
                <span>{resumeData.personalInfo.email}</span>
                <span>•</span>
                <span>LinkedIn: {resumeData.personalInfo.linkedin}</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed text-justify">
                {resumeData.personalInfo.summary}
              </p>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
                EXPERIENCE
              </h2>
              <div className="space-y-5">
                {resumeData.experiences.map((exp) => (
                  <div key={exp.id} className="space-y-1.5">
                    <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm">
                      <span>Role: {exp.role}</span>
                      <span className="font-mono text-xs">{exp.duration}</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-700">
                      Company: {exp.company}
                    </div>
                    <div className="text-xs text-slate-600">
                      <span className="font-medium">Technology:</span> {exp.technologies.join(', ')}.
                    </div>
                    <div className="text-xs text-slate-700">
                      <div className="font-semibold mb-1">Key Contributions:</div>
                      <ul className="list-disc pl-5 space-y-1 text-xs text-slate-800">
                        {exp.keyContributions.map((contrib, idx) => (
                          <li key={idx} className="leading-snug">
                            {contrib}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Credentials */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                ACADEMIC CREDENTIALS
              </h2>
              <table className="w-full text-left text-xs border border-slate-300 border-collapse mt-2">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-300 font-bold">
                    <th className="p-2 border-r border-slate-300">Degree/Class</th>
                    <th className="p-2 border-r border-slate-300">Name of the Institute</th>
                    <th className="p-2 border-r border-slate-300">University/Board</th>
                    <th className="p-2 border-r border-slate-300 text-center">Percentage/CGPA</th>
                    <th className="p-2 text-right">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {resumeData.education.map((e, idx) => (
                    <tr key={idx} className="border-b border-slate-200">
                      <td className="p-2 border-r border-slate-300 font-medium">{e.degree}</td>
                      <td className="p-2 border-r border-slate-300">{e.institute}</td>
                      <td className="p-2 border-r border-slate-300">{e.boardUniversity}</td>
                      <td className="p-2 border-r border-slate-300 text-center font-bold font-mono">{e.grade}</td>
                      <td className="p-2 text-right font-mono">{e.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Key Competencies */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                KEY COMPETENCIES
              </h2>
              <div className="space-y-1.5 text-xs text-slate-800">
                <p>
                  <strong className="font-semibold">Programming Languages:</strong> PL/SQL, Java, C++, C language.
                </p>
                <p>
                  <strong className="font-semibold">Technology:</strong> Oracle EBS Technical R12 Apps, PL/SQL API, Oracle Reports and Forms, MySQL, Oracle Technical modules P2P, O2C, JIRA, GIT, ServiceNow UNIX and Linux shell scripting.
                </p>
                <p>
                  <strong className="font-semibold">Database:</strong> Oracle Database and SQL Developer.
                </p>
              </div>
            </div>

            {/* Accolade */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                ACCOLADE
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-xs text-slate-800">
                {resumeData.accolades.map((acc, idx) => (
                  <li key={idx} className="leading-snug">
                    {acc.title} ({acc.issuer}, {acc.year})
                  </li>
                ))}
              </ul>
            </div>

            {/* Workshops / Conferences / Seminars */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                WORKSHOPS/CONFERENCES/SEMINARS
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-xs text-slate-800">
                {resumeData.workshops.map((w, idx) => (
                  <li key={idx} className="leading-snug">
                    {w.title} ({w.organizer}, {w.date})
                  </li>
                ))}
              </ul>
            </div>

            {/* Personal Details */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                PERSONAL DETAILS
              </h2>
              <div className="space-y-1 text-xs text-slate-800">
                <p>• Father’s Name: - {resumeData.personalInfo.fatherName}</p>
                <p>• Date of Birth: - {resumeData.personalInfo.dateOfBirth}</p>
                <p>• Permanent Address: - {resumeData.personalInfo.permanentAddress}</p>
                <p>
                  • Languages Known: - {resumeData.personalInfo.languages.map((l) => `${l.name} (${l.proficiency})`).join(', ')}.
                </p>
                <p>• Hobbies and Interests: - {resumeData.personalInfo.hobbies.join(', ')}.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
