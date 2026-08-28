import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../../../components/Layout';
import BookConsultation from '../../../components/BookConsultation';
import {
  ShieldCheck,
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Wallet,
  AlertCircle,
} from 'lucide-react';

/* =====================================================================
   HAIR PRP COST DUBAI — original page build. Fourth distinct layout on
   the site: a sticky pricing sidebar alongside scrolling content (an
   e-commerce/service-page pattern), pricing shown as cards rather than a
   plain table. Not the diagonal/bento of the psoriasis page, the
   centered/table/stepper of the tooth pain page, or the editorial/TOC
   style of the sensitive-teeth page. Brand tokens reused for consistency:
     teal  #1F5E4B   dark teal #0F3B2E   gold  #D4A574
     ink   #1A1A1A   muted     #5F5F5F
     cream #F5F1E8   panel     #F9F7F2
   Headings use font-semibold, matching the lighter-weight feedback.
   ===================================================================== */

const SEO = {
  title: 'Hair PRP Cost Dubai | Trusted DHA Clinic',
  metaDescription:
    "Hair PRP Cost Dubai starts from AED 500 per session. Explore pricing, what's included, benefits, FAQs, then book your consultation at RamaCare Polyclinic.",
  canonical: 'https://ramacarepolyclinic.ae/hair-prp-cost-dubai',
};

const WHATSAPP_NUMBER = '971566597878';

/* Image slots — filenames/alt text match your recommended images list.
   Drop real files into /public/images/ using these exact filenames. */
const IMAGES = {
  hero: { src: '/images/hair-prp-cost-dubai-consultation.jpg', alt: 'Hair PRP Cost Dubai consultation with doctor at RamaCare Polyclinic' },
  scalp: { src: '/images/scalp-assessment-prp-dubai.jpg', alt: 'Scalp assessment before PRP hair treatment in Dubai' },
  centrifuge: { src: '/images/prp-preparation-centrifuge-dubai.jpg', alt: 'PRP preparation process for hair treatment at RamaCare Polyclinic' },
  injection: { src: '/images/prp-scalp-injection-dubai.jpg', alt: 'PRP scalp injection procedure for hair thinning treatment' },
  density: { src: '/images/hair-density-improvement-prp-dubai.jpg', alt: 'Hair density improvement illustration for PRP treatment Dubai' },
  clinic: { src: '/images/ramacare-polyclinic-dubai-clinic.jpg', alt: 'RamaCare Polyclinic Dubai clinic reception area' },
  doctor: { src: '/images/dha-licensed-doctor-hair-treatment-dubai.jpg', alt: 'DHA licensed doctor performing hair PRP treatment in Dubai' },
  cta: { src: '/images/book-hair-prp-consultation-dubai.jpg', alt: 'Book Hair PRP consultation at RamaCare Polyclinic Dubai' },
};

/* ------------------------------- Data ------------------------------- */

const TRUST_POINTS = [
  'DHA Licensed Clinic',
  'Experienced doctors',
  'Personalized hair restoration plans',
  'Evidence-based PRP treatment',
  'Transparent pricing, no hidden fees',
];

const PRICING = [
  { name: 'Hair PRP Session', price: 'AED 500', bestFor: 'Hair thinning, early hair loss', highlight: true },
  { name: 'PRP Package', price: 'Consultation Required', bestFor: 'Multiple sessions', highlight: false },
  { name: 'PRP + Additional Therapy', price: 'Consultation Required', bestFor: 'Advanced hair restoration', highlight: false },
];

const INCLUDED = [
  'Initial consultation with your treating doctor',
  'Scalp and hair density assessment',
  'Blood collection for PRP preparation',
  'Platelet-rich plasma preparation using clinical protocols',
  'PRP scalp injections',
  'Post-treatment advice',
  'Follow-up recommendations for your next steps',
];

const CANDIDATES = [
  'Male pattern hair loss treatment Dubai patients often seek in its early stages',
  'Female hair loss treatment Dubai candidates dealing with generalized thinning',
  'Early-stage hair loss or receding hairlines',
  'Overall thinning hair and reduced hair density',
  'Weak or fine hair that has lost its previous fullness',
  'Postpartum hair shedding',
  'Anyone exploring non-surgical hair restoration before considering more invasive options',
];

