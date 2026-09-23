import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import InnerPageHero from '../../components/InnerPageHero';
import { 
  Shield, 
  Lock, 
  FileCheck, 
  Search, 
  Activity, 
  Cpu, 
  Server, 
  Database, 
  Cloud, 
  CheckCircle2, 
  Layers, 
  ArrowRight, 
  AlertTriangle, 
  RefreshCw, 
  Key, 
  Users, 
  Sliders, 
  BarChart2, 
  ShieldAlert, 
  Award, 
  FileText,
  Clock,
  Compass,
  Zap,
  HardDrive
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const serviceCatalogue = [
  {
    id: "it-cyber-consulting",
    category: "advisory",
    domain: "IT & Cybersecurity Consulting",
    scope: "IT strategy, technology assessments, security posture assessments, cloud and infrastructure advisory, Zero Trust advisory and cybersecurity roadmaps.",
    deliverables: [
      "Current-state posture assessment",
      "Cyber maturity evaluation report",
      "Target-state security architecture",
      "Prioritized multi-year security roadmap",
      "Executive board presentation"
    ],
    standards: ["ISO/IEC 27001:2022", "ISO/IEC 27002:2022", "NIST CSF 2.0", "CIS Controls", "COBIT 2019", "ITIL"],
    icon: <Shield className="w-6 h-6 text-[#C9A227]" />
  },
  {
    id: "it-grc",
    category: "grc",
    domain: "IT GRC (Governance, Risk & Compliance)",
    scope: "IT governance models, IT risk assessments, control design, compliance assessments, audit readiness and third-party risk management.",
    deliverables: [
      "GRC operating model & charter",
      "Enterprise risk register",
      "Risk and Control Matrix (RCM)",
      "Policy & governance framework",
      "Remediation & compliance roadmap"
    ],
    standards: ["COBIT 2019", "ISO 31000", "ISO/IEC 27001", "ISO 37301"],
    icon: <FileCheck className="w-6 h-6 text-[#C9A227]" />
  },
  {
    id: "cyber-grc",
    category: "grc",
    domain: "Information & Cybersecurity GRC",
    scope: "Information security governance, ISMS advisory, cyber risk management, compliance assessments, security metrics and supplier cyber risk.",
    deliverables: [
      "Security governance framework",
      "Cyber risk register & treatment plan",
      "Control maturity benchmark report",
      "Supplier & third-party risk assessment",
      "Compliance & audit readiness roadmap"
    ],
    standards: ["ISO/IEC 27001:2022", "ISO/IEC 27002:2022", "NIST CSF 2.0", "CIS Controls"],
    icon: <ScaleIcon className="w-6 h-6 text-[#C9A227]" />
  },
  {
    id: "framework-impl",
    category: "grc",
    domain: "Framework Implementation (ITSMS, ISMS & BCMS)",
    scope: "Gap assessments, scope definition, policies and procedures, risk treatment, process implementation, internal audit preparation and certification readiness.",
    deliverables: [
      "Management system documentation",
      "Operating process maps & SOPs",
      "Risk treatment & mitigation plans",
      "Internal audit evidence & reports",
      "Certification readiness sign-off"
    ],
    standards: ["ISO/IEC 20000-1:2018", "ISO/IEC 27001:2022", "ISO 22301:2019 (BCMS)"],
    icon: <Award className="w-6 h-6 text-[#C9A227]" />
  },
  {
    id: "app-sec",
    category: "secops",
    domain: "Application Security (AppSec & Secure SDLC)",
    scope: "Threat modeling, secure architecture reviews, secure SDLC integration, source-code review, SAST/DAST/SCA enablement and web/API security testing.",
    deliverables: [
      "Threat model & risk classifications",
      "Application security baseline requirements",
      "Vulnerability assessment & SAST/DAST report",
      "Actionable developer remediation guidance",
      "Secure SDLC policy & toolchain integration"
    ],
    standards: ["OWASP ASVS", "OWASP Top 10", "OWASP API Security Top 10", "NIST SSDF"],
    icon: <Lock className="w-6 h-6 text-[#C9A227]" />
  },
  {
    id: "vapt",
    category: "secops",
    domain: "Vulnerability Assessment & Penetration Testing (VAPT)",
    scope: "Authorized offensive testing of networks, servers, web applications, APIs, cloud workloads and wireless environments, including comprehensive retesting.",
    deliverables: [
      "Rules of engagement & authorization scope",
      "Technical vulnerability findings dossier",
      "CVSS v3.1 risk ratings & impact analysis",
      "Step-by-step remediation recommendations",
      "Executive summary & post-fix retest report"
    ],
    standards: ["PTES", "OWASP Web Security Testing Guide", "CVSS v3.1"],
    icon: <Search className="w-6 h-6 text-[#C9A227]" />
  },
  {
    id: "csoc-cdm",
    category: "secops",
    domain: "CSOC & Continuous Detection & Monitoring (CDM)",
    scope: "SOC strategy, operating model, SIEM onboarding, log integration, detection use cases, incident playbooks, threat intelligence and cyber maturity assessment.",
    deliverables: [
      "SOC architecture & target operating model",
      "SIEM detection use-case catalogue",
      "Log onboarding & ingestion plan",
      "Incident response playbooks & runbooks",
      "Escalation matrix, KPIs/KRIs & maturity roadmap"
    ],
    standards: ["NIST CSF 2.0", "ISO/IEC 27001", "ISO/IEC 27035 principles", "MITRE ATT&CK", "CIS Controls"],
    icon: <ShieldAlert className="w-6 h-6 text-[#C9A227]" />
  },
  {
    id: "system-integration",
    category: "platforms",
    domain: "System Integrations & DevSecOps Engineering",
    scope: "Enterprise integration, APIs, middleware, custom web/mobile development, workflow automation, data integration and DevSecOps enablement.",
    deliverables: [
      "Solution & integration architecture",
      "API & middleware specifications",
      "Secure production source code & pipelines",
      "Automated testing & verification evidence",
      "Deployment runbooks & operational handover"
    ],
    standards: ["Secure SDLC", "OWASP ASVS", "NIST SSDF", "ISO/IEC 27001"],
    icon: <Layers className="w-6 h-6 text-[#C9A227]" />
  },
  {
    id: "m365-security",
    category: "platforms",
    domain: "Microsoft 365 Platform & Cloud Security",
    scope: "Tenant setup, identity configuration, Teams/SharePoint/Exchange Online, migration, security hardening, MFA and Conditional Access advisory.",
    deliverables: [
      "M365 cloud architecture blueprint",
      "Tenant migration & transition plan",
      "Security hardening baseline & MFA policy",
      "Operational administration runbook",
      "Admin knowledge transfer & handover"
    ],
    standards: ["Microsoft Security Baselines", "Zero Trust Architecture", "CIS Benchmarks"],
    icon: <Cloud className="w-6 h-6 text-[#C9A227]" />
  },
  {
    id: "active-directory",
    category: "platforms",
    domain: "Active Directory Architecture & Hardening",
    scope: "AD health checks, directory architecture, migration, domain consolidation, Group Policy (GPO) optimization, privileged access hardening and disaster backup/recovery.",
    deliverables: [
      "AD health & risk assessment report",
      "Target directory architecture",
      "Privileged access hardening baseline",
      "Forest/domain migration & consolidation plan",
      "Standard Operating Procedures & recovery runbook"
    ],
    standards: ["Microsoft Security Baselines", "CIS Benchmarks", "Zero Trust", "Principle of Least Privilege"],
    icon: <Key className="w-6 h-6 text-[#C9A227]" />
  },
  {
    id: "exchange-services",
    category: "platforms",
    domain: "Microsoft Exchange & Messaging Security",
    scope: "Exchange health checks, on-prem to Exchange Online hybrid migration, mail-flow configuration, anti-spam/anti-phishing security, and operational administration.",
    deliverables: [
      "Messaging architecture documentation",
      "Hybrid & cloud migration plan",
      "Secure mail-flow design & SPF/DKIM/DMARC",
      "Exchange health assessment audit",
      "Operations & maintenance runbook"
    ],
    standards: ["Microsoft Recommended Practices", "Secure Configuration Principles"],
    icon: <Zap className="w-6 h-6 text-[#C9A227]" />
  },
  {
    id: "database-services",
    category: "platforms",
    domain: "Database Administration & Security (SQL & Oracle)",
    scope: "Installation, configuration, performance tuning, backup/recovery, High Availability (HA/DR), security hardening, migration, replication and 24/7 monitoring.",
    deliverables: [
      "Database topology & HA/DR architecture",
      "DBA Standard Operating Procedures (SOPs)",
      "Backup, restore & failover validation runbook",
      "Database security hardening baseline",
      "Performance optimization & migration plan"
    ],
    standards: ["CIS Database Benchmarks", "Oracle/Microsoft Vendor Guidance", "ISO/IEC 27001"],
    icon: <Database className="w-6 h-6 text-[#C9A227]" />
  }
];

function ScaleIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
      <path d="M7 21h10"/>
      <path d="M12 3v18"/>
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
    </svg>
  );
}

