// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, ShieldCheck, TrendingUp, CheckCircle2, 
  TerminalSquare, Server, Database, Activity, 
  Zap, Cloud, Settings, MonitorPlay
} from 'lucide-react';

const defaultHeroBg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const ManagedOnDemandServicePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const whyChooseUs = [
    {
      title: "Expert Resolution",
      description: "Access to an expert team who resolves your issues in minimal time. Enhance security & compliance along with maintaining task progress.",
      icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />
    },
    {
      title: "Time & Resource Savings",
      description: "Save valuable time and offload staff responsibility. We handle the tenuous tasks so you can focus on core strategy.",
      icon: <Clock className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Cost Effectiveness",
      description: "Quality managed services to maintain cost-effectiveness & increase ROI across your digital infrastructure.",
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />
    }
  ];

  const nicheTechSpaces = [
    "Application Servers Support",
    "EDI/B2B Platforms Support",
    "SAP BASIS/Functional Services",
    "SAP PI/PO Support",
    "EAI/SOA Support/Services",
    "BPM/DM Support/Services",
    "Appliance Based Integration",
    "API Management",
    "Cloud Integration",
    "Content Management",
    "Custom Applications (J2EE/.NET)",
    "Database Administration",
    "ETL Support"
  ];

  const commandCenterActivities = [
    "Corrective & Preventive Maintenance",
    "Enhancements",
    "Availability Management of Batch / Online Apps",
    "Production Support and Control",
    "24×7 On-Call Support Management",
    "Systems Management and Administration",
    "Process Improvements"
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0B1F3A]">
                        <div className="absolute inset-0 z-0">
          <img src={defaultHeroBg} alt="Hero Background" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 {...fadeIn} className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6">
            Managed & On Demand Services
          </motion.h1>
          <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Free your team’s time to plan a cost-effective strategy. Simplest solution to outsource system administration, solution maintenance, and integration.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              With Eliostech’s smart on-demand services, free your team’s time to plan a cost-effective strategy. With our team handling all the tenuous tasks and 24*7 support, you have on-demand access to us and simplification of work easily. We can help manage and retain existing services SLA as you need it.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Our managed on-demand services are the simplest solution to outsource system administration, solution maintenance, ongoing administration, configuration optimization along integration and optimization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-gray-100">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid (Niche Tech & Command Center) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Niche Technology Spaces */}
            <motion.div {...fadeIn}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <TerminalSquare className="w-6 h-6 text-blue-600 mr-3" />
                Niche Technology Support
              </h2>
              <p className="text-gray-600 mb-8 text-sm">
                Our teams can provide support in the following niche technology spaces:
              </p>
              <div className="flex flex-wrap gap-3">
                {nicheTechSpaces.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Command Center */}
            <motion.div 
              {...fadeIn} 
              className="bg-[#0B1F3A] rounded-3xl p-10 text-white shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <MonitorPlay className="w-32 h-32 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-6 relative z-10 flex items-center">
                <Settings className="w-6 h-6 text-blue-400 mr-3" />
                Command Center Activities
              </h2>
              <p className="text-blue-100 mb-8 text-sm relative z-10">
                Our Command Center Teams can take care of the following activities, but are not limited to these:
              </p>
              <ul className="space-y-4 relative z-10">
                {commandCenterActivities.map((activity, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200 text-sm">{activity}</span>
                  </li>
                ))}
              </ul>
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
            Ready to Offload Your IT Operations?
          </motion.h2>
          <motion.p {...fadeIn} className="text-blue-100 mb-8 text-lg">
            Let Eliostech manage the complex tasks so you can focus on driving your business forward.
          </motion.p>
          <motion.a 
            {...fadeIn}
            href="/contact-us" 
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300"
          >
            Contact Us
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default ManagedOnDemandServicePage;
