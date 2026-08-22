// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, RefreshCcw, HardDrive, Cloud, CheckCircle2,
  MonitorPlay, Server, Database, Clock, Users, Laptop
} from 'lucide-react';

const defaultHeroBg = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const ApplicationDevelopmentServicePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white min-h-screen font-sans">
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
              Application Development Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl drop-shadow-md">
              Modernize legacy applications to drive revenue. Achieve agility and lower risk with our automation-powered, cloud-native solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Key Expertise</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Legacy Modernization */}
            <motion.div {...fadeIn} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <RefreshCcw className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Legacy Modernisation</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Transforming legacy applications is essential. Leverage technology for real-time insights and powerful decision-making. Our automation-powered services add scalability & reliability to your systems to drive high profits and revenue.
              </p>
            </motion.div>

            {/* Platform Migration */}
            <motion.div {...fadeIn} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <HardDrive className="w-10 h-10 text-emerald-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Platform Migration & Consolidation</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Our experts have experience working with legacy systems with critical data from various platforms. We help you consolidate business data, plan and execute migrations from cloud models, and improve governance. Data validation at each step ensures integrity and increased efficiency.
              </p>
            </motion.div>

            {/* Custom App Dev */}
            <motion.div {...fadeIn} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Code className="w-10 h-10 text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Application Development</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Out-of-the-box solutions may not always work for every business requirement. By working on continuous integration & delivery, our experts work on changes stored on a central repository, optimizing your advanced tech integrated solutions regularly.
              </p>
            </motion.div>

            {/* Cloud Migration */}
            <motion.div {...fadeIn} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Cloud className="w-10 h-10 text-orange-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">On-Premise to Cloud Migration</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We distribute your migration requirements into phases. It’s an iterative process comprised of automation, predictability, and repeatability. With complete solutions regarding the entire migration process, we help reduce your workload and migrate efficiently.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Capabilities Checklist & Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">We can support you with:</h2>
              <ul className="space-y-4">
                {[
                  "Compliance Checks",
                  "Web/Application Server Options",
                  "Application Design & Architecture Modelling",
                  "Application Development & Deploying (In Multiple Platforms)",
                  "Application Testing & Automation",
                  "Application Support, Maintenance & Enhancements",
                  "End user Training and User Manual Creation"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeIn} className="space-y-8">
              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Laptop className="w-6 h-6 text-blue-600 mr-3"/> The Support System
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Application systems consist of user interface, business logics as well as a database. User interface is one of the most important parts of an application system as it interacts directly with the user. It may contain web pages, reports or a voice recognition device too.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">24/7 Round the Clock</h4>
                      <p className="text-sm text-gray-600">Our team helps monitor and input issues to move and assign to the support team while providing solutions to basic and generic problems.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Our Support Team Extension</h4>
                      <p className="text-sm text-gray-600">We have support on multiple levels in case of pending issues, and if solutions are not assigned on-time, we will interface with client teams to resolve them.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Technology Stack Cards */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Stacks</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-sm">
              We leverage enterprise-grade technologies to build robust, scalable, and high-performance applications tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Java Ecosystem */}
            <motion.div {...fadeIn} className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
              
              <div className="p-8 pb-0 flex items-center justify-between">
                <div>
                  <h3 className="text-gray-900 font-bold text-3xl tracking-tight">Java / J2EE</h3>
                  <p className="text-blue-600 font-medium text-sm mt-2 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                    Enterprise ecosystem
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-2xl shadow-inner">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              
              <div className="px-8 mt-8 mb-2">
                <div className="w-full h-px bg-gradient-to-r from-blue-600/20 via-blue-600/5 to-transparent"></div>
              </div>
              
              <div className="p-8 space-y-8">
                {/* Tier */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-50 p-2 rounded-lg mr-3">
                      <MonitorPlay className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-gray-900">Presentation Tier</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["HTML", "JSP", "JSF", "Ajax", "Struts", "Velocity", "Tapestry", "XML", "XSLT"].map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-gray-50 text-gray-700 text-xs font-medium rounded-md border border-gray-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full h-px bg-gray-100"></div>

                {/* Tier */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-50 p-2 rounded-lg mr-3">
                      <Server className="w-5 h-5 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-gray-900">Business Tier</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Servlets", "EJB", "Spring", "Web Services", "POJO"].map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-gray-50 text-gray-700 text-xs font-medium rounded-md border border-gray-200 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full h-px bg-gray-100"></div>

                {/* Tier */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-emerald-50 p-2 rounded-lg mr-3">
                      <Database className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h4 className="font-bold text-gray-900">Persistence Tier</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Hibernate", "JDBC", "TopLink", "JBO", "JPA"].map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-gray-50 text-gray-700 text-xs font-medium rounded-md border border-gray-200 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Microsoft Ecosystem */}
            <motion.div {...fadeIn} className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
              
              <div className="p-8 pb-0 flex items-center justify-between">
                <div>
                  <h3 className="text-gray-900 font-bold text-3xl tracking-tight">Microsoft</h3>
                  <p className="text-blue-600 font-medium text-sm mt-2 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                    .NET ecosystem
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-2xl shadow-inner">
                  <Laptop className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              
              <div className="px-8 mt-8 mb-2">
                <div className="w-full h-px bg-gradient-to-r from-blue-600/20 via-blue-600/5 to-transparent"></div>
              </div>
              
              <div className="p-8 space-y-8">
                {/* Tier */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-50 p-2 rounded-lg mr-3">
                      <MonitorPlay className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-gray-900">Presentation Tier</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Console", "Windows Forms", "ASP .NET", "HTML", "VBA", "XML", "XSLM"].map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-gray-50 text-gray-700 text-xs font-medium rounded-md border border-gray-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full h-px bg-gray-100"></div>

                {/* Tier */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-50 p-2 rounded-lg mr-3">
                      <Server className="w-5 h-5 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-gray-900">Business Tier</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Class Library", ".DLL", "WCF", "Web Services"].map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-gray-50 text-gray-700 text-xs font-medium rounded-md border border-gray-200 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full h-px bg-gray-100"></div>

                {/* Tier */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-emerald-50 p-2 rounded-lg mr-3">
                      <Database className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h4 className="font-bold text-gray-900">Persistence Tier</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Hibernate", "JDBC", "TopLink", "JBO", "JPA"].map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-gray-50 text-gray-700 text-xs font-medium rounded-md border border-gray-200 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
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
            Migrate and Develop Confidently
          </motion.h2>
          <motion.p {...fadeIn} className="text-blue-100 mb-8 text-lg">
            Migrate confidently with Eliostech today. Contact us to know more.
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

export default ApplicationDevelopmentServicePage;
