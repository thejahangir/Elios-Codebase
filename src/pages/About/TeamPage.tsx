import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Mail } from 'lucide-react';
import InnerPageHero from '../../components/InnerPageHero';
import jahangirImg from '../../assets/executive_working.png';

// Custom SVG Icons
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const teamMembers = [
  {
    id: "michael-chen",
    name: "Michael Chen",
    role: "Chief Executive Officer",
    image: jahangirImg,
    bio: "With over 20 years of experience in enterprise technology, Michael leads our vision and strategic direction.",
    fullBio: "Michael's career spans over two decades in Silicon Valley, leading cross-functional teams in top tier Fortune 500 companies. As CEO of Elios, he has pioneered multiple strategic shifts, steering the company toward cloud-native and AI-first paradigms. Under his leadership, the company has seen consistent year-over-year growth of 40%.",
    expertise: ["Strategic Vision", "M&A", "Cloud Infrastructure", "Executive Leadership"],
    quote: "Technology is only as powerful as the people and purpose behind it."
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Chief Technology Officer",
    image: jahangirImg,
    bio: "Sarah pioneers our technical innovations, bringing expertise from top Silicon Valley tech giants.",
    fullBio: "Sarah is a visionary technologist who served as a Principal Engineer at Google before joining Elios. She architects our core technical frameworks and ensures that our client solutions are built on highly scalable, resilient foundations.",
    expertise: ["Distributed Systems", "Microservices Architecture", "Machine Learning", "Tech Strategy"],
    quote: "Innovation isn't just about the latest tools; it's about solving the right problems elegantly."
  },
  {
    id: "david-rodriguez",
    name: "David Rodriguez",
    role: "Head of Cloud Infrastructure",
    image: jahangirImg,
    bio: "An AWS and Azure certified architect, David ensures our clients' systems are robust and scalable.",
    fullBio: "David has personally overseen the migration of over 200 enterprise systems to the cloud. His deep technical acumen spans multi-cloud architectures, Kubernetes, and severe fault-tolerance patterns.",
    expertise: ["AWS / Azure / GCP", "Kubernetes", "DevSecOps", "Disaster Recovery"],
    quote: "The cloud is not just a destination; it's a new way of operating your business."
  },
  {
    id: "emily-watson",
    name: "Emily Watson",
    role: "Dir. of Digital Transformation",
    image: jahangirImg,
    bio: "Emily specializes in restructuring legacy systems and adopting modern digital workflows for enterprises.",
    fullBio: "With a background in organizational psychology and enterprise software, Emily bridges the gap between human processes and technical implementation. She helps massive organizations overcome resistance to change.",
    expertise: ["Change Management", "Process Optimization", "Agile Methodologies", "UI/UX Strategy"],
    quote: "Digital transformation is 20% technology and 80% human psychology."
  },
  {
    id: "james-thorne",
    name: "James Thorne",
    role: "Lead SAP Consultant",
    image: jahangirImg,
    bio: "James brings deep knowledge of SAP ERP implementations and optimizations across various industries.",
    fullBio: "James has spent 15 years mastering the SAP ecosystem. From initial architecture to go-live, he has led ERP overhauls for global manufacturing and logistics giants.",
    expertise: ["SAP S/4HANA", "ERP Architecture", "Supply Chain Mgmt", "System Integration"],
    quote: "A well-implemented ERP is the central nervous system of any large enterprise."
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "Head of Data & AI",
    image: jahangirImg,
    bio: "Priya leads our AI initiatives, helping clients leverage their data for predictive insights.",
    fullBio: "Priya holds a Ph.D. in Data Science and brings a rigorous academic background combined with sharp business acumen. She builds data pipelines that turn terabytes of raw unstructured data into actionable intelligence.",
    expertise: ["Generative AI", "Predictive Modeling", "Data Lakes", "Big Data Analytics"],
    quote: "Data is abundant, but true insight is rare and invaluable."
  }
];

