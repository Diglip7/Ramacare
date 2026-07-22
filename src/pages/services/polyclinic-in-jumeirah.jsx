import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../../../components/Layout';
import {
  MapPin,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  Activity,
  Smile,
  Leaf,
  HeartPulse,
  ClipboardCheck,
  Phone,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Clock,
  Building2,
  ThumbsUp,
  Bone,
  Droplet,
  Salad,
  X,
} from 'lucide-react';

/* =====================================================================
   POLYCLINIC IN JUMEIRAH — original page build. Ninth distinct layout
   on the site, and a different genre entirely (a location/multi-specialty
   hub page rather than a condition or comparison article): expandable
   service cards, a condition tag grid, a trust checklist, and a
   RamaCare-vs-multiple-clinics table. Wide max-w-7xl container throughout.
   Brand tokens:
     teal   #1F5E4B   dark teal #0F3B2E   gold  #D4A574
     ink    #1A1A1A   muted     #5F5F5F
     cream  #F5F1E8   panel     #F9F7F2
   Hero intro paragraph is 16px (text-base); every other paragraph/list
   is 14px (text-sm) — no 12px body copy. No images were specified in
   the source brief (the Image SEO Guide table was left blank), so none
   are fabricated here — swap in real photography whenever it's ready.
   ===================================================================== */

const SEO = {
  title: 'Polyclinic in Jumeirah | RamaCare Multi-Specialty Clinic',
  metaDescription:
    'Trusted polyclinic in Jumeirah offering physiotherapy, dental, dermatology, Ayurveda & GP care. DHA licensed doctors. Same-day appointments available.',
  canonical: 'https://ramacarepolyclinic.ae/polyclinic-in-jumeirah',
  ogTitle: 'Polyclinic in Jumeirah – RamaCare Polyclinic',
  ogDescription:
    'Multi-specialty polyclinic in Jumeirah 1, Dubai. Physiotherapy, dental, dermatology, Ayurveda & general medicine under one roof. Book same-day appointments today.',
};

const WHATSAPP_NUMBER = '971566597878';
const waLink = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

/* ------------------------------- Data ------------------------------- */

const WHY_US = [
  { name: 'DHA Licensed Clinic and Doctors', desc: 'RamaCare operates under a full Dubai Health Authority (DHA) license, and every doctor practicing here holds an active DHA license in their specialty — independently reviewed against safety, hygiene, staff qualification, and record-keeping standards.' },
  { name: 'Experienced, Multidisciplinary Doctors', desc: 'Our physiotherapists, general physicians, dermatologists, dentists, and Ayurveda practitioners each bring years of clinical experience. More importantly, they talk to each other — internal referrals happen inside the same building, often the same day.' },
  { name: 'Modern Diagnostic Facilities', desc: 'RamaCare invests in modern diagnostic and treatment technology across departments. Doctors do not guess; they assess, and then explain what they found in plain language before recommending a plan.' },
  { name: 'Personalized Treatment Plans', desc: 'Two patients with the same complaint might need completely different treatment paths. Our doctors build a plan around your specific history, lifestyle, and goals rather than a one-size-fits-all protocol.' },
  { name: 'Family-Friendly Environment', desc: 'Many patients want one family clinic they can rely on for everyone — a father managing knee pain, a mother wanting a dermatology consultation, and children who occasionally need a GP visit.' },
  { name: 'Same-Day Appointments', desc: 'Same-day appointments are a core part of how RamaCare operates, not a marketing promise — particularly for physiotherapy, general medicine, and dental pain.' },
  { name: 'Patient-First Philosophy', desc: 'We do not measure a good consultation by how quickly a doctor moves to the next patient. Doctors explain conditions clearly and involve patients in decisions about their own care.' },
  { name: 'Convenient Jumeirah 1 Location', desc: 'RamaCare is realistically reachable within minutes for residents across Jumeirah 1, 2, and 3, as well as Al Wasl, Satwa, Downtown Dubai, and Business Bay.' },
  { name: 'Comfortable, Modern Clinic Environment', desc: 'From reception to treatment rooms, RamaCare is designed to feel calm rather than clinical-cold — clean, quiet, and unhurried, particularly for anxious patients or first-time visitors with young children.' },
  { name: 'Transparent, Fair Pricing', desc: 'Our team discusses expected costs upfront, explains what common insurance plans cover, and never recommends additional treatment purely to increase a bill.' },
];

