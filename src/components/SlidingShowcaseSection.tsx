import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Sparkles, 
  Layers, 
  Building2, 
  Award, 
  Cpu, 
  Code2, 
  TrendingUp, 
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface SlideItem {
  id: string;
  category: 'Enterprise Role' | 'Cloud Credential' | 'Hackathon & DSA';
  title: string;
  subtitle: string;
  period: string;
  statHighlight?: { value: string; label: string };
  highlights: string[];
  techStack: string[];
  targetSection: string;
  accentColor: string; // for theme styling
}

const slides: SlideItem[] = [
  {
    id: 'hsbc-highlight',
    category: 'Enterprise Role',
    title: 'Oracle Integration Engineer',
    subtitle: 'HSBC · BFSI Banking & Financial Services',
    period: 'Sept 2025 - Present',
    statHighlight: { value: '85%', label: 'Customer Satisfaction Score' },
    highlights: [
      'Associated with clients to gather and analyze business requirements, ensuring efficient project delivery.',
      'Led a cross-functional team for enhanced view of project scope and timeline.',
      'Architected Oracle techno-functional modules including P2P, O2C, PO, AP/AR.',
      'Designed, developed, and deployed PL/SQL 90% defect free codes with unit & regression testing.',
      'Authored AIM MD70, MD50, and comprehensive test plans leveraging GitHub Copilot.'
    ],
    techStack: ['Oracle Integration Cloud (OIC)', 'PL/SQL', 'OCI', 'Fusion HCM', 'GitHub Copilot', 'JIRA', 'ServiceNow'],
    targetSection: '#experience',
    accentColor: 'from-blue-600 to-cyan-500'
  },
  {
    id: 'tcs-highlight',
    category: 'Enterprise Role',
    title: 'PLSQL Developer',
    subtitle: 'Tata Consultancy Services · Enterprise Consulting',
    period: 'Jan 2023 - Sept 2025',
    statHighlight: { value: '90%', label: 'Defect-Free Code Standard' },
    highlights: [
      'Spearheaded enterprise PL/SQL core development and database interfaces.',
      'Covered critical techno-functional workflows across P2P, O2C, PO, and AP/AR modules.',
      'Coordinated cross-functional stakeholder sprint delivery with 85% satisfaction.',
      'Built custom PL/SQL APIs and integrated them seamlessly with Oracle SQL Database.'
    ],
    techStack: ['PL/SQL', 'Oracle EBS Apps Technical', 'PL/SQL APIs', 'Git', 'JIRA', 'Oracle SQL Database'],
    targetSection: '#experience',
    accentColor: 'from-purple-600 to-indigo-500'
  },
  {
    id: 'infosys-highlight',
    category: 'Enterprise Role',
    title: 'System Engineer',
    subtitle: 'Infosys · Enterprise ERP Systems',
    period: 'Jan 2021 - Dec 2022',
    statHighlight: { value: '+25%', label: 'System Performance Boost' },
    highlights: [
      'Analyzed technical production bugs and updates resulting in 25% system performance speedup.',
      'Collected requirements and analyzed solutions to provide >90% defect-free delivery.',
      'Covered Procurement and Order Management modules in Oracle EBS R12.',
      'Engineered PL/SQL codes, custom Oracle reports, and handled live EBS application tickets.'
    ],
    techStack: ['Oracle EBS Apps R12', 'PL/SQL', 'Oracle Reports', 'SQL Database', 'UNIX Shell', 'ServiceNow'],
    targetSection: '#experience',
    accentColor: 'from-emerald-600 to-teal-500'
  },
  {
    id: 'oci-certs-highlight',
    category: 'Cloud Credential',
    title: 'Oracle Cloud Infrastructure Certifications',
    subtitle: 'Oracle Certified Associate Credential Holder',
    period: '2024 & 2021',
    statHighlight: { value: '2x', label: 'Oracle Cloud Certified' },
    highlights: [
      'Certified "Oracle Cloud Infrastructure Foundations Associate 2024".',
      'Certified "Oracle Cloud Infrastructure Associate Developer 2021".',
      'Demonstrated expertise in OCI compute, virtual cloud networking, IAM security, and cloud database deployment.'
    ],
    techStack: ['OCI Foundations 2024', 'OCI Developer 2021', 'Oracle Cloud Infrastructure', 'Cloud IAM'],
    targetSection: '#accolades',
    accentColor: 'from-amber-600 to-orange-500'
  },
  {
    id: 'azure-certs-highlight',
    category: 'Cloud Credential',
    title: 'Microsoft Azure Associate Suite',
    subtitle: 'Multi-Exam Microsoft Associate Certification',
    period: 'Verified Credential',
    statHighlight: { value: '4x', label: 'Microsoft Azure Exams' },
    highlights: [
      'Certified in AZ-204 (Developing Solutions for Microsoft Azure).',
      'Certified in SC-400 (Information Protection Administrator).',
      'Certified in MB-910 (Dynamics 365 Fundamentals).',
      'Certified in AZ-104 (Azure Administrator Associate).'
    ],
    techStack: ['AZ-204', 'SC-400', 'MB-910', 'AZ-104', 'Cloud Security', 'Azure Compute'],
    targetSection: '#accolades',
    accentColor: 'from-blue-600 to-sky-500'
  },
  {
    id: 'hackathon-highlight',
    category: 'Hackathon & DSA',
    title: 'National Level Hackathon Finalist',
    subtitle: 'Reckon 2.0 · JIET Group of Institutions',
    period: 'March 16-17, 2019',
    statHighlight: { value: 'Top Tier', label: 'Among 132 Competing Teams' },
    highlights: [
      'Selected and distinguished among 132 collegiate and professional teams in 36-hour intense marathon.',
      'Engineered rapid full-stack logic and backend database schemas under strict real-time deadlines.',
      'Also completed IBM Bluemix certified industry training (March 2018).'
    ],
    techStack: ['Reckon 2.0 Hackathon', 'Rapid Prototyping', 'IBM Bluemix', 'Database Architecture'],
    targetSection: '#accolades',
    accentColor: 'from-rose-600 to-pink-500'
  }
];

