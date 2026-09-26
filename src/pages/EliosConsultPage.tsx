import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Compass, Target, ShieldCheck, TrendingUp, 
  ArrowRight, Users, Zap, Sparkles
} from 'lucide-react';

const EliosConsultPage: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const pillars = [
    {
      title: "Strategic Visioning",
      desc: "Aligning executive business priorities with target technology architectures. We define 3-5 year digital roadmaps with clear ROI milestones.",
      icon: <Target className="w-8 h-8 text-[#C9A227]" />
    },
    {
      title: "Enterprise Architecture Design",
      desc: "Engineering decoupled, cloud-native target architectures that eliminate technical debt and future-proof enterprise applications.",
      icon: <Compass className="w-8 h-8 text-[#C9A227]" />
    },
    {
      title: "Organizational Change Management",
      desc: "Ensuring high organizational adoption of new digital tools, workflows, and cloud paradigms with structured enablement frameworks.",
      icon: <Users className="w-8 h-8 text-[#C9A227]" />
    },
    {
      title: "Cloud & Legacy Modernization Strategy",
      desc: "Systematic assessment of legacy portfolios using 6R migration frameworks to prioritize cloud workloads for maximum velocity and savings.",
      icon: <Zap className="w-8 h-8 text-[#C9A227]" />
    },
    {
      title: "Governance, Risk & Compliance",
      desc: "Embedding robust governance, ISO / SOC security postures, and cost governance into IT operations from day one.",
      icon: <ShieldCheck className="w-8 h-8 text-[#C9A227]" />
    },
    {
      title: "Value Realization & KPI Tracking",
      desc: "Establishing rigorous telemetry and operational metrics to validate that digital transformation investments translate to margin improvements.",
      icon: <TrendingUp className="w-8 h-8 text-[#C9A227]" />
    }
  ];

  const methodology = [
    { step: "01", title: "Diagnostic & Maturity Assessment", desc: "Evaluate existing systems, business workflows, technical debt, and capability maturity." },
    { step: "02", title: "Target State Architecture", desc: "Design future-ready blueprint with modern cloud, data, and integration topologies." },
    { step: "03", title: "Roadmap & Investment Plan", desc: "Sequence initiatives into high-impact quarterly phases with quantifiable business cases." },
    { step: "04", title: "Orchestrated Execution", desc: "Deploy specialized consulting pods alongside your teams to drive execution and knowledge transfer." }
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
              Strategic Advisory & Technology Consulting
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              Elios <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-yellow-200">Consult.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
              Simplifying digital transformation with strategic visioning, enterprise architecture design, and change management. We partner with business leaders to turn complex technology roadmaps into predictable business outcomes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-sm bg-[#C9A227] text-[#0B1F3A] hover:bg-white transition-all duration-300 shadow-xl"
              >
                Schedule a Strategic Advisory Call
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-sm bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20"
              >
                Explore All Capabilities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE PILLARS SECTION */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#C9A227] font-semibold tracking-widest uppercase text-xs mb-3 block">Advisory Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-6">How Elios Consult Drives Transformation</h2>
            <div className="w-20 h-1 bg-[#C9A227] mx-auto mb-6" />
            <p className="text-gray-600 text-base leading-relaxed">
              We provide the strategic framework, technical depth, and execution oversight required to guide major enterprise transformations without disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#C9A227]/40 transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0B1F3A]/5 text-[#C9A227] flex items-center justify-center mb-6 group-hover:bg-[#0B1F3A] transition-colors duration-500 group-hover:scale-110">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4 group-hover:text-[#C9A227] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#C9A227] font-semibold tracking-widest uppercase text-xs mb-3 block">Engagement Framework</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-6">Our Consulting Methodology</h2>
            <div className="w-20 h-1 bg-[#C9A227] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((m, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-[#C9A227] mb-4 block font-mono">{m.step}</span>
                  <h4 className="text-xl font-bold text-[#0B1F3A] mb-3">{m.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-[#0B1F3A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#C9A227]/10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Accelerate Your Transformation Strategy?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Connect with our principal enterprise consultants to structure your technology roadmap.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#C9A227] text-[#0B1F3A] font-bold text-base hover:bg-white transition-all shadow-xl"
          >
            Contact Elios Consult <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default EliosConsultPage;
