import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useToast } from '../../../components/Toast';
import { useRouter } from 'next/router';
import ContentReviewBadge from '../../../components/ContentReviewBadge';

/* ------------------------------------------------------------------
   Page data — sourced directly from the Physiotherapy Cost Dubai
   content brief (pricing, sections, 18 FAQs, schema recommendations).
------------------------------------------------------------------- */
const SITE_URL = 'https://ramacarepolyclinic.ae';
const PAGE_PATH = '/physiotherapy-cost-dubai';

const trustPoints = [
  'Sessions starting from AED 500 (60 minutes) and AED 750 (90 minutes)',
  'Experienced, DHA-licensed physiotherapists',
  'One-on-one, personalized treatment plans',
  'Modern rehabilitation equipment in a comfortable Dubai clinic setting',
];

const whyVaries = [
  { icon: 'Activity', title: 'Condition Complexity', text: 'A stiff neck from poor posture needs a very different approach than a post-surgical knee recovery.' },
  { icon: 'Settings2', title: 'Techniques Used', text: 'Manual therapy, dry needling, electrotherapy, and exercise-based rehab each need different time and skill.' },
  { icon: 'Clock', title: 'Session Length', text: 'A focused 60-minute session covers assessment and treatment; 90 minutes allows more comprehensive work.' },
  { icon: 'Award', title: 'Therapist Experience', text: 'Treatment from a DHA-licensed, experienced clinician reflects real training and clinical judgment.' },
];

const pricingTiers = [
  {
    id: 'sixty',
    label: '60-Minute Session',
    price: 'AED 500',
    duration: 'Standard Session',
    suitableFor: ['Initial assessment', 'Manual therapy', 'Pain management', 'Exercise therapy'],
  },
  {
    id: 'ninety',
    label: '90-Minute Session',
    price: 'AED 750',
    duration: 'Extended Session',
    suitableFor: ['Complex conditions', 'Sports rehabilitation', 'Multiple body areas', 'Post-operative rehabilitation', 'Advanced treatment sessions'],
  },
];

const costOverview = [
  { type: 'Standard Physiotherapy', duration: '60 Minutes', price: 'AED 500', bestFor: 'Pain relief, assessment, rehabilitation' },
  { type: 'Extended Physiotherapy', duration: '90 Minutes', price: 'AED 750', bestFor: 'Sports rehab, post-surgery recovery, complex cases' },
];

const included = [
  'Assessment — a thorough review of your movement, posture, strength, and pain patterns',
  "Diagnosis — identifying the underlying cause of your symptoms, not just what hurts on the surface",
  'Movement evaluation — watching how you walk, bend, lift, and move to spot the root of the problem',
  'Treatment planning — a structured plan tailored to your condition and recovery goals',
  'Manual therapy — hands-on techniques to reduce pain, improve joint mobility, release tension',
  'Exercise prescription — specific exercises chosen to rebuild strength, flexibility, and function',
  'Home exercise plan — guidance you can follow between sessions to speed up progress',
  'Patient education — understanding your condition so you know what\u2019s happening and why',
  'Progress tracking — ongoing evaluation to adjust your plan as your body improves',
];

const conditions = [
  'Back Pain', 'Neck Pain', 'Shoulder Pain', 'Knee Pain', 'Sports Injuries', 'Frozen Shoulder',
  'Sciatica', 'Slip Disc', 'Post-Surgical Rehabilitation', 'Arthritis', 'Tennis Elbow',
  'Plantar Fasciitis', 'Cervical Spondylosis', 'Balance Disorders', 'Postural Problems',
];

const techniques = [
  { icon: 'Hand', name: 'Manual Therapy', text: 'Hands-on joint mobilization and soft tissue release' },
  { icon: 'Zap', name: 'Electrotherapy', text: 'Electrical stimulation to reduce pain and support recovery' },
  { icon: 'Waves', name: 'Ultrasound Therapy', text: 'Deep tissue healing using therapeutic sound waves' },
  { icon: 'Target', name: 'Dry Needling', text: 'Targeted therapy to release tight, painful trigger points' },
  { icon: 'Activity', name: 'TENS', text: 'Pain relief through gentle electrical currents' },
  { icon: 'Dumbbell', name: 'Exercise Therapy', text: 'Structured movement programs to restore function' },
  { icon: 'Move', name: 'Stretching', text: 'Improving flexibility and reducing muscle tightness' },
  { icon: 'TrendingUp', name: 'Strength Training', text: 'Rebuilding muscle support around injured areas' },
  { icon: 'AlignCenter', name: 'Posture Correction', text: 'Addressing the root cause of many chronic pain patterns' },
  { icon: 'Trophy', name: 'Sports Rehabilitation', text: 'Getting athletes safely back to performance' },
  { icon: 'Scale', name: 'Balance Training', text: 'Improving stability, especially for fall prevention' },
  { icon: 'RotateCw', name: 'Mobility Training', text: 'Restoring full, pain-free range of motion' },
  { icon: 'Brain', name: 'Neurological Rehabilitation', text: 'Supporting recovery from stroke or nerve injury' },
];

