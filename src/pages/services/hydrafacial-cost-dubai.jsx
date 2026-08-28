import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useToast } from '../../../components/Toast';
import { useRouter } from 'next/router';

/* ------------------------------------------------------------------
   Page data — sourced directly from the HydraFacial Cost Dubai
   content brief (SEO metadata, pricing table, FAQs, schema).
------------------------------------------------------------------- */
const SITE_URL = 'https://ramacarepolyclinic.ae';
const PAGE_PATH = '/hydrafacial-cost-dubai';

const nav = [
  { id: 'what-is', label: 'What Is HydraFacial?' },
  { id: 'pricing', label: 'Full Pricing Breakdown' },
  { id: 'factors', label: 'What Affects Cost' },
  { id: 'included', label: "What's Included" },
  { id: 'candidate', label: 'Good Candidate?' },
  { id: 'process', label: 'Treatment Process' },
  { id: 'care', label: 'Before & After Care' },
  { id: 'why-us', label: 'Why RamaCare' },
  { id: 'faq', label: 'FAQs' },
];

const stages = [
  { n: '01', title: 'Cleansing & Gentle Exfoliation', text: 'Lifts away dead skin cells and surface debris.' },
  { n: '02', title: 'Acid-Based Exfoliation', text: 'A mild peel loosens buildup in the pores without the downtime of a stronger chemical peel.' },
  { n: '03', title: 'Painless Extraction', text: 'Vacuum suction draws out blackheads, oil, and debris without manual pinching.' },
  { n: '04', title: 'Hydration & Antioxidant Infusion', text: 'Serums tailored to specific concerns — hydration, brightening, or oil control — are infused into the skin.' },
];

const valueQuestions = [
  'Is the treatment performed or supervised by a licensed medical professional?',
  'Does the starting price include a real skin consultation, or just the facial itself?',
  'Are the serums used medical-grade, and are they matched to your specific skin type?',
  'Is the clinic transparent about what could increase your final cost?',
];

const priceDependsOn = [
  { label: 'Skin condition', text: 'more congested or sensitive skin may benefit from a modified protocol' },
  { label: 'Treatment goals', text: "whether you're targeting hydration, dullness, mild acne, or early signs of aging" },
  { label: 'Booster selection', text: 'additional serums (brightening, anti-aging, soothing) can be added for an extra cost' },
  { label: 'Number of sessions', text: "package pricing is often more cost-effective than single sessions if you're planning ongoing maintenance" },
  { label: 'Consultation outcome', text: 'your provider may recommend a specific protocol based on a hands-on skin assessment' },
];

const priceTable = [
  { treatment: 'HydraFacial Signature', price: 'AED 500' },
  { treatment: 'Deluxe HydraFacial', price: 'Consultation Required' },
  { treatment: 'Platinum HydraFacial', price: 'Consultation Required' },
  { treatment: 'HydraFacial + Booster', price: 'Consultation Required' },
  { treatment: 'HydraFacial Package (multi-session)', price: 'Consultation Required' },
];

const costFactors = [
  'Clinic type — medical clinics with doctor oversight often price differently than salon-style aesthetic centers',
  'Dermatologist or physician supervision — medically supervised sessions typically involve a proper skin assessment before treatment',
  'Technology and device generation — newer HydraFacial devices with more precision settings can affect pricing',
  'Serum quality — premium or specialized serums cost more than standard hydration serums',
  'Booster add-ons — LED therapy, lymphatic drainage, or additional peels increase total session cost',
  'Treatment duration — longer sessions with more customization naturally cost more',
  'Package discounts — booking multiple sessions upfront can reduce your average per-session price',
  'Combination therapies — pairing HydraFacial with microneedling, PRP, or exosome treatments changes total pricing',
];

const included = [
  'Initial consultation and skin assessment',
  'Cleansing and gentle exfoliation',
  'Acid peel exfoliation',
  'Painless vacuum extraction',
  'Standard hydration and antioxidant serum infusion',
  'Post-treatment skincare advice',
];

const benefits = [
  { title: 'Immediate glow', text: 'Visible brightness right after the session, with no recovery time needed' },
  { title: 'Deep hydration', text: "Replenishes moisture levels, especially helpful in Dubai's dry, air-conditioned environment" },
  { title: 'Improved texture', text: 'Smoother-feeling skin from consistent exfoliation' },
  { title: 'Support for mild acne', text: 'Extraction helps clear clogged pores and congestion' },
  { title: 'Pigmentation support', text: 'Brightening serums can help even out tone over repeated sessions' },
  { title: 'Softer look of fine lines', text: 'Hydration plumps the skin temporarily' },
];

const candidateFor = [
  'Oily or combination skin looking for deep pore cleansing',
  'Dry or dehydrated skin needing a hydration boost',
  "Mild acne-prone skin (in coordination with your dermatologist's broader treatment plan)",
  'Sensitive skin, using gentler serum formulations',
  'Skin with early pigmentation or dullness concerns',
  'Aging skin looking for a low-downtime refresh',
];

