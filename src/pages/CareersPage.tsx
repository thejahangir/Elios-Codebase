import { useState, useMemo, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  ArrowRight, 
  Star, 
  Heart, 
  Zap, 
  Coffee, 
  Filter, 
  RotateCcw, 
  UploadCloud, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  X, 
  Send, 
  Trash2, 
  User, 
  Mail,
  Phone 
} from 'lucide-react';
import InnerPageHero from '../components/InnerPageHero';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_fdriwwb';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_9y5mrvj';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '9yR33YbGRqAQipn7D';
const EMAILJS_TO_EMAIL = import.meta.env.VITE_EMAILJS_TO_EMAIL || 'elios.tech.26@gmail.com';

interface Job {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

const jobs: Job[] = [
  {
    title: "Senior Cloud Architect",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Lead the design and implementation of enterprise-scale cloud migrations for Fortune 500 clients."
  },
  {
    title: "SAP S/4HANA Consultant",
    department: "Enterprise Solutions",
    location: "Dubai, UAE",
    type: "Full-time",
    description: "Drive digital transformation journeys by implementing and customizing core SAP modules."
  },
  {
    title: "AI/ML Engineer",
    department: "Data & Analytics",
    location: "Silicon Valley, USA",
    type: "Remote",
    description: "Develop cutting-edge predictive models and integrate Generative AI into client workflows."
  },
  {
    title: "UI/UX Designer",
    department: "Digital Experience",
    location: "Hyderabad, India",
    type: "Full-time",
    description: "Craft intuitive, human-centric enterprise applications and complex B2B portals."
  },
  {
    title: "Cyber Security Analyst",
    department: "Security",
    location: "Bangalore, India",
    type: "Hybrid",
    description: "Monitor, detect, and respond to advanced persistent threats in a global SOC environment."
  },
  {
    title: "Technical Project Manager",
    department: "Delivery",
    location: "Remote (Global)",
    type: "Contract",
    description: "Coordinate cross-functional agile teams to deliver complex multi-million dollar software projects."
  },
  {
    title: "Full Stack DevOps Engineer",
    department: "Engineering",
    location: "Hyderabad, India",
    type: "Full-time",
    description: "Build robust CI/CD pipelines and scalable microservices architectures across hybrid clouds."
  },
  {
    title: "Data Engineer / Snowflake Specialist",
    department: "Data & Analytics",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Architect modernized data warehouses, ETL pipelines, and real-time streaming analytics systems."
  }
];

const perks = [
  { title: "Competitive Salary", icon: <Star /> },
  { title: "Comprehensive Health", icon: <Heart /> },
  { title: "Fast-Track Growth", icon: <Zap /> },
  { title: "Flexible Work", icon: <Coffee /> }
];

const allDepartments = ['All Departments', ...Array.from(new Set(jobs.map(j => j.department)))];
const allLocations = ['All Locations', ...Array.from(new Set(jobs.map(j => j.location)))];

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  
  // Modal & Application state
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');
  const [candidateLocation, setCandidateLocation] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [applyStatus, setApplyStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [applyErrorMessage, setApplyErrorMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesDept =
        selectedDepartment === 'All Departments' ||
        job.department.toLowerCase() === selectedDepartment.toLowerCase();

      const matchesLoc =
        selectedLocation === 'All Locations' ||
        job.location.toLowerCase() === selectedLocation.toLowerCase();

      return matchesDept && matchesLoc;
    });
  }, [selectedDepartment, selectedLocation]);

  const hasActiveFilters = selectedDepartment !== 'All Departments' || selectedLocation !== 'All Locations';

  const resetFilters = () => {
    setSelectedDepartment('All Departments');
    setSelectedLocation('All Locations');
  };

  const handleOpenApplyModal = (job: Job) => {
    setSelectedJob(job);
    setCandidateLocation(job.location);
    setApplyStatus('idle');
    setApplyErrorMessage('');
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    setCandidateName('');
    setCandidateEmail('');
    setCandidatePhone('');
    setCandidateLocation('');
    setResumeFile(null);
    setApplyStatus('idle');
    setApplyErrorMessage('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Max 10MB file check
      if (file.size > 10 * 1024 * 1024) {
        setApplyErrorMessage('File size exceeds 10MB. Please choose a smaller resume file.');
        return;
      }
      setResumeFile(file);
      setApplyErrorMessage('');
    }
  };

  const handleRemoveFile = () => {
    setResumeFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;

    if (!candidateName.trim() || !candidateEmail.trim() || !candidatePhone.trim() || !candidateLocation.trim()) {
      setApplyStatus('error');
      setApplyErrorMessage('Please complete all required fields (Name, Email, Mobile No, and Location).');
      return;
    }

    setApplyStatus('loading');
    setApplyErrorMessage('');

    const templateParams = {
      // Recipient fields
      to_email: EMAILJS_TO_EMAIL,
      recipient: EMAILJS_TO_EMAIL,
      to_name: 'Elios HR & Recruitment Team',

      // Candidate details
      first_name: candidateName.trim().split(' ')[0] || candidateName.trim(),
      last_name: candidateName.trim().split(' ').slice(1).join(' ') || '',
      from_name: candidateName.trim(),
      name: candidateName.trim(),
      user_name: candidateName.trim(),

      from_email: candidateEmail.trim(),
      reply_to: candidateEmail.trim(),
      user_email: candidateEmail.trim(),
      email: candidateEmail.trim(),

      phone: candidatePhone.trim(),
      mobile: candidatePhone.trim(),
      phone_number: candidatePhone.trim(),
      contact_number: candidatePhone.trim(),

      location: candidateLocation.trim(),
      applicant_location: candidateLocation.trim(),

      // Prepopulated Job details
      job_title: selectedJob.title,
      job_department: selectedJob.department,
      job_location: selectedJob.location,
      job_type: selectedJob.type,

      service: `Job Application: ${selectedJob.title}`,
      service_required: `Careers - ${selectedJob.title} (${selectedJob.department})`,

      resume_name: resumeFile ? resumeFile.name : 'Not attached',
      resume_details: resumeFile ? `${resumeFile.name} (${(resumeFile.size / 1024).toFixed(1)} KB)` : 'No file',

      message: `NEW JOB APPLICATION RECEIVED\n\n` +
        `Role Applied: ${selectedJob.title}\n` +
        `Department: ${selectedJob.department}\n` +
        `Job Location: ${selectedJob.location}\n` +
        `Employment Type: ${selectedJob.type}\n\n` +
        `Candidate Information:\n` +
        `- Full Name: ${candidateName.trim()}\n` +
        `- Email: ${candidateEmail.trim()}\n` +
        `- Mobile No: ${candidatePhone.trim()}\n` +
        `- Current Location: ${candidateLocation.trim()}\n` +
        `- Resume File: ${resumeFile ? `${resumeFile.name} (${(resumeFile.size / 1024).toFixed(1)} KB)` : 'None provided'}`
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setApplyStatus('success');
    } catch (error: any) {
      console.error('EmailJS Job Application error:', error);
      setApplyStatus('error');
      if (!EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        setApplyErrorMessage('EmailJS Public Key is required. Please check environment variables.');
      } else {
        setApplyErrorMessage(error?.text || error?.message || 'Failed to submit application. Please try again or contact hr@eliostechinc.com.');
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <InnerPageHero 
        title="Careers" 
        subtitle="Join our global team of innovators and shape the future of enterprise technology."
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-6">Why Join Elios?</h2>
            <div className="w-24 h-1 bg-[#C9A227] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600">
              We don't just offer jobs; we offer trajectories. At Elios Technologies, you'll work with the brightest minds on projects that define the digital future of massive enterprises.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            {perks.map((perk, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-[#0B1F3A]/5 text-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-4">
                  {perk.icon}
                </div>
                <h3 className="font-bold text-[#0B1F3A]">{perk.title}</h3>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-bold text-[#0B1F3A]">Open Positions</h2>
                <span className="px-3 py-1 bg-[#0B1F3A]/5 text-[#0B1F3A] font-semibold text-xs rounded-full">
                  {filteredJobs.length} {filteredJobs.length === 1 ? 'Role' : 'Roles'} Available
                </span>
              </div>
              <p className="text-gray-500 mt-1">Find your next big opportunity and scale your career.</p>
            </div>
            
            <div className="w-full md:w-auto flex flex-wrap sm:flex-nowrap items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 mr-1 hidden sm:flex">
                <Filter className="w-3.5 h-3.5" /> Filter:
              </div>

              {/* Department Dropdown */}
              <select 
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 text-sm font-medium outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 transition-all cursor-pointer shadow-sm"
              >
                {allDepartments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>

              {/* Location Dropdown */}
              <select 
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 text-sm font-medium outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 transition-all cursor-pointer shadow-sm"
              >
                {allLocations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>

              {/* Reset Filters Button */}
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="px-3 py-2.5 rounded-xl border border-dashed border-gray-300 text-gray-500 hover:text-[#0B1F3A] hover:border-[#0B1F3A] text-sm font-medium flex items-center gap-1.5 transition-colors cursor-pointer bg-white"
                  title="Reset filters"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Job Listings Grid */}
          <AnimatePresence mode="wait">
            {filteredJobs.length > 0 ? (
              <motion.div 
                key={`${selectedDepartment}-${selectedLocation}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredJobs.map((job, idx) => (
                  <motion.div 
                    key={`${job.title}-${idx}`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#C9A227]/50 transition-all group flex flex-col h-full"
                  >
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-[#0B1F3A]/5 text-[#0B1F3A] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                        {job.department}
                      </span>
                      <h3 className="text-xl font-bold text-[#0B1F3A] mb-3 group-hover:text-[#C9A227] transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-[#C9A227]" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4 text-gray-400" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                      {job.description}
                    </p>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <button 
                        type="button"
                        onClick={() => handleOpenApplyModal(job)}
                        className="inline-flex items-center gap-2 text-[#0B1F3A] font-bold text-sm uppercase tracking-wider hover:text-[#C9A227] transition-colors group-hover:translate-x-2 transform duration-300 cursor-pointer"
                      >
                        Apply Now <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-12 text-center border border-gray-200/70 max-w-lg mx-auto shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0B1F3A]/5 text-[#0B1F3A] flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-7 h-7 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">No positions found</h3>
                <p className="text-gray-500 text-sm mb-6">
                  No open roles match the selected department and location filters right now.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-[#0B1F3A] text-white text-sm font-semibold rounded-xl hover:bg-[#C9A227] hover:text-[#0B1F3A] transition-colors cursor-pointer"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-[#0B1F3A]/70 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl z-10 overflow-hidden my-8 border border-gray-100"
            >
              {/* Close Button */}
              <button 
                type="button"
                onClick={handleCloseModal}
                className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-gray-100 hover:bg-[#0B1F3A] text-gray-500 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header with Prepopulated Job Details */}
              <div className="bg-[#0B1F3A] p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C9A227]/20 rounded-full blur-2xl pointer-events-none" />
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#C9A227] text-xs font-bold uppercase tracking-wider mb-3">
                  {selectedJob.department}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Apply for {selectedJob.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-300">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#C9A227]" />
                    <span>{selectedJob.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-[#C9A227]" />
                    <span>{selectedJob.type}</span>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
                {applyStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 px-4"
                  >
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h4 className="text-2xl font-bold text-[#0B1F3A] mb-2">Application Submitted!</h4>
                    <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed mb-8">
                      Thank you for applying for the <strong className="text-[#0B1F3A]">{selectedJob.title}</strong> role. Our talent acquisition team will review your application and get in touch with you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="px-8 py-3 bg-[#0B1F3A] text-white font-semibold rounded-xl hover:bg-[#C9A227] hover:text-[#0B1F3A] transition-colors cursor-pointer"
                    >
                      Done
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleApplySubmit} className="space-y-5">
                    {applyStatus === 'error' && (
                      <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3 text-sm">
                        <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">Submission Error</p>
                          <p className="text-rose-700 text-xs mt-0.5">{applyErrorMessage}</p>
                        </div>
                      </div>
                    )}

                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-[#0B1F3A] flex items-center gap-1.5">
                        <User className="w-4 h-4 text-[#C9A227]" />
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        required
                        value={candidateName}
                        onChange={(e) => setCandidateName(e.target.value)}
                        placeholder="e.g. John Doe" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 transition-all text-sm"
                      />
                    </div>

                    {/* Email & Mobile No Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email Address */}
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-[#0B1F3A] flex items-center gap-1.5">
                          <Mail className="w-4 h-4 text-[#C9A227]" />
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input 
                          type="email" 
                          required
                          value={candidateEmail}
                          onChange={(e) => setCandidateEmail(e.target.value)}
                          placeholder="e.g. john.doe@example.com" 
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 transition-all text-sm"
                        />
                      </div>

                      {/* Mobile No */}
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-[#0B1F3A] flex items-center gap-1.5">
                          <Phone className="w-4 h-4 text-[#C9A227]" />
                          Mobile No <span className="text-rose-500">*</span>
                        </label>
                        <input 
                          type="tel" 
                          required
                          value={candidatePhone}
                          onChange={(e) => setCandidatePhone(e.target.value)}
                          placeholder="e.g. +91 98765 43210" 
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 transition-all text-sm"
                        />
                      </div>
                    </div>

                    {/* Current Location */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-[#0B1F3A] flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-[#C9A227]" />
                        Current Location <span className="text-rose-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        required
                        value={candidateLocation}
                        onChange={(e) => setCandidateLocation(e.target.value)}
                        placeholder="e.g. Bangalore, India" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 transition-all text-sm"
                      />
                    </div>

                    {/* Resume Upload */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-[#0B1F3A] flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-[#C9A227]" />
                        Resume / CV Upload <span className="text-gray-400 text-xs font-normal">(PDF, DOC, DOCX - max 10MB)</span>
                      </label>
                      
                      <input 
                        ref={fileInputRef}
                        type="file" 
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        onChange={handleFileChange}
                        className="hidden" 
                        id="resume-upload"
                      />

                      {resumeFile ? (
                        <div className="flex items-center justify-between p-3.5 bg-[#0B1F3A]/5 rounded-xl border border-[#0B1F3A]/10">
                          <div className="flex items-center gap-3 overflow-hidden">
                            <div className="w-9 h-9 rounded-lg bg-[#0B1F3A] text-[#C9A227] flex items-center justify-center shrink-0">
                              <FileText className="w-5 h-5" />
                            </div>
                            <div className="truncate">
                              <p className="text-sm font-semibold text-[#0B1F3A] truncate">{resumeFile.name}</p>
                              <p className="text-xs text-gray-500">{(resumeFile.size / 1024).toFixed(1)} KB</p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={handleRemoveFile}
                            className="p-1.5 text-gray-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                            title="Remove file"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <label 
                          htmlFor="resume-upload"
                          className="border-2 border-dashed border-gray-200 hover:border-[#C9A227] rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all bg-gray-50/50 hover:bg-[#C9A227]/5 group"
                        >
                          <UploadCloud className="w-8 h-8 text-gray-400 group-hover:text-[#C9A227] transition-colors mb-2" />
                          <p className="text-sm font-semibold text-[#0B1F3A] group-hover:text-[#C9A227] transition-colors">
                            Click to upload your resume
                          </p>
                          <p className="text-xs text-gray-400 mt-1">Supports PDF, DOC, DOCX up to 10MB</p>
                        </label>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 flex items-center justify-end gap-3 border-t border-gray-100">
                      <button
                        type="button"
                        onClick={handleCloseModal}
                        disabled={applyStatus === 'loading'}
                        className="px-5 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-semibold transition-colors cursor-pointer disabled:opacity-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={applyStatus === 'loading'}
                        className="px-7 py-3 rounded-xl bg-[#0B1F3A] hover:bg-[#C9A227] text-white hover:text-[#0B1F3A] font-bold text-sm transition-all duration-300 flex items-center gap-2 shadow-md disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                      >
                        {applyStatus === 'loading' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Submitting Application...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Application</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default CareersPage;