const costFactors = [
  { n: '01', title: 'Condition Severity', text: 'Mild strains generally need fewer sessions than chronic or severe injuries.' },
  { n: '02', title: 'Session Duration', text: '60-minute sessions differ in scope from 90-minute extended sessions.' },
  { n: '03', title: 'Techniques Used', text: 'Advanced techniques like dry needling or electrotherapy may add complexity.' },
  { n: '04', title: 'Rehabilitation Goals', text: 'Returning to daily activity versus competitive sport needs different intensity.' },
  { n: '05', title: 'Sessions Required', text: 'Recovery timelines vary from a handful of visits to a longer program.' },
  { n: '06', title: 'Acute vs. Chronic', text: 'Long-standing issues often need a more gradual, multi-phase approach.' },
  { n: '07', title: 'Equipment Required', text: 'Certain conditions benefit from specialized rehabilitation equipment.' },
  { n: '08', title: 'Home Exercise Programme', text: 'A well-designed home program can reduce in-clinic sessions over time.' },
];

const whyChoose = [
  'DHA Licensed Physiotherapists — treatment delivered by qualified, regulated clinicians',
  'Personalized treatment plans — no generic protocols; every plan is built around your body',
  'Evidence-based rehabilitation — techniques grounded in current clinical research',
  'Modern equipment — purpose-built tools to support faster, safer recovery',
  'One-on-one sessions — your full session, focused entirely on you',
  'Patient education — we explain your condition so you understand your own recovery',
  'Convenient Dubai location — easy to reach for regular sessions',
  'Easy appointment booking — simple online and WhatsApp booking options',
  'Multidisciplinary care — access to a broader clinical team when needed',
];

const compareTable = [
  { feature: 'Starting Price', value: 'AED 500' },
  { feature: 'Extended Session', value: 'AED 750' },
  { feature: 'DHA Licensed', value: true },
  { feature: 'Personalized Care', value: true },
  { feature: 'Modern Equipment', value: true },
  { feature: 'One-to-One Sessions', value: true },
  { feature: 'Exercise Plan', value: true },
];

const journey = [
  { icon: 'MessageSquare', title: 'Consultation', text: 'You share your symptoms, history, and concerns.' },
  { icon: 'Search', title: 'Assessment', text: 'A hands-on evaluation of movement, strength, and pain patterns.' },
  { icon: 'Stethoscope', title: 'Diagnosis', text: 'Your physiotherapist identifies the underlying cause.' },
  { icon: 'ClipboardList', title: 'Treatment Plan', text: 'A structured, personalized plan built around your goals.' },
  { icon: 'PlayCircle', title: 'First Session', text: 'Treatment begins — manual therapy, exercise, education.' },
  { icon: 'TrendingUp', title: 'Progress Review', text: 'Your therapist checks improvement and adjusts your plan.' },
  { icon: 'HeartPulse', title: 'Recovery', text: 'You regain strength, mobility, and function.' },
  { icon: 'ShieldCheck', title: 'Maintenance', text: 'Guidance on preventing recurrence, staying pain-free.' },
];

