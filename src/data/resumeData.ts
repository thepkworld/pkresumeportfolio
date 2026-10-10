export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  isCurrent?: boolean;
  domain?: string;
  technologies: string[];
  keyContributions: string[];
  modules: string[];
  metrics?: { label: string; value: string }[];
}

export interface EducationItem {
  degree: string;
  level: string;
  institute: string;
  boardUniversity: string;
  grade: string;
  year: string;
  details?: string;
}

export interface CompetencyCategory {
  category: string;
  description: string;
  skills: { name: string; level: 'Expert' | 'Advanced' | 'Proficient'; context?: string }[];
}

export interface AccoladeItem {
  title: string;
  issuer: string;
  year: string;
  type: 'Certification' | 'Competition' | 'Industry Training';
  details: string;
  badgeCode?: string;
}

export interface WorkshopItem {
  title: string;
  organizer: string;
  speakerOrInstitution?: string;
  date: string;
  type: 'Workshop' | 'Webinar' | 'Masterclass';
  summary: string;
}

export interface ResumeData {
  personalInfo: {
    name: string;
    role: string;
    phone: string;
    email: string;
    linkedin: string;
    linkedinUrl: string;
    fatherName: string;
    dateOfBirth: string;
    permanentAddress: string;
    cityStatePincode: string;
    languages: { name: string; proficiency: string }[];
    hobbies: string[];
    summary: string;
  };
  stats: {
    label: string;
    value: string;
    context: string;
  }[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  competencies: CompetencyCategory[];
  accolades: AccoladeItem[];
  workshops: WorkshopItem[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "PRAVEEN KUMAR MANDHANIA",
    role: "Oracle Integration & PLSQL Developer",
    phone: "+91-6377365122",
    email: "kumarpraveenofficial@gmail.com",
    linkedin: "Praveen Kumar",
    linkedinUrl: "https://www.linkedin.com/in/praveen-kumar",
    fatherName: "Mr. Sohan Lal Mandhania",
    dateOfBirth: "03 September 1997",
    permanentAddress: "6-G-163, Kudi Bhagtasni Housing Board, Jodhpur, Rajasthan, 342005",
    cityStatePincode: "Jodhpur, Rajasthan - 342005",
    languages: [
      { name: "Hindi", proficiency: "Fluent" },
      { name: "English", proficiency: "Fluent" }
    ],
    hobbies: [
      "Playing cricket",
      "Listening music",
      "Watching movies"
    ],
    summary: "Result driven IT professional with 4 years of experience including 3.5+ years of experience in designing and developing PLSQL components and Oracle reports. Worked in BFSI domain and proficient in Oracle EBS R12 technical and functional modules. Seeking to leverage expertise to contribute in dynamic organization."
  },

  stats: [
    {
      value: "4+",
      label: "Years IT Experience",
      context: "Across HSBC, TCS & Infosys"
    },
    {
      value: "3.5+",
      label: "Years PL/SQL & Reports",
      context: "Enterprise core development"
    },
    {
      value: "90%+",
      label: "Defect-Free Delivery",
      context: "With unit & regression testing"
    },
    {
      value: "85%",
      label: "Customer Satisfaction",
      context: "Cross-functional team leadership"
    },
    {
      value: "+25%",
      label: "System Performance",
      context: "Production optimizations at Infosys"
    }
  ],

  experiences: [
    {
      id: "hsbc",
      role: "Oracle Integration Engineer",
      company: "HSBC",
      duration: "Sept 2025 - Current",
      isCurrent: true,
      domain: "BFSI (Banking & Financial Services)",
      technologies: [
        "Oracle Integration Cloud (OIC)",
        "PL/SQL",
        "OCI",
        "Fusion HCM",
        "JIRA",
        "ServiceNow",
        "Github & Github Copilot",
        "Oracle SQL Developer"
      ],
      modules: ["P2P", "O2C", "PO", "AP/AR", "Fusion HCM", "OIC Integrations"],
      metrics: [
        { label: "Code Quality", value: "90% Defect Free" },
        { label: "Client CSAT", value: "85% Satisfaction" }
      ],
      keyContributions: [
        "Associated with clients to gather and analyze business requirements, ensuring efficient project delivery.",
        "Led a cross-functional team for enhanced view of project scope and timeline and 85% customer satisfaction.",
        "Worked on Oracle techno-functional modules incl. P2P, O2C, PO, AP/AR.",
        "Designed, developed, and deployed PLSQL 90% defect free codes with unit and regression testing.",
        "Created technical and functional documentations, including MD70, MD50, and test plan documents, ensuring smooth delivery."
      ]
    },
    {
      id: "tcs",
      role: "PLSQL Developer",
      company: "Tata Consultancy Services",
      duration: "Jan 2023 – Sept 2025",
      isCurrent: false,
      domain: "Enterprise Applications & BFSI Consulting",
      technologies: [
        "PL/SQL",
        "Oracle EBS Apps Technical",
        "JIRA",
        "Git",
        "PL/SQL API’s",
        "Oracle SQL Database"
      ],
      modules: ["P2P", "O2C", "PO", "AP/AR", "EBS R12", "PL/SQL APIs"],
      metrics: [
        { label: "Code Quality", value: "90% Defect Free" },
        { label: "Stakeholder CSAT", value: "85% Score" }
      ],
      keyContributions: [
        "Associated with clients to gather and analyze business requirements, ensuring efficient project delivery.",
        "Led a cross-functional team for enhanced view of project scope and timeline and 85% customer satisfaction.",
        "Worked on Oracle techno-functional modules incl. P2P, O2C, PO, AP/AR.",
        "Designed, developed, and deployed PLSQL 90% defect free codes with unit and regression testing.",
        "Created technical and functional documentations, including MD70, MD50, and test plan documents, ensuring smooth delivery."
      ]
    },
    {
      id: "infosys",
      role: "System Engineer",
      company: "Infosys",
      duration: "Jan 2021 - Dec 2022",
      isCurrent: false,
      domain: "Enterprise ERP & System Engineering",
      technologies: [
        "Oracle EBS Apps R12",
        "PL/SQL",
        "Oracle Reports",
        "SQL Database",
        "UNIX",
        "ServiceNow"
      ],
      modules: ["Procurement", "Order Management", "Oracle Reports", "UNIX Shell"],
      metrics: [
        { label: "Performance Gain", value: "+25% Speedup" },
        { label: "Defect-Free Goal", value: ">90% Met" }
      ],
      keyContributions: [
        "Collecting requirements and analyzing solutions to provide more than 90% defect free project delivery.",
        "Analyzed the technical production bugs or updates resulting in improved system performance by 25%.",
        "Developed PLSQL codes, Oracle reports, and handled EBS application side issues.",
        "Have covered various modules in technical such as Procurement, Order Management.",
        "Managed calls progressively and collaborated with multiple teams."
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology",
      level: "Undergraduate (B.Tech)",
      institute: "JIET College of Engineering, Jodhpur",
      boardUniversity: "Rajasthan Technical University, Kota",
      grade: "77.0%",
      year: "2016 - 2020",
      details: "4-year engineering program with focus on Computer Engineering, Database Systems, Data Structures & Software Engineering."
    },
    {
      degree: "Senior Secondary",
      level: "Class XII (High School)",
      institute: "Career Point World School, Jodhpur",
      boardUniversity: "Central Board of Secondary Education (CBSE)",
      grade: "77.4%",
      year: "2015 - 2016",
      details: "Science & Mathematics stream with distinction in analytical and quantitative disciplines."
    },
    {
      degree: "Secondary",
      level: "Class X (Matriculation)",
      institute: "Central Academy School Kudi, Jodhpur",
      boardUniversity: "Central Board of Secondary Education (CBSE)",
      grade: "8.2 CGPA",
      year: "2013 - 2014",
      details: "Foundational education completed with high academic standing under CBSE board."
    }
  ],

  competencies: [
    {
      category: "Programming Languages",
      description: "Core languages for enterprise backend logic, computational algorithms, and system development.",
      skills: [
        { name: "PL/SQL", level: "Expert", context: "Stored procedures, packages, triggers, cursors, collections & bulk processing" },
        { name: "Java", level: "Proficient", context: "Object-oriented backend design, enterprise integration patterns" },
        { name: "C++", level: "Proficient", context: "Data structures, memory management and system algorithms" },
        { name: "C Language", level: "Proficient", context: "Foundational systems programming and procedural logic" }
      ]
    },
    {
      category: "Technology & Enterprise ERP",
      description: "Oracle ERP suites, integration tools, and enterprise workflow environments.",
      skills: [
        { name: "Oracle EBS Technical R12 Apps", level: "Expert", context: "Architecture, Concurrent Programs, Value Sets, Flexfields" },
        { name: "PL/SQL APIs", level: "Expert", context: "Standard Oracle APIs, custom API interfaces, data conversion" },
        { name: "Oracle Reports & Forms", level: "Advanced", context: "XML Publisher / BI Publisher, RDF reports, form personalization" },
        { name: "Oracle Integration Cloud (OIC)", level: "Advanced", context: "Cloud adapters, app integrations, orchestration flows" },
        { name: "Fusion HCM", level: "Advanced", context: "Human Capital Management data loads, integrations & HDL/HSDL" },
        { name: "Oracle Cloud Infrastructure (OCI)", level: "Advanced", context: "Compute, networking, IAM, object storage & cloud database" }
      ]
    },
    {
      category: "Databases & Management Tools",
      description: "Relational database engines, querying tools, and performance analyzers.",
      skills: [
        { name: "Oracle Database", level: "Expert", context: "Query optimization, indexing, partition management, execution plans" },
        { name: "Oracle SQL Developer", level: "Expert", context: "Debugging, schema navigation, PL/SQL profiling & data export" },
        { name: "MySQL", level: "Proficient", context: "Relational schema design, normalization and SQL querying" }
      ]
    },
    {
      category: "Techno-Functional Modules",
      description: "End-to-end enterprise supply chain, financial, and operational business workflows.",
      skills: [
        { name: "P2P (Procure to Pay)", level: "Expert", context: "Requisitions, RFQ, Purchase Orders, Receiving & Invoicing" },
        { name: "O2C (Order to Cash)", level: "Expert", context: "Order Entry, Booking, Shipping, Auto-Invoice & Cash Receipts" },
        { name: "PO (Purchase Order)", level: "Expert", context: "Approvals, line items, receipt routing and supplier interfaces" },
        { name: "AP/AR (Accounts Payable & Receivable)", level: "Expert", context: "Invoice validation, payment batches, customer aging, accounting" },
        { name: "Procurement", level: "Advanced", context: "Sourcing, vendor evaluation and requisition management" },
        { name: "Order Management", level: "Advanced", context: "Sales order processing, workflow status engine, pricing" }
      ]
    },
    {
      category: "DevOps, OS & Collaboration",
      description: "Version control, issue tracking, operating systems and enterprise ITIL tools.",
      skills: [
        { name: "UNIX & Linux Shell Scripting", level: "Advanced", context: "Bash scripts, automation cron jobs, log analysis & file processing" },
        { name: "GIT & GitHub", level: "Advanced", context: "Branching strategies, PR reviews, release tagging, GitHub Copilot" },
        { name: "JIRA", level: "Advanced", context: "Agile sprints, backlog refinement, defect triage & burndown tracking" },
        { name: "ServiceNow", level: "Advanced", context: "Incident management, change requests (CR), SLA tracking & resolution" },
        { name: "AIM Documentation (MD70, MD50)", level: "Expert", context: "Functional specifications (MD50), Technical design (MD70) & Test Plans" }
      ]
    }
  ],

  accolades: [
    {
      title: "Oracle Cloud Infrastructure Foundations Associate 2024",
      issuer: "Oracle",
      year: "2024",
      type: "Certification",
      details: "Certified credential validating foundational knowledge of cloud concepts, security, architecture, and OCI services.",
      badgeCode: "OCI-FOUNDATIONS-2024"
    },
    {
      title: "Oracle Cloud Infrastructure Associate Developer 2021",
      issuer: "Oracle",
      year: "2021",
      type: "Certification",
      details: "Certified credential validating hands-on cloud development, microservices, containerization, and API integrations on OCI.",
      badgeCode: "OCI-DEV-2021"
    },
    {
      title: "Microsoft Azure Associate Multi-Certification",
      issuer: "Microsoft",
      year: "Multiple",
      type: "Certification",
      details: "Successfully certified in multiple Microsoft Azure associate exams including AZ-204 (Developing Solutions for Azure), SC-400 (Information Protection Administrator), MB-910 (Dynamics 365 Fundamentals) & AZ-104 (Azure Administrator).",
      badgeCode: "AZ-204 / SC-400 / MB-910 / AZ-104"
    },
    {
      title: 'National Level Hackathon "Reckon 2.0"',
      issuer: "JIET Group of Institution",
      year: "March 16-17, 2019",
      type: "Competition",
      details: "Competed in a 36-hour intense national technical hackathon and earned distinguished recognition among 132 collegiate and professional teams.",
      badgeCode: "HACKATHON-FINALIST"
    },
    {
      title: "Certified Training in IBM Bluemix",
      issuer: "IBM",
      year: "March 2018",
      type: "Industry Training",
      details: "Comprehensive hands-on certified training program completed in IBM Bluemix cloud application deployment, services, and architecture.",
      badgeCode: "IBM-BLUEMIX-CERT"
    }
  ],

  workshops: [
    {
      title: 'Scaler "Must Know DSA: Stacks and Queues"',
      organizer: "Scaler Academy",
      speakerOrInstitution: "IITian Anshuman Singh",
      date: "May 2021",
      type: "Masterclass",
      summary: "Advanced session on fundamental data structures, algorithmic time-space complexity optimization, monotonic stacks, and competitive programming patterns."
    },
    {
      title: 'Webinar on "Virtual Reality and Augmentation"',
      organizer: "Bhartiya Vidhyapeeth Institute of Computer Applications and Management (BVICAM), New Delhi",
      speakerOrInstitution: "BVICAM Technical Forum",
      date: "Oct 2020",
      type: "Webinar",
      summary: "Explored emerging spatial computing paradigms, computer vision augmentation techniques, and enterprise deployment scenarios."
    }
  ]
};
