import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, Replace, Cloud, Settings, Shield, Users, Database, 
  Building2, Cpu, Activity, ArrowRight, ArrowUpRight, Sparkles, 
  Smartphone, Network, ClipboardCheck, Building,
  Search, Layers
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  path: string;
  category: 'Enterprise' | 'Cloud & DevOps' | 'Engineering' | 'Consulting';
  icon: React.ReactNode;
  description: string;
  tags: string[];
}

const allServicesData: ServiceItem[] = [
  {
    id: 'app-dev',
    title: 'Custom Application Development',
    path: '/application-development',
    category: 'Engineering',
    icon: <Code className="w-7 h-7" />,
    description: 'Bespoke enterprise web and mobile applications engineered with scalable microservices, resilient APIs, and modern front-end architectures.',
    tags: ['Full Stack', 'Cloud Native', 'Microservices', 'Modern UI']
  },
  {
    id: 'migration',
    title: 'Cloud Migration Services',
    path: '/migration',
    category: 'Cloud & DevOps',
    icon: <Replace className="w-7 h-7" />,
    description: 'Frictionless legacy-to-cloud migration with zero data loss, minimal downtime, comprehensive risk assessment, and automated validation.',
    tags: ['Legacy Modernization', 'AWS / Azure', 'Data Integrity', 'Zero Downtime']
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Consulting',
    path: '/cloud-devops',
    category: 'Cloud & DevOps',
    icon: <Cloud className="w-7 h-7" />,
    description: 'Automated CI/CD pipelines, container orchestration, infrastructure as code (IaC), and continuous monitoring for ultra-reliable deployments.',
    tags: ['CI/CD Pipelines', 'Kubernetes', 'Terraform', 'Observability']
  },
  {
    id: 'managed-services',
    title: 'Managed & On-Demand Services',
    path: '/managed-services',
    category: 'Enterprise',
    icon: <Settings className="w-7 h-7" />,
    description: 'Round-the-clock enterprise infrastructure monitoring, incident response, proactive health audits, and flexible on-demand support.',
    tags: ['24/7 Operations', 'SLA Guarantee', 'Cost Optimization', 'Proactive Audit']
  },
  {
    id: 'qa-testing',
    title: 'QA & Automated Testing',
    path: '/qa-testing',
    category: 'Engineering',
    icon: <Shield className="w-7 h-7" />,
    description: 'Full-spectrum quality engineering: automated regression suites, performance benchmarking, security vulnerability scans, and continuous QA.',
    tags: ['Automation Frameworks', 'Load Testing', 'API Testing', 'VAPT']
  },
  {
    id: 'rpo',
    title: 'Staff Augmentation & RPO',
    path: '/recruitment-rpo',
    category: 'Consulting',
    icon: <Users className="w-7 h-7" />,
    description: 'Scalable Recruitment Process Outsourcing (RPO) and specialized tech talent provisioning to rapidly fill critical capability gaps.',
    tags: ['Tech Augmentation', 'Dedicated Teams', 'Domain Experts', 'Rapid Onboarding']
  },
  {
    id: 'sap-erp',
    title: 'SAP ERP Transformation',
    path: '/sap-erp',
    category: 'Enterprise',
    icon: <Database className="w-7 h-7" />,
    description: 'End-to-end SAP S/4HANA implementation, custom module integration, ECC 6.0 migration, and continuous ERP ecosystem optimization.',
    tags: ['S/4HANA', 'ECC 6.0', 'Supply Chain', 'Financials']
  },
  {
    id: 'odc',
    title: 'Offshore Development Center (ODC)',
    path: '/offshore-development-center',
    category: 'Enterprise',
    icon: <Building2 className="w-7 h-7" />,
    description: 'Dedicated offshore delivery units in premier tech hubs providing high-velocity engineering, unified governance, and unmatched cost-efficiency.',
    tags: ['Dedicated Pods', 'Enterprise Governance', 'High Velocity', 'Cost Arbitrage']
  },
  {
    id: 'oracle',
    title: 'Oracle Practices & Cloud EBS',
    path: '/oracle-practices',
    category: 'Enterprise',
    icon: <Database className="w-7 h-7" />,
    description: 'Comprehensive functional & technical consulting across Oracle Fusion Cloud, E-Business Suite, HCM, SCM, and custom APEX applications.',
    tags: ['Fusion Cloud', 'Oracle EBS', 'Financials & SCM', 'PL/SQL']
  },
  {
    id: 'bpm',
    title: 'BPM & Intelligent Automation',
    path: '/bpm-automation',
    category: 'Engineering',
    icon: <Cpu className="w-7 h-7" />,
    description: 'Workflow orchestration and low-code digital process automation with Appian, Pega, and enterprise robotic automation platforms.',
    tags: ['Process Automation', 'Appian', 'Pega', 'Workflow Modeling']
  },
  {
    id: 'crm',
    title: 'CRM Strategy & Implementation',
    path: '/crm-services',
    category: 'Consulting',
    icon: <Users className="w-7 h-7" />,
    description: 'Transforming customer touchpoints with tailored CRM architectures, marketing automation, lifecycle management, and seamless integrations.',
    tags: ['Sales Pipeline', 'Service Desk', 'Customer 360', 'Integrations']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Practices',
    path: '/cyber-security',
    category: 'Enterprise',
    icon: <Shield className="w-7 h-7" />,
    description: 'Zero Trust architecture, ISO 27001 readiness, 24/7 Security Operations Center (SOC), offensive penetration testing, and crisis response.',
    tags: ['Zero Trust', 'SOC 2 & ISO 27001', 'Threat Intel', 'Offensive Sec']
  },
  {
    id: 'veeva',
    title: 'Veeva Life Sciences Services',
    path: '/veeva-practices',
    category: 'Enterprise',
    icon: <Activity className="w-7 h-7" />,
    description: 'Specialized cloud consulting for life sciences: Veeva Commercial Cloud, Vault RIM, clinical data management, and regulatory compliance.',
    tags: ['Veeva Vault', 'Clinical Ops', 'Pharma Compliance', 'Commercial Cloud']
  },
  {
    id: 'workshops',
    title: 'Architectural Workshops',
    path: '/architectural-workshops',
    category: 'Consulting',
    icon: <Building className="w-7 h-7" />,
    description: 'Targeted executive workshops, technology health audits, modernization roadmaps, and CMM maturity assessments led by industry architects.',
    tags: ['Roadmapping', 'System Health Check', 'Design Thinking', 'Tech Strategy']
  },
  {
    id: 'mobility',
    title: 'Enterprise Mobility Management',
    path: '/enterprise-mobility',
    category: 'Engineering',
    icon: <Smartphone className="w-7 h-7" />,
    description: 'Secure Mobile Device Management (MDM), containerized enterprise app ecosystems, and unified endpoint security across iOS and Android.',
    tags: ['MDM / EMM', 'Mobile Security', 'Cross-Platform', 'Endpoint Control']
  },
  {
    id: 'network',
    title: 'Network & Infrastructure',
    path: '/network-infrastructure',
    category: 'Enterprise',
    icon: <Network className="w-7 h-7" />,
    description: 'Next-gen enterprise WAN/LAN design, high-availability wireless infrastructure, data center cabling, and proactive perimeter monitoring.',
    tags: ['SD-WAN', 'Zero-Latency', 'Data Centers', 'Failover Routing']
  },
  {
    id: 'alm',
    title: 'Application Lifecycle Management',
    path: '/life-cycle-management',
    category: 'Consulting',
    icon: <ClipboardCheck className="w-7 h-7" />,
    description: 'End-to-end ALM governance, toolchain integration, release orchestration, and process optimization based on CMM maturity models.',
    tags: ['ALM Governance', 'Toolchain Unification', 'CMM Level', 'Release Cadence']
  }
];

