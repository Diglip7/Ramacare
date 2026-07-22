'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import SEOContentSection from '../../components/SEOContentSection';
import { 
  Shield, Lock, Eye, FileText, Calendar, Mail, 
  Phone, MapPin, Search, Download, Printer, 
  ChevronRight, AlertCircle, Check, Clock, CreditCard,
  Database, Globe, UserCheck, Bell, Trash2, FileCheck
} from 'lucide-react';

const PolicyPages = () => {
  const privacySEOContent = [
    "At RamaCare Polyclinic, we are committed to maintaining the highest standards of data protection and patient confidentiality. Our privacy policy is designed to ensure that your personal and medical information is handled with the utmost care, in full compliance with the laws of the United Arab Emirates and the regulations of the Dubai Health Authority (DHA).",
    {
      type: "heading",
      text: "Commitment to Patient Confidentiality"
    },
    "We understand that the trust you place in us is the foundation of your healthcare experience. That's why we implement robust security measures to protect your digital and physical records. Our team is trained to handle sensitive information professionally, ensuring that only authorized personnel have access to your data for the purpose of providing you with high-quality medical care.",
    {
      type: "list",
      items: [
        "Data Security: Advanced encryption and secure storage systems for all patient records.",
        "Regulatory Compliance: Adherence to UAE Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection.",
        "Informed Consent: We ensure you are fully aware of how your data is used and shared for treatment and billing purposes.",
        "Patient Rights: Easy access to your medical records and the right to request updates or corrections."
      ]
    },
    "As a leading healthcare provider in Dubai, RamaCare Polyclinic continues to invest in technology and training to stay ahead of evolving data protection standards. We are dedicated to providing you with a safe and secure environment for all your medical and wellness needs."
  ];

  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Privacy Policy Sections
  const sections = [
    { id: 'info-collect', title: 'Information We Collect', icon: Database },
    { id: 'how-use', title: 'How We Use Your Data', icon: FileCheck },
    { id: 'legal-basis', title: 'Legal Basis for Processing', icon: Shield },
    { id: 'sharing', title: 'Sharing of Information', icon: Globe },
    { id: 'patient-rights', title: 'Patient Rights', icon: UserCheck },
    { id: 'data-security', title: 'Data Security & Retention', icon: Lock },
    { id: 'cookies', title: 'Cookies & Website Analytics', icon: Eye },
    { id: 'third-party', title: 'Third-Party Services', icon: Globe },
    { id: 'marketing', title: 'Marketing Communications', icon: Bell },
    { id: 'policy-updates', title: 'Policy Updates', icon: FileText },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      setShowBackToTop(window.scrollY > 400);

      const scrollPosition = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Head>
        <title key="title">Privacy Policy - RamaCare Polyclinic</title>
        <meta name="description" content="Privacy Policy for RamaCare Polyclinic Dubai. Learn how we collect, use, and protect your personal information in accordance with UAE data protection laws." key="description" />
        
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@700;800&display=swap" 
          rel="stylesheet" 
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50/30" style={{ fontFamily: "'Inter', sans-serif" }}>
        
        {/* Sticky Header */}
        <div className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-emerald-100' 
            : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl shadow-lg shadow-emerald-500/30">
                  <Image
                    src="/images/Logo.png"
                    alt="RamaCare Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-lg font-bold text-gray-900 block">Privacy Policy</span>
                  <p className="text-xs text-gray-500">Last Updated: January 2026</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span className="hidden md:inline">Print</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#0a0a0a]/95 via-[#1b5e3f]/90 to-[#1b5e3f]/80 hover:from-emerald-700 hover:to-emerald-800 rounded-lg shadow-md shadow-emerald-500/30 transition-all hover:shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden md:inline">Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Sidebar - Table of Contents */}
            <aside className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-32">
                <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
                  <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-600" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-1">
                    {sections.map((section) => {
                      const Icon = section.icon;
                      return (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-all text-left group ${
                            activeSection === section.id
                              ? 'bg-emerald-50 text-emerald-700 font-semibold'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                        >
                          <Icon className={`w-4 h-4 flex-shrink-0 ${
                            activeSection === section.id ? 'text-emerald-600' : 'text-gray-400 group-hover:text-gray-600'
                          }`} />
                          <span className="flex-1 truncate text-xs">{section.title}</span>
                          {activeSection === section.id && (
                            <ChevronRight className="w-4 h-4 text-emerald-600" />
                          )}
                        </button>
                      );
                    })}
                  </nav>
                </div>

                <div className="mt-6 bg-gradient-to-r from-[#0a0a0a]/95 via-[#1b5e3f]/90 to-[#1b5e3f]/80 rounded-2xl p-5 text-white shadow-lg shadow-emerald-500/30">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Questions?
                  </h4>
                  <p className="text-sm text-emerald-50 mb-4">
                    Contact us for any concerns.
                  </p>
                  <a
                    href="mailto:query@ramacarepolyclinic.com"
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:text-emerald-100 transition-colors"
                  >
                    query@ramacarepolyclinic.com
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-9">
              <PrivacyContent />

              {/* Contact Section */}
              <section className="scroll-mt-32 mt-8">
                <div className="bg-gradient-to-r from-[#0a0a0a]/95 via-[#1b5e3f]/90 to-[#1b5e3f]/80 rounded-2xl p-8 text-white shadow-xl shadow-emerald-500/30">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
                      <p className="text-emerald-50">For questions about this policy, please contact us</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <a href="mailto:query@ramacarepolyclinic.com" className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
                      <Mail className="w-5 h-5" />
                      <div>
                        <div className="text-xs text-emerald-100">Email</div>
                        <div className="font-semibold">query@ramacarepolyclinic.com</div>
                      </div>
                    </a>

                    <a href="tel:+97142862006" className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
                      <Phone className="w-5 h-5" />
                      <div>
                        <div className="text-xs text-emerald-100">Phone</div>
                        <div className="font-semibold">+971 4 286 2006</div>
                      </div>
                    </a>

                    <div className="sm:col-span-2 flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-emerald-100">Address</div>
                        <div className="font-semibold">12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1 - Dubai</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>

        <SEOContentSection title="Our Commitment to Your Privacy" content={privacySEOContent} />

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#0a0a0a]/95 via-[#1b5e3f]/90 to-[#1b5e3f]/80 text-white rounded-full shadow-lg shadow-emerald-500/30 flex items-center justify-center hover:scale-110 transition-transform z-50"
          >
            <ChevronRight className="w-6 h-6 -rotate-90" />
          </button>
        )}

        <style jsx global>{`
          @media print {
            .no-print {
              display: none !important;
            }
            body {
              background: white !important;
            }
            .bg-gradient-to-br,
            .bg-gradient-to-r {
              background: white !important;
              color: black !important;
            }
          }
        `}</style>
      </div>
    </>
  );
};