const related = [
  { label: 'Physiotherapy Dubai', href: '/services/physiotherapy-dubai/' },
  { label: 'Sports Injury Rehabilitation Dubai', href: '/services/sports-injury-rehabilitation-dubai/' },
  { label: 'Dry Needling Dubai', href: '/services/dry-needling-dubai/' },
  { label: 'Electrotherapy Dubai', href: '/services/electrotherapy-dubai/' },
  { label: 'Ultrasound Therapy Dubai', href: '/services/ultrasound-therapy-dubai/' },
  { label: 'Frozen Shoulder Treatment Dubai', href: '/services/frozen-shoulder-treatment-dubai/' },
  { label: 'Sciatica Treatment Dubai', href: '/services/sciatica-treatment-dubai/' },
  { label: 'Neck Pain Treatment Dubai', href: '/services/neck-pain-treatment-dubai/' },
  { label: 'Knee Pain Treatment Dubai', href: '/services/knee-pain-treatment-dubai/' },
  { label: 'Shoulder Pain Treatment Dubai', href: '/services/shoulder-pain-treatment-dubai/' },
  { label: 'Arthritis Treatment Dubai', href: '/services/arthritis-treatment-dubai/' },
  { label: 'Slip Disc Treatment Dubai', href: '/services/slip-disc-treatment-dubai/' },
  { label: 'Post-Surgery Rehabilitation Dubai', href: '/services/post-surgery-rehabilitation-dubai/' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Book Appointment', href: '/book-appointment/' },
];

const faqs = [
  { q: 'How much does physiotherapy cost in Dubai?', a: 'Physiotherapy Cost Dubai starts from AED 500 for a 60-minute session and AED 750 for a 90-minute extended session at RamaCare Polyclinic. Your exact cost depends on your condition and treatment plan.' },
  { q: 'Is AED 500 expensive for a physiotherapy session?', a: 'AED 500 covers a full 60-minute session with a DHA-licensed physiotherapist, including assessment, manual therapy, and exercise guidance — reflecting the qualified, one-on-one care you receive rather than a quick, generic treatment.' },
  { q: 'How many physiotherapy sessions will I need?', a: 'This varies by condition. Mild strains may resolve in a few sessions, while chronic or post-surgical conditions often require a longer, structured program. Your physiotherapist will estimate this after your first assessment.' },
  { q: 'Does insurance cover physiotherapy in Dubai?', a: 'Many health insurance plans in Dubai offer partial or full coverage for physiotherapy, depending on your policy. We recommend checking your specific plan details or asking our front desk team for guidance.' },
  { q: 'Is physiotherapy worth the cost?', a: 'For most musculoskeletal conditions, physiotherapy addresses the root cause of pain rather than just masking symptoms, which can reduce the need for stronger medication or surgery over time.' },
  { q: 'What happens during the first physiotherapy session?', a: 'Your first session includes a detailed assessment of your condition, a discussion of your symptoms and goals, and the start of your personalized treatment plan.' },
  { q: 'How long does each physiotherapy session last?', a: 'Standard sessions run 60 minutes, while extended sessions for complex or multi-area conditions run 90 minutes.' },
  { q: "Do I need a doctor's referral for physiotherapy?", a: 'In most cases, you can book a physiotherapy consultation directly without a referral, though some insurance providers may require one for coverage purposes.' },
  { q: 'Can physiotherapy help me avoid surgery?', a: 'In many cases, especially with early intervention, physiotherapy can reduce pain and restore function enough that surgery is no longer necessary — though this always depends on the specific diagnosis.' },
  { q: 'Which conditions commonly require physiotherapy?', a: 'Back pain, neck pain, knee pain, shoulder injuries, sciatica, frozen shoulder, sports injuries, and post-surgical recovery are among the most common conditions we treat.' },
  { q: 'What is included in the physiotherapy session price?', a: 'Your session includes assessment, diagnosis, manual therapy, exercise prescription, a home exercise plan, patient education, and progress tracking.' },
  { q: 'Is there a difference between a 60-minute and 90-minute session?', a: 'Yes. The 60-minute session suits assessments and focused treatment, while the 90-minute session allows for more comprehensive work across multiple body areas or complex conditions.' },
  { q: 'Do I need multiple sessions per week?', a: "Session frequency depends on your condition's severity and your recovery goals. Your physiotherapist will recommend a schedule tailored to you." },
  { q: 'What should I wear to a physiotherapy session?', a: 'Comfortable, loose-fitting clothing that allows easy movement is recommended, especially if your treatment area is your back, knees, or shoulders.' },
  { q: 'Can physiotherapy help with sports injuries?', a: 'Yes. Our sports physiotherapy programs are designed to help athletes recover safely and return to their sport with reduced risk of re-injury.' },
  { q: 'Is physiotherapy safe for older adults?', a: 'Yes, physiotherapy is commonly used to improve mobility, balance, and strength in older adults, with treatment plans adjusted for individual health conditions.' },
  { q: 'What qualifications do RamaCare physiotherapists have?', a: 'Our physiotherapists are DHA licensed and experienced in treating a wide range of musculoskeletal and neurological conditions.' },
  { q: 'How do I book a physiotherapy appointment at RamaCare?', a: 'You can book directly through our website, call our clinic, or message us on WhatsApp for a fast response.' },
];

/* ------------------------------------------------------------------
   JSON-LD schema — covers all seven recommended types from the brief
------------------------------------------------------------------- */
function buildSchema() {
  const medicalClinic = {
    '@context': 'https://schema.org',
    '@type': ['MedicalClinic', 'MedicalBusiness', 'LocalBusiness'],
    name: 'RamaCare Polyclinic',
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jumeirah 1',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    medicalSpecialty: 'Physiotherapy',
  };

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Physiotherapy',
    serviceType: 'Physiotherapy & Rehabilitation',
    provider: { '@type': 'MedicalBusiness', name: 'RamaCare Polyclinic', url: SITE_URL },
    areaServed: 'Dubai, UAE',
    offers: [
      {
        '@type': 'Offer',
        name: '60-Minute Physiotherapy Session',
        priceCurrency: 'AED',
        price: '500',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: '90-Minute Extended Physiotherapy Session',
        priceCurrency: 'AED',
        price: '750',
        availability: 'https://schema.org/InStock',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
      { '@type': 'ListItem', position: 2, name: 'Physiotherapy Dubai', item: SITE_URL + '/services/physiotherapy-dubai/' },
      { '@type': 'ListItem', position: 3, name: 'Physiotherapy Cost Dubai', item: SITE_URL + PAGE_PATH },
    ],
  };

  return [medicalClinic, service, faqSchema, breadcrumb];
}

/* ------------------------------------------------------------------
   Small building blocks — a receipt-style checklist, a tag cloud,
   and a ghost-numeral factor tile: none reused from prior pages.
------------------------------------------------------------------- */
function ReceiptRow({ text }) {
  return (
    <li className="flex items-baseline gap-2 py-2">
      <LucideIcons.Check className="w-4 h-4 text-[#1F5E4B] shrink-0" />
      <span className="text-sm text-[#1A1A1A]/85 leading-relaxed">{text}</span>
      <span className="flex-1 border-b border-dotted border-gray-300 translate-y-[-3px]" />
    </li>
  );
}

function FactorTile({ n, title, text }) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-[#E9E2D6] p-5 bg-white">
      <span className="absolute -top-2 right-2 text-5xl font-semibold text-[#F5F1EA] select-none">{n}</span>
      <p className="relative text-sm font-semibold text-[#1A1A1A]">{title}</p>
      <p className="relative text-sm text-[#5F5F5F] leading-relaxed mt-1">{text}</p>
    </div>
  );
}

