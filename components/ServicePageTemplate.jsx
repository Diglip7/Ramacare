import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import BookConsultation from './BookConsultation';
import DoctorsSection from './DoctorsSection';
import QuickNavigation from './QuickNavigation';
import { DOCTOR_GROUPS } from '../src/data/doctors';
import {
  Calendar,
  CheckCircle,
  Shield,
  ChevronDown,
  Phone,
  Search,
  AlertTriangle,
  MessageCircle
} from 'lucide-react';

// Renders text containing {{Label|/href}} tokens as real inline links.
export function LinkedText({ text, className }) {
  if (!text) return null;
  const regex = /\{\{([^|]+)\|([^}]+)\}\}/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <a
        key={key++}
        href={match[2]}
        className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/40 hover:decoration-[#1F5E4B] underline-offset-2 transition-colors"
      >
        {match[1]}
      </a>
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <span className={className}>{parts}</span>;
}

export default function ServicePageTemplate({ content }) {
  if (!content) {
    return (
      <div className="py-24 text-center">
        <p className="text-red-500">Service data not found.</p>
      </div>
    );
  }

  const {
    seo,
    breadcrumbs,
    hero,
    introText,
    whatIs,
    types,
    signsSymptoms,
    causes,
    riskFactors,
    whenToSeeDoctor,
    diagnosis,
    treatmentOptions,
    physioFocus,
    treatmentProcess,
    benefits,
    recoveryTimeline,
    whyChooseUs,
    faqs,
    conclusion,
    images
  } = content;

  // Derive types list safely (handles Slip Disc, Arthritis, Sports Rehab, and Joint Pain layouts)
  const typesList = types?.list || whatIs?.types || whatIs?.discTypes || [];

  // State controls for interactive elements
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [expandedIdx, setExpandedIdx] = useState(0);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [recoverySeverity, setRecoverySeverity] = useState('moderate');
  const [faqSearch, setFaqSearch] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  // Toggle symptom checking
  const handleSymptomToggle = (symptomName) => {
    if (selectedSymptoms.includes(symptomName)) {
      setSelectedSymptoms(prev => prev.filter(s => s !== symptomName));
    } else {
      setSelectedSymptoms(prev => [...prev, symptomName]);
    }
  };

  // Check if any checked symptoms are highly severe
  const hasSevereSymptoms = selectedSymptoms.some(s =>
    s.toLowerCase().includes('severe') ||
    s.toLowerCase().includes('fever') ||
    s.toLowerCase().includes('sudden') ||
    s.toLowerCase().includes('weakness') ||
    s.toLowerCase().includes('numbness') ||
    s.toLowerCase().includes('walking')
  );

  // Filter FAQs
  const filteredFaqs = (faqs || []).filter(faq =>
    faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
    faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  // WhatsApp integration
  const whatsappNumber = "971566597878";
  const whatsappMessage = selectedSymptoms.length > 0 
    ? `Hello RamaCare, I'm interested in ${seo.title || 'your services'} and I have these symptoms:\n${selectedSymptoms.map((symptom, idx) => `${idx + 1}. ${symptom}`).join('\n')}\nCan you help me with a specialist assessment?` 
    : `Hello RamaCare, I'm interested in ${seo.title || 'your services'} and would like to book a specialist assessment.`;

  const navItems = [
    { id: 'what-is', label: 'What Is' },
    { id: 'symptoms', label: 'Symptoms' },
    { id: 'causes', label: 'Causes & Risks' },
    { id: 'diagnosis', label: 'Diagnosis' },
    { id: 'treatment', label: 'Treatment' },
    { id: 'recovery', label: 'Recovery' },
    { id: 'pathway', label: 'Process' },
    { id: 'our-doctors', label: 'Our Specialists' },
    { id: 'faqs', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' }
  ];

  return (
    <div className="bg-white text-[#1A1A1A] antialiased">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1F5E4B]/10 via-[#F0F7F4] to-white py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4A574]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1F5E4B]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs font-semibold text-[#5F5F5F] mb-8 uppercase tracking-wider">
            {(breadcrumbs || []).map((b, index) => (
              <React.Fragment key={index}>
                <a href={b.href} className="hover:text-[#1F5E4B] transition-colors">{b.label}</a>
                {index < (breadcrumbs || []).length - 1 && <span>/</span>}
              </React.Fragment>
            ))}
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Hero Copy */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center px-4 py-1.5 bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                {hero.badge}
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {hero.heading}
              </h1>

              <p className="text-[#D4A574] text-lg sm:text-xl font-bold tracking-wide mb-6 uppercase">
                {hero.subheading}
              </p>

              <p className="text-[#5F5F5F] text-lg leading-relaxed mb-8">
                {hero.intro}
              </p>

              {/* Expect Bullet Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {(hero.expect || []).map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm border border-[#1F5E4B]/5 hover:border-[#1F5E4B]/20 transition-all">
                    <CheckCircle className="w-5 h-5 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                    <span className="text-[#1A1A1A] text-sm font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#book-now"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#1F5E4B] hover:bg-[#1a4f3e] text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </a>
                <a
                  href="tel:+971566597878"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-[#1F5E4B] border border-[#1F5E4B]/20 hover:border-[#1F5E4B]/50 rounded-xl font-bold text-lg transition-all shadow-sm"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Decorative Clinic Info Card */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-150 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4A574]/5 rounded-bl-3xl z-0" />

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#1F5E4B]/10 rounded-xl flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-[#1F5E4B]" />
                  </div>

                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">RamaCare Patient Care</h3>
                  <p className="text-[#5F5F5F] text-sm leading-relaxed mb-6">
                    Our facility provides integrated orthopedic diagnostics, pain management, physical therapies, and clinical rehabilitation protocols.
                  </p>

                  <div className="space-y-4 border-t border-gray-100 pt-6">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-[#5F5F5F]">License Status</span>
                      <span className="text-[#1F5E4B] font-bold">DHA Registered</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-[#5F5F5F]">Opening Hours</span>
                      <span className="text-[#1A1A1A] font-bold">10:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-[#5F5F5F]">Clinical Focus</span>
                      <span className="text-[#D4A574] font-bold">Conservative Spine & Joint Care</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK NAVIGATION */}
      <QuickNavigation navItems={navItems} />

      {/* INTRODUCTION BLOCK */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#F9F7F2] p-8 md:p-12 rounded-3xl shadow-sm border border-[#D4A574]/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-3 h-full bg-[#D4A574]" />
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 pl-4">{introText.title}</h2>
            <div className="text-[#5F5F5F] text-lg leading-relaxed mb-6 pl-4">
              <LinkedText text={introText.paragraph1} />
            </div>
            <div className="text-[#5F5F5F] text-lg leading-relaxed mb-6 pl-4">
              <LinkedText text={introText.paragraph2} />
            </div>
            {introText.paragraph3 ? (
              <div className="text-[#5F5F5F] text-lg leading-relaxed pl-4">
                <LinkedText text={introText.paragraph3} />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* INTERACTIVE ANATOMY SELECTOR & IMAGE 1 */}
      <section id="what-is" className="py-20 px-4 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              {whatIs.title}
            </h2>
            <p className="text-lg text-[#5F5F5F] leading-relaxed">
              {whatIs.intro}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Selector Tabs & Anatomy Detail (Col 7) */}
            <div className="lg:col-span-7">
              {typesList.length <= 4 ? (
                <>
                  {/* Selector Buttons */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {(typesList || []).map((t, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTabIdx(idx)}
                        className={`px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${activeTabIdx === idx
                          ? 'bg-[#1F5E4B] text-white shadow-md'
                          : 'bg-white text-[#5F5F5F] border border-gray-200 hover:border-[#1F5E4B]/50'
                          }`}
                      >
                        {t.name}
                      </button>
                    ))}
                  </div>

                  {/* Display Active Details */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-150 min-h-[160px] flex items-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTabIdx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15 }}
                      >
                        {typesList[activeTabIdx] && (
                          <div>
                            <h4 className="text-xl font-bold text-[#1A1A1A] mb-2">
                              {typesList[activeTabIdx].name}
                            </h4>
                            <div className="text-[#5F5F5F] text-base leading-relaxed">
                              <LinkedText text={typesList[activeTabIdx].description} />
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </>
              ) : (
                /* Accordion List for longer lists (e.g., Joint Pain, Sports Rehab) */
                <div
                  className="space-y-3 max-h-[480px] overflow-y-auto pr-2 no-scrollbar"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}>
                  <style dangerouslySetInnerHTML={{
                    __html: `
                    .no-scrollbar::-webkit-scrollbar {
                      display: none;
                    }
                  `}} />
                  {(typesList || []).map((t, idx) => {
                    const isExpanded = expandedIdx === idx;
                    return (
                      <div
                        key={idx}
                        className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${isExpanded
                          ? 'border-[#1F5E4B] shadow-sm'
                          : 'border-gray-150 hover:border-gray-300'
                          }`}>
                        <button
                          onClick={() => setExpandedIdx(isExpanded ? -1 : idx)}
                          className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                        >
                          <span className={`font-bold text-base md:text-lg transition-colors ${isExpanded ? 'text-[#1F5E4B]' : 'text-[#1A1A1A]'
                            }`}>
                            {t.name}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-[#5F5F5F] transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#1F5E4B]' : ''
                              }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden">
                              <div className="px-6 pb-5 pt-1 text-sm md:text-base text-[#5F5F5F] leading-relaxed border-t border-gray-50">
                                <LinkedText text={t.description} />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Anatomy Image (Image 1) (Col 5) */}
            <div className="lg:col-span-5">
              <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                  <Image
                    src={images.anatomy?.src || "/images/a3.jpg"}
                    alt={images.anatomy.alt}
                    title={images.anatomy.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-[#5F5F5F] italic text-center px-2">
                  {images.anatomy.caption}
                </p>
              </div>
            </div>
          </div>

          {/* Further Info sub-sections */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">{whatIs.earlyTreatment.title}</h3>
              <div className="text-[#5F5F5F] text-sm leading-relaxed">
                <LinkedText text={whatIs.earlyTreatment.paragraph} />
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">{whatIs.lumbarVsCervical.title}</h3>
              <div className="text-[#5F5F5F] text-sm leading-relaxed">
                <LinkedText text={whatIs.lumbarVsCervical.paragraph} />
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">{whatIs.misconceptions.title}</h3>
              <div className="text-[#5F5F5F] text-sm leading-relaxed">
                <LinkedText text={whatIs.misconceptions.paragraph} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SYMPTOM CHECKER PANEL & IMAGE 2 */}
      <section id="symptoms" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">{signsSymptoms.title}</h2>
            <div className="text-lg text-[#5F5F5F] leading-relaxed">
              <LinkedText text={signsSymptoms.intro} />
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Symptom Checklist Selector (Col 8) */}
            <div className="lg:col-span-8 space-y-8">
              <div className="grid sm:grid-cols-2 gap-3">
                {(signsSymptoms.list || []).map((s, idx) => {
                  const isSelected = selectedSymptoms.includes(s.name);
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSymptomToggle(s.name)}
                      className={`flex items-start text-left p-4 rounded-xl border transition-all ${isSelected
                        ? 'bg-[#1F5E4B]/5 border-[#1F5E4B] shadow-sm'
                        : 'bg-[#FCFDFB] border-gray-200 hover:border-gray-300'
                        }`}
                    >
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border mr-3 mt-0.5 ${isSelected
                        ? 'bg-[#1F5E4B] border-[#1F5E4B] text-white'
                        : 'border-gray-300 text-transparent'
                        }`}>
                        ✓
                      </div>
                      <div>
                        <p className="font-bold text-sm text-[#1A1A1A]">{s.name}</p>
                        <p className="text-xs text-[#5F5F5F] leading-normal mt-0.5">{s.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
              <div className="text-[#5F5F5F] text-sm italic">
                <LinkedText text={signsSymptoms.outro} />
              </div>

              {/* Display Physiotherapist Treating Image (Image 2) */}
              <div className="bg-[#FCFDFB] p-4 rounded-3xl border border-gray-150 flex flex-col md:flex-row items-center gap-6">
                <div className="relative w-full md:w-48 aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={images.physio?.src || "/images/gp.jpg"}
                    alt={images.physio.alt}
                    title={images.physio.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 200px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-[#1A1A1A] mb-1">{images.physio.title}</h5>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed mb-1">{images.physio.caption}</p>
                  <p className="text-xs text-[#5F5F5F]">Thorough evaluation verifies active movement restrictions and compensation patterns.</p>
                </div>
              </div>
            </div>

            {/* Assessment Output Box (Col 4) */}
            <div className="lg:col-span-4">
              <div className="bg-[#F9F7F2] p-8 rounded-3xl border border-[#D4A574]/20 shadow-md sticky top-24">
                <h4 className="text-xl font-bold text-[#1A1A1A] mb-4">Clinical Guidance</h4>

                {selectedSymptoms.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-[#5F5F5F] text-sm">Please select symptoms on the left to see clinical assessment guidelines.</p>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <span className="text-xs text-[#5F5F5F] font-bold uppercase tracking-wider block mb-1">Selected Count</span>
                      <span className="text-2xl font-black text-[#1F5E4B]">{selectedSymptoms.length} active indicators</span>
                    </div>

                    {hasSevereSymptoms ? (
                      <div className="bg-red-50 border border-red-200 p-4 rounded-xl mb-6">
                        <div className="flex items-start space-x-2">
                          <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-red-800 font-bold text-sm">Attention Required</p>
                            <p className="text-red-700 text-xs mt-1 leading-normal">
                              Certain selected indicators require clinical diagnostics. We recommend scheduling an physical and neurological evaluation.
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-[#1F5E4B]/5 border border-[#1F5E4B]/20 p-4 rounded-xl mb-6">
                        <p className="text-[#1F5E4B] font-bold text-sm">Conservative Pathway Recommended</p>
                        <p className="text-[#5F5F5F] text-xs mt-1 leading-normal">
                          Your symptoms are typically well-managed through personalized physical therapy, manual techniques, and loading strategies.
                        </p>
                      </div>
                    )}

                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center py-3 bg-[#1F5E4B] hover:bg-[#1a4f3e] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all"
                    >
                      <MessageCircle size={18} />
                      Request Specialist Assessment
                    </a>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CAUSES AND RISK FACTORS */}
      <section id="causes" className="py-20 px-4 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Causes */}
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">{causes.title}</h2>
              <p className="text-base text-[#5F5F5F] mb-6">{causes.intro}</p>
              <div className="space-y-3">
                {(causes.list || []).map((c, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-150 flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1F5E4B]/10 text-[#1F5E4B] font-bold text-xs flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#1A1A1A]">{c.name}</h4>
                      <p className="text-xs text-[#5F5F5F] leading-normal mt-0.5">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Factors */}
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">{riskFactors.title}</h2>
              <p className="text-base text-[#5F5F5F] mb-6">{riskFactors.intro}</p>
              <div className="space-y-3">
                {(riskFactors.list || []).map((rf, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-150 flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-[#D4A574]/10 text-[#D4A574] font-bold text-xs flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#1A1A1A]">{rf.name}</h4>
                      <p className="text-xs text-[#5F5F5F] leading-normal mt-0.5">{rf.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHEN TO SEEK MEDICAL CARE */}
      <section className="py-20 px-4 bg-[#1F5E4B] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AlertTriangle className="w-12 h-12 text-[#D4A574] mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">{whenToSeeDoctor.title}</h2>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 mb-6 text-left max-w-2xl mx-auto space-y-3">
            {(whenToSeeDoctor.redFlags || []).map((flag, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <span className="text-[#D4A574] font-bold mt-0.5">•</span>
                <span className="text-sm font-medium leading-relaxed">{flag}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
            {whenToSeeDoctor.note}
          </p>
        </div>
      </section>

      {/* DIAGNOSIS MODULE */}
      <section id="diagnosis" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">{diagnosis.title}</h2>
            <p className="text-lg text-[#5F5F5F]">{diagnosis.intro}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(diagnosis.methods || []).map((method, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#FCFDFB] border border-gray-200 hover:border-[#1F5E4B]/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#1F5E4B]/5 flex items-center justify-center text-[#1F5E4B] font-extrabold mb-4">
                  {idx + 1}
                </div>
                <h4 className="font-bold text-base text-[#1A1A1A] mb-2">{method.name}</h4>
                <p className="text-xs text-[#5F5F5F] leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLINICAL TREATMENT OPTIONS GRID & IMAGE 3 & 4 */}
      <section id="treatment" className="py-20 px-4 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              {treatmentOptions.title}
            </h2>
            <div className="text-lg text-[#5F5F5F] leading-relaxed mb-6">
              <LinkedText text={treatmentOptions.intro} />
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm border border-[#1F5E4B]/10 max-w-2xl mx-auto">
              <div className="text-xs text-[#5F5F5F] italic">
                <LinkedText text={treatmentOptions.physioIntro} />
              </div>
            </div>
          </div>

          {/* Visual Images display row (Images 3 and 4) */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Guided Exercises (Image 3) */}
            <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-150 flex items-center gap-4">
              <div className="relative w-36 aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src={images.stretching?.src || "/images/ex2.jpg"}
                  alt={images.stretching.alt}
                  title={images.stretching.title}
                  fill
                  sizes="150px"
                  className="object-cover"
                />
              </div>
              <div>
                <h5 className="font-bold text-sm text-[#1A1A1A] mb-1">{images.stretching.title}</h5>
                <p className="text-xs text-[#5F5F5F] leading-relaxed">{images.stretching.caption}</p>
              </div>
            </div>

            {/* Manual Therapy Session (Image 4) */}
            <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-150 flex items-center gap-4">
              <div className="relative w-36 aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src={images.manual?.src || "/images/gp.jpg"}
                  alt={images.manual.alt}
                  title={images.manual.title}
                  fill
                  sizes="150px"
                  className="object-cover"
                />
              </div>
              <div>
                <h5 className="font-bold text-sm text-[#1A1A1A] mb-1">{images.manual.title}</h5>
                <p className="text-xs text-[#5F5F5F] leading-relaxed">{images.manual.caption}</p>
              </div>
            </div>
          </div>

          {/* Options grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(treatmentOptions.list || []).map((option, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-150 hover:border-[#1F5E4B]/20 hover:shadow-md transition-all"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1F5E4B]" />
                  <h4 className="font-bold text-base text-[#1A1A1A]">{option.name}</h4>
                </div>
                <div className="text-xs text-[#5F5F5F] leading-relaxed">
                  <LinkedText text={option.description} />
                </div>
              </div>
            ))}
          </div>

          <p className="text-[#D4A574] text-xs font-semibold text-center mt-10 italic">
            {treatmentOptions.outro}
          </p>
        </div>
      </section>

      {/* INTERACTIVE RECOVERY TIMELINE SELECTOR */}
      <section id="recovery" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">{recoveryTimeline.title}</h2>
            <p className="text-lg text-[#5F5F5F]">Select a severity profile to view expected timeline & factors.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Selector Tabs */}
            <div className="lg:col-span-4 space-y-3">
              <button
                onClick={() => setRecoverySeverity('mild')}
                className={`w-full flex justify-between items-center p-5 rounded-2xl text-left border font-bold transition-all ${recoverySeverity === 'mild'
                  ? 'bg-[#1F5E4B] text-white border-[#1F5E4B] shadow-md'
                  : 'bg-[#FCFDFB] text-[#5F5F5F] border-gray-200 hover:border-[#1F5E4B]/30'
                  }`}
              >
                <span>{recoveryTimeline.cases[0].name}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${recoverySeverity === 'mild' ? 'rotate-180' : ''}`} />
              </button>

              <button
                onClick={() => setRecoverySeverity('moderate')}
                className={`w-full flex justify-between items-center p-5 rounded-2xl text-left border font-bold transition-all ${recoverySeverity === 'moderate'
                  ? 'bg-[#1F5E4B] text-white border-[#1F5E4B] shadow-md'
                  : 'bg-[#FCFDFB] text-[#5F5F5F] border-gray-200 hover:border-[#1F5E4B]/30'
                  }`}
              >
                <span>{recoveryTimeline.cases[1].name}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${recoverySeverity === 'moderate' ? 'rotate-180' : ''}`} />
              </button>

              <button
                onClick={() => setRecoverySeverity('severe')}
                className={`w-full flex justify-between items-center p-5 rounded-2xl text-left border font-bold transition-all ${recoverySeverity === 'severe'
                  ? 'bg-[#1F5E4B] text-white border-[#1F5E4B] shadow-md'
                  : 'bg-[#FCFDFB] text-[#5F5F5F] border-gray-200 hover:border-[#1F5E4B]/30'
                  }`}
              >
                <span>{recoveryTimeline.cases[2].name}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${recoverySeverity === 'severe' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Display Result Details */}
            <div className="lg:col-span-8">
              <div className="bg-[#F9F7F2] p-8 rounded-3xl border border-[#D4A574]/20 shadow-sm min-h-[250px] flex flex-col justify-between">
                <div>
                  <span className="text-xs text-[#D4A574] font-bold uppercase tracking-wider block mb-1">Expected Course</span>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={recoverySeverity}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.15 }}
                    >
                      {recoverySeverity === 'mild' && (
                        <div>
                          <h3 className="text-2xl font-black text-[#1F5E4B] mb-4">Progress in 2 to 4 Weeks</h3>
                          <p className="text-[#5F5F5F] text-base leading-relaxed mb-6">
                            {recoveryTimeline.cases[0].description}
                          </p>
                        </div>
                      )}
                      {recoverySeverity === 'moderate' && (
                        <div>
                          <h3 className="text-2xl font-black text-[#1F5E4B] mb-4 text-[#1F5E4B]">Function in 4 to 8 Weeks</h3>
                          <p className="text-[#5F5F5F] text-base leading-relaxed mb-6">
                            {recoveryTimeline.cases[1].description}
                          </p>
                        </div>
                      )}
                      {recoverySeverity === 'severe' && (
                        <div>
                          <h3 className="text-2xl font-black text-[#1F5E4B] mb-4">8+ Weeks / Maintenance</h3>
                          <p className="text-[#5F5F5F] text-base leading-relaxed mb-6">
                            {recoveryTimeline.cases[2].description}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="border-t border-gray-200/50 pt-6">
                  <p className="text-xs font-semibold text-[#5F5F5F] uppercase tracking-wider mb-2">
                    {recoveryTimeline.factorsIntro}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(recoveryTimeline.factors || []).map((factor, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1 bg-white border border-[#D4A574]/20 rounded-full text-xs text-[#5F5F5F] font-medium">
                        {factor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CLINICAL TREATMENT STEPPER PATHWAY */}
      <section id="pathway" className="py-20 px-4 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">{treatmentProcess.title}</h2>
            <p className="text-lg text-[#5F5F5F]">{treatmentProcess.intro}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {(treatmentProcess.steps || []).map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-150 relative">
                <div className="absolute top-4 right-4 text-xs font-extrabold text-gray-300">
                  STEP {step.step}
                </div>
                <div className="w-8 h-8 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] font-extrabold text-xs flex items-center justify-center mb-4">
                  0{step.step}
                </div>
                <h4 className="font-bold text-sm text-[#1A1A1A] mb-2">{step.name}</h4>
                <p className="text-xs text-[#5F5F5F] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US, DIAGNOSTIC EQUIPMENT (IMAGE 5) & PHYSIOTHERAPISTS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
            {/* Copy (Col 7) */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-[#D4A574] uppercase tracking-wider block mb-2">Our Clinical Promise</span>
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">{whyChooseUs.title}</h2>
              <p className="text-lg text-[#5F5F5F] leading-relaxed mb-8">{whyChooseUs.intro}</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {(whyChooseUs.list || []).map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment Image & Support (Image 5) (Col 5) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#F9F7F2] p-4 rounded-3xl border border-[#D4A574]/20 shadow-sm">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                  <Image
                    src={images.equipment?.src || "/images/ultra.jpg"}
                    alt={images.equipment.alt}
                    title={images.equipment.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-[#5F5F5F] italic text-center px-2 mb-4">
                  {images.equipment.caption}
                </p>

                <div className="border-t border-[#D4A574]/10 pt-4">
                  <h5 className="font-bold text-xs text-[#1A1A1A] uppercase tracking-wide mb-2">Support Services</h5>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed mb-4">
                    {whyChooseUs.outro}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-white text-[#5F5F5F] text-[10px] rounded-full border border-gray-200">Joint pain</span>
                    <span className="px-2.5 py-1 bg-white text-[#5F5F5F] text-[10px] rounded-full border border-gray-200">Sports Rehab</span>
                    <span className="px-2.5 py-1 bg-white text-[#5F5F5F] text-[10px] rounded-full border border-gray-200">Orthopedic Care</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Doctors Showcase */}
          <DoctorsSection customDoctors={DOCTOR_GROUPS.PHYSIO} />

        </div>
      </section>

      {/* SEARCHABLE FAQ SECTION */}
      <section id="faqs" className="py-20 px-4 bg-[#F5F1E8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-[#5F5F5F]">Browse our answers to popular questions regarding joint care treatments in Dubai.</p>
          </div>

          {/* Search Input */}
          <div className="relative max-w-md mx-auto mb-10">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1F5E4B] text-sm"
            />
            <Search className="w-5 h-5 text-[#5F5F5F] absolute left-4 top-1/2 transform -translate-y-1/2" />
          </div>

          {/* Accordions */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-[#1A2521] hover:text-[#1F5E4B] transition-colors text-sm sm:text-base"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#5F5F5F] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-[#5F5F5F] text-base leading-relaxed border-t border-gray-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className="text-center py-8">
                <p className="text-[#5F5F5F] text-sm">No matching questions found.</p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* CLINICAL BOOKING APPOINTMENT / LEAD FORM */}
      <div id="book-now">
        <BookConsultation
          content={{
            badge: 'Start Your Recovery',
            title: seo.title.replace('| Book Now', '').trim(),
            description: 'Get back to comfortable, pain-free joint movement with evidence-based care at RamaCare Polyclinic.',
            getInTouchTitle: 'Get In Touch',
            requestAppointmentTitle: 'Request Appointment',
            submitButtonText: 'Confirm Free Consultation',
            contactInfo: {
              phone: '+971 04 286 2006',
              whatsapp: '971566597878',
              email: 'query@ramacarepolyclinic.com',
              address: {
                line1: 'Jumeirah 1 ground floor,',
                line2: 'Jumeirah Terrace Building, 393558, Dubai'
              }
            },
            clinicHours: {
              weekdays: 'Sunday - Saturday:',
              weekdaysTime: '10:00 AM - 10:00 PM',
              friday: 'Friday:',
              fridayTime: '10:00 AM - 8:00 PM'
            },
            statCards: [
              { title: 'DHA Licensed', description: 'Certified Facility' },
              { title: 'Experienced Team', description: '10+ Years Combined' },
              { title: 'Personalized Plans', description: 'Built Around Assessment' },
              { title: '4.9/5 Rating', description: 'Patient Reviews' }
            ],
            concerns: [
              { value: seo.slug.replace('/', ''), label: 'Primary Joint Treatment' },
              { value: 'knee-pain-treatment-dubai', label: 'Knee Pain / Arthritis' },
              { value: 'shoulder-pain-treatment-dubai', label: 'Shoulder Pain / Stiffness' },
              { value: 'back-pain-treatment-dubai', label: 'Back Pain / Spine Wear' }
            ]
          }}
        />
      </div>

      {/* CONCLUSION AND CLINICAL NOTES */}
      <section className="py-20 px-4 bg-[#1F5E4B] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{conclusion.title}</h2>
          <div className="text-white/90 text-lg leading-relaxed mb-8">
            <LinkedText text={conclusion.paragraph} />
          </div>
          <div className="w-16 h-0.5 bg-[#D4A574] mx-auto mb-6" />
          <p className="text-xs text-white/70 italic max-w-lg mx-auto">
            {conclusion.outro}
          </p>
        </div>
      </section>

    </div>
  );
}
