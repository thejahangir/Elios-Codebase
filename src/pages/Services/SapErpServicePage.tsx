// @ts-nocheck
import React from 'react';

import { 
  Database, Cloud, Code, Activity, Users, Smartphone, 
  Network, Shield, Settings, Building, Zap
} from 'lucide-react';
import DynamicPageTemplate from '../../components/DynamicPageTemplate';

const defaultHeroBg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
const defaultOverviewBg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

const SapErpServicePage = () => {
  const data = {
    title: "SAP ERP Services",
    subtitle: "With SAP’s flexible suite of solutions offering businesses ease, we combine our industry experience and help you drive digital transformation.",
    backgroundImage: defaultHeroBg,
    overviewHeading: "Leading SAP/ERP Solutions Provider",
    overviewDescription: "We are a leading SAP/ERP solutions provider and understand the current market scenario. To run a business in a competitive environment, it is necessary to stay updated with well-defined techniques and procedures to handle it. With our years of deep-dive module-level experience in various industries, our team is well-versed in providing exact solutions for maximum efficiency.\n\nBusinesses are always on the lookout for skilled resources and to match their requirements, you can rely on us.\n\nConnect with us to acquire and unlock world-class SAP/ERP implementation that drives business.",
    overviewImage: defaultOverviewBg,
    featuresHeading: "Our Capabilities",
    features: [
      { 
        title: "SAP Staffing Solutions", 
        description: "Our staffing solutions include contract staffing, full-time work opportunities, contract-to-hire solutions, etc.", 
        icon: <Users /> 
      },
      { 
        title: "Latest SAP Versions", 
        description: "Our experts are ever-ready to provide solutions in the latest versions of SAP that include ECC 6.0, R/3, All in One, Business By Design, and other versions of SAP.", 
        icon: <Database /> 
      },
      { 
        title: "Industry Experience", 
        description: "With our years of deep-dive module-level experience in various industries, our team is well-versed in providing exact solutions for maximum efficiency.", 
        icon: <Building /> 
      }
    ]
  };

  return <DynamicPageTemplate {...data} />;
};

export default SapErpServicePage;