const SERVICES = [
  {
    icon: Activity,
    name: 'Physiotherapy in Jumeirah',
    intro: 'Our physiotherapy department treats acute injuries, chronic pain, post-surgical recovery, and sports-related conditions using manual therapy, targeted exercise programs, and modern rehabilitation techniques. Conditions commonly treated include back pain, neck pain, frozen shoulder, sciatica, and knee or joint pain.',
    benefits: 'Benefits patients recovering from surgery, athletes managing sports injuries, office workers with posture-related pain, and older adults managing arthritis or mobility decline. Anyone with persistent pain lasting more than a week should consider an assessment rather than waiting for it to resolve.',
    approach: 'Treatment begins with a detailed physical assessment to identify the root cause of pain, followed by a structured plan combining hands-on therapy with home exercises. Most patients notice measurable improvement within a handful of sessions.',
    cta: 'Book a physiotherapy assessment',
  },
  {
    icon: Smile,
    name: 'Dental Care in Jumeirah',
    intro: 'Our dental department covers general dentistry, tooth pain relief, gum care, and cosmetic dental concerns, combining careful diagnosis with a gentle, unhurried approach — especially valued when bringing children or anxious adults for treatment.',
    benefits: 'Benefits everyone from children needing preventive checkups to adults dealing with sensitivity, pain, or cosmetic concerns. Tooth pain, bleeding gums, or persistent bad breath should not wait, since minor issues become costlier over time.',
    approach: 'Our dentists start with a thorough oral examination, often supported by diagnostic imaging, before recommending a treatment plan tailored to the specific issue.',
    cta: 'Book a dental consultation',
  },
  {
    icon: Sparkles,
    name: 'Dermatology & Aesthetic Medicine',
    intro: 'Our dermatology services address both medical skin conditions and aesthetic concerns, including acne, pigmentation, hair loss, and general skin health, handled by doctors who take a medical-first approach.',
    benefits: 'Benefits patients dealing with persistent acne, uneven skin tone, early or ongoing hair thinning, or anyone wanting a professional skin health assessment rather than over-the-counter guesswork.',
    approach: 'Treatment begins with an in-depth consultation covering skin type, history, and lifestyle factors, followed by a realistic explanation of expected outcomes — we deliberately avoid exaggerated promises.',
    cta: 'Book a dermatology consultation',
  },
  {
    icon: Stethoscope,
    name: 'General Medicine',
    intro: 'Our GP and family doctor services cover everyday health concerns — fevers, infections, chronic disease management, and general wellness visits. This is often the first stop for patients unsure which specialty they need.',
    benefits: 'Benefits the widest range of patients: children with common illnesses, adults managing chronic conditions like diabetes or hypertension, and anyone needing a same-day consultation for an unexpected issue.',
    approach: 'Our GPs take a thorough history before treatment, ensuring recurring symptoms are properly investigated rather than repeatedly managed with short-term fixes.',
    cta: 'Book a general medicine consultation',
  },
  {
    icon: Leaf,
    name: 'Ayurveda Treatments',
    intro: 'Our Ayurveda service offers traditional consultations and therapies for chronic pain, joint conditions, stress, and general wellness, delivered by practitioners trained in classical methods alongside modern clinical safety standards.',
    benefits: 'Benefits patients managing chronic joint pain or arthritis, those seeking a non-invasive approach to stress and anxiety, and patients looking for complementary care alongside conventional treatment.',
    approach: 'Consultations begin with an assessment of constitution, lifestyle, and specific complaints, followed by a plan that may include therapies, dietary guidance, and lifestyle recommendations.',
    cta: 'Book an Ayurveda consultation',
  },
  {
    icon: ClipboardCheck,
    name: 'Preventive Health Checkups',
    intro: 'Regular health checkups catch problems early, often before symptoms appear. Our preventive packages are designed around age, gender, and risk factors, covering general screening, chronic disease risk markers, and lifestyle-related concerns.',
    benefits: 'Benefits anyone who has not had a full checkup in the past year, patients with a family history of chronic conditions, and working professionals whose lifestyle leaves little time for symptom-tracking.',
    approach: 'Checkups start with a consultation to understand your history and risk factors, followed by relevant screening and a clear, jargon-free explanation of results and next steps.',
    cta: 'Book your preventive screening',
  },
  {
    icon: HeartPulse,
    name: 'Wellness Programs',
    intro: 'Our wellness programs combine elements of physiotherapy, Ayurveda, and general medicine into structured plans for patients focused on long-term health — posture correction programs, stress management plans, or lifestyle wellness tracks.',
    benefits: 'Benefits patients recovering from a period of poor health, those managing chronic stress, and anyone wanting a structured, medically guided approach to improving overall wellbeing.',
    approach: 'Each wellness program begins with a multidisciplinary assessment, followed by a coordinated plan drawing on whichever departments are relevant to your goals.',
    cta: 'Speak to our team about a wellness program',
  },
];

const CONDITIONS = [
  { icon: Bone, name: 'Back Pain', desc: 'Can stem from poor posture, muscle strain, or underlying spinal issues; physiotherapists build a plan combining manual therapy and targeted exercises to restore movement and reduce recurrence.' },
  { icon: Bone, name: 'Neck Pain', desc: 'Often linked to desk-based work and screen time, treated through posture correction, manual therapy, and strengthening exercises to relieve tension and prevent it becoming chronic.' },
  { icon: Bone, name: 'Knee Pain', desc: 'Assessed to determine whether the issue is muscular, structural, or degenerative before a physiotherapy plan is recommended, sometimes alongside Ayurvedic support for inflammation.' },
  { icon: Bone, name: 'Shoulder Pain', desc: 'Can result from overuse, injury, or referred pain from the neck; our approach focuses on identifying the exact source before treatment.' },
  { icon: Activity, name: 'Sciatica', desc: 'Causes pain radiating from the lower back down the leg, usually due to nerve compression; physiotherapy focuses on relieving pressure and restoring normal movement patterns.' },
  { icon: Bone, name: 'Frozen Shoulder', desc: 'Causes progressive stiffness and pain in the shoulder joint; treatment combines manual therapy and a gradually progressing exercise program.' },
  { icon: Activity, name: 'Sports Injuries', desc: 'From ligament strains to muscle tears, assessed for severity before a rehabilitation plan safely returns patients to their sport.' },
  { icon: Bone, name: 'Arthritis', desc: 'Joint pain and stiffness are managed through physiotherapy and, for many patients, Ayurvedic approaches aimed at reducing inflammation and supporting long-term joint health.' },
  { icon: Sparkles, name: 'Acne', desc: 'Assessed for underlying triggers before a dermatology-led treatment plan focused on realistic, medically sound outcomes rather than quick fixes.' },
  { icon: Sparkles, name: 'Pigmentation', desc: 'Uneven skin tone and dark spots are evaluated to determine the cause before recommending an appropriate dermatological treatment approach.' },
  { icon: Droplet, name: 'Hair Loss', desc: 'Hair thinning can have several causes, from stress to nutritional or hormonal factors; our dermatology team investigates before recommending treatment.' },
  { icon: Smile, name: 'Tooth Pain', desc: 'Sudden or persistent tooth pain is examined promptly, since early intervention is usually simpler and less costly than delaying treatment.' },
  { icon: Smile, name: 'Gum Problems', desc: 'Bleeding or swollen gums are assessed as part of a full oral health check, since gum health is closely linked to overall wellbeing.' },
  { icon: Salad, name: 'Digestive Disorders', desc: 'Evaluated by our general medicine and Ayurveda teams, who look at diet, lifestyle, and underlying causes rather than only prescribing symptomatic relief.' },
  { icon: HeartPulse, name: 'Stress & Anxiety', desc: 'Addressed through general medicine guidance and Ayurvedic approaches, with an emphasis on sustainable lifestyle changes rather than only short-term relief.' },
];

