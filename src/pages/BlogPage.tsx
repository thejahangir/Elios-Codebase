import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Calendar, 
  User, 
  Filter, 
  RotateCcw, 
  BookOpen, 
  Clock, 
  Building2,
  ImageOff
} from 'lucide-react';
import InnerPageHero from '../components/InnerPageHero';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  source: string;
  author: string;
  date: string;
  readTime: string;
  url: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why Digital Strategies Fail — And How Modern Enterprises Overcome Pitfalls",
    excerpt: "Over 70% of enterprise digital transformations fall short of their economic targets. McKinsey research examines structural, architectural, and cultural failure points.",
    category: "Digital Transformation",
    source: "McKinsey & Company",
    author: "Rodney Zemmel & Kate Smaje",
    date: "August 18, 2026",
    readTime: "7 min read",
    url: "https://www.mckinsey.com/featured-insights/leadership/why-digital-strategies-fail",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Building Generative AI Solutions That Deliver Measurable Enterprise ROI",
    excerpt: "Moving beyond experimentation requires robust data governance, vector database infrastructure, and private fine-tuning. A practical framework from MIT Sloan Management Review.",
    category: "Data & AI",
    source: "MIT Sloan Management Review",
    author: "Thomas H. Davenport",
    date: "August 04, 2026",
    readTime: "9 min read",
    url: "https://sloanreview.mit.edu/topic/artificial-intelligence/",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "The Future of Enterprise Architecture in a Hybrid Multi-Cloud World",
    excerpt: "Modern CIOs are shifting away from monolithic stacks to composable, event-driven architectures that span AWS, Azure, and on-premises sovereign datacenters.",
    category: "Architecture",
    source: "Harvard Business Review",
    author: "Marco Iansiti & Karim R. Lakhani",
    date: "July 26, 2026",
    readTime: "8 min read",
    url: "https://hbr.org/topic/technology-and-analytics",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Securing the Borderless Enterprise: Implementing Zero Trust at Scale",
    excerpt: "With identities and APIs becoming the new perimeter, Gartner's Zero Trust framework outlines micro-segmentation, continuous verification, and threat telemetry strategies.",
    category: "Cyber Security",
    source: "Gartner Research",
    author: "Neil MacDonald & John Watts",
    date: "July 12, 2026",
    readTime: "6 min read",
    url: "https://www.gartner.com/en/information-technology/insights/cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Maximizing ROI in Enterprise Application Modernization and Cloud ERP",
    excerpt: "A comprehensive analysis of core modernization roadmaps, evaluating clean-core strategies, automated regression testing, and data migration timelines for enterprise applications.",
    category: "Enterprise Solutions",
    source: "CIO Magazine",
    author: "Peter High",
    date: "June 29, 2026",
    readTime: "8 min read",
    url: "https://www.cio.com/category/enterprise-applications/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "FinOps and Cloud Cost Optimization: Practical Strategies for Kubernetes",
    excerpt: "Engineering teams are reclaiming up to 40% of wasted cloud expenditure through automated cluster scaling, spot instances, and real-time observability tooling.",
    category: "Cloud & DevOps",
    source: "Forbes Technology Council",
    author: "Sanjay Malhotra",
    date: "June 14, 2026",
    readTime: "5 min read",
    url: "https://www.forbes.com/sites/forbestechcouncil/",
    image: "https://images.unsplash.com/photo-1614064641913-6b71a3061145?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Architecting Distributed Systems for High-Throughput Financial Services",
    excerpt: "How modern fintechs and neo-banks leverage event sourcing, Kafka streams, and distributed ledger protocols to process millions of transactions per second.",
    category: "Architecture",
    source: "IEEE Spectrum",
    author: "David Schneider",
    date: "May 30, 2026",
    readTime: "10 min read",
    url: "https://spectrum.ieee.org/computing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "The Next Frontier of API Management and Composable Microservices",
    excerpt: "Breaking down how leading software architectures adopt GraphQL federations, service meshes, and OpenAPI 3.0 standards for frictionless enterprise integration.",
    category: "Cloud & DevOps",
    source: "ACM Queue",
    author: "George V. Neville-Neil",
    date: "May 15, 2026",
    readTime: "7 min read",
    url: "https://queue.acm.org/",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Global Technology Governance and Ethical AI in Enterprise Workflows",
    excerpt: "Examining strategic frameworks for responsible AI deployment, automated compliance, and digital trust across multinational supply chains and institutions.",
    category: "Data & AI",
    source: "World Economic Forum",
    author: "Cathy Li & Jeremy Jurgens",
    date: "April 28, 2026",
    readTime: "9 min read",
    url: "https://www.weforum.org/agenda/technology/",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const allTopics = ['All Topics', ...Array.from(new Set(blogPosts.map(p => p.category)))];

