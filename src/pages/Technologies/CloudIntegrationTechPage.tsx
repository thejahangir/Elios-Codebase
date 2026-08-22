// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, Cable, Database, Settings, 
  Activity, CheckCircle2, Network, ShieldCheck, Zap
} from 'lucide-react';

const defaultHeroBg = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const CloudIntegrationTechPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const coreFocus = [
    { title: "Dataflow Volume associated costs", icon: <Database className="w-5 h-5 text-blue-500" /> },
    { title: "Application connectivity", icon: <Cable className="w-5 h-5 text-blue-500" /> },
    { title: "Performance & latency issues", icon: <Activity className="w-5 h-5 text-blue-500" /> },
    { title: "Round the clock maintenance and support", icon: <Settings className="w-5 h-5 text-blue-500" /> }
  ];

  const benefits = [
    "Reusable service interfaces save time and resources and in turn, provide business agility.",
    "Cloud Integration reduces time to market.",
    "The architecture ecosystem meets complexity requirements, scales multiple complex interfaces, and handles specific needs."
  ];

  const ediIntegrations = [
    "IBM GIS",
    "SI (Sterling Integrator)",
    "MFT (Managed File Transfer)",
    "SCC (Sterling Control Center)",
    "SSP (Sterling Secure Proxy)",
    "SDC (Sterling Direct connect)",
    "SCE (Sterling Connect Enterprise)"
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Fullscreen Glassmorphism Hero - Unchanged as requested */}
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
              Cloud & Integration
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl drop-shadow-md">
              Seamless API management and microservices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <p className="text-xl text-gray-600 leading-relaxed font-light mb-6">
              Database, processes, network resources, and application integration are all taken care of by Eliostech’s Cloud & Integration services. With the help of our services, you gain the ability to enhance the capability of cloud ecosystems, standardize service, minimize cost and reduce provisioning time.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We can also enable the integration of legacy systems to keep your business updated. Our cloud integration experts help organizations devise a solid strategy to overcome complexities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Focus & SOA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <motion.div {...fadeIn}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Cloud className="w-6 h-6 text-blue-600 mr-3" />
                Along With This, We Look After:
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreFocus.map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center">
                    <div className="bg-blue-50 p-2 rounded-lg mr-3">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-800">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              {...fadeIn} 
              className="bg-[#0B1F3A] p-10 rounded-3xl text-white shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Network className="w-32 h-32 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-6 relative z-10 flex items-center">
                <Cable className="w-6 h-6 text-blue-400 mr-3" />
                Service-Oriented Architecture (SOA)
              </h2>
              <p className="text-blue-100 leading-relaxed relative z-10">
                With the help of Service-Oriented Architecture (SOA), an architectural approach is provided for the services available, through communication within the network. SOA helps to combine a large number of facilities from existing services to form applications. Secondly, its design principle structure and integrate components. It can be integrated into different software systems depending on the business domain.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Benefits & EDI Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Benefits */}
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits for Businesses</h2>
              <div className="space-y-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <ShieldCheck className="w-6 h-6 text-emerald-500 mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* EDI / B2B */}
            <motion.div {...fadeIn}>
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Zap className="w-6 h-6 text-blue-600 mr-3" />
                  EDI / B2B Integration:
                </h2>
                <div className="flex flex-wrap gap-3">
                  {ediIntegrations.map((item, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center px-4 py-2 rounded-full bg-white text-gray-800 text-sm font-medium border border-gray-200 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
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
            Optimize Your Architecture
          </motion.h2>
          <motion.p {...fadeIn} className="text-blue-100 mb-8 text-lg">
            Standardize your services and modernize your legacy systems with Eliostech.
          </motion.p>
          <motion.a 
            {...fadeIn}
            href="/contact-us" 
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300"
          >
            Connect With Us
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default CloudIntegrationTechPage;
