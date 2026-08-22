// @ts-nocheck
import React from 'react';


import { motion } from 'framer-motion';
import { 
  Target, Search, Filter, UserCheck, 
  Briefcase, Users, Zap, Lightbulb, CheckCircle2, ChevronRight
} from 'lucide-react';

const defaultHeroBg = "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const RecruitmentRpoServicePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const industries = [
    "Information Technology", "Banking and Finance", "Recruitment Process Outsourcing (RPO)",
    "Business Process Outsourcing (BPO)", "Pharmaceutical and Life sciences", "Automobile & Auto Components",
    "Education", "Electrical & Electronics", "FMCG", "Healthcare", "Retail", "Hospitality"
  ];

  const processSteps = [
    {
      title: "Set up Strategy",
      description: "Our team of RPO experts analyzes your business process in detail, collects requirements of the resources needed and initiates a step-by-step process to hire skilled talent. We make sure to understand the requirements to provide best-in-class recruits.",
      icon: <Target className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Start Sourcing",
      description: "We start smart sourcing by identifying and working on the exact requirements you have, assess resume effectiveness, and explore a wide search accordingly.",
      icon: <Search className="w-8 h-8 text-emerald-600" />
    },
    {
      title: "Screening",
      description: "We streamline the RPO hiring process by optimizing speed and accuracy to find the perfect talent for the role. We engage qualified candidates who have the latest industry knowledge to offer you a competitive advantage over others.",
      icon: <Filter className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Selection & Interview",
      description: "We select the perfect candidate based on a series of interviews to filter the best one. Your time is saved and hassles are minimal. The selected candidate is then explained about the roles, responsibilities and made aware of all functions he/she will look after.",
      icon: <UserCheck className="w-8 h-8 text-orange-600" />
    }
  ];

  const models = [
    {
      title: "Enterprise End-to-End RPO",
      description: "Eliostech’s enterprise RPO fulfills business requirements as it comes with full-service offerings that include sourcing, engaging, interviews, hiring, branding, and onboarding. Fulfill the talent acquisition needs to design and implement a customized solution.",
      icon: <Briefcase className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Project RPO",
      description: "It proves beneficial when a business requires several hires within a short timeline. It is the perfect solution for business initiatives like product launching, short-term contracts, specific jobs, etc. With our help, you get an exclusive team for specialized projects.",
      icon: <Briefcase className="w-8 h-8 text-blue-600" />
    },
    {
      title: "On-Demand RPO",
      description: "As the name suggests, whenever there is a dynamic requirement depending on the business. An organization may have gained several contracts all of a sudden and have a huge need for recruits, but this need may go down after a quarter or few months. On-demand RPO allows you to manage such rapid changes of skilled talent requirements, and with our expert team, we offer you talent pooling with an intense search that fulfills it.",
      icon: <Zap className="w-8 h-8 text-blue-600" />
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
            Recruitment & RPO Services
          </motion.h1>
          <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Get the global edge on your offshore recruitment process outsourcing requirements and fulfill business needs by opting for quality RPO services from Eliostech.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Elevate Your Hiring Process</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              With quality hiring, we can improve your client base with extensive local and global knowledge. You can save your recruiting costs by 50% by opting for recruitment services from us. Working as an extension of yours, we handle end-to-end recruitment needs based on the industry and which meet client demands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our RPO Process</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative group hover:shadow-md transition-all duration-300"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 text-gray-900 text-6xl font-black">
                  {idx + 1}
                </div>
                <div className="mb-6 bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RPO Models */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">RPO Models</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((model, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0B1F3A] rounded-2xl overflow-hidden shadow-lg border border-gray-800 flex flex-col h-full"
              >
                <div className="p-8 pb-0">
                  <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    {React.cloneElement(model.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{model.title}</h3>
                </div>
                <div className="p-8 pt-4 flex-grow">
                  <p className="text-blue-100 leading-relaxed text-sm">
                    {model.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & RPO vs BPO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Industries */}
          <motion.div {...fadeIn}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Users className="w-6 h-6 text-blue-600 mr-3" />
              Industries We Focus On
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industries.map((industry, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{industry}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RPO vs BPO */}
          <motion.div {...fadeIn}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Lightbulb className="w-6 h-6 text-blue-600 mr-3" />
              How RPO Differs from BPO?
            </h3>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 rounded-l-2xl"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                In the <strong>Recruitment Process Outsourcing (RPO)</strong> model, the third-party provides recruitment and acts as an extension of the HR department. It’s beneficial for high-volume recruitment short and medium roles on a project-to-project basis, or fully replacing all internal recruitment in an organization.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Business Process Outsourcing (BPO)</strong> is when a non-essential business’s contract is handed to a third-party provider. BPO is the outsourcing of a process – it can be either front office or back-office work.
              </p>
              <p className="text-gray-900 font-medium bg-blue-50 p-4 rounded-xl">
                RPO never ends with recruitment like traditional BPO but organizes the whole recruiting process. Contact us today to transform your recruitment process and witness it grow.
              </p>
            </div>
          </motion.div>

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
            Transform Your Recruitment Process
          </motion.h2>
          <motion.p {...fadeIn} className="text-blue-100 mb-8 text-lg">
            Save time, lower costs, and hire the best talent. Let Eliostech be an extension of your HR team.
          </motion.p>
          <motion.a 
            {...fadeIn}
            href="/contact-us" 
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300"
          >
            Contact Us Today
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default RecruitmentRpoServicePage;
