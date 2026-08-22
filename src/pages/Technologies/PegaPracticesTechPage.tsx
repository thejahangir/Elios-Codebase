// @ts-nocheck
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, Users, Network, Code, Briefcase, Workflow, CheckCircle2, Repeat, LayoutTemplate,
  Target, Zap, ShieldCheck, PieChart, Activity, Database, Server, Smartphone, MonitorSmartphone,
  ChevronRight, ArrowUpRight, Cpu, Layers, Globe, Star, Landmark, Shield, Stethoscope, 
  Building, BarChart, Rocket, CheckSquare, Handshake, Lightbulb, PenTool, Scale
} from 'lucide-react';

const defaultHeroBg = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

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
  
  const estimatedSavings = (roiCurrentProcessCount * roiManualEffort * roiTeamSize * 0.4).toFixed(0);

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
              <button className="w-full py-4 bg-gray-50 border border-gray-200 text-gray-800 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all flex justify-center items-center gap-2">
                Launch Assessment <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Tech Stack Showcase */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tech Stack Showcase</h3>
              <p className="text-gray-500 mb-8 text-sm font-light">Interactive grid displaying integrations with Kafka, Salesforce, AWS, MuleSoft, Oracle, and SAP.</p>
              <div className="grid grid-cols-2 gap-4 flex-grow">
                {['Kafka', 'Salesforce', 'AWS', 'MuleSoft', 'Oracle', 'SAP'].map((tech) => (
                  <div key={tech} className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center justify-center text-sm font-semibold text-gray-700 hover:text-blue-700 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer">
                    {tech}
                  </div>
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
              <motion.span 
                key={idx} 
                whileHover={{ scale: 1.05 }}
                className="flex items-center px-6 py-3 bg-white text-gray-700 hover:text-blue-600 rounded-full font-bold text-sm border border-gray-200 shadow-sm hover:border-blue-200 hover:shadow-md transition-all cursor-pointer"
              >
                {ind.icon} {ind.name}
              </motion.span>
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
          <motion.a 
            {...fadeIn}
            href="/contact-us" 
            className="inline-flex items-center gap-3 bg-white text-blue-900 font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300"
          >
            Schedule a Consultation <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>
      
    </div>
  );
};

export default PegaPracticesTechPage;
