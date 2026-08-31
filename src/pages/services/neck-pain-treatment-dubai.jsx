
import Layout from '../../../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import QuickNavigation from '../../../components/QuickNavigation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Phone,
  MapPin,
  Clock,
  Calendar,
  ArrowRight,
  Stethoscope,
  Activity,
  Shield,
  Zap,
  Users,
  Briefcase,
  AlertTriangle,
  TrendingUp,
  ChevronRight,
  HeartPulse,
  Star,
  Plus,
  Minus
} from 'lucide-react';

export default function NeckPainTreatmentPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeTreatment, setActiveTreatment] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const navItems = [
    { id: 'what-is-neck-pain', label: 'What is Neck Pain?' },
    { id: 'common-causes', label: 'Causes' },
    { id: 'symptoms', label: 'Symptoms' },
    { id: 'risk-factors', label: 'Risk Factors' },
    { id: 'diagnosis', label: 'Diagnosis' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'recovery-timeline', label: 'Recovery' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const symptoms = [
    'Neck stiffness, especially in the morning — one of the most frequent reasons patients seek treatment',
    'Joint stiffness that limits how far you can turn your head',
    'Pain while turning or tilting the head',
    'Headaches starting at the base of the skull',
    'Shoulder pain or tightness',
    'Arm pain that radiates from the neck',
    'Tingling sensations in the arm or hand',
    'Numbness along the arm',
    'Muscle weakness in the arm or hand',
    'Muscle spasms in the neck or upper back',
    'Reduced range of motion when looking side to side'
  ];

  const riskFactors = [
    'Sedentary lifestyle — weak postural muscles struggle to support the head properly',
    'Long computer use — hours at a screen encourage forward head posture',
    'Mobile phone overuse — constantly looking down loads the cervical spine',
    'Poor ergonomics — desks, chairs, and monitors set up incorrectly strain the neck',
    'Heavy lifting — improper lifting technique can strain neck and shoulder muscles',
    'Previous injuries — an old whiplash or sports injury can leave lasting vulnerability',
    'Aging — natural wear on the cervical discs and joints increases with age'
  ];

  const whenToSeePhysio = [
    'Pain that persists beyond a few days',
    'Pain lasting more than a week without improvement',
    'Numbness or tingling running down your arm',
    'Noticeable muscle weakness in your arm or hand',
    'Loss of normal neck movement',
    'Pain that began after an injury or accident',
    'Neck pain that keeps returning in cycles'
  ];

  const urgentSigns = [
    'Severe pain after a fall, accident, or blow to the head or neck',
    'Sudden weakness or numbness affecting both arms or legs',
    'Loss of bladder or bowel control alongside neck pain'
  ];

  const diagnosisSteps = [
    'Medical history — understanding when your pain started, what triggers it, and any past injuries',
    'Physical examination — checking the neck, shoulders, and upper back for tenderness and muscle tightness',
    'Posture analysis — identifying forward head posture or other alignment issues contributing to strain',
    'Cervical mobility testing — measuring how far and how comfortably you can move your neck',
    'Neurological examination — testing reflexes, sensation, and strength to check for nerve involvement',
    'Functional assessment — observing how your neck pain affects daily movement and activity',
    'Imaging referrals when necessary — X-ray or MRI referrals for cases that don\'t respond as expected or show warning signs'
  ];

  const treatments = [
    {
      title: 'Manual Therapy',
      description: 'Hands-on techniques that ease muscle tension, improve joint mobility, and reduce pain in the early stages of treatment. Often the starting point for those with significant stiffness or muscle spasm.'
    },
    {
      title: 'Dry Needling',
      description: 'Fine needles target tight muscle knots and trigger points, particularly effective for myofascial pain and nerve compression symptoms in the neck and upper shoulders. Performed by licensed physiotherapists.'
    },
    {
      title: 'Electrotherapy',
      description: 'Used to calm inflamed tissue and reduce pain signals, especially useful when neck pain is at its most acute. Often paired with manual therapy for faster relief.'
    },
    {
      title: 'Ultrasound Therapy',
      description: 'Deep heating therapy that increases blood flow and supports tissue healing in strained or inflamed areas. Typically combined with a broader treatment plan.'
    },
    {
      title: 'Therapeutic Exercises',
      description: 'Guided movement exercises that restore normal neck function and reduce compensatory strain on the shoulders and upper back.'
    },
    {
      title: 'Stretching Program',
      description: 'Targeted stretches for the neck, shoulders, and upper back to relieve tightness and improve flexibility.'
    },
    {
      title: 'Cervical Stabilization Exercises',
      description: 'Exercises that strengthen the deep neck muscles responsible for supporting your head, reducing strain on the spine itself.'
    },
    {
      title: 'Strength Training',
      description: 'Progressive strengthening for the neck and upper back once acute pain has settled, helping prevent recurrence.'
    },
    {
      title: 'Posture Correction',
      description: 'Practical guidance on sitting, standing, and movement habits that reduce ongoing strain on the cervical spine.'
    },
    {
      title: 'Ergonomic Education',
      description: 'Advice on workstation setup, monitor height, and daily habits to reduce repeated strain — especially valuable for office-based patients.'
    },
    {
      title: 'Sports Rehabilitation',
      description: 'For athletes recovering from neck-related sports injuries, this program combines strengthening and stretching exercises to restore strength and mobility.'
    },
    {
      title: 'Home Exercise Program',
      description: 'A personalized set of exercises to continue between sessions, reinforcing progress and supporting long-term recovery.'
    }
  ];

  const recoveryTimeline = [
    {
      period: 'Weeks 1–2',
      description: 'Focus is on calming pain and muscle guarding, using manual therapy, electrotherapy, and gentle guided movement.'
    },
    {
      period: 'Weeks 3–4',
      description: 'Range of motion typically improves and stretching progresses; stabilization exercises are introduced as pain settles.'
    },
    {
      period: 'Weeks 5–8',
      description: 'Strengthening and posture correction take priority, with home exercises reinforcing clinic sessions.'
    },
    {
      period: 'Beyond 8 weeks',
      description: 'Chronic or long-standing cases may need an extended program, with periodic reassessment to track progress.'
    }
  ];

  const conditions = [
    'Cervical spondylosis',
    'Muscle strain',
    'Text neck',
    'Pinched nerve',
    'Herniated cervical disc',
    'Whiplash',
    'Office syndrome',
    'Sports injuries',
    'Postural neck pain',
    'Chronic neck pain'
  ];

  const relatedConditions = [
    'Back pain',
    'Frozen shoulder',
    'Sciatica'
  ];

  const benefits = [
    'Pain relief without relying solely on medication',
    'Better posture and spinal alignment',
    'Improved flexibility in the neck and shoulders',
    'Stronger muscles supporting the cervical spine',
    'Increased range of motion',
    'Faster, more structured recovery',
    'Reduced risk of the pain returning',
    'Better overall quality of life'
  ];

  const preventionTips = [
    'Set up your workstation correctly — your monitor should sit at eye level, roughly an arm\'s length away',
    'Check your monitor positioning — avoid looking down or craning your neck forward for long periods',
    'Stretch every hour — a short break to move your neck and shoulders prevents stiffness from building up',
    'Do strength exercises regularly — strong neck and upper back muscles support better posture',
    'Maintain proper sleeping posture — keep your spine neutral, avoiding sleeping on your stomach',
    'Choose the right pillow — one that supports the natural curve of your neck',
    'Manage stress — tension often settles in the neck and shoulders, so stress reduction matters',
    'Stay active with regular exercise — general fitness supports spinal health and posture'
  ];

  const whyChoose = [
    { title: 'DHA Licensed Physiotherapists', desc: 'With hands-on clinical experience' },
    { title: 'Personalized Treatment Plans', desc: 'Every program is built around your specific condition and goals' },
    { title: 'Modern Rehabilitation Equipment', desc: 'For accurate assessment and effective treatment' },
    { title: 'Evidence-Based Physiotherapy', desc: 'Aligned with current clinical research' },
    { title: 'Multidisciplinary Care', desc: 'Coordinated support when your condition needs more than one specialty' },
    { title: 'Convenient Dubai Location', desc: 'Easy to reach for regular sessions' },
    { title: 'Compassionate Patient Care', desc: 'We explain every step so you understand your treatment' },
    { title: 'Same-Day Appointments', desc: 'Subject to availability, for patients who need prompt evaluation' }
  ];

  const patientJourney = [
    'Initial Consultation',
    'Comprehensive Assessment',
    'Diagnosis',
    'Customized Treatment Plan',
    'Hands-on Therapy',
    'Exercise Program',
    'Progress Monitoring',
    'Recovery',
    'Prevention & Maintenance'
  ];

  const faqs = [
    {
      question: 'What causes neck pain?',
      answer: 'Neck pain commonly results from poor posture, muscle strain, text neck, whiplash, or degenerative changes like cervical spondylosis.'
    },
    {
      question: 'Can physiotherapy help neck pain?',
      answer: 'Yes. Physiotherapy is one of the most effective non-surgical approaches for reducing neck pain, improving mobility, and preventing recurrence. Structured neck pain treatment programs combine hands-on therapy with guided exercise for lasting results.'
    },
    {
      question: 'How many sessions will I need?',
      answer: 'This varies by condition and severity. Mild strain may resolve in a few sessions, while chronic issues often need a longer, structured program.'
    },
    {
      question: 'Is treatment painful?',
      answer: 'Most techniques are comfortable, though some methods like dry needling may cause brief, mild discomfort. Your physiotherapist adjusts intensity to your tolerance.'
    },
    {
      question: 'Can neck pain cause headaches?',
      answer: 'Yes. Tension in the neck and upper shoulder muscles often triggers headaches that start at the base of the skull.'
    },
    {
      question: 'Can poor posture cause neck pain?',
      answer: 'Yes, poor posture is one of the leading causes of neck pain, particularly forward head posture from prolonged screen use.'
    },
    {
      question: 'What is cervical spondylosis?',
      answer: 'It\'s age-related wear and tear affecting the cervical vertebrae and discs, often causing stiffness and reduced mobility.'
    },
    {
      question: 'When should I seek treatment?',
      answer: 'If pain persists beyond a few days, radiates into your arm, or is accompanied by numbness or weakness, it\'s time for a proper evaluation.'
    },
    {
      question: 'Does insurance cover physiotherapy?',
      answer: 'Coverage varies by provider and policy. Our team can help you understand your options during your visit.'
    },
    {
      question: 'Is surgery always necessary?',
      answer: 'No. Most neck pain, including cases involving disc problems, responds well to non-surgical physiotherapy treatment.'
    },
    {
      question: 'Can neck pain return?',
      answer: 'Yes, especially if the underlying cause — like poor posture or weak supporting muscles — isn\'t addressed, which is why we focus on prevention as much as pain relief.'
    },
    {
      question: 'Is dry needling effective?',
      answer: 'Many patients find dry needling helpful for releasing tight muscle knots and trigger points that contribute to neck pain.'
    },
    {
      question: 'What exercises help?',
      answer: 'Gentle stretching, cervical stabilization exercises, and posture-focused strengthening are commonly used, ideally guided by a physiotherapist.'
    },
    {
      question: 'How long is recovery?',
      answer: 'Mild cases often improve within a few weeks, while chronic neck pain may take longer with consistent, structured treatment.'
    },
    {
      question: 'How do I book an appointment?',
      answer: 'You can book directly through our website, call the clinic, or message us on WhatsApp for a fast response.'
    },
    {
      question: 'Can stress make neck pain worse?',
      answer: 'Yes, stress often increases muscle tension in the neck and shoulders, which can worsen existing discomfort.'
    },
    {
      question: 'Is it normal for neck pain to affect my arm?',
      answer: 'Pain, tingling, or numbness radiating into the arm usually points to nerve involvement and should be assessed by a physiotherapist.'
    },
    {
      question: 'Can sleeping position affect neck pain?',
      answer: 'Yes, an unsupportive pillow or awkward sleeping position is a common, often overlooked cause of morning neck stiffness.'
    },
    {
      question: 'Are older adults more prone to neck pain?',
      answer: 'Yes, age-related changes like cervical spondylosis and reduced disc height increase the likelihood of neck pain in older adults.'
    },
    {
      question: 'Can athletes get neck injuries treated at RamaCare?',
      answer: 'Yes, we offer sports rehabilitation programs designed specifically for athletes recovering from neck-related injuries.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/neck-pain-treatment-dubai/";
  const PAGE_TITLE = "Neck Pain Treatment Dubai | RamaCare Polyclinic";
  const PAGE_DESCRIPTION = "Suffering from neck pain? Get expert Neck Pain Treatment Dubai care at RamaCare Polyclinic with DHA-licensed physiotherapists. Book your consultation today.";
  const OG_IMAGE = "https://ramacarepolyclinic.ae/images/neck-pain-clinic-cta-dubai.jpg";

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
            "name": "Services",
            "item": "https://ramacarepolyclinic.ae/services/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Physiotherapy",
            "item": "https://ramacarepolyclinic.ae/services/physiotherapy-dubai/"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Neck Pain Treatment Dubai",
            "item": CANONICAL_URL
          }
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
          "name": "Neck Pain",
          "alternateName": ["Cervical Pain", "Neck Stiffness"],
          "description": "Neck pain is discomfort, stiffness, or soreness in the cervical spine — the seven small vertebrae that support your head and connect it to your shoulders. It can be caused by poor posture, text neck, muscle strain, whiplash, or degenerative changes like cervical spondylosis."
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
        "@type": "MedicalProcedure",
        "@id": `${CANONICAL_URL}#procedure`,
        "name": "Neck Pain Physiotherapy Treatment",
        "alternateName": "Cervical Spine Physiotherapy",
        "url": CANONICAL_URL,
        "mainEntityOfPage": CANONICAL_URL,
        "description": "Expert physiotherapy treatment for neck pain combining manual therapy, dry needling, electrotherapy, ultrasound therapy, therapeutic exercises, and posture correction for lasting relief.",
        "procedureType": "Physical therapy technique",
        "bodyLocation": "Cervical Spine",
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
            "postalCode": "393558",
            "addressCountry": "AE"
          },
          "areaServed": {
            "@type": "City",
            "name": "Dubai"
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        "mainEntity": faqs.map(faq => ({
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

  const causes = [
    { cause: 'Poor posture', desc: 'Slouching strains the muscles that hold your head upright' },
    { cause: 'Text neck', desc: 'Looking down at phones repeatedly overloads the cervical spine' },
    { cause: 'Office work', desc: 'Long, static hours at a desk stiffen neck and shoulder muscles' },
    { cause: 'Muscle strain', desc: 'Sudden movement or overuse irritates neck muscles' },
    { cause: 'Whiplash', desc: 'Rapid back-and-forth motion, often from a car accident, injures soft tissue' },
    { cause: 'Cervical spondylosis', desc: 'Age-related wear on the cervical vertebrae and discs' },
    { cause: 'Herniated disc', desc: 'Disc material presses on a nearby nerve root' },
    { cause: 'Arthritis', desc: 'Joint inflammation reduces mobility and causes stiffness' },
    { cause: 'Pinched nerve', desc: 'Compression of a cervical nerve causes localized and radiating pain' },
    { cause: 'Sports injuries', desc: 'Contact sports or repetitive strain can injure neck structures' },
    { cause: 'Sleeping posture', desc: 'An unsupportive pillow or awkward sleeping position strains the neck overnight' },
    { cause: 'Stress-related tension', desc: 'Emotional stress often settles as muscle tightness in the neck and shoulders' }
  ];

  return (
    <Layout>
      <Head>
        <title key="title">{PAGE_TITLE}</title>
        <meta name="description" key="description" content={PAGE_DESCRIPTION} />
          <meta name="keywords" content="Neck pain treatment Dubai, Neck pain specialist Dubai, Physiotherapy for neck pain Dubai, Cervical pain treatment Dubai, Chronic neck pain Dubai, Neck stiffness treatment Dubai, Cervical spondylosis Dubai, Pinched nerve neck Dubai, Upper back and neck pain Dubai, Neck muscle strain Dubai, Neck rehabilitation Dubai, Best physiotherapy clinic Dubai, Manual therapy Dubai, Dry needling Dubai, Electrotherapy Dubai, Ultrasound therapy Dubai, Sports injury physiotherapy Dubai" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content={PAGE_TITLE} key="og:title" />
        <meta property="og:description" content={PAGE_DESCRIPTION} key="og:description" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:image" content={OG_IMAGE} key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Neck Pain Treatment Dubai consultation at RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={PAGE_TITLE} key="twitter:title" />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} key="twitter:description" />
        <meta name="twitter:image" content={OG_IMAGE} key="twitter:image" />

        {/* Structured Data / Schemas */}
        <script
          key="schema-graph"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#5F5F5F]">
            <li>
              <a href="/" className="hover:text-[#1F5E4B] transition-colors">Home</a>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-gray-400">/</span>
              <a href="/services/" className="hover:text-[#1F5E4B] transition-colors">Services</a>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-gray-400">/</span>
              <a href="/services/physiotherapy-dubai/" className="hover:text-[#1F5E4B] transition-colors">Physiotherapy</a>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-gray-400">/</span>
              <span className="text-[#1F5E4B] font-medium">Neck Pain Treatment Dubai</span>
            </li>
          </ol>
        </div>
      </nav>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-[#0F2F24] overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1F5E4B]/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1F5E4B]/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div className="container mx-auto px-6 py-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-[#1F5E4B]/30 px-4 py-2 rounded-full mb-6">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-white/80 text-sm font-medium">DHA-Licensed Physiotherapists</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                  Expert <span className="text-[#38D39F]">Neck Pain Treatment</span> in Dubai
                </h1>
                <div className="space-y-6 text-lg text-white/80">
                  <p>
                    If turning your head has become a painful chore, or your neck feels stiff the moment you wake up, you're not alone. This is a problem that affects millions of desk-bound professionals in Dubai. Neck Pain Treatment Dubai searches spike every year as more people spend long hours hunched over laptops, phones, and steering wheels. RamaCare Polyclinic sees the results of that lifestyle every day in clinic.
                  </p>
                  <p>
                    The good news: most neck pain responds well to the right physiotherapy approach. You don't need to live with constant stiffness, headaches, or that nagging ache between your shoulder blades.
                  </p>
                  <p>
                    At RamaCare Polyclinic, our DHA-licensed physiotherapists assess the real cause of your discomfort, not just the symptoms. We build a treatment plan around your body, your daily habits, and your recovery goals. Whether your pain started last week or has followed you for months, relief is possible with the right expert physiotherapy care.
                  </p>
                </div>
                <Link href="/book-appointment">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-10 bg-[#38D39F] text-[#0F2F24] px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Book Your Consultation Today
                  </motion.button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-[#1F5E4B] to-[#38D39F] rounded-3xl overflow-hidden relative shadow-lg flex items-center justify-center">
                  <img
                    src="/images/Patient consulting a physiotherapist about neck pain.jpg"
                    alt="Neck Pain Treatment Dubai consultation at RamaCare Polyclinic"
                    className="absolute inset-0 w-full h-full object-cover z-10"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="text-center p-6 relative z-0">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Activity className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-white/80 text-sm mt-2 max-w-xs mx-auto">Neck Pain Treatment Dubai consultation at RamaCare Polyclinic</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <QuickNavigation navItems={navItems} />

        {/* What is Neck Pain? */}
        <section id="what-is-neck-pain" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1F5E4B] mb-4">What is Neck Pain?</h2>
                <div className="w-24 h-1 bg-[#38D39F] mx-auto"></div>
              </div>
              <div className="max-w-4xl mx-auto mb-12">
                <p className="text-xl text-gray-700 leading-relaxed text-center">
                  Neck pain is discomfort, stiffness, or soreness in the cervical spine — the seven small vertebrae that support your head and connect it to your shoulders. These vertebrae, muscles, ligaments, and discs let you turn, tilt, and nod your head. When any part of this structure is strained, irritated, or compressed, pain follows.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#1F5E4B]/10 to-[#38D39F]/10 rounded-3xl overflow-hidden relative border border-[#1F5E4B]/20 flex items-center justify-center">
                    <img
                      src="/images/cervical-spine-anatomy-dubai.jpg"
                      alt="Cervical spine anatomy diagram showing neck vertebrae"
                      className="absolute inset-0 w-full h-full object-cover z-10"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="text-center p-6 relative z-0">
                      <div className="w-24 h-24 bg-[#1F5E4B]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Activity className="w-12 h-12 text-[#1F5E4B]" />
                      </div>
                      <p className="text-gray-600 text-sm mt-1 max-w-xs mx-auto">Cervical spine anatomy diagram showing neck vertebrae</p>
                    </div>
                  </div>
                </motion.div>
                <div className="flex flex-col">
                  <div className="grid gap-8">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-gradient-to-br from-[#F0F9F4] to-[#E8F5E9] p-8 rounded-2xl border border-[#1F5E4B]/10"
                    >
                      <div className="w-12 h-12 bg-[#1F5E4B] rounded-xl flex items-center justify-center mb-6 mx-auto">
                        <Activity className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1F5E4B] mb-4">Acute vs. Chronic Neck Pain</h3>
                      <p className="text-gray-700">
                        Acute neck pain usually appears suddenly, often after sleeping awkwardly, a minor strain, or a long day at a desk. It typically settles within a few days to a couple of weeks. Chronic neck pain often points to an underlying issue such as cervical spondylosis, a disc bulge, or long-standing postural strain.
                      </p>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-gradient-to-br from-[#FFF8E1] to-[#FFECB3] p-8 rounded-2xl border border-[#FFA000]/20"
                    >
                      <div className="w-12 h-12 bg-[#FFA000] rounded-xl flex items-center justify-center mb-6 mx-auto">
                        <AlertTriangle className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#FF6F00] mb-4">Why Early Diagnosis Matters</h3>
                      <p className="text-gray-700">
                        Left untreated, minor neck strain can develop into chronic tension, nerve irritation, or reduced range of motion. Getting an accurate assessment early — rather than waiting for the pain to become unbearable — makes recovery faster and more straightforward. This is the foundation of effective neck pain treatment that Dubai clinics should offer.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Common Causes of Neck Pain - Table */}
        <section id="common-causes" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1F5E4B] mb-4">Common Causes of Neck Pain</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Neck pain rarely comes from a single source. Understanding what's driving your discomfort is the first step toward the right treatment plan.
                </p>
                <div className="w-24 h-1 bg-[#38D39F] mx-auto mt-6"></div>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-6 text-[#1F5E4B] font-bold text-lg">Cause</th>
                        <th className="text-left py-4 px-6 text-gray-700 font-bold text-lg">What's Happening</th>
                      </tr>
                    </thead>
                    <tbody>
                      {causes.map((item, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.03 }}
                          className="border-b border-gray-100 hover:bg-[#F0F9F4] transition-colors"
                        >
                          <td className="py-4 px-6 text-[#1F5E4B] font-semibold">{item.cause}</td>
                          <td className="py-4 px-6 text-gray-600">{item.desc}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#38D39F]/10 to-[#1F5E4B]/10 rounded-3xl overflow-hidden relative border border-[#1F5E4B]/20 mb-8 flex items-center justify-center">
                    <img
                      src="/images/Causes of neck pain infographic.jpg"
                      alt="Common causes of neck pain including posture and text neck"
                      className="absolute inset-0 w-full h-full object-cover z-10"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="text-center p-6 relative z-0">
                      <div className="w-24 h-24 bg-[#38D39F]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-12 h-12 text-[#38D39F]" />
                      </div>
                      <p className="text-gray-600 text-sm mt-1 max-w-xs mx-auto">Common causes of neck pain including posture and text neck</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#1F5E4B]/10 to-[#38D39F]/10 p-8 rounded-2xl border border-[#1F5E4B]/20">
                    <p className="text-lg text-gray-700">
                      Many patients are dealing with more than one of these at once. Forward head posture often combines with stress-related muscle spasm, or a neck muscle strain that has spread into the upper shoulders. This overlap is why upper back and neck pain so often occur together, and why a proper assessment matters more than guessing at home remedies.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Symptoms of Neck Pain */}
        <section id="symptoms" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1F5E4B] mb-4">Symptoms of Neck Pain</h2>
                <div className="w-24 h-1 bg-[#38D39F] mx-auto"></div>
              </div>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                  Neck pain symptoms vary depending on the underlying cause, but common signs include:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-10">
                  {symptoms.map((symptom, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
                    >
                      <CheckCircle className="w-6 h-6 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{symptom}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="bg-[#FFF3E0] p-8 rounded-2xl border-l-4 border-[#FF6F00]">
                  <p className="text-gray-800 font-medium">
                    If pain radiates into your arm with tingling or numbness, this often signals nerve involvement — a pattern we look for closely during assessment, since it changes how we approach treatment.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Risk Factors */}
        <section id="risk-factors" className="py-24 bg-gradient-to-br from-gray-50 to-[#F0F9F4]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1F5E4B] mb-4">Risk Factors</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Certain habits and circumstances raise your likelihood of developing neck pain. Recognizing them helps you understand your own risk.
                </p>
                <div className="w-24 h-1 bg-[#38D39F] mx-auto mt-6"></div>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4 mb-10">
                  {riskFactors.map((factor, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm"
                    >
                      <TrendingUp className="w-6 h-6 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{factor}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="bg-[#1F5E4B] text-white p-8 rounded-2xl">
                  <p className="text-lg">
                    Dubai's fast-paced, desk-heavy work culture means office syndrome — a cluster of neck, shoulder, and back complaints from prolonged sitting — is one of the most common reasons patients seek specialist care.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* When Should You See a Physiotherapist? */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1F5E4B] mb-4">When Should You See a Physiotherapist?</h2>
                <div className="w-24 h-1 bg-[#38D39F] mx-auto"></div>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div>
                  <h3 className="text-2xl font-bold text-[#1F5E4B] mb-6">Signs to Seek Care</h3>
                  <p className="text-gray-700 mb-6">
                    Not every stiff neck needs professional care — some cases settle with rest and gentle movement. But certain signs mean it's time for a proper evaluation:
                  </p>
                  <div className="space-y-3">
                    {whenToSeePhysio.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
                      >
                        <ChevronRight className="w-6 h-6 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#D32F2F] mb-6">Seek Urgent Medical Attention</h3>
                  <div className="bg-[#FFEBEE] border border-[#FFCDD2] p-6 rounded-2xl">
                    <div className="space-y-4">
                      {urgentSigns.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          className="flex items-start gap-4"
                        >
                          <AlertTriangle className="w-6 h-6 text-[#D32F2F] flex-shrink-0 mt-0.5" />
                          <p className="text-gray-800">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-[#FFCDD2]">
                      <p className="text-gray-700">
                        These symptoms may indicate a serious spinal issue and require immediate medical evaluation, not physiotherapy alone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Diagnosis at RamaCare */}
        <section id="diagnosis" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1F5E4B] mb-4">Diagnosis at RamaCare</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Effective neck pain treatment begins with an accurate diagnosis. Our physiotherapists follow a structured assessment process.
                </p>
                <div className="w-24 h-1 bg-[#38D39F] mx-auto mt-6"></div>
              </div>
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-5 flex-shrink-0 self-stretch"
                >
                  <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-[#1F5E4B]/20 lg:sticky lg:top-24">
                    <Image
                      src="/images/Physiotherapist examining a patient's neck.jpg"
                      alt="Physiotherapist assessing cervical mobility in Dubai clinic"
                      fill
                      sizes="(max-width: 1024px) 100vw, 41.66vw"
                      className="object-cover"
                    />
                  </div>
                </motion.div>
                <div className="lg:col-span-7">
                  <div className="space-y-4 sm:space-y-5">
                    {diagnosisSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="flex items-start gap-5 p-5 sm:p-6 bg-white rounded-2xl shadow-sm"
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1F5E4B] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-base sm:text-lg">{index + 1}</span>
                        </div>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed pt-1">{step}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-8 bg-[#1F5E4B]/10 p-6 sm:p-8 rounded-2xl border border-[#1F5E4B]/20">
                    <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                      This thorough approach ensures your treatment plan targets the actual source of your pain, not just the area that hurts.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What to Expect From Neck Pain Treatment Dubai Clinics */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1F5E4B] mb-4">What to Expect From Neck Pain Treatment Dubai Clinics</h2>
                <div className="w-24 h-1 bg-[#38D39F] mx-auto"></div>
              </div>
              <div className="bg-gradient-to-r from-[#1F5E4B] to-[#38D39F] p-10 rounded-3xl text-white">
                <p className="text-xl leading-relaxed">
                  A reliable clinic combines hands-on therapy with active rehabilitation, not just short-term pain relief. You should expect a clear explanation of your diagnosis, a treatment plan tailored to your findings, and measurable progress checkpoints along the way.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Neck Pain Treatments at RamaCare */}
        <section id="treatments" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1F5E4B] mb-4">Neck Pain Treatments at RamaCare</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our approach to neck pain treatment combines hands-on therapy with active rehabilitation. We build every rehabilitation program around your specific diagnosis.
                </p>
                <div className="w-24 h-1 bg-[#38D39F] mx-auto mt-6"></div>
              </div>
              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {treatments.map((treatment, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.04 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      onClick={() => setActiveTreatment(index)}
                      className={`cursor-pointer p-6 rounded-2xl transition-all ${activeTreatment === index
                          ? 'bg-[#1F5E4B] text-white shadow-xl'
                          : 'bg-white text-gray-800 shadow-sm hover:shadow-md'
                        }`} >
                      <h3 className={`text-xl font-bold mb-3 ${activeTreatment === index ? 'text-white' : 'text-[#1F5E4B]'}`}>
                        {treatment.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${activeTreatment === index ? 'text-white/90' : 'text-gray-600'}`}>
                        {treatment.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#38D39F]/10 to-[#1F5E4B]/10 rounded-2xl overflow-hidden relative border border-[#1F5E4B]/20 flex items-center justify-center">
                    <div className="absolute top-4 left-4 bg-white/85 backdrop-blur-sm text-[#1F5E4B] text-xs font-bold px-3 py-1 rounded-full z-20 shadow-sm border border-white/20">
                      Manual Therapy
                    </div>
                    <img
                      src="/images/manual-therapy-session-dubai.jpg"
                      alt="Manual therapy session for cervical pain treatment Dubai"
                      className="absolute inset-0 w-full h-full object-cover z-10"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="text-center p-4 relative z-0">
                      <div className="w-16 h-16 bg-[#1F5E4B]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Activity className="w-8 h-8 text-[#1F5E4B]" />
                      </div>
                      <p className="text-gray-600 text-xs max-w-xs mx-auto">Manual therapy session for cervical pain treatment Dubai</p>
                    </div>
                  </div>
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#FFF8E1]/50 to-[#FFECB3]/50 rounded-2xl overflow-hidden relative border border-[#FFA000]/20 flex items-center justify-center">
                    <div className="absolute top-4 left-4 bg-white/85 backdrop-blur-sm text-[#FF6F00] text-xs font-bold px-3 py-1 rounded-full z-20 shadow-sm border border-white/20">
                      Dry Needling
                    </div>
                    <img
                      src="/images/Dry needling treatment on neck.jpg"
                      alt="Dry needling therapy for neck muscle tension Dubai"
                      className="absolute inset-0 w-full h-full object-cover z-10"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}/>
                    <div className="text-center p-4 relative z-0">
                      <div className="w-16 h-16 bg-[#FFA000]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Activity className="w-8 h-8 text-[#FFA000]" />
                      </div>
                      <p className="text-gray-600 text-xs max-w-xs mx-auto">Dry needling therapy for neck muscle tension Dubai</p>
                    </div>
                  </div>
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#E0F2FE] to-[#BAE6FD] rounded-2xl overflow-hidden relative border border-[#0284C7]/20 flex items-center justify-center">
                    <div className="absolute top-4 left-4 bg-white/85 backdrop-blur-sm text-[#0369A1] text-xs font-bold px-3 py-1 rounded-full z-20 shadow-sm border border-white/20">
                      Posture Correction
                    </div>
                    <img
                      src="/images/Posture correction demonstration.jpg"
                      alt="Posture correction technique for neck pain relief Dubai"
                      className="absolute inset-0 w-full h-full object-cover z-10"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="text-center p-4 relative z-0">
                      <div className="w-16 h-16 bg-[#0284C7]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Activity className="w-8 h-8 text-[#0284C7]" />
                      </div>
                      <p className="text-gray-600 text-xs max-w-xs mx-auto">Posture correction technique for neck pain relief Dubai</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 bg-gradient-to-r from-[#F0F9F4] to-white p-8 rounded-2xl border border-[#1F5E4B]/10">
                  <p className="text-lg text-gray-700">
                    Each treatment is introduced at the appropriate stage of your recovery. Early sessions typically focus on reducing pain and muscle tension, while later sessions build strength and address the habits that caused the problem in the first place.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What to Expect: Recovery Timeline */}
        <section id="recovery-timeline" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }} >
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1F5E4B] mb-4">What to Expect: Recovery Timeline</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Recovery speed depends on the underlying cause, how long symptoms have been present, and consistency with home exercises. As a general guide:
                </p>
                <div className="w-24 h-1 bg-[#38D39F] mx-auto mt-6"></div>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-[#1F5E4B]/20"></div>
                  <div className="space-y-12">
                    {recoveryTimeline.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-24">
                        <div className="absolute left-5 top-2 w-8 h-8 bg-[#1F5E4B] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl">
                          <h3 className="text-2xl font-bold text-[#1F5E4B] mb-4">{item.period}</h3>
                          <p className="text-lg text-gray-700">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="mt-12 bg-[#FFF8E1] p-8 rounded-2xl border border-[#FFA000]/20">
                  <p className="text-lg text-gray-800">
                    These ranges are illustrative, not a guarantee — mild, recent-onset neck pain often resolves faster, while chronic or nerve-related pain can take longer. Your physiotherapist will give you a realistic estimate after your initial assessment.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Conditions We Treat */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1F5E4B] mb-4">Conditions We Treat</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our physiotherapists manage a wide range of neck-related conditions, including:
                </p>
                <div className="w-24 h-1 bg-[#38D39F] mx-auto mt-6"></div>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                  {conditions.map((condition, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-[#38D39F] flex-shrink-0" />
                      <p className="text-gray-800 font-medium">{condition}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-[#1F5E4B]/10 to-[#38D39F]/10 p-8 rounded-2xl border border-[#1F5E4B]/20">
                  <p className="text-lg text-gray-700">
                    If your neck pain is connected to a broader issue, our team also manages related conditions such as back pain, frozen shoulder, and sciatica.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits of Physiotherapy */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1F5E4B] mb-4">Benefits of Physiotherapy</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Structured physiotherapy offers meaningful advantages over rest or over-the-counter medication alone:
                </p>
                <div className="w-24 h-1 bg-[#38D39F] mx-auto mt-6"></div>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4 mb-10">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-start gap-4 p-4 bg-[#F0F9F4] rounded-xl border border-[#1F5E4B]/10"
                    >
                      <CheckCircle className="w-6 h-6 text-[#38D39F] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="bg-[#1F5E4B] text-white p-8 rounded-2xl">
                  <p className="text-lg">
                    Physiotherapy also gives you practical tools to manage your neck health independently, rather than depending on repeated treatment every time discomfort returns.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Neck Pain Prevention Tips */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-[#F0F9F4]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>

              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1F5E4B] mb-4">Neck Pain Prevention Tips</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Once your neck pain has improved, these habits help keep it that way:
                </p>
                <div className="w-24 h-1 bg-[#38D39F] mx-auto mt-6"></div>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                <div>
                  <div className="space-y-4">
                    {preventionTips.map((tip, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm"
                      >
                        <div className="w-8 h-8 bg-[#38D39F] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <p className="text-gray-700">{tip}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-[#1F5E4B]/10 to-[#38D39F]/10 rounded-3xl overflow-hidden relative border border-[#1F5E4B]/20 flex items-center justify-center">
                      <div className="absolute top-4 left-4 bg-white/85 backdrop-blur-sm text-[#1F5E4B] text-xs font-bold px-3 py-1 rounded-full z-20 shadow-sm border border-white/20">
                        Ergonomic Setup
                      </div>
                      <img
                        src="/images/Ergonomic workstation setup.jpg"
                        alt="Ergonomic desk setup to prevent neck pain Dubai"
                        className="absolute inset-0 w-full h-full object-cover z-10"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className="text-center p-6 relative z-0">
                        <div className="w-24 h-24 bg-[#1F5E4B]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Activity className="w-12 h-12 text-[#1F5E4B]" />
                        </div>
                        <p className="text-gray-600 text-sm mt-1 max-w-xs mx-auto">Ergonomic desk setup to prevent neck pain Dubai</p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50, delay: 0.2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-[#FFF8E1]/50 to-[#FFECB3]/50 rounded-3xl overflow-hidden relative border border-[#FFA000]/20 flex items-center justify-center">
                      <div className="absolute top-4 left-4 bg-white/85 backdrop-blur-sm text-[#FF6F00] text-xs font-bold px-3 py-1 rounded-full z-20 shadow-sm border border-white/20">
                        Neck Exercises
                      </div>
                      <img
                        src="/images/Patient performing neck stretching exercises.jpg"
                        alt="Guided neck stretching exercise at Dubai physiotherapy clinic"
                        className="absolute inset-0 w-full h-full object-cover z-10"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className="text-center p-6 relative z-0">
                        <div className="w-24 h-24 bg-[#FFA000]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Activity className="w-12 h-12 text-[#FFA000]" />
                        </div>
                        <p className="text-gray-600 text-sm mt-1 max-w-xs mx-auto">Guided neck stretching exercise at Dubai physiotherapy clinic</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose RamaCare Polyclinic? */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1F5E4B] mb-4">Why Choose RamaCare Polyclinic?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  When you're comparing options for neck pain treatment in Dubai, here's what sets us apart:
                </p>
                <div className="w-24 h-1 bg-[#38D39F] mx-auto mt-6"></div>
              </div>
              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {whyChoose.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      whileHover={{ y: -5, scale: 1.03 }}
                      className="bg-gradient-to-br from-[#F0F9F4] to-white p-6 rounded-2xl border border-[#1F5E4B]/10 shadow-sm"
                    >
                      <div className="w-12 h-12 bg-[#1F5E4B] rounded-xl flex items-center justify-center mb-4">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#1F5E4B] mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Patient Journey */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1F5E4B] mb-4">Patient Journey</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Here's what to expect when you begin treatment at RamaCare Polyclinic:
                </p>
                <div className="w-24 h-1 bg-[#38D39F] mx-auto mt-6"></div>
              </div>
              <div className="max-w-5xl mx-auto">
                <div className="flex flex-wrap justify-center gap-4">
                  {patientJourney.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="relative"
                    >
                      <div className="bg-white px-6 py-4 rounded-xl shadow-sm flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#1F5E4B] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <p className="text-gray-800 font-medium">{step}</p>
                      </div>
                      {index < patientJourney.length - 1 && (
                        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 hidden md:block">
                          <ArrowRight className="w-6 h-6 text-[#38D39F]" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
                <div className="mt-12 bg-gradient-to-r from-[#1F5E4B]/10 to-[#38D39F]/10 p-8 rounded-2xl border border-[#1F5E4B]/20 text-center">
                  <p className="text-lg text-gray-700">
                    Every stage is guided by your physiotherapist, with adjustments made as your condition improves. This structured approach is what makes physiotherapy for neck pain at RamaCare consistent and results-focused.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section id="faq" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1F5E4B] mb-4">Frequently Asked Questions</h2>
                <div className="w-24 h-1 bg-[#38D39F] mx-auto"></div>
              </div>
              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-6 flex items-center justify-between"
                    >
                      <h3 className="text-lg font-bold text-gray-800 pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-6 h-6 text-[#1F5E4B] flex-shrink-0" />
                      ) : (
                        <Plus className="w-6 h-6 text-[#1F5E4B] flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                      >
                        <p className="text-gray-700">{faq.answer}</p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Book Your Consultation */}
        <section id="book-now" className="py-24 bg-gradient-to-br from-[#0F2F24] to-[#1F5E4B]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Book Your Consultation</h2>
                <p className="text-xl text-white/80">
                  You don't have to manage neck pain on your own. Our DHA-licensed physiotherapists at RamaCare Polyclinic are ready to assess your condition and build a treatment plan around your specific needs.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-white/90 mb-8 leading-relaxed">
                    Take the first step toward lasting relief. Call RamaCare Polyclinic, message us on WhatsApp, or book your physiotherapy consultation online. Early treatment leads to a smoother, faster recovery — don't wait for stiffness or discomfort to become a bigger problem.
                  </p>
                  <Link href="/book-appointment">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#38D39F] text-[#0F2F24] px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      Book Consultation Now
                    </motion.button>
                  </Link>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="aspect-[4/3] bg-white/10 rounded-3xl overflow-hidden relative border border-white/20 flex items-center justify-center">
                    <img
                      src="/images/neck-pain-clinic-cta-dubai.jpg"
                      alt="Book Neck Pain Treatment Dubai consultation at RamaCare Polyclinic"
                      className="absolute inset-0 w-full h-full object-cover z-10"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="text-center p-6 relative z-0">
                      <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Activity className="w-16 h-16 text-white" />
                      </div>
                      <p className="text-white/80 text-sm mt-2 max-w-xs mx-auto">Book Neck Pain Treatment Dubai consultation at RamaCare Polyclinic</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="mt-12">
                <p className="text-white/80">
                  Visit our <Link href="/" className="underline hover:text-white">RamaCare Polyclinic homepage</Link> to learn more about our full range of physiotherapy and rehabilitation services, including <Link href="/services/post-surgery-rehabilitation-dubai/" className="underline hover:text-white">post-surgery rehabilitation</Link>. Our team also manages related conditions such as <Link href="/services/back-pain-treatment-dubai/" className="underline hover:text-white">back pain</Link>, <Link href="/services/frozen-shoulder-treatment-dubai/" className="underline hover:text-white">frozen shoulder</Link>, <Link href="/services/cervical-spondylosis-treatment-dubai/" className="underline hover:text-white">cervical spondylosis</Link>, and <Link href="/services/sciatica-treatment-dubai/" className="underline hover:text-white">sciatica</Link>.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Conditions & Physiotherapy Services Cross-Links Section */}
        <section className="w-full bg-[#F3F4F6] py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-3">
                Related Conditions &amp; Physiotherapy Services
              </h2>
              <p className="text-sm md:text-base text-[#6B7280]">
                Explore related musculoskeletal therapies and specialized rehabilitation programs at RamaCare Dubai.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { text: 'Cervical Spondylosis Treatment', link: '/services/cervical-spondylosis-treatment-dubai/', bgColor: 'bg-[#EFF6FF]' },
                { text: 'Office Neck Treatment', link: '/services/office-neck-treatment-dubai/', bgColor: 'bg-[#ECFDF5]' },
                { text: 'Shoulder Pain Treatment', link: '/services/shoulder-pain-treatment-dubai/', bgColor: 'bg-[#EFF6FF]' },
                { text: 'Frozen Shoulder Treatment', link: '/services/frozen-shoulder-treatment-dubai/', bgColor: 'bg-[#FEF2F2]' },
                { text: 'Back Pain Treatment', link: '/services/back-pain-treatment-dubai/', bgColor: 'bg-[#F5F3FF]' },
                { text: 'Sciatica Treatment', link: '/services/sciatica-treatment-dubai/', bgColor: 'bg-[#ECFDF5]' },
                { text: 'Dry Needling Therapy', link: '/services/dry-needling-dubai/', bgColor: 'bg-[#EFF6FF]' },
                { text: 'Ultrasound Therapy', link: '/services/ultrasound-therapy-dubai/', bgColor: 'bg-[#FEF2F2]' },
                { text: 'Post-Surgery Rehabilitation', link: '/services/post-surgery-rehabilitation-dubai/', bgColor: 'bg-[#F5F3FF]' },
                { text: 'Physiotherapy in Dubai', link: '/services/physiotherapy-dubai/', bgColor: 'bg-[#ECFDF5]' }
              ].map((resource, index) => (
                <a 
                  key={index} 
                  href={resource.link}
                  className="bg-white rounded-xl p-4 md:p-5 flex items-center justify-between cursor-pointer transition-all duration-300 shadow-sm hover:shadow-lg hover:translate-x-1 hover:border hover:border-[#1F5E4B]/30 group"
                >
                  <div className="flex items-center gap-3 md:gap-4 flex-1">
                    <div className={`${resource.bgColor} w-10 h-10 md:w-11 md:h-11 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <Activity className="w-5 h-5 text-[#1F5E4B]" />
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-[#1F2937] transition-all duration-300 group-hover:text-[#1F5E4B]">
                      {resource.text}
                    </span>
                  </div>

                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-[#6B7280] flex-shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#1F5E4B]" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Content Reviewer Badge */}
        <ContentReviewBadge doctorName="Jeena Mathew" pageSlug="neck-pain-treatment-dubai" />

        {/* Medical Disclaimer */}
        <section className="py-8 px-4 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-gray-600">
              <strong>Medical Disclaimer:</strong> This content is for general educational purposes and does not replace professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider regarding your specific condition. Individual results vary, and no treatment outcome is guaranteed.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
