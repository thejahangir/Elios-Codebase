// @ts-nocheck
import React from 'react';


import { 
  Database, Cloud, Code, Activity, Users, Smartphone, 
  Network, Shield, Settings, Building, Zap
} from 'lucide-react';
import ServiceDesignB from '../../components/ServiceDesignB';

const defaultHeroBg = "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
const defaultOverviewBg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

const MigrationServicePage = () => {
  const data = {
    title: "Migration Services",
    subtitle: "Achieve uninterrupted workflows from the platform you desire for business-critical decisions.",
    backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    overviewHeading: "Seamless & Secure Migration",
    overviewDescription: "Our expertise helps you acquire major benefits while saving time and costs with an updated platform. Changes always come with risk, but with our assistance, you can migrate extremely critical workflows easily without loss of data. After considering all factors like cost, benefits, security, and compliance, our plan can be put to action.\n\nThe integration of multiple systems in a fixed infrastructure makes it critical for migration, but with timely analysis and targeted strategies, we will guide you along for migration planning, management, and execution.\n\nContact Elios Tech today to get started.",
    overviewImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featuresHeading: "Migration Expertise",
    features: [
      { title: "Zero Data Loss", description: "Migrate extremely critical workflows easily and securely without any loss of data.", icon: <Database /> },
      { title: "Strategic Planning", description: "Timely analysis and targeted strategies for comprehensive migration planning, management, and execution.", icon: <Settings /> },
      { title: "Cost & Security Optimization", description: "Plans put into action only after carefully considering factors like cost, benefits, security, and compliance.", icon: <Shield /> }
    ]
  };

  return <ServiceDesignB {...data} />;
};

export default MigrationServicePage;
