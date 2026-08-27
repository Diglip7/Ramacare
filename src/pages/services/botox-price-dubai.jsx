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
   Page data — sourced directly from the Botox Price Dubai content
   brief. Pricing is intentionally left as "AED X" / "AED XXX"
   placeholders per the brief's own note — replace before publishing.
------------------------------------------------------------------- */
const SITE_URL = 'https://ramacarepolyclinic.ae';
const PAGE_PATH = '/services/botox-price-dubai/';
const DOCTOR_NAME = 'Dr. Sahar Zomorrodi';

const priceFactors = [
  { icon: 'Stethoscope', title: 'Doctor Expertise', text: 'A physician who has spent years mapping facial muscles will use fewer, more precisely placed units than someone still building that skill.' },
  { icon: 'ShieldCheck', title: 'Clinic Standards', text: 'DHA-licensed facilities using authentic, properly stored botulinum toxin and trained medical staff generally price differently than unlicensed setups.' },
  { icon: 'Target', title: 'Treatment Area', text: "Forehead lines, frown lines, and crow's feet require different unit counts because the muscles involved differ in size and strength." },
  { icon: 'Syringe', title: 'Units Required', text: 'Botox is dosed in units, and the number needed depends entirely on your anatomy, not a fixed clinic menu.' },
  { icon: 'Activity', title: 'Muscle Strength', text: 'Naturally strong, active facial muscles may need more units than lighter muscle activity.' },
  { icon: 'Users', title: 'Gender Differences', text: 'Male patients often have denser, larger facial muscles, particularly in the forehead and glabella area, which can mean higher unit requirements.' },
  { icon: 'Sparkles', title: 'Desired Results', text: 'A natural, soft-movement look versus a fully frozen look calls for different dosing strategies.' },
  { icon: 'CalendarClock', title: 'Follow-Up Appointments', text: 'Touch-ups, review visits, and maintenance planning can factor into the overall cost of your treatment journey.' },
];

const ramaCareApproach = [
  { title: 'Customized Consultation', text: 'Before any needle comes near your face, your treatment is planned around your specific muscles, skin, and expression patterns.' },
  { title: 'DHA-Licensed Clinic', text: 'Our protocols, staff qualifications, and product sourcing meet the standards required for medical aesthetic treatments.' },
  { title: 'Experienced Doctor', text: `Treatments are carried out following assessment by ${DOCTOR_NAME}, who evaluates your facial anatomy before recommending a plan.` },
  { title: 'Transparent Pricing', text: "You'll know your estimated unit count and cost range before you agree to treatment, with no hidden extras." },
  { title: 'Treatment Planning', text: 'Your plan may combine different areas, dosing strategies, and follow-up timing based on your goals.' },
];

const priceTable = [
  { area: 'Forehead Botox', units: 'XX–XX units', price: 'Starting from AED XXX' },
  { area: 'Frown Lines', units: 'XX–XX units', price: 'Starting from AED XXX' },
  { area: "Crow's Feet", units: 'XX–XX units', price: 'Starting from AED XXX' },
  { area: 'Jawline Botox', units: 'XX–XX units', price: 'Starting from AED XXX' },
  { area: 'Masseter Botox', units: 'XX–XX units', price: 'Starting from AED XXX' },
  { area: 'Full Face Botox', units: 'Varies by plan', price: 'Customized' },
];

const priceInfluencers = [
  { title: 'Age', text: 'Skin elasticity and the depth of existing lines can influence dosing strategy.' },
  { title: 'Wrinkles', text: 'Static lines (visible at rest) versus dynamic lines (visible only when you move your face) may require different approaches.' },
  { title: 'Muscle Activity', text: 'More active, expressive muscles typically need more units to achieve the desired softening effect.' },
  { title: 'Previous Botox', text: 'If you\u2019ve had Botox before, your muscles may respond differently, sometimes requiring less product over time.' },
  { title: 'Facial Anatomy', text: 'Brow position, natural asymmetry, and bone structure all factor into a safe, natural-looking plan.' },
  { title: 'Desired Look', text: 'A subtle, "no one can tell" result and a more pronounced smoothing effect are planned differently.' },
  { title: 'Maintenance Schedule', text: 'How often you plan to return for touch-ups affects your long-term cost, not just your first visit.' },
];

const trustSigns = [
  'Is the clinic DHA-licensed?',
  'Is the product genuine, pharmaceutical-grade botulinum toxin, sourced and stored correctly?',
  'Is a qualified doctor performing the assessment and injection, or is it a technician with limited training?',
  'Is patient safety, sterility, and proper dosing prioritized over speed?',
];

