
import Layout from '../../../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import QuickNavigation from '../../../components/QuickNavigation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import BookConsultation from '../../../components/BookConsultation';
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
    { id: 'desk-neck', label: 'Desk Neck & Headaches' },
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
    'Stiff neck, especially in the morning or after sleeping awkwardly',
    'Pain when turning or tilting the head, for example when reversing the car',
    'Headaches starting at the base of the skull',
    'Pain or tightness across the shoulders and upper back',
    'Pain between the shoulder blades',
    'Arm pain that spreads from the neck',
    'Tingling or numbness in the arm or hand',
    'Weakness in the arm or hand',
    'Muscle spasm in the neck or upper back',
    'Reduced range of motion when looking side to side'
  ];

  const riskFactors = [
    'Long hours at a laptop or desk, often with the screen too low',
    'Looking down at a phone for long periods ("text neck")',
    'Long daily drives in Dubai traffic',
    'Stress, which often settles as tension in the neck and shoulders',
    'Weak upper-back and deep neck muscles',
    'A previous whiplash or sports injury',
    'Age-related wear in the neck joints and discs'
  ];

  const whenToSeePhysio = [
    'Pain that has not improved after a few days',
    'Stiffness that limits turning your head or driving',
    'Headaches that start in the neck',
    'Numbness or tingling in the arm or hand',
    'Weakness in the arm or hand',
    'Pain after a car accident, fall or sports injury',
    'Neck pain that keeps coming back'
  ];

  const urgentSigns = [
    'Severe pain after a fall, accident or blow to the head or neck',
    'Sudden weakness or numbness in both arms or legs, or trouble walking',
    'Loss of bladder or bowel control with neck pain',
    'Neck pain with fever and a stiff neck that stops you bending your chin to your chest',
    'Sudden, severe headache unlike any before'
  ];

  const diagnosisSteps = [
    'History: when the pain started, your work, driving, sleep and any past injuries',
    'Posture check: forward head position and rounded shoulders at the desk',
    'Neck movement testing: how far and how comfortably you can turn, tilt and nod',
    'Muscle examination: tender points and tightness in the neck, shoulders and upper back',
    'Nerve tests: reflexes, sensation and strength in the arms, if pain or tingling spreads',
    'GP review if needed: our GP can examine you and suggest or prescribe medication where appropriate',
    'X-ray in the clinic if needed, for example after whiplash or a fall; MRI by referral'
  ];

  const treatments = [
    {
      title: 'Manual Therapy',
      description: 'Hands-on joint mobilisation and soft-tissue techniques to ease stiffness and muscle spasm. Often the first step when the neck is very stiff.'
    },
    {
      title: 'Deep Tissue Massage',
      description: 'Therapeutic massage of the neck, shoulders and upper back by our DHA-licensed physiotherapist, as part of your treatment plan after an assessment. A clinical treatment for muscle tightness, not a spa service.'
    },
    {
      title: 'Dry Needling',
      description: 'Fine needles target tight muscle knots and trigger points in the neck and upper shoulders, a common source of neck pain and tension headaches.'
    },
    {
      title: 'Kinesio Taping',
      description: 'Tape that supports the neck and shoulder muscles and reminds you of better posture during the working day.'
    },
    {
      title: 'Cupping',
      description: 'Used alongside physiotherapy for muscle tension across the shoulders and upper back.'
    },
    {
      title: 'Electrotherapy (TENS)',
      description: 'Used with exercise to help reduce pain signals, especially in the early, more painful phase.'
    },
    {
      title: 'Ultrasound Therapy',
      description: 'Therapeutic ultrasound for the soft tissues of the neck, used together with exercise and hands-on treatment.'
    },
    {
      title: 'Deep Neck Strengthening',
      description: 'Exercises for the deep neck muscles that support the head, one of the best-supported treatments for long-standing neck pain.'
    },
    {
      title: 'Upper Back and Shoulder Exercises',
      description: 'Strengthening the muscles between the shoulder blades to take load off the neck.'
    },
    {
      title: 'Stretching and Mobility',
      description: 'Simple stretches for the neck, shoulders and chest you can do at your desk.'
    },
    {
      title: 'Posture and Desk Advice',
      description: 'Practical changes to your screen height, chair, laptop use, phone habits and car seat, based on how you work.'
    },
    {
      title: 'Home Exercise Programme',
      description: 'A short routine to continue between sessions so progress lasts.'
    }
  ];

  const recoveryTimeline = [
    {
      period: 'Days to 2 weeks',
      description: 'Most simple neck strains and stiff necks settle within days to a couple of weeks with gentle movement and early treatment.'
    },
    {
      period: '2–6 weeks',
      description: 'Postural neck pain and tension headaches usually improve over a few weeks as strength, posture and desk habits change.'
    },
    {
      period: '6–12 weeks',
      description: 'Neck pain with arm symptoms from a pinched nerve often needs 6 to 12 weeks of treatment.'
    },
    {
      period: 'Beyond 12 weeks',
      description: 'Long-standing neck pain may need a longer programme, with regular reviews and referral if progress is not as expected.'
    }
  ];

  const conditions = [
    'Stiff neck and muscle strain',
    'Text neck and office neck',
    'Tension headaches from the neck',
    'Whiplash',
    'Pinched nerve (cervical radiculopathy)',
    'Neck disc problems',
    'Cervical spondylosis',
    'Postural neck and upper back pain',
    'Neck and shoulder pain together',
    'Sports neck injuries'
  ];

  const relatedConditions = [
    'Cervical spondylosis',
    'Slipped disc',
    'Shoulder pain'
  ];

  const benefits = [
    'Less pain, with less reliance on painkillers',
    'Easier turning, driving and working at a screen',
    'Fewer tension headaches for many people',
    'Stronger deep neck and upper back muscles',
    'Better posture at the desk and on the phone',
    'Lower chance of the pain coming back'
  ];

  const preventionTips = [
    'Raise your screen to eye level and use a separate keyboard with a laptop',
    'Hold your phone higher instead of looking down for long periods',
    'Stand up and move every 30 to 45 minutes',
    'Do a few neck and shoulder exercises daily',
    'Sleep on your back or side with a pillow that keeps your neck level',
    'Adjust your car seat and headrest before long drives',
    'Manage stress, which often shows up as neck and shoulder tension',
    'Keep up regular exercise'
  ];

  const whyChoose = [
    { title: 'DHA-Licensed Physiotherapist', desc: 'Jeena Mathew, BPT, MPT, 8+ years in neck and back rehab' },
    { title: 'AED 200 Assessment', desc: 'Clear diagnosis and a plan from the first visit' },
    { title: 'GP in the Same Clinic', desc: 'Can suggest or prescribe medication where appropriate, tests and referrals' },
    { title: 'X-ray on Site', desc: 'For whiplash or falls; MRI by referral when needed' },
    { title: 'Deep Tissue Massage', desc: 'Clinical massage alongside dry needling, taping and exercise' },
    { title: 'Open Daily 10am–10pm', desc: 'Sessions after office hours, including weekends' },
    { title: 'Jumeirah 1, near Al Satwa', desc: 'Al Dhiyafah Road, free and paid parking nearby' },
    { title: 'Referred by Gyms and Schools', desc: 'Local gyms and schools send patients to us' }
  ];

  const patientJourney = [
    'Book by phone, WhatsApp or online',
    'Neck assessment (AED 200)',
    'GP and X-ray if needed',
    'Your treatment plan',
    'Hands-on treatment',
    'Exercise programme',
    'Desk and posture changes',
    'Progress review',
    'Prevention habits'
  ];

  const faqs = [
    { question: 'Where can I get neck pain treatment in Jumeirah 1?', answer: 'RamaCare Polyclinic treats neck pain on the ground floor of Jumeirah Terrace Building, 12 Al Dhiyafah Road, Jumeirah 1, Dubai, near Al Satwa. The clinic is open every day from 10am to 10pm. Call 04 286 2006 or WhatsApp 056 659 7878.' },
    { question: 'How much does a neck pain assessment cost?', answer: 'A physiotherapy assessment at RamaCare costs AED 200. Insurance is by reimbursement: you pay at the clinic and claim the cost back from your insurer with our itemised invoice.' },
    { question: 'Which doctor should I see for neck pain?', answer: 'For most neck pain, a physiotherapist is the right first step. At RamaCare, our physiotherapist assesses and treats your neck, and our GP in the same clinic can examine you, suggest or prescribe medication where appropriate, arrange an X-ray and refer you to a specialist if needed.' },
    { question: 'What causes neck pain?', answer: 'The most common causes are desk posture, looking down at a phone, stress, sleeping awkwardly and muscle strain. Other causes include whiplash, a pinched nerve, disc problems and age-related wear (cervical spondylosis).' },
    { question: 'Is massage good for neck and shoulder pain?', answer: 'Yes, as part of a treatment plan. At RamaCare, deep tissue massage is given by our DHA-licensed physiotherapist after an assessment and combined with exercises, so the relief lasts longer than a massage alone.' },
    { question: 'What is text neck or office neck?', answer: 'Text neck and office neck describe neck and shoulder pain from long periods looking down at a phone or laptop. The head moves forward, the neck and upper back muscles overwork, and stiffness and headaches follow.' },
    { question: 'Can neck pain cause headaches?', answer: 'Yes. Tension in the neck and shoulder muscles and stiffness in the upper neck joints can cause headaches that start at the base of the skull. Treating the neck often reduces these headaches.' },
    { question: 'How do I fix a stiff neck from sleeping?', answer: 'Keep moving the neck gently, use heat for short periods and avoid holding one position for long. Most stiff necks settle within a few days. If it lasts longer or the pain spreads to your arm, get it assessed.' },
    { question: 'Can physiotherapy help neck pain?', answer: 'Yes. Exercise-based physiotherapy, especially strengthening the deep neck and upper back muscles, combined with hands-on treatment is one of the most effective non-surgical treatments for neck pain.' },
    { question: 'How many sessions will I need?', answer: 'Simple neck strains often need a few sessions. Postural neck pain usually improves over 2 to 6 weeks, and neck pain with arm symptoms can take 6 to 12 weeks.' },
    { question: 'Is neck pain with arm tingling serious?', answer: 'It usually means a nerve in the neck is irritated, often by a disc or wear in the joints. Most cases improve with treatment, but get assessed soon, and seek urgent care if you have weakness in both arms or legs.' },
    { question: 'What should I do after whiplash?', answer: 'Get checked if pain is severe or you have numbness, weakness or a bad headache. At RamaCare the GP can examine you and arrange an X-ray on the same visit, then physiotherapy can start.' },
    { question: 'Do I need an X-ray or MRI for neck pain?', answer: 'Usually not. Most neck pain is diagnosed by examination. An X-ray can be done at RamaCare after a fall or whiplash, and an MRI is arranged by referral if nerve symptoms are severe or not improving.' },
    { question: 'Do you give neck injections?', answer: 'No. RamaCare does not give injections or perform surgery. If you need them, we refer you to a specialist.' },
    { question: 'Is dry needling good for neck pain?', answer: 'Dry needling can help tight muscle knots in the neck and upper shoulders, especially with tension headaches. It works best combined with exercise.' },
    { question: 'Can I have treatment after work?', answer: 'Yes. RamaCare is open every day until 10pm, so you can book sessions after office hours, including weekends.' },
    { question: 'What is the best sleeping position for neck pain?', answer: 'Sleeping on your back or side with a pillow that keeps your neck level is usually best. Sleeping on your stomach twists the neck.' },
    { question: 'When is neck pain an emergency?', answer: 'Get emergency help for severe pain after an accident, weakness or numbness in both arms or legs, loss of bladder or bowel control, or neck stiffness with fever or a sudden severe headache.' },
    { question: 'Does insurance cover neck pain physiotherapy?', answer: 'RamaCare does not bill insurers directly. You pay at the clinic and claim the cost back from your insurer. Many plans need a doctor\'s referral, and our GP is in the same clinic.' }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/neck-pain-treatment-dubai/";
  const SITE = "https://ramacarepolyclinic.ae";
  const JEENA_ID = `${SITE}/doctors/jeena-mathew-physiotherapist-dubai/#person`;
  const PAGE_TITLE = "Neck Pain Treatment in Jumeirah 1, Dubai | RamaCare";
  const PAGE_DESCRIPTION = "Neck pain physiotherapy in Jumeirah 1, Dubai: deep tissue massage, dry needling, posture care. AED 200 assessment, GP and X-ray on site. Open till 10pm.";
  const OG_IMAGE = "https://ramacarepolyclinic.ae/images/neck-pain-clinic-cta-dubai.jpg";

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
          { "@type": "ListItem", "position": 4, "name": "Neck Pain Treatment", "item": CANONICAL_URL }
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
        "about": { "@id": `${CANONICAL_URL}#condition` },
        "reviewedBy": { "@id": JEENA_ID },
        "lastReviewed": "2026-10-15", // change to the deploy date
        "publisher": { "@id": `${SITE}/#clinic` }
      },
      {
        "@type": "MedicalCondition",
        "@id": `${CANONICAL_URL}#condition`,
        "name": "Neck pain",
        "alternateName": ["Cervical pain", "Stiff neck", "Text neck", "Office neck", "Cervicogenic headache", "Whiplash"],
        "associatedAnatomy": { "@type": "AnatomicalStructure", "name": "Cervical spine" },
        "signOrSymptom": symptoms.map(function (x) { return { "@type": "MedicalSymptom", "name": x }; }),
        "possibleTreatment": [
          therapy("Exercise-based physiotherapy", "/services/physiotherapy-dubai/"),
          therapy("Manual therapy"),
          therapy("Deep tissue massage"),
          therapy("Dry needling", "/services/dry-needling-dubai/"),
          therapy("Kinesio taping"),
          therapy("Posture and desk advice")
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
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      }
    ]
  };

  const causes = [
    { cause: 'Poor posture', desc: 'Slouching strains the muscles that hold your head upright' },
    { cause: 'Text neck', desc: 'Looking down at phones repeatedly overloads the cervical spine' },
    { cause: 'Office work and driving', desc: 'Long, static hours at a desk or in the car stiffen the neck and shoulders' },
    { cause: 'Muscle strain', desc: 'Sudden movement or overuse irritates neck muscles' },
    { cause: 'Whiplash', desc: 'Rapid back-and-forth motion, often from a car accident, injures soft tissue' },
    { cause: 'Cervical spondylosis', desc: 'Age-related wear on the cervical vertebrae and discs' },
    { cause: 'Herniated disc', desc: 'Disc material presses on a nearby nerve root' },
    { cause: 'Arthritis', desc: 'Wear in the neck joints reduces movement and causes stiffness' },
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
        <meta property="og:image:alt" content="Neck pain physiotherapy in Jumeirah 1, Dubai - RamaCare Polyclinic" key="og:image:alt" />
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
              <span className="text-[#1F5E4B] font-medium">Neck Pain Treatment</span>
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
                  <span className="text-white/80 text-sm font-medium">DHA-Licensed Physiotherapy · Jumeirah 1</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                  <span className="text-[#38D39F]">Neck Pain Treatment</span> in Jumeirah 1, Dubai
                </h1>
                <div className="space-y-6 text-lg text-white/80">
                  <p>
                    RamaCare Polyclinic treats neck pain at 12 Al Dhiyafah Road, Jumeirah 1, Dubai. A physiotherapy assessment costs AED 200. Our DHA-licensed physiotherapist finds the cause, whether desk posture, text neck, a pinched nerve or whiplash, and treats it with exercise, manual therapy, deep tissue massage, dry needling and taping. Our GP can suggest or prescribe medication where appropriate and arrange an X-ray on the same visit. Open every day, 10am–10pm.
                  </p>
                  <p>
                    If turning your head hurts, your neck is stiff when you wake up, or headaches start at the base of your skull, the right treatment usually helps. Most neck pain gets better without injections or surgery.
                  </p>
                  <p>
                    Sessions run until 10pm, so you can come after work. Many of our patients are office workers and drivers from Jumeirah, Al Satwa and nearby areas.
                  </p>
                </div>
                <Link href="/book-appointment/">
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
                    alt="Physiotherapist assessing neck pain at RamaCare Polyclinic, Jumeirah 1"
                    className="absolute inset-0 w-full h-full object-cover z-10"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="text-center p-6 relative z-0">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Activity className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-white/80 text-sm mt-2 max-w-xs mx-auto">Neck pain physiotherapy at RamaCare, Jumeirah 1</p>
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
                        Left untreated, minor neck strain can develop into chronic tension, nerve irritation, or reduced range of motion. Getting an accurate assessment early — rather than waiting for the pain to become unbearable — makes recovery faster and more straightforward. Most simple neck strains settle within days to a couple of weeks.
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
                      Many patients are dealing with more than one of these at once. Forward head posture often combines with stress-related muscle spasm, or a neck muscle strain that has spread into the upper shoulders. This is why neck and upper back pain so often occur together, and why an assessment works better than guessing.
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
                    Long desk hours and daily driving make office neck one of the most common reasons people in Jumeirah 1 see our physiotherapist.
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
                        Call 998 or go to an emergency department straight away. These can be signs of a serious spinal problem or infection that needs urgent medical care.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Text Neck, Office Neck and Headaches */}
        <section id="desk-neck" className="py-24 bg-[#F9F7F2]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1F5E4B] mb-4">Text Neck, Office Neck and Neck Headaches</h2>
                <div className="w-24 h-1 bg-[#38D39F] mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-2xl border border-[#1F5E4B]/10">
                  <h3 className="text-xl font-bold text-[#1F5E4B] mb-3">Office Neck</h3>
                  <p className="text-gray-700 leading-relaxed">Hours at a laptop pull the head forward. The neck and upper back muscles work harder all day, leading to stiffness, aching shoulders and pain between the shoulder blades by the evening.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-[#1F5E4B]/10">
                  <h3 className="text-xl font-bold text-[#1F5E4B] mb-3">Text Neck</h3>
                  <p className="text-gray-700 leading-relaxed">Looking down at a phone for long periods adds load to the neck. It is common in teenagers and adults alike, and responds well to strengthening and simple habit changes.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-[#1F5E4B]/10">
                  <h3 className="text-xl font-bold text-[#1F5E4B] mb-3">Headaches from the Neck</h3>
                  <p className="text-gray-700 leading-relaxed">Tight neck and shoulder muscles and a stiff upper neck can cause headaches that start at the base of the skull and spread forward. Treating the neck often reduces them.</p>
                </div>
              </div>
              <p className="text-gray-700 mt-8 max-w-4xl mx-auto text-center">
                Treatment combines deep neck and upper back strengthening, hands-on treatment, deep tissue massage or dry needling for tight muscles, and practical changes to your screen height, chair, phone use and car seat. Sessions until 10pm fit around office hours.
              </p>
            </div>
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
                  Your neck assessment in Jumeirah 1 (AED 200) usually includes:
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
                      alt="Physiotherapist assessing neck movement at RamaCare, Jumeirah 1"
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

        {/* Who Treats Neck Pain at RamaCare */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[#1F5E4B] to-[#38D39F] p-10 rounded-3xl text-white">
                <h2 className="text-3xl font-bold mb-4">Who Treats Neck Pain at RamaCare?</h2>
                <p className="text-lg leading-relaxed">
                  Your neck is assessed and treated by our DHA-licensed physiotherapist, Jeena Mathew (BPT, MPT, 8+ years). Our GP works in the same clinic and can examine you, suggest or prescribe medication where appropriate, arrange an X-ray and refer you for an MRI or to a specialist. RamaCare does not give injections or perform surgery.
                </p>
              </div>
              <div className="bg-[#F9F7F2] p-10 rounded-3xl border border-[#1F5E4B]/10">
                <h2 className="text-3xl font-bold text-[#1F5E4B] mb-4">Quick Facts</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>Address: Ground floor, Jumeirah Terrace Building, 12 Al Dhiyafah Road, Jumeirah 1, Dubai</li>
                  <li>Physiotherapy assessment: AED 200</li>
                  <li>Open every day, 10am to 10pm; same-day appointments when slots are free</li>
                  <li>GP and X-ray in the same clinic</li>
                  <li>Insurance: pay at the clinic, claim back from your insurer</li>
                  <li>Book: 04 286 2006 or WhatsApp 056 659 7878</li>
                </ul>
                <p className="text-gray-700 mt-4 text-right" lang="ar" dir="rtl">
                  علاج آلام الرقبة في جميرا 1، دبي: تقييم العلاج الطبيعي بـ 200 درهم، مفتوح يومياً حتى 10 مساءً.
                </p>
              </div>
            </div>
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
                  Every plan starts from your assessment and combines hands-on treatment with exercise.
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
                      alt="Manual therapy for neck pain at RamaCare, Jumeirah 1"
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
                      alt="Dry needling for neck muscle tension"
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
                      alt="Posture correction for neck pain"
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

        {/* Recovery Timeline */}
        <section id="recovery-timeline" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }} >
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1F5E4B] mb-4">Recovery Timeline</h2>
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
                    Related pages: cervical spondylosis, slipped disc (neck discs) and shoulder pain. See the links at the end of this page.
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
                    You also learn exercises and habits to manage your neck yourself, so you are not dependent on repeated treatment.
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
                        alt="Desk set-up to prevent neck pain"
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
                        alt="Guided neck stretching exercise at RamaCare"
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
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1F5E4B] mb-4">Why Choose RamaCare for Neck Pain in Jumeirah 1?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  What you get at our Jumeirah 1 clinic:
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
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1F5E4B] mb-4">Neck Pain in Jumeirah 1: Common Questions</h2>
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
                  You don't have to live with neck pain. Book an AED 200 physiotherapy assessment at RamaCare Polyclinic in Jumeirah 1.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-white/90 mb-8 leading-relaxed">
                    Call, WhatsApp or use the form below. Open every day 10am–10pm, with same-day appointments when slots are free.
                  </p>
                  <Link href="/book-appointment/">
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
                      alt="Book a neck pain assessment at RamaCare Polyclinic, Jumeirah 1"
                      className="absolute inset-0 w-full h-full object-cover z-10"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="text-center p-6 relative z-0">
                      <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Activity className="w-16 h-16 text-white" />
                      </div>
                      <p className="text-white/80 text-sm mt-2 max-w-xs mx-auto">Neck pain assessment at RamaCare, Jumeirah 1</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="mt-12">
                <p className="text-white/80">
                  See all our <Link href="/services/physiotherapy-dubai/" className="underline hover:text-white">physiotherapy in Jumeirah 1</Link>, or read about <Link href="/services/cervical-spondylosis-treatment-dubai/" className="underline hover:text-white">cervical spondylosis treatment</Link>, <Link href="/services/slip-disc-treatment-dubai/" className="underline hover:text-white">slipped disc treatment</Link> and <Link href="/services/shoulder-pain-treatment-dubai/" className="underline hover:text-white">shoulder pain treatment</Link>.
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
                { text: 'Cervical spondylosis treatment', link: '/services/cervical-spondylosis-treatment-dubai/', bgColor: 'bg-[#EFF6FF]' },
                { text: 'Slipped disc treatment', link: '/services/slip-disc-treatment-dubai/', bgColor: 'bg-[#ECFDF5]' },
                { text: 'Shoulder pain treatment', link: '/services/shoulder-pain-treatment-dubai/', bgColor: 'bg-[#EFF6FF]' },
                { text: 'Dry needling', link: '/services/dry-needling-dubai/', bgColor: 'bg-[#FEF2F2]' },
                { text: 'Physiotherapy in Jumeirah 1', link: '/services/physiotherapy-dubai/', bgColor: 'bg-[#F5F3FF]' },
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
        {/* Booking form */}
        <div id="book-form">
          <BookConsultation
            content={{
              badge: 'Start Your Recovery',
              title: 'Book a Neck Pain Assessment in Jumeirah 1',
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
      </div>
    </Layout>
  );
}