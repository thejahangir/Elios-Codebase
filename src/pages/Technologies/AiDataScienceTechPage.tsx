// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, Database, LineChart, Network, 
  Lightbulb, ShieldCheck, PieChart, Activity
} from 'lucide-react';

const heroBg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const AiDataScienceTechPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const comparisons = [
    {
      title: "Data Analytics & Science",
      description: "Data analytics focuses on identifying data sets to find answers and discover trends for data-driven decisions (descriptive, prescriptive, diagnostic, predictive). Data science expands on this by including data modeling and the creation of algorithms and predictive models.",
      icon: <PieChart className="w-8 h-8 text-blue-600" />,
      color: "blue"
    },
    {
      title: "Artificial Intelligence (AI)",
      description: "AI refers to providing computing systems with the ability to reason, classify, and make decisions like human intelligence. With human qualities such as intent and adaptability, AI powers speech recognition, language translation, and image recognition.",
      icon: <BrainCircuit className="w-8 h-8 text-purple-600" />,
      color: "purple"
    },
    {
      title: "Machine Learning (ML)",
      description: "Machine learning is an approach towards achieving AI. It uses structured or unstructured data to understand patterns, generate rules, and make decisions automatically. From medical diagnostics to search engines, it saves time on manual labor.",
      icon: <Network className="w-8 h-8 text-emerald-600" />,
      color: "emerald"
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
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20"
          >
            <BrainCircuit className="w-8 h-8 text-blue-400" />
          </motion.div>
          <motion.h1 {...fadeIn} className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6">
            AI & Data Science
          </motion.h1>
          <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Build higher value technical solutions and transform information for customers worldwide by leveraging Artificial Intelligence.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
              With continuous data, we can help you unlock powerful insights that can help your business create higher revenue.
            </p>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 text-left">
              <p className="text-gray-700 leading-relaxed">
                Being an experienced data sciences organization, we can help you extract valuable insights from available data, understand the audience, reduce risks and simultaneously forecast demands. With the help of Eliostech’s experts, you can reduce cost overburden, save more and create innovative solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Power Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Unleash the Power of Your Most Valuable Asset: <span className="text-blue-600">Data</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                These days, data is available in a structured, unstructured, unused, fragmented form which is of no use. We focus on governance, monetization, and compliance along with data analysis for maximum benefits. Along with common solutions, we emphasize providing custom solutions depending on the business’s particular requirements.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div 
                {...fadeIn} 
                className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-orange-500"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Database className="w-6 h-6 text-orange-500 mr-3" />
                  Handling 'Data Exhaust'
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Unused information from transactions, connected devices, and loads of data creates ‘data exhaust’, but with streamlined efforts, it has numerous opportunities.
                </p>
              </motion.div>

              <motion.div 
                {...fadeIn} 
                transition={{ delay: 0.1 }}
                className="bg-[#0B1F3A] p-8 rounded-2xl shadow-lg border border-gray-800 text-white"
              >
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <Activity className="w-6 h-6 text-blue-400 mr-3" />
                  Fixing Fragmented Data
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Fragmented data is immobilized, but with the correct data supply chain and processes, it can be set right. We strive to provide actionable insights to provide you a competitive advantage and increase resilience.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Comparisons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Understanding the Ecosystem
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              The difference between Data Science, Machine Learning (ML) & Artificial Intelligence (AI).
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comparisons.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-gray-50 rounded-3xl p-8 border hover:shadow-lg transition-all duration-300 border-t-4 border-t-${item.color}-500`}
              >
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6 border border-gray-100">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
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
            Ready to Unlock Powerful Insights?
          </motion.h2>
          <motion.p {...fadeIn} className="text-blue-100 mb-8 text-lg">
            Connect with our data scientists today and turn your fragmented data into a competitive advantage.
          </motion.p>
          <motion.a 
            {...fadeIn}
            href="/contact-us" 
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Journey
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default AiDataScienceTechPage;
