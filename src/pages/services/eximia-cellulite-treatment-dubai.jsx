import { useState } from 'react';
import Head from 'next/head';
import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import BeginYourHealingJourneySection from '../../../components/BeginYourHealingJourneySection';

const faqData = [
  {
    question: "Is Eximia effective for all cellulite grades?",
    answer: "Yes, Eximia HR77 Platinum is designed to address Grades 1 through 3 cellulite by combining vacuum mobilization, laserporation, and radiofrequency to release fibrous bands, reduce localized fat, and tighten overlying skin."
  },
  {
    question: "How many sessions are needed to see results?",
    answer: "Most patients notice initial improvements in skin smoothness within 2–3 sessions. A structured series of 6–10 sessions spaced several days apart is typically recommended for comprehensive and long-lasting cellulite reduction."
  },
  {
    question: "Does Eximia hurt?",
    answer: "No, Eximia is a non-invasive, pain-free treatment. Most patients describe the sensation as a deep, warm, soothing massage with gentle suction and no downtime required."
  },
  {
    question: "Is cellulite treatment permanent?",
    answer: "Eximia delivers long-lasting improvements by softening fibrous septae, reducing fat cell volume, and stimulating collagen production. Maintaining results is supported by a healthy lifestyle, good hydration, and periodic maintenance sessions."
  },
  {
    question: "Can Eximia be combined with body contouring treatments?",
    answer: "Yes, Eximia can be seamlessly combined with other non-invasive body contouring and skin-tightening protocols, tailored to your personal aesthetic goals during your initial consultation."
  }
];

