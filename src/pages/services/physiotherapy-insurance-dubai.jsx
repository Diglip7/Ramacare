import { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, CheckCircle, MapPin, Phone } from 'lucide-react';
import { useToast } from '../../../components/Toast';
import ContentReviewBadge from '../../../components/ContentReviewBadge';

export default function PhysiotherapyInsuranceDubai() {
  const { showToast, ToastComponent } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    insuranceProvider: '',
    preferredTime: ''
  });

  const handleBookAppointment = () => {
    setIsModalOpen(true);
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('verify-coverage-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          preferredTime: formData.preferredTime,
          concern: `Insurance Provider: ${formData.insuranceProvider}`,
          source: 'physiotherapy-insurance-dubai'
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showToast('Thank you! We will verify your coverage and get back to you within 24 hours.', 'success');
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          insuranceProvider: '',
          preferredTime: ''
        });
      } else {
        showToast('Failed to submit appointment. Please try again or contact us directly.', 'error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showToast('An error occurred. Please try again later.', 'error');
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/971566597878', '_blank');
  };

  const faqs = [
    {
      question: "Do I need a doctor's referral for ultrasound therapy?",
      answer: "Yes, for insurance to cover the cost, a referral from a DHA-licensed doctor is usually mandatory. If you are paying out-of-pocket, no referral is needed."
    },
    {
      question: "What is the typical co-payment for physio in Dubai?",
      answer: "For most plans, the co-payment is 20%. This means if a session is AED 400, you pay AED 80, and the insurance pays AED 320."
    },
    {
      question: "Can my claim be rejected?",
      answer: "Claims are usually only rejected if the medical report is missing a diagnosis or if you have exceeded your annual session limit (usually 6-12 sessions depending on the plan)."
    }
  ];

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalClinic',
        '@id': 'https://ramacarepolyclinic.ae/#clinic',
        name: 'RamaCare Polyclinic',
        url: 'https://ramacarepolyclinic.ae/',
        image: 'https://ramacarepolyclinic.ae/images/ultrasound.jpg',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor',
          addressLocality: 'Jumeirah 1, Dubai',
          addressCountry: 'AE'
        },
        medicalSpecialty: 'Physiotherapy',
        hasCredential: 'DHA Licensed'
      },
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://ramacarepolyclinic.ae/services/physiotherapy-insurance-dubai/#webpage',
        url: 'https://ramacarepolyclinic.ae/services/physiotherapy-insurance-dubai/',
        name: 'Physiotherapy Insurance Dubai | How to Claim Ultrasound at RamaCare',
        description: 'Does your UAE health insurance cover ultrasound therapy? Learn about direct billing with NextCare, AXA/GIG, and Daman, plus a step-by-step guide to reimbursement claims.',
        inLanguage: 'en-AE',
        lastReviewed: '2026-08-29',
        medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
        about: { '@type': 'MedicalProcedure', name: 'Physiotherapy Insurance Coverage' },
        reviewedBy: {
          '@type': 'Person',
          name: 'Jeena Mathew',
          jobTitle: 'Musculoskeletal Physiotherapy Specialist',
          url: 'https://ramacarepolyclinic.ae/doctors/jeena-mathew-physiotherapist-dubai/'
        },
        publisher: {
          '@type': 'MedicalClinic',
          name: 'RamaCare Polyclinic',
          url: 'https://ramacarepolyclinic.ae/',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor',
            addressLocality: 'Jumeirah 1, Dubai',
            addressCountry: 'AE'
          }
        }
      },
      {
        '@type': 'Physician',
        '@id': 'https://ramacarepolyclinic.ae/services/physiotherapy-insurance-dubai/#physician',
        name: 'Jeena Mathew',
        medicalSpecialty: 'Physiotherapy',
        honorificSuffix: 'BPT, MPT',
        hasCredential: 'DHA Licensed Physiotherapist',
        worksFor: { '@id': 'https://ramacarepolyclinic.ae/#clinic' },
        url: 'https://ramacarepolyclinic.ae/doctors/jeena-mathew-physiotherapist-dubai/'
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ramacarepolyclinic.ae/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://ramacarepolyclinic.ae/services/' },
          { '@type': 'ListItem', position: 3, name: 'Physiotherapy', item: 'https://ramacarepolyclinic.ae/services/physiotherapy-dubai' },
          { '@type': 'ListItem', position: 4, name: 'Physiotherapy Insurance', item: 'https://ramacarepolyclinic.ae/services/physiotherapy-insurance-dubai/' }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://ramacarepolyclinic.ae/services/physiotherapy-insurance-dubai/#faq',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer }
        }))
      }
    ]
  };

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">Physiotherapy Insurance Dubai | How to Claim Ultrasound at RamaCare</title>
        <meta name="description" content="Does your UAE health insurance cover ultrasound therapy? Learn about direct billing with NextCare, AXA/GIG, and Daman, plus a step-by-step guide to reimbursement claims." key="description" />
        <meta name="keywords" content="Physiotherapy insurance Dubai, Ultrasound therapy insurance coverage, NextCare physiotherapy Dubai, Daman physiotherapy claim, GIG insurance physiotherapy, Direct billing physiotherapy Dubai, Reimbursement physiotherapy Dubai, UAE health insurance physiotherapy" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/physiotherapy-insurance-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Physiotherapy Insurance Dubai | How to Claim Ultrasound at RamaCare" key="og:title" />
        <meta property="og:description" content="Does your UAE health insurance cover ultrasound therapy? Learn about direct billing with NextCare, AXA/GIG, and Daman, plus a step-by-step guide to reimbursement claims." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/physiotherapy-insurance-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/ultrasound.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Physiotherapy Insurance Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Physiotherapy Insurance Dubai | How to Claim Ultrasound at RamaCare" key="twitter:title" />
        <meta name="twitter:description" content="Learn about direct billing with NextCare, AXA/GIG, and Daman, plus a step-by-step guide to reimbursement claims." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/ultrasound.jpg" key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-[1440px] mx-auto">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm font-medium text-[#5F5F5F] flex-wrap">
            <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services/" className="hover:text-[#1F5E4B] transition-colors">Services</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services/physiotherapy-dubai" className="hover:text-[#1F5E4B] transition-colors">Physiotherapy</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#1F5E4B]">Physiotherapy Insurance</span>
          </nav>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }} >
              <div 
                className="inline-block px-4 py-2 rounded-full bg-[#F5F1EA] mb-6" >
                <p 
                  className="text-sm text-[#5F5F5F]"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  Physiotherapy Insurance Dubai | How to Claim Ultrasound at RamaCare
                </p>
              </div>

              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                Is Ultrasound Therapy Covered by Insurance in Dubai?
              </h1>

              <p 
                className="text-lg text-[#5F5F5F] mb-8 leading-relaxed"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Does your UAE health insurance cover <a href="/services/ultrasound-therapy-dubai/" style={{ color: '#1F5E4B', textDecoration: 'underline' }}>ultrasound therapy </a>? Learn about direct billing with NextCare, AXA/GIG, and Daman, plus a step-by-step guide to reimbursement claims.
              </p>

              <p 
                className="text-base text-[#1A1A1A] mb-8 leading-relaxed"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Yes, under Dubai Health Authority (DHA) regulations, physiotherapy—including therapeutic <a href="/services/ultrasound-therapy-dubai/" style={{ color: '#1F5E4B', textDecoration: 'underline' }}>ultrasound therapy </a> is a covered benefit in most standard and premium health insurance plans. However, coverage levels and "Direct Billing" availability vary depending on your specific network and provider.
              </p>

              {/* Quick Check Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="rounded-3xl p-8 mb-8 shadow-sm"
                style={{ backgroundColor: 'rgb(245, 241, 234)' }}
              >
                <h3 
                  className="text-xl font-medium text-[#1F5E4B] mb-4"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  The "Quick Check" for Coverage (2026 Rules):
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#1F5E4B' }}></div>
                    <span className="text-[#1A1A1A]" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px' }}>
                      <strong>Standard Plans:</strong> Often cover 6 to 10 sessions per year.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#1F5E4B' }}></div>
                    <span className="text-[#1A1A1A]" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px' }}>
                      <strong>Co-payment:</strong> Most plans require a 10% to 20% co-pay (the amount you pay at the clinic).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#1F5E4B' }}></div>
                    <span className="text-[#1A1A1A]" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px' }}>
                      <strong>Referral Requirement:</strong> You typically need a referral from a GP or Specialist before insurance will approve physiotherapy sessions.
                    </span>
                  </li>
                </ul>
              </motion.div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => window.open('https://wa.me/971566597878', '_blank')}
                  className="rounded-xl flex items-center justify-center gap-2 px-8 py-4 transition-all hover:opacity-90 cursor-pointer"
                  style={{ backgroundColor: '#1F5E4B', color: 'white', fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: '600' }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Verify Coverage on WhatsApp
                </button>
                <button
                  onClick={scrollToForm}
                  className="bg-white text-[#1F5E4B] px-8 py-4 rounded-2xl flex items-center justify-center gap-3 border-2 border-[#1F5E4B] transition-all hover:bg-[#F5F1EA] cursor-pointer"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: '600' }}
                >
                  <Calendar className="w-5 h-5" />
                  Book Consultation
                </button>
              </div>
            </motion.div>

            {/* Right Content - Insurance Partners Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div 
                className="rounded-3xl p-1 shadow-2xl"
                style={{ background: 'linear-gradient(to bottom right, rgb(255, 251, 234), rgb(233, 226, 214))' }}
              >
                <div className="rounded-3xl p-8 shadow-lg" style={{ backgroundColor: 'rgb(245, 241, 234)' }}>
                  <h2 
                    className="text-center mb-2"
                    style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '22px', fontWeight: '600', color: '#1F5E4B' }}
                  >
                    Trusted Insurance Partners
                  </h2>
                  <p 
                    className="text-center mb-8"
                    style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '13px', fontWeight: '400', color: '#6B7280' }}
                  >
                    Direct Billing Available
                  </p>

                  {/* Insurance Provider Logos */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-white rounded-2xl p-6 shadow-md flex items-center justify-center">
                      <span className="text-sm font-medium text-[#1A1A1A]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>NextCare</span>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-md flex items-center justify-center">
                      <span className="text-sm font-medium text-[#1A1A1A]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Daman</span>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-md flex items-center justify-center">
                      <span className="text-sm font-medium text-[#1A1A1A]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>GIG</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t mb-8" style={{ borderColor: '#E0D8CC' }}></div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <p 
                        className="mb-1"
                        style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '32px', fontWeight: '700', color: '#1F5E4B' }}
                      >
                        5+
                      </p>
                      <p 
                        style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: '400', color: '#6B7280' }}
                      >
                        Insurance Providers
                      </p>
                    </div>
                    <div className="text-center border-l" style={{ borderColor: '#E0D8CC' }}>
                      <p 
                        className="mb-1"
                        style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '32px', fontWeight: '700', color: '#1F5E4B' }}
                      >
                        24h
                      </p>
                      <p 
                        style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: '400', color: '#6B7280' }}
                      >
                        Approval Time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Direct Billing vs Reimbursement Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4"
              style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '700' }}
            >
              Direct Billing vs. Reimbursement: Which is Better?
            </h2>
            <p 
              className="text-lg text-[#5F5F5F] max-w-2xl mx-auto"
              style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '18px' }}
            >
              At RamaCare Polyclinic, we aim to make your recovery stress-free by offering both options.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Direct Billing Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-[#E9E2D6] hover:shadow-2xl transition-all"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#1F5E4B] flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#1F5E4B"/>
                  <rect x="8" y="12" width="16" height="8" rx="2" fill="white"/>
                  <line x1="10" y1="15" x2="22" y2="15" stroke="#1F5E4B" strokeWidth="1.5"/>
                  <line x1="10" y1="18" x2="22" y2="18" stroke="#1F5E4B" strokeWidth="1.5"/>
                </svg>
              </div>

              <h3 
                className="text-2xl font-bold text-[#1F5E4B] mb-4"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: '700' }}
              >
                1. Direct Billing (Cashless)
              </h3>

              <p 
                className="text-base text-[#1A1A1A] mb-6 leading-relaxed"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(16px, 2vw, 18px)' }}
              >
                We settle the bill directly with your insurance provider. You only pay your designated co-payment at our front desk in Jumeirah 1.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="9" stroke="#1F5E4B" strokeWidth="1.5"/>
                      <path d="M6 10L9 13L14 7" stroke="#1F5E4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p 
                      className="font-medium text-[#1A1A1A] mb-1"
                      style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px' }}
                    >
                      Best for:
                    </p>
                    <p 
                      className="text-[#5F5F5F]"
                      style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px' }}
                    >
                      Patients with providers in our network (NextCare, GIG, Daman, etc.).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="9" stroke="#1F5E4B" strokeWidth="1.5"/>
                      <path d="M6 10L9 13L14 7" stroke="#1F5E4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p 
                      className="font-medium text-[#1A1A1A] mb-1"
                      style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px' }}
                    >
                      What you need:
                    </p>
                    <p 
                      className="text-[#5F5F5F]"
                      style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px' }}
                    >
                      Your Emirates ID and a valid insurance card.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom highlight bar */}
              <div className="bg-[#F5F1EA] rounded-2xl p-4 border-l-4 border-[#1F5E4B]">
                <p 
                  className="text-sm font-medium text-[#1A1A1A]"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px' }}
                >
                  ✓ Zero paperwork • Instant approval • Pay only co-pay
                </p>
              </div>
            </motion.div>

            {/* Reimbursement Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-[#E9E2D6] hover:shadow-2xl transition-all"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#1F5E4B] flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#1F5E4B"/>
                  <rect x="9" y="10" width="14" height="12" rx="2" fill="white"/>
                  <line x1="12" y1="13" x2="20" y2="13" stroke="#1F5E4B" strokeWidth="1.5"/>
                  <line x1="12" y1="16" x2="20" y2="16" stroke="#1F5E4B" strokeWidth="1.5"/>
                  <line x1="12" y1="19" x2="18" y2="19" stroke="#1F5E4B" strokeWidth="1.5"/>
                </svg>
              </div>

              <h3 
                className="text-2xl font-bold text-[#1F5E4B] mb-4"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: '700' }}
              >
                2. Reimbursement (Pay and Claim)
              </h3>

              <p 
                className="text-base text-[#1A1A1A] mb-6 leading-relaxed"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(16px, 2vw, 18px)' }}
              >
                If we are "out-of-network" for your specific plan, you pay the session fee upfront, and we provide the legal documentation for you to get your money back from your insurer.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="9" stroke="#1F5E4B" strokeWidth="1.5"/>
                      <path d="M6 10L9 13L14 7" stroke="#1F5E4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p 
                      className="font-medium text-[#1A1A1A] mb-1"
                      style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px' }}>
                      Best for:
                    </p>
                    <p 
                      className="text-[#5F5F5F]"
                      style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px' }} >
                      International plans or restricted local networks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="9" stroke="#1F5E4B" strokeWidth="1.5"/>
                      <path d="M6 10L9 13L14 7" stroke="#1F5E4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p 
                      className="font-medium text-[#1A1A1A] mb-1"
                      style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px' }}
                    >
                      Turnaround:
                    </p>
                    <p 
                      className="text-[#5F5F5F]"
                      style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px' }}
                    >
                      Usually takes 14 to 21 days for the insurer to deposit the funds into your bank account.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom highlight bar */}
              <div className="bg-[#F5F1EA] rounded-2xl p-4 border-l-4 border-[#1F5E4B]">
                <p 
                  className="text-sm font-medium text-[#1A1A1A]"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px' }}
                >
                  ✓ All documents provided • Full support • Claim guidance
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Claim Process Section */}
      <section className="bg-[#F5F1EA] py-20 px-6">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] mb-4"
              style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(32px, 5vw, 48px)' }}
            >
              Step-by-Step: How to Claim Ultrasound Therapy in 2026
            </h2>
            <p 
              className="text-lg text-[#5F5F5F] max-w-3xl mx-auto"
              style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(16px, 2vw, 18px)' }}
            >
              If you are filing a reimbursement claim, follow this 4-step "Golden Rule" to ensure your claim is not rejected by the insurance company.
            </p>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#1F5E4B] via-[#1F5E4B] to-[#1F5E4B]" style={{ zIndex: 0 }}></div>

            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all"
              style={{ zIndex: 1 }}
            >
              {/* Number Badge */}
              <div className="w-16 h-16 rounded-2xl bg-[#1F5E4B] flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>1</span>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="6" width="16" height="20" rx="3" stroke="#1F5E4B" strokeWidth="2" fill="none"/>
                  <path d="M12 12L16 16L20 12" stroke="#1F5E4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <h3 
                className="text-xl font-semibold text-[#1A1A1A] mb-4 text-center"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(18px, 2vw, 20px)' }}
              >
                Get a Referral
              </h3>

              <p 
                className="text-sm text-[#5F5F5F] text-center leading-relaxed"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(14px, 1.5vw, 15px)' }}
              >
                Most UAE insurers (like Sukoon or Daman) require a referral from a licensed GP or Orthopedic Specialist. The referral must state "Physiotherapy including Ultrasound" to be valid.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all"
              style={{ zIndex: 1 }}
            >
              {/* Number Badge */}
              <div className="w-16 h-16 rounded-2xl bg-[#1F5E4B] flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>2</span>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="8" width="20" height="16" rx="2" stroke="#1F5E4B" strokeWidth="2" fill="none"/>
                  <line x1="10" y1="13" x2="22" y2="13" stroke="#1F5E4B" strokeWidth="2"/>
                  <line x1="10" y1="17" x2="22" y2="17" stroke="#1F5E4B" strokeWidth="2"/>
                  <line x1="10" y1="21" x2="18" y2="21" stroke="#1F5E4B" strokeWidth="2"/>
                </svg>
              </div>

              <h3 
                className="text-xl font-semibold text-[#1A1A1A] mb-4 text-center"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(18px, 2vw, 20px)' }}
              >
                Collect the "Big Three" Documents
              </h3>

              <p 
                className="text-sm text-[#5F5F5F] text-center leading-relaxed mb-4"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(14px, 1.5vw, 15px)' }}
              >
                Before leaving RamaCare, ensure our admin team gives you:
              </p>

              <ul className="space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#1F5E4B' }}></div>
                  <span className="text-sm text-[#5F5F5F]" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(13px, 1.5vw, 14px)' }}>
                    <strong>Official Reimbursement Form:</strong> Duly signed and stamped by our DHA-licensed physiotherapist.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#1F5E4B' }}></div>
                  <span className="text-sm text-[#5F5F5F]" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(13px, 1.5vw, 14px)' }}>
                    <strong>Itemized Invoice:</strong> Showing the specific code for "Therapeutic Ultrasound."
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#1F5E4B' }}></div>
                  <span className="text-sm text-[#5F5F5F]" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(13px, 1.5vw, 14px)' }}>
                    <strong>Detailed Medical Report:</strong> Explaining your diagnosis (e.g., Sciatica or Sports Injury) and the necessity of treatment.
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all"
              style={{ zIndex: 1 }}
            >
              {/* Number Badge */}
              <div className="w-16 h-16 rounded-2xl bg-[#1F5E4B] flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>3</span>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="6" width="12" height="20" rx="2" stroke="#1F5E4B" strokeWidth="2" fill="none"/>
                  <circle cx="16" cy="22" r="2" fill="#1F5E4B"/>
                </svg>
              </div>

              <h3 
                className="text-xl font-semibold text-[#1A1A1A] mb-4 text-center"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(18px, 2vw, 20px)' }}
              >
                Submit via Mobile App
              </h3>

              <p 
                className="text-sm text-[#5F5F5F] text-center leading-relaxed"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(14px, 1.5vw, 15px)' }}
              >
                In 2026, most Dubai insurers prefer submissions through apps like MyGIG, Lumi (NextCare), or the Daman App. Upload clear photos of your documents and your Emirates ID.
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all"
              style={{ zIndex: 1 }}
            >
              {/* Number Badge */}
              <div className="w-16 h-16 rounded-2xl bg-[#1F5E4B] flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>4</span>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 10H24L22 24H10L8 10Z" stroke="#1F5E4B" strokeWidth="2" strokeLinejoin="round" fill="none"/>
                  <path d="M12 10V8C12 6.89543 12.8954 6 14 6H18C19.1046 6 20 6.89543 20 8V10" stroke="#1F5E4B" strokeWidth="2"/>
                </svg>
              </div>

              <h3 
                className="text-xl font-semibold text-[#1A1A1A] mb-4 text-center"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(18px, 2vw, 20px)' }}
              >
                Keep Your Receipts
              </h3>

              <p 
                className="text-sm text-[#5F5F5F] text-center leading-relaxed"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(14px, 1.5vw, 15px)' }}
              >
                Keep the original physical copies for at least 6 months. Insurers occasionally request the originals for random audits.
              </p>
            </motion.div>
          </div>

          {/* Pro Tip Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto"
          >
            <p 
              className="text-center mb-6"
              style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(16px, 2vw, 18px)', fontWeight: '600', color: '#1A1A1A' }}
            >
              <strong>Pro Tip:</strong> Taking these 4 steps seriously can improve your claim approval rate by over 90%.
            </p>
            
            <div className="text-center">
              <button 
                onClick={() => window.open('https://wa.me/971566597878?text=Hi%20RamaCare%2C%20I%20would%20like%20to%20request%20the%20Physiotherapy%20Insurance%20Claim%20Checklist.', '_blank')}
                className="bg-[#1F5E4B] text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 hover:bg-[#154a32] hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: '600', transform: 'none' }}
              >
                Download Claim Checklist
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Insurance Providers Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16" >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] mb-4 flex items-center justify-center gap-3"
            style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(32px, 5vw, 48px)' }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4L8 9V20C8 27.18 13.2 33.9 20 36C26.8 33.9 32 27.18 32 20V9L20 4Z" stroke="#1F5E4B" strokeWidth="2" fill="none"/>
            </svg>
            Common Insurance Providers We Support
          </h2>
          <p
            className="text-lg text-[#5F5F5F] max-w-3xl mx-auto"
            style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '18px' }}
          >
            While networks update frequently, RamaCare works closely with the following major TPA (Third Party Administrators) and Insurers:
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { name: 'NextCare', sub: 'General & Comprehensive' },
            { name: 'GIG Gulf', sub: 'Formerly AXA' },
            { name: 'Daman', sub: 'NW1 & Royal' },
            { name: 'Neuron', sub: 'Network Provider' },
            { name: 'Oman Insurance', sub: 'Sukoon' },
            { name: 'MetLife', sub: 'Corporate Plans' },
          ].map((provider, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center border border-[#F0EBE3]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F5F1EA] flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6L12 2Z" stroke="#1F5E4B" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <h3 className="text-base font-medium text-[#1A1A1A] mb-1" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px' }}>{provider.name}</h3>
              <p className="text-xs text-[#5F5F5F]" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '12px' }}>{provider.sub}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-[#F5F1EA] rounded-3xl p-8 max-w-3xl mx-auto text-center border border-[#E9E2D6]" >
          <p style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', color: '#1A1A1A' }}>
            <strong>Don&apos;t see your provider?</strong> No worries! We can still process your claim through reimbursement. Contact our billing team to verify your specific plan.
          </p>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#F5F1EA] py-20 md:py-32">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"  >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] mb-4 flex items-center justify-center gap-3"
              style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(32px, 5vw, 48px)' }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="16" stroke="#1F5E4B" strokeWidth="2" fill="none"/>
                <path d="M16 16C16 13.8 17.8 12 20 12C22.2 12 24 13.8 24 16C24 18.5 20 19 20 22" stroke="#1F5E4B" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="20" cy="27" r="1.5" fill="#1F5E4B"/>
              </svg>
              Frequently Asked Questions
            </h2>
            <p
              className="text-lg text-[#5F5F5F]"
              style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '18px' }}>
              Get answers to common questions about insurance coverage for ultrasound therapy
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "Do I need a doctor's referral for ultrasound therapy?",
                a: "Yes, for insurance to cover the cost, a referral from a DHA-licensed doctor is usually mandatory. If you are paying out-of-pocket, no referral is needed."
              },
              {
                q: "What is the typical co-payment for physio in Dubai?",
                a: "For most plans, the co-payment is 20%. This means if a session is AED 400, you pay AED 80, and the insurance pays AED 320."
              },
              {
                q: "Can my claim be rejected?",
                a: "Claims are usually only rejected if the medical report is missing a diagnosis or if you have exceeded your annual session limit (usually 6-12 sessions depending on the plan)."
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden" >
                <button
                  onClick={() => setOpenFaq(openFaq === i + 10 ? null : i + 10)}
                  className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-[#F5F1EA] transition-colors group" >
                  <span className="text-lg font-semibold text-[#1A1A1A] pr-4" >
                    {faq.q}
                  </span>
                  <svg
                    width="20" height="20" viewBox="0 0 20 20" fill="none"
                    className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openFaq === i + 10 ? 'rotate-180' : ''}`}>
                    <path d="M5 8L10 13L15 8" stroke="#1F5E4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {openFaq === i + 10 && (
                  <div className="px-8 py-5 border-t border-[#F0EBE3]">
                    <p style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(14px, 1.8vw, 16px)', color: '#5F5F5F', lineHeight: '1.7' }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-3xl p-8 shadow-lg max-w-sm mx-auto text-center">
            <p className="text-base text-[#5F5F5F] mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px' }}>Still have questions?</p>
            <button
              onClick={() => window.open('https://wa.me/971566597878?text=Hi%20RamaCare%2C%20I%20have%20questions%20about%20physiotherapy%20insurance%20coverage.%20Can%20you%20please%20help%20me%3F', '_blank')}
              className="bg-[#1F5E4B] text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 hover:bg-[#154a32] hover:scale-105 cursor-pointer flex items-center justify-center gap-2 mx-auto"
              style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '15px', fontWeight: '600' }}>
              <MessageCircle className="w-4 h-4" />
              Chat with Our Team
            </button>
          </motion.div>
        </div>
      </section>

      {/* Related Services & Disclaimer */}
      <section className="bg-white py-12 px-6 border-t border-[#E9E2D6]">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-xl font-semibold text-[#1A1A1A] mb-5">Explore Related Physiotherapy Services</h2>
          <div className="flex flex-wrap gap-2.5">
            <Link href="/services/physiotherapy-dubai" className="text-base text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              Physiotherapy Dubai
            </Link>
            <Link href="/services/ultrasound-therapy-cost-dubai/" className="text-base text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              Ultrasound Therapy Cost
            </Link>
            <Link href="/services/professional-vs-home-ultrasound/" className="text-base text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              Professional vs Home Ultrasound
            </Link>
            <Link href="/services/knee-pain-treatment-dubai/" className="text-base text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              Knee Pain Treatment
            </Link>
            <Link href="/services/sciatica-treatment-dubai/" className="text-base text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              Sciatica Treatment
            </Link>
          </div>
          <p className="text-sm text-[#5F5F5F] leading-relaxed mt-8">
            <span className="font-medium text-[#1A1A1A]">Medical & Insurance Disclaimer:</span> Insurance coverage policies, network inclusions, direct billing availability, and co-payment terms are determined by individual insurance providers and plan terms, subject to change without notice. Information provided on this page is for educational guidance only and does not guarantee claim approval or coverage. Please consult with our administrative team and your insurance provider to verify eligibility prior to treatment.
          </p>
        </div>
      </section>

      <ContentReviewBadge doctorName="Jeena Mathew" variant="full" />

      {/* Verify Your Coverage Today Section */}
      <section id="verify-coverage-form" className="bg-[#1F5E4B] py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '700' }}
              >
                Verify Your Coverage Today
              </h2>
              
              <p 
                className="text-base md:text-lg text-white/90 mb-8 leading-relaxed"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(16px, 2vw, 18px)' }}
              >
                Don't guess your benefits. Send us a photo of your insurance card via WhatsApp, and our billing team will check your eligibility instantly.
              </p>

              {/* Contact Info */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '600' }}>
                      Our Location
                    </h4>
                    <p className="text-sm text-white/80" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px' }}>
                      12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1 - Dubai
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '600' }}>
                      Quick Contact
                    </h4>
                    <p className="text-sm text-white/80" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px' }}>
                      WhatsApp for Insurance Check
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="bg-white text-[#1F5E4B] px-8 py-4 rounded-2xl flex items-center gap-3 font-semibold transition-all hover:bg-white/90 cursor-pointer shadow-lg"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '15px', fontWeight: '600' }}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Instantly
              </button>
            </div>

            {/* Right Content - Form Card */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 
                className="text-2xl font-medium text-[#1A1A1A] mb-6"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '24px', fontWeight: '500' }}
              >
                Request a Coverage Check
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label 
                    htmlFor="fullName" 
                    className="block text-sm font-medium text-[#1A1A1A] mb-2"
                    style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: '500' }} >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-[#E0D8CC] bg-[#F9F7F4] text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1F5E4B] focus:border-transparent transition-all"
                    placeholder="John Doe"
                    required
                    style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '15px' }}
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-sm font-medium text-[#1A1A1A] mb-2"
                    style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: '500' }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-[#E0D8CC] bg-[#F9F7F4] text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1F5E4B] focus:border-transparent transition-all"
                    placeholder="+971 50 123 4567"
                    required
                    style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '15px' }}
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-[#1A1A1A] mb-2"
                    style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: '500' }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-[#E0D8CC] bg-[#F9F7F4] text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1F5E4B] focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                    required
                    style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '15px' }}
                  />
                </div>

                {/* Insurance Provider */}
                <div>
                  <label 
                    htmlFor="insuranceProvider" 
                    className="block text-sm font-medium text-[#1A1A1A] mb-2"
                    style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: '500' }}
                  >
                    Insurance Provider
                  </label>
                  <select
                    id="insuranceProvider"
                    value={formData.insuranceProvider}
                    onChange={(e) => setFormData({ ...formData, insuranceProvider: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-[#E0D8CC] bg-[#F9F7F4] text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#1F5E4B] focus:border-transparent transition-all appearance-none cursor-pointer"
                    required
                    style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '15px' }}
                  >
                    <option value="">Select your provider</option>
                    <option value="NextCare">NextCare</option>
                    <option value="GIG">GIG Gulf</option>
                    <option value="Daman">Daman</option>
                    <option value="Neuron">Neuron</option>
                    <option value="Sukoon">Oman Insurance (Sukoon)</option>
                    <option value="MetLife">MetLife</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Preferred Time */}
                <div>
                  <label 
                    htmlFor="preferredTime" 
                    className="block text-sm font-medium text-[#1A1A1A] mb-2"
                    style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: '500' }}
                  >
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-[#E0D8CC] bg-[#F9F7F4] text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#1F5E4B] focus:border-transparent transition-all appearance-none cursor-pointer"
                    required
                    style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '15px' }}
                  >
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (9AM-12PM)</option>
                    <option value="afternoon">Afternoon (12PM-4PM)</option>
                    <option value="evening">Evening (4PM-9PM)</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#1F5E4B] text-white py-4 rounded-2xl font-semibold transition-all hover:bg-[#154a32] hover:shadow-lg cursor-pointer"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '15px', fontWeight: '600' }}
                >
                  Confirm Coverage Check
                </button>

                {/* WhatsApp Button */}
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="w-full bg-white text-[#1F5E4B] py-4 rounded-2xl font-semibold border-2 border-[#1F5E4B] transition-all hover:bg-[#1F5E4B] hover:text-white cursor-pointer flex items-center justify-center gap-2"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '15px', fontWeight: '600' }}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Instantly
                </button>

                {/* Helper Text */}
                <p 
                  className="text-xs text-center text-[#5F5F5F] mt-4"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '12px' }}
                >
                  We'll verify your coverage and get back to you within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
