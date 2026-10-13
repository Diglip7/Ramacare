import Layout from '../../../components/Layout';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import BookConsultation from '../../../components/BookConsultation';
import { GOOGLE_RATING_FALLBACK } from '../../data/clinicStats';
import {
  Activity,
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Target,
  Users,
  Zap,
  ArrowRight,
  Plus,
  Minus,
  Info,
  AlertCircle,
  Stethoscope,
  HeartPulse,
  Briefcase,
  Activity as ActivityIcon,
  Baby,
  TrendingUp,
  Check,
  X
} from 'lucide-react';

export default function SciaticaTreatmentPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { question: 'Where can I get sciatica treatment in Jumeirah 1?', answer: 'RamaCare Polyclinic treats sciatica on the ground floor of Jumeirah Terrace Building, 12 Al Dhiyafah Road, Jumeirah 1, Dubai, near Al Satwa. The clinic is open every day from 10am to 10pm. Call 04 286 2006 or WhatsApp 056 659 7878.' },
    { question: 'How much does a sciatica physiotherapy assessment cost?', answer: 'A physiotherapy assessment at RamaCare costs AED 200. Insurance is by reimbursement: you pay at the clinic and claim the cost back from your insurer with our itemised invoice.' },
    { question: 'Who treats sciatica at RamaCare?', answer: 'Sciatica is assessed and treated by our DHA-licensed physiotherapist, Jeena Mathew (BPT, MPT). Our GP works in the same clinic and can suggest or prescribe medication where appropriate, arrange an X-ray and refer you for an MRI or to a spine specialist.' },
    { question: 'What causes sciatica?', answer: 'Sciatica is caused by irritation or compression of the sciatic nerve. The most common cause is a slipped (herniated) disc in the lower back. Other causes include spinal stenosis, degenerative discs and piriformis syndrome.' },
    { question: 'What is piriformis syndrome?', answer: 'Piriformis syndrome is buttock pain, sometimes spreading down the back of the thigh, when the piriformis muscle irritates the sciatic nerve. It is less common than disc-related sciatica, so a proper assessment is needed to tell them apart.' },
    { question: 'How do I know if it is sciatica or piriformis syndrome?', answer: 'Disc-related sciatica often comes with back pain, pain below the knee and changes in reflexes or strength. Piriformis syndrome is usually felt deep in the buttock, worse with sitting, and rarely causes reflex or strength changes. Your physiotherapist tests both.' },
    { question: 'How is piriformis syndrome treated?', answer: 'Treatment usually combines hip and glute strengthening, movement retraining, hands-on soft-tissue work, dry needling and stretching, plus advice on sitting. Most people improve without injections or surgery.' },
    { question: 'Can physiotherapy cure sciatica?', answer: 'Physiotherapy cannot guarantee a cure, but it is a first-line treatment for most people with sciatica. It helps manage pain, keeps you moving and builds strength to lower the chance of it coming back.' },
    { question: 'Can the GP give me medication for sciatica?', answer: 'Yes. RamaCare\'s GP can assess you and suggest or prescribe medication where appropriate, in the same clinic as your physiotherapy.' },
    { question: 'How long does sciatica take to heal?', answer: 'Many people improve within 2 to 6 weeks, and most within about 12 weeks. Long-standing sciatica can take several months of treatment and home exercise.' },
    { question: 'When should I get an MRI for sciatica?', answer: 'An MRI is usually needed only if pain or weakness is severe, getting worse, not improving after several weeks, or if surgery is being considered. RamaCare can refer you for one.' },
    { question: 'Is surgery needed for sciatica?', answer: 'Usually not. Most sciatica improves without surgery. Surgery is considered for emergency symptoms, increasing weakness or severe pain that does not improve. RamaCare does not perform injections or surgery and refers you if needed.' },
    { question: 'When is sciatica an emergency?', answer: 'Go to an emergency department straight away if you lose bladder or bowel control, have numbness around the groin or buttocks, or develop weakness in both legs. These can be signs of cauda equina syndrome.' },
    { question: 'Is walking good for sciatica?', answer: 'Yes, gentle walking is usually helpful, as long as it does not sharply increase leg pain. Long bed rest slows recovery.' },
    { question: 'What sleeping position is best for sciatica?', answer: 'Many people find it easier lying on their side with a pillow between the knees, or on their back with a pillow under the knees.' },
    { question: 'Is heat or ice better for sciatica?', answer: 'Both can ease pain. Many people use ice in the first days and heat later for muscle tension. Use whichever feels better for short periods.' },
    { question: 'Can sitting or driving make sciatica worse?', answer: 'Yes. Long periods of sitting or driving can increase symptoms. Take breaks every 30 to 45 minutes and adjust your seat; your physiotherapist can advise on your desk and car set-up.' },
    { question: 'Can pregnancy cause sciatica?', answer: 'Pregnancy can cause sciatica-like pain from posture and pelvic changes. Physiotherapy can help with safe exercises and positions.' },
    { question: 'Can sciatica come back?', answer: 'It can. Keeping up your exercises, staying active, lifting well and improving desk posture lower the chance of another episode.' },
    { question: 'Does insurance cover sciatica physiotherapy?', answer: 'RamaCare does not bill insurers directly. You pay at the clinic and claim the cost back from your insurer. Many plans need a doctor\'s referral, and our GP is in the same clinic.' }
  ];

  const SITE = "https://ramacarepolyclinic.ae";
  const CANONICAL_URL = `${SITE}/services/sciatica-treatment-dubai/`;
  const JEENA_ID = `${SITE}/doctors/jeena-mathew-physiotherapist-dubai/#person`;
  const PAGE_TITLE = "Sciatica & Piriformis Treatment in Jumeirah 1 | RamaCare";
  const PAGE_DESCRIPTION = "Sciatica and piriformis syndrome physiotherapy in Jumeirah 1, Dubai. AED 200 assessment, GP and X-ray on site. Open daily till 10pm.";
  const OG_IMAGE = `${SITE}/images/sciatica-treatment-dubai-physiotherapy.jpg`;

  const therapy = (name, path) => ({
    "@type": "PhysicalTherapy",
    name,
    ...(path ? { url: `${SITE}${path}` } : {})
  });

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_URL}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE}/` },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE}/services/` },
          { "@type": "ListItem", "position": 3, "name": "Physiotherapy", "item": `${SITE}/services/physiotherapy-dubai/` },
          { "@type": "ListItem", "position": 4, "name": "Sciatica Treatment", "item": CANONICAL_URL }
        ]
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${CANONICAL_URL}#webpage`,
        "url": CANONICAL_URL,
        "name": PAGE_TITLE,
        "description": PAGE_DESCRIPTION,
        "inLanguage": "en",
        "isPartOf": { "@id": `${SITE}/#website` },
        "breadcrumb": { "@id": `${CANONICAL_URL}#breadcrumb` },
        "medicalAudience": { "@type": "Patient" },
        "specialty": "https://schema.org/Physiotherapy",
        "about": [{ "@id": `${CANONICAL_URL}#sciatica` }, { "@id": `${CANONICAL_URL}#piriformis` }],
        "reviewedBy": { "@id": JEENA_ID },
        "lastReviewed": "2026-10-15", // change to the deploy date
        "publisher": { "@id": `${SITE}/#clinic` }
      },
      {
        "@type": "MedicalCondition",
        "@id": `${CANONICAL_URL}#sciatica`,
        "name": "Sciatica",
        "alternateName": ["Sciatic nerve pain", "Lumbar radiculopathy", "Leg nerve pain"],
        "description": "Pain, tingling or numbness along the sciatic nerve, from the lower back or buttock down the leg, usually on one side.",
        "possibleTreatment": [
          therapy("Exercise-based physiotherapy", "/services/physiotherapy-dubai/"),
          therapy("Neural mobilisation"),
          therapy("Manual therapy"),
          therapy("Dry needling", "/services/dry-needling-dubai/"),
          therapy("Electrotherapy (TENS)", "/services/electrotherapy-dubai/")
        ]
      },
      {
        "@type": "MedicalCondition",
        "@id": `${CANONICAL_URL}#piriformis`,
        "name": "Piriformis syndrome",
        "description": "Buttock pain, sometimes spreading down the back of the thigh, when the piriformis muscle irritates the sciatic nerve.",
        "possibleTreatment": [
          therapy("Hip and gluteal strengthening"),
          therapy("Soft-tissue therapy"),
          therapy("Dry needling", "/services/dry-needling-dubai/")
        ]
      },
      {
        "@type": "Person",
        "@id": JEENA_ID,
        "name": "Jeena Mathew",
        "jobTitle": "DHA-Licensed Physiotherapist",
        "url": `${SITE}/doctors/jeena-mathew-physiotherapist-dubai/`,
        "worksFor": { "@id": `${SITE}/#clinic` },
        "hasCredential": [
          { "@type": "EducationalOccupationalCredential", "credentialCategory": "Bachelor of Physiotherapy (BPT)" },
          { "@type": "EducationalOccupationalCredential", "credentialCategory": "Master of Physiotherapy (MPT)" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        "mainEntity": faqs.map(function (f) {
          return {
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": { "@type": "Answer", "text": f.answer }
          };
        })
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title key="title">{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Social SEO */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content={PAGE_TITLE} key="og:title" />
        <meta property="og:description" content={PAGE_DESCRIPTION} key="og:description" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:image" content={OG_IMAGE} key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Sciatica physiotherapy in Jumeirah 1, Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={PAGE_TITLE} key="twitter:title" />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} key="twitter:description" />
        <meta name="twitter:image" content={OG_IMAGE} key="twitter:image" />

        {/* Structured Data Schemas */}
        <script
          key="schema-graph"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </Head>

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-[#5F5F5F]">
            <li className="flex items-center gap-1">
              <a href="/" className="hover:text-[#1F5E4B] transition-colors">Home</a>
              <ChevronRight className="w-3.5 h-3.5 text-[#5F5F5F]/50" />
            </li>
            <li className="flex items-center gap-1">
              <a href="/services/" className="hover:text-[#1F5E4B] transition-colors">Services</a>
              <ChevronRight className="w-3.5 h-3.5 text-[#5F5F5F]/50" />
            </li>
            <li className="flex items-center gap-1">
              <a href="/services/physiotherapy-dubai/" className="hover:text-[#1F5E4B] transition-colors">Physiotherapy</a>
              <ChevronRight className="w-3.5 h-3.5 text-[#5F5F5F]/50" />
            </li>
            <li className="flex items-center gap-1">
              <span className="text-[#1F5E4B] font-medium">Sciatica Treatment Dubai</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section - Enhanced Gradient with Animated Shapes */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1F5E4B] via-[#2A7D63] to-[#1F5E4B]">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-96 h-96 bg-white/5 rounded-full -top-20 -left-20 blur-3xl"
            animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-72 h-72 bg-white/10 rounded-full bottom-20 right-20 blur-2xl"
            animate={{ y: [0, -15, 0], x: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium"
                >
                  <Activity className="w-4 h-4" />
                  <span>DHA-Licensed Physiotherapy · Jumeirah 1</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  Sciatica Treatment in Jumeirah 1, Dubai
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl"
                >
                  Physiotherapy for sciatica and piriformis syndrome, with a GP and X-ray in the same clinic
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="space-y-4"
              >
                <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                  RamaCare Polyclinic treats sciatica and piriformis syndrome at 12 Al Dhiyafah Road, Jumeirah 1, Dubai. A physiotherapy assessment costs AED 200. Our DHA-licensed physiotherapist finds where the nerve is being irritated, whether a disc, a narrowed spine or the piriformis muscle, and builds your plan. Our GP can suggest or prescribe medication where appropriate and arrange an X-ray on the same visit. Open every day, 10am–10pm.
                </p>
                <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                  Sciatica turns ordinary tasks into a struggle: sitting at your desk, driving, even standing up from a chair. Many people wait weeks hoping it will settle. Getting assessed early helps you manage the pain, stay active safely and spot the rare warning signs that need urgent care.
                </p>
                <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                  This page explains what sciatica is, how it differs from piriformis syndrome, and how we treat both.
                </p>
                <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                  Long hours at a desk and in the car are common triggers in Dubai. Finding the real source of the nerve irritation, rather than treating only the painful spot, is what makes recovery last.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#book-now"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#1F5E4B] px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white/90">AED 200 Assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white/90">Open Daily till 10pm</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <figure>
                  <img
                    src="/images/sciatica-treatment-dubai-physiotherapy.jpg"
                    alt="Physiotherapist treating sciatica at RamaCare Polyclinic, Jumeirah 1"
                    title="Sciatica physiotherapy at RamaCare Polyclinic, Jumeirah 1"
                    className="w-full h-[500px] object-cover"
                  />
                  <figcaption className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-sm text-[#1A1A1A]">
                    Sciatica physiotherapy at RamaCare Polyclinic, Jumeirah 1.
                  </figcaption>
                </figure>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1F5E4B]/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#1F5E4B]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#1F5E4B]">{GOOGLE_RATING_FALLBACK.rating.toFixed(1)}/5</p>
                    <p className="text-sm text-gray-600">Google rating · {GOOGLE_RATING_FALLBACK.count} reviews</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Sciatica Section - Asymmetric Split Layout */}
      <section className="py-20 px-4 bg-white" id="treatment-info">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#1F5E4B]/10 text-[#1F5E4B] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Info className="w-4 h-4" />
              Understanding
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              What is Sciatica?
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl">
              Understanding the condition causing your shooting leg pain
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6 pr-0 lg:pr-8"
            >
              <div className="p-6 bg-gradient-to-br from-[#1F5E4B]/5 to-[#1F5E4B]/10 rounded-2xl border border-[#1F5E4B]/20">
                <p className="text-lg text-[#5F5F5F] leading-relaxed">
                  Sciatica isn't a disease on its own — it's a symptom. It happens when the sciatic nerve, the longest nerve in your body, becomes irritated or compressed.
                </p>
              </div>
              <p className="text-lg text-[#5F5F5F] leading-relaxed">
                The sciatic nerve starts in your lower back, runs through your buttock, and travels down the back of each leg to your foot. When something presses on or irritates this nerve near its spinal root, you feel pain anywhere along that pathway — not just where the pressure is happening. This is why treatment has to address where the nerve is irritated, not only where it hurts.
              </p>
              <p className="text-lg text-[#5F5F5F] leading-relaxed">
                Most cases start in the lower spine. A disc may bulge, a joint may narrow, or a muscle may tighten around the nerve. This irritation sends pain signals down the leg, even though the actual problem sits in your back.
              </p>
              <p className="text-lg text-[#5F5F5F] leading-relaxed">
                This is where many patients get confused. Ordinary lower back pain usually stays in the back and hips. Sciatica is different — the hallmark sign is pain that travels below the knee, often into the calf or foot. If your pain stays local to your back, it may not be sciatica at all, and the treatment approach can differ.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-4"
            >
              {[
                {
                  icon: Shield,
                  title: "Not a Disease",
                  desc: "Sciatica is a symptom of an underlying issue"
                },
                {
                  icon: Target,
                  title: "Nerve Irritation",
                  desc: "The sciatic nerve is compressed or irritated"
                },
                {
                  icon: Activity,
                  title: "Radiating Pain",
                  desc: "Pain travels from back down to leg/foot"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#1F5E4B]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#1F5E4B]/20 to-[#1F5E4B]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-7 h-7 text-[#1F5E4B]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1A1A1A] mb-1 group-hover:text-[#1F5E4B] transition-colors">{item.title}</h3>
                      <p className="text-[#5F5F5F]">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl border border-amber-200">
                <h4 className="text-lg font-bold text-amber-800 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Common Misconceptions
                </h4>
                <ul className="space-y-2 text-amber-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1" />
                    <span>Sciatica is not always caused by a "slipped disc" — several conditions can trigger it.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1" />
                    <span>Rest is not always the best remedy. Prolonged bed rest can actually slow recovery.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1" />
                    <span>Sciatica does not always require surgery. Most cases improve with non-surgical sciatica treatment, particularly physiotherapy.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Symptoms Section - Symptom Cards with Borders */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1F5E4B] to-[#1F4E3B]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Symptoms of Sciatica
                </h2>
                <p className="text-xl text-white/80 max-w-2xl">
                  Sciatica symptoms vary from person to person, but certain patterns are common:
                </p>
              </div>
              <div className="hidden md:block">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
                  <Activity className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {[
              { icon: Zap, text: "Pain radiating from the lower back into the buttock and leg" },
              { icon: Target, text: "A burning or sharp sensation along the leg" },
              { icon: Activity, text: "Tingling, similar to pins and needles" },
              { icon: Shield, text: "Numbness in the leg or foot" },
              { icon: Users, text: "Muscle weakness in the leg" },
              { icon: Clock, text: "Difficulty walking or standing for long periods" },
              { icon: Target, text: "Pain that worsens while sitting" },
              { icon: Zap, text: "Foot weakness or a 'foot drop' sensation in severe cases" }
            ].map((symptom, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group flex items-start gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <symptom.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/90 leading-relaxed">{symptom.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 space-y-4" >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <p className="text-white/90 text-lg leading-relaxed">
                Symptoms are usually one-sided — most people feel it in one leg rather than both. Pain intensity can range from a dull ache to a sharp, electric-shock feeling that makes movement difficult.
              </p>
            </div>
            <p className="text-white/80 text-lg leading-relaxed">
              If your pain stays in the buttock and is worse when sitting, it may be piriformis syndrome rather than disc-related sciatica. See the comparison below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Causes Section - Timeline Style Cards */}
      <section className="py-20 px-4 bg-[#F9F7F2]" id="how-it-works">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Common Causes of Sciatica
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Several conditions can irritate the sciatic nerve. The right plan depends on which one applies to you:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Herniated Disc",
                desc: "Disc material presses on the nerve root. This is the most common cause; see slipped disc treatment for more",
                color: "from-rose-100 to-rose-50"
              },
              {
                title: "Degenerative Disc Disease",
                desc: "Discs wear down with age, reducing cushioning",
                color: "from-blue-100 to-blue-50"
              },
              {
                title: "Spinal Stenosis",
                desc: "Narrowing of the spinal canal presses on the nerves, more common after 50",
                color: "from-purple-100 to-purple-50"
              },
              {
                title: "Piriformis Syndrome",
                desc: "The deep piriformis muscle in the buttock irritates the nerve; see the comparison below",
                color: "from-amber-100 to-amber-50"
              },
              {
                title: "Pregnancy",
                desc: "Weight and postural shifts increase nerve pressure",
                color: "from-teal-100 to-teal-50"
              },
              {
                title: "Trauma",
                desc: "Falls or accidents can injure the spine or nerve",
                color: "from-indigo-100 to-indigo-50"
              },
              {
                title: "Poor Posture",
                desc: "Prolonged slouching stresses the lower spine",
                color: "from-emerald-100 to-emerald-50"
              },
              {
                title: "Obesity",
                desc: "Extra weight increases spinal load",
                color: "from-cyan-100 to-cyan-50"
              },
              {
                title: "Prolonged Sitting",
                desc: "Compresses the nerve and reduces circulation",
                color: "from-stone-100 to-stone-50"
              },
              {
                title: "Occupational Strain",
                desc: "Repeated lifting or twisting stresses the back",
                color: "from-slate-100 to-slate-50"
              }
            ].map((cause, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group bg-white p-7 rounded-2xl border border-gray-200 hover:border-[#1F5E4B]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${cause.color} rounded-xl flex items-center justify-center mb-4`}>
                  <div className="w-6 h-6 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-[#1F5E4B] font-bold">{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#1F5E4B] transition-colors">{cause.title}</h3>
                <p className="text-[#5F5F5F] leading-relaxed">{cause.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-[#1F5E4B] to-[#2A7D63] text-white p-8 rounded-2xl" >
            <p className="text-lg leading-relaxed">
              The cause decides the treatment, so your plan is built around your assessment, not a fixed routine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who is at Risk Section - Radial Cards */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#F5F1E8] to-[#F9F7F2]" id="when-to-consider">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Who is at Risk?
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Certain groups are more likely to develop sciatica. Anyone dealing with radiating leg pain should check whether they fall into a higher-risk category. Physiotherapy care works best when it's tailored to your specific risk profile:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Briefcase, text: "Office workers — long hours of sitting increase disc pressure" },
              { icon: ActivityIcon, text: "Drivers — vibration and seated posture strain the lower back" },
              { icon: Activity, text: "Athletes — repetitive movement and heavy loading can irritate the nerve" },
              { icon: Users, text: "Older adults — natural disc degeneration raises risk" },
              { icon: Baby, text: "Pregnant women — weight gain and pelvic changes affect the spine" },
              { icon: Users, text: "People with sedentary lifestyles — weak core muscles reduce spinal support" },
              { icon: Briefcase, text: "Heavy manual workers — repeated lifting and bending stress the lower back" }
            ].map((risk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col items-center text-center p-7 bg-white rounded-2xl border border-gray-200 hover:border-[#1F5E4B]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1F5E4B]/20 to-[#1F5E4B]/10 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <risk.icon className="w-8 h-8 text-[#1F5E4B]" />
                </div>
                <p className="text-[#1A1A1A] font-medium leading-relaxed">{risk.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-lg text-[#5F5F5F] leading-relaxed"
          >
            <p className="text-center bg-white p-8 rounded-2xl border border-gray-200">
              Many of our patients in Jumeirah 1 work long desk hours and drive daily, which fits several of these risk groups.
            </p>
          </motion.div>
        </div>
      </section>

      {/* When to See a Physiotherapist Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              When Should You See a Physiotherapist?
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Not every backache needs treatment, but these signs mean it is time for an assessment.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Signs to Book an Assessment</h3>
              {[
                "Pain lasting more than a week without improvement",
                "Pain that radiates below the knee",
                "Numbness or tingling that doesn't settle",
                "Difficulty walking or standing",
                "Pain that disrupts sleep or daily activities"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-[#1F5E4B]/5 rounded-xl border border-[#1F5E4B]/10">
                  <CheckCircle className="w-6 h-6 text-[#1F5E4B] flex-shrink-0" />
                  <p className="text-[#5F5F5F] leading-relaxed">{item}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border border-red-200">
                <h3 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6" />
                  Seek Emergency Medical Attention Immediately If You Experience:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Sudden loss of bladder or bowel control",
                    "Numbness in the groin or inner thigh area",
                    "Severe, progressive weakness in both legs"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-red-800 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-red-700 text-sm">
                  These can indicate cauda equina syndrome, which needs emergency surgery. Go to an emergency department straight away; do not wait for a clinic appointment.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-[#F9F7F2] p-8 rounded-2xl border border-gray-200"
          >
            <p className="text-lg text-[#5F5F5F] leading-relaxed text-center">
              For anything short of an emergency, our GP can see you the same day, and physiotherapy can start on the same visit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sciatica vs Piriformis Syndrome */}
      <section className="py-20 px-4 bg-white" id="piriformis">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Sciatica or Piriformis Syndrome?
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl">
              Piriformis syndrome happens when the piriformis muscle, deep in the buttock, irritates the sciatic nerve. It feels similar to disc-related sciatica but is treated differently, so your assessment checks both.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-200 rounded-2xl overflow-hidden">
              <thead className="bg-[#1F5E4B] text-white">
                <tr>
                  <th className="p-4 font-semibold"> </th>
                  <th className="p-4 font-semibold">Disc-related sciatica</th>
                  <th className="p-4 font-semibold">Piriformis syndrome</th>
                </tr>
              </thead>
              <tbody className="text-[#1A1A1A]">
                {[
                  ["Where it starts", "Lower back", "Deep in the buttock"],
                  ["Pain pattern", "Often below the knee, into the calf or foot", "Buttock and back of the thigh, rarely below the knee"],
                  ["Back pain", "Common", "Usually not"],
                  ["Worse with", "Bending, coughing, sitting", "Sitting, climbing stairs, crossing the legs"],
                  ["Reflex or strength changes", "Possible", "Rare"],
                  ["How common", "Most common cause", "Less common"],
                  ["Main treatment", "Exercise-based physiotherapy, staying active, medication where appropriate", "Hip and glute strengthening, movement retraining, soft-tissue work and dry needling"]
                ].map(function (row, i) {
                  return (
                    <tr key={i} className={i % 2 ? 'bg-[#F9F7F2]' : 'bg-white'}>
                      <td className="p-4 font-semibold">{row[0]}</td>
                      <td className="p-4">{row[1]}</td>
                      <td className="p-4">{row[2]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-[#5F5F5F] mt-6 max-w-3xl">
            Piriformis syndrome is often treated with stretching alone, but research also supports hip-strengthening and movement retraining. Your plan combines both, based on what your assessment shows.
          </p>
        </div>
      </section>

      {/* Who treats sciatica at RamaCare */}
      <section className="py-16 px-4 bg-[#F9F7F2]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">Who Treats Sciatica at RamaCare?</h2>
            <p className="text-[#5F5F5F] leading-relaxed">
              Your sciatica is assessed and treated by our DHA-licensed physiotherapist, Jeena Mathew (BPT, MPT, 8+ years). Our GP works in the same clinic and can suggest or prescribe medication where appropriate, arrange an X-ray on the same visit, and refer you for an MRI or to a spine specialist. RamaCare does not give injections or perform surgery.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">Quick Facts</h2>
            <ul className="space-y-2 text-[#5F5F5F]">
              <li>Address: Ground floor, Jumeirah Terrace Building, 12 Al Dhiyafah Road, Jumeirah 1, Dubai</li>
              <li>Physiotherapy assessment: AED 200</li>
              <li>Open every day, 10am to 10pm; same-day appointments when slots are free</li>
              <li>GP and X-ray in the same clinic</li>
              <li>Insurance: pay at the clinic, claim back from your insurer</li>
              <li>Book: 04 286 2006 or WhatsApp 056 659 7878</li>
            </ul>
            <p className="text-[#5F5F5F] mt-4 text-right" lang="ar" dir="rtl">
              علاج عرق النسا في جميرا 1، دبي: تقييم العلاج الطبيعي بـ 200 درهم، مفتوح يومياً حتى 10 مساءً.
            </p>
          </div>
        </div>
      </section>

      {/* Diagnosis Section - Split with Side Panel */}
      <section className="py-20 px-4 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#1F5E4B]/10 text-[#1F5E4B] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Stethoscope className="w-4 h-4" />
              Diagnosis
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              How We Diagnose Sciatica
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl">
              Accurate diagnosis is the foundation of effective sciatica care. Some patients have true sciatica, while others have a related condition called lumbar radiculopathy. Getting proper care depends on telling the two apart, which is why our clinical assessment is thorough and comprehensive.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <h3 className="text-2xl font-bold text-[#1A1A1A]">Our Assessment Typically Includes:</h3>
              {[
                { step: "1", title: "Medical History", desc: "Understanding when symptoms started and what makes them better or worse" },
                { step: "2", title: "Physical Examination", desc: "Checking posture, movement, and areas of tenderness" },
                { step: "3", title: "Neurological Assessment", desc: "Testing sensation and reflexes along the leg" },
                { step: "4", title: "Straight Leg Raise Test", desc: "A simple test that reproduces sciatic symptoms to confirm nerve involvement" },
                { step: "5", title: "Reflex Testing", desc: "Checking knee and ankle reflexes for nerve function" },
                { step: "6", title: "Muscle Strength Evaluation", desc: "Identifying weakness linked to nerve compression" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#1F5E4B]/30 transition-all"
                >
                  <div className="w-10 h-10 bg-[#1F5E4B] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1A1A1A] mb-1">{item.title}</h4>
                    <p className="text-[#5F5F5F]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="sticky top-24">
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Imaging May Be Recommended In Select Cases:</h3>
                  <ul className="space-y-4">
                    {[
                      { icon: Activity, title: "MRI (by referral)", desc: "The most detailed view of discs and nerves; arranged by referral when needed" },
                      { icon: Target, title: "X-ray (in the clinic)", desc: "Done at RamaCare on the same visit to rule out bone problems" },
                      { icon: Shield, title: "CT scan (by referral)", desc: "Used when MRI is not suitable" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[#1F5E4B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-[#1F5E4B]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#1A1A1A]">{item.title}</h4>
                          <p className="text-[#5F5F5F] text-sm">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-[#5F5F5F] leading-relaxed">
                    Imaging isn't always necessary. Many cases of sciatica can be diagnosed clinically, and imaging is reserved for cases that don't improve as expected or show warning signs.
                  </p>
                  <div className="mt-6 p-4 bg-[#1F5E4B]/5 rounded-xl border border-[#1F5E4B]/10">
                    <p className="text-[#1F5E4B] font-medium">
                      Our GP can also suggest or prescribe medication where appropriate while you start physiotherapy.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sciatica Treatment Section - Comprehensive Cards */}
      <section className="py-20 px-4 bg-white" id="treatments">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Sciatica Treatment at RamaCare
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl">
              Our approach to sciatica treatment is built around a simple principle: treat the cause, not just the pain. Every plan starts with a thorough assessment, and treatment is adjusted as you progress.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Activity,
                title: "Manual Therapy",
                desc: "Hands-on techniques to reduce muscle tightness, improve joint mobility, and ease pressure on the nerve. Often used in early sessions when pain is at its worst."
              },
              {
                icon: Target,
                title: "Neural Mobilization",
                desc: "Gentle, targeted movements that help the sciatic nerve glide more freely, reducing irritation and improving flexibility along its path."
              },
              {
                icon: Shield,
                title: "Dry Needling",
                desc: (
                  <span>
                    Fine needles are used to release tight muscle knots, particularly in the piriformis and lower back muscles that often contribute to nerve compression. Learn more about our{' '}
                    <a href="/services/dry-needling-dubai/" className="underline text-[#1F5E4B] font-medium hover:text-[#0F3D30]">
                      dry needling treatment
                    </a>.
                  </span>
                )
              },
              {
                icon: Zap,
                title: "Electrotherapy",
                desc: (
                  <span>
                    Used to help reduce pain signals, especially in the early, more painful phase. See our{' '}
                    <a href="/services/electrotherapy-dubai/" className="underline text-[#1F5E4B] font-medium hover:text-[#0F3D30]">
                      electrotherapy services
                    </a>.
                  </span>
                )
              },
              {
                icon: Activity,
                title: "Ultrasound Therapy",
                desc: (
                  <span>
                    Therapeutic ultrasound for soft tissue, used together with exercise. Read more about{' '}
                    <a href="/services/ultrasound-therapy-dubai/" className="underline text-[#1F5E4B] font-medium hover:text-[#0F3D30]">
                      ultrasound therapy
                    </a>.
                  </span>
                )
              },
              {
                icon: TrendingUp,
                title: "Core Strengthening",
                desc: "Once acute pain settles, we introduce exercises that build core and spinal stability — reducing the load on your lower back and preventing recurrence."
              },
              {
                icon: Target,
                title: "Postural Correction",
                desc: "Guidance on sitting, standing, and movement habits that reduce ongoing strain, particularly important for desk-based patients."
              },
              {
                icon: Activity,
                title: "Stretching Exercises",
                desc: "Targeted stretches for the hamstrings, piriformis, and lower back to relieve tension along the nerve pathway."
              },
              {
                icon: Briefcase,
                title: "Ergonomic Advice",
                desc: "Practical recommendations for your workstation, car seat, and daily habits to reduce repeated strain."
              },
              {
                icon: CheckCircle,
                title: "Home Exercise Programme",
                desc: "A structured plan you can follow between sessions to reinforce progress and support long-term recovery."
              }
            ].map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gradient-to-br from-white to-[#F9F7F2] p-7 rounded-2xl border border-gray-200 hover:border-[#1F5E4B]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#1F5E4B]/20 to-[#1F5E4B]/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <treatment.icon className="w-7 h-7 text-[#1F5E4B]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#1F5E4B] transition-colors">{treatment.title}</h3>
                <p className="text-[#5F5F5F] leading-relaxed">{treatment.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-[#1F5E4B] to-[#2A7D63] text-white p-8 rounded-2xl"
          >
            <p className="text-lg leading-relaxed">
              Each technique is introduced at the right stage of recovery. Early sessions typically focus on pain relief, while later sessions build strength and prevent recurrence. For piriformis syndrome, hip and glute strengthening and movement retraining are a key part of the plan, not stretching alone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits of Physiotherapy Section */}
      <section className="py-20 px-4 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Benefits of Physiotherapy for Sciatica
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Structured physiotherapy offers several advantages over rest alone:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Check, title: "Reduced Pain", desc: "Reduced pain intensity and frequency" },
              { icon: Activity, title: "Improved Mobility", desc: "Improved mobility and range of motion" },
              { icon: Target, title: "Better Nerve Function", desc: "Better nerve gliding and function" },
              { icon: Shield, title: "Increased Flexibility", desc: "Increased flexibility in the back and legs" },
              { icon: TrendingUp, title: "A Clear Plan", desc: "A structured plan instead of trial and error" },
              { icon: CheckCircle, title: "Lower Recurrence Risk", desc: "Lower risk of the pain returning" },
              { icon: Target, title: "Better Posture", desc: "Improved posture and movement habits" },
              { icon: HeartPulse, title: "Better Quality of Life", desc: "Better overall quality of life" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white p-7 rounded-2xl border border-gray-200 hover:border-[#1F5E4B]/30 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#1F5E4B]/20 to-[#1F5E4B]/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-[#1F5E4B]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#1F5E4B] transition-colors">{benefit.title}</h3>
                <p className="text-[#5F5F5F]">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white p-8 rounded-2xl border border-gray-200"
          >
            <p className="text-lg text-[#5F5F5F] leading-relaxed text-center">
              Physiotherapy also empowers patients with tools to manage symptoms independently, rather than relying solely on pain medication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Best Exercises Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Best Exercises for Sciatica
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl">
              These exercises are commonly used in physiotherapy for sciatica, but they should be introduced gradually and ideally under professional guidance, especially if pain is severe.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Knee to Chest Stretch", desc: "Gently pulls the lower back into flexion, relieving pressure" },
              { title: "Piriformis Stretch", desc: "Targets the muscle that often compresses the sciatic nerve" },
              { title: "Hamstring Stretch", desc: "Reduces tightness that can pull on the lower back" },
              { title: "Pelvic Tilt", desc: "Activates deep core muscles to support the spine" },
              { title: "Cat-Cow Stretch", desc: "Mobilizes the spine gently through flexion and extension" },
              { title: "Bird Dog Exercise", desc: "Builds core stability without loading the spine" },
              { title: "McKenzie Extension", desc: "A specific extension movement often used for disc-related sciatica" },
              { title: "Sciatic Nerve Glide", desc: "A gentle mobilization to improve nerve movement" }
            ].map((exercise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gradient-to-br from-[#1F5E4B]/5 to-white p-6 rounded-2xl border border-[#1F5E4B]/10 hover:border-[#1F5E4B]/30 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 bg-[#1F5E4B] text-white rounded-full flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#1F5E4B]">{exercise.title}</h3>
                <p className="text-[#5F5F5F] text-sm">{exercise.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-amber-50 p-8 rounded-2xl border border-amber-200"
          >
            <h3 className="text-xl font-bold text-amber-800 mb-3 flex items-center gap-2">
              <AlertCircle className="w-6 h-6" />
              Safety Advice
            </h3>
            <p className="text-amber-800 leading-relaxed">
              Stop any exercise that sharpens your pain or increases numbness. Sciatica exercises should ease discomfort gradually, not worsen it. Always start slowly, and consult a physiotherapist before beginning if you're unsure which exercises suit your condition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Recovery Timeline Section */}
      <section className="py-20 px-4 bg-[#F9F7F2]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Recovery Timeline
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Recovery varies depending on severity and how early treatment begins:
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                severity: "Mild Sciatica",
                timeline: "Often improves within 2-4 weeks with early physiotherapy",
                color: "from-green-100 to-green-50"
              },
              {
                severity: "Moderate Sciatica",
                timeline: "Often improves within 6-12 weeks of structured treatment",
                color: "from-amber-100 to-amber-50"
              },
              {
                severity: "Chronic Sciatica (3+ months)",
                timeline: "Can take several months, with a focus on long-term management",
                color: "from-orange-100 to-orange-50"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`group bg-gradient-to-r ${item.color} p-8 rounded-2xl border border-gray-200 hover:border-[#1F5E4B]/30 hover:shadow-xl transition-all`}
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">{item.severity}</h3>
                    <p className="text-[#5F5F5F] text-lg">{item.timeline}</p>
                  </div>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Clock className="w-8 h-8 text-[#1F5E4B]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white p-8 rounded-2xl border border-gray-200"
          >
            <p className="text-lg text-[#5F5F5F] leading-relaxed text-center">
              These timelines are general guidelines, not guarantees. Recovery depends on the underlying cause, your overall health, and how consistently you follow your treatment plan. Some patients feel relief within days; others need a longer, staged approach through structured rehabilitation programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose RamaCare Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Why Choose RamaCare for Sciatica in Jumeirah 1?
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              What you get at our Jumeirah 1 clinic:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: CheckCircle, title: "DHA-Licensed Physiotherapist", desc: "Jeena Mathew, BPT, MPT, 8+ years in back and nerve rehab" },
              { icon: Target, title: "AED 200 Assessment", desc: "Sciatica and piriformis tested in one visit" },
              { icon: Stethoscope, title: "GP in the Same Clinic", desc: "Medication where appropriate, tests and referrals" },
              { icon: Shield, title: "X-ray on Site", desc: "MRI and specialist referral when needed" },
              { icon: Clock, title: "Open Daily 10am–10pm", desc: "Same-day appointments when slots are free" },
              { icon: MapPin, title: "Jumeirah 1, near Al Satwa", desc: "Al Dhiyafah Road, free and paid parking nearby" },
              { icon: Users, title: "Referred by Gyms and Schools", desc: "Local gyms and schools send patients to us" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-start gap-4 bg-gradient-to-br from-[#1F5E4B]/5 to-white p-7 rounded-2xl border border-gray-200 hover:border-[#1F5E4B]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#1F5E4B] text-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#1F5E4B] transition-colors">{item.title}</h3>
                  <p className="text-[#5F5F5F]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-[#1F5E4B] to-[#2A7D63] text-white p-8 rounded-2xl"
          >
            <p className="text-lg leading-relaxed text-center">
              Our goal is to ease your pain and lower the chance of sciatica returning. For related problems, see{' '}
              <a href="/services/slip-disc-treatment-dubai/" className="underline font-semibold hover:text-[#C9A961]">
                slipped disc treatment
              </a>,{' '}
              <a href="/services/back-pain-treatment-dubai/" className="underline font-semibold hover:text-[#C9A961]">
                back pain treatment
              </a>{' '}
              and our{' '}
              <a href="/services/physiotherapy-dubai/" className="underline font-semibold hover:text-[#C9A961]">
                physiotherapy in Jumeirah 1
              </a>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Accordion */}
      <section className="py-20 px-4 bg-[#F9F7F2]" id="faqs">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Sciatica in Jumeirah 1: Common Questions
            </h2>
            <p className="text-xl text-[#5F5F5F]">
              Clear answers about sciatica and piriformis syndrome at RamaCare Polyclinic.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-bold text-[#1A1A1A]">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-[#1F5E4B]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#5F5F5F]" />
                  )}
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-6"
                  >
                    <p className="text-[#5F5F5F] leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1F5E4B] to-[#2A7D63]" id="book-now">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Book Your Consultation
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You don't have to manage sciatica on your own. Book an AED 200 physiotherapy assessment at RamaCare Polyclinic in Jumeirah 1.
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Book by WhatsApp or with the form below. Open every day 10am–10pm, with same-day appointments when slots are free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/971566597878"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1F5E4B] px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                Book via WhatsApp
              </a>
              <a
                href="/contact-us/"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Reviewer Badge */}
      <ContentReviewBadge doctorName="Jeena Mathew" pageSlug="sciatica-treatment-dubai" />

      {/* Medical Disclaimer */}
      <section className="py-12 px-4 bg-[#F9F7F2] border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl border border-gray-200">
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-[#1F5E4B]" />
              Medical Disclaimer
            </h3>
            <p className="text-[#5F5F5F] leading-relaxed text-sm">
              This content is for informational purposes only and does not replace professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider regarding any medical condition. Individual results vary, and no specific outcome is guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* Booking form */}
      <div id="book-form">
        <BookConsultation
          content={{
            badge: 'Start Your Recovery',
            title: 'Book a Sciatica Assessment in Jumeirah 1',
            description: 'Physiotherapy assessment AED 200. Open every day 10am–10pm, with same-day appointments when slots are free.',
            getInTouchTitle: 'Get In Touch',
            requestAppointmentTitle: 'Request Appointment',
            submitButtonText: 'Request Appointment',
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
              weekdaysTime: '10:00 AM - 10:00 PM'
            },
            statCards: [
              { title: 'DHA Licensed', description: 'Facility 2036418' },
              { title: 'AED 200', description: 'Physiotherapy Assessment' },
              { title: 'GP & X-ray', description: 'In the Same Clinic' },
              { title: 'Open Daily', description: '10am – 10pm' }
            ]
          }}
        />
      </div>
    </Layout>
  );
}