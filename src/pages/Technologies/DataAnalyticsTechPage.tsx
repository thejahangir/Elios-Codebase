// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, LineChart, Server, BrainCircuit, Activity, Cloud, 
  CheckCircle2, LayoutTemplate, Layers, ChevronRight
} from 'lucide-react';

const defaultHeroBg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const DataAnalyticsTechPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section (Keep Dark to match InnerPageHero) */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0B1F3A]">
                        <div className="absolute inset-0 z-0">
          <img src={defaultHeroBg} alt="Hero Background" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 {...fadeIn} className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6">
            Data & Analytics
          </motion.h1>
          <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            The amount of data in organizations is staggering. This data is the warehouse of information and provides vast opportunities for businesses to grow. Leveraging this data effectively with the help of experts can provide insights and help to use in various applications. Better decision making and prediction of future outcomes becomes possible with such business intelligence features.
          </motion.p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Capabilities</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Big Data */}
            <motion.div {...fadeIn} className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-lg transition-shadow">
              <Database className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Big Data + Advanced Analytics</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Using advanced big data and analytics solutions, your business can manage structured, semi-structured and un-structured data from various sources.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Eliostech’s exclusive consulting services consist of big data development, end-to-end implementation, solution architecture and design for high-volume, high-velocity and complex requirements. With advanced implementations offered by big data and analytics, organizations can get real-time BI, predictive analysis, anomaly detection, regression, data mining etc. expertise easily.
              </p>
            </motion.div>

            {/* Business Intelligence */}
            <motion.div {...fadeIn} className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-lg transition-shadow">
              <LineChart className="w-12 h-12 text-emerald-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Intelligence + Visualization</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Data visualization brings business intelligence to life. By implementing the perfect business intelligence solution, you can allow seamless extraction, organization and storage of data that are impressive and interactive. All process that occurs before the actual data is presented in visual form falls under a data pipeline.
              </p>
              <h4 className="text-gray-900 font-semibold mb-2">Why it is essential:</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-1 flex-shrink-0"/> It makes huge volumes of data comprehensible with eye-catching visuals, graphs etc.</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-1 flex-shrink-0"/> Proper data visualization provides a different approach to show potential connections that lead to easier decision making.</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-1 flex-shrink-0"/> It helps converting a simple data into revealing insights to establish business goals.</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-1 flex-shrink-0"/> Helps in identifying erroneous data sooner.</li>
              </ul>
            </motion.div>

            {/* Data Warehouse */}
            <motion.div {...fadeIn} className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-lg transition-shadow">
              <Server className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data warehouse + ETL</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                To meet business objectives and plan strategies, managing data, analysing it is essential. To make use of such data repositories with legacy systems and organize it data warehousing by an expert like Eliostech is the need of the hour.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Our data warehousing services also include ETL and its different components: Extract, Clean, Transform, Load and Manage. With our expertise in ETL consulting and DWH services, you get a timely, predictive and a clear idea that would serve your organization using its most important source: data.
              </p>
              <h4 className="text-gray-900 font-semibold mb-2">Services Offered:</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-purple-500 mr-1"/> Data warehouse configuration and development.</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-purple-500 mr-1"/> DWH integration.</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-purple-500 mr-1"/> Data migration and data cleaning.</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-purple-500 mr-1"/> Continuous support and administration.</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-purple-500 mr-1"/> On-demand DWH configurations.</li>
              </ul>
            </motion.div>

            {/* Cognitive Analytics */}
            <motion.div {...fadeIn} className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-lg transition-shadow">
              <BrainCircuit className="w-12 h-12 text-pink-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cognitive Analytics + IBM</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cognitive analysis helps you dive deep and provides insight to your data. Structured data, unstructured data, audio, visual and any other data types can work together and augment human ability. With IBM powerful tools, detailed analytics and our expertise. We can help you build business models with advanced algorithms and use the most popular language to get maximum output.
              </p>
              <h4 className="text-gray-900 font-semibold mb-2">Benefits offered:</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-pink-500 mr-1"/> Helps enable innovation & discovery.</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-pink-500 mr-1"/> Optimized operations.</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-pink-500 mr-1"/> Scale Expertise.</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-pink-500 mr-1"/> Engage customers through adaptive, personalized experience.</li>
              </ul>
            </motion.div>

            {/* Predictive Analytics */}
            <motion.div {...fadeIn} className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-lg transition-shadow">
              <Activity className="w-12 h-12 text-orange-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Predictive Analytics + IBM</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                With the help of accurate data modelling that makes predictions about future outcomes, predictive analysis assists businesses to identify risks and opportunities. Historical data is combined with statistical modelling, data mining techniques and machine learning for faster and accurate results. Big data and data sciences is mostly associated with predictive analysis. Rigorous machine learning algorithms and deep learning procedure is applied to gain better insights. Predictive analysis is then used for prescriptive insights. IBM helps you build scalable, quick predictable models for AI platforms. The platform is also standardized with simple development and deployment processes.
              </p>
            </motion.div>

            {/* Data Lake */}
            <motion.div {...fadeIn} className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-lg transition-shadow">
              <Cloud className="w-12 h-12 text-cyan-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrated Data Lake Management</h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                The latest businesses nowadays have a range of digital products and solutions. Combined with it is a large number of data that flows in from various channels which needs to be siloed for better efficiency or identify opportunities. In order to have a competitive edge over your competitors, we embrace digital transformation to provide individualized, relevant and compelling customer experiences each time.
              </p>
              <h4 className="text-gray-900 font-semibold mb-2">Our solutions offer:</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-cyan-500 mr-1"/> Centralized data management & Integrated systems</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-cyan-500 mr-1"/> Data Governance & Controlled Access</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-cyan-500 mr-1"/> Unified Storage</li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Offerings & Technologies */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Analytics & Offerings</h2>
              <p className="text-gray-600 mb-6">Eliostech Data Services Practice provides several services:</p>
              <ul className="space-y-3">
                {[
                  "BI/Big data/ Analytics Implementation & Support",
                  "BI /Big Data Technical Evaluation with respective technology vendor",
                  "Architectural workshops and Consulting Services",
                  "Predictive Analytics – advanced analytics/Machine Learning",
                  "Building COE with our R&D teams, PoC/PoT Services",
                  "Digital Analytics/ Advanced analytics Roadmap and Strategic Planning with respect to your budget/Timeline / Vision",
                  "Enable Artificial Intelligence on Neural Networks",
                  "Technology Upgrade/Migration Services"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies We Master</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-emerald-500 shadow-sm">
                  <h4 className="text-gray-900 font-bold mb-3 flex items-center"><Database className="w-4 h-4 text-emerald-500 mr-2"/> Big Data</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">Apache Hadoop, IBM BigInsights, Horton Works, Data Lake, Amazon Web Services, Cloudera, Google Cloud Platform, Microsoft Azure</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-500 shadow-sm">
                  <h4 className="text-gray-900 font-bold mb-3 flex items-center"><LineChart className="w-4 h-4 text-blue-500 mr-2"/> Advanced Analytics</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">Statistical Analysis, Quantitative Analysis, Predictive Modeling, Data Mining, Apache Spark, Alteryx / RapidMiner, H2O</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-purple-500 shadow-sm">
                  <h4 className="text-gray-900 font-bold mb-3 flex items-center"><Activity className="w-4 h-4 text-purple-500 mr-2"/> Business Intelligence</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">Microsoft Power BI, Cognos, MicroStrategy, OBIEE, Oracle Apex, Business Objects, Tableau, QlikView / QlikSense</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-pink-500 shadow-sm">
                  <h4 className="text-gray-900 font-bold mb-3 flex items-center"><Server className="w-4 h-4 text-pink-500 mr-2"/> Data Warehousing & ETL</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">Oracle, Sybase, Teradata, SQL Server, Informatica, DataStage, Flume, SSIS, Sqoop, MapReduce, Mongo DB/Maria DB, Cassandra</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-orange-500 shadow-sm sm:col-span-2">
                  <h4 className="text-gray-900 font-bold mb-3 flex items-center"><Layers className="w-4 h-4 text-orange-500 mr-2"/> Database Admin & Managed Services</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">Oracle, IBM DB2, IBM dashDB, Netezza, Teradata, MySQL, MS SQLServer, Mongodb, Cassandra, Sybase, SAP Hana</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default DataAnalyticsTechPage;
