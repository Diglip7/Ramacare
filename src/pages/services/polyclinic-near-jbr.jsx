import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useToast } from '../../../components/Toast';
import { useRouter } from 'next/router';

/* ------------------------------------------------------------------
   Page data — sourced directly from the Polyclinic Near JBR content
   brief. No SEO metadata, image list, or schema list was supplied in
   this brief (unlike prior briefs), so title/description/schema/
   images below are reasonably constructed from the article content
   itself, following this site's existing conventions.

   Signature motif: proximity/route — since the entire page is about
   how close and easy RamaCare is to reach from JBR, a route visual
   anchors the hero and a "journey map" carries through the treatment
   process and service-area sections.

   Text sizing: body copy uses text-sm (14px); hero leads use
   text-base (16px).
 ------------------------------------------------------------------- */
const SITE_URL = 'https://ramacarepolyclinic.ae';
const PAGE_PATH = '/services/polyclinic-near-jbr';

const whyChoose = [
  { icon: 'ShieldCheck', title: 'DHA Licensed & Regulated Care', text: 'Every doctor, treatment protocol, and piece of equipment meets Dubai Health Authority standards — your assurance of regulated, monitored, consistent quality.' },
  { icon: 'Users', title: 'Experienced Specialists', text: 'DHA licensed doctors across general medicine, physiotherapy, dermatology, dental care, and Ayurveda, each bringing years of hands-on clinical experience.' },
  { icon: 'Microscope', title: 'Modern Facilities & Diagnostics', text: 'Modern diagnostic and treatment technology lets our doctors assess conditions thoroughly and design treatment plans based on evidence, not assumption.' },
  { icon: 'Navigation', title: 'A Short, Convenient Drive from JBR', text: 'Within easy reach of JBR, Dubai Marina, Bluewaters Island, and surrounding communities — manageable drive, stress-free parking.' },
  { icon: 'Home', title: 'Family Healthcare Under One Roof', text: 'We accommodate children, adults, and seniors, with doctors who adjust their style to the patient in front of them.' },
  { icon: 'UserCheck', title: 'Personalized Treatment', text: 'Every consultation begins with a genuine conversation about your symptoms, history, and lifestyle before any treatment plan is proposed.' },
  { icon: 'Sparkles', title: 'A Comfortable, Welcoming Environment', text: 'Calm, clean reception and treatment spaces, with a friendly front-desk team that makes check-in simple.' },
  { icon: 'Wallet', title: 'Affordable, Transparent Healthcare', text: "Upfront about consultation fees and treatment costs before you commit, and we work with a range of insurance providers." },
  { icon: 'Heart', title: 'A Patient-First Philosophy', text: 'Listening before prescribing, explaining before treating, and following up after every visit to make sure your recovery stays on track.' },
];

const departments = [
  {
    icon: 'Activity',
    name: 'Physiotherapy',
    text: "Our physiotherapy department serves anyone dealing with pain, stiffness, or reduced mobility — from office workers with desk-related back pain to athletes recovering from injury and older adults managing arthritis. We treat conditions including back pain, neck pain, shoulder pain, sciatica, frozen shoulder, sports injuries, and post-surgical rehabilitation.\n\nOur physiotherapists begin with a detailed clinical assessment to understand the root cause of your discomfort, not just the symptom. From there, we build a personalized treatment approach combining manual therapy, targeted exercises, and modern rehabilitation techniques designed around your daily life and recovery goals.\n\nThe benefit of physiotherapy at a multi-specialty polyclinic is coordination — if your pain is linked to a broader medical issue, our physiotherapists can consult directly with our general physicians without you needing a separate referral trip across the city.",
    cta: 'Book a Physiotherapy Consultation',
  },
  {
    icon: 'Smile',
    name: 'Dental Care',
    text: 'Dental discomfort has a way of disrupting everything else, and our dental team is here to address it promptly and comfortably. We treat tooth pain, gum disease, cavities, and general oral health concerns, alongside services like teeth whitening and dental veneers.\n\nOur approach starts with a thorough oral examination and honest conversation about your options, whether that means a straightforward filling or a more involved treatment plan. We prioritize minimally invasive techniques wherever appropriate.\n\nFamilies searching for a reliable dental clinic near JBR appreciate having pediatric-friendly and adult dental care available in the same clinic.',
    cta: 'Schedule a Dental Consultation',
  },
  {
    icon: 'Sun',
    name: 'Dermatology & Aesthetic Medicine',
    text: 'Skin concerns are deeply personal, and our dermatology team treats them with the seriousness they deserve. We commonly help patients with acne, pigmentation, hair loss, and general skin health, alongside aesthetic treatments like HydraFacial, skin boosters, and PRP hair treatments.\n\nEvery dermatology visit begins with an honest skin assessment — no upselling, no unnecessary procedures. Our doctors explain what’s causing your concern and outline realistic treatment timelines before you commit to anything.',
    cta: 'Book a Dermatology Consultation',
  },
  {
    icon: 'Stethoscope',
    name: 'General Medicine',
    text: "Our general medicine department is often the first stop for patients dealing with everyday health issues — colds, infections, fatigue, digestive discomfort, and routine checkups. Our doctors take time to understand your full health picture rather than rushing through a checklist.\n\nWe treat acute illnesses, manage chronic conditions like diabetes and health concerns, and provide ongoing primary healthcare that builds a real doctor-patient relationship over time. When a concern needs specialist input, our general physicians coordinate directly with our in-house specialists.",
    cta: 'Book a General Medicine Consultation',
  },
  {
    icon: 'Leaf',
    name: 'Ayurveda',
    text: 'For patients interested in a more holistic path to wellness, our Ayurveda department offers traditional treatments rooted in centuries-old practice, adapted thoughtfully for modern patients. We commonly support patients dealing with chronic pain, joint issues, stress, digestive imbalances, and general fatigue.\n\nOur Ayurvedic consultations begin with an assessment of your constitution, lifestyle, and specific concerns, followed by a tailored plan that may include therapies, dietary guidance, and lifestyle adjustments.',
    cta: 'Speak to Our Ayurveda Specialist',
  },
  {
    icon: 'ClipboardCheck',
    name: 'Preventive Health Checkups',
    text: "Catching a problem early is almost always easier and less costly than treating it late. Our preventive health checkups are designed for anyone who wants a clear picture of their current health.\n\nThese checkups typically include a general physical assessment, relevant screenings, and a conversation about risk factors based on your age, lifestyle, and family history.",
    cta: 'Book Your Preventive Health Screening',
  },
  {
    icon: 'HeartPulse',
    name: 'Wellness Programs',
    text: 'Beyond treating illness, RamaCare supports patients who simply want to feel and function better day to day. Our wellness programs are built around sustainable lifestyle changes — nutrition guidance, stress management, activity planning, and follow-up support.\n\nEach plan is personalized rather than generic, based on a proper consultation with our team.',
    cta: 'Ask About Our Wellness Programs',
  },
];