const whyChoose = [
  'DHA Licensed — operating under Dubai Health Authority regulation and standards',
  `Experienced doctor — treatments are assessed and performed under the guidance of ${DOCTOR_NAME}`,
  'Personalized consultation — no generic treatment plans, every plan starts with your face',
  'Patient safety — sterile technique, genuine product, and proper medical protocols throughout',
  'Modern clinic — a comfortable, professional environment designed for medical aesthetic care',
  'Natural-looking results — dosing planned to soften lines without freezing expression',
  "Transparent pricing — you'll understand your unit count and cost before treatment begins",
];

const consultationSteps = [
  { icon: 'MessageSquare', title: 'Assessment', text: 'Your appointment begins with a discussion of your goals, medical history, and any previous aesthetic treatments.' },
  { icon: 'ScanFace', title: 'Facial Analysis', text: `${DOCTOR_NAME} examines muscle movement, skin quality, and facial symmetry.` },
  { icon: 'ClipboardList', title: 'Treatment Planning', text: 'A personalized plan is created, including recommended areas, estimated units, and expected price.' },
  { icon: 'FileText', title: 'Aftercare Instructions', text: 'Clear guidance on what to do (and avoid) in the hours and days following treatment.' },
  { icon: 'CalendarCheck', title: 'Follow-Up', text: 'Results are typically reviewed within two weeks to confirm the outcome matches your plan.' },
];

const timeline = [
  { mark: 'Day 0', label: 'Treatment', text: 'Injection session performed after facial assessment.' },
  { mark: 'Day 3–5', label: 'Onset', text: 'Most patients start noticing softening of lines.' },
  { mark: '2 Weeks', label: 'Full Effect', text: 'Complete results become visible; follow-up review typically happens here.' },
  { mark: '3–4 Months', label: 'Duration', text: 'Results generally last, varying by individual muscle activity and metabolism.' },
];

const risks = [
  'Temporary redness at injection sites',
  'Mild bruising',
  'Slight swelling',
  'Rare, temporary heaviness or asymmetry if muscles respond unevenly',
];

const faqs = [
  { q: 'How much does Botox cost in Dubai?', a: "Botox price in Dubai varies based on treatment area, units required, and the clinic's standards. There is no single fixed price, it depends on your individual assessment." },
  { q: 'How much does one Botox unit cost?', a: 'Cost per unit varies by clinic and product used. At RamaCare Polyclinic, we explain the per-unit cost during your consultation so you understand exactly how your total price is calculated.' },
  { q: 'How many units do I need?', a: 'This depends on the treatment area and your muscle strength. Forehead, frown lines, and crow\u2019s feet typically require different unit ranges, determined after facial assessment.' },
  { q: 'Is Botox painful?', a: 'Most patients describe it as a quick pinching sensation. A very fine needle is used, and discomfort is generally minimal and brief.' },
  { q: 'How long does Botox last?', a: 'Results typically last three to four months, though this varies from person to person.' },
  { q: 'Is consultation included in the Botox price?', a: 'Yes, your assessment with the doctor is part of the treatment process and helps determine your personalized plan and price.' },
  { q: 'Can men get Botox?', a: 'Yes. Male patients often have stronger facial muscles, which can mean a different unit requirement compared to female patients, but the treatment itself is suitable for both.' },
  { q: 'How often do I need Botox?', a: 'Most patients return every three to four months, though this can vary based on how your muscles respond over time.' },
  { q: 'Is Botox safe?', a: 'When performed by a qualified doctor using genuine product in a licensed clinic, Botox is considered a safe, well-established cosmetic treatment. Suitability is confirmed during your consultation.' },
  { q: 'Why do Botox prices vary so much between clinics?', a: 'Pricing differences usually come down to doctor experience, product authenticity, clinic licensing, and the number of units used, not just a random markup.' },
  { q: 'Does insurance cover Botox?', a: "Cosmetic Botox is generally not covered by health insurance, as it's considered an elective aesthetic treatment rather than a medical necessity." },
  { q: 'Can Botox prevent wrinkles?', a: 'Botox can soften the appearance of dynamic lines and, in some patients, reduce the deepening of certain lines over time by limiting repetitive muscle movement, though results vary.' },
  { q: 'Who should avoid Botox?', a: 'Pregnant or breastfeeding women, people with certain neuromuscular conditions, and those with active skin infections in the treatment area are generally advised against Botox. Your doctor will review your full medical history during consultation.' },
  { q: 'How soon can I return to work after Botox?', a: 'Most patients return to normal activities the same day, with only minor precautions like avoiding lying down or exercising for a few hours.' },
  { q: 'How do I book an appointment at RamaCare Polyclinic?', a: 'You can book a Botox consultation through our website, by calling the clinic directly, or by messaging us on WhatsApp.' },
  { q: 'Will Botox make my face look frozen?', a: 'Not when dosed appropriately. Our approach focuses on natural-looking softening of lines while preserving normal facial movement.' },
  { q: "What's the difference between Botox and dermal fillers?", a: 'Botox relaxes muscle activity to soften expression lines, while dermal fillers add volume to areas that have lost fullness. Many patients combine both for a complete rejuvenation plan.' },
  { q: 'Can I combine Botox with other treatments?', a: 'Yes, some patients combine Botox with treatments like HydraFacial or chemical peels as part of a broader skincare and anti-aging plan, discussed during consultation.' },
  { q: 'Do results look the same for everyone?', a: 'No. Results depend on your muscle strength, skin quality, and treatment plan, which is why consultation and personalized dosing matter more than a fixed price.' },
  { q: 'What should I avoid before my Botox appointment?', a: 'Your doctor may advise avoiding blood-thinning medications, alcohol, and certain supplements in the days leading up to treatment. This will be reviewed during your consultation.' },
];