const deliveryMethodology = [
  {
    phase: "01. Discover",
    title: "Discovery & Charter",
    activities: "Workshops, stakeholder interviews, scope confirmation, asset boundary mapping, and requirement gathering.",
    output: "Engagement Charter & Requirements Matrix",
    icon: <Search className="w-5 h-5 text-[#C9A227]" />
  },
  {
    phase: "02. Assess",
    title: "Gap & Risk Assessment",
    activities: "Current maturity benchmarking, threat modeling, vulnerability scanning, risk evaluation, and technical gap analysis.",
    output: "Assessment Report & Findings Dossier",
    icon: <BarChart2 className="w-5 h-5 text-[#C9A227]" />
  },
  {
    phase: "03. Design",
    title: "Architecture & Planning",
    activities: "Target-state architecture design, control mapping, operating model formulation, and phased implementation scheduling.",
    output: "Target Architecture & Prioritized Roadmap",
    icon: <Compass className="w-5 h-5 text-[#C9A227]" />
  },
  {
    phase: "04. Implement",
    title: "Controls & Engineering",
    activities: "Security controls deployment, policy institutionalization, system configuration, hardening baselines, and integrations.",
    output: "Implementation Evidence & Hardened Assets",
    icon: <Cpu className="w-5 h-5 text-[#C9A227]" />
  },
  {
    phase: "05. Validate",
    title: "Testing & Acceptance",
    activities: "Penetration testing, security validation, UAT, control verification, and post-remediation retesting.",
    output: "Test Reports & Formal Acceptance Sign-Off",
    icon: <CheckCircle2 className="w-5 h-5 text-[#C9A227]" />
  },
  {
    phase: "06. Transition",
    title: "Handover & Enablement",
    activities: "Comprehensive operational documentation, runbook authoring, admin training, and knowledge transfer to in-house teams.",
    output: "SOPs, Runbooks & Operational Handover",
    icon: <FileText className="w-5 h-5 text-[#C9A227]" />
  },
  {
    phase: "07. Improve",
    title: "Continuous Optimization",
    activities: "KPI/KRI metric monitoring, recurring security reviews, threat updates, and ongoing posture optimization.",
    output: "Continual Improvement & Governance Plan",
    icon: <RefreshCw className="w-5 h-5 text-[#C9A227]" />
  }
];

