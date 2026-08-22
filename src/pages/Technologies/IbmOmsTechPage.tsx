// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Network, ShoppingCart, Truck, Globe, RotateCcw, 
  MapPin, Tags, DollarSign, Gift, Monitor,
  FileText, Briefcase, Zap, Building2, Store
} from 'lucide-react';

const defaultHeroBg = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const IbmOmsTechPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const useCases = [
    { text: "Inventory location and availability, including in-transit inventory", icon: <MapPin className="w-5 h-5 text-blue-500" /> },
    { text: "Products and product attributes to help reduce transportation costs", icon: <Tags className="w-5 h-5 text-blue-500" /> },
    { text: "Pricing for cross-channel consistency and multi-tiered pricing", icon: <DollarSign className="w-5 h-5 text-blue-500" /> },
    { text: "Promotions for cross channel consistency", icon: <Gift className="w-5 h-5 text-blue-500" /> },
    { text: "Track customer shopping carts across channels", icon: <ShoppingCart className="w-5 h-5 text-blue-500" /> },
    { text: "Sales tax engine integration for consistency across channels", icon: <FileText className="w-5 h-5 text-blue-500" /> },
    { text: "Shipment solution integration for cost effective or fastest delivery", icon: <Truck className="w-5 h-5 text-blue-500" /> },
    { text: "Warehouse Management System (WMS) integration for routing orders", icon: <Building2 className="w-5 h-5 text-blue-500" /> },
    { text: "Enterprise Resource Planning (ERP) integration for financial reconciliation", icon: <Briefcase className="w-5 h-5 text-blue-500" /> }
  ];

  const retailOmnichannel = [
    "Buy online, pick up in-store.",
    "Buy online, ship to store.",
    "Buy in-store, ship to home.",
    "Buy online, return/exchange in-store.",
    "Endless aisle."
  ];

  const sterlingCapabilities = [
    {
      title: "Distributed Order Management (DOM)",
      description: "Increases your fill rates, lowers buffer inventory, and reduces manual processes. Utilize the Intelligent sourcing engine to coordinate fulfillment, respond to changes, provide in-store pickup, and establish role-based relationships.",
      icon: <Network className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Global Inventory Visibility",
      description: "Provides a single aggregate view of all your inventory information from both internal and external locations.",
      icon: <Globe className="w-8 h-8 text-emerald-600" />
    },
    {
      title: "Delivery & Service Scheduling",
      description: "Enables dynamic scheduling of product deliveries and associated services (like installations) at the time of sale. Geographically define delivery, service, and shipping areas.",
      icon: <Zap className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Sterling Drop Ship",
      description: "Provides tools to manage and automate the fulfillment of orders directly from your trading partners throughout the order-to-cash process.",
      icon: <Truck className="w-8 h-8 text-orange-600" />
    },
    {
      title: "Reverse Logistics",
      description: "Provides effective tracking of items throughout the return-and-repair process, and automates returning items to stock.",
      icon: <RotateCcw className="w-8 h-8 text-pink-600" />
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0B1F3A]">
                        <div className="absolute inset-0 z-0">
          <img src={defaultHeroBg} alt="Hero Background" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 {...fadeIn} className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6">
            IBM Order Management System
          </motion.h1>
          <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            The central hub that connects all your enterprise systems for flawless omnichannel fulfillment.
          </motion.p>
        </div>
      </section>

      {/* Intro & The "Why" */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Order Management?</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
              Why not just use your eCommerce or ERP application to manage orders? Rapid growth in businesses as well as an increase in the complexity of distribution networks often grow in silos. Wholesalers & Retailers often keep store and eCommerce inventory separate, preventing a unified view.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              While an ERP system can help manage the inventory you own, an Order Management System lets you manage inventory that is in-transit from suppliers, or drop ship orders, so you minimize end of season markdowns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Distributed Order Management & Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <motion.div {...fadeIn} className="sticky top-24 self-start">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Central Hub <br/><span className="text-blue-600">(DOM)</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                A Distributed Order Management (DOM) system is the central hub that connects all your enterprise systems. Designed specifically to integrate easily with other applications, it can be used to serve information to your other channels, keeping them all in sync to provide a seamless multi-channel experience for your customers.
              </p>
            </motion.div>

            <motion.div {...fadeIn}>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Key Use Cases</h3>
                <ul className="space-y-4">
                  {useCases.map((useCase, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-4">{useCase.icon}</div>
                      <span className="text-gray-700 text-sm leading-relaxed">{useCase.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Retail & B2B Expectations */}
      <section className="py-20 bg-[#0B1F3A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Retail Omni-channel */}
            <motion.div {...fadeIn}>
              <div className="flex items-center mb-6">
                <Store className="w-8 h-8 text-blue-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Retail Applications</h2>
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Order Management is the engine that enables top retailers to provide omni-channel services that are standard today:
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {retailOmnichannel.map((item, idx) => (
                  <span key={idx} className="bg-white/10 text-white px-4 py-2 rounded-full text-sm border border-white/20">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-blue-200 text-sm leading-relaxed italic">
                It also enables flexible fulfillment options (fulfill from store) and an integrated call center. But OMS is not just for retailers...
              </p>
            </motion.div>

            {/* B2B */}
            <motion.div {...fadeIn} className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <div className="flex items-center mb-6">
                <Briefcase className="w-8 h-8 text-emerald-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Growing B2B Expectations</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                B2C order management has increased customer expectations across all industries, including traditional B2B transactions. But not all order management applications are suited to B2B. 
              </p>
              <br/>
              <p className="text-gray-300 leading-relaxed text-sm">
                IBM Order Management, in addition to enterprise inventory visibility, also has native Configure Price Quote (CPQ) capabilities. Combined with robust Call Center features, this makes it the ideal choice for enterprises with complex B2B product configuration and pricing structures.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">IBM Sterling OMS Capabilities</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive software solution that brokers orders, orchestrates cross-channel selling, and provides a global view of supply and demand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sterlingCapabilities.map((cap, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6 border border-gray-100">
                  {cap.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{cap.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}
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
            Ready to Unify Your Supply Chain?
          </motion.h2>
          <motion.p {...fadeIn} className="text-blue-100 mb-8 text-lg">
            Let's discuss how IBM Sterling OMS can solve your B2B and retail fulfillment challenges.
          </motion.p>
          <motion.a 
            {...fadeIn}
            href="/contact-us" 
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300"
          >
            Schedule a Consultation
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default IbmOmsTechPage;
