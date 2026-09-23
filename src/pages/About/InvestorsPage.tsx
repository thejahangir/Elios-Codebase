import { motion } from 'framer-motion';
import InnerPageHero from '../../components/InnerPageHero';
import { 
  TrendingUp, 
  ShieldCheck, 
  Award, 
  Globe2, 
  FileText, 
  Download, 
  Mail, 
  Building2, 
  ArrowUpRight, 
  CheckCircle2, 
  PieChart, 
  BarChart3, 
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FadeIn = ({ children, delay = 0, className = "" }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const metrics = [
  { label: 'YoY Growth Rate', value: '38%', note: 'Consistent double-digit CAGR over 4 years' },
  { label: 'Global Clients', value: '250+', note: 'Fortune 500 & Global 2000 enterprises' },
  { label: 'Client Retention', value: '94%', note: 'High lifetime client relationship value' },
  { label: 'R&D Reinvestment', value: '18%', note: 'Continuous investment in AI & next-gen tech' },
];

const investmentPillars = [
  {
    icon: <Cpu className="w-7 h-7 text-[#C9A227]" />,
    title: "High-Growth Technology Niches",
    description: "Dominant positioning in mission-critical enterprise transformations including Cloud, SAP/ERP, Veeva, Data Analytics, and AI Automation.",
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-[#C9A227]" />,
    title: "Predictable, Scalable Economics",
    description: "Recurring revenue model backed by multi-year managed services contracts and strategic consultative engagements.",
  },
  {
    icon: <Globe2 className="w-7 h-7 text-[#C9A227]" />,
    title: "Global Delivery Ecosystem",
    description: "Distributed agile engineering hubs across North America, Europe, and Asia delivering cost-efficient, 24/7 client execution.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-[#C9A227]" />,
    title: "Robust Corporate Governance",
    description: "Steadfast commitment to fiscal discipline, ethical stewardship, transparent disclosures, and ESG benchmark standards.",
  },
];

const reports = [
  {
    title: "Annual Report 2025",
    type: "Annual Financials",
    period: "FY 2024-2025",
    size: "4.8 MB",
  },
  {
    title: "Q4 & Full Year Financial Results",
    type: "Earnings Release",
    period: "Q4 2025",
    size: "2.4 MB",
  },
  {
    title: "Investor Presentation & Strategic Roadmap",
    type: "Presentation",
    period: "H1 2026",
    size: "6.1 MB",
  },
  {
    title: "ESG & Sustainability Governance Report",
    type: "ESG Report",
    period: "2025-2026",
    size: "3.2 MB",
  },
];

const governancePrinciples = [
  "Comprehensive oversight by an independent Board of Directors",
  "Strict adherence to global regulatory, audit, and risk compliance",
  "Proactive shareholder engagement and transparent quarterly reporting",
  "Commitment to sustainable ESG practices and corporate diversity",
];

const InvestorsPage = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      <InnerPageHero 
        title="Investor Relations" 
        subtitle="Delivering sustainable long-term value through technology leadership, operational excellence, and disciplined growth."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Metrics Section */}
      <section className="py-20 bg-[#0B1F3A] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[#C9A227]/50 transition-colors">
                <span className="text-4xl lg:text-5xl font-extrabold text-[#C9A227] tracking-tight block mb-2">
                  {item.value}
                </span>
                <h4 className="text-xl font-bold text-white mb-2">{item.label}</h4>
                <p className="text-gray-400 text-sm">{item.note}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Vision & Pillars */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#C9A227] font-bold text-sm tracking-widest uppercase mb-3 block">
              Investment Thesis
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-6">
              Engineered for Sustainable Value Creation
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our unique combination of proprietary intellectual property, deep enterprise domain expertise, and a global delivery framework fuels compounding returns.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentPillars.map((pillar, idx) => (
              <FadeIn key={idx} delay={idx * 0.15}>
                <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-[#C9A227]/10 rounded-2xl flex items-center justify-center mb-6">
                      {pillar.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">{pillar.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-base">{pillar.description}</p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center text-sm font-semibold text-[#0B1F3A] group">
                    <span className="text-gray-400">Core Competitive Advantage</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Reports & Disclosures */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <FadeIn>
                <span className="text-[#C9A227] font-bold text-sm tracking-widest uppercase mb-3 block">
                  Reporting & Disclosures
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-6">
                  Financial Documents & Filings
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Access official financial earnings reports, investor presentations, strategic whitepapers, and regulatory statements.
                </p>

                <div className="bg-[#F7F7F5] p-8 rounded-2xl border border-gray-200/70 mb-6">
                  <div className="flex items-center gap-3 text-[#0B1F3A] font-bold text-lg mb-2">
                    <BarChart3 className="w-6 h-6 text-[#C9A227]" />
                    <span>Quarterly Earnings Calendar</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Upcoming Earnings Call: Q1 FY 2026-2027 live webcast and financial disclosures.
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#0B1F3A] text-white">
                    Confirmed: November 2026
                  </span>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-4">
                {reports.map((report, idx) => (
                  <FadeIn key={idx} delay={idx * 0.1}>
                    <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#C9A227] hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#0B1F3A]/5 text-[#0B1F3A] flex items-center justify-center flex-shrink-0">
                          <FileText className="w-6 h-6 text-[#C9A227]" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-[#0B1F3A] mb-1">{report.title}</h4>
                          <div className="flex items-center gap-3 text-xs text-gray-500 font-medium">
                            <span>{report.type}</span>
                            <span>•</span>
                            <span>{report.period}</span>
                            <span>•</span>
                            <span>{report.size}</span>
                          </div>
                        </div>
                      </div>

                      <button 
                        type="button"
                        onClick={() => alert(`Downloading ${report.title} (${report.size})`)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-[#0B1F3A] bg-gray-100 hover:bg-[#C9A227] hover:text-[#0B1F3A] transition-colors cursor-pointer self-stretch sm:self-auto justify-center"
                      >
                        <Download className="w-4 h-4" /> Download PDF
                      </button>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance & Corporate Integrity */}
      <section className="py-24 bg-[#0B1F3A] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-[#C9A227] font-bold text-sm tracking-widest uppercase mb-3 block">
                Ethical Stewardship
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Corporate Governance & Board Accountability
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                Elios Technologies operates under rigorous governance frameworks that safeguard shareholder capital and foster long-term enterprise sustainability.
              </p>

              <div className="space-y-4">
                {governancePrinciples.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0" />
                    <span className="text-gray-200 text-base">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10 lg:p-12 backdrop-blur-md">
                <div className="w-14 h-14 bg-[#C9A227]/20 text-[#C9A227] rounded-2xl flex items-center justify-center mb-6">
                  <Mail className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Investor Contact & Inquiries</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  For institutional investor inquiries, analyst briefings, or shareholder services, connect directly with our Investor Relations desk.
                </p>
                <div className="space-y-3 text-sm text-gray-300 mb-8">
                  <p><strong className="text-white">Email:</strong> ir@eliostechnologies.com</p>
                  <p><strong className="text-white">Transfer Agent:</strong> Equiniti Trust Services</p>
                  <p><strong className="text-white">Headquarters:</strong> Bangalore, India & London, UK</p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-full font-bold text-sm bg-[#C9A227] text-[#0B1F3A] hover:bg-white transition-colors"
                >
                  Contact Investor Relations Desk
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorsPage;
