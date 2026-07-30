import Layout from '../../../components/Layout';
import Head from "next/head";
import Image from "next/image";
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
  Quote
} from 'lucide-react';

export default function PlantarFasciitisTreatmentPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [activeExercise, setActiveExercise] = useState(0);

  const content = subcategoryContent['plantar-fasciitis-treatment-dubai'];
  const {
    seo,
    breadcrumbs,
    images,
    hero,
    whatIs,
    symptoms,
    symptomPatternNote,
    causes,
    causesNote,
    riskFactors,
    riskFactorsNote,
    diagnosis,
    treatmentIntro,
    treatmentOptions,
    benefits,
    benefitsNote,
    exercises,
    exercisesNote,
    recoveryTimeline,
    recoveryNote,
    preventionTips,
    whyChooseUsIntro,
    whyChooseUs,
    whyChooseUsClosing,
    relatedServices,
    faqs,
    conclusion
  } = content;

  const navItems = [
    { id: 'what-is', label: 'What Is' },
    { id: 'symptoms', label: 'Symptoms & Causes' },
    { id: 'diagnosis', label: 'Diagnosis' },
    { id: 'treatment', label: 'Treatment' },
    { id: 'recovery', label: 'Recovery' },
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

  // Previously missing: MedicalCondition schema for the plantar fasciitis / heel pain content itself
  const medicalConditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Plantar Fasciitis",
    "alternateName": "Heel Pain, Degenerative Fasciopathy",
    "signOrSymptom": symptoms.map(function (s) { return { "@type": "MedicalSymptom", "name": s }; }),
    "riskFactor": riskFactors.map(function (r) { return { "@type": "MedicalRiskFactor", "name": r }; }),
    "possibleTreatment": treatmentOptions.map(function (t) { return { "@type": "MedicalTherapy", "name": t.title, "description": t.description }; })
  };

  // Previously missing: MedicalTherapy schema list for the individual treatment modalities
  const medicalTherapySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": treatmentOptions.map(function (t, i) {
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

  // Previously missing: MedicalClinic schema for business details
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

  // Previously missing: Physician schema, guarded in case doctor data isn't present
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

      {/* Breadcrumbs — previously missing from the rendered page (schema existed, UI did not) */}
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
                <Footprints className="w-4 h-4" />
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

              {/* Restored: guide overview + specialist mention, previously dropped from hero.intro */}
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
                 src={images.anatomy.src}
                  alt={images.anatomy.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D30]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-[#1F5E4B]/10">
                <p className="text-[#1F5E4B] font-bold text-sm">Plantar Fasciitis Specialist Care</p>
                <p className="text-[#5F5F5F] text-xs mt-1">DHA-Licensed Specialist Physiotherapists in Jumeirah, Dubai</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <QuickNavigation navItems={navItems} />

      {/* What Is Plantar Fasciitis — now paired with the anatomy illustration (previously text-only, no image) */}
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
            </motion.div>

            {images && images.anatomy ? (
              <motion.figure
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:sticky lg:top-24">
                <img
                  src={images.physiotherapist.src}
                  alt={images.physiotherapist.alt}
                  loading="lazy"
                  className="w-full rounded-2xl shadow-lg"
                />
                <figcaption className="text-sm text-[#5F5F5F] mt-3 text-center">
                  {images.physiotherapist.caption}
                </figcaption>
              </motion.figure>
            ) : null}
          </div>
        </div>
      </section>

      {/* Symptoms + Pattern Callout */}
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
                Symptoms of Plantar Fasciitis
              </h2>
              <div className="space-y-3">
                {symptoms.map(function (s, i) {
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
                    >
                      <CheckCircle className="w-5 h-5 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                      <span className="text-[#1A1A1A]">{s}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1F5E4B] rounded-2xl p-8 text-white sticky top-24"
            >
              <Clock className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-3">Recognize the Pattern</h3>
              <p className="text-white/90 leading-relaxed">{symptomPatternNote}</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-md flex flex-col"
            >
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">Common Causes</h3>
              <div className="space-y-3">
                {causes.map(function (c, i) {
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 text-[#1F5E4B] mt-1 flex-shrink-0" />
                      <span className="text-[#5F5F5F]">{c}</span>
                    </div>
                  );
                })}
              </div>
              {/* Restored biomechanics paragraph — previously had no field or rendering location */}
              {causesNote ? (
                <p className="text-sm text-[#5F5F5F] leading-relaxed mt-6 pt-6 border-t border-gray-100">
                  {causesNote}
                </p>
              ) : null}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-md flex flex-col"
            >
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">Who is Most at Risk</h3>
              <div className="space-y-3">
                {riskFactors.map(function (r, i) {
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <Users className="w-4 h-4 text-[#1F5E4B] mt-1 flex-shrink-0" />
                      <span className="text-[#5F5F5F]">{r}</span>
                    </div>
                  );
                })}
              </div>
              {/* Restored closing line — previously missing */}
              {riskFactorsNote ? (
                <p className="text-sm text-[#5F5F5F] leading-relaxed mt-6 pt-6 border-t border-gray-100">
                  {riskFactorsNote}
                </p>
              ) : null}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diagnosis Stepper — now with the gait analysis image (previously steps + text only) */}
      <section id="diagnosis" className="py-20 px-4 bg-white">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              How We Diagnose Plantar Fasciitis
            </h2>
            <p className="text-lg text-[#5F5F5F] max-w-3xl mx-auto">{diagnosis.intro}</p>
          </motion.div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center mt-12">
            {images && images.gaitAnalysis ? (
              <motion.figure
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}>
                <img
                  src={images.gaitAnalysis.src}
                  alt={images.gaitAnalysis.alt}
                  loading="lazy"
                  className="w-full rounded-2xl shadow-lg"
                />
                <figcaption className="text-sm text-[#5F5F5F] mt-3 text-center">
                  {images.gaitAnalysis.caption}
                </figcaption>
              </motion.figure>
            ) : null}

            <div className="grid sm:grid-cols-2 gap-6">
              {diagnosis.steps.map(function (step, i) {
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative bg-[#F9F7F2] rounded-xl p-6"
                  >
                    <div className="w-10 h-10 bg-[#1F5E4B] text-white rounded-full flex items-center justify-center font-bold mb-4">
                      {i + 1}
                    </div>
                    <h4 className="font-bold text-[#1A1A1A] mb-2">{step.title}</h4>
                    <p className="text-sm text-[#5F5F5F] leading-relaxed">{step.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-[#5F5F5F] leading-relaxed max-w-4xl mx-auto mt-10"
          >
            {diagnosis.note}
          </motion.p>
        </div>
      </section>

      {/* Treatment Options Grid — now with intro paragraph (APTA/NHS citation) + banner image, previously a one-line generic subheading */}
      <section id="treatment" className="py-20 px-4 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Physiotherapy: The Foundation of Treatment
            </h2>
            <p className="text-lg text-[#5F5F5F] max-w-4xl mx-auto leading-relaxed">
              {treatmentIntro}
            </p>
          </motion.div>

          {images && images.physiotherapist ? (
            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 max-w-4xl mx-auto"
            >
             
              <figcaption className="text-sm text-[#5F5F5F] mt-3 text-center">
                {images.physiotherapist.caption}
              </figcaption>
            </motion.figure>
          ) : null}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatmentOptions.map(function (option, i) {
              const IconComp = iconMap[option.icon];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 6) * 0.08 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-[#1F5E4B]/30 overflow-hidden"
                >
                 
                  <div className="p-6">
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
        </div>
      </section>

      {/* Benefits of Early Physiotherapy */}
      <section className="py-20 px-4 bg-[#1F5E4B]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Benefits of Early Physiotherapy
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(function (b, i) {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                >
                  <CheckCircle className="w-6 h-6 text-white mb-3" />
                  <p className="text-white font-medium">{b}</p>
                </motion.div>
              );
            })}
          </div>
          {/* Restored Mayo Clinic citation — previously dropped */}
          {benefitsNote ? (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-white/80 leading-relaxed max-w-3xl mx-auto mt-10"
            >
              {benefitsNote}
            </motion.p>
          ) : null}
        </div>
      </section>

      {/* Exercises - interactive list, now with the stretching image alongside the detail panel */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Exercises for Plantar Fasciitis
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-[1fr_2fr] gap-8">
            <div className="space-y-2">
              {exercises.map(function (ex, i) {
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
              className="bg-[#F5F1E8] rounded-2xl overflow-hidden flex flex-col"
            >
              {(() => {
                const currentExercise = exercises[activeExercise];
                const imageData = currentExercise?.imageKey && images?.[currentExercise.imageKey]
                  ? images[currentExercise.imageKey]
                  : images?.stretching;
                return imageData ? (
                  <div className="relative w-full aspect-[16/9]">
                    <Image
                      src={imageData.src}
                      alt={imageData.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 66vw"
                      className="object-cover"
                    />
                  </div>
                ) : null;
              })()}
              <div className="p-6 sm:p-8 flex flex-col justify-center flex-1">
                <Activity className="w-10 h-10 text-[#1F5E4B] mb-4" />
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                  {exercises[activeExercise].name}
                </h3>
                <p className="text-lg text-[#5F5F5F] leading-relaxed">
                  {exercises[activeExercise].description}
                </p>
              </div>
            </motion.div>
          </div>

          <p className="text-center text-[#5F5F5F] leading-relaxed max-w-3xl mx-auto mt-10 text-sm">
            {exercisesNote}
          </p>
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
              Recovery Timeline
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 bg-[#1F5E4B]/30"></div>
            {recoveryTimeline.map(function (stage, i) {
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

          <p className="text-center text-[#5F5F5F] leading-relaxed max-w-3xl mx-auto mt-10">
            {recoveryNote}
          </p>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Prevention Tips
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preventionTips.map(function (tip, i) {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 bg-[#F9F7F2] p-6 rounded-xl hover:bg-[#F5F1E8] transition-colors"
                >
                  <Shield className="w-5 h-5 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                  <span className="text-[#1A1A1A] text-sm">{tip}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us — now with intro + closing paragraphs carrying internal links, previously just a bare grid + chips */}
      <section className="py-20 px-4 bg-[#1F5E4B]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose RamaCare Polyclinic?
            </h2>
            {whyChooseUsIntro ? (
              <p className="text-white/85 max-w-4xl mx-auto leading-relaxed">
                {whyChooseUsIntro}
              </p>
            ) : null}
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
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

          {whyChooseUsClosing ? (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/80 leading-relaxed max-w-4xl mx-auto mt-10 text-center"
            >
              {whyChooseUsClosing}
            </motion.p>
          ) : null}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap gap-3 justify-center"
          >
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
          </motion.div>
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
              Frequently Asked Questions - Plantar Fasciitis Treatment Dubai
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

      {/* Conclusion — previously missing entirely; the page jumped straight from FAQ to the booking form */}
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
            title: 'Book Plantar Fasciitis Treatment in Dubai Today',
            description: 'Get back to comfortable, pain-free steps with evidence-based heel pain care at Rama Care Polyclinic.',
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
              { title: 'Experienced Team', description: '10+ Years Combined' },
              { title: '1,200+ Procedures', description: 'Completed' },
              { title: '4.8/5 Rating', description: 'Patient Reviews' }
            ]
          }}
        />
      </div>
    </Layout>
  );
}