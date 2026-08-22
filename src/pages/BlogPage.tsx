import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import InnerPageHero from '../components/InnerPageHero';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Enterprise Architecture in a Cloud-First World",
    excerpt: "As more enterprises move their core workloads to the cloud, traditional architectural patterns are failing. Here is how microservices and event-driven design are changing the game.",
    category: "Architecture",
    author: "Sarah Jenkins",
    date: "August 12, 2026",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Why Your Digital Transformation is Failing (And How to Fix It)",
    excerpt: "70% of digital transformation initiatives fail to reach their goals. The problem is rarely the technology—it's the human element. A guide to true organizational change.",
    category: "Digital Transformation",
    author: "Emily Watson",
    date: "July 28, 2026",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Migrating from SAP ECC to S/4HANA: A Greenfield Approach",
    excerpt: "Deciding between Greenfield, Brownfield, or Bluefield? In this deep dive, we explore why starting fresh with a Greenfield implementation often yields the highest ROI for complex enterprises.",
    category: "SAP",
    author: "James Thorne",
    date: "July 15, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Securing the Edge: Zero Trust in the Age of IoT",
    excerpt: "With billions of devices connecting to corporate networks from the edge, perimeter defense is dead. How to implement a robust Zero Trust framework for your IoT ecosystem.",
    category: "Cyber Security",
    author: "Michael Chen",
    date: "June 30, 2026",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Operationalizing Generative AI in the Enterprise",
    excerpt: "Everyone is talking about GenAI, but few know how to integrate it securely into proprietary workflows. A look at Retrieval-Augmented Generation (RAG) and private LLM deployments.",
    category: "Data & AI",
    author: "Priya Sharma",
    date: "June 18, 2026",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Optimizing Kubernetes Costs at Scale",
    excerpt: "Kubernetes is fantastic for orchestration, but without proper resource limits and FinOps practices, your cloud bill can skyrocket. Practical tips for reducing K8s spend by 40%.",
    category: "Cloud & DevOps",
    author: "David Rodriguez",
    date: "June 05, 2026",
    image: "https://images.unsplash.com/photo-1614064641913-6b71a3061145?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const BlogPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <InnerPageHero 
        title="Insights & Blog" 
        subtitle="Latest thoughts on enterprise technology, digital transformation, and industry trends from our experts."
        backgroundImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <div className="w-16 h-1 bg-[#C9A227] mb-6"></div>
              <h2 className="text-4xl font-bold text-[#0B1F3A] mb-4">Latest Articles</h2>
              <p className="text-gray-600 text-lg">
                Deep dives, case studies, and thought leadership designed for the modern CIO.
              </p>
            </div>
            
            <div className="mt-8 md:mt-0 flex gap-4">
              <select className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 outline-none focus:border-[#C9A227] shadow-sm">
                <option>All Topics</option>
                <option>Architecture</option>
                <option>Cloud & DevOps</option>
                <option>Cyber Security</option>
                <option>Data & AI</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-[#0B1F3A]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-[#C9A227] text-[#0B1F3A] text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-4 group-hover:text-[#C9A227] transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <button className="flex items-center gap-2 text-[#0B1F3A] font-bold text-sm uppercase tracking-wider hover:text-[#C9A227] transition-colors group">
                      Read Article 
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-8 py-3 rounded-full border-2 border-[#0B1F3A] text-[#0B1F3A] font-bold hover:bg-[#0B1F3A] hover:text-white transition-colors duration-300">
              Load More Articles
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default BlogPage;
