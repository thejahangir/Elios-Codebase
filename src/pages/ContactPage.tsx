
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Globe } from 'lucide-react';

const offices = [
  {
    city: "Silicon Valley, USA",
    address: "123 Innovation Drive, CA 94025",
    phone: "+1 (555) 123-4567",
    email: "usa@eliostechnologies.com",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    city: "Dubai, UAE",
    address: "Dubai Internet City, Office 405",
    phone: "+971 4 123 4567",
    email: "dubai@eliostechnologies.com",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    city: "Hyderabad, IND",
    address: "Cyber Towers, Hitec City 500081",
    phone: "+91 40 1234 5678",
    email: "hyderabad@eliostechnologies.com",
    image: "https://images.unsplash.com/photo-1570795876989-bcec725b8e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    city: "Bangalore, IND",
    address: "Wilson Garden, Karnataka 560030",
    phone: "+91 80 1234 5678",
    email: "bangalore@eliostechnologies.com",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Custom Hero / Form Section */}
      <section className="relative pt-32 lg:pt-48 pb-20 lg:pb-32 bg-[#0B1F3A] overflow-hidden">
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
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Mail className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email Us Directly</p>
                    <p className="font-bold">contact@eliostechnologies.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
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
                
                <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">First Name</label>
                      <input type="text" className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227] focus:bg-white/10 transition-all" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Last Name</label>
                      <input type="text" className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227] focus:bg-white/10 transition-all" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Work Email</label>
                    <input type="email" className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227] focus:bg-white/10 transition-all" placeholder="john@company.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Service Required</label>
                    <select className="w-full px-5 py-4 rounded-xl bg-[#122a4f] border border-white/10 text-white focus:outline-none focus:border-[#C9A227] transition-all appearance-none cursor-pointer">
                      <option className="bg-[#0B1F3A]">Select a service...</option>
                      <option className="bg-[#0B1F3A]">SAP ERP Services</option>
                      <option className="bg-[#0B1F3A]">Cloud Migration</option>
                      <option className="bg-[#0B1F3A]">Application Development</option>
                      <option className="bg-[#0B1F3A]">Cyber Security</option>
                      <option className="bg-[#0B1F3A]">Other Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Message</label>
                    <textarea rows={4} className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227] focus:bg-white/10 transition-all resize-none" placeholder="Tell us about your requirements..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-[#C9A227] hover:bg-white text-[#0B1F3A] font-bold text-lg py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(201,162,39,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] group">
                    <span>Submit Request</span>
                    <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
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

                  <div className="pt-6 border-t border-gray-100 space-y-4">
                    <a href={`tel:${office.phone}`} className="flex items-center gap-4 text-sm font-medium text-[#0B1F3A] hover:text-[#C9A227] transition-colors group/link">
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover/link:bg-[#C9A227] group-hover/link:shadow-md transition-all">
                        <Phone className="w-4 h-4 text-gray-500 group-hover/link:text-white transition-colors" />
                      </div>
                      {office.phone}
                    </a>
                    <a href={`mailto:${office.email}`} className="flex items-center gap-4 text-sm font-medium text-[#0B1F3A] hover:text-[#C9A227] transition-colors group/link">
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover/link:bg-[#C9A227] group-hover/link:shadow-md transition-all">
                        <Mail className="w-4 h-4 text-gray-500 group-hover/link:text-white transition-colors" />
                      </div>
                      {office.email}
                    </a>
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