const FACTORS = [
  { name: 'Hair loss severity', desc: 'More advanced thinning may require a longer or more structured treatment plan than early-stage cases.' },
  { name: 'Number of sessions required', desc: 'A single session addresses immediate treatment, but sustained results generally involve a series of visits determined by your doctor.' },
  { name: 'Doctor expertise', desc: 'Experienced practitioners bring refined injection technique and a more accurate diagnostic eye, which factors into clinic pricing.' },
  { name: 'Clinic quality and standards', desc: 'DHA-licensed facilities that follow strict clinical protocols for blood handling and PRP preparation typically reflect that standard in their pricing.' },
  { name: 'PRP preparation method', desc: 'The centrifuge technology and preparation process used can affect the concentration and quality of the plasma, and therefore cost.' },
  { name: 'Additional therapies', desc: 'Some patients combine PRP with other scalp treatments, which affects the overall investment.' },
  { name: 'Customized treatment plan', desc: 'Your plan is built around your goals, not a generic package, so pricing reflects what you actually need.' },
  { name: 'Follow-up sessions', desc: 'Maintenance visits, where recommended, are factored into your long-term plan and cost.' },
];

const BENEFITS = [
  'May support the scalp environment associated with natural hair growth',
  'May help improve the appearance of hair density over time',
  'May help strengthen existing hair',
  'Is a non-surgical treatment with no incisions',
  'Involves minimal downtime compared to surgical hair restoration',
  "Uses the patient's own platelets rather than synthetic additives",
  'Is generally suitable for patients with early hair thinning',
];

const PROCESS = [
  { name: 'Consultation', desc: 'Discuss your hair history, concerns, and goals with your doctor.' },
  { name: 'Scalp assessment', desc: 'A close examination of your hair density and scalp condition.' },
  { name: 'Blood collection', desc: 'A small, routine blood draw, similar to a standard lab test.' },
  { name: 'PRP preparation', desc: 'Your blood is processed to separate and concentrate the platelet-rich plasma.' },
  { name: 'Scalp injection', desc: 'The prepared PRP is injected into targeted areas of the scalp.' },
  { name: 'Aftercare guidance', desc: "You'll receive clear instructions for the hours and days following treatment." },
  { name: 'Follow-up review', desc: 'Your doctor checks progress and advises on next steps.' },
];

const BEFORE_CARE = [
  'Follow any specific instructions provided by your clinic',
  'Avoid certain medications if advised by your doctor beforehand',
  'Stay well hydrated ahead of your appointment',
];

const AFTER_CARE = [
  'Avoid washing your hair for the period recommended by your doctor',
  'Avoid heavy exercise immediately after your session',
  'Follow all aftercare instructions provided by your treatment team',
  'Attend follow-up sessions as advised, to support your treatment plan',
];

const WHY_US = [
  { name: 'DHA Licensed Clinic', desc: 'We operate under Dubai Health Authority standards.' },
  { name: 'Experienced doctors', desc: 'Our team brings clinical experience in hair and scalp treatments.' },
  { name: 'Personalized hair restoration plans', desc: 'No generic packages; your plan is based on your assessment.' },
  { name: 'Advanced PRP preparation techniques', desc: 'We follow structured clinical protocols for plasma preparation.' },
  { name: 'Patient-centered care', desc: 'Your questions and comfort are part of every consultation.' },
  { name: 'Transparent pricing', desc: "You'll know what a session includes before you book, making it easier to find affordable PRP hair treatment Dubai patients can plan around." },
  { name: 'Convenient Dubai location', desc: 'Easy to reach for your initial visit and follow-ups.' },
  { name: 'Consultation before treatment', desc: 'We assess before we recommend, every time.' },
];

const COMPARE_TABLE = [
  { feature: 'Starting Price', value: 'AED 500' },
  { feature: 'DHA Licensed Clinic', value: 'Yes' },
  { feature: 'Personalized Plan', value: 'Yes' },
  { feature: 'Scalp Assessment', value: 'Yes' },
  { feature: 'Experienced Doctors', value: 'Yes' },
  { feature: 'Transparent Pricing', value: 'Yes' },
];

