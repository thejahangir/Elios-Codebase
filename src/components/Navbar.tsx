import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Database, Cloud, Code, Activity, Users, Shield, Settings, Building, Cpu, ArrowRight } from 'lucide-react';
import LogoEliosLight from '../assets/elios-logo-1.png';
import LogoEliosDark from '../assets/elios-logo-2.png';

const servicesList = [
  { name: 'SAP Service', path: '/sap-erp', icon: <Database className="w-5 h-5" /> },
  { name: 'Oracle Services', path: '/oracle-practices', icon: <Database className="w-5 h-5" /> },
  { name: 'Veeva Services', path: '/veeva-practices', icon: <Activity className="w-5 h-5" /> },
  { name: 'BPM Services', path: '/bpm-automation', icon: <Cpu className="w-5 h-5" /> },
  { name: 'CRM Services', path: '/crm-services', icon: <Users className="w-5 h-5" /> },
  { name: 'Custom Application Development', path: '/application-development', icon: <Code className="w-5 h-5" /> },
  { name: 'Cybersecurity Services', path: '/cyber-security', icon: <Shield className="w-5 h-5" /> },
  { name: 'Managed Services', path: '/managed-services', icon: <Settings className="w-5 h-5" /> },
  { name: 'On Demand Services', path: '/on-demand-services', icon: <Cloud className="w-5 h-5" /> },
  { name: 'Staff Augmentation', path: '/recruitment-rpo', icon: <Users className="w-5 h-5" /> },
  { name: 'QA & Testing', path: '/qa-testing', icon: <Shield className="w-5 h-5" /> },
  { name: 'Architectural Workshops', path: '/architectural-workshops', icon: <Building className="w-5 h-5" /> },
];

