
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { type DynamicPageProps } from './DynamicPageTemplate';

const ServiceDesignB = ({
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
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Centered Dark Hero */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#051020] overflow-hidden flex items-center justify-center text-center min-h-[50vh]">
        <div className="absolute inset-0 pointer-events-none z-0">
          <img 
            src={backgroundImage} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Zig-Zag Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square">
                <div className="absolute inset-0 bg-[#0B1F3A]/20 mix-blend-multiply z-10" />
                <img 
                  src={overviewImage} 
                  alt={overviewHeading}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative block */}
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#C9A227] rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative z-10"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-8 leading-tight">
                {overviewHeading}
              </h2>
              <div className="text-gray-600 text-lg leading-relaxed space-y-6">
                {overviewDescription.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Masonry-Style Feature Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#0B1F3A] mb-6">{featuresHeading}</h2>
            <div className="w-24 h-1 bg-[#C9A227] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group ${idx % 2 !== 0 ? 'lg:translate-y-12' : ''}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0B1F3A]/5 flex items-center justify-center mb-8 group-hover:bg-[#0B1F3A] transition-colors duration-500">
                  <div className="text-[#0B1F3A] group-hover:text-[#C9A227] transition-colors duration-500 w-8 h-8">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-24 bg-[#C9A227]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-8">{callToActionTitle}</h2>
          <p className="text-xl text-[#0B1F3A]/80 mb-12">{callToActionSubtitle}</p>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-[#0B1F3A] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[#0B1F3A] transition-all shadow-xl hover:shadow-2xl group">
            Let's Talk <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDesignB;
