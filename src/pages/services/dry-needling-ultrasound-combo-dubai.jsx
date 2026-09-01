import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle, ShieldCheck, Award, Activity, ArrowRight, MoveDown } from 'lucide-react';
import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden transition-all hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left bg-white flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
        <span className="font-medium text-[#1A1A1A] text-base">{question}</span>
        <svg
          className={`w-5 h-5 text-[#5F5F5F] transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-4 pt-0 bg-white">
          <p className="text-[#5F5F5F] text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const DryNeedlingUltrasoundComboPage = () => {
  const whatsappNumber = "971566597878";
  const whatsappMessage = encodeURIComponent("Hello RamaCare, I'm interested in the Dry Needling & Ultrasound Combo.");
  
  // Popup Modal State
  const [showModal, setShowModal] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredTime: '',
    injuryArea: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [toast, setToast] = useState({ show: false, type: 'success', message: '' });

  useEffect(() => {
    // Show modal after 2 seconds on page load
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 3000);
  };

  const validateField = (name, value) => {
    if (name === 'name') {
      if (!value || value.trim().length < 3) return 'Name must be at least 3 characters';
      return '';
    }
    if (name === 'phone') {
      if (!value || !/^[+]?[1-9]\d{1,14}$/.test(value.replace(/\s/g, ''))) return 'Enter a valid phone number';
      return '';
    }
    if (name === 'email') {
      if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address';
      return '';
    }
    if (name === 'preferredTime' || name === 'injuryArea') {
      if (!value || value.trim() === '') return 'This field is required';
      return '';
    }
    return '';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      const error = validateField(name, value);
      setFormErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setFormErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setFormErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const res = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'dry-needling-ultrasound-combo-dubai',
          action: 'request_appointment',
          fullName: formData.name,
          phone: formData.phone,
          email: formData.email,
          preferredTime: formData.preferredTime,
          treatmentArea: formData.injuryArea
        })
      });
      
      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', preferredTime: '', injuryArea: '' });
        showToast('Appointment request submitted successfully!', 'success');
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        showToast('Failed to submit. Please try again or contact us directly.', 'error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      showToast('Something went wrong. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqData = [
    { question: "Does dry needling hurt?", answer: "Most patients describe a brief pinch or ache when the needle hits the trigger point, followed by immediate relief. The sensation is typically much less painful than the chronic pain you're experiencing." },
    { question: "How long does the combined treatment take?", answer: "The complete Dual Recovery session typically takes 45-60 minutes. Dry needling is performed first (15-20 minutes), followed immediately by ultrasound therapy (20-25 minutes) to maximize healing." },
    { question: "How many sessions will I need?", answer: "Most patients experience significant relief within 2-3 sessions. For chronic conditions, we typically recommend a series of 4-6 treatments. Dubai runners with acute injuries often see results within 48 hours." },
    { question: "Is ultrasound therapy safe?", answer: "Yes, therapeutic ultrasound is completely safe when administered by a licensed professional. The sound waves penetrate deep into tissue to promote healing without any harmful effects." },
    { question: "Can I exercise after treatment?", answer: "We recommend avoiding intense exercise for 24-48 hours after your first session. Light movement and stretching are encouraged. Your physiotherapist will provide personalized guidance based on your condition." },
    { question: "Is this treatment covered by insurance?", answer: "Many insurance plans in Dubai cover physiotherapy treatments including dry needling and ultrasound. We recommend checking with your insurance provider. We can provide detailed receipts for reimbursement." },
    { question: "What should I bring to my appointment?", answer: "Wear comfortable, loose-fitting clothing that allows easy access to the treatment area. Bring your insurance card if applicable, and any previous medical records related to your injury." },
    { question: "Why combine dry needling with ultrasound?", answer: "Dry needling releases the mechanical knot in the muscle, while ultrasound immediately drives healing blood flow into the freshly released tissue. This synergistic approach accelerates recovery beyond what either treatment can achieve alone." }
  ];

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalClinic',
        '@id': 'https://ramacarepolyclinic.ae/#clinic',
        name: 'RamaCare Polyclinic',
        url: 'https://ramacarepolyclinic.ae/',
        image: 'https://ramacarepolyclinic.ae/images/Needle.jpg',
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
        '@id': 'https://ramacarepolyclinic.ae/services/dry-needling-ultrasound-combo-dubai/#webpage',
        url: 'https://ramacarepolyclinic.ae/services/dry-needling-ultrasound-combo-dubai/',
        name: 'Dry Needling & Ultrasound Combo Dubai | RamaCare Dual Recovery',
        description: 'Experience the "Ultimate Recovery Duo" at RamaCare Jumeirah. Learn how combining Dry Needling and Ultrasound therapy accelerates healing for stubborn muscle knots and chronic pain.',
        inLanguage: 'en-AE',
        lastReviewed: '2026-08-29',
        medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
        about: [
          { '@type': 'MedicalProcedure', name: 'Dry Needling' },
          { '@type': 'MedicalProcedure', name: 'Therapeutic Ultrasound' }
        ],
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
        '@id': 'https://ramacarepolyclinic.ae/services/dry-needling-ultrasound-combo-dubai/#physician',
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
          { '@type': 'ListItem', position: 4, name: 'Dry Needling & Ultrasound Combo', item: 'https://ramacarepolyclinic.ae/services/dry-needling-ultrasound-combo-dubai/' }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://ramacarepolyclinic.ae/services/dry-needling-ultrasound-combo-dubai/#faq',
        mainEntity: faqData.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer }
        }))
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title key="title">Dry Needling & Ultrasound Combo Dubai | RamaCare Dual Recovery</title>
        <meta name="description" content="Experience the 'Ultimate Recovery Duo' at RamaCare Jumeirah. Learn how combining Dry Needling and Ultrasound therapy accelerates healing for stubborn muscle knots and chronic pain." key="description" />
        <meta name="keywords" content="Dry needling and ultrasound combo Dubai, dual recovery protocol, trigger point release, ultrasound therapy Dubai, sports injury recovery Jumeirah" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/dry-needling-ultrasound-combo-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:title" content="Dry Needling & Ultrasound Combo Dubai | RamaCare Dual Recovery" key="og:title" />
        <meta property="og:description" content="Experience the 'Ultimate Recovery Duo' at RamaCare Jumeirah. Learn how combining Dry Needling and Ultrasound therapy accelerates healing for stubborn muscle knots and chronic pain." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/dry-needling-ultrasound-combo-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/Needle.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Dry Needling and Ultrasound Combo Therapy - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Dry Needling & Ultrasound Combo Dubai | RamaCare Dual Recovery" key="twitter:title" />
        <meta name="twitter:description" content="Experience the 'Ultimate Recovery Duo' at RamaCare Jumeirah. Learn how combining Dry Needling and Ultrasound therapy accelerates healing for stubborn muscle knots and chronic pain." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/Needle.jpg" key="twitter:image" />

        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      <main className="min-h-screen bg-white" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>

        {/* Top Banner Section */}
        <section className="bg-[#1b5e3f] text-white py-8 px-4">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-7xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 flex-wrap mb-4">
              <span className="inline-flex items-center justify-center rounded-md border px-3 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 bg-white/20 text-white hover:bg-white/30 transition-colors">Dubai Run Recovery</span>
              <span className="inline-flex items-center justify-center rounded-md border px-3 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 bg-white/20 text-white hover:bg-white/30 transition-colors">48hr Recovery Protocol</span>
            </div>
            <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold mb-3">The "Ultimate Recovery Duo" at RamaCare Jumeirah</h2>
            <p className="text-white/90 max-w-3xl mx-auto text-[15px] md:text-[16px]">
              Combining Dry Needling and Ultrasound therapy accelerates healing for stubborn muscle knots and chronic pain.
            </p>
          </motion.div>
        </section>

        {/* Hero Section */}
        <section className="py-16 md:py-20 px-4 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm font-medium text-[#5F5F5F] flex-wrap">
              <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/services/" className="hover:text-[#1F5E4B] transition-colors">Services</Link>
              <span aria-hidden="true">/</span>
              <Link href="/services/physiotherapy-dubai" className="hover:text-[#1F5E4B] transition-colors">Physiotherapy</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#1F5E4B]">Dry Needling & Ultrasound Combo</span>
            </nav>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full"
              >
                <h1 className="text-[48px] md:text-[56px] lg:text-[64px] font-bold text-[#1A1A1A] leading-[1.1] mb-6 tracking-tight">
                  Dry Needling & Ultrasound Combo Dubai | RamaCare Dual Recovery
                </h1>
                <p className="text-[18px] md:text-[20px] mb-10 text-[#5F5F5F] leading-relaxed">
                  Experience the "Ultimate Recovery Duo" at RamaCare Jumeirah. Learn how combining Dry Needling and Ultrasound therapy accelerates healing for stubborn muscle knots and chronic pain.
                </p>

                {/* Why One Treatment Box */}
                <div className="bg-[#f0ece2] p-8 rounded-2xl mb-12">
                  <h3 className="font-bold text-[#1A1A1A] mb-4 text-[20px]">Why One Treatment Isn't Always Enough</h3>
                  <p className="text-[#5F5F5F] text-[16px] leading-relaxed mb-0">
                    Stubborn injuries often have two layers: a <span className="font-bold text-[#1A1A1A]">Neurological layer</span> (trigger points/knots) and a <span className="font-bold text-[#1A1A1A]">Structural layer</span> (inflammation/poor blood flow). While Dry Needling is the "gold standard" for releasing the knot, Ultrasound is the engine that drives the healing energy into the tissue afterward.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a 
                    href="#booking-section"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border bg-[#1b5e3f] text-white px-4 py-2 md:py-3 text-base md:text-lg font-medium transition-all shadow-md hover:bg-[#1b5e3f]/90 h-10 md:h-12"
                  >
                    Book Your Combo Session Now <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border bg-[#f0ece2] text-[#1A1A1A] px-4 py-2 md:py-3 text-base md:text-lg font-medium transition-all shadow-sm hover:bg-[#e5dfd3] h-10 md:h-12"
                  >
                    WhatsApp Consultation
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-6 lg:gap-8 text-[#5F5F5F] text-[15px] font-medium border-t pt-8">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-[#1b5e3f]" />
                    <span>DHA Licensed</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Award className="w-5 h-5 text-[#1b5e3f]" />
                    <span>Sports Injury Specialists</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Activity className="w-5 h-5 text-[#1b5e3f]" />
                    <span>Dubai Runners Recovery</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Visual representation */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-full"
              >
                {/* Beige Container */}
                <div className="bg-[#f0ece2] p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1b5e3f]/5 to-transparent"></div>
                  
                  <div className="relative z-10">
                    <div className="relative space-y-8 md:space-y-10">
                      {/* Step 1 Card */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white p-5 md:p-6 rounded-xl shadow-lg relative"
                      >
                        <span className="inline-flex items-center justify-center rounded-md border border-[#1b5e3f]/20 px-2 py-0.5 text-xs font-semibold w-fit whitespace-nowrap shrink-0 bg-[#1b5e3f] text-white mb-3 uppercase tracking-wider">
                          Step 1
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-1">Dry Needling</h3>
                        <p className="text-[#5F5F5F] text-sm md:text-base">Release trigger points &amp; muscle knots</p>
                      </motion.div>

                      {/* Arrow */}
                      <div className="flex justify-center py-2">
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-[#1b5e3f]"
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </motion.div>
                      </div>

                      {/* Step 2 Card */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white p-5 md:p-6 rounded-xl shadow-lg relative"
                      >
                        <span className="inline-flex items-center justify-center rounded-md border border-[#1b5e3f]/20 px-2 py-0.5 text-xs font-semibold w-fit whitespace-nowrap shrink-0 bg-[#1b5e3f] text-white mb-3 uppercase tracking-wider">
                          Step 2
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-1">Ultrasound Therapy</h3>
                        <p className="text-[#5F5F5F] text-sm md:text-base">Accelerate healing &amp; blood flow</p>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Release → Heal Text - OUTSIDE beige container */}
                <div className="absolute top-0 right-0 md:right-4 text-[13px] md:text-[14px] font-medium text-[#1F5E4B] mt-2 md:mt-0">
                  Release → Heal
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The 1+1 = 3 Effect Section */}
        <section className="py-16 md:py-24 px-4 bg-[#E9E2D6]">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg md:text-2xl mb-8 leading-relaxed text-[#1A1A1A]">
                At RamaCare Polyclinic, we have pioneered a specific sequence to maximize these results:
                <br />
                <span className="font-bold text-[#1b5e3f]">Release first, Heal second.</span>
              </p>
              
              <div className="bg-[#1b5e3f] text-white p-6 md:p-10 rounded-2xl shadow-xl max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">The "1+1 = 3" Effect</h2>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  Combining these modalities is often associated with faster pain reduction and quicker return to full range of motion compared to using either treatment alone.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The RamaCare "Combo" Protocol Section */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The RamaCare "Combo" Protocol</h2>
            </motion.div>

            <div className="relative max-w-6xl mx-auto">
              {/* Vertical Connector Line - Goes through center of BOTH stacked cards */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[4px] bg-[#1b5e3f]/20 transform -translate-x-1/2"></div>

              <div className="space-y-12 md:space-y-20">
                {/* Step 1 Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="relative bg-white border-2 border-transparent hover:border-[#1b5e3f] transition-colors rounded-xl p-8 md:p-10 shadow-xl w-full">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#1b5e3f] text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg shrink-0">
                        1
                      </div>
                      <div className="space-y-4 flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A]">Step 1: The "Release" (Dry Needling)</h3>
                        <p className="text-[#5F5F5F] leading-relaxed">
                          Our DHA-licensed physiotherapist inserts a fine, sterile needle into the "Trigger Point" (the knot). This causes a <span className="font-bold text-[#1A1A1A]">Local Twitch Response (LTR)</span>—an involuntary contraction that "resets" the muscle fiber and immediately reduces tension.
                        </p>
                        <div className="bg-[#f0ece2] p-6 rounded-lg">
                          <div className="flex items-start gap-3">
                            <ShieldCheck className="w-5 h-5 text-[#1b5e3f] mt-0.5 shrink-0" />
                            <div>
                              <p className="font-bold text-[#1A1A1A] text-base mb-1">Result:</p>
                              <p className="text-[#5F5F5F]">The "mechanical" lock in the muscle is broken.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Arrow pointing RIGHT - Positioned on the vertical line BETWEEN cards */}
                <div className="flex justify-center relative z-10">
                  <div className="bg-[#1b5e3f] text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>

                {/* Step 2 Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="relative bg-white border-2 border-transparent hover:border-[#1b5e3f] transition-colors rounded-xl p-8 md:p-10 shadow-xl w-full">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#1b5e3f] text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg shrink-0">
                        2
                      </div>
                      <div className="space-y-4 flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A]">Step 2: The "Fuel" (Therapeutic Ultrasound)</h3>
                        <p className="text-[#5F5F5F] leading-relaxed">
                          Immediately after the needle is removed, we apply Ultrasound. The sound waves travel through the freshly released tissue, providing deep thermal heat and <span className="font-bold text-[#1A1A1A]">"Acoustic Streaming."</span>
                        </p>
                        <div className="bg-[#f0ece2] p-6 rounded-lg">
                          <div className="flex items-start gap-3">
                            <ShieldCheck className="w-5 h-5 text-[#1b5e3f] mt-0.5 shrink-0" />
                            <div>
                              <p className="font-bold text-[#1A1A1A] text-base mb-1">Result:</p>
                              <p className="text-[#5F5F5F]">Fresh, oxygen-rich blood is forced into the area where the knot used to be, flushing out the metabolic waste (lactic acid) released during the needling process.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Benefits Most from the "Duo"? Section */}
        <section className="py-16 md:py-24 px-4 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A]">
                Who Benefits Most from the "Duo"?
              </h2>
              <p className="text-lg md:text-xl text-[#5F5F5F] max-w-4xl mx-auto leading-relaxed">
                We recommend this combination for patients in Jumeirah who are dealing with "Stubborn" or "Refractory" pain that hasn't responded to massage or stretching:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Card 1 - Chronic Rotator Cuff Issues */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-card-foreground flex flex-col gap-6 rounded-xl border p-6 md:p-8 h-full transition-all hover:shadow-xl bg-white"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#f0ece2] p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1A1A1A]">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Chronic Rotator Cuff Issues</h3>
                    <p className="text-[#5F5F5F]">Needling releases the shoulder tension; Ultrasound heals the tendon.</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 - Deep Gluteal/Sciatic Pain */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-card-foreground flex flex-col gap-6 rounded-xl border p-6 md:p-8 h-full transition-all hover:shadow-xl bg-white"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#f0ece2] p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1A1A1A]">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Deep Gluteal/Sciatic Pain</h3>
                    <p className="text-[#5F5F5F]">Reaching the piriformis muscle where manual pressure is often too painful.</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 - Tennis & Golfer's Elbow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-card-foreground flex flex-col gap-6 rounded-xl border p-6 md:p-8 h-full transition-all hover:shadow-xl bg-white"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#f0ece2] p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1A1A1A]">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 8v4"/>
                      <path d="M12 16h.01"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Tennis & Golfer's Elbow</h3>
                    <p className="text-[#5F5F5F]">Breaking down the "gritty" scar tissue in the forearm.</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 4 - Calf & Achilles Strains (Highlighted) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-card-foreground flex flex-col gap-6 rounded-xl border-2 border-[#1b5e3f] p-6 md:p-8 h-full transition-all bg-[#f0ece2]"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#1b5e3f] text-white p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 8v4"/>
                      <path d="M12 16h.01"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-[#1A1A1A]">Calf & Achilles Strains</h3>
                      <span className="bg-[#1b5e3f] text-white text-xs px-2 py-1 rounded font-medium">Dubai Runners</span>
                    </div>
                    <p className="text-[#5F5F5F]">Essential for Dubai runners looking for a 48-hour recovery turnaround.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comparison: Why the Duo Wins Section */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A]">
                Comparison: Why the Duo Wins
              </h2>
            </motion.div>

            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 text-left font-semibold text-[#1A1A1A] border-b-2 border-gray-200 text-lg">Feature</th>
                    <th className="p-4 text-center font-semibold text-[#1A1A1A] border-b-2 border-gray-200 text-lg">Dry Needling Alone</th>
                    <th className="p-4 text-center font-semibold text-[#1A1A1A] border-b-2 border-gray-200 text-lg">Ultrasound Alone</th>
                    <th className="p-4 text-center font-semibold text-[#1A1A1A] border-b-2 border-gray-200 bg-[#f8f9fa] text-lg">
                      <span className="bg-[#1b5e3f] text-white text-xs px-2 py-1 rounded mb-2 inline-block">Best Choice</span>
                      <br />
                      The RamaCare Duo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1 - Knot Release */}
                  <tr className="border-b border-gray-200 hover:bg-secondary/30 transition-colors">
                    <td className="p-4 font-medium text-[#1A1A1A]">Knot Release</td>
                    <td className="p-4 text-center text-[#5F5F5F]">
                      <svg className="inline w-4 h-4 text-green-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      High
                    </td>
                    <td className="p-4 text-center text-[#5F5F5F]">
                      <svg className="inline w-4 h-4 text-green-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      Low (Ultrasound soothes)
                    </td>
                    <td className="p-4 text-center font-semibold text-[#1b5e3f] bg-[#f8f9fa]">
                      <svg className="inline w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                      Maximum
                    </td>
                  </tr>
                  {/* Row 2 - Blood Flow */}
                  <tr className="border-b border-gray-200 bg-[#faf9f7] hover:bg-secondary/50 transition-colors">
                    <td className="p-4 font-medium text-[#1A1A1A]">Blood Flow</td>
                    <td className="p-4 text-center text-[#5F5F5F]">
                      <svg className="inline w-4 h-4 text-orange-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      Moderate
                    </td>
                    <td className="p-4 text-center text-[#5F5F5F]">
                      <svg className="inline w-4 h-4 text-green-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      High
                    </td>
                    <td className="p-4 text-center font-semibold text-[#1b5e3f] bg-[#f0ece2]">
                      <svg className="inline w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                      Maximum
                    </td>
                  </tr>
                  {/* Row 3 - Soreness */}
                  <tr className="border-b border-gray-200 hover:bg-secondary/30 transition-colors">
                    <td className="p-4 font-medium text-[#1A1A1A]">Soreness</td>
                    <td className="p-4 text-center text-[#5F5F5F]">
                      <svg className="inline w-4 h-4 text-orange-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      Moderate
                    </td>
                    <td className="p-4 text-center text-[#5F5F5F]">
                      <svg className="inline w-4 h-4 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                      None
                    </td>
                    <td className="p-4 text-center text-[#5F5F5F] bg-[#f8f9fa]">
                      <svg className="inline w-4 h-4 text-green-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      Low (Ultrasound soothes)
                    </td>
                  </tr>
                  {/* Row 4 - Healing Speed */}
                  <tr className="hover:bg-secondary/30 transition-colors">
                    <td className="p-4 font-medium text-[#1A1A1A]">Healing Speed</td>
                    <td className="p-4 text-center text-[#5F5F5F]">
                      <svg className="inline w-4 h-4 text-green-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      Good
                    </td>
                    <td className="p-4 text-center text-[#5F5F5F]">
                      <svg className="inline w-4 h-4 text-green-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      Good
                    </td>
                    <td className="p-4 text-center font-semibold text-[#1b5e3f] bg-[#f8f9fa]">
                      <svg className="inline w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                      Accelerated
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile Table */}
            <div className="md:hidden space-y-4">
              <div className="bg-[#f8f9fa] p-4 rounded-xl border-2 border-[#1b5e3f]">
                <h3 className="font-bold text-lg mb-3 text-[#1A1A1A]">The RamaCare Duo(Best Choice)</h3>
                <div className="space-y-2">
                  <div className="flex justify-between"><span>Knot Release:</span><span className="font-semibold text-[#1b5e3f]">☆ Maximum</span></div>
                  <div className="flex justify-between"><span>Blood Flow:</span><span className="font-semibold text-[#1b5e3f]">☆ Maximum</span></div>
                  <div className="flex justify-between"><span>Soreness:</span><span className="text-[#5F5F5F]">✓ Low</span></div>
                  <div className="flex justify-between"><span>Healing Speed:</span><span className="font-semibold text-[#1b5e3f]">☆ Accelerated</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* Before/After Visual Section */}
<section className="py-16 md:py-24 px-4 bg-[#E9E2D6]">
  <div className="max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative rounded-2xl overflow-hidden shadow-2xl" >
      
      {/* Image + Overlay Container */}
      <div className="aspect-[16/9] relative">
        
        {/* Image */}
        <img 
          src="/images/Needle.jpg" 
          alt="Physiotherapist performing dry needling treatment" 
          className="w-full h-full object-cover" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F5E4B]/80 via-[#1F5E4B]/40 to-transparent flex items-center px-8 md:px-16">
          
          <div className="text-white space-y-4">  
            {/* Before Card */}
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 mb-3 max-w-xs">
              <p className="text-xs text-white/90 mb-1 font-medium">Before</p>
              <p className="text-lg font-medium text-white">Muscle tension & knots</p>
            </div>  
            {/* Arrow */}
            <div className="flex justify-center py-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            
            {/* After Card */}
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 max-w-xs">
              <p className="text-xs text-white/90 mb-1 font-medium">After Treatment</p>
              <p className="text-lg font-medium text-white">Released & healing</p>
            </div>

          </div>

        </div>
      </div>

    </motion.div>
  </div>
</section>

        {/* Frequently Asked Questions (PAA) Section */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A]">
                Frequently Asked Questions (PAA)
              </h2>
              <p className="text-lg text-[#5F5F5F]">
                Everything you need to know about the Ultimate Recovery Duo
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        <ContentReviewBadge doctorName="Jeena Mathew" pageSlug="dry-needling-ultrasound-combo-dubai" />

        {/* Final CTA Section - Book Your Combo Session */}
        <section id="booking-section" className="py-16 md:py-24 px-4 bg-[#1F5E4B]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Experience the Dual-Power Recovery
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-[#FFFFFF]/90 leading-relaxed max-w-4xl mx-auto">
                Don't settle for half the results. If you have a muscle knot that just won't quit, it's time for the Ultimate Recovery Duo at RamaCare.
              </p>
              
              {/* Info Badges */}
              <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-sm text-white opacity-80">Location</p>
                    <p className="font-medium text-white">Jumeirah 1, Dubai</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4"/>
                    <path d="M12 8h.01"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-sm text-white opacity-80">Specialty</p>
                    <p className="font-medium text-white">Trigger Point Release</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3">
                  <ArrowRight className="w-6 h-6 text-white" />
                  <div className="text-left">
                    <p className="text-sm text-white opacity-80">Next Step</p>
                    <p className="font-medium text-white">Book Now</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 rounded-xl border p-8 md:p-12 bg-white text-[#1A1A1A] max-w-2xl mx-auto"
            >
              <h3 className="text-2xl mb-6 text-center font-semibold text-[#1A1A1A]">Book Your Combo Session</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm leading-none font-medium text-[#1A1A1A]">
                    Name *
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    className={`flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b5e3f]/50 disabled:cursor-not-allowed disabled:opacity-50 ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`}
                    required
                  />
                  {formErrors.name && <p className="text-xs text-red-600">{formErrors.name}</p>}
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm leading-none font-medium text-[#1A1A1A]">
                    Phone *
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="+971 XX XXX XXXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    className={`flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b5e3f]/50 disabled:cursor-not-allowed disabled:opacity-50 ${formErrors.phone ? 'border-red-500' : 'border-gray-300'}`}
                    required
                  />
                  {formErrors.phone && <p className="text-xs text-red-600">{formErrors.phone}</p>}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm leading-none font-medium text-[#1A1A1A]">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    className={`flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b5e3f]/50 disabled:cursor-not-allowed disabled:opacity-50 ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                    required
                  />
                  {formErrors.email && <p className="text-xs text-red-600">{formErrors.email}</p>}
                </div>

                {/* Preferred Time Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm leading-none font-medium text-[#1A1A1A]">
                    Preferred Time *
                  </label>
                  <input 
                    type="text" 
                    name="preferredTime"
                    placeholder="e.g., Tomorrow 2 PM or This Week Morning"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    className={`flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b5e3f]/50 disabled:cursor-not-allowed disabled:opacity-50 ${formErrors.preferredTime ? 'border-red-500' : 'border-gray-300'}`}
                    required
                  />
                  {formErrors.preferredTime && <p className="text-xs text-red-600">{formErrors.preferredTime}</p>}
                </div>

                {/* Injury Area Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm leading-none font-medium text-[#1A1A1A]">
                    Injury Area *
                  </label>
                  <input 
                    type="text" 
                    name="injuryArea"
                    placeholder="e.g., Shoulder, Lower back, Achilles"
                    value={formData.injuryArea}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    className={`flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b5e3f]/50 disabled:cursor-not-allowed disabled:opacity-50 ${formErrors.injuryArea ? 'border-red-500' : 'border-gray-300'}`}
                    required
                  />
                  {formErrors.injuryArea && <p className="text-xs text-red-600">{formErrors.injuryArea}</p>}
                </div>

                {/* Submit Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 text-green-700 rounded-xl text-center font-medium">
                    Thank you! Your appointment request has been received. We will contact you shortly.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 text-red-700 rounded-xl text-center font-medium">
                    Something went wrong. Please try again or contact us via WhatsApp.
                  </div>
                )}

                {/* Submit Buttons */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-[#1b5e3f] text-white hover:bg-[#14462f] h-10 px-6 w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Confirm Appointment Request'}
                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                  
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border border-gray-300 bg-[#f0ece2] text-[#1A1A1A] hover:bg-[#e5dfd3] h-10 px-4 py-2 w-full"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Book via WhatsApp Instantly
                  </a>
                </div>
              </form>

              {/* Address */}
              <p className="text-sm text-[#5F5F5F] text-center mt-6">
                Jumeirah Terrace Building, Jumeirah 1, Dubai
              </p>
            </motion.div>
          </div>
        </section>

        {/* Popup Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#f0ece2] rounded-lg p-6 max-w-md w-full relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-[#5F5F5F] hover:text-[#1A1A1A]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              {/* Icon */}
              <div className="bg-white/50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1b5e3f" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>

              {/* Heading */}
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                Still in pain after Dubai Run?
              </h3>

              {/* Description */}
              <p className="text-[#5F5F5F] mb-6 leading-relaxed">
                Don't let stubborn muscle pain slow you down. Our 48hr Recovery Protocol has helped hundreds of Dubai runners get back to peak performance.
              </p>

              {/* Buttons */}
              <div className="space-y-3">
                <a
                  href="#booking-section"
                  onClick={() => setShowModal(false)}
                  className="w-full bg-[#1b5e3f] text-white font-medium py-3 px-4 rounded-md hover:bg-[#14462f] transition-all flex items-center justify-center"
                >
                  Book Recovery Session Now
                </a>
                
                <button
                  onClick={() => setShowModal(false)}
                  className="w-full bg-white text-[#1A1A1A] font-medium py-3 px-4 rounded-md border-2 border-gray-200 hover:bg-gray-50 transition-all"
                >
                  Continue Browsing
                </button>
              </div>

              {/* Footer Text */}
              <p className="text-center text-xs text-[#5F5F5F] mt-4">
                Limited spots available this week
              </p>
            </motion.div>
          </div>
        )}

        {/* Toast Notification */}
        {toast.show && (
          <div className="fixed top-6 right-6 z-[10000] animate-fadeIn">
            <div className={`px-5 py-3.5 rounded-xl shadow-xl border backdrop-blur-sm flex items-center gap-3 ${
              toast.type === 'success' 
                ? 'bg-emerald-600/95 border-emerald-500 text-white' 
                : 'bg-red-600/95 border-red-500 text-white'
            }`}>
              {toast.type === 'success' ? (
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
              <span className="font-medium text-sm tracking-wide">{toast.message}</span>
            </div>
          </div>
        )}

        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
        `}</style>
      </main>
    </Layout>
  );
};

export default DryNeedlingUltrasoundComboPage;