const conditionGroups = [
  {
    dept: 'Physiotherapy',
    items: [
      { name: 'Back Pain', text: 'Often linked to poor posture, prolonged sitting, or muscle strain. We assess spine alignment and movement patterns before building a personalized treatment approach.' },
      { name: 'Neck Pain', text: 'Frequently stems from desk work, poor sleeping posture, or stress-related muscle tension, treated with manual therapy, posture correction, and stretching.' },
      { name: 'Knee Pain', text: 'From injury, overuse, or wear and tear — we assess joint function and surrounding muscle strength to rebuild stability.' },
      { name: 'Shoulder Pain', text: 'Often from repetitive strain, injury, or underlying joint issues, treated with a physiotherapy-led plan aimed at restoring function.' },
      { name: 'Sciatica', text: 'Pain radiating from the lower back down the leg, often due to nerve compression — treated by relieving pressure on the affected nerve.' },
      { name: 'Frozen Shoulder', text: 'Stiffness and restricted movement developing gradually, treated with manual therapy and a structured exercise program.' },
      { name: 'Sports Injuries', text: 'Sprains, strains, and overuse injuries — recovery plans consider your specific sport or activity.' },
      { name: 'Arthritis', text: 'Joint pain and stiffness managed with physiotherapy and, where appropriate, Ayurvedic support for chronic pain.' },
    ],
  },
  {
    dept: 'Dermatology',
    items: [
      { name: 'Acne', text: 'We assess your skin type and severity to recommend an evidence-based plan, avoiding harsh or unnecessary products.' },
      { name: 'Hair Loss', text: 'Can stem from stress, hormonal changes, or genetics — treatment ranges from topical approaches to PRP hair treatment.' },
      { name: 'Pigmentation', text: 'From sun exposure, hormonal shifts, or skin trauma — we recommend treatments suited to your skin type.' },
    ],
  },
  {
    dept: 'Dental',
    items: [
      { name: 'Tooth Pain', text: 'Often signals an underlying issue like decay or infection — our team conducts a prompt examination.' },
      { name: 'Gum Disease', text: 'Assessed during your dental visit, with options ranging from professional cleaning to targeted periodontal care.' },
    ],
  },
  {
    dept: 'General Medicine & Ayurveda',
    items: [
      { name: 'Digestive Disorders', text: 'Bloating and irregular digestion addressed jointly by our general medicine and Ayurveda teams, looking at diet, lifestyle, and underlying factors.' },
    ],
  },
];

const whyJbrPatients = [
  'Genuinely personalized care, with treatment plans built around the individual, not a template',
  'High hygiene standards maintained consistently across the clinic',
  'Transparent communication about diagnosis, treatment options, and costs',
  'Convenient booking, whether by phone, WhatsApp, or online',
];