// const technologiesList = [
//   { name: 'Data & Analytics', path: '/data-analytics', icon: <LineChart className="w-5 h-5" /> },
//   { name: 'AI & Data Science', path: '/ai-data-science', icon: <BrainCircuit className="w-5 h-5" /> },
//   { name: 'Cloud & Integration', path: '/cloud-integration', icon: <Cable className="w-5 h-5" /> },
//   { name: 'IBM OMS', path: '/ibm-oms', icon: <Server className="w-5 h-5" /> },
//   { name: 'BPM & Automation', path: '/bpm-automation', icon: <Cpu className="w-5 h-5" /> },
//   { name: 'API Edge & IoT', path: '/api-edge-iot', icon: <Radio className="w-5 h-5" /> },
//   { name: 'Digital Transform', path: '/digital-transformation', icon: <Zap className="w-5 h-5" /> },
//   { name: 'ERP', path: '/erp', icon: <Database className="w-5 h-5" /> },
//   { name: 'Digital Experience', path: '/digital-experience', icon: <LayoutTemplate className="w-5 h-5" /> },
//   { name: 'EAM & IOT', path: '/eam-iot', icon: <Radio className="w-5 h-5" /> },
//   { name: 'Oracle Practices', path: '/oracle-practices', icon: <Database className="w-5 h-5" /> },
//   { name: 'Pega Practices', path: '/pega-practices', icon: <Settings className="w-5 h-5" /> },
//   { name: 'Veeva Practices', path: '/veeva-practices', icon: <Activity className="w-5 h-5" /> },
//   { name: 'Cyber Security Practices', path: '/cyber-security', icon: <Shield className="w-5 h-5" /> },
// ];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu: string) => setHoveredMenu(menu);
  const handleMouseLeave = () => setHoveredMenu(null);

  const megaMenuVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -5, transition: { duration: 0.15 } }
  } as any;

  const navHeight = isScrolled ? 'h-20' : 'h-28';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        isScrolled || hoveredMenu || mobileMenuOpen
          ? 'bg-white border-gray-200 shadow-sm' 
          : 'bg-transparent border-white/10'
      }`}
      onMouseLeave={handleMouseLeave}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-transparent z-50 pointer-events-none">
        <div 
          className="h-full bg-[#C9A227] transition-all duration-150 ease-out" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <div className={`max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${navHeight}`}>
        <Link to="/" className={`text-2xl font-bold tracking-tighter transition-colors duration-300 relative z-10 ${isScrolled || hoveredMenu || mobileMenuOpen ? 'text-[#0B1F3A]' : 'text-white'}`}>
          <img src={isScrolled || hoveredMenu || mobileMenuOpen ? LogoEliosDark : LogoEliosLight}  alt="Logo" className='logo-elios'/>
        </Link>
        
        <div className={`hidden lg:flex items-center gap-2 font-semibold text-sm tracking-wide ${isScrolled || hoveredMenu ? 'text-gray-600' : 'text-gray-100'}`}>
          
          <div className={`relative flex items-center transition-all duration-300 ${navHeight}`} onMouseEnter={() => handleMouseEnter('about')}>
            <Link to="/about" className={`px-5 py-2.5 rounded-full flex items-center gap-1.5 transition-colors ${hoveredMenu === 'about' ? 'text-[#0B1F3A] bg-gray-100/50' : 'hover:text-[#C9A227]'}`}>
              About Us <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${hoveredMenu === 'about' ? 'rotate-180' : ''}`} />
            </Link>
          </div>

          <div className={`relative flex items-center transition-all duration-300 ${navHeight}`} onMouseEnter={() => handleMouseEnter('services')}>
            <Link to="/services" className={`px-5 py-2.5 rounded-full flex items-center gap-1.5 transition-colors ${hoveredMenu === 'services' ? 'text-[#0B1F3A] bg-gray-100/50' : 'hover:text-[#C9A227]'}`}>
              Services <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${hoveredMenu === 'services' ? 'rotate-180' : ''}`} />
            </Link>
          </div>

          {/* <div className={`relative flex items-center transition-all duration-300 ${navHeight}`} onMouseEnter={() => handleMouseEnter('technologies')}>
            <Link to="/technologies" className={`px-5 py-2.5 rounded-full flex items-center gap-1.5 transition-colors ${hoveredMenu === 'technologies' ? 'text-[#0B1F3A] bg-gray-100/50' : 'hover:text-[#C9A227]'}`}>
              Technologies <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${hoveredMenu === 'technologies' ? 'rotate-180' : ''}`} />
            </Link>
          </div> */}

          <div className={`flex items-center transition-all duration-300 ${navHeight}`} onMouseEnter={handleMouseLeave}>
            <Link to="/design-lab" className="px-5 py-2.5 hover:text-[#C9A227] transition-colors">Design Lab</Link>
          </div>

          <div className={`flex items-center transition-all duration-300 ${navHeight}`} onMouseEnter={handleMouseLeave}>
            <Link to="/careers" className="px-5 py-2.5 hover:text-[#C9A227] transition-colors">Careers</Link>
          </div>
          <div className={`flex items-center transition-all duration-300 ${navHeight}`} onMouseEnter={handleMouseLeave}>
            <Link to="/blog" className="px-5 py-2.5 hover:text-[#C9A227] transition-colors">Blog</Link>
          </div>
        </div>

        <div className="hidden lg:block relative z-10">
           <Link to="/contact" className={`px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 shadow-sm ${
             isScrolled || hoveredMenu || mobileMenuOpen
              ? 'bg-[#0B1F3A] text-white hover:bg-[#C9A227] hover:text-[#0B1F3A]' 
              : 'bg-white text-[#0B1F3A] hover:bg-[#C9A227]'
           }`}>
            Let's Talk
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className={`lg:hidden relative z-10 p-2 -mr-2 transition-colors ${
            isScrolled || hoveredMenu || mobileMenuOpen ? 'text-[#0B1F3A]' : 'text-white'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="px-6 py-4 max-h-[75vh] overflow-y-auto flex flex-col gap-2">
              {/* About Us Accordion */}
              <div className="flex flex-col border-b border-gray-100 pb-2">
                <div 
                  className="flex items-center justify-between py-2 cursor-pointer text-lg font-semibold text-[#0B1F3A]" 
                  onClick={() => setExpandedMobileMenu(expandedMobileMenu === 'about' ? null : 'about')}
                >
                  About Us
                  <ChevronDown className={`w-5 h-5 transition-transform ${expandedMobileMenu === 'about' ? 'rotate-180' : ''}`} />
                </div>
                <AnimatePresence>
                  {expandedMobileMenu === 'about' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden flex flex-col gap-4 pl-4 border-l-2 border-[#C9A227]/30 my-2"
                    >
                      <Link to="/about" className="text-gray-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Who We Are</Link>
                      <Link to="/about/mission-vision" className="text-gray-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Our Mission & Vision</Link>
                      <Link to="/about/team" className="text-gray-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Our Team</Link>
                      <Link to="/about/story" className="text-gray-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Our Story</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services Accordion */}
              <div className="flex flex-col border-b border-gray-100 pb-2">
                <div 
                  className="flex items-center justify-between py-2 cursor-pointer text-lg font-semibold text-[#0B1F3A]" 
                  onClick={() => setExpandedMobileMenu(expandedMobileMenu === 'services' ? null : 'services')}
                >
                  Services
                  <ChevronDown className={`w-5 h-5 transition-transform ${expandedMobileMenu === 'services' ? 'rotate-180' : ''}`} />
                </div>
                <AnimatePresence>
                  {expandedMobileMenu === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden flex flex-col gap-4 pl-4 border-l-2 border-[#C9A227]/30 my-2"
                    >
                      <Link to="/services" className="text-[#0B1F3A] font-bold" onClick={() => setMobileMenuOpen(false)}>All Services</Link>
                      {servicesList.map((item, idx) => (
                        <Link key={idx} to={item.path} className="text-gray-600 font-medium flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                          <div className="text-[#C9A227] opacity-70 w-5 h-5 flex-shrink-0">{item.icon}</div>
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Technologies Accordion */}
              {/* <div className="flex flex-col border-b border-gray-100 pb-2">
                <div 
                  className="flex items-center justify-between py-2 cursor-pointer text-lg font-semibold text-[#0B1F3A]" 
                  onClick={() => setExpandedMobileMenu(expandedMobileMenu === 'technologies' ? null : 'technologies')}
                >
                  Technologies
                  <ChevronDown className={`w-5 h-5 transition-transform ${expandedMobileMenu === 'technologies' ? 'rotate-180' : ''}`} />
                </div>
                <AnimatePresence>
                  {expandedMobileMenu === 'technologies' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden flex flex-col gap-4 pl-4 border-l-2 border-[#C9A227]/30 my-2"
                    >
                      <Link to="/technologies" className="text-[#0B1F3A] font-bold" onClick={() => setMobileMenuOpen(false)}>All Technologies</Link>
                      {technologiesList.map((item, idx) => (
                        <Link key={idx} to={item.path} className="text-gray-600 font-medium flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                          <div className="text-[#C9A227] opacity-70 w-5 h-5 flex-shrink-0">{item.icon}</div>
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div> */}

              <div className="py-2 border-b border-gray-100">
                <Link to="/design-lab" className="text-lg font-semibold text-[#0B1F3A] block w-full" onClick={() => setMobileMenuOpen(false)}>Design Lab</Link>
              </div>
              <div className="py-2 border-b border-gray-100">
                <Link to="/careers" className="text-lg font-semibold text-[#0B1F3A] block w-full" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
              </div>
              <div className="py-2">
                <Link to="/blog" className="text-lg font-semibold text-[#0B1F3A] block w-full" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
              </div>
              
              <div className="pt-6 pb-4">
                <Link to="/contact" className="inline-flex items-center justify-center w-full bg-[#0B1F3A] text-white px-6 py-4 rounded-full font-bold text-base" onClick={() => setMobileMenuOpen(false)}>Let's Talk</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FULL-WIDTH MEGA MENU PANELS */}
      <div className={`absolute top-full left-0 w-full overflow-hidden pointer-events-none transition-all duration-300 ${hoveredMenu ? 'bg-white border-b border-gray-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)]' : ''}`}>
        <AnimatePresence>
          {hoveredMenu === 'about' && (
            <motion.div 
              variants={megaMenuVariants} initial="hidden" animate="visible" exit="exit"
              className="max-w-7xl mx-auto px-6 md:px-12 py-12 pointer-events-auto"
            >
              <div className="grid grid-cols-12 gap-12">
                <div className="col-span-4 bg-[#F7F7F5] p-10 rounded-3xl">
                  <h3 className="text-3xl font-bold text-[#0B1F3A] mb-4">Who We Are</h3>
                  <p className="text-gray-500 mb-8 leading-relaxed">Elios Technologies is a global technology consulting firm helping enterprises transform the way they operate.</p>
                  <Link to="/about/story" onClick={() => setHoveredMenu(null)} className="inline-flex items-center gap-2 font-semibold text-[#0B1F3A] hover:text-[#C9A227] transition-colors">
                    Read Our Story <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="col-span-8 flex flex-col justify-center">
                  <div className="grid grid-cols-2 gap-8">
                    <Link to="/about/mission-vision" onClick={() => setHoveredMenu(null)} className="group p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 bg-[#C9A227]/10 text-[#C9A227] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Activity className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-bold text-[#0B1F3A] mb-2">Our Mission & Vision</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">Discover the core values and objectives that drive our technology innovations.</p>
                    </Link>
                    <Link to="/about/team" onClick={() => setHoveredMenu(null)} className="group p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 bg-[#0B1F3A]/10 text-[#0B1F3A] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Users className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-bold text-[#0B1F3A] mb-2">Our Team</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">Meet the engineering experts and technology leaders behind Elios.</p>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {hoveredMenu === 'services' && (
            <motion.div 
              variants={megaMenuVariants} initial="hidden" animate="visible" exit="exit"
              className="max-w-7xl mx-auto px-6 md:px-12 py-12 pointer-events-auto"
            >
              <div className="grid grid-cols-12 gap-16">
                <div className="col-span-3">
                  <h3 className="text-[#C9A227] font-bold tracking-widest uppercase text-xs mb-8">Capabilities</h3>
                  <h2 className="text-3xl font-bold text-[#0B1F3A] mb-6 leading-tight">End-to-end technology execution.</h2>
                  <p className="text-gray-500 mb-8 text-sm leading-relaxed">From modernizing legacy infrastructure to building custom enterprise applications, we deliver robust solutions.</p>
                  <Link to="/services" onClick={() => setHoveredMenu(null)} className="inline-flex items-center gap-2 font-semibold text-[#0B1F3A] hover:text-[#C9A227] transition-colors border-b-2 border-[#C9A227] pb-1">
                    All Services <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="col-span-9">
                  <div className="grid grid-cols-3 gap-y-10 gap-x-12">
                    {servicesList.map((item, idx) => (
                      <Link key={idx} to={item.path} onClick={() => setHoveredMenu(null)} className="group flex items-start gap-4">
                        <div className="text-gray-300 group-hover:text-[#C9A227] transition-colors mt-0.5">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 group-hover:text-[#0B1F3A] transition-colors mb-1">{item.name}</h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* hoveredMenu === 'technologies' && (
            <motion.div 
              variants={megaMenuVariants} initial="hidden" animate="visible" exit="exit"
              className="max-w-7xl mx-auto px-6 md:px-12 py-12 pointer-events-auto"
            >
              <div className="grid grid-cols-12 gap-16">
                <div className="col-span-3">
                  <h3 className="text-[#C9A227] font-bold tracking-widest uppercase text-xs mb-8">Ecosystem</h3>
                  <h2 className="text-3xl font-bold text-[#0B1F3A] mb-6 leading-tight">Built for what comes next.</h2>
                  <p className="text-gray-500 mb-8 text-sm leading-relaxed">We leverage modern technology stacks and enterprise platforms to create scalable digital architectures.</p>
                  <Link to="/technologies" onClick={() => setHoveredMenu(null)} className="inline-flex items-center gap-2 font-semibold text-[#0B1F3A] hover:text-[#C9A227] transition-colors border-b-2 border-[#C9A227] pb-1">
                    All Technologies <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="col-span-9">
                  <div className="grid grid-cols-3 gap-y-10 gap-x-12">
                    {technologiesList.map((item, idx) => (
                      <Link key={idx} to={item.path} onClick={() => setHoveredMenu(null)} className="group flex items-start gap-4">
                        <div className="text-gray-300 group-hover:text-[#0B1F3A] transition-colors mt-0.5">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 group-hover:text-[#C9A227] transition-colors mb-1">{item.name}</h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ) */}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