const processSteps = [
  { title: 'Consultation', text: 'Your provider reviews your skin history, concerns, and goals.' },
  { title: 'Skin Analysis', text: 'A closer assessment determines which serums and settings suit your skin.' },
  { title: 'Preparation', text: 'The skin is cleansed and prepped for treatment.' },
  { title: 'HydraFacial Treatment', text: 'The device performs cleansing, exfoliation, and extraction.' },
  { title: 'Serum Infusion', text: 'Targeted serums are infused based on your specific concerns.' },
  { title: 'Aftercare Guidance', text: "You'll receive instructions on how to maintain results." },
  { title: 'Follow-Up', text: "Your provider may recommend a session interval based on your skin's response." },
];

const doList = [
  'Moisturize regularly',
  'Apply broad-spectrum sunscreen daily',
  'Keep skincare gentle for 24–48 hours',
  'Stay hydrated to support the treatment\u2019s effects',
];
const dontList = [
  'Avoid strong exfoliants immediately after',
  'Avoid excessive sun exposure',
  'Avoid picking at any temporary redness',
  'Avoid harsh exfoliants or retinoids a few days prior',
];

const whyUs = [
  'DHA-licensed clinic — every treatment follows regulated medical safety standards',
  'Experienced medical team — treatments are performed under proper clinical oversight',
  'Modern equipment — up-to-date HydraFacial technology for consistent results',
  'Personalized treatment plans — your protocol is based on an actual skin assessment',
  'Patient-centered care — clear communication about what\u2019s included in your price',
  'Central Jumeirah 1 location — convenient and accessible across Dubai',
  'Transparent pricing — a clear starting price with an honest explanation of what can change it',
  'Consultation-first approach — no treatment begins without understanding your skin and goals first',
];

const faqs = [
  { q: 'How much does HydraFacial cost in Dubai — is AED 500 accurate?', a: 'Yes — HydraFacial cost Dubai-wide at RamaCare Polyclinic starts from AED 500 per session. Final pricing may vary based on your skin assessment and any add-ons selected.' },
  { q: 'Is AED 500 the final price for everyone?', a: 'AED 500 is the starting price for a standard session. If you choose booster serums, LED add-ons, or a customized protocol, your provider will confirm the adjusted price during consultation.' },
  { q: 'How many sessions are needed to see results?', a: 'Many people notice visible glow after a single session, but ongoing skin concerns (like pigmentation or texture) generally respond better to a series of sessions spaced 3–4 weeks apart.' },
  { q: 'Is HydraFacial worth the cost?', a: 'For people wanting visible, immediate results with zero downtime, many patients find HydraFacial a worthwhile addition to their skincare routine, especially compared to more invasive treatments.' },
  { q: 'Does HydraFacial hurt?', a: 'Most patients describe the treatment as comfortable, often compared to a gentle suction sensation rather than any sharp pain.' },
  { q: 'Can men get HydraFacial?', a: 'Yes, HydraFacial is suitable for all genders and is increasingly popular among men seeking deep cleansing and hydration.' },
  { q: 'Is there any downtime after HydraFacial?', a: 'Little to none for most patients. Mild redness may occur immediately after but typically resolves within a few hours.' },
  { q: 'How long do HydraFacial results last?', a: 'Results generally last several weeks, though this varies by skin type and lifestyle factors like sun exposure and skincare routine.' },
  { q: 'Can HydraFacial treat acne?', a: 'HydraFacial can help with mild congestion and clogged pores, but active or cystic acne usually needs a dedicated treatment plan alongside or instead of HydraFacial.' },
  { q: 'Is HydraFacial safe for sensitive skin?', a: 'Yes, with adjusted settings and gentler serum choices, HydraFacial can generally be tailored for sensitive skin — this is exactly why a consultation matters before booking.' },
  { q: 'Can I wear makeup afterward?', a: 'Most patients can apply light makeup shortly after treatment, though your provider may suggest waiting a few hours for best results.' },
  { q: 'Can I combine HydraFacial with other treatments?', a: 'Yes, HydraFacial is often combined with treatments like microneedling, PRP, or exosome therapy as part of a broader skin rejuvenation plan — your provider can advise on safe combinations and spacing.' },
  { q: 'How often should I get HydraFacial?', a: "Most people schedule sessions every 3–4 weeks, though your provider may adjust this based on your skin's response." },
  { q: 'Are package discounts available?', a: 'RamaCare periodically offers multi-session packages. Contact the clinic directly for current pricing and availability.' },
  { q: 'How do I book a HydraFacial appointment at RamaCare?', a: 'You can book via phone, WhatsApp, or by visiting RamaCare Polyclinic in Jumeirah 1 directly.' },
  { q: 'Does HydraFacial help with pigmentation?', a: 'Brightening serum infusions can support more even-looking tone over time, though persistent pigmentation concerns are often better addressed through a dedicated pigmentation treatment plan.' },
  { q: 'Is a consultation required before HydraFacial?', a: 'Yes — a short consultation helps your provider tailor the treatment and serum selection to your specific skin type and concerns.' },
  { q: 'Can HydraFacial replace my regular skincare routine?', a: 'No, HydraFacial complements a good home skincare routine rather than replacing it. Your provider can advise on products to use between sessions.' },
];

