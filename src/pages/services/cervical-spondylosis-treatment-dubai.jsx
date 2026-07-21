import Layout from '../../../components/Layout';
import Head from "next/head";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BookConsultation from '../../../components/BookConsultation';
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

export default function CervicalSpondylosisTreatmentPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [activeExercise, setActiveExercise] = useState(0);
  const content = subcategoryContent['cervical-spondylosis-treatment-dubai'];
  const {
    seo,
    breadcrumbs,
    images,
    hero,
    whatIs,
    symptoms,
    causes,
    riskFactors,
    diagnosis,
    treatmentOptions,
    benefits,
    exercises,
    recoveryTimeline,
    preventionTips,
    whyChooseUs,
    faqs,
    conclusion
  } = content;

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
        "item": b.href && b.href.startsWith('http') ? b.href : "https://www.ramacarepolyclinic.com" + b.href
      };
    })
  };

  const medicalConditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Cervical Spondylosis",
    "alternateName": "Neck Arthritis, Cervical Osteoarthritis, Neck Wear and Tear",
    "signOrSymptom": symptoms.list.map(function (s) { return { "@type": "MedicalSymptom", "name": s }; }),
    "riskFactor": riskFactors.list.map(function (r) { return { "@type": "MedicalRiskFactor", "name": r }; }),
    "possibleTreatment": treatmentOptions.options.map(function (t) { return { "@type": "MedicalTherapy", "name": t.title, "description": t.description }; })
  };

  const medicalTherapySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": treatmentOptions.options.map(function (t, i) {
      return {
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "MedicalTherapy",
          "name": t.title,
          "description": t.description
        }
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
      "streetAddress": "Jumeirah 1 ground floor, Jumeirah Terrace Building",
      "postalCode": "393558",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"], "opens": "10:00", "closes": "22:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "10:00", "closes": "20:00" }
    ],
    "medicalSpecialty": "Physiotherapy"
  };

  const physicianSchema = content.doctors && content.doctors.doctors && content.doctors.doctors.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": content.doctors.doctors.map(function (doc, i) {
      return {
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Physician",
          "name": doc.name,
          "medicalSpecialty": "Physiotherapy"
        }
      };
    })
  } : null;

  const navItems = [
    { id: 'what-is', label: 'What Is' },
    { id: 'symptoms', label: 'Symptoms' },
    { id: 'causes', label: 'Causes & Risks' },
    { id: 'diagnosis', label: 'Diagnosis' },
    { id: 'treatment', label: 'Treatment' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'exercises', label: 'Exercises' },
    { id: 'recovery', label: 'Recovery' },
    { id: 'prevention', label: 'Prevention' },
    { id: 'faqs', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' }
  ];

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalTherapySchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema) }}
        />
        {physicianSchema ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
          />
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

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0F3D30] via-[#1F5E4B] to-[#2A7D63]">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-[28rem] h-[28rem] bg-white/5 rounded-full -top-32 -right-20 blur-3xl"
            style={heroBlobStyleOne}
          ></div>
          <div
            className="absolute w-72 h-72 bg-white/10 rounded-full bottom-10 left-10 blur-2xl"
            style={heroBlobStyleTwo}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-6"
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

              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                {hero.intro}
              </p>

              <p className="text-base text-white/75 leading-relaxed max-w-xl">
                {hero.intro2}
              </p>

              {hero.guideNote ? (
                <p className="text-base text-white/70 leading-relaxed max-w-xl">
                  {hero.guideNote}
                </p>
              ) : null}

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

              <div className="flex flex-wrap gap-6 pt-4">
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
              className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3] lg:aspect-[1.1]"
            >
              <img
                src={images.anatomy ? images.anatomy.src : ""}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D30]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-[#1F5E4B]/10">
                <p className="text-[#1F5E4B] font-bold text-sm">Cervical Spine Specialist Care</p>
                <p className="text-[#5F5F5F] text-xs mt-1">DHA-Licensed Specialist Physiotherapists in Jumeirah, Dubai</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <QuickNavigation navItems={navItems} />

      {/* What Is Cervical Spondylosis? */}
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
                return (
                  <p key={i} className="text-lg text-[#5F5F5F] leading-relaxed">{p}</p>
                );
              })}

              <div className="space-y-6 pt-4">
                <div className="bg-[#F9F7F2] p-6 rounded-xl border border-[#1F5E4B]/5">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{whatIs.anatomyTitle}</h3>
                  <p className="text-[#5F5F5F] leading-relaxed text-sm">{whatIs.anatomyParagraph}</p>
                </div>

                <div className="bg-[#F9F7F2] p-6 rounded-xl border border-[#1F5E4B]/5">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{whatIs.degenerationTitle}</h3>
                  <p className="text-[#5F5F5F] leading-relaxed text-sm">{whatIs.degenerationParagraph}</p>
                </div>

                <div className="bg-[#F9F7F2] p-6 rounded-xl border border-[#1F5E4B]/5">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{whatIs.slippedDiscTitle}</h3>
                  <p className="text-[#5F5F5F] leading-relaxed text-sm">{whatIs.slippedDiscParagraph}</p>
                </div>
              </div>
            </motion.div>

            {images && images.physiotherapySession ? (
              <motion.figure
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:sticky lg:top-24 space-y-6"
              >
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <img
                    src={images.physiotherapySession.src}
                    alt={images.physiotherapySession.alt}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                </div>
                <figcaption className="text-sm text-[#5F5F5F] text-center italic">
                  {images.physiotherapySession.caption}
                </figcaption>

                <div className="bg-[#1F5E4B] text-white rounded-2xl p-6 shadow-md">
                  <AlertCircle className="w-8 h-8 text-white/95 mb-3" />
                  <h4 className="font-bold text-lg mb-2">{whatIs.earlyTreatmentTitle}</h4>
                  <p className="text-white/85 text-xs leading-relaxed">{whatIs.earlyTreatmentParagraph}</p>
                </div>
              </motion.figure>
            ) : null}
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section id="symptoms" className="py-20 px-4 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                {symptoms.title}
              </h2>
              <p className="text-lg text-[#5F5F5F] leading-relaxed">{symptoms.intro}</p>

              <div className="grid sm:grid-cols-1 gap-3">
                {symptoms.list.map(function (s, i) {
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
                    >
                      <CheckCircle className="w-5 h-5 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                      <span className="text-[#1A1A1A] text-sm font-medium">{s}</span>
                    </motion.div>
                  );
                })}
              </div>

              <div className="bg-[#1F5E4B]/5 border border-[#1F5E4B]/15 rounded-xl p-5 mt-4">
                <p className="text-[#1A1A1A] text-sm leading-relaxed font-medium">{symptoms.note}</p>
              </div>
            </motion.div>

            <div className="space-y-6 lg:sticky lg:top-24">
              {images && images.postureCorrection ? (
                <motion.figure
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}>
                  <img
                    src={images.postureCorrection.src}
                    alt={images.postureCorrection.alt}
                    loading="lazy"
                    className="w-full rounded-2xl shadow-lg border border-gray-100"
                  />
                  <figcaption className="text-sm text-[#5F5F5F] mt-3 text-center">
                    {images.postureCorrection.caption}
                  </figcaption>
                </motion.figure>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Causes & Risk Factors */}
      <section id="causes" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                {causes.title}
              </h2>
              <p className="text-[#5F5F5F]">{causes.intro}</p>

              <div className="grid sm:grid-cols-2 gap-4">
                {causes.list.map(function (c, i) {
                  return (
                    <div key={i} className="flex items-start gap-3 bg-[#F9F7F2] p-5 rounded-xl border border-[#1F5E4B]/5 hover:border-[#1F5E4B]/20 transition-all">
                      <ArrowRight className="w-4 h-4 text-[#1F5E4B] mt-1 flex-shrink-0" />
                      <span className="text-[#1A1A1A] text-sm font-medium">{c}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1F5E4B] rounded-2xl p-8 text-white space-y-4"
            >
              <Users className="w-10 h-10 mb-2 text-white/90" />
              <h3 className="text-2xl font-bold text-white">{riskFactors.title}</h3>
              <div className="space-y-3">
                {riskFactors.list.map(function (r, i) {
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-white/80 mt-1 flex-shrink-0" />
                      <span className="text-white/95 text-sm">{r}</span>
                    </div>
                  );
                })}
              </div>
              <p className="text-white/80 text-xs leading-relaxed pt-4 border-t border-white/20">
                {riskFactors.note}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diagnosis */}
      <section id="diagnosis" className="py-20 px-4 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#1F5E4B]/10 text-[#1F5E4B] px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Search className="w-4 h-4" />
              Diagnosis
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              {diagnosis.title}
            </h2>
            <p className="text-lg text-[#5F5F5F] max-w-3xl mx-auto">{diagnosis.intro}</p>
          </motion.div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center mt-12">
            {images && images.ergonomics ? (
              <motion.figure
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <img
                  src={images.ergonomics.src}
                  alt={images.ergonomics.alt}
                  loading="lazy"
                  className="w-full rounded-2xl shadow-lg border border-gray-100"
                />
                <figcaption className="text-sm text-[#5F5F5F] text-center">
                  {images.ergonomics.caption}
                </figcaption>
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
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-50">
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-[#5F5F5F] leading-relaxed max-w-4xl mx-auto mt-12 text-sm font-medium">
            {diagnosis.note}
          </motion.p>
        </div>
      </section>

      {/* Treatment Options */}
      <section id="treatment" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              {treatmentOptions.title}
            </h2>
            <p className="text-lg text-[#5F5F5F] max-w-4xl mx-auto leading-relaxed">{treatmentOptions.intro}</p>
          </motion.div>

          <div className="bg-[#F9F7F2] p-8 rounded-2xl border border-[#1F5E4B]/5 mb-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 text-center">{treatmentOptions.physioTitle}</h3>
            <p className="text-[#5F5F5F] leading-relaxed text-center">{treatmentOptions.physioParagraph}</p>
          </div>

          {images && images.traction ? (
            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14 max-w-4xl mx-auto"
            >
          
              <figcaption className="text-sm text-[#5F5F5F] mt-3 text-center font-medium">{images.traction.caption}</figcaption>
            </motion.figure>
          ) : null}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatmentOptions.options.map(function (option, i) {
              const IconComp = iconMap[option.icon];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 6) * 0.08 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-[#1F5E4B]/30 p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-[#1F5E4B]/10 rounded-xl flex items-center justify-center mb-4">
                      {IconComp ? <IconComp className="w-6 h-6 text-[#1F5E4B]" /> : null}
                    </div>
                    <h3 className="font-bold text-[#1A1A1A] mb-2">{option.title}</h3>
                    <p className="text-sm text-[#5F5F5F] leading-relaxed">{option.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <p className="text-center text-[#5F5F5F] leading-relaxed max-w-4xl mx-auto mt-12 text-sm font-medium">
            {treatmentOptions.note}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 px-4 bg-[#1F5E4B]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            {benefits.title}
          </motion.h2>
          <p className="text-white/80 max-w-2xl mx-auto text-center mb-12">{benefits.intro}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.list.map(function (b, i) {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 flex flex-col items-center text-center">
                  <CheckCircle className="w-8 h-8 text-white mb-4" />
                  <p className="text-white font-medium text-sm leading-relaxed">{b}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Exercises */}
      <section id="exercises" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              {exercises.title}
            </h2>
            <p className="text-lg text-[#5F5F5F] max-w-3xl mx-auto">{exercises.intro}</p>
          </motion.div>

          <div className="grid md:grid-cols-[1fr_1.4fr] gap-8">
            <div className="space-y-2">
              {exercises.list.map(function (ex, i) {
                const isActive = activeExercise === i;
                return (
                  <button
                    key={i}
                    onClick={function () { setActiveExercise(i); }}
                    className={
                      "w-full text-left px-5 py-4 rounded-xl font-medium transition-all flex items-center gap-3 " +
                      (isActive ? "bg-[#1F5E4B] text-white shadow-lg" : "bg-[#F9F7F2] text-[#1A1A1A] hover:bg-[#F5F1E8]")
                    }
                  >
                    <span
                      className={
                        "w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 " +
                        (isActive ? "bg-white text-[#1F5E4B]" : "bg-[#1F5E4B] text-white")
                      }
                    >
                      {i + 1}
                    </span>
                    {ex.name}
                  </button>
                );
              })}
            </div>

            <motion.div
              key={activeExercise}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#F5F1E8] rounded-2xl overflow-hidden p-8 flex flex-col justify-center border border-gray-100"
            >
              <Activity className="w-10 h-10 text-[#1F5E4B] mb-4 animate-pulse" />
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                {exercises.list[activeExercise].name}
              </h3>
              <p className="text-lg text-[#5F5F5F] leading-relaxed">
                {exercises.list[activeExercise].description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section id="recovery" className="py-20 px-4 bg-[#F5F1E8]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              {recoveryTimeline.title}
            </h2>
            <p className="text-lg text-[#5F5F5F] max-w-3xl mx-auto">{recoveryTimeline.intro}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 bg-[#1F5E4B]/30"></div>
            {recoveryTimeline.stages.map(function (stage, i) {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative bg-white rounded-2xl p-8 shadow-md text-center"
                >
                  <div className="w-14 h-14 bg-[#1F5E4B] text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] text-lg mb-1">{stage.stage}</h3>
                  <p className="text-[#1F5E4B] font-semibold mb-4">{stage.duration}</p>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">{stage.description}</p>
                </motion.div>
              );
            })}
          </div>

          <p className="text-center text-[#5F5F5F] leading-relaxed max-w-3xl mx-auto mt-10 text-sm font-medium">
            {recoveryTimeline.note}
          </p>
        </div>
      </section>

      {/* Prevention Tips */}
      <section id="prevention" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              {preventionTips.title}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {preventionTips.list.map(function (tip, i) {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3 bg-[#F9F7F2] p-6 rounded-xl hover:bg-[#F5F1E8] border border-[#1F5E4B]/5 transition-colors"
                >
                  <Shield className="w-5 h-5 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                  <span className="text-[#1A1A1A] text-sm font-medium">{tip}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-[#1F5E4B]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {whyChooseUs.title}
            </h2>
            <p className="text-white/85 max-w-4xl mx-auto leading-relaxed">
              {whyChooseUs.intro}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {whyChooseUs.list.map(function (item, i) {
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/80 leading-relaxed max-w-4xl mx-auto mt-10 text-center text-sm"
          >
            {whyChooseUs.note}
          </motion.p>
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
              Frequently Asked Questions
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
                  transition={{ delay: index * 0.05 }}
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

      {/* Conclusion */}
      {conclusion ? (
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Quote className="w-10 h-10 text-[#1F5E4B]/30 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
                {conclusion.title}
              </h2>
              <div className="space-y-4 mb-8">
                {conclusion.paragraphs.map(function (p, i) {
                  return (
                    <p key={i} className="text-lg text-[#5F5F5F] leading-relaxed">{p}</p>
                  );
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

      <div id="book-now">
        <BookConsultation
          content={{
            badge: 'Start Your Recovery',
            title: 'Book Cervical Spondylosis Treatment in Dubai Today',
            description: 'Get back to comfortable, pain-free neck movement with evidence-based care at RamaCare Polyclinic.',
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
              { title: '4.8/5 Rating', description: 'Patient Reviews' }
            ]
          }}
        />
      </div>
    </Layout>
  );
}
