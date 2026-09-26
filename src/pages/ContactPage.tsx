import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Globe, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_fdriwwb';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_9y5mrvj';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '9yR33YbGRqAQipn7D';
const EMAILJS_TO_EMAIL = import.meta.env.VITE_EMAILJS_TO_EMAIL || 'elios.tech.26@gmail.com';

const offices = [
  {
    city: "Cary (NC), USA",
    address: "964 High House Rd #3023, Cary, NC 27513",
    phone: "+1 (555) 123-4567",
    emails: [
      { label: "General Inquiries", address: "Info@eliostechinc.com" },
      { label: "HR & Careers", address: "hr@eliostechinc.com" }
    ],
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    city: "Dubai, UAE",
    address: "Dubai Internet City, Office 405",
    phone: "+971 4 123 4567",
    emails: [
      { label: "General Inquiries", address: "Info@eliostechinc.com" },
      { label: "HR & Careers", address: "hr@eliostechinc.com" }
    ],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    city: "Hyderabad, IND",
    address: "Cyber Towers, Hitec City 500081",
    phone: "+91 40 1234 5678",
    emails: [
      { label: "General Inquiries", address: "Info@eliostechinc.com" },
      { label: "HR & Careers", address: "hr@eliostechinc.com" }
    ],
    image: "https://images.unsplash.com/photo-1570795876989-bcec725b8e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    city: "Bangalore, IND",
    address: "First Floor, 272/4, 4th Cross, Nagavarapalya, CV Raman Nagar, Near Gopalan Mall, Bangalore-560093",
    phone: "+91 80 1234 5678",
    emails: [
      { label: "General Inquiries", address: "Info@eliostechinc.com" },
      { label: "HR & Careers", address: "hr@eliostechinc.com" }
    ],
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.firstName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (First Name, Work Email, and Message).');
      return;
    }

    setStatus('loading');

    const templateParams = {
      // Recipient fields
      to_email: EMAILJS_TO_EMAIL,
      recipient: EMAILJS_TO_EMAIL,
      to_name: 'Elios Technologies',

      // Sender identity
      first_name: formData.firstName,
      last_name: formData.lastName,
      from_name: `${formData.firstName} ${formData.lastName}`.trim(),
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      user_name: `${formData.firstName} ${formData.lastName}`.trim(),

      // Email address fields
      from_email: formData.email,
      reply_to: formData.email,
      user_email: formData.email,
      email: formData.email,

      // Content & service
      service: formData.service || 'Not specified',
      service_required: formData.service || 'Not specified',
      message: formData.message,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        service: '',
        message: ''
      });
    } catch (error: any) {
      console.error('EmailJS submission error:', error);
      setStatus('error');
      if (!EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        setErrorMessage('EmailJS Public Key is required. Please set VITE_EMAILJS_PUBLIC_KEY and VITE_EMAILJS_TEMPLATE_ID in your .env file.');
      } else {
        setErrorMessage(error?.text || error?.message || 'Failed to send message. Please verify your EmailJS service and template settings.');
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Custom Hero / Form Section */}
      <section id="send-message" className="relative pt-32 lg:pt-48 pb-20 lg:pb-32 bg-[#0B1F3A] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-b from-[#C9A227]/20 to-transparent blur-3xl" />
          <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-t from-[#C9A227]/10 to-transparent blur-3xl" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Text Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-5/12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#C9A227] font-medium text-sm mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse"></span>
                We are online and ready to help
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-yellow-200">extraordinary.</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                Whether you're looking to migrate to the cloud, implement SAP S/4HANA, or completely redesign your digital infrastructure, our global experts are here.
              </p>
              
              <div className="hidden lg:flex flex-col gap-6">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                    <Mail className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email Us Directly</p>
                    <a href="mailto:elios.tech.26@gmail.com" className="font-bold text-white hover:text-[#C9A227] transition-colors block">
                      elios.tech.26@gmail.com
                    </a>
                    <a href="mailto:Info@eliostechinc.com" className="text-sm text-gray-300 hover:text-[#C9A227] transition-colors block">
                      Info@eliostechinc.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                    <Phone className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call Support</p>
                    <p className="font-bold">+1 (888) 888-8888</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Side - Glassmorphism */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-7/12"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A227]/20 blur-3xl rounded-full" />
                
                <h3 className="text-2xl font-bold text-white mb-8">Send us a message</h3>
                
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Message sent successfully!</p>
                      <p className="text-sm text-emerald-200/90 mt-1">Thank you for reaching out. Our team will review your inquiry and get back to you shortly.</p>
                    </div>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="mb-6 p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-200 flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Submission Error</p>
                      <p className="text-sm text-rose-200/90 mt-1">{errorMessage}</p>
                    </div>
                  </motion.div>
                )}

                <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">First Name <span className="text-[#C9A227]">*</span></label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227] focus:bg-white/10 transition-all" 
                        placeholder="John" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Last Name</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227] focus:bg-white/10 transition-all" 
                        placeholder="Doe" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Work Email <span className="text-[#C9A227]">*</span></label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227] focus:bg-white/10 transition-all" 
                      placeholder="john@company.com" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Service Required</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-[#122a4f] border border-white/10 text-white focus:outline-none focus:border-[#C9A227] transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0B1F3A]">Select a service...</option>
                      <option value="SAP ERP Services" className="bg-[#0B1F3A]">SAP ERP Services</option>
                      <option value="Cloud Migration" className="bg-[#0B1F3A]">Cloud Migration</option>
                      <option value="Application Development" className="bg-[#0B1F3A]">Application Development</option>
                      <option value="Cyber Security" className="bg-[#0B1F3A]">Cyber Security</option>
                      <option value="Offshore Development Center" className="bg-[#0B1F3A]">Offshore Development Center</option>
                      <option value="Oracle Practices" className="bg-[#0B1F3A]">Oracle Practices</option>
                      <option value="Other Inquiry" className="bg-[#0B1F3A]">Other Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Message <span className="text-[#C9A227]">*</span></label>
                    <textarea 
                      rows={4} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227] focus:bg-white/10 transition-all resize-none" 
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full bg-[#C9A227] hover:bg-white text-[#0B1F3A] font-bold text-lg py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(201,162,39,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] group disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Global Offices Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-[#C9A227]" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A]">Global Presence</h2>
              </div>
              <p className="text-gray-600 text-lg">
                With a footprint spanning North America, the Middle East, and Asia, our global delivery model ensures 24/7 support and localized enterprise expertise.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offices.map((office, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl border border-gray-100 hover:border-[#C9A227]/50 shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden flex flex-col sm:flex-row h-full cursor-pointer"
              >
                {/* Image Left Side */}
                <div className="relative w-full sm:w-2/5 h-56 sm:h-auto overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-[#0B1F3A]/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={office.image} 
                    alt={office.city} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 z-20">
                     <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-lg">
                       <MapPin className="w-5 h-5 text-white" />
                     </div>
                  </div>
                </div>
                
                {/* Content Right Side */}
                <div className="p-8 sm:p-10 relative z-10 flex-grow bg-white flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-[#0B1F3A] mb-3 group-hover:text-[#C9A227] transition-colors">{office.city}</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    {office.address}
                  </p>

                  <div className="pt-6 border-t border-gray-100 space-y-3">
                    <a href={`tel:${office.phone}`} className="flex items-center gap-3 text-sm font-medium text-[#0B1F3A] hover:text-[#C9A227] transition-colors group/link">
                      <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center group-hover/link:bg-[#C9A227] group-hover/link:shadow-md transition-all shrink-0">
                        <Phone className="w-4 h-4 text-gray-500 group-hover/link:text-white transition-colors" />
                      </div>
                      <span>{office.phone}</span>
                    </a>
                    {office.emails.map((em, eIdx) => (
                      <a key={eIdx} href={`mailto:${em.address}`} className="flex items-center gap-3 text-sm font-medium text-[#0B1F3A] hover:text-[#C9A227] transition-colors group/link">
                        <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center group-hover/link:bg-[#C9A227] group-hover/link:shadow-md transition-all shrink-0">
                          <Mail className="w-4 h-4 text-gray-500 group-hover/link:text-white transition-colors" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[11px] text-gray-400 leading-tight">{em.label}</span>
                          <span className="text-gray-800 group-hover/link:text-[#C9A227] transition-colors">{em.address}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default ContactPage;
