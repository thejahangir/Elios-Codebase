// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, AlertTriangle, Users, TrendingUp, 
  CheckCircle2, Laptop, Award, Target 
} from 'lucide-react';

const defaultHeroBg = "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const QaTestingServicePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const differentiators = [
    {
      title: "Your QA Partner",
      description: "We build a QA team from scratch, which has a combination of required roles in the QA department such as QA Lead / QA Manager, Test Engineers, Test Automation Engineers. Every QA engineer has requisite skills like test automation, performance testing, security testing which is well complemented by strong in-house Centers of Excellence in these areas.",
      icon: <Users className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Unbiased Quality Focus",
      description: "We have unbiased focus on quality which is critical for your product organization. Our recruitment happens asynchronous to the need of projects and hence it is mostly the case that almost the entire team is available on the day 0 of the project with sound training of QA process already in place.",
      icon: <Target className="w-8 h-8 text-emerald-600" />
    },
    {
      title: "Asset Investment & Zero CapEx",
      description: "We have done good investments in terms of hardware and networking infrastructure and various devices. We have been investing in leading test tools and has developed its own set of rich test automation accelerators which helps in saving significant test tools cost to the customers. Customers benefit from such hardware and software assets without any CapEx.",
      icon: <Laptop className="w-8 h-8 text-purple-600" />
    }
  ];

  const valueAdds = [
    "Agile QA methodologies",
    "Skilled QA professionals with hands on skills of functional, non-functional and automated testing",
    "ISTQB / CSTE certified professionals",
    "Rich experience in increasing test coverage via new techniques (e.g. mind maps)"
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Fullscreen Glassmorphism Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0B1F3A]">
                        <div className="absolute inset-0 z-0">
          <img src={defaultHeroBg} alt="Hero Background" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 md:p-16 max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/30 text-white font-medium text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-[#C9A227] shadow-[0_0_10px_#C9A227]"></span>
              Premium Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              QA & Testing
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl drop-shadow-md">
              Ensuring flawless digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro & The Challenge */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Start-up QA Challenge</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Start-up product organizations have business challenges like unavailability of concrete product roadmap, extreme pace of product modification, short turnaround time of deliverable's / releases / hotfixes, smaller team size, high burn down rate, modest engineering infrastructure.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
                Associated QA Challenges
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Smaller QA cycles, subjectivity in product quality, lack of rich test data, lesser time for requirement analysis, and multiple parallel quality initiatives.
              </p>
            </div>
          </motion.div>
          
          <motion.div {...fadeIn} className="bg-[#0B1F3A] rounded-3xl p-10 text-center text-white shadow-xl">
            <ShieldCheck className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">What Quality Partners Deliver</h3>
            <p className="text-blue-100 mb-6">
              Quality departments or Quality partners aka testing service providers are expected to deliver:
            </p>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-xl font-bold text-white mb-2">Highest Quality of Service</div>
              <div className="text-emerald-400 font-medium">At minimal cost of quality</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Challenges in Detail */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Conventional Business Challenges</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </motion.div>
          
          <motion.div {...fadeIn} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 space-y-6">
            <p className="text-gray-600 leading-relaxed">
              Conventional approach for product organizations is to setup an in-house quality organization by hiring a QA Manager and building a team under the QA Manager. In the agile software product world, this conventional approach has many limitations such as individual QA manager cannot attract best QA talent single handedly. Talent acquisition has been a significant challenge for product start-ups. People learn at your cost and then move on and hence there is periodic ramp-up cost.
            </p>
            <p className="text-gray-600 leading-relaxed">
              On the other hand, wrong hires at times become liability in the organization. Also with software product organizations people need to be more patient to realize the growth. QA people (in fact every individual in the product organization) need to take on different responsibilities other than core responsibilities, which at times compromise quality focus.
            </p>
            <div className="bg-red-50 p-6 rounded-2xl">
              <h4 className="font-bold text-gray-900 mb-3">Other Limitations Include:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                <li>Inability to maintain varied skill sets (e.g. test automation, performance testing, security testing, etc.) in a smaller team.</li>
                <li>Additional cost of QA infrastructure (e.g. performance lab, test automation environment, QA environment, etc.)</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Key Differentiators</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              We focus on addressing these challenges by working hand in hand with the client as a dedicated QA partner. We work in all combinations of onsite and offshore models.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((diff, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-gray-50 mb-6">
                  {diff.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{diff.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {diff.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Add */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Value Add</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </motion.div>
          
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <ul className="space-y-4">
              {valueAdds.map((val, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start"
                >
                  <Award className="w-6 h-6 text-blue-500 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{val}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section 
        className="relative py-24 bg-fixed bg-center bg-cover border-b-8 border-[#051020]"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
      >
        <div className="absolute inset-0 bg-[#0B1F3A]/90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ensure Uncompromising Quality
          </motion.h2>
          <motion.p {...fadeIn} className="text-blue-100 mb-8 text-lg">
            Partner with Eliostech today for reliable, robust, and expert QA & Testing Services.
          </motion.p>
          <motion.a 
            {...fadeIn}
            href="/contact-us" 
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300"
          >
            Contact Us
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default QaTestingServicePage;
