import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, MessageCircle, Activity, Zap, HeartHandshake, Bone, X, Check, Radio, Hand, Laptop, ChevronDown, MapPin, Award, Mail } from 'lucide-react';
import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { useToast } from '../../../components/Toast';

const UltrasoundBackPainPage = () => {
  const whatsappNumber = "971566597878";
  const whatsappMessage = encodeURIComponent("Hello RamaCare, I'm interested in Ultrasound Therapy for chronic back pain.");
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', time: '', area: '' });
  const { showToast, ToastComponent } = useToast();

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
          concern: `Treatment Area: ${formData.area}`,
          source: 'ultrasound-therapy-for-chronic-back-pain'
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showToast("Appointment request sent! We'll contact you soon.", 'success');
        setFormData({ name: '', phone: '', email: '', time: '', area: '' });
      } else {
        showToast('Failed to submit. Please try again or contact us directly.', 'error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showToast('Something went wrong. Please try again or contact us directly.', 'error');
    }
  };

  const CANONICAL_URL = 'https://ramacarepolyclinic.ae/services/ultrasound-therapy-for-chronic-back-pain/';

  const faqs = [
    {
      q: "Is ultrasound therapy effective for slipped discs?",
      a: "While ultrasound cannot 'pop' a disc back into place, it is highly effective at reducing the secondary inflammation and muscle spasms that cause the actual pain in slipped disc cases."
    },
    {
      q: "How many sessions do I need for lower back relief?",
      a: "Most patients feel a noticeable improvement after just one session. For chronic conditions, we typically recommend a course of 3-5 sessions for long-lasting results."
    },
    {
      q: "Can I get ultrasound therapy for back pain during pregnancy?",
      a: "No, ultrasound therapy is not recommended for pregnant women over the abdominal, pelvic, or lower back areas. We offer other pregnancy-safe treatments for back pain."
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
        image: 'https://ramacarepolyclinic.ae/images/Backpain.jpg',
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
        '@id': `${CANONICAL_URL}#webpage`,
        url: CANONICAL_URL,
        name: 'Relieve Chronic Back Pain with Ultrasound in Dubai | RamaCare',
        description: 'Struggle with chronic back pain or sciatica in Dubai? Discover how targeted ultrasound therapy at RamaCare Jumeirah 1 reduces deep-tissue inflammation and speeds up recovery.',
        inLanguage: 'en-AE',
        lastReviewed: '2026-08-29',
        medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
        about: {
          '@type': 'MedicalCondition',
          name: 'Chronic Back Pain / Sciatica'
        },
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
        '@id': `${CANONICAL_URL}#physician`,
        name: 'Jeena Mathew',
        medicalSpecialty: 'Physiotherapy',
        honorificSuffix: 'BPT, MPT',
        hasCredential: 'DHA Licensed Physiotherapist',
        worksFor: { '@id': 'https://ramacarepolyclinic.ae/#clinic' },
        url: 'https://ramacarepolyclinic.ae/doctors/jeena-mathew-physiotherapist-dubai/'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${CANONICAL_URL}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ramacarepolyclinic.ae/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://ramacarepolyclinic.ae/services/' },
          { '@type': 'ListItem', position: 3, name: 'Physiotherapy', item: 'https://ramacarepolyclinic.ae/services/physiotherapy-dubai/' },
          { '@type': 'ListItem', position: 4, name: 'Ultrasound Therapy for Chronic Back Pain', item: CANONICAL_URL }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': `${CANONICAL_URL}#faq`,
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a
          }
        }))
      }
    ]
  };

  return (
    <>
    <Layout>
      <Head>
        <title key="title">Relieve Chronic Back Pain with Ultrasound in Dubai | RamaCare</title>
        <meta name="description" content="Struggle with chronic back pain or sciatica in Dubai? Discover how targeted ultrasound therapy at RamaCare Jumeirah 1 reduces deep-tissue inflammation and speeds up recovery." key="description" />
        <meta name="keywords" content="Ultrasound therapy for chronic back pain Dubai, sciatica relief Jumeirah, lumbar spine ultrasound Dubai, herniated disc pain therapy Dubai" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:title" content="Relieve Chronic Back Pain with Ultrasound in Dubai | RamaCare" key="og:title" />
        <meta property="og:description" content="Struggle with chronic back pain or sciatica in Dubai? Discover how targeted ultrasound therapy at RamaCare Jumeirah 1 reduces deep-tissue inflammation and speeds up recovery." key="og:description" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/Backpain.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Ultrasound Therapy for Chronic Back Pain - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Relieve Chronic Back Pain with Ultrasound in Dubai | RamaCare" key="twitter:title" />
        <meta name="twitter:description" content="Struggle with chronic back pain or sciatica in Dubai? Discover how targeted ultrasound therapy at RamaCare Jumeirah 1 reduces deep-tissue inflammation and speeds up recovery." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/Backpain.jpg" key="twitter:image" />

        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      <main className="min-h-screen bg-white" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm font-medium text-[#5F5F5F] flex-wrap">
              <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/services/" className="hover:text-[#1F5E4B] transition-colors">Services</Link>
              <span aria-hidden="true">/</span>
              <Link href="/services/physiotherapy-dubai/" className="hover:text-[#1F5E4B] transition-colors">Physiotherapy</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#1F5E4B]">Ultrasound Therapy for Chronic Back Pain</span>
            </nav>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1A1A1A] leading-tight">
                    Ultrasound Therapy for Back Pain Dubai | Chronic Relief at RamaCare
                  </h1>
                  <p className="text-lg md:text-xl text-[#5F5F5F] leading-relaxed">
                    Struggle with chronic back pain or sciatica in Dubai? Discover how targeted <a href="/services/ultrasound-therapy-dubai/" className="text-[#1b5e3f] hover:underline font-semibold">ultrasound therapy</a> at RamaCare Jumeirah 1 reduces deep-tissue inflammation and speeds up recovery.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A]">
                    Why Chronic Back Pain is a "Dubai Epidemic"
                  </h2>
                  <div className="space-y-4 text-base text-[#5F5F5F] leading-relaxed">
                    <p>
                      Living in a fast-paced city like Dubai often means long hours sitting at desks in DIFC or stuck in traffic on Sheikh Zayed Road. This sedentary lifestyle leads to "Mechanical Back Pain"—where muscles stay tight, blood flow decreases, and spinal discs face constant pressure.
                    </p>
                    <p>
                      At RamaCare Polyclinic, we use <a href="/services/ultrasound-therapy-dubai/" className="text-[#1b5e3f] hover:underline font-semibold">ultrasound therapy </a> to reach the deep muscle layers that manual massage simply cannot access.
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a 
                    href="#book-now"
                    className="flex items-center justify-center gap-3 bg-[#1b5e3f] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#14462f] transition-colors shadow-lg"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Your Back Pain Assessment
                  </a>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center justify-center gap-3 bg-[#f5f1e8] text-[#1b5e3f] px-8 py-4 rounded-xl font-bold hover:bg-[#ebe5d9] transition-colors border border-[#1b5e3f]/20 shadow-md"
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
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/images/Backpain.jpg"
                    alt="Spine and pelvis illustration for Ultrasound Therapy"
                    fill
                    className="object-cover grayscale"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                {/* Decorative elements or badges could go here if seen in Figma */}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Science of Relief Section */}
        <section className="bg-[#F5F1E8] py-24 px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-5xl font-semibold text-[#1A1A1A] mb-8">
              The Science of Relief:
            </h2>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-12 rounded-2xl shadow-lg border border-gray-100"
            >
              <p className="text-lg md:text-xl text-[#5F5F5F] leading-relaxed">
                <a href="/services/ultrasound-therapy-dubai/" className="text-[#1b5e3f] hover:underline font-semibold">Ultrasound therapy</a> uses high-frequency sound waves to create deep thermal heat in the lower back (lumbar) tissues. This heat increases "Tissue Extensibility," making your back feel less stiff and more mobile.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Conditions We Treat Section */}
        <section className="py-24 px-12 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] mb-4">
              Conditions We Treat in Jumeirah 1
            </h2>
            <p className="text-lg text-[#5F5F5F] max-w-3xl mx-auto mb-12">
              Our DHA-licensed physiotherapists use ultrasound to manage a variety of spinal conditions common among Dubai residents:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Activity,
                  title: 'Sciatica & Nerve Impingement',
                  description: 'Reduces inflammation around the sciatic nerve to ease radiating leg pain.',
                },
                {
                  icon: Zap,
                  title: 'Lower Back Muscle Spasms',
                  description: 'Uses "Mechanical Vibration" to break the cycle of muscle guarding and tightness.',
                },
                {
                  icon: HeartHandshake,
                  title: 'Herniated Disc Support',
                  description: 'Increases blood flow to the surrounding soft tissues to support natural disc healing.',
                },
                {
                  icon: Bone,
                  title: 'Facet Joint Arthritis',
                  description: 'Targets localized joint inflammation to improve spinal flexibility.',
                },
              ].map((condition, index) => {
                const Icon = condition.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-[#F5F1E8] p-8 rounded-2xl text-left space-y-4 transition-shadow duration-300 hover:shadow-xl"
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-[#1b5e3f] text-white w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A]">{condition.title}</h3>
                    <p className="text-[#5F5F5F]">{condition.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#E9E2D6]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] mb-4">
              Ultrasound vs. Traditional Back Pain Treatments
            </h2>
            <p className="text-lg md:text-xl text-[#5F5F5F] max-w-3xl mx-auto mb-12">
              Many patients in the UAE rely on painkillers, which only mask the symptoms. Here is why ultrasound is the superior long-term choice:
            </p>
            <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#F5F1EA]">
                    <th className="px-6 py-5 text-left text-base font-semibold text-[#1A1A1A]">Feature</th>
                    <th className="px-6 py-5 text-left text-base font-semibold text-[#5F5F5F]">Painkillers / Injections</th>
                    <th className="px-6 py-5 text-left text-base font-semibold text-[#1F5E4B]">Ultrasound Therapy at RamaCare</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      feature: 'Approach',
                      traditional: 'Masks pain signals',
                      ultrasound: 'Targets underlying tissue inflammation',
                    },
                    {
                      feature: 'Invasiveness',
                      traditional: 'Chemical or Needle-based',
                      ultrasound: 'Non-Invasive',
                    },
                    {
                      feature: 'Side Effects',
                      traditional: 'Potential stomach/kidney issues',
                      ultrasound: 'Minimal side effect risks (when screened)',
                    },
                    {
                      feature: 'Healing',
                      traditional: 'Symptom management focus',
                      ultrasound: 'Supports collagen & cellular repair',
                    },
                  ].map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-5 text-left font-bold text-[#1A1A1A] whitespace-nowrap">{item.feature}</td>
                      <td className="px-6 py-5 text-left text-[#5F5F5F]">
                        <div className="flex items-center">
                          <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                          {item.traditional}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-left text-[#1A1A1A]">
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-[#1F5E4B] mr-3 flex-shrink-0" />
                          {item.ultrasound}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Back Recovery Protocol Section */}
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-4">
              The RamaCare "Back Recovery" Protocol
            </h2>
            <p className="text-lg md:text-xl text-[#5F5F5F] max-w-3xl mx-auto mb-24">
              We don't just apply the ultrasound probe and send you home. For the best results in
              Dubai, we combine technology with expert movement:
            </p>

            <div className="grid md:grid-cols-3 gap-x-12 gap-y-16 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-[16.66%] w-[66.66%] h-px border-t-2 border-dashed border-[#1F5E4B] opacity-30 z-0 -translate-y-1/2" />

              {[
                {
                  number: '1',
                  icon: Radio,
                  title: 'Deep Tissue Ultrasound',
                  description: '10 minutes of targeted thermal therapy to "soften" the tight lumbar muscles.',
                },
                {
                  number: '2',
                  icon: Hand,
                  title: 'Spinal Mobilization',
                  description: 'Hands-on stretching performed by our physio while the muscles are warm and receptive.',
                },
                {
                  number: '3',
                  icon: Laptop,
                  title: 'Ergonomic Coaching',
                  description: 'We provide a custom "Dubai Office Setup" guide to ensure your back pain doesn\'t return once you\'re back at work.',
                },
              ].map((step, index) => (
                <div key={index} className="relative flex flex-col items-start">
                  {/* Number Badge */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#1F5E4B] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg z-10">
                    {step.number}
                  </div>

                  <motion.div
                    className="bg-[#F5F1E8] p-8 pt-12 rounded-2xl text-left relative z-0 h-full border border-transparent transition-all duration-300 w-full"
                    whileHover={{ 
                      y: -8,
                      borderColor: '#1F5E4B20',
                      boxShadow: '0 20px 40px -15px rgba(31, 94, 75, 0.1)'
                    }}
                  >
                    <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                      <step.icon className="w-8 h-8 text-[#1F5E4B]" />
                    </div>

                    <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-4">{step.title}</h3>
                    <p className="text-base text-[#5F5F5F] leading-relaxed">{step.description}</p>
                  </motion.div>
                  
                  {/* Connecting Dots (Desktop Only) */}
                  {index < 2 && (
                    <div className="hidden md:flex absolute top-1/2 -right-8 z-10 items-center justify-center w-4 h-4 bg-white rounded-full -translate-y-1/2">
                      <div className="w-3 h-3 bg-[#1F5E4B] rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#F9F7F2]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
                  <summary className="flex justify-between items-center text-left px-6 py-5 cursor-pointer list-none focus:outline-none">
                    <span className="text-lg font-semibold text-[#1A1A1A]">{faq.q}</span>
                    <ChevronDown className="w-6 h-6 text-[#5F5F5F] group-open:rotate-180 transition-transform duration-300" />
                  </summary>
                  <div className="px-6 pb-5 text-[#5F5F5F] leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="book-now" className="py-24 px-6 md:px-12 lg:px-20 bg-[#1F5E4B]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-6">
              <h2 className="text-4xl md:text-6xl font-semibold text-white">
                Stop the Throb. Start the Healing.
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                If your back pain is affecting your work or sleep, it's time for a professional
                intervention. Visit our clinic in Jumeirah 1 for a dedicated spinal assessment.
              </p>

              <div className="grid md:grid-cols-3 gap-6 pt-8 text-white/90">
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5 text-white" />
                  <span>Jumeirah 1, Dubai (Near La Mer)</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Award className="w-5 h-5 text-white" />
                  <span>Chronic Pain & Sciatica Management</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Calendar className="w-5 h-5 text-white" />
                  <span>Book Your Back Pain Assessment</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1A1A1A]">Name</label>
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
                  <label className="text-sm font-bold text-[#1A1A1A]">Phone</label>
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
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-[#1A1A1A]">Email</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 bg-[#F5F1E8]/50 border border-transparent rounded-xl focus:outline-none focus:border-[#1F5E4B] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1A1A1A]">Preferred Time</label>
                  <select 
                    value={formData.time}
                    onChange={e => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-6 py-4 bg-[#F5F1E8]/50 border border-transparent rounded-xl focus:outline-none focus:border-[#1F5E4B] transition-colors cursor-pointer"
                  >
                    <option value="">Select a time</option>
                    <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                    <option value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM - 5 PM)</option>
                    <option value="Evening (5 PM - 10 PM)">Evening (5 PM - 10 PM)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1A1A1A]">Treatment Area</label>
                  <select 
                    value={formData.area}
                    onChange={e => setFormData({ ...formData, area: e.target.value })}
                    className="w-full px-6 py-4 bg-[#F5F1E8]/50 border border-transparent rounded-xl focus:outline-none focus:border-[#1F5E4B] transition-colors cursor-pointer"
                  >
                    <option value="">Select treatment area</option>
                    <option value="Lower Back (Lumbar)">Lower Back (Lumbar)</option>
                    <option value="Middle Back (Thoracic)">Middle Back (Thoracic)</option>
                    <option value="Upper Back / Neck (Cervical)">Upper Back / Neck (Cervical)</option>
                    <option value="Sciatica Relief">Sciatica Relief</option>
                  </select>
                </div>

                <div className="md:col-span-2 grid md:grid-cols-2 gap-4 pt-4">
                  <button 
                    type="submit"
                    className="flex items-center justify-center gap-3 bg-[#1F5E4B] text-white px-8 py-5 rounded-xl font-bold hover:bg-[#164a38] transition-all shadow-lg"
                  >
                    <Calendar className="w-5 h-5" />
                    Confirm Appointment Request
                  </button>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center justify-center gap-3 bg-white text-[#1F5E4B] border-2 border-[#1F5E4B] px-8 py-5 rounded-xl font-bold hover:bg-[#F5F1E8] transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book via WhatsApp Instantly
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>

        <ContentReviewBadge doctorName="Jeena Mathew" pageSlug="ultrasound-therapy-for-chronic-back-pain" />
      </main>
    </Layout>
    {ToastComponent}
    </>
  );
};

export default UltrasoundBackPainPage;