const RELATED_LINKS = [
  { label: 'Hair PRP Treatment Dubai', href: '/services/hair-prp-dubai' },
  { label: 'Hair Loss Treatment Dubai', href: '/services/hair-loss-dubai' },
  { label: 'Aesthetic Dermatology Dubai', href: '/services/aesthetic-dermatology-dubai' },
  { label: 'Dandruff Treatment Dubai', href: '/services/dandruff-treatment-dubai' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Book Appointment', href: '/book-appointment' },
];

const FAQS = [
  { q: 'How much does Hair PRP cost in Dubai?', a: 'Hair PRP Cost Dubai starts from AED 500 per session at RamaCare Polyclinic. Your exact cost depends on your scalp assessment and treatment plan.' },
  { q: 'Does Hair PRP start from AED 500?', a: 'Yes, our PRP hair treatment session starts from AED 500.' },
  { q: 'Is AED 500 the final price?', a: 'AED 500 is the starting price for one session. Your final cost depends on the number of sessions recommended after your consultation.' },
  { q: 'How many PRP sessions are needed?', a: "This varies by individual. Some patients need multiple sessions, with the exact plan determined by your doctor's assessment." },
  { q: 'Is Hair PRP worth the cost?', a: 'Many patients with early hair thinning find value in PRP as a non-surgical option. Your doctor can help you decide if it fits your goals.' },
  { q: 'Is Hair PRP painful?', a: 'Most patients tolerate the procedure well. Some mild discomfort during injections is possible, and your doctor can discuss comfort options.' },
  { q: 'Is there downtime after PRP?', a: 'PRP typically involves minimal downtime, though your doctor will give specific aftercare guidance based on your treatment.' },
  { q: 'Can PRP help hair thinning?', a: 'PRP may support the scalp environment associated with hair density in cases of early thinning, though results vary by individual.' },
  { q: 'Can men and women get PRP?', a: 'Yes, PRP is used for both male pattern hair loss treatment Dubai patients and female hair loss treatment Dubai patients.' },
  { q: 'How long does a PRP session take?', a: 'A typical session, including preparation, generally takes under an hour, though timing can vary.' },
  { q: 'When will I see results?', a: 'Timelines differ between patients. Your doctor will discuss a realistic outlook based on your specific case during consultation.' },
  { q: 'Are maintenance sessions required?', a: 'Some patients are advised to have periodic maintenance sessions. This is assessed on an individual basis.' },
  { q: 'Can PRP be combined with other treatments?', a: 'Yes, some patients combine PRP with other scalp therapies. This is discussed during your consultation and may affect pricing.' },
  { q: 'Is Hair PRP safe?', a: 'PRP uses your own blood platelets and is performed under clinical protocols by our medical team. Your doctor will review your suitability beforehand.' },
  { q: 'What is included in the AED 500 starting price?', a: 'It typically includes consultation, scalp assessment, blood collection, PRP preparation, injection, and post-treatment advice.' },
  { q: 'Does hair loss severity affect the price?', a: 'Yes, more advanced hair thinning may require additional sessions, which affects overall cost.' },
  { q: 'Is a consultation required before treatment?', a: 'Yes, a consultation and scalp assessment are recommended before starting any PRP treatment plan.' },
  { q: 'What causes hair thinning that PRP may help with?', a: 'Common causes include genetics, hormonal changes, stress, and postpartum shedding. Your doctor will assess your specific cause.' },
  { q: 'Do I need to prepare before my PRP session?', a: 'Your clinic will provide specific pre-treatment instructions, such as staying hydrated and following medication guidance if applicable.' },
  { q: 'How do I book an appointment?', a: 'You can book directly through our website, call the clinic, or message us on WhatsApp to schedule your consultation.' },
];

/* --------------------------- Small building blocks --------------------------- */

function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center px-4 py-2 bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-bold uppercase tracking-widest rounded-full mb-4 sm:mb-5">
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-8">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-2xl md:text-3xl font-bold leading-snug text-gray-900">
        {title}
      </h2>
    </div>
  );
}

/* ================================ PAGE ================================ */

