import Layout from '../../../components/Layout';
import Head from "next/head";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import DoctorsSection from '../../../components/DoctorsSection';
import QuickNavigation from '../../../components/QuickNavigation';
import { subcategoryContent } from '../../data/subcategoryContent';
import {
  Footprints,
  Activity,
  Award,
  Calendar,
  ArrowRight,
  ChevronRight,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Zap,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Hand,
  Move,
  Dumbbell,
  Syringe,
  Waves,
  Radio,
  Layers,
  TrendingUp,
  ShoppingBag,
  Home as HomeIcon,
  Search,
  ClipboardCheck,
  Quote,
  AlertCircle,
  Stethoscope
} from 'lucide-react';

// Renders text containing {{Label|/href}} tokens as real inline links.
// This is how every internal link named in the source doc gets woven into
// the copy itself, rather than only appearing as a chip at the bottom of a section.
function LinkedText({ text, className }) {
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

export default function ShoulderPainTreatmentPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  const content = subcategoryContent['shoulder-pain-treatment-dubai'];
  const {
    seo,
    breadcrumbs,
    tableOfContents,
    images,
    hero,
    whatIs,
    causes,
    causesNote,
    symptoms,
    symptomsNote,
    riskFactors,
    riskFactorsNote,
    whenToSee,
    whenToSeeNote,
    diagnosis,
    treatmentIntro,
    treatmentOptions,
    treatmentNote,
    conditionsWeTreat,
    conditionsNote,
    benefits,
    benefitsNote,
    preventionTips,
    whyChooseUsIntro,
    whyChooseUs,
    whyChooseUsClosing,
    treatmentJourney,
    relatedServices,
    faqs,
    conclusion
  } = content;

  const navItems = [
    { id: 'what-is', label: 'What Is' },
    { id: 'causes', label: 'Causes' },
    { id: 'symptoms', label: 'Symptoms' },
    { id: 'diagnosis', label: 'Diagnosis' },
    { id: 'treatment', label: 'Treatment' },
    { id: 'conditions', label: 'Conditions' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'prevention', label: 'Prevention' },
    { id: 'journey', label: 'Journey' },
    { id: 'faqs', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' }
  ];

  const iconMap = {
    Hand,
    Move,
    Dumbbell,
    Syringe,
    Waves,
    Radio,
    Zap,
    Layers,
    Footprints,
    TrendingUp,
    ShoppingBag,
    Calendar,
    Activity,
    Home: HomeIcon
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const heroBlobStyleOne = { transform: 'translateY(' + (scrollY * 0.25) + 'px)' };
  const heroBlobStyleTwo = { transform: 'translateY(' + (scrollY * -0.15) + 'px)' };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(function (f) {
      return {
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer }
      };
    })
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": (breadcrumbs || []).map(function (b, i) {
      return {
        "@type": "ListItem",
        "position": i + 1,
        "name": b.label,
        "item": b.href && b.href.startsWith('http') ? b.href : "https://ramacarepolyclinic.ae" + b.href
      };
    })
  };

  const medicalConditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Shoulder Pain",
    "alternateName": "Frozen Shoulder, Rotator Cuff Injury, Shoulder Impingement",
    "signOrSymptom": symptoms.map(function (s) { return { "@type": "MedicalSymptom", "name": s }; }),
    "riskFactor": riskFactors.map(function (r) { return { "@type": "MedicalRiskFactor", "name": r }; }),
    "possibleTreatment": treatmentOptions.map(function (t) { return { "@type": "MedicalTherapy", "name": t.title }; })
  };

  const medicalTherapySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": treatmentOptions.map(function (t, i) {
      return {
        "@type": "ListItem",
        "position": i + 1,
        "item": { "@type": "MedicalTherapy", "name": t.title }
      };
    })
  };

  const medicalClinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "RamaCare Polyclinic",
    "url": seo.canonical,
    "telephone": "+97142862006",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1",
      "postalCode": "393558",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Sunday","Monday","Tuesday","Wednesday","Thursday","Saturday"], "opens": "10:00", "closes": "22:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "10:00", "closes": "20:00" }
    ],
    "medicalSpecialty": "Physiotherapy"
  };

  // Separate LocalBusiness schema, as recommended in the doc for Google Maps / local pack visibility.
  // No aggregateRating or review data included — that would need real, verifiable figures first.
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "RamaCare Polyclinic",
    "image": images && images.hero ? images.hero.src : undefined,
    "url": seo.canonical,
    "telephone": "+97142862006",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1",
      "postalCode": "393558",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    }
  };

  const physicianSchema = content.doctors && content.doctors.doctors && content.doctors.doctors.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": content.doctors.doctors.map(function (doc, i) {
      return {
        "@type": "ListItem",
        "position": i + 1,
        "item": { "@type": "Physician", "name": doc.name, "medicalSpecialty": "Physiotherapy" }
      };
    })
  } : null;

  return (
    <Layout>
      <Head>
        <title key="title">{seo.title}</title>
        <meta name="description" content={seo.metaDescription} key="description" />
        <meta name="keywords" content={seo.keywords} />
        <link rel="canonical" href={seo.canonical} />
        <meta property="og:title" content={seo.metaTitle} />
        <meta property="og:description" content={seo.metaDescription} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalTherapySchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        {physicianSchema ? (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }} />
        ) : null}
      </Head>

      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 ? (
        <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-[#5F5F5F]">
              {breadcrumbs.map(function (crumb, i) {
                const isLast = i === breadcrumbs.length - 1;
                return (
                  <li key={i} className="flex items-center gap-1">
                    {isLast ? (
                      <span className="text-[#1F5E4B] font-medium">{crumb.label}</span>
                    ) : (
                      <>
                        <a href={crumb.href} className="hover:text-[#1F5E4B] transition-colors">
                          {crumb.label}
                        </a>
                        <ChevronRight className="w-3.5 h-3.5 text-[#5F5F5F]/50" />
                      </>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </nav>
      ) : null}

      {/* Hero — now with the hero image (previously the earlier template used no imagery at all) */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0F3D30] via-[#1F5E4B] to-[#2A7D63]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[28rem] h-[28rem] bg-white/5 rounded-full -top-32 -right-20 blur-3xl" style={heroBlobStyleOne}></div>
          <div className="absolute w-72 h-72 bg-white/10 rounded-full bottom-10 left-10 blur-2xl" style={heroBlobStyleTwo}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-5"
            >
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                <Activity className="w-4 h-4" />
                <span>{hero.badge}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {hero.heading}
              </h1>

              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                {hero.subheading}
              </p>

              <p className="text-lg text-white/80 leading-relaxed max-w-xl">{hero.intro}</p>
              <p className="text-base text-white/75 leading-relaxed max-w-xl">{hero.intro2}</p>
              <p className="text-base text-white/70 leading-relaxed max-w-xl">{hero.guideNote}</p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#book-now"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#1F5E4B] px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Calendar className="w-5 h-5" />
                  Book Consultation
                </a>
                <a
                  href="https://wa.me/971566597878"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>

              <div className="flex flex-wrap gap-6 pt-3">
                {hero.stats.map(function (stat, i) {
                  return (
                    <div key={i} className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">{stat.value}</span>
                      <span className="text-white/70 text-sm">{stat.label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3] lg:aspect-[1.1] bg-gradient-to-br from-[#1F5E4B] to-[#38D39F] flex items-center justify-center"
            >
              <img
                src="/images/shoulder-pain-treatment-dubai.jpg"
                alt="Shoulder Pain Treatment Dubai at RamaCare Polyclinic"
                className="absolute inset-0 w-full h-full object-cover z-10"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="text-center p-6 relative z-0">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Activity className="w-12 h-12 text-white" />
                </div>
                <p className="text-white text-lg font-bold">Shoulder Pain Specialist Care</p>
                <p className="text-white/70 text-xs mt-1">DHA-Licensed Specialist Physiotherapists in Jumeirah, Dubai</p>
              </div>
            </motion.div>
          </div>

          <p className="text-white/70 text-sm max-w-3xl mt-10">{hero.ctaNote}</p>
        </div>
      </section>

      <QuickNavigation navItems={navItems} />

      {/* What Is Shoulder Pain — paired with anatomy illustration */}
      <section id="what-is" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center"
          >
            {whatIs.title}
          </motion.h2>

          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {whatIs.paragraphs.map(function (p, i) {
                return <p key={i} className="text-lg text-[#5F5F5F] leading-relaxed">{p}</p>;
              })}

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {whatIs.categories.map(function (cat, i) {
                  return (
                    <div key={i} className="bg-[#F9F7F2] rounded-xl p-5">
                      <h4 className="font-bold text-[#1A1A1A] mb-1">{cat.title}</h4>
                      <p className="text-sm text-[#5F5F5F] leading-relaxed">{cat.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-start gap-3 bg-[#1F5E4B]/5 border border-[#1F5E4B]/15 rounded-xl p-5">
                <AlertCircle className="w-5 h-5 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                <p className="text-[#1A1A1A] text-sm leading-relaxed">{whatIs.note}</p>
              </div>
            </motion.div>

            {images && images.anatomy ? (
              <motion.figure
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:sticky lg:top-24 w-full"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-[#1F5E4B]/10 to-[#38D39F]/10 rounded-2xl overflow-hidden relative border border-[#1F5E4B]/20 flex items-center justify-center">
                  <img
                    src="/images/shoulder-joint-anatomy-dubai.jpg"
                    alt="Shoulder joint anatomy showing rotator cuff and bursa"
                    className="absolute inset-0 w-full h-full object-cover z-10"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="text-center p-6 relative z-0">
                    <div className="w-24 h-24 bg-[#1F5E4B]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Activity className="w-12 h-12 text-[#1F5E4B]" />
                    </div>
                    <p className="text-[#1F5E4B] text-lg font-bold mb-1">Shoulder joint anatomy</p>
                    <p className="text-gray-600 text-xs max-w-xs mx-auto">Shoulder joint anatomy showing rotator cuff and bursa</p>
                  </div>
                </div>
                <figcaption className="text-sm text-[#5F5F5F] mt-3 text-center">{images.anatomy.caption}</figcaption>
              </motion.figure>
            ) : null}
          </div>
        </div>
      </section>

      {/* Common Causes — with the causes infographic */}
      <section id="causes" className="py-20 px-4 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          {images && images.causesInfographic ? (
            <motion.figure
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-24 w-full"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-[#38D39F]/10 to-[#1F5E4B]/10 rounded-2xl overflow-hidden relative border border-[#1F5E4B]/20 flex items-center justify-center">
                <img
                  src="/images/shoulder-pain-causes-infographic.jpg"
                  alt="Common causes of shoulder pain infographic Dubai"
                  className="absolute inset-0 w-full h-full object-cover z-10"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="text-center p-6 relative z-0">
                  <div className="w-24 h-24 bg-[#38D39F]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-12 h-12 text-[#38D39F]" />
                  </div>
                  <p className="text-[#1F5E4B] text-lg font-bold mb-1">Shoulder Pain Causes</p>
                  <p className="text-gray-600 text-xs max-w-xs mx-auto">Common causes of shoulder pain infographic Dubai</p>
                </div>
              </div>
              <figcaption className="text-sm text-[#5F5F5F] mt-3 text-center">{images.causesInfographic.caption}</figcaption>
            </motion.figure>
          ) : null}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">Common Causes of Shoulder Pain</h2>
            <p className="text-[#5F5F5F] mb-6">Shoulder pain rarely has a single cause — it's usually the result of one or more contributing factors. Some of the most frequent causes we see at our clinic include:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {causes.map(function (c, i) {
                return (
                  <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <ArrowRight className="w-4 h-4 text-[#1F5E4B] mt-1 flex-shrink-0" />
                    <span className="text-[#1A1A1A] text-sm">{c}</span>
                  </div>
                );
              })}
            </div>
            <p className="text-[#5F5F5F] leading-relaxed mt-6">{causesNote}</p>
          </motion.div>
        </div>
      </section>

      {/* Symptoms + Risk Factors + When to See a Physiotherapist */}
      <section id="symptoms" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">Symptoms You Shouldn't Ignore</h2>
              <div className="space-y-3">
                {symptoms.map(function (s, i) {
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 bg-[#F9F7F2] p-4 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                      <span className="text-[#1A1A1A]">{s}</span>
                    </motion.div>
                  );
                })}
              </div>
              <LinkedText text={symptomsNote} className="block text-[#5F5F5F] leading-relaxed" />
            </motion.div>

            <motion.div
              id="risk-factors"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 self-stretch flex-shrink-0"
            >
              <div className="bg-gradient-to-br from-[#1F5E4B] to-[#2A7D63] rounded-3xl p-8 sm:p-10 lg:p-12 text-white space-y-6 h-full flex flex-col justify-between shadow-2xl shadow-[#1F5E4B]/20">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center backdrop-blur-sm mb-2">
                    <Users className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold">Who Is Most at Risk?</h3>
                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 pt-2">
                    {riskFactors.map(function (r, i) {
                      return (
                        <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
                          <CheckCircle className="w-5 h-5 text-white/90 mt-0.5 flex-shrink-0" />
                          <span className="text-white/95 text-base leading-relaxed">{r}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="pt-6 border-t border-white/20 mt-4">
                  <p className="text-white/90 text-base sm:text-lg leading-relaxed">{riskFactorsNote}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            id="when-to-see"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F9F7F2] rounded-2xl p-8 mt-12"
          >
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-3">
              <Stethoscope className="w-6 h-6 text-[#1F5E4B]" />
              When Should You See a Physiotherapist?
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {whenToSee.map(function (item, i) {
                return (
                  <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <Clock className="w-4 h-4 text-[#1F5E4B] mt-1 flex-shrink-0" />
                    <span className="text-[#1A1A1A] text-sm">{item}</span>
                  </div>
                );
              })}
            </div>
            <p className="text-[#5F5F5F] leading-relaxed mt-6">{whenToSeeNote}</p>
          </motion.div>
        </div>
      </section>

      {/* Diagnosis — with assessment image */}
      <section id="diagnosis" className="py-20 px-4 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-[#1F5E4B]/10 text-[#1F5E4B] px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Search className="w-4 h-4" />
              Diagnosis
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">How We Diagnose Shoulder Pain at RamaCare</h2>
            <p className="text-lg text-[#5F5F5F] max-w-3xl mx-auto">{diagnosis.intro}</p>
          </motion.div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center mt-12">
            {images && images.diagnosisExam ? (
              <motion.figure initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#1F5E4B]/10 to-[#38D39F]/10 rounded-2xl overflow-hidden relative border border-[#1F5E4B]/20 flex items-center justify-center">
                  <img
                    src="/images/physiotherapist-assessing-shoulder-pain.jpg"
                    alt="Physiotherapist assessing shoulder pain in Dubai clinic"
                    className="absolute inset-0 w-full h-full object-cover z-10"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="text-center p-6 relative z-0">
                    <div className="w-24 h-24 bg-[#1F5E4B]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Stethoscope className="w-12 h-12 text-[#1F5E4B]" />
                    </div>
                    <p className="text-[#1F5E4B] text-lg font-bold mb-1">Shoulder Pain Assessment</p>
                    <p className="text-gray-600 text-xs max-w-xs mx-auto">Physiotherapist assessing shoulder pain in Dubai clinic</p>
                  </div>
                </div>
                <figcaption className="text-sm text-[#5F5F5F] mt-3 text-center">{images.diagnosisExam.caption}</figcaption>
              </motion.figure>
            ) : null}

            <div className="grid sm:grid-cols-2 gap-5">
              {diagnosis.steps.map(function (step, i) {
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white rounded-xl p-6"
                  >
                    <div className="w-9 h-9 bg-[#1F5E4B] text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">
                      {i + 1}
                    </div>
                    <h4 className="font-bold text-[#1A1A1A] mb-2 text-sm">{step.title}</h4>
                    <p className="text-xs text-[#5F5F5F] leading-relaxed">{step.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <p className="text-center text-[#5F5F5F] leading-relaxed max-w-4xl mx-auto mt-10">{diagnosis.note}</p>
        </div>
      </section>

      {/* Treatment Options — manual therapy banner + inline internal links via LinkedText */}
      <section id="treatment" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Shoulder Pain Treatments at RamaCare Polyclinic
            </h2>
            <p className="text-lg text-[#5F5F5F] max-w-4xl mx-auto leading-relaxed">{treatmentIntro}</p>
          </motion.div>



          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatmentOptions.map(function (option, i) {
              const IconComp = iconMap[option.icon];
              const isDryNeedling = option.title === 'Dry Needling';
              const isRotatorCuff = option.title === 'Rotator Cuff Strengthening';
              const isStretching = option.title === 'Stretching Programs';
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 6) * 0.08 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-[#1F5E4B]/30 overflow-hidden">

                  <div className="p-6">
                    <div className="w-12 h-12 bg-[#1F5E4B]/10 rounded-xl flex items-center justify-center mb-4">
                      {IconComp ? <IconComp className="w-6 h-6 text-[#1F5E4B]" /> : null}
                    </div>
                    <h3 className="font-bold text-[#1A1A1A] mb-2">{option.title}</h3>
                    <LinkedText text={option.description} className="text-sm text-[#5F5F5F] leading-relaxed" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p className="text-center text-[#5F5F5F] leading-relaxed max-w-4xl mx-auto mt-10">{treatmentNote}</p>
        </div>
      </section>

      {/* Conditions We Treat — with inline internal links */}
      <section id="conditions" className="py-20 px-4 bg-[#1F5E4B]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            Conditions We Treat
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {conditionsWeTreat.map(function (c, i) {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 text-center"
                >
                  <span className="text-white text-sm font-medium">{c}</span>
                </motion.div>
              );
            })}
          </div>
         <LinkedText
  text={conditionsNote}
  className="block text-white/85 leading-relaxed max-w-4xl mx-auto mt-10 text-center [&_a]:text-white [&_a]:underline [&_a]:hover:text-[#D4B06A]" />
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 px-4 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            Benefits of Physiotherapy for Shoulder Pain
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(function (b, i) {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <CheckCircle className="w-6 h-6 text-[#1F5E4B] mb-3" />
                  <p className="text-[#1A1A1A] font-medium">{b}</p>
                </motion.div>
              );
            })}
          </div>
          <p className="text-center text-[#5F5F5F] leading-relaxed max-w-3xl mx-auto mt-10">{benefitsNote}</p>
        </div>
      </section>

      {/* Prevention Tips — with stretching image */}
      <section id="prevention" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8"
          >
            Shoulder Pain Prevention Tips
          </motion.h2>
          <p className="text-[#5F5F5F] mb-6">Once your shoulder has recovered, these habits can help reduce the risk of the pain returning:</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {preventionTips.map(function (tip, i) {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 bg-[#F9F7F2] p-5 rounded-xl hover:bg-[#F5F1E8] transition-colors"
                >
                  <Shield className="w-5 h-5 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                  <span className="text-[#1A1A1A] text-sm">{tip}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us — with rehab equipment image + inline links in intro/closing */}
      <section className="py-20 px-4 bg-[#1F5E4B]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose RamaCare Polyclinic?</h2>
            <p className="text-white/85 max-w-4xl mx-auto leading-relaxed">{whyChooseUsIntro}</p>
          </motion.div>



          <div className="grid md:grid-cols-2 gap-6">
            {whyChooseUs.map(function (item, i) {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20"
                >
                  <Award className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white/95">{item}</span>
                </motion.div>
              );
            })}
          </div>

          <LinkedText
            text={whyChooseUsClosing}
            className="block text-white/80 leading-relaxed max-w-4xl mx-auto mt-10 text-center"
          />

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {relatedServices.map(function (svc, i) {
              return (
                <a
                  key={i}
                  href={svc.href}
                  className="text-sm bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full border border-white/20 transition-colors"
                >
                  {svc.label}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatment Journey */}
      <section id="journey" className="py-20 px-4 bg-[#F5F1E8]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center"
          >
            Your Treatment Journey
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-3">
            {treatmentJourney.stages.map(function (stage, i) {
              const isLast = i === treatmentJourney.stages.length - 1;
              return (
                <div key={i} className="flex items-center gap-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-white rounded-full px-5 py-3 shadow-sm border border-[#1F5E4B]/15"
                  >
                    <span className="text-[#1A1A1A] text-sm font-semibold">{stage}</span>
                  </motion.div>
                  {!isLast ? <ArrowRight className="w-4 h-4 text-[#1F5E4B]/50 flex-shrink-0" /> : null}
                </div>
              );
            })}
          </div>
          <p className="text-center text-[#5F5F5F] leading-relaxed max-w-3xl mx-auto mt-10">{treatmentJourney.note}</p>
        </div>
      </section>

      <DoctorsSection content={content ? content.doctors : null} />

      {/* FAQ */}
      <section id="faqs" className="py-20 px-4 bg-[#F9F7F2]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Frequently Asked Questions - Shoulder Pain Treatment Dubai
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map(function (faq, index) {
              const isOpen = openFaq === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md"
                >
                  <button
                    onClick={function () { toggleFaq(index); }}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F9F7F2] transition-colors"
                  >
                    <span className="text-lg font-semibold text-[#1A1A1A] pr-4">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#1F5E4B] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#1F5E4B] flex-shrink-0" />
                    )}
                  </button>
                  {isOpen ? (
                    <div className="px-6 pb-6">
                      <p className="text-[#5F5F5F] leading-relaxed">{faq.answer}</p>
                    </div>
                  ) : null}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conclusion — with final CTA banner image */}
      {conclusion ? (
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Quote className="w-10 h-10 text-[#1F5E4B]/30 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">{conclusion.title}</h2>
              <div className="space-y-4 mb-8">
                {conclusion.paragraphs.map(function (p, i) {
                  return <p key={i} className="text-lg text-[#5F5F5F] leading-relaxed">{p}</p>;
                })}
              </div>



              <p className="text-lg font-medium text-[#1F5E4B] mb-8">{conclusion.ctaText}</p>
              <a
                href="#book-now"
                className="inline-flex items-center justify-center gap-2 bg-[#1F5E4B] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#0F3D30] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Calendar className="w-5 h-5" />
                Book Your Assessment
              </a>
            </motion.div>
          </div>
        </section>
      ) : null}

      {/* Content Reviewer Badge */}
      <ContentReviewBadge doctorName="Jeena Mathew" />

      {/* CLINICAL BOOKING CONSULTATION / LEAD FORM */}
      <div id="book-now">
        <BookConsultation
          content={{
            badge: 'Start Your Recovery',
            title: 'Book Shoulder Pain Treatment in Dubai Today',
            description: 'Get back to comfortable, pain-free shoulder movement with evidence-based care at RamaCare Polyclinic.',
            getInTouchTitle: 'Get In Touch',
            requestAppointmentTitle: 'Request Appointment',
            submitButtonText: 'Confirm Free Consultation',
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
              { title: 'DHA Licensed', description: 'Certified Facility' },
              { title: 'Personalized Plans', description: 'Built Around Your Assessment' },
              { title: 'Multidisciplinary Care', description: 'Physio + Medical Team' },
              { title: 'Flexible Scheduling', description: 'Routine & Urgent Cases' }
            ]
          }}
        />
      </div>
    </Layout>
  );
}