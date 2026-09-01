import { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MessageCircle, DollarSign, Package, TrendingDown, Stethoscope, Activity, ClipboardList, ShieldCheck, Zap, MapPin, Award, CheckCircle, ChevronDown, MapPin as MapPinIcon, BadgeCheck } from 'lucide-react';
import { useToast } from '../../../components/Toast';
import ContentReviewBadge from '../../../components/ContentReviewBadge';

export default function UltrasoundTherapyCostPage() {
  const { showToast, ToastComponent } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredTime: ''
  });

  const handleBookAppointment = async () => {
    // Scroll to form section
    const formSection = document.getElementById('appointment-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
          fullName: formData.name,
          phone: formData.phone,
          email: formData.email,
          preferredTime: formData.preferredTime,
          source: 'ultrasound-therapy-cost-dubai'
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showToast('Appointment request submitted successfully!', 'success');
        setFormData({
          name: '',
          phone: '',
          email: '',
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

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const faqs = [
    {
      question: 'Is ultrasound therapy worth the money?',
      answer: 'Yes. Compared to long-term pain medication or invasive injections, ultrasound therapy is a cost-effective, non-invasive solution that targets the root cause of inflammation rather than just masking symptoms.'
    },
    {
      question: 'Why is ultrasound therapy expensive in some Dubai clinics?',
      answer: 'High costs often reflect the clinic\'s overhead and the use of "Combo-Therapies." At RamaCare, we keep our ultrasound pricing focused and fair, ensuring you only pay for the technology and expertise required for your recovery.'
    },
    {
      question: 'How many sessions will I need to pay for?',
      answer: 'Most patients see significant relief within 3 to 5 sessions. For chronic conditions like "Office Neck" or Sciatica, a 10-session package is recommended to ensure the tissue fully heals and prevents pain from returning.'
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
        '@id': 'https://ramacarepolyclinic.ae/services/ultrasound-therapy-cost-dubai/#webpage',
        url: 'https://ramacarepolyclinic.ae/services/ultrasound-therapy-cost-dubai/',
        name: 'Ultrasound Therapy Cost in Dubai: 2026 Price Guide & Packages',
        description: 'How much is ultrasound therapy in Dubai? View RamaCare\'s 2026 price list, insurance coverage details, and discount packages for physiotherapy in Jumeirah 1.',
        inLanguage: 'en-AE',
        lastReviewed: '2026-08-29',
        medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
        about: { '@type': 'MedicalProcedure', name: 'Therapeutic Ultrasound' },
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
        '@id': 'https://ramacarepolyclinic.ae/services/ultrasound-therapy-cost-dubai/#physician',
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
          { '@type': 'ListItem', position: 4, name: 'Ultrasound Therapy Cost', item: 'https://ramacarepolyclinic.ae/services/ultrasound-therapy-cost-dubai/' }
        ]
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Ultrasound Therapy',
        description: 'Therapeutic ultrasound for pain relief, inflammation reduction, and tissue healing, delivered by DHA-licensed physiotherapists in Dubai.',
        provider: { '@id': 'https://ramacarepolyclinic.ae/#clinic' },
        areaServed: { '@type': 'City', name: 'Dubai' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'AED',
          price: '450',
          description: 'Single ultrasound therapy session at RamaCare Polyclinic'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://ramacarepolyclinic.ae/services/ultrasound-therapy-cost-dubai/#faq',
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
        <title key="title">Ultrasound Therapy Cost in Dubai: 2026 Price Guide & Packages</title>
        <meta name="description" content="How much is ultrasound therapy in Dubai? View RamaCare's 2026 price list, insurance coverage details, and discount packages for physiotherapy in Jumeirah 1." key="description" />
        <meta name="keywords" content="ultrasound therapy cost Dubai, physiotherapy prices Dubai, therapeutic ultrasound Dubai, ultrasound treatment cost, physiotherapy package Dubai" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ultrasound-therapy-cost-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ultrasound Therapy Cost in Dubai: 2026 Price Guide & Packages" key="og:title" />
        <meta property="og:description" content="How much is ultrasound therapy in Dubai? View RamaCare's 2026 price list, insurance coverage details, and discount packages for physiotherapy in Jumeirah 1." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ultrasound-therapy-cost-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/ultrasound.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Ultrasound Therapy Cost in Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ultrasound Therapy Cost in Dubai: 2026 Price Guide & Packages" key="twitter:title" />
        <meta name="twitter:description" content="View RamaCare's price list, insurance coverage details, and discount packages for physiotherapy in Jumeirah 1." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/ultrasound.jpg" key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      {/* Hero Section with Pricing */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm font-medium text-[#5F5F5F] flex-wrap">
            <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services/" className="hover:text-[#1F5E4B] transition-colors">Services</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services/physiotherapy-dubai" className="hover:text-[#1F5E4B] transition-colors">Physiotherapy</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#1F5E4B]">Ultrasound Therapy Cost</span>
          </nav>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm uppercase tracking-wide mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: '600', color: '#1F5E4B', fontSize: '14px' }}>
                Ultrasound Therapy Cost in Dubai 2026 | RamaCare Price Guide
              </p>
              
              <h1 className="leading-tight mb-6" style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: '700', fontSize: '60px', lineHeight: '1.2', color: '#1A1A1A' }}>
                Ultrasound Therapy Cost in Dubai: 2026 Price Guide & Packages
              </h1>
              
              <p className="mb-8 leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '18px', fontWeight: '400', color: '#5F5F5F', lineHeight: '1.6' }}>
                How much is ultrasound therapy in Dubai? View RamaCare's 2026 price list, insurance coverage details, and discount packages for physiotherapy in Jumeirah 1.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleBookAppointment}
                  className="rounded-xl flex items-center justify-center gap-2 hover:bg-[#154a32] transition-colors shadow-lg cursor-pointer"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: '600', fontSize: '16px', backgroundColor: '#1F5E4B', color: 'white', padding: '16px 32px' }}
                >
                  <Calendar className="w-5 h-5" />
                  Book Consultation
                </button>
                <a 
                
                  href="https://wa.me/971566597878"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="rounded-xl flex items-center justify-center gap-2 hover:bg-[#D9D2C6] transition-all cursor-pointer"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: '600', fontSize: '16px', backgroundColor: '#E9E2D6', color: '#1A1A1A', padding: '16px 32px' }}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Inquiry
                </a>
              </div>
            </motion.div>

            {/* Right Content - Premium Pricing Tiers */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#F9F5F0] rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl mb-6 text-[#1F5E4B]" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '24px', fontWeight: '600' }}>Premium Pricing Tiers</h3>
                
                <div className="space-y-4">
                  {/* Single Session */}
                  <div className="bg-white rounded-xl p-6 border-l-4 border-[#1F5E4B] shadow-md">
                    <p className="text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Single Session</p>
                    <p className="text-3xl text-[#1A1A1A] mb-1" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '30px', fontWeight: '400' }}>AED 450</p>
                  </div>

                  {/* 5 Sessions Package */}
                  <div className="bg-white rounded-xl p-6 border-l-4 border-[#1F5E4B] shadow-md">
                    <p className="text-sm text-[#5F5F5F] mb-2" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>5 Sessions Package</p>
                    <p className="text-3xl text-[#1A1A1A] mb-1" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '30px', fontWeight: '400' }}>AED 1,900</p>
                    <p className="text-sm text-[#1F5E4B] font-medium" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>AED 380/session</p>
                  </div>

                  {/* 10 Sessions Package */}
                  <div className="bg-white rounded-xl p-6 border-l-4 border-[#1F5E4B] shadow-md">
                    <p className="text-sm text-[#5F5F5F] mb-2" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>10 Sessions Package</p>
                    <p className="text-3xl text-[#1A1A1A] mb-1" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '30px', fontWeight: '400' }}>AED 3,200</p>
                    <p className="text-sm text-[#1F5E4B] font-medium" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>AED 320/session - Best Value</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cost Overview Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-center"
            style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '36px', fontWeight: '600', color: '#1A1A1A', lineHeight: '1.3' }}
          >
            How Much Does Ultrasound Therapy Cost in Dubai?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="leading-relaxed text-center max-w-4xl mx-auto"
            style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '18px', fontWeight: '400', color: '#5F5F5F', lineHeight: '1.6' }}
          >
            The average cost of a professional Ultrasound Therapy session in Dubai typically ranges from AED 350 to AED 550 per session. At RamaCare Polyclinic, we provide transparent, medical-grade therapeutic ultrasound starting at competitive rates, with significant discounts available for multi-session rehabilitation packages.
          </motion.p>
        </div>
      </section>

      {/* Quick Price Summary Section */}
      <section className="bg-[#F9F5F0] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
            style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '36px', fontWeight: '700', color: '#1A1A1A', lineHeight: '1.3' }}
          >
            Quick Price Summary (2026 Estimates)
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Single Session */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4" style={{ color: '#1F5E4B' }}>
                <DollarSign className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 
                className="mb-3" 
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '18px', fontWeight: '600', color: '#1A1A1A' }}
              >
                Single Session
              </h3>
              <p 
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '24px', fontWeight: '500', color: '#1F5E4B' }}
              >
                AED 450
              </p>
            </motion.div>

            {/* 5 Session Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4" style={{ color: '#1F5E4B' }}>
                <Package className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 
                className="mb-3" 
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '18px', fontWeight: '600', color: '#1A1A1A' }}
              >
                5-Session Package
              </h3>
              <p 
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '24px', fontWeight: '500', color: '#1F5E4B' }}
              >
                AED 1,900
              </p>
              <p 
                className="mt-2"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: '400', color: '#5F5F5F' }}
              >
                AED 380 per session
              </p>
            </motion.div>

            {/* 10 Session Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4" style={{ color: '#1F5E4B' }}>
                <TrendingDown className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 
                className="mb-3" 
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '18px', fontWeight: '600', color: '#1A1A1A' }}
              >
                10-Session Package
              </h3>
              <p 
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '24px', fontWeight: '500', color: '#1F5E4B' }}
              >
                AED 3,200
              </p>
              <p 
                className="mt-2"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: '400', color: '#5F5F5F' }}
              >
                AED 320 per session - Best Value for Chronic Pain
              </p>
            </motion.div>

            {/* Consultation + First Treatment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4" style={{ color: '#1F5E4B' }}>
                <Stethoscope className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 
                className="mb-3" 
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '18px', fontWeight: '600', color: '#1A1A1A' }}
              >
                Consultation + First Treatment
              </h3>
              <p 
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '24px', fontWeight: '500', color: '#1F5E4B' }}
              >
                Varies by Specialist
              </p>
              <p 
                className="mt-2"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: '400', color: '#5F5F5F' }}
              >
                DHA Licensed
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Structure Table Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-center"
            style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '36px', fontWeight: '700', color: '#1A1A1A', lineHeight: '1.3' }}
          >
            RamaCare Ultrasound Therapy Pricing Structure
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-12 text-center"
            style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '18px', fontWeight: '400', color: '#5F5F5F', lineHeight: '1.6', maxWidth: '768px', margin: '0 auto 48px' }}
          >
            Unlike generic wellness centers, RamaCare is a DHA-Licensed Polyclinic. Our pricing reflects the use of high-frequency medical equipment and the expertise of licensed physiotherapists.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" style={{ maxWidth: '100%', margin: '0 auto' }}>
              <thead>
                <tr style={{ backgroundColor: 'rgb(26, 94, 75)' }}>
                  <th className="px-6 py-4 text-left border-b" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '600', color: 'white', padding: '16px' }}>
                    Treatment Option
                  </th>
                  <th className="px-6 py-4 text-left border-b" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '600', color: 'white', padding: '16px' }}>
                    Price (AED)
                  </th>
                  <th className="px-6 py-4 text-left border-b" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '600', color: 'white', padding: '16px' }}>
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: 'rgb(245, 241, 234)' }}>
                  <td className="p-4 border" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '400', color: 'rgb(26, 26, 26)', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
                    Initial Assessment
                  </td>
                  <td className="p-4 border" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '400', color: 'rgb(31, 94, 75)', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
                    AED 350
                  </td>
                  <td className="p-4 border" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '400', color: 'rgb(95, 95, 95)', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
                    New patients requiring a diagnosis
                  </td>
                </tr>
                <tr style={{ backgroundColor: 'white' }}>
                  <td className="p-4 border" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '400', color: 'rgb(26, 26, 26)', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
                    Single Ultrasound Session
                  </td>
                  <td className="p-4 border" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '400', color: 'rgb(31, 94, 75)', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
                    AED 450
                  </td>
                  <td className="p-4 border" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '400', color: 'rgb(95, 95, 95)', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
                    Acute, one-time muscle strains
                  </td>
                </tr>
                <tr style={{ backgroundColor: 'rgb(245, 241, 234)' }}>
                  <td className="p-4 border" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '400', color: 'rgb(26, 26, 26)', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
                    Recovery Starter (5 Sessions)
                  </td>
                  <td className="p-4 border" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '400', color: 'rgb(31, 94, 75)', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
                    AED 1,900
                  </td>
                  <td className="p-4 border" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '400', color: 'rgb(95, 95, 95)', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
                    Sports injuries & minor inflammation
                  </td>
                </tr>
                <tr style={{ backgroundColor: 'white' }}>
                  <td className="p-4 border" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '400', color: 'rgb(26, 26, 26)', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
                    Chronic Care (10 Sessions)
                  </td>
                  <td className="p-4 border" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '400', color: 'rgb(31, 94, 75)', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
                    AED 3,200
                  </td>
                  <td className="p-4 border" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '400', color: 'rgb(95, 95, 95)', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
                    Sciatica, Back Pain, & Post-Surgery
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
            style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: '400', color: '#5F5F5F' }}
          >
            Note: Prices are subject to 5% VAT as per UAE law.
          </motion.p>
        </div>
      </section>

      {/* Price Variation Section */}
      <section className="bg-[rgb(249,247,243)] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-center"
            style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '36px', fontWeight: '700', color: '#1A1A1A', lineHeight: '1.3' }}
          >
            Why Does Ultrasound Therapy Price Vary in Dubai?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-12 text-center max-w-3xl mx-auto"
            style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '400', color: '#5F5F5F', lineHeight: '1.6' }}
          >
            If you see prices significantly lower than the market average, it is important to check three factors that influence the cost:
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Machine Frequency */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6" style={{ color: '#1F5E4B' }}>
                <Activity className="w-12 h-12" strokeWidth={1.5} />
              </div>
              <h3 
                className="mb-4 text-center"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '18px', fontWeight: '600', color: '#1A1A1A' }}
              >
                Machine Frequency (1MHz vs 3MHz)
              </h3>
              <p 
                className="text-center"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '15px', fontWeight: '400', color: '#5F5F5F', lineHeight: '1.6' }}
              >
                Clinical-grade machines used at RamaCare penetrate deeper into the tissue than portable home units.
              </p>
            </motion.div>

            {/* Specialist Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6" style={{ color: '#1F5E4B' }}>
                <Award className="w-12 h-12" strokeWidth={1.5} />
              </div>
              <h3 
                className="mb-4 text-center"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '18px', fontWeight: '600', color: '#1A1A1A' }}
              >
                Specialist Expertise
              </h3>
              <p 
                className="text-center"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '15px', fontWeight: '400', color: '#5F5F5F', lineHeight: '1.6' }}
              >
                At RamaCare, every session is conducted by a DHA-Licensed Physiotherapist, ensuring the sound waves are directed at the exact source of pain.
              </p>
            </motion.div>

            {/* Clinic Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6" style={{ color: '#1F5E4B' }}>
                <MapPin className="w-12 h-12" strokeWidth={1.5} />
              </div>
              <h3 
                className="mb-4 text-center"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '18px', fontWeight: '600', color: '#1A1A1A' }}
              >
                Clinic Location
              </h3>
              <p 
                className="text-center"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '15px', fontWeight: '400', color: '#5F5F5F', lineHeight: '1.6' }}
              >
                Being located in Jumeirah 1, we offer premium medical facilities without the "over-pricing" found in some high-rise hospital settings.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insurance Coverage Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-10 md:p-16"
            style={{ backgroundColor: 'rgb(233, 226, 214)' }}
          >
            {/* Shield Icon */}
            <div className="flex justify-center mb-6" style={{ color: '#1F5E4B' }}>
              <ShieldCheck className="w-12 h-12" strokeWidth={1.5} />
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 text-center"
              style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '36px', fontWeight: '700', color: '#1A1A1A', lineHeight: '1.3' }}
            >
              Is Ultrasound Therapy Covered by Insurance in Dubai?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-8 text-center max-w-3xl mx-auto"
              style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '400', color: '#5F5F5F', lineHeight: '1.6' }}
            >
              Yes, most comprehensive health insurance plans in the UAE cover Ultrasound Therapy when it is part of a prescribed physiotherapy plan.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8 text-center"
              style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '500', color: '#1A1A1A' }}
            >
              At RamaCare Polyclinic, we assist patients with:
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Direct Billing */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1" style={{ color: '#1F5E4B' }}>
                    <CheckCircle className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 
                      className="mb-2"
                      style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '600', color: '#1A1A1A' }}
                    >
                      Direct Billing
                    </h3>
                    <p 
                      style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: '400', color: '#5F5F5F', lineHeight: '1.6' }}
                    >
                      Depending on your network (e.g., NextCare, AXA/GIG, Daman).
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Reimbursement Support */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1" style={{ color: '#1F5E4B' }}>
                    <CheckCircle className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 
                      className="mb-2"
                      style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '600', color: '#1A1A1A' }}
                    >
                      Reimbursement Support
                    </h3>
                    <p 
                      style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: '400', color: '#5F5F5F', lineHeight: '1.6' }}
                    >
                      We provide detailed medical reports and stamped invoices for easy claim submission.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
              style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '500', color: '#1A1A1A' }}
            >
              Does your insurance cover it? Contact our Jumeirah clinic with your card details for a quick eligibility check.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[rgb(249,247,243)] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
            style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '36px', fontWeight: '700', color: '#1A1A1A' }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                className="w-full px-6 py-6 flex items-center justify-between text-left transition-all"
                style={{ backgroundColor: openFaq === 0 ? 'rgb(245, 241, 234)' : 'transparent', width: '100%' }}
              >
                <span 
                  className="font-semibold pr-8"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '600', color: '#1A1A1A' }}
                >
                  Is ultrasound therapy worth the money?
                </span>
                <ChevronDown 
                  className={`flex-shrink-0 w-5 h-5 transition-transform duration-300 ${openFaq === 0 ? 'rotate-180' : ''}`}
                  style={{ color: '#1F5E4B' }}
                />
              </button>
              <AnimatePresence>
                {openFaq === 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div 
                      className="px-6 pb-6 pt-0"
                      style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '15px', fontWeight: '400', color: '#5F5F5F', lineHeight: '1.6' }}
                    >
                     Yes. Compared to long-term pain medication or invasive injections, ultrasound therapy is a cost-effective, non-invasive solution that targets the root cause of inflammation rather than just masking symptoms.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* FAQ Item 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                className="w-full px-6 py-6 flex items-center justify-between text-left transition-all hover:bg-[rgb(245, 241, 234)]"
                style={{ backgroundColor: openFaq === 1 ? 'rgb(245, 241, 234)' : 'transparent', width: '100%' }}
              >
                <span 
                  className="font-semibold pr-8"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '600', color: '#1A1A1A' }}
                >
                  Why is ultrasound therapy expensive in some Dubai clinics?
                </span>
                <ChevronDown 
                  className={`flex-shrink-0 w-5 h-5 transition-transform duration-300 ${openFaq === 1 ? 'rotate-180' : ''}`}
                  style={{ color: '#1F5E4B' }}
                />
              </button>
              <AnimatePresence>
                {openFaq === 1 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div 
                      className="px-6 pb-6 pt-0"
                      style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '15px', fontWeight: '400', color: '#5F5F5F', lineHeight: '1.6' }}
                    >
                    High costs often reflect the clinic's overhead and the use of "Combo-Therapies." At RamaCare, we keep our ultrasound pricing focused and fair, ensuring you only pay for the technology and expertise required for your recovery.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* FAQ Item 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                className="w-full px-6 py-6 flex items-center justify-between text-left transition-all hover:bg-[rgb(245, 241, 234)]"
                style={{ backgroundColor: openFaq === 2 ? 'rgb(245, 241, 234)' : 'transparent', width: '100%' }}
              >
                <span 
                  className="font-semibold pr-8"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '600', color: '#1A1A1A' }}
                >
                  How many sessions will I need to pay for?
                </span>
                <ChevronDown 
                  className={`flex-shrink-0 w-5 h-5 transition-transform duration-300 ${openFaq === 2 ? 'rotate-180' : ''}`}
                  style={{ color: '#1F5E4B' }}
                />
              </button>
              <AnimatePresence>
                {openFaq === 2 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div 
                      className="px-6 pb-6 pt-0"
                      style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '15px', fontWeight: '400', color: '#5F5F5F', lineHeight: '1.6' }}
                    >
                     Most patients see significant relief within 3 to 5 sessions. For chronic conditions like "Office Neck" or Sciatica, a 10-session package is recommended to ensure the tissue fully heals and prevents pain from returning.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-center"
            style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '32px', fontWeight: '700', color: '#1A1A1A' }}
          >
            Book Your Session at RamaCare Jumeirah 1
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-8 text-center max-w-3xl mx-auto"
            style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '18px', fontWeight: '400', color: '#5F5F5F', lineHeight: '1.6' }}
          >
            Don't let price be a barrier to pain-free living. We offer flexible payment plans and high-quality care in the heart of Dubai.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex justify-center gap-4 mb-8"
          >
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4" style={{ color: '#1F5E4B' }} />
              <span style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '400', color: '#1A1A1A' }}>
                Jumeirah 1, Dubai
              </span>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-4 h-4" style={{ color: '#1F5E4B' }} />
              <span style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '400', color: '#1A1A1A' }}>
                DHA Licensed Polyclinic
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            id="appointment-form"
            className="max-w-2xl mx-auto rounded-2xl p-8"
            style={{ backgroundColor: 'rgb(245, 241, 234)' }}
          >
            <h3 
              className="mb-8 text-center"
              style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '24px', fontWeight: '600', color: '#1A1A1A' }}
            >
              Book Your Consultation Now
            </h3>

            <div className="space-y-6">
              <form onSubmit={handleFormSubmit}>
              <div>
                <label 
                  className="block mb-2"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: '600', color: '#1A1A1A' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 rounded-lg border-none focus:ring-2 focus:ring-[#1F5E4B]"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '15px', color: '#1A1A1A', backgroundColor: 'white' }}
                />
              </div>
              
              <div>
                <label 
                  className="block mb-2"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: '600', color: '#1A1A1A' }}
                >
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+971 XX XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-6 py-4 rounded-lg border-none focus:ring-2 focus:ring-[#1F5E4B]"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '15px', color: '#1A1A1A', backgroundColor: 'white' }}
                />
              </div>

              <div>
                <label 
                  className="block mb-2"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: '600', color: '#1A1A1A' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 rounded-lg border-none focus:ring-2 focus:ring-[#1F5E4B]"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '15px', color: '#1A1A1A', backgroundColor: 'white' }}
                />
              </div>
              
              <div>
                <label 
                  className="block mb-2"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: '600', color: '#1A1A1A' }}
                >
                  Preferred Time
                </label>
                <input
                  type="text"
                  placeholder="e.g., Morning / Afternoon / Evening"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-6 py-4 rounded-lg border-none focus:ring-2 focus:ring-[#1F5E4B]"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '15px', color: '#1A1A1A', backgroundColor: 'white' }}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold transition-all hover:opacity-90"
                  style={{ backgroundColor: '#1F5E4B', color: 'white', fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: '600' }}
                >
                  <Calendar className="w-5 h-5" />
                  Confirm Appointment Request
                </button>
                
                <a
                  href="https://wa.me/971566597878"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold transition-all hover:opacity-90 cursor-pointer"
                  style={{ backgroundColor: 'rgb(233, 226, 214)', color: '#1A1A1A', fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: '600' }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Book via WhatsApp Instantly
                </a>
              </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services & Disclaimer */}
      <section className="bg-white py-12 px-6 border-t border-[#E9E2D6]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-[#1A1A1A] mb-5">Explore Related Physiotherapy Services</h2>
          <div className="flex flex-wrap gap-2.5">
            <Link href="/services/physiotherapy-dubai" className="text-base text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              Physiotherapy Dubai
            </Link>
            <Link href="/services/professional-vs-home-ultrasound/" className="text-base text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              Professional vs Home Ultrasound
            </Link>
            <Link href="/services/physiotherapy-vs-rest-for-back-pain-recovery/" className="text-base text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              Physiotherapy vs Rest for Back Pain
            </Link>
            <Link href="/services/knee-pain-treatment-dubai/" className="text-base text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              Knee Pain Treatment
            </Link>
            <Link href="/services/sciatica-treatment-dubai/" className="text-base text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              Sciatica Treatment
            </Link>
          </div>
          <p className="text-sm text-[#5F5F5F] leading-relaxed mt-8">
            <span className="font-medium text-[#1A1A1A]">Medical Disclaimer:</span> The information provided on this page is for educational purposes only and does not constitute medical advice. It is not intended to replace professional medical consultation, diagnosis, or treatment. Treatment outcomes vary by individual, and no specific results are guaranteed. Please consult a licensed physiotherapist at RamaCare Polyclinic or another qualified provider before beginning any ultrasound or physical therapy program.
          </p>
        </div>
      </section>

      <ContentReviewBadge doctorName="Jeena Mathew" variant="full" />

      {/* Fixed Bottom CTA Bar */}
      <div 
        className="fixed bottom-0 left-0 right-0 shadow-2xl py-4 px-6 z-40 transition-transform duration-300"
        style={{ backgroundColor: 'rgb(31, 94, 75)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p 
            className="text-white"
            style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', fontWeight: '400' }}
          >
            Ready to start your pain-free journey?
          </p>
          <button
            onClick={handleBookAppointment}
            className="flex items-center gap-2 px-8 py-3 rounded-lg transition-all hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: 'white', color: 'rgb(31, 94, 75)', fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: '600' }}
          >
            <Calendar className="w-5 h-5" />
            Book Now
          </button>
        </div>
      </div>
    </Layout>
  );
}
