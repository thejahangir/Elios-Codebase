// @ts-nocheck
import React from 'react';

import { motion } from 'framer-motion';
import { 
  Smartphone, Fingerprint, AppWindow, FileText, 
  ShieldCheck, Clock, Settings, Share2, Globe, Target
} from 'lucide-react';

const defaultHeroBg = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const EnterpriseMobilityServicePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const emmComponents = [
    {
      title: "Mobile Device Management (MDM)",
      description: "You can easily take control of Android, iOS, Windows from your smartphones, laptops, tablets, desktops itself. Real-time device location can be tracked and lost devices can be found easily. Thus, organizations make use of this solution to manage and secure devices for its entire lifecycle.",
      icon: <Smartphone className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Mobile Identity Management (MIM)",
      description: "It deals by ensuring that employees are provided suitable access and permissions while accessing data. Access controls include multi-factor authentication, single sign-on capabilities etc.",
      icon: <Fingerprint className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Mobile Application Management (MAM)",
      description: "As per the name, it deals with the apps as a whole. The installation, configuration, update of corporate apps on mobiles are monitored thoroughly. This can also include monitoring of BYOD devices.",
      icon: <AppWindow className="w-8 h-8 text-emerald-600" />
    },
    {
      title: "Mobile Content Management (MCM)",
      description: "One of the major components of EMM is MCM. Business documents and media files are dealt with securely through authorised tools. It supports multiple file formats including documents and media. These documents can be categorized systematically with the help of tags and then distribute the associated content as per the tags. It is highly secured and prevents users from sharing it with other devices or copying to other apps. Employing MCM on corporate devices reduces chances of data breach.",
      icon: <FileText className="w-8 h-8 text-orange-600" />
    }
  ];

  const benefits = [
    {
      title: "Increase in security",
      description: "With help of enterprise mobility solutions, best practices for mobile app security practices are followed and unauthorized access and malpractices can be avoided.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />
    },
    {
      title: "Time and Cost savings",
      description: "With easy and secure access to data and storage, retrieval of data is synchronized across your mobile systems with complete access.",
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Easy user and device management",
      description: "Each device is provisioned securely for easy retrieval of data. Required corporate and security protocols are followed in EMM and assigned to users. The de-provisioning is also taken care of, when an employee leaves.",
      icon: <Settings className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Portability & seamless content sharing",
      description: "With ease of usage, you get a systematic arrangement for data exchange and secure sharing allows to get uninterrupted content sharing. Any data can be accessed within a few clicks.",
      icon: <Share2 className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Expansion of horizon",
      description: "When your business challenges and important data can be accessed securely by employees, you save time, which allows to explore new horizons. Streamlined business operations through mobile platforms highlight scalability that drives business.",
      icon: <Globe className="w-6 h-6 text-red-500" />
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
            Enterprise Mobility Management
          </motion.h1>
          <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Simplify device management, secure corporate data, and empower your remote workforce.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              In the world of corporate and personally owned BYOD (bring your own device), Enterprise Mobility Management allows IT admins to simplify managing and securing data security. It combines user, applications and content management with data security to connect, initiate and simplify device management and configuration.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              In the world of remote working, conventional EMMs should provide employees and users with seamless internet access, use their VPN and access intranet data with ease.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How EMM works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How EMM Software Works?</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              It is an amalgamation of Mobile Device Management (MDM), Mobile Identity Management (MIM), Mobile Application Management (MAM) and Mobile Content Management (MCM).
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emmComponents.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gray-50 p-4 rounded-xl mr-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Goal & Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Our Goal */}
            <motion.div 
              {...fadeIn} 
              className="lg:col-span-1 bg-[#0B1F3A] rounded-3xl p-10 text-white shadow-xl relative overflow-hidden flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Target className="w-32 h-32 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 relative z-10">Our Goal</h3>
              <p className="text-blue-100 leading-relaxed text-lg relative z-10">
                With comprehensive mobile solutions, we assure you of a simpler, cost-effective and support to encourage BYOD devices. We can enable your enterprise to make the most of mobile technology in diverse industries and support major devices and platforms.
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div {...fadeIn} className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Benefits of EMM</h3>
              <div className="space-y-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 mr-4 flex-shrink-0 mt-1">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
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
            Secure Your Mobile Enterprise Today
          </motion.h2>
          <motion.p {...fadeIn} className="text-blue-100 mb-8 text-lg">
            Empower your workforce with comprehensive Enterprise Mobility Management.
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

export default EnterpriseMobilityServicePage;
