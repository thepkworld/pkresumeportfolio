import React, { useState } from 'react';
import { 
  GitBranch, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Cpu, 
  FileCode, 
  Terminal, 
  Sparkles, 
  RefreshCw,
  Database,
  Cloud,
  FileCheck
} from 'lucide-react';

interface WorkflowStep {
  step: string;
  name: string;
  description: string;
  praveenRole: string;
  techArtifact: string;
}

interface WorkflowPipeline {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  steps: WorkflowStep[];
}

const pipelines: WorkflowPipeline[] = [
  {
    id: 'p2p',
    title: 'Procure-to-Pay (P2P) Techno-Functional Flow',
    subtitle: 'Enterprise Supply Chain & Financial Settlements',
    tag: 'Core Oracle EBS R12',
    description: 'End-to-end procurement lifecycle from initial requisition through purchase order creation, goods receipt, supplier invoice matching, and final payment accounting.',
    steps: [
      {
        step: '01',
        name: 'Requisition Creation',
        description: 'Internal department creates requisition for materials or services.',
        praveenRole: 'Configured automated approvals, flexfields and customized requisition notification workflows.',
        techArtifact: 'PO_REQUISITION_HEADERS_ALL'
      },
      {
        step: '02',
        name: 'PO Approval & Routing',
        description: 'Auto-generation and multi-tier approval hierarchy of standard/blanket purchase orders.',
        praveenRole: 'Developed custom PL/SQL approval hierarchies and validation hooks with >90% defect-free test coverage.',
        techArtifact: 'PO_HEADERS_ALL / PO_LINES_ALL'
      },
      {
        step: '03',
        name: 'Receiving & Inspection',
        description: 'Warehouse goods receipt and 3-way matching validation.',
        praveenRole: 'Implemented custom receiving transaction processor and exception reporting.',
        techArtifact: 'RCV_TRANSACTIONS / RCV_SHIPMENT_HEADERS'
      },
      {
        step: '04',
        name: 'AP Invoice Matching',
        description: 'Supplier invoices matched against PO line items and receipts.',
        praveenRole: 'Automated AP open interface import using custom PL/SQL validation package with hold resolution.',
        techArtifact: 'AP_INVOICES_ALL / AP_INVOICE_LINES_ALL'
      },
      {
        step: '05',
        name: 'Payment Batch & Accounting',
        description: 'Electronic payment batch generation and General Ledger transfer.',
        praveenRole: 'Engineered custom payment register XML Publisher reports and GL interface reconciliations.',
        techArtifact: 'AP_CHECKS_ALL / GL_JE_BATCHES'
      }
    ]
  },
  {
    id: 'o2c',
    title: 'Order-to-Cash (O2C) Order Fulfillment Flow',
    subtitle: 'Sales Order Processing, Shipping & Cash Collection',
    tag: 'Enterprise Distribution',
    description: 'Commercial workflow managing customer demand from quotation and order entry through order scheduling, picking/shipping, auto-invoicing, and cash application.',
    steps: [
      {
        step: '01',
        name: 'Sales Order Entry & Pricing',
        description: 'Customer order entered, price modifiers applied, and credit checked.',
        praveenRole: 'Built custom PL/SQL validation rules for customer credit holds and line pricing.',
        techArtifact: 'OE_ORDER_HEADERS_ALL / OE_ORDER_LINES_ALL'
      },
      {
        step: '02',
        name: 'Order Booking & Scheduling',
        description: 'Order booked, inventory allocated, and delivery commitments scheduled.',
        praveenRole: 'Configured standard and custom workflow statuses ensuring reliable order booking.',
        techArtifact: 'WSH_DELIVERY_DETAILS'
      },
      {
        step: '03',
        name: 'Pick Release & Ship Confirm',
        description: 'Warehouse pick slip generation and shipping transaction confirmation.',
        praveenRole: 'Handled delivery leg processing and custom shipping documentation reports.',
        techArtifact: 'WSH_NEW_DELIVERIES'
      },
      {
        step: '04',
        name: 'Auto-Invoice (AR)',
        description: 'Shipping details fed into Accounts Receivable AutoInvoice master program.',
        praveenRole: 'Optimized AutoInvoice concurrent program parameters, reducing batch runtimes significantly.',
        techArtifact: 'RA_CUSTOMER_TRX_ALL'
      },
      {
        step: '05',
        name: 'Cash Receipts & Lockbox',
        description: 'Bank payment receipts applied against customer debit balances.',
        praveenRole: 'Implemented AR receipt API procedures with automated exception handling.',
        techArtifact: 'AR_CASH_RECEIPTS_ALL'
      }
    ]
  },
  {
    id: 'oic-hcm',
    title: 'Oracle Integration Cloud (OIC) & Fusion HCM Pipeline',
    subtitle: 'Cloud-to-On-Premises Hybrid Enterprise Orchestration',
    tag: 'Cloud Integration & Copilot',
    description: 'Modern hybrid integration architecture connecting Oracle Fusion Cloud HCM with on-premises Oracle EBS R12 and legacy financial subledgers using OIC and GitHub Copilot.',
    steps: [
      {
        step: '01',
        name: 'Fusion HCM Event Trigger',
        description: 'Employee hire, transfer, or organization change event emitted in Fusion HCM.',
        praveenRole: 'Configured Fusion HCM atom feeds and HDL / HSDL outbound data extractions.',
        techArtifact: 'Fusion HCM REST / ATOM Feeds'
      },
      {
        step: '02',
        name: 'OIC Cloud Orchestration',
        description: 'Oracle Integration Cloud receives payload, maps schemas, and transforms attributes.',
        praveenRole: 'Designed OIC orchestrations with fault management, error logging, and retry policies.',
        techArtifact: 'OIC App Integration Flow'
      },
      {
        step: '03',
        name: 'Security & Connectivity Agent',
        description: 'Secure transmission from OCI cloud tenant to on-premises enterprise network.',
        praveenRole: 'Managed OIC connectivity agent bindings, SSL certificates, and payload encryption.',
        techArtifact: 'OCI Private Agent'
      },
      {
        step: '04',
        name: 'PL/SQL Staging & Validation',
        description: 'Custom PL/SQL package ingests staged records and performs business logic checks.',
        praveenRole: 'Developed robust bulk PL/SQL procedures with autonomous transaction error logging.',
        techArtifact: 'XX_CUSTOM_STAGING_PKG.BODY'
      },
      {
        step: '05',
        name: 'AIM Documentation & QA',
        description: 'Formal sign-off with MD70 technical design, MD50 functional spec, and unit tests.',
        praveenRole: 'Authored complete AIM technical design documents with 90% defect-free test verification.',
        techArtifact: 'MD70 / MD50 Technical Spec'
      }
    ]
  }
];