export const SlidingShowcaseSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 6000; // 6 seconds per slide
    const tickInterval = 50;
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += tickInterval;
      setProgress(Math.min(100, (elapsed / intervalTime) * 100));

      if (elapsed >= intervalTime) {
        elapsed = 0;
        setProgress(0);
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }
    }, tickInterval);

    return () => clearInterval(timer);
  }, [currentIndex, isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const currentSlide = slides[currentIndex];

  return (
    <section className="py-14 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors relative overflow-hidden">
      {/* Subtle tech background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with slide controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Sliding Showcase</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>Highlights at a Glance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
              Key Milestones & Technical Highlights
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Swipe or toggle through verified career roles at HSBC, TCS, and Infosys, cloud certifications, and national hackathon achievements.
            </p>
          </div>

          {/* Player controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
              title={isPlaying ? 'Pause Auto-Play' : 'Start Auto-Play'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isPlaying ? 'Auto-Advancing' : 'Paused'}</span>
            </button>
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="p-2 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full mb-6 overflow-hidden">
          <div
            className="h-full bg-blue-600 dark:bg-blue-400 transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Slider Card Container */}
        <div 
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 transition-all tech-glow-blue"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Columns: Details & Highlights */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                  {currentSlide.category}
                </span>
                <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                <span className="text-slate-500 dark:text-slate-400 font-mono">
                  {currentSlide.period}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {currentSlide.title}
                </h3>
                <p className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 mt-1">
                  {currentSlide.subtitle}
                </p>
              </div>

              {/* Bullet highlights */}
              <div className="pt-2 space-y-2">
                {currentSlide.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-700 flex flex-wrap items-center gap-1.5 text-xs">
                <span className="text-slate-400 dark:text-slate-500 font-medium mr-1">Skills Applied:</span>
                {currentSlide.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right 4 Columns: KPI Stat Card & Direct Jump Action */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
              {currentSlide.statHighlight && (
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-5 shadow-xs">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Key Performance Metric
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 font-mono tabular-nums mt-1">
                    {currentSlide.statHighlight.value}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
                    {currentSlide.statHighlight.label}
                  </p>
                </div>
              )}

              <div className="space-y-3">
                <a
                  href={currentSlide.targetSection}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 rounded-xl shadow-xs transition-colors"
                >
                  <span>Explore Full {currentSlide.category === 'Enterprise Role' ? 'Experience' : 'Credentials'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <div className="text-center">
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                    Slide {currentIndex + 1} of {slides.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel indicators / thumbnail selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => goToSlide(idx)}
              className={`px-3 py-1 text-xs rounded-lg transition-all ${
                currentIndex === idx
                  ? 'bg-blue-600 dark:bg-blue-500 text-white font-semibold shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {idx + 1}. {s.title.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