const EximiaCellulitePage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookAppointment = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/eximia-cellulite-treatment-dubai/";
  const PAGE_TITLE = "Eximia Cellulite Treatment in Dubai | RamaCare Polyclinic";
  const PAGE_DESCRIPTION = "Eximia cellulite treatment Dubai offers the ultimate solution for smooth skin. Get rid of orange peel skin with advanced non-invasive technology at RamaCare Polyclinic.";
  const OG_IMAGE = "https://ramacarepolyclinic.ae/images/cellulite.jpg";

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_URL}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
          { "@type": "ListItem", "position": 2, "name": "Aesthetic Dermatology", "item": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai/" },
          { "@type": "ListItem", "position": 3, "name": "Eximia Body Contouring", "item": "https://ramacarepolyclinic.ae/services/eximia-body-contouring-dubai/" },
          { "@type": "ListItem", "position": 4, "name": "Eximia Cellulite Treatment", "item": CANONICAL_URL }
        ]
      },
      {
        "@type": "MedicalProcedure",
        "@id": `${CANONICAL_URL}#procedure`,
        "name": "Eximia Cellulite Treatment",
        "description": "Non-invasive cellulite reduction using Eximia HR77 Platinum's Endoradiomag technology to address fibrous septae, water retention, fat hypertrophy, and skin laxity, delivered by DHA-licensed specialists in Dubai.",
        "reviewedBy": {
          "@type": "Person",
          "name": "Sonita Sinaga",
          "jobTitle": "Licensed & Certified Aesthetic Therapist",
          "url": "https://ramacarepolyclinic.ae/doctors/sonita-sinaga-aesthetic-therapist-dubai/"
        },
        "provider": {
          "@type": "MedicalClinic",
          "name": "RamaCare Polyclinic",
          "url": "https://ramacarepolyclinic.ae/",
          "telephone": "+971566597878",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor",
            "addressLocality": "Jumeirah 1",
            "addressRegion": "Dubai",
            "addressCountry": "AE"
          }
        },
        "areaServed": { "@type": "City", "name": "Dubai" }
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        "mainEntity": faqData.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      }
    ]
  };

  return (
    <Layout>
      <style jsx global>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
      <Head>
        <title key="title">{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} key="description" />
        <meta name="keywords" content="Eximia cellulite treatment Dubai, best cellulite removal Dubai, cellulite treatment Dubai, non-surgical cellulite reduction, orange peel skin treatment Dubai, Eximia HR77 Platinum Dubai, smooth skin treatment Dubai, professional cellulite therapy" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Eximia Cellulite Treatment Dubai | Best Cellulite Removal Clinic" key="og:title" />
        <meta property="og:description" content={PAGE_DESCRIPTION} key="og:description" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:image" content={OG_IMAGE} key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Eximia Cellulite Treatment Dubai - Smooth Skin Solution" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Eximia Cellulite Treatment Dubai | Best Cellulite Removal Clinic" key="twitter:title" />
        <meta name="twitter:description" content="Get rid of orange peel skin with advanced non-invasive technology at RamaCare Polyclinic." key="twitter:description" />
        <meta name="twitter:image" content={OG_IMAGE} key="twitter:image" />

        {/* Structured Data Schemas */}
        <script
          key="schema-graph"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight" style={{ fontFamily: "'Nunito Sans', sans-serif", color: 'rgb(0.21, 0.034, 0.264)' }}>
                Eximia for Cellulite: The Ultimate Solution for Smooth Skin
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed" style={{ fontSize: '20px', fontFamily: "'Nunito Sans', sans-serif", color: 'rgb(0.373, 0.034, 0.259)' }}>
                Cellulite affects over 90% of women, regardless of fitness level. In a city like Dubai, where beach and pool days are year-round, finding an effective way to smooth "orange peel" skin is a top priority. Eximia HR77 Platinum is one of the only technologies that treats the root cause of cellulite—fibrous bands and poor circulation—rather than just the surface.
              </p>
              <button 
                onClick={handleBookAppointment}
                className="bg-[#2D5F3F] text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Book Your Consultation
              </button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/cellulite.jpg" 
                  alt="Eximia Cellulite Treatment Dubai - Smooth Skin Solution" 
                  className="w-full h-full object-cover" 
                  style={{ height: '833.72px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Causes Section */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              How Eximia Targets the 4 Causes of Cellulite
            </h2>
            <p className="text-xl text-center mx-auto mb-16 max-w-3xl" style={{ fontSize: '20px', fontFamily: "'Nunito Sans', sans-serif", color: 'rgb(0.446, 0.03, 0.256)' }}>
              Cellulite isn't just "fat"; it's a structural issue. Eximia's patented Endoradiomag technology works where diets fail by addressing:
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 - Fibrous Septae */}
            <div className="bg-gradient-to-br from-rose-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-[#1F5E4B] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '20px', color: 'rgb(0.21, 0.034, 0.264)' }}>
                Fibrous Septae
              </h3>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: '16px', fontFamily: "'Nunito Sans', sans-serif", color: 'rgb(0.373, 0.034, 0.259)' }}>
                The "bands" that pull skin down to create dimples. Eximia's magnetic rollers help "defibrotize" (soften) these bands.
              </p>
            </div>

            {/* Card 2 - Water Retention */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-[#1F5E4B] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2m16 0l-1.5 1.5m-13-1.5L5 14.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '20px', color: 'rgb(0.21, 0.034, 0.264)' }}>
                Water Retention
              </h3>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: '16px', fontFamily: "'Nunito Sans', sans-serif", color: 'rgb(0.373, 0.034, 0.259)' }}>
                The vacuum phase flushes stagnant fluids that make cellulite look more prominent.
              </p>
            </div>

            {/* Card 3 - Fat Hypertrophy */}
            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-[#1F5E4B] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '20px', color: 'rgb(0.21, 0.034, 0.264)' }}>
                Fat Hypertrophy
              </h3>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: '16px', fontFamily: "'Nunito Sans', sans-serif", color: 'rgb(0.373, 0.034, 0.259)' }}>
                Laserporation shrinks the fat cells pushing against the skin.
              </p>
            </div>

            {/* Card 4 - Skin Laxity */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-[#1F5E4B] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '20px', color: 'rgb(0.21, 0.034, 0.264)' }}>
                Skin Laxity
              </h3>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: '16px', fontFamily: "'Nunito Sans', sans-serif", color: 'rgb(0.373, 0.034, 0.259)' }}>
                Multipolar Radiofrequency thickens the dermis so dimples don't show through.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cellulite Grade Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-rose-50">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <h2 className="text-4xl font-bold text-center mb-12" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '36px', color: 'rgb(0.21, 0.034, 0.264)' }}>
            What Grade of Cellulite Do You Have?
          </h2>

          {/* Table Container */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                {/* Table Header - Green Theme */}
                <thead className="bg-gradient-to-r from-[#1F5E4B] to-[#2D7A60]">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold" style={{ fontSize: '16px', fontFamily: "'Nunito Sans', sans-serif", color: '#FFFFFF' }}>
                      Cellulite Grade
                    </th>
                    <th className="px-6 py-4 text-left font-semibold" style={{ fontSize: '16px', fontFamily: "'Nunito Sans', sans-serif", color: '#FFFFFF' }}>
                      Visible Symptoms
                    </th>
                    <th className="px-6 py-4 text-left font-semibold" style={{ fontSize: '16px', fontFamily: "'Nunito Sans', sans-serif", color: '#FFFFFF' }}>
                      Recommended Eximia Plan
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {/* Grade I */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold" style={{ fontSize: '16px', fontFamily: "'Nunito Sans', sans-serif", color: 'rgb(0.21, 0.034, 0.264)' }}>
                      Grade I
                    </td>
                    <td className="px-6 py-4" style={{ fontSize: '16px', fontFamily: "'Nunito Sans', sans-serif", color: 'rgb(0.373, 0.034, 0.259)' }}>
                      Smooth while standing, dimples when pinched
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#DCFCE7', color: '#166534', fontFamily: "'Nunito Sans', sans-serif" }}>
                        4–6 Sessions (Prevention)
                      </span>
                    </td>
                  </tr>

                  {/* Grade II */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold" style={{ fontSize: '16px', fontFamily: "'Nunito Sans', sans-serif", color: 'rgb(0.21, 0.034, 0.264)' }}>
                      Grade II
                    </td>
                    <td className="px-6 py-4" style={{ fontSize: '16px', fontFamily: "'Nunito Sans', sans-serif", color: 'rgb(0.373, 0.034, 0.259)' }}>
                      Visible dimples while standing, but not lying down
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#FEF3C7', color: '#92400E', fontFamily: "'Nunito Sans', sans-serif" }}>
                        6–8 Sessions (Smoothing)
                      </span>
                    </td>
                  </tr>

                  {/* Grade III */}
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold" style={{ fontSize: '16px', fontFamily: "'Nunito Sans', sans-serif", color: 'rgb(0.21, 0.034, 0.264)' }}>
                      Grade III
                    </td>
                    <td className="px-6 py-4" style={{ fontSize: '16px', fontFamily: "'Nunito Sans', sans-serif", color: 'rgb(0.373, 0.034, 0.259)' }}>
                      Visible dimples in all positions ("Orange Peel")
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#FCE7F3', color: '#9D174D', fontFamily: "'Nunito Sans', sans-serif" }}>
                        10–12 Sessions (Structural)
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <h2 className="text-4xl font-bold text-center mb-16" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '36px', color: 'rgb(0.21, 0.034, 0.264)' }}>
            The Results: When Will You See the Smoothness?
          </h2>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - After 2 Sessions */}
            <div className="relative">
              {/* Number Badge - Green Theme */}
              <div className="absolute -top-4 -left-4 bg-[#1F5E4B] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg" style={{ fontSize: '18px', zIndex: 10 }}>
                1
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <h3 className="text-2xl font-bold mb-4 mt-4" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '24px', color: 'rgb(0.21, 0.034, 0.264)' }}>
                  After 2 Sessions
                </h3>
                <p className="leading-relaxed" style={{ fontSize: '18px', fontFamily: "'Nunito Sans', sans-serif", color: 'rgb(0.373, 0.034, 0.259)' }}>
                  Most patients report a "lighter" feeling in their legs and a reduction in skin puffiness.
                </p>
              </div>
            </div>

            {/* Card 2 - After 5 Sessions */}
            <div className="relative">
              {/* Number Badge - Green Theme */}
              <div className="absolute -top-4 -left-4 bg-[#1F5E4B] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg" style={{ fontSize: '18px', zIndex: 10 }}>
                2
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <h3 className="text-2xl font-bold mb-4 mt-4" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '24px', color: 'rgb(0.21, 0.034, 0.264)' }}>
                  After 5 Sessions
                </h3>
                <p className="leading-relaxed" style={{ fontSize: '18px', fontFamily: "'Nunito Sans', sans-serif", color: 'rgb(0.373, 0.034, 0.259)' }}>
                  The skin surface appears more uniform. Dimples begin to fade, even under harsh lighting.
                </p>
              </div>
            </div>

            {/* Card 3 - The Final Result */}
            <div className="relative">
              {/* Number Badge - Green Theme */}
              <div className="absolute -top-4 -left-4 bg-[#1F5E4B] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg" style={{ fontSize: '18px', zIndex: 10 }}>
                3
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <h3 className="text-2xl font-bold mb-4 mt-4" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '24px', color: 'rgb(0.21, 0.034, 0.264)' }}>
                  The Final Result
                </h3>
                <p className="leading-relaxed" style={{ fontSize: '18px', fontFamily: "'Nunito Sans', sans-serif", color: 'rgb(0.373, 0.034, 0.259)' }}>
                  A significant reduction in the appearance of Grade II and III cellulite, with firmer, more "lifted" buttocks and thighs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dubai Lifestyle Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 via-rose-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/cellulite-1.jpg" 
                  alt="Dubai Beach Lifestyle Eximia Treatment" 
                  className="w-full h-full object-cover" 
                  style={{ height: '803.59px' }}
                />
              </div>
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '36px', color: 'rgb(0.21, 0.034, 0.264)' }}>
                Combining Eximia with the Dubai Lifestyle
              </h2>
              <p className="text-lg text-gray-700 mb-8" style={{ fontSize: '18px', fontFamily: "'Nunito Sans', sans-serif", color: 'rgb(0.373, 0.034, 0.259)' }}>
                To maintain your smooth results in the UAE heat, we recommend:
              </p>

              {/* List Items */}
              <div className="space-y-6">
                {/* Item 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#1F5E4B] flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-[#1F5E4B]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '20px', color: 'rgb(0.21, 0.034, 0.264)' }}>
                      Lymphatic-Friendly Foods
                    </h3>
                    <p className="leading-relaxed" style={{ fontSize: '16px', fontFamily: "'Nunito Sans', sans-serif", color: 'rgb(0.373, 0.034, 0.259)' }}>
                      Reduce salt intake to prevent the water retention that makes cellulite look worse.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#1F5E4B] flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-[#1F5E4B]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '20px', color: 'rgb(0.21, 0.034, 0.264)' }}>
                      Hydration
                    </h3>
                    <p className="leading-relaxed" style={{ fontSize: '16px', fontFamily: "'Nunito Sans', sans-serif", color: 'rgb(0.373, 0.034, 0.259)' }}>
                      Your body needs water to transport the toxins released during your Endoradiomag massage.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#1F5E4B] flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-[#1F5E4B]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '20px', color: 'rgb(0.21, 0.034, 0.264)' }}>
                      Daily Movement
                    </h3>
                    <p className="leading-relaxed" style={{ fontSize: '16px', fontFamily: "'Nunito Sans', sans-serif", color: 'rgb(0.373, 0.034, 0.259)' }}>
                      Even a short walk on the Kite Beach sand can help maintain the circulation boost Eximia provides.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-[#F5F1EA]">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#5F5F5F] max-w-2xl mx-auto">
              Everything you need to know about Eximia cellulite reduction at RamaCare Polyclinic.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-[#1A1A1A] pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-[#1F5E4B] flex-shrink-0 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-[#5F5F5F] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#1F5E4B] to-[#2D7A60]">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-bold mb-6 text-white" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '36px' }}>
            Reclaim Your Skin Confidence
          </h3>
          <p className="text-xl mb-8 leading-relaxed text-white" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '18px' }}>
            Don't let cellulite hold you back from your favorite wardrobe. Visit our main{' '}
            <a href="https://ramacarepolyclinic.ae/services/eximia-body-contouring-dubai/" className="underline font-semibold">
              Eximia Body Contouring Dubai
            </a>{' '}
            page to see our "Before & After" cellulite gallery and book your skin texture analysis.
          </p>
          <button 
            onClick={handleBookAppointment}
            className="bg-white text-[#1F5E4B] px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Book Your Skin Texture Analysis
          </button>
        </div>
      </section>

      {/* Appointment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto" onClick={handleCloseModal}>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300"
          />
          
          {/* Modal Content */}
          <div 
            className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl z-[10000] animate-slideUp scrollbar-hide" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={handleCloseModal} 
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors" 
              aria-label="Close modal"
              type="button"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Form Component */}
            <BeginYourHealingJourneySection 
              isModal={true} 
              onClose={handleCloseModal} 
              onSubmissionSuccess={() => {
                // Close modal after successful submission
                setTimeout(() => handleCloseModal(), 1500);
              }}
            />
          </div>
        </div>
      )}
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="eximia-cellulite-treatment-dubai" />
    </Layout>
  );
};

export default EximiaCellulitePage;