const links = {
  acne: '/services/acne-treatment-dubai',
  pigmentation: '/services/pigmentation-dubai',
  aestheticDermatology: '/services/aesthetic-dermatology-dubai',
  acneScar: '/services/acne-scar-treatment-dubai',
  melasma: '/services/melasma-treatment-dubai',
  rosacea: '/services/rosacea-treatment-dubai',
  hairPrp: '/services/hair-prp-dubai',
  bookAppointment: '/book-appointment',
};

/* ------------------------------------------------------------------
   JSON-LD schema — exact structure from the content brief
------------------------------------------------------------------- */
function buildSchema() {
  const serviceOffer = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'HydraFacial Treatment',
    serviceType: 'Aesthetic Dermatology',
    provider: {
      '@type': 'MedicalBusiness',
      name: 'RamaCare Polyclinic',
      url: SITE_URL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jumeirah 1',
        addressRegion: 'Dubai',
        addressCountry: 'AE',
      },
    },
    areaServed: 'Dubai, UAE',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'AED',
      price: '500',
      priceValidUntil: '2026-12-31',
      description: 'Starting price per HydraFacial session. Additional charges may apply for boosters and add-ons based on consultation.',
      availability: 'https://schema.org/InStock',
    },
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
      { '@type': 'ListItem', position: 2, name: 'Aesthetic Dermatology', item: SITE_URL + links.aestheticDermatology },
      { '@type': 'ListItem', position: 3, name: 'HydraFacial Cost Dubai', item: SITE_URL + PAGE_PATH },
    ],
  };

  return [serviceOffer, faqSchema, breadcrumb];
}

/* ------------------------------------------------------------------
   Small building blocks — deliberately different visual language
   from the card-grid pattern used on other service pages: dash
   lists, a real <table>, a connected timeline, and split panels.
------------------------------------------------------------------- */
function DashItem({ label, text }) {
  return (
    <li className="flex gap-3 py-2.5 border-b border-gray-100 last:border-0">
      <span className="text-[#1F5E4B] font-semibold shrink-0">—</span>
      <p className="text-base text-[#5F5F5F] leading-relaxed">
        {label ? <span className="font-medium text-[#1A1A1A]">{label} — </span> : null}
        {text}
      </p>
    </li>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1F5E4B] mb-2">{children}</p>
  );
}

