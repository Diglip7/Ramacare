import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';


const SITE_URL = 'https://ramacarepolyclinic.ae';
const PAGE_PATH = '/ayurveda-vs-physiotherapy-for-back-pain-dubai';

const causes = [
  'Muscle strain from lifting, overexertion, or sudden movement',
  'Poor posture, especially from prolonged desk work or screen use',
  'Slip disc (herniated disc) pressing on nearby nerves',
  'Sciatica, causing pain that radiates down the leg',
  'Arthritis and age-related joint degeneration',
  'Sedentary lifestyle and weak core musculature',
  'Sports injuries and repetitive strain',
];

const ayurveda = {
  title: 'What Is Ayurveda?',
  intro:
    'Ayurveda is a traditional system of medicine rooted in the principle that health depends on the balance of three biological energies, or doshas: Vata, Pitta, and Kapha. In the context of back pain, most cases are linked to an aggravated Vata dosha, which governs movement, the nervous system, and joint function. Rather than treating pain in isolation, Ayurveda aims to identify and correct the underlying imbalance.',
  items: [
    'Abhyanga — full-body or targeted therapeutic oil massage',
    'Kati Basti — a warm, medicated oil pooling therapy applied directly to the lower back',
    "Herbal medicine tailored to the patient's constitution and condition",
    'Dietary and lifestyle guidance to reduce inflammation and support recovery',
    'Panchakarma-based detoxification protocols for chronic, recurring pain',
  ],
  note: "Every Ayurvedic Treatment for Back Pain Dubai plan at RamaCare begins with a detailed consultation to understand the patient's dosha imbalance, lifestyle, and pain history before any therapy is recommended.",
  benefits: [
    'Holistic healing that addresses root causes, not just symptoms',
    'Reduced dependence on long-term pain medication',
    'Effective stress and Vata-dosha management',
    'Improved flexibility through oil-based therapies',
    'Better sleep quality as pain and tension reduce',
    'Sustainable lifestyle and dietary improvement',
    'Long-term wellness benefits beyond pain relief alone',
  ],
};

const physio = {
  title: 'What Is Physiotherapy?',
  intro:
    'Physiotherapy is a scientifically grounded, evidence-based approach to rehabilitation. It focuses on restoring movement, strength, and function through structured, measurable interventions. Physiotherapy for Back Pain Dubai typically begins with a physical assessment to identify the specific structures involved — muscles, joints, discs, or nerves — before a treatment plan is designed.',
  items: [
    'Manual therapy for joint mobilization and soft tissue release',
    'Exercise therapy to build strength, flexibility, and postural control',
    'Electrotherapy to reduce pain and inflammation',
    'Ultrasound therapy for deep tissue healing',
    'Dry Needling Dubai for stubborn muscle knots and trigger points',
    'Posture correction and ergonomic advice for desk-based professionals',
    'Functional rehabilitation for return to sport or daily activity',
  ],
  note: 'Because physiotherapy is highly structured and measurable, it is often the first recommendation for acute injuries, post-surgical recovery, and sports-related back pain.',
  benefits: [
    'Faster, structured rehabilitation for acute injuries',
    'Measurable pain reduction through targeted techniques',
    'Improved core and back strength over time',
    'Restored mobility and functional movement',
    'Safer, guided return to sport or physical activity',
    'Reduced risk of re-injury through preventive exercise',
    'Clear, progress-tracked functional recovery',
  ],
};

const comparisonTable = [
  { feature: 'Treatment philosophy', ayurveda: 'Holistic, root-cause healing based on doshic balance', physio: 'Scientific, evidence-based physical rehabilitation' },
  { feature: 'Best for', ayurveda: 'Chronic pain, lifestyle-related imbalance, stress-linked stiffness', physio: 'Acute injuries, mobility loss, post-surgical recovery' },
  { feature: 'Pain relief approach', ayurveda: 'Herbal oils, Kati Basti, internal medicines, gradual relief', physio: 'Manual therapy, electrotherapy, targeted pain-relief protocols' },
  { feature: 'Long-term recovery focus', ayurveda: 'Strong — addresses lifestyle, diet, and root imbalance', physio: 'Strong — rebuilds strength and prevents recurrence' },
  { feature: 'Mobility improvement', ayurveda: 'Gradual, through therapy and lifestyle correction', physio: 'Direct, through structured exercise therapy' },
  { feature: 'Structured rehabilitation', ayurveda: 'Limited formal rehab protocol', physio: 'Core strength of physiotherapy' },
  { feature: 'Exercise component', ayurveda: 'Yoga-based, gentle movement guidance', physio: 'Functional exercises, strengthening, stretching' },
  { feature: 'Herbal medicine', ayurveda: 'Central to treatment', physio: 'Not used' },
  { feature: 'Lifestyle & diet advice', ayurveda: 'Integral part of every treatment plan', physio: 'Offered as supportive advice, not core focus' },
  { feature: 'Chronic pain management', ayurveda: 'Well suited, especially with Panchakarma', physio: 'Well suited, especially with dry needling and manual therapy' },
  { feature: 'Acute injury care', ayurveda: 'Not the first choice', physio: 'First choice for acute musculoskeletal injuries' },
  { feature: 'Typical recovery time', ayurveda: 'Several weeks, cumulative benefit', physio: 'Often faster for mechanical or acute issues' },
];

