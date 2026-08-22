import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import React from 'react';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '50px', background: '#ffebee', color: '#c62828', minHeight: '100vh' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Something went wrong.</h1>
          <details style={{ whiteSpace: 'pre-wrap', marginTop: '20px', fontFamily: 'monospace' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';

import MissionVisionPage from './pages/About/MissionVisionPage';
import TeamPage from './pages/About/TeamPage';
import StoryPage from './pages/About/StoryPage';

import SapErpServicePage from './pages/Services/SapErpServicePage';
import MigrationServicePage from './pages/Services/MigrationServicePage';
import ApplicationDevelopmentServicePage from './pages/Services/ApplicationDevelopmentServicePage';
import LifeCycleManagementServicePage from './pages/Services/LifeCycleManagementServicePage';
import RecruitmentRpoServicePage from './pages/Services/RecruitmentRpoServicePage';
import CloudDevopsServicePage from './pages/Services/CloudDevopsServicePage';
import EnterpriseMobilityServicePage from './pages/Services/EnterpriseMobilityServicePage';
import NetworkInfrastructureServicePage from './pages/Services/NetworkInfrastructureServicePage';
import QaTestingServicePage from './pages/Services/QaTestingServicePage';
import ManagedOnDemandServicePage from './pages/Services/ManagedOnDemandServicePage';
import ArchitecturalWorkshopsServicePage from './pages/Services/ArchitecturalWorkshopsServicePage';
import DataAnalyticsTechPage from './pages/Technologies/DataAnalyticsTechPage';
import AiDataScienceTechPage from './pages/Technologies/AiDataScienceTechPage';
import CloudIntegrationTechPage from './pages/Technologies/CloudIntegrationTechPage';
import IbmOmsTechPage from './pages/Technologies/IbmOmsTechPage';
import BpmAutomationTechPage from './pages/Technologies/BpmAutomationTechPage';
import ApiEdgeIotTechPage from './pages/Technologies/ApiEdgeIotTechPage';
import DigitalTransformationTechPage from './pages/Technologies/DigitalTransformationTechPage';
import ErpTechPage from './pages/Technologies/ErpTechPage';
import DigitalExperienceTechPage from './pages/Technologies/DigitalExperienceTechPage';
import EamIotTechPage from './pages/Technologies/EamIotTechPage';
import OraclePracticesTechPage from './pages/Technologies/OraclePracticesTechPage';
import PegaPracticesTechPage from './pages/Technologies/PegaPracticesTechPage';
import VeevaPracticesTechPage from './pages/Technologies/VeevaPracticesTechPage';
import CyberSecurityTechPage from './pages/Technologies/CyberSecurityTechPage';

import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';

const AboutPage = () => <div className="pt-24 px-8 min-h-screen">About Us Placeholder</div>;
const NotFoundPage = () => <div className="pt-24 px-8 min-h-screen flex flex-col items-center justify-center"><h1>404 Not Found</h1></div>;

function App() {
  return (
    <ErrorBoundary><BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about/mission-vision" element={<MissionVisionPage />} />
          <Route path="about/team" element={<TeamPage />} />
          <Route path="about/story" element={<StoryPage />} />
          
          <Route path="services" element={<Navigate to="/sap-erp" replace />} />
          <Route path="technologies" element={<Navigate to="/data-analytics" replace />} />

          <Route path="sap-erp" element={<SapErpServicePage />} />
          <Route path="migration" element={<MigrationServicePage />} />
          <Route path="application-development" element={<ApplicationDevelopmentServicePage />} />
          <Route path="life-cycle-management" element={<LifeCycleManagementServicePage />} />
          <Route path="recruitment-rpo" element={<RecruitmentRpoServicePage />} />
          <Route path="cloud-devops" element={<CloudDevopsServicePage />} />
          <Route path="enterprise-mobility" element={<EnterpriseMobilityServicePage />} />
          <Route path="network-infrastructure" element={<NetworkInfrastructureServicePage />} />
          <Route path="qa-testing" element={<QaTestingServicePage />} />
          <Route path="managed-on-demand" element={<ManagedOnDemandServicePage />} />
          <Route path="architectural-workshops" element={<ArchitecturalWorkshopsServicePage />} />
          <Route path="data-analytics" element={<DataAnalyticsTechPage />} />
          <Route path="ai-data-science" element={<AiDataScienceTechPage />} />
          <Route path="cloud-integration" element={<CloudIntegrationTechPage />} />
          <Route path="ibm-oms" element={<IbmOmsTechPage />} />
          <Route path="bpm-automation" element={<BpmAutomationTechPage />} />
          <Route path="api-edge-iot" element={<ApiEdgeIotTechPage />} />
          <Route path="digital-transformation" element={<DigitalTransformationTechPage />} />
          <Route path="erp" element={<ErpTechPage />} />
          <Route path="digital-experience" element={<DigitalExperienceTechPage />} />
          <Route path="eam-iot" element={<EamIotTechPage />} />
          <Route path="oracle-practices" element={<OraclePracticesTechPage />} />
          <Route path="pega-practices" element={<PegaPracticesTechPage />} />
          <Route path="veeva-practices" element={<VeevaPracticesTechPage />} />
          <Route path="cyber-security" element={<CyberSecurityTechPage />} />
          
          <Route path="careers" element={<CareersPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter></ErrorBoundary>
  );
}

export default App;
