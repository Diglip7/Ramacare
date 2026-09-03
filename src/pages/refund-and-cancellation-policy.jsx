'use client';

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {
  Shield, Lock, Eye, FileText, Calendar, Mail,
  Phone, MapPin, Search, Download, Printer,
  ChevronRight, AlertCircle, Check, Clock, CreditCard
} from 'lucide-react';

const RefundCancellationPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Table of Contents
  const sections = [
    { id: 'appointments-payments', title: 'Appointment Bookings & Payments', icon: CreditCard },
    { id: 'cancellations', title: 'Cancellations & Rescheduling', icon: Calendar },
    { id: 'no-refund', title: 'No Refund Policy', icon: AlertCircle },
    { id: 'transfer-adjustment', title: 'Transfer or Adjustment Options', icon: Check },
    { id: 'clinic-cancellations', title: 'Clinic-Initiated Cancellations', icon: Clock },
    { id: 'payment-wallets', title: 'Refunds via Payment Wallets', icon: Lock },
    { id: 'medical-exceptions', title: 'Medical or Exceptional Circumstances', icon: Eye },
    { id: 'package-validity', title: 'Package Validity', icon: Calendar },
    { id: 'compliance', title: 'Compliance & Transparency', icon: Shield },
  ];

  // Scroll detection
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
        <title key="title">Refund and Cancellation Policy - RamaCare Polyclinic</title>
        <meta name="description" content="Refund and Cancellation Policy for RamaCare Polyclinic Dubai. Learn about our payment terms, cancellation procedures, and refund policies." key="description" />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50/30" style={{ fontFamily: "'Inter', sans-serif" }}>

        {/* Sticky Header */}
        <div className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-emerald-100'
            : 'bg-transparent'
          }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl">
                  <Image
                    src="/images/Logo.png"
                    alt="RamaCare Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-lg font-bold text-gray-900 block">Refund & Cancellation Policy</span>
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
                {/* Search Box */}
                {/* <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search policy..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div> */}

                {/* Table of Contents */}
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
                          className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-all text-left group ${activeSection === section.id
                              ? 'bg-emerald-50 text-emerald-700 font-semibold'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                        >
                          <Icon className={`w-4 h-4 flex-shrink-0 ${activeSection === section.id ? 'text-emerald-600' : 'text-gray-400 group-hover:text-gray-600'
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

                {/* Quick Contact Card */}
                <div className="mt-6 bg-gradient-to-r from-[#0a0a0a]/95 via-[#1b5e3f]/90 to-[#1b5e3f]/80 rounded-2xl p-5 text-white shadow-lg shadow-emerald-500/30">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Questions?
                  </h4>
                  <p className="text-sm text-emerald-50 mb-4">
                    Contact us for payment or cancellation concerns.
                  </p>
                  <a
                    href="mailto:query@ramacarepolyclinic.ae"
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:text-emerald-100 transition-colors"
                  >
                    query@ramacarepolyclinic.ae
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-9">
              {/* Hero Section */}
              <div className="bg-gradient-to-r from-[#0a0a0a]/95 via-[#1b5e3f]/90 to-[#1b5e3f]/80 rounded-3xl p-8 sm:p-12 mb-8 text-white shadow-2xl shadow-emerald-500/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/10 rounded-full blur-2xl"></div>

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
                    <span className="text-sm font-semibold">Transparent & Fair</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Refund & Cancellation Policy
                  </h1>
                  <p className="text-lg text-emerald-50 max-w-2xl mb-6">
                    At RamaCare Polyclinic, we are committed to providing high-quality healthcare with full transparency. This policy outlines our terms related to payments, cancellations, transfers, and adjustments, in accordance with Dubai Health Authority (DHA) guidelines and UAE consumer protection laws.
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

                {/* 1. Appointment Bookings & Payments */}
                <section id="appointments-payments" className="scroll-mt-32">
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CreditCard className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">1. Appointment Bookings & Payments</h2>
                        <p className="text-gray-600">Payment requirements and terms</p>
                      </div>
                    </div>

                    <div className="prose prose-emerald max-w-none">
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>An advance payment or a deposit may be required to confirm appointments.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>Deposits are non-refundable and are used to secure your booking slot.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>Full payment for treatment packages must be completed before the first session, unless otherwise agreed in writing by clinic management.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 2. Cancellations & Rescheduling */}
                <section id="cancellations" className="scroll-mt-32">
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">2. Cancellations & Rescheduling</h2>
                        <p className="text-gray-600">How to cancel or reschedule your appointment</p>
                      </div>
                    </div>

                    <div className="prose prose-emerald max-w-none">
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Patients must provide at least <strong>24 hours' notice</strong> for appointment cancellations or rescheduling.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Appointments cancelled with less than 24 hours' notice, or missed appointments (no-shows), will be considered utilised and deducted from the package or session count.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Repeated short-notice cancellations may require full advance payment for future bookings.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 3. No Refund Policy */}
                <section id="no-refund" className="scroll-mt-32">
                  <div className="bg-white rounded-2xl border border-red-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">3. No Refund Policy</h2>
                        <p className="text-gray-600">Important refund information</p>
                      </div>
                    </div>

                    <div className="bg-red-50 rounded-xl p-6 border border-red-100 mb-6">
                      <p className="text-red-900 font-semibold mb-3">Please Note:</p>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <span>All payments made for consultations, treatments, packages, promotions, or special offers are <strong>non-refundable</strong> once purchased.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <span>No refunds will be issued for unused sessions or partially completed packages.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <span>This policy applies to all payment methods, including cash, card payments, online gateways, Tabby, Tamara, or any other digital payment solution.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 4. Transfer or Adjustment Options */}
                <section id="transfer-adjustment" className="scroll-mt-32">
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Check className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">4. Transfer or Adjustment Options</h2>
                        <p className="text-gray-600">Flexible alternatives for your convenience</p>
                      </div>
                    </div>

                    <div className="prose prose-emerald max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-6">
                        To provide flexibility to our patients, the following options may be available:
                      </p>

                      <ul className="space-y-3 text-gray-700 mb-6">
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>Remaining sessions in a package may be transferred to a friend or family member, subject to written approval from the clinic.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>Alternatively, unused balances may be adjusted toward another treatment of equal or higher value.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>Transfers or adjustments are permitted <strong>once per package</strong> and must be used within <strong>12 months</strong> from the original date of purchase.</span>
                        </li>
                      </ul>

                      <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Insurance Note:</h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li className="flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>Transferred sessions may not be eligible for insurance reimbursement. Patients are advised to confirm coverage directly with their insurance provider.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>Adjustments to alternative treatments for the same patient may be eligible for reimbursement, subject to the insurer's policy terms.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 5. Clinic-Initiated Cancellations */}
                <section id="clinic-cancellations" className="scroll-mt-32">
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">5. Clinic-Initiated Cancellations or Changes</h2>
                        <p className="text-gray-600">What happens if we need to cancel</p>
                      </div>
                    </div>

                    <div className="prose prose-emerald max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        If RamaCare Polyclinic needs to cancel or reschedule an appointment due to medical, operational, or unforeseen circumstances:
                      </p>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-5 border border-purple-200">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                              <Calendar className="w-5 h-5 text-white" />
                            </div>
                            <h4 className="font-bold text-gray-900">Option 1</h4>
                          </div>
                          <p className="text-sm text-gray-700">
                            The patient may reschedule the appointment at a mutually convenient time
                          </p>
                        </div>

                        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl p-5 border border-emerald-200">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                              <CreditCard className="w-5 h-5 text-white" />
                            </div>
                            <h4 className="font-bold text-gray-900">Option 2</h4>
                          </div>
                          <p className="text-sm text-gray-700">
                            Receive a clinic credit equal to the value of the affected session, valid for 12 months toward any treatment
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 6. Refunds via Payment Wallets */}
                <section id="payment-wallets" className="scroll-mt-32">
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Lock className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">6. Refunds via Tabby, Tamara, or Other Wallets</h2>
                        <p className="text-gray-600">Third-party payment processing</p>
                      </div>
                    </div>

                    <div className="prose prose-emerald max-w-none">
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>In exceptional cases where a refund is approved, it will be processed back to the original payment method.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>Refunds through Tabby, Tamara, or other third-party wallets are subject to their respective processing timelines and policies.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>Once RamaCare Polyclinic submits a refund request, we have no control over delays caused by third-party providers.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>Any transaction or processing fees charged by payment providers are non-refundable.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 7. Medical or Exceptional Circumstances */}
                <section id="medical-exceptions" className="scroll-mt-32">
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Eye className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">7. Medical or Exceptional Circumstances</h2>
                        <p className="text-gray-600">Special consideration cases</p>
                      </div>
                    </div>

                    <div className="prose prose-emerald max-w-none">
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>In rare situations, such as medical contraindications verified by a DHA-licensed doctor, the clinic may review the case.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Depending on the assessment, management may offer a credit note, session transfer, or partial refund.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>All such cases are reviewed individually and handled in line with DHA standards and clinic discretion.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 8. Package Validity */}
                <section id="package-validity" className="scroll-mt-32">
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">8. Package Validity</h2>
                        <p className="text-gray-600">Expiration and usage terms</p>
                      </div>
                    </div>

                    <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>All prepaid treatment packages are valid for <strong>12 months</strong> from the date of purchase unless stated otherwise in writing.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>Expired sessions <strong>cannot be extended, refunded, transferred, or reactivated</strong>.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 9. Compliance & Transparency */}
                <section id="compliance" className="scroll-mt-32">
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">9. Compliance & Transparency</h2>
                        <p className="text-gray-600">Our commitment to standards</p>
                      </div>
                    </div>

                    <div className="prose prose-emerald max-w-none">
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>RamaCare Polyclinic strictly follows DHA and MOHAP regulations regarding pricing, billing transparency, and informed patient consent.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>Patients are informed of all payment, refund, and cancellation terms before booking or purchasing.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>If a patient remains dissatisfied, they may raise concerns with the appropriate health authority in accordance with UAE healthcare guidelines.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Contact Section */}
                <section className="scroll-mt-32">
                  <div className="bg-gradient-to-r from-[#0a0a0a]/95 via-[#1b5e3f]/90 to-[#1b5e3f]/80 rounded-2xl p-8 text-white shadow-xl">
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
                      <a href="mailto:query@ramacarepolyclinic.ae" className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
                        <Mail className="w-5 h-5" />
                        <div>
                          <div className="text-xs text-emerald-100">Email</div>
                          <div className="font-semibold">query@ramacarepolyclinic.ae</div>
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

              </div>
            </main>
          </div>
        </div>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-full shadow-lg shadow-emerald-500/30 flex items-center justify-center hover:scale-110 transition-transform z-50"
          >
            <ChevronRight className="w-6 h-6 -rotate-90" />
          </button>
        )}

        {/* Print Styles */}
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

export default RefundCancellationPage;