// Privacy Policy Content Component
const PrivacyContent = () => (
  <>
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-[#0a0a0a]/95 via-[#1b5e3f]/90 to-[#1b5e3f]/80 rounded-3xl p-8 sm:p-12 mb-8 text-white shadow-2xl shadow-blue-500/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl"></div>
      
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <div className="w-5 h-5 flex items-center justify-center">
            <Image
              src="/images/Logo.png"
              alt="RamaCare Logo"
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
          <span className="text-sm font-semibold">Your Privacy Matters</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Privacy Policy
        </h1>
        <p className="text-lg text-blue-50 max-w-2xl mb-6">
          At RamaCare Polyclinic, we respect your privacy and are committed to protecting your personal and medical information. This Privacy Policy explains how we collect, use, store, and protect your data in accordance with the UAE Personal Data Protection Law (PDPL) and applicable DHA and MOHAP regulations.
        </p>
        
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <Calendar className="w-4 h-4" />
            <span>Effective: January 2026</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <MapPin className="w-4 h-4" />
            <span>Dubai, UAE</span>
          </div>
        </div>
      </div>
    </div>

    {/* Content Sections */}
    <div className="space-y-8">
      
      {/* 1. Information We Collect */}
      <section id="info-collect" className="scroll-mt-32">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Database className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">1. Information We Collect</h2>
              <p className="text-gray-600">We collect only the information necessary to provide safe, effective, and compliant healthcare services.</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-blue-600" />
                Personal Information
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Full name, date of birth, gender</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Contact details (phone number, email address, residential address)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Emergency contact information</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600" />
                Medical Information
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Medical history, diagnoses, and consultation notes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Laboratory test results, imaging reports, and prescriptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Treatment-related photos or videos (where clinically required and with consent)</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-amber-600" />
                Financial Information
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Payment details related to services</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Invoices, receipts, and insurance information for billing and claims processing</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-purple-600" />
                Digital & Online Data
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>IP address and basic website usage data</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Cookies and analytics data</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Information submitted through online forms or appointment requests</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. How We Use Your Data */}
      <section id="how-use" className="scroll-mt-32">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <FileCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">2. How We Use Your Data</h2>
              <p className="text-gray-600">Your data is used strictly for legitimate healthcare and operational purposes</p>
            </div>
          </div>
          
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Delivering medical, wellness, and aesthetic treatments safely</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Scheduling appointments and managing patient records</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Billing, insurance processing, and payment management</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Compliance with UAE healthcare laws and regulatory requirements</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Communicating appointment reminders, treatment updates, or clinic-related notices</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Internal research, quality improvement, and operational analysis (using anonymized data where possible)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 3. Legal Basis for Processing */}
      <section id="legal-basis" className="scroll-mt-32">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">3. Legal Basis for Processing</h2>
              <p className="text-gray-600">We process personal data only when one or more of the following apply</p>
            </div>
          </div>
          
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>It is required to provide medical treatment or healthcare services</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>It is necessary to comply with UAE laws, PDPL, DHA, and MOHAP regulations</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>It is required to fulfill contractual obligations, such as payments or insurance claims</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>Explicit consent has been provided (e.g., for marketing or promotional communications)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 4. Sharing of Information */}
      <section id="sharing" className="scroll-mt-32">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Globe className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">4. Sharing of Information</h2>
              <p className="text-gray-600">RamaCare Polyclinic does not sell patient data</p>
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 border border-purple-100 mb-4">
            <p className="text-gray-700 mb-4">Information may be shared only in limited and lawful circumstances:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>With regulatory authorities (DHA, MOHAP), when legally required</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>With trusted service providers (laboratories, payment gateways, IT systems) under strict confidentiality agreements</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>In medical emergencies, when sharing information is necessary to protect patient health or safety</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Patient Rights */}
      <section id="patient-rights" className="scroll-mt-32">
        <div className="bg-white rounded-2xl border border-emerald-200 p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <UserCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">5. Patient Rights</h2>
              <p className="text-gray-600">Under UAE data protection laws, you have the right to</p>
            </div>
          </div>
          
          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Access your personal and medical information</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Request correction of inaccurate or incomplete data</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Request deletion of personal data where legally permitted</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Withdraw consent for non-essential data processing</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Opt out of marketing or promotional communications</span>
            </li>
          </ul>

          <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
            <p className="text-gray-700 mb-2">To exercise these rights, please contact us at:</p>
            <a href="mailto:query@ramacarepolyclinic.com" className="text-emerald-600 font-semibold hover:text-emerald-700">
              📧 query@ramacarepolyclinic.com
            </a>
            <p className="text-sm text-gray-600 mt-3">We aim to respond to all valid requests within 30 days.</p>
          </div>
        </div>
      </section>

      {/* 6. Data Security & Retention */}
      <section id="data-security" className="scroll-mt-32">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Lock className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">6. Data Security & Retention</h2>
              <p className="text-gray-600">How we protect and store your information</p>
            </div>
          </div>
          
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <span>All records are stored securely in compliance with PDPL and DHA standards</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <span>Access to data is restricted to authorized personnel only</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <span>Medical and financial records are retained for a minimum of 5 years, or longer if required by law</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <span>Data that is no longer required is securely deleted or anonymized</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 7. Cookies & Website Analytics */}
      <section id="cookies" className="scroll-mt-32">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">7. Cookies & Website Analytics</h2>
              <p className="text-gray-600">How we use website technology</p>
            </div>
          </div>
          
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>Our website uses cookies to enhance user experience and analyze website performance</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>Cookies do not collect personal data unless you voluntarily submit information via forms</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>You may disable cookies in your browser settings; however, some website features may be affected</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 8. Third-Party Services & Data Transfers */}
      <section id="third-party" className="scroll-mt-32">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Globe className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">8. Third-Party Services & Data Transfers</h2>
              <p className="text-gray-600">Working with external providers</p>
            </div>
          </div>
          
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
              <span>Some services (such as payment processing or insurance platforms) are managed by third-party providers</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
              <span>These providers process data according to their own privacy policies</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
              <span>All third-party agreements include strict data protection and confidentiality clauses</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 9. Marketing Communications */}
      <section id="marketing" className="scroll-mt-32">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Bell className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">9. Marketing Communications</h2>
              <p className="text-gray-600">Your control over promotional messages</p>
            </div>
          </div>
          
          <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Marketing messages are sent only if you have provided explicit consent</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>You may withdraw consent at any time by contacting: <a href="mailto:query@ramacarepolyclinic.com" className="text-emerald-600 font-semibold hover:text-emerald-700">query@ramacarepolyclinic.com</a></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 10. Policy Updates */}
      <section id="policy-updates" className="scroll-mt-32">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">10. Policy Updates</h2>
              <p className="text-gray-600">Keeping our policy current</p>
            </div>
          </div>
          
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>This Privacy Policy may be updated periodically to reflect legal, regulatory, or operational changes</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>The most recent version will always be available on the RamaCare Polyclinic website</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </>
);
export default PolicyPages;