const related = [
  { icon: 'Syringe', label: 'Botox Treatment Dubai', href: '/services/botox-dubai' },
  { icon: 'Droplet', label: 'Fillers Dubai', href: '/services/fillers-in-dubai' },
  { icon: 'Sparkles', label: 'HydraFacial Dubai', href: '/services/hydrafacial-dubai' },
  { icon: 'HeartPulse', label: 'PRP Hair Treatment Dubai', href: '/services/hair-prp-dubai' },
  { icon: 'Stethoscope', label: 'Aesthetic Dermatology Dubai', href: '/services/aesthetic-dermatology-dubai' },
];

/* ------------------------------------------------------------------
   JSON-LD schema — @graph structure from the brief's appendix,
   with the full 20-item FAQ list (brief sampled 10 for the example).
------------------------------------------------------------------- */
function buildSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalClinic',
        '@id': SITE_URL + '/#clinic',
        name: 'RamaCare Polyclinic',
        url: SITE_URL + '/',
        image: SITE_URL + '/images/logo.jpg',
        priceRange: 'AED',
        medicalSpecialty: 'Dermatology',
        address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
        hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'DHA License' },
        employee: { '@type': 'Physician', '@id': SITE_URL + '/#dr-sahar-zomorrodi' },
      },
      {
        '@type': 'Physician',
        '@id': SITE_URL + '/#dr-sahar-zomorrodi',
        name: DOCTOR_NAME,
        medicalSpecialty: 'Aesthetic Medicine',
        worksFor: { '@id': SITE_URL + '/#clinic' },
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Botox Treatment',
        procedureType: 'https://schema.org/NoninvasiveProcedure',
        bodyLocation: 'Face',
        howPerformed: 'Injection of botulinum toxin performed after facial assessment by a licensed physician.',
        provider: { '@id': SITE_URL + '/#clinic' },
      },
      {
        '@type': 'Service',
        name: 'Botox Price Dubai',
        serviceType: 'Cosmetic Injectable Treatment',
        provider: { '@id': SITE_URL + '/#clinic' },
        areaServed: { '@type': 'City', name: 'Dubai' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'AED',
          priceSpecification: { '@type': 'PriceSpecification', price: 'Varies by consultation', priceCurrency: 'AED' },
          availability: 'https://schema.org/InStock',
          url: SITE_URL + PAGE_PATH,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
          { '@type': 'ListItem', position: 2, name: 'Botox Price Dubai', item: SITE_URL + PAGE_PATH },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };
}

/* ------------------------------------------------------------------
   Small building blocks — physician-led hero, zigzag rows, toggle
   chips, and a horizontal timeline: a fourth distinct visual set.
------------------------------------------------------------------- */
function IconTile({ name, className = 'w-5 h-5 text-[#1F5E4B]' }) {
  const Icon = LucideIcons[name] || LucideIcons.Circle;
  return <Icon className={className} />;
}

