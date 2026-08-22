// @ts-nocheck
import React from 'react';


import { motion } from 'framer-motion';
import { 
  Cloud, RefreshCw, Shield, Activity, 
  Settings, Server, Box, GitBranch, 
  CheckCircle2, ChevronRight 
} from 'lucide-react';

const defaultHeroBg = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const CloudDevopsServicePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    { title: "Cloud Architecture, Design & Strategy", icon: <Cloud className="w-6 h-6 text-blue-600" /> },
    { title: "CI/CD Pipeline", icon: <RefreshCw className="w-6 h-6 text-blue-600" /> },
    { title: "Security Management", icon: <Shield className="w-6 h-6 text-blue-600" /> },
    { title: "Monitoring & Infra Management", icon: <Activity className="w-6 h-6 text-blue-600" /> },
    { title: "DevOps Tool Chain", icon: <Settings className="w-6 h-6 text-blue-600" /> },
    { title: "Enterprise Tooling", icon: <Server className="w-6 h-6 text-blue-600" /> },
    { title: "Deployment Architecture", icon: <GitBranch className="w-6 h-6 text-blue-600" /> },
    { title: "Container Strategy", icon: <Box className="w-6 h-6 text-blue-600" /> }
  ];

  const whyUs = [
    "Years of DevOps experience in helping organizations of all sizes.",
    "Expert solution architects in CI/CD, well-versed in agile development.",
    "Best Practices followed to reduce time to market.",
    "Market-driven approach to optimize resources and infrastructure.",
    "State of the art engineering excellence."
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
            Cloud & DevOps Services
          </motion.h1>
          <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Collaborate with Eliostech to power your business, drive efficiency, and improve the agility of operations.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Robust Infrastructure That Delivers</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              With a suitable Cloud & DevOps consulting & infrastructure services provider, you get the expertise for a robust application that delivers. These services support selection, deployment, and facilitate continuous management of various cloud-based resources. In simple words, it’s the collaboration of the development and operations team for reliable solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              Combined with our expertise, you get unmatched performance with flexibility and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="bg-blue-50 p-3 rounded-lg mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                  {React.cloneElement(service.icon, { className: "w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" })}
                </div>
                <h3 className="font-bold text-gray-900 text-sm leading-snug">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed CI/CD Explanations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div {...fadeIn} className="bg-blue-50 p-10 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <RefreshCw className="w-32 h-32 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">
              Continuous Integration (CI) and Continuous Delivery (CD)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 relative z-10">
              Our experts help you build an operational automation of the environment that reflects DevOps capabilities. With Continuous Integration, you easily work on the same project trunk; merge code and its changes into a single repository. Another feature of CI is, it executes automated builds and does test runs each time a member makes edits to the existing versions. You can identify bugs and fix them in time, merge conflicts and resolve duplicates easily.
            </p>
            <p className="text-gray-700 leading-relaxed relative z-10">
              Continuous deployment or delivery on the other hand allows you to schedule and deploy in suitable infrastructure environments. You can run changes easily through the CI/CD pipeline and deploy changes directly to production without any bugs or delays.
            </p>
          </motion.div>

          <motion.div {...fadeIn}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              How Continuous Integration (CI) Improves Collaboration and Quality?
            </h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Continuous Integration is considered to be one of the best practices for application development that allows frequent code changes reliably. With the version control repository of CI developers’ practice and a lot of mechanics and automation working together, it becomes easier to identify bugs, quality issues on the minimal level rather than at the larger level. Our DevOps team practices various techniques to control the features and code changes continuously.
              </p>
              <div className="bg-[#0B1F3A] p-6 rounded-2xl shadow-lg border border-gray-800">
                <p className="text-blue-100 italic">
                  "With CI, you can not only package software & database components but also execute testing. With the help of these tests, developers can get feedback about their code changes effect."
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Us?</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </motion.div>
          
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <ul className="space-y-4">
              {whyUs.map((point, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{point}</span>
                </motion.li>
              ))}
            </ul>
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
            Power Your Business Today
          </motion.h2>
          <motion.p {...fadeIn} className="text-blue-100 mb-8 text-lg">
            Embrace the speed and agility of Cloud & DevOps with Eliostech.
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

export default CloudDevopsServicePage;
