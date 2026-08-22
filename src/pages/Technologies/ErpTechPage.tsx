// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, Users, Server, Cloud, Lightbulb, 
  Settings, Globe, Shield, RefreshCw, Layers, CheckCircle2
} from 'lucide-react';

const defaultHeroBg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const ErpTechPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const augmentationList = [
    "Selective Skillful Experience",
    "Reinvented Remuneration",
    "Undemanding Resource Management",
    "Project Handling"
  ];

  const managedServices = [
    "Upgrades",
    "Customizations",
    "Managed services",
    "New implementations"
  ];

  const eeamServices = [
    "Platform consolidation",
    "Health checks & workshops",
    "IBM Maximo implementations",
    "Integration with Watson",
    "Migration & Up-gradation",
    "Webservices Mobility: Integrating with your devices",
    "Your hat program: Plan, design, build, deploy, and train with demos"
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
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
              Enterprise Resource Planning
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl drop-shadow-md">
              Unleash the full potential of your enterprise operations with End-to-End ERP solutions, Staff Augmentation, and Intelligent Asset Management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SAP Staffing Services */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-2xl mb-6">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">SAP Staffing Services</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
              In the technology ecosystem, due to dynamicity and fleet, major changing businesses have subdued the use of ERP Consulting Services and trended in In-House Management Systems. Hence the benefits of an ERP System can only be realized by linking professional candidates' profiles in the most efficient and cost-effective style.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
              Elios, being an end-to-end ERP marketplace, shares its knowledge of different ERP systems to its pool of consultants at our clients' timeframe. Both enterprises & consumers are expanding in the growing market with agility. We have various use cases on smart devices in Manufacturing, Automotive, Households, and Healthcare.
            </p>
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl">
              <p className="text-blue-900 font-medium">
                Elios Strategic Asset Management solutions offer assessments to manage your cloud, mobility, analytics, enterprise connectivity, and future pipeline initiatives. We help you in requirement gathering, design, build, deployment, and give proper knowledge transition to your team.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid: Augmentation & Managed Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Staff Augmentation */}
            <motion.div {...fadeIn} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
                ERP Staff Augmentation
              </h3>
              <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider font-semibold">
                Contract, Contract-to-hire, Full Time & Remote
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Elios provides quality solutions in terms of ERP Staff Augmentation services that help to bridge the skill gap within your organization. We help organizations who need ERP experts to train their workforce about the use of cloud ERP solutions.
              </p>
              <h4 className="font-bold text-gray-900 mb-4">Services Include:</h4>
              <ul className="space-y-3">
                {augmentationList.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 bg-gray-50 px-4 py-3 rounded-lg border border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Managed Services */}
            <motion.div {...fadeIn} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Server className="w-8 h-8 text-emerald-600 mr-3" />
                ERP Managed Services
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Enterprise applications are essential, but maintaining and customizing them can be time-consuming and expensive. Whether using ERP systems to streamline operations or make data-driven decisions, you need confidence that development work is done professionally.
              </p>
              <h4 className="font-bold text-gray-900 mb-4">We offer a full range of services:</h4>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {managedServices.map((item, idx) => (
                  <div key={idx} className="flex items-center text-gray-700 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                <strong>24x7x365 Support:</strong> Available by phone, email, or chat. We proactively monitor the overall health of your IT environment to ensure system integrity and availability.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Solutions & Consulting */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div {...fadeIn} className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100/50 hover:bg-blue-50 transition-colors">
              <Cloud className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">ERP On-Demand Services</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                On-Demand ERP refers to various cloud ERP subscription models, the most popular being SaaS. With on-demand, you do not shoulder the expense of infrastructure and hardware, and you are not responsible for an IT team to keep everything operating smoothly. You will have a monthly subscription and updates will be automatic.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="bg-purple-50/50 p-8 rounded-2xl border border-purple-100/50 hover:bg-purple-50 transition-colors">
              <Lightbulb className="w-10 h-10 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">ERP Workshop</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our implementation workshop allows you and your team to understand the scope of an ERP project. We offer best practices and tools to allow your team to focus and be successful. We break down your processes so they are crystal clear, saving you time and money during implementation.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="bg-emerald-50/50 p-8 rounded-2xl border border-emerald-100/50 hover:bg-emerald-50 transition-colors">
              <Settings className="w-10 h-10 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Solution Design with R&D</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                During the system design phase, the Elios R&D team recommends how the ERP system will be configured to support your organizational processes. If there are processes the ERP system does not support out of the box, they will suggest customizations or third-party solutions.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* EEAM Section */}
      <section className="py-20 bg-[#0B1F3A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Globe className="w-8 h-8 text-blue-400 mr-4" />
                Elios Enterprise Asset Management
              </h2>
              <p className="text-blue-100 leading-relaxed mb-6 font-light">
                EEAM helps you gain more insights in monitoring and visibility into your high-priority assets, which can optimize the utilization of Assets in a better way, maximizing durability.
              </p>
              <p className="text-blue-100 leading-relaxed mb-6 font-light">
                Watson IoT Platform better understands your industry needs and puts you in top emerging market space. EEAM provides full-length lifecycle support to assets, maximizing customer expectations with secure design and control features on-premise and in the cloud.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-white">ERP Implementation & Global Rollouts</h3>
                <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
              </div>
            </motion.div>

            <motion.div {...fadeIn}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">EEAM Services</h3>
                <ul className="space-y-4">
                  {eeamServices.map((service, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <div className="bg-blue-500/20 p-1 rounded-md mr-4 mt-0.5">
                        <Layers className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-sm leading-relaxed">{service}</span>
                    </li>
                  ))}
                </ul>
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
            Optimize Your Operations Today
          </motion.h2>
          <motion.p {...fadeIn} className="text-blue-100 mb-8 text-lg">
            Let our experts help you design, implement, and manage your ERP ecosystem.
          </motion.p>
          <motion.a 
            {...fadeIn}
            href="/contact-us" 
            className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300"
          >
            Schedule a Consultation
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default ErpTechPage;