const TeamPage = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedMember = teamMembers.find(m => m.id === selectedId);

  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      <InnerPageHero 
        title="Leadership" 
        subtitle="Meet the visionary leaders and brilliant minds driving Elios Technologies forward."
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-6">Our Executive Team</h2>
            <div className="w-24 h-1 bg-[#C9A227] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12 lg:gap-x-20">
            {teamMembers.map((member) => (
              <motion.div 
                layoutId={`card-${member.id}`}
                key={member.id} 
                onClick={() => setSelectedId(member.id)}
                className="group cursor-pointer flex flex-col md:flex-row gap-6 items-start"
              >
                {/* Image Container with premium corner bracket hover effect */}
                <div className="relative w-full md:w-2/5 shrink-0 overflow-hidden rounded-2xl">
                  {/* Decorative corner accents on hover */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-[#C9A227] opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 transform -translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-[#C9A227] opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0" />
                  
                  {/* Overlay tint */}
                  <div className="absolute inset-0 bg-[#0B1F3A]/30 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />

                  <motion.div 
                    layoutId={`image-container-${member.id}`}
                    className="relative aspect-square md:aspect-[3/4] overflow-hidden bg-gray-100 w-full h-full"
                  >
                    <motion.img 
                      layoutId={`image-${member.id}`}
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="w-full md:w-3/5 py-2 flex flex-col h-full justify-between">
                  <div>
                    <motion.h3 layoutId={`name-${member.id}`} className="text-3xl font-bold text-[#0B1F3A] mb-1 group-hover:text-[#C9A227] transition-colors">
                      {member.name}
                    </motion.h3>
                    <motion.p layoutId={`role-${member.id}`} className="text-gray-500 font-medium mb-4 text-sm uppercase tracking-wider">
                      {member.role}
                    </motion.p>
                    <motion.p layoutId={`bio-${member.id}`} className="text-gray-600 leading-relaxed line-clamp-3">
                      {member.bio}
                    </motion.p>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-6">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center group-hover:bg-[#0B1F3A] group-hover:text-white transition-colors">
                        <LinkedInIcon className="w-4 h-4" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center group-hover:bg-[#0B1F3A] group-hover:text-white transition-colors">
                        <XIcon className="w-4 h-4" />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-[#C9A227] text-sm font-bold uppercase tracking-wider group-hover:text-[#0B1F3A] transition-colors">
                      <span>Full Bio</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Expanded Modal Overlay - Light Theme */}
      <AnimatePresence>
        {selectedId && selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-[#0B1F3A]/60 backdrop-blur-md cursor-pointer"
            />
            
            <motion.div 
              layoutId={`card-${selectedMember.id}`}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto p-8 md:p-14"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-gray-50 text-[#0B1F3A] shadow-sm flex items-center justify-center hover:bg-[#0B1F3A] hover:text-white transition-colors cursor-pointer border border-gray-100"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Profile Section */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start border-b border-gray-100 pb-10">
                <motion.div layoutId={`image-container-${selectedMember.id}`} className="w-48 h-48 shrink-0 rounded-full overflow-hidden shadow-lg border-4 border-white">
                  <motion.img 
                    layoutId={`image-${selectedMember.id}`}
                    src={selectedMember.image} 
                    alt={selectedMember.name} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <div className="text-center md:text-left flex-1 pt-2">
                  <motion.h3 layoutId={`name-${selectedMember.id}`} className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-2">
                    {selectedMember.name}
                  </motion.h3>
                  <motion.p layoutId={`role-${selectedMember.id}`} className="text-[#C9A227] font-bold text-lg uppercase tracking-wider mb-8">
                    {selectedMember.role}
                  </motion.p>
                  
                  <div className="flex gap-4 justify-center md:justify-start">
                    <button className="w-10 h-10 rounded-full bg-gray-50 shadow-sm text-[#0B1F3A] flex items-center justify-center hover:bg-[#C9A227] hover:text-white transition-colors border border-gray-100 cursor-pointer">
                      <LinkedInIcon className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-50 shadow-sm text-[#0B1F3A] flex items-center justify-center hover:bg-[#C9A227] hover:text-white transition-colors border border-gray-100 cursor-pointer">
                      <XIcon className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-50 shadow-sm text-[#0B1F3A] flex items-center justify-center hover:bg-[#C9A227] hover:text-white transition-colors border border-gray-100 cursor-pointer">
                      <InstaIcon className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-50 shadow-sm text-[#0B1F3A] flex items-center justify-center hover:bg-[#C9A227] hover:text-white transition-colors border border-gray-100 cursor-pointer">
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Body Content */}
              <div className="pt-10 flex flex-col lg:flex-row gap-12">
                <div className="w-full lg:w-2/3 space-y-6 text-gray-600 leading-relaxed text-lg">
                  <div className="text-2xl md:text-3xl font-serif italic text-[#0B1F3A] leading-tight mb-8">
                    "{selectedMember.quote}"
                  </div>
                  <motion.p layoutId={`bio-${selectedMember.id}`}>{selectedMember.fullBio}</motion.p>
                </div>
                
                <div className="w-full lg:w-1/3">
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 h-full">
                    <h4 className="text-[#0B1F3A] font-bold mb-6 uppercase text-sm tracking-wider flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#C9A227] rounded-full" />
                      Areas of Expertise
                    </h4>
                    <div className="flex flex-col gap-4">
                      {selectedMember.expertise.map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <ArrowRight className="w-4 h-4 text-[#C9A227]" />
                          <span className="font-medium text-gray-700">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default TeamPage;
