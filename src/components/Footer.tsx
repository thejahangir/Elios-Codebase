import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  Phone, 
  X, 
  ArrowRight, 
  Globe2, 
  Send, 
  CheckCircle2, 
  Sparkles,
  Building2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoElios from '../assets/elios-logo-1.png';

interface FooterLink {
  name: string;
  path: string;
  isHeader?: boolean;
  badge?: string;
}

const legalContent: Record<string, { title: string, content: string[] }> = {
  terms: {
    title: "Terms & Conditions",
    content: [
      "Welcome to Elios Technologies. These terms and conditions outline the rules and regulations for the use of Elios Technologies Inc's Website.",
      "By accessing this website we assume you accept these terms and conditions. Do not continue to use Elios Technologies if you do not agree to take all of the terms and conditions stated on this page.",
      "The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: 'Client', 'You' and 'Your' refers to you, the person log on this website and compliant to the Company’s terms and conditions.",
      "We employ the use of cookies. By accessing Elios Technologies, you agreed to use cookies in agreement with the Elios Technologies Inc's Privacy Policy."
    ]
  },
  privacy: {
    title: "Privacy Policy",
    content: [
      "At Elios Technologies, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Elios Technologies and how we use it.",
      "If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.",
      "This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Elios Technologies.",
      "We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, and in connection with other activities, services, features or resources we make available on our Site."
    ]
  },
  cookies: {
    title: "Cookies Policy",
    content: [
      "This is the Cookie Policy for Elios Technologies. As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience.",
      "This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.",
      "We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.",
      "You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit."
    ]
  }
};

const companyLinks: FooterLink[] = [
  { name: 'Who We Are', path: '/about' },
  { name: 'Mission & Vision', path: '/about/mission-vision' },
  { name: 'Our Team', path: '/about/team' },
  { name: 'Our Story', path: '/about/story' },
  { name: 'Investors', path: '/about/investors' },
  { name: 'Design Lab', path: '/design-lab', badge: 'Innovation' },
  { name: 'Careers', path: '/careers', badge: 'Hiring' },
  { name: 'Blog & Insights', path: '/blog' },
  { name: 'Contact Us', path: '/contact' }
];

const servicesLinksCol1: FooterLink[] = [
  { name: 'All Services', path: '/services', isHeader: true },
  { name: 'SAP Enterprise Services', path: '/sap-erp' },
  { name: 'Oracle Cloud Practices', path: '/oracle-practices' },
  { name: 'Pega Services', path: '/pega-practices' },
  { name: 'Offshore Dev Center', path: '/offshore-development-center', badge: 'Popular' },
  { name: 'Veeva Life Sciences', path: '/veeva-practices' },
  { name: 'BPM & Automation', path: '/bpm-automation' },
  { name: 'CRM & Customer 360', path: '/crm-services' }
];

const servicesLinksCol2: FooterLink[] = [
  { name: 'Custom App Engineering', path: '/application-development' },
  { name: 'Cybersecurity & Zero Trust', path: '/cyber-security' },
  { name: 'Managed Cloud Services', path: '/managed-services' },
  { name: 'On-Demand Engineering', path: '/on-demand-services' },
  { name: 'Staff Augmentation & RPO', path: '/recruitment-rpo' },
  { name: 'QA & Automated Testing', path: '/qa-testing' },
  { name: 'Architectural Workshops', path: '/architectural-workshops' }
];

const techLinksCol1: FooterLink[] = [
  { name: 'All Technologies', path: '/technologies', isHeader: true },
  { name: 'Data & Analytics', path: '/data-analytics' },
  { name: 'AI & Data Science', path: '/ai-data-science', badge: 'AI/ML' },
  { name: 'Cloud & Hybrid Integration', path: '/cloud-integration' },
  { name: 'IBM Sterling OMS', path: '/ibm-oms' },
  { name: 'BPM & Automation', path: '/bpm-automation' },
  { name: 'API Edge & IoT', path: '/api-edge-iot' },
  { name: 'Digital Transformation', path: '/digital-transformation' }
];

const techLinksCol2: FooterLink[] = [
  { name: 'Enterprise ERP Solutions', path: '/erp' },
  { name: 'Digital Experience (UX/UI)', path: '/digital-experience' },
  { name: 'EAM & Industrial IoT', path: '/eam-iot' },
  { name: 'Oracle Practices', path: '/oracle-practices' },
  { name: 'Pega Systems Practices', path: '/pega-practices' },
  { name: 'Veeva Vault Practices', path: '/veeva-practices' },
  { name: 'Cyber Security Practices', path: '/cyber-security' }
];