const conditionGuide = [
  { condition: 'Lower Back Pain', approach: 'Combined', text: 'Physiotherapy for structural correction, Ayurveda for long-term root-cause management' },
  { condition: 'Neck Pain', approach: 'Physio', text: 'Physiotherapy first for posture and mobility; Ayurveda for chronic stiffness and stress-related tension' },
  { condition: 'Sciatica', approach: 'Physio', text: 'Physiotherapy (dry needling, manual therapy) for nerve-related symptoms; Ayurveda (Kati Basti) for supportive long-term relief' },
  { condition: 'Slip Disc (Non-Surgical)', approach: 'Physio', text: 'Physiotherapy-led rehabilitation, often combined with Ayurvedic therapies for pain and inflammation support' },
  { condition: 'Arthritis', approach: 'Ayurveda', text: 'Ayurveda for joint nourishment and inflammation management; Physiotherapy for mobility and strength' },
  { condition: 'Sports Injuries', approach: 'Physio', text: 'Physiotherapy is generally the primary approach for fast, functional recovery' },
  { condition: 'Muscle Strain', approach: 'Combined', text: 'Physiotherapy for immediate relief; Ayurveda for recurring strain linked to lifestyle factors' },
  { condition: 'Chronic Pain (unspecified)', approach: 'Combined', text: 'Combination therapy typically offers the most comprehensive long-term outcome' },
  { condition: 'Post-Surgery Recovery', approach: 'Physio', text: 'Physiotherapy-led rehabilitation under medical guidance; Ayurveda may support recovery once cleared by the treating doctor' },
];

const approachStyle = {
  Ayurveda: { bg: 'bg-[#F5F1EA]', text: 'text-[#1A1A1A]', label: 'Ayurveda' },
  Physio: { bg: 'bg-[#1F5E4B]', text: 'text-white', label: 'Physiotherapy' },
  Combined: { bg: 'bg-white border border-[#1F5E4B]', text: 'text-[#1F5E4B]', label: 'Combined' },
};

const combinedReasons = [
  'Chronic back pain that has not fully resolved with a single approach',
  'Recurring pain linked to both structural weakness and lifestyle imbalance',
  'Long-term rehabilitation where sustained, holistic support is valuable',
  'Patients who want both immediate functional improvement and long-term wellness',
];

const whyChoose = [
  'DHA-licensed healthcare clinic in Jumeirah 1, Dubai',
  'Experienced, DHA-licensed Ayurvedic doctors and therapists',
  'Qualified physiotherapists with musculoskeletal rehabilitation expertise',
  'Personalized treatment plans based on individual diagnosis',
  'Modern rehabilitation equipment and evidence-informed protocols',
  'Patient-focused, transparent, and compassionate care',
  'Convenient Dubai location with same-day appointments available',
];

const process = [
  'Initial consultation to review your medical history and lifestyle',
  'Physical examination to assess posture, mobility, and pain patterns',
  'Clear diagnosis explained in plain, understandable language',
  'Personalized treatment planning — Ayurveda, Physiotherapy, or combined care',
  'Ongoing progress monitoring and plan adjustments as needed',
  'Home exercise and self-care advice between sessions',
  'Practical lifestyle recommendations to support long-term recovery',
  'Structured follow-up appointments to track your improvement',
];

