// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, Database, Settings, Activity, Shield, Users, 
  BarChart, Layers, Truck, FileText, CheckCircle2,
  Headphones, RefreshCw, Briefcase
} from 'lucide-react';

const defaultHeroBg = "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const OraclePracticesTechPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const cloudCapabilities = [
    { title: "Oracle Cloud ERP", icon: <Database />, items: ["Oracle Financials Cloud", "General Ledger (GL)", "Accounts Payable (AP)", "Accounts Receivable (AR)", "Fixed Assets (FA)", "Cash Management", "Expenses", "Tax", "Accounting Hub", "Intercompany", "Financial Reporting", "Risk Management and Compliance"] },
    { title: "Oracle Cloud SCM", icon: <Truck />, items: ["Inventory Management", "Procurement", "Purchasing", "Order Management", "Supply Chain Planning", "Manufacturing", "Product Lifecycle Management", "Warehouse Management", "Logistics", "Cost Management", "Supplier Management"] },
    { title: "Oracle Cloud HCM", icon: <Users />, items: ["Core Human Resources", "Global Human Resources", "Workforce Management", "Recruiting", "Talent Management", "Compensation", "Learning", "Absence Management", "Payroll", "Employee and Manager Self-Service"] },
    { title: "Oracle Cloud PPM", icon: <FileText />, items: ["Project Financial Management", "Project Costing", "Project Billing", "Project Management", "Grants Management", "Resource Management", "Project Planning and Forecasting"] },
    { title: "Oracle EPM", icon: <BarChart />, items: ["Enterprise Planning", "Budgeting and Forecasting", "Financial Consolidation", "Account Reconciliation", "Profitability and Cost Management", "Management Reporting", "Enterprise Performance Management Analytics"] }
  ];

  const ebsCapabilities = [
    { title: "Oracle EBS Financials", icon: <BarChart />, items: ["General Ledger", "Accounts Payable", "Accounts Receivable", "Fixed Assets", "Cash Management", "Purchasing", "iExpenses", "Treasury", "Projects"] },
    { title: "Oracle EBS Supply Chain", icon: <Truck />, items: ["Inventory", "Purchasing", "Order Management", "Advanced Pricing", "Manufacturing", "Bills of Material", "Work in Process", "Cost Management", "Warehouse Management", "Advanced Supply Chain Planning"] },
    { title: "Oracle EBS Projects", icon: <FileText />, items: ["Project Costing", "Project Billing", "Project Accounting", "Project Management", "Project Resource Management", "Project Contracts"] },
    { title: "Oracle EBS HRMS", icon: <Users />, items: ["Human Resources", "Payroll", "Self-Service HR", "iRecruitment", "Time and Labor", "Benefits"] }
  ];

  const services = [
    { title: "Oracle Implementation Services", desc: "End-to-end Oracle implementation covering assessment, requirements, fit-gap analysis, solution design, configuration, customization, testing, training, deployment, and post-go-live support." },
    { title: "Oracle Cloud Migration", desc: "Migration from Oracle EBS and legacy ERP platforms to Oracle Fusion Cloud with a structured, secure, and low-risk approach." },
    { title: "Application Modernization", desc: "Modernize legacy Oracle applications, databases, customizations, and integrations for cloud-ready operations." },
    { title: "Oracle Integration Services", desc: "Integrate Oracle ERP, HCM, SCM, EBS, and third-party applications using OIC, REST APIs, SOAP Web Services, and file-based integrations." },
    { title: "Oracle Technical Services", desc: "Expertise across PL/SQL, Oracle Forms, Reports, APEX, BI Publisher, OTBI, SQL, OIC, workflows, extensions, and custom applications." },
    { title: "Oracle Data Migration", desc: "Complete data migration services covering data discovery, extraction, transformation, cleansing, validation, loading, and reconciliation." },
    { title: "Master & Transaction Data", desc: "Migration of master data, historical data, open balances, transactions, attachments, and supporting business documents." },
    { title: "Data Validation & Reconciliation", desc: "Comprehensive validation and reconciliation to ensure data accuracy, completeness, integrity, and business continuity." },
    { title: "Testing & Deployment", desc: "Functional, technical, integration, UAT, cutover, deployment, production readiness, and post-migration validation." }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Fullscreen Glassmorphism Hero */}
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
              Oracle Practices
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl drop-shadow-md">
              Enterprise-grade Oracle implementation and support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <Cloud className="w-12 h-12 text-[#0B1F3A] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Maximize Your Oracle Investment</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
              At Elios Technologies, we help organizations maximize the value of their Oracle investments through end-to-end consulting, implementation, integration, migration, modernization, and managed services.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
              Our Oracle practice combines deep functional expertise, technical capabilities, industry knowledge, and proven delivery methodologies to help organizations modernize their enterprise applications, optimize business processes, and achieve measurable business outcomes. From Oracle E-Business Suite to Oracle Fusion Cloud Applications, Elios Technologies supports organizations throughout their Oracle transformation journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Oracle Fusion Cloud Applications */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4 uppercase tracking-tight">Our Oracle Cloud Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elios Technologies helps organizations adopt and optimize Oracle Fusion Cloud Applications to create connected, automated, and scalable business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {cloudCapabilities.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col border border-gray-200 h-full"
              >
                <div className="bg-[#0B1F3A] p-6 text-center flex flex-col items-center justify-center">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-3 text-white">
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-lg leading-tight uppercase text-white">{cat.title}</h3>
                </div>
                <div className="p-6 flex-grow bg-white">
                  <ul className="space-y-3">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0B1F3A] flex-shrink-0 mt-1.5 mr-3"></span>
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center bg-white border border-gray-200 rounded-full py-4 px-8 inline-flex items-center justify-center mx-auto shadow-sm w-full md:w-auto">
            <Cloud className="w-6 h-6 text-[#0B1F3A] mr-3" />
            <span className="font-semibold text-gray-900 mr-2">Integrated. Intelligent. Scalable.</span>
            <span className="text-gray-500 hidden md:inline">| Empowering businesses with Oracle Cloud Applications for a smarter tomorrow.</span>
          </div>
        </div>
      </section>

      {/* Oracle E-Business Suite */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">Oracle E-Business Suite (EBS)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elios Technologies provides consulting and support services for organizations running Oracle E-Business Suite (EBS) and helps them optimize, modernize, and transition their existing Oracle environments.
            </p>
          </motion.div>

          <div className="space-y-6">
            {ebsCapabilities.map((ebs, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col md:flex-row bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
              >
                <div className="bg-[#0B1F3A] md:w-1/4 p-6 flex items-center justify-center md:justify-start border-r border-gray-200 md:border-r-0 md:border-b-0 border-b">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 text-white">
                    {ebs.icon}
                  </div>
                  <h3 className="font-bold text-lg uppercase tracking-wide text-white">{ebs.title}</h3>
                </div>
                <div className="md:w-3/4 p-6 bg-white">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {ebs.items.map((item, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-[#0B1F3A] mr-2"></span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Oracle Services</h2>
            <div className="w-20 h-1 bg-[#0B1F3A] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-200 group"
              >
                <div className="flex items-start mb-4">
                  <CheckCircle2 className="w-6 h-6 text-[#0B1F3A] mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed ml-9">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support and Modernization (The 3 Pillars) */}
      <section className="py-24 bg-[#0B1F3A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Oracle Managed Services & Support</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proactive support. Continuous improvement. Maximum value from your Oracle investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Managed Services */}
            <motion.div {...fadeIn} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <div className="bg-[#051020] p-6 text-center border-b border-gray-700">
                <Settings className="w-12 h-12 text-white mx-auto mb-3" />
                <h3 className="text-2xl font-bold uppercase text-white">Oracle Managed Services</h3>
              </div>
              <div className="p-8 bg-white">
                <p className="text-sm text-gray-700 leading-relaxed mb-6 pb-6 border-b border-gray-200">
                  Elios Technologies provides ongoing Oracle application support to help organizations maintain stable, secure, and high-performing environments.
                </p>
                <h4 className="font-bold text-[#0B1F3A] mb-4 bg-gray-100 px-4 py-2 rounded-lg inline-block text-sm uppercase">AMS Services</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 font-medium">
                  <ul className="space-y-3">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0B1F3A] rounded-full mr-2"></span> Functional support</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0B1F3A] rounded-full mr-2"></span> Technical support</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0B1F3A] rounded-full mr-2"></span> App monitoring</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0B1F3A] rounded-full mr-2"></span> Incident mgmt</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0B1F3A] rounded-full mr-2"></span> Problem mgmt</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0B1F3A] rounded-full mr-2"></span> Change mgmt</li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0B1F3A] rounded-full mr-2"></span> Perf. optimization</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0B1F3A] rounded-full mr-2"></span> Integration monitoring</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0B1F3A] rounded-full mr-2"></span> Quarterly updates</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0B1F3A] rounded-full mr-2"></span> Enhancements</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0B1F3A] rounded-full mr-2"></span> Production support</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0B1F3A] rounded-full mr-2"></span> Root-cause analysis</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Application Support */}
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <div className="bg-[#051020] p-6 text-center border-b border-gray-700">
                <Headphones className="w-12 h-12 text-white mx-auto mb-3" />
                <h3 className="text-2xl font-bold uppercase text-white">Oracle Application Support</h3>
              </div>
              <div className="p-8 bg-white">
                <p className="text-sm text-gray-700 leading-relaxed mb-6 pb-6 border-b border-gray-200">
                  Our support model is designed around business continuity and responsive issue resolution.
                </p>
                <div className="space-y-4">
                  <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl flex items-start">
                    <div className="bg-[#0B1F3A] text-white font-bold px-3 py-1 rounded-lg mr-4 mt-1">L1</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">L1 Support</h4>
                      <p className="text-xs text-gray-600 font-medium">User assistance, ticket logging, basic troubleshooting, and issue classification.</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl flex items-start">
                    <div className="bg-[#0B1F3A] text-white font-bold px-3 py-1 rounded-lg mr-4 mt-1">L2</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">L2 Support</h4>
                      <p className="text-xs text-gray-600 font-medium">Functional and technical analysis, configuration support, integration troubleshooting.</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl flex items-start">
                    <div className="bg-[#0B1F3A] text-white font-bold px-3 py-1 rounded-lg mr-4 mt-1">L3</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">L3 Support</h4>
                      <p className="text-xs text-gray-600 font-medium">Advanced technical investigation, complex defects, product-level troubleshooting.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Upgrade & Modernization */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <div className="bg-[#051020] p-6 text-center border-b border-gray-700">
                <RefreshCw className="w-12 h-12 text-white mx-auto mb-3" />
                <h3 className="text-2xl font-bold uppercase text-white">Upgrade & Modernization</h3>
              </div>
              <div className="p-8 bg-white h-full">
                <p className="text-sm text-gray-700 leading-relaxed mb-6 pb-6 border-b border-gray-200">
                  Elios Technologies helps organizations modernize their Oracle environments while reducing operational risk.
                </p>
                <h4 className="font-bold text-[#0B1F3A] mb-4 text-sm uppercase">Our Services Include:</h4>
                <ul className="space-y-4 text-sm text-gray-700 font-medium">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-[#0B1F3A] mr-3 flex-shrink-0" /> Oracle EBS upgrade services</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-[#0B1F3A] mr-3 flex-shrink-0" /> Oracle Cloud quarterly update support</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-[#0B1F3A] mr-3 flex-shrink-0" /> Application modernization</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-[#0B1F3A] mr-3 flex-shrink-0" /> Customization assessment & remediation</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-[#0B1F3A] mr-3 flex-shrink-0" /> Upgrade readiness & post-upgrade validation</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section 
        className="relative py-24 bg-fixed bg-center bg-cover border-b-8 border-[#051020]"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
      >
        <div className="absolute inset-0 bg-[#0B1F3A]/90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-bold text-white mb-6">
            Optimize Your Oracle Investment
          </motion.h2>
          <motion.p {...fadeIn} className="text-blue-100 mb-8 text-lg">
            Let our experts guide your enterprise through its Oracle transformation journey.
          </motion.p>
          <motion.a 
            {...fadeIn}
            href="/contact-us" 
            className="inline-block bg-white text-[#0B1F3A] font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300"
          >
            Schedule a Consultation
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default OraclePracticesTechPage;