const officeLocations = [
  {
    city: 'Bengaluru',
    country: 'India',
    type: 'Global HQ'
  },
  {
    city: 'Hyderabad',
    country: 'India',
    type: 'Tech Center'
  },
  {
    city: 'Cary, NC',
    country: 'USA',
    type: 'North America'
  },
  {
    city: 'Dubai',
    country: 'UAE',
    type: 'MENA'
  }
];

const Footer = () => {
  const [selectedLegal, setSelectedLegal] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const activeLegal = selectedLegal ? legalContent[selectedLegal] : null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmailInput('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#071322] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-[#C9A227]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[350px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Pre-Footer Action Hub / CTA Banner */}
        <div className="mb-16 p-8 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A227]/15 border border-[#C9A227]/30 text-[#C9A227] text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Enterprise Acceleration
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                Ready to transform your enterprise architecture?
              </h3>
              <p className="text-gray-400 mt-3 text-sm sm:text-base leading-relaxed">
                Connect with our technology architects and offshore leaders to build high-performance, future-proof digital platforms.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link 
                to="/contact" 
                onClick={scrollToTop}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-[#C9A227] to-[#dfb83b] text-[#071322] font-bold text-sm hover:shadow-[0_0_25px_rgba(201,162,39,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/services" 
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/5 border border-white/15 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 mt-8 border-t border-white/10">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#C9A227]">15+</div>
              <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">99.8%</div>
              <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-medium">Delivery SLA</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#C9A227]">300+</div>
              <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-medium">Engineers & Architects</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">24 / 7</div>
              <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-medium">Global Support</div>
            </div>
          </div>
        </div>

        {/* Main Fat Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand, Mission & Direct Contact (Span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-block mb-6 group">
                <img src={LogoElios} alt="Elios Logo" className="logo-footer transition-transform duration-300 group-hover:scale-105" />
              </Link>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-sm">
                Elios Technologies is a premier global technology consulting firm enabling fortune enterprises and high-growth disruptors with modern digital architectures, enterprise ERP, and offshore innovation centers.
              </p>

              {/* Direct Reach Out Cards */}
              <div className="space-y-3.5 text-sm mb-8">
                <a 
                  href="mailto:Info@eliostechinc.com" 
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#C9A227]/50 hover:bg-[#C9A227]/5 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] flex-shrink-0 group-hover:bg-[#C9A227] group-hover:text-[#071322] transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Direct Inquiries</div>
                    <div className="text-white font-medium group-hover:text-[#C9A227] transition-colors">Info@eliostechinc.com</div>
                  </div>
                </a>

                <a 
                  href="tel:+918888888888" 
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#C9A227]/50 hover:bg-[#C9A227]/5 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] flex-shrink-0 group-hover:bg-[#C9A227] group-hover:text-[#071322] transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Global Sales Desk</div>
                    <div className="text-white font-medium group-hover:text-[#C9A227] transition-colors">+91  72599 95089</div>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Global Delivery Headquarters</div>
                    <div className="text-gray-300 text-xs leading-relaxed font-normal">CV Raman Nagar, Bangalore, India - 560093</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription Box */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 mt-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-1.5 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C9A227]" />
                Subscribe to Tech Wire
              </h5>
              <p className="text-xs text-gray-400 mb-3">
                Monthly enterprise insights, architecture reviews, and tech briefs.
              </p>
              
              {isSubscribed ? (
                <div className="flex items-center gap-2 py-2 px-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                  <input 
                    type="email" 
                    required 
                    placeholder="Enter business email" 
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="flex-1 bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227] transition-colors"
                  />
                  <button 
                    type="submit"
                    aria-label="Subscribe"
                    className="w-9 h-9 rounded-xl bg-[#C9A227] text-[#071322] flex items-center justify-center hover:bg-white transition-colors flex-shrink-0 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Company Links (Span 2) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-3">
              <Building2 className="w-4 h-4 text-[#C9A227]" />
              <h4 className="font-bold text-base text-white tracking-wide">Company</h4>
            </div>
            <ul className="space-y-3 text-sm text-gray-300">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path} 
                    className="hover:text-[#C9A227] hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#C9A227] transition-colors" />
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#C9A227]/15 text-[#C9A227] border border-[#C9A227]/30">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Enterprise Services (Span 3) */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-3">
              <h4 className="font-bold text-base text-white tracking-wide">Services</h4>
              <Link to="/services" className="text-xs text-[#C9A227] hover:underline font-semibold uppercase tracking-wider flex items-center gap-1">
                All Services <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-y-3 text-sm text-gray-300">
              {[...servicesLinksCol1, ...servicesLinksCol2].map((item, idx) => (
                <Link 
                  key={idx} 
                  to={item.path} 
                  className={`hover:text-[#C9A227] hover:translate-x-1 inline-flex items-center justify-between transition-all duration-200 group ${
                    item.isHeader ? 'text-white font-semibold mb-1' : ''
                  }`}
                >
                  <div className="inline-flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${item.isHeader ? 'bg-[#C9A227]' : 'bg-white/20 group-hover:bg-[#C9A227]'} transition-colors`} />
                    <span className={item.isHeader ? 'text-white font-medium' : ''}>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Technologies & Core Practices (Span 3) */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-3">
              <h4 className="font-bold text-base text-white tracking-wide">Technologies</h4>
              <Link to="/technologies" className="text-xs text-[#C9A227] hover:underline font-semibold uppercase tracking-wider flex items-center gap-1">
                All Tech <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 gap-y-3 text-sm text-gray-300">
              {[...techLinksCol1, ...techLinksCol2].map((item, idx) => (
                <Link 
                  key={idx} 
                  to={item.path} 
                  className={`hover:text-[#C9A227] hover:translate-x-1 inline-flex items-center justify-between transition-all duration-200 group ${
                    item.isHeader ? 'text-white font-semibold mb-1' : ''
                  }`}
                >
                  <div className="inline-flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${item.isHeader ? 'bg-[#C9A227]' : 'bg-white/20 group-hover:bg-[#C9A227]'} transition-colors`} />
                    <span className={item.isHeader ? 'text-white font-medium' : ''}>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#C9A227]/20 text-[#C9A227] border border-[#C9A227]/40">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Global Delivery Hubs & Social Links Strip - Compact Single Line */}
        <div className="py-6 border-b border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          
          {/* Office Nodes - Compact Single Line */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs">
            <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#C9A227] mr-1">
              <Globe2 className="w-4 h-4" />
              <span>Global Hubs:</span>
            </div>
            {officeLocations.map((loc, idx) => (
              <div 
                key={idx} 
                className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 flex items-center gap-1.5 text-xs text-gray-300 hover:border-[#C9A227]/40 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                <span className="font-semibold text-white">{loc.city}</span>
                <span className="text-gray-400 text-[11px]">({loc.country})</span>
              </div>
            ))}
          </div>

          {/* Social Follow Links */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 mr-1 hidden sm:inline">Follow Us:</span>
            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/company/eliostechinc" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn" 
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#C9A227] hover:border-[#C9A227] hover:text-[#071322] hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
              title="Elios Technologies on LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>

            {/* Twitter */}
            <a 
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X" 
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#C9A227] hover:border-[#C9A227] hover:text-[#071322] hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a 
              href="https://facebook.com" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook" 
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#C9A227] hover:border-[#C9A227] hover:text-[#071322] hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram" 
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#C9A227] hover:border-[#C9A227] hover:text-[#071322] hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

        </div>

        {/* Bottom Section - Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-xs">
          
          {/* Copyright */}
          <div className="order-2 md:order-1 text-center md:text-left">
            © {new Date().getFullYear()} Elios Technologies Inc. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 order-1 md:order-2">
            <button 
              onClick={() => setSelectedLegal('terms')} 
              className="hover:text-[#C9A227] transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button 
              onClick={() => setSelectedLegal('privacy')} 
              className="hover:text-[#C9A227] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setSelectedLegal('cookies')} 
              className="hover:text-[#C9A227] transition-colors cursor-pointer"
            >
              Cookies Policy
            </button>
          </div>

        </div>
      </div>

      {/* Expanded Modal Overlay - Legal Information */}
      <AnimatePresence>
        {selectedLegal && activeLegal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLegal(null)}
              className="absolute inset-0 bg-[#071322]/70 backdrop-blur-md cursor-pointer"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto p-8 md:p-14"
            >
              <button 
                onClick={() => setSelectedLegal(null)}
                aria-label="Close Modal"
                className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-gray-50 text-[#0B1F3A] shadow-sm flex items-center justify-center hover:bg-[#0B1F3A] hover:text-white transition-colors cursor-pointer border border-gray-100"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="border-b border-gray-100 pb-8 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 text-[#C9A227] font-semibold text-xs mb-3">
                  Legal & Compliance
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#0B1F3A]">
                  {activeLegal.title}
                </h3>
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg">
                {activeLegal.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;

