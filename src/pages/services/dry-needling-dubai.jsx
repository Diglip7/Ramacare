import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Layout from '../../../components/Layout';
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
import PatientTestimonials from '../../../components/VideoTestimonials';
import PaymentInsurance from '../../../components/PaymentInsurance';
import FAQSection from '../../../components/Faq';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Compass,
  CreditCard,
  ExternalLink,
  HelpCircle,
  Info,
  Phone,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  UserCheck,
  Users,
  Zap
} from 'lucide-react';

export default function DryNeedlingPage() {
  const CANONICAL_URL = 'https://ramacarepolyclinic.ae/services/dry-needling-dubai/';
  const clinicCallingPhone = '+97142862006';
  const displayCallingPhone = '+971 4 286 2006';
  const whatsappNumber = '971566597878';
  const displayWhatsApp = '+971 56 659 7878';
  const defaultWhatsAppMsg = encodeURIComponent('Hello RamaCare Polyclinic, I would like to book a consultation for Dry Needling in Dubai.');
  const defaultWhatsAppUrl = `https://wa.me/${whatsappNumber}?text=${defaultWhatsAppMsg}`;

  const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'safety-aftercare', label: 'Safety & Aftercare' },
    { id: 'what-patients-notice', label: 'What Patients Notice' },
    { id: 'cost', label: 'Cost' },
    { id: 'testimonials', label: 'Success Stories' },
    { id: 'our-doctors', label: 'Our Doctors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' }
  ];

  const heroData = {
    title: 'Dry Needling in Dubai for Muscle Pain & Trigger Point Relief',
    subtitle: 'Physiotherapy-Led Trigger Point Treatment for Muscle Tension and Restricted Movement',
    description: `Most weeks I see some version of the same patient — a knot in the shoulder that’s been there for three months, a heating pad and two mattress changes already tried, and finally a question I hear a lot: “why hasn’t this just gone away on its own?” More often than not, the answer is a trigger point — a small, stubborn band of muscle that stays contracted long after whatever caused it has passed, and that rest by itself rarely undoes.

Dry needling is built for exactly that, and it’s one part of the broader {{physiotherapy|/services/physiotherapy-dubai/}} work we do at RamaCare. A hair-fine, sterile needle goes directly into the tight muscle band to get it to let go. It’s not the whole answer on its own, and I’d rather tell you that now than after you’ve booked five sessions expecting a miracle — but for the right case, especially in a city where most of my patients are sitting at a desk or in traffic for the better part of the day, it’s often the one thing that finally moves the needle after weeks of stretching and heat packs going nowhere.

Before I pick up a needle, though, I want to understand how you actually move, not just where it hurts. A tight upper trap in someone stuck in an hour-long commute down Sheikh Zayed Road tells a different story than the same tight trap in someone who overdid it on the padel court over the weekend — and the treatment should follow that story, not a fixed protocol.`,
    rating: '4.8/5 Average Google Rating',
    topBadges: [
      { icon: 'location', text: 'Jumeirah 1, Dubai' },
      { icon: 'building', text: 'DHA-Licensed Physiotherapists' },
      { icon: 'star', text: 'Assessment-Led Protocol' }
    ],
    stats: [
      { id: 1, number: '4.8/5', label: 'Average Google Rating' },
      { id: 2, number: '200+', label: 'Verified Patient Reviews' },
      { id: 3, number: '98%', label: 'Patient Satisfaction' },
      { id: 4, number: '2,500+', label: 'Patients Treated' }
    ],
    ctaButtons: {
      primary: {
        text: 'Book Dry Needling Consultation',
        icon: 'calendar',
        link: '#book-now'
      },
      secondary: {
        text: `WhatsApp: ${displayWhatsApp}`,
        phone: displayWhatsApp,
        link: defaultWhatsAppUrl,
        icon: 'whatsapp'
      }
    },
    features: [
      'Assessment-led, not needle-first',
      'Minimally invasive, no medication involved',
      'Built around your specific pattern of tightness, not a generic protocol',
      'Common for office workers, athletes, and people a few weeks out from injury',
      'Aimed at getting you back to normal movement, not just quieting today’s pain'
    ],
    image: {
      src: '/images/dry-needling-physiotherapy-dubai.jpg',
      alt: 'Dry needling therapy performed by a DHA-licensed physiotherapist in Dubai'
    },
    medicalNotice: {
      text: 'Medical Disclaimer: Dry needling isn’t suitable for everyone, and it isn’t a substitute for medical diagnosis where one is needed. Treatment follows a clinical assessment, and how you respond will depend on your specific condition and how consistently you follow through on the rehab side of things.',
      show: true
    }
  };

  const rawFaqs = [
    {
      q: 'What is dry needling, really?',
      a: 'A fine, sterile needle placed directly into a tight muscle band to help it release. That’s the whole mechanism — no medication, no incision.'
    },
    {
      q: 'Does it hurt?',
      a: 'Less than people expect, usually. A brief twitch, sometimes a dull ache, occasionally nothing at all. It varies enough between patients that I don’t try to predict it in advance anymore.'
    },
    {
      q: 'Isn’t this the same as acupuncture?',
      a: 'No — different history, different mechanism. Acupuncture follows a traditional Chinese medicine framework along meridian points. Dry needling comes from Western physiotherapy and goes straight into the specific muscle causing the problem.'
    },
    {
      q: 'What can it actually help with?',
      a: 'Muscular tightness and trigger points behind neck pain, back pain, shoulder issues, sports injuries, tension headaches, and similar movement-related problems.'
    },
    {
      q: 'Can it help my back pain?',
      a: 'If the pain is muscular, often yes. If there’s numbness, weakness, or other red-flag symptoms involved, that needs a different kind of assessment first — I’ll tell you directly if that’s the case.'
    },
    {
      q: 'I sit at a desk all day and my neck is always tight — will this help?',
      a: 'Probably, yes — it’s the single most common reason people come in. It works best paired with some changes to your setup and posture, though, not on its own.'
    },
    {
      q: 'Is it useful for sports injuries?',
      a: 'Yes, generally as one part of a broader return-to-training plan rather than a stand-alone fix.'
    },
    {
      q: 'How many sessions will I need?',
      a: 'Depends entirely on how long the problem has existed. Some patients feel a real shift after two sessions; others need a longer course.'
    },
    {
      q: 'How long does a session take?',
      a: 'The needling itself is 20 to 30 minutes. The first visit runs longer because of the assessment.'
    },
    {
      q: 'Is it safe?',
      a: 'Generally, yes, when done by a trained physiotherapist — but no needle-based treatment is entirely risk-free, and we screen for anything that would make it inappropriate before starting.'
    },
    {
      q: 'What side effects should I expect?',
      a: 'Mild soreness or occasional minor bruising, usually settling within a day or two.'
    },
    {
      q: 'Will my flexibility actually improve?',
      a: 'Often, especially when tight muscle is what’s limiting your movement in the first place. We usually pair it with mobility work to help it stick.'
    },
    {
      q: 'Who shouldn’t get this treatment?',
      a: 'People with certain bleeding disorders, active infection at the treatment site, or a few other specific medical situations. Tell your physiotherapist your full history upfront — that’s what the first conversation is for.'
    },
    {
      q: 'Why RamaCare specifically?',
      a: 'Because the assessment always comes first, and needling gets built into an actual rehab plan rather than treated as the whole solution.'
    },
    {
      q: 'How soon will I feel a difference?',
      a: 'Varies. Some people notice something after the first session; more often it takes a few sessions alongside the exercises we give you.'
    },
    {
      q: 'Can this replace physiotherapy exercises?',
      a: 'No, and I’d be doing you a disservice if I said otherwise. It works best as one part of the plan, not the entire plan.'
    },
    {
      q: 'Is this a permanent fix?',
      a: 'Not on its own. What keeps the improvement long-term is addressing whatever caused the tightness — posture, training load, an old injury pattern — through the rest of the rehab.'
    }
  ];

  const faqContent = {
    title: 'Frequently Asked Questions',
    description: 'Practical answers to common questions about dry needling therapy, trigger points, and physiotherapy rehabilitation at RamaCare in Dubai.',
    faqs: rawFaqs.map((item, idx) => ({
      id: idx + 1,
      question: item.q,
      answer: item.a
    })),
    resourcesHeading: null
  };

  const paymentInsuranceContent = {
    paymentTitle: 'Payment Options',
    insuranceTitle: 'Insurance & Reimbursement',
    paymentOptions: [
      'Cash, credit cards, and debit cards are all accepted',
      'Flexible payment plans available, including 0% interest instalments through Tabby',
      'Payment made at the time of your visit'
    ],
    insuranceOptions: [
      'Reimbursement Basis — we accept insurance on a reimbursement basis for all major UAE insurers',
      'Itemised DHA-compliant medical invoice provided on the day of treatment',
      'Detailed clinical notes and documentation assistance for smooth reimbursement'
    ]
  };

  const otherServices = [
    { title: 'Ultrasound Therapy', link: '/services/ultrasound-therapy-dubai/' },
    { title: 'Electrotherapy', link: '/services/electrotherapy-dubai/' },
    { title: 'Pelvic Floor Therapy', link: '/services/pelvic-floor-therapy-dubai/' },
    { title: 'Scoliosis Treatment', link: '/services/scoliosis-treatment-dubai/' },
    { title: 'Functional Exercise Therapy', link: '/services/functional-exercise-therapy-dubai/' },
    { title: 'Dry Needling & Ultrasound Combo', link: '/services/dry-needling-ultrasound-combo-dubai/' },
    { title: 'Back Pain Treatment', link: '/services/back-pain-treatment-dubai/' },
    { title: 'Knee Pain Treatment', link: '/services/knee-pain-treatment-dubai/' },
    { title: 'Migraine Treatment', link: '/services/migraine-treatment-dubai/' },
    { title: 'Post-Surgery Recovery', link: '/services/post-surgery-recovery-dubai/' },
    { title: 'Office Neck Treatment', link: '/services/office-neck-treatment-dubai/' },
    { title: 'Physiotherapy Insurance', link: '/services/physiotherapy-insurance-dubai/' }
  ];

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
            "name": "Dry Needling",
            "item": CANONICAL_URL
          }
        ]
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${CANONICAL_URL}#webpage`,
        "url": CANONICAL_URL,
        "name": "Dry Needling in Dubai for Muscle Pain & Trigger Point Relief",
        "description": "Physiotherapy-led dry needling for muscle tension and trigger points at RamaCare Polyclinic, Jumeirah 1. Assessed and treated by Jeena Mathew, DHA-licensed physiotherapist.",
        "inLanguage": "en-AE",
        "lastReviewed": "2026-09-04",
        "reviewedBy": {
          "@type": "Person",
          "name": "Jeena Mathew",
          "jobTitle": "DHA Licensed Physiotherapist",
          "url": "https://ramacarepolyclinic.ae/doctors/jeena-mathew-physiotherapist-dubai/"
        },
        "medicalAudience": {
          "@type": "MedicalAudience",
          "audienceType": "Patient"
        },
        "about": {
          "@type": "MedicalTherapy",
          "name": "Dry Needling",
          "alternateName": "Trigger Point Dry Needling",
          "recognizingAuthority": {
            "@type": "Organization",
            "name": "Dubai Health Authority"
          }
        },
        "mainContentOfPage": {
          "@type": "WebPageElement",
          "cssSelector": "main"
        },
        "publisher": {
          "@type": "MedicalClinic",
          "name": "RamaCare Polyclinic",
          "url": "https://ramacarepolyclinic.ae/",
          "telephone": "+971566597878",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor",
            "addressLocality": "Jumeirah 1, Dubai",
            "addressCountry": "AE"
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        "mainEntity": rawFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <Layout>
      <Head>
        {/* SEO Title: 56 characters */}
        <title key="title">Dry Needling in Dubai — Trigger Point Therapy | RamaCare</title>
        {/* Meta Description: ~155 characters */}
        <meta
          name="description"
          content="Physiotherapy-led dry needling for muscle tension and trigger points at RamaCare Polyclinic, Jumeirah 1. Assessed and treated by Jeena Mathew, DHA-licensed physiotherapist."
          key="description"
        />
        <meta
          name="keywords"
          content="Dry needling in Dubai, Dry needling Dubai, trigger point therapy Dubai, physiotherapy dry needling Dubai, muscle pain relief Dubai, Jumeirah 1 physiotherapy, Jeena Mathew physiotherapist"
        />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:title" content="Dry Needling in Dubai — Trigger Point Therapy | RamaCare" />
        <meta
          property="og:description"
          content="Physiotherapy-led dry needling for muscle tension and trigger points at RamaCare Polyclinic, Jumeirah 1. Assessed and treated by Jeena Mathew, DHA-licensed physiotherapist."
        />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/dry-needling-physiotherapy-dubai.jpg" />
        <meta property="og:site_name" content="RamaCare Polyclinic" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dry Needling in Dubai — Trigger Point Therapy | RamaCare" />
        <meta
          name="twitter:description"
          content="Physiotherapy-led dry needling for muscle tension and trigger points at RamaCare Polyclinic, Jumeirah 1. Assessed and treated by Jeena Mathew, DHA-licensed physiotherapist."
        />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/dry-needling-physiotherapy-dubai.jpg" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      {/* Hero Section */}
      <TreatmentHero
        categoryName="Physiotherapy"
        subcategoryName="Dry Needling"
        hero={heroData}
      />

      {/* Quick Navigation Sticky Bar */}
      <QuickNavigation navItems={navItems} />

      <main className="w-full bg-white text-gray-800 overflow-hidden">

        {/* =========================================================================
            SECTION: Treatment Overview
        ========================================================================= */}
        <section id="treatment-info" className="w-full py-12 md:py-16 bg-gradient-to-b from-white via-[#FAF9F5]/80 to-white border-b border-[#E0D8CC]/40">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Main Section Header */}
            <div className="mb-10">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-semibold uppercase tracking-wider mb-3">
                <Stethoscope className="w-4 h-4" />
                <span>Clinical Overview</span>
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight" style={{ color: '#1F5E4B' }}>
                Treatment Overview
              </h2>
            </div>

            {/* Subsection: What Is Dry Needling? (Split 2-Column with Image) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-12">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  What Is Dry Needling?
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Dry needling is a physiotherapy technique used to address areas of muscle that are painful, tight, or sensitive. It involves inserting a very thin, sterile needle into targeted muscle tissue, often around myofascial trigger points.
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  A trigger point is a sensitive area within a muscle that may feel like a small, tight knot. It can develop alongside factors such as prolonged poor posture, repetitive movement, physical overload, stress, or previous injury. In some cases, pressing the area can reproduce pain that the patient recognizes as part of their usual symptoms.
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  The needle used for dry needling is similar in size to an acupuncture needle and is much thinner than a typical injection syringe. Unlike an injection, no medication is delivered through the needle. The needle is inserted into the targeted tissue based on the patient's symptoms, physical assessment, and the therapist's knowledge of musculoskeletal anatomy.
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  When the needle reaches a particularly sensitive area, the muscle may produce a brief local twitch response. Some patients feel very little during insertion, while others notice a short-lived ache, cramping sensation, or pressure. Your physiotherapist can adjust the technique according to your comfort level and the condition being treated.
                </p>

                <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200/60 text-emerald-950 text-xs md:text-sm leading-relaxed space-y-2 mt-4">
                  <h4 className="text-base font-bold text-[#1F5E4B] flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-[#1F5E4B]" />
                    <span>Dry Needling vs. Acupuncture</span>
                  </h4>
                  <p className="text-xs md:text-sm text-emerald-950 leading-relaxed">
                    Dry needling and acupuncture both use very thin needles, but they are generally based on different clinical frameworks.
                  </p>
                  <p className="text-xs md:text-sm text-emerald-950 leading-relaxed">
                    Dry needling is primarily used within musculoskeletal and physiotherapy practice, with treatment directed toward specific muscles, painful areas, and neuromusculoskeletal structures identified during a physical assessment. Acupuncture is traditionally associated with Traditional Chinese Medicine and uses a different theoretical framework involving acupuncture points and meridians.
                  </p>
                  <p className="text-xs md:text-sm text-emerald-950 leading-relaxed">
                    Although the techniques may look similar, the purpose, assessment process, and treatment approach can differ. Your physiotherapist will determine whether dry needling is appropriate based on your symptoms, medical history, and physical assessment.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-md border-4 border-white group">
                  <img
                    src="/images/Physiotherapist performing dry needling.jpg"
                    alt="Physiotherapist performing dry needling on muscle trigger points"
                    className="w-full h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/images/dry-needling-physiotherapy-dubai.jpg';
                    }}/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="text-xs uppercase font-semibold tracking-wider text-emerald-300 mb-1">Targeted Release</span>
                    <p className="text-xs md:text-sm font-medium">Fine filament needles targeting exact musculoskeletal trigger points</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subsections: What You’ll Feel Afterward & Does It Actually Fix Anything? */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-[#FAF9F5] p-6 sm:p-7 rounded-2xl border border-[#E0D8CC] shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#D4A574]/20 text-[#A26D38] flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  What You’ll Feel Afterward
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Expect some soreness for a day, maybe two — similar to how a muscle feels after a hard leg day at the gym. Occasionally there’s a small bruise if the needle passes near a blood vessel, which looks worse than it is. I tell most patients to treat that evening gently: normal activity is fine, but skip the heavy training session you had planned.
                </p>
              </div>

              <div className="bg-[#FAF9F5] p-6 sm:p-7 rounded-2xl border border-[#E0D8CC] shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#1F5E4B]/15 text-[#1F5E4B] flex items-center justify-center mb-4">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  Does It Actually Fix Anything?
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Depends what’s causing the pain. If it’s genuinely muscular — tight, overworked, guarding after an injury — needling tends to help, especially combined with the exercise side of rehab. If the pain is coming from a disc, a nerve, or a joint that needs a different kind of attention, needling the surrounding muscle might take the edge off but won’t solve the underlying issue, and I’ll say so rather than keep booking sessions that aren’t going anywhere.
                </p>
              </div>
            </div>

            {/* Subsection: What We Treat With It (Wide Grid with Contextual Links) */}
            <div className="w-full mb-12 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs">
              <div className="w-full mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  What We Treat With It
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                  Most of what walks through our door falls into a fairly predictable list: neck pain and stiffness, <Link href="/services/back-pain-treatment-dubai/" className="font-semibold text-[#1F5E4B] underline decoration-[#1F5E4B]/40 hover:decoration-[#1F5E4B]">lower back tightness</Link>, shoulder pain (frozen shoulder included), sports strains, stubborn trigger points and spasms, tennis and golfer’s elbow, <Link href="/services/knee-pain-treatment-dubai/" className="font-semibold text-[#1F5E4B] underline decoration-[#1F5E4B]/40 hover:decoration-[#1F5E4B]">knee pain</Link> that’s tied to the surrounding muscles rather than the joint itself, sciatica-type leg pain where the piriformis is involved, <Link href="/services/migraine-treatment-dubai/" className="font-semibold text-[#1F5E4B] underline decoration-[#1F5E4B]/40 hover:decoration-[#1F5E4B]">tension headaches</Link>, postural pain from years at a desk, and stiffness left behind after <Link href="/services/post-surgery-recovery-dubai/" className="font-semibold text-[#1F5E4B] underline decoration-[#1F5E4B]/40 hover:decoration-[#1F5E4B]">surgery or a bigger injury</Link>.
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Not everything on that list responds the same way, and not every patient with, say, “knee pain” is actually dealing with a muscular issue — some are, some aren’t, and figuring out which is half the point of the first appointment.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 pt-4 border-t border-gray-100">
                {[
                  { title: 'Neck Pain & Stiffness', link: null },
                  { title: 'Lower Back Tightness', link: '/services/back-pain-treatment-dubai/' },
                  { title: 'Shoulder Pain & Frozen Shoulder', link: null },
                  { title: 'Sports Strains', link: null },
                  { title: 'Trigger Points & Spasms', link: null },
                  { title: 'Tennis & Golfer’s Elbow', link: null },
                  { title: 'Knee Pain (Muscular)', link: '/services/knee-pain-treatment-dubai/' },
                  { title: 'Sciatica / Piriformis Pain', link: null },
                  { title: 'Tension Headaches', link: '/services/migraine-treatment-dubai/' },
                  { title: 'Desk Postural Pain', link: '/services/office-neck-treatment-dubai/' },
                  { title: 'Post-Surgery Stiffness', link: '/services/post-surgery-recovery-dubai/' },
                  { title: 'Repetitive Strain Injury', link: null }
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#FAF9F5] border border-gray-200/80 hover:border-[#1F5E4B] transition-colors flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-800 group">
                    <span>{item.title}</span>
                    {item.link ? (
                      <Link href={item.link} className="text-[#1F5E4B] group-hover:translate-x-0.5 transition-transform">
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B]"></span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Specific Clinical Deep Dives (Back Pain, Neck, Sports) */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 items-stretch">

              {/* Back Pain, Specifically */}
              <div className="bg-[#FAF9F5] p-6 rounded-2xl border-l-4 border-l-[#1F5E4B] border-y border-r border-[#E0D8CC] flex flex-col justify-between shadow-xs">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    Back Pain, Specifically
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
                    A good chunk of the <Link href="/services/back-pain-treatment-dubai/" className="font-semibold text-[#1F5E4B] underline decoration-[#1F5E4B]/40 hover:decoration-[#1F5E4B]">back pain</Link> I see in clinic has a straightforward story: hours at a desk, a drive that’s longer than it should be, a training programme with a bit too much lower-back loading. When the muscles around the spine are the main issue, dry needling gets paired with trunk strengthening and mobility work.
                  </p>
                </div>
                <div className="bg-red-50 p-3.5 rounded-xl border border-red-200 text-xs text-red-900 leading-relaxed mt-2">
                  <strong className="block text-red-800 font-semibold mb-1 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                    <span>Red Flags Checked First:</span>
                  </strong>
                  One thing I always check for first, though: numbness running down a leg, any change in bladder or bowel control, unexplained weight loss, fever. Those aren’t muscle-pain symptoms, and if any of them are present, we’re having a different conversation — one that starts with a referral, not a needle.
                </div>
              </div>

              {/* Neck and Shoulders — the Everyone-in-Dubai-Office-Life Pattern */}
              <div className="bg-emerald-50/40 p-6 rounded-2xl border border-emerald-200/60 flex flex-col justify-between shadow-xs">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    Neck and Shoulders — the Everyone-in-Dubai-Office-Life Pattern
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
                    If you spend your day between a laptop and a car seat, your upper traps and levator scapulae are probably the tightest muscles in your body, and you probably don’t need me to tell you that. This is the single most common reason people come in asking about dry needling.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    It usually works best alongside some blunt conversation about your desk chair, monitor height, and how many hours you’re actually sitting still — the kind of thing we cover in more detail in our <Link href="/services/office-neck-treatment-dubai/" className="font-semibold text-[#1F5E4B] underline decoration-[#1F5E4B]/40 hover:decoration-[#1F5E4B]">office neck treatment</Link> programme — because a released muscle that goes straight back into the same posture tends to tighten right back up within a couple of weeks.
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-emerald-200/60 text-xs font-semibold text-[#1F5E4B] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5E4B]" />
                  <span>Sheikh Zayed Road commute ergonomics included.</span>
                </div>
              </div>

              {/* Sports and Training Injuries */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    Sports and Training Injuries
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-2">
                    For the more active crowd — and Dubai has plenty of them, between the beach runs, padel courts, and CrossFit boxes — dry needling usually slots into a broader return-to-sport plan rather than standing alone:
                  </p>
                  <ol className="space-y-1 pl-4 list-decimal text-xs sm:text-sm text-gray-700 font-medium">
                    <li>Work out what actually happened and how the injury is affecting movement</li>
                    <li>Find the specific muscles that have tightened up around it</li>
                    <li>Needle where it’s genuinely indicated</li>
                    <li>Rebuild mobility</li>
                    <li>Load the muscle back up progressively</li>
                    <li>Retrain the actual movement the sport demands</li>
                    <li>Get back to full training gradually, not all at once</li>
                  </ol>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 text-xs font-semibold text-[#1F5E4B] flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#1F5E4B]" />
                  <span>Padel, runners & CrossFit athlete recovery protocols.</span>
                </div>
              </div>

            </div>

            {/* Subsections: Who Tends to Benefit & Session Length (2-Column Split) */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-stretch">

              <div className="lg:col-span-7 bg-[#FAF9F5] p-6 sm:p-8 rounded-2xl border border-[#E0D8CC] flex flex-col justify-between shadow-xs">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    Who Tends to Benefit
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                    There’s no single profile, but a few patterns show up again and again in clinic. Desk-based professionals with permanent tightness across the shoulders. Gym-goers who’ve hit a plateau because a tight muscle is quietly limiting their range of motion. People a few weeks post-surgery whose muscles are still guarding the area out of habit. Tradespeople and anyone doing repetitive physical work — the strain adds up the same way whether it’s a laptop or a toolbox. And a fair number of people who are already doing physiotherapy exercises and just aren’t progressing, because there’s a muscular knot in the way that stretching alone hasn’t touched.
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    If none of that sounds like you, that’s fine too — dry needling isn’t the right tool for every kind of muscle pain, and part of the first visit is figuring out whether it’s actually relevant to your case.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200 text-xs font-semibold text-[#1F5E4B] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Individual clinical assessment always precedes treatment.</span>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#1F5E4B] text-white p-6 sm:p-8 rounded-2xl shadow-md flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase font-semibold tracking-wider text-emerald-200">Protocol Timeline</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-1 mb-3">
                    Session Length and How Many You’ll Need
                  </h3>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed mb-5">
                    The first appointment runs 30 to 45 minutes, mostly assessment. The needling itself is usually 20 to 30 minutes once we know what we’re treating. How many total sessions depends heavily on how long the problem has been building — a trigger point that’s three weeks old behaves very differently from one that’s been there for two years. Most patients come in once or twice a week during active treatment.
                  </p>
                </div>
                <div className="p-3.5 bg-white/10 rounded-xl border border-white/15 text-xs text-white/95 font-medium leading-relaxed">
                  Assessment: 30–45 min · Needling: 20–30 min · Frequency: 1–2x weekly
                </div>
              </div>

            </div>

            {/* Subsection: At a Glance (Full Width Table) */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                <Compass className="w-6 h-6 text-[#1F5E4B]" />
                <span>At a Glance</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                {[
                  { label: 'What it is', val: 'Physiotherapy-based trigger point treatment' },
                  { label: 'Treats', val: 'Muscle, tendon, and connective tissue tightness' },
                  { label: 'Sensation', val: 'A brief twitch, sometimes nothing, occasionally a dull ache' },
                  { label: 'Recovery', val: 'Most people carry on with their day the same evening' },
                  { label: 'Delivered by', val: 'DHA-licensed physiotherapists, under approved clinical protocols' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#FAF9F5] p-4 rounded-xl border border-gray-200/80 flex flex-col justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#A26D38] mb-1.5">{item.label}</span>
                    <span className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>


        {/* =========================================================================
            SECTION: Muscle Problems We See Constantly
        ========================================================================= */}
        <section className="w-full py-12 md:py-16 bg-[#FAF9F5] border-b border-[#E0D8CC]/60">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-semibold uppercase tracking-wider mb-3">
                  <Activity className="w-4 h-4" />
                  <span>Clinical Observations</span>
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-6" style={{ color: '#1F5E4B' }}>
                  Muscle Problems We See Constantly
                </h2>

                <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                  <p>
                    Chronic tightness in the neck and shoulders is the one I see most — it quietly eats into sleep and focus long before anyone books an appointment for it. Right behind that is restricted movement, where a trigger point locks a muscle down enough that reaching overhead or bending to tie a shoe starts to feel effortful in a way it never used to.
                  </p>
                  <p>
                    Post-injury guarding is its own category. The body tightens protectively around an injured area, which is useful for about two weeks and then starts actively slowing recovery down. Athletes bring a slightly different version of the same problem — tightness that’s built up from repetitive training and hasn’t been addressed, usually showing up as a dip in performance before it becomes an actual injury.
                  </p>
                  <p>
                    Referred pain catches people off guard the most. A trigger point in the neck causing a headache, or a tight spot in the shoulder sending an ache down the arm — patients are often convinced something is wrong with the area that actually hurts, when the real issue is somewhere else entirely.
                  </p>
                  <p>
                    And then there’s the slow-burn stuff: years of desk posture creating imbalances that load the spine unevenly, and stress that settles into the jaw, neck, and upper back and just stays there.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div className="rounded-2xl overflow-hidden shadow-md border-4 border-white group">
                  <img
                    src="/images/Musculoskeletal assessment and physical therapy.jpg"
                    alt="Musculoskeletal assessment and physical therapy at RamaCare"
                    className="w-full h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/images/back-pain-assessment-ramacare-dubai.jpg';
                    }}
                  />
                  <div className="p-4 bg-white/95 border-t border-gray-100">
                    <span className="text-xs font-semibold uppercase text-[#1F5E4B] tracking-wider block mb-1">Dubai Caseload Note</span>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Most patients attempt multiple massage sessions or heat wraps before seeking needling. Trigger points require deep mechanical release, not superficial warmth.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3.5 rounded-xl border border-gray-200/80 shadow-2xs">
                    <span className="text-xs font-semibold text-[#1F5E4B] block mb-0.5">Pattern 01</span>
                    <strong className="text-sm text-gray-900 block font-bold">Neck & Traps</strong>
                    <span className="text-xs text-gray-500">Commute & screen load</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-gray-200/80 shadow-2xs">
                    <span className="text-xs font-semibold text-[#1F5E4B] block mb-0.5">Pattern 02</span>
                    <strong className="text-sm text-gray-900 block font-bold">Lower Lumbar</strong>
                    <span className="text-xs text-gray-500">Prolonged desk sitting</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-gray-200/80 shadow-2xs">
                    <span className="text-xs font-semibold text-[#1F5E4B] block mb-0.5">Pattern 03</span>
                    <strong className="text-sm text-gray-900 block font-bold">Rotator Cuff</strong>
                    <span className="text-xs text-gray-500">Overhead gym / padel</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-gray-200/80 shadow-2xs">
                    <span className="text-xs font-semibold text-[#1F5E4B] block mb-0.5">Pattern 04</span>
                    <strong className="text-sm text-gray-900 block font-bold">Piriformis</strong>
                    <span className="text-xs text-gray-500">Sciatic referral ache</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* =========================================================================
            SECTION: What Happens, Step by Step (ID: how-it-works)
        ========================================================================= */}
        <section id="how-it-works" className="w-full py-12 md:py-16 bg-white border-b border-gray-100">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-semibold uppercase tracking-wider mb-3">
                <Zap className="w-4 h-4" />
                <span>The Procedure</span>
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight" style={{ color: '#1F5E4B' }}>
                What Happens, Step by Step
              </h2>
            </div>

            {/* Wide Banner Photo */}
            <div className="mb-10 rounded-2xl overflow-hidden shadow-md border border-gray-200 relative h-64 sm:h-80 w-full bg-gray-100 group">
              <img
                src="/images/dry-needling-treatment-jumeirah.jpg"
                alt="Physiotherapist performing dry needling on a patient’s shoulder at RamaCare Polyclinic"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = '/images/dry-needling-physiotherapy-dubai.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex items-end p-5 sm:p-8 text-white">
                <div>
                  <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-1.5 inline-block">
                    In-Clinic Treatment
                  </span>
                  <p className="text-sm sm:text-base font-semibold">
                    Physiotherapist performing dry needling on a patient’s shoulder at RamaCare Polyclinic
                  </p>
                </div>
              </div>
            </div>

            {/* The 4 Exact Step Blocks */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

              <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#E0D8CC] flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[#1F5E4B] text-white font-bold text-sm flex items-center justify-center mb-4 shadow-xs">
                    01
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">The Assessment</h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    The assessment comes first. History, current symptoms, how you move, what’s tight, what’s weak. This is what tells me whether needling is even the right call, and if so, exactly which muscles need it — not just “where does it hurt.”
                  </p>
                </div>
              </div>

              <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#E0D8CC] flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[#1F5E4B] text-white font-bold text-sm flex items-center justify-center mb-4 shadow-xs">
                    02
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">The Needling</h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Then the needling. Fine, sterile needles into the specific trigger points we’ve identified. Twenty to thirty minutes, generally. Expect a twitch, maybe some soreness for a day after.
                  </p>
                </div>
              </div>

              <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#E0D8CC] flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[#1F5E4B] text-white font-bold text-sm flex items-center justify-center mb-4 shadow-xs">
                    03
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">The Rehab Work</h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Then the part patients underestimate — the rehab work. Stretches, strengthening, mobility drills, sometimes a fairly direct conversation about ergonomics or training load. Needling releases the muscle; this part is what stops it from tightening straight back up.
                  </p>
                </div>
              </div>

              <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#E0D8CC] flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[#1F5E4B] text-white font-bold text-sm flex items-center justify-center mb-4 shadow-xs">
                    04
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Check In</h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Then we check in. Follow-up visits track whether pain, movement, and strength are actually improving, and the plan gets adjusted based on that — not just repeated on autopilot.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* =========================================================================
            SECTION: Safety, Honestly (ID: safety-aftercare)
        ========================================================================= */}
        <section id="safety-aftercare" className="w-full py-12 md:py-16 bg-[#FAF9F5] border-b border-[#E0D8CC]/60">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-semibold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>Risk Screening</span>
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight" style={{ color: '#1F5E4B' }}>
                Safety, Honestly
              </h2>
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-stretch">

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E0D8CC] flex flex-col justify-between shadow-xs">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-[#1F5E4B]" />
                      <span>Honest Expectations</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
                      Dry needling is low-risk when it’s done properly, by someone trained to do it — but “low-risk” isn’t “no-risk,” and I’d rather say that plainly than pretend otherwise. Expect the possibility of mild soreness, occasional minor bruising, brief tenderness. Nobody gets needled at RamaCare without an assessment first confirming it’s actually appropriate.
                    </p>
                  </div>
                  <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200/60 text-xs text-emerald-950 font-semibold">
                    ✓ Sterile, single-use, single-patient medical filament needles only.
                  </div>
                </div>

                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-amber-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-amber-950 mb-2 flex items-center gap-2">
                      <ShieldAlert className="w-5 h-5 text-amber-600" />
                      <span>Contraindications</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      A few things change the plan, or rule it out entirely: bleeding or clotting disorders, blood-thinning medication, an active infection near the treatment site, broken skin or a wound at the exact spot, certain uncontrolled medical conditions, pregnancy depending on the area involved, or a strong needle phobia that makes the treatment counterproductive. That’s not an exhaustive list — it’s exactly why I ask about your full medical history before we start, not after.
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-amber-100 text-xs font-semibold text-amber-800">
                    Full clinical screening takes place at the start of your consultation.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-xs border-4 border-white relative group">
                <img
                  src="/images/DHA-licensed physical therapist screening.jpg"
                  alt="DHA-licensed physical therapist screening and treating patient neck trigger points"
                  className="w-full h-full object-cover object-center min-h-[250px]"
                  onError={(e) => {
                    e.currentTarget.src = '/images/ramacare-physiotherapy-consultation-dubai.jpg';
                  }}/>
                  
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-xs uppercase font-semibold text-emerald-300">DHA Licensed Clinic</span>
                  <p className="text-xs font-semibold">Rigorous hygiene and single-patient safety screening protocols</p>
                </div>
              </div>
            </div>

            <div className="w-full bg-[#1F5E4B] text-white p-6 sm:p-8 rounded-2xl shadow-sm">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                <span>Afterward</span>
              </h3>
              <p className="text-sm md:text-base text-white/95 leading-relaxed">
                Afterward: normal activity is fine, hydrate normally, do the exercises you’re given, and if the area’s sore, skip the heavy gym session for a day rather than pushing through it. Soreness doesn’t mean the treatment failed — it usually means the muscle actually responded.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: What Patients Tell Us (ID: what-patients-notice)
        ========================================================================= */}
        <section id="what-patients-notice" className="w-full py-12 md:py-16 bg-white border-b border-gray-100">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

              <div className="lg:col-span-7 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-semibold uppercase tracking-wider">
                  <UserCheck className="w-4 h-4" />
                  <span>Caseload Feedback</span>
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight" style={{ color: '#1F5E4B' }}>
                  What Patients Tell Us
                </h2>
                <div className="space-y-3.5 text-sm md:text-base text-gray-700 leading-relaxed">
                  <p>
                    I don’t love quoting percentages without context, so here’s roughly what we hear back from patients, based on feedback collected across our caseload rather than a formal study: most people notice faster relief from the specific pain they came in with, a good majority feel trigger points release properly rather than just going quiet temporarily, and flexibility improvements show up often enough that we build stretching into almost every plan. Chronic neck, back, and shoulder pain responds particularly well when it’s genuinely muscular in origin. Fewer spasms, less stiffness, and a general preference among patients for something that doesn’t involve medication come up constantly in conversation.
                  </p>
                  <p>
                    None of that is a promise for your specific case — it’s what tends to happen when the underlying issue matches what dry needling is actually designed to treat.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
                <div className="bg-[#FAF9F5] p-5 rounded-xl border border-gray-200 text-center shadow-xs">
                  <div className="text-2xl sm:text-3xl font-bold text-[#1F5E4B]">92%</div>
                  <div className="text-xs text-gray-700 font-semibold mt-1">Faster Relief</div>
                </div>
                <div className="bg-[#FAF9F5] p-5 rounded-xl border border-gray-200 text-center shadow-xs">
                  <div className="text-2xl sm:text-3xl font-bold text-[#1F5E4B]">90%</div>
                  <div className="text-xs text-gray-700 font-semibold mt-1">Trigger Point Release</div>
                </div>
                <div className="bg-[#FAF9F5] p-5 rounded-xl border border-gray-200 text-center shadow-xs">
                  <div className="text-2xl sm:text-3xl font-bold text-[#1F5E4B]">88%</div>
                  <div className="text-xs text-gray-700 font-semibold mt-1">Flexibility Gains</div>
                </div>
                <div className="bg-[#FAF9F5] p-5 rounded-xl border border-gray-200 text-center shadow-xs">
                  <div className="text-2xl sm:text-3xl font-bold text-[#1F5E4B]">96%</div>
                  <div className="text-xs text-gray-700 font-semibold mt-1">Drug-Free Preference</div>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* =========================================================================
            SECTION: Dry Needling or the Usual Options?
        ========================================================================= */}
        <section className="w-full py-12 md:py-16 bg-[#FAF9F5] border-b border-[#E0D8CC]/60">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-semibold uppercase tracking-wider mb-3">
                <Target className="w-4 h-4" />
                <span>Side-by-Side</span>
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-3" style={{ color: '#1F5E4B' }}>
                Dry Needling or the Usual Options?
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-4xl">
                Painkillers, massage, heat, rest — none of these are wrong, and for plenty of muscle pain, they’re genuinely enough. Dry needling earns its place specifically when there’s a persistent trigger point that hasn’t responded to the simpler stuff. Quite often, the right answer isn’t “instead of” but “alongside.”
              </p>
            </div>

            {/* Comparison Table (Full Width) */}
            <div className="w-full overflow-x-auto bg-white rounded-2xl border border-[#E0D8CC] shadow-xs mb-8">
              <table className="w-full text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="border-b-2 border-gray-200 bg-[#F5F1EA]/60">
                    <th className="py-3 px-5 font-bold text-gray-900 text-xs sm:text-sm w-1/4">Aspect</th>
                    <th className="py-3 px-5 font-bold text-[#1F5E4B] text-xs sm:text-sm w-3/8 bg-[#1F5E4B]/5">Dry Needling</th>
                    <th className="py-3 px-5 font-semibold text-gray-700 text-xs sm:text-sm w-3/8">The Usual Approach</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-3 px-5 font-semibold text-gray-900">Targets</td>
                    <td className="py-3 px-5 text-[#1F5E4B] font-semibold bg-[#1F5E4B]/5">The specific trigger point directly</td>
                    <td className="py-3 px-5 text-gray-600">General symptoms</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-3 px-5 font-semibold text-gray-900">Method</td>
                    <td className="py-3 px-5 text-[#1F5E4B] font-semibold bg-[#1F5E4B]/5">Needle into the muscle tissue</td>
                    <td className="py-3 px-5 text-gray-600">Medication, massage, rest, heat</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-3 px-5 font-semibold text-gray-900">Best for</td>
                    <td className="py-3 px-5 text-[#1F5E4B] font-semibold bg-[#1F5E4B]/5">Persistent, localised muscular tightness</td>
                    <td className="py-3 px-5 text-gray-600">Milder or more generalised discomfort</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-3 px-5 font-semibold text-gray-900">Combines with physio</td>
                    <td className="py-3 px-5 text-[#1F5E4B] font-semibold bg-[#1F5E4B]/5">Almost always</td>
                    <td className="py-3 px-5 text-gray-600">Sometimes</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-3 px-5 font-semibold text-gray-900">Downtime</td>
                    <td className="py-3 px-5 text-[#1F5E4B] font-semibold bg-[#1F5E4B]/5">Minimal</td>
                    <td className="py-3 px-5 text-gray-600">Minimal</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-3 px-5 font-semibold text-gray-900">Possible side effects</td>
                    <td className="py-3 px-5 text-[#1F5E4B] font-semibold bg-[#1F5E4B]/5">Brief soreness, occasional bruising</td>
                    <td className="py-3 px-5 text-gray-600">Depends on the treatment</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Subsection: Why We Pair It With Physiotherapy Rather Than Use It Alone */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-xs">
              <div className="lg:col-span-8 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                <div className="w-12 h-12 rounded-xl bg-[#1F5E4B] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1.5">
                    Why We Pair It With Physiotherapy Rather Than Use It Alone
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Loosening a muscle doesn’t fix the posture or the movement habit that made it tight in the first place — that part still needs actual work. Combining the two tends to get closer to the root cause, rebuild how the muscle activates, restore mobility around the joint, and meaningfully cut down how often the same problem comes back.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 rounded-xl overflow-hidden shadow-xs border border-gray-100">
                <img
                  src="/images/Patient performing guided stretching and mobility.jpg"
                  alt="Patient performing guided stretching and mobility exercises at RamaCare"
                  className="w-full h-36 object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.src = '/images/jeena-rehab.jpg';
                  }}
                />
              </div>
            </div>
          </div>
        </section>

    {/* =========================================================================
            SECTION: Cost (ID: cost) & PaymentInsurance (Existing UI)
        ========================================================================= */}
        <section id="cost" className="w-full py-12 md:py-16 bg-white border-b border-gray-100">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-10">

              <div className="lg:col-span-7 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-semibold uppercase tracking-wider">
                  <Info className="w-4 h-4" />
                  <span>Transparency</span>
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight" style={{ color: '#1F5E4B' }}>
                  Cost
                </h2>
                <div className="space-y-3.5 text-sm md:text-base text-gray-700 leading-relaxed">
                  <p>
                    Pricing depends on the assessment, how many areas need treating, and whether it’s part of a longer rehab programme rather than a single session. I’d rather quote you accurately after seeing what’s actually going on than throw out a number that doesn’t match your situation.
                  </p>
                  <p>
                    Call <strong className="text-[#1F5E4B]">{displayCallingPhone}</strong> or WhatsApp <strong className="text-[#1F5E4B]">{displayWhatsApp}</strong> and we’ll talk through it. If you’re comparing clinics, it’s worth asking directly whether their quote includes the assessment and follow-up guidance, or just the fifteen minutes of needling — that’s usually where the real difference in value sits.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello RamaCare Polyclinic, I would like to inquire about Dry Needling pricing and book an assessment.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1F5E4B] hover:bg-[#154a32] text-white font-semibold text-xs sm:text-sm shadow-xs transition-all"
                  >
                    <span>WhatsApp: {displayWhatsApp}</span>
                  </a>
                  <a
                    href={`tel:${clinicCallingPhone}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-xs sm:text-sm transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call: {displayCallingPhone}</span>
                  </a>
                </div>
              </div>
              
              <div className="lg:col-span-5 bg-[#FAF9F5] p-6 sm:p-7 rounded-2xl border border-[#E0D8CC] shadow-xs">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">Comparing Clinics Checklist</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                    <span>Includes clinical musculoskeletal assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                    <span>Administered by university-trained, DHA-licensed physiotherapist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                    <span>Integrates post-needling mobility and exercise drills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                    <span>Weekly home exercise plan to prevent knot recurrence</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Existing Payment & Insurance Component */}
            <div className="w-full pt-4">
              <PaymentInsurance content={paymentInsuranceContent} />
            </div>

          </div>
        </section>


        {/* =========================================================================
            SECTION: Why Patients Keep Coming Back to RamaCare for This
        ========================================================================= */}
        <section className="w-full py-12 md:py-16 bg-[#FAF9F5] border-b border-[#E0D8CC]/60">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-semibold uppercase tracking-wider mb-3">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Our Standard</span>
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4" style={{ color: '#1F5E4B' }}>
                  Why Patients Keep Coming Back to RamaCare for This
                </h2>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                  We don’t skip the assessment, even when a patient is fairly sure they already know what’s wrong. Treatment gets built around your actual pattern of tightness rather than a standard protocol, and needling gets combined with exercise and manual therapy when that’s what the case calls for — which, honestly, is most of the time. Everything’s delivered by DHA-licensed physiotherapists, and you leave with a plan for the week, not just a sore muscle and a callback in seven days. We’re based in Jumeirah 1, a short drive from most of the city.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-3.5 rounded-xl bg-white border border-[#E0D8CC] shadow-2xs">
                    <span className="text-xs font-semibold text-[#1F5E4B] uppercase block mb-0.5">Thorough Care</span>
                    <strong className="text-xs sm:text-sm font-bold text-gray-900 block">No Skipped Assessments</strong>
                    <span className="text-xs text-gray-600">Full diagnostic review before any needle placement</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-[#E0D8CC] shadow-2xs">
                    <span className="text-xs font-semibold text-[#1F5E4B] uppercase block mb-0.5">Tailored</span>
                    <strong className="text-xs sm:text-sm font-bold text-gray-900 block">Movement-First Protocol</strong>
                    <span className="text-xs text-gray-600">Customized to your daily posture & sport patterns</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-[#E0D8CC] shadow-2xs">
                    <span className="text-xs font-semibold text-[#1F5E4B] uppercase block mb-0.5">Credentialed</span>
                    <strong className="text-xs sm:text-sm font-bold text-gray-900 block">DHA-Licensed Experts</strong>
                    <span className="text-xs text-gray-600">University-degreed physiotherapists only</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-[#E0D8CC] shadow-2xs">
                    <span className="text-xs font-semibold text-[#1F5E4B] uppercase block mb-0.5">Central Hub</span>
                    <strong className="text-xs sm:text-sm font-bold text-gray-900 block">Jumeirah 1, Dubai</strong>
                    <span className="text-xs text-gray-600">Ground floor parking with easy access</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden shadow-md border-4 border-white group">
                  <img
                    src="/images/RamaCare Polyclinic modern medical facility.jpg"
                    alt="RamaCare Polyclinic modern medical facility in Jumeirah 1 Dubai"
                    className="w-full h-[380px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/images/ramacare-clinic-reception-dubai.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="text-xs uppercase font-semibold tracking-wider text-emerald-300 mb-1">Jumeirah 1, Dubai</span>
                    <p className="text-xs sm:text-sm font-semibold">RamaCare Polyclinic — Jumeirah Terrace Building, Ground Floor</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION: Is This Worth Looking Into for You?
        ========================================================================= */}
        <section className="w-full py-12 md:py-16 bg-white border-b border-gray-100">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="w-full bg-[#1F5E4B] text-white p-7 sm:p-10 rounded-2xl shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-xs uppercase font-semibold tracking-wider text-emerald-300 mb-2 block">Patient Guidance</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
                  Is This Worth Looking Into for You?
                </h2>
                <div className="space-y-3.5 text-sm md:text-base text-white/90 leading-relaxed">
                  <p>
                    If you’ve had the same tight spot in your neck for months, or your lower back tightens up every time you sit for more than an hour, or a muscle injury from sport just won’t fully settle — that’s usually the profile of someone who benefits from this. Tension headaches that trace back to the neck fit here too, as does general muscle pain that’s started interfering with work or exercise in a way it didn’t used to.
                  </p>
                  <p>
                    Ignoring it rarely makes it go away on its own. It usually just gets more entrenched, drags your posture and movement down with it over time, and raises the odds of a bigger injury eventually. Catching it early generally means less treatment overall, not more — which is the opposite of what most people assume.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 rounded-xl overflow-hidden border-2 border-white/20 shadow-md">
                <img
                  src="/images/Sports physiotherapist treating an athlete in Dubai.jpg"
                  alt="Active mobility and dry needling recovery for athletes in Dubai"
                  className="w-full h-56 object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.src = '/images/ACL rehabilitation exercise session.jpg';
                  }}
                />
                <div className="p-3 bg-emerald-950/60 backdrop-blur-sm text-xs text-white/90 font-medium">
                  Early intervention restores muscular balance before chronic guarding habits form.
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* =========================================================================
            SECTION: Reviews & Testimonials (ID: testimonials)
            (Note: Google Reviews is portalled automatically by Layout right above FAQ)
        ========================================================================= */}
        <div id="testimonials">
          {/* Existing Patient Video Testimonials */}
          <PatientTestimonials />
        </div>


        {/* =========================================================================
            SECTION: Our Physiotherapist (ID: our-doctors)
        ========================================================================= */}
        <section id="our-doctors" className="w-full py-12 md:py-16 bg-white border-b border-gray-100">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-semibold uppercase tracking-wider mb-3">
                <Stethoscope className="w-4 h-4" />
                <span>Clinical Specialist</span>
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight" style={{ color: '#1F5E4B' }}>
                Our Physiotherapist
              </h2>
            </div>

            <div className="w-full bg-[#FAF9F5] p-6 sm:p-10 rounded-2xl border border-[#E0D8CC] shadow-xs flex flex-col lg:flex-row gap-8 items-center lg:items-start">

              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-4 border-white shadow-md flex-shrink-0 bg-gray-100">
                <img
                  src="/images/Jeena Mathew.jpeg"
                  alt="Jeena Mathew, DHA-licensed physiotherapist, RamaCare Polyclinic Dubai"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src = '/images/jeena-assessment.jpg';
                  }}
                />
              </div>

              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                  Jeena Mathew — BPT, MPT (Physiotherapy)
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#1F5E4B] uppercase tracking-wider mb-3">
                  DHA Licensed Physiotherapist | Musculoskeletal Physiotherapy | 8+ Years Experience
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  Jeena has spent most of her career on musculoskeletal cases specifically — the kind of work where the job is figuring out exactly why a muscle or joint isn’t cooperating, not just treating whatever hurts today. Her focus areas:
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700 mb-4 text-left pl-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1F5E4B] font-bold">•</span>
                    <span><strong>Back pain</strong> — manual therapy combined with targeted strengthening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1F5E4B] font-bold">•</span>
                    <span><strong>Neck pain</strong> — joint mobility work and posture advice that actually accounts for your real daily routine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1F5E4B] font-bold">•</span>
                    <span><strong>Shoulder and knee rehab</strong> — progressive, structured recovery plans</span>
                  </li>
                </ul>
                <p className="text-xs sm:text-sm text-gray-700 mb-5 font-medium">
                  Speaks: <strong className="text-gray-900 font-semibold">English</strong>
                </p>

                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Link
                    href="/doctors/jeena-mathew-physiotherapist-dubai"
                    className="px-5 py-2.5 rounded-xl bg-white border border-gray-300 hover:bg-gray-50 text-xs sm:text-sm font-semibold text-gray-800 shadow-2xs transition-colors"
                  >
                    View Full Profile
                  </Link>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Jeena Mathew, I would like to book a Dry Needling consultation at RamaCare Polyclinic.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#1F5E4B] hover:bg-[#154a32] text-xs sm:text-sm font-semibold text-white shadow-2xs transition-colors"
                  >
                    Book with Jeena
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* =========================================================================
            SECTION: Clinically Reviewed
        ========================================================================= */}
        <section className="w-full py-12 md:py-16 bg-[#FAF9F5] border-b border-[#E0D8CC]/60">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-6" style={{ color: '#1F5E4B' }}>
              Clinically Reviewed
            </h2>

            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-[#E0D8CC]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1F5E4B] mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>DHA Licensed Polyclinic Standards</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                Reviewed by Jeena Mathew — Musculoskeletal Physiotherapy Specialist, BPT, MPT (Physiotherapy), DHA Licensed Physiotherapist, 8+ Years Clinical Experience, 600+ Patients Treated.
              </h3>
              <div className="bg-[#FAF9F5] p-5 rounded-xl border border-gray-200 italic text-gray-700 text-sm md:text-base leading-relaxed my-3 border-l-4 border-l-[#1F5E4B]">
                “I reviewed this page myself to make sure it reflects how we actually practise here — not a generic description of dry needling copied from somewhere else.” — Jeena Mathew
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-gray-600 pt-2">
                <span>RamaCare Medical Review Board · Jumeirah 1, Dubai</span>
                <Link
                  href="/doctors/jeena-mathew-physiotherapist-dubai"
                  className="font-semibold text-[#1F5E4B] hover:underline"
                >
                  [View Doctor Profile]
                </Link>
              </div>
            </div>

          </div>
        </section>


        {/* =========================================================================
            SECTION: Frequently Asked Questions (Official Existing FAQ UI)
        ========================================================================= */}
        <FAQSection content={faqContent} />


        {/* =========================================================================
            SECTION: Other Physiotherapy Services We Offer
        ========================================================================= */}
        <section className="w-full py-12 md:py-16 bg-[#FAF9F5] border-b border-[#E0D8CC]/60">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-semibold uppercase tracking-wider mb-3">
                <Activity className="w-4 h-4" />
                <span>Related Treatments</span>
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight" style={{ color: '#1F5E4B' }}>
                Other Physiotherapy Services We Offer
              </h2>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {otherServices.map((srv, idx) => (
                <Link
                  key={idx}
                  href={srv.link}
                  className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200/80 hover:border-[#1F5E4B] hover:shadow-md transition-all flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-800 group shadow-2xs"
                >
                  <span>{srv.title}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1F5E4B] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>

          </div>
        </section>


        {/* =========================================================================
            SECTION: Book In (ID: book-now)
        ========================================================================= */}
        <section id="book-now" className="w-full py-12 md:py-16 bg-white">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="w-full bg-[#1F5E4B] text-white p-8 sm:p-12 rounded-2xl shadow-lg text-center relative overflow-hidden">
              <div className="relative z-10 w-full max-w-3xl mx-auto">
                <span className="text-xs uppercase font-semibold tracking-wider text-emerald-300 mb-2 block">Start Your Recovery</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                  Book In
                </h2>
                <p className="text-sm md:text-base text-white/90 leading-relaxed mb-3">
                  If a tight muscle has been running your week for longer than it should, it’s worth getting it actually looked at rather than waiting it out again. Our team can tell you fairly quickly during the first visit whether dry needling makes sense for your case.
                </p>
                <p className="text-xs sm:text-sm text-emerald-200 mb-6 font-medium">
                  Book your consultation at RamaCare Polyclinic, Jumeirah 1, Dubai. Call: {displayCallingPhone} | WhatsApp: {displayWhatsApp}
                </p>

                <div className="flex flex-wrap gap-3.5 justify-center">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello RamaCare Polyclinic, I would like to book an appointment for Dry Needling in Dubai.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-white text-[#1F5E4B] font-bold text-xs sm:text-sm hover:bg-gray-100 shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    <span>Book via WhatsApp: {displayWhatsApp}</span>
                  </a>
                  <a
                    href={`tel:${clinicCallingPhone}`}
                    className="px-6 py-3.5 rounded-xl bg-white/15 border border-white/30 text-white font-semibold text-xs sm:text-sm hover:bg-white/25 transition-all flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call: {displayCallingPhone}</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
    </Layout>
  );
}
