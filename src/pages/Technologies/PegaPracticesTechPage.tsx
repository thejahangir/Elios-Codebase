import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Users, Workflow, CheckCircle2, Zap, ShieldCheck, 
  ChevronRight, ArrowUpRight, Cpu, Layers, Landmark, Shield, 
  Stethoscope, X, BrainCircuit, Settings, RefreshCw, Cloud
} from 'lucide-react';

const defaultHeroBg = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const techStackDetails: Record<string, {
  name: string;
  tagline: string;
  category: string;
  badgeColor: string;
  description: string;
  capabilities: string[];
  useCases: string[];
}> = {
  Kafka: {
    name: "Apache Kafka",
    tagline: "Real-Time Event Streaming & Pega Decisioning",
    category: "Event Streaming & Messaging",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    description: "Seamlessly ingest high-throughput real-time event streams into Pega Customer Decision Hub (CDH) and Case Management for sub-second event processing and adaptive Next-Best-Action recommendations.",
    capabilities: [
      "Bi-directional Pega-Kafka connectors with guaranteed message delivery",
      "Real-time event stream ingestion for Customer Decision Hub (CDH)",
      "Dead-letter queue (DLQ) automated error routing & recovery",
      "Distributed transactions across microservices with schema registry support"
    ],
    useCases: [
      "Real-time fraud detection and instant transaction alerts",
      "Event-driven customer retention and personalized cross-sell triggers",
      "High-volume IoT device telemetry ingestion and automated case creation"
    ]
  },
  Salesforce: {
    name: "Salesforce CRM",
    tagline: "Front-Office Engagement & Back-Office Pega Orchestration",
    category: "CRM & Customer Engagement",
    badgeColor: "bg-sky-50 text-sky-800 border-sky-200",
    description: "Unify front-office Salesforce customer engagement with back-office Pega workflow automation to eliminate data silos and accelerate end-to-end case resolution across enterprise channels.",
    capabilities: [
      "Bi-directional REST and OpenAPI sync with real-time data binding",
      "Embedded Pega Process Fabric inside Salesforce Lightning UI",
      "Automated lead-to-order routing and multi-tier approval matrix",
      "Unified Customer 360 view with synchronized interaction histories"
    ],
    useCases: [
      "Omnichannel customer service case resolution with SLA automation",
      "Complex quote-to-cash approvals bridging CRM and ERP backends",
      "Unified agent desktop embedding Pega next-best-actions inside Salesforce"
    ]
  },
  AWS: {
    name: "Amazon Web Services (AWS)",
    tagline: "Cloud-Native Scalability & Pega Cloud Deployments",
    category: "Cloud Infrastructure & Serverless",
    badgeColor: "bg-orange-50 text-orange-800 border-orange-200",
    description: "Deploy, scale, and optimize enterprise Pega applications on AWS utilizing elastic container orchestration (EKS), Aurora PostgreSQL, S3 data lakes, and Amazon Bedrock Generative AI services.",
    capabilities: [
      "Containerized Pega deployment on Amazon EKS with auto-scaling",
      "Secure VPC peering, KMS encryption, and IAM role federation",
      "Amazon S3 & AWS Glue data pipeline integration for decisioning models",
      "High-availability multi-AZ failover and disaster recovery automation"
    ],
    useCases: [
      "Enterprise Pega cloud migrations from legacy on-premises datacenters",
      "Elastic scaling for peak seasonal workloads and global retail events",
      "Secure sovereign cloud hosting complying with HIPAA, GDPR, and FedRAMP"
    ]
  },
  MuleSoft: {
    name: "MuleSoft Anypoint",
    tagline: "API-Led Enterprise Connectivity & Data Orchestration",
    category: "Enterprise Integration & API Management",
    badgeColor: "bg-indigo-50 text-indigo-800 border-indigo-200",
    description: "Leverage MuleSoft Anypoint Platform to orchestrate API contracts between Pega Digital Process Automation (DPA) and complex legacy mainframes, databases, and third-party partners.",
    capabilities: [
      "3-tier API-led architecture (System, Process, and Experience APIs)",
      "Standardized RAML / OpenAPI schemas with automated payload transformation",
      "Centralized API governance, rate limiting, and OAuth2 token management",
      "Low-latency asynchronous messaging and pub/sub event routing"
    ],
    useCases: [
      "Legacy core banking and insurance mainframe modernization",
      "Open Banking and Open Insurance API integration ecosystems",
      "Global supply chain partner integration with automated validation"
    ]
  },
  Oracle: {
    name: "Oracle Cloud & Database",
    tagline: "Enterprise Database & Oracle Fusion Ecosystem Sync",
    category: "Database & Enterprise Applications",
    badgeColor: "bg-rose-50 text-rose-800 border-rose-200",
    description: "Directly integrate Pega with Oracle Database, Autonomous Data Warehouse, and Oracle Fusion ERP Cloud for real-time financial, ledger, and supply chain operational updates.",
    capabilities: [
      "High-performance JDBC connectivity with Oracle RAC cluster support",
      "Event-driven integration with Oracle Fusion Cloud ERP & SCM",
      "Secure data mapping and PL/SQL stored procedure orchestration",
      "Automated financial reconciliation and compliance audit trails"
    ],
    useCases: [
      "Enterprise procurement and automated vendor invoice approvals",
      "Global multi-currency financial close and exception handling",
      "Complex billing dispute resolution and automated account adjustments"
    ]
  },
  SAP: {
    name: "SAP S/4HANA",
    tagline: "S/4HANA Modernization & Agile Process Automation",
    category: "Enterprise Resource Planning (ERP)",
    badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
    description: "Supercharge your SAP S/4HANA digital core with Pega’s agile low-code workflow engine, bridging legacy ERP complexity with streamlined customer and employee journeys.",
    capabilities: [
      "Real-time RFC, BAPI, and OData service connections with SAP",
      "Clean-core extension architecture avoiding ABAP customizations",
      "Automated master data governance and cross-departmental approvals",
      "End-to-end Order-to-Cash (O2C) and Procure-to-Pay (P2P) automation"
    ],
    useCases: [
      "Complex dynamic order orchestration across global SAP instances",
      "Automated customer dispute and credit claim management",
      "Unified employee onboarding and CAPEX expenditure authorization"
    ]
  }
};

const PegaPracticesTechPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  } as any;

  const [activeTab, setActiveTab] = useState<'cdh' | 'dpa' | 'ai_rpa' | 'crm' | 'modernization'>('cdh');
  const [roiCurrentProcessCount, setRoiCurrentProcessCount] = useState(10);
  const [roiManualEffort, setRoiManualEffort] = useState(100);
  const [roiTeamSize, setRoiTeamSize] = useState(5);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [showAssessmentModal, setShowAssessmentModal] = useState(false);
  
  const estimatedSavings = (roiCurrentProcessCount * roiManualEffort * roiTeamSize * 0.4).toFixed(0);
  const activeTechModal = selectedTech ? techStackDetails[selectedTech] : null;

  const pegaCapabilities = {
    cdh: {
      title: "Pega Customer Decision Hub™ (CDH)",
      badge: "Real-Time 1:1 AI",
      desc: "Delivering real-time predictive analytics, adaptive machine learning models, and Next-Best-Action (NBA) decisioning across every customer touchpoint.",
      modules: [
        { name: "Next-Best-Action Designer", desc: "Centralized decision brain balancing customer needs, propensity scores, context, and business priority in sub-seconds." },
        { name: "Adaptive & Predictive AI Models", desc: "Self-learning models that automatically adjust predictions as customer behaviors, market trends, and feedback shift." },
        { name: "1:1 Operations Manager", desc: "Agile business interface allowing marketers to create, test, and release new offers and treatments in days, not months." },
        { name: "Omnichannel Delivery Fabric", desc: "Unified engagement strategy executed consistently across web, mobile apps, contact center, email, and branch kiosks." },
        { name: "Real-Time Event Ingestion", desc: "High-throughput stream processing with Apache Kafka to detect intent signals and trigger proactive engagements." },
        { name: "Customer Value Optimization", desc: "Dynamic churn prevention, contextual retention triggers, and AI-driven cross-sell/up-sell maximization." }
      ]
    },
    dpa: {
      title: "Digital Process Automation & Case Management",
      badge: "Core Workflow Engine",
      desc: "Streamlining end-to-end multi-party operations with low-code visual Microjourneys™, dynamic case routing, and Constellation UI architecture.",
      modules: [
        { name: "Dynamic Case Management", desc: "Model complex, multi-tiered business processes with conditional routing, parent-child hierarchies, and automated SLA tracking." },
        { name: "Pega Constellation UI", desc: "Modern, component-based front-end design architecture delivering blazing-fast, accessible, and intuitive user experiences." },
        { name: "Pega Process Fabric™", desc: "Unified enterprise work portal coordinating tasks across disparate legacy systems and multi-instance Pega applications." },
        { name: "Microjourney™ Execution", desc: "Deliver end-to-end customer outcomes in 60-to-90-day iterative release cycles with pre-built reusable design patterns." },
        { name: "Automated Escalations & Deadlines", desc: "Intelligent timers, goal/deadline triggers, and automated reassignment ensuring strict regulatory compliance." },
        { name: "Mobile & Offline Capability", desc: "Native offline case creation and sync for field service workers, claims adjusters, and audit inspectors." }
      ]
    },
    ai_rpa: {
      title: "Pega Process AI & Robotic Automation (RPA)",
      badge: "Intelligent Automation",
      desc: "Combining conversational GenAI, natural language processing, predictive case SLA forecasting, and robotic bots for touchless straight-through processing.",
      modules: [
        { name: "Pega GenAI™ & Knowledge Buddy", desc: "Generative AI copilots summarizing complex case histories, drafting compliant customer replies, and answering agent queries." },
        { name: "Pega Process AI", desc: "Applying predictive models directly inside live cases to anticipate bottlenecks, forecast completion times, and route work." },
        { name: "Pega Robotic Process Automation (RPA)", desc: "Attended and unattended software bots automating repetitive legacy screen scraping and manual data re-entry." },
        { name: "Email Bot & NLP Triage", desc: "Intelligent email classification, sentiment analysis, entity extraction, and automated case creation from unstructured inbox streams." },
        { name: "Pega Process Mining", desc: "Discovering real-world process inefficiencies, rework loops, and compliance deviations using raw application audit logs." },
        { name: "Workforce Intelligence", desc: "AI-driven analytics measuring application usage, desktop activity patterns, and employee productivity optimization opportunities." }
      ]
    },
    crm: {
      title: "Pega Customer Service & Sales Automation",
      badge: "Unified Engagement",
      desc: "Empowering contact center agents and sales teams with contextual guidance, unified customer 360 views, and automated service resolution.",
      modules: [
        { name: "Unified Agent Desktop", desc: "Single consolidated screen presenting full customer history, active cases, and step-by-step next-best-actions." },
        { name: "Voice & Chat AI Summarization", desc: "Real-time call transcription, automatic wrap-up note generation, and sentiment tracking powered by Pega GenAI™." },
        { name: "Self-Service Digital Portals", desc: "Secure customer web and mobile self-service workflows enabling automated dispute filing, address changes, and claims." },
        { name: "Intelligent Sales Opportunity Pipeline", desc: "AI-assisted lead scoring, deal velocity tracking, activity tracking, and automated quote approval workflows." },
        { name: "Dispute & Claims Resolution", desc: "Pre-built industry workflows for card chargebacks, payment exceptions, and insurance claims adjudication." },
        { name: "Co-Browse & Screen Share", desc: "Secure in-session visual assistance enabling agents to co-navigate complex forms with customers in real-time." }
      ]
    },
    modernization: {
      title: "Pega Infinity™ Cloud & Modernization",
      badge: "Cloud-Native Scalability",
      desc: "Upgrading legacy Pega 7/8 applications to Pega Infinity '24, containerizing workloads on Kubernetes, and optimizing architecture guardrails.",
      modules: [
        { name: "Legacy Pega Infinity Upgrades", desc: "Structured upgrade factories migrating legacy rulesets, deprecated activities, and UI components to modern Pega Infinity." },
        { name: "Cloud Migration (AWS/Azure/GCP)", desc: "Containerized deployment on Amazon EKS, Azure AKS, or Pega Cloud with auto-scaling and multi-AZ high availability." },
        { name: "Pega PDC (Predictive Diagnostic Cloud)", desc: "24/7 AI-powered health monitoring, telemetry alerts, slow-running query identification, and memory leak analysis." },
        { name: "Guardrail Compliance Audits", desc: "Rigorous code quality audits ensuring guardrail compliance scores > 90% for maintainable, upgrade-safe low-code apps." },
        { name: "Deployment Manager & CI/CD", desc: "Automated pipeline orchestration for automated testing, code packaging, guardrail validation, and multi-environment cutovers." },
        { name: "Security & Role Governance", desc: "Attribute-based access control (ABAC), role-based access (RBAC), database encryption, and audit trail compliance." }
      ]
    }
  };

  const coreServices = [
    {
      title: "Pega Implementation & Greenfield Development",
      desc: "End-to-end application delivery utilizing Pega Express methodology, low-code best practices, and standard enterprise layer cakes.",
      icon: <Workflow className="w-6 h-6 text-[#C9A227]" />,
      features: ["Microjourney™ Scoping", "Constellation UI Design", "Automated Testing", "Clean Layer Cake Architecture"]
    },
    {
      title: "Pega Infinity Modernization & Cloud Migration",
      desc: "Upgrading legacy Pega versions (Pega 7.x / 8.x) to Pega Infinity with automated rule remediation and cloud re-platforming.",
      icon: <RefreshCw className="w-6 h-6 text-[#C9A227]" />,
      features: ["Ruleset Modernization", "Pega Cloud / AWS / Azure Migration", "Database Schema Optimization", "Minimal Cutover Downtime"]
    },
    {
      title: "Customer Decision Hub (CDH) & 1:1 Real-Time AI",
      desc: "Architecting Next-Best-Action strategies, predictive AI models, and real-time Kafka event streams across all customer channels.",
      icon: <BrainCircuit className="w-6 h-6 text-[#C9A227]" />,
      features: ["NBA Designer Configuration", "Adaptive Model Training", "Omnichannel Event Integration", "Marketer 1:1 Ops Enablement"]
    },
    {
      title: "Pega 24/7 Managed Services & Application Support",
      desc: "SLA-backed global support, proactive PDC monitoring, continuous feature enhancements, and multi-tier issue resolution.",
      icon: <Settings className="w-6 h-6 text-[#C9A227]" />,
      features: ["L1–L4 Multi-Tier Support", "PDC Telemetry Health Checks", "Hotfix & Security Patching", "Production Incident Management"]
    },
    {
      title: "Pega Center of Excellence (CoE) & Advisory",
      desc: "Establishing enterprise governance charters, Architecture Review Boards (ARBs), and low-code guardrail quality standards.",
      icon: <Building2 className="w-6 h-6 text-[#C9A227]" />,
      features: ["CoE Operating Model", "Guardrail Score Optimization (>90)", "Architecture Health Audits", "Reusable Component Libraries"]
    },
    {
      title: "Certified Pega Staff Augmentation",
      desc: "Provisioning elite certified Pega talent to accelerate project velocity and bridge critical capability gaps in your agile pods.",
      icon: <Users className="w-6 h-6 text-[#C9A227]" />,
      features: ["Lead System Architects (LSA)", "Senior System Architects (SSA)", "Certified Business Architects (CBA)", "Dedicated Delivery Pods"]
    }
  ];

  const deliveryPhases = [
    { phase: "01. Discover", title: "Microjourney™ Scoping", desc: "Identify high-value business outcomes, map user personas, prioritize Day-1 release scope, and align business KPIs." },
    { phase: "02. Prepare", title: "Architecture & CoE Charter", desc: "Define Enterprise Layer Cake, establish environment pipelines with Deployment Manager, and align ARB governance." },
    { phase: "03. Build", title: "Low-Code Sprints", desc: "Build cases, configure Next-Best-Action rules, integrate APIs, and enforce strict Pega guardrail compliance (>90)." },
    { phase: "04. Test", title: "Automated Testing & UAT", desc: "Execute scenario testing, automated unit tests with Pega Scenario Testing, load benchmarking, and business sign-off." },
    { phase: "05. Deploy", title: "Production Cutover", desc: "Automated Deployment Manager pipeline release, data cutover validation, zero-downtime deployment, and user training." },
    { phase: "06. Adopt", title: "Hypercare & Optimization", desc: "24/7 post-go-live stabilization, real-time PDC telemetry monitoring, business value realization, and ongoing AMS transition." }
  ];

  const supportTiers = [
    {
      tier: "L1 Support",
      badge: "24/7 Operations",
      name: "Monitoring & Ticket Triage",
      desc: "Round-the-clock monitoring of Pega system alerts, PDC notifications, user access unlock, and ticket routing.",
      points: [
        "24/7/365 PDC telemetry & server health monitoring",
        "User access & portal permission provisioning",
        "Agent queue & listener failure restarts",
        "Automated SLA tracking & first-contact resolution"
      ]
    },
    {
      tier: "L2 Support",
      badge: "Functional & Technical",
      name: "Case & Decision Rule Triage",
      desc: "Functional troubleshooting across Case Management, decision tables, correspondence, and standard interface error remediation.",
      points: [
        "REST API / SOAP connector failure debugging",
        "Stuck case assignment routing & SLA adjustments",
        "Decision table & decision tree rule modifications",
        "Root cause analysis for recurrent workflow bottlenecks"
      ]
    },
    {
      tier: "L3 Support",
      badge: "LSA / SSA Engineering",
      name: "Complex Bug Fixes & Optimization",
      desc: "Deep technical investigation, custom Java/rule debugging, database performance optimization, and custom extension fixes.",
      points: [
        "Advanced activity & data transform debugging",
        "Database query optimization & index tuning",
        "Hotfix prerequisite validation & deployment",
        "Custom UI / Constellation component remediation"
      ]
    },
    {
      tier: "L4 Support",
      badge: "Vendor Escalation",
      name: "Pegasystems Vendor Support",
      desc: "Direct coordination with Pegasystems Support for core platform defects, engine bug hotfixes, and major version upgrades.",
      points: [
        "Pegasystems AG incident escalation & ticket tracking",
        "Pega Infinity minor/major version upgrade management",
        "PDC architectural health & capacity planning",
        "Disaster recovery failover verification & validation"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0B1F3A]">
        <div className="absolute inset-0 z-0">
          <img src={defaultHeroBg} alt="Pega Background" className="w-full h-full object-cover opacity-35 mix-blend-overlay" />
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
              Pega Center of Excellence
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Pega Services
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 font-light leading-relaxed max-w-3xl drop-shadow-md">
              Low-code Digital Process Automation (DPA), Customer Decision Hub (CDH), Pega Infinity™ modernization, and 24/7 managed support.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3.5 rounded-full bg-[#C9A227] text-[#0B1F3A] font-bold text-sm hover:bg-white transition-all shadow-lg hover:shadow-xl"
              >
                Connect with Lead System Architects
              </Link>
              <button 
                type="button"
                onClick={() => setShowAssessmentModal(true)}
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/30 transition-all cursor-pointer"
              >
                Pega Guardrail Assessment
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
              <div className="text-3xl lg:text-4xl font-extrabold text-[#C9A227]">120+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1 font-medium">Certified Pega Architects</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-extrabold text-white">40%</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1 font-medium">Faster Delivery with Pega Express</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-extrabold text-[#C9A227]">99.9%</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1 font-medium">Application Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-extrabold text-white">90+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1 font-medium">Pega Guardrail Score Average</div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Overview */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <div className="w-14 h-14 bg-[#0B1F3A]/5 text-[#0B1F3A] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Layers className="w-7 h-7 text-[#0B1F3A]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Drive Autonomous Enterprise Workflows on Pega Infinity™
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
              At Elios Technologies, we assist enterprises in transforming their core business operations using Pegasystems’ market-leading low-code platform. By uniting Digital Process Automation (DPA), real-time AI decisioning via Customer Decision Hub (CDH), conversational Generative AI copilots, and robotic automation (RPA), we help financial institutions, insurers, healthcare payers, and telecom providers eliminate operational bottlenecks and deliver seamless 1:1 customer experiences.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Our delivery team includes certified Lead System Architects (LSAs), Senior System Architects (SSAs), and Certified Business Architects (CBAs) who enforce strict Pega guardrail compliance, clean Enterprise Layer Cake architecture, and rapid 60-to-90-day Microjourney™ release velocity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Pega Capability Explorer */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9A227] bg-[#C9A227]/10 px-4 py-1.5 rounded-full">
              Pega Infinity Platform
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mt-4 mb-4">
              Comprehensive Pega Practice Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base font-light">
              Explore our technical depth across 1:1 customer decisioning, digital process automation, GenAI copilots, and cloud modernization.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {[
              { id: 'cdh', label: 'Decision Hub (CDH)', icon: <BrainCircuit className="w-4 h-4" /> },
              { id: 'dpa', label: 'DPA & Case Management', icon: <Workflow className="w-4 h-4" /> },
              { id: 'ai_rpa', label: 'Process AI & RPA', icon: <Cpu className="w-4 h-4" /> },
              { id: 'crm', label: 'Customer Service & CRM', icon: <Users className="w-4 h-4" /> },
              { id: 'modernization', label: 'Cloud & Modernization', icon: <Cloud className="w-4 h-4" /> },
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
                  {pegaCapabilities[activeTab].badge}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                  {pegaCapabilities[activeTab].title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base max-w-xl font-light leading-relaxed">
                {pegaCapabilities[activeTab].desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pegaCapabilities[activeTab].modules.map((mod, idx) => (
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
              Service Offerings
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Our Comprehensive Pega Services
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

      {/* Interactive ROI & Architecture Showcase */}
      <section className="py-24 bg-gray-50 border-b border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A] bg-white border border-gray-200 px-4 py-1.5 rounded-full">
              Interactive Assessment Tools
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              ROI Calculator & Architecture Ecosystem
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base font-light">
              Estimate potential process automation savings and explore verified architectural integration patterns.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pega ROI Estimator */}
            <motion.div {...fadeIn} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pega Automation ROI Estimator</h3>
                <p className="text-gray-500 mb-6 text-xs font-light">Project estimated annual operational savings achieved through low-code process automation.</p>
                
                <div className="space-y-5 text-sm mb-6 font-sans">
                  <div>
                    <div className="flex justify-between mb-1.5 text-xs font-semibold"><span className="text-gray-600">Manual Processes Count</span><span className="text-[#0B1F3A] font-bold">{roiCurrentProcessCount}</span></div>
                    <input type="range" min="1" max="50" value={roiCurrentProcessCount} onChange={(e) => setRoiCurrentProcessCount(Number(e.target.value))} className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C9A227]" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1.5 text-xs font-semibold"><span className="text-gray-600">Avg Monthly Hours / Process</span><span className="text-[#0B1F3A] font-bold">{roiManualEffort} hrs</span></div>
                    <input type="range" min="10" max="500" value={roiManualEffort} onChange={(e) => setRoiManualEffort(Number(e.target.value))} className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C9A227]" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1.5 text-xs font-semibold"><span className="text-gray-600">Operational Team Size</span><span className="text-[#0B1F3A] font-bold">{roiTeamSize} staff</span></div>
                    <input type="range" min="1" max="50" value={roiTeamSize} onChange={(e) => setRoiTeamSize(Number(e.target.value))} className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C9A227]" />
                  </div>
                </div>
              </div>

              <div className="bg-[#0B1F3A] p-5 rounded-2xl text-center text-white">
                <span className="block text-[#C9A227] text-xs uppercase tracking-wider font-bold mb-1">Est. Annual Efficiency Gain</span>
                <span className="text-3xl font-extrabold text-white">${Number(estimatedSavings).toLocaleString()}</span>
              </div>
            </motion.div>

            {/* Guardrail Checker */}
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pega Guardrail Health Audit</h3>
                <p className="text-gray-500 mb-6 text-xs font-light">Benchmark your current Pega implementation against official Pegasystems architecture standards and clean layer cake principles.</p>
                <div className="flex items-center justify-center py-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#C9A227] animate-[spin_12s_linear_infinite]"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ShieldCheck className="w-10 h-10 text-[#0B1F3A]" />
                    </div>
                  </div>
                </div>
              </div>
              <button 
                type="button"
                onClick={() => setShowAssessmentModal(true)}
                className="w-full py-3.5 bg-gray-50 border border-gray-200 text-gray-800 font-bold rounded-2xl hover:bg-[#0B1F3A] hover:text-white transition-all flex justify-center items-center gap-2 cursor-pointer text-sm"
              >
                Launch Guardrail Check <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Tech Stack Showcase */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Integration Ecosystem</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A227] bg-[#C9A227]/10 px-2 py-0.5 rounded">
                    Click Details
                  </span>
                </div>
                <p className="text-gray-500 mb-6 text-xs font-light">Pre-built connectors linking Pega with your core databases, streaming buses, and enterprise ERPs.</p>
                <div className="grid grid-cols-2 gap-3">
                  {['Kafka', 'Salesforce', 'AWS', 'MuleSoft', 'Oracle', 'SAP'].map((tech) => (
                    <button
                      key={tech} 
                      type="button"
                      onClick={() => setSelectedTech(tech)}
                      className="bg-gray-50 border border-gray-200 rounded-xl p-3.5 flex items-center justify-between text-xs font-bold text-gray-700 hover:text-[#0B1F3A] hover:bg-[#C9A227]/10 hover:border-[#C9A227]/50 transition-all cursor-pointer group text-left"
                    >
                      <span>{tech}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#0B1F3A] transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="pt-4 text-center">
                <span className="text-xs text-gray-400">Architected for High-Throughput APIs</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Managed Services & L1-L4 Support */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A] bg-gray-100 px-4 py-1.5 rounded-full">
              SLA Support Model
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Pega Managed Services & Support Tiers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base font-light">
              Proactive PDC telemetry health monitoring, automated ticket dispatch, and rapid escalation to certified Lead System Architects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportTiers.map((tier, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 rounded-3xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between hover:bg-white hover:shadow-lg hover:border-[#C9A227]/40 transition-all"
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
                <div className="pt-4 border-t border-gray-200/60">
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

      {/* Pega Express 6-Phase Delivery Framework */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A] bg-white border border-gray-200 px-4 py-1.5 rounded-full">
              Pega Express Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Agile Delivery & Governance Lifecycle
            </h2>
            <div className="w-20 h-1 bg-[#C9A227] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {deliveryPhases.map((phase, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.08 }}
                className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col justify-between hover:border-[#0B1F3A] hover:shadow-md transition-all group"
              >
                <div>
                  <span className="text-[11px] font-extrabold uppercase text-[#C9A227] block mb-2">
                    {phase.phase}
                  </span>
                  <h4 className="font-bold text-sm text-gray-900 mb-2 leading-tight">
                    {phase.title}
                  </h4>
                </div>
                <p className="text-[12px] text-gray-600 font-light leading-relaxed mt-3 pt-3 border-t border-gray-100">
                  {phase.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Enterprise Solutions */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A] bg-gray-100 px-4 py-1.5 rounded-full">
              Domain Specialization
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Industry-Specific Pega Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base font-light">
              Accelerating time-to-value with pre-configured industry data models and regulatory frameworks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Financial Services & Banking", desc: "Commercial loan originations, real-time KYC/AML compliance screening, credit dispute resolution, and 1:1 wealth management advisory.", icon: <Landmark className="w-8 h-8 text-[#0B1F3A]" /> },
              { title: "Insurance & Underwriting", desc: "First Notice of Loss (FNOL) claims processing, automated policy underwriting, and subrogation recovery workflows.", icon: <Shield className="w-8 h-8 text-[#0B1F3A]" /> },
              { title: "Healthcare & Life Sciences", desc: "Patient intake automation, prior authorization approvals, care management coordination, and compliant appeal processing.", icon: <Stethoscope className="w-8 h-8 text-[#0B1F3A]" /> },
              { title: "Telecom & Utilities", desc: "Intelligent dynamic order management, field service technician dispatch, billing dispute automation, and proactive retention offers.", icon: <Zap className="w-8 h-8 text-[#0B1F3A]" /> }
            ].map((sol, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }} 
                className="group bg-gray-50 border border-gray-200 p-8 rounded-3xl hover:bg-white hover:shadow-xl hover:border-[#C9A227]/50 transition-all flex items-start gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all">
                  {sol.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{sol.title}</h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">{sol.desc}</p>
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
            Elevate Your Enterprise Architecture with Pega
          </motion.h2>
          <motion.p {...fadeIn} className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Connect with our Lead System Architects (LSAs) and Business Architects to evaluate your Pega roadmap, optimize guardrails, or plan an Infinity upgrade.
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
              Request Architecture Audit
            </button>
          </div>
        </div>
      </section>

      {/* Tech Stack Detail Modal */}
      <AnimatePresence>
        {selectedTech && activeTechModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTech(null)}
              className="fixed inset-0 bg-[#0B1F3A]/70 backdrop-blur-sm cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl z-10 overflow-hidden my-8 border border-gray-100"
            >
              <button 
                type="button"
                onClick={() => setSelectedTech(null)}
                className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-gray-100 hover:bg-[#0B1F3A] text-gray-500 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="bg-[#0B1F3A] p-6 sm:p-8 text-white relative overflow-hidden">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border ${activeTechModal.badgeColor}`}>
                  {activeTechModal.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {activeTechModal.name}
                </h3>
                <p className="text-[#C9A227] text-sm font-medium">
                  {activeTechModal.tagline}
                </p>
              </div>

              <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-2">Integration Overview</h4>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {activeTechModal.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-3">Key Integration Capabilities</h4>
                  <div className="space-y-2.5">
                    {activeTechModal.capabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-700 leading-relaxed font-medium">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-3">Strategic Enterprise Use Cases</h4>
                  <div className="space-y-2">
                    {activeTechModal.useCases.map((uc, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                        <Zap className="w-4 h-4 text-[#C9A227] mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{uc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-gray-400 hidden sm:inline">
                    Pega Architecture & Integration Pattern
                  </span>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setSelectedTech(null)}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-semibold transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                    <Link
                      to="/contact"
                      className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0B1F3A] hover:bg-[#C9A227] text-white hover:text-[#0B1F3A] text-sm font-bold transition-colors text-center cursor-pointer shadow-md"
                    >
                      Discuss Integration
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
                Pega Guardrail Health Audit
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Ready to review your Pega guardrail compliance score, layer cake architecture, and Infinity migration roadmap with our Lead System Architects?
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

export default PegaPracticesTechPage;
