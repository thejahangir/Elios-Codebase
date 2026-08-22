// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cable, Radio, Cpu, CheckCircle2, 
  Lightbulb, Network, Database, Activity, Smartphone
} from 'lucide-react';

const defaultHeroBg = "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const ApiEdgeIotTechPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const weHelpYouTo = [
    { title: "Connect with our expert API developers", icon: <Network className="w-6 h-6 text-blue-500" /> },
    { title: "Transform your ideas to reality easily", icon: <Lightbulb className="w-6 h-6 text-blue-500" /> },
    { title: "Drive engagement to publish interactive apps", icon: <Smartphone className="w-6 h-6 text-blue-500" /> },
    { title: "Ease of integration for backend data & apps", icon: <Database className="w-6 h-6 text-blue-500" /> }
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
              API, Edge & IoT
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl drop-shadow-md">
              Connecting the physical and digital worlds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* APIs Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Cable className="w-8 h-8 text-blue-600 mr-4" />
                Modern API Strategies
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                APIs are an important tool for business. With more apps making way for easier information, apps and their APIs are connecting tools. APIs help in improving existing products, systems, and operations.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                It helps in engaging and communicating with users through the web, social and apps. In such a dynamic environment, a business needs to build innovative and successful API strategies.
              </p>
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <p className="text-blue-900 font-medium">
                  With time, businesses need to keep up with technologies and make their legacy systems effective as compared to their competitors. Modern APIs help them achieve it.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeIn}>
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-8 border-b pb-4">We Help You To:</h3>
                <div className="grid grid-cols-1 gap-6">
                  {weHelpYouTo.map((item, idx) => (
                    <div key={idx} className="flex items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-50">
                      <div className="bg-blue-50 p-3 rounded-xl mr-4 flex-shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-gray-800 font-medium">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IoT Section */}
      <section className="py-20 bg-[#0B1F3A] text-white overflow-hidden relative">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="iot-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#iot-grid)" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            {...fadeIn} 
            className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 rounded-full mb-8 border border-blue-500/30"
          >
            <Radio className="w-10 h-10 text-blue-400" />
          </motion.div>
          
          <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold mb-8">
            Internet of Things (IoT)
          </motion.h2>
          
          <motion.div {...fadeIn} className="space-y-6 text-lg text-blue-100 leading-relaxed font-light">
            <p>
              IoT has brought a breakthrough in technology. It is a network of inter-connected devices that allow you to collect and transfer data across your network. With its continuous data collection and constant feedback, businesses can offer better decisions and drive ahead.
            </p>
            <p className="font-medium text-white">
              It can offer a competitive advantage and make customers get what they want easily, and in turn provide you a significant ROI with its real-time insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section 
        className="relative py-24 bg-fixed bg-center bg-cover border-t-8 border-b-8 border-[#051020]"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
      >
        <div className="absolute inset-0 bg-[#0B1F3A]/90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-bold text-white mb-6">
            Connect Your Physical & Digital World
          </motion.h2>
          <motion.p {...fadeIn} className="text-blue-100 mb-8 text-lg">
            Let's discuss how our Edge and IoT solutions can drive your operational efficiency.
          </motion.p>
          <motion.a 
            {...fadeIn}
            href="/contact-us" 
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300"
          >
            Get in Touch
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default ApiEdgeIotTechPage;
