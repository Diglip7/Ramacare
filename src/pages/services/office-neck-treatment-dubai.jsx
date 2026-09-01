import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, MessageCircle, Clock, Shield, MapPin, Zap, CheckCircle2, Radio, Award, UserCheck, Lock, ChevronDown, Activity } from 'lucide-react';
import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { useToast } from '../../../components/Toast';

const OfficeNeckTreatmentPage = () => {
  const whatsappNumber = "971566597878";
  const whatsappMessage = encodeURIComponent("Hello RamaCare, I'm interested in 'Office Neck' treatment using Ultrasound Therapy.");
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', time: '' });
  const { showToast, ToastComponent } = useToast();

  const CANONICAL_URL = 'https://ramacarepolyclinic.ae/services/office-neck-treatment-dubai/';

  const faqs = [
    {
      q: "Can ultrasound therapy help with my tension headaches?",
      a: "Absolutely. Most tension headaches in office workers originate from the Cervical Spine (the neck). By relaxing the neck muscles with ultrasound, we reduce the tension pulling on the base of your skull."
    },
    {
      q: "Is it safe to have ultrasound on my neck?",
      a: "Yes. At RamaCare, we use low-intensity medical settings specifically calibrated for the delicate structures of the neck. It is a 100% non-invasive alternative to neck cracking or spinal adjustments."
    },
    {
      q: "How many sessions do I need for Tech Neck?",
      a: "For acute stiffness, 3 to 5 sessions are often enough. For chronic postural issues developed over years, we suggest a 10-session package combined with postural retraining."
    }
  ];

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://ramacarepolyclinic.ae/#clinic",
        "name": "RamaCare Polyclinic",
        "url": "https://ramacarepolyclinic.ae/",
        "image": "https://ramacarepolyclinic.ae/images/office.jpg",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor",
          "addressLocality": "Jumeirah 1, Dubai",
          "addressCountry": "AE"
        },
        "medicalSpecialty": "Physiotherapy",
        "hasCredential": "DHA Licensed"
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${CANONICAL_URL}#webpage`,
        "url": CANONICAL_URL,
        "name": "'Office Neck' Treatment Dubai | Ultrasound Therapy at RamaCare",
        "description": "Are you a professional in DIFC or Business Bay suffering from neck stiffness? Discover how RamaCare's ultrasound therapy fixes 'Office Neck' and postural strain fast.",
        "inLanguage": "en-AE",
        "lastReviewed": "2026-08-29",
        "medicalAudience": { "@type": "MedicalAudience", "audienceType": "Patient" },
        "about": {
          "@type": "MedicalCondition",
          "name": "Cervical Myofascial Pain / 'Office Neck'"
        },
        "reviewedBy": {
          "@type": "Person",
          "name": "Jeena Mathew",
          "jobTitle": "Musculoskeletal Physiotherapy Specialist",
          "url": "https://ramacarepolyclinic.ae/doctors/jeena-mathew-physiotherapist-dubai/"
        },
        "publisher": {
          "@type": "MedicalClinic",
          "name": "RamaCare Polyclinic",
          "url": "https://ramacarepolyclinic.ae/",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor",
            "addressLocality": "Jumeirah 1, Dubai",
            "addressCountry": "AE"
          }
        }
      },
      {
        "@type": "Physician",
        "@id": `${CANONICAL_URL}#physician`,
        "name": "Jeena Mathew",
        "medicalSpecialty": "Physiotherapy",
        "honorificSuffix": "BPT, MPT",
        "hasCredential": "DHA Licensed Physiotherapist",
        "worksFor": { "@id": "https://ramacarepolyclinic.ae/#clinic" },
        "url": "https://ramacarepolyclinic.ae/doctors/jeena-mathew-physiotherapist-dubai/"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_URL}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ramacarepolyclinic.ae/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://ramacarepolyclinic.ae/services/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Physiotherapy",
            "item": "https://ramacarepolyclinic.ae/services/physiotherapy-dubai/"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "'Office Neck' Treatment",
            "item": CANONICAL_URL
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  const physiotherapyResources = [
    { text: 'Ultrasound Therapy', link: '/services/ultrasound-therapy-dubai/', bgColor: 'bg-[#ECFDF5]' },
    { text: 'Electrotherapy', link: '/services/electrotherapy-dubai/', bgColor: 'bg-[#EFF6FF]' },
    { text: 'Pelvic Floor Therapy', link: '/services/pelvic-floor-therapy-dubai/', bgColor: 'bg-[#FEF2F2]' },
    { text: 'Scoliosis Treatment', link: '/services/scoliosis-treatment-in-dubai/', bgColor: 'bg-[#FEF2F2]' },
    { text: 'Functional Exercise', link: '/services/functional-exercises-dubai/', bgColor: 'bg-[#F5F3FF]' },
    { text: 'Dry Needling Therapy', link: '/services/dry-needling-dubai/', bgColor: 'bg-[#F5F3FF]' },
    { text: 'Dry Needling & Ultrasound Combo', link: '/services/dry-needling-ultrasound-combo-dubai/', bgColor: 'bg-[#ECFDF5]' },
    { text: 'Back Pain Treatment', link: '/services/back-pain-treatment-dubai/', bgColor: 'bg-[#EFF6FF]' },
    { text: 'Knee Pain Treatment', link: '/services/knee-pain-treatment-dubai/', bgColor: 'bg-[#FEF2F2]' },
    { text: 'Post Surgery Recovery', link: '/services/post-surgery-recovery-dubai/', bgColor: 'bg-[#ECFDF5]' },
    { text: 'Migraine Treatment', link: '/services/migraine-treatment-dubai/', bgColor: 'bg-[#F5F3FF]' },
    { text: 'Physiotherapy Insurance', link: '/services/physiotherapy-insurance-dubai/', bgColor: 'bg-[#FEF2F2]' }
  ];

  const handleSubmit = async (e) => {
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
          preferredTime: formData.time,
          concern: 'Office Neck Treatment',
          source: 'office-neck-treatment-dubai'
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showToast("Appointment request sent! We'll contact you soon.", 'success');
        setFormData({ name: '', phone: '', email: '', time: '' });
      } else {
        showToast('Failed to submit. Please try again or contact us directly.', 'error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showToast('Something went wrong. Please try again or contact us directly.', 'error');
    }
  };

  return (
    <>
    <Layout>
      <Head>
        <title key="title">'Office Neck' Treatment Dubai | Ultrasound Therapy at RamaCare</title>
        <meta name="description" content="Are you a professional in DIFC or Business Bay suffering from neck stiffness? Discover how RamaCare’s ultrasound therapy fixes 'Office Neck' and postural strain fast." key="description" />
        <meta name="keywords" content="Office neck treatment Dubai, Tech neck treatment Dubai, Ultrasound therapy DIFC, Neck stiffness treatment Dubai, Postural strain treatment Dubai, Corporate wellness physiotherapy Dubai, Cervical myofascial pain treatment" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="'Office Neck' Treatment Dubai | Ultrasound Therapy at RamaCare" />
        <meta property="og:description" content="Are you a professional in DIFC or Business Bay suffering from neck stiffness? Discover how RamaCare's ultrasound therapy fixes 'Office Neck' and postural strain fast." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/office.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="RamaCare Polyclinic" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="'Office Neck' Treatment Dubai | Ultrasound Therapy at RamaCare" />
        <meta name="twitter:description" content="Professionals in DIFC or Business Bay suffering from neck stiffness? RamaCare's ultrasound therapy fixes 'Office Neck' fast." />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/office.jpg" />

        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#5F5F5F]">
            <li>
              <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-gray-400">/</span>
              <Link href="/services/" className="hover:text-[#1F5E4B] transition-colors">Services</Link>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-gray-400">/</span>
              <Link href="/services/physiotherapy-dubai/" className="hover:text-[#1F5E4B] transition-colors">Physiotherapy</Link>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-gray-400">/</span>
              <span className="text-[#1F5E4B] font-medium">'Office Neck' Treatment</span>
            </li>
          </ol>
        </div>
      </nav>

      <main className="min-h-screen" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-[#F5F1E8]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-[60px] font-semibold text-[#1A1A1A] leading-tight">
                    'Office Neck' Treatment in Dubai
                  </h1>
                  <p className="text-base md:text-[18px] text-[#5F5F5F] leading-relaxed">
                    Are you a professional in DIFC or Business Bay suffering from neck stiffness? Discover how RamaCare's <a href="/services/ultrasound-therapy-dubai/" className="text-[#1F5E4B] hover:underline font-semibold">ultrasound therapy </a> fixes "Office Neck" and postural strain fast.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A]">
                    The Cost of Corporate Life: What is 'Office Neck'?
                  </h2>
                  <div className="space-y-6 text-base md:text-[18px] text-[#5F5F5F] leading-relaxed">
                    <p>
                      In the high-pressure hubs of DIFC and Downtown Dubai, "Office Neck" (Cervical Myofascial Pain) has become the leading cause of sick leave and reduced productivity. Spending 8–10 hours leaning toward a dual-monitor setup or looking down at a smartphone creates "Micro-Trauma" in the levator scapulae and trapezius muscles.
                    </p>
                    <p>
                      At RamaCare Polyclinic, we provide a targeted medical intervention using clinical <a href="/services/ultrasound-therapy-dubai/" className="text-[#1F5E4B] hover:underline font-semibold">ultrasound therapy</a> to "reset" these muscles without the need for invasive injections or long-term medication.
                    </p>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-6 pt-2 border-t border-gray-300 mt-8 py-6 text-sm text-[#1A1A1A]">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#1F5E4B]" />
                    <span>DHA Licensed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#1F5E4B]" />
                    <span>10 Min from DIFC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#1F5E4B]" />
                    <span>Non-Invasive</span>
                  </div>
                </div>

                {/* Benefits List */}
                <div className="space-y-4">
                  {[
                    "10–15 min sessions",
                    "No downtime",
                    "Immediate relief feeling"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 text-[#1A1A1A] font-semibold text-base">
                      <CheckCircle2 className="w-5 h-5 text-[#1F5E4B]" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <a 
                    href="#book-now"
                     onClick={(e) => {
    e.preventDefault();
    document.getElementById("book-now")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
                    className="flex items-center justify-center gap-3 bg-[#1F5E4B] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#164a38] transition-all shadow-lg"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Postural Assessment
                  </a>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center justify-center gap-3 bg-white text-[#1F5E4B] border-2 border-[#1F5E4B] px-8 py-4 rounded-xl font-bold hover:bg-[#F5F1E8] transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Consultation
                  </a>
                </div>
              </motion.div>

              {/* Right Column: Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/office.jpg" // Replace with your actual image path
                    alt="Office neck treatment at RamaCare Dubai"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Win Section: 60-Minute Recovery */}
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#E9E2D6]">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-12 rounded-2xl shadow-lg border border-gray-100 flex flex-col md:flex-row items-center gap-8 md:gap-12"
            >
              <div className="w-20 h-20 bg-[#1F5E4B] rounded-full flex-shrink-0 flex items-center justify-center shadow-lg">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[36px] font-semibold text-[#1A1A1A]">
                  The 60-Minute Recovery:
                </h2>
                <p className="text-base md:text-[18px] text-[#5F5F5F] leading-relaxed">
                  Because <a href="/services/ultrasound-therapy-dubai/" className="text-[#1F5E4B] hover:underline font-semibold">ultrasound therapy</a> sessions take only 10–15 minutes, professionals from DIFC can receive treatment and return to their office in under an hour, making it the most efficient recovery tool for the Dubai corporate lifestyle.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mechanism Section: How Ultrasound Targets Postural Strain */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] leading-tight">
                How <a href="/services/ultrasound-therapy-dubai/" className="hover:underline">Ultrasound</a> Targets Postural Strain
              </h2>
              <p className="text-lg text-[#5F5F5F] leading-relaxed">
                When you suffer from postural strain, your neck muscles develop "Trigger Points"—tight knots that restrict blood flow and cause tension headaches. <a href="/services/ultrasound-therapy-dubai/" className="text-[#1F5E4B] hover:underline font-semibold">Ultrasound therapy</a> treats this via two specific mechanisms:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Mechanism 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#F5F1E8] rounded-2xl p-8 md:p-10 space-y-6 hover:shadow-lg transition-shadow"
              >
                <div className="bg-[#1F5E4B] text-white w-12 h-12 flex items-center justify-center rounded-lg">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-[#1A1A1A]">Acoustic Micro-Streaming:</h3>
                  <p className="text-[#5F5F5F] leading-relaxed">
                    High-frequency vibrations move the fluid around your cells, flushing out the lactic acid and inflammatory markers built up during your workday.
                  </p>
                </div>
              </motion.div>

              {/* Mechanism 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#F5F1E8] rounded-2xl p-8 md:p-10 space-y-6 hover:shadow-lg transition-shadow"
              >
                <div className="bg-[#1F5E4B] text-white w-12 h-12 flex items-center justify-center rounded-lg">
                  <Radio className="w-6 h-6" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-[#1A1A1A]">Selective Deep Heating:</h3>
                  <p className="text-[#5F5F5F] leading-relaxed">
                    Unlike a hot pack, which only warms the skin, ultrasound heats the deep connective tissue of the neck, melting away the stiffness that causes that "locked" feeling.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Roadmap Section: DIFC Professional's Recovery Roadmap */}
        <section className="bg-[#F5F1E8] py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] leading-tight">
                DIFC Professional's Recovery Roadmap
              </h2>
              <p className="text-lg text-[#5F5F5F] leading-relaxed">
                We understand that your schedule is demanding. Our "Corporate Wellness" protocol is designed for maximum impact with minimum time commitment:
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#1F5E4B] text-white">
                      <th className="px-8 py-5 text-lg font-semibold">Symptom</th>
                      <th className="px-8 py-5 text-lg font-semibold">The Ultrasound Solution</th>
                      <th className="px-8 py-5 text-lg font-semibold">Typical Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { symptom: 'Tension Headaches', solution: 'Sub-occipital thermal therapy', result: 'Designed to help reduce headache frequency.' },
                      { symptom: 'Shoulder Knotting', solution: 'Trigger point mechanical vibration', result: 'Aims to increase range of motion.' },
                      { symptom: 'Radiating Arm Pain', solution: 'Nerve-pathway inflammation reduction', result: 'Easing of "pins and needles" sensations.' },
                      { symptom: 'Stiff Upper Back', solution: 'Deep-tissue collagen stimulation', result: 'Improved posture and reduced slumping.' },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-8 py-6 font-bold text-[#1A1A1A]">{row.symptom}</td>
                        <td className="px-8 py-6 text-[#5F5F5F]">{row.solution}</td>
                        <td className="px-8 py-6 text-[#1F5E4B] font-medium">{row.result}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        {/* Mid-Scroll CTA Section */}
        <section className="bg-[#1F5E4B] py-12 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-3xl text-white font-semibold leading-tight">
              10 minutes from DIFC. No downtime.
            </h3>
            <div className="flex justify-center">
              <a 
                href="#book-now"
                 onClick={(e) => {
    e.preventDefault();
    document.getElementById("book-now")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
                className="bg-white text-[#1F5E4B] px-10 py-4 rounded-lg font-bold hover:bg-[#F5F1E8] transition-all shadow-lg text-lg"
              >
                Schedule Your Assessment
              </a>
            </div>
          </div>
        </section>

        {/* Trust Section: Why RamaCare Jumeirah 1 */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] leading-tight">
                Why RamaCare Jumeirah 1 for DIFC Professionals?
              </h2>
              <p className="text-lg text-[#5F5F5F] leading-relaxed max-w-3xl mx-auto">
                Located just 10 minutes from the heart of the Financial District, RamaCare offers a premium, clinical environment that matches the standards of Dubai's top executives.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: 'Efficiency',
                  description: 'Minimal waiting times and streamlined DHA-compliant check-ins.'
                },
                {
                  icon: UserCheck,
                  title: 'Expertise',
                  description: 'Our physiotherapists specialize in Ergonomic Correction, helping you adjust your DIFC office chair and monitor height so the pain doesn\'t return.'
                },
                {
                  icon: Lock,
                  title: 'Privacy',
                  description: 'We offer a discreet, high-end polyclinic setting in Jumeirah 1.'
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-[#F5F1E8] rounded-2xl p-8 md:p-10 space-y-6 text-center shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="bg-[#1F5E4B] text-white w-16 h-16 flex items-center justify-center rounded-xl mx-auto shadow-md">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-[#1A1A1A]">{item.title}</h3>
                    <p className="text-[#5F5F5F] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-[#F5F1E8] py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300">
                  <summary className="flex justify-between items-center text-left px-8 py-6 cursor-pointer list-none focus:outline-none hover:bg-[#F5F1E8]/50 transition-colors">
                    <span className="text-lg md:text-xl font-semibold text-[#1A1A1A] pr-8">{faq.q}</span>
                    <ChevronDown className="w-6 h-6 text-[#1F5E4B] flex-shrink-0 group-open:rotate-180 transition-transform duration-300" />
                  </summary>
                  <div className="px-6 md:px-8 pb-6">
                    <p className="text-lg text-[#5F5F5F] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related Resources Section */}
        <section className="w-full bg-[#F3F4F6] py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-3">
                Complete Physiotherapy Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {physiotherapyResources.map((resource, index) => (
                <a 
                  key={index} 
                  href={resource.link}
                  className="bg-white rounded-xl p-4 md:p-5 flex items-center justify-between cursor-pointer transition-all duration-300 shadow-sm hover:shadow-lg hover:translate-x-1 hover:border hover:border-[#1F5E4B]/30 group"
                >
                  <div className="flex items-center gap-3 md:gap-4 flex-1">
                    <div className={`${resource.bgColor} w-10 h-10 md:w-11 md:h-11 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <Activity className="w-5 h-5 text-[#1F5E4B]" />
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-[#1F2937] transition-all duration-300 group-hover:text-[#1F5E4B] group-hover:text-sm md:group-hover:text-base">
                      {resource.text}
                    </span>
                  </div>

                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-[#6B7280] flex-shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#1F5E4B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Exit-Intent CTA Section */}
        <section className="bg-[#E9E2D6] py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg border-4 border-[#1F5E4B] relative overflow-hidden">
              <div className="space-y-6 relative z-10">
                <div className="flex justify-center text-5xl md:text-6xl">
                 ⚠️
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1A1A1A]">
                  Don't let this become chronic pain.
                </h3>
                <p className="text-lg md:text-xl text-[#5F5F5F] leading-relaxed max-w-2xl mx-auto">
                  Early intervention is key to preventing long-term neck issues. Book your assessment today and stop the pain before it affects your career.
                </p>
                <div className="pt-4">
                  <a 
                    href="#book-now"
                     onClick={(e) => {
    e.preventDefault();
    document.getElementById("book-now")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
                    className="inline-block bg-[#1F5E4B] text-white px-10 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity text-lg"
                  >
                    Get Your Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Content Reviewer Badge */}
        <ContentReviewBadge doctorName="Jeena Mathew" pageSlug="office-neck-treatment-dubai" />

        {/* Final CTA Section: Reclaim Your Focus */}
        <section id="book-now" className="bg-[#1F5E4B] py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-[48px] font-semibold text-white leading-tight">
                Reclaim Your Focus in Jumeirah 1
              </h2>
              <p className="text-base md:text-lg lg:text-[20px] text-white/90 leading-relaxed max-w-2xl mx-auto">
                Don't let neck pain distract you from your next big deal. Book a specialized 'Office Neck' assessment at RamaCare today.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { label: 'Location', title: 'Jumeirah 1, Dubai', sub: '(10 mins from DIFC)' },
                { label: 'Specialty', title: 'Corporate Ergonomics', sub: '& Cervical Health' },
                { label: 'Next Step', title: 'Book Your', sub: 'Postural Assessment' }
              ].map((card, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 space-y-2">
                  <p className="text-white/60 text-[12px] font-semibold uppercase tracking-wider">{card.label}</p>
                  <p className="text-white font-bold text-lg leading-tight">{card.title}</p>
                  <p className="text-white/70 text-[14px] leading-snug">{card.sub}</p>
                </div>
              ))}
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl text-left">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-[16px] font-bold text-[#1A1A1A]">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    required
                    minLength={2}
                    maxLength={50}
                    pattern="[a-zA-Z\s'-]+"
                    title="Please enter a valid name (letters, spaces, hyphens only)"
                    className="w-full px-6 py-4 bg-[#F5F1E8]/50 border border-transparent rounded-xl focus:outline-none focus:border-[#1F5E4B] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[16px] font-bold text-[#1A1A1A]">Phone</label>
                  <input 
                    type="tel" 
                    placeholder="+971 XX XXX XXXX"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    required
                    minLength={8}
                    maxLength={20}
                    pattern="[0-9+\s-]+"
                    title="Please enter a valid phone number"
                    className="w-full px-6 py-4 bg-[#F5F1E8]/50 border border-transparent rounded-xl focus:outline-none focus:border-[#1F5E4B] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[16px] font-bold text-[#1A1A1A]">Email</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-6 py-4 bg-[#F5F1E8]/50 border border-transparent rounded-xl focus:outline-none focus:border-[#1F5E4B] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[16px] font-bold text-[#1A1A1A]">Preferred Time</label>
                  <input 
                    type="text" 
                    placeholder="e.g., Morning, Afternoon, Evening"
                    value={formData.time}
                    onChange={e => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-6 py-4 bg-[#F5F1E8]/50 border border-transparent rounded-xl focus:outline-none focus:border-[#1F5E4B] transition-colors"
                  />
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6 pt-4">
                  <button 
                    type="submit"
                    className="w-full md:w-auto bg-[#1F5E4B] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#164a38] transition-all shadow-lg text-lg"
                  >
                    Confirm Appointment Request
                  </button>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center gap-3 text-[#1F5E4B] font-bold hover:underline"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Book via WhatsApp Instantly
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </Layout>
    {ToastComponent}
    </>
  );
};

export default OfficeNeckTreatmentPage;