export default function HairPrpCostPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const bookHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello RamaCare, I'd like to book a Hair PRP consultation."
  )}`;

  // JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ramacarepolyclinic.ae/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://ramacarepolyclinic.ae/services' },
      { '@type': 'ListItem', position: 3, name: 'Hair PRP Cost Dubai', item: SEO.canonical },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Hair PRP Treatment',
    serviceType: 'Platelet-Rich Plasma (PRP) Hair Treatment',
    provider: { '@type': 'MedicalClinic', name: 'RamaCare Polyclinic', url: 'https://ramacarepolyclinic.ae/' },
    areaServed: 'Dubai',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'AED',
      price: '500',
      description: 'Starting price for a single Hair PRP treatment session',
      url: SEO.canonical,
    },
  };

  const clinicSchema = {
    '@context': 'https://schema.org',
    '@type': ['MedicalClinic', 'MedicalBusiness', 'LocalBusiness'],
    name: 'RamaCare Polyclinic',
    url: 'https://ramacarepolyclinic.ae/',
    logo: 'https://ramacarepolyclinic.ae/images/Logo.png',
    telephone: '+971566597878',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
  };

  return (
    <Layout>
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.metaDescription} />
        <link rel="canonical" href={SEO.canonical} />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SEO.canonical} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      </Head>

      <div className="bg-white antialiased">

        {/* ============================ HERO ============================ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1F5E4B]/10 via-[#F0F7F4] to-white py-10 sm:py-12 md:py-14 lg:py-16">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1F5E4B]/5 rounded-full blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav aria-label="Breadcrumb" className="mb-5 sm:mb-6 flex items-center justify-center lg:justify-start gap-2 text-sm font-medium text-gray-600">
              <a href="/" className="hover:text-[#1F5E4B] transition-colors">Home</a>
              <span aria-hidden="true">/</span>
              <a href="/services" className="hover:text-[#1F5E4B] transition-colors">Services</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-[#1F5E4B]">Hair PRP Cost Dubai</span>
            </nav>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Eyebrow>DHA-Licensed Hair Restoration</Eyebrow>
                <h1 className="mt-3 text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Hair PRP Cost Dubai — PRP Hair Treatment Starting from AED 500
                </h1>
                <p className="text-lg  text-gray-600 mb-4 leading-relaxed">
                  If thinning hair or a receding hairline has you searching for answers, you've
                  probably typed "Hair PRP Cost Dubai" into Google more than once. It's one of the
                  most common questions we hear at RamaCare Polyclinic, and for good reason — hair
                  restoration is a personal decision, and cost is naturally part of that conversation.
                </p>
                <p className="text-lg  text-gray-600 mb-8 leading-relaxed">
                  Platelet-Rich Plasma (PRP) therapy uses your own blood platelets to support the
                  scalp environment where hair grows, and it has become a popular non-surgical option
                  for people dealing with early hair thinning. At RamaCare Polyclinic, PRP hair
                  treatment starts from AED 500 per session, with your final plan shaped around your
                  scalp condition and goals after a proper consultation.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href="#book-now"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1F5E4B] px-8 py-4 text-base md:text-lg font-bold text-white shadow-lg hover:bg-[#17493B] transition-all hover:shadow-xl"
                  >
                    Book Appointment <ArrowRight className="h-5 w-5" />
                  </a>
                  <a
                    href={bookHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1F5E4B]/25 bg-white px-8 py-4 text-base md:text-lg font-bold text-[#1F5E4B] hover:bg-[#F9F7F2] transition-all"
                  >
                    <MessageCircle className="h-5 w-5" /> WhatsApp Us
                  </a>
                </div>

                <div className="flex flex-wrap gap-6 text-sm md:text-base font-semibold text-gray-700">
                  {TRUST_POINTS.map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#1F5E4B]" /> {t}
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image src={IMAGES.hero.src} alt={IMAGES.hero.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================ MAIN CONTENT + STICKY SIDEBAR ============================ */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:grid lg:grid-cols-[1fr_300px] lg:gap-12">

          {/* -------- MAIN COLUMN -------- */}
          <div className="space-y-16">

            {/* Understanding pricing */}
            <section>
              <SectionHeading title="Understanding Hair PRP Cost Dubai and Why Pricing Varies" />
              <p className="text-lg leading-relaxed text-gray-600">
                Search for PRP hair treatment cost Dubai and you'll notice prices vary quite a bit
                from clinic to clinic. That's not random — it usually reflects differences in
                doctor experience, the equipment used to prepare the plasma, how thorough the
                scalp assessment is, and whether the price includes follow-up care. If you're
                comparing options to find the best PRP clinic Dubai has available, pricing is only
                one part of the picture — licensing, doctor experience, and aftercare matter just
                as much. Some clinics advertise a low headline number that doesn't include the
                consultation, assessment, or aftercare guidance, which can be confusing once
                you're actually booking.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                At RamaCare Polyclinic, we keep things simple. A single PRP hair treatment session
                begins at AED 500, and we explain exactly what that covers before you commit to
                anything. Because hair loss patterns differ from person to person, your treating
                doctor will assess your scalp and hair density in person before recommending how
                many sessions might suit your situation. This is also why choosing a qualified,
                DHA-licensed medical clinic matters more than chasing the cheapest number online —
                PRP is a clinical procedure, and the quality of preparation and injection technique
                genuinely affects your experience.
              </p>
            </section>

            {/* Pricing table, shown as cards */}
            <section>
              <SectionHeading title="Hair PRP Cost Dubai – Pricing Table" />
              <div className="grid gap-4 sm:grid-cols-3">
                {PRICING.map((p) => (
                  <div
                    key={p.name}
                    className={`rounded-2xl border p-6 ${
                      p.highlight ? 'border-[#1F5E4B] bg-[#1F5E4B]/5' : 'border-gray-200'
                    }`}
                  >
                    <h4 className="text-base font-semibold text-gray-900">{p.name}</h4>
                    <p className={`mt-2 text-2xl font-semibold ${p.highlight ? 'text-[#1F5E4B]' : 'text-gray-900'}`}>
                      {p.price}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">Best for: {p.bestFor}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-xl bg-[#F9F7F2] p-5">
                <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#D4A574]" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Hair PRP Cost Dubai — Important Pricing Disclaimer
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    Prices mentioned are starting prices and may vary depending on the patient's
                    hair condition, treatment plan, number of sessions required, and clinical
                    assessment by the treating doctor. A consultation is recommended to determine
                    the most appropriate treatment plan and final quotation.
                  </p>
                </div>
              </div>
            </section>

            {/* What's included */}
            <section>
              <SectionHeading title="What Is Included in the Starting Price?" />
              <p className="text-lg leading-relaxed text-gray-600">
                When you book a PRP hair treatment session at RamaCare Polyclinic, your starting
                price generally covers:
              </p>
              <div className="mt-6 grid gap-8 sm:grid-cols-[1fr_180px]">
                <ul className="space-y-3">
                  {INCLUDED.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-base leading-relaxed text-gray-900">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1F5E4B]" />
                      {i}
                    </li>
                  ))}
                </ul>
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                  <Image src={IMAGES.scalp.src} alt={IMAGES.scalp.alt} fill sizes="180px" className="object-cover" />
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-gray-600">
                Because every patient's hair loss pattern is different, your doctor may recommend
                a customized treatment plan that includes more than one session — and this is
                where the final cost can shift from the starting AED 500 price. We'll always walk
                you through this before any commitment is made.
              </p>
            </section>

            {/* What is PRP */}
            <section>
              <SectionHeading title="What Is Hair PRP Treatment?" />
              <div className="grid gap-8 sm:grid-cols-[1fr_220px] sm:items-start">
                <div>
                  <p className="text-lg leading-relaxed text-gray-600">
                    PRP stands for Platelet-Rich Plasma, and Platelet Rich Plasma hair treatment
                    has become a well-known term in modern hair restoration. In simple terms, a
                    small sample of your own blood is drawn, much like a routine blood test. That
                    sample is then processed in a centrifuge to separate and concentrate the
                    platelets, which contain growth factors. This concentrated plasma is then
                    injected into targeted areas of the scalp.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    The idea behind scalp PRP is that these growth factors may help support a
                    healthier environment around hair follicles, which is why PRP for hair loss
                    Dubai patients often ask about is commonly used for hair thinning and
                    early-stage hair loss. It's a non-surgical, in-clinic procedure that uses your
                    body's own biology rather than synthetic materials, which is part of why it
                    appeals to patients looking for a more natural-feeling approach to hair
                    restoration Dubai has to offer.
                  </p>
                </div>
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                  <Image src={IMAGES.centrifuge.src} alt={IMAGES.centrifuge.alt} fill sizes="220px" className="object-cover" />
                </div>
              </div>
            </section>

            {/* Candidates */}
            <section>
              <SectionHeading title="Who Is a Good Candidate for Hair PRP?" />
              <p className="text-lg leading-relaxed text-gray-600">
                Hair PRP Dubai treatment isn't a one-size-fits-all solution, but it may be
                appropriate for people experiencing:
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {CANDIDATES.map((c) => (
                  <span key={c} className="rounded-full border border-[#1F5E4B]/15 bg-[#F9F7F2] px-4 py-3 text-sm font-medium text-gray-900">
                    {c}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-gray-600">
                The best way to know if you're a suitable candidate is a face-to-face scalp
                assessment. Hair loss has many underlying causes — genetics, hormones, stress,
                nutrition — and your doctor needs to understand yours before recommending PRP hair
                treatment Dubai patients can expect real value from.
              </p>
            </section>

            {/* Factors */}
            <section>
              <SectionHeading title="Factors That Affect Hair PRP Cost in Dubai" />
              <p className="text-lg leading-relaxed text-gray-600">
                Several elements influence the final PRP session price Dubai clinics quote,
                including:
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {FACTORS.map((f) => (
                  <div key={f.name} className="rounded-xl border border-gray-100 p-5">
                    <p className="text-base font-semibold text-gray-900">{f.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{f.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* How many sessions */}
            <section className="rounded-2xl bg-[#0F3B2E] p-6 text-white sm:p-8">
              <h2 className="text-2xl font-bold sm:text-3xl">How Many PRP Sessions Are Usually Needed?</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                This is one of the most common questions we get alongside Hair PRP Cost Dubai
                itself, and it deserves an honest answer: it depends on the individual. Some
                patients may require multiple sessions to address their specific hair thinning
                pattern, and initial treatment plans often include a series of sessions spaced a
                few weeks apart. After the initial course, some patients are advised to consider
                periodic maintenance sessions to help sustain their results.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                We won't promise a fixed number of sessions or guaranteed results before we've
                actually examined your scalp — anyone who does that without an assessment isn't
                giving you an honest answer. What we can promise is a clear explanation of what
                your doctor recommends and why, so you understand the reasoning behind your
                specific plan.
              </p>
            </section>

            {/* Benefits */}
            <section>
              <SectionHeading title="Benefits of Hair PRP Treatment" />
              <p className="text-lg leading-relaxed text-gray-600">
                Patients researching hair thinning treatment Dubai options, or exploring PRP for
                hair loss Dubai more broadly, often ask what a hair regrowth treatment Dubai
                clinic like ours can realistically offer. Based on current clinical use, PRP:
              </p>
              <div className="mt-6 grid gap-8 sm:grid-cols-[1fr_220px]">
                <ul className="space-y-3">
                  {BENEFITS.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-base leading-relaxed text-gray-900">
                      <Sparkles className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#D4A574]" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                  <Image src={IMAGES.density.src} alt={IMAGES.density.alt} fill sizes="220px" className="object-cover" />
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-gray-600">
                As with any medical treatment, individual response varies, and your doctor will
                discuss realistic expectations with you during your consultation.
              </p>
            </section>

            {/* Process */}
            <section>
              <SectionHeading title="Hair PRP Treatment Process" />
              <p className="text-lg leading-relaxed text-gray-600">
                Here's what a typical scalp PRP Dubai visit looks like at RamaCare Polyclinic:
              </p>
              <div className="relative mt-8 aspect-[16/8] w-full overflow-hidden rounded-2xl">
                <Image src={IMAGES.injection.src} alt={IMAGES.injection.alt} fill sizes="(max-width: 1024px) 100vw, 700px" className="object-cover" />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {PROCESS.map((p, i) => (
                  <div key={p.name} className="rounded-xl border border-gray-100 p-5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1F5E4B] text-xs font-semibold text-white">
                      {i + 1}
                    </span>
                    <p className="mt-2 text-base font-semibold text-gray-900">{p.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{p.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Before / After care */}
            <section>
              <SectionHeading title="Before and After Care" />
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Before Treatment</h3>
                  <ul className="mt-3 space-y-2">
                    {BEFORE_CARE.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-base leading-relaxed text-gray-600">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#1F5E4B]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">After Treatment</h3>
                  <ul className="mt-3 space-y-2">
                    {AFTER_CARE.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-base leading-relaxed text-gray-600">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#D4A574]" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Why choose us */}
            <section>
              <SectionHeading title="Why Choose RamaCare Polyclinic?" />
              <p className="text-lg leading-relaxed text-gray-600">
                There's no shortage of clinics offering PRP hair treatment Dubai wide, so it's
                fair to ask what sets RamaCare Polyclinic apart:
              </p>
              <div className="mt-6 grid gap-8 sm:grid-cols-[1fr_1fr]">
                <ul className="space-y-4">
                  {WHY_US.slice(0, 4).map((w) => (
                    <li key={w.name} className="flex items-start gap-3">
                      <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1F5E4B]" />
                      <div>
                        <p className="text-base font-semibold text-gray-900">{w.name}</p>
                        <p className="text-sm leading-relaxed text-gray-600">{w.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-4">
                  {WHY_US.slice(4).map((w) => (
                    <li key={w.name} className="flex items-start gap-3">
                      <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1F5E4B]" />
                      <div>
                        <p className="text-base font-semibold text-gray-900">{w.name}</p>
                        <p className="text-sm leading-relaxed text-gray-600">{w.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image src={IMAGES.clinic.src} alt={IMAGES.clinic.alt} fill sizes="(max-width: 640px) 100vw, 340px" className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image src={IMAGES.doctor.src} alt={IMAGES.doctor.alt} fill sizes="(max-width: 640px) 100vw, 340px" className="object-cover" />
                </div>
              </div>
            </section>

            {/* Compare table */}
            <section>
              <SectionHeading title="How RamaCare Compares" />
              <div className="overflow-hidden rounded-2xl border border-gray-100">
                <table className="w-full border-collapse text-left text-base">
                  <thead>
                    <tr className="bg-[#F9F7F2]">
                      <th className="px-6 py-4 font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 font-semibold text-gray-900">RamaCare Polyclinic</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARE_TABLE.map((row, i) => (
                      <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F9F7F2]/50'}>
                        <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                        <td className="px-6 py-4 text-[#1F5E4B] font-semibold">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* -------- STICKY SIDEBAR -------- */}
          <aside className="mt-14 lg:mt-0">
            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm lg:sticky lg:top-8">
              <div className="flex items-center gap-2 text-[#1F5E4B]">
                <Wallet className="h-6 w-6" />
                <span className="text-sm font-semibold uppercase tracking-wide">Starting Price</span>
              </div>
              <p className="mt-2 text-4xl font-bold text-gray-900">AED 500</p>
              <p className="text-sm text-gray-600">per Hair PRP session</p>

              <div className="mt-5 space-y-3 border-t border-gray-100 pt-5">
                {TRUST_POINTS.map((t) => (
                  <div key={t} className="flex items-start gap-2 text-sm text-gray-900">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1F5E4B]" />
                    {t}
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href="#book-now"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#1F5E4B] px-4 py-4 text-base font-bold text-white hover:bg-[#17493B] transition-all"
                >
                  Book Appointment
                </a>
                <a
                  href={bookHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#1F5E4B]/25 bg-white px-4 py-4 text-base font-bold text-[#1F5E4B] hover:bg-[#F9F7F2] transition-all"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </a>
                <a
                  href="tel:+971042862006"
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#1F5E4B]/25 px-4 py-4 text-base font-bold text-gray-600 hover:bg-[#F9F7F2] transition-all"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* ============================ RELATED SERVICES ============================ */}
        <section className="bg-[#F9F7F2] px-4 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gray-600">Explore Related Services</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {RELATED_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-full border border-[#1F5E4B]/15 bg-white px-5 py-2.5 text-sm font-medium text-[#1F5E4B] hover:bg-[#1F5E4B]/5 transition-all">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </section>
        {/* ============================ FAQ — two static columns ============================ */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Common Questions" title="Frequently Asked Questions" />
            <div className="grid gap-x-10 md:grid-cols-2">
              {[FAQS.slice(0, 10), FAQS.slice(10)].map((col, colIdx) => (
                <div key={colIdx} className="divide-y divide-gray-100 border-t border-gray-100 md:border-t-0">
                  {col.map((f, i) => {
                    const idx = colIdx * 10 + i;
                    const isOpen = openFaq === idx;
                    return (
                      <div key={f.q} className={colIdx === 0 ? 'border-t border-gray-100 first:border-t-0' : ''}>
                        <button
                          onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                          className="flex w-full items-center gap-3 py-5 text-left">
                          <span className="flex-1 text-base font-semibold text-gray-900">
                            {idx + 1}. {f.q}
                          </span>
                          <ChevronDown className={`h-5 w-5 flex-shrink-0 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.18 }}>
                              <p className="pb-5 text-base leading-relaxed text-gray-600">{f.a}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ============================ FINAL CTA / BOOK CONSULTATION ============================ */}
      <BookConsultation />
      </div>
    </Layout>
  );
}