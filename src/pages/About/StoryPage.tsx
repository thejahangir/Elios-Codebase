import { motion } from 'framer-motion';
import InnerPageHero from '../../components/InnerPageHero';

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

const timelineEvents = [
  {
    year: "2010",
    title: "The Beginning",
    description: "Founded in a small garage with a vision to revolutionize enterprise technology consulting. We started with just 3 dedicated engineers."
  },
  {
    year: "2014",
    title: "Global Expansion",
    description: "Opened our first international office in London, expanding our reach and serving our first Fortune 500 client."
  },
  {
    year: "2018",
    title: "Cloud Native Shift",
    description: "Embraced the cloud revolution, partnering with AWS, Azure, and GCP to deliver scalable infrastructure solutions."
  },
  {
    year: "2022",
    title: "AI Integration",
    description: "Launched our dedicated AI & Data Science division, integrating cutting-edge machine learning into our core offerings."
  },
  {
    year: "2026",
    title: "The Future",
    description: "Continuing our journey of excellence, with over 1000+ experts globally and continuing to push the boundaries of innovation."
  }
];

const StoryPage = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      <InnerPageHero 
        title="Our Story" 
        subtitle="A journey of innovation, perseverance, and transforming ideas into reality."
        backgroundImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          
          <FadeIn className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3A] mb-8 leading-tight">
              From a vision to a global enterprise technology partner.
            </h2>
            <div className="w-24 h-1 bg-[#C9A227] mb-8"></div>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="mb-6">
                Our story began with a simple belief: technology should empower businesses, not constrain them. Over a decade ago, we recognized a gap between what technology could do and how businesses were actually using it. 
              </p>
              <p className="mb-6">
                We set out to bridge that gap. What started as a small team of passionate technologists has grown into a global powerhouse of innovation. We've weathered technological shifts, economic changes, and global challenges by staying true to our core mission: delivering excellence.
              </p>
              <p>
                Today, we are proud to be the trusted technology partner for hundreds of organizations worldwide, helping them navigate the complexities of digital transformation and achieve unprecedented growth.
              </p>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-6">Our Journey</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Milestones that define who we are today.
            </p>
          </FadeIn>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block transform -translate-x-1/2"></div>
            
            <div className="space-y-16">
              {timelineEvents.map((event, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[50%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#C9A227] rounded-full hidden md:block z-10 ring-4 ring-white"></div>
                  
                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <FadeIn delay={0.2} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                      <span className="text-[#C9A227] font-bold text-xl mb-2 block">{event.year}</span>
                      <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">{event.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </FadeIn>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default StoryPage;
