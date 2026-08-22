// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, Cpu, Code, Activity, Network, 
  CheckCircle2, ShieldCheck, Zap, Layers, RefreshCw
} from 'lucide-react';

const defaultHeroBg = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const BpmAutomationTechPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const bpmAdvantages = [
    "Allows definitive collaboration of project goals, process, and use cases.",
    "Performance optimization facilities that help in achieving KPIs, workflow reports, current process results, and identifying areas of improvement.",
    "Promotes best practices for performance issues.",
    "Solution framework which is iteratively built for projects and testing."
  ];

  const odmAdvantages = [
    "IBM ODM allows organizations to easily and quickly configure rules, extracting the rules portion from legacy systems to provide necessary agility.",
    "Employing ODM lets you edit rules as and when needed, controlling configuration easily without solely relying on programmers.",
    "Easily edit business rules with MS Word or MS Excel.",
    "Deploy on-premise ODM or cloud ODM.",
    "Speeds up the decision-making process of the business.",
    "Installation, deployment, and configuration are taken care of by us."
  ];

  const rpaBenefits = [
    "They compliment each other and help in achieving business transformation.",
    "Analysing and modifying workflows.",
    "They help connect legacy and modern systems."
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
            <Settings className="w-8 h-8 text-blue-400" />
          </motion.div>
          <motion.h1 {...fadeIn} className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6">
            BPM & Automation
          </motion.h1>
          <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Streamlining workflows with intelligent automation, operational decision management, and robotic processes.
          </motion.p>
        </div>
      </section>

      {/* BPM Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Network className="w-8 h-8 text-blue-600 mr-4" />
                Business Process Management
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Business Process Management (BPM) projects require a BPM platform as well as an effective methodology to improve process applications. This platform can be leveraged to plan, design, build, monitor and improve it significantly.
              </p>
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <p className="text-blue-900 font-medium italic">
                  In other words, business process management is focused on the repetitive and ongoing processes that have a particular pattern.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeIn}>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Advantages of BPM</h3>
              <div className="space-y-4">
                {bpmAdvantages.map((adv, idx) => (
                  <div key={idx} className="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{adv}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ODM Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <motion.div {...fadeIn} className="order-2 lg:order-1">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Advantages of ODM</h3>
                <ul className="space-y-4">
                  {odmAdvantages.map((adv, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-4">
                        <ShieldCheck className="w-5 h-5 text-blue-500" />
                      </div>
                      <span className="text-gray-600 text-sm leading-relaxed">{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Layers className="w-8 h-8 text-purple-600 mr-4" />
                Operational Decision Management
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                ODM is an industry-leading business rules management system. It drives operational efficiency by using business logic as a business rule. Using your ODM will help you configure as well as codify your business rules seamlessly. It is also understandable and accessible to people with less/zero coding experience.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If programmers enable business rules, it becomes a bit complex when such rules need a change and becomes a time-taking task. By employing ODM, you bypass this complexity.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* RPA & Symbiosis */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <Cpu className="w-12 h-12 text-emerald-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Robotic Process Automation (RPA)</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              It helps automate time-consuming, monotonous tasks and allows you to focus on other complex business tasks. It is ideal for tasks that replicate actions exactly like a human, making use of robots or bots. With RPA, you get the output in less time, zero errors, and without any breaks. It is also highly scalable.
            </p>
          </motion.div>

          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <RefreshCw className="w-6 h-6 text-blue-600 mr-3" />
              How do RPA and BPM fit together?
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              RPA and BPM may have the same word 'process' in their names but are quite different. BPM is something which is done by you—a continuous effort to analyze, document, measure, and improve the process for the organization to work seamlessly. RPA is a tool (making use of robots) to perform tasks.
            </p>
            
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Working Symbiotically:</h4>
              <ul className="space-y-4">
                {rpaBenefits.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 text-sm">
                    <Zap className="w-4 h-4 text-emerald-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
            Ready to Automate Your Workflows?
          </motion.h2>
          <motion.p {...fadeIn} className="text-blue-100 mb-8 text-lg">
            Let Eliostech help you integrate BPM, ODM, and RPA for a seamless digital transformation.
          </motion.p>
          <motion.a 
            {...fadeIn}
            href="/contact-us" 
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300"
          >
            Start Optimizing Today
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default BpmAutomationTechPage;