const TRUST_REASONS = [
  { name: 'Compassionate care', desc: 'Patients regularly mention feeling heard rather than processed. Doctors take the time to ask follow-up questions instead of rushing to a prescription.' },
  { name: 'Personalized treatment', desc: "No generic protocols — every treatment plan reflects the patient's actual history, lifestyle, and preferences." },
  { name: 'Experienced specialists', desc: 'Every department is led by doctors with meaningful clinical experience, not recent graduates learning on the job.' },
  { name: 'Modern equipment', desc: 'Diagnostic and treatment technology is maintained and updated, supporting more accurate assessments across departments.' },
  { name: 'Hygiene standards', desc: 'As a DHA licensed facility, RamaCare follows strict hygiene and sterilization protocols across every treatment room.' },
  { name: 'Transparent communication', desc: 'Patients are told what a diagnosis means, what the treatment options are, and what each option costs — before any commitment is made.' },
  { name: 'Convenient scheduling', desc: 'Same-day appointments, WhatsApp booking, and flexible scheduling reduce the friction of getting care when it is actually needed.' },
  { name: 'Follow-up care', desc: 'Treatment does not end when a patient leaves the room. Our teams check in on progress and adjust plans as needed.' },
  { name: 'Patient education', desc: 'Doctors explain the "why" behind a diagnosis and treatment plan, helping patients make informed decisions about their own health going forward.' },
];

const PROCESS = [
  { name: 'Book Appointment', desc: 'Reach out via phone, WhatsApp, or our website to schedule a visit. Same-day appointments are available for most departments, particularly physiotherapy, dental, and general medicine.' },
  { name: 'Medical Assessment', desc: 'On arrival, our doctors conduct a detailed assessment covering your medical history, current symptoms, and relevant lifestyle factors.' },
  { name: 'Diagnosis', desc: 'Based on the assessment and any necessary diagnostic tests, your doctor identifies the underlying cause of your concern rather than only addressing surface symptoms.' },
  { name: 'Personalized Treatment Plan', desc: 'You receive a treatment plan tailored to your specific condition, goals, and circumstances, explained clearly before you agree to proceed.' },
  { name: 'Treatment', desc: 'Whether physiotherapy, dental, dermatology, or Ayurvedic therapy, treatment is delivered by experienced practitioners in a comfortable, hygienic setting.' },
  { name: 'Follow-Up Care', desc: 'Your progress is monitored, and your treatment plan is adjusted as needed to ensure long-term results rather than a one-time fix.' },
];

const MULTI_SPECIALTY_BENEFITS = [
  'Coordinated care — your physiotherapist, GP, dermatologist, and dentist can consult on your case together, rather than working from disconnected records',
  "One location for multiple specialties — no driving across Dubai between appointments; your entire family's healthcare needs are handled in one place",
  'Faster referrals — internal referrals between departments happen quickly, often the same day, instead of waiting weeks for an external specialist',
  'Better treatment outcomes — coordinated input from multiple specialists tends to catch issues a single, isolated consultation might miss',
  'Time-saving — one trip covers more ground than separate visits to separate clinics across the city',
  'Family healthcare convenience — parents, children, and grandparents can all be seen at the same clinic, often on the same visit',
];

// Constructed directly from the "Benefits of a multi-specialty polyclinic"
// section above — the source brief's own comparison table was left blank,
// so this mirrors the same facts already stated, framed as a comparison.
const VS_MULTIPLE_CLINICS = [
  { point: 'Medical records', ramacare: 'One shared record across every department', other: 'Separate, disconnected records at each clinic' },
  { point: 'Specialist referrals', ramacare: 'Internal, often same-day', other: 'External, often weeks of waiting' },
  { point: 'Travel', ramacare: 'One Jumeirah 1 location for the whole family', other: 'Driving across Dubai between appointments' },
  { point: 'Care coordination', ramacare: 'Doctors consult on your case together', other: 'Each specialist works in isolation' },
  { point: 'Time investment', ramacare: 'One trip covers multiple needs', other: 'Separate visits to separate clinics' },
];