const faqGroups = [
  {
    category: 'General Questions',
    items: [
      { q: 'Ayurveda vs Physiotherapy for Back Pain Dubai — which is actually better?', a: 'There is no universal answer. The right choice in the Ayurveda vs Physiotherapy for Back Pain Dubai decision depends on whether your pain is acute or chronic, its underlying cause, and your treatment goals. A proper diagnosis at RamaCare Polyclinic helps determine the most suitable path.' },
      { q: 'Is Ayurveda effective for back pain?', a: 'Yes, Ayurveda can be effective for chronic and lifestyle-related back pain, particularly when the root cause involves poor digestion, stress, or long-term muscular imbalance. Therapies like Kati Basti and Abhyanga are commonly used for sustained relief.' },
      { q: 'Can physiotherapy cure chronic back pain?', a: "Physiotherapy can significantly reduce chronic back pain and improve function through targeted exercise, manual therapy, and posture correction, though 'cure' depends on the underlying diagnosis and consistency of the rehabilitation plan." },
      { q: 'Can Ayurveda and Physiotherapy be combined for back pain?', a: 'Yes. Many patients at RamaCare benefit from a combined approach, where physiotherapy addresses structural and functional issues while Ayurveda supports long-term recovery and lifestyle balance.' },
      { q: 'How many sessions are typically needed?', a: 'This varies by condition and severity. Acute cases may improve within a few physiotherapy sessions, while chronic conditions treated with Ayurveda often require a structured multi-week program for lasting results.' },
      { q: 'Which treatment works faster — Ayurveda or Physiotherapy?', a: 'Physiotherapy often produces faster results for acute, mechanical issues, while Ayurveda tends to work more gradually, focusing on long-term, root-cause resolution.' },
      { q: 'Is treatment painful?', a: 'Most physiotherapy and Ayurvedic techniques are designed to be comfortable. Some methods, such as dry needling or deep tissue therapy, may cause mild, temporary discomfort, which your therapist will explain beforehand.' },
      { q: 'How much does treatment cost at RamaCare?', a: 'Costs vary depending on the diagnosis, treatment type, and number of sessions required. A personalized quote is provided after your initial consultation and assessment.' },
      { q: 'How do I book an appointment at RamaCare Polyclinic?', a: 'You can book a consultation through the RamaCare Polyclinic website, by phone, or via WhatsApp. Same-day appointments are often available at the Jumeirah 1 clinic.' },
    ],
  },
  {
    category: 'Treatment-Specific Questions',
    items: [
      { q: 'Is surgery always necessary for slip disc or sciatica?', a: 'No. Many slip disc and sciatica cases respond well to non-surgical treatment, including physiotherapy and supportive Ayurvedic therapies. Surgery is generally considered only when conservative treatment does not resolve symptoms.' },
      { q: 'Can Ayurveda help with slip disc pain?', a: 'Ayurvedic therapies such as Kati Basti and herbal treatments can help manage inflammation and discomfort associated with slip disc, usually as part of a broader, doctor-guided treatment plan.' },
      { q: 'Does physiotherapy help sciatica?', a: 'Yes, physiotherapy — including manual therapy, dry needling, and specific nerve-mobility exercises — is one of the most commonly recommended non-surgical treatments for sciatica.' },
      { q: 'Who should choose Ayurveda for back pain?', a: 'Patients with chronic, recurring back pain linked to lifestyle, stress, or digestive imbalance — and those seeking a natural, holistic approach — often benefit most from Ayurveda.' },
      { q: 'Who should choose Physiotherapy for back pain?', a: 'Patients with acute injuries, mobility restrictions, post-surgical needs, or sports-related back pain typically benefit most from a physiotherapy-led approach.' },
      { q: 'When should I consult a doctor about back pain?', a: 'You should seek professional evaluation if pain persists beyond a few days, worsens over time, radiates down the leg, or is accompanied by numbness, weakness, or loss of bladder control.' },
      { q: 'Is Ayurveda safe alongside conventional treatment?', a: 'Ayurveda is generally safe when supervised by a DHA-licensed practitioner, but you should always inform your doctor of any ongoing treatments to ensure safe, coordinated care.' },
      { q: 'Can office workers benefit from this comparison?', a: 'Yes. Office workers with posture-related back pain often benefit from physiotherapy for correction and Ayurveda for long-term lifestyle and stress management.' },
      { q: 'Does RamaCare offer both Ayurveda and Physiotherapy under one roof?', a: 'Yes. RamaCare Polyclinic in Jumeirah 1 offers both specialties, allowing coordinated, doctor-guided treatment plans without needing to visit multiple clinics.' },
    ],
  },
];

const allFaqs = faqGroups.flatMap((g) => g.items);