const categories = ['All', 'Enterprise', 'Cloud & DevOps', 'Engineering', 'Consulting'] as const;

const AllServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = allServicesData.filter(service => {
    const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-32 bg-[#0B1F3A] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-b from-[#C9A227]/20 to-transparent blur-3xl" />
          <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-t from-[#C9A227]/10 to-transparent blur-3xl" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-15" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#C9A227] font-semibold text-xs tracking-widest uppercase mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#C9A227]" />
              Enterprise Capabilities & Services
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              End-to-End Enterprise <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] via-yellow-200 to-[#C9A227]">
                Technology Services.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
              From high-velocity engineering and cloud migration to deep enterprise ERP and cybersecurity, Elios delivers outcome-driven technology consulting that powers global industry leaders.
            </p>

            {/* Quick Search & Filter Bar */}
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 max-w-2xl mx-auto flex items-center gap-3 shadow-2xl">
              <Search className="w-5 h-5 text-gray-400 ml-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services, platforms, technologies..."
                className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm md:text-base"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-gray-400 hover:text-white text-xs px-2 py-1 rounded bg-white/10"
                >
                  Clear
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FILTER TABS & SERVICE GRID */}
      <section className="py-24 bg-[#F8F9FA] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0B1F3A] text-white shadow-md shadow-[#0B1F3A]/20 scale-105'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#C9A227] hover:text-[#0B1F3A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results Summary */}
          <div className="flex justify-between items-center mb-10 text-sm text-gray-500 font-medium">
            <span>Showing <strong className="text-[#0B1F3A]">{filteredServices.length}</strong> enterprise services</span>
            {searchQuery && (
              <span>Filter: "<strong>{searchQuery}</strong>"</span>
            )}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#C9A227]/40 transition-all duration-500 flex flex-col justify-between group transform hover:-translate-y-2"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-[#0B1F3A]/5 text-[#C9A227] flex items-center justify-center group-hover:bg-[#0B1F3A] group-hover:text-[#C9A227] transition-all duration-500 shadow-inner group-hover:scale-110">
                        {service.icon}
                      </div>
                      <span className="text-[11px] font-bold tracking-widest uppercase text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                        {service.category}
                      </span>
                    </div>

                    {/* Title & Desc */}
                    <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4 group-hover:text-[#C9A227] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[11px] font-medium bg-gray-50 text-gray-600 px-2.5 py-1 rounded-md border border-gray-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      to={service.path}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#0B1F3A] group-hover:text-[#C9A227] transition-colors"
                    >
                      Explore Service
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#C9A227] group-hover:text-white transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
              <Layers className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-[#0B1F3A] mb-2">No matching services found</h4>
              <p className="text-gray-500 text-sm mb-6">Try searching with a different term or clear the filter.</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="px-6 py-2.5 bg-[#0B1F3A] text-white rounded-full text-sm font-semibold hover:bg-[#C9A227] hover:text-[#0B1F3A] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* VALUE PROPOSITION BANNER */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-[#0B1F3A] rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227]/20 blur-3xl rounded-full pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-8">
                <span className="text-[#C9A227] font-bold text-xs tracking-widest uppercase mb-4 block">Tailored Engagements</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Need a customized engagement model for your enterprise?
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  We configure flexible delivery models—from dedicated offshore pods and fixed-price outcome deliveries to hybrid consulting teams tailored to your technology roadmaps.
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C9A227] text-[#0B1F3A] font-bold text-base hover:bg-white transition-all shadow-xl hover:shadow-2xl"
                >
                  Schedule a Consultation <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AllServicesPage;