const supportTiers = [
  {
    tier: "L1 Support",
    name: "Monitoring & Standard Operations",
    badge: "24/7 Monitoring",
    description: "Proactive event monitoring, alert triage, ticket logging, standard access requests, initial diagnostic verification, and incident escalation.",
    items: [
      "24/7/365 telemetry & SIEM event monitoring",
      "Automated ticket dispatch and SLA tracking",
      "Standard policy requests & identity validation",
      "First-tier incident triage & rapid escalation"
    ]
  },
  {
    tier: "L2 Support",
    name: "Advanced Remediation & Investigation",
    badge: "Deep Investigation",
    description: "Advanced troubleshooting, configuration changes, incident forensics investigation, containment actions, and root-cause analysis (RCA).",
    items: [
      "In-depth security incident investigation",
      "Firewall, EDR, and IAM configuration changes",
      "Vulnerability mitigation & patch verification",
      "Comprehensive Root Cause Analysis (RCA) reporting"
    ]
  },
  {
    tier: "L3 Support",
    name: "Expert Architecture & Crisis Engineering",
    badge: "Principal Architects",
    description: "Principal cyber engineers handling major incident containment, complex architectural alterations, vendor escalation, and zero-day threat response.",
    items: [
      "Critical severity response & breach containment",
      "Complex architecture restructuring & hardening",
      "Zero-day advisory & custom signature authoring",
      "OEM & Tier-1 security vendor coordination"
    ]
  }
];

