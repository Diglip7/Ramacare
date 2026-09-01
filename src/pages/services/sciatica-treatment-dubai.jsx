import Layout from '../../../components/Layout';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
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
    {
      question: 'What causes sciatica?',
      answer: 'Sciatica is usually caused by pressure or irritation on the sciatic nerve, often from a herniated disc, spinal stenosis, or tight muscles like the piriformis.'
    },
    {
      question: 'Can physiotherapy cure sciatica?',
      answer: 'Physiotherapy can\'t guarantee a "cure" since outcomes vary by cause and individual, but it\'s highly effective at reducing pain, restoring movement, and addressing the underlying issue for most patients. Consistent physiotherapy sessions, combined with home exercises, give you the best chance of lasting improvement.'
    },
    {
      question: 'How long does recovery take?',
      answer: 'Mild cases often improve in a few weeks, while chronic sciatica may take a few months of consistent treatment.'
    },
    {
      question: 'Can sciatica return?',
      answer: 'Yes, especially if the underlying cause — like poor posture or a weak core — isn\'t addressed. This is why we focus on prevention, not just pain relief.'
    },
    {
      question: 'Is surgery always necessary?',
      answer: 'No. Most sciatica cases respond well to non-surgical treatment. Surgery is typically considered only when conservative treatment fails or there are severe neurological symptoms.'
    },
    {
      question: 'Can I exercise with sciatica?',
      answer: 'Gentle, guided exercise is usually encouraged. Complete rest for long periods can slow recovery.'
    },
    {
      question: 'Is walking good for sciatica?',
      answer: 'Light walking is often beneficial and helps maintain mobility, as long as it doesn\'t sharply increase your pain.'
    },
    {
      question: 'Can prolonged sitting worsen sciatica?',
      answer: 'Yes. Sitting increases pressure on the lower spine and can aggravate nerve irritation.'
    },
    {
      question: 'What sleeping position is best?',
      answer: 'Many patients find relief sleeping on their side with a pillow between the knees, which keeps the spine aligned.'
    },
    {
      question: 'Can pregnancy cause sciatica?',
      answer: 'Yes, pregnancy-related weight and postural changes can put pressure on the sciatic nerve.'
    },
    {
      question: 'Does sciatica always cause leg pain?',
      answer: 'Not always immediately, but pain traveling into the leg is a defining feature of true sciatica.'
    },
    {
      question: 'Can stress make sciatica worse?',
      answer: 'Stress can increase muscle tension, which may worsen symptoms indirectly.'
    },
    {
      question: 'Is heat or ice better for sciatica?',
      answer: 'Both can help. Ice is often used early to reduce inflammation, while heat may ease muscle tension later.'
    },
    {
      question: 'Can obesity contribute to sciatica?',
      answer: 'Yes, extra body weight increases spinal load and can contribute to disc problems.'
    },
    {
      question: 'How is sciatica different from a pulled muscle?',
      answer: 'A pulled muscle usually causes localized pain, while sciatica involves nerve-related pain that travels down the leg.'
    },
    {
      question: 'Can driving worsen sciatica?',
      answer: 'Yes, prolonged sitting and vibration while driving can aggravate symptoms.'
    },
    {
      question: 'When should I get an MRI for sciatica?',
      answer: 'Usually if symptoms persist beyond several weeks, worsen, or show signs of significant nerve involvement. Your physiotherapist can advise whether imaging is needed as part of your assessment, or whether it\'s reasonable to begin treatment first and monitor your response.'
    },
    {
      question: 'Can young people get sciatica?',
      answer: 'Yes, though it\'s more common in adults over 30, younger people can develop it too, especially from disc injuries or prolonged sitting.'
    },
    {
      question: 'Will I need long-term physiotherapy?',
      answer: 'Not necessarily. Many patients complete a structured program and transition to a home exercise routine for maintenance.'
    },
    {
      question: 'Is sciatica preventable?',
      answer: 'Good posture, regular movement, core strength, and proper lifting technique can significantly reduce your risk.'
    }
  ];

  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/sciatica-treatment-dubai/";
  const PAGE_TITLE = "Sciatica Treatment Dubai | RamaCare Polyclinic";
  const PAGE_DESCRIPTION = "Struggling with sciatica pain down your leg? Get expert sciatica treatment in Dubai at RamaCare Polyclinic. DHA-licensed physios for lasting relief. Book now!";
  const OG_IMAGE = "https://ramacarepolyclinic.ae/images/sciatica-treatment-dubai-physiotherapy.jpg";

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_URL}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://ramacarepolyclinic.ae/services/" },
          { "@type": "ListItem", "position": 3, "name": "Physiotherapy", "item": "https://ramacarepolyclinic.ae/services/physiotherapy-dubai/" },
          { "@type": "ListItem", "position": 4, "name": "Sciatica Treatment Dubai", "item": CANONICAL_URL }
        ]
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${CANONICAL_URL}#webpage`,
        "url": CANONICAL_URL,
        "name": PAGE_TITLE,
        "description": PAGE_DESCRIPTION,
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "url": "https://ramacarepolyclinic.ae/",
          "name": "RamaCare Polyclinic"
        },
        "medicalAudience": { "@type": "Patient" },
        "about": {
          "@type": "MedicalCondition",
          "name": "Sciatica",
          "description": "A condition characterized by pain radiating along the sciatic nerve, which runs from the lower back through the hips and buttocks and down each leg."
        },
        "reviewedBy": {
          "@id": `${CANONICAL_URL}#physician`
        },
        "publisher": {
          "@type": "MedicalOrganization",
          "name": "RamaCare Polyclinic",
          "url": "https://ramacarepolyclinic.ae/"
        }
      },
      {
        "@type": "Physician",
        "@id": `${CANONICAL_URL}#physician`,
        "name": "Jeena Mathew",
        "medicalSpecialty": "Physiotherapy",
        "honorificSuffix": "BPT, MPT",
        "hasCredential": "DHA Licensed Physiotherapist",
        "url": "https://ramacarepolyclinic.ae/doctors/jeena-mathew-physiotherapist-dubai/",
        "worksFor": {
          "@type": "MedicalOrganization",
          "name": "RamaCare Polyclinic"
        }
      },
      {
        "@type": "MedicalTherapy",
        "@id": `${CANONICAL_URL}#therapy`,
        "name": "Sciatica Physiotherapy Treatment",
        "description": "A structured, evidence-based physiotherapy program for sciatica combining manual therapy, neural mobilization, dry needling, electrotherapy, ultrasound therapy, and progressive exercise, provided by DHA licensed physiotherapists at RamaCare Polyclinic in Dubai.",
        "usedToTreat": {
          "@type": "MedicalCondition",
          "name": "Sciatica"
        },
        "provider": {
          "@type": "MedicalClinic",
          "name": "RamaCare Polyclinic",
          "url": "https://ramacarepolyclinic.ae/"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        "mainEntity": faqs.map(function (f) {
          return {
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.answer
            }
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
        <meta property="og:image:alt" content="Physiotherapist treating sciatica pain at RamaCare Polyclinic Dubai" key="og:image:alt" />
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
                  <span>Advanced Physiotherapy Care</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  Sciatica Treatment Dubai
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl"
                >
                  Relieve Shooting Leg Pain & Restore Your Mobility
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="space-y-4"
              >
                <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                  If pain is shooting from your lower back down into your leg, you're not alone. Sciatica is one of the most common reasons people in Dubai visit a physiotherapist. It can turn ordinary tasks into a daily struggle — sitting at your desk, driving, even standing up from a chair.
                </p>
                <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                  At RamaCare Polyclinic, we see this pattern often: patients wait weeks or months hoping the pain will fade on its own, only to find it getting worse. The truth is, sciatica responds best when it's treated early. The longer nerve irritation continues untreated, the harder recovery can become.
                </p>
                <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                  This page explains what sciatica actually is, what causes it, and how our team approaches sciatica care, using evidence-based physiotherapy. Whether your pain started last week or has lingered for months, understanding your condition is the first step toward relief. If you've been searching for reliable sciatica treatment in Dubai, you're in the right place.
                </p>
                <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                  Sciatica can develop from a herniated disc, muscle tightness, poor posture, or prolonged sitting — all common in Dubai's desk-heavy, car-dependent lifestyle. Patients choose RamaCare because our physiotherapists take time to identify the actual source of nerve irritation, rather than just treating symptoms. That distinction matters for lasting recovery.
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
                  <span className="text-white/90">DHA Licensed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white/90">Non-Surgical</span>
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
                    alt="Physiotherapist treating sciatica pain at RamaCare Polyclinic Dubai"
                    title="Sciatica Treatment Dubai - RamaCare Polyclinic"
                    className="w-full h-[500px] object-cover"
                  />
                  <figcaption className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-sm text-[#1A1A1A]">
                    Expert sciatica treatment at RamaCare Polyclinic, Dubai.
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
                    <p className="text-2xl font-bold text-[#1F5E4B]">500+</p>
                    <p className="text-sm text-gray-600">Happy Patients</p>
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
                The sciatic nerve starts in your lower back, runs through your buttock, and travels down the back of each leg to your foot. When something presses on or irritates this nerve near its spinal root, you feel pain anywhere along that pathway — not just where the pressure is happening. This is why lasting Sciatic Nerve Rehabilitation has to address the root cause, not just the painful area.
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
                  desc: "The sciatic nerve is compressed or inflamed"
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
              Understanding these distinctions is why patients searching for accurate sciatica care guidance should start with a proper clinical assessment, not guesswork.
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
              Several conditions can lead to sciatic nerve irritation. Getting the right sciatica pain treatment plan starts with identifying which cause applies to your specific condition:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Herniated Disc",
                desc: "Disc material presses on the nerve root — one of the most common reasons patients seek specialized herniated disc treatment for relief",
                color: "from-rose-100 to-rose-50"
              },
              {
                title: "Degenerative Disc Disease",
                desc: "Discs wear down with age, reducing cushioning",
                color: "from-blue-100 to-blue-50"
              },
              {
                title: "Spinal Stenosis",
                desc: "Narrowing of the spinal canal compresses nerves, often requiring focused nerve compression care",
                color: "from-purple-100 to-purple-50"
              },
              {
                title: "Piriformis Syndrome",
                desc: "A deep buttock muscle irritates the nerve",
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
              Understanding the root cause matters because effective sciatica care should be tailored to what's actually driving your symptoms, not a one-size-fits-all routine.
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
              Dubai's working population is heavy on desk jobs, commuting, and shift work. This fits several of these risk categories, which is part of why our physiotherapy clinic sees such consistent demand for sciatica care.
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
              Not every backache needs a specialist. But certain signs suggest it's time for a proper assessment.
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
                  These can indicate a rare but serious condition called cauda equina syndrome, which requires urgent medical care — not physiotherapy.
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
              For everything short of an emergency, timely sciatica treatment from a licensed physiotherapist can prevent symptoms from becoming chronic.
            </p>
          </motion.div>
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
                      { icon: Activity, title: "MRI", desc: "The most detailed way to view disc and nerve issues" },
                      { icon: Target, title: "X-ray", desc: "Useful for ruling out structural bone problems" },
                      { icon: Shield, title: "CT Scan", desc: "Used when MRI isn't suitable or more detail is needed" }
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
                      A precise diagnosis is what separates generic advice from genuine, targeted care — it tells us exactly which structures need attention.
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
                    Used to reduce pain signals and calm inflamed tissue, especially useful during the acute, more painful phase. See our{' '}
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
                    Deep heating therapy that promotes blood flow and supports tissue healing around the affected nerve. Read more about{' '}
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
                title: "Personalized Home Exercise Program",
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
              Each technique is introduced at the right stage of recovery. Early sessions typically focus on pain relief, while later sessions build strength and prevent recurrence. This staged approach is a core part of effective physiotherapy management, which is why generic exercise routines often fall short. It's also what distinguishes proper sciatic nerve rehabilitation from a quick, one-off session.
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
              { icon: TrendingUp, title: "Faster Recovery", desc: "Faster, more structured recovery" },
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
                timeline: "May take 6-8 weeks of structured treatment",
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
              Why Choose RamaCare Polyclinic?
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              When you're comparing options for sciatica treatment in Dubai, here's what sets our clinic apart:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: CheckCircle, title: "DHA Licensed Physiotherapists", desc: "With hands-on clinical experience" },
              { icon: Target, title: "Individualized Rehabilitation Plans", desc: "No generic protocols" },
              { icon: Zap, title: "Modern Physiotherapy Equipment", desc: "For accurate assessment and treatment" },
              { icon: Shield, title: "Evidence-Based Treatment", desc: "Aligned with current physiotherapy research" },
              { icon: MapPin, title: "Convenient Dubai Location", desc: "Easy to reach for regular sessions" },
              { icon: Users, title: "Patient-Focused Care", desc: "We explain every step of your treatment" },
              { icon: Activity, title: "Comprehensive Rehabilitation", desc: "From pain relief through to long-term prevention" }
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
              Our goal isn't just to reduce your pain today. It's to help you understand your body, build resilience, and lower the chance of sciatica returning. If your pain stems from a broader issue, our team also manages related conditions like{' '}
              <a href="/services/back-pain-treatment-dubai/" className="underline font-semibold hover:text-[#C9A961]">
                back pain
              </a>{' '}
              and{' '}
              <a href="/services/frozen-shoulder-treatment-dubai/" className="underline font-semibold hover:text-[#C9A961]">
                frozen shoulder
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[#5F5F5F]">
              Here are the questions we hear most often from patients researching sciatica treatment options in Dubai:
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
              You don't have to manage sciatica pain on your own. Our DHA-licensed physiotherapists at RamaCare Polyclinic are ready to assess your condition and build a personalized treatment plan around your specific needs.
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Take the first step toward lasting relief. Book your consultation today via WhatsApp or our online booking system, and let our team guide you through a clear, structured path to recovery. Don't wait for the pain to worsen — early action is one of the biggest factors in a smoother, faster recovery.
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
                href="/contact-us"
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
    </Layout>
  );
}