const journeySteps = [
  { title: 'Book an Appointment', text: 'Reach out by phone, WhatsApp, or our website — including same-day slots when available.' },
  { title: 'Consultation', text: 'Meet the relevant specialist and walk through your symptoms, history, and concerns.' },
  { title: 'Clinical Assessment', text: 'A hands-on examination or relevant diagnostic tests to understand what’s really happening.' },
  { title: 'Diagnosis', text: 'A clear, honest explanation of your condition, with no medical jargon left unexplained.' },
  { title: 'Treatment Plan', text: 'A roadmap built specifically around your condition, lifestyle, and goals.' },
  { title: 'Treatment', text: 'Begin your treatment, single session or ongoing program, with experienced practitioners.' },
  { title: 'Follow-Up Care', text: 'Track progress and adjust your plan as needed, keeping recovery on course.' },
];

const multiSpecialtyBenefits = [
  'One clinic, multiple specialties — no separate providers for physiotherapy, dermatology, dental care, and general medicine',
  'Better communication between doctors, who can consult each other directly for coordinated, accurate care',
  'Faster referrals, happening quickly and internally without weeks of delay',
  'More convenient healthcare overall — fewer clinics to manage, less time re-explaining your history',
  'Family-focused care — every member of your household seen at the same trusted clinic',
  'Time-saving for busy patients, consolidating healthcare into one location',
  'Better patient outcomes through coordinated, joined-up treatment plans',
];

const compareTable = [
  { feature: 'Location', rama: 'One convenient location near JBR', other: 'Different locations across the city' },
  { feature: 'Specialists', rama: 'Multiple specialists under one roof', other: 'Separate providers for each specialty' },
  { feature: 'Coordinated Care', rama: 'Doctors consult directly with each other', other: 'Little to no communication between providers' },
  { feature: 'Diagnosis Speed', rama: 'Faster, with internal referrals', other: 'Slower, dependent on external referrals' },
  { feature: 'Communication', rama: 'Consistent, transparent updates', other: 'Fragmented across providers' },
  { feature: 'Treatment Approach', rama: 'Personalized, based on full patient history', other: "Often limited to a single visit's context" },
  { feature: 'Convenience', rama: 'Fewer appointments, less travel', other: 'Multiple bookings and commutes' },
  { feature: 'Family Healthcare', rama: 'All ages and needs handled in one clinic', other: 'Requires separate clinics per need' },
];

const faqs = [
  { q: 'Is RamaCare Polyclinic close to JBR?', a: 'Yes. RamaCare Polyclinic is located in Jumeirah 1, a short and manageable drive from Jumeirah Beach Residence via Jumeirah Beach Road or Sheikh Zayed Road.' },
  { q: 'How long does it take to reach RamaCare from JBR?', a: 'Travel time depends on traffic conditions at the time of your journey, but the route from JBR to our Jumeirah 1 clinic is generally quick and straightforward by car or taxi.' },
  { q: 'Do you provide same-day appointments?', a: "Yes, we offer same-day appointments whenever slots are available, so you're not left waiting when a health concern comes up unexpectedly." },
  { q: 'Which specialties are available at RamaCare?', a: 'We offer general medicine, physiotherapy, dental care, dermatology and aesthetic medicine, Ayurveda, preventive health checkups, and wellness programs, all within one polyclinic.' },
  { q: 'Is physiotherapy available at your clinic?', a: 'Yes, our physiotherapy department treats conditions like back pain, neck pain, shoulder pain, sciatica, frozen shoulder, and sports injuries.' },
  { q: 'Do you provide dental treatments?', a: 'Yes, our dental team handles tooth pain, gum disease, teeth whitening, dental veneers, and general oral health care.' },
  { q: 'Do you treat children?', a: 'Yes, RamaCare is a family-friendly clinic, and our doctors are experienced in treating patients across all age groups, including children.' },
  { q: 'Are walk-ins accepted?', a: 'While we recommend booking ahead to minimize your wait, we do our best to accommodate walk-in patients depending on doctor availability.' },
  { q: 'Is the clinic DHA licensed?', a: 'Yes, RamaCare Polyclinic is a fully DHA licensed facility, meeting all Dubai Health Authority regulatory and safety standards.' },
  { q: 'Do you offer preventive health checkups?', a: 'Yes, we offer preventive health screenings designed to catch potential issues early and support long-term wellbeing.' },
  { q: 'What insurance plans are accepted?', a: 'We work with a range of insurance providers. We recommend contacting our team directly to confirm whether your specific plan is accepted.' },
  { q: 'How do I book an appointment?', a: 'You can book an appointment by calling the clinic, messaging us on WhatsApp, or submitting a request through our website.' },
  { q: 'What are your clinic timings?', a: 'Our clinic timings are available on our contact page and by phone. We recommend confirming current hours before your visit.' },
  { q: 'Do you have parking near the clinic?', a: 'Yes, parking near RamaCare Polyclinic is convenient, making it easy for patients coming from JBR and surrounding areas.' },
  { q: 'Do you offer dermatology treatments like HydraFacial or PRP?', a: 'Yes, our dermatology and aesthetic medicine department offers treatments including HydraFacial, skin boosters, and PRP hair treatment.' },
  { q: 'Can I get an Ayurvedic consultation for chronic pain?', a: 'Yes, our Ayurveda department supports patients dealing with chronic pain, joint issues, and stress through traditional, personalized treatment approaches.' },
  { q: 'Is RamaCare suitable for tourists staying near JBR?', a: 'Yes, we regularly see tourists and hotel guests staying around JBR who need convenient, reliable medical care during their stay.' },
  { q: 'Do you treat sports injuries?', a: 'Yes, our physiotherapy team assesses and treats a range of sports-related injuries with rehabilitation plans built around your activity level.' },
  { q: 'How experienced are your doctors?', a: 'Our doctors bring years of clinical experience across their respective specialties and are all licensed under DHA regulatory standards.' },
  { q: 'What should I bring to my first appointment?', a: 'Please bring a valid ID, insurance details if applicable, and any relevant previous medical records to help our doctors understand your history.' },
];

