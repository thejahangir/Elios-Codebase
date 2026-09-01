import { motion } from 'framer-motion';
import { Target, Users, Cloud, BarChart, Settings, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const defaultHeroBg = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const CrmServicesPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const platforms = [
    {
      name: "Salesforce",
      title: "World's #1 CRM Platform",
      description: "Harness the power of Salesforce to unite your marketing, sales, commerce, service, and IT teams from anywhere. We provide end-to-end implementation, customization, and integration services for Sales Cloud, Service Cloud, Marketing Cloud, and beyond.",
      features: ["Custom Lightning Components", "Apex & Visualforce Development", "Third-party Integrations", "Data Migration & Clean-up"],
      icon: <Cloud className="w-10 h-10 text-blue-500" />
    },
    {
      name: "Zoho CRM",
      title: "Comprehensive Business Management",
      description: "Empower your organization with Zoho's unified ecosystem. We help businesses of all sizes deploy, configure, and optimize Zoho CRM and the wider Zoho One suite to automate operations, engage customers, and analyze performance metrics effectively.",
      features: ["Workflow Automation", "Custom Modules Creation", "Zoho Creator Apps", "Omnichannel Engagement"],
      icon: <Settings className="w-10 h-10 text-red-500" />
    },
    {
      name: "HubSpot",
      title: "Inbound Marketing & Sales Built Right",
      description: "Scale your business with HubSpot's powerful inbound marketing and sales platform. From setting up the CRM Hub to configuring complex marketing automation pipelines, we ensure your teams have the frictionless tools they need to convert leads.",
      features: ["Marketing Automation", "Sales Pipeline Setup", "HubSpot CMS Integration", "Custom Reporting Dashboards"],
      icon: <BarChart className="w-10 h-10 text-orange-500" />
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0B1F3A]">
        <div className="absolute inset-0 z-0">
          <img src={defaultHeroBg} alt="CRM Hero Background" className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 mb-6 backdrop-blur-sm">
            <Users className="w-4 h-4 text-[#C9A227]" />
            <span className="text-white/90 text-sm font-semibold tracking-wide uppercase">Customer Experience</span>
          </motion.div>
          <motion.h1 {...fadeIn} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6">
            CRM Services & Implementation
          </motion.h1>
          <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Elevate your customer relationships and streamline your sales operations. We provide expert consulting, implementation, and support for leading CRM platforms to drive your business growth.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Unlock the Value of Your Customer Data</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Implementing a CRM is more than just adopting a new software tool; it's about transforming how your entire business interacts with customers. Whether you are looking for enterprise-scale architecture or a nimble solution for a growing team, our CRM experts tailor platforms to fit your unique workflows, ensuring high adoption rates and measurable ROI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-[#C9A227] font-semibold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
            <h3 className="text-4xl font-bold text-[#0B1F3A] mb-4">Leading CRM Platforms</h3>
            <div className="w-24 h-1 bg-[#0B1F3A] mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {platforms.map((platform, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col"
              >
                <div className="p-8 pb-6 border-b border-gray-50">
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
                    {platform.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{platform.name}</h4>
                  <p className="text-[#C9A227] font-medium text-sm tracking-wide">{platform.title}</p>
                </div>
                <div className="p-8 pt-6 flex-grow flex flex-col">
                  <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                    {platform.description}
                  </p>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-[#C9A227]" /> Core Capabilities
                    </h5>
                    <ul className="space-y-3">
                      {platform.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section 
        className="relative py-24 bg-fixed bg-center bg-cover border-b-8 border-[#051020]"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
      >
        <div className="absolute inset-0 bg-[#0B1F3A]/90"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#C9A227]/30 blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to streamline your customer journey?
          </motion.h2>
          <motion.p {...fadeIn} className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can customize a CRM solution that aligns perfectly with your sales and marketing objectives.
          </motion.p>
          <motion.div {...fadeIn}>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A227] text-[#0B1F3A] rounded-full font-bold hover:bg-white transition-colors duration-300">
              Talk to a CRM Expert <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CrmServicesPage;
