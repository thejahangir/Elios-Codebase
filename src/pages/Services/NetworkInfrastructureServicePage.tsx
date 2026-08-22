// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';

import { 
  Network, Server, ShieldCheck, Cloud, 
  CheckCircle2, Wifi, Settings, ChevronRight
} from 'lucide-react';

const defaultHeroBg = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const NetworkInfrastructureServicePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const generalServices = [
    "Network Design, Implementation & Maintenance",
    "Wireless Access Point Setup (seamless wireless roaming)",
    "Infrastructure Design",
    "Network Cabling",
    "LAN/WAN Implementation, Troubleshooting and Maintenance",
    "Virtual Private Networks (VPN)",
    "Network Analysis & Troubleshooting",
    "Router, Hub, Switch Configuration",
    "Internet Connectivity & Functionality",
    "Firewall Configuration"
  ];

  const pillars = [
    {
      title: "Data Center Services",
      icon: <Server className="w-8 h-8 text-blue-600" />,
      items: [
        "Data Center Design and Build",
        "Data Center Consolidation and Migration",
        "Server and Storage Virtualization",
        "Disaster Recovery Services"
      ]
    },
    {
      title: "Network and Security Services",
      icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
      items: [
        "Network Design, Implementation and Integration",
        "Network Security Analysis and Design",
        "Unified Communications and Collaboration Services"
      ]
    },
    {
      title: "Cloud Infrastructure Services",
      icon: <Cloud className="w-8 h-8 text-purple-600" />,
      items: [
        "Cloud Strategy, Definition, Readiness and Assessment",
        "Public/Private Cloud Deployment Services",
        "Cloud Product Evaluation and Implementation"
      ]
    }
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
            Network & Infrastructure Services
          </motion.h1>
          <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Enable business agility and ensure reliable, secure data communication across your enterprise.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              Effective data communication is the basis for reliable transfer of information. We help you enable business agility with effective network and infrastructure services from Eliostech. Manage business-critical details and transport data securely across the network you want to.
            </p>
          </motion.div>
        </div>
      </section>

      {/* General Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <Network className="w-8 h-8 text-blue-600 mr-4" />
              General Services Offered
            </h2>
            <div className="w-24 h-1 bg-blue-600 rounded-full" />
          </motion.div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              {generalServices.map((service, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialized Infrastructure Solutions</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-gray-50 mb-8">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{pillar.title}</h3>
                
                <ul className="space-y-4 flex-grow">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
            Unparalleled Performance & Security
          </motion.h2>
          <motion.p {...fadeIn} className="text-blue-100 mb-8 text-lg">
            To get unparalleled performance and security across your network, connect with Eliostech today.
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

export default NetworkInfrastructureServicePage;