const areasServed = ['Jumeirah Beach Residence (JBR)', 'Dubai Marina', 'Bluewaters Island', 'Jumeirah 1', 'Jumeirah 2', 'Al Wasl', 'Dubai Harbour', 'Palm Jumeirah', 'Business Bay', 'Downtown Dubai'];

const commitments = [
  'DHA licensed doctors across every department, ensuring regulatory compliance and consistent quality',
  'Experienced specialists with real, demonstrated clinical expertise',
  'Evidence-based treatments, not trends or unnecessary procedures',
  'Ethical healthcare practices, including transparent pricing and honest diagnosis',
  "Personalized treatment plans built around each patient's actual needs",
  'Ongoing patient education, so you understand your condition and your options',
];

/* ------------------------------------------------------------------
   JSON-LD schema — constructed to match this site's conventions
   (no schema list was supplied in this brief)
 ------------------------------------------------------------------- */
function buildSchema() {
  const medicalClinic = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'RamaCare Polyclinic',
    url: SITE_URL + '/',
    telephone: '+971566597878',
    priceRange: 'AED',
    address: { '@type': 'PostalAddress', streetAddress: 'Jumeirah Terrace Building, Jumeirah 1', addressLocality: 'Dubai', addressCountry: 'AE' },
    medicalSpecialty: ['General Practice', 'Physiotherapy', 'Dermatology', 'Dentistry', 'Ayurveda'],
    areaServed: areasServed.map((a) => ({ '@type': 'Place', name: a })),
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: SITE_URL + '/services' },
      { '@type': 'ListItem', position: 3, name: 'Polyclinic Near JBR', item: SITE_URL + PAGE_PATH },
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

  return [medicalClinic, breadcrumb, faqSchema];
}

/* ------------------------------------------------------------------
   Small building blocks
 ------------------------------------------------------------------- */
function IconTile({ name, className = 'w-5 h-5 text-[#1F5E4B]' }) {
  const Icon = LucideIcons[name] || LucideIcons.Circle;
  return <Icon className={className} />;
}

function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1F5E4B]/8 px-3 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#1F5E4B]">
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`mb-10 ${center ? 'mx-auto max-w-3xl text-center' : ''}`}>
      {eyebrow && <div className="mb-3"><Eyebrow>{eyebrow}</Eyebrow></div>}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A] leading-snug">
        {title}
      </h2>
      {subtitle && <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-[#5F5F5F]">{subtitle}</p>}
    </div>
  );
}