function IconTile({ name, className = 'w-5 h-5 text-[#1F5E4B]' }) {
  const Icon = LucideIcons[name] || LucideIcons.Circle;
  return <Icon className={className} />;
}

export default function PhysiotherapyCostDubaiPage() {
  const { showToast, ToastComponent } = useToast();
  const [activeTier, setActiveTier] = useState('sixty');
  const [openFaq, setOpenFaq] = useState(null);
  const router = useRouter();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello RamaCare, I'd like to know more about physiotherapy pricing and book a consultation."
    );
    window.open(`https://wa.me/971566597878?text=${message}`, '_blank');
  };

  const handleBookAppointment = () => router.push('/book-appointment/');
  const activeTierData = pricingTiers.find((t) => t.id === activeTier);
  const schemaBlocks = buildSchema();

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">Physiotherapy Cost Dubai | Sessions from AED 500</title>
        <meta
          name="description"
          content="Physiotherapy Cost Dubai starts from AED 500 at RamaCare Polyclinic. DHA-licensed physiotherapists, personalized care plans. Book your consultation today."
          key="description"
        />
        <link rel="canonical" href={SITE_URL + PAGE_PATH} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Physiotherapy Cost Dubai | Sessions from AED 500" />
        <meta
          property="og:description"
          content="Physiotherapy Cost Dubai starts from AED 500 at RamaCare Polyclinic. DHA-licensed physiotherapists, personalized care plans."
        />
        <meta property="og:url" content={SITE_URL + PAGE_PATH} />
        <meta property="og:image" content={SITE_URL + '/images/physiotherapy-consultation-ramacare.jpg'} />
        <meta name="twitter:card" content="summary_large_image" />
        {schemaBlocks.map((block, i) => (
          <script key={`schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }} />
        ))}
      </Head>

      {/* ============ HERO — text + pricing snapshot panel, no image ============ */}
      <section className="bg-[#F5F1EA] px-6 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-medium text-[#5F5F5F] mb-4">
              Home <span className="mx-1.5">/</span> Physiotherapy Dubai <span className="mx-1.5">/</span>{' '}
              <span className="text-[#1F5E4B]">Physiotherapy Cost Dubai</span>
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#1A1A1A] leading-[1.15] mb-6">
              Physiotherapy Cost Dubai: A Complete Pricing Guide from RamaCare Polyclinic
            </h1>
            <p className="text-[#5F5F5F] leading-relaxed mb-4">
              If you&apos;ve been searching for clear answers on Physiotherapy Cost Dubai, you&apos;re probably dealing with pain that&apos;s affecting your daily life and you want to know what treatment will actually cost before you commit. At RamaCare Polyclinic, our physiotherapy sessions start from AED 500 for a standard 60-minute session and AED 750 for an extended 90-minute session, with our experienced, DHA-licensed physiotherapists guiding every step of your recovery.
            </p>
            <p className="text-[#5F5F5F] leading-relaxed mb-8">
              Pricing in physiotherapy isn&apos;t one-size-fits-all, and that&apos;s actually a good thing — it means your treatment plan is built around your body, not a generic template. Below, we&apos;ll walk you through exactly what shapes the cost of physiotherapy in Dubai, what a typical physiotherapy session price Dubai clinics charge actually includes, and how to choose a clinic that gives you real value for your money.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={handleBookAppointment} className="inline-flex items-center gap-2 rounded-md bg-[#1F5E4B] px-6 py-3 text-sm font-medium text-white hover:bg-[#17493A] transition-colors">
                <LucideIcons.Calendar className="w-4 h-4" /> Book Appointment
              </button>
              <button onClick={handleWhatsAppClick} className="inline-flex items-center gap-2 rounded-md border border-[#1F5E4B] px-6 py-3 text-sm font-medium text-[#1F5E4B] bg-white hover:bg-gray-50 transition-colors">
                <LucideIcons.MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </button>
            </div>
          </motion.div>

          {/* Pricing snapshot panel */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="rounded-2xl bg-white border border-[#E9E2D6] p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1F5E4B] mb-4">Why Patients Choose RamaCare</p>
            <ul className="space-y-3 mb-6">
              {trustPoints.map((t) => (
                <li key={t} className="flex gap-2.5">
                  <LucideIcons.CheckCircle2 className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#1A1A1A]/85 leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-[#F0F7F4] p-4 text-center">
                <p className="text-[11px] font-medium text-[#5F5F5F]">60 Minutes</p>
                <p className="text-xl font-semibold text-[#1F5E4B]">AED 500</p>
              </div>
              <div className="rounded-lg bg-[#F0F7F4] p-4 text-center">
                <p className="text-[11px] font-medium text-[#5F5F5F]">90 Minutes</p>
                <p className="text-xl font-semibold text-[#1F5E4B]">AED 750</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image banner divider */}
      <div className="w-full">
        <img
          src="/images/physiotherapy-shoulder-assessment-ramacare.jpg"
          alt="Physiotherapy Cost Dubai consultation with a DHA-licensed physiotherapist at RamaCare Polyclinic"
          className="w-full h-[220px] sm:h-[300px] object-cover"
        />
      </div>

      {/* ============ Why costs vary ============ */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">Why Physiotherapy Costs Vary in Dubai</h2>
        <p className="text-[#5F5F5F] leading-relaxed mb-4">
          Before we get into numbers, it helps to understand why you&apos;ll see different prices when you search around Dubai. Physiotherapy is a hands-on, clinical service — not a fixed product — so the price naturally depends on what your body needs.
        </p>
        <p className="text-[#5F5F5F] leading-relaxed mb-8">
          Choosing quality care matters here more than almost anywhere else in healthcare. An inexperienced or rushed approach can prolong your recovery or, worse, aggravate your injury — which usually costs more in the long run through additional sessions. This is exactly why RamaCare focuses on getting your treatment plan right from the first assessment.
        </p>
        <div className="flex flex-wrap gap-4">
          {whyVaries.map((w) => (
            <div key={w.title} className="flex-1 min-w-[220px] flex items-start gap-3 rounded-lg bg-[#F5F1EA] p-4">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
                <IconTile name={w.icon} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1A1A1A]">{w.title}</p>
                <p className="text-xs text-[#5F5F5F] leading-relaxed mt-0.5">{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ Pricing — tab switcher + overview table ============ */}
      <section className="bg-[#F5F1EA] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-2">Physiotherapy Pricing at RamaCare Polyclinic</h2>
          <p className="text-[#5F5F5F] leading-relaxed mb-8">Physiotherapy Cost Dubai at a glance — our transparent, straightforward pricing structure.</p>

          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            {pricingTiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setActiveTier(tier.id)}
                className={`flex-1 rounded-xl px-5 py-4 text-left border transition-colors ${
                  activeTier === tier.id ? 'bg-white border-[#1F5E4B] shadow-sm' : 'bg-white/50 border-transparent hover:bg-white'
                }`}
              >
                <p className="text-xs font-medium text-[#5F5F5F]">{tier.duration}</p>
                <p className="text-lg font-semibold text-[#1A1A1A]">{tier.label}</p>
                <p className="text-2xl font-semibold text-[#1F5E4B] mt-1">{tier.price}</p>
              </button>
            ))}
          </div>

          <motion.div
            key={activeTier}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl bg-white border border-[#E9E2D6] p-6 mb-10"
          >
            <p className="text-sm font-semibold text-[#1A1A1A] mb-3">Suitable For</p>
            <div className="flex flex-wrap gap-2">
              {activeTierData.suitableFor.map((s) => (
                <span key={s} className="text-xs font-medium text-[#1F5E4B] bg-[#F0F7F4] px-3 py-1.5 rounded-full">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          <p className="text-sm text-[#5F5F5F] leading-relaxed mb-6">
            The final treatment cost depends on your condition, your treatment plan, your therapist&apos;s clinical recommendations, and the total number of sessions required to reach your recovery goals.
          </p>

          <div className="overflow-hidden rounded-xl border border-[#E9E2D6]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F0F7F4]">
                  <th className="text-left px-5 py-3 font-medium text-[#1A1A1A]">Session Type</th>
                  <th className="text-left px-5 py-3 font-medium text-[#1A1A1A]">Duration</th>
                  <th className="text-left px-5 py-3 font-medium text-[#1A1A1A]">Starting Price</th>
                  <th className="text-left px-5 py-3 font-medium text-[#1A1A1A]">Best For</th>
                </tr>
              </thead>
              <tbody>
                {costOverview.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FBFAF7]'}>
                    <td className="px-5 py-3.5 border-t border-[#E9E2D6] font-medium text-[#1A1A1A]">{row.type}</td>
                    <td className="px-5 py-3.5 border-t border-[#E9E2D6] text-[#5F5F5F]">{row.duration}</td>
                    <td className="px-5 py-3.5 border-t border-[#E9E2D6] font-semibold text-[#1F5E4B]">{row.price}</td>
                    <td className="px-5 py-3.5 border-t border-[#E9E2D6] text-[#5F5F5F]">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#5F5F5F] leading-relaxed mt-3">
            Prices mentioned are starting prices and may vary depending on the patient&apos;s condition, treatment duration, required techniques, and clinical assessment. A consultation with a qualified physiotherapist is recommended to determine the most appropriate treatment plan.
          </p>
        </div>
      </section>

      {/* Clinic interior banner */}
      <div className="w-full">
        <img
          src="/images/physiotherapy-clinic-interior-ramacare.jpg"
          alt="RamaCare Polyclinic physiotherapy clinic in Dubai offering affordable physiotherapy"
          className="w-full h-[220px] sm:h-[280px] object-cover"
        />
      </div>

      {/* ============ What's included — receipt-style checklist ============ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-2">What Is Included in the Cost?</h2>
        <p className="text-[#5F5F5F] leading-relaxed mb-6">
          A common question we hear is, &quot;What am I actually paying for?&quot; Here&apos;s exactly what&apos;s included in every physiotherapy session at RamaCare:
        </p>
        <ul className="rounded-xl border border-[#E9E2D6] bg-white px-6 py-2 divide-y divide-gray-50">
          {included.map((i) => (
            <ReceiptRow key={i} text={i} />
          ))}
        </ul>
        <p className="text-sm text-[#5F5F5F] leading-relaxed mt-5">
          This is what separates genuine physiotherapy from a quick massage-style session — every part of your visit is working toward measurable recovery.
        </p>

        <div className="mt-10 rounded-lg overflow-hidden">
          <img
            src="/images/physiotherapy-exercise-therapy-resistance-bands.jpg"
            alt="Exercise therapy session included in physiotherapy cost Dubai treatment plan"
            className="w-full h-[260px] object-cover"
          />
        </div>
      </section>

      {/* ============ Conditions — tag cloud ============ */}
      <section className="bg-[#F0F7F4] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-2">Conditions We Treat</h2>
          <p className="text-[#5F5F5F] leading-relaxed mb-6">
            Our physiotherapists at RamaCare Polyclinic manage a wide range of musculoskeletal and neurological conditions. Whether you need back pain physiotherapy Dubai clinics recommend for chronic strain, neck pain physiotherapy Dubai patients seek after desk work, or knee pain physiotherapy Dubai athletes rely on after injury, we build a plan around your diagnosis, not a generic protocol.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {conditions.map((c) => (
              <span key={c} className="text-sm text-[#1A1A1A] bg-white border border-[#E9E2D6] px-4 py-2 rounded-full">
                {c}
              </span>
            ))}
          </div>
          <p className="text-sm text-[#5F5F5F] leading-relaxed mt-6">
            If your condition isn&apos;t listed here, reach out directly and our team will let you know how we can help.
          </p>

          <div className="mt-8 rounded-lg overflow-hidden">
            <img
              src="/images/manual-therapy-back-pain-ramacare.jpg"
              alt="Manual therapy Dubai session for back pain treatment at RamaCare Polyclinic"
              className="w-full h-[260px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============ Techniques — dense spec-sheet grid ============ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-2">Treatment Techniques We Use</h2>
        <p className="text-[#5F5F5F] leading-relaxed mb-8">
          Every treatment plan at RamaCare is built from a combination of evidence-based techniques, chosen specifically for your condition. Your physiotherapist will select and combine these based on your assessment findings — this personalization is a major factor in physiotherapy cost, and also the reason it works.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
          {techniques.map((t) => (
            <div key={t.name} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-md bg-[#F0F7F4] flex items-center justify-center shrink-0">
                <IconTile name={t.icon} className="w-4 h-4 text-[#1F5E4B]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1A1A1A]">{t.name}</p>
                <p className="text-xs text-[#5F5F5F] leading-relaxed">{t.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-10">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/images/sports-physiotherapy-knee-rehabilitation.jpg"
              alt="Sports physiotherapy Dubai knee rehabilitation session"
              className="w-full h-[220px] object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="/images/electrotherapy-ultrasound-treatment-dubai.jpg"
              alt="Ultrasound and electrotherapy techniques included in physiotherapy treatment Dubai"
              className="w-full h-[220px] object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#F5F1EA] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-2">What Affects Physiotherapy Cost Dubai Pricing?</h2>
          <p className="text-[#5F5F5F] leading-relaxed mb-8">
            Understanding the factors behind pricing helps you plan for treatment realistically. Your physiotherapist will always explain these factors clearly during your first consultation, so there are no surprises — just an honest plan built around your recovery.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {costFactors.map((f) => (
              <FactorTile key={f.n} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ Why choose + comparison table, side by side ============ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">Why Choose RamaCare Polyclinic?</h2>
            <p className="text-sm text-[#5F5F5F] leading-relaxed mb-5">
              We believe that transparent pricing paired with genuinely personalized care is what real value in physiotherapy looks like — not just the lowest number on a price list. When comparing physiotherapy price Dubai clinics offer, affordable physiotherapy Dubai patients trust isn&apos;t always the cheapest option — it&apos;s the one that gets results without repeat visits caused by rushed treatment. Every physiotherapist Dubai residents work with at RamaCare is chosen for both clinical skill and genuine patient care.
            </p>
            <ul className="space-y-2.5">
              {whyChoose.map((w) => (
                <li key={w} className="flex gap-2.5 text-sm text-[#1A1A1A]/85 leading-relaxed">
                  <LucideIcons.Check className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" /> {w}
                </li>
              ))}
            </ul>
            <div className="rounded-lg overflow-hidden mt-6">
              <img
                src="/images/clinic-reception-ramacare-dubai.jpg"
                alt="RamaCare Polyclinic Dubai reception, best physiotherapy clinic Dubai"
                className="w-full h-[200px] object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">How RamaCare Compares</h3>
            <div className="overflow-hidden rounded-xl border border-[#E9E2D6]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1F5E4B] text-white">
                    <th className="text-left px-5 py-3 font-medium">Clinic Feature</th>
                    <th className="text-right px-5 py-3 font-medium">RamaCare Polyclinic</th>
                  </tr>
                </thead>
                <tbody>
                  {compareTable.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F1EA]'}>
                      <td className="px-5 py-3 border-t border-[#E9E2D6] text-[#1A1A1A]">{row.feature}</td>
                      <td className="px-5 py-3 border-t border-[#E9E2D6] text-right">
                        {row.value === true ? (
                          <LucideIcons.Check className="w-4 h-4 text-[#1F5E4B] inline-block" />
                        ) : (
                          <span className="font-semibold text-[#1F5E4B]">{row.value}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Patient journey — horizontal stepper ============ */}
      <section className="bg-[#1F5E4B] py-16 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Your Patient Journey at RamaCare</h2>
          <p className="text-white/75 leading-relaxed mb-10 max-w-2xl">
            Knowing what to expect makes starting physiotherapy far less daunting. Every stage of this journey is designed to make sure your money is going toward measurable, tracked progress — not guesswork.
          </p>
          <div className="rounded-xl overflow-hidden mb-10 max-w-3xl">
            <img
              src="/images/physiotherapy-treatment-plan-tablet-consultation.jpg"
              alt="Physiotherapy consultation Dubai treatment planning session"
              className="w-full h-[240px] object-cover"
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journey.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl bg-white/10 border border-white/15 p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-white text-[#1F5E4B] text-xs font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <IconTile name={step.icon} className="w-4 h-4 text-white/80" />
                </div>
                <p className="text-sm font-semibold">{step.title}</p>
                <p className="text-xs text-white/70 leading-relaxed mt-1">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Related services — chip grid ============ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-xl font-semibold text-[#1A1A1A] mb-5">Explore Related Services</h2>
        <div className="flex flex-wrap gap-2.5">
          {related.map((r) => (
            <a key={r.label} href={r.href} className="text-sm text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              {r.label}
            </a>
          ))}
        </div>
      </section>

      {/* ============ FAQ — definition-list style, no boxes ============ */}
      <section className="bg-[#F5F1EA] py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-8">Frequently Asked Questions</h2>
          <dl>
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.q} className="border-b border-[#E9E2D6] py-4">
                  <dt>
                    <button onClick={() => setOpenFaq(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 text-left">
                      <span className="text-sm font-medium text-[#1A1A1A]">{f.q}</span>
                      <span className={`shrink-0 text-[#1F5E4B] transition-transform ${isOpen ? 'rotate-90' : ''}`}>
                        <LucideIcons.ChevronRight className="w-4 h-4" />
                      </span>
                    </button>
                  </dt>
                  {isOpen && (
                    <dd className="mt-2 border-l-2 border-[#1F5E4B] pl-4 text-sm text-[#5F5F5F] leading-relaxed">
                      {f.a}
                    </dd>
                  )}
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      {/* ============ Final CTA — split bar ============ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 rounded-2xl overflow-hidden">
          <div className="bg-[#1F5E4B] text-white p-8 sm:p-10">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Ready to Start Your Recovery?</h2>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Understanding Physiotherapy Cost Dubai shouldn&apos;t feel confusing or uncertain. At RamaCare Polyclinic, sessions start from AED 500 for 60 minutes and AED 750 for 90 minutes, with pricing shaped by your specific condition, treatment plan, and recovery goals. What matters most isn&apos;t just the number on the price list — it&apos;s the quality, experience, and personal attention behind every session. If you&apos;re ready to understand your condition and start a treatment plan built around you, we&apos;re here to help.
            </p>
            <button onClick={handleBookAppointment} className="inline-flex items-center gap-2 rounded-md bg-white text-[#1F5E4B] px-5 py-2.5 text-sm font-semibold hover:bg-gray-100 transition-colors">
              <LucideIcons.Calendar className="w-4 h-4" /> Book Appointment
            </button>
          </div>
          <div className="bg-[#F5F1EA] p-8 sm:p-10 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1F5E4B] mb-4">Get In Touch</p>
            <button onClick={handleWhatsAppClick} className="flex items-center gap-2 text-sm text-[#1A1A1A] hover:text-[#1F5E4B] mb-3">
              <LucideIcons.MessageCircle className="w-4 h-4 text-[#1F5E4B]" /> Chat with us on WhatsApp
            </button>
            <p className="flex items-start gap-2 text-sm text-[#5F5F5F]">
              <LucideIcons.MapPin className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" /> RamaCare Polyclinic, Jumeirah 1, Dubai
            </p>
          </div>
        </div>
        <p className="text-xs text-[#5F5F5F] leading-relaxed mt-6 max-w-3xl">
          <span className="font-medium text-[#1A1A1A]">Medical Disclaimer:</span> This content is for educational purposes only and should not replace professional medical advice. Individual treatment plans and costs are determined after a clinical assessment by a qualified physiotherapist. Prices mentioned are starting prices and may vary depending on the patient&apos;s condition, treatment duration, required techniques, and clinical assessment.
        </p>
      </section>

      <ContentReviewBadge doctorName="Jeena Mathew" variant="full" />

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E9E2D6] shadow-lg z-40 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-[#1A1A1A]">Physiotherapy from AED 500</p>
            <p className="text-xs text-[#5F5F5F]">Book your consultation today</p>
          </div>
          <button
            onClick={handleBookAppointment}
            className="flex items-center gap-2 bg-[#1F5E4B] text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold whitespace-nowrap"
          >
            <LucideIcons.Calendar className="w-5 h-5" />
            Book Appointment
          </button>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <LucideIcons.MessageCircle className="w-8 h-8 text-white" />
      </button>
    </Layout>
  );
}