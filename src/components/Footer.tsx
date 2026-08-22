import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoElios from '../assets/elios-logo-1.png';

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

const Footer = () => {
  const [selectedLegal, setSelectedLegal] = useState<string | null>(null);

  const activeLegal = selectedLegal ? legalContent[selectedLegal] : null;

  return (
    <footer className="bg-[#0B1F3A] text-white pt-24 pb-12 border-t border-[#0B1F3A] relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Top Section - Fat Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-10">
          
          {/* Column 1: Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={LogoElios} alt="Elios Logo" className="logo-footer" />
            </Link>
            <p className="text-gray-400 mb-8 max-w-sm text-sm leading-relaxed">
              Global technology consulting firm helping enterprises transform the way they operate through robust digital architectures and innovative solutions.
            </p>
            
            <div className="space-y-4 mb-8 text-sm">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#C9A227]" />
                <span>Wilson Garden, Bangalore, India - 560030</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#C9A227]" />
                <span>+91 (888) 888-8888</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#C9A227]" />
                <span>contact@eliostechnologies.com</span>
              </div>
            </div>

          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="font-bold text-base mb-6 text-white tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-[#C9A227] transition-colors">Who We Are</Link></li>
              <li><Link to="/about/mission-vision" className="hover:text-[#C9A227] transition-colors">Mission & Vision</Link></li>
              <li><Link to="/about/team" className="hover:text-[#C9A227] transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="hover:text-[#C9A227] transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-[#C9A227] transition-colors">Blog & Insights</Link></li>
              <li><Link to="/contact" className="hover:text-[#C9A227] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-bold text-base mb-6 text-white tracking-wide">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/sap-erp" className="hover:text-[#C9A227] transition-colors">SAP ERP Services</Link></li>
              <li><Link to="/migration" className="hover:text-[#C9A227] transition-colors">Cloud Migration</Link></li>
              <li><Link to="/application-development" className="hover:text-[#C9A227] transition-colors">App Development</Link></li>
              <li><Link to="/cloud-devops" className="hover:text-[#C9A227] transition-colors">Cloud & DevOps</Link></li>
              <li><Link to="/enterprise-mobility" className="hover:text-[#C9A227] transition-colors">Enterprise Mobility</Link></li>
            </ul>
          </div>

          {/* Column 4: Technologies */}
          <div>
            <h4 className="font-bold text-base mb-6 text-white tracking-wide">Technologies</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/data-analytics" className="hover:text-[#C9A227] transition-colors">Data & Analytics</Link></li>
              <li><Link to="/ai-data-science" className="hover:text-[#C9A227] transition-colors">AI & Data Science</Link></li>
              <li><Link to="/cloud-integration" className="hover:text-[#C9A227] transition-colors">Cloud & Integration</Link></li>
              <li><Link to="/ibm-oms" className="hover:text-[#C9A227] transition-colors">IBM OMS</Link></li>
              <li><Link to="/bpm-automation" className="hover:text-[#C9A227] transition-colors">BPM & Automation</Link></li>
              <li><Link to="/oracle-practices" className="hover:text-[#C9A227] transition-colors">Oracle Practices</Link></li>
              <li><Link to="/pega-practices" className="hover:text-[#C9A227] transition-colors">Pega Practices</Link></li>
              <li><Link to="/veeva-practices" className="hover:text-[#C9A227] transition-colors">Veeva Practices</Link></li>
              <li><Link to="/cyber-security" className="hover:text-[#C9A227] transition-colors">Cyber Security Practices</Link></li>
            </ul>
          </div>

        </div>

        {/* Centered Social Media Section */}
        <div className="flex flex-col items-center justify-center pt-10 pb-8 border-t border-white/10">
          <h4 className="font-semibold text-white tracking-[0.2em] uppercase text-xs mb-8">Follow us on</h4>
          <div className="flex gap-6">
            <a href="#" aria-label="LinkedIn" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#C9A227] hover:border-[#C9A227] hover:text-[#0B1F3A] hover:-translate-y-1 transition-all duration-300 shadow-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#C9A227] hover:border-[#C9A227] hover:text-[#0B1F3A] hover:-translate-y-1 transition-all duration-300 shadow-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#C9A227] hover:border-[#C9A227] hover:text-[#0B1F3A] hover:-translate-y-1 transition-all duration-300 shadow-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#C9A227] hover:border-[#C9A227] hover:text-[#0B1F3A] hover:-translate-y-1 transition-all duration-300 shadow-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Section - Legal & Copyright */}
        <div className="pt-8 pb-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <div className="flex gap-6 order-1 md:order-2">
            <button onClick={() => setSelectedLegal('terms')} className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</button>
            <button onClick={() => setSelectedLegal('privacy')} className="hover:text-white transition-colors cursor-pointer">Privacy Policy</button>
            <button onClick={() => setSelectedLegal('cookies')} className="hover:text-white transition-colors cursor-pointer">Cookies Policy</button>
          </div>
          <div className="order-2 md:order-1">
            © {new Date().getFullYear()} Elios Technologies Inc. All rights reserved.
          </div>
        </div>
      </div>

      {/* Expanded Modal Overlay - Light Theme */}
      <AnimatePresence>
        {selectedLegal && activeLegal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLegal(null)}
              className="absolute inset-0 bg-[#0B1F3A]/60 backdrop-blur-md cursor-pointer"
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
                className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-gray-50 text-[#0B1F3A] shadow-sm flex items-center justify-center hover:bg-[#0B1F3A] hover:text-white transition-colors cursor-pointer border border-gray-100"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="border-b border-gray-100 pb-8 mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-[#0B1F3A]">
                  {activeLegal.title}
                </h3>
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
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
