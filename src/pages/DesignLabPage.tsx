import { motion } from 'framer-motion';
import { Search, Layers, Layout, MousePointer, Sparkles, GitCommit, ArrowRight, Lightbulb, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const customEasing = [0.16, 1, 0.3, 1] as any;

const FadeIn = ({ children, delay = 0, className = "" }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: customEasing }}
    className={className}
  >
    {children}
  </motion.div>
);

const DesignLabPage = () => {
  const sections = [
    {
      title: "User Research",
      icon: <Search className="w-8 h-8 text-[#C9A227]" />,
      description: "Deep dive into user behaviors, needs, and motivations through observation techniques, task analysis, and other feedback methodologies.",
      features: ["User Interviews", "Personas", "Journey Mapping"]
    },
    {
      title: "UX & Information Architecture",
      icon: <Layers className="w-8 h-8 text-[#C9A227]" />,
      description: "Structuring and organizing information to help users effortlessly find what they're looking for, creating intuitive digital ecosystems.",
      features: ["Sitemaps", "Wireframing", "User Flows"]
    },
    {
      title: "UI Design",
      icon: <Layout className="w-8 h-8 text-[#C9A227]" />,
      description: "Crafting visually stunning, accessible, and responsive interfaces that elevate your brand identity and delight users at every interaction.",
      features: ["Design Systems", "Prototyping", "Visual Design"]
    },
    {
      title: "AI & Emerging Experiences",
      icon: <Sparkles className="w-8 h-8 text-[#C9A227]" />,
      description: "Pioneering the next generation of interactions by integrating generative AI, conversational interfaces, and immersive technologies.",
      features: ["Conversational UI", "Adaptive Interfaces", "AR/VR Concepts"]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 bg-[#0B1F3A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#051020] via-[#0B1F3A] to-[#0B1F3A] z-0" />
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#C9A227]/20 blur-[150px] mix-blend-screen z-0" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: customEasing }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 mb-8">
              <Sparkles className="w-4 h-4 text-[#C9A227]" />
              <span className="text-[#C9A227] text-sm font-semibold uppercase tracking-wider">Innovation Studio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tighter">
              Elios <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-yellow-200">Design Lab.</span>
            </h1>
            
            <p className="text-xl text-white/70 font-light leading-relaxed mb-10">
              Where human-centered design meets enterprise technology. We craft intuitive, engaging, and powerful digital experiences that drive adoption and business growth.
            </p>
            
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A227] text-[#0B1F3A] rounded-full font-bold hover:bg-white transition-colors duration-300">
              Start a Project <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What is Design Lab */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-[#C9A227] font-semibold tracking-widest uppercase text-sm mb-4">What is Design Lab?</h2>
              <h3 className="text-4xl font-bold text-[#0B1F3A] mb-6 leading-tight">
                Empathy-driven innovation for the enterprise.
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                The Design Lab is our dedicated center of excellence for User Experience (UX) and User Interface (UI) design. We believe that great technology is meaningless if it isn't adopted by users. 
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                By bridging the gap between complex engineering and human psychology, we ensure that every application, platform, and digital product we build is not just functional, but genuinely delightful to use.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-50">
                    <div className="w-12 h-12 rounded-full bg-[#0B1F3A]/5 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-[#0B1F3A]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B1F3A]">Human-Centered</h4>
                      <p className="text-sm text-gray-500 mt-1">Focusing on the end-user's needs above all else.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-50 ml-8">
                    <div className="w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-6 h-6 text-[#C9A227]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B1F3A]">Problem Solving</h4>
                      <p className="text-sm text-gray-500 mt-1">Translating complex business rules into simple workflows.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-50">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B1F3A]">Measurable Results</h4>
                      <p className="text-sm text-gray-500 mt-1">Driving ROI through increased adoption and efficiency.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Disciplines */}
      <section className="py-24 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B1F3A] mb-4">Our Core Disciplines</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">A comprehensive suite of design services tailored for modern digital transformation.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-300 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6">
                    {section.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">{section.title}</h3>
                  <p className="text-gray-600 mb-8 flex-grow leading-relaxed">{section.description}</p>
                  <ul className="flex flex-wrap gap-2 mt-auto">
                    {section.features.map((feature, fIdx) => (
                      <li key={fIdx} className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm font-medium border border-gray-100">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Diagram */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-20">
            <h2 className="text-[#C9A227] font-semibold tracking-widest uppercase text-sm mb-4">Methodology</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#0B1F3A]">The Design Process</h3>
          </FadeIn>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden md:block z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", name: "Discover", desc: "Research, empathize, and define the core problem." },
                { step: "02", name: "Ideate", desc: "Brainstorm, sketch, and wireframe potential solutions." },
                { step: "03", name: "Design", desc: "Create high-fidelity UI, prototypes, and design systems." },
                { step: "04", name: "Validate", desc: "User testing, iterate, and handoff to engineering." }
              ].map((phase, idx) => (
                <FadeIn key={idx} delay={idx * 0.15} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-white border-4 border-[#0B1F3A] rounded-full flex items-center justify-center mb-6 shadow-xl text-[#0B1F3A] font-bold text-xl relative group hover:bg-[#0B1F3A] hover:text-white transition-colors duration-300">
                    {phase.step}
                    {idx < 3 && <div className="absolute right-[-100%] top-1/2 w-full h-0.5 bg-[#0B1F3A] -translate-y-1/2 opacity-0 md:group-hover:opacity-100 transition-opacity" />}
                  </div>
                  <h4 className="text-xl font-bold text-[#0B1F3A] mb-3">{phase.name}</h4>
                  <p className="text-gray-500 font-light text-sm">{phase.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignLabPage;
