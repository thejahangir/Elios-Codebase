import { motion } from 'framer-motion';
import { Cpu, ArrowRight, CheckCircle2, Smartphone, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const defaultHeroBg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const BpmAutomationTechPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const appianFeatures = [
    "It has the process management capabilities for building the process and task orchestration efficaciously.",
    "It supports the rapid development and deployment of natively mobile business applications.",
    "It possesses a host of business tools and dynamic user interfaces which work instantly and effectively across the mobile and web devices.",
    "Appian records have the capability to provide everything relevant and topical from across the systems.",
    "It supports multichannel deployment and rapid adoption."
  ];

  const pegaFeatures = [
    "Standards-based user interfaces.",
    "Enterprise-level scalability.",
    "Automatic application code generation.",
    "Intuitive design tools for capturing business objectives.",
    "Easier integration with other business platforms, including collection systems and CRM software.",
    "Industry specific solution frameworks such as banking BPM for accelerating ROI."
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0B1F3A]">
        <div className="absolute inset-0 z-0">
          <img src={defaultHeroBg} alt="BPM Hero Background" className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 mb-6 backdrop-blur-sm">
            <Cpu className="w-4 h-4 text-[#C9A227]" />
            <span className="text-white/90 text-sm font-semibold tracking-wide uppercase">Process Automation</span>
          </motion.div>
          <motion.h1 {...fadeIn} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6">
            BPM Services
          </motion.h1>
          <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Manage and automate your business processes to attain high productivity, efficiency, and cost benefits with Elios.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Business Process Management</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              BPM (Business Process Management) is an ideal way to manage and automate your business processes to attain high productivity, efficiency and cost benefits. Effectiveness of the BPM has direct bearing on the very success of the business, hence Business Processes need to precisely reflect & follow the business model.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              BPM offers an organization a structured and efficient way to manage its business processes while automating the ones which are iterative in nature. This delivers exceptional results by enhancing the overall productivity, measurable results and faster ROIs.
            </p>
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-lg text-blue-900 font-medium">
                Being the BPM Consulting and staffing services provider, we deliver the best services through an array of BPM suites including Appian, Mendix and Pega.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Appian */}
          <div className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeIn}>
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 border border-blue-200">
                  <Smartphone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-4xl font-bold text-[#0B1F3A] mb-4">Appian</h3>
                <h4 className="text-xl text-[#C9A227] font-semibold mb-6">Appian BPM Application Development for Mobility Oriented process.</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A BPM, by managing the business processes emphasizes on improving the corporate performance by effectively managing and optimizing the business processes of a company. Appian BPM is one of the leading BPM Solutions that deliver increased workforce productivity by automating the repetitive tasks and streamlining the business operations.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  With Appian's PaaS (Application Platform As A service), one can rapidly develop, deploy, use and scale diverse problem-solving applications, as Appian comes with the flexibility of cloud and on-premise portability which makes addressing the unique challenges of an organization easier and efficient.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We, at Elios, offer the best Appian BPM consulting services globally with the flexibility to hire/contract an Appian certified consultants to aid our Clients with dedicated end-to-end Appian BPM Application support.
                </p>
              </motion.div>
              
              <motion.div {...fadeIn} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
                <h5 className="font-bold text-gray-900 mb-6 text-xl">Why Appian is an ideal choice:</h5>
                <p className="text-gray-500 mb-6">Appian is an ideal choice for creating the customized mobile apps as per your specific requirements because:</p>
                <ul className="space-y-4">
                  {appianFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Pega */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeIn} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 lg:order-1 order-2">
                <h5 className="font-bold text-gray-900 mb-6 text-xl">Pega BPM Capabilities:</h5>
                <p className="text-gray-500 mb-6">Pega BPM supports the process management, from start to end, so that an organization can perform efficiently in order to create value for its customers:</p>
                <ul className="space-y-4">
                  {pegaFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                      <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div {...fadeIn} className="lg:order-2 order-1">
                <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 border border-purple-200">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-4xl font-bold text-[#0B1F3A] mb-4">Pega</h3>
                <h4 className="text-xl text-[#C9A227] font-semibold mb-6">Business Process Management for New Age Technology.</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A leading provider of BPM (Business Process Outsourcing) and CRM (Customer Relationship Management) software, Pega systems offers Pega BPM solutions to effectively manage workflows and processes in an organization. BPM is being widely adopted by the organizations worldwide and thus, they seek efficacious BPM services which can support the process management and automation.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Elios is a Pega BPM Consulting company that serves its clients with customized BPM solutions which focus on increasing efficiency, agility and performance in the day-to-day business operations. We also support our clients' business process management initiatives by offering them to hire or contract Pega developers for dedicated development as per their customized requirements.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Typically, the organizations possess hierarchical process structures to support its multifaceted and complex needs. But, these hierarchical processes tend to be opaque when viewed from the other parts of the organization hierarchy, are inefficient, are inflexible to dynamically changing customer requisites and respond very slowly to the market changes. However, Pega BPM aims at reducing and removing all these issues, making the process management easier for the organizations.
                </p>
              </motion.div>
            </div>
          </div>
          
        </div>
      </section>

      {/* CTA */}
      <section 
        className="relative py-24 bg-fixed bg-center bg-cover border-b-8 border-[#051020]"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
      >
        <div className="absolute inset-0 bg-[#0B1F3A]/90"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#C9A227]/30 blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </motion.h2>
          <motion.p {...fadeIn} className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Get in touch with our BPM experts to discover how Appian and Pega can transform your operations and drive efficiency.
          </motion.p>
          <motion.div {...fadeIn}>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A227] text-[#0B1F3A] rounded-full font-bold hover:bg-white transition-colors duration-300">
              Schedule a Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BpmAutomationTechPage;
