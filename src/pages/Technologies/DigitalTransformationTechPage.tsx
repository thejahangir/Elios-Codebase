// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Users, Target, Zap, LayoutTemplate, Activity
} from 'lucide-react';

const defaultHeroBg = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const DigitalTransformationTechPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const benefits = [
    {
      title: "Increases Productivity",
      description: "Optimize workflows and reduce labor costs through intelligent automation.",
      icon: <TrendingUp className="w-8 h-8 text-emerald-500" />
    },
    {
      title: "Improves Customer Experience",
      description: "Deliver seamless, digital-first interactions that attract and retain customers.",
      icon: <Users className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Makes You Competitive",
      description: "Evolve your business processes to stay ahead in a rapidly changing market.",
      icon: <Target className="w-8 h-8 text-purple-500" />
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
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20"
          >
            <Activity className="w-8 h-8 text-blue-400" />
          </motion.div>
          <motion.h1 {...fadeIn} className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6">
            Digital Transformation
          </motion.h1>
          <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Evolve your business processes with cutting-edge digital technologies.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Transforming Every Aspect <br className="hidden md:block"/> of Your Business
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
              Using various digital technologies to evolve your business processes is digital transformation. It provides answers to every aspect of business—how to strategize, implement a plan, attract and retain a customer, and operate smoothly.
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 shadow-sm">
              <Zap className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <p className="text-lg text-blue-900 font-medium">
                The goal of digital transformation has its own specific goals: to improve your current processes and drive sustainable growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Benefits</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-100 shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
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
            Ready to Evolve?
          </motion.h2>
          <motion.p {...fadeIn} className="text-blue-100 mb-8 text-lg">
            Strategize, implement, and operate smoothly with our digital transformation experts.
          </motion.p>
          <motion.a 
            {...fadeIn}
            href="/contact-us" 
            className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Transformation
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformationTechPage;