export const OracleWorkflowSimulator: React.FC = () => {
  const [activePipelineId, setActivePipelineId] = useState<string>('p2p');
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isTracing, setIsTracing] = useState<boolean>(false);

  const activePipeline = pipelines.find((p) => p.id === activePipelineId) || pipelines[0];
  const activeStep = activePipeline.steps[activeStepIndex] || activePipeline.steps[0];

  const handleTraceFlow = () => {
    setIsTracing(true);
    let step = 0;
    setActiveStepIndex(0);

    const timer = setInterval(() => {
      step++;
      if (step < activePipeline.steps.length) {
        setActiveStepIndex(step);
      } else {
        clearInterval(timer);
        setIsTracing(false);
      }
    }, 1200);
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              <GitBranch className="w-3.5 h-3.5" />
              <span>Interactive Architecture Visualizer</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>Techno-Functional Workflows</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
              Oracle ERP & Integration Pipelines
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Inspect how Praveen architects and engineers production workflows across P2P, O2C, Oracle Integration Cloud (OIC), and AIM documentation standards (MD70, MD50).
            </p>
          </div>

          <button
            onClick={handleTraceFlow}
            disabled={isTracing}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-lg shadow-xs transition-colors shrink-0"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isTracing ? 'animate-spin' : ''}`} />
            <span>{isTracing ? 'Simulating Pipeline...' : 'Simulate Live Execution'}</span>
          </button>
        </div>

        {/* Pipeline Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl mb-6 overflow-x-auto text-xs">
          {pipelines.map((pipeline) => (
            <button
              key={pipeline.id}
              onClick={() => {
                setActivePipelineId(pipeline.id);
                setActiveStepIndex(0);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold whitespace-nowrap transition-all ${
                activePipelineId === pipeline.id
                  ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <span>{pipeline.title.split(' ')[0]} Flow</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                activePipelineId === pipeline.id
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
              }`}>
                {pipeline.steps.length} Steps
              </span>
            </button>
          ))}
        </div>

        {/* Interactive Stepper Flow Bar */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 mb-6 shadow-xs">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
            {activePipeline.steps.map((st, idx) => (
              <React.Fragment key={idx}>
                <button
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex-1 text-left p-3.5 rounded-xl border transition-all ${
                    activeStepIndex === idx
                      ? 'border-blue-500 dark:border-blue-400 bg-blue-50/60 dark:bg-blue-950/40 shadow-xs'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-mono text-slate-400 font-bold">{st.step}</span>
                    {idx < activeStepIndex && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    )}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                    {st.name}
                  </h4>
                </button>
                {idx < activePipeline.steps.length - 1 && (
                  <div className="hidden lg:flex items-center text-slate-300 dark:text-slate-700 shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Active Step Deep Inspector */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Step Explanation */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs">
                <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                  Step {activeStep.step} of 05
                </span>
                <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                <span className="text-slate-500 dark:text-slate-400 font-medium">{activePipeline.tag}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {activeStep.name}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeStep.description}
              </p>

              <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Praveen's Technical Implementation</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeStep.praveenRole}
                </p>
              </div>
            </div>

            {/* Architecture Artifact Card */}
            <div className="lg:col-span-5 bg-slate-900 text-slate-200 rounded-xl p-5 border border-slate-800 font-mono text-xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400 text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Oracle DB / API Artifact</span>
                </span>
                <span className="text-emerald-400 text-[11px]">VERIFIED</span>
              </div>

              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80 text-cyan-300 overflow-x-auto">
                <code>{activeStep.techArtifact}</code>
              </div>

              <div className="space-y-1.5 text-[11px] text-slate-400 pt-1">
                <div className="flex justify-between">
                  <span>AIM Standard:</span>
                  <span className="text-slate-200">MD70 & MD50 Compliant</span>
                </div>
                <div className="flex justify-between">
                  <span>Defect Goal:</span>
                  <span className="text-emerald-400 font-bold">&gt;90% Defect Free Met</span>
                </div>
                <div className="flex justify-between">
                  <span>Regression Suite:</span>
                  <span className="text-slate-200">Unit & Regression Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
