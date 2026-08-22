// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, Settings, FileText, CheckCircle2, 
  Map, TrendingUp, Lightbulb, Zap, PenTool
} from 'lucide-react';

const heroBg = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const ArchitecturalWorkshopsServicePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const valueAddedServices = [
    {
      title: "Health Check Services",
      description: "Architectural Health Check Services for your IT platform.",
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />
    },
    {
      title: "Identify Gaps",
      description: "Identify the loops & gaps with a comprehensive technical evaluation process.",
      icon: <Lightbulb className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Re-engineering Solutions",
      description: "Architectural solutions & re-engineering services to leverage.",
      icon: <Settings className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Custom Frameworks",
      description: "Customise our use-cases, frameworks with best practices to optimize the performance with standard SOP.",
      icon: <PenTool className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Comprehensive Documentation",
      description: "Detailed documentation & guidelines for seamless follow-up.",
      icon: <FileText className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Strategic Roadmaps",
      description: "Different models of solutions to solve complex Enterprise architectural issues, assessing you in building road maps concerning budget & time concerns, irrespective to technology partners.",
      icon: <Map className="w-6 h-6 text-indigo-500" />
    },
    {
      title: "ROI & Quality Improvement",
      description: "Improvement in quality of the software services with fasten ROI in IT.",
      icon: <TrendingUp className="w-6 h-6 text-pink-500" />
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0B1F3A]">
                <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Hero Background" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 {...fadeIn} className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6">
            Architectural Workshops
          </motion.h1>
          <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Enterprise architectural workflow enables strategic change and streamlines businesses.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
              Adopting a solid plan is essential for the organization to become agile and responsive. With our help, you would be able to leverage new technologies and update legacy systems.
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 shadow-sm">
              <Zap className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <p className="text-lg text-blue-900 font-medium">
                Our architectural workshops provide insight from industry experts which can help you support transformational efforts easily.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Added Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Building className="w-8 h-8 text-blue-600 mr-3" />
              Our Value-Added Services
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueAddedServices.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-gray-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-gray-100">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
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
            Transform Your Enterprise Architecture
          </motion.h2>
          <motion.p {...fadeIn} className="text-blue-100 mb-8 text-lg">
            Connect with our industry experts to start planning your technical roadmap today.
          </motion.p>
          <motion.a 
            {...fadeIn}
            href="/contact-us" 
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300"
          >
            Schedule a Workshop
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default ArchitecturalWorkshopsServicePage;
