// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, BarChart, BrainCircuit, Layers, 
  Globe, CheckCircle2, Shield, Settings, Server
} from 'lucide-react';

const defaultHeroBg = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const EamIotTechPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const advantages = [
    {
      title: "Real-Time Planning",
      description: "Real-Time Information allows future planning and control for organizations.",
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Actionable Insights",
      description: "Analyse and act on new data to get insights and make decisions accordingly.",
      icon: <BarChart className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Augmented Intelligence",
      description: "Improves decision making to transform business processes with augmented intelligence.",
      icon: <BrainCircuit className="w-8 h-8 text-emerald-500" />
    },
    {
      title: "Smart Enterprise",
      description: "Uses existing enterprise architecture to integrate IoT solutions and develop smart industries.",
      icon: <Layers className="w-8 h-8 text-orange-500" />
    }
  ];

  const eeamServices = [
    "Platform consolidation",
    "Health checks & workshops",
    "IBM Maximo implementations",
    "Integration with Watson",
    "Migration & Up-gradation",
    "Webservices Mobility: Integrating with your devices",
    "Your hat program: Plan, design and build, deploy and train you with the demo with respective to your challenges and needs."
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
              EAM & IoT
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl drop-shadow-md">
              Enterprise Asset Management for the connected era.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Overview */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <Globe className="w-12 h-12 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Unlocking Business Potential</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
              IoT has become a reality in businesses and with its features offered, it allows you unlock potential, create opportunities for value creation, understand business working, and address the challenges it faces in advance.
            </p>
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl inline-block">
              <p className="text-blue-900 font-medium">
                By delivering powerful IoT solutions, we enable businesses to deliver innovation with deepest insights.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advantages for Businesses with IoT</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((adv, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {adv.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{adv.title}</h3>
                <p className="text-gray-600 leading-relaxed">{adv.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EEAM Section (Dark) */}
      <section className="py-20 bg-[#0B1F3A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Settings className="w-8 h-8 text-blue-400 mr-4" />
                Elios Enterprise Asset Management
              </h2>
              <p className="text-blue-100 leading-relaxed mb-6 font-light">
                With IoT, organizations can monitor their valuable assets in real-time. The sensors attached to the IoT device, generate data time-to-time, which is relayed to the cloud. This asset management also reduces the dependency on humans and eliminates the scope of errors and actively keeps track of all assets.
              </p>
              <p className="text-blue-100 leading-relaxed mb-6 font-light">
                It is beneficial to maintain the asset and keep it as per expectations. In case, it doesn’t work properly due to some problem, effective predictive maintenance helps to get it resolved. Data encryption and authentication in Elios Enterprise Asset management ensures in keeping it safe.
              </p>
              <div className="flex items-center text-emerald-400 font-medium">
                <Shield className="w-5 h-5 mr-2" /> Data Encryption & Authentication Standard
              </div>
            </motion.div>

            <motion.div {...fadeIn}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">Services</h3>
                <ul className="space-y-4">
                  {eeamServices.map((service, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <div className="bg-blue-500/20 p-1 rounded-md mr-4 mt-0.5 flex-shrink-0">
                        <Server className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-sm leading-relaxed">{service}</span>
                    </li>
                  ))}
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
            Ready to Connect Your Enterprise?
          </motion.h2>
          <motion.p {...fadeIn} className="text-blue-100 mb-8 text-lg">
            Let our experts help you unlock actionable insights with smart IoT asset management.
          </motion.p>
          <motion.a 
            {...fadeIn}
            href="/contact-us" 
            className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300"
          >
            Schedule a Consultation
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default EamIotTechPage;