const related = [
  { label: 'Physiotherapy Dubai', href: '/services/physiotherapy-dubai' },
  { label: 'Ayurveda Dubai', href: '/services/ayurveda-dubai' },
  { label: 'Back Pain Treatment Dubai', href: '/services/back-pain-treatment-dubai' },
  { label: 'Dry Needling Dubai', href: '/services/dry-needling-dubai' },
  { label: 'Electrotherapy Dubai', href: '/services/electrotherapy-dubai' },
  { label: 'Ultrasound Therapy Dubai', href: '/services/ultrasound-therapy-dubai' },
  { label: 'Ultrasound Therapy for Chronic Back Pain', href: '/services/ultrasound-therapy-for-chronic-back-pain' },
  { label: 'Post-Surgery Recovery Dubai', href: '/services/post-surgery-recovery-dubai' },
  { label: 'Panchakarma Treatment', href: '/services/panchakarma-treatment' },
  { label: 'Book Appointment', href: '#book-now' },
  { label: 'Home Page', href: '/' },
];

/* ------------------------------------------------------------------
   JSON-LD schema — the 7 blocks specified in the brief
------------------------------------------------------------------- */
function buildSchema() {
  const medicalClinic = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'RamaCare Polyclinic',
    url: SITE_URL + '/',
    image: SITE_URL + '/images/ayurveda-vs-physiotherapy-back-pain-dubai.jpg',
    telephone: '+971566597878',
    priceRange: 'AED',
    medicalSpecialty: ['Ayurveda', 'Physiotherapy'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
  };

  const medicalCondition = {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: 'Back Pain',
    possibleTreatment: [
      { '@type': 'MedicalTherapy', name: 'Ayurveda' },
      { '@type': 'MedicalTherapy', name: 'Physiotherapy' },
    ],
    signOrSymptom: ['Lower back pain', 'Sciatica', 'Muscle stiffness'],
  };

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Ayurveda vs Physiotherapy for Back Pain Dubai',
    provider: { '@type': 'MedicalClinic', name: 'RamaCare Polyclinic' },
    areaServed: { '@type': 'City', name: 'Dubai' },
    availableChannel: { '@type': 'ServiceChannel', servicePhone: '+971566597878' },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: SITE_URL + '/services/' },
      { '@type': 'ListItem', position: 3, name: 'Ayurveda vs Physiotherapy for Back Pain Dubai' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const physician = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'RamaCare Polyclinic Specialists',
    medicalSpecialty: ['Ayurveda', 'Physiotherapy'],
    worksFor: { '@type': 'MedicalClinic', name: 'RamaCare Polyclinic' },
  };

  const medicalProcedure = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Kati Basti',
    procedureType: 'Ayurvedic Therapy',
    bodyLocation: 'Lower back',
    followup: 'As advised by attending Ayurvedic physician',
  };

  return [medicalClinic, medicalCondition, service, breadcrumb, faqSchema, physician, medicalProcedure];
}

