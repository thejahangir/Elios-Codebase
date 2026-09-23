import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import InnerPageHero from '../../components/InnerPageHero';
import { 
  Building2, 
  Database, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  ShieldCheck, 
  Activity, 
  Workflow, 
  MapPin, 
  Globe2, 
  Zap, 
  Settings, 
  Code, 
  FileText, 
  BarChart3, 
  Briefcase 
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const deliveryCentres = [
  {
    city: "Hyderabad ODC",
    state: "Telangana, India",
    focus: "Enterprise Technology Delivery & Project Support",
    description: "Our Hyderabad delivery center acts as the primary hub for high-complexity enterprise solution architecture, large-scale SAP S/4HANA & Oracle ERP rollouts, custom engineering, and mission-critical cloud integrations.",
    highlights: [
      "Enterprise SAP & Oracle Architecture",
      "Full-Lifecycle Project Implementation",
      "Cloud Integration & DevSecOps",
      "Core Database Administration (DBA)"
    ],
    badge: "Primary Hub"
  },
  {
    city: "Visakhapatnam ODC",
    state: "Andhra Pradesh, India",
    focus: "Offshore Development, Application Support & Technical Delivery",
    description: "Our coastal Visakhapatnam centre specializes in high-velocity agile development, round-the-clock Application Management Services (AMS), 24/7 L1-L3 production support, and dedicated talent augmentation.",
    highlights: [
      "24/7 Application Support & AMS",
      "Dedicated Offshore Engineering Squads",
      "Quality Assurance & Automation Testing",
      "Continuous Maintenance & Enhancements"
    ],
    badge: "Scale & Support Hub"
  }
];

const odcSteps = [
  {
    step: "01",
    title: "Client Requirements",
    desc: "Comprehensive discovery to understand business goals, technology stack, security baselines, and project scope.",
    icon: <FileText className="w-5 h-5 text-[#C9A227]" />
  },
  {
    step: "02",
    title: "Solution & Planning",
    desc: "Detailed architectural blueprints, skill-matrix mapping, resource allocation, and SLA/governance definition.",
    icon: <BarChart3 className="w-5 h-5 text-[#C9A227]" />
  },
  {
    step: "03",
    title: "Dedicated ODC Team",
    desc: "Dedicated engineering pods onboarded with client tooling, secure environments, and tailored domain leads.",
    icon: <Users className="w-5 h-5 text-[#C9A227]" />
  },
  {
    step: "04",
    title: "Dev / Impl / Support",
    desc: "Sprint-based delivery, Oracle/SAP configuration, microservices development, and proactive support tasks.",
    icon: <Code className="w-5 h-5 text-[#C9A227]" />
  },
  {
    step: "05",
    title: "Testing & QA",
    desc: "Rigorous functional, automated regression, performance, integration, and security validation before release.",
    icon: <ShieldCheck className="w-5 h-5 text-[#C9A227]" />
  },
  {
    step: "06",
    title: "Production Support",
    desc: "Seamless cutover, 24/7 hypercare, ongoing maintenance, performance tuning, and continual optimization.",
    icon: <Activity className="w-5 h-5 text-[#C9A227]" />
  }
];

const oraclePractice = [
  { title: "Oracle ERP / EBS", desc: "End-to-end implementation, financial & supply chain modules, version upgrades, and custom extension development." },
  { title: "Oracle Database & DBA", desc: "Installation, high availability RAC/Data Guard, security hardening, automated backup/recovery, and performance tuning." },
  { title: "Oracle Application Dev", desc: "Custom enterprise application development using Oracle APEX, ADF, Forms, and PL/SQL modernizations." },
  { title: "Oracle Integration & OCI", desc: "Oracle Cloud Infrastructure (OCI) migrations, Oracle Integration Cloud (OIC), and hybrid multi-cloud connectivity." },
  { title: "Maintenance & Enhancements", desc: "Continuous functional enhancements, monthly patch management, business process optimization, and legacy modernizations." },
  { title: "24/7 Production Support", desc: "L1, L2, L3 technical support ensuring continuous uptime, SLA compliance, and rapid issue containment." }
];

const sapPractice = [
  { title: "SAP S/4HANA", desc: "Greenfield, brownfield migrations, core ERP transformation, configuration, and custom ABAP/Fiori development." },
  { title: "SAP BASIS Administration", desc: "System administration, landscape management, kernel upgrades, transport management, and performance monitoring." },
  { title: "SAP Functional Support", desc: "Comprehensive functional support across SD, MM, FICO, PP, QM, and HCM modules tailored to your business." },
  { title: "SAP PI / PO & Integration", desc: "Process Integration (PI) and Process Orchestration (PO) linking SAP with enterprise platforms and external partners." },
  { title: "SAP Application Management (AMS)", desc: "Structured SLA-based AMS, incident resolution, change request execution, and continual service optimization." },
  { title: "SAP Testing & QA", desc: "Automated regression testing, user acceptance testing (UAT), integration verification, and load/stress testing." }
];

const appDevAndSupport = {
  development: [
    "New custom enterprise web & mobile application development",
    "Module enhancements, workflow adaptations, and customizations",
    "RESTful API & GraphQL integration pipeline engineering"
  ],
  management: [
    "Formal incident management & rapid service restoration",
    "In-depth root cause analysis & problem management",
    "Change request governance & scheduled deployments",
    "Preventative application maintenance & health monitoring",
    "Performance tuning and throughput optimizations"
  ],
  production: [
    "Tiered L1 / L2 / L3 around-the-clock technical support",
    "Continuous real-time telemetry and infrastructure monitoring",
    "Rapid incident triage and root-cause resolution",
    "Dedicated database health and transaction support",
    "Complex system troubleshooting and vendor coordination"
  ]
};

const integrations = [
  {
    area: "SAP ↔ Oracle",
    examples: "Enterprise ERP & supply chain integration, master data synchronization, and cross-platform workflows.",
    capability: "SAP PI/PO, Oracle Integration Cloud (OIC), REST/SOAP APIs, Middleware",
    icon: <Workflow className="w-6 h-6 text-[#C9A227]" />
  },
  {
    area: "SAP / Oracle ↔ Third Party",
    examples: "Business ecosystems, Salesforce CRM, Veeva, Payment Gateways, Legacy Mainframes, and EDI.",
    capability: "Custom Middleware, Enterprise Service Bus (ESB), API Gateways, Secure Interfaces",
    icon: <Globe2 className="w-6 h-6 text-[#C9A227]" />
  },
  {
    area: "Application ↔ Database",
    examples: "Application data layer services, real-time analytics pipelines, high-throughput transactional OLTP/OLAP.",
    capability: "Oracle Database, MS SQL, PostgreSQL, Advanced DBA & Replication",
    icon: <Database className="w-6 h-6 text-[#C9A227]" />
  }
];

const engagementModels = [
  {
    title: "Dedicated ODC Team",
    desc: "A dedicated offshore development facility functioning as a seamless extension of your in-house IT department.",
    icon: <Building2 className="w-6 h-6 text-[#C9A227]" />
  },
  {
    title: "Project-Based Delivery",
    desc: "Fixed-scope, fixed-price or milestone-driven delivery for specific transformation and development initiatives.",
    icon: <Briefcase className="w-6 h-6 text-[#C9A227]" />
  },
  {
    title: "Managed Services (AMS)",
    desc: "Comprehensive 24/7 application management and production support backed by robust SLAs and KPI governance.",
    icon: <Activity className="w-6 h-6 text-[#C9A227]" />
  },
  {
    title: "Resource Augmentation",
    desc: "On-demand placement of certified SAP, Oracle, DevSecOps, and QA professionals to scale velocity instantly.",
    icon: <Users className="w-6 h-6 text-[#C9A227]" />
  },
  {
    title: "Hybrid Delivery Model",
    desc: "Synergistic blend of onsite client-side technical leadership with high-efficiency offshore engineering squads.",
    icon: <Zap className="w-6 h-6 text-[#C9A227]" />
  }
];

const whyElios = [
  { title: "Dual Delivery Hubs", desc: "Strategic operations in Hyderabad and Visakhapatnam providing geo-resilience and access to top engineering talent." },
  { title: "Oracle & SAP Focus", desc: "Specialized, deep-domain focus in enterprise ERP ecosystems with proven track records across global clients." },
  { title: "Scalable Dedicated Teams", desc: "Agile capacity scaling from small specialized pods to multi-disciplinary 100+ engineer enterprise centers." },
  { title: "Full-Lifecycle Capabilities", desc: "From initial solution architecture to continuous L1-L3 production support and ongoing enhancements." },
  { title: "Flexible Commercials", desc: "Outcome-based, T&M, retainer, or dedicated models aligned precisely to your corporate budget." },
  { title: "Strategic Enterprise Alignment", desc: "Secure-by-design infrastructure, IP protection, and compliance with international data standards." },
  { title: "Structured Knowledge Handover", desc: "Standard Operating Procedures (SOPs), comprehensive runbooks, and transparent reporting at every step." }
];

const OffshoreDevelopmentCenterServicePage = () => {
  const [activeTab, setActiveTab] = useState<'oracle' | 'sap' | 'appdev' | 'integration'>('oracle');

  return (
    <div className="flex flex-col w-full bg-white font-sans">
      {/* Hero Section */}
      <InnerPageHero 
        title="Offshore Development Center (ODC)" 
        subtitle="Oracle & SAP Enterprise Technology Delivery & Dedicated Offshore Development Hubs in Hyderabad and Visakhapatnam."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Hub Location Bar */}
      <section className="bg-[#0B1F3A] border-y border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6 text-xs uppercase tracking-widest text-white/80 font-semibold">
          <div className="flex items-center gap-6">
            <span className="text-[#C9A227] flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Strategic Delivery Hubs:
            </span>
            <span className="text-white flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Hyderabad ODC
            </span>
            <span>•</span>
            <span className="text-white flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Visakhapatnam ODC
            </span>
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <span>Oracle Delivery</span>
            <span>•</span>
            <span>SAP Practices</span>
            <span>•</span>
            <span>AMS & 24/7 Support</span>
          </div>
        </div>
      </section>

      {/* Overview & Dual Delivery Hubs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <FadeIn>
                <span className="text-[#C9A227] font-bold text-xs tracking-widest uppercase mb-3 block">
                  Corporate Profile & Capabilities
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3A] mb-6 leading-tight">
                  Your Extended Enterprise Technology Partner.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Elios Technologies supports global enterprises through dedicated offshore development and technology teams. Our delivery capabilities center on Oracle and SAP ecosystems, supported by veteran architects, developers, DBAs, and support engineers.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  The ODC model empowers global organizations to scale technical bandwidth, reduce total cost of ownership (TCO), and accelerate project timelines without the overhead of establishing and managing a foreign entity.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-[#0B1F3A] text-white hover:bg-[#C9A227] hover:text-[#0B1F3A] transition-all duration-300 shadow-md"
                  >
                    Setup Your ODC Team <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a 
                    href="#odc-model" 
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-gray-100 text-[#0B1F3A] hover:bg-gray-200 transition-colors"
                  >
                    Explore Delivery Model
                  </a>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {deliveryCentres.map((centre, idx) => (
                  <FadeIn key={idx} delay={idx * 0.15}>
                    <div className="bg-[#F7F7F5] p-8 rounded-3xl border border-gray-200/80 hover:shadow-xl hover:border-[#C9A227]/40 transition-all duration-300 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-12 h-12 rounded-2xl bg-[#0B1F3A] text-[#C9A227] flex items-center justify-center">
                            <Building2 className="w-6 h-6" />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#C9A227]/15 text-[#0B1F3A]">
                            {centre.badge}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-[#0B1F3A] mb-1">{centre.city}</h3>
                        <p className="text-xs text-gray-500 font-medium mb-4 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#C9A227]" /> {centre.state}
                        </p>
                        <h4 className="text-sm font-semibold text-[#C9A227] mb-3">{centre.focus}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                          {centre.description}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-gray-200">
                        <ul className="space-y-2">
                          {centre.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227] flex-shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ODC Delivery Model Section */}
      <section id="odc-model" className="py-24 bg-gray-50 border-t border-gray-200/70">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#C9A227] font-bold text-xs tracking-widest uppercase mb-3 block">
              Operational Framework
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3A] mb-6">
              ODC Delivery Lifecycle
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our structured delivery model bridges client requirements directly with dedicated technical pods, ensuring zero disruption and complete transparency.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {odcSteps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between relative group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-extrabold text-[#C9A227]">{step.step}</span>
                      <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-[#0B1F3A] group-hover:text-white transition-colors">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-[#0B1F3A] mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="w-full h-1 bg-gray-100 group-hover:bg-[#C9A227] transition-colors mt-4 rounded-full" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Core Practice Areas (Interactive Tabs) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C9A227] font-bold text-xs tracking-widest uppercase mb-3 block">
              Technology Depth
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3A] mb-6">
              Enterprise Practice Capabilities
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Explore our specialized technology competencies across Oracle, SAP, Custom App Engineering, and Cross-Platform Integrations.
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
              {[
                { key: 'oracle', label: 'Oracle Technology Practice', icon: <Database className="w-4 h-4" /> },
                { key: 'sap', label: 'SAP Technology Practice', icon: <Cpu className="w-4 h-4" /> },
                { key: 'appdev', label: 'Application Dev & AMS', icon: <Code className="w-4 h-4" /> },
                { key: 'integration', label: 'Enterprise Integrations', icon: <Workflow className="w-4 h-4" /> }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeTab === tab.key
                      ? 'bg-[#0B1F3A] text-white shadow-md'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Tab Content */}
          <div className="mt-12">
            <AnimatePresence mode="wait">
              {activeTab === 'oracle' && (
                <motion.div
                  key="oracle"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-[#F7F7F5] rounded-3xl p-8 lg:p-12 border border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-gray-200">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0B1F3A] mb-2">Oracle Technology Practice</h3>
                        <p className="text-gray-600 text-sm">Full lifecycle implementation, enhancement, database management, and OCI migration services.</p>
                      </div>
                      <span className="text-xs font-bold px-4 py-2 rounded-full bg-[#0B1F3A] text-[#C9A227]">
                        Oracle Delivery Certified
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {oraclePractice.map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-[#0B1F3A] mb-2">{item.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'sap' && (
                <motion.div
                  key="sap"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-[#F7F7F5] rounded-3xl p-8 lg:p-12 border border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-gray-200">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0B1F3A] mb-2">SAP Technology Practice</h3>
                        <p className="text-gray-600 text-sm">End-to-end SAP S/4HANA migration, BASIS administration, functional module consulting, and AMS.</p>
                      </div>
                      <span className="text-xs font-bold px-4 py-2 rounded-full bg-[#0B1F3A] text-[#C9A227]">
                        SAP Practice Certified
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {sapPractice.map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-[#0B1F3A] mb-2">{item.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'appdev' && (
                <motion.div
                  key="appdev"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-[#F7F7F5] rounded-3xl p-8 lg:p-12 border border-gray-200">
                    <div className="mb-8 pb-6 border-b border-gray-200">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#0B1F3A] mb-2">Application Development, AMS & Support</h3>
                      <p className="text-gray-600 text-sm">Dedicated engineering teams handling greenfield development, continuous enhancements, and 24/7 production maintenance.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Development */}
                      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-[#0B1F3A]/5 text-[#C9A227] flex items-center justify-center mb-4">
                          <Code className="w-5 h-5" />
                        </div>
                        <h4 className="text-xl font-bold text-[#0B1F3A] mb-4">Custom Development</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                          {appDevAndSupport.development.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#C9A227] flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* AMS */}
                      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-[#0B1F3A]/5 text-[#C9A227] flex items-center justify-center mb-4">
                          <Settings className="w-5 h-5" />
                        </div>
                        <h4 className="text-xl font-bold text-[#0B1F3A] mb-4">Application Management (AMS)</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                          {appDevAndSupport.management.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#C9A227] flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Production Support */}
                      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-[#0B1F3A]/5 text-[#C9A227] flex items-center justify-center mb-4">
                          <Activity className="w-5 h-5" />
                        </div>
                        <h4 className="text-xl font-bold text-[#0B1F3A] mb-4">24/7 Production Support</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                          {appDevAndSupport.production.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#C9A227] flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'integration' && (
                <motion.div
                  key="integration"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-[#F7F7F5] rounded-3xl p-8 lg:p-12 border border-gray-200">
                    <div className="mb-8 pb-6 border-b border-gray-200">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#0B1F3A] mb-2">Integration & Enterprise Technology</h3>
                      <p className="text-gray-600 text-sm">Seamless connectivity between enterprise core ERPs, custom software, third-party clouds, and databases.</p>
                    </div>

                    <div className="space-y-4">
                      {integrations.map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#0B1F3A]/5 flex items-center justify-center flex-shrink-0">
                              {item.icon}
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-[#0B1F3A] mb-1">{item.area}</h4>
                              <p className="text-sm text-gray-600">{item.examples}</p>
                            </div>
                          </div>
                          <div className="px-4 py-2 rounded-xl bg-gray-100 text-xs font-semibold text-[#0B1F3A] flex-shrink-0">
                            {item.capability}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Team Governance & Delivery Structure */}
      <section className="py-24 bg-[#0B1F3A] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#C9A227] font-bold text-xs tracking-widest uppercase mb-3 block">
              Organizational Blueprint
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              ODC Team & Governance Hierarchy
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Every ODC is structured with clear leadership lines, certified technical leads, domain specialists, and 24/7 support engineers.
            </p>
          </FadeIn>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* Level 1: Program Delivery Manager */}
            <FadeIn delay={0.1}>
              <div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center">
                <span className="text-xs uppercase font-bold tracking-widest text-[#C9A227] block mb-1">Executive Leadership</span>
                <h4 className="text-xl font-bold text-white">Program / Delivery Manager</h4>
                <p className="text-xs text-gray-300 mt-1">Strategic alignment, SLA adherence, executive client steering, and resource governance.</p>
              </div>
            </FadeIn>

            {/* Level 2: Project Manager / Tech Lead */}
            <FadeIn delay={0.2}>
              <div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center">
                <span className="text-xs uppercase font-bold tracking-widest text-[#C9A227] block mb-1">Tactical Execution</span>
                <h4 className="text-xl font-bold text-white">Project Manager / Technical Lead</h4>
                <p className="text-xs text-gray-300 mt-1">Sprint management, sprint backlog prioritization, architecture compliance, and quality control.</p>
              </div>
            </FadeIn>

            {/* Level 3: Cross Functional Pods */}
            <FadeIn delay={0.3}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {['Oracle Team', 'SAP Team', 'Development Team', 'QA / Testing'].map((team, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C9A227]/50 transition-colors">
                    <h5 className="font-bold text-sm text-white">{team}</h5>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Level 4: Engineering & Operations */}
            <FadeIn delay={0.4}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {['Support Engineers (L1-L3)', 'Database Admins (DBA)', 'Integration Specialists', 'Cloud & DevOps'].map((spec, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C9A227]/50 transition-colors">
                    <h5 className="font-bold text-xs text-gray-300">{spec}</h5>
                  </div>
                ))}
              </div>
            </FadeIn>
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
              ODC Engagement Models
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Choose the commercial engagement model that best aligns with your enterprise timeline, budget, and governance requirements.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engagementModels.map((model, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-3xl bg-[#F7F7F5] border border-gray-200/80 hover:border-[#C9A227]/40 hover:shadow-lg transition-all duration-300 h-full">
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

      {/* Why Elios ODC (Value Pillars) */}
      <section className="py-24 bg-gray-50 border-t border-gray-200/70">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C9A227] font-bold text-xs tracking-widest uppercase mb-3 block">
              The Elios Advantage
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3A] mb-6">
              Why Partner with Elios Technologies?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We combine enterprise domain rigor, deep Oracle and SAP specializations, and dual-location redundancy to drive compounding ROI.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyElios.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <div className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#C9A227] hover:shadow-md transition-all h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0" />
                    <h4 className="text-lg font-bold text-[#0B1F3A]">{item.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pl-8">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 bg-[#0B1F3A] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A227] rounded-full blur-[160px]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn>
            <span className="text-[#C9A227] font-bold text-xs tracking-widest uppercase mb-4 block">
              Scale Your Technology Delivery
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Build Your Extended Oracle & SAP Technology Team with Elios
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Leverage our state-of-the-art Hyderabad & Visakhapatnam delivery centers to accelerate innovation, reduce operational friction, and achieve predictable scale.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-sm bg-[#C9A227] text-[#0B1F3A] hover:bg-white transition-all duration-300 shadow-lg cursor-pointer"
              >
                Schedule ODC Strategy Briefing
              </Link>
              <Link 
                to="/services" 
                className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-sm bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20"
              >
                View All Capabilities
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default OffshoreDevelopmentCenterServicePage;