const FAQS = [
  { q: 'Where is RamaCare Polyclinic located?', a: 'RamaCare Polyclinic is located in Jumeirah 1, Dubai, easily accessible from Jumeirah 2, Jumeirah 3, Al Wasl, and Satwa.' },
  { q: 'Do you accept walk-ins?', a: 'Yes, walk-ins are welcome, though booking ahead — even a quick WhatsApp message — helps us reduce your waiting time.' },
  { q: 'Are same-day appointments available?', a: 'Yes, same-day appointments are available across most departments, particularly physiotherapy, dental, and general medicine.' },
  { q: 'Which specialties are available at RamaCare?', a: 'We offer physiotherapy, dental care, dermatology and aesthetic medicine, general medicine, Ayurveda, preventive health checkups, and wellness programs.' },
  { q: 'Do you offer physiotherapy?', a: 'Yes, our physiotherapy department treats back pain, neck pain, sciatica, frozen shoulder, sports injuries, and more.' },
  { q: 'Is Ayurveda available at your clinic?', a: 'Yes, our Ayurveda department offers traditional treatments for chronic pain, joint conditions, stress, and general wellness.' },
  { q: 'Do you provide dental care?', a: 'Yes, our dental team handles general dentistry, tooth pain, gum care, and cosmetic dental concerns.' },
  { q: 'Do you treat children?', a: 'Yes, our general medicine and dental departments regularly see children, and our staff are experienced in making younger patients comfortable.' },
  { q: 'Do you offer preventive health checkups?', a: 'Yes, we offer preventive health checkup packages tailored to age, gender, and individual risk factors.' },
  { q: 'What are your clinic timings?', a: 'Clinic timings vary by day — please check ramacarepolyclinic.ae or contact us directly for current hours.' },
  { q: 'How can I book an appointment?', a: 'You can book via phone, WhatsApp, or directly through our website at ramacarepolyclinic.ae.' },
  { q: 'Is RamaCare Polyclinic DHA licensed?', a: 'Yes, RamaCare Polyclinic is a fully DHA licensed multi-specialty healthcare facility, and all our doctors hold active DHA licenses.' },
  { q: 'Do you offer health packages?', a: 'Yes, we offer preventive health checkup packages covering general screening and risk-specific assessments.' },
  { q: 'Which insurance plans are accepted?', a: 'Accepted insurance plans vary — please contact our reception team directly for the most current list.' },
  { q: 'How do I contact the clinic?', a: 'You can contact RamaCare Polyclinic via phone, WhatsApp, or the contact form on ramacarepolyclinic.ae.' },
  { q: 'Do you treat sports injuries?', a: 'Yes, our physiotherapy department has specific experience in assessing and rehabilitating sports-related injuries.' },
  { q: 'Can I get a dermatology consultation for hair loss?', a: 'Yes, our dermatology team assesses hair loss concerns and recommends appropriate, medically grounded treatment options.' },
  { q: 'Is RamaCare suitable for chronic pain management?', a: 'Yes, chronic pain conditions such as arthritis and long-standing back or joint pain are managed through coordinated physiotherapy and, where appropriate, Ayurvedic care.' },
  { q: 'Do I need a referral to see a specialist at RamaCare?', a: 'No external referral is needed — you can book directly with any department, and our GPs can also guide you to the right specialty internally.' },
  { q: 'Is parking available near the clinic?', a: 'Parking availability in Jumeirah 1 varies by time of day — please contact our reception team for current guidance when booking your visit.' },
];

const NEARBY_AREAS = ['Jumeirah 2', 'Jumeirah 3', 'Al Wasl', 'Satwa', 'City Walk', 'Downtown Dubai', 'Business Bay', 'DIFC', 'Dubai Marina'];

const EEAT_POINTS = [
  'DHA Licensed Doctors — Every doctor at RamaCare holds an active DHA license in their specialty.',
  'Experienced Medical Team — Our doctors bring meaningful clinical experience across their respective fields.',
  'Evidence-Based Treatments — Treatment recommendations are grounded in established clinical practice, not trends.',
  'Ethical Medical Practice — We do not recommend unnecessary treatment or exaggerate expected outcomes.',
  'Patient Education — Doctors take time to explain diagnoses and treatment options in plain language.',
  'Personalized Care — Every treatment plan reflects the individual patient\'s history and goals.',
];

