// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Layout, Share2, Video, 
  MessageSquare, CheckCircle2, Zap, PlayCircle, Users
} from 'lucide-react';

const defaultHeroBg = "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const DigitalExperienceTechPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const webContentFeatures = [
    "Comprehensive web content management system to create, manage, and publish content.",
    "Advanced personalization, rapid site deployment, mobile and social tools.",
    "Deliver the right information to the right audience.",
    "Easy-to-manage targeted content for your organizations.",
    "Create content and publish websites in minutes.",
    "Present assets from cloud-based Watson Content Hub.",
    "Highlight your website assets with content targeting."
  ];

  const socialFeatures = [
    {
      title: "Social rendering",
      description: "Improves Connections integration by using IBM Web Content Manager features to query and render Connections content."
    },
    {
      title: "IBM Digital Data Connector (DDC)",
      description: "Integrates data from external data sources on your portal pages by using IBM Web Content Manager presentation components."
    },
    {
      title: "Community pages",
      description: "Associates a community in Connections with a portal page, linking all portlets, files, and other content."
    },
    {
      title: "Connections integration portlets",
      description: "The activity stream portlet brings the Connections Activity Stream experience to your WebSphere Portal pages."
    },
    {
      title: "Social Media Publisher",
      description: "Integrates with external social networks, supporting Connections, Facebook, LinkedIn, and Twitter."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Fullscreen Glassmorphism Hero - Kept exactly as requested */}
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
              Digital Experience
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl drop-shadow-md">
              Creating intuitive, engaging user journeys consistently across every digital touchpoint.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <Globe className="w-12 h-12 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Omni-Channel Customer Experiences</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
              We provide Digital experience platforms as, “Software to manage, deliver, and optimize experiences consistently across every digital touch point.” Our Digital Experience platform empowers you to create, manage and deliver engaging omni-channel digital customer experiences to virtually all audiences with responsive content, targeted offers, and consistent branding across web, mobile, and hybrid applications.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Our Optimized digital experiences make use of modern innovations including portals, web content management, social, and video to enable better business outcomes and seamless customer journeys.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Web Content Management */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Layout className="w-8 h-8 text-blue-600 mr-4" />
                Web Content Management
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                Our Web Content Platform accelerates digital content development and deployment across various web and mobile channels.
              </p>
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <p className="text-blue-900 font-medium">
                  With advanced personalization, rapid site deployment, mobile and social mobile tools, we help you deliver the right information to the right audience.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeIn}>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Content Capabilities</h3>
                <ul className="space-y-4">
                  {webContentFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portals and Enterprise Social */}
      <section className="py-20 bg-[#0B1F3A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <Share2 className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Portals & Enterprise Social</h2>
            <p className="text-blue-100 max-w-4xl mx-auto leading-relaxed text-lg font-light">
              The Social Digital Experience provided by the IBM social business platform includes social websites with social content, networking, and analytics—securely and in context of enterprise governance. Integrated social capabilities enable portal users to respond faster and more effectively to improve organizational effectiveness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialFeatures.map((feat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
              >
                <div className="bg-blue-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feat.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 text-red-500 rounded-full mb-8">
              <PlayCircle className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Video Integration
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
              The perfect opportunity to deliver an on-point visual message to an engaged audience in a fast-paced world. We help you discover how video can play a role in connecting with your customers.
            </p>
            <div className="flex justify-center gap-6">
              <div className="bg-gray-50 border border-gray-200 px-6 py-3 rounded-full font-medium text-gray-700 flex items-center">
                <Video className="w-5 h-5 mr-2 text-red-500" /> Video Integration
              </div>
              <div className="bg-gray-50 border border-gray-200 px-6 py-3 rounded-full font-medium text-gray-700 flex items-center">
                <Video className="w-5 h-5 mr-2 text-red-500" /> Live Videos
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section 
        className="relative py-24 bg-fixed bg-center bg-cover border-t-8 border-b-8 border-[#051020]"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
      >
        <div className="absolute inset-0 bg-[#0B1F3A]/90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-bold text-white mb-6">
            Elevate Your Customer Journey
          </motion.h2>
          <motion.p {...fadeIn} className="text-blue-100 mb-8 text-lg">
            Let our experts transform your digital presence across all touchpoints.
          </motion.p>
          <motion.a 
            {...fadeIn}
            href="/contact-us" 
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Project
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default DigitalExperienceTechPage;
