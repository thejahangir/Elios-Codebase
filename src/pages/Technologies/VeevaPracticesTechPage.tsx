import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, Code, Activity, Users, Settings, Building, 
  CheckCircle2, FileText, RefreshCw, ChevronRight, 
  ShieldCheck, X, Stethoscope, FileCheck, Search, HeartPulse
} from 'lucide-react';

const defaultHeroBg = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const VeevaPracticesTechPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  } as any;

  const [activeTab, setActiveTab] = useState<'clinical' | 'regulatory' | 'quality' | 'safety' | 'commercial'>('clinical');
  const [selectedRelease, setSelectedRelease] = useState<'24r1' | '24r2' | '24r3'>('24r2');
  const [showAssessmentModal, setShowAssessmentModal] = useState(false);

  const veevaVaultModules = {
    clinical: {
      title: "Veeva Vault Clinical Suite",
      badge: "Clinical Operations & Data",
      desc: "Accelerating study execution, centralizing clinical trial documentation, and automating investigator site collaboration across Phase I–IV global studies.",
      modules: [
        { name: "Vault eTMF (Trial Master File)", desc: "Real-time TMF health tracking aligned with DIA TMF Reference Model, automated inspection readiness, and e-signatures." },
        { name: "Vault CTMS (Clinical Operations)", desc: "End-to-end trial oversight, subject enrollment tracking, automated monitoring visit report (MVR) generation, and issue escalation." },
        { name: "Vault Study Startup (SSU)", desc: "Accelerating country and site activation, global ethics committee workflows, and automated contract/budget tracking." },
        { name: "Vault CDMS / EDC (Data Capture)", desc: "Modern electronic data capture (EDC), clinical coder, automated query generation, and real-time trial data cleaning." },
        { name: "Vault Clinical Payments", desc: "Automated site milestone payment calculations, invoice generation, and ERP financial ledger synchronization." },
        { name: "Vault Site Connect", desc: "Seamless bi-directional document sharing and safety notification distribution directly between sponsors, CROs, and clinical sites." }
      ]
    },
    regulatory: {
      title: "Veeva Vault Regulatory (RIM)",
      badge: "Regulatory Information Mgmt",
      desc: "A unified regulatory platform connecting global health authority registrations, submission content planning, automated publishing, and dossier archives.",
      modules: [
        { name: "Vault Submissions", desc: "Authoring, review, and approval of regulatory documents with automatic formatting against FDA, EMA, and Health Canada eCTD standards." },
        { name: "Vault Submissions Publishing", desc: "Continuous continuous eCTD publishing, hyperlinking, bookmarking, and automated validation against regional DTD specifications." },
        { name: "Vault Registrations (IDMP Ready)", desc: "Global product registration tracking, authorized market approvals, manufacturing site authorizations, and IDMP data alignment." },
        { name: "Vault Submissions Archive", desc: "Centralized repository for all historical and live agency correspondence, approval letters, and submitted sequence packages." },
        { name: "Health Authority Interactions", desc: "Tracking agency questions, formal meeting commitments, advisory committee responses, and mandatory timeline tracking." },
        { name: "Labeling & Artwork Management", desc: "End-to-end management of core data sheets (CCDS), regional prescribing information, package inserts, and carton carton artwork." }
      ]
    },
    quality: {
      title: "Veeva Vault Quality Suite",
      badge: "Quality & Compliance (QMS)",
      desc: "Modernizing quality operations, automating deviation investigations, orchestrating global change controls, and ensuring strict 21 CFR Part 11 compliance.",
      modules: [
        { name: "Vault QMS", desc: "Standardized quality event management: Deviations, CAPAs, Non-Conformances, Internal/External Audits, and Customer Complaints." },
        { name: "Vault QualityDocs", desc: "Controlled lifecycle management for SOPs, validation protocols, master batch records, and specification documents with audit trails." },
        { name: "Vault Training", desc: "Role-based training matrices, automated curriculum assignment, SCORM e-learning playback, and automated qualification sign-offs." },
        { name: "Vault Station Manager", desc: "Secure mobile tablet access for manufacturing shop-floor operators to view active, approved batch instructions and SOPs." },
        { name: "Quality Risk Management (QRM)", desc: "ICH Q9 risk assessment registers, failure mode and effects analysis (FMEA), and risk treatment monitoring." },
        { name: "Supplier Quality Management", desc: "Vendor qualification workflows, supplier audit scheduling, quality agreement repository, and vendor scorecards." }
      ]
    },
    safety: {
      title: "Veeva Vault Safety & Pharmacovigilance",
      badge: "Pharmacovigilance (PV)",
      desc: "Real-time adverse event intake, intelligent case processing, medical review, and electronic regulatory gateway submissions to global health authorities.",
      modules: [
        { name: "Vault Safety", desc: "Automated adverse event intake from clinical trials, post-marketing literature, and spontaneous consumer reports." },
        { name: "Vault SafetyDocs", desc: "Centralized pharmacovigilance documentation management: PSURs, DSURs, RMPs, and Pharmacovigilance System Master Files (PSMF)." },
        { name: "Intelligent Case Processing", desc: "Automated data extraction, MedDRA / WHO-Drug dictionary auto-coding, duplicate search, and narrative drafting." },
        { name: "Electronic Gateway Submissions", desc: "Automated E2B(R3) generation and compliant electronic transmission to FDA FAERS, EMA EudraVigilance, and PMDA." },
        { name: "Signal Detection & Safety Analytics", desc: "Statistical disproportionality scoring (PRR, ROR), safety trend monitoring, and aggregated safety reporting." },
        { name: "Literature Review & Monitoring", desc: "Automated ingestion and screening of biomedical publications for potential safety signals and adverse reactions." }
      ]
    },
    commercial: {
      title: "Veeva Commercial Cloud & CRM",
      badge: "Commercialization & MLR",
      desc: "Empowering life sciences field teams with omnichannel engagement, compliant content creation, and fast-track Medical, Legal & Regulatory (MLR) review.",
      modules: [
        { name: "Vault PromoMats", desc: "End-to-end digital asset management (DAM), collaborative MLR review, dynamic claim library linking, and automated withdrawal." },
        { name: "Vault MedComms", desc: "Medical inquiry management, scientific literature distribution, and compliant medical affairs KOL advisory workflows." },
        { name: "Veeva Vault CRM (Next-Gen)", desc: "Next-generation cloud CRM architected specifically for life sciences sales reps, MSLs, and key account managers." },
        { name: "Veeva Align (Territory Management)", desc: "Dynamic territory alignment, field sizing, customer targeting, and automated CRM roster synchronizations." },
        { name: "Veeva Network (Customer MDM)", desc: "Validated Healthcare Professional (HCP) and Healthcare Organization (HCO) master data with real-time compliance checks." },
        { name: "Crossix & Commercial Analytics", desc: "Health data analytics measuring real-world marketing effectiveness and patient medication adherence trends." }
      ]
    }
  };

  const coreServices = [
    {
      title: "Veeva Vault Implementation & Architecture",
      desc: "Full-lifecycle Vault design, object configuration, lifecycle state machines, workflow rules, and security profile provisioning.",
      icon: <Database className="w-6 h-6 text-[#C9A227]" />,
      features: ["Document Lifecycle Design", "Custom Object Modeling", "Security Matrix Setup", "User Acceptance Testing"]
    },
    {
      title: "Computerized System Validation (CSV & CSA)",
      desc: "Risk-based validation complying with GAMP 5, FDA 21 CFR Part 11, and EU Annex 11 regulations.",
      icon: <ShieldCheck className="w-6 h-6 text-[#C9A227]" />,
      features: ["Validation Plans (VP)", "IQ/OQ/PQ Protocol Authoring", "Traceability Matrix (RTM)", "Validation Summary Reports"]
    },
    {
      title: "Veeva CRM to Vault CRM Migration Factory",
      desc: "Strategic transition from legacy Salesforce-based Veeva CRM to the modern Veeva Vault CRM platform with zero data loss.",
      icon: <RefreshCw className="w-6 h-6 text-[#C9A227]" />,
      features: ["Data Model Harmonization", "Call & Interaction History Migration", "Align & Territory Cutover", "Field Rep Mobile Enablement"]
    },
    {
      title: "Life Sciences Legacy Data & Document Migration",
      desc: "High-volume automated ingestion of historical trial documents, regulatory dossiers, and quality records into Veeva Vault.",
      icon: <FileText className="w-6 h-6 text-[#C9A227]" />,
      features: ["Vault Loader Automation", "Metadata Enrichment & Cleansing", "Audit Trail Preservation", "100% Data Reconciliation"]
    },
    {
      title: "Veeva Java SDK & Enterprise Integrations",
      desc: "Custom Vault Java SDK triggers, Spark event integrations, and REST API connectors linking Vault with SAP, Oracle, LIMS, and EDC.",
      icon: <Code className="w-6 h-6 text-[#C9A227]" />,
      features: ["Java SDK Custom Triggers", "Spark REST Webhooks", "ERP Master Data Sync", "Secure Single Sign-On (SSO)"]
    },
    {
      title: "Tri-Annual Release Management & Managed Support",
      desc: "24/7 global application support and comprehensive release validation for Veeva's 3 major annual upgrades (V releases).",
      icon: <Settings className="w-6 h-6 text-[#C9A227]" />,
      features: ["Release Impact Assessments", "Pre-Release Sandbox Testing", "L1–L4 Support Tiers", "SOP & Training Updates"]
    }
  ];

  const validationLifecycle = [
    { phase: "01. Plan", title: "Validation Plan (VP)", desc: "Establish validation strategy, regulatory scope (21 CFR Part 11 / GAMP 5), and system categorization." },
    { phase: "02. Specify", title: "URS & Config Specs", desc: "Define functional requirements, electronic signature rules, security matrix, and workflow specs." },
    { phase: "03. Assess", title: "GxP Risk Assessment", desc: "Perform functional risk assessment (FMEA) to identify high-risk compliance parameters and mitigation controls." },
    { phase: "04. Verify", title: "IQ / OQ Execution", desc: "Execute Installation Qualification (IQ) and Operational Qualification (OQ) test scripts with strict evidence capture." },
    { phase: "05. Validate", title: "PQ & User Testing", desc: "Lead business user Performance Qualification (PQ), UAT execution, and defect remediation verification." },
    { phase: "06. Report", title: "Traceability & VSR", desc: "Compile Requirements Traceability Matrix (RTM) and execute formal Validation Summary Report (VSR) sign-off." },
    { phase: "07. Maintain", title: "Continuous State of Control", desc: "Ongoing change management, periodic reviews, and Tri-Annual release re-validation." }
  ];

  const supportTiers = [
    {
      tier: "L1 Support",
      badge: "24/7 Global Helpdesk",
      name: "User Access & Basic Operations",
      desc: "User onboarding, security profile assignment, document check-in/out unblocking, and basic workflow triage.",
      points: [
        "User credential resets & access permissions",
        "Document stuck workflow unblocking",
        "Standard user query assistance & ticket logging",
        "SLA monitoring & priority escalation"
      ]
    },
    {
      tier: "L2 Support",
      badge: "Config & Administration",
      name: "Vault Configuration Lead",
      desc: "Managing document types, lifecycle transitions, picklist updates, VQL queries, and standard report generation.",
      points: [
        "Document lifecycle & workflow state adjustments",
        "Custom field & picklist value additions",
        "VQL data extracts & audit log investigations",
        "Root cause analysis for user error trends"
      ]
    },
    {
      tier: "L3 Support",
      badge: "Technical & SDK",
      name: "Custom Code & API Engineering",
      desc: "Deep technical debugging for Vault Java SDK triggers, Loader scripts, and REST API integration failures.",
      points: [
        "Vault Java SDK trigger debugging & bug fixes",
        "REST API & Spark webhook synchronization repairs",
        "Data migration batch error remediation",
        "Performance optimization for heavy document loads"
      ]
    },
    {
      tier: "L4 Support",
      badge: "Release & Compliance",
      name: "Veeva Release & CSV Lead",
      desc: "Direct coordination with Veeva Support, Tri-Annual release impact audits, and formal GxP re-validation.",
      points: [
        "Veeva Systems vendor ticket escalation",
        "General Release (e.g. 24R1/R2/R3) sandbox verification",
        "Regression test execution & validation pack delta update",
        "Audit defense support for regulatory inspections"
      ]
    }
  ];

  const releaseData = {
    '24r1': {
      title: "Veeva 24R1 Release Management",
      badge: "Spring Release",
      desc: "Comprehensive impact assessment and sandbox regression testing for clinical study startup enhancements, Vault RIM IDMP schema updates, and QMS deviation routing.",
      activities: [
        "Sandbox pre-release provisioning and feature delta mapping",
        "Automated regression test suite execution across all validated Vaults",
        "Validation package amendment authoring (OQ/PQ delta testing)",
        "End-user delta release notes and SOP update distribution"
      ]
    },
    '24r2': {
      title: "Veeva 24R2 Release Management",
      badge: "Summer Release",
      desc: "Managing core platform updates including next-gen UI enhancements, AI-powered document classification in PromoMats, and Vault Safety E2B(R3) regional gateway adaptations.",
      activities: [
        "GxP risk classification for mandatory vs. optional features",
        "Automated script execution for document lifecycle and signature verification",
        "Integration endpoint testing with external ERP, CTMS, and LIMS systems",
        "Post-release production verification and formal VSR addendum sign-off"
      ]
    },
    '24r3': {
      title: "Veeva 24R3 Release Management",
      badge: "Winter Release",
      desc: "Executing critical updates for Vault CRM territory alignment algorithms, eTMF inspection readiness dashboards, and automated supplier quality scorecards.",
      activities: [
        "Comprehensive impact analysis against client custom Java SDK code",
        "Dry-run cutover and test execution in pre-production environments",
        "Operational readiness review with business system owners",
        "Zero-downtime production deployment governance and hypercare support"
      ]
    }
  };

  const lifeSciencesSectors = [
    { name: "Pharmaceutical Enterprises", icon: <HeartPulse className="w-5 h-5 text-[#C9A227]" />, desc: "Global commercialization, multi-country clinical trials, eCTD submissions, and centralized pharmacovigilance." },
    { name: "Biotechnology & Cell Therapy", icon: <Activity className="w-5 h-5 text-[#C9A227]" />, desc: "Agile study startup, electronic batch records, fast-track orphan drug submissions, and quality management." },
    { name: "Medical Device & Diagnostics", icon: <Stethoscope className="w-5 h-5 text-[#C9A227]" />, desc: "Design history files (DHF), device master records (DMR), MDR/IVDR compliance, and post-market surveillance." },
    { name: "Contract Research Orgs (CROs)", icon: <Search className="w-5 h-5 text-[#C9A227]" />, desc: "Multi-sponsor trial segregation, standardized eTMF reference models, and centralized monitoring." },
    { name: "Contract Manufacturers (CDMOs)", icon: <Building className="w-5 h-5 text-[#C9A227]" />, desc: "Shop-floor Station Manager deployment, controlled master batch records, and client quality audits." },
    { name: "Generics & Biosimilars", icon: <FileCheck className="w-5 h-5 text-[#C9A227]" />, desc: "High-volume ANDA submission publishing, global product registration tracking, and commercial pricing." }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0B1F3A]">
        <div className="absolute inset-0 z-0">
          <img src={defaultHeroBg} alt="Veeva Life Sciences Background" className="w-full h-full object-cover opacity-35 mix-blend-overlay" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-14 max-w-4xl"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/25 text-white font-medium text-xs md:text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C9A227] shadow-[0_0_10px_#C9A227]"></span>
              Veeva Systems Practice
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Veeva Services
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 font-light leading-relaxed max-w-3xl drop-shadow-md">
              Validated cloud solutions for Life Sciences: Clinical, Regulatory, Quality, Safety, and Commercial excellence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3.5 rounded-full bg-[#C9A227] text-[#0B1F3A] font-bold text-sm hover:bg-white transition-all shadow-lg hover:shadow-xl"
              >
                Connect with Veeva Architects
              </Link>
              <button 
                type="button"
                onClick={() => setShowAssessmentModal(true)}
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/30 transition-all cursor-pointer"
              >
                GxP Validation Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KPI Metrics Bar */}
      <section className="bg-[#071322] border-y border-white/10 py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-extrabold text-[#C9A227]">80+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1 font-medium">Life Sciences Engagements</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-extrabold text-white">100%</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1 font-medium">21 CFR Part 11 Compliance</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-extrabold text-[#C9A227]">3x/Year</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1 font-medium">Release Validation Cycles</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-extrabold text-white">45%</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1 font-medium">Faster Study Startup</div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Overview */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <div className="w-14 h-14 bg-[#0B1F3A]/5 text-[#0B1F3A] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Activity className="w-7 h-7 text-[#0B1F3A]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Empowering Life Sciences with Validated Cloud Infrastructure
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
              At Elios Technologies, we assist global biopharmaceutical, medical device, and contract research organizations (CROs) in modernizing their research and commercial ecosystems on Veeva Systems. From configuring Veeva Vault Clinical and Regulatory RIM suites to managing complex computer systems validation (CSV/CSA) and transitioning to next-generation Veeva Vault CRM, our certified consultants bridge deep regulatory knowledge with cloud engineering expertise.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              We ensure 100% adherence to global health authority regulations—including FDA 21 CFR Part 11, EU Annex 11, and GAMP 5 principles—while streamlining collaboration between sponsors, investigators, regulatory agencies, and commercial sales forces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Vault Suite Explorer */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9A227] bg-[#C9A227]/10 px-4 py-1.5 rounded-full">
              Platform Architecture
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mt-4 mb-4">
              Veeva Vault Unified Cloud Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base font-light">
              Explore our functional and technical consulting capabilities across the entire life sciences development lifecycle.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {[
              { id: 'clinical', label: 'Vault Clinical', icon: <Activity className="w-4 h-4" /> },
              { id: 'regulatory', label: 'Vault Regulatory (RIM)', icon: <FileCheck className="w-4 h-4" /> },
              { id: 'quality', label: 'Vault Quality (QMS)', icon: <ShieldCheck className="w-4 h-4" /> },
              { id: 'safety', label: 'Vault Safety (PV)', icon: <HeartPulse className="w-4 h-4" /> },
              { id: 'commercial', label: 'Commercial & PromoMats', icon: <Users className="w-4 h-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#0B1F3A] text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-gray-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C9A227] bg-[#C9A227]/10 px-3 py-1 rounded-md">
                  {veevaVaultModules[activeTab].badge}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                  {veevaVaultModules[activeTab].title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base max-w-xl font-light leading-relaxed">
                {veevaVaultModules[activeTab].desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {veevaVaultModules[activeTab].modules.map((mod, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#C9A227]/40 hover:bg-white hover:shadow-md transition-all">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <h4 className="font-bold text-gray-900 text-base">{mod.name}</h4>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm font-light leading-relaxed pl-7">
                    {mod.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Services Catalogue */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A] bg-gray-100 px-4 py-1.5 rounded-full">
              Full Lifecycle Support
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Our Specialized Veeva Services
            </h2>
            <div className="w-20 h-1 bg-[#C9A227] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: (idx % 3) * 0.1 }}
                className="bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:border-[#C9A227]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
                    {service.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-200/60">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Key Deliverables:</h5>
                  <ul className="space-y-2">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center text-xs text-gray-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0B1F3A] mr-2.5"></span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tri-Annual Release Management Showcase */}
      <section className="py-24 bg-[#0B1F3A] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9A227] bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
              Veeva Release Governance
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4">
              Tri-Annual Release Validation Model
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-base font-light">
              Veeva delivers three major platform releases each year. We protect your validated state with automated impact analysis and regression testing.
            </p>
          </motion.div>

          {/* Release Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
            {[
              { id: '24r1', label: '24R1 (Spring General Release)' },
              { id: '24r2', label: '24R2 (Summer General Release)' },
              { id: '24r3', label: '24R3 (Winter General Release)' }
            ].map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setSelectedRelease(r.id as any)}
                className={`py-4 px-6 rounded-2xl font-bold text-sm text-center transition-all cursor-pointer border ${
                  selectedRelease === r.id
                    ? 'bg-[#C9A227] text-[#0B1F3A] border-[#C9A227] shadow-lg'
                    : 'bg-white/5 hover:bg-white/10 text-white border-white/15'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          {/* Selected Release Card */}
          <motion.div 
            key={selectedRelease}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-3xl p-8 md:p-12 text-gray-900 max-w-5xl mx-auto shadow-2xl"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-gray-200">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B1F3A]">
                  {releaseData[selectedRelease].title}
                </h3>
                <p className="text-[#C9A227] font-semibold text-sm mt-1">
                  {releaseData[selectedRelease].badge}
                </p>
              </div>
            </div>

            <p className="text-gray-700 text-base leading-relaxed mb-8">
              {releaseData[selectedRelease].desc}
            </p>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Release Lifecycle Protocols:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                {releaseData[selectedRelease].activities.map((act, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Managed Services & L1-L4 Support */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A] bg-white border border-gray-200 px-4 py-1.5 rounded-full">
              SLA-Backed Support
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Veeva Managed Services & Support Tiers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base font-light">
              Dedicated support pods staffed by certified Veeva Vault Administrators and Solution Architects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportTiers.map((tier, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between hover:shadow-lg hover:border-[#C9A227]/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-[#0B1F3A] text-white">
                      {tier.tier}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#C9A227] bg-[#C9A227]/10 px-2 py-0.5 rounded">
                      {tier.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed font-light mb-6">
                    {tier.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <ul className="space-y-2.5">
                    {tier.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start text-xs text-gray-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GAMP 5 & CSV Validation Framework */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A] bg-gray-100 px-4 py-1.5 rounded-full">
              GxP Compliance Governance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              GAMP 5 Validation & CSV Delivery Lifecycle
            </h2>
            <div className="w-20 h-1 bg-[#C9A227] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {validationLifecycle.map((phase, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.08 }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex flex-col justify-between hover:bg-white hover:border-[#0B1F3A] hover:shadow-md transition-all group"
              >
                <div>
                  <span className="text-[11px] font-extrabold uppercase text-[#C9A227] block mb-2">
                    {phase.phase}
                  </span>
                  <h4 className="font-bold text-sm text-gray-900 mb-2 leading-tight">
                    {phase.title}
                  </h4>
                </div>
                <p className="text-[12px] text-gray-600 font-light leading-relaxed mt-3 pt-3 border-t border-gray-200/60">
                  {phase.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Life Sciences Sector Expertise */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A] bg-white border border-gray-200 px-4 py-1.5 rounded-full">
              Domain Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Life Sciences Industry Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base font-light">
              Tailored Vault configurations meeting the exact operating models of life sciences organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifeSciencesSectors.map((sec, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.08 }}
                className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#C9A227]/50 transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                  {sec.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{sec.name}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed font-light">{sec.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative py-28 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
      >
        <div className="absolute inset-0 bg-[#0B1F3A]/90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold mb-6">
            Transform Your Life Sciences Operations
          </motion.h2>
          <motion.p {...fadeIn} className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Connect with our certified Veeva Vault Architects and CSV Validation Leads to discuss your implementation, migration, or support strategy.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-[#C9A227] hover:bg-white text-[#0B1F3A] font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule a Consultation
            </Link>
            <button 
              type="button"
              onClick={() => setShowAssessmentModal(true)}
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-full border border-white/30 transition-all cursor-pointer"
            >
              GxP Readiness Assessment
            </button>
          </div>
        </div>
      </section>

      {/* Assessment Modal */}
      <AnimatePresence>
        {showAssessmentModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAssessmentModal(false)}
              className="fixed inset-0 bg-[#0B1F3A]/70 backdrop-blur-sm cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl z-10 p-8 text-center border border-gray-100"
            >
              <button 
                type="button"
                onClick={() => setShowAssessmentModal(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-16 h-16 bg-[#0B1F3A]/10 text-[#0B1F3A] rounded-2xl flex items-center justify-center mx-auto mb-5">
                <ShieldCheck className="w-8 h-8 text-[#0B1F3A]" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                GxP & 21 CFR Part 11 Audit Check
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Ready to review your Veeva Vault validation status, GAMP 5 documentation, or Tri-Annual release impact? Connect directly with our Life Sciences practice leads.
              </p>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowAssessmentModal(false)}
                  className="w-1/2 py-3 px-4 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-semibold transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <Link
                  to="/contact"
                  className="w-1/2 py-3 px-4 rounded-xl bg-[#0B1F3A] hover:bg-[#C9A227] text-white hover:text-[#0B1F3A] text-sm font-bold transition-all text-center cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <span>Connect</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VeevaPracticesTechPage;