const LINK_GROUPS = [
  { title: 'Core Pages', color: '#1F5E4B', links: [
    { label: 'Homepage', href: '/' }, { label: 'About Us', href: '/about-us' }, { label: 'Contact Us', href: '/contact-us' }, { label: 'Doctors', href: '/doctors' },
  ]},
  { title: 'Physiotherapy', color: '#1F5E4B', links: [
    { label: 'Physiotherapy Dubai', href: '/services/physiotherapy-dubai' }, { label: 'Back Pain Treatment Dubai', href: '/services/back-pain-treatment-dubai' },
    { label: 'Neck Pain Treatment Dubai', href: '/services/neck-pain-treatment-dubai' }, { label: 'Knee Pain Treatment Dubai', href: '/services/knee-pain-treatment-dubai' },
    { label: 'Shoulder Pain Treatment Dubai', href: '/services/shoulder-pain-treatment-dubai' }, { label: 'Frozen Shoulder Treatment Dubai', href: '/services/frozen-shoulder-treatment-dubai' },
    { label: 'Sciatica Treatment Dubai', href: '/services/sciatica-treatment-dubai' }, { label: 'Sports Injury Rehabilitation Dubai', href: '/services/sports-injury-rehabilitation-dubai' },
    { label: 'Dry Needling Dubai', href: '/services/dry-needling-dubai' },
  ]},
  { title: 'Dermatology', color: '#8A6A3F', links: [
    { label: 'Botox Dubai', href: '/services/botox-dubai' }, { label: 'HydraFacial Dubai', href: '/services/hydrafacial-dubai' }, { label: 'Skin Boosters Dubai', href: '/services/skin-boosters-dubai' },
    { label: 'PRP Hair Treatment Dubai', href: '/services/hair-prp-dubai' }, { label: 'Hair Loss Treatment Dubai', href: '/services/hair-loss-dubai' },
    { label: 'Acne Treatment Dubai', href: '/services/acne-treatment-dubai' }, { label: 'Pigmentation Treatment Dubai', href: '/services/pigmentation-dubai' },
  ]},
  { title: 'Dental', color: '#1F5E4B', links: [
    { label: 'Teeth Whitening Dubai', href: '/services/teeth-bleaching-dubai' }, { label: 'Root Canal Treatment Dubai', href: '/services/root-canal-treatment-dubai' },
    { label: 'Tooth Pain Treatment Dubai', href: '/services/tooth-pain-treatment-dubai' }, { label: 'Dental Veneers Dubai', href: '/services/dental-veneers-dubai' },
  ]},
  { title: 'Ayurveda', color: '#8A6A3F', links: [
    { label: 'Ayurveda Treatment Dubai', href: '/services/ayurveda-dubai' }, { label: 'Panchakarma Dubai', href: '/services/panchakarma-treatment' },
    { label: 'Arthritis Treatment Dubai', href: '/services/arthritis-treatment-dubai' }, { label: 'Joint Pain Treatment Dubai', href: '/services/joint-pain-treatment-dubai' },
    { label: 'Stress Treatment Dubai', href: '/services/stress-treatment-dubai' }, { label: 'Anxiety Treatment Dubai', href: '/services/anxiety-treatment-dubai' },
  ]},
  { title: 'Pricing Pages', color: '#1F5E4B', links: [
    { label: 'Physiotherapy Cost Dubai', href: '/services/physiotherapy-cost-dubai' }, { label: 'HydraFacial Cost Dubai', href: '/services/hydrafacial-cost-dubai' },
    { label: 'Hair PRP Cost Dubai', href: '/services/hair-prp-cost-dubai' }, { label: 'Botox Price Dubai', href: '/services/botox-price-dubai' },
  ]},
  { title: 'Comparison Articles', color: '#8A6A3F', links: [
    { label: 'Ayurveda vs Physiotherapy for Back Pain Dubai', href: '/services/ayurveda-vs-physiotherapy-for-back-pain-dubai' },
    { label: 'Physiotherapy vs Rest for Back Pain Recovery', href: '/services/physiotherapy-vs-rest-for-back-pain-recovery' },
    { label: 'Ayurveda vs Physiotherapy for Arthritis Dubai', href: '/services/ayurveda-vs-physiotherapy-for-arthritis-dubai' },
    { label: 'HydraFacial vs Chemical Peel Dubai', href: '/services/hydrafacial-vs-chemical-peel-dubai' },
    { label: 'PRP vs Mesotherapy for Hair Loss Dubai', href: '/services/prp-vs-mesotherapy-hair-loss-dubai' },
    { label: 'Root Canal vs Tooth Extraction Dubai', href: '/services/root-canal-vs-tooth-extraction-dubai' },
  ]},
];

/* --------------------------- Small building blocks --------------------------- */

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

/* ================================ PAGE ================================ */