const engagementModels = [
  {
    title: "Fixed-Price Project Delivery",
    desc: "Defined scope, fixed timeline, and predetermined milestone deliverables with transparent accountability.",
    icon: <FileCheck className="w-6 h-6 text-[#C9A227]" />
  },
  {
    title: "Time & Materials (T&M)",
    desc: "Agile, flexible specialized engineering support billed against transparent sprint milestones.",
    icon: <Clock className="w-6 h-6 text-[#C9A227]" />
  },
  {
    title: "Monthly Advisory Retainer",
    desc: "On-demand access to Virtual CISO (vCISO), GRC consultants, and principal security architects.",
    icon: <Users className="w-6 h-6 text-[#C9A227]" />
  },
  {
    title: "Managed Services with SLA",
    desc: "24/7/365 CSOC monitoring, detection engineering, and proactive infrastructure administration backed by strict SLAs.",
    icon: <Activity className="w-6 h-6 text-[#C9A227]" />
  },
  {
    title: "Dedicated / Shared Resource Model",
    desc: "Scale your internal cybersecurity and infrastructure engineering capacity with vetted, certified domain specialists.",
    icon: <Shield className="w-6 h-6 text-[#C9A227]" />
  },
  {
    title: "Outcome-Based Packages",
    desc: "Turnkey assessment and certification-readiness packages (e.g., ISO 27001 readiness, full-scope VAPT).",
    icon: <Award className="w-6 h-6 text-[#C9A227]" />
  }
];

const corePrinciples = [
  {
    title: "Security & Privacy by Design",
    desc: "Every system, architecture, and integration embeds defensive controls and data confidentiality from inception."
  },
  {
    title: "Least Privilege & Zero Trust",
    desc: "Strict access segmentation, contextual verification, and need-to-know permissions across all enterprise surfaces."
  },
  {
    title: "Explicit Rules of Engagement",
    desc: "Authorized offensive testing strictly constrained to agreed boundaries, safeguards, and client oversight."
  },
  {
    title: "Controlled Change & Production Safety",
    desc: "Formal change management procedures, staging verification, rollback plans, and non-disruptive execution."
  },
  {
    title: "Evidence-Based Delivery",
    desc: "Every deliverable, control, and finding is verified with empirical artifacts, test logs, and reproducible proof."
  },
  {
    title: "Operational Readiness & Enablement",
    desc: "Hands-on knowledge transfer, customized SOPs, and runbooks ensuring internal client autonomy post-handover."
  }
];

const standardsList = [
  { code: "ISO/IEC 27001:2022", label: "Information Security Management Systems (ISMS)" },
  { code: "ISO/IEC 27002:2022", label: "Information Security Controls & Practices" },
  { code: "NIST CSF 2.0", label: "Identify, Protect, Detect, Respond, Recover, Govern" },
  { code: "MITRE ATT&CK", label: "Adversary Tactics, Techniques & Real-world Procedures" },
  { code: "CIS Controls & Benchmarks", label: "Prescriptive Hardening Baselines for OS, Cloud & DB" },
  { code: "OWASP ASVS & Top 10", label: "Web, API & Mobile Application Security Standards" },
  { code: "PTES & CVSS v3.1", label: "Penetration Testing Execution Standard & Severity Scoring" },
  { code: "ISO 22301 & ISO 20000-1", label: "Business Continuity (BCMS) & IT Service Management (ITSMS)" }
];

