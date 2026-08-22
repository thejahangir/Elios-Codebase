import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Elios didn't just rebuild our infrastructure; they reimagined our entire digital approach. The ROI was evident within the first quarter.",
    author: "Priya Sharma",
    role: "CTO, Infosys",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    company: "Infosys"
  },
  {
    id: 2,
    content: "The cloud migration flawlessly orchestrated by Elios helped us achieve 99.99% uptime and reduced our operational costs by 40%.",
    author: "Rahul Desai",
    role: "VP Eng, Wipro",
    image: "https://i.pravatar.cc/150?img=11",
    rating: 5,
    company: "Wipro"
  },
  {
    id: 3,
    content: "We needed a team that could scale our enterprise applications globally. Elios delivered beyond expectations, bringing architectural brilliance.",
    author: "Ananya Patel",
    role: "Dir. Product, TCS",
    image: "https://i.pravatar.cc/150?img=9",
    rating: 5,
    company: "TCS"
  },
  {
    id: 4,
    content: "Their team's technical depth is matched only by their strategic insight. A true partner in our continuous innovation journey.",
    author: "Vikram Singh",
    role: "CEO, Tech Mahindra",
    image: "https://i.pravatar.cc/150?img=14",
    rating: 5,
    company: "Tech Mahindra"
  }
];

const TestimonialsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-20 bg-[#051020] relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#C9A227]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side - Morphing Testimonial */}
          <div className="lg:w-3/5 w-full">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-[#C9A227]" />
              <span className="text-[#C9A227] font-semibold tracking-widest uppercase text-sm">
                Client Stories
              </span>
            </div>

            <div className="relative min-h-[220px]">
              <Quote className="absolute -top-8 -left-8 text-white/5 w-32 h-32 rotate-12" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#C9A227] text-[#C9A227]" />
                    ))}
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-light text-white leading-relaxed mb-6 max-w-2xl">
                    "{activeTestimonial.content}"
                  </h3>
                  <div className="flex items-center gap-3 md:hidden">
                     <img 
                       src={activeTestimonial.image} 
                       alt={activeTestimonial.author}
                       className="w-10 h-10 rounded-full object-cover border border-white/20"
                     />
                     <div>
                       <p className="text-white font-medium text-sm">{activeTestimonial.author}</p>
                       <p className="text-[#C9A227] text-xs">{activeTestimonial.role}</p>
                     </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side - Interactive List */}
          <div 
            className="lg:w-2/5 w-full flex flex-col gap-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 w-full text-left ${
                    isActive ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  {/* Smooth Active Indicator Background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTestimonialBg"
                      className="absolute inset-0 bg-white/5 border border-white/10 rounded-2xl"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  <div className="relative z-10 flex items-center gap-4 w-full">
                    <div className="relative">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className={`w-14 h-14 rounded-full object-cover transition-all duration-300 ${
                          isActive ? 'border-2 border-[#C9A227] scale-100' : 'border border-transparent scale-90 grayscale group-hover:grayscale-0'
                        }`}
                      />
                      {isActive && (
                        <motion.div 
                          layoutId="activeDot"
                          className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#C9A227] rounded-full border-2 border-[#051020]"
                        />
                      )}
                    </div>
                    
                    <div className="hidden md:block">
                      <h4 className={`font-semibold transition-colors ${isActive ? 'text-white' : 'text-white/70'}`}>
                        {testimonial.author}
                      </h4>
                      <p className={`text-sm transition-colors ${isActive ? 'text-[#C9A227]' : 'text-white/40'}`}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
