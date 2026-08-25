import React, { useState, useRef } from 'react';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import BeginYourHealingJourneySection from '../../../components/BeginYourHealingJourneySection';
import { DOCTORS } from '../../../src/data/doctors';

const getIconForTitle = (title) => {
  const t = title.toLowerCase();

  if (t.includes('ayurveda') || t.includes('holistic') || t.includes('wellness') || t.includes('detox')) {
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  if (t.includes('preventive') || t.includes('immune') || t.includes('immunity') || t.includes('health') || t.includes('prevention')) {
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
  if (t.includes('diet') || t.includes('nutrition') || t.includes('digestive') || t.includes('gut')) {
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    );
  }
  if (t.includes('pain') || t.includes('musculoskeletal') || t.includes('spine') || t.includes('joint') || t.includes('knee') || t.includes('back') || t.includes('neck') || t.includes('shoulder')) {
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    );
  }
  if (t.includes('stress') || t.includes('anxiety') || t.includes('sleep') || t.includes('insomnia') || t.includes('headache') || t.includes('migraine')) {
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  if (t.includes('panchakarma') || t.includes('massage') || t.includes('therapy') || t.includes('herbal') || t.includes('basti') || t.includes('nasya')) {
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    );
  }

  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  );
};
function WhyChooseTabs({ currentDoctor }) {
  const [tab, setTab] = useState(0);
  const tabs = [
    currentDoctor.whyChooseDoctor && { label: `Why Choose ${currentDoctor.firstName}`, items: currentDoctor.whyChooseDoctor },
    currentDoctor.whyChooseClinic && { label: "Why Choose RamaCare", items: currentDoctor.whyChooseClinic },
  ].filter(Boolean);
  const active = tabs[tab] || tabs[0];
  if (!active) return null;

  return (
    <div className="mt-12 bg-white border border-[#E9E2D6] rounded-3xl p-6 sm:p-8 shadow-sm">
      <div className="inline-flex bg-[#FAF9F5] rounded-full p-1.5 border border-[#E9E2D6] mb-6">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setTab(i)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${tab === i ? "bg-[#1F5E4B] text-white shadow-xs" : "text-[#5F5F5F] hover:text-[#1F5E4B]"
              }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
        {active.items.slice(0, 8).map((item, idx) => (
          <li key={idx} className="flex gap-3 items-start text-xs sm:text-sm text-[#5F5F5F] leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-[#C9A961]/15 text-[#C9A961] border border-[#C9A961]/30 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">✓</span>
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
const getWhatsAppMessage = (doctorName, rawSkill = null) => {
  if (!rawSkill || typeof rawSkill !== 'string' || rawSkill.trim() === '') {
    return `Hello RamaCare, I would like to book a consultation with ${doctorName}. Please share the available slots.`;
  }

  // Clean raw skill string (e.g. "Back Pain: Targeted manual therapy" -> "Back Pain")
  let cleanSkill = rawSkill.split(':')[0].trim();
  cleanSkill = cleanSkill.replace(/<[^>]*>/g, '').trim();

  // If skill title already ends with "Consultation" or "Session"
  if (/consultation$/i.test(cleanSkill)) {
    return `Hello RamaCare, I would like to book a ${cleanSkill} with ${doctorName}. Please share the available slots.`;
  }

  return `Hello RamaCare, I would like to book a consultation for ${cleanSkill} with ${doctorName}. Please share the available slots.`;
};

const DoctorProfilePage = ({ doctor }) => {
  const [openFaqs, setOpenFaqs] = useState({ 0: true });
  const [faqSearch, setFaqSearch] = useState('');
  const [expandedConditions, setExpandedConditions] = useState({});
  const [activeExpertiseIdx, setActiveExpertiseIdx] = useState(0);
  const treatmentScrollRef = useRef(null);
  const currentDoctor = doctor;

  const scrollTreatment = (direction) => {
    if (treatmentScrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      treatmentScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const toggleFaq = (index) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleExpandAllFaqs = () => {
    if (!currentDoctor?.faqsDetailed) return;
    const allOpen = {};
    currentDoctor.faqsDetailed.forEach((_, i) => {
      allOpen[i] = true;
    });
    setOpenFaqs(allOpen);
  };

  const handleCollapseAllFaqs = () => {
    setOpenFaqs({});
  };

  const handleWhatsAppClick = (skillName = null) => {
    const messageText = getWhatsAppMessage(currentDoctor.name, skillName);
    const message = encodeURIComponent(messageText);
    window.open(`https://wa.me/971566597878?text=${message}`, '_blank');
  };

  const renderStars = (rating) => {
    return [1, 2, 3, 4, 5].map((star) => (
      <svg key={star} className={`w-5 h-5 ${star <= Math.floor(rating) ? 'text-[#C9A961]' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <Layout>
      <Head>
        <title key="title">{currentDoctor.metaTitle || `${currentDoctor.name} | Expert Doctor Profile | RamaCare`}</title>
        <meta name="description" content={currentDoctor.metaDescription || `Learn more about ${currentDoctor.name}, specialized in ${currentDoctor.specialization} at RamaCare Polyclinic Jumeirah, Dubai.`} key="description" />
        <link rel="canonical" href={`https://ramacarepolyclinic.ae/doctors/${currentDoctor.slug}`} key="canonical" />
        {currentDoctor.faqsDetailed && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": currentDoctor.faqsDetailed.map((faq) => ({
                  "@type": "Question",
                  "name": faq.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.a
                  }
                }))
              })
            }}
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: currentDoctor.customSchema
              ? JSON.stringify(currentDoctor.customSchema)
              : JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Physician",
                "name": currentDoctor.name,
                "image": `https://ramacarepolyclinic.ae${currentDoctor.image}`,
                "description": currentDoctor.biography,
                "medicalSpecialty": currentDoctor.specialization,
                "telephone": "+971566597878",
                "memberOf": {
                  "@type": "MedicalClinic",
                  "name": "RamaCare Polyclinic",
                  "url": "https://ramacarepolyclinic.ae/"
                },
                "knowsLanguage": currentDoctor.languages,
                "occupationalCredential": [
                  ...currentDoctor.education.map(edu => ({
                    "@type": "EducationalOccupationalCredential",
                    "credentialCategory": "degree",
                    "name": edu
                  })),
                  ...currentDoctor.certifications.map(cert => ({
                    "@type": "EducationalOccupationalCredential",
                    "credentialCategory": "certification",
                    "name": cert
                  }))
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": currentDoctor.rating.toString(),
                  "reviewCount": "542",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1",
                  "addressLocality": "Dubai",
                  "postalCode": "393558",
                  "addressCountry": "AE"
                }
              })
          }}
        />
      </Head>

      <main style={{ fontFamily: "'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif" }} className="bg-[#FAF9F5] text-[#1A1A1A] antialiased">
        {/* ============ HERO SECTION (FULL WIDTH GRADIENT) ============ */}
        <section className="relative w-full bg-gradient-to-br from-[#0F3B2E] via-[#154637] to-[#1F5E4B] text-white overflow-hidden py-12 lg:py-0 lg:min-h-[500px] flex items-center border-b border-[#E9E2D6]/20">
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid)" />
            </svg>
          </div>
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-white/5 rounded-full pointer-events-none blur-2xl"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#C9A961]/10 rounded-full pointer-events-none blur-xl"></div>

          <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch relative z-10">
            {/* Left Column: Info & Details */}
            <div className="lg:col-span-7 py-8 lg:py-16 flex flex-col justify-center space-y-6">
              {/* Breadcrumbs inside the Hero Area for integrated design */}
              <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                <Link href="/" className="hover:text-[#C9A961] transition-colors">Home</Link>
                <span className="mx-2 text-white/20">/</span>
                <Link href="/doctors" className="hover:text-[#C9A961] transition-colors">Doctors</Link>
                <span className="mx-2 text-white/20">/</span>
                <span className="text-[#C9A961]">{currentDoctor.name}</span>
              </p>

              <div>
                <span className="inline-block bg-[#C9A961]/20 text-[#C9A961] text-[10px] tracking-widest font-bold uppercase px-3.5 py-1.5 rounded-full mb-4 border border-[#C9A961]/30">
                  DHA Licensed Specialist
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                  {currentDoctor.name}
                </h1>
                <p className="text-[#C9A961] text-lg sm:text-xl font-semibold mt-3">{currentDoctor.specialization}</p>
                <p className="text-white/70 text-xs sm:text-sm mt-1">{currentDoctor.qualifications}</p>
              </div>

              {/* Bio summary teaser */}
              <p className="text-white/85 text-xs sm:text-sm leading-relaxed max-w-xl">
                {currentDoctor.introParagraphs ? currentDoctor.introParagraphs[0].replace(/<[^>]*>/g, '') : currentDoctor.biography}
              </p>

              {/* Stat Badges */}
              <div className="grid grid-cols-3 gap-4 max-w-lg pt-6 border-t border-white/10">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Experience</p>
                  <p className="text-sm sm:text-base font-extrabold mt-1 text-white">{currentDoctor.experience.split('|')[0].trim()}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Rating</p>
                  <p className="text-sm sm:text-base font-extrabold mt-1 text-[#C9A961]">{currentDoctor.rating} ★★★★★</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Languages</p>
                  <p className="text-xs sm:text-sm font-extrabold mt-1 text-white truncate">{currentDoctor.languages.join(', ')}</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => handleWhatsAppClick()}
                  className="bg-[#C9A961] hover:bg-[#b0914e] text-white font-bold py-4 px-8 rounded-2xl text-xs tracking-wider uppercase transition-all duration-300 shadow-lg flex items-center gap-2.5"
                >
                  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.505-5.724-1.46L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.49 1.977 14.02 1.053 11.997 1.053c-5.444 0-9.87 4.374-9.874 9.8-.001 1.73.473 3.41 1.37 4.89l-.994 3.633 3.738-.971c1.452.793 2.923 1.189 4.32 1.189z" />
                  </svg>
                  Book with {currentDoctor.firstName}
                </button>
                <Link href="/doctors" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-4 px-8 rounded-2xl text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center">
                  All Doctors
                </Link>
              </div>
            </div>

            {/* Right Column: Premium Photo Wrapper */}
            <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-full overflow-hidden flex items-end justify-center">
              {currentDoctor.image ? (
                <div className="absolute inset-0 w-full h-full lg:h-[105%] top-0 bottom-0">
                  <Image
                    src={currentDoctor.image}
                    alt={currentDoctor.imageAlt || currentDoctor.name}
                    fill
                    priority
                    className="object-cover object-[50%_15%]"
                  />
                  {/* Subtle gradient overlay at the bottom and left to blend it beautifully */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#154637] via-[#154637]/40 to-transparent pointer-events-none"></div>
                  <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#154637] via-[#154637]/40 to-transparent pointer-events-none hidden lg:block"></div>
                </div>
              ) : (
                <div className="w-full h-full bg-[#1F5E4B] flex items-center justify-center min-h-[400px]">
                  <span className="text-6xl text-white/30">{currentDoctor.firstName[0]}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ============ DETAIL SECTIONS ============ */}
        {/* Section 1: Intro, Biography & Qualifications */}
        <section className="py-20 bg-gradient-to-b from-[#FAF9F5] via-white to-[#FAF9F5] relative overflow-hidden">
          {/* Decorative mesh gradients in background */}
          <div className="absolute top-1/3 -left-20 w-96 h-96 bg-[#1F5E4B]/3 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#C9A961]/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">

            {/* Row 1: Biography & Image side-by-side */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Image Column */}
              {currentDoctor.assessmentImage && (
                <div className="lg:col-span-5 relative group lg:sticky lg:top-24">
                  <div className="absolute -bottom-3 -right-3 w-full h-full bg-gradient-to-br from-[#1F5E4B] to-[#C9A961] rounded-[32px] opacity-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500 -z-10"></div>
                  <div className="absolute -inset-1 bg-gradient-to-tr from-[#C9A961]/40 to-[#1F5E4B]/40 rounded-[34px] blur-sm opacity-25 group-hover:opacity-40 transition duration-1000"></div>

                  <div className="relative h-96 sm:h-[480px] w-full rounded-[32px] overflow-hidden bg-white shadow-2xl ring-1 ring-[#C9A961]/25 ring-offset-4 ring-offset-white">
                    <Image
                      src={currentDoctor.assessmentImage}
                      alt={currentDoctor.assessmentImageAlt || "Clinical assessment"}
                      fill
                      className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#154637]/25 via-transparent to-transparent"></div>
                  </div>
                  {currentDoctor.assessmentImageAlt && (
                    <p className="text-[11px] text-[#5F5F5F]/80 italic mt-4 text-center px-4 leading-relaxed font-light">
                      {currentDoctor.assessmentImageAlt}
                    </p>
                  )}
                </div>
              )}

              {/* Biography Text Column */}
              <div className={`space-y-6 ${currentDoctor.assessmentImage ? 'lg:col-span-7' : 'lg:col-span-12'}`}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-[#C9A961] rounded-full"></span>
                    <span className="text-[10px] text-[#C9A961] tracking-[0.25em] font-extrabold uppercase">Professional Biography</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#154637] leading-tight">
                    {currentDoctor.aboutHeading}
                  </h2>
                </div>

                <div className="border-t border-[#E9E2D6]/60 pt-6 mt-6 space-y-6">
                  {currentDoctor.introParagraphs ? (
                    <div className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed space-y-4 font-light">
                      {currentDoctor.introParagraphs.map((para, idx) => (
                        <p key={idx} dangerouslySetInnerHTML={{ __html: para }}></p>
                      ))}
                    </div>
                  ) : null}

                  {currentDoctor.aboutParagraphs ? (
                    <div className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed space-y-4 border-t border-[#E9E2D6]/30 pt-6 font-light">
                      {currentDoctor.aboutParagraphs.map((para, idx) => (
                        <p key={idx} dangerouslySetInnerHTML={{ __html: para }}></p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed font-light mt-4" dangerouslySetInnerHTML={{ __html: currentDoctor.biography }}></p>
                  )}
                </div>
              </div>

            </div>

            {/* Row 2: Qualifications & Credentials */}
            <div className="pt-8">
              <div className="bg-gradient-to-br from-[#1F5E4B] via-[#154637] to-[#0F3B2E] text-white rounded-[32px] p-8 sm:p-12 shadow-2xl border border-[#C9A961]/25 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none transition-transform duration-1000 group-hover:scale-110"></div>

                <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  <div className="lg:col-span-4 space-y-3">
                    <span className="text-[10px] text-[#C9A961] tracking-widest font-extrabold uppercase block">Credentials</span>
                    <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white leading-tight">
                      {currentDoctor.qualificationsHeading}
                    </h3>
                    {currentDoctor.qualificationsDesc && (
                      <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light pt-2">
                        {currentDoctor.qualificationsDesc}
                      </p>
                    )}
                  </div>

                  <div className="lg:col-span-8 space-y-6">
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                      {(currentDoctor.qualificationsDetailed || currentDoctor.education).map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start text-xs sm:text-sm text-white/90 leading-relaxed transition-all duration-300 hover:text-white">
                          <span className="w-6 h-6 rounded-full bg-white/10 text-[#C9A961] flex items-center justify-center shrink-0 font-bold text-xs border border-white/5 shadow-sm">
                            {(idx + 1).toString().padStart(2, '0')}
                          </span>
                          <span className="font-light" dangerouslySetInnerHTML={{ __html: item }}></span>
                        </li>
                      ))}
                    </ul>

                    {currentDoctor.qualificationsFooter && (
                      <div className="pt-6 border-t border-white/10 mt-6">
                        <p className="text-xs text-white/75 leading-relaxed italic font-light">
                          {currentDoctor.qualificationsFooter}
                        </p>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: Specialization Details (Areas of Expertise) */}
        <section className="py-24 bg-gradient-to-b from-[#FAF9F5] via-white to-[#FAF9F5] border-y border-[#E9E2D6]/60 relative overflow-hidden">
          <div className="absolute -left-20 top-20 w-96 h-96 bg-[#1F5E4B]/3 rounded-full pointer-events-none blur-3xl"></div>
          <div className="absolute -right-20 bottom-20 w-96 h-96 bg-[#C9A55A]/5 rounded-full pointer-events-none blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center lg:text-left mb-10">
              <h2 className="text-2xl font-bold text-[#2C3E35] flex items-center justify-center lg:justify-start gap-3 mb-2">
                <span className="w-2.5 h-6 rounded bg-[#1F5E4B]"></span> {currentDoctor.expertiseHeading}
              </h2>
              <p className="text-sm text-[#5F5F5F] max-w-3xl leading-relaxed">
                {currentDoctor.expertiseDesc}
              </p>
            </div>

            {/* Interactive Layout Showcase */}
            {(() => {
              const items = currentDoctor.expertiseDetailed ||
                (currentDoctor.expertise ? currentDoctor.expertise.map((item, idx) => ({
                  title: item.split(':')[0] || item,
                  desc: item.split(':')[1] || 'Expert clinical support and specialized recovery plans.'
                })) : []);

              const activeItem = items[activeExpertiseIdx] || items[0];

              if (items.length === 0) return null;

              return (
                <div className="grid lg:grid-cols-12 gap-10 items-stretch">

                  {/* Left Column: Interactive List */}
                  <div className="lg:col-span-5 flex flex-col justify-start space-y-4 max-h-[620px] overflow-y-auto pr-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {items.map((item, idx) => {
                      const isActive = activeExpertiseIdx === idx;
                      return (
                        <div
                          key={idx}
                          onClick={() => setActiveExpertiseIdx(idx)}
                          className={`group p-5 rounded-2xl cursor-pointer border transition-all duration-300 flex items-center gap-5 relative overflow-hidden ${isActive
                            ? 'bg-white border-[#1F5E4B] shadow-md translate-x-1'
                            : 'bg-white/40 border-[#E9E2D6] hover:bg-white hover:border-[#C9A55A] hover:translate-x-0.5'
                            }`}
                        >
                          {/* Active Indicator Line */}
                          <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${isActive ? 'bg-[#1F5E4B]' : 'bg-transparent group-hover:bg-[#C9A55A]/50'
                            }`}></div>

                          {/* Icon Circle */}
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${isActive
                            ? 'bg-[#1F5E4B]/10 border-[#1F5E4B]/20 text-[#1F5E4B] scale-105 shadow-sm'
                            : 'bg-gray-50 border-gray-100 text-gray-400 group-hover:bg-[#C9A55A]/10 group-hover:border-[#C9A55A]/20 group-hover:text-[#C9A55A]'
                            }`}>
                            {getIconForTitle(item.title)}
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3 className={`text-sm sm:text-base font-bold truncate transition-colors ${isActive ? 'text-[#1F5E4B]' : 'text-[#1A1A1A] group-hover:text-[#C9A55A]'
                              }`}>
                              {item.title}
                            </h3>
                            <p className="text-xs text-[#5F5F5F] truncate mt-1">
                              {item.desc ? item.desc.replace(/<[^>]*>/g, '') : 'Learn more about this specialty.'}
                            </p>
                          </div>

                          <span className={`transition-transform shrink-0 ${isActive ? 'text-[#1F5E4B] translate-x-0.5' : 'text-gray-300 group-hover:text-[#C9A55A]'
                            }`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Right Column: Premium Active Card */}
                  <div className="lg:col-span-7 flex flex-col">
                    <div className="bg-white border border-[#E9E2D6] rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex-1 flex flex-col justify-between relative group/card min-h-[520px]">

                      {/* Top banner image with gradient overlay */}
                      <div className="relative h-64 w-full bg-gradient-to-br from-[#1F5E4B] to-[#154637] overflow-hidden">
                        <Image
                          src="/images/patient-treatment-consultation-ramacare-dubai.jpg"
                          alt="Clinical Consultation"
                          fill
                          priority
                          className="object-cover opacity-80 blur-[2px] scale-102 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/15"></div>
                        <div className="absolute top-6 left-6 bg-[#1F5E4B]/90 backdrop-blur-md border border-[#C9A55A]/30 text-[#C9A55A] text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-full tracking-widest shadow-sm">
                          Active Specialization Focus
                        </div>
                      </div>

                      {/* Content details */}
                      <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between -mt-16 relative z-10 bg-white rounded-t-[32px]">
                        <div className="space-y-6">
                          <div className="space-y-3">
                            <span className="text-[10px] text-[#C9A55A] font-extrabold uppercase tracking-widest block">RamaCare Healthcare Standards</span>
                            <h3 className="text-2xl sm:text-3xl font-bold text-[#154637] leading-tight">
                              {activeItem.title}
                            </h3>
                          </div>

                          <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: activeItem.desc }}></p>

                          {/* Highlights section */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#E9E2D6]/40">
                            <div className="flex gap-3 items-start text-xs text-[#5F5F5F]">
                              <span className="w-5 h-5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 font-bold">✓</span>
                              <span>DHA Licensed Specialist Practice</span>
                            </div>
                            <div className="flex gap-3 items-start text-xs text-[#5F5F5F]">
                              <span className="w-5 h-5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 font-bold">✓</span>
                              <span>Evidence-Based Rehabilitation</span>
                            </div>
                            <div className="flex gap-3 items-start text-xs text-[#5F5F5F]">
                              <span className="w-5 h-5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 font-bold">✓</span>
                              <span>Personalized Diagnostics</span>
                            </div>
                            <div className="flex gap-3 items-start text-xs text-[#5F5F5F]">
                              <span className="w-5 h-5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 font-bold">✓</span>
                              <span>Post-Treatment Support</span>
                            </div>
                          </div>
                        </div>

                        {/* CTA button */}
                        <div className="pt-8 border-t border-[#E9E2D6]/20 flex flex-wrap items-center justify-between gap-4">
                          <span className="text-xs text-[#5F5F5F]/85 font-semibold">Consult with {currentDoctor.firstName} today</span>
                          <button
                            onClick={() => handleWhatsAppClick(activeItem.title)}
                            className="bg-[#1F5E4B] hover:bg-[#154637] text-white font-bold py-4 px-7 rounded-2xl text-xs tracking-wider uppercase transition-all duration-300 shadow-md flex items-center gap-2.5 hover:shadow-lg"
                          >
                            <span>Book Consultation Session</span>
                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })()}
          </div>
        </section>

        {/* Section 2b: Conditions Commonly Managed */}
        {currentDoctor.conditionsDetailed && (
          <section className="py-16 bg-[#FAF9F5]/40 border-b border-[#E9E2D6]/60">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-2xl font-bold text-[#2C3E35] flex items-center gap-3 mb-2">
                <span className="w-2.5 h-6 rounded bg-[#1F5E4B]"></span> {currentDoctor.conditionsHeading || 'Conditions Commonly Managed'}
              </h2>
              <p className="text-sm text-[#5F5F5F] mb-10 max-w-3xl leading-relaxed">
                {currentDoctor.conditionsDesc}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentDoctor.conditionsDetailed.map((item, idx) => {
                  const isExpanded = !!expandedConditions[idx];
                  const toggleExpand = () => setExpandedConditions(prev => ({ ...prev, [idx]: !prev[idx] }));
                  return (
                    <div key={idx} className="bg-white border border-[#E9E2D6] border-l-4 border-l-[#C9A961] p-6 rounded-2xl shadow-xs hover:shadow-md transition-shadow duration-300">
                      <div className="w-10 h-10 rounded-xl bg-[#C9A961]/10 text-[#C9A961] flex items-center justify-center mb-4 border border-[#C9A961]/10">
                        {getIconForTitle(item.title)}
                      </div>
                      <h3 className="font-bold text-[#2C3E35] text-sm mb-2 tracking-tight">{item.title}</h3>
                      <p className={`text-xs text-[#5F5F5F] leading-relaxed transition-all duration-200 ${isExpanded ? '' : 'line-clamp-2'}`} dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                      {item.desc && item.desc.length > 90 && (
                        <button onClick={toggleExpand} className="text-xs font-semibold text-[#1F5E4B] hover:text-[#C9A961] mt-2 block transition-colors focus:outline-none">
                          {isExpanded ? 'Show less' : 'Read more'}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
              {currentDoctor.conditionsFooterText && (
                <p className="text-xs text-[#8F8F8F] mt-8 leading-relaxed max-w-3xl italic">
                  {currentDoctor.conditionsFooterText}
                </p>
              )}
            </div>
          </section>
        )}

        {/* Section 3: Services Provided */}
        {currentDoctor.servicesDetailed && (
          <section className="py-20 bg-[#FAF9F5] border-y border-[#E9E2D6]/80 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-80 h-80 opacity-[0.03] pointer-events-none">
              <svg viewBox="0 0 100 100" fill="none" stroke="#1F5E4B" strokeWidth="0.5">
                <circle cx="50" cy="50" r="40" strokeDasharray="2,2" />
                <circle cx="50" cy="50" r="30" />
                <path d="M10 50 h80 M50 10 v80" />
              </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="mb-12 border-b border-[#E9E2D6]/40 pb-8">
                <h2 className="text-2xl font-bold text-[#2C3E35] flex items-center gap-3 mb-2">
                  <span className="w-2.5 h-6 rounded bg-[#1F5E4B]"></span> {currentDoctor.servicesHeading}
                </h2>
                <p className="text-sm text-[#5F5F5F] max-w-3xl leading-relaxed">
                  {currentDoctor.servicesDesc}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentDoctor.servicesDetailed.map((service, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-[#E9E2D6]/80 p-5 rounded-2xl flex items-start gap-3 shadow-sm hover:shadow-md hover:border-[#1F5E4B]/40 transition-all duration-300"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 text-xs font-bold">✓</span>
                    <span className="text-sm text-[#5F5F5F] leading-relaxed" dangerouslySetInnerHTML={{ __html: service }}></span>
                  </div>
                ))}
              </div>

              {currentDoctor.servicesFooterText && (
                <div className="mt-12 pt-6 border-t border-[#E9E2D6]/40">
                  <p className="text-xs sm:text-sm text-[#5F5F5F] max-w-3xl leading-relaxed italic">
                    {currentDoctor.servicesFooterText}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Section 4: Treatment Approach & Clinical Process */}
        {currentDoctor.treatmentStepsDetailed && (
          <section className="py-20 sm:py-24 bg-[#FAF9F5] border-y border-[#E9E2D6]/80 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
              {/* Header */}
              <div className="mb-10 sm:mb-12">
                <div className="inline-flex items-center gap-2 bg-[#1F5E4B]/10 border border-[#1F5E4B]/20 rounded-full px-3.5 py-1 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#1F5E4B]" />
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#1F5E4B]">
                    Care Methodology
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-[#2C3E35] mb-2">
                  {currentDoctor.treatmentHeading || 'Treatment Approach'}
                </h2>
                {currentDoctor.treatmentDesc && (
                  <p className="text-xs sm:text-sm text-[#5F5F5F] max-w-3xl leading-relaxed">
                    {currentDoctor.treatmentDesc}
                  </p>
                )}
              </div>

              {/* Main Split Layout: Left Image Showcase + Right Vertical Connected Steps */}
              {currentDoctor.rehabImage ? (
                <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                  {/* LEFT: Image Showcase with Proper Framing */}
                  <div className="lg:col-span-5 flex flex-col">
                    <div className="relative w-full h-[320px] sm:h-[380px] lg:h-full min-h-[340px] rounded-3xl overflow-hidden shadow-md border border-[#E9E2D6] bg-white group">
                      <Image
                        src={currentDoctor.rehabImage}
                        alt={currentDoctor.rehabImageAlt || "Treatment session"}
                        fill
                        className="object-cover object-[50%_35%] group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                      <div className="absolute bottom-4 left-4 right-4 z-10">
                        <span className="bg-[#C9A961] text-[#154637] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider mb-1.5 inline-block">
                          Clinical Practice
                        </span>
                        <p className="text-xs font-semibold text-white/95 leading-snug">
                          {currentDoctor.rehabImageAlt || `${currentDoctor.name} conducting personalized care`}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT: Connected Vertical Process Steps Timeline */}
                  <div className="lg:col-span-7 bg-white border border-[#E9E2D6] rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-center">
                    <h3 className="text-xs font-extrabold text-[#1F5E4B] uppercase tracking-wider mb-6 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#C9A961]" />
                      Structured Treatment Journey
                    </h3>

                    <div className="space-y-6 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#1F5E4B]/20">
                      {currentDoctor.treatmentStepsDetailed.map((step, idx) => (
                        <div key={idx} className="relative flex items-start gap-4 pl-1 group">
                          {/* Step Circle Badge */}
                          <div className="w-8 h-8 rounded-full bg-[#FAF9F5] border-2 border-[#1F5E4B] text-[#1F5E4B] group-hover:bg-[#1F5E4B] group-hover:text-white font-extrabold text-xs flex items-center justify-center shrink-0 z-10 transition-colors duration-300 shadow-xs">
                            {idx + 1}
                          </div>

                          <div className="flex-1 pt-0.5">
                            <h4 className="font-bold text-sm text-[#2C3E35] group-hover:text-[#1F5E4B] transition-colors leading-snug">
                              {step.name}
                            </h4>
                            <p className="text-xs text-[#5F5F5F] leading-relaxed mt-1" dangerouslySetInnerHTML={{ __html: step.detail }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Fallback if doctor has no rehabImage: Connected Horizontal Steps Row */
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {currentDoctor.treatmentStepsDetailed.map((step, idx) => (
                    <div key={idx} className="bg-white border border-[#E9E2D6] rounded-3xl p-6 shadow-xs relative">
                      <div className="w-8 h-8 rounded-full bg-[#1F5E4B] text-white font-bold text-xs flex items-center justify-center mb-4">
                        {idx + 1}
                      </div>
                      <h4 className="font-bold text-sm text-[#2C3E35] mb-2">{step.name}</h4>
                      <p className="text-xs text-[#5F5F5F] leading-relaxed" dangerouslySetInnerHTML={{ __html: step.detail }} />
                    </div>
                  ))}
                </div>
              )}

              {/* Why Choose Tabs */}
              {(currentDoctor.whyChooseDoctor || currentDoctor.whyChooseClinic) && (
                <WhyChooseTabs currentDoctor={currentDoctor} />
              )}
            </div>
          </section>
        )}

        {/* Section 5: Patient Education Section */}
        {currentDoctor.patientEducation && (
          <section className="py-20 sm:py-24 bg-gradient-to-b from-[#FAF9F5] via-white to-[#FAF9F5] border-t border-[#E9E2D6]/80 relative overflow-hidden">
            {/* Background Decorative Accents */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-24 w-80 h-80 bg-[#1F5E4B]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 -mr-24 w-80 h-80 bg-[#C9A961]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
              {/* Header */}
              <div className="max-w-3xl mb-12 sm:mb-16">
                <div className="inline-flex items-center gap-2 bg-[#1F5E4B]/10 border border-[#1F5E4B]/20 rounded-full px-4 py-1.5 mb-4 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#1F5E4B]" />
                  <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#1F5E4B]">
                    Clinical Education & Guidance
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-[#2C3E35] mb-2">
                  {currentDoctor.patientEducationHeading}
                </h2>
                <p className="text-xs sm:text-sm text-[#5F5F5F] leading-relaxed max-w-2xl">
                  {currentDoctor.patientEducationDesc}
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {currentDoctor.patientEducation.map((item, idx) => {
                  const formattedNum = String(idx + 1).padStart(2, '0');

                  return (
                    <div
                      key={idx}
                      className="group relative bg-white border border-[#E9E2D6] rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-[#1F5E4B]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                    >
                      {/* Top Gradient Accent Line on Hover */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1F5E4B] via-[#C9A961] to-[#1F5E4B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div>
                        {/* Header Badge Row */}
                        <div className="flex items-center justify-between gap-3 mb-5">
                          <span className="w-9 h-9 rounded-2xl bg-[#1F5E4B]/10 border border-[#1F5E4B]/20 text-[#1F5E4B] flex items-center justify-center font-bold text-sm group-hover:bg-[#1F5E4B] group-hover:text-white transition-colors duration-300">
                            ✦
                          </span>
                          <span className="text-xs font-mono font-extrabold text-[#C9A961] bg-[#C9A961]/10 border border-[#C9A961]/20 px-2.5 py-1 rounded-xl">
                            GUIDE {formattedNum}
                          </span>
                        </div>

                        {/* Content */}
                        <div
                          className="text-xs sm:text-sm text-[#3A4D43] leading-relaxed font-medium group-hover:text-[#1A1A1A] transition-colors"
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      </div>

                      {/* Card Footer Accent */}
                      <div className="mt-6 pt-4 border-t border-[#E9E2D6]/40 flex items-center gap-1.5 text-[11px] font-semibold text-[#1F5E4B]">
                        <svg className="w-3.5 h-3.5 text-[#C9A961]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Doctor Recommended
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Doctor Takeaway Banner */}
              <div className="mt-12 bg-gradient-to-r from-[#1F5E4B] via-[#154637] to-[#0D3126] text-white rounded-3xl p-6 sm:p-8 shadow-lg border border-[#1F5E4B]/30 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A961]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#C9A961]/20 border border-[#C9A961]/40 flex items-center justify-center text-2xl shrink-0">
                    💡
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-base sm:text-lg mb-1">
                      Personalized Preventative Care
                    </h4>
                    <p className="text-xs sm:text-sm text-white/80 max-w-2xl leading-relaxed">
                      Small adjustments in daily routines prevent long-term health issues. Schedule a consultation with {currentDoctor.name} for personalized health guidance.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleWhatsAppClick()}
                  className="shrink-0 bg-[#C9A961] hover:bg-[#b5954f] text-[#154637] font-extrabold px-6 py-3.5 rounded-2xl text-xs uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer relative z-10"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Section 6: FAQs */}
        {currentDoctor.faqsDetailed && (() => {
          const filteredFaqs = (currentDoctor.faqsDetailed || [])
            .map((faq, originalIndex) => ({ ...faq, originalIndex }))
            .filter((faq) => {
              if (!faqSearch.trim()) return true;
              const q = faqSearch.toLowerCase();
              return faq.q.toLowerCase().includes(q) || faq.a.toLowerCase().includes(q);
            });

          return (
            <section id="faq" className="py-20 sm:py-24 bg-gradient-to-b from-[#FAF9F5] via-white to-[#FAF9F5] border-t border-[#E9E2D6]/80 relative overflow-hidden">
              {/* Soft Ambient Background Blur Highlights */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#1F5E4B]/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#C9A961]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* FAQ Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                  <div className="inline-flex items-center gap-2 bg-[#1F5E4B]/10 border border-[#1F5E4B]/20 rounded-full px-4 py-1.5 mb-4 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-[#C9A961] animate-pulse" />
                    <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#1F5E4B]">
                      Patient Knowledge Base
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#2C3E35] mb-2">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5F5F5F] leading-relaxed max-w-2xl mx-auto">
                    Get clear, expert answers regarding treatment procedures, consultation expectations, and medical care with {currentDoctor.name} at RamaCare Polyclinic Jumeirah.
                  </p>

                  {/* Interactive Search & Controls Bar */}
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-2.5 sm:p-3 rounded-2xl border border-[#E9E2D6] shadow-sm">
                    {/* Search Field */}
                    <div className="relative w-full sm:flex-1 flex items-center">
                      <svg className="w-4 h-4 text-[#1F5E4B] absolute left-3.5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input
                        type="text"
                        value={faqSearch}
                        onChange={(e) => setFaqSearch(e.target.value)}
                        placeholder="Search questions (e.g. session, DHA, pain, booking)..."
                        className="w-full pl-10 pr-9 py-2.5 bg-[#FAF9F5] border border-[#E9E2D6]/70 rounded-xl text-xs sm:text-sm text-[#2C3E35] placeholder:text-gray-400 focus:outline-none focus:border-[#1F5E4B] focus:bg-white transition-all"
                      />
                      {faqSearch && (
                        <button
                          onClick={() => setFaqSearch('')}
                          className="absolute right-3 text-gray-400 hover:text-[#2C3E35] p-1 rounded-full text-xs cursor-pointer"
                          title="Clear search"
                        >
                          ✕
                        </button>
                      )}
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end shrink-0">
                      <span className="text-[11px] font-semibold text-[#5F5F5F] px-2 hidden md:inline">
                        {filteredFaqs.length} {filteredFaqs.length === 1 ? 'Question' : 'Questions'}
                      </span>
                      <button
                        onClick={handleExpandAllFaqs}
                        className="px-3.5 py-2 text-xs font-semibold text-[#1F5E4B] bg-[#1F5E4B]/5 hover:bg-[#1F5E4B]/15 border border-[#1F5E4B]/20 rounded-xl transition-all cursor-pointer"
                      >
                        Expand All
                      </button>
                      <button
                        onClick={handleCollapseAllFaqs}
                        className="px-3.5 py-2 text-xs font-semibold text-[#5F5F5F] hover:text-[#2C3E35] bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-xl transition-all cursor-pointer"
                      >
                        Collapse All
                      </button>
                    </div>
                  </div>
                </div>

                {/* FAQ Grid: 2 Column Layout (Left Sticky Assistance Card + Right Accordion Cards) */}
                <div className="grid lg:grid-cols-12 gap-8 items-start">

                  {/* LEFT STICKY CARD */}
                  <div className="lg:col-span-4 lg:sticky lg:top-28">
                    <div className="bg-gradient-to-br from-[#1F5E4B] via-[#154637] to-[#0D3126] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-[#1F5E4B]/30 relative overflow-hidden">
                      {/* Ambient Accent */}
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#C9A961]/20 rounded-full blur-2xl pointer-events-none" />

                      {/* Doctor Info Header */}
                      <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                        <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 border-2 border-[#C9A961] shadow-md bg-white/10">
                          {currentDoctor.image ? (
                            <Image src={currentDoctor.image} alt={currentDoctor.name} fill className="object-cover object-[50%_20%]" />
                          ) : (
                            <div className="w-full h-full bg-[#1F5E4B] flex items-center justify-center font-bold text-white text-xl">
                              {currentDoctor.firstName ? currentDoctor.firstName[0] : 'D'}
                            </div>
                          )}
                        </div>
                        <div>
                          <span className="inline-block bg-[#C9A961] text-[#154637] text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md tracking-wider mb-1">
                            DHA Licensed Specialist
                          </span>
                          <h3 className="font-bold text-base text-white leading-tight">{currentDoctor.name}</h3>
                          <p className="text-xs text-white/70 mt-0.5">{currentDoctor.specialization}</p>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="space-y-3 mb-6">
                        <h4 className="text-base font-extrabold text-white flex items-center gap-2">
                          <span className="text-[#C9A961]">💬</span> Need Personal Guidance?
                        </h4>
                        <p className="text-xs text-white/80 leading-relaxed">
                          Have specific questions about your health situation or scheduling? Speak directly with {currentDoctor.firstName}'s care team on WhatsApp.
                        </p>
                      </div>

                      {/* WhatsApp Button */}
                      <button
                        onClick={() => handleWhatsAppClick()}
                        className="w-full bg-[#C9A961] hover:bg-[#b5954f] text-[#154637] font-extrabold py-3.5 px-5 rounded-2xl text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2.5 cursor-pointer group"
                      >
                        <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.505-5.724-1.46L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.49 1.977 14.02 1.053 11.997 1.053c-5.444 0-9.87 4.374-9.874 9.8-.001 1.73.473 3.41 1.37 4.89l-.994 3.633 3.738-.971c1.452.793 2.923 1.189 4.32 1.189z" />
                        </svg>
                        Ask on WhatsApp
                      </button>

                      {/* Quick Info Badges */}
                      <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 gap-2.5 text-[11px] text-white/80 font-medium">
                        <div className="flex items-center gap-1.5 bg-white/5 p-2 rounded-xl border border-white/5">
                          <span className="text-emerald-400 font-bold">📍</span> Jumeirah 1
                        </div>
                        <div className="flex items-center gap-1.5 bg-white/5 p-2 rounded-xl border border-white/5">
                          <span className="text-amber-400 font-bold">⚡</span> Quick Reply
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT ACCORDION LIST */}
                  <div className="lg:col-span-8 space-y-4">
                    {filteredFaqs.length === 0 ? (
                      <div className="bg-white border border-[#E9E2D6] rounded-3xl p-10 text-center shadow-xs">
                        <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto mb-4 text-xl">
                          🔍
                        </div>
                        <h4 className="font-bold text-[#2C3E35] text-base mb-1">No matching questions found</h4>
                        <p className="text-xs text-[#5F5F5F] mb-6">
                          We couldn't find any questions matching "{faqSearch}". Try a different keyword or ask us directly.
                        </p>
                        <button
                          onClick={() => setFaqSearch('')}
                          className="px-5 py-2.5 bg-[#1F5E4B] text-white text-xs font-bold rounded-xl hover:bg-[#154637] transition-all cursor-pointer"
                        >
                          Clear Search Filter
                        </button>
                      </div>
                    ) : (
                      filteredFaqs.map((faq) => {
                        const idx = faq.originalIndex;
                        const isOpen = !!openFaqs[idx];
                        const formattedNum = String(idx + 1).padStart(2, '0');

                        return (
                          <div
                            key={idx}
                            className={`group relative border transition-all duration-300 rounded-2xl overflow-hidden ${isOpen
                                ? 'border-[#1F5E4B] bg-[#FAF9F5] shadow-md ring-1 ring-[#1F5E4B]/20'
                                : 'border-[#E9E2D6]/80 bg-white hover:border-[#1F5E4B]/50 hover:shadow-xs'
                              }`}
                          >
                            {/* Left Active Accent Bar */}
                            {isOpen && (
                              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#1F5E4B]" />
                            )}

                            {/* Question Header Button */}
                            <button
                              onClick={() => toggleFaq(idx)}
                              className="w-full flex items-center justify-between gap-4 text-left p-5 sm:p-6 cursor-pointer focus:outline-none"
                              aria-expanded={isOpen}
                            >
                              <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                                {/* Numbered Pill Badge */}
                                <span className={`shrink-0 text-xs font-mono font-extrabold px-2.5 py-1 rounded-xl transition-colors ${isOpen
                                    ? 'bg-[#1F5E4B] text-white'
                                    : 'bg-[#C9A961]/15 text-[#C9A961] group-hover:bg-[#1F5E4B]/10 group-hover:text-[#1F5E4B]'
                                  }`}>
                                  {formattedNum}
                                </span>
                                {/* Question Text */}
                                <span className={`text-sm sm:text-base font-bold transition-colors leading-snug ${isOpen ? 'text-[#1F5E4B]' : 'text-[#2C3E35] group-hover:text-[#1F5E4B]'
                                  }`}>
                                  {faq.q}
                                </span>
                              </div>

                              {/* Toggle Plus/Minus Button Icon */}
                              <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center transition-all duration-300 border ${isOpen
                                  ? 'bg-[#1F5E4B] text-white border-[#1F5E4B]'
                                  : 'bg-[#FAF9F5] text-[#1F5E4B] border-[#E9E2D6] group-hover:bg-[#1F5E4B] group-hover:text-white group-hover:border-[#1F5E4B]'
                                }`}>
                                {isOpen ? (
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                                  </svg>
                                ) : (
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                                  </svg>
                                )}
                              </div>
                            </button>

                            {/* Expanded Answer Area */}
                            {isOpen && (
                              <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5F5F5F] leading-relaxed border-t border-[#E9E2D6]/40 bg-white/70">
                                <div className="pt-3">
                                  {faq.a}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })()}

        {/* ============ FOOTER / BOOKING CTA ============ */}
        <section className="bg-gradient-to-br from-[#1F5E4B] to-[#154637] text-white py-16 sm:py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
            </svg>
          </div>
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="text-3xl font-extrabold">{currentDoctor.ctaHeading}</h2>
            <div dangerouslySetInnerHTML={{ __html: currentDoctor.ctaTextHTML }}></div>
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => handleWhatsAppClick()}
                className="bg-[#C9A961] hover:bg-[#b0914e] text-white font-bold py-4 px-8 rounded-2xl text-xs tracking-wider uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.505-5.724-1.46L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.49 1.977 14.02 1.053 11.997 1.053c-5.444 0-9.87 4.374-9.874 9.8-.001 1.73.473 3.41 1.37 4.89l-.994 3.633 3.738-.971c1.452.793 2.923 1.189 4.32 1.189z" />
                </svg>
                Book Consultation via WhatsApp
              </button>
            </div>
          </div>
        </section>

        {/* ============ MEET OTHER SPECIALISTS ============ */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1A1A1A] text-center mb-2">Meet Our Other Specialists</h2>
          <p className="text-sm text-[#5F5F5F] text-center mb-10">Consult with any of our DHA-licensed clinical experts in Jumeirah 1.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(DOCTORS)
              .filter(([key, otherDoctor]) => key !== currentDoctor.slug && otherDoctor.name !== currentDoctor.name)
              .map(([key, otherDoctor]) => (
                <div key={key} className="bg-white border border-[#E9E2D6]/80 rounded-2xl p-5 hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="flex gap-4 items-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 bg-gray-100">
                      {otherDoctor.image ? (
                        <Image src={otherDoctor.image} alt={otherDoctor.name} fill className="object-cover object-[50%_20%]" />
                      ) : (
                        <div className="w-full h-full bg-teal-50 flex items-center justify-center text-teal-700 font-bold text-sm">
                          {otherDoctor.firstName ? otherDoctor.firstName[0] : (otherDoctor.name ? otherDoctor.name[0] : 'D')}
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1A1A1A] leading-snug">{otherDoctor.name}</h3>
                      <p className="text-xs text-[#1F5E4B] font-semibold mt-0.5">{otherDoctor.specialization}</p>
                    </div>
                  </div>
                  <div className="mt-5 pt-4 border-t border-[#E9E2D6]/40 flex justify-end">
                    <Link href={otherDoctor.urlSlug || `/doctors/${key}`} className="text-xs font-bold text-[#1F5E4B] hover:underline flex items-center gap-1">
                      View Full Details <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </section>

        <div className="pb-12">
          <BeginYourHealingJourneySection />
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = Object.entries(DOCTORS)
    .filter(([key]) => key !== 'shamna' && key !== 'jeena' && key !== 'soumya' && key !== 'syamkumar' && key !== 'sahar' && key !== 'hirbod' && key !== 'aparna' && key !== 'nodainne' && key !== 'mariya' && key !== 'sonita')
    .map(([key, doctor]) => ({
      params: { id: key }
    }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const key = params.id;
  const doctor = DOCTORS[key];

  const doctorWithDefaults = {
    ...doctor,
    slug: key,
    ctaHeading: doctor.ctaHeading || 'Book Your Consultation Today',
    ctaTextHTML: doctor.ctaTextHTML || `<p class="text-white/80 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">Take the first step toward pain-free recovery. <a href="/book-appointment/" class="underline font-bold text-white hover:text-[#C9A961] transition-colors">Book an appointment</a> or consult with ${doctor.name} at our clinic.</p>`,
    aboutHeading: doctor.aboutHeading || 'Biography & Journey',
    qualificationsHeading: doctor.qualificationsHeading || 'Qualifications & Professional Credentials',
    qualificationsDesc: doctor.qualificationsDesc || '',
    qualificationsFooter: doctor.qualificationsFooter || '',
    expertiseHeading: doctor.expertiseHeading || 'Clinical Specializations',
    expertiseDesc: doctor.expertiseDesc || `Detailed breakdown of conditions treated by ${doctor.name} at our Jumeirah clinic.`,
    servicesHeading: doctor.servicesHeading || 'Services Provided',
    servicesDesc: doctor.servicesDesc || 'Therapeutic procedures and clinical services offered during consultations.',
    servicesFooterText: doctor.servicesFooterText || '',
    treatmentHeading: doctor.treatmentHeading || 'Treatment Approach',
    treatmentDesc: doctor.treatmentDesc || '',
    patientEducationHeading: doctor.patientEducationHeading || 'Patient Education & Prevention',
    patientEducationDesc: doctor.patientEducationDesc || `Preventive routines and guidelines suggested by ${doctor.name} for daily wellness.`,
    biography: doctor.biography || `${doctor.name} is a highly accomplished specialist dedicated to delivering world-class care at RamaCare Polyclinic. With extensive experience in ${doctor.specialization}, they focus on personalized diagnosis, holistic treatment planning, and evidence-informed recovery programs to achieve optimal outcomes for every patient.`,
    education: doctor.education || [doctor.qualifications],
    certifications: doctor.certifications || (doctor.isDHALicensed ? ['DHA Licensed Practitioner', 'DHA Registry Active'] : [])
  };

  return {
    props: {
      doctor: doctorWithDefaults
    }
  };
}

export default DoctorProfilePage;