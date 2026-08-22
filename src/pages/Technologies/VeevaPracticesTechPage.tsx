// @ts-nocheck
import React from 'react';

import { 
  LineChart, BrainCircuit, Cable, Server, Cpu, Radio, 
  Zap, Database, LayoutTemplate, Shield, Settings, Activity, Code, Cloud
} from 'lucide-react';
import DynamicPageTemplate from '../../components/DynamicPageTemplate';


const defaultHeroBg = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
const defaultOverviewBg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

const VeevaPracticesTechPage = () => {
  const data = {
    title: "Veeva Practices",
    subtitle: "Cloud solutions for the Life Sciences industry.",
    backgroundImage: defaultHeroBg,
    overviewHeading: "Accelerating Life Sciences",
    overviewDescription: "We help pharmaceutical and biotech companies implement and validate Veeva Vault and Veeva CRM.\n\nEnsure strict FDA/EMA compliance while accelerating clinical trials, regulatory submissions, and commercialization strategies.",
    overviewImage: defaultOverviewBg,
    featuresHeading: "Veeva Services",
    features: [
      { title: "Vault Implementation", description: "Clinical, Quality, and Regulatory Vault configurations.", icon: <Database /> },
      { title: "System Validation", description: "Rigorous CSV processes for regulatory compliance.", icon: <Shield /> },
      { title: "Commercial Cloud", description: "Optimizing Veeva CRM for sales and medical affairs.", icon: <Activity /> }
    ]
  };

  return <DynamicPageTemplate {...data} />;
};

export default VeevaPracticesTechPage;
