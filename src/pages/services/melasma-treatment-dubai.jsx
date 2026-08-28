import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import BookConsultation from '../../../components/BookConsultation';
import DoctorsSection from '../../../components/DoctorsSection';
import { DOCTOR_GROUPS } from '../../data/doctors';
import {
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Search,
  Sparkles,
  Info,
  Calendar,
  AlertTriangle,
  UserCheck,
  TrendingUp,
  MapPin,
  Clock,
  ExternalLink
} from 'lucide-react';

export default function MelasmaTreatmentPage() {
  const [activeTab, setActiveTab] = useState('epidermal');
  const [faqSearch, setFaqSearch] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  const seo = {
    title: "Melasma Treatment Dubai | RamaCare Polyclinic",
    metaTitle: "Melasma Treatment Dubai — RamaCare Polyclinic",
    metaDescription: "Searching for trusted melasma treatment Dubai clinics? RamaCare offers DHA-licensed dermatologists and personalized skin care. Book a consultation today.",
    canonical: "https://ramacarepolyclinic.ae/services/melasma-treatment-dubai/"
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: "Dermatology", href: "/services/aesthetic-dermatology-dubai/" },
    { label: "Melasma Treatment", href: "/services/melasma-treatment-dubai/" }
  ];

  const commonAreas = ["Cheeks", "Forehead", "Bridge of the nose", "Chin", "Upper lip"];

  const causes = [
    { title: "Hormonal Changes", desc: "Fluctuations in estrogen and progesterone are among the most common triggers, which is why melasma is often called the 'mask of pregnancy'." },
    { title: "Pregnancy", desc: "Hormonal shifts during pregnancy can trigger melasma in some women — sometimes fading after delivery, sometimes not." },
    { title: "Birth Control Pills", desc: "Hormonal contraceptives can influence melanin production in people who are already predisposed to melasma." },
    { title: "Genetics", desc: "A family history of melasma increases the likelihood of developing it." },
    { title: "Sun Exposure & UV Radiation", desc: "Dubai's intense sunlight is a major contributing factor. UV rays stimulate melanin-producing cells, worsening existing pigmentation and triggering new patches." },
    { title: "Heat", desc: "Emerging research suggests that heat exposure, not just UV light, can also stimulate pigment-producing cells — relevant for a climate like Dubai's." },
    { title: "Thyroid Disorders", desc: "Some thyroid conditions have been associated with a higher likelihood of pigmentation issues." },
    { title: "Certain Medications", desc: "Some medications can increase photosensitivity, indirectly contributing to pigmentation." },
    { title: "Skin Inflammation", desc: "Chronic irritation or inflammation can sometimes trigger or worsen pigmentation in predisposed skin." },
    { title: "Cosmetic & Skincare Irritants", desc: "Harsh scrubs, poorly matched products, or frequent irritation from certain treatments can sometimes aggravate existing pigmentation, especially in skin that's already prone to melasma." }
  ];

  const symptoms = [
    "Brown or tan patches with defined borders",
    "Grayish-brown pigmentation in some cases",
    "Symmetrical discoloration — meaning it usually appears in a mirrored pattern on both sides of the face",
    "Patches on the cheeks, forehead, nose, chin, or upper lip",
    "Gradual darkening with continued sun or heat exposure"
  ];

  const whoNeedsRehab = [
    { name: "Women with Hormonal Melasma", desc: "Often linked to pregnancy, birth control, or hormone replacement therapy." },
    { name: "Men with Melasma", desc: "Less common, but increasingly seen, often tied to sun exposure and genetics." },
    { name: "Pregnancy-Related Melasma", desc: "Requires a cautious, pregnancy-safe approach to skincare and treatment." },
    { name: "Chronic or Recurring Pigmentation", desc: "Patients whose melasma keeps returning despite previous treatments often benefit from a more structured, long-term maintenance plan." },
    { name: "Patients with Deep or Mixed Melasma", desc: "Those with pigmentation that hasn't responded to over-the-counter products usually need a more advanced, dermatologist-guided approach." }
  ];

  const treatments = [
    { name: "Dermatologist Consultation", desc: "A thorough discussion of your medical history, lifestyle, sun exposure, hormonal factors, and previous treatments. This step shapes everything that follows." },
    { name: "Medical Skin Assessment", desc: "Using clinical evaluation and, where appropriate, specialized imaging, our dermatologists assess how deep the pigmentation sits in the skin — a key factor in choosing the right treatment." },
    { name: "Prescription Topical Therapy", desc: "Medical-grade topical formulations can help regulate melanin production and gradually fade pigmentation. These are prescribed based on your specific skin type and tolerance." },
    {
      name: "Chemical Peels for Melasma",
      desc: "A chemical peel for melasma works by gently removing the outer layers of pigmented skin, encouraging fresher, more even-toned skin to surface. Peels are chosen and calibrated carefully, since overly aggressive peeling can worsen pigmentation in some skin types.",
      image: "/images/Chemical peel for melasma treatment.jpg",
      alt: "Chemical peel for melasma treatment being applied at RamaCare Polyclinic"
    },
    {
      name: "Laser Melasma Treatment",
      desc: "Laser melasma treatment uses targeted light energy to break down excess pigment in the skin. It's typically considered for specific cases after a full assessment, since certain laser settings can aggravate melasma in darker or more reactive skin types if not carefully selected.",
      image: "/images/Laser melasma treatment Dubai.jpg",
      alt: "Laser melasma treatment Dubai using advanced dermatology technology"
    },
    {
      name: "Microneedling",
      desc: "Microneedling creates controlled micro-channels in the skin, which can improve the penetration of brightening actives and support overall skin texture and tone."
    },
    { name: "Skin Brightening Treatments", desc: "A combination of medical-grade brightening ingredients designed to target uneven pigmentation and support a more balanced skin tone over time." },
    { name: "Medical Facials", desc: "Facials tailored to pigmentation concerns can support hydration, skin barrier health, and the effectiveness of other treatments." },
    { name: "Personalized Skincare Programs", desc: "Ongoing, dermatologist-guided skincare routines — including sunscreen, antioxidants, and maintenance actives — to help manage melasma over the long term." }
  ];

  const chooseUs = [
    "DHA-Licensed Dermatology Professionals — every treatment is overseen by qualified, licensed specialists",
    "Evidence-Based Treatments — protocols grounded in dermatological research, not trends",
    "Advanced Diagnostic Equipment — for accurate assessment of pigmentation depth and skin type",
    "Personalized Care — no generic treatment packages",
    "Modern, Comfortable Clinic Environment — designed around patient comfort",
    "Comprehensive Skin Analysis — before any treatment begins",
    "Transparent Communication — realistic expectations, no overpromising"
  ];

  const benefits = [
    "Visibly reduced pigmentation over time",
    "A more even, balanced skin tone",
    "Improved skin texture from complementary treatments like microneedling",
    "Greater comfort and confidence in your everyday skin",
    "Better long-term management with a maintenance plan",
    "Reduced risk of recurrence when combined with consistent sun protection"
  ];

  const steps = [
    { num: "01", name: "Initial Consultation", desc: "Discuss your history, concerns, and goals with your dermatologist." },
    { num: "02", name: "Skin Examination", desc: "A detailed assessment of your pigmentation, skin type, and possible triggers." },
    { num: "03", name: "Diagnosis", desc: "Determining whether melasma is epidermal, dermal, or mixed." },
    { num: "04", name: "Personalized Plan", desc: "Combining the right treatments for your specific case." },
    { num: "05", name: "Treatment Sessions", desc: "Delivered by trained dermatology professionals, at a pace suited to your skin." },
    { num: "06", name: "Home Care Guidance", desc: "Sunscreen, skincare routine, and lifestyle recommendations." },
    { num: "07", name: "Follow-Up Visits", desc: "Monitoring progress and adjusting the plan as needed." }
  ];

  const aftercare = [
    "Daily broad-spectrum sunscreen — non-negotiable, even on cloudy days or indoors near windows",
    "Sun avoidance during peak UV hours, especially in Dubai's climate",
    "Medical-grade skincare as recommended by your dermatologist",
    "Hydration to support overall skin barrier health",
    "Regular follow-up appointments to track progress and adjust treatment",
    "Lifestyle modifications, such as wearing hats or seeking shade during outdoor activities"
  ];

  const preventions = [
    "Apply broad-spectrum SPF 30+ sunscreen every day, reapplying every few hours if outdoors",
    "Wear wide-brimmed hats and sun-protective clothing",
    "Avoid excessive heat exposure where possible — including prolonged sauna or extreme kitchen heat",
    "Discuss hormonal contributors with your doctor if melasma keeps recurring",
    "Stick to a consistent, dermatologist-approved skincare routine",
    "Schedule regular check-ins with your dermatologist, even after visible improvement"
  ];

  const faqs = [
    { question: "What is melasma?", answer: "Melasma is a common skin condition causing brown or grayish patches, typically on the face, caused by excess melanin production." },
    { question: "Can melasma be cured permanently?", answer: "Melasma is a chronic condition, and while treatment can significantly reduce pigmentation, it cannot be guaranteed to disappear permanently, since it can recur with triggers like sun exposure or hormonal changes." },
    { question: "Which treatment works best for melasma?", answer: "This depends on your skin type and pigmentation depth. Your dermatologist will recommend the most suitable option — or combination — after an assessment." },
    { question: "Is laser treatment safe for melasma?", answer: "Laser can be effective for certain cases but must be carefully selected based on skin type, as inappropriate settings can worsen pigmentation in some patients." },
    { question: "Can melasma return after treatment?", answer: "Yes. Melasma can recur, especially with sun exposure or hormonal changes, which is why ongoing sun protection and maintenance are important." },
    { question: "How many sessions are required for melasma treatment?", answer: "This varies by individual, depending on pigmentation depth, skin type, and chosen treatment — your dermatologist will outline an estimated plan after assessment." },
    { question: "Is melasma caused by pregnancy?", answer: "Pregnancy-related hormonal changes are a well-known trigger, sometimes referred to as the \"mask of pregnancy.\"" },
    { question: "Is sunscreen really necessary for melasma?", answer: "Yes — daily broad-spectrum sunscreen is one of the most important parts of both treatment and prevention." },
    { question: "Can men develop melasma?", answer: "Yes, though it's more commonly seen in women, men can and do develop melasma." },
    { question: "Is chemical peeling effective for melasma?", answer: "Chemical peels can help fade surface-level pigmentation when properly selected and applied by a qualified dermatologist." },
    { question: "Is melasma treatment painful?", answer: "Most treatments are well-tolerated, with only mild sensations reported during procedures like peels or laser sessions." },
    { question: "How long does melasma treatment take to show results?", answer: "Timelines vary widely depending on pigmentation depth and treatment type — your dermatologist can give you a realistic expectation during consultation." },
    { question: "Can melasma worsen in summer?", answer: "Yes, increased sun exposure and heat during summer months can worsen melasma, making sun protection especially important during this time." },
    { question: "Which skincare products help with melasma?", answer: "Dermatologist-recommended brightening and barrier-supporting products, combined with daily sunscreen, tend to support treatment results best." },
    { question: "When should I consult a dermatologist about melasma?", answer: "As soon as you notice persistent, symmetrical facial pigmentation that isn't fading, since earlier assessment generally allows for more treatment options. If you've been researching melasma treatment Dubai clinics, a consultation is the right first step." },
    { question: "Does birth control cause melasma?", answer: "Hormonal contraceptives can trigger or worsen melasma in individuals who are already predisposed." },
    { question: "Can melasma affect areas other than the face?", answer: "While rare, melasma can occasionally appear on other sun-exposed areas like the forearms or neck." },
    { question: "Is melasma the same as hyperpigmentation?", answer: "Melasma is a specific type of hyperpigmentation, but not all hyperpigmentation is melasma — an accurate diagnosis matters." },
    { question: "Can diet affect melasma?", answer: "While diet isn't a primary cause, an overall healthy lifestyle can support skin health alongside dermatologist-guided treatment." },
    { question: "What makes RamaCare's approach to melasma different?", answer: "Every treatment plan is personalized based on a full skin assessment, delivered by DHA-licensed dermatology professionals using evidence-based methods." }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
    faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  // SEO schemas
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": b.label,
      "item": `https://ramacarepolyclinic.ae${b.href}`
    }))
  };

  const medicalConditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Melasma",
    "alternateName": ["Hyperpigmentation", "Chloasma"],
    "possibleTreatment": {
      "@type": "MedicalTherapy",
      "name": "Melasma Treatment"
    }
  };

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Melasma Treatment",
    "procedureType": "https://schema.org/NoninvasiveProcedure",
    "bodyLocation": "Face"
  };

  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "RamaCare Polyclinic",
    "url": "https://ramacarepolyclinic.ae/services/melasma-treatment-dubai/",
    "medicalSpecialty": "Dermatology",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    }
  };

  return (
    <Layout>
      <Head>
        <title key="title">{seo.metaTitle}</title>
        <meta name="description" content={seo.metaDescription} key="description" />
        <link rel="canonical" href={seo.canonical} key="canonical" />
        
        {/* OpenGraph */}
        <meta property="og:title" content="Struggling With Melasma? RamaCare Dubai Can Help" />
        <meta property="og:description" content="Personalized, evidence-based melasma treatment in Dubai. Meet DHA-licensed dermatology experts at RamaCare Polyclinic and start your skin journey today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.canonical} />

        {/* Structured Data Schemas */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      </Head>

      <div className="bg-white text-[#1A1A1A] antialiased">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1F5E4B]/10 via-[#F0F7F4] to-white pt-10 pb-16 md:pt-14 md:pb-24">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4A574]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1F5E4B]/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumbs */}
            <nav className="flex flex-wrap items-center gap-y-1.5 text-[10px] sm:text-xs font-semibold text-[#5F5F5F] mb-6 lowercase tracking-wider">
              {breadcrumbs.map((b, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span className="mx-2">/</span>}
                  <a href={b.href} className="hover:text-[#1F5E4B] transition-colors">{b.label}</a>
                </React.Fragment>
              ))}
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 text-left">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-bold uppercase tracking-wider mb-6">
                  DHA Licensed Dermatology
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] tracking-tight mb-6 leading-tight">
                  Melasma Treatment Dubai — Clearer, More Even-Toned Skin Starts Here
                </h1>

                <p className="text-[#5F5F5F] text-sm sm:text-base leading-relaxed mb-8">
                  Living in Dubai means living under some of the most intense sun on the planet — and for many people, that shows up on the skin as melasma. If you've noticed brown or grayish patches settling on your cheeks, forehead, or upper lip, you're not alone, and you don't have to just live with it.
                </p>

                <p className="text-[#5F5F5F] text-sm sm:text-base leading-relaxed mb-8">
                  At RamaCare Polyclinic, our DHA-licensed dermatology team offers personalized, evidence-based melasma treatment Dubai residents trust — built around your skin type, your pigmentation depth, and your daily life.
                </p>

                <div className="mb-8">
                  <a href="#book-now" className="inline-block px-8 py-4 bg-[#1F5E4B] hover:bg-[#153f32] text-white font-bold rounded-xl text-sm transition-all shadow-md">
                    Book Your Skin Assessment Today →
                  </a>
                </div>

                <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#5F5F5F]">
                  <span className="flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-[#D4A574]" /> Trusted by patients across Dubai</span>
                  <span className="flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-[#D4A574]" /> DHA-Licensed Dermatologists</span>
                  <span className="flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-[#D4A574]" /> Personalized Treatment Plans</span>
                  <span className="flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-[#D4A574]" /> Modern Diagnostic Technology</span>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-5 relative">
                <div className="bg-[#FCFDFB] p-4 rounded-3xl border border-gray-150 shadow-lg">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                    <Image
                      src="/images/Melasma treatment Dubai.jpg"
                      alt="Melasma treatment Dubai — dermatologist consultation at RamaCare Polyclinic"
                      title="Melasma treatment Dubai consultation"
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                  </div>
                  <p className="text-xs text-[#5F5F5F] italic text-center px-2">
                    Personalized melasma consultation with a DHA-licensed dermatologist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-[#F9F7F2]/50 border-b border-gray-150">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left Column - Visual Highlights */}
              <div className="lg:col-span-4 lg:sticky lg:top-8">
                <div className="bg-[#1F5E4B] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                  
                  <span className="text-xs text-[#D4A574] font-bold uppercase tracking-wider block mb-2">
                    Key Highlight
                  </span>
                  <h3 className="text-2xl font-extrabold mb-6 leading-tight">
                    Dubai Climate Factors
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="border-l-2 border-[#D4A574] pl-4">
                      <h4 className="font-bold text-sm text-white/90">UV Sun Exposure</h4>
                      <p className="text-xs text-white/70 mt-1">Intense sunshine year-round triggers active melanin-producing cells.</p>
                    </div>
                    <div className="border-l-2 border-[#D4A574] pl-4">
                      <h4 className="font-bold text-sm text-white/90">Multicultural Skin Behavior</h4>
                      <p className="text-xs text-white/70 mt-1">Different skin types require fully calibrated settings to avoid rebound pigmentation.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Text */}
              <div className="lg:col-span-8 space-y-6 text-[#5F5F5F] text-base leading-relaxed">
                <h2 className="text-3xl font-extrabold text-[#1A1A1A] tracking-tight mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-[#1F5E4B] rounded-full inline-block"></span>
                  Introduction
                </h2>
                <p>
                  Melasma is one of the most common skin concerns we see at our clinic, and Dubai's climate plays a big role in that. Between the strong year-round sun, high heat, and time spent outdoors or commuting between air-conditioned spaces, skin here goes through a lot.
                </p>
                <p>
                  Melasma shows up as patches of darker skin, usually on the face, and it tends to affect women more than men — though men can develop it too. It's often linked to sun exposure, hormonal shifts, pregnancy, or a combination of factors that vary from person to person.
                </p>
                <p>
                  Dubai's multicultural population adds another layer of complexity. Melasma behaves differently across different skin types, and what works well for one person's skin tone or pigmentation depth may not be the right approach for someone else. That's exactly why a proper diagnosis matters before starting any treatment.
                </p>
                <p>
                  The earlier melasma is assessed by a qualified dermatologist, the more treatment options are usually available, and the easier it tends to be to manage. Left untreated, melasma can deepen over time, particularly with continued sun exposure — which is why so many people search for a trusted specialist once patches aren't fading on their own, especially after trying general skincare routines that weren't designed for pigmentation specifically.
                </p>
                <p className="italic font-medium text-[#1A1A1A] mt-4">
                  This page walks through what melasma is, what causes it, and how RamaCare Polyclinic approaches treatment — so you can make an informed decision about your next step.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS MELASMA? */}
        <section className="py-16 md:py-24 px-4 bg-[#F5F1E8]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-3xl font-bold text-[#1A1A1A]">What is Melasma?</h2>
                <p className="text-base text-[#5F5F5F] leading-relaxed">
                  Melasma is a common skin condition that causes brown, tan, or grayish-brown patches to develop, usually on the face. It happens when the skin produces excess melanin — the pigment responsible for skin color — in certain areas.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-gray-200">
                    <h4 className="font-bold text-sm text-[#1F5E4B] uppercase tracking-wide mb-1">Melasma vs. Freckles</h4>
                    <p className="text-xs text-[#5F5F5F] leading-relaxed">
                      Freckles are typically small, evenly scattered, and genetically driven. Melasma tends to appear in larger, more defined patches, often symmetrically on both sides of the face.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-gray-200">
                    <h4 className="font-bold text-sm text-[#1F5E4B] uppercase tracking-wide mb-1">Melasma vs. PIP</h4>
                    <p className="text-xs text-[#5F5F5F] leading-relaxed">
                      Post-inflammatory pigmentation develops after an injury or acne, and fades over time. Melasma is persistent and closely tied to hormonal and UV triggers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Areas Affected & Image */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#1F5E4B] text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
                  <h3 className="text-lg font-bold mb-3">Common Areas Affected</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {commonAreas.map((area, idx) => (
                      <span key={idx} className="bg-white/10 px-3 py-1 rounded-full text-xs font-semibold">{area}</span>
                    ))}
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed border-t border-white/20 pt-3">
                    Melasma doesn't cause physical discomfort, but it can affect confidence — a key reason patients seek treatment.
                  </p>
                </div>

                <div className="bg-white p-3 rounded-3xl border border-gray-150 shadow-sm">
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-2">
                    <Image
                      src="/images/Dermatologist examining facial pigmentation.jpg"
                      alt="Dermatologist examining facial pigmentation for melasma diagnosis"
                      title="Wood's lamp or dermatoscope examination"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p className="text-[10px] text-[#5F5F5F] text-center italic">
                    Wood's lamp or dermatoscope examination to evaluate pigmentation depth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CAUSES & TRIGGERS */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Causes of Melasma</h2>
              <p className="text-base text-[#5F5F5F]">
                Melasma rarely has just one cause. It's usually the result of several factors working together:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {causes.map((c, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#FCFDFB] border border-gray-150 hover:border-[#1F5E4B]/30 hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-[#D4A574] font-bold block mb-1">Trigger {idx + 1}</span>
                    <h4 className="font-bold text-base text-[#1A1A1A] mb-2">{c.title}</h4>
                    <p className="text-xs text-[#5F5F5F] leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto mt-12 bg-[#F9F7F2] p-6 sm:p-8 rounded-3xl border border-[#D4A574]/20 text-center">
              <p className="text-sm text-[#5F5F5F] leading-relaxed mb-4">
                In many patients, melasma isn't caused by a single factor but by several overlapping ones — for example, a genetic predisposition combined with pregnancy hormones and daily sun exposure. This layering effect is part of why melasma can feel unpredictable, and why two people with seemingly similar skin can respond very differently to the same trigger.
              </p>
              <p className="text-xs font-semibold text-[#1F5E4B]">
                Because so many factors can contribute, a personalized skin assessment is essential before choosing a treatment path — which is a core part of how we approach every case at RamaCare.
              </p>
            </div>
          </div>
        </section>

        {/* SYMPTOMS OF MELASMA */}
        <section className="py-16 md:py-24 px-4 bg-[#F5F1E8]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column - Image */}
              <div className="lg:col-span-5">
                <div className="bg-white p-4 rounded-3xl border border-gray-150 shadow-md">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                    <Image
                      src="/images/Dermatologist examining facial pigmentation.jpg"
                      alt="UV sun exposure as a common cause of melasma in Dubai"
                      title="Skin analysis for melasma"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p className="text-xs text-[#5F5F5F] italic text-center px-2">
                    Wood's lamp or dermatoscope examination to evaluate hyperpigmentation depth.
                  </p>
                </div>
              </div>

              {/* Right Column - Symptoms */}
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-3xl font-bold text-[#1A1A1A]">Symptoms of Melasma</h2>
                <p className="text-base text-[#5F5F5F]">Melasma typically presents as:</p>
                <div className="space-y-3">
                  {symptoms.map((s, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-150">
                      <CheckCircle className="w-5 h-5 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-semibold text-gray-700 leading-normal">{s}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#5F5F5F] italic">
                  Symptoms are purely cosmetic — melasma doesn't itch, hurt, or indicate a serious medical issue — but an accurate diagnosis is still important, since other pigmentation conditions can look similar and may need a different treatment approach entirely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO NEEDS TREATMENT? */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">Who Needs Melasma Treatment?</h2>
              <p className="text-base text-[#5F5F5F]">
                Melasma treatment isn't one-size-fits-all, and different groups tend to need different approaches:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              {whoNeedsRehab.map((item, idx) => (
                <div key={idx} className="bg-[#FCFDFB] p-6 rounded-2xl border border-gray-150 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="w-8 h-8 rounded-lg bg-[#1F5E4B]/10 text-[#1F5E4B] font-bold text-xs flex items-center justify-center mb-4">
                      0{idx + 1}
                    </span>
                    <h4 className="font-bold text-base text-[#1A1A1A] mb-2">{item.name}</h4>
                    <p className="text-xs text-[#5F5F5F] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto bg-[#F9F7F2] p-8 rounded-3xl border border-[#D4A574]/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#D4A574]" />
              <h4 className="font-bold text-base text-[#1A1A1A] mb-2 pl-4">Patients Who've Tried Home Remedies Without Success</h4>
              <p className="text-sm text-[#5F5F5F] leading-relaxed pl-4">
                It's common for patients to arrive after months of trying store-bought creams, home remedies, or advice from social media, only to find the pigmentation hasn't budged — or has gotten noticeably worse instead. This is often because over-the-counter products aren't formulated to address deeper pigmentation or aren't matched to the patient's specific skin type and tone. A proper diagnosis usually explains why previous attempts didn't work and opens up more effective options going forward.
              </p>
            </div>
          </div>
        </section>

        {/* CLINICAL OPTIONS */}
        <section className="py-16 md:py-24 px-4 bg-[#F5F1E8]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">Melasma Treatment Dubai: Options Available at RamaCare</h2>
              <p className="text-base text-[#5F5F5F]">
                Every treatment plan at RamaCare starts with a proper diagnosis. From there, our dermatology team may recommend one treatment or a combination, depending on your skin's needs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {treatments.map((t, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-150 hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-[#1A1A1A] mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-[#1F5E4B] rounded-full inline-block"></span>
                      {t.name}
                    </h4>
                    <p className="text-xs text-[#5F5F5F] leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Treatment Gallery */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white p-4 rounded-3xl border border-gray-150 shadow-sm relative">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-3 border border-gray-100">
                  <Image
                    src="/images/Chemical peel for melasma treatment.jpg"
                    alt="Chemical peel for melasma treatment being applied at RamaCare Polyclinic"
                    title="Chemical Peels for Melasma"
                    layout="fill"
                    objectFit="cover"
                  />
                  <span className="absolute top-4 left-4 bg-[#1F5E4B] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                    Chemical Peel Treatment
                  </span>
                </div>
                <p className="text-[11px] text-[#5F5F5F] text-center italic font-medium px-2">
                  Chemical peels help gently remove outer pigmented skin layers under clinical supervision.
                </p>
              </div>

              <div className="bg-white p-4 rounded-3xl border border-gray-150 shadow-sm relative">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-3 border border-gray-100">
                  <Image
                    src="/images/Laser melasma treatment Dubai.jpg"
                    alt="Laser melasma treatment Dubai using advanced dermatology technology"
                    title="Laser Melasma Treatment"
                    layout="fill"
                    objectFit="cover"
                  />
                  <span className="absolute top-4 left-4 bg-[#1F5E4B] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                    Laser Melasma Treatment
                  </span>
                </div>
                <p className="text-[11px] text-[#5F5F5F] text-center italic font-medium px-2">
                  Advanced targeted laser energy breaks down deep-lying melanin pigment safely.
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto border-t border-gray-300 pt-8 text-center space-y-4">
              <p className="text-sm text-[#5F5F5F] leading-relaxed">
                <strong>How these work together:</strong> Melasma often responds best to a layered approach rather than a single treatment. Your dermatologist will explain how each option benefits your specific case, what results you might reasonably expect, and whether you're a good candidate — based on your skin type, pigmentation depth, and history.
              </p>
              <p className="text-xs text-[#D4A574] font-semibold italic">
                Results vary depending on skin type, pigmentation depth, hormonal factors, and sun exposure. No treatment can guarantee permanent removal of melasma, as it is a chronic condition that can recur.
              </p>
            </div>
          </div>
        </section>

        {/* WHY PERSONALIZED TREATMENT IS IMPORTANT */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">Why Personalized Treatment Is Important</h2>
              <p className="text-base text-[#5F5F5F]">Finding the Right Melasma Treatment Dubai Plan for Your Skin</p>
            </div>

            {/* Stepper/Tabs */}
            <div className="grid lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
              <div className="lg:col-span-4 space-y-3">
                <button
                  onClick={() => setActiveTab('epidermal')}
                  className={`w-full flex justify-between items-center p-5 rounded-2xl text-left border font-bold transition-all ${activeTab === 'epidermal'
                    ? 'bg-[#1F5E4B] text-white border-[#1F5E4B] shadow-md'
                    : 'bg-[#FCFDFB] text-[#5F5F5F] border-gray-200 hover:border-[#1F5E4B]/30'
                    }`}
                >
                  <span>Epidermal Melasma</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === 'epidermal' ? 'translate-x-1' : ''}`} />
                </button>
                <button
                  onClick={() => setActiveTab('dermal')}
                  className={`w-full flex justify-between items-center p-5 rounded-2xl text-left border font-bold transition-all ${activeTab === 'dermal'
                    ? 'bg-[#1F5E4B] text-white border-[#1F5E4B] shadow-md'
                    : 'bg-[#FCFDFB] text-[#5F5F5F] border-gray-200 hover:border-[#1F5E4B]/30'
                    }`}
                >
                  <span>Dermal Melasma</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === 'dermal' ? 'translate-x-1' : ''}`} />
                </button>
                <button
                  onClick={() => setActiveTab('mixed')}
                  className={`w-full flex justify-between items-center p-5 rounded-2xl text-left border font-bold transition-all ${activeTab === 'mixed'
                    ? 'bg-[#1F5E4B] text-white border-[#1F5E4B] shadow-md'
                    : 'bg-[#FCFDFB] text-[#5F5F5F] border-gray-200 hover:border-[#1F5E4B]/30'
                    }`}
                >
                  <span>Mixed Melasma</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === 'mixed' ? 'translate-x-1' : ''}`} />
                </button>
              </div>

              <div className="lg:col-span-8">
                <div className="bg-[#F9F7F2] p-8 rounded-3xl border border-[#D4A574]/20 min-h-[220px] flex flex-col justify-between">
                  <div>
                    {activeTab === 'epidermal' && (
                      <>
                        <h3 className="text-xl font-bold text-[#1F5E4B] mb-3">Epidermal Melasma</h3>
                        <p className="text-[#5F5F5F] text-sm leading-relaxed">
                          Pigmentation sits in the upper layer of skin and tends to respond relatively well to topical treatments and peels.
                        </p>
                      </>
                    )}
                    {activeTab === 'dermal' && (
                      <>
                        <h3 className="text-xl font-bold text-[#1F5E4B] mb-3">Dermal Melasma</h3>
                        <p className="text-[#5F5F5F] text-sm leading-relaxed">
                          Pigmentation sits deeper in the skin, is generally more stubborn, and often requires a more conservative, longer-term approach.
                        </p>
                      </>
                    )}
                    {activeTab === 'mixed' && (
                      <>
                        <h3 className="text-xl font-bold text-[#1F5E4B] mb-3">Mixed Melasma</h3>
                        <p className="text-[#5F5F5F] text-sm leading-relaxed">
                          A combination of both, requiring a carefully balanced treatment strategy.
                        </p>
                      </>
                    )}
                  </div>
                  <div className="border-t border-gray-200/50 pt-4 mt-6 text-xs text-[#5F5F5F]">
                    <strong>Fitzpatrick Skin Type Considerations:</strong> Darker skin types are more prone to pigmentation reactions from aggressive treatments, so laser and peel settings must be adjusted carefully to avoid worsening the condition.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-16 md:py-24 px-4 bg-[#F5F1E8]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-3xl font-bold text-[#1A1A1A]">Why Choose RamaCare Polyclinic?</h2>
                <p className="text-sm text-[#5F5F5F] uppercase font-bold tracking-wide">
                  What Sets Our Melasma Treatment Dubai Approach Apart
                </p>
                <div className="space-y-4">
                  {chooseUs.map((w, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                      <span className="text-[#1A1A1A] text-sm sm:text-base font-semibold leading-relaxed">{w}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#1F5E4B] text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
                  <h3 className="text-xl font-bold mb-4">Evidence-Based Medicine</h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    Patients searching for the best melasma treatment Dubai has to offer are often looking for exactly this: a clinic that treats melasma as the layered, individual condition it actually is.
                  </p>
                </div>

                <div className="bg-white p-3 rounded-3xl border border-gray-150 shadow-sm">
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-2">
                    <Image
                      src="/images/Melasma treatment Dubai.jpg"
                      alt="RamaCare Polyclinic — modern dermatology clinic in Dubai"
                      title="RamaCare Polyclinic Jumeirah clinic interior"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p className="text-[10px] text-[#5F5F5F] text-center italic">
                    Our modern dermatology facility in Dubai, designed around your comfort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS & PROCESS */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
            {/* Left side: Benefits */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-2xl font-bold text-[#1A1A1A]">Benefits of Professional Melasma Treatment</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((b, idx) => (
                  <div key={idx} className="p-4 bg-[#FCFDFB] border border-gray-150 rounded-xl flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-700 leading-normal">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Process */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-2xl font-bold text-[#1A1A1A]">The Treatment Process at RamaCare</h3>
              <div className="space-y-3">
                {steps.map((s, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-[#F9F7F2] p-4 rounded-xl border border-[#D4A574]/20">
                    <span className="text-xs text-[#D4A574] font-extrabold">{s.num}</span>
                    <div>
                      <h5 className="font-bold text-xs sm:text-sm text-[#1A1A1A]">{s.name}</h5>
                      <p className="text-xs text-[#5F5F5F] leading-tight">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RECOVERY & AFTERCARE */}
        <section className="py-16 md:py-24 px-4 bg-[#F5F1E8]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-3xl font-bold text-[#1A1A1A]">Recovery & Aftercare</h2>
                <p className="text-base text-[#5F5F5F] leading-relaxed">
                  Melasma management doesn't end when you leave the clinic. Ongoing care plays a huge role in results, and consistency tends to matter more than any single treatment session.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {aftercare.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-gray-700 leading-normal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-150">
                  <h4 className="font-bold text-sm text-[#1A1A1A] mb-2">Patience Matters</h4>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed">
                    Melasma responds gradually, not overnight. Most patients notice changes in skin tone over a series of weeks or months rather than days, and it's common for improvement to happen unevenly across the face before it evens out. Sticking with the aftercare plan — even once patches start to fade — is often what determines whether results hold up over the following months.
                  </p>
                </div>
                <div className="bg-[#1F5E4B] text-white p-6 rounded-2xl shadow-md">
                  <h4 className="font-bold text-sm text-[#D4A574] mb-2">Working With Your Dermatologist</h4>
                  <p className="text-xs text-white/80 leading-relaxed">
                    It can be tempting to chase quick fixes from skincare aisles or social media trends, but melasma tends to respond best when aftercare is guided by a professional who understands your specific pigmentation depth and skin type.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PREVENTION TIPS */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-5">
                <div className="bg-[#1F5E4B] text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
                  <h3 className="text-2xl font-bold mb-4">Building Prevention Into Daily Life</h3>
                  <p className="text-xs text-white/85 leading-relaxed mb-4">
                    Prevention works best when it becomes routine rather than an occasional effort, especially during the hotter, sunnier months of the year. In a climate like Dubai's, that often means keeping sunscreen within reach at all times — in your bag, your car, and at your desk — rather than only remembering it before a day at the beach.
                  </p>
                  <p className="text-xs text-[#D4A574] font-semibold leading-relaxed">
                    Small habits, like choosing shaded parking or timing outdoor errands for early morning or evening hours, add up meaningfully over months and years of consistent practice.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-3xl font-bold text-[#1A1A1A]">Prevention Tips</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {preventions.map((p, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 bg-[#FCFDFB] border border-gray-150 rounded-xl">
                      <CheckCircle className="w-4 h-4 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-gray-700 leading-normal">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COST SECTION */}
        <section className="py-16 md:py-24 px-4 bg-[#F5F1E8] border-b border-gray-150">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">Melasma Treatment Cost in Dubai</h2>
            <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed">
              The cost of melasma treatment in Dubai depends on several factors — the severity and depth of pigmentation, your skin type, the treatments recommended, the number of sessions required, and how personalized your care plan needs to be.
            </p>
            <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed font-semibold">
              Because melasma varies so much from person to person, we don't believe in one-size-fits-all pricing. The best way to understand your treatment cost is through a personalized consultation, where your dermatologist can assess your skin and outline a plan tailored to your needs and budget.
            </p>
            <div className="pt-4">
              <a href="#book-now" className="inline-block px-8 py-4 bg-[#1F5E4B] hover:bg-[#153f32] text-white font-bold rounded-xl text-sm transition-all shadow-md">
                Schedule Your Consultation →
              </a>
            </div>
          </div>
        </section>

        {/* SEARCHABLE FAQ SECTION */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">Frequently Asked Questions</h2>
              <p className="text-base text-[#5F5F5F]">Browse our answers to popular questions regarding melasma treatment in Dubai.</p>
            </div>

            {/* Search Input */}
            <div className="relative max-w-md mx-auto mb-10">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#FCFDFB] border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1F5E4B] text-sm"
              />
              <Search className="w-5 h-5 text-[#5F5F5F] absolute left-4 top-1/2 transform -translate-y-1/2" />
            </div>

            {/* Accordions */}
            <div className="space-y-3">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className="bg-[#FCFDFB] rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full flex justify-between items-center p-5 text-left font-bold text-[#1A2521] hover:text-[#1F5E4B] transition-colors text-sm sm:text-base"
                    >
                      <span>{idx + 1}. {faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-[#5F5F5F] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-[#5F5F5F] text-base leading-relaxed border-t border-gray-100 bg-white">
                        {faq.answer}
                      </div>
                    )}
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
              badge: 'Personalized Skin Care',
              title: 'Melasma Treatment Dubai',
              description: 'Meet DHA-licensed dermatology experts at RamaCare Polyclinic and start your personalized skin restoration journey today.',
              getInTouchTitle: 'Get In Touch',
              requestAppointmentTitle: 'Request Appointment',
              submitButtonText: 'Confirm Consultation',
              contactInfo: {
                phone: '+971 04 286 2006',
                whatsapp: '971566597878',
                email: 'query@ramacarepolyclinic.com',
                address: {
                  line1: '12 Al Dhiyafah Rd - Jumeirah Terrace Building,',
                  line2: 'Ground Floor, Jumeirah 1 - Dubai'
                }
              },
              clinicHours: {
                weekdays: 'Sunday - Saturday:',
                weekdaysTime: '10:00 AM - 10:00 PM',
                friday: 'Friday:',
                fridayTime: '10:00 AM - 8:00 PM'
              },
              statCards: [
                { title: 'DHA Licensed', description: 'Certified Dermatologists' },
                { title: 'Advanced Analysis', description: 'Pigmentation depth test' },
                { title: 'Personalized Plans', description: 'No generic treatment' },
                { title: 'High Satisfaction', description: 'Patient Reviews' }
              ],
              concerns: [
                { value: 'melasma-treatment-dubai', label: 'Melasma Treatment' },
                { value: 'pigmentation-treatment-dubai', label: 'Hyperpigmentation' },
                { value: 'chemical-peel-for-melasma', label: 'Chemical Peel' },
                { value: 'laser-skin-treatment', label: 'Laser Treatment' }
              ]
            }}
          />
        </div>

        {/* DOCTORS SHOWCASE */}
        <DoctorsSection customDoctors={DOCTOR_GROUPS.DERMA} />

        {/* CONCLUSION */}
        <section className="py-16 md:py-24 px-4 bg-[#1F5E4B] text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Conclusion</h2>
            <div className="text-white/90 text-base sm:text-lg leading-relaxed">
              Melasma can be frustrating, especially in a sun-intensive city like Dubai, but you don't have to navigate it on your own. With the right diagnosis and a personalized approach, most patients see meaningful improvement in their skin tone and confidence.
            </div>
            <p className="text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
              At RamaCare Polyclinic, our DHA-licensed dermatology team is here to help you understand exactly what's happening with your skin and to build a treatment plan around your specific needs. If you've been searching for reliable melasma treatment Dubai clinics can stand behind, we'd love to see you for a personalized skin assessment.
            </p>
            <div className="w-16 h-0.5 bg-[#D4A574] mx-auto" />
            <div className="pt-4">
              <a href="/book-appointment" className="px-8 py-4 bg-[#D4A574] hover:bg-[#b08455] text-white font-bold rounded-xl text-sm transition-all shadow-md">
                Book Your Appointment at RamaCare Polyclinic Today →
              </a>
            </div>
          </div>
        </section>

        {/* Medical Disclaimer */}
        <section className="py-10 bg-gray-50 border-t border-gray-150 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong className="text-gray-700">Medical Disclaimer:</strong> This content is for informational purposes only and does not replace professional medical advice. Please consult a licensed dermatologist for a diagnosis and treatment plan tailored to your individual skin condition.
            </p>
          </div>
        </section>

        {/* CLINICAL RESOURCES & RELATED SERVICES */}
        <section className="py-12 bg-[#F9F7F2] border-t border-[#D4A574]/20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Internal Links Column */}
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#1F5E4B] rounded-full inline-block"></span>
                  Related Treatments & Services
                </h4>
                <p className="text-sm text-[#5F5F5F] mb-4">
                  Explore other specialized dermatology and aesthetic treatments available at RamaCare Polyclinic:
                </p>
                <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                  <a href="/services/aesthetic-dermatology-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Aesthetic Dermatology
                  </a>
                  <a href="/services/acne-treatment-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Acne Treatment
                  </a>
                  <a href="/services/acne-scar-treatment-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Acne Scar Treatment
                  </a>
                  <a href="/services/fractional-co2-laser-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Chemical Peel
                  </a>
                  <a href="/services/derma-roller-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Microneedling
                  </a>
                  <a href="/services/hydrafacial-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> HydraFacial
                  </a>
                  <a href="/services/laser-treatment-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Laser Skin Treatments
                  </a>
                  <a href="/services/face-prp-in-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> PRP Therapy
                  </a>
                  <a href="/services/general-physician-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> General Physician
                  </a>
                  <a href="/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Homepage
                  </a>
                  <a href="/contact-us/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium col-span-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Contact Our Team
                  </a>
                </div>
              </div>

              {/* External Links Column */}
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#D4A574] rounded-full inline-block"></span>
                  Clinical Reference Guidelines
                </h4>
                <p className="text-sm text-[#5F5F5F] mb-4">
                  Our clinical protocols align with standard guidelines established by leading dermatology and health organizations:
                </p>
                <ul className="space-y-2.5">
                  <li>
                    <a href="https://www.aad.org" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                      <ExternalLink className="w-3.5 h-3.5 text-[#1F5E4B]" />
                      <span>American Academy of Dermatology (AAD) <span className="text-xs text-[#8C8C8C] font-normal">— general melasma overview and patient education</span></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.nhs.uk" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                      <ExternalLink className="w-3.5 h-3.5 text-[#1F5E4B]" />
                      <span>NHS <span className="text-xs text-[#8C8C8C] font-normal">— melasma symptoms and causes overview</span></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mayoclinic.org" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                      <ExternalLink className="w-3.5 h-3.5 text-[#1F5E4B]" />
                      <span>Mayo Clinic <span className="text-xs text-[#8C8C8C] font-normal">— melasma condition overview</span></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.asds.net" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                      <ExternalLink className="w-3.5 h-3.5 text-[#1F5E4B]" />
                      <span>American Society for Dermatologic Surgery (ASDS) <span className="text-xs text-[#8C8C8C] font-normal">— pigmentation treatment procedures overview</span></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </section>
        {/* Content Reviewer Badge */}
        <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="/services/melasma-treatment-dubai/" />
      </div>
    </Layout>
  );
}
