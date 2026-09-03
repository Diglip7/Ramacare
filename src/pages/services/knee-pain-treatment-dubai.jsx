import Layout from '../../../components/Layout';
import Head from "next/head";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import {
  Activity,
  MapPin,
  Award,
  Phone,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  HeartPulse,
  ShieldCheck,
  Bone,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Stethoscope,
  Target,
  TrendingUp,
  Zap,
  Footprints,
  Hand
} from 'lucide-react';

export default function KneePainTreatmentPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll handler if needed
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Content data
  const advantages = [
    "Personalized knee pain treatment plans",
    "Experienced physiotherapists and rehabilitation specialists",
    "Advanced physiotherapy and electrotherapy techniques",
    "Non-surgical pain management solutions",
    "Holistic rehabilitation approach",
    "Posture and movement correction support",
    "Comfortable and patient-focused care environment",
    "Focus on long-term mobility and recovery"
  ];

  const causes = [
    "Arthritis and joint degeneration",
    "Sports injuries",
    "Ligament strain or tears",
    "Meniscus injuries",
    "Muscle weakness",
    "Obesity and excess body weight",
    "Poor posture and movement patterns",
    "Overuse and repetitive stress",
    "Running and gym-related injuries",
    "Aging-related joint wear",
    "Sedentary lifestyle",
    "Knee stiffness and inflammation"
  ];

  const symptoms = [
    "Persistent knee pain",
    "Swelling or inflammation",
    "Difficulty walking or climbing stairs",
    "Knee stiffness",
    "Joint weakness",
    "Reduced flexibility",
    "Pain after physical activity",
    "Clicking or locking sensation",
    "Instability while walking",
    "Difficulty bending the knee"
  ];

  const treatmentTypes = [
    {
      title: "Chronic Knee Pain Treatment Dubai",
      description: "Chronic knee pain may affect walking, physical activity, and daily comfort. Long-term pain often develops because of arthritis, muscle weakness, poor posture, or untreated injuries.",
      focus: ["reducing pain", "improving joint stability", "increasing flexibility", "supporting long-term mobility"]
    },
    {
      title: "Arthritis Knee Pain Treatment",
      description: "Arthritis is one of the leading causes of knee pain among adults and senior patients.",
      symptoms_list: ["joint stiffness", "swelling", "reduced mobility", "pain during walking", "inflammation"],
      focus: "Our treatment plans help improve movement and reduce discomfort through physiotherapy and rehabilitation support."
    },
    {
      title: "Sports Injury Knee Treatment",
      description: "Sports injuries involving the knee may affect ligaments, tendons, cartilage, or surrounding muscles.",
      conditions: ["runner's knee", "ligament strain", "knee sprain", "overuse injuries", "gym-related knee pain"],
      focus: "to help patients recover safely and return to physical activity."
    },
    {
      title: "Knee Pain Due to Poor Posture & Muscle Imbalance",
      description: "Incorrect posture and muscular imbalance may place excessive stress on knee joints and surrounding tissues.",
      improvements: ["posture", "movement mechanics", "muscle strength", "joint stability"],
      focus: "to reduce recurring knee pain."
    }
  ];

  const whenToSeeDoctor = [
    "Pain lasts more than two weeks",
    "Swelling continues worsening",
    "Walking becomes difficult",
    "Knee movement is restricted",
    "Pain affects daily activities",
    "Symptoms return frequently",
    "Home remedies are ineffective"
  ];

  const treatmentOptions = [
    {
      icon: Activity,
      title: "Physiotherapy for Knee Pain Dubai",
      description: "Physiotherapy is one of the most effective non-surgical treatments for knee pain and mobility problems.",
      benefits: ["pain reduction", "improved flexibility", "stronger muscles and joints", "improved movement", "better balance and posture", "injury prevention"]
    },
    {
      icon: Zap,
      title: "Electrotherapy for Knee Pain",
      description: "Electrotherapy helps reduce pain, inflammation, and muscle stiffness while improving circulation and tissue healing.",
      options: ["TENS therapy", "ultrasound therapy", "IFT therapy", "muscle stimulation therapy"]
    },
    {
      icon: Hand,
      title: "Manual Therapy & Rehabilitation",
      description: "Hands-on rehabilitation techniques help improve joint mobility, reduce muscle tension, increase flexibility, and support faster recovery.",
      focus: "Manual therapy is often combined with exercise rehabilitation for better long-term results."
    },
    {
      icon: Target,
      title: "Strengthening & Mobility Exercises",
      description: "Targeted rehabilitation exercises help improve muscle strength, joint support, flexibility, movement control, and balance and coordination.",
      focus: "Regular exercise therapy also helps reduce the risk of recurring injuries."
    },
    {
      icon: Footprints,
      title: "Posture Correction & Movement Training",
      description: "Improper walking patterns and posture may increase pressure on knee joints.",
      focus_areas: ["improving body alignment", "correcting movement patterns", "reducing joint stress", "preventing future injuries"]
    },
    {
      icon: HeartPulse,
      title: "Ayurvedic Supportive Therapy for Knee Pain",
      description: "Holistic wellness therapies may help support relaxation, circulation, and overall joint comfort naturally.",
      therapies: ["therapeutic massage", "herbal oil therapies", "relaxation therapies", "wellness-focused supportive care"]
    }
  ];

  const treatmentProcess = [
    {
      step: "1",
      title: "Consultation & Physical Assessment",
      items: ["pain severity", "knee movement", "posture", "flexibility", "muscle strength", "medical history"]
    },
    {
      step: "2",
      title: "Personalized Treatment Planning",
      items: ["mobility limitations", "pain intensity", "rehabilitation goals", "lifestyle factors", "physical activity level"]
    },
    {
      step: "3",
      title: "Therapy & Rehabilitation Sessions",
      items: ["physiotherapy", "electrotherapy", "rehabilitation exercises", "manual therapy", "posture correction therapy"]
    },
    {
      step: "4",
      title: "Recovery & Prevention Support",
      items: ["home exercises", "posture improvement", "weight management", "activity modification", "preventive care"]
    }
  ];

  const benefits = [
    "Reduced pain and stiffness",
    "Improved joint flexibility",
    "Better balance and mobility",
    "Stronger muscles and knee support",
    "Faster recovery from injuries",
    "Improved physical performance",
    "Better walking comfort",
    "Reduced risk of future joint problems"
  ];

  const whoCanBenefit = [
    "Athletes and gym-goers",
    "Office workers",
    "Senior citizens",
    "Patients with arthritis",
    "Individuals recovering from injuries",
    "People with chronic knee pain",
    "Patients with mobility limitations",
    "Individuals with posture-related joint pain"
  ];

  const preventionTips = [
    "Maintain a healthy body weight",
    "Exercise regularly",
    "Stretch before physical activity",
    "Strengthen leg muscles",
    "Maintain proper posture",
    "Avoid overtraining",
    "Wear supportive footwear",
    "Stay physically active",
    "Avoid prolonged sitting"
  ];

  const faqs = [
    {
      question: "What is the best treatment for knee pain in Dubai?",
      answer: "The best knee pain treatment depends on the cause and severity of the condition. Physiotherapy, rehabilitation exercises, electrotherapy, posture correction, and lifestyle modifications are commonly recommended for long-term relief."
    },
    {
      question: "Can physiotherapy help chronic knee pain?",
      answer: "Yes, physiotherapy can help improve joint flexibility, strengthen supporting muscles, reduce inflammation, improve mobility, and prevent recurring knee pain naturally and safely."
    },
    {
      question: "What causes knee pain?",
      answer: "Knee pain may develop because of arthritis, sports injuries, ligament strain, obesity, muscle weakness, overuse, aging, poor posture, or repetitive stress on the knee joint."
    },
    {
      question: "Is surgery necessary for knee pain treatment?",
      answer: "Most knee pain conditions can often be treated effectively with non-surgical physiotherapy and rehabilitation programs focused on improving strength, flexibility, and joint stability."
    },
    {
      question: "Can obesity cause knee pain?",
      answer: "Yes, excess body weight places additional pressure on knee joints, increasing the risk of inflammation, stiffness, arthritis, and chronic knee discomfort over time."
    },
    {
      question: "Does exercise help reduce knee pain?",
      answer: "Yes, guided strengthening and rehabilitation exercises help improve muscle support, joint flexibility, balance, and movement while reducing pain and stiffness safely."
    },
    {
      question: "What are the symptoms of chronic knee pain?",
      answer: "Common symptoms include swelling, stiffness, reduced movement, pain while walking, weakness, clicking sounds, inflammation, difficulty climbing stairs, and discomfort during physical activity."
    },
    {
      question: "Can arthritis cause knee pain?",
      answer: "Yes, arthritis is one of the leading causes of knee pain and may result in joint stiffness, swelling, inflammation, reduced flexibility, and difficulty walking comfortably."
    },
    {
      question: "How long does knee pain recovery take?",
      answer: "Recovery time depends on the severity of the condition, physical health, treatment consistency, rehabilitation exercises, and the patient's response to physiotherapy sessions."
    },
    {
      question: "Can poor posture affect knee joints?",
      answer: "Yes, poor posture and incorrect walking patterns can increase pressure on the knees, leading to muscular imbalance, joint stress, and recurring knee pain."
    },
    {
      question: "What is electrotherapy for knee pain?",
      answer: "Electrotherapy uses electrical stimulation techniques such as TENS therapy and ultrasound therapy to reduce inflammation, relieve pain, improve circulation, and support tissue healing."
    },
    {
      question: "When should I see a doctor for knee pain?",
      answer: "You should consult a specialist if knee pain lasts more than two weeks, affects mobility, causes swelling, limits movement, or worsens during daily activities."
    },
    {
      question: "Can sports injuries lead to knee pain?",
      answer: "Yes, sports injuries involving ligaments, tendons, cartilage, or muscles may cause knee pain, swelling, instability, and reduced physical performance if left untreated."
    },
    {
      question: "Are non-surgical knee pain treatments effective?",
      answer: "Yes, non-surgical treatments such as physiotherapy, rehabilitation exercises, posture correction, and wellness therapies are highly effective for many knee pain conditions."
    },
    {
      question: "How much does knee pain treatment cost in Dubai?",
      answer: "The cost of knee pain treatment in Dubai depends on the condition severity, physiotherapy sessions required, rehabilitation duration, and personalized treatment plan recommended by the specialist."
    }
  ];

  const tabSections = [
    { title: "All Causes", icon: AlertTriangle },
    { title: "Symptoms", icon: Stethoscope },
    { title: "When to See Doctor", icon: Clock }
  ];

  const CANONICAL_URL = 'https://ramacarepolyclinic.ae/services/knee-pain-treatment-dubai/';

  const faqsForSchema = (faqs || []).map(faq => ({
    question: faq.question,
    answer: faq.answer
  }));

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_URL}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ramacarepolyclinic.ae/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Physiotherapy",
            "item": "https://ramacarepolyclinic.ae/services/physiotherapy-dubai/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Knee Pain Treatment",
            "item": CANONICAL_URL
          }
        ]
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${CANONICAL_URL}#webpage`,
        "url": CANONICAL_URL,
        "name": "Knee Pain Treatment in Dubai | Joint Pain Relief",
        "description": "Expert knee pain treatment in Dubai with personalized physiotherapy and non-surgical solutions at RamaCare Polyclinic.",
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "url": "https://ramacarepolyclinic.ae/",
          "name": "RamaCare Polyclinic"
        },
        "about": {
          "@type": "MedicalCondition",
          "name": "Knee Pain"
        },
        "reviewedBy": {
          "@type": "Person",
          "name": "Jeena Mathew",
          "jobTitle": "Musculoskeletal Physiotherapy Specialist",
          "url": "https://ramacarepolyclinic.ae/doctors/jeena-mathew-physiotherapist-dubai/"
        }
      },
      {
        "@type": "MedicalProcedure",
        "@id": `${CANONICAL_URL}#procedure`,
        "name": "Knee Pain Treatment in Dubai",
        "alternateName": "Knee Pain Physiotherapy",
        "url": CANONICAL_URL,
        "mainEntityOfPage": CANONICAL_URL,
        "description": "Non-surgical physiotherapy and rehabilitation for chronic knee pain, arthritis, sports injuries, and joint mobility issues, delivered by DHA-licensed physiotherapists.",
        "procedureType": "Physical therapy technique",
        "bodyLocation": "Knee Joint",
        "provider": {
          "@type": "MedicalClinic",
          "name": "RamaCare Polyclinic",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1",
            "addressLocality": "Jumeirah 1",
            "addressRegion": "Dubai",
            "postalCode": "393558",
            "addressCountry": "AE"
          },
          "telephone": "+971 56 659 7878",
          "areaServed": {
            "@type": "City",
            "name": "Dubai"
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        "mainEntity": faqsForSchema.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  const physiotherapyResources = [
    { text: 'Ultrasound Therapy', link: '/services/ultrasound-therapy-dubai/', bgColor: 'bg-[#ECFDF5]' },
    { text: 'Electrotherapy', link: '/services/electrotherapy-dubai/', bgColor: 'bg-[#EFF6FF]' },
    { text: 'Pelvic Floor Therapy', link: '/services/pelvic-floor-therapy-dubai/', bgColor: 'bg-[#FEF2F2]' },
    { text: 'Scoliosis Treatment', link: '/services/scoliosis-treatment-in-dubai/', bgColor: 'bg-[#FEF2F2]' },
    { text: 'Functional Exercise', link: '/services/functional-exercises-dubai/', bgColor: 'bg-[#F5F3FF]' },
    { text: 'Dry Needling Therapy', link: '/services/dry-needling-dubai/', bgColor: 'bg-[#F5F3FF]' },
    { text: 'Dry Needling & Ultrasound Combo', link: '/services/dry-needling-ultrasound-combo-dubai/', bgColor: 'bg-[#ECFDF5]' },
    { text: 'Back Pain Treatment', link: '/services/back-pain-treatment-dubai/', bgColor: 'bg-[#EFF6FF]' },
    { text: 'Migraine Treatment', link: '/services/migraine-treatment-dubai/', bgColor: 'bg-[#F5F3FF]' },
    { text: 'Post Surgery Recovery', link: '/services/post-surgery-recovery-dubai/', bgColor: 'bg-[#ECFDF5]' },
    { text: 'Office Neck Treatment', link: '/services/office-neck-treatment-dubai/', bgColor: 'bg-[#EFF6FF]' },
    { text: 'Physiotherapy Insurance', link: '/services/physiotherapy-insurance-dubai/', bgColor: 'bg-[#FEF2F2]' }
  ];

  return (
    <Layout>
      <Head>
        <title key="title">Knee Pain Treatment in Dubai | Joint Pain Relief</title>
        <meta name="description" content="Expert knee pain treatment in Dubai with personalized physiotherapy and non-surgical solutions at RamaCare Polyclinic." key="description" />
        <meta name="keywords" content="Knee pain treatment Dubai, Knee physiotherapy Dubai, Arthritis knee treatment, Sports injury knee treatment, Chronic knee pain Dubai, Knee rehabilitation Dubai, Joint pain relief Dubai" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Knee Pain Treatment in Dubai | Joint Pain Relief" />
        <meta property="og:description" content="Expert knee pain treatment in Dubai with personalized physiotherapy and non-surgical solutions at RamaCare Polyclinic." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/knee-pain.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="RamaCare Polyclinic" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Knee Pain Treatment in Dubai | Joint Pain Relief" />
        <meta name="twitter:description" content="Expert knee pain treatment in Dubai with personalized physiotherapy and non-surgical solutions." />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/knee-pain.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#5F5F5F]">
            <li>
              <a href="/" className="hover:text-[#1F5E4B] transition-colors">Home</a>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-gray-400">/</span>
              <a href="/services/physiotherapy-dubai/" className="hover:text-[#1F5E4B] transition-colors">Physiotherapy</a>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-gray-400">/</span>
              <span className="text-[#1F5E4B] font-medium">Knee Pain Treatment</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section - Unique Diagonal Design */}
      <section className="relative bg-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#E8F5E9] to-transparent"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#1F5E4B]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-[#2A7D63]/5 rounded-full blur-2xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 md:pt-6 md:pb-16 lg:pt-8 lg:pb-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content - Spans 7 columns */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Badge with Icon */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-3 bg-white border-2 border-[#1F5E4B]/20 px-5 py-2.5 rounded-full shadow-sm"
                >
                  <div className="w-8 h-8 bg-[#1F5E4B] rounded-full flex items-center justify-center">
                    <Bone className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#1F5E4B] font-semibold text-sm">Joint & Mobility Specialists</span>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] leading-[1.1]">
                    Knee Pain <span className="text-[#1F5E4B]">Treatment</span> in Dubai
                  </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-[#1F5E4B] font-medium leading-relaxed"
                >
                  Advanced Care for Knee Pain Relief, Joint Mobility & Long-Term Recovery
                </motion.p>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-base md:text-lg text-[#5F5F5F] leading-relaxed max-w-2xl hidden sm:block"
                >
                  Knee pain is one of the most common joint problems affecting people of all ages. Whether caused by injury, arthritis, sports strain, aging, obesity, or prolonged physical stress, knee pain can make walking, climbing stairs, exercising, and daily activities difficult.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <a
                    href="#book-now"
                    className="group inline-flex items-center gap-3 bg-[#1F5E4B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2A7D63] transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <Clock className="w-5 h-5" />
                    <span>Book Consultation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a rel="nofollow noopener noreferrer" target="_blank" href="https://wa.me/971566597878"
                    className="inline-flex items-center gap-3 border-2 border-[#1F5E4B] text-[#1F5E4B] px-8 py-4 rounded-lg font-semibold hover:bg-[#1F5E4B] hover:text-white transition-all hover:-translate-y-0.5"
                  >
                    <Phone className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </motion.div>
              </motion.div>

              {/* Stats with Icons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="grid grid-cols-3 gap-6 pt-8 border-t-2 border-[#E9E2D6]"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-[#E8F5E9] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-[#1F5E4B]" />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">15+</div>
                    <div className="text-xs md:text-sm text-[#5F5F5F]">Years Combined Experience</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-[#E3F2FD] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-[#1565C0]" />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">2500+</div>
                    <div className="text-xs md:text-sm text-[#5F5F5F]">Patients Treated</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-[#FFF3E0] rounded-lg flex items-center justify-center flex-shrink-0">
                    <HeartPulse className="w-6 h-6 text-[#E65100]" />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">95%</div>
                    <div className="text-xs md:text-sm text-[#5F5F5F]">Success Rate</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Visual - Spans 5 columns */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/knee-pain.jpg"
                    alt="Knee pain treatment and physiotherapy session at RamaCare Polyclinic Dubai"
                    width={1200}
                    height={630}
                    quality={75}
                    priority
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: 'spring' }}
                  className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border-2 border-[#1F5E4B]/20"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-[#1F5E4B]" />
                    <div>
                      <div className="text-sm font-bold text-[#1A1A1A]">Non-Surgical</div>
                      <div className="text-xs text-[#5F5F5F]">Treatment</div>
                    </div>
                  </div>
                </motion.div>

                {/* Bottom Accent Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -bottom-6 -left-6 bg-[#FFF8E1] rounded-xl shadow-lg p-4 border-2 border-[#F57F17]/20"
                >
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#F57F17]" />
                    <span className="text-sm font-semibold text-[#F57F17]">Quick Recovery</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section - Asymmetric Cards with Accent */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Large Left Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 bg-white p-8 md:p-12 rounded-2xl shadow-lg border-l-4 border-[#1F5E4B]"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
                Expert Knee Pain Treatment at RamaCare Polyclinic
              </h2>
              <div className="space-y-4 text-[#5F5F5F] leading-relaxed text-lg">
                <p>
                  At RamaCare Polyclinic, we provide comprehensive and personalized knee pain treatment in Dubai focused on reducing pain, improving mobility, and supporting long-term joint health naturally and effectively.
                </p>
                <p>
                  Our experienced physiotherapists and rehabilitation specialists use advanced physiotherapy techniques, electrotherapy, rehabilitation exercises, posture correction, and holistic wellness support to treat the root cause of knee pain while improving flexibility, strength, and movement.
                </p>
              </div>
            </motion.div>

            {/* Right Cards Stack */}
            <div className="lg:col-span-4 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] p-6 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-[#1F5E4B] mb-3">Personalized Care</h3>
                <p className="text-[#1F5E4B]/80 leading-relaxed text-sm">
                  Whether you are experiencing chronic knee pain, sports injuries, arthritis-related discomfort, ligament strain, or mobility limitations, our specialists create customized treatment plans.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-[#FFF8E1] to-[#FFECB3] p-6 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-[#F57F17] mb-3">Non-Surgical Approach</h3>
                <p className="text-[#F57F17]/80 leading-relaxed text-sm">
                  We focus on natural, non-invasive treatments that promote healing without surgery, helping you recover safely and effectively.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section - Icon Grid with Color Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Why Choose RamaCare for Knee Pain Treatment in Dubai?
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Patients across Dubai trust RamaCare Polyclinic for personalized and non-surgical joint pain management solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => {
              const colorPairs = [
                { bg: 'bg-[#E8F5E9]', border: 'border-[#1F5E4B]', icon: 'text-[#1F5E4B]' },
                { bg: 'bg-[#FFF3E0]', border: 'border-[#E65100]', icon: 'text-[#E65100]' },
                { bg: 'bg-[#E3F2FD]', border: 'border-[#1565C0]', icon: 'text-[#1565C0]' },
                { bg: 'bg-[#F3E5F5]', border: 'border-[#6A1B9A]', icon: 'text-[#6A1B9A]' },
                { bg: 'bg-[#E0F2F1]', border: 'border-[#00695C]', icon: 'text-[#00695C]' },
                { bg: 'bg-[#FCE4EC]', border: 'border-[#C2185B]', icon: 'text-[#C2185B]' },
                { bg: 'bg-[#FFF8E1]', border: 'border-[#F57F17]', icon: 'text-[#F57F17]' },
                { bg: 'bg-[#E8EAF6]', border: 'border-[#283593]', icon: 'text-[#283593]' }
              ];
              const colors = colorPairs[index % colorPairs.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`group ${colors.bg} p-6 rounded-xl border-2 ${colors.border} transition-all hover:shadow-lg`}
                >
                  <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <CheckCircle className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <p className="text-[#1A1A1A] font-semibold text-sm leading-relaxed">{advantage}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Knee Pain Is Common in Dubai - Two Column with Icons */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content with Highlight Box */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                  Why Knee Pain Is <span className="text-[#1F5E4B]">Common in Dubai</span>
                </h2>
                <div className="space-y-4 text-[#5F5F5F] leading-relaxed text-lg">
                  <p>
                    Knee pain has become increasingly common among Dubai residents because of sedentary lifestyles, obesity, sports injuries, prolonged standing, and physically demanding routines.
                  </p>
                  <p>
                    Long office hours, reduced physical activity, excess body weight, and poor posture may place additional stress on the knee joints.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#1F5E4B] to-[#2A7D63] p-6 rounded-xl text-white">
                <p className="font-semibold text-lg">
                  Athletes, gym-goers, office workers, drivers, and older adults are particularly vulnerable to knee-related problems.
                </p>
              </div>

              <div className="bg-[#FFF8E1] border-l-4 border-[#F57F17] p-6 rounded-r-xl">
                <p className="text-[#F57F17] font-semibold">
                  Early physiotherapy and rehabilitation can help prevent worsening joint damage and improve overall mobility naturally.
                </p>
              </div>
            </motion.div>

            {/* Right - Icon Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { label: "Sedentary Lifestyles", icon: "💺", color: "bg-[#E8F5E9]" },
                { label: "Sports Injuries", icon: "⚽", color: "bg-[#E3F2FD]" },
                { label: "Obesity", icon: "⚖️", color: "bg-[#FFF3E0]" },
                { label: "Poor Posture", icon: "🪑", color: "bg-[#F3E5F5]" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`${item.color} p-8 rounded-2xl text-center space-y-4 shadow-md`}
                >
                  <div className="text-5xl">{item.icon}</div>
                  <div className="text-sm text-[#1A1A1A] font-semibold">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabbed Section: Causes, Symptoms, When to See Doctor - Modern Tabs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Understanding Knee Pain
            </h2>
          </motion.div>

          {/* Tabs with Color Indicators */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-[#FAFAF8] p-2 rounded-xl shadow-inner">
              {tabSections.map((tab, index) => {
                const Icon = tab.icon;
                const tabColors = [
                  'bg-[#1F5E4B] text-white',
                  'bg-[#E65100] text-white',
                  'bg-[#1565C0] text-white'
                ];
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${activeTab === index
                      ? tabColors[index]
                      : 'text-[#5F5F5F] hover:text-[#1A1A1A]'
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content with Color Coding - Optimized for SEO */}
          <div className="max-w-5xl mx-auto relative">
            {/* All Causes Tab */}
            <div className={`${activeTab === 0 ? 'block' : 'hidden'} animate-in fade-in duration-300`}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {causes.map((cause, index) => {
                  const bgColors = [
                    'bg-[#E8F5E9]', 'bg-[#FFF3E0]', 'bg-[#E3F2FD]',
                    'bg-[#F3E5F5]', 'bg-[#E0F2F1]', 'bg-[#FCE4EC]',
                    'bg-[#FFF8E1]', 'bg-[#E8EAF6]', 'bg-[#E8F5E9]',
                    'bg-[#FFF3E0]', 'bg-[#E3F2FD]', 'bg-[#F3E5F5]'
                  ];
                  const textColors = [
                    'text-[#1F5E4B]', 'text-[#E65100]', 'text-[#1565C0]',
                    'text-[#6A1B9A]', 'text-[#00695C]', 'text-[#C2185B]',
                    'text-[#F57F17]', 'text-[#283593]', 'text-[#1F5E4B]',
                    'text-[#E65100]', 'text-[#1565C0]', 'text-[#6A1B9A]'
                  ];

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.03 }}
                      className={`${bgColors[index]} p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-2 border-transparent hover:border-[#1F5E4B]/30`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-8 h-8 ${bgColors[index]} rounded-full flex items-center justify-center flex-shrink-0 border-2 ${textColors[index].replace('text-', 'border-')}`}>
                          <span className={`${textColors[index]} text-sm font-bold`}>{index + 1}</span>
                        </div>
                        <span className="text-[#1A1A1A] font-medium">{cause}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Symptoms Tab */}
            <div className={`${activeTab === 1 ? 'block' : 'hidden'} animate-in fade-in duration-300`}>
              <div className="grid md:grid-cols-2 gap-6">
                {symptoms.map((symptom, index) => {
                  const symptomColors = [
                    { bg: 'bg-[#FFEBEE]', border: 'border-[#E53935]', text: 'text-[#E53935]' },
                    { bg: 'bg-[#FFF3E0]', border: 'border-[#FB8C00]', text: 'text-[#FB8C00]' },
                    { bg: 'bg-[#E8F5E9]', border: 'border-[#1F5E4B]', text: 'text-[#1F5E4B]' },
                    { bg: 'bg-[#E3F2FD]', border: 'border-[#1E88E5]', text: 'text-[#1E88E5]' }
                  ];
                  const colors = symptomColors[index % symptomColors.length];

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex items-center gap-4 ${colors.bg} p-5 rounded-xl border-2 ${colors.border} hover:shadow-md transition-all`}
                    >
                      <AlertTriangle className={`w-6 h-6 ${colors.text} flex-shrink-0`} />
                      <span className="text-[#1A1A1A] font-medium">{symptom}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* When to See Doctor Tab */}
            <div className={`${activeTab === 2 ? 'block' : 'hidden'} animate-in fade-in duration-300`}>
              <div className="bg-gradient-to-br from-[#1F5E4B] to-[#2A7D63] p-8 md:p-12 rounded-2xl text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6">When Should You See a Knee Pain Specialist?</h3>
                <p className="text-white/90 mb-8 text-lg">
                  Ignoring knee pain may worsen joint damage and reduce mobility over time. You should consult a knee pain specialist in Dubai if:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {whenToSeeDoctor.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Knee Pain We Treat - Card Grid */}
      <section className="py-24 bg-gradient-to-br from-[#F8F9FA] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Types of Knee Pain We Treat
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              At RamaCare Polyclinic, we provide treatment for various acute and chronic knee conditions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {treatmentTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#1F5E4B]/30"
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#1A1A1A]">{type.title}</h3>
                  <p className="text-[#5F5F5F] leading-relaxed text-lg">{type.description}</p>

                  {type.focus && Array.isArray(type.focus) && (
                    <div className="bg-[#FAFAF8] p-5 rounded-xl border-l-4 border-[#1F5E4B]">
                      <p className="text-[#1A1A1A] font-medium mb-3">Our rehabilitation programs focus on:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {type.focus.map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#1F5E4B] flex-shrink-0" />
                            <span className="text-sm text-[#5F5F5F]">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {type.symptoms_list && (
                    <div className="space-y-2">
                      <p className="text-[#1A1A1A] font-medium">Common symptoms include:</p>
                      <div className="flex flex-wrap gap-2">
                        {type.symptoms_list.map((item, i) => (
                          <span key={i} className="bg-[#1F5E4B]/10 text-[#1F5E4B] px-3 py-1 rounded-full text-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {type.conditions && (
                    <div className="space-y-2">
                      <p className="text-[#1A1A1A] font-medium">We provide rehabilitation support for:</p>
                      <div className="flex flex-wrap gap-2">
                        {type.conditions.map((item, i) => (
                          <span key={i} className="bg-[#2A7D63]/10 text-[#2A7D63] px-3 py-1 rounded-full text-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {type.improvements && (
                    <div className="bg-[#FAFAF8] p-5 rounded-xl">
                      <p className="text-[#1A1A1A] font-medium mb-3">Our physiotherapy programs help improve:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {type.improvements.map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-[#1F5E4B] flex-shrink-0" />
                            <span className="text-sm text-[#5F5F5F]">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {typeof type.focus === 'string' && (
                    <p className="text-[#1F5E4B] font-medium italic">{type.focus}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Options - Clean White Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Our Knee Pain Treatment Options in Dubai
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              We provide personalized physiotherapy and rehabilitation programs designed according to each patient's condition and mobility goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group bg-gradient-to-br from-white to-[#FAFAF8] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#1F5E4B]/30"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1F5E4B] to-[#2A7D63] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{option.title}</h3>
                  <p className="text-[#5F5F5F] leading-relaxed mb-4">{option.description}</p>

                  {option.benefits && (
                    <div className="space-y-2">
                      <p className="text-[#1A1A1A] font-medium text-sm">Benefits include:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {option.benefits.map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-[#1F5E4B] flex-shrink-0" />
                            <span className="text-xs text-[#5F5F5F]">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {option.options && (
                    <div className="space-y-2">
                      <p className="text-[#1A1A1A] font-medium text-sm">Treatment options may include:</p>
                      <div className="flex flex-wrap gap-2">
                        {option.options.map((item, i) => (
                          <span key={i} className="bg-[#1F5E4B]/10 text-[#1F5E4B] px-2 py-1 rounded text-xs">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {option.therapies && (
                    <div className="space-y-2">
                      <p className="text-[#1A1A1A] font-medium text-sm">Supportive therapies may include:</p>
                      <div className="flex flex-wrap gap-2">
                        {option.therapies.map((item, i) => (
                          <span key={i} className="bg-[#2A7D63]/10 text-[#2A7D63] px-2 py-1 rounded text-xs">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatment Process - Timeline */}
      <section className="py-24 bg-gradient-to-b from-[#FAFAF8] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Knee Pain Treatment Process at RamaCare
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Our structured approach ensures comprehensive care and long-term recovery.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {treatmentProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Timeline Line */}
                  {index < treatmentProcess.length - 1 && (
                    <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-[#1F5E4B] to-[#1F5E4B]/20"></div>
                  )}

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1F5E4B] to-[#2A7D63] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                        {step.step}
                      </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl flex-1 shadow-lg hover:shadow-xl transition-all border-2 border-transparent group-hover:border-[#1F5E4B]/30">
                      <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">{step.title}</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {step.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-[#1F5E4B] flex-shrink-0" />
                            <span className="text-[#5F5F5F]">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Grid with Icons */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Benefits of Professional Knee Pain Treatment
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Professional treatment can help improve joint function and overall quality of life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-gradient-to-br from-[#1F5E4B] to-[#2A7D63] p-6 rounded-2xl text-white shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <p className="text-white font-semibold text-sm leading-relaxed pt-3">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Benefit - Clean List */}
      <section className="py-24 bg-gradient-to-br from-[#F8F9FA] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Who Can Benefit From Knee Pain Treatment?
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Our treatment programs are suitable for:
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="grid md:grid-cols-2 gap-6">
                {whoCanBenefit.map((person, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 bg-[#1F5E4B]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#1F5E4B] transition-colors">
                      <Users className="w-5 h-5 text-[#1F5E4B] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[#1A1A1A] font-medium">{person}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Section - Premium Card */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-[#1F5E4B] to-[#2A7D63] p-8 md:p-12 rounded-3xl shadow-2xl text-white overflow-hidden"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Knee Pain Treatment Cost in Dubai
                </h2>
                <p className="text-white/90 leading-relaxed mb-8 text-lg">
                  The cost of knee pain treatment in Dubai depends on several factors, including:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Severity of the condition",
                    "Number of physiotherapy sessions required",
                    "Type of therapy recommended",
                    "Rehabilitation duration",
                    "Advanced treatment techniques used"
                  ].map((factor, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
                    >
                      <ArrowRight className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-white">{factor}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-white/90 leading-relaxed">
                  At RamaCare Polyclinic, we provide affordable and personalized treatment plans tailored to each patient's condition, mobility goals, and recovery needs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prevention Tips Section - Grid Layout */}
      <section className="py-24 bg-gradient-to-b from-[#FAFAF8] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Tips to Prevent Knee Pain Naturally
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Healthy lifestyle habits can help reduce stress on the knee joints and improve mobility.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {preventionTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-[#1F5E4B]/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#1F5E4B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-[#1F5E4B]" />
                    </div>
                    <span className="text-[#1A1A1A] font-medium">{tip}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Clean Accordion */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#1F5E4B]/10 px-6 py-2 rounded-full mb-4">
              <span className="text-[#1F5E4B] font-semibold">Common Questions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Frequently Asked Questions – Knee Pain Treatment in Dubai
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#FAFAF8] rounded-2xl overflow-hidden border-2 border-transparent hover:border-[#1F5E4B]/30 transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-[#F5F5F5] transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#1A1A1A] pr-4">{faq.question}</h3>
                  <div className={`w-10 h-10 bg-[#1F5E4B]/10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5 text-[#1F5E4B]" />
                  </div>
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-[#5F5F5F] leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="w-full bg-[#F3F4F6] py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-3">
              Complete Physiotherapy Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {physiotherapyResources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="bg-white rounded-xl p-4 md:p-5 flex items-center justify-between cursor-pointer transition-all duration-300 shadow-sm hover:shadow-lg hover:translate-x-1 hover:border hover:border-[#1F5E4B]/30 group"
              >
                <div className="flex items-center gap-3 md:gap-4 flex-1">
                  <div className={`${resource.bgColor} w-10 h-10 md:w-11 md:h-11 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <Activity className="w-5 h-5 text-[#1F5E4B]" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-[#1F2937] transition-all duration-300 group-hover:text-[#1F5E4B] group-hover:text-sm md:group-hover:text-base">
                    {resource.text}
                  </span>
                </div>

                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-[#6B7280] flex-shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#1F5E4B]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#1F5E4B] to-[#2A7D63] text-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mt-48"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full -mr-40 -mb-40"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Book Knee Pain Treatment in Dubai
            </h2>

            <div className="space-y-6 text-white/90 leading-relaxed text-lg max-w-4xl mx-auto">
              <p>
                If you are experiencing knee stiffness, joint pain, sports injuries, arthritis-related discomfort, or mobility limitations, professional physiotherapy and rehabilitation can help improve your movement and quality of life.
              </p>
              <p>
                At RamaCare Polyclinic, we provide personalized knee pain treatment in Dubai focused on pain relief, mobility improvement, joint stability, and long-term recovery.
              </p>
              <p className="text-white font-semibold text-xl">
                Book your consultation today and take the first step toward healthier and pain-free movement.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <a
                href="#book-now"
                className="group inline-flex items-center gap-3 bg-white text-[#1F5E4B] px-10 py-5 rounded-lg font-semibold text-lg hover:bg-[#FAFAF8] transition-all hover:shadow-xl"
              >
                <Clock className="w-6 h-6" />
                <span>Book Consultation</span>
              </a>
              <a rel="nofollow noopener noreferrer" target="_blank" href="https://wa.me/971566597878"
                className="group inline-flex items-center gap-3 bg-transparent text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all border-2 border-white"
              >
                <Phone className="w-6 h-6" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Reviewer Badge */}
      <ContentReviewBadge doctorName="Jeena Mathew" pageSlug="knee-pain-treatment-dubai" />

      {/* Book Consultation Component */}
      <BookConsultation
        content={{
          badge: 'Start Your Journey',
          title: 'Book Knee Pain Treatment in Dubai Today',
          description: 'Restore your mobility and live pain-free with trusted knee pain treatment at RamaCare Polyclinic—safe, personalized, and focused on long-term results.',
          getInTouchTitle: 'Get In Touch',
          requestAppointmentTitle: 'Request Appointment',
          submitButtonText: 'Confirm Free Consultation',
          contactInfo: {
            phone: '+971 04 286 2006',
            whatsapp: '971566597878',
            email: 'query@ramacarepolyclinic.ae',
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
            {
              title: 'DHA Licensed',
              description: 'Certified Physiotherapy Facility'
            },
            {
              title: 'Experienced Team',
              description: '15+ Years Combined'
            },
            {
              title: '2,500+ Patients',
              description: 'Treated'
            },
            {
              title: '4.8/5 Rating',
              description: 'Patient Reviews'
            }
          ]
        }}
      />
    </Layout>
  );
}
