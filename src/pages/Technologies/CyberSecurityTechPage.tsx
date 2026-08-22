// @ts-nocheck
import React from 'react';


import { 
  LineChart, BrainCircuit, Cable, Server, Cpu, Radio, 
  Zap, Database, LayoutTemplate, Shield, Settings, Activity, Code, Cloud
} from 'lucide-react';
import ServiceDesignB from '../../components/ServiceDesignB';


const defaultHeroBg = "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
const defaultOverviewBg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

const CyberSecurityTechPage = () => {
  const data = {
    title: "Cyber Security",
    subtitle: "Protecting your digital assets from advanced threats.",
    backgroundImage: defaultHeroBg,
    overviewHeading: "Impenetrable Defense",
    overviewDescription: "In an era of sophisticated ransomware and state-sponsored attacks, traditional perimeters are not enough. We implement Zero Trust architectures, continuous monitoring, and proactive threat hunting.\n\nSecure your infrastructure, applications, and endpoints without sacrificing user productivity.",
    overviewImage: defaultOverviewBg,
    featuresHeading: "Security Services",
    features: [
      { title: "Zero Trust Architecture", description: "Identity-first security across all networks and devices.", icon: <Shield /> },
      { title: "Managed SOC", description: "24/7 Security Operations Center monitoring and response.", icon: <Activity /> },
      { title: "Compliance", description: "Ensuring adherence to GDPR, HIPAA, SOC2, and ISO 27001.", icon: <Settings /> }
    ]
  };

  return <ServiceDesignB {...data} />;
};

export default CyberSecurityTechPage;
