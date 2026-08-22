import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, ArrowRight, Star, Heart, Zap, Coffee } from 'lucide-react';
import InnerPageHero from '../components/InnerPageHero';

const jobs = [
  {
    title: "Senior Cloud Architect",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Lead the design and implementation of enterprise-scale cloud migrations for Fortune 500 clients."
  },
  {
    title: "SAP S/4HANA Consultant",
    department: "Enterprise Solutions",
    location: "Dubai, UAE",
    type: "Full-time",
    description: "Drive digital transformation journeys by implementing and customizing core SAP modules."
  },
  {
    title: "AI/ML Engineer",
    department: "Data & Analytics",
    location: "Silicon Valley, USA",
    type: "Remote",
    description: "Develop cutting-edge predictive models and integrate Generative AI into client workflows."
  },
  {
    title: "UI/UX Designer",
    department: "Digital Experience",
    location: "Hyderabad, India",
    type: "Full-time",
    description: "Craft intuitive, human-centric enterprise applications and complex B2B portals."
  },
  {
    title: "Cyber Security Analyst",
    department: "Security",
    location: "Bangalore, India",
    type: "Hybrid",
    description: "Monitor, detect, and respond to advanced persistent threats in a global SOC environment."
  },
  {
    title: "Technical Project Manager",
    department: "Delivery",
    location: "Remote (Global)",
    type: "Contract",
    description: "Coordinate cross-functional agile teams to deliver complex multi-million dollar software projects."
  }
];

const perks = [
  { title: "Competitive Salary", icon: <Star /> },
  { title: "Comprehensive Health", icon: <Heart /> },
  { title: "Fast-Track Growth", icon: <Zap /> },
  { title: "Flexible Work", icon: <Coffee /> }
];

const CareersPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <InnerPageHero 
        title="Careers" 
        subtitle="Join our global team of innovators and shape the future of enterprise technology."
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-6">Why Join Elios?</h2>
            <div className="w-24 h-1 bg-[#C9A227] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600">
              We don't just offer jobs; we offer trajectories. At Elios Technologies, you'll work with the brightest minds on projects that define the digital future of massive enterprises.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            {perks.map((perk, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-[#0B1F3A]/5 text-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-4">
                  {perk.icon}
                </div>
                <h3 className="font-bold text-[#0B1F3A]">{perk.title}</h3>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#0B1F3A] mb-2">Open Positions</h2>
              <p className="text-gray-500">Find your next big opportunity.</p>
            </div>
            
            <div className="mt-6 md:mt-0 flex gap-4">
              <select className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 outline-none focus:border-[#C9A227]">
                <option>All Departments</option>
                <option>Engineering</option>
                <option>Data & Analytics</option>
                <option>Design</option>
              </select>
              <select className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 outline-none focus:border-[#C9A227]">
                <option>All Locations</option>
                <option>Bangalore</option>
                <option>Dubai</option>
                <option>USA</option>
                <option>Remote</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#C9A227]/50 transition-all group flex flex-col h-full"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#0B1F3A]/5 text-[#0B1F3A] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                    {job.department}
                  </span>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-3 group-hover:text-[#C9A227] transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.type}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {job.description}
                </p>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button className="flex items-center gap-2 text-[#0B1F3A] font-bold text-sm uppercase tracking-wider hover:text-[#C9A227] transition-colors group-hover:translate-x-2 transform duration-300">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default CareersPage;
