// @ts-nocheck
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Users, Network, Code, Briefcase, Workflow, CheckCircle2, Repeat, LayoutTemplate,
  Target, Zap, ShieldCheck, PieChart, Activity, Database, Server, Smartphone, MonitorSmartphone,
  ChevronRight, ArrowUpRight, Cpu, Layers, Globe, Star, Landmark, Shield, Stethoscope, 
  Building, BarChart, Rocket, CheckSquare, Handshake, Lightbulb, PenTool, Scale, X
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
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { staggerChildren: 0.15 }
  };

  const itemFadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  const [roiCurrentProcessCount, setRoiCurrentProcessCount] = useState(10);
  const [roiManualEffort, setRoiManualEffort] = useState(100);
  const [roiTeamSize, setRoiTeamSize] = useState(5);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [showAssessmentModal, setShowAssessmentModal] = useState(false);
  
  const estimatedSavings = (roiCurrentProcessCount * roiManualEffort * roiTeamSize * 0.4).toFixed(0);

  const activeTechModal = selectedTech ? techStackDetails[selectedTech] : null;

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800 selection:bg-blue-600 selection:text-white">
      {/* Fullscreen Glassmorphism Hero - Kept exactly as requested */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0B1F3A]">
        <div className="absolute inset-0 z-0">
          <img src={defaultHeroBg} alt="Hero Background" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 md:p-16 max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/30 text-white font-medium text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-[#C9A227] shadow-[0_0_10px_#C9A227]"></span>
              Premium Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Pega Practices
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl drop-shadow-md">
              Low-code automation and CRM.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Core Pega Capabilities & Offerings */}
      <section className="py-24 bg-gray-50 relative border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Core Capabilities */}
            <motion.div {...fadeIn} className="lg:col-span-5 flex flex-col">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Pega Capabilities</h2>
              <div className="space-y-4">
                {[
                  "Case Management & BPM",
                  "Pega Customer Decision Hub (CDH)",
                  "Pega Process AI & RPA",
                  "Legacy Migration & Modernization",
                  "Low Code Modernization"
                ].map((cap, idx) => (
                  <div key={idx} className="flex items-center p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-4 flex-shrink-0" />
                    <span className="font-semibold text-gray-700">{cap}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Core Offerings */}
            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="lg:col-span-7">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Offerings</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Pega Implementation & Managed Services", desc: "End-to-end application build, maintenance, platform upgrades, and L1–L4 application support." },
                  { title: "Pega Modernization & Cloud Migration", desc: "Upgrading legacy Pega versions (e.g., Pega 7/8 to Pega Infinity) and deploying on Pega Cloud, AWS, Azure, or GCP." },
                  { title: "Decisioning & AI (CDH)", desc: "Real-time Next-Best-Action strategy implementation to boost customer retention and cross-sell execution." },
                  { title: "Pega CoE & Advisory", desc: "Governance setup, architectural reviews, technical audits, and staff augmentation with certified Pega architects (LSA, SSA, CSA)." }
                ].map((offering, idx) => (
                  <motion.div key={idx} variants={itemFadeIn} className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{offering.title}:</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-light">{offering.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Strategic Service Offerings */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div {...fadeIn} className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Strategic Service Offerings</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Pega Implementation & Managed Services",
                points: [
                  "Greenfield application development using Pega Express methodology.",
                  "24/7 Managed Services, L1–L4 support, and platform maintenance.",
                  "Performance tuning, database optimization, and guardrail compliance audits."
                ]
              },
              {
                title: "Pega Modernization & Cloud Migration",
                points: [
                  "Legacy system migration (e.g., Pega 7/8 to Pega Infinity).",
                  "On-Premises to Pega Cloud, AWS, Azure, or GCP migrations.",
                  "Monolith-to-microservices application restructuring"
                ]
              },
              {
                title: "Customer Decision Hub (CDH) & Autonomous AI",
                points: [
                  "Real-time Next-Best-Action strategy development.",
                  "Adaptive models and predictive analytics setup for customer retention and cross-sell.",
                  "Omnichannel integration across email, web, mobile, and contact centers."
                ]
              },
              {
                title: "Pega CoE & Advisory Services",
                points: [
                  "Enterprise governance framework setup and Architecture Review Boards (ARBs).",
                  "Staff augmentation with certified Lead System Architects (LSAs), Senior System Architects (SSAs), and Certified Business Architects (CBAs).",
                  "Low-code democratization and enablement for business users."
                ]
              }
            ].map((offering, idx) => (
              <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.1 }} className="bg-gray-50 border border-gray-100 p-10 rounded-3xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{offering.title}</h3>
                <ul className="space-y-4">
                  {offering.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-600 font-light leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Elements to Build */}
      <section className="py-24 bg-gray-50 border-b border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Interactive Elements to Build</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pega ROI Estimator */}
            <motion.div {...fadeIn} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col relative overflow-hidden group">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pega ROI Estimator</h3>
              <p className="text-gray-500 mb-8 text-sm font-light flex-grow">A multi-step calculator taking inputs (Current Process Count, Manual Effort Hours, Team Size) and projecting estimated annual savings and velocity gains.</p>
              
              <div className="space-y-6 text-sm mb-8 font-mono">
                <div>
                  <div className="flex justify-between mb-2"><span className="text-gray-600">Process Count</span><span className="text-blue-600 font-bold">{roiCurrentProcessCount}</span></div>
                  <input type="range" min="1" max="50" value={roiCurrentProcessCount} onChange={(e) => setRoiCurrentProcessCount(e.target.value)} className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
                </div>
                <div>
                  <div className="flex justify-between mb-2"><span className="text-gray-600">Manual Hours</span><span className="text-blue-600 font-bold">{roiManualEffort}</span></div>
                  <input type="range" min="10" max="500" value={roiManualEffort} onChange={(e) => setRoiManualEffort(e.target.value)} className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
                </div>
                <div>
                  <div className="flex justify-between mb-2"><span className="text-gray-600">Team Size</span><span className="text-blue-600 font-bold">{roiTeamSize}</span></div>
                  <input type="range" min="1" max="50" value={roiTeamSize} onChange={(e) => setRoiTeamSize(e.target.value)} className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
                </div>
              </div>
              <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 text-center">
                <span className="block text-blue-800 text-xs uppercase tracking-[0.2em] font-bold mb-2">Est. Annual Savings</span>
                <span className="text-4xl font-bold text-blue-900">${estimatedSavings}</span>
              </div>
            </motion.div>

            {/* Guardrail Checker */}
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col relative overflow-hidden group">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Guardrail & Health Checker Quiz</h3>
              <p className="text-gray-500 mb-8 text-sm font-light">A 5-question assessment tool for prospects to benchmark their existing Pega implementation against Pega design standards.</p>
              <div className="flex-grow flex items-center justify-center pb-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full border-2 border-dashed border-emerald-400 animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShieldCheck className="w-10 h-10 text-emerald-500" />
                  </div>
                </div>
              </div>
              <button 
                type="button"
                onClick={() => setShowAssessmentModal(true)}
                className="w-full py-4 bg-gray-50 border border-gray-200 text-gray-800 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all flex justify-center items-center gap-2 cursor-pointer"
              >
                Launch Assessment <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Tech Stack Showcase */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Tech Stack Showcase</h3>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                  Click to View
                </span>
              </div>
              <p className="text-gray-500 mb-8 text-sm font-light">Interactive grid displaying architectural integrations with Kafka, Salesforce, AWS, MuleSoft, Oracle, and SAP.</p>
              <div className="grid grid-cols-2 gap-4 flex-grow">
                {['Kafka', 'Salesforce', 'AWS', 'MuleSoft', 'Oracle', 'SAP'].map((tech) => (
                  <button
                    key={tech} 
                    type="button"
                    onClick={() => setSelectedTech(tech)}
                    className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center justify-between text-sm font-semibold text-gray-700 hover:text-blue-700 hover:bg-blue-50 hover:border-blue-200 hover:shadow-sm transition-all cursor-pointer group text-left"
                  >
                    <span>{tech}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Industry Solutions & Industry-Enterprise Solutions */}
      <section className="py-24 bg-white border-b border-gray-100 relative overflow-hidden">
        <div className="absolute -left-40 top-40 w-96 h-96 bg-blue-50 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-sm tracking-[0.2em] text-blue-600 uppercase mb-4 font-bold">Industry Solutions</h2>
            <p className="text-3xl md:text-4xl font-bold text-gray-900">Tailored For Your Sector</p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {[
              { name: "Financial Services", icon: <Landmark className="w-4 h-4 mr-2" /> },
              { name: "Insurance", icon: <Shield className="w-4 h-4 mr-2" /> },
              { name: "Healthcare", icon: <Stethoscope className="w-4 h-4 mr-2" /> },
              { name: "Govt Sector", icon: <Building className="w-4 h-4 mr-2" /> },
              { name: "Telecom & Utilities", icon: <Zap className="w-4 h-4 mr-2" /> }
            ].map((ind, idx) => (
              <span 
                key={idx} 
                className="flex items-center px-6 py-3 bg-white text-gray-700 rounded-full font-semibold text-sm border border-gray-200/80 shadow-sm select-none"
              >
                {ind.icon} {ind.name}
              </span>
            ))}
          </div>

          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Industry-Enterprise Solutions</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Financial Services & Banking", desc: "Streamline commercial loan originations, automate KYC/AML compliance checks, and optimize dispute management workflows.", icon: <Landmark className="w-8 h-8 text-blue-600" /> },
              { title: "Insurance", desc: "Accelerate claims processing, digitize policy servicing, and deploy intelligent underwriting engines to shorten policy issuance cycles.", icon: <Shield className="w-8 h-8 text-blue-600" /> },
              { title: "Healthcare", desc: "Automate patient intake, streamline prior authorizations, and deliver unified care-management workflows compliant with industry regulations.", icon: <Stethoscope className="w-8 h-8 text-blue-600" /> },
              { title: "Telecom & Utilities", desc: "Drive intelligent order management, optimize field service dispatch, and deliver proactive retention offers using real-time decisioning.", icon: <Zap className="w-8 h-8 text-blue-600" /> }
            ].map((sol, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }} 
                className="group bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                    {React.cloneElement(sol.icon, { className: "w-7 h-7 text-blue-600 group-hover:text-white transition-colors" })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{sol.title}</h3>
                </div>
                <p className="text-gray-600 font-light leading-relaxed">{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Indicator & Delivery Framework */}
      <section className="py-24 bg-gray-50 border-b border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Strategic Indicator */}
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Strategic Indicator</h2>
              <p className="text-blue-600 uppercase tracking-widest text-sm font-bold mb-10">Benchmark / Outcome</p>
              
              <div className="space-y-6">
                {[
                  { title: "Architect Excellence", desc: "Certified Lead System Architects (LSAs), Senior System Architects (SSAs), and Business Architects.", icon: <Star className="w-6 h-6 text-yellow-500" /> },
                  { title: "Delivery Velocity", desc: "Up to 40% reduction in time-to-market using pre-built industry frameworks", icon: <Rocket className="w-6 h-6 text-blue-500" /> },
                  { title: "Quality & Compliance", desc: "100% adherence to Pega guardrail scores, ensuring maintainable, low-code codebases", icon: <CheckSquare className="w-6 h-6 text-emerald-500" /> },
                  { title: "Flexible Engagement", desc: "Dedicated agile pods, co-delivery models, or full managed services (L1–L4).", icon: <Handshake className="w-6 h-6 text-purple-500" /> }
                ].map((ind, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.02 }}
                    className="bg-white border border-gray-100 p-6 rounded-2xl flex items-start gap-5 shadow-sm hover:shadow-md transition-shadow cursor-default"
                  >
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                      {ind.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{ind.title}</h4>
                      <p className="text-gray-600 text-sm font-light leading-relaxed">{ind.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Delivery Framework */}
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Delivery Framework</h2>
              <p className="text-blue-600 uppercase tracking-widest text-sm font-bold mb-10">Pega Express & CoE Governance</p>
              
              <div className="space-y-6">
                {[
                  { title: "Discover", desc: "Map core journeys, define Microjourneys™, and establish target outcomes in 60-to-90-day release cycles.", icon: <Lightbulb className="w-5 h-5 text-blue-600" /> },
                  { title: "Design & Build", desc: "Develop applications using low-code design patterns, automated testing, and strict guardrail compliance.", icon: <PenTool className="w-5 h-5 text-blue-600" /> },
                  { title: "Govern & Scale", desc: "Establish enterprise-wide Architecture Review Boards (ARBs), reusable component libraries, and robust CoE governance.", icon: <Scale className="w-5 h-5 text-blue-600" /> }
                ].map((step, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-100 transition-all group cursor-default">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                        {React.cloneElement(step.icon, { className: "w-5 h-5 text-blue-600 group-hover:text-white transition-colors" })}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">{step.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm font-light leading-relaxed pl-14">{step.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why Partner With US */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Partner With Us</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Architect Excellence", desc: "Certified Lead System Architects (LSAs), Senior System Architects (SSAs), and Business Architects.", icon: <Star className="w-8 h-8 text-yellow-500" /> },
              { title: "Delivery Velocity", desc: "Up to 40% reduction in time-to-market using pre-built industry frameworks.", icon: <Rocket className="w-8 h-8 text-blue-500" /> },
              { title: "Quality & Compliance", desc: "100% adherence to Pega guardrail scores, ensuring maintainable, low-code codebases.", icon: <CheckSquare className="w-8 h-8 text-emerald-500" /> },
              { title: "Flexible Engagement", desc: "Dedicated agile pods, co-delivery models, or full managed services (L1–L4).", icon: <Handshake className="w-8 h-8 text-purple-500" /> }
            ].map((reason, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }} 
                className="group bg-gray-50 border border-gray-100 p-8 rounded-3xl text-center hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section 
        className="relative py-32 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
      >
        <div className="absolute inset-0 bg-blue-900/90 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h2 {...fadeIn} className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Elevate Your Enterprise Architecture
          </motion.h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 bg-white text-blue-900 font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300"
          >
            Schedule a Consultation <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Tech Stack Detail Modal */}
      <AnimatePresence>
        {selectedTech && activeTechModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTech(null)}
              className="fixed inset-0 bg-[#0B1F3A]/70 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl z-10 overflow-hidden my-8 border border-gray-100"
            >
              {/* Close Button */}
              <button 
                type="button"
                onClick={() => setSelectedTech(null)}
                className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-gray-100 hover:bg-[#0B1F3A] text-gray-500 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="bg-[#0B1F3A] p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C9A227]/20 rounded-full blur-2xl pointer-events-none" />
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

              {/* Modal Content */}
              <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6">
                {/* Description */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-2">Integration Overview</h4>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {activeTechModal.description}
                  </p>
                </div>

                {/* Key Capabilities */}
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

                {/* Common Use Cases */}
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

                {/* Action Bar */}
                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-gray-400 hidden sm:inline">
                    Pega Practice Architecture & Integration
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

      {/* Assessment Sales Contact Modal */}
      <AnimatePresence>
        {showAssessmentModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAssessmentModal(false)}
              className="fixed inset-0 bg-[#0B1F3A]/70 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl z-10 overflow-hidden my-8 border border-gray-100 p-6 sm:p-8 text-center"
            >
              {/* Close Button */}
              <button 
                type="button"
                onClick={() => setShowAssessmentModal(false)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Icon */}
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm border border-blue-100">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Pega Guardrail Assessment
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                To launch a tailored Pega Guardrail & Architecture Health Check, would you like to connect with our enterprise sales and solutions team?
              </p>

              {/* Actions */}
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
                  <span>Yes</span>
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
