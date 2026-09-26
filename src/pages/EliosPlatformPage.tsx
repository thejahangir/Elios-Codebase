import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Network, Cable, BrainCircuit, Activity, 
  ArrowRight, ShieldCheck, Zap, Sparkles
} from 'lucide-react';

const EliosPlatformPage: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const capabilities = [
    {
      title: "Open Integration Architecture",
      desc: "Connect legacy core systems (SAP, Oracle, mainframe) with modern cloud APIs, microservices, and SaaS ecosystems effortlessly.",
      icon: <Cable className="w-8 h-8 text-[#C9A227]" />
    },
    {
      title: "Real-Time IT Orchestration",
      desc: "Unified event streaming and workflow automation that coordinates complex multi-system pipelines with sub-second latency.",
      icon: <Network className="w-8 h-8 text-[#C9A227]" />
    },
    {
      title: "Continuous Learning & AI Insights",
      desc: "Embedded machine learning intelligence that analyzes operational telemetry, detects anomalies, and optimizes workflow bottlenecks automatically.",
      icon: <BrainCircuit className="w-8 h-8 text-[#C9A227]" />
    },
    {
      title: "Faster Time to Value",
      desc: "Pre-built connectors, modular workflow templates, and low-code orchestration accelerators reduce deployment cycles from months to days.",
      icon: <Zap className="w-8 h-8 text-[#C9A227]" />
    },
    {
      title: "Enterprise Observability & Health",
      desc: "Full-stack visibility across all hybrid cloud workloads with automated root cause analysis and proactive alerting.",
      icon: <Activity className="w-8 h-8 text-[#C9A227]" />
    },
    {
      title: "Zero-Trust Security & Compliance",
      desc: "End-to-end data encryption, granular role-based access controls, and automated compliance tracking across all transactional endpoints.",
      icon: <ShieldCheck className="w-8 h-8 text-[#C9A227]" />
    }
  ];

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
              Unified Integration & IT Orchestration
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              Elios <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-yellow-200">Platform.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
              An open integration and intelligent orchestration platform designed to unify your hybrid IT environment, enable continuous operational learning, and deliver faster time to enterprise value.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-sm bg-[#C9A227] text-[#0B1F3A] hover:bg-white transition-all duration-300 shadow-xl"
              >
                Request a Platform Architecture Demo
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-sm bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20"
              >
                View Connected Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#C9A227] font-semibold tracking-widest uppercase text-xs mb-3 block">Platform Architecture</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-6">Built for Modern Enterprise Velocity</h2>
            <div className="w-20 h-1 bg-[#C9A227] mx-auto mb-6" />
            <p className="text-gray-600 text-base leading-relaxed">
              Bridge legacy silos, synchronize multi-cloud workflows, and unlock real-time intelligence across every system in your enterprise portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#C9A227]/40 transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0B1F3A]/5 text-[#C9A227] flex items-center justify-center mb-6 group-hover:bg-[#0B1F3A] transition-colors duration-500 group-hover:scale-110">
                  {cap.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4 group-hover:text-[#C9A227] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE HIGHLIGHT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#C9A227] font-semibold tracking-widest uppercase text-xs mb-3 block">Interoperability First</span>
              <h3 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-6 leading-tight">
                Connect Anything. <br />Orchestrate Everything.
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Elios Platform is non-disruptive. It sits on top of your existing investments in SAP, Oracle, AWS, Azure, Salesforce, and bespoke systems—orchestrating data flows and accelerating digital delivery without risky rip-and-replace cycles.
              </p>
              <ul className="space-y-4 text-gray-700 text-base">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C9A227]/20 text-[#C9A227] flex items-center justify-center shrink-0">✓</div>
                  <span>Universal API gateway and event streaming connectors</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C9A227]/20 text-[#C9A227] flex items-center justify-center shrink-0">✓</div>
                  <span>Automated policy enforcement and governance tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C9A227]/20 text-[#C9A227] flex items-center justify-center shrink-0">✓</div>
                  <span>99.99% high availability uptime SLAs for mission-critical core</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#0B1F3A] p-10 lg:p-12 rounded-3xl text-white relative overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C9A227]/20 blur-3xl rounded-full" />
              <h4 className="text-2xl font-bold text-white mb-6">Platform Architecture Highlights</h4>
              <div className="space-y-6">
                <div className="border-l-2 border-[#C9A227] pl-4">
                  <h5 className="font-bold text-white text-base">Distributed Microservices Hub</h5>
                  <p className="text-gray-400 text-sm mt-1">Deployable on-premise, across public cloud providers (AWS, Azure, GCP), or in hybrid topologies.</p>
                </div>
                <div className="border-l-2 border-[#C9A227] pl-4">
                  <h5 className="font-bold text-white text-base">Event-Driven Core</h5>
                  <p className="text-gray-400 text-sm mt-1">High-throughput Kafka and RabbitMQ messaging bridges handling millions of transactional events per second.</p>
                </div>
                <div className="border-l-2 border-[#C9A227] pl-4">
                  <h5 className="font-bold text-white text-base">Automated Governance Engine</h5>
                  <p className="text-gray-400 text-sm mt-1">Continuously evaluates compliance with SOC 2, HIPAA, GDPR, and ISO 27001 data residency regulations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-[#0B1F3A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#C9A227]/10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Explore Elios Platform for Your Organization?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Schedule a session with our platform architects to see how Elios Platform can accelerate your integration velocity.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#C9A227] text-[#0B1F3A] font-bold text-base hover:bg-white transition-all shadow-xl"
          >
            Connect with Platform Team <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default EliosPlatformPage;
