// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardCheck, Wrench, Sparkles, ArrowRightLeft, 
  Gauge, ShieldCheck, Rocket, ChevronRight
} from 'lucide-react';

const defaultHeroBg = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const LifeCycleManagementServicePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: "Application Assessment and Audit",
      description: "We use a capabilities maturity model (CMM) to assess and create an implementation roadmap to focus on priorities. Selection of the right ALM tools is inevitable for effectiveness, and our expert team makes sure to provide you with the right one.",
      icon: <ClipboardCheck className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Application Support and Maintenance",
      description: "An application is not fully developed when it’s in the production stage and errors can occur. Many times, it gets overlooked but is an integral part of the system. With continuous support and timely updates, we provide you support and how to get maximum benefit.",
      icon: <Wrench className="w-8 h-8 text-emerald-600" />
    },
    {
      title: "Application Enhancement",
      description: "We strive to provide you the best software design that’s advantageous to your business, is straightforward, and easy to maintain. Our enhancement procedures solve technical problems and offer operational efficiency.",
      icon: <Sparkles className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Application/System Migration",
      description: "Systems migrations are required when the legacy systems are outdated to match the latest technologies. To remain competitive in today’s market, migrations help in providing agility, improving the overall application, drive innovation and success. We help convert and migrate data from these repositories and integrate various tools.",
      icon: <ArrowRightLeft className="w-8 h-8 text-orange-600" />
    },
    {
      title: "Application Performance Management and Tuning",
      description: "With Eliostech’s lifecycle management services, you are ensured of high-quality applications with powerful performance. Continuous integration makes sure of the code after source control. We observe every web request and transaction to measure performance, you can be aware of which ones are slow and the ones that are accessed the most.",
      icon: <Gauge className="w-8 h-8 text-red-500" />
    },
    {
      title: "Application Security Analysis, Enhancement and Testing",
      description: "Product quality is essential to be built into its lifecycle to guarantee that they deliver well. With unit & integration tests, Manual Exploratory Testing, and Automated Functional Tests, you get an effective QA done. Your programs always remain secure with secure high-level applications that also lower the risk of a security breach. The tools and solutions we use, address security in every step of development: starting from design, deployment, testing, and maintenance stages.",
      icon: <ShieldCheck className="w-8 h-8 text-teal-600" />
    },
    {
      title: "Application Modernization",
      description: "With modern, agile, and proven technologies, we strive to offer rapid deliveries to offer a powerful user experience. Based on the business challenges, we create an application portfolio and modernization roadmap and re-architect applications. CI/CD automation is also enabled for development with DevOps processes.",
      icon: <Rocket className="w-8 h-8 text-pink-600" />
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
            Life Cycle Management Services
          </motion.h1>
          <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            At Eliostech, our ALM or Application Lifecycle Management Services offer a continuous innovative process to manage software applications. We ensure to provide a complete application with a thorough assessment, optimization, development, and maintenance.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Accelerate Digital Transformation</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our wide array of application lifecycle management services accelerate your digital transformation process while maintaining quality, speed and lowering costs in the long run. Using modern insights and leveraging technology, we analyze your existing system, make it collaborative, and enhance features to overcome issues.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group ${idx === 6 ? 'lg:col-span-3 lg:w-2/3 lg:mx-auto' : ''}`}
              >
                <div className="mb-6 bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
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
            Ready to Optimize Your Application Lifecycle?
          </motion.h2>
          <motion.p {...fadeIn} className="text-blue-100 mb-8 text-lg">
            Connect with Eliostech today and let us help you manage your software efficiently.
          </motion.p>
          <motion.a 
            {...fadeIn}
            href="/contact-us" 
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300"
          >
            Contact Us
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default LifeCycleManagementServicePage;
