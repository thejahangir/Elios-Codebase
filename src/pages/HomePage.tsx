import { useRef } from 'react';
import { ArrowRight, Users, Code, Replace, Cloud, Settings, Shield, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import TestimonialsSlider from '../components/TestimonialsSlider';

import executiveWorkingImg from '../assets/executive_working.png';
import whyBgImg from '../assets/why_bg.png';
import heroBg1Img from '../assets/hero_bg_1.png';
import heroBg2Img from '../assets/hero_bg_2.png';
import heroBg3Img from '../assets/hero_bg_3.png';
import heroBg4Img from '../assets/hero_bg_4.png';

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

const HomePage = () => {
  const heroRef = useRef(null);

  const partners = {
    technology: [
      { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" }, 
      { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" }, 
      { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
      { name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" }
    ],
    business: [
      { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
      { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
      { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
      { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" }
    ],
    clients: [
      { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" }, 
      { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg" },
      { name: "Sony", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg" }, 
      { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" }
    ]
  };
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="flex flex-col w-full bg-[#051020]">
      {/* HERO SECTION - Slider */}
      <section ref={heroRef} className="relative min-h-screen flex items-center bg-[#0B1F3A] overflow-hidden">
        <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none">
           <video 
             autoPlay 
             loop 
             muted 
             playsInline
             className="absolute inset-0 w-full h-full object-cover opacity-70"
           >
             <source src="https://assets.mixkit.co/videos/4809/4809-720.mp4" type="video/mp4" />
             Your browser does not support the video tag.
           </video>
           <div className="absolute inset-0 bg-gradient-to-t from-[#051020] via-[#0B1F3A]/80 to-transparent" />
           <div className="absolute inset-0 bg-gradient-to-r from-[#051020] via-transparent to-[#051020]" />
           
           <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen" />
           <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#C9A227]/20 blur-[150px] mix-blend-screen" />
           
           {/* Grid Pattern */}
           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20 mix-blend-overlay" />
        </motion.div>
        
        <motion.div style={{ opacity: opacityText }} className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full pt-20">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: customEasing }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
              <span className="text-white/80 text-sm font-medium tracking-wide">Enterprise Technology Partner</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: customEasing }}
              className="text-6xl md:text-[80px] lg:text-[100px] font-bold leading-[1.05] text-white tracking-tighter mb-8"
            >
              Technology That <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-yellow-200">Moves Business.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: customEasing }}
              className="text-xl md:text-2xl text-white/60 font-light max-w-2xl leading-relaxed mb-12"
            >
              We help enterprises build, modernize and operate technology ecosystems that improve efficiency, accelerate innovation and create measurable value.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: customEasing }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link to="/contact" className="group relative px-8 py-4 bg-white text-[#0B1F3A] rounded-full font-semibold text-lg overflow-hidden flex items-center justify-center gap-2 transition-all hover:scale-105 duration-300">
                <span className="relative z-10">Talk to Our Experts</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-[#C9A227] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-12 flex items-center gap-4 text-white/40 rotate-[-90deg] origin-left"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Scroll to explore</span>
          <div className="w-12 h-[1px] bg-white/20 relative">
             <div className="absolute top-0 left-0 h-full bg-white/60 w-1/3 animate-ping" />
          </div>
        </motion.div>
      </section>

      {/* ABOUT INTRODUCTION - Editorial Layout */}
      <section className="py-32 bg-white relative z-20 mt-[-40px] shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <FadeIn>
                <div className="w-16 h-1 bg-[#C9A227] mb-8" />
                <h2 className="text-4xl md:text-6xl font-bold text-[#0B1F3A] leading-[1.1] tracking-tight">
                  Expertise built around your business.
                </h2>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-6 lg:col-start-7 pt-4">
              <FadeIn delay={0.2}>
                <p className="text-xl text-gray-500 leading-relaxed font-light mb-10">
                  Elios Technologies partners with organizations to solve complex technology challenges—from application development and migration to cloud, infrastructure, testing and managed operations. We don't just write code; we engineer business outcomes.
                </p>
                <Link to="/about" className="group inline-flex items-center gap-4 text-lg font-semibold text-[#0B1F3A] hover:text-[#C9A227] transition-colors">
                  <span className="border-b-2 border-transparent group-hover:border-[#C9A227] pb-1 transition-all">Discover Elios</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </FadeIn>
            </div>
          </div>
          
          <FadeIn delay={0.4} className="mt-24">
            <div className="relative h-[60vh] w-full rounded-lg bg-[#F7F7F5] border border-gray-200 overflow-hidden group">
               <img 
                 src={executiveWorkingImg} 
                 alt="Executive Leadership" 
                 className="absolute inset-0 w-full h-full object-cover block z-0 transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-transparent opacity-80 pointer-events-none" />
               <div className="absolute bottom-10 left-10 text-white z-10">
                 <div className="flex items-center gap-4 mb-3">
                   <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                     <Users className="w-6 h-6 text-[#C9A227]" />
                   </div>
                   <p className="font-bold tracking-wide uppercase text-sm">Strategic Execution</p>
                 </div>
                 <p className="text-white/70 font-light max-w-xl">Expert teams driving business outcomes and transforming complex technology challenges into scalable solutions.</p>
               </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SERVICES OVERVIEW - Premium Cards */}
      <section className="py-32 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-3xl">
                <p className="text-[#C9A227] font-semibold tracking-widest uppercase text-sm mb-4">Core Capabilities</p>
                <h2 className="text-5xl md:text-6xl font-bold text-[#0B1F3A] tracking-tight">From Strategy to Execution</h2>
              </div>
              <Link to="/services" className="hidden md:inline-flex items-center gap-3 px-6 py-3 border border-gray-300 rounded-full hover:border-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white transition-all font-medium">
                Explore All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'App Development', icon: <Code strokeWidth={1.5} />, desc: 'Custom enterprise software, mobile applications, and modern architectures.' },
              { title: 'Migration Services', icon: <Replace strokeWidth={1.5} />, desc: 'Seamless transition of legacy systems to modern, scalable environments.' },
              { title: 'Cloud & DevOps', icon: <Cloud strokeWidth={1.5} />, desc: 'Scalable cloud infrastructure, automation, and continuous delivery.' },
              { title: 'Managed Services', icon: <Settings strokeWidth={1.5} />, desc: 'Reliable IT operations, robust support, and continuous optimization.' },
              { title: 'QA & Testing', icon: <Shield strokeWidth={1.5} />, desc: 'Comprehensive quality assurance and automated testing pipelines.' },
              { title: 'RPO Services', icon: <Users strokeWidth={1.5} />, desc: 'Strategic recruitment process outsourcing to build world-class teams.' },
            ].map((service, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <Link to={`/services`} className="group relative p-10 h-full flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(11,31,58,0.1)] transition-all duration-500 border border-transparent hover:border-gray-100 transform hover:-translate-y-2">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#C9A227]/10 to-transparent rounded-bl-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-[2.5]" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-[#0B1F3A] mb-8 relative z-10 overflow-hidden group-hover:shadow-md transition-all duration-500">
                    <div className="absolute inset-0 bg-[#0B1F3A] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                    <div className="relative z-20 group-hover:text-white transition-colors duration-500 group-hover:scale-110">
                       {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-[#0B1F3A] relative z-10">{service.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed flex-grow relative z-10 group-hover:text-gray-700 transition-colors">{service.desc}</p>
                  
                  <div className="mt-8 flex justify-end relative z-10">
                    <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-[#C9A227] group-hover:border-[#C9A227] group-hover:text-white transition-all duration-300 transform group-hover:rotate-45">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* WHY ELIOS - Dark sophisticated section */}
      <section className="py-32 bg-[#0B1F3A] text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-70 pointer-events-none"
          style={{ 
            backgroundImage: `url(${whyBgImg})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Background Accents */}
        <div className="absolute inset-0 bg-[#0B1F3A]/60 mix-blend-multiply pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#C9A227]/20 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <FadeIn>
            <div className="mb-20">
              <p className="text-[#C9A227] font-semibold tracking-widest uppercase text-sm mb-4">The Elios Advantage</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                Why enterprises choose Elios.
              </h2>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
            {[
              { title: 'Business-Focused Technology', desc: 'Technology aligned with measurable business outcomes and operational efficiency. We focus on ROI, not just implementation.' },
              { title: 'End-to-End Expertise', desc: 'Strategy, engineering, cloud, testing and operations under one experienced partner. A unified approach to transformation.' },
              { title: 'Modern Engineering', desc: 'Modern architectures, cloud platforms and agile development practices ensuring your systems are built for tomorrow.' },
              { title: 'Scalable Solutions', desc: 'Technology designed to evolve seamlessly with business requirements and future growth trajectories.' }
            ].map((feature, i) => (
              <FadeIn key={i} delay={0.1 * i} className="group cursor-default">
                <div className="border-t border-white/10 pt-8 transition-colors group-hover:border-[#C9A227]/50">
                  <div className="flex gap-6">
                    <div className="text-white/20 font-mono text-xl font-light pt-1 group-hover:text-[#C9A227] transition-colors">
                      0{i+1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:translate-x-2 transition-transform duration-300">{feature.title}</h3>
                      <p className="text-white/50 leading-relaxed font-light text-lg">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONTINUOUS INNOVATION SECTION */}
      <section className="py-32 bg-white relative z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1F3A] tracking-tight leading-[1.1] max-w-4xl">
                Continuous innovation <br />+ operational excellence
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { num: '01', title: 'Simplify digital transformation', desc: 'Elios Consult helps you drive innovation and simplify digital transformation with strategic visioning, architecture design, and organizational change management.', link: 'Discover Elios Consult', bg: heroBg1Img },
              { num: '02', title: 'Overcome business challenges', desc: 'Our services combine deep industry expertise with modern skills and advanced technology to help you overcome business challenges and uncover new opportunities for growth.', link: 'Explore our services', bg: heroBg2Img },
              { num: '03', title: 'Orchestrate and innovate', desc: 'Elios Platform is an open integration platform designed to help orchestrate and innovate across your IT environment, enabling continuous learning and quicker time to value.', link: 'Learn about Elios Platform', bg: heroBg3Img },
              { num: '04', title: 'Enable hybrid IT with strategic partners', desc: 'Be confident that you\'re making the right technology investments with global alliance partnerships that enable today\'s complex hybrid ecosystems.', link: 'Explore our partners', bg: heroBg4Img }
            ].map((item, i) => (
              <FadeIn key={i} delay={0.1 * i} className="flex flex-col group h-full">
                <div className="relative h-24 lg:h-32 mb-6 w-[85%]">
                  {/* Outline Number */}
                  <div 
                    className="absolute inset-0 flex items-center text-[80px] lg:text-[110px] leading-[1] font-black text-transparent transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-2 origin-bottom"
                    style={{ WebkitTextStroke: '2px #0B1F3A' }}
                  >
                    {item.num}
                  </div>
                  
                  {/* Revealed Image */}
                  <div className="absolute inset-0 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 rounded-lg overflow-hidden shadow-[0_15px_35px_rgba(11,31,58,0.1)] border border-gray-100">
                    <img src={item.bg} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4 group-hover:text-[#C9A227] transition-colors">{item.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed mb-8 flex-grow">
                  {item.desc}
                </p>
                <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-[#0B1F3A] group-hover:text-[#C9A227] transition-colors mt-auto border-b-2 border-transparent group-hover:border-[#C9A227] pb-1 self-start">
                  {item.link} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS & CLIENTS SECTION - Clean Monochrome Enterprise Layout */}
      <section className="py-24 bg-[#F4F6F8] relative overflow-hidden">
        {/* Background slanted shapes similar to attachment */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[120%] bg-[#E8EDF2] transform rotate-12 -z-10" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[120%] bg-[#E8EDF2] transform -rotate-12 -z-10" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] tracking-tight mb-4">Global Network</h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">Collaborating with industry leaders and trusted by forward-thinking enterprises.</p>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-12">
            
            {/* Category 1: Technology */}
            <FadeIn delay={0.1}>
              <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 rounded-lg p-10 md:p-16">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-bold text-[#1C2539] mb-4">Technology Partners</h3>
                  <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto font-light">
                    Facilisi curabitur volutpat nunc, suspendisse tincidunt. Lorem pulvinar purus
                    libero accumsan, sagittis ullamcorper velit mauris sit.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {partners.technology.map((partner, i) => (
                    <div key={`tech-${i}`} className="group relative bg-white border border-gray-200 shadow-[0_4px_16px_rgba(0,0,0,0.06)] rounded-lg flex items-center justify-center p-6 h-32 hover:border-[#C9A227]/50 hover:shadow-[0_15px_35px_rgba(201,162,39,0.15)] hover:-translate-y-1 overflow-hidden transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="relative z-10 max-w-[120px] max-h-[40px] object-contain transition-all duration-500 group-hover:scale-110" 
                        onError={(e) => { 
                          e.currentTarget.style.display = 'none'; 
                          const next = e.currentTarget.nextElementSibling as HTMLElement;
                          if (next) next.style.display = 'block'; 
                        }} 
                      />
                      <span className="hidden font-bold text-xl text-gray-800 relative z-10">{partner.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Category 2: Business */}
            <FadeIn delay={0.2}>
              <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 rounded-lg p-10 md:p-16">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-bold text-[#1C2539] mb-4">Business Partners</h3>
                  <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto font-light">
                    Collaborating with leading business integrators and consulting firms to deliver end-to-end transformation.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {partners.business.map((partner, i) => (
                    <div key={`biz-${i}`} className="group relative bg-white border border-gray-200 shadow-[0_4px_16px_rgba(0,0,0,0.06)] rounded-lg flex items-center justify-center p-6 h-32 hover:border-[#C9A227]/50 hover:shadow-[0_15px_35px_rgba(201,162,39,0.15)] hover:-translate-y-1 overflow-hidden transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="relative z-10 max-w-[120px] max-h-[40px] object-contain transition-all duration-500 group-hover:scale-110" 
                        onError={(e) => { 
                          e.currentTarget.style.display = 'none'; 
                          const next = e.currentTarget.nextElementSibling as HTMLElement;
                          if (next) next.style.display = 'block'; 
                        }} 
                      />
                      <span className="hidden font-bold text-xl text-gray-800 relative z-10">{partner.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Category 3: Clients */}
            <FadeIn delay={0.3}>
              <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 rounded-lg p-10 md:p-16">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-bold text-[#1C2539] mb-4">Clients we are proud of</h3>
                  <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto font-light">
                    Trusted by industry leaders and forward-thinking enterprises globally to drive innovation.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {partners.clients.map((client, i) => (
                    <div key={`client-${i}`} className="group relative bg-white border border-gray-200 shadow-[0_4px_16px_rgba(0,0,0,0.06)] rounded-lg flex items-center justify-center p-6 h-32 hover:border-[#C9A227]/50 hover:shadow-[0_15px_35px_rgba(201,162,39,0.15)] hover:-translate-y-1 overflow-hidden transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="relative z-10 max-w-[120px] max-h-[40px] object-contain transition-all duration-500 group-hover:scale-110" 
                        onError={(e) => { 
                          e.currentTarget.style.display = 'none'; 
                          const next = e.currentTarget.nextElementSibling as HTMLElement;
                          if (next) next.style.display = 'block'; 
                        }} 
                      />
                      <span className="hidden font-bold text-xl text-gray-800 relative z-10">{client.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS SLIDER SECTION */}
      <TestimonialsSlider />

    </div>
  );
};

export default HomePage;