export default function PolyclinicInJumeirahPage() {
  const [openService, setOpenService] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const clinicSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'RamaCare Polyclinic',
    url: SEO.canonical,
    description: 'RamaCare Polyclinic is a DHA licensed multi-specialty polyclinic in Jumeirah 1, Dubai, offering physiotherapy, dental, dermatology, general medicine, and Ayurveda services.',
    medicalSpecialty: ['Physiotherapy', 'Dentistry', 'Dermatology', 'General Practice', 'Ayurveda'],
    address: { '@type': 'PostalAddress', streetAddress: 'Jumeirah 1', addressLocality: 'Dubai', addressCountry: 'AE' },
    hasMap: 'https://maps.google.com/?q=RamaCare+Polyclinic+Jumeirah',
    telephone: '+971566597878',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ramacarepolyclinic.ae/' },
      { '@type': 'ListItem', position: 2, name: 'Polyclinic in Jumeirah', item: SEO.canonical },
    ],
  };

  return (
    <Layout>
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.metaDescription} />
        <link rel="canonical" href={SEO.canonical} />
        <meta property="og:title" content={SEO.ogTitle} />
        <meta property="og:description" content={SEO.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SEO.canonical} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <div className="bg-white text-[#1A1A1A] antialiased">

        {/* ============================ HERO ============================ */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F9F7F2] to-white px-4 pb-16 pt-12 sm:pt-20">
          {/* Decorative background grid and shapes */}
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

          <div className="relative mx-auto max-w-7xl">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm font-medium text-[#5F5F5F]">
              <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
              <span aria-hidden="true" className="text-gray-300">/</span>
              <span aria-current="page" className="text-[#1F5E4B]">Polyclinic in Jumeirah</span>
            </nav>

            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1F5E4B]/10 px-3 py-1.5 text-sm font-semibold text-[#1F5E4B]">
                  <MapPin className="h-4 w-4" /> Jumeirah 1, Dubai
                </span>
                <h1 className="mt-5 text-3xl font-extrabold leading-tight text-[#1A1A1A] sm:text-5xl tracking-tight">
                  Polyclinic in Jumeirah <span className="block mt-1 text-[#1F5E4B] font-semibold text-2xl sm:text-3xl">Trusted Multi-Specialty Healthcare at RamaCare Polyclinic</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#5F5F5F]">
                  If you have ever typed "polyclinic in Jumeirah" into Google at 11 p.m. because
                  your child has a fever, your shoulder still hurts from last week's tennis match,
                  or you simply want a health checkup you have been postponing for months — you
                  already know the problem. Jumeirah has no shortage of clinics, but very few
                  places bring together genuine multi-specialty care, DHA licensed doctors, and
                  same-day appointments in one comfortable, walk-in-friendly building.
                </p>
                <div className="mt-6 border-l-4 border-[#D4A574] pl-4">
                  <p className="max-w-2xl text-base font-semibold text-[#1A1A1A] leading-relaxed">That is the gap RamaCare Polyclinic was built to close.</p>
                </div>
                <p className="mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-[#5F5F5F]">
                  Located in the heart of Jumeirah 1, RamaCare Polyclinic is a DHA licensed
                  multi-specialty healthcare centre offering physiotherapy, dental care,
                  dermatology and aesthetic medicine, general medicine, Ayurveda, and preventive
                  health checkups — all under one roof, with one shared medical record and one
                  reception desk to deal with.
                </p>
                <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-[#5F5F5F]">
                  Patients choose RamaCare for a simple reason: convenience without compromise.
                  You are not choosing between "fast" and "good." Our experienced doctors take the
                  time to understand your history before recommending treatment, our diagnostic
                  equipment is modern and regularly maintained, and our team is trained to get you
                  seen the same day whenever your condition needs it — not three weeks from now.
                </p>
                <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-[#5F5F5F]">
                  Being based in Jumeirah 1 also means we are genuinely local. Patients from
                  Jumeirah 2, Jumeirah 3, Al Wasl, Satwa, City Walk, and even Downtown Dubai and
                  Business Bay find it easy to reach us, whether they are coming for a quick GP
                  consultation, a physiotherapy session for chronic back pain, or a full family
                  health checkup.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={waLink("Hello RamaCare, I'd like to book an appointment.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1F5E4B] px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-[#17493B] hover:shadow-xl transition-all hover:-translate-y-0.5 duration-200"
                  >
                    Book an Appointment <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="tel:+971566597878"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#1F5E4B]/30 bg-white px-8 py-3.5 text-sm font-semibold text-[#1F5E4B] hover:bg-[#F9F7F2] transition-colors"
                  >
                    <Phone className="h-4 w-4" /> Call the Clinic
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="rounded-2xl border border-gray-100 bg-white/80 p-8 shadow-xl backdrop-blur-md lg:sticky lg:top-8 ring-1 ring-gray-100">
                  <p className="text-sm font-bold uppercase tracking-wider text-[#5F5F5F]">Specialties Under One Roof</p>
                  <div className="mt-6 space-y-4">
                    {['Physiotherapy', 'Dental Care', 'Dermatology & Aesthetics', 'General Medicine', 'Ayurveda', 'Preventive Checkups', 'Wellness Programs'].map((s) => (
                      <div key={s} className="flex items-center gap-3 text-sm font-medium text-[#1A1A1A]">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B]">
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                        </div>
                        {s}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-xl bg-[#1F5E4B]/5 p-4 border border-[#1F5E4B]/10">
                    <p className="text-sm font-bold text-[#1F5E4B] text-center">Same-day appointments available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ WHY CHOOSE US — icon grid ============================ */}
        <section className="px-4 py-20 bg-white relative">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="RamaCare Standards" title="Why Choose RamaCare Polyclinic in Jumeirah" subtitle="Choosing a healthcare provider is rarely just about proximity. It is about trust — built through small, consistent details patients notice over time." />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_US.map((w) => (
                <div key={w.name} className="group relative rounded-2xl border border-gray-100 bg-gradient-to-tr from-white to-[#F9F7F2]/30 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F5E4B]/10 text-[#1F5E4B] group-hover:bg-[#1F5E4B] group-hover:text-white transition-colors duration-300">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <p className="mt-5 text-base font-bold text-[#1A1A1A]">{w.name}</p>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#5F5F5F]">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ SERVICES — expandable cards ============================ */}
        <section className="bg-[#F9F7F2] px-4 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Our Specialties" title="Healthcare Services Available" subtitle="Explore our comprehensive list of clinical services, engineered to offer a seamless healing journey for you and your family." />
            <div className="space-y-4">
              {SERVICES.map((s, idx) => {
                const Icon = s.icon;
                const isOpen = openService === idx;
                return (
                  <div key={s.name} className="overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
                    <button onClick={() => setOpenService(isOpen ? -1 : idx)} className="flex w-full items-center gap-5 p-6 text-left focus:outline-none">
                      <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 ${isOpen ? 'bg-[#1F5E4B] text-white' : 'bg-[#1F5E4B]/10 text-[#1F5E4B]'}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="flex-1 text-base sm:text-lg font-bold text-[#1A1A1A]">{s.name}</span>
                      <ChevronDown className={`h-6 w-6 flex-shrink-0 text-[#5F5F5F] transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#1F5E4B]' : ''}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeInOut' }}>
                          <div className="px-6 pb-8 pt-2 pl-6 sm:pl-[5.25rem] border-t border-gray-50 bg-[#F9F7F2]/20">
                            <p className="text-sm sm:text-base leading-relaxed text-[#5F5F5F]">{s.intro}</p>
                            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#5F5F5F]"><strong className="text-[#1A1A1A] font-semibold">Who it helps: </strong>{s.benefits}</p>
                            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#5F5F5F]"><strong className="text-[#1A1A1A] font-semibold">Our approach: </strong>{s.approach}</p>
                            <div className="mt-6">
                              <a
                                href={waLink(`Hello RamaCare, I'd like to ${s.cta.toLowerCase()}.`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg bg-[#1F5E4B] px-6 py-3 text-sm font-semibold text-white hover:bg-[#17493B] shadow-sm hover:shadow transition-all duration-200"
                              >
                                <MessageCircle className="h-4 w-4" /> {s.cta}
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================ CONDITIONS — tag grid ============================ */}
        <section className="px-4 py-20 bg-white">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Clinical Care" title="Conditions We Commonly Treat" subtitle="Professional therapy and diagnosis for standard conditions, focusing on pain relief and long-term recovery." />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CONDITIONS.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.name} className="rounded-2xl border border-gray-100 p-6 bg-white hover:border-[#D4A574]/40 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D4A574]/10 text-[#D4A574]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-base font-bold text-[#1A1A1A]">{c.name}</p>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[#5F5F5F]">{c.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================ TRUST REASONS — checklist ============================ */}
        <section className="bg-[#F9F7F2] px-4 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Patient Confidence" title="Why Patients in Jumeirah Trust RamaCare" subtitle="Trust in healthcare is earned slowly, and it usually comes down to a few consistent experiences repeated over time." />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TRUST_REASONS.map((t) => (
                <div key={t.name} className="rounded-2xl bg-white p-6 shadow-sm hover:shadow transition-shadow duration-300 border border-gray-100 flex flex-col justify-between">
                  <div>
                    <p className="flex items-center gap-2.5 text-base font-bold text-[#1A1A1A]">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#1F5E4B]" /> {t.name}
                    </p>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#5F5F5F]">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ TREATMENT PROCESS ============================ */}
        <section className="px-4 py-20 bg-white relative">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Patient Journey" title="Our Treatment Process" subtitle="Every visit to our polyclinic in Jumeirah follows the same clear, structured process, so you always know what to expect." />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 relative">
              {PROCESS.map((p, i) => (
                <div key={p.name} className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="absolute top-6 right-6 text-5xl font-extrabold text-[#1F5E4B]/5 pointer-events-none">
                    0{i + 1}
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1F5E4B] text-sm font-bold text-white shadow-sm">{i + 1}</span>
                  <p className="mt-4 text-base font-bold text-[#1A1A1A]">{p.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#5F5F5F]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ BENEFITS + VS MULTIPLE CLINICS ============================ */}
        <section className="bg-[#F9F7F2] px-4 py-20 border-t border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <SectionHeading eyebrow="The Polyclinic Edge" title="Benefits of Choosing a Multi-Specialty Polyclinic" />
                <ul className="space-y-3.5">
                  {MULTI_SPECIALTY_BENEFITS.map((b) => (
                    <li key={b} className="flex items-start gap-3 rounded-2xl bg-white p-5 text-sm sm:text-base leading-relaxed text-[#1A1A1A] shadow-sm border border-gray-50">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1F5E4B]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-7">
                <SectionHeading eyebrow="Comparison" title="RamaCare vs Visiting Multiple Clinics" />
                <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-md">
                  <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-gray-100 bg-gradient-to-r from-[#0F3B2E] to-[#1F5E4B] text-white">
                        <th className="px-6 py-4 font-semibold text-white">Feature</th>
                        <th className="px-6 py-4 font-semibold text-white bg-white/10">RamaCare Polyclinic</th>
                        <th className="px-6 py-4 font-semibold text-white/80">Multiple Separate Clinics</th>
                      </tr>
                    </thead>
                    <tbody>
                      {VS_MULTIPLE_CLINICS.map((row, i) => (
                        <tr key={row.point} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F9F7F2]/40'}>
                          <td className="px-6 py-4 font-bold text-[#1A1A1A] border-b border-gray-100">{row.point}</td>
                          <td className="px-6 py-4 text-[#1A1A1A] font-medium bg-[#1F5E4B]/5 border-b border-gray-100">
                            <span className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4.5 w-4.5 flex-shrink-0 text-[#1F5E4B]" /> {row.ramacare}</span>
                          </td>
                          <td className="px-6 py-4 text-[#5F5F5F] border-b border-gray-100">
                            <span className="flex items-start gap-2"><X className="mt-0.5 h-4.5 w-4.5 flex-shrink-0 text-red-400" /> {row.other}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ NEARBY AREAS ============================ */}
        <section className="px-4 py-20 bg-white">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Our Community" title="Nearby Areas We Serve" subtitle="While RamaCare Polyclinic is based in Jumeirah 1, we regularly serve patients from across the wider community. Whether you are a long-time Jumeirah resident or working nearby in Downtown or Business Bay, our clinic is a realistic, convenient option for ongoing healthcare needs." />
            <div className="flex flex-wrap gap-3">
              {NEARBY_AREAS.map((a) => (
                <span key={a} className="flex items-center gap-2 rounded-full border border-[#1F5E4B]/15 bg-[#F9F7F2] hover:bg-[#1F5E4B]/10 px-5 py-2.5 text-sm font-semibold text-[#1A1A1A] transition-colors duration-200 cursor-default">
                  <MapPin className="h-4 w-4 text-[#1F5E4B]" /> {a}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ PATIENT EXPERIENCE ============================ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0F3B2E] via-[#103D30] to-[#061B15] px-4 py-20 text-white">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-[#D4A574]/10 blur-3xl pointer-events-none"></div>

          <div className="relative mx-auto max-w-7xl">
            <div className="border-b border-white/10 pb-6 mb-12">
              <span className="text-sm font-bold uppercase tracking-[0.14em] text-[#D4A574]">The Experience</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">The Patient Experience at RamaCare</h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="relative bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
                <p className="text-sm sm:text-base leading-relaxed text-white/90">
                  From the moment you walk into our polyclinic in Jumeirah, our reception team
                  focuses on making the visit simple — clear guidance on paperwork, realistic
                  waiting time estimates, and a genuinely friendly welcome rather than a purely
                  transactional check-in.
                </p>
              </div>
              <div className="relative bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
                <p className="text-sm sm:text-base leading-relaxed text-white/90">
                  Treatment rooms are modern, clean, and private, designed to put patients at ease
                  rather than feel clinical and cold. Our professional staff are trained to
                  communicate clearly at every step, whether explaining a physiotherapy exercise, a
                  dental procedure, or the reasoning behind a treatment plan.
                </p>
              </div>
              <div className="relative bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
                <p className="text-sm sm:text-base leading-relaxed text-white/90">
                  After treatment, personalized follow-up ensures your care does not end the moment
                  you leave the building. Our teams check in on recovery progress and adjust plans
                  as needed, so long-term outcomes remain the focus rather than a single visit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ EEAT COMMITMENT ============================ */}
        <section className="px-4 py-20 bg-white">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Clinical Integrity" title="Our Commitment to Ethical, Evidence-Based Care" subtitle="As a polyclinic in Jumeirah, RamaCare is built around a simple principle: healthcare decisions should be based on evidence and honest communication, not exaggerated promises." />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {EEAT_POINTS.map((p) => (
                <div key={p} className="flex items-start gap-3 rounded-2xl bg-[#F9F7F2] p-5 text-sm sm:text-base leading-relaxed text-[#1A1A1A] border border-gray-100 hover:shadow-sm transition-shadow">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#1F5E4B]/10 text-[#1F5E4B]">
                    <ThumbsUp className="h-4.5 w-4.5" />
                  </div>
                  <span>{p}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-2xl bg-gray-50 border border-gray-100 p-6">
              <p className="text-sm italic leading-relaxed text-[#5F5F5F]">
                <strong className="text-[#1A1A1A] not-italic font-bold block mb-1">Medical Disclaimer:</strong> The information on this page is provided for general educational
                purposes only and does not constitute medical advice, diagnosis, or treatment.
                Individual results vary based on each patient's condition, medical history, and
                response to treatment. Please consult a qualified physician at RamaCare Polyclinic
                for an accurate diagnosis and a treatment plan suited to your specific needs. In case
                of a medical emergency, please contact emergency services immediately.
              </p>
            </div>
          </div>
        </section>

        {/* ============================ FAQ ============================ */}
        <section className="bg-[#F9F7F2] px-4 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Common Questions" title="Frequently Asked Questions" center={true} />
            <div className="grid gap-6 md:grid-cols-2 items-start">
              {[FAQS.slice(0, 10), FAQS.slice(10)].map((col, colIdx) => (
                <div key={colIdx} className="space-y-4">
                  {col.map((f, i) => {
                    const idx = colIdx * 10 + i;
                    const isOpen = openFaq === idx;
                    return (
                      <div key={f.q} className="rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden">
                        <button onClick={() => setOpenFaq(isOpen ? -1 : idx)} className="flex w-full items-center gap-4 px-5 py-4 text-left focus:outline-none">
                          <span className="flex-1 text-sm sm:text-base font-bold text-[#1A1A1A]">{idx + 1}. {f.q}</span>
                          <ChevronDown className={`h-5 w-5 flex-shrink-0 text-[#5F5F5F] transition-transform duration-250 ${isOpen ? 'rotate-180 text-[#1F5E4B]' : ''}`} />
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                              <div className="px-5 pb-5 pt-1 border-t border-gray-50 bg-[#F9F7F2]/10">
                                <p className="text-sm sm:text-base leading-relaxed text-[#5F5F5F]">{f.a}</p>
                              </div>
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

        {/* ============================ RESOURCE HUB — internal links ============================ */}
        <section className="px-4 py-20 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <Eyebrow>Explore RamaCare</Eyebrow>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">All Our Services in One Place</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {LINK_GROUPS.map((g) => (
                <div key={g.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider" style={{ color: g.color }}>{g.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.links.map((l) => (
                      <Link key={l.href} href={l.href} className="rounded-full border border-gray-100 bg-[#F9F7F2] hover:bg-[#1F5E4B]/10 px-3.5 py-2 text-xs sm:text-sm font-semibold text-[#1A1A1A] transition-colors">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ FINAL CTA ============================ */}

        <section id="book" className="px-4 pb-20">
          <div className="relative overflow-hidden mx-auto max-w-7xl rounded-3xl bg-gradient-to-br from-[#1F5E4B] via-[#103D30] to-[#0A241C] p-8 sm:p-12 text-white shadow-2xl">
            {/* Ambient gradients */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#D4A574]/15 blur-3xl pointer-events-none"></div>

            <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl leading-tight">Book Your Appointment Today</h2>
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/90">
                  If you have been searching for a reliable polyclinic in Jumeirah, RamaCare
                  Polyclinic offers everything a family needs — DHA licensed doctors,
                  multi-specialty care, same-day appointments, and a genuinely patient-first
                  approach — all in one convenient Jumeirah 1 location.
                </p>
                <p className="mt-4 text-sm sm:text-base font-bold text-[#D4A574]">
                  Your health deserves a clinic that treats you as a whole person, not just an
                  appointment slot. Experience the RamaCare difference today.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Link href="/book-appointment" className="flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/15 px-5 py-4 text-sm font-semibold hover:bg-white/20 transition-all duration-200">
                    <Building2 className="h-5 w-5" /> Book Online
                  </Link>
                  <a href={waLink("Hello RamaCare, I'd like to book an appointment.")} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/15 px-5 py-4 text-sm font-semibold hover:bg-white/20 transition-all duration-200">
                    <MessageCircle className="h-5 w-5" /> WhatsApp Us
                  </a>
                  <a href="tel:+971566597878" className="flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/15 px-5 py-4 text-sm font-semibold hover:bg-white/20 transition-all duration-200">
                    <Phone className="h-5 w-5" /> Call the Clinic
                  </a>
                  <Link href="/contact-us" className="flex items-center justify-center gap-2 rounded-xl bg-[#D4A574] px-5 py-4 text-sm font-semibold text-[#0F3B2E] hover:bg-[#c39363] hover:shadow-lg transition-all duration-200">
                    <MapPin className="h-5 w-5" /> Visit Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}