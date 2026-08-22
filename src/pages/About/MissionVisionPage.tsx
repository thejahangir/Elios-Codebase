import { motion } from 'framer-motion';
import InnerPageHero from '../../components/InnerPageHero';
import { Target, Eye, Compass, Rocket } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const MissionVisionPage = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      <InnerPageHero 
        title="Our Mission & Vision" 
        subtitle="Driving innovation and excellence in everything we do."
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-24 relative overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-[#0B1F3A] mb-6">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  To empower businesses worldwide through innovative technology solutions that drive growth, streamline operations, and create lasting value. We strive to be the catalyst for our clients' digital transformation journey.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-[#0B1F3A] p-12 rounded-3xl shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A227]/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform group-hover:scale-150 duration-700" />
                
                <div className="w-16 h-16 bg-white/10 text-[#C9A227] rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                  <Eye className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                <p className="text-white/80 leading-relaxed text-lg mb-6">
                  To be the globally recognized leader in enterprise technology consulting, setting the standard for excellence, innovation, and client success in an ever-evolving digital landscape.
                </p>
                <p className="text-white/80 leading-relaxed text-lg">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-6">Our Core Values</h2>
            <p className="text-gray-600 text-lg">
              The principles that guide our decisions, actions, and interactions every single day.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Innovation", icon: <Rocket className="w-6 h-6" />, desc: "Constantly pushing boundaries and exploring new technologies to deliver cutting-edge solutions." },
              { title: "Excellence", icon: <Target className="w-6 h-6" />, desc: "Committed to delivering the highest quality in every project, service, and interaction." },
              { title: "Integrity", icon: <Compass className="w-6 h-6" />, desc: "Acting with honesty, transparency, and upholding the highest ethical standards." },
              { title: "Collaboration", icon: <Target className="w-6 h-6" />, desc: "Working seamlessly together with our clients and partners to achieve shared success." }
            ].map((value, idx) => (
              <FadeIn key={idx} delay={0.1 * idx}>
                <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#C9A227]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0B1F3A] mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVisionPage;
