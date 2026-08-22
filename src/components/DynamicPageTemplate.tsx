import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import InnerPageHero from './InnerPageHero';

export interface PageFeature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface DynamicPageProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  overviewHeading: string;
  overviewDescription: string;
  overviewImage: string;
  featuresHeading: string;
  features: PageFeature[];
  callToActionTitle?: string;
  callToActionSubtitle?: string;
}

const DynamicPageTemplate: React.FC<DynamicPageProps> = ({
  title,
  subtitle,
  backgroundImage,
  overviewHeading,
  overviewDescription,
  overviewImage,
  featuresHeading,
  features,
  callToActionTitle = "Ready to transform your business?",
  callToActionSubtitle = "Let's discuss how our experts can help you achieve your goals."
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <InnerPageHero 
        title={title} 
        subtitle={subtitle}
        backgroundImage={backgroundImage}
      />

      {/* Overview Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-[#C9A227] transform -translate-x-4 translate-y-4 rounded-3xl" />
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white">
                <img 
                  src={overviewImage} 
                  alt={title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="w-16 h-1 bg-[#C9A227] mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-8 leading-tight">
                {overviewHeading}
              </h2>
              <div className="text-gray-600 text-lg leading-relaxed space-y-6">
                {/* Splitting the description by double newline to render paragraphs if provided */}
                {overviewDescription.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              
              <div className="mt-10">
                <Link to="/contact" className="inline-flex items-center gap-3 text-[#0B1F3A] font-bold uppercase tracking-wider hover:text-[#C9A227] transition-colors group">
                  <span>Speak to an expert</span>
                  <div className="w-10 h-10 rounded-full bg-[#0B1F3A] text-white flex items-center justify-center group-hover:bg-[#C9A227] transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Features/Capabilities Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-6">{featuresHeading}</h2>
            <div className="w-24 h-1 bg-[#C9A227] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#C9A227]/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#0B1F3A]/5 text-[#C9A227] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#C9A227] group-hover:text-white transition-all duration-300">
                  {feature.icon || <CheckCircle2 className="w-7 h-7" />}
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4 group-hover:text-[#C9A227] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0B1F3A] relative overflow-hidden">
        {/* Abstract Background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-2 border-white border-dashed animate-spin-slow"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full border-4 border-white"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {callToActionTitle}
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {callToActionSubtitle}
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-[#C9A227] hover:bg-white text-[#0B1F3A] font-bold text-lg px-12 py-5 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Let's Talk
          </Link>
        </div>
      </section>

    </div>
  );
};

export default DynamicPageTemplate;
