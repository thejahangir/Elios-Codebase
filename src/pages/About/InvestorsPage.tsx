import { motion } from 'framer-motion';
import InnerPageHero from '../../components/InnerPageHero';

interface ExecutiveMember {
  id: string;
  name: string;
  role: string;
  bio: string;
}

const executives: ExecutiveMember[] = [
  {
    id: "sudhama-ts",
    name: "Sudhama TS",
    role: "Executive",
    bio: "Executive leader and investor contributing to enterprise growth, corporate strategy, and long-term value creation at Elios Technologies.",
  },
  {
    id: "darshan",
    name: "Darshan",
    role: "Executive",
    bio: "Executive leader and investor driving strategic partnerships, operational excellence, and enterprise expansion initiatives.",
  }
];

// Sketch/Silhouette placeholder thumbnail for executives
const ExecutiveSketchThumbnail = ({ name }: { name: string }) => (
  <div className="relative w-full aspect-square md:aspect-[3/4] bg-gradient-to-b from-slate-100 via-slate-50 to-gray-100 flex flex-col items-center justify-center p-6 select-none overflow-hidden">
    {/* Subtle grid background */}
    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0B1F3A_1px,transparent_1px)] [background-size:16px_16px]" />
    
    {/* Ambient subtle glow */}
    <div className="absolute w-40 h-40 bg-[#C9A227]/10 rounded-full blur-2xl pointer-events-none" />

    {/* Executive Silhouette / Sketch Art */}
    <svg 
      viewBox="0 0 120 140" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-32 h-36 md:w-36 md:h-44 text-[#0B1F3A]/30 group-hover:text-[#0B1F3A]/50 transition-colors duration-500 relative z-10"
    >
      {/* Head */}
      <circle cx="60" cy="42" r="22" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 3" className="fill-[#0B1F3A]/5" />
      <path d="M44 38 C44 26 52 18 60 18 C68 18 76 26 76 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Collar & Tie sketch */}
      <path d="M50 68 L60 84 L70 68" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M57 84 L60 106 L63 84" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <polygon points="57,84 63,84 65,108 60,116 55,108" fill="currentColor" opacity="0.15" />

      {/* Shoulders / Suit */}
      <path d="M22 128 C24 94 40 76 60 76 C80 76 96 94 98 128" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M22 128 H98" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
      
      {/* Suit Lapels */}
      <path d="M42 77 L34 112" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M78 77 L86 112" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>

    {/* Placeholder Badge */}
    <div className="relative z-10 mt-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/80 shadow-xs">
      <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
      <span className="text-[11px] font-bold tracking-wider uppercase text-gray-500">{name}</span>
    </div>
  </div>
);

const InvestorsPage = () => {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      <InnerPageHero 
        title="Investors" 
        subtitle="Meet the executive leaders and strategic investors supporting Elios Technologies' growth and long-term vision."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-6">Our Executives</h2>
            <div className="w-24 h-1 bg-[#C9A227] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12 lg:gap-x-20 max-w-5xl mx-auto">
            {executives.map((member) => (
              <motion.div 
                key={member.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Thumbnail Container with corner bracket hover effect */}
                <div className="relative w-full md:w-2/5 shrink-0 overflow-hidden rounded-2xl border border-gray-200/70">
                  {/* Decorative corner accents on hover */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#C9A227] opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#C9A227] opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                  
                  <ExecutiveSketchThumbnail name={member.name} />
                </div>
                
                {/* Content */}
                <div className="w-full md:w-3/5 py-2 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#0B1F3A] mb-1 group-hover:text-[#C9A227] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[#C9A227] font-semibold mb-3 text-sm uppercase tracking-wider">
                      {member.role}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                      {member.bio}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-medium">
                    <span>Elios Technologies</span>
                    <span className="text-[#0B1F3A] font-semibold">Executive Board</span>
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

export default InvestorsPage;
