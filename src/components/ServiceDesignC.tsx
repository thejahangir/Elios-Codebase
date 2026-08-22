import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { type DynamicPageProps } from './DynamicPageTemplate';

const ServiceDesignC = ({
  title,
  subtitle,
  backgroundImage,
  overviewHeading,
  overviewDescription,
  overviewImage,
  featuresHeading,
  features,
  callToActionTitle = "Ready to transform your business?",
  callToActionSubtitle = "Let's discuss how our expertise can drive your next big initiative."
}: DynamicPageProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Fullscreen Glassmorphism Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt="Hero Background" 
            className="w-full h-full object-cover transform scale-105"
          />
          <div className="absolute inset-0 bg-[#0B1F3A]/60" />
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
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl drop-shadow-md">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Split Text / Minimalist Overview */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gray-50 -skew-x-12 transform origin-top-right z-0"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-5/12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-8 leading-tight">
                {overviewHeading}
              </h2>
              <div className="w-20 h-1 bg-[#C9A227] rounded-full mb-8"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-7/12"
            >
              <div className="text-gray-600 text-xl font-light leading-relaxed space-y-8">
                {overviewDescription.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className={idx === 0 ? "text-2xl font-normal text-gray-800" : ""}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
           <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
             <img src={overviewImage} alt="Overview" className="w-full h-full object-cover" />
           </div>
        </div>
      </section>

      {/* Minimalist Grid Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-[#0B1F3A] mb-16 text-center">{featuresHeading}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col group cursor-pointer"
              >
                <div className="flex items-center gap-6 mb-6 pb-6 border-b border-gray-100 group-hover:border-[#C9A227] transition-colors duration-300">
                  <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center text-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-white transition-colors duration-300 shrink-0">
                    {feature.icon || <CheckCircle2 />}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B1F3A]">{feature.title}</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal CTA */}
      <section className="py-32 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">{callToActionTitle}</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">{callToActionSubtitle}</p>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-[#C9A227] text-[#0B1F3A] px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[#0B1F3A] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
            Contact Our Team <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDesignC;