const ArticleThumbnail = ({
  src,
  title,
  category,
  source
}: {
  src: string;
  title: string;
  category: string;
  source: string;
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative h-56 overflow-hidden bg-[#0B1F3A] flex items-center justify-center">
      {!hasError && src ? (
        <>
          <div className="absolute inset-0 bg-[#0B1F3A]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img 
            src={src} 
            alt={title} 
            onError={() => setHasError(true)}
            className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700" 
          />
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0B1F3A] via-[#122c52] to-[#0B1F3A] p-6 text-center select-none">
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-2 text-[#C9A227] shadow-inner">
            <ImageOff className="w-6 h-6 text-gray-400" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            No image
          </span>
        </div>
      )}

      {/* Category Tag */}
      <div className="absolute top-4 left-4 z-20">
        <span className="px-3 py-1 bg-[#0B1F3A]/90 text-[#C9A227] text-xs font-bold uppercase tracking-wider rounded-full shadow-md border border-[#C9A227]/30 backdrop-blur-md">
          {category}
        </span>
      </div>

      {/* Source Journal Badge */}
      <div className="absolute bottom-3 right-4 z-20">
        <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-[#0B1F3A] text-[11px] font-bold rounded-lg shadow-sm flex items-center gap-1.5 border border-white/40">
          <Building2 className="w-3 h-3 text-[#C9A227]" />
          {source}
        </span>
      </div>
    </div>
  );
};

const BlogPage = () => {
  const [selectedTopic, setSelectedTopic] = useState('All Topics');

  const filteredPosts = useMemo(() => {
    if (selectedTopic === 'All Topics') return blogPosts;
    return blogPosts.filter(post => post.category.toLowerCase() === selectedTopic.toLowerCase());
  }, [selectedTopic]);

  const hasActiveFilter = selectedTopic !== 'All Topics';

  const resetFilter = () => {
    setSelectedTopic('All Topics');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <InnerPageHero 
        title="Insights & Blog" 
        subtitle="Curated thought leadership, enterprise research, and tech publications from leading industry journals and our architects."
        backgroundImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="w-16 h-1 bg-[#C9A227] mb-6"></div>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-4xl font-bold text-[#0B1F3A]">Latest Articles & Publications</h2>
                <span className="px-3 py-1 bg-[#0B1F3A]/5 text-[#0B1F3A] font-semibold text-xs rounded-full">
                  {filteredPosts.length} {filteredPosts.length === 1 ? 'Article' : 'Articles'}
                </span>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Deep dives, case studies, and industry journal articles designed for CIOs, enterprise architects, and digital leaders.
              </p>
            </div>
            
            {/* Filter Dropdown & Controls */}
            <div className="w-full md:w-auto flex flex-wrap sm:flex-nowrap items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 mr-1 hidden sm:flex">
                <Filter className="w-3.5 h-3.5" /> Topic:
              </div>

              <select 
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 text-sm font-medium outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 transition-all cursor-pointer shadow-sm"
              >
                {allTopics.map((topic) => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </select>

              {hasActiveFilter && (
                <button
                  type="button"
                  onClick={resetFilter}
                  className="px-3.5 py-2.5 rounded-xl border border-dashed border-gray-300 text-gray-500 hover:text-[#0B1F3A] hover:border-[#0B1F3A] text-sm font-medium flex items-center gap-1.5 transition-colors cursor-pointer bg-white"
                  title="Reset topic filter"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Article Grid */}
          <AnimatePresence mode="wait">
            {filteredPosts.length > 0 ? (
              <motion.div 
                key={selectedTopic}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredPosts.map((post, idx) => (
                  <motion.article 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
                  >
                    {/* Card Image / Fallback */}
                    <a 
                      href={post.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                      title={`Read "${post.title}" in new tab`}
                    >
                      <ArticleThumbnail
                        src={post.image}
                        title={post.title}
                        category={post.category}
                        source={post.source}
                      />
                    </a>
                    
                    {/* Card Content */}
                    <div className="p-8 flex flex-col flex-grow">
                      {/* Meta info */}
                      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500 mb-4 pb-3 border-b border-gray-100">
                        <div className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-gray-400" />
                          <span className="font-medium text-gray-700">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{post.date}</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-[#0B1F3A] mb-3 group-hover:text-[#C9A227] transition-colors leading-tight">
                        <a 
                          href={post.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {post.title}
                        </a>
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                        {post.excerpt}
                      </p>
                      
                      {/* Footer Link */}
                      <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
                        <a 
                          href={post.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-2 text-[#0B1F3A] font-bold text-xs uppercase tracking-wider group-hover:text-[#C9A227] transition-colors"
                        >
                          <span>Read on {post.source}</span>
                          <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-[#C9A227]" />
                        </a>

                        <span className="text-[10px] uppercase font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                          External Link
                        </span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-12 text-center border border-gray-200/70 max-w-lg mx-auto shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0B1F3A]/5 text-[#0B1F3A] flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-7 h-7 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">No articles found</h3>
                <p className="text-gray-500 text-sm mb-6">
                  No published articles match the selected topic filter at this time.
                </p>
                <button
                  type="button"
                  onClick={resetFilter}
                  className="px-6 py-2.5 bg-[#0B1F3A] text-white text-sm font-semibold rounded-xl hover:bg-[#C9A227] hover:text-[#0B1F3A] transition-colors cursor-pointer"
                >
                  View All Topics
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

    </div>
  );
};

export default BlogPage;