export default function BotoxPriceDubaiPage() {
  const { showToast, ToastComponent } = useToast();
  const [openFactor, setOpenFactor] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const router = useRouter();

  const handleWhatsAppClick = (customMessage) => {
    const message = encodeURIComponent(
      customMessage || "Hello RamaCare, I'd like to know more about Botox pricing and book a consultation."
    );
    window.open(`https://wa.me/971566597878?text=${message}`, '_blank');
  };
  const handleBookAppointment = () => router.push('/book-appointment');
  const handleCall = () => window.open('tel:+97142862006', '_self');

  const schema = buildSchema();
  const faqHalf = Math.ceil(faqs.length / 2);
  const faqCol1 = faqs.slice(0, faqHalf);
  const faqCol2 = faqs.slice(faqHalf);

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">Botox Price Dubai | RamaCare Polyclinic</title>
        <meta
          name="description"
          content="Curious about Botox price in Dubai? See what affects Botox cost at DHA-licensed RamaCare Polyclinic and book a personalized consultation today."
          key="description"
        />
        <link rel="canonical" href={SITE_URL + PAGE_PATH} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Botox Price Dubai | RamaCare Polyclinic" />
        <meta
          property="og:description"
          content="Curious about Botox price in Dubai? See what affects Botox cost at DHA-licensed RamaCare Polyclinic and book a personalized consultation today."
        />
        <meta property="og:url" content={SITE_URL + PAGE_PATH} />
        <meta property="og:image" content={SITE_URL + '/images/botox-hyper.jpg'} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>

      {/* ============ HERO — physician-led, image left / text right ============ */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-10 px-6 py-14 lg:py-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden order-2 lg:order-1"
          >
            <img
              src="/images/botox-hyper.jpg"
              alt={`Botox consultation with ${DOCTOR_NAME} at RamaCare Polyclinic Dubai`}
              className="w-full h-[360px] sm:h-[440px] object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 backdrop-blur px-4 py-3 flex items-center gap-2">
              <LucideIcons.ShieldCheck className="w-4 h-4 text-[#1F5E4B] shrink-0" />
              <p className="text-xs text-[#1A1A1A] font-medium">DHA-Licensed · Assessed by {DOCTOR_NAME}</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="order-1 lg:order-2">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#1A1A1A] leading-[1.15] mb-6">
              Botox Price Dubai
            </h1>
            <p className="text-[#5F5F5F] leading-relaxed mb-4">
              If you&apos;ve been typing &quot;Botox price Dubai&quot; into Google late at night, comparing clinic websites, and still coming away with more questions than answers, you&apos;re not alone. Botox is one of the most requested cosmetic treatments in Dubai, yet very few clinics explain clearly why the number on the price list can change so much from one person to the next.
            </p>
            <p className="text-[#5F5F5F] leading-relaxed mb-4">
              At RamaCare Polyclinic, we get asked about Botox price in Dubai almost every single day, usually by people who&apos;ve already looked at three or four other clinics and received three or four different quotes. That&apos;s not because someone is being overcharged or undercharged. It&apos;s because Botox pricing is never really about a flat fee, it&apos;s about a treatment plan built around your face, your muscles, and your goals.
            </p>
            <p className="text-[#5F5F5F] leading-relaxed mb-8">
              Whether you&apos;ve searched for Botox near me in Dubai, compared quotes for Botox injections in Dubai, or want to understand anti-wrinkle treatment in Dubai before committing, this guide breaks it all down in plain language.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={handleBookAppointment} className="inline-flex items-center gap-2 rounded-md bg-[#1F5E4B] px-6 py-3 text-sm font-medium text-white hover:bg-[#17493A] transition-colors">
                <LucideIcons.Calendar className="w-4 h-4" /> Book a Botox Consultation
              </button>
              <button onClick={() => handleWhatsAppClick()} className="inline-flex items-center gap-2 rounded-md border border-[#1F5E4B] px-6 py-3 text-sm font-medium text-[#1F5E4B] bg-white hover:bg-gray-50 transition-colors">
                <LucideIcons.MessageCircle className="w-4 h-4" /> WhatsApp Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ What determines price — zigzag rows ============ */}
      <section className="bg-[#F5F1EA] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-3">What Determines Botox Price in Dubai?</h2>
          <p className="text-[#5F5F5F] leading-relaxed mb-10">
            There isn&apos;t a single figure that applies to everyone, and any clinic that quotes you an exact price before seeing your face in person is skipping a step. Here&apos;s what genuinely affects Botox price in Dubai:
          </p>
          <div className="space-y-0">
            {priceFactors.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`flex items-start gap-5 py-5 ${i !== priceFactors.length - 1 ? 'border-b border-[#E9E2D6]' : ''} ${i % 2 === 1 ? 'sm:flex-row-reverse sm:text-right' : ''}`} >
                <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0">
                  <IconTile name={f.icon} />
                </div>
                <div>
                  <p className="text-base font-semibold text-[#1A1A1A]">{f.title}</p>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed mt-1">{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-[#5F5F5F] leading-relaxed mt-8">
            Because of all this, when people ask about Botox cost Dubai clinics charge, the honest answer is: it depends on you. Anyone quoting a single number for &quot;Botox&quot; without seeing your face first is guessing.
          </p>
        </div>
      </section>

      {/* ============ Average price — editorial pull-quote block ============ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">Average Botox Price in Dubai</h2>
        <p className="text-[#5F5F5F] leading-relaxed mb-4">
          Across Dubai, Botox pricing generally reflects the clinic&apos;s licensing status, the treating doctor&apos;s qualifications, the brand of botulinum toxin used, and the complexity of the treatment area. Clinics operating under DHA (Dubai Health Authority) regulation, using genuine pharmaceutical-grade product and doctor-led assessments, tend to sit in a different pricing bracket than walk-in beauty salons offering &quot;quick Botox,&quot; which is not something you should consider for a medical injectable in the first place.
        </p>
        <blockquote className="border-l-4 border-[#1F5E4B] pl-5 py-1 my-6 text-[#1A1A1A] text-lg font-medium leading-relaxed italic">
          We won&apos;t quote unrealistic numbers here because we&apos;d rather you understand the real drivers of price than chase a headline figure that doesn&apos;t hold up once you&apos;re in the consultation room.
        </blockquote>
        <p className="text-[#5F5F5F] leading-relaxed">
          It&apos;s worth being cautious of prices that sound too good to be true. Botox is a prescription medical product, and the true Botox cost in Dubai should always include the doctor&apos;s assessment, the genuine product, sterile technique, and proper aftercare guidance, not just the injection itself.
        </p>
      </section>

      {/* ============ RamaCare approach ============ */}
      <section className="bg-[#F0F7F4] py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-3">Botox Price at RamaCare Polyclinic</h2>
            <p className="text-[#5F5F5F] leading-relaxed mb-6">
              At RamaCare Polyclinic, every Botox treatment in Dubai begins with a proper consultation, not a price list handed over at reception. Here&apos;s what that means for you:
            </p>
            <ul className="space-y-4">
              {ramaCareApproach.map((r) => (
                <li key={r.title} className="flex gap-3">
                  <LucideIcons.Check className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-[#1A1A1A]">{r.title}</p>
                    <p className="text-sm text-[#5F5F5F] leading-relaxed">{r.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button onClick={() => handleWhatsAppClick("Hello RamaCare, I'd like to check my personalized Botox cost and book a consultation.")} className="inline-flex items-center gap-2 mt-7 rounded-md bg-[#1F5E4B] px-6 py-3 text-sm font-medium text-white hover:bg-[#17493A] transition-colors">
              <LucideIcons.MessageCircle className="w-4 h-4" /> Check Your Personalized Botox Cost
            </button>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/filler.jpg"
              alt="DHA-licensed doctor performing Botox injection in Dubai clinic"
              className="w-full h-[360px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============ Cost by treatment area — table ============ */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-3">Botox Cost by Treatment Area</h2>
        <p className="text-[#5F5F5F] leading-relaxed mb-4">
          Botox pricing at RamaCare Polyclinic is calculated on a per-unit basis, starting from AED X per unit, rather than a flat fee per treatment area. This is because {DOCTOR_NAME} determines the exact number of units your face needs during your consultation, based on your muscle strength and desired outcome, so the same &quot;treatment area&quot; can cost differently for two different patients.
        </p>
        <p className="text-sm text-[#5F5F5F] leading-relaxed mb-6">
          The table below gives an indicative starting range for common treatment areas, calculated using the per-unit rate. These are starting figures only — your actual Botox price in Dubai will be confirmed after your consultation and facial assessment.
        </p>

        <div className="relative overflow-hidden rounded-xl border border-[#E9E2D6]">
          <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-widest text-[#5F5F5F] bg-[#F5F1EA] px-2.5 py-1 rounded-full">Indicative Only</span>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1A1A1A] text-white">
                <th className="text-left px-5 py-3 font-medium">Treatment Area</th>
                <th className="text-left px-5 py-3 font-medium">Typical Unit Range</th>
                <th className="text-right px-5 py-3 font-medium">Starting Price</th>
              </tr>
            </thead>
            <tbody>
              {priceTable.map((row, i) => (
                <tr key={row.area} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F1EA]'}>
                  <td className="px-5 py-3.5 border-t border-[#E9E2D6] font-medium text-[#1A1A1A]">{row.area}</td>
                  <td className="px-5 py-3.5 border-t border-[#E9E2D6] text-[#5F5F5F]">{row.units}</td>
                  <td className="px-5 py-3.5 border-t border-[#E9E2D6] text-right font-semibold text-[#1F5E4B]">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#5F5F5F] leading-relaxed mt-3">
          Because pricing is unit-based, we&apos;d always recommend comparing the Botox per unit price in Dubai across clinics rather than comparing only the final total. Many patients combine areas, for example, forehead and frown lines together, which changes the total unit count and, therefore, the total price.
        </p>
        <button onClick={() => handleWhatsAppClick(`Hello RamaCare, I'd like to speak with ${DOCTOR_NAME} to find out which Botox treatment areas suit my goals.`)} className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-[#1F5E4B] underline underline-offset-4 hover:text-[#17493A]">
          Speak with {DOCTOR_NAME} to find out which treatment areas suit your goals →
        </button>
      </section>

      {/* ============ Cost per unit — callout ============ */}
      <section className="bg-[#F5F1EA] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">Botox Cost Per Unit</h2>
          <p className="text-[#5F5F5F] leading-relaxed mb-6">
            One of the most common points of confusion is the difference between &quot;total treatment price&quot; and &quot;Botox cost per unit.&quot; Understanding this distinction helps you compare quotes properly instead of just looking at the bottom line.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-white border border-[#E9E2D6] p-5">
              <p className="text-sm font-semibold text-[#1A1A1A] mb-2">What is one unit?</p>
              <p className="text-sm text-[#5F5F5F] leading-relaxed">
                A unit is the standard measurement used to dose botulinum toxin — a measure of biological activity, not liquid volume — the same system used across reputable clinics globally.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-[#E9E2D6] p-5">
              <p className="text-sm font-semibold text-[#1A1A1A] mb-2">How many units are usually required?</p>
              <p className="text-sm text-[#5F5F5F] leading-relaxed">
                This varies by treatment area and by patient. Your doctor determines the right number after examining your muscle movement.
              </p>
            </div>
          </div>
          <p className="text-sm text-[#5F5F5F] leading-relaxed mt-6">
            Two people can pay the same total amount for very different numbers of units, or pay different totals for the same treatment area because their muscle strength differs. This is why we always encourage patients to ask about Botox cost per unit in Dubai clinics are quoting, so you understand what you&apos;re actually paying for.
          </p>
        </div>
      </section>

      {/* ============ Factors that influence price — toggle chips ============ */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-3">Factors That Influence Price</h2>
        <p className="text-[#5F5F5F] leading-relaxed mb-8">
          Beyond treatment area and doctor expertise, a number of individual factors shape your final Botox price in Dubai. Tap each one to learn more.
        </p>
        <div className="flex flex-wrap gap-2.5 mb-6">
          {priceInfluencers.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setOpenFactor(openFactor === i ? null : i)}
              className={`text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
                openFactor === i ? 'bg-[#1F5E4B] text-white border-[#1F5E4B]' : 'bg-white text-[#1A1A1A] border-[#E9E2D6] hover:border-[#1F5E4B]'
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>
        {openFactor !== null && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl bg-[#F0F7F4] p-6">
            <p className="text-sm font-semibold text-[#1A1A1A] mb-1.5">{priceInfluencers[openFactor].title}</p>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">{priceInfluencers[openFactor].text}</p>
          </motion.div>
        )}
      </section>

      {/* ============ Is cheap Botox worth it — trust panel ============ */}
      <section className="bg-[#1F5B4E] py-16 px-6 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Is Cheap Botox Worth It?</h2>
          <p className="text-white/70 leading-relaxed mb-8">
            This is a question we take seriously, because Botox is a medical treatment, not a beauty add-on. When you see a heavily discounted Botox price in Dubai, it&apos;s worth asking a few questions before booking:
          </p>
          <div className="rounded-xl bg-white/5 border border-white/15 p-6 mb-6">
            <ul className="space-y-3">
              {trustSigns.map((t) => (
                <li key={t} className="flex gap-3">
                  <LucideIcons.HelpCircle className="w-4 h-4 text-[#6FA98D] shrink-0 mt-0.5" />
                  <span className="text-sm text-white/85 leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Unlicensed or underpriced Botox can carry real risks, including poor product handling, incorrect dosing, and a lack of medical oversight if something doesn&apos;t go as expected. When it comes to something injected into your face, the cheapest option is rarely the smartest one.
          </p>
        </div>
      </section>

      {/* ============ Why choose RamaCare ============ */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-5">Why Choose RamaCare Polyclinic?</h2>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-1">
          {whyChoose.map((w) => (
            <div key={w} className="flex gap-2.5 py-2.5 border-b border-gray-100">
              <LucideIcons.Check className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" />
              <p className="text-sm text-[#1A1A1A]/85 leading-relaxed">{w}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-[#5F5F5F] leading-relaxed mt-6">
          Patients searching for the best Botox clinic in Dubai are usually looking for exactly these fundamentals: a properly licensed Botox clinic in Dubai, an experienced physician, and honest pricing. If you&apos;re comparing clinics for Botox treatment in Dubai, we&apos;d encourage you to ask any clinic these same questions, not just RamaCare Polyclinic. Your face deserves that level of scrutiny.
        </p>
        <div className="flex flex-wrap gap-3 mt-5">
          <button onClick={handleCall} className="inline-flex items-center gap-2 text-sm font-medium text-[#1F5E4B] underline underline-offset-4"><LucideIcons.Phone className="w-4 h-4" /> Call Now</button>
          <button onClick={() => handleWhatsAppClick()} className="inline-flex items-center gap-2 text-sm font-medium text-[#1F5E4B] underline underline-offset-4"><LucideIcons.MessageCircle className="w-4 h-4" /> WhatsApp Now</button>
        </div>
      </section>

      {/* ============ Consultation process — flow cards ============ */}
      <section className="bg-[#F5F1EA] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-2">Consultation Process</h2>
          <p className="text-[#5F5F5F] leading-relaxed mb-10 max-w-2xl">
            Every Botox consultation in Dubai at RamaCare Polyclinic follows the same structured process, so nothing is rushed and nothing is guessed.
          </p>
          <div className="mb-10 rounded-2xl overflow-hidden">
            <img
              src="/images/Facial assessment consultation for Botox price.jpg"
              alt="Facial assessment consultation for Botox price Dubai planning"
              className="w-full h-[260px] object-cover"
            />
          </div>
          <div className="flex flex-wrap items-stretch gap-3">
            {consultationSteps.map((s, i) => (
              <React.Fragment key={s.title}>
                <div className="flex-1 min-w-[170px] rounded-xl bg-white border border-[#E9E2D6] p-5">
                  <div className="w-9 h-9 rounded-full bg-[#F0F7F4] flex items-center justify-center mb-3">
                    <IconTile name={s.icon} className="w-4 h-4 text-[#1F5E4B]" />
                  </div>
                  <p className="text-sm font-semibold text-[#1A1A1A]">{s.title}</p>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed mt-1">{s.text}</p>
                </div>
                {i < consultationSteps.length - 1 && (
                  <div className="hidden lg:flex items-center text-[#1F5E4B]/40">
                    <LucideIcons.ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Before & after — horizontal timeline ============ */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-8">Before &amp; After Expectations</h2>
        <div className="relative">
          <div className="hidden sm:block absolute top-4 left-0 right-0 h-px bg-[#E9E2D6]" />
          <div className="grid sm:grid-cols-4 gap-8 sm:gap-4">
            {timeline.map((t) => (
              <div key={t.mark} className="relative">
                <div className="hidden sm:block w-2.5 h-2.5 rounded-full bg-[#1F5E4B] mb-4" />
                <p className="text-xs font-semibold uppercase tracking-widest text-[#1F5E4B]">{t.mark}</p>
                <p className="text-sm font-semibold text-[#1A1A1A] mt-1">{t.label}</p>
                <p className="text-xs text-[#5F5F5F] leading-relaxed mt-1">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-[#5F5F5F] leading-relaxed mt-8">
          Many patients return every few months to maintain results, and some find that with consistent treatment, muscles gradually require slightly less product over time.
        </p>
      </section>

      {/* ============ Risks & safety ============ */}
      <section className="bg-[#F0F7F4] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">Risks and Safety</h2>
          <p className="text-[#5F5F5F] leading-relaxed mb-5">
            As with any injectable treatment, Botox carries some possible temporary side effects, which your doctor will discuss with you during consultation:
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 mb-6">
            {risks.map((r) => (
              <li key={r} className="flex gap-2.5 text-sm text-[#1A1A1A]/85 bg-white rounded-lg border border-[#E9E2D6] px-4 py-3">
                <LucideIcons.Dot className="w-4 h-4 text-[#1F5E4B] shrink-0" /> {r}
              </li>
            ))}
          </ul>
          <p className="text-sm text-[#5F5F5F] leading-relaxed mb-6">
            Aftercare typically includes avoiding lying down, strenuous exercise, and facial massage for a set period after treatment, along with avoiding touching the treated area.
          </p>
          <div className="flex gap-3 rounded-lg border border-amber-200 bg-amber-50 px-5 py-4 mb-8">
            <LucideIcons.AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-900 leading-relaxed">
              <span className="font-semibold">When to contact your doctor:</span> If you notice unusual swelling, drooping, or symptoms that concern you beyond what was explained during your consultation, reach out to the clinic promptly rather than waiting it out.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              src="/images/Post-Botox aftercare guidance at RamaCare Polyclinic.jpg"
              alt="Post-Botox aftercare guidance at RamaCare Polyclinic"
              className="w-full h-[240px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============ FAQ — two-column split ============ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-8">Frequently Asked Questions</h2>
        <div className="grid lg:grid-cols-2 gap-x-10">
          {[faqCol1, faqCol2].map((col, colIdx) => (
            <div key={colIdx} className={colIdx === 0 ? 'lg:border-r lg:border-[#E9E2D6] lg:pr-10' : ''}>
              {col.map((f, idx) => {
                const globalIdx = colIdx === 0 ? idx : faqHalf + idx;
                const isOpen = openFaq === globalIdx;
                return (
                  <div key={f.q} className="border-b border-gray-100 py-4">
                    <button onClick={() => setOpenFaq(isOpen ? null : globalIdx)} className="w-full flex items-start justify-between gap-3 text-left">
                      <span className="text-sm text-[#1A1A1A]">
                        <span className="font-semibold text-[#1F5E4B] mr-1.5">Q{globalIdx + 1}.</span>
                        {f.q}
                      </span>
                      <LucideIcons.ChevronDown className={`w-4 h-4 text-[#5F5F5F] shrink-0 mt-0.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && <p className="text-sm text-[#5F5F5F] leading-relaxed mt-2 pl-6">{f.a}</p>}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      {/* ============================================== */}
      {/* CLINICAL RESOURCES & RELATED SERVICES          */}
      {/* ============================================== */}
      <section className="bg-[#F9F7F2] py-16 px-6 border-t border-gray-200">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 text-left">
            {/* Related Services Column */}
            <div className="lg:col-span-6 space-y-6">
              <h4 className="text-lg font-bold text-[#1A5F3F] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#D4A574] rounded-full inline-block"></span>
                Related Services & Care
              </h4>
              <p className="text-sm text-[#5F5F5F] mb-4">
                Explore other dermatology and skin health services at RamaCare Polyclinic that may complement your Botox care:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/botox-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                  <LucideIcons.ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Botox Treatment Dubai
                </Link>
                <Link href="/services/fillers-in-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                  <LucideIcons.ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Dermal Fillers
                </Link>
                <Link href="/services/hydrafacial-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                  <LucideIcons.ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> HydraFacial Dubai
                </Link>
                <Link href="/services/hair-prp-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                  <LucideIcons.ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> PRP Hair Treatment
                </Link>
                <Link href="/services/aesthetic-dermatology-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                  <LucideIcons.ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Aesthetic Dermatology
                </Link>
                <Link href="/services/chemical-peel-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                  <LucideIcons.ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Chemical Peel
                </Link>
                <Link href="/contact-us/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                  <LucideIcons.ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Contact Us
                </Link>
                <Link href="/book-appointment/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                  <LucideIcons.ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Book Appointment
                </Link>
              </div>
            </div>

            {/* External References Column */}
            <div className="lg:col-span-6 space-y-6">
              <h4 className="text-lg font-bold text-[#1A5F3F] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#D4A574] rounded-full inline-block"></span>
                Clinical Reference Guidelines
              </h4>
              <p className="text-sm text-[#5F5F5F] mb-4">
                Our clinical injection protocols align with standard guidelines established by leading dermatology and health organizations:
              </p>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.aad.org" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <LucideIcons.ExternalLink className="w-3.5 h-3.5 text-[#1F5E4B] flex-shrink-0" />
                    <span>American Academy of Dermatology (AAD) <span className="text-xs text-[#8C8C8C] font-normal">— general patient resources on botulinum toxin treatments</span></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.mayoclinic.org" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <LucideIcons.ExternalLink className="w-3.5 h-3.5 text-[#1F5E4B] flex-shrink-0" />
                    <span>Mayo Clinic <span className="text-xs text-[#8C8C8C] font-normal">— patient-facing guide to Botox procedure risks and outcomes</span></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.who.int" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <LucideIcons.ExternalLink className="w-3.5 h-3.5 text-[#1F5E4B] flex-shrink-0" />
                    <span>World Health Organization (WHO) <span className="text-xs text-[#8C8C8C] font-normal">— international health guidelines and standards</span></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Final CTA — centered physician panel ============ */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="rounded-2xl border border-[#E9E2D6] bg-gradient-to-b from-[#F0F7F4] to-white p-10">
          <div className="w-14 h-14 rounded-full bg-[#1F5E4B] text-white flex items-center justify-center mx-auto mb-5">
            <LucideIcons.Stethoscope className="w-6 h-6" />
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1A1A1A] mb-2">Ready to Understand Your Botox Price?</h2>
          <p className="text-sm text-[#5F5F5F] leading-relaxed mb-6 max-w-lg mx-auto">
            Visit our Home Page, reach out via our Contact Page, or go straight to booking your consultation with {DOCTOR_NAME} to get a quote tailored to your face, not a generic estimate.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={handleBookAppointment} className="inline-flex items-center gap-2 rounded-md bg-[#1F5E4B] px-6 py-3 text-sm font-medium text-white hover:bg-[#17493A] transition-colors">
              <LucideIcons.Calendar className="w-4 h-4" /> Book Appointment
            </button>
            <button onClick={() => handleWhatsAppClick()} className="inline-flex items-center gap-2 rounded-md border border-[#1F5E4B] px-6 py-3 text-sm font-medium text-[#1F5E4B] bg-white hover:bg-gray-50 transition-colors">
              <LucideIcons.MessageCircle className="w-4 h-4" /> WhatsApp Now
            </button>
          </div>
        </div>

        <p className="text-xs text-[#5F5F5F] leading-relaxed mt-8 text-left">
          <span className="font-medium text-[#1A1A1A]">Medical Disclaimer:</span> Botox pricing outlined on this page is provided for general informational purposes only and does not constitute a fixed quote. Final Botox price in Dubai is determined on an individual basis following an in-person consultation and facial assessment by {DOCTOR_NAME} or another qualified physician at RamaCare Polyclinic. Treatment suitability, recommended dosage, and expected outcomes are determined solely by the treating doctor based on each patient&apos;s medical history and facial anatomy. Results vary from person to person, and no specific outcome is guaranteed. This content does not replace professional medical advice; please consult our clinical team directly to discuss whether Botox treatment is appropriate for you.
        </p>
        </section>
      {/* Content Reviewer Badge */}
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="/services/botox-price-dubai/" />

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E9E2D6] shadow-lg z-40 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-[#1A1A1A]">Get your personalized Botox quote</p>
            <p className="text-xs text-[#5F5F5F]">Assessed by {DOCTOR_NAME}</p>
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