export default function PolyclinicNearJbrPage() {
  const { showToast, ToastComponent } = useToast();
  const [openDept, setOpenDept] = useState(0);
  const [openCondition, setOpenCondition] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const router = useRouter();

  const handleWhatsAppClick = (context = 'an appointment') => {
    const message = encodeURIComponent(`Hello RamaCare, I'm near JBR and would like to book ${context}.`);
    window.open(`https://wa.me/971566597878?text=${message}`, '_blank');
  };
  const handleBookAppointment = () => router.push('/book-appointment');
  const handleCall = () => window.open('tel:+97142862006', '_self');

  const schemaBlocks = buildSchema();

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">Polyclinic Near JBR | RamaCare Polyclinic Jumeirah 1</title>
        <meta
          name="description"
          content="Looking for a trusted polyclinic near JBR? RamaCare Polyclinic in Jumeirah 1 offers DHA-licensed multi-specialty care with same-day appointments. Book today."
          key="description"
        />
        <link rel="canonical" href={SITE_URL + PAGE_PATH} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Polyclinic Near JBR | RamaCare Polyclinic Jumeirah 1" />
        <meta
          property="og:description"
          content="Looking for a trusted polyclinic near JBR? RamaCare Polyclinic in Jumeirah 1 offers DHA-licensed multi-specialty care with same-day appointments."
        />
        <meta property="og:url" content={SITE_URL + PAGE_PATH} />
        <meta name="twitter:card" content="summary_large_image" />
        {schemaBlocks.map((block, i) => (
          <script key={`schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }} />
        ))}
      </Head>

      <div className="bg-white text-[#1A1A1A] antialiased">

        {/* ============ HERO — route/proximity motif ============ */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F9F7F2] to-white px-4 pb-16 pt-12 sm:pt-20">
          <div className="absolute inset-0 opacity-[0.4] pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1F5E4B" strokeWidth="0.5" strokeOpacity="0.1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#1F5E4B]/5 blur-3xl pointer-events-none"></div>

          <div className="relative max-w-6xl mx-auto px-6 text-center">
            <nav aria-label="Breadcrumb" className="mb-8 flex justify-center items-center gap-2 text-sm font-medium text-[#5F5F5F]">
              <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
              <span aria-hidden="true" className="text-gray-300">/</span>
              <Link href="/services" className="hover:text-[#1F5E4B] transition-colors">Services</Link>
              <span aria-hidden="true" className="text-gray-300">/</span>
              <span aria-current="page" className="text-[#1F5E4B]">Polyclinic Near JBR</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] leading-tight mb-6 max-w-3xl mx-auto tracking-tight">
              Polyclinic Near JBR <span className="block mt-1 text-[#1F5E4B] font-semibold text-2xl sm:text-3xl">Trusted Multi-Specialty Healthcare at RamaCare</span>
            </h1>
            <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed max-w-2xl mx-auto mb-4">
              If you live, work, or are staying anywhere close to Jumeirah Beach Residence, finding a reliable polyclinic near JBR shouldn&apos;t mean crossing half the city or waiting weeks for an appointment. RamaCare Polyclinic, based in Jumeirah 1, sits just a short drive from JBR and has become a trusted healthcare destination for residents, hotel guests, tourists, office professionals, and families.
            </p>
            <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed max-w-2xl mx-auto mb-8">
              Getting to us from JBR is straightforward, whether you&apos;re driving down Jumeirah Beach Road, taking Sheikh Zayed Road, or simply hopping into a taxi — no confusing routes, no unfamiliar traffic patterns.
            </p>

            {/* Route card */}
            <div className="max-w-xl mx-auto rounded-2xl border border-gray-100 bg-white/85 p-6 shadow-xl backdrop-blur-sm mb-8 ring-1 ring-gray-100">
              <div className="flex items-center justify-between gap-3">
                <div className="text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4A574]/10 text-[#D4A574] mx-auto mb-2">
                    <LucideIcons.MapPin className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-bold text-[#1A1A1A]">JBR</p>
                </div>
                <div className="flex-1 flex items-center gap-1.5 px-2">
                  <span className="flex-1 border-t-2 border-dashed border-[#1F5E4B]/20" />
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B]">
                    <LucideIcons.Car className="w-4 h-4 shrink-0" />
                  </div>
                  <span className="flex-1 border-t-2 border-dashed border-[#1F5E4B]/20" />
                </div>
                <div className="text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B] mx-auto mb-2">
                    <LucideIcons.Building2 className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-bold text-[#1A1A1A]">RamaCare, Jumeirah 1</p>
                </div>
              </div>
              <p className="text-sm text-[#5F5F5F] mt-4 font-medium">Short, easy drive via Jumeirah Beach Road or Sheikh Zayed Road</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={handleBookAppointment} className="inline-flex items-center gap-2 rounded-lg bg-[#1F5E4B] px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-[#17493B] hover:shadow-xl transition-all hover:-translate-y-0.5 duration-200">
                <LucideIcons.Calendar className="w-4 h-4" /> Book an Appointment
              </button>
              <button onClick={() => handleWhatsAppClick()} className="inline-flex items-center gap-2 rounded-lg border border-[#1F5E4B]/30 bg-white px-8 py-3.5 text-sm font-semibold text-[#1F5E4B] hover:bg-[#F9F7F2] transition-colors">
                <LucideIcons.MessageCircle className="w-4 h-4" /> WhatsApp Us
              </button>
            </div>
          </div>
        </section>

        {/* ============ Why choose — icon card grid ============ */}
        <section className="bg-[#F9F7F2] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeading eyebrow="RamaCare Standards" title="Why Choose RamaCare Polyclinic Near JBR" subtitle="Choosing a healthcare provider deserves more thought than picking the nearest signboard. Here's exactly what you're getting at RamaCare." />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whyChoose.map((w) => (
                <div key={w.title} className="group relative rounded-2xl border border-gray-100 bg-gradient-to-tr from-white to-[#F9F7F2]/30 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F5E4B]/10 text-[#1F5E4B] group-hover:bg-[#1F5E4B] group-hover:text-white transition-colors duration-300 mb-4">
                    <IconTile name={w.icon} className="w-6 h-6" />
                  </div>
                  <p className="text-base font-bold text-[#1A1A1A]">{w.title}</p>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed mt-2">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Healthcare services — expandable directory ============ */}
        <section className="max-w-4xl mx-auto px-6 py-20 bg-white">
          <SectionHeading eyebrow="Our Specialties" title="Healthcare Services Available" subtitle="As a full-service polyclinic near JBR, RamaCare brings together the following departments under one roof, so you can address multiple health needs in a single, convenient visit." />
          <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            {departments.map((d, i) => {
              const isOpen = openDept === i;
              return (
                <div key={d.name} className={i !== 0 ? 'border-t border-gray-100' : ''}>
                  <button onClick={() => setOpenDept(isOpen ? null : i)} className={`w-full flex items-center justify-between gap-4 p-5 text-left transition-colors duration-250 ${isOpen ? 'bg-[#1F5E4B]/5' : 'bg-white hover:bg-gray-50'}`}>
                    <span className="flex items-center gap-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${isOpen ? 'bg-[#1F5E4B] text-white' : 'bg-[#1F5E4B]/10 text-[#1F5E4B]'}`}>
                        <IconTile name={d.icon} className="w-5 h-5" />
                      </div>
                      <span className="text-base font-bold text-[#1A1A1A]">{d.name}</span>
                    </span>
                    <LucideIcons.ChevronDown className={`w-5 h-5 text-[#1F5E4B] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeInOut' }}>
                        <div className="px-5 pb-6 pt-3 bg-white pl-5 sm:pl-[4.75rem] border-t border-gray-50 bg-[#F9F7F2]/10">
                          {d.text.split('\n\n').map((para, pi) => (
                            <p key={pi} className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed mt-2.5">{para}</p>
                          ))}
                          <div className="mt-5">
                            <button onClick={() => handleWhatsAppClick(d.name.toLowerCase())} className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#1F5E4B] hover:underline underline-offset-4">
                              {d.cta} <LucideIcons.ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============ Conditions — grouped accordion ============ */}
        <section className="bg-[#F9F7F2] py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <SectionHeading eyebrow="Clinical Care" title="Conditions We Commonly Treat" subtitle="Professional therapy and diagnosis for standard conditions, focusing on pain relief and long-term recovery." />
            {conditionGroups.map((group) => (
              <div key={group.dept} className="mb-10 last:mb-0">
                <p className="text-sm font-extrabold uppercase tracking-wider text-[#1F5E4B] mb-4 border-l-4 border-[#D4A574] pl-3">{group.dept}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {group.items.map((c) => {
                    const key = `${group.dept}-${c.name}`;
                    const isOpen = openCondition === key;
                    return (
                      <div key={key} className="rounded-2xl border border-gray-100 overflow-hidden bg-white shadow-sm hover:shadow transition-shadow duration-200">
                        <button onClick={() => setOpenCondition(isOpen ? null : key)} className="w-full flex items-center justify-between gap-4 p-5 text-left focus:outline-none">
                          <span className="text-sm sm:text-base font-bold text-[#1A1A1A]">{c.name}</span>
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B]">
                            <LucideIcons.Plus className={`w-4 h-4 shrink-0 transition-transform duration-250 ${isOpen ? 'rotate-45' : ''}`} />
                          </div>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.18 }}>
                              <p className="text-sm leading-relaxed text-[#5F5F5F] px-5 pb-5 pt-1 bg-[#F9F7F2]/10 border-t border-gray-50">{c.text}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ Why JBR patients choose us ============ */}
        <section className="max-w-4xl mx-auto px-6 py-20 bg-white">
          <SectionHeading eyebrow="Patient Confidence" title="Why Patients from JBR Choose RamaCare" />
          <div className="grid sm:grid-cols-2 gap-4">
            {whyJbrPatients.map((w) => (
              <div key={w} className="flex gap-3 bg-[#F9F7F2]/80 rounded-2xl border border-gray-100 px-5 py-4 hover:shadow-sm transition-shadow duration-200">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] mt-0.5">
                  <LucideIcons.Check className="w-4 h-4" />
                </div>
                <p className="text-sm sm:text-base text-[#1A1A1A] font-medium leading-relaxed">{w}</p>
              </div>
            ))}
          </div>
          <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed mt-8 border-l-4 border-[#D4A574] pl-4 font-medium">
            Together, these factors are why so many JBR residents, tourists, and professionals now consider RamaCare their default healthcare clinic near JBR.
          </p>
        </section>

        {/* ============ Treatment process — journey map ============ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1F5E4B] via-[#103D30] to-[#0A241C] py-20 px-6 text-white">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="relative max-w-6xl mx-auto">
            <div className="border-b border-white/10 pb-6 mb-12">
              <span className="text-sm font-bold uppercase tracking-[0.14em] text-[#D4A574]">Patient Journey</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Our Treatment Process</h2>
              <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed max-w-2xl">
                Every visit to our polyclinic near JBR follows a clear, patient-friendly journey.
              </p>
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute top-5 left-0 right-0 h-px bg-white/20" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-6">
                {journeySteps.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="relative bg-white/5 rounded-2xl p-5 border border-white/10 backdrop-blur-sm"
                  >
                    <span className="relative z-10 w-9 h-9 rounded-full bg-white text-[#1F5E4B] text-sm font-bold flex items-center justify-center mb-3 shadow-md">{i + 1}</span>
                    <p className="text-sm sm:text-base font-bold text-white">{s.title}</p>
                    <p className="text-sm text-white/70 leading-relaxed mt-2">{s.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ Multi-specialty benefits + comparison table ============ */}
        <section className="max-w-6xl mx-auto px-6 py-20 bg-white">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="The Polyclinic Edge" title="Benefits of a Multi-Specialty Polyclinic" />
              <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed mb-6">
                Choosing a multi-specialty polyclinic over scattered single-service clinics comes with real, practical advantages:
              </p>
              <ul className="space-y-3.5">
                {multiSpecialtyBenefits.map((b) => (
                  <li key={b} className="flex gap-3 text-sm sm:text-base text-[#1A1A1A] font-medium leading-relaxed bg-[#F9F7F2] p-4 rounded-2xl border border-gray-50">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] mt-0.5">
                      <LucideIcons.Check className="w-4 h-4" />
                    </div>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="Comparison" title="RamaCare vs. Multiple Separate Clinics" />
              <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-md">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gradient-to-r from-[#0F3B2E] to-[#1F5E4B] text-white">
                      <th className="text-left px-5 py-4 font-semibold text-white">Factor</th>
                      <th className="text-left px-5 py-4 font-semibold text-white bg-white/10">RamaCare</th>
                      <th className="text-left px-5 py-4 font-semibold text-white/80">Multiple Clinics</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compareTable.map((row, i) => (
                      <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F9F7F2]/40'}>
                        <td className="px-5 py-4 border-b border-gray-100 font-bold text-[#1A1A1A] text-sm">{row.feature}</td>
                        <td className="px-5 py-4 border-b border-gray-100 text-[#1F5E4B] text-sm font-semibold bg-[#1F5E4B]/5">
                          <span className="flex items-start gap-2"><LucideIcons.Check className="mt-0.5 h-4.5 w-4.5 flex-shrink-0" /> {row.rama}</span>
                        </td>
                        <td className="px-5 py-4 border-b border-gray-100 text-[#5F5F5F] text-sm">
                          <span className="flex items-start gap-2"><LucideIcons.X className="mt-0.5 h-4.5 w-4.5 flex-shrink-0 text-red-400" /> {row.other}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ============ Areas served — radiating chip cluster ============ */}
        <section className="bg-[#F9F7F2] py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading eyebrow="Our Community" title="Areas We Serve" subtitle="As a well-connected polyclinic near JBR, our patients come from across the surrounding communities." center={true} />
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1F5E4B] text-white px-5 py-2.5 mb-8 shadow-md">
              <LucideIcons.MapPin className="w-4 h-4 text-[#D4A574]" />
              <span className="text-sm font-bold">RamaCare · Jumeirah 1</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {areasServed.map((a) => (
                <span key={a} className="text-sm font-semibold text-[#1A1A1A] bg-white border border-gray-100 hover:bg-[#1F5E4B]/10 px-5 py-2.5 rounded-full transition-colors duration-200 cursor-default">{a}</span>
              ))}
            </div>
            <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed mt-8 max-w-2xl mx-auto font-medium">
              Our Jumeirah 1 location, with easy access via Jumeirah Beach Road and Sheikh Zayed Road, makes us a practical healthcare choice for residents, office professionals, hotel guests, and tourists staying anywhere near these areas.
            </p>
          </div>
        </section>

        {/* ============ Patient experience ============ */}
        <section className="max-w-4xl mx-auto px-6 py-20 bg-white">
          <SectionHeading eyebrow="Comfort First" title="Patient Experience at RamaCare" />
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 p-6 bg-white shadow-sm hover:shadow transition-shadow duration-200">
              <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed">
                From the moment you walk in, our goal is to make your visit as comfortable as possible. Our reception area is clean, calm, and welcoming, staffed by a friendly team ready to help with check-in and any questions you might have.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 p-6 bg-white shadow-sm hover:shadow transition-shadow duration-200">
              <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed">
                Consultations take place in modern, private treatment rooms, where our professional doctors take the time to listen before recommending anything. Whether you&apos;re seeing a physiotherapist, dermatologist, dentist, or general physician, the environment is designed to feel unhurried and respectful of your time and concerns.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 p-6 bg-white shadow-sm hover:shadow transition-shadow duration-200">
              <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed">
                After treatment, we don&apos;t simply send you on your way. Our team follows up to check on your progress, answer any lingering questions, and adjust your care plan if needed — because a single visit is rarely the full picture of good healthcare.
              </p>
            </div>
          </div>
        </section>

        {/* ============ Commitment to ethical healthcare ============ */}
        <section className="bg-[#F9F7F2] py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <SectionHeading eyebrow="Clinical Integrity" title="Our Commitment to Trustworthy, Ethical Healthcare" subtitle="RamaCare Polyclinic is built on the principle that patients deserve care they can genuinely trust. That commitment shows up in a few specific ways:" />
            <div className="grid sm:grid-cols-2 gap-4">
              {commitments.map((c) => (
                <div key={c} className="flex gap-3 bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-sm transition-shadow">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1F5E4B]/10 text-[#1F5E4B] mt-0.5">
                    <LucideIcons.ShieldCheck className="w-5 h-5" />
                  </div>
                  <p className="text-sm sm:text-base text-[#1A1A1A] font-semibold leading-relaxed">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FAQ — two-column accordion ============ */}
        <section className="max-w-6xl mx-auto px-6 py-20 bg-white">
          <SectionHeading eyebrow="Common Questions" title="Frequently Asked Questions" center={true} />
          <div className="grid lg:grid-cols-2 gap-6">
            {[faqs.slice(0, 10), faqs.slice(10)].map((col, colIdx) => (
              <div key={colIdx} className="space-y-4">
                {col.map((f, idx) => {
                  const globalIdx = colIdx === 0 ? idx : idx + 10;
                  const isOpen = openFaq === globalIdx;
                  return (
                    <div key={f.q} className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm">
                      <button onClick={() => setOpenFaq(isOpen ? null : globalIdx)} className="w-full flex items-center justify-between gap-4 p-5 text-left focus:outline-none">
                        <span className="text-sm sm:text-base font-bold text-[#1A1A1A] flex-1">{f.q}</span>
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B]">
                          {isOpen ? (
                            <LucideIcons.Minus className="w-4 h-4 shrink-0" />
                          ) : (
                            <LucideIcons.Plus className="w-4 h-4 shrink-0" />
                          )}
                        </div>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.18 }}>
                            <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed px-5 pb-5 pt-1 border-t border-gray-50 bg-[#F9F7F2]/10">{f.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </section>

        {/* ============ Final CTA ============ */}
        <section className="bg-[#F9F7F2] py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading eyebrow="Get Started" title="Book Your Appointment at RamaCare" subtitle="If you&apos;ve been searching for a dependable polyclinic near JBR, RamaCare Polyclinic in Jumeirah 1 offers the licensed expertise, modern facilities, and personalized care that make healthcare simpler — not more stressful. Your health deserves a clinic that&apos;s easy to reach and easy to trust." center={true} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto mt-10">
              <button onClick={handleBookAppointment} className="flex flex-col items-center gap-3 rounded-2xl bg-white border border-gray-100 px-4 py-6 shadow-sm hover:border-[#1F5E4B] hover:shadow-md transition-all duration-200">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B]">
                  <LucideIcons.Calendar className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-[#1A1A1A]">Book Online</span>
              </button>
              <button onClick={handleCall} className="flex flex-col items-center gap-3 rounded-2xl bg-white border border-gray-100 px-4 py-6 shadow-sm hover:border-[#1F5E4B] hover:shadow-md transition-all duration-200">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B]">
                  <LucideIcons.Phone className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-[#1A1A1A]">Call Clinic</span>
              </button>
              <button onClick={() => handleWhatsAppClick()} className="flex flex-col items-center gap-3 rounded-2xl bg-white border border-gray-100 px-4 py-6 shadow-sm hover:border-[#1F5E4B] hover:shadow-md transition-all duration-200">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B]">
                  <LucideIcons.MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-[#1A1A1A]">WhatsApp</span>
              </button>
              <Link href="/contact-us" className="flex flex-col items-center gap-3 rounded-2xl bg-white border border-gray-100 px-4 py-6 shadow-sm hover:border-[#1F5E4B] hover:shadow-md transition-all duration-200">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B]">
                  <LucideIcons.MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-[#1A1A1A]">Visit Us</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ============ Medical Disclaimer ============ */}
        <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
          <p className="text-sm text-[#5F5F5F] leading-relaxed">
            <span className="font-bold text-[#1A1A1A]">Medical Disclaimer:</span> The information provided on this page is intended for general educational purposes only and does not constitute medical advice, diagnosis, or treatment. Every patient&apos;s condition is different, and treatment outcomes vary based on individual health factors. Please consult a qualified doctor at RamaCare Polyclinic or another DHA-licensed healthcare provider for a proper diagnosis and personalized treatment plan before making any healthcare decisions.
          </p>
        </section>

        {/* Sticky Bottom Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-xl z-40 p-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="hidden md:block">
              <p className="text-sm font-bold text-[#1A1A1A]">A trusted polyclinic near JBR</p>
              <p className="text-sm font-medium text-[#5F5F5F]">Same-day appointments available</p>
            </div>
            <button
              onClick={handleBookAppointment}
              className="flex items-center gap-2 bg-[#1F5E4B] text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all font-semibold whitespace-nowrap hover:-translate-y-0.5 duration-150"
            >
              <LucideIcons.Calendar className="w-5 h-5" />
              Book Appointment
            </button>
          </div>
        </div>

        {/* WhatsApp Floating Button */}
        <button
          onClick={() => handleWhatsAppClick()}
          className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-shadow hover:scale-105 duration-200"
        >
          <LucideIcons.MessageCircle className="w-8 h-8 text-white" />
        </button>
      </div>
    </Layout>
  );
}