export default function HydraFacialCostDubaiPage() {
  const { showToast, ToastComponent } = useToast();
  const [openFaq, setOpenFaq] = useState(null);
  const router = useRouter();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello RamaCare, I'd like to know more about HydraFacial pricing and book a consultation."
    );
    window.open(`https://wa.me/971566597878?text=${message}`, '_blank');
  };

  const handleBookAppointment = () => router.push(links.bookAppointment);
  const handleCall = () => window.open('tel:+97142862006', '_self');

  const schemaBlocks = buildSchema();

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">HydraFacial Cost Dubai — Starting AED 500 | RamaCare</title>
        <meta
          name="description"
          content="HydraFacial cost Dubai starts from AED 500 at RamaCare Polyclinic. DHA-licensed care, transparent pricing, real results. Book your consultation today."
          key="description"
        />
        <link rel="canonical" href={SITE_URL + PAGE_PATH} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HydraFacial Cost Dubai — Starting AED 500 | RamaCare" />
        <meta
          property="og:description"
          content="HydraFacial cost Dubai starts from AED 500 at RamaCare Polyclinic. DHA-licensed care, transparent pricing, real results."
        />
        <meta property="og:url" content={SITE_URL + PAGE_PATH} />
        <meta property="og:image" content={SITE_URL + '/images/hydrafacial-treatment-room-ramacare.jpg'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HydraFacial Cost Dubai — Starting AED 500 | RamaCare" />
        {schemaBlocks.map((block, i) => (
          <script key={`schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }} />
        ))}
      </Head>

      {/* ============ HERO — full-bleed banner, not a split two-column ============ */}
      <section className="relative h-[62vh] min-h-[440px] w-full overflow-hidden">
        <img
          src="/images/facial.jpg"
          alt="HydraFacial treatment room at RamaCare Polyclinic Dubai"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-[#1A1A1A]/35 to-[#1A1A1A]/10" />

        <div className="relative z-10 flex h-full max-w-7xl mx-auto flex-col justify-end px-6 pb-12 sm:px-8">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.15] max-w-3xl">
            HydraFacial Cost Dubai — What You&apos;ll Actually Pay in 2026
          </h1>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={handleBookAppointment} className="inline-flex items-center gap-2 rounded-md bg-[#1F5E4B] px-6 py-3 text-sm font-medium text-white hover:bg-[#17493A] transition-colors">
              <LucideIcons.Calendar className="w-4 h-4" /> Book Your Consultation
            </button>
            <button onClick={handleWhatsAppClick} className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/20 transition-colors">
              <LucideIcons.MessageCircle className="w-4 h-4" /> WhatsApp Us
            </button>
          </div>
        </div>

        {/* floating price badge */}
        <div className="absolute right-6 top-6 sm:right-8 sm:top-8 rounded-2xl bg-white/95 backdrop-blur px-6 py-4 shadow-xl">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#5F5F5F]">Starting From</p>
          <p className="text-3xl font-semibold text-[#1F5E4B] leading-tight">AED 500</p>
          <p className="text-[11px] text-[#5F5F5F]">per session</p>
        </div>
      </section>

      {/* ============ STAT STRIP — inline row, not cards ============ */}
      <div className="bg-[#1F5E4B] text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-sm">
          <span className="inline-flex items-center gap-2"><LucideIcons.ShieldCheck className="w-4 h-4" /> DHA-Licensed Clinic</span>
          <span className="inline-flex items-center gap-2"><LucideIcons.Clock className="w-4 h-4" /> Minimal Downtime</span>
          <span className="inline-flex items-center gap-2"><LucideIcons.Tags className="w-4 h-4" /> Transparent Pricing</span>
          <span className="inline-flex items-center gap-2"><LucideIcons.Stethoscope className="w-4 h-4" /> Consultation-First</span>
        </div>
      </div>

      {/* ============ INTRO ============ */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <p className="text-[#5F5F5F] leading-relaxed">
          If you&apos;ve typed &quot;HydraFacial cost Dubai&quot; into Google, you&apos;re probably comparing more than just a price tag — you&apos;re trying to figure out which clinic will give you real, medically-guided results without overpaying or under-delivering. HydraFacial has become one of the most requested facials in Dubai because it combines cleansing, exfoliation, extraction, and hydration into a single, no-downtime session — but prices across the city vary widely depending on the clinic, the technology used, and whether the treatment is performed under medical supervision.
        </p>
        <p className="text-[#5F5F5F] leading-relaxed mt-4">
          At RamaCare Polyclinic in Jumeirah 1, HydraFacial pricing starts from <span className="font-semibold text-[#1A1A1A]">AED 500 per session</span>. That starting figure reflects a standard, single-session treatment; your final price may shift slightly depending on your skin&apos;s specific needs, which is something a proper consultation — not a generic price list — should determine.
        </p>
        <p className="text-[#5F5F5F] leading-relaxed mt-4">
          Choosing a DHA-licensed clinic for HydraFacial matters more than people realize. Because the treatment involves controlled exfoliation and extraction, a medically supervised setting reduces the risk of irritation, especially for sensitive or reactive skin — something a beauty-salon version of the treatment can&apos;t always guarantee.
        </p>
        <p className="text-[#5F5F5F] leading-relaxed mt-4">
          Understanding HydraFacial cost Dubai norms before you book also helps you spot red flags. If a clinic advertises an unusually low flat rate with no mention of what&apos;s included, that&apos;s often a sign the &quot;facial&quot; being offered isn&apos;t the medical-grade, device-based treatment you&apos;re actually looking for. A transparent starting price, backed by a proper consultation, is generally a better indicator of quality than the lowest number you can find.
        </p>
      </section>

      {/* ============ MAIN GUIDE LAYOUT — premium structured layouts ============ */}
      <section className="max-w-6xl mx-auto px-6 pb-20 space-y-24">

        {/* 1. What is HydraFacial — connected timeline + side panel */}
        <div id="what-is" className="scroll-mt-24">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
            <div className="space-y-6">
              <SectionLabel>The Treatment</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A]">What Is HydraFacial?</h2>
              <p className="text-base text-[#5F5F5F] leading-relaxed">
                HydraFacial is a patented, device-based skin treatment that uses a vortex-style suction and infusion system to clean, exfoliate, extract, and hydrate the skin in one continuous process. Unlike manual facials, the handheld device does the work mechanically and consistently, which is part of why results tend to look uniform across the face rather than patchy.
              </p>
              <p className="text-base text-[#5F5F5F] leading-relaxed">
                HydraFacial is generally considered suitable for most skin types, including oily, dry, combination, and — with the right serum selection — sensitive skin.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-md mt-6">
                <img
                  src="/images/skin-consultation-hydrafacial-assessment.jpg"
                  alt="Skin consultation before HydraFacial cost Dubai assessment"
                  className="w-full h-[280px] object-cover"
                />
              </div>
            </div>

            <div className="bg-white border border-[#E9E2D6] rounded-3xl p-8 shadow-sm">
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1F5E4B]"></span>
                The 4 Treatment Stages
              </h3>
              <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#E9E2D6]">
                {stages.map((s) => (
                  <div key={s.n} className="relative pl-10">
                    <span className="absolute left-0 top-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#1F5E4B] text-white text-xs font-bold shadow-sm">
                      {s.n}
                    </span>
                    <h4 className="text-base font-bold text-[#1A1A1A]">{s.title}</h4>
                    <p className="text-sm text-[#5F5F5F] leading-relaxed mt-1">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Advisory Callout — gold/teal gradient border */}
        <div className="relative overflow-hidden rounded-3xl border-l-8 border-[#1F5E4B] bg-[#F5F1EA] p-8 shadow-sm">
          <div className="absolute right-4 top-4 text-[#1F5E4B]/10">
            <LucideIcons.Quote className="w-24 h-24 rotate-180" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">Why HydraFacial Pricing Isn&apos;t One-Size-Fits-All</h3>
            <p className="text-base text-[#5F5F5F] leading-relaxed">
              Because the treatment can be customized with different boosters, LED add-ons, or serum blends, no single number can honestly represent every possible HydraFacial session. That&apos;s exactly why serious clinics quote a starting price rather than a flat number for everyone — and why you should be cautious of clinics advertising a single fixed price with no mention of what&apos;s included.
            </p>
          </div>
        </div>

        {/* 3. Value Beyond Price — 2x2 grid of modern question cards */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel>Assessment Guidelines</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] mt-2">Understanding HydraFacial Value</h2>
            <p className="text-[#5F5F5F] leading-relaxed mt-3">
              When comparing HydraFacial cost Dubai-wide, it helps to look past the number on the price list and ask what&apos;s actually driving that price. Two clinics could both advertise &quot;AED 500 HydraFacial,&quot; but the results can differ significantly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {valueQuestions.map((q, i) => (
              <div key={q} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex gap-4">
                <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-xl bg-[#F0F7F4] text-[#1F5E4B] text-sm font-bold">{i + 1}</span>
                <p className="text-base text-[#1A1A1A] font-medium leading-snug pt-1">{q}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#F9F7F2] rounded-2xl p-6 border border-[#E9E2D6] text-center max-w-3xl mx-auto">
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              At RamaCare Polyclinic, the goal is to make sure the HydraFacial cost Dubai patients pay reflects genuine value — proper assessment, medical oversight, and a treatment plan suited to their skin, not just a facial performed on a fixed schedule regardless of individual needs.
            </p>
          </div>
        </div>

        {/* 4. Seasonal Offers — warm callout banner */}
        <div className="bg-[#FDF5E6] rounded-3xl border border-[#D4A574]/20 p-8 flex flex-col md:flex-row gap-6 items-center justify-between shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg font-bold text-[#1A1A1A] flex items-center justify-center md:justify-start gap-2">
              <LucideIcons.Calendar className="w-5 h-5 text-[#D4A574]" />
              Do Seasonal Offers Affect HydraFacial Cost?
            </h3>
            <p className="text-sm text-[#5F5F5F] leading-relaxed max-w-2xl">
              Dubai clinics, including RamaCare, occasionally run seasonal promotions or bundled packages that can affect the standard HydraFacial cost Dubai patients would otherwise pay. These offers are typically time-limited and may include multiple sessions, added boosters, or discounts when combined with other treatments like skin boosters or microdermabrasion.
            </p>
          </div>
          <button
            onClick={handleBookAppointment}
            className="shrink-0 bg-[#1A1A1A] text-white hover:bg-black px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Check Current Offers
          </button>
        </div>

        {/* 5. Pricing Breakdown — real interactive table */}
        <div id="pricing" className="scroll-mt-24 space-y-8">
          <div className="max-w-2xl">
            <SectionLabel>Pricing Breakdown</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] mt-2">HydraFacial Cost Dubai — 2026 Pricing</h2>
            <p className="text-[#5F5F5F] leading-relaxed mt-3">
              At RamaCare Polyclinic, HydraFacial cost Dubai-wide starts from AED 500 for a standard session. This starting price includes the core treatment: cleansing, exfoliation, extraction, and hydration infusion. Your final price may depend on:
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
            <div className="overflow-hidden rounded-2xl border border-[#E9E2D6] shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1A1A1A] text-white text-xs uppercase tracking-wider">
                    <th className="px-6 py-4 font-semibold">Treatment Tier</th>
                    <th className="px-6 py-4 font-semibold text-right">Starting Price</th>
                  </tr>
                </thead>
                <tbody>
                  {priceTable.map((row, i) => (
                    <tr key={row.treatment} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F9F7F2]'}>
                      <td className="px-6 py-4 text-sm font-medium text-[#1A1A1A] border-t border-[#E9E2D6]">{row.treatment}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-right border-t border-[#E9E2D6] text-[#1F5E4B]">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="bg-gray-50 p-4 border-t border-[#E9E2D6]">
                <p className="text-xs text-[#5F5F5F] leading-relaxed italic">
                  We intentionally don&apos;t display fixed prices for tiered or add-on versions of the treatment, since final cost depends on your skin assessment. This keeps pricing transparent rather than advertising a number that may not apply to your specific skin.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-[#E9E2D6] rounded-2xl p-6 shadow-sm">
                <h4 className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider mb-4">Cost Modifiers</h4>
                <ul className="divide-y divide-gray-100">
                  {priceDependsOn.map((p) => (
                    <li key={p.label} className="py-3 first:pt-0 last:pb-0">
                      <p className="text-sm font-bold text-[#1A1A1A]">{p.label}</p>
                      <p className="text-xs text-[#5F5F5F] mt-0.5">{p.text}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3 rounded-2xl bg-[#F0F7F4] border border-[#1F5E4B]/10 px-5 py-4">
                <LucideIcons.Info className="w-5 h-5 text-[#1F5E4B] shrink-0 mt-0.5" />
                <p className="text-xs text-[#1A1A1A]/85 leading-relaxed">
                  <span className="font-semibold text-[#1F5E4B]">DHA-Compliant Disclaimer:</span> Prices are indicative and may vary depending on the doctor&apos;s assessment, treatment plan, skin condition, and optional add-on boosters. A consultation is recommended for an accurate quotation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Cost Factors — interactive cards grid */}
        <div id="factors" className="scroll-mt-24 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel>Cost Factors</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] mt-2">What Affects the HydraFacial Cost?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {costFactors.map((f, index) => {
              const [title, desc] = f.split(' — ');
              return (
                <div key={index} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#F0F7F4] flex items-center justify-center text-[#1F5E4B] mb-4">
                    <LucideIcons.DollarSign className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#1A1A1A] leading-tight mb-2">{title}</h4>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 7. What's Included — split panels comparison */}
        <div id="included" className="scroll-mt-24 space-y-8">
          <div className="max-w-2xl">
            <SectionLabel>Inclusions</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] mt-2">What&apos;s Included in the Starting Price?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-[#1F5E4B]/20 bg-[#F0F7F4] p-8 shadow-sm">
              <h4 className="text-lg font-bold text-[#1F5E4B] mb-6 flex items-center gap-2">
                <LucideIcons.CheckCircle className="w-5 h-5" /> Included in standard AED 500
              </h4>
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[#1A1A1A]/85 font-medium">
                    <LucideIcons.Check className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#E9E2D6] bg-white p-8 shadow-sm flex flex-col justify-center">
              <div className="w-12 h-12 rounded-full bg-[#F5F1EA] flex items-center justify-center text-[#D4A574] mb-6">
                <LucideIcons.PlusCircle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-[#1A1A1A] mb-3">Quoted Separately After Consultation</h4>
              <p className="text-base text-[#5F5F5F] leading-relaxed">
                Add-on boosters, specialized serums, or combination treatments are quoted separately after your consultation, based on your skin assessment and goals. This ensures you only pay for what your skin genuinely requires.
              </p>
            </div>
          </div>
        </div>

        {/* 8. Benefits — visual cards deck */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel>Benefits</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] mt-2">Why Get a HydraFacial?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white border border-[#E9E2D6] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-base font-bold text-[#1F5E4B] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-[#D4A574] rounded-full"></span>
                  {b.title}
                </h4>
                <p className="text-sm text-[#5F5F5F] leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 9. Good Candidate vs Warning — split panels with warning box */}
        <div id="candidate" className="scroll-mt-24 space-y-8">
          <div className="max-w-2xl">
            <SectionLabel>Suitability</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] mt-2">Who is a Good Candidate?</h2>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
            <div className="bg-white border border-[#E9E2D6] rounded-3xl p-8 shadow-sm">
              <h4 className="text-lg font-bold text-[#1A1A1A] mb-6 flex items-center gap-2">
                <LucideIcons.UserCheck className="w-5 h-5 text-[#1F5E4B]" />
                Ideal for Skin Types
              </h4>
              <ul className="grid sm:grid-cols-2 gap-4">
                {candidateFor.map((c) => (
                  <li key={c} className="flex gap-2.5 items-start">
                    <LucideIcons.Check className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#5F5F5F] leading-snug">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-amber-50/50 p-8 space-y-4">
              <h4 className="text-lg font-bold text-amber-900 flex items-center gap-2">
                <LucideIcons.AlertTriangle className="w-5 h-5 text-amber-600" />
                Contraindications
              </h4>
              <p className="text-sm text-amber-800 leading-relaxed">
                If you have active, inflamed acne, an active skin infection, or a known allergy to specific active ingredients, a consultation is essential before booking.
              </p>
              <p className="text-sm text-amber-800 leading-relaxed">
                Pregnant or breastfeeding patients, and those with active rosacea flare-ups, should also mention this during consultation so the provider can adjust the treatment plan or timing.
              </p>
            </div>
          </div>
        </div>

        {/* 10. Treatment Process — vertical structured process cards */}
        <div id="process" className="scroll-mt-24 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel>Your Journey</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] mt-2">HydraFacial Treatment Process</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {processSteps.map((step, i) => (
                <div key={step.title} className="bg-white border border-[#E9E2D6] rounded-2xl p-5 shadow-sm hover:border-[#1F5E4B] transition-colors flex gap-4">
                  <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#1F5E4B] text-white text-xs font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#1A1A1A]">{step.title}</h4>
                    <p className="text-xs text-[#5F5F5F] mt-1">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden shadow-md">
                <img
                  src="/images/HydraFacial device in use.jpg"
                  alt="HydraFacial machine performing treatment in Dubai clinic"
                  className="w-full h-[320px] object-cover"
                />
              </div>
              <p className="text-xs text-[#5F5F5F] italic text-center">
                Our clinic utilizes modern HydraFacial medical devices for precise, consistent results.
              </p>
            </div>
          </div>
        </div>

        {/* 11. Before & After Care — high-contrast Do/Don't grids */}
        <div id="care" className="scroll-mt-24 space-y-8">
          <div className="max-w-2xl">
            <SectionLabel>Clinical Care</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] mt-2">Before &amp; After Care</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F0F7F4] border border-[#1F5E4B]/10 rounded-2xl p-8 shadow-sm">
              <h4 className="text-lg font-bold text-[#1F5E4B] mb-6 flex items-center gap-2">
                <LucideIcons.Check className="w-5 h-5" /> Do&apos;s
              </h4>
              <ul className="space-y-3.5">
                {doList.map((d) => (
                  <li key={d} className="flex gap-2 text-sm text-[#1A1A1A]/80 font-medium">
                    <span className="text-[#1F5E4B]">•</span> {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F5F1EA] border border-[#D4A574]/20 rounded-2xl p-8 shadow-sm">
              <h4 className="text-lg font-bold text-[#1A1A1A] mb-6 flex items-center gap-2">
                <LucideIcons.X className="w-5 h-5 text-red-600" /> Don&apos;ts
              </h4>
              <ul className="space-y-3.5">
                {dontList.map((d) => (
                  <li key={d} className="flex gap-2 text-sm text-[#5F5F5F] font-medium">
                    <span className="text-red-500 font-bold">•</span> {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm max-w-xl mx-auto">
            <p className="text-sm text-[#5F5F5F]">
              <span className="font-bold text-[#1A1A1A]">Expected recovery:</span> Little to no downtime for most patients; mild, temporary redness may occur and typically resolves within a few hours.
            </p>
          </div>
        </div>

        {/* 12. Why Choose RamaCare */}
        <div id="why-us" className="scroll-mt-24 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] mt-2">Why Choose RamaCare Polyclinic?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w, index) => {
              const [title, desc] = w.split(' — ');
              return (
                <div key={index} className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-[#1F5E4B]/10 flex items-center justify-center text-[#1F5E4B] mb-4">
                    <LucideIcons.CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#1A1A1A] mb-2 leading-snug">{title}</h4>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 13. Clinical Resources & Related Services */}
        <div className="border-t border-gray-200 pt-16">
          <div className="grid md:grid-cols-2 gap-8 text-left bg-white border border-[#E9E2D6] rounded-3xl p-8 shadow-sm">
            {/* Related Services Column */}
            <div className="space-y-4">
              <h4 className="text-base font-bold text-[#1A1A1A] flex items-center gap-2">
                <span className="w-1.5 h-5 bg-[#D4A574] rounded-full inline-block"></span>
                Related Services & Care
              </h4>
              <p className="text-xs text-[#5F5F5F]">
                Explore other skin health and aesthetic services at RamaCare Polyclinic that may complement your HydraFacial care:
              </p>
              <div className="grid sm:grid-cols-2 gap-2 text-xs">
                <Link href="/services/aesthetic-dermatology-dubai/" className="text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1 transition-colors font-medium">
                  <LucideIcons.ChevronRight className="w-3 h-3 text-[#D4A574]" /> Aesthetic Dermatology
                </Link>
                <Link href="/services/acne-treatment-dubai/" className="text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1 transition-colors font-medium">
                  <LucideIcons.ChevronRight className="w-3 h-3 text-[#D4A574]" /> Acne Treatment
                </Link>
                <Link href="/services/acne-scar-treatment-dubai/" className="text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1 transition-colors font-medium">
                  <LucideIcons.ChevronRight className="w-3 h-3 text-[#D4A574]" /> Acne Scar Treatment
                </Link>
                <Link href="/services/melasma-treatment-dubai/" className="text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1 transition-colors font-medium">
                  <LucideIcons.ChevronRight className="w-3 h-3 text-[#D4A574]" /> Melasma Treatment
                </Link>
                <Link href="/services/rosacea-treatment-dubai/" className="text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1 transition-colors font-medium">
                  <LucideIcons.ChevronRight className="w-3 h-3 text-[#D4A574]" /> Rosacea Treatment
                </Link>
                <Link href="/services/pigmentation-dubai/" className="text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1 transition-colors font-medium">
                  <LucideIcons.ChevronRight className="w-3 h-3 text-[#D4A574]" /> Pigmentation Treatment
                </Link>
                <Link href="/services/hair-prp-dubai/" className="text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1 transition-colors font-medium">
                  <LucideIcons.ChevronRight className="w-3 h-3 text-[#D4A574]" /> Hair PRP Dubai
                </Link>
                <Link href="/book-appointment/" className="text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1 transition-colors font-medium">
                  <LucideIcons.ChevronRight className="w-3 h-3 text-[#D4A574]" /> Book Appointment
                </Link>
              </div>
            </div>

            {/* External References Column */}
            <div className="space-y-4">
              <h4 className="text-base font-bold text-[#1A1A1A] flex items-center gap-2">
                <span className="w-1.5 h-5 bg-[#D4A574] rounded-full inline-block"></span>
                Clinical Reference Guidelines
              </h4>
              <p className="text-xs text-[#5F5F5F]">
                Our clinical skin care protocols align with patient education standards from leading organizations:
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.aad.org" target="_blank" rel="noopener noreferrer" className="text-xs text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1 transition-colors font-medium">
                    <LucideIcons.ExternalLink className="w-3 h-3 text-[#1F5E4B] shrink-0" />
                    <span>American Academy of Dermatology (AAD) <span className="text-[10px] text-[#8C8C8C] font-normal">— general patient resources</span></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.mayoclinic.org" target="_blank" rel="noopener noreferrer" className="text-xs text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1 transition-colors font-medium">
                    <LucideIcons.ExternalLink className="w-3 h-3 text-[#1F5E4B] shrink-0" />
                    <span>Mayo Clinic <span className="text-[10px] text-[#8C8C8C] font-normal">— patient-facing skin care information</span></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.nhs.uk" target="_blank" rel="noopener noreferrer" className="text-xs text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1 transition-colors font-medium">
                    <LucideIcons.ExternalLink className="w-3 h-3 text-[#1F5E4B] shrink-0" />
                    <span>National Health Service (NHS) <span className="text-[10px] text-[#8C8C8C] font-normal">— health facts and guidance on non-surgical facials</span></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ Accordion */}
      <section id="faq" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] mt-2">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto bg-white border border-[#E9E2D6] rounded-3xl p-6 sm:p-8 shadow-sm divide-y divide-gray-100">
          {faqs.map((f, i) => (
            <div key={f.q} className="py-4 first:pt-0 last:pb-0">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 text-left py-2"
              >
                <span className="text-base font-bold text-[#1A1A1A]">{f.q}</span>
                <span className="shrink-0 text-[#1F5E4B] text-lg leading-none mt-1">
                  {openFaq === i ? <LucideIcons.Minus className="w-4 h-4" /> : <LucideIcons.Plus className="w-4 h-4" />}
                </span>
              </button>
              {openFaq === i && (
                <p className="text-sm text-[#5F5F5F] leading-relaxed pt-2 pb-2 pr-8">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 15. Premium Booking CTA Banner */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="rounded-3xl border border-[#E9E2D6] bg-[#F5F1EA] p-8 sm:p-12 text-center relative overflow-hidden shadow-md">
          <div className="absolute right-0 bottom-0 text-[#1F5E4B]/5 pointer-events-none">
            <LucideIcons.Sparkles className="w-64 h-64 translate-x-20 translate-y-20" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A]">Book Your HydraFacial Consultation Today</h2>
            <p className="text-base text-[#5F5F5F] leading-relaxed">
              HydraFacial cost Dubai-wide starts from AED 500 at RamaCare Polyclinic — but the real value is in getting a treatment tailored to your actual skin, under proper medical supervision.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <button onClick={handleCall} className="inline-flex items-center gap-2 rounded-xl bg-white border border-[#E9E2D6] px-6 py-3.5 text-sm font-bold text-[#1A1A1A] hover:border-[#1F5E4B] transition-all shadow-sm">
                <LucideIcons.Phone className="w-4 h-4 text-[#1F5E4B]" /> +971 4 286 2006
              </button>
              <button onClick={handleWhatsAppClick} className="inline-flex items-center gap-2 rounded-xl bg-white border border-[#E9E2D6] px-6 py-3.5 text-sm font-bold text-[#1A1A1A] hover:border-[#1F5E4B] transition-all shadow-sm">
                <LucideIcons.MessageCircle className="w-4 h-4 text-[#1F5E4B]" /> +971 56 659 7878
              </button>
              <button onClick={handleBookAppointment} className="inline-flex items-center gap-2 rounded-xl bg-[#1F5E4B] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#17493A] transition-all shadow-md transform hover:-translate-y-0.5">
                <LucideIcons.Calendar className="w-4 h-4" /> Book Appointment
              </button>
            </div>
            <p className="flex items-center justify-center gap-2 text-xs font-semibold text-[#5F5F5F]">
              <LucideIcons.MapPin className="w-4 h-4 text-[#1F5E4B]" /> Visit us in Jumeirah 1, Dubai
            </p>
          </div>
        </div>
        </div>
      {/* Content Reviewer Badge */}
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="/services/hydrafacial-cost-dubai/" />

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E9E2D6] shadow-lg z-40 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-[#1A1A1A]">HydraFacial starting from AED 500</p>
            <p className="text-xs text-[#5F5F5F]">Book your consultation today</p>
          </div>
          <button
            onClick={handleBookAppointment}
            className="flex items-center gap-2 bg-[#1F5E4B] text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold whitespace-nowrap"
          >
            <LucideIcons.Calendar className="w-5 h-5" />
            Book Consultation
          </button>
        </div>
      </div>


    </Layout>
  );
}