const CyberSecurityTechPage = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'advisory' | 'grc' | 'secops' | 'platforms'>('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const filteredServices = activeFilter === 'all' 
    ? serviceCatalogue 
    : serviceCatalogue.filter(item => item.category === activeFilter);

  return (
    <div className="flex flex-col w-full bg-white font-sans">
      {/* Hero Section */}
      <InnerPageHero 
        title="Cybersecurity & IT Services" 
        subtitle="A scalable, standards-aligned service portfolio engineered for secure-by-design delivery, risk-based governance, and continuous cyber resilience."
        backgroundImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Standards Bar */}
      <section className="bg-[#0B1F3A] border-y border-white/10 py-5 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6 whitespace-nowrap text-xs uppercase tracking-widest text-white/70 font-semibold">
          <span className="text-[#C9A227] flex items-center gap-2">
            <Award className="w-4 h-4" /> Standards Alignment:
          </span>
          <span className="hover:text-white transition-colors">ISO/IEC 27001:2022</span>
          <span>•</span>
          <span className="hover:text-white transition-colors">NIST CSF 2.0</span>
          <span>•</span>
          <span className="hover:text-white transition-colors">MITRE ATT&CK</span>
          <span>•</span>
          <span className="hover:text-white transition-colors">CIS Benchmarks</span>
          <span>•</span>
          <span className="hover:text-white transition-colors">OWASP ASVS</span>
          <span>•</span>
          <span className="hover:text-white transition-colors">Zero Trust</span>
          <span>•</span>
          <span className="hover:text-white transition-colors">COBIT 2019</span>
        </div>
      </section>

      {/* Executive Overview Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <FadeIn>
                <span className="text-[#C9A227] font-bold text-xs tracking-widest uppercase mb-3 block">
                  Service Catalogue Overview
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3A] mb-6 leading-tight">
                  Comprehensive, Standards-Driven Cyber & IT Capabilities.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  This Service Catalogue outlines our end-to-end consulting, implementation, integration, engineering, and managed support capabilities. Designed around secure-by-design delivery, risk-based governance, and measurable business outcomes.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Whether establishing an ISO 27001-certified ISMS, defending multi-cloud assets via a 24/7 CSOC, conducting offensive VAPT, or hardening enterprise platforms (M365, Active Directory, Oracle, SQL), our frameworks ensure rigorous compliance and uncompromised uptime.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-[#0B1F3A] text-white hover:bg-[#C9A227] hover:text-[#0B1F3A] transition-all duration-300 shadow-md"
                  >
                    Request Security Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a 
                    href="#service-catalogue" 
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-gray-100 text-[#0B1F3A] hover:bg-gray-200 transition-colors"
                  >
                    Explore Service Portfolio
                  </a>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-6">
              <FadeIn delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-8 rounded-3xl bg-[#F7F7F5] border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B1F3A] text-[#C9A227] flex items-center justify-center mb-6">
                      <Lock className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Secure-by-Design</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Proactive threat modeling, automated SAST/DAST pipelines, and zero-trust controls integrated directly into software and systems lifecycles.
                    </p>
                  </div>

                  <div className="p-8 rounded-3xl bg-[#F7F7F5] border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-2xl bg-[#C9A227] text-[#0B1F3A] flex items-center justify-center mb-6">
                      <ScaleIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Risk-Based GRC</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Comprehensive ISMS, ITSMS, and BCMS framework implementations aligned with ISO 27001, COBIT, and regulatory mandates.
                    </p>
                  </div>

                  <div className="p-8 rounded-3xl bg-[#F7F7F5] border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B1F3A] text-white flex items-center justify-center mb-6">
                      <Activity className="w-6 h-6 text-[#C9A227]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">CSOC & Detection</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      24/7 continuous monitoring, MITRE ATT&CK-mapped detection playbooks, SIEM engineering, and rapid incident containment.
                    </p>
                  </div>

                  <div className="p-8 rounded-3xl bg-[#F7F7F5] border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-2xl bg-white text-[#0B1F3A] shadow-sm flex items-center justify-center mb-6 border border-gray-100">
                      <Server className="w-6 h-6 text-[#C9A227]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Enterprise Hardening</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Deep engineering for Microsoft 365, Active Directory, Exchange Online, Oracle, and MS SQL databases against CIS baselines.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Service Catalogue Grid */}
      <section id="service-catalogue" className="py-24 bg-gray-50 border-t border-gray-200/70">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C9A227] font-bold text-xs tracking-widest uppercase mb-3 block">
              Capabilities Breakdown
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3A] mb-6">
              Detailed Service Catalogue
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Explore our specific domains, technical scope of work, tangible executive deliverables, and standards alignment.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
              {[
                { key: 'all', label: 'All Services (12)' },
                { key: 'advisory', label: 'Consulting & Strategy' },
                { key: 'grc', label: 'GRC & Frameworks' },
                { key: 'secops', label: 'AppSec, VAPT & CSOC' },
                { key: 'platforms', label: 'Platforms & Databases' }
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key as any)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeFilter === filter.key
                      ? 'bg-[#0B1F3A] text-white shadow-sm'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  key={service.id}
                  className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#C9A227]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#0B1F3A]/5 text-[#0B1F3A] flex items-center justify-center group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                      <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-3 group-hover:text-[#C9A227] transition-colors">
                      {service.domain}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {service.scope}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-3 flex items-center gap-1.5">
                        <FileCheck className="w-4 h-4 text-[#C9A227]" /> Typical Deliverables:
                      </h4>
                      <ul className="space-y-2 text-xs text-gray-600">
                        {service.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100 mt-4">
                    <div className="text-[11px] font-semibold text-gray-500 mb-2">
                      Standards / Practices:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.standards.map((std, sIdx) => (
                        <span key={sIdx} className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-gray-100 text-[#0B1F3A]">
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 7-Phase Delivery Methodology */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#C9A227] font-bold text-xs tracking-widest uppercase mb-3 block">
              Proven Delivery Framework
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3A] mb-6">
              Standard Delivery Methodology
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Every cybersecurity engagement follows a structured, milestone-driven lifecycle guaranteeing quality, transparency, and operational readiness.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {deliveryMethodology.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <div className="p-6 rounded-2xl bg-[#F7F7F5] border border-gray-200/70 hover:border-[#C9A227] hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
                        {item.phase}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed mb-4">
                      {item.activities}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-200/60">
                    <span className="text-[11px] font-bold text-gray-500 uppercase block mb-1">Key Output:</span>
                    <span className="text-xs font-semibold text-[#0B1F3A] block">{item.output}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Tier Support Model & SLA */}
      <section className="py-24 bg-[#0B1F3A] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A227]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#C9A227] font-bold text-xs tracking-widest uppercase mb-3 block">
              Operational Continuity
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Tiered Managed Support Model
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Tiered escalation pathways ensuring rapid containment, precision root-cause analysis, and executive architectural governance.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportTiers.map((tier, idx) => (
              <FadeIn key={idx} delay={idx * 0.15}>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[#C9A227]/50 hover:bg-white/[0.08] transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-extrabold text-[#C9A227]">{tier.tier}</span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white">
                        {tier.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{tier.name}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {tier.description}
                    </p>

                    <div className="space-y-3 pt-6 border-t border-white/10">
                      {tier.items.map((item, iIdx) => (
                        <div key={iIdx} className="flex items-start gap-2.5 text-xs text-gray-200">
                          <CheckCircle2 className="w-4 h-4 text-[#C9A227] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C9A227] font-bold text-xs tracking-widest uppercase mb-3 block">
              Commercial Flexibility
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3A] mb-6">
              Flexible Engagement Models
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Tailored commercial frameworks built to align with your organization's budget, technical maturity, and project timelines.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engagementModels.map((model, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-[#C9A227]/40 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-[#0B1F3A]">
                    {model.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">{model.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{model.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quality, Security & Delivery Principles */}
      <section className="py-24 bg-gray-50 border-t border-gray-200/70">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <FadeIn>
                <span className="text-[#C9A227] font-bold text-xs tracking-widest uppercase mb-3 block">
                  Delivery Rigor
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-6">
                  Quality, Security & Governance Principles
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-8">
                  Our professional delivery commitment guarantees least privilege access, strict non-disclosure, explicit authorization protocols, and evidence-backed acceptance sign-offs.
                </p>

                <div className="p-6 rounded-2xl bg-white border border-gray-200">
                  <h4 className="text-sm font-bold text-[#0B1F3A] mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#C9A227]" /> Standards Reference Note
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Referenced international standards (ISO/IEC 27001, NIST CSF, COBIT, OWASP, CIS) are used as rigorous implementation and professional alignment frameworks. Implementation support does not itself constitute accredited certification.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {corePrinciples.map((item, idx) => (
                  <FadeIn key={idx} delay={idx * 0.1}>
                    <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#C9A227] hover:shadow-md transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0" />
                        <h4 className="text-base font-bold text-[#0B1F3A]">{item.title}</h4>
                      </div>
                      <p className="text-gray-600 text-xs leading-relaxed pl-8">
                        {item.desc}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0B1F3A] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A227] rounded-full blur-[160px]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn>
            <span className="text-[#C9A227] font-bold text-xs tracking-widest uppercase mb-4 block">
              Elevate Your Security Posture
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Secure Your Enterprise Infrastructure?
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a confidential security assessment with our principal cyber advisors and receive an actionable maturity roadmap.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-sm bg-[#C9A227] text-[#0B1F3A] hover:bg-white transition-all duration-300 shadow-lg cursor-pointer"
              >
                Schedule Security Assessment
              </Link>
              <Link 
                to="/services" 
                className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-sm bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20"
              >
                View All Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default CyberSecurityTechPage;