export default function AyurvedaVsPhysiotherapyBackPainPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const handleWhatsAppClick = (context = 'a back pain assessment') => {
    const message = encodeURIComponent(`Hello RamaCare, I'd like to book ${context} at RamaCare Polyclinic.`);
    window.open(`https://wa.me/971566597878?text=${message}`, '_blank');
  };

  const schemaBlocks = buildSchema();

  return (
    <Layout>
      <Head>
        <title key="title">Ayurveda vs Physiotherapy for Back Pain Dubai</title>
        <meta
          name="description"
          content="Ayurveda vs Physiotherapy for Back Pain Dubai — compare both treatments and find the right plan for you. Book your assessment at RamaCare Polyclinic today."
          key="description"
        />
        <link rel="canonical" href={SITE_URL + PAGE_PATH} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ayurveda vs Physiotherapy for Back Pain Dubai" />
        <meta
          property="og:description"
          content="Ayurveda vs Physiotherapy for Back Pain Dubai — compare both treatments and find the right plan for you. Book your assessment at RamaCare Polyclinic today."
        />
        <meta property="og:url" content={SITE_URL + PAGE_PATH} />
        <meta property="og:image" content={SITE_URL + '/images/ayurveda-vs-physiotherapy-back-pain-dubai.jpg'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayurveda vs Physiotherapy for Back Pain Dubai" />
        <meta
          name="twitter:description"
          content="Ayurveda vs Physiotherapy for Back Pain Dubai — compare both treatments and find the right plan for you. Book your assessment at RamaCare Polyclinic today."
        />
        {schemaBlocks.map((block, i) => (
          <script key={`schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }} />
        ))}
      </Head>

      {/* ============ HERO — split VS composition ============ */}
      <section className="relative">
        <p className="text-xs font-medium text-[#5F5F5F] max-w-7xl mx-auto px-6 pt-6">
          <Link href="/" className="hover:underline">Home</Link> <span className="mx-1.5">/</span>{' '}
          <Link href="/services" className="hover:underline">Services</Link> <span className="mx-1.5">/</span>{' '}
          <span className="text-[#1F5E4B]">Ayurveda vs Physiotherapy for Back Pain Dubai</span>
        </p>

        <div className="max-w-7xl mx-auto px-6 pt-6 pb-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold text-[#1A1A1A] leading-[1.2] max-w-4xl mx-auto">
            Ayurveda vs Physiotherapy for Back Pain Dubai
          </h1>
          <p className="text-lg text-[#5F5F5F] leading-relaxed max-w-3xl mx-auto mt-5">
            If you have been searching for relief and comparing Ayurveda vs Physiotherapy for Back Pain Dubai, you are not alone. This guide compares both approaches honestly, without bias, so you can understand which treatment — or combination of treatments — best fits your specific condition, medical history, and recovery goals.
          </p>
        </div>

        {/* Split VS panel */}
        <div className="grid sm:grid-cols-2 relative">
          <div className="bg-[#F5F1EA] px-8 py-10 sm:py-14 text-center sm:text-right">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1A1A1A]/60 mb-2">Traditional · Holistic</p>
            <p className="text-2xl font-semibold text-[#1A1A1A]">Ayurveda</p>
          </div>
          <div className="bg-[#1F5E4B] px-8 py-10 sm:py-14 text-center sm:text-left text-white">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-2">Clinical · Evidence-Based</p>
            <p className="text-2xl font-semibold">Physiotherapy</p>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden sm:flex h-16 w-16 items-center justify-center rounded-full bg-white border-4 border-[#F5F1EA] shadow-lg">
            <span className="text-sm font-semibold text-[#1A1A1A]">VS</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-10">
          <div className="rounded-3xl overflow-hidden shadow-sm">
            <img
              src="/images/ayurveda-vs-physiotherapy-back-pain-dubai.jpg"
              alt="Ayurveda vs Physiotherapy for Back Pain Dubai — RamaCare Polyclinic consultation"
              title="Ayurveda vs Physiotherapy for Back Pain Dubai"
              className="w-full h-[220px] sm:h-[300px] lg:h-[380px] xl:h-[440px] object-cover object-center"
            />
          </div>
          <p className="text-xs text-[#5F5F5F] text-center italic mt-3">
            Comparing Ayurveda and Physiotherapy treatment approaches for back pain at RamaCare Polyclinic, Dubai.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-8 text-center">
          <button onClick={() => handleWhatsAppClick('a back pain assessment')} className="inline-flex items-center gap-2 rounded-md bg-[#1F5E4B] px-6 py-3 text-sm font-medium text-white hover:bg-[#17493A] transition-colors">
            <LucideIcons.MessageCircle className="w-4 h-4" /> Book a Back Pain Assessment — WhatsApp Now
          </button>
        </div>
      </section>

      {/* ============ Understanding back pain ============ */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">Understanding Back Pain in Dubai</h2>
        <p className="text-base text-base text-[#5F5F5F] leading-relaxed mb-6">
          Before comparing Ayurveda vs Physiotherapy for Back Pain Dubai treatment options, it helps to understand what is actually causing your discomfort. Back pain is generally classified as either acute (sudden onset, usually resolving within a few weeks) or chronic (persisting for more than three months). Getting this distinction right shapes which treatment path is likely to help most.
        </p>
        <h3 className="text-sm font-semibold text-[#1A1A1A] mb-3">Common Causes of Back Pain</h3>
        <div className="flex flex-wrap gap-2.5 mb-6">
          {causes.map((c) => (
            <span key={c} className="text-sm text-[#1A1A1A] bg-[#F0F7F4] px-4 py-2 rounded-full">{c}</span>
          ))}
        </div>
        <p className="text-sm text-base text-[#5F5F5F] leading-relaxed">
          Each of these causes responds differently to treatment, which is exactly why the Ayurveda vs Physiotherapy for Back Pain Dubai decision should never be made without a proper clinical assessment. The World Health Organization identifies low back pain as one of the leading causes of disability worldwide, noting that most cases benefit from early, non-surgical management rather than prolonged rest — a finding that underpins the approach taken at RamaCare Polyclinic.
        </p>
      </section>

      {/* ============ What is Ayurveda / Physiotherapy — mirrored panels ============ */}
      <section className="grid lg:grid-cols-2">
        {/* Ayurveda panel */}
        <div className="bg-[#F5F1EA] px-6 sm:px-10 py-14 flex flex-col">
          <div className="max-w-xl ml-auto flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">{ayurveda.title}</h2>
              <p className="text-sm text-base text-[#5F5F5F] leading-relaxed mb-6">{ayurveda.intro}</p>
              <p className="text-sm font-semibold text-[#1A1A1A] mb-3">At RamaCare Polyclinic, this typically includes:</p>
              <ul className="space-y-2.5 mb-6">
                {ayurveda.items.map((i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-[#1A1A1A]/85 leading-relaxed">
                    <LucideIcons.Leaf className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" /> {i}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-base text-[#5F5F5F] leading-relaxed italic">{ayurveda.note}</p>
            </div>
            <div className="rounded-xl overflow-hidden mt-6">
              <img
                src="/images/ayurvedic-oil-therapy-kati-basti-ramacare.jpg"
                alt="Ayurvedic Kati Basti oil therapy for back pain at RamaCare Polyclinic Dubai"
                className="w-full h-[200px] lg:h-[280px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Physiotherapy panel */}
        <div className="bg-[#1F5E4B] text-white px-6 sm:px-10 py-14 flex flex-col">
          <div className="max-w-xl mr-auto flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-4">{physio.title}</h2>
              <p className="text-sm text-white/80 leading-relaxed mb-6">{physio.intro}</p>
              <p className="text-sm font-semibold mb-3">Common techniques used at RamaCare:</p>
              <ul className="space-y-2.5 mb-6">
                {physio.items.map((i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-white/85 leading-relaxed">
                    <LucideIcons.Activity className="w-4 h-4 text-white/70 shrink-0 mt-0.5" /> {i}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-white/60 leading-relaxed italic">{physio.note}</p>
              <button onClick={() => handleWhatsAppClick('a physiotherapy assessment')} className="inline-flex items-center gap-2 mt-6 rounded-md bg-white text-[#1F5E4B] px-5 py-2.5 text-sm font-semibold hover:bg-gray-100 transition-colors">
                <LucideIcons.Calendar className="w-4 h-4" /> Consult a Physiotherapist — Schedule Your Assessment
              </button>
            </div>
            <div className="rounded-xl overflow-hidden mt-6">
              <img
                src="/images/physiotherapy-back-assessment-ramacare.jpg"
                alt="Physiotherapist assessing back pain at RamaCare Polyclinic Dubai"
                className="w-full h-[200px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ Side-by-side comparison table ============ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-2">Ayurveda vs Physiotherapy for Back Pain Dubai — Side-by-Side Comparison</h2>
        <p className="text-base text-[#5F5F5F] leading-relaxed mb-8">
          The table below summarizes the core differences to help you evaluate Ayurveda vs Physiotherapy for Back Pain Dubai at a glance.
        </p>
        <div className="overflow-x-auto rounded-xl border border-[#E9E2D6]">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr>
                <th className="text-left px-5 py-3 font-medium text-[#1A1A1A] bg-white w-1/4">Feature</th>
                <th className="text-left px-5 py-3 font-medium text-[#1A1A1A] bg-[#F5F1EA] w-[37.5%]">Ayurveda</th>
                <th className="text-left px-5 py-3 font-medium text-white bg-[#1F5E4B] w-[37.5%]">Physiotherapy</th>
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FBFAF7]'}>
                  <td className="px-5 py-3.5 border-t border-[#E9E2D6] font-medium text-[#1A1A1A]">{row.feature}</td>
                  <td className="px-5 py-3.5 border-t border-[#E9E2D6] text-[#5F5F5F]">{row.ayurveda}</td>
                  <td className="px-5 py-3.5 border-t border-[#E9E2D6] text-[#5F5F5F]">{row.physio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ============ Condition-based recommendation matrix ============ */}
      <section className="bg-[#F0F7F4] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-2">Which Treatment Is Better for Different Conditions?</h2>
          <p className="text-base text-[#5F5F5F] leading-relaxed mb-3">
            There is no single answer that applies to every patient. The list below breaks down the Ayurveda vs Physiotherapy for Back Pain Dubai decision by specific condition, based on general clinical patterns observed at RamaCare Polyclinic.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-[#5F5F5F] mb-8">
            <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-[#F5F1EA] border border-[#E9E2D6]" /> Ayurveda</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-[#1F5E4B]" /> Physiotherapy</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-full border border-[#1F5E4B]" /> Combined</span>
          </div>
          <div className="space-y-3">
            {conditionGuide.map((c) => {
              const style = approachStyle[c.approach];
              return (
                <div key={c.condition} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 bg-white rounded-xl border border-[#E9E2D6] p-5">
                  <p className="text-sm font-semibold text-[#1A1A1A] sm:w-48 shrink-0">{c.condition}</p>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full shrink-0 w-fit ${style.bg} ${style.text}`}>{style.label}</span>
                  <p className="text-sm text-base text-[#5F5F5F] leading-relaxed">{c.text}</p>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-base text-[#5F5F5F] leading-relaxed mt-6">
            This is a general guide only. Your actual treatment recommendation will depend on a physical examination and, where necessary, imaging or further diagnostic review by our specialists.
          </p>
        </div>
      </section>

      {/* ============ Benefits — mirrored two-column ============ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-[#F5F1EA] p-7">
            <h2 className="text-lg font-semibold text-[#1A1A1A] mb-4">Benefits of Ayurveda for Back Pain</h2>
            <ul className="space-y-2.5">
              {ayurveda.benefits.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm text-[#1A1A1A]/85 leading-relaxed">
                  <LucideIcons.Check className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" /> {b}
                </li>
              ))}
            </ul>
            <button onClick={() => handleWhatsAppClick('an Ayurveda consultation')} className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-[#1F5E4B] underline underline-offset-4">
              Schedule an Ayurveda Consultation →
            </button>
          </div>
          <div className="rounded-2xl bg-[#1F5E4B] text-white p-7">
            <h2 className="text-lg font-semibold mb-4">Benefits of Physiotherapy for Back Pain</h2>
            <ul className="space-y-2.5">
              {physio.benefits.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm text-white/85 leading-relaxed">
                  <LucideIcons.Check className="w-4 h-4 text-white/70 shrink-0 mt-0.5" /> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-xs text-base text-[#5F5F5F] leading-relaxed mt-8 max-w-3xl mx-auto text-center">
          The American Physical Therapy Association similarly emphasizes active, exercise-based rehabilitation over passive rest for most mechanical back pain, which aligns closely with the physiotherapy protocols used at RamaCare. On the Ayurveda side, the National Center for Complementary and Integrative Health notes that mind-body and traditional therapies are increasingly studied as complementary options for chronic pain management, supporting an evidence-informed, integrative approach when appropriate.
        </p>
      </section>

      {/* ============ Combined therapy — gradient callout ============ */}
      <section className="py-16 px-6" style={{ background: 'linear-gradient(90deg, #F5F1EA 0%, #F0F7F4 50%, #1F5E4B 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">Can Ayurveda and Physiotherapy Be Combined?</h2>
          <p className="text-[#1A1A1A]/80 leading-relaxed mb-6 max-w-2xl mx-auto">
            One of the most important considerations in the Ayurveda vs Physiotherapy for Back Pain Dubai discussion is that this does not have to be an either-or decision. For many chronic and recurring cases, an integrated approach — combining the structural, rehabilitative strength of physiotherapy with the root-cause, lifestyle-focused healing of Ayurveda — produces more complete and lasting results than either treatment used alone.
          </p>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#1F5E4B] mb-4">When Ayurveda vs Physiotherapy for Back Pain Dubai Favors a Combined Plan</h3>
          <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-6 text-left">
            {combinedReasons.map((r) => (
              <div key={r} className="flex gap-2.5 bg-white/70 backdrop-blur rounded-lg px-4 py-3">
                <LucideIcons.Sparkles className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" />
                <p className="text-sm text-[#1A1A1A]">{r}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-6 max-w-2xl mx-auto">
            RamaCare Polyclinic offers Ayurveda, Physiotherapy, and General Medicine under one roof in Jumeirah 1, allowing our doctors to design coordinated care plans when clinically appropriate — without requiring patients to visit multiple clinics or repeat their medical history at every appointment.
          </p>
          <a href="#book-now" className="inline-flex items-center gap-2 rounded-md bg-[#1A1A1A] px-6 py-3 text-sm font-medium text-white hover:bg-black transition-colors">
            <LucideIcons.Calendar className="w-4 h-4" /> Talk to Our Specialists — Book Your Appointment Today
          </a>
        </div>
      </section>

      {/* ============ Why choose + Treatment process ============ */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-14">
        <div>
          <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-5">Why Choose RamaCare Polyclinic?</h2>
          <ul className="space-y-2.5">
            {whyChoose.map((w) => (
              <li key={w} className="flex gap-2.5 text-sm text-[#1A1A1A]/85 leading-relaxed">
                <LucideIcons.Check className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" /> {w}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-1">Treatment Process at RamaCare Polyclinic</h2>
          <p className="text-sm font-medium text-[#5F5F5F] mb-5">What to Expect During Your Visit</p>
          <ol className="space-y-3">
            {process.map((p, i) => (
              <li key={p} className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-[#F0F7F4] text-[#1F5E4B] text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                <p className="text-sm text-base text-[#5F5F5F] leading-relaxed">{p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ FAQ — grouped by category ============ */}
      <section className="bg-[#F5F1EA] py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-10 text-center">Frequently Asked Questions</h2>
          {faqGroups.map((group, gi) => (
            <div key={group.category} className={gi > 0 ? 'mt-10' : ''}>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1F5E4B] mb-3">{group.category}</p>
              <div>
                {group.items.map((f) => {
                  const idx = allFaqs.indexOf(f);
                  const isOpen = openFaq === idx;
                  return (
                    <div key={f.q} className="border-t border-[#E9E2D6] py-4 last:border-b">
                      <button onClick={() => setOpenFaq(isOpen ? null : idx)} className="w-full flex items-center justify-between gap-4 text-left">
                        <span className="text-sm font-medium text-[#1A1A1A]">{f.q}</span>
                        <LucideIcons.Plus className={`w-4 h-4 text-[#1F5E4B] shrink-0 transition-transform ${isOpen ? 'rotate-45' : ''}`} />
                      </button>
                      {isOpen && <p className="text-sm text-base text-[#5F5F5F] leading-relaxed mt-2">{f.a}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ Related treatments ============ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-xl font-semibold text-[#1A1A1A] mb-5">Related Treatments at RamaCare Polyclinic</h2>
        <div className="flex flex-wrap gap-2.5">
          {related.map((r) => (
            <a key={r.label} href={r.href} className="text-sm text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              {r.label}
            </a>
          ))}
        </div>
      </section>

      {/* ============ Conclusion ============ */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">Conclusion</h2>
        <p className="text-base text-[#5F5F5F] leading-relaxed mb-8">
          The Ayurveda vs Physiotherapy for Back Pain Dubai decision ultimately comes down to your specific diagnosis, the nature of your pain, and your personal recovery goals. Physiotherapy is typically the stronger choice for acute injuries, post-surgical recovery, and sports-related pain, while Ayurveda offers meaningful long-term benefits for chronic, lifestyle-linked discomfort. In many cases, the most effective path is a coordinated combination of both. Rather than guessing which treatment is right for you, a proper clinical assessment at RamaCare Polyclinic will help identify the safest, most effective route to lasting relief.
        </p>
      </section>

      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurveda-vs-physiotherapy-for-back-pain-dubai" />

      <BookConsultation />

      <p className="mx-auto mt-8 max-w-3xl px-6 pb-10 text-center text-xs italic text-gray-600">
        Medical Disclaimer: The information provided on this page is intended for general educational
        purposes only and does not constitute medical advice. It is not a substitute for professional
        diagnosis or treatment. Every patient&apos;s condition is different, and treatment recommendations
        should always be based on an individual clinical assessment by a qualified, DHA-licensed
        healthcare professional. Outcomes vary from patient to patient. Please consult a doctor at
        RamaCare Polyclinic before starting any treatment for back pain or related conditions.
      </p>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E9E2D6] shadow-lg z-40 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-[#1A1A1A]">Not sure which treatment fits?</p>
            <p className="text-xs text-[#5F5F5F]">Book a back pain assessment today</p>
          </div>
          <a
            href="#book-now"
            className="flex items-center gap-2 bg-[#1F5E4B] text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold whitespace-nowrap"
          >
            <LucideIcons.Calendar className="w-5 h-5" />
            Book Assessment
          </a>
        </div>
      </div>
    </Layout>
  );
}
