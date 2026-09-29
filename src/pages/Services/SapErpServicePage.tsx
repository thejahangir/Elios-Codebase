import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, Cloud, Activity, Users, Shield, Settings, 
  Building, Zap, CheckCircle2, ArrowRight, BarChart3, 
  Truck, FileText, RefreshCw, ChevronRight, Cpu, Compass, 
  Scale, X
} from 'lucide-react';

const defaultHeroBg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const SapErpServicePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  } as any;

  const [activeTab, setActiveTab] = useState<'s4hana' | 'supplychain' | 'finance' | 'hxm' | 'btp'>('s4hana');
  const [migrationType, setMigrationType] = useState<'brownfield' | 'greenfield' | 'selective'>('brownfield');
  const [showAssessmentModal, setShowAssessmentModal] = useState(false);

  const sapCapabilities = {
    s4hana: {
      title: "SAP S/4HANA Enterprise Management",
      badge: "Digital Core",
      desc: "Architecting intelligent ERP on SAP S/4HANA (Cloud & On-Premise) to consolidate processes, accelerate financials, and unlock real-time predictive analytics with clean-core governance.",
      modules: [
        { name: "SAP S/4HANA Cloud (Public/Private)", desc: "Scalable SaaS ERP enabling continuous innovation, standardized best-practice workflows, and lower TCO." },
        { name: "Clean Core Strategy & Extensibility", desc: "Decoupled extensions via SAP BTP eliminating custom ABAP debt and ensuring seamless automated upgrades." },
        { name: "RISE with SAP & GROW with SAP", desc: "Structured commercial and technical acceleration packages tailored for mid-market and large enterprises." },
        { name: "Central Finance (cFIN)", desc: "Consolidated multi-ERP financial reporting and real-time transaction replication without disrupting source legacy systems." },
        { name: "Universal Journal (ACDOCA)", desc: "Single source of financial truth combining general ledger, asset accounting, controlling, and profitability analysis." },
        { name: "SAP Signavio Process Transformation", desc: "Data-driven business process mining, modeling, simulation, and continuous operational optimization." }
      ]
    },
    finance: {
      title: "SAP Financials & Controlling (FICO / S/4HANA Finance)",
      badge: "Financial Precision",
      desc: "Transforming corporate finance operations from reactive reporting to predictive financial intelligence, automated continuous close, and unified global compliance.",
      modules: [
        { name: "General Ledger & Fast Close (FI-GL)", desc: "Real-time ledger updates, parallel accounting principles (IFRS/US GAAP), and automated intercompany eliminations." },
        { name: "Accounts Payable & Receivable (AP/AR)", desc: "Touchless automated invoice processing, intelligent dynamic discounting, and predictive credit/collections scoring." },
        { name: "Asset & Treasury Management (AA/TRM)", desc: "Complete asset lifecycle tracking, cash flow forecasting, liquidity management, and hedge accounting." },
        { name: "Cost Center & Product Costing (CO-CCA/PC)", desc: "Granular overhead cost allocation, bill-of-materials cost rollups, and actual costing ledger reconciliation." },
        { name: "Profitability Analysis (CO-PA)", desc: "Multi-dimensional margin evaluation by customer segment, product line, sales channel, and geographic region." },
        { name: "Group Reporting & Financial Consolidation", desc: "Automated real-time group-level legal and management consolidation directly inside S/4HANA." }
      ]
    },
    supplychain: {
      title: "SAP Digital Supply Chain & Operations",
      badge: "End-to-End Visibility",
      desc: "Synchronizing global demand forecasting, automated procurement, intelligent factory production, and high-velocity multi-modal warehouse logistics.",
      modules: [
        { name: "Sourcing & Procurement (MM / Ariba)", desc: "Strategic supplier qualification, automated purchase requisitioning, catalog management, and contract compliance." },
        { name: "Extended Warehouse Management (EWM)", desc: "High-density warehouse slotting, RF-directed wave picking, automated conveyor integration, and yard management." },
        { name: "Transportation Management (TM)", desc: "Freight order optimization, multi-modal routing, carrier collaboration, and automated freight settlement." },
        { name: "Integrated Business Planning (IBP)", desc: "Cloud-based sales & operations planning (S&OP), demand sensing, inventory buffer optimization, and supply response." },
        { name: "Production Planning & Execution (PP)", desc: "Material Requirements Planning (MRP Live), capacity leveling, shop floor execution, and subcontracting workflows." },
        { name: "Plant Maintenance & Quality (PM / QM)", desc: "Predictive asset maintenance, inspection lot processing, calibration, CAPA tracking, and audit certificate management." }
      ]
    },
    hxm: {
      title: "SAP SuccessFactors Human Experience Management (HXM)",
      badge: "Workforce Excellence",
      desc: "Reimagining employee experience, global talent acquisition, automated payroll processing, and continuous workforce development across 100+ countries.",
      modules: [
        { name: "Employee Central (Core HR)", desc: "Cloud-native single source of employee truth with global localization, organizational charting, and position management." },
        { name: "Global Payroll & Time Tracking", desc: "Localized compliant payroll engine supporting complex shift rules, tax regulations, and self-service pay statements." },
        { name: "Recruiting & Dynamic Onboarding", desc: "Multi-channel applicant tracking, AI-assisted resume screening, digital candidate offers, and automated day-one readiness." },
        { name: "Performance, Goals & Succession", desc: "Continuous feedback cycles, OKR tracking, 360-degree reviews, talent matrix calibration, and leadership bench planning." },
        { name: "Learning Management System (LMS)", desc: "Compliance course tracking, personalized learning paths, mobile micro-learning, and external certification tracking." },
        { name: "People Analytics & Workforce Planning", desc: "Executive HR dashboards, attrition risk prediction, compensation benchmarking, and skills gap heatmaps." }
      ]
    },
    btp: {
      title: "SAP Business Technology Platform (BTP) & Integration",
      badge: "Extensibility & Data",
      desc: "Accelerating integration across hybrid multi-cloud landscapes, building modern microservices, and orchestrating enterprise data with analytics.",
      modules: [
        { name: "SAP Integration Suite", desc: "Connect SAP and non-SAP systems with 3,000+ pre-built integration flows, Open Connectors, API Management, and event mesh." },
        { name: "SAP Extension Suite & SAP Build", desc: "Build enterprise web/mobile apps with low-code/pro-code tools, automated approval workflows, and digital workspaces." },
        { name: "ABAP Cloud & RAP Framework", desc: "Modern ABAP RESTful Application Programming model designed for clean core on S/4HANA Cloud and BTP ABAP Environment." },
        { name: "SAP Datasphere & Data Fabric", desc: "Harmonize structured SAP business semantics with non-SAP data lakes into a unified business data fabric." },
        { name: "SAP Analytics Cloud (SAC)", desc: "Integrated business intelligence, augmented predictive analytics, collaborative budgeting, and board-level reporting." },
        { name: "Enterprise Generative AI & Joule", desc: "Contextual SAP AI copilot orchestration across finance, supply chain, procurement, and customer operations." }
      ]
    }
  };

  const coreServices = [
    {
      title: "S/4HANA Implementation & Greenfield Deployments",
      desc: "Full lifecycle design and deployment using SAP Activate methodology, model company blueprints, and standard enterprise templates.",
      icon: <Database className="w-6 h-6 text-[#C9A227]" />,
      features: ["Fit-to-Standard Discovery", "Clean Core Design", "Automated Testing", "Cutover & Go-Live Governance"]
    },
    {
      title: "ECC 6.0 to S/4HANA Migration Factory",
      desc: "Systematic brownfield conversion or selective data transition (Bluefield) delivering fast, predictable, zero-data-loss upgrades.",
      icon: <RefreshCw className="w-6 h-6 text-[#C9A227]" />,
      features: ["Custom Code Remediation", "CVI (Customer-Vendor Integration)", "Finance & Asset Balance Migration", "Minimal Cutover Downtime"]
    },
    {
      title: "SAP Application Management Services (AMS)",
      desc: "24/7 proactive monitoring, continuous functional enhancement, and SLA-backed production support across all global SAP instances.",
      icon: <Settings className="w-6 h-6 text-[#C9A227]" />,
      features: ["L1–L4 Multi-Tier Support", "Basis & Infrastructure Admin", "Quarterly Release Upgrades", "Incident & Problem Management"]
    },
    {
      title: "SAP BTP Integration & Clean-Core Development",
      desc: "Integrating SAP with Salesforce, Workday, legacy mainframes, and external suppliers through SAP Integration Suite and REST APIs.",
      icon: <Cloud className="w-6 h-6 text-[#C9A227]" />,
      features: ["API-First Microservices", "Event-Driven Architecture", "Side-by-Side Extensibility", "OData / RFC / IDoc Adapters"]
    },
    {
      title: "Master Data Governance & Migration",
      desc: "Comprehensive master data cleansing, duplicate deduplication, hierarchy mapping, and validation for materials, vendors, and finance.",
      icon: <FileText className="w-6 h-6 text-[#C9A227]" />,
      features: ["SAP MDG Implementation", "Data Cleansing Rules", "Migration Cockpit (LTMC/LTMOM)", "Automated Reconciliation Audits"]
    },
    {
      title: "SAP Security, GRC & Compliance",
      desc: "Role-based authorization design, Segregation of Duties (SoD) analysis, audit logging, and automated user provisioning.",
      icon: <Shield className="w-6 h-6 text-[#C9A227]" />,
      features: ["SAP GRC Access Control", "Fiori Role Catalogs", "SoD Risk Remediation", "GDPR / SOX Compliance Validation"]
    }
  ];

  const methodologyPhases = [
    { phase: "01. Discover", title: "Strategy & Assessment", desc: "Process analysis with SAP Signavio, architecture review, S/4HANA readiness assessment, and RISE/GROW roadmap design." },
    { phase: "02. Prepare", title: "Project Charter & Sandbox", desc: "Governance framework, sandbox environment provisioning, team onboarding, and sprint backlog definition." },
    { phase: "03. Explore", title: "Fit-to-Standard Workshops", desc: "Interactive process validation against SAP Best Practices, gap documentation, and technical configuration blueprinting." },
    { phase: "04. Realize", title: "Build & Extensibility", desc: "System configuration, BTP side-by-side extension coding, data migration execution, and automated unit testing." },
    { phase: "05. Deploy", title: "Cutover & Dress Rehearsal", desc: "End-to-end integration testing, user acceptance testing (UAT), cutover simulation, end-user training, and production cutover." },
    { phase: "06. Run", title: "Hypercare & Handover", desc: "Intensive 24/7 post-go-live hypercare, ticket stabilization, knowledge transfer, and transition to ongoing AMS." },
    { phase: "07. Optimize", title: "Continuous Innovation", desc: "Periodic release updates, feature adoption, process performance tuning, and executive value realization tracking." }
  ];

  const supportTiers = [
    {
      tier: "L1 Support",
      badge: "24/7 Operations",
      name: "Monitoring & Helpdesk Triage",
      desc: "Round-the-clock monitoring of SAP system alerts, batch job failures, initial user assistance, and ticket routing.",
      points: [
        "24/7/365 telemetry & Basis system monitoring",
        "User password resets & authorization unlocks",
        "Batch job failure restarts & alert triage",
        "Automated SLA tracking & first-contact resolution"
      ]
    },
    {
      tier: "L2 Support",
      badge: "Functional & Technical",
      name: "Module & Config Support",
      desc: "In-depth functional troubleshooting across FICO, MM, SD, PP, EWM, and basic ABAP/interface error remediation.",
      points: [
        "IDoc / BAPI / OData transmission failure debugging",
        "Configuration corrections & period-end closing support",
        "Standard report extraction & table query execution",
        "Root cause analysis for recurring process bottlenecks"
      ]
    },
    {
      tier: "L3 Support",
      badge: "Advanced Engineering",
      name: "Complex Bug Fixes & Optimization",
      desc: "Deep technical investigation, custom ABAP code bug fixes, performance tuning, and BTP extension enhancements.",
      points: [
        "Custom ABAP / RAP / CDS View bug fixes & enhancements",
        "Performance optimization for long-running batch queries",
        "SAP Note evaluation, prerequisite checks & application",
        "Interface schema adjustments & complex data repairs"
      ]
    },
    {
      tier: "L4 Support",
      badge: "Vendor Escalation",
      name: "SAP Product & Core Kernel",
      desc: "Direct liaison with SAP AG support for standard product defects, kernel updates, and architectural redesigns.",
      points: [
        "SAP AG incident escalation & engineering collaboration",
        "Support Package Stack (SPS) upgrade management",
        "Disaster recovery failover rehearsals & Basis architecture",
        "Quarterly release impact analysis for S/4HANA Cloud"
      ]
    }
  ];

  const migrationDetails = {
    brownfield: {
      title: "Brownfield Conversion (System Conversion)",
      tagline: "Preserve Existing Configuration & Complete Historical Data",
      desc: "Upgrades your existing SAP ECC 6.0 system directly to SAP S/4HANA while retaining customizations, historical transaction records, and familiar workflows.",
      pros: ["Shortest time-to-value (5-9 months)", "100% historical transaction data retained", "Minimal disruption to established end-user routines"],
      bestFor: "Organizations with highly mature, well-governed ECC systems who want to move to S/4HANA with minimum business disruption."
    },
    greenfield: {
      title: "Greenfield Implementation (New Implementation)",
      tagline: "Complete Clean-Slate Re-engineering with SAP Best Practices",
      desc: "A fresh S/4HANA deployment that retires legacy custom code, standardizes business processes, and builds a strict Clean-Core architecture from day one.",
      pros: ["Zero legacy custom code debt", "Full alignment with standard SAP Best Practices", "Immediate readiness for rapid public cloud SaaS updates"],
      bestFor: "Organizations with heavily customized, outdated ECC systems, or companies undergoing major business model transformation."
    },
    selective: {
      title: "Selective Data Transition (Bluefield / Hybrid)",
      tagline: "Combine Greenfield Innovation with Brownfield Data Portability",
      desc: "A surgical transition approach that allows you to selectively carve out master data, specific historical time windows, and company codes into a clean target S/4HANA environment.",
      pros: ["Selective historical data extraction (e.g. last 3-5 years)", "Opportunity to harmonize charts of accounts and organizational structures", "Zero-downtime cutover capability"],
      bestFor: "Complex multi-system consolidations, divestitures, mergers, and global enterprises with massive legacy databases."
    }
  };

  const industries = [
    { name: "Manufacturing", icon: <Building className="w-5 h-5 text-[#C9A227]" />, desc: "Discrete & process manufacturing, shop floor automation, MRP Live, and predictive equipment maintenance." },
    { name: "Retail & Consumer Goods", icon: <Truck className="w-5 h-5 text-[#C9A227]" />, desc: "Omnichannel inventory orchestration, dynamic pricing, direct-to-consumer fulfillment, and trade promotions." },
    { name: "Banking & Financial Services", icon: <Scale className="w-5 h-5 text-[#C9A227]" />, desc: "Financial ledger consolidation, automated regulatory reporting, liquidity forecasting, and risk governance." },
    { name: "Life Sciences & Pharma", icon: <Activity className="w-5 h-5 text-[#C9A227]" />, desc: "21 CFR Part 11 electronic batch records, serialization, cold-chain logistics, and clinical trial accounting." },
    { name: "Energy & Utilities", icon: <Zap className="w-5 h-5 text-[#C9A227]" />, desc: "Asset lifecycle management, field worker scheduling, smart meter billing, and environmental ESG compliance." },
    { name: "High-Tech & Electronics", icon: <Cpu className="w-5 h-5 text-[#C9A227]" />, desc: "Global multi-tier supply chain collaboration, revenue recognition (IFRS 15), and warranty management." }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0B1F3A]">
        <div className="absolute inset-0 z-0">
          <img src={defaultHeroBg} alt="SAP ERP Background" className="w-full h-full object-cover opacity-35 mix-blend-overlay" />
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
              SAP Center of Excellence
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              SAP ERP Services
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 font-light leading-relaxed max-w-3xl drop-shadow-md">
              End-to-end S/4HANA transformation, clean-core modernization, BTP cloud integration, and 24/7 global managed services.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3.5 rounded-full bg-[#C9A227] text-[#0B1F3A] font-bold text-sm hover:bg-white transition-all shadow-lg hover:shadow-xl"
              >
                Schedule Architecture Consultation
              </Link>
              <button 
                type="button"
                onClick={() => setShowAssessmentModal(true)}
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/30 transition-all cursor-pointer"
              >
                S/4HANA Readiness Check
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
              <div className="text-3xl lg:text-4xl font-extrabold text-[#C9A227]">150+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1 font-medium">SAP Engagements Delivered</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-extrabold text-white">40%</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1 font-medium">Faster S/4HANA Conversion</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-extrabold text-[#C9A227]">99.9%</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1 font-medium">Managed Services SLA</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-extrabold text-white">100%</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1 font-medium">Clean-Core Governance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Overview */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <div className="w-14 h-14 bg-[#0B1F3A]/5 text-[#0B1F3A] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Database className="w-7 h-7 text-[#0B1F3A]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transform Your Digital Core with Next-Generation SAP ERP
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
              At Elios Technologies, we partner with enterprises across North America, EMEA, and APAC to architect, implement, optimize, and maintain their mission-critical SAP environments. Whether transitioning from legacy SAP ECC 6.0 to SAP S/4HANA Cloud, executing RISE with SAP initiatives, or unifying complex hybrid multi-cloud landscapes using SAP Business Technology Platform (BTP), our certified consultants ensure minimal business disruption and maximum return on investment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              We leverage pre-packaged industry blueprints, automated data migration accelerators, and continuous quality governance to deliver transparent, high-velocity SAP transformations tailored to your operational goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive SAP Capability Explorer */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9A227] bg-[#C9A227]/10 px-4 py-1.5 rounded-full">
              Modular Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mt-4 mb-4">
              Comprehensive SAP Practice Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base font-light">
              Explore our functional and technical expertise across core ERP modules, cloud extensions, and intelligent process automation.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {[
              { id: 's4hana', label: 'S/4HANA Core', icon: <Database className="w-4 h-4" /> },
              { id: 'finance', label: 'Finance & Controlling (FICO)', icon: <BarChart3 className="w-4 h-4" /> },
              { id: 'supplychain', label: 'Supply Chain & Logistics', icon: <Truck className="w-4 h-4" /> },
              { id: 'hxm', label: 'SuccessFactors HXM', icon: <Users className="w-4 h-4" /> },
              { id: 'btp', label: 'BTP & Cloud Integration', icon: <Cloud className="w-4 h-4" /> },
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
                  {sapCapabilities[activeTab].badge}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                  {sapCapabilities[activeTab].title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base max-w-xl font-light leading-relaxed">
                {sapCapabilities[activeTab].desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sapCapabilities[activeTab].modules.map((mod, idx) => (
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
              Service Catalogue
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Our End-to-End SAP Services
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
                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Key Focus Areas:</h5>
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

      {/* Migration Strategy Selector */}
      <section className="py-24 bg-[#0B1F3A] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9A227] bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
              Strategic Migration Pathways
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4">
              Choose Your S/4HANA Migration Path
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-base font-light">
              Every enterprise has distinct data structures, custom ABAP footprints, and tolerance for business downtime.
            </p>
          </motion.div>

          {/* Selector Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
            {[
              { id: 'brownfield', label: 'Brownfield (Conversion)' },
              { id: 'greenfield', label: 'Greenfield (Clean Slate)' },
              { id: 'selective', label: 'Selective Data (Bluefield)' }
            ].map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setMigrationType(p.id as any)}
                className={`py-4 px-6 rounded-2xl font-bold text-sm text-center transition-all cursor-pointer border ${
                  migrationType === p.id
                    ? 'bg-[#C9A227] text-[#0B1F3A] border-[#C9A227] shadow-lg'
                    : 'bg-white/5 hover:bg-white/10 text-white border-white/15'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Selected Migration Card */}
          <motion.div 
            key={migrationType}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-3xl p-8 md:p-12 text-gray-900 max-w-5xl mx-auto shadow-2xl"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-gray-200">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B1F3A]">
                  {migrationDetails[migrationType].title}
                </h3>
                <p className="text-[#C9A227] font-semibold text-sm mt-1">
                  {migrationDetails[migrationType].tagline}
                </p>
              </div>
            </div>

            <p className="text-gray-700 text-base leading-relaxed mb-8">
              {migrationDetails[migrationType].desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Key Advantages:
                </h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  {migrationDetails[migrationType].pros.map((pro, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#0B1F3A]" /> Ideal Target Scenario:
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed font-light">
                    {migrationDetails[migrationType].bestFor}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-200/70 flex justify-end">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0B1F3A] hover:text-[#C9A227] transition-colors"
                  >
                    Request Migration Assessment <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
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
              SLA-Backed Operational Excellence
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              SAP Managed Services & L1–L4 Support Tiers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base font-light">
              Proactive incident prevention, routine Basis administration, and rapid escalation to certified module leads.
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

      {/* SAP Activate 7-Phase Delivery Methodology */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A] bg-gray-100 px-4 py-1.5 rounded-full">
              Proven Delivery Framework
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              SAP Activate & Agile Delivery Lifecycle
            </h2>
            <div className="w-20 h-1 bg-[#C9A227] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {methodologyPhases.map((phase, idx) => (
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

      {/* Industry Solutions */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A] bg-white border border-gray-200 px-4 py-1.5 rounded-full">
              Sector Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Tailored Industry SAP Blueprints
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base font-light">
              Configured with pre-packaged compliance regulations, process standards, and master data hierarchies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.08 }}
                className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#C9A227]/50 transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                  {ind.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{ind.name}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed font-light">{ind.desc}</p>
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
            Accelerate Your SAP Transformation Journey
          </motion.h2>
          <motion.p {...fadeIn} className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Speak with our Lead SAP Architects to evaluate your ECC footprint, plan your S/4HANA migration, or optimize your managed AMS operations.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-[#C9A227] hover:bg-white text-[#0B1F3A] font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Request a Consultation
            </Link>
            <button 
              type="button"
              onClick={() => setShowAssessmentModal(true)}
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-full border border-white/30 transition-all cursor-pointer"
            >
              Take Assessment
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
                <Database className="w-8 h-8 text-[#0B1F3A]" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                SAP S/4HANA Readiness Check
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Ready to review your ECC system footprint, custom ABAP code remediation, and CVI prerequisites? Connect directly with our SAP Solution Advisory team.
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

export default SapErpServicePage;