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
   brief. Includes all detailed copy as requested.
  ------------------------------------------------------------------- */
const SITE_URL = 'https://ramacarepolyclinic.ae';
const PAGE_PATH = '/services/polyclinic-near-jbr';

const whyChoose = [
  { 
    icon: 'ShieldCheck', 
    title: 'DHA Licensed and Regulated Care', 
    text: 'RamaCare Polyclinic operates under a full DHA license, meaning every doctor, treatment protocol, and piece of equipment in our clinic meets Dubai Health Authority standards. This isn\'t just a formality — it\'s your assurance that the care you receive is regulated, monitored, and held to a consistent benchmark of safety and quality. In a city with countless healthcare options, DHA licensing is one of the clearest signals that a clinic takes patient safety seriously.' 
  },
  { 
    icon: 'Users', 
    title: 'Experienced Specialists Across Multiple Fields', 
    text: 'Our team includes DHA licensed doctors across general medicine, physiotherapy, dermatology, dental care, and Ayurveda. Each specialist brings years of hands-on clinical experience, which means your treatment plan is shaped by real expertise rather than guesswork. This multi-specialty structure is particularly valuable for families managing several health needs at once, or for anyone who prefers a single trusted clinic over juggling multiple providers across the city.' 
  },
  { 
    icon: 'Microscope', 
    title: 'Modern Facilities and Diagnostic Equipment', 
    text: 'Effective treatment starts with accurate diagnosis. Our clinic is equipped with modern diagnostic and treatment technology, allowing our doctors to assess conditions thoroughly and design treatment plans based on evidence rather than assumption. From physiotherapy equipment to dermatology tools and dental technology, we invest in infrastructure that supports precise, comfortable care.' 
  },
  { 
    icon: 'Navigation', 
    title: 'A Short, Convenient Drive from JBR', 
    text: 'Location matters when you\'re not feeling well. RamaCare\'s position in Jumeirah 1 keeps us within easy reach of JBR, Dubai Marina, Bluewaters Island, and the surrounding communities. You won\'t need to plan your entire day around a clinic visit — whether you\'re coming from a JBR apartment, a beachfront hotel, or a nearby office, the drive is manageable and the parking is stress-free.' 
  },
  { 
    icon: 'Home', 
    title: 'Family Healthcare Under One Roof', 
    text: 'We see plenty of families who want a single family clinic near JBR rather than separate providers for each member. RamaCare accommodates children, adults, and seniors, with doctors who adjust their communication and treatment style to the patient in front of them. This continuity makes it easier to track health history and coordinate care across the whole household.' 
  },
  { 
    icon: 'UserCheck', 
    title: 'Personalized Treatment, Not One-Size-Fits-All', 
    text: 'No two patients are identical, and we don\'t treat them that way. Every consultation at RamaCare begins with a genuine conversation about your symptoms, history, and lifestyle before any treatment plan is proposed. This personalized treatment approach applies across all our departments, from physiotherapy rehabilitation plans to skincare routines and Ayurvedic wellness programs.' 
  },
  { 
    icon: 'Sparkles', 
    title: 'A Comfortable, Welcoming Environment', 
    text: 'Clinical visits can feel intimidating, so we\'ve worked to make ours feel less so. Our reception area, consultation rooms, and treatment spaces are designed to be calm and clean, with a friendly front-desk team that makes check-in simple. It\'s a small detail, but it changes how patients experience the whole visit.' 
  },
  { 
    icon: 'Wallet', 
    title: 'Affordable, Transparent Healthcare', 
    text: 'We believe quality healthcare shouldn\'t come with confusing pricing. Our team is upfront about consultation fees and treatment costs before you commit to anything, and we work with a range of insurance providers to make care more accessible.' 
  },
  { 
    icon: 'Heart', 
    title: 'A Patient-First Philosophy', 
    text: 'Above all, RamaCare operates on a simple principle: patients come first. That means listening before prescribing, explaining before treating, and following up after every visit to make sure your recovery stays on track. It\'s this patient-first approach, paired with our convenient location, that makes us a genuine alternative to searching endlessly for a medical clinic near JBR.' 
  },
];

const departments = [
  {
    icon: 'Activity',
    name: 'Physiotherapy',
    text: "Our physiotherapy department serves anyone dealing with pain, stiffness, or reduced mobility — from office workers with desk-related back pain to athletes recovering from injury and older adults managing arthritis. We treat conditions including back pain, neck pain, shoulder pain, sciatica, frozen shoulder, sports injuries, and post-surgical rehabilitation.\n\nOur physiotherapists begin with a detailed clinical assessment to understand the root cause of your discomfort, not just the symptom. From there, we build a personalized treatment approach combining manual therapy, targeted exercises, and modern rehabilitation techniques designed around your daily life and recovery goals.\n\nThe benefit of physiotherapy at a multi-specialty polyclinic is coordination — if your pain is linked to a broader medical issue, our physiotherapists can consult directly with our general physicians without you needing a separate referral trip across the city.\n\nIf you've been putting off treatment for persistent pain, don't wait for it to worsen. Book a physiotherapy consultation at RamaCare and take the first step toward lasting relief.",
    cta: 'Book a Physiotherapy Consultation',
  },
  {
    icon: 'Smile',
    name: 'Dental Care',
    text: "Dental discomfort has a way of disrupting everything else, and our dental team is here to address it promptly and comfortably. We treat tooth pain, gum disease, cavities, and general oral health concerns, alongside services like teeth whitening and dental veneers for patients focused on both health and appearance.\n\nOur approach starts with a thorough oral examination and honest conversation about your options, whether that means a straightforward filling or a more involved treatment plan. We prioritize minimally invasive techniques wherever appropriate and always explain the reasoning behind our recommendations.\n\nGood oral health supports overall wellbeing, which is why we encourage regular checkups rather than only reactive visits. Families searching for a reliable dental clinic near JBR appreciate having pediatric-friendly and adult dental care available in the same clinic.\n\nDon't let dental pain linger. Schedule a dental consultation and let our team assess what's really going on.",
    cta: 'Schedule a Dental Consultation',
  },
  {
    icon: 'Sun',
    name: 'Dermatology & Aesthetic Medicine',
    text: "Skin concerns are deeply personal, and our dermatology team treats them with the seriousness they deserve. We commonly help patients with acne, pigmentation, hair loss, and general skin health, alongside aesthetic treatments like HydraFacial, skin boosters, and PRP hair treatments for those looking to refresh their skin or restore hair density.\n\nEvery dermatology visit begins with an honest skin assessment — no upselling, no unnecessary procedures. Our doctors explain what's causing your concern and outline realistic treatment timelines and expected outcomes before you commit to anything.\n\nWhether you're dealing with a stubborn breakout, sun-related pigmentation, or thinning hair, a skin clinic near JBR that takes a medical, evidence-based approach makes a real difference in results.\n\nReady to address your skin or hair concern properly? Book a dermatology consultation at RamaCare.",
    cta: 'Book a Dermatology Consultation',
  },
  {
    icon: 'Stethoscope',
    name: 'General Medicine',
    text: "Our general medicine department is often the first stop for patients dealing with everyday health issues — colds, infections, fatigue, digestive discomfort, and routine checkups. As your general physician near JBR, our doctors take time to understand your full health picture rather than rushing through a checklist.\n\nWe treat acute illnesses, manage chronic conditions like diabetes and hypertension, and provide the kind of ongoing primary healthcare that builds a real doctor-patient relationship over time. When a concern needs specialist input, our general physicians coordinate directly with our in-house specialists.\n\nThis is the backbone of a true GP clinic near JBR — accessible, unhurried consultations paired with the ability to escalate care quickly when something more serious is at play.\n\nFeeling under the weather or overdue for a checkup? Book a general medicine consultation today.",
    cta: 'Book a General Medicine Consultation',
  },
  {
    icon: 'Leaf',
    name: 'Ayurveda',
    text: "For patients interested in a more holistic path to wellness, our Ayurveda department offers traditional treatments rooted in centuries-old practice, adapted thoughtfully for modern patients. We commonly support patients dealing with chronic pain, joint issues, stress, digestive imbalances, and general fatigue.\n\nOur Ayurvedic consultations begin with an assessment of your constitution, lifestyle, and specific concerns, followed by a tailored plan that may include therapies, dietary guidance, and lifestyle adjustments. Many patients use Ayurveda alongside conventional treatment for a more integrated healthcare experience.\n\nThis blend of traditional and modern medicine is part of what makes RamaCare a genuinely integrated healthcare provider rather than a single-lane clinic.\n\nCurious whether Ayurveda is right for you? Speak to our Ayurveda specialist to find out.",
    cta: 'Speak to Our Ayurveda Specialist',
  },
  {
    icon: 'ClipboardCheck',
    name: 'Preventive Health Checkups',
    text: "Catching a problem early is almost always easier and less costly than treating it late. Our preventive health checkups are designed for anyone who wants a clear picture of their current health, whether you're due for an annual review or haven't seen a doctor in a while.\n\nThese checkups typically include a general physical assessment, relevant screenings, and a conversation about risk factors based on your age, lifestyle, and family history. Our doctors use these visits to flag early warning signs before they become bigger issues.\n\nPreventive healthcare is one of the most valuable things you can do for your long-term wellbeing, and it's a service we actively encourage for patients across every age group.\n\nHaven't had a checkup this year? Book your preventive health screening now.",
    cta: 'Book Your Preventive Health Screening',
  },
  {
    icon: 'HeartPulse',
    name: 'Wellness Programs',
    text: "Beyond treating illness, RamaCare supports patients who simply want to feel and function better day to day. Our wellness programs are built around sustainable lifestyle changes — nutrition guidance, stress management, activity planning, and follow-up support to help you stay on track.\n\nThese programs are especially popular with professionals managing high-stress schedules and patients recovering from a health scare who want to prevent recurrence. Each plan is personalized rather than generic, based on a proper consultation with our team.\n\nWellness programs work best as an ongoing partnership, not a one-time visit, and our doctors stay involved throughout your progress.\n\nInterested in a structured path to better health? Ask about our wellness programs at your next visit.",
    cta: 'Ask About Our Wellness Programs',
  },
];

const conditionGroups = [
  {
    dept: 'Physiotherapy',
    items: [
      { name: 'Back Pain', text: 'Back pain is one of the most common reasons patients visit our physiotherapy department, often linked to poor posture, prolonged sitting, or muscle strain. Our physiotherapists assess your spine alignment and movement patterns before building a personalized treatment approach involving manual therapy and corrective exercises. Left untreated, back pain can worsen and limit daily activity, so early assessment matters.' },
      { name: 'Neck Pain', text: 'Neck pain frequently stems from desk work, poor sleeping posture, or stress-related muscle tension. We evaluate the underlying cause through a hands-on clinical assessment and design a treatment plan that may include manual therapy, posture correction, and targeted stretching to restore comfortable movement.' },
      { name: 'Knee Pain', text: 'Whether caused by injury, overuse, or wear and tear, knee pain can significantly limit mobility. Our team assesses joint function and surrounding muscle strength to determine the right combination of physiotherapy and, where relevant, coordinated medical care to reduce pain and rebuild stability.' },
      { name: 'Shoulder Pain', text: 'Shoulder pain often results from repetitive strain, injury, or underlying joint issues. We evaluate the range of motion and pinpoint the source of discomfort before recommending a physiotherapy-led treatment plan aimed at restoring function without unnecessary downtime.' },
      { name: 'Sciatica', text: 'Sciatica causes pain that radiates from the lower back down the leg, often due to nerve compression. Our physiotherapists focus on relieving pressure on the affected nerve through targeted therapy and movement correction, helping patients manage discomfort and regain mobility over time.' },
      { name: 'Frozen Shoulder', text: 'Frozen shoulder involves stiffness and restricted movement that develops gradually and can be frustrating to manage alone. Our treatment approach combines manual therapy with a structured exercise program designed to slowly restore range of motion and reduce pain.' },
      { name: 'Sports Injuries', text: 'From sprains to strains and overuse injuries, athletes and active individuals trust our physiotherapy team for injury assessment and rehabilitation. We build recovery plans that consider your specific sport or activity, aiming to get you back to performance safely.' },
      { name: 'Arthritis', text: 'Arthritis-related joint pain and stiffness can affect daily comfort and mobility. Our approach combines physiotherapy, and where appropriate, Ayurvedic support for chronic pain management, focused on improving function and reducing flare-ups over time.' },
    ],
  },
  {
    dept: 'Dermatology',
    items: [
      { name: 'Acne', text: 'Acne can affect confidence as much as skin health. Our dermatology team assesses your skin type and acne severity to recommend an evidence-based treatment plan, avoiding harsh or unnecessary products in favor of what actually addresses the underlying cause.' },
      { name: 'Hair Loss', text: 'Hair loss can stem from stress, hormonal changes, or genetics, and our dermatologists start by identifying the likely cause. Treatment options range from topical approaches to PRP hair treatment, tailored to your specific pattern of hair thinning.' },
      { name: 'Pigmentation', text: 'Sun exposure, hormonal shifts, and skin trauma can all lead to pigmentation concerns. We assess your skin condition thoroughly before recommending treatments such as targeted skincare or in-clinic procedures suited to your skin type.' },
    ],
  },
  {
    dept: 'Dental',
    items: [
      { name: 'Tooth Pain', text: 'Tooth pain is rarely something to ignore, as it often signals an underlying issue like decay or infection. Our dental team conducts a prompt examination to identify the cause and recommend the appropriate treatment before the problem worsens.' },
      { name: 'Gum Disease', text: 'Gum disease, if untreated, can progress and affect overall oral health. We assess gum condition during your dental visit and provide treatment options ranging from professional cleaning to more targeted periodontal care.' },
    ],
  },
  {
    dept: 'General Medicine & Ayurveda',
    items: [
      { name: 'Digestive Disorders', text: 'Digestive discomfort, bloating, and irregular digestion are common concerns our general medicine and Ayurveda teams address together. We look at diet, lifestyle, and underlying medical factors to build a plan that brings lasting relief rather than temporary fixes.' },
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
  { title: 'Book an Appointment', text: 'Reach out by phone, WhatsApp, or our website to schedule a visit, including same-day slots when available.' },
  { title: 'Consultation', text: 'Meet with the relevant specialist and walk through your symptoms, history, and concerns in detail.' },
  { title: 'Clinical Assessment', text: 'Undergo a hands-on examination or relevant diagnostic tests to understand what\'s really happening.' },
  { title: 'Diagnosis', text: 'Receive a clear, honest explanation of your condition, with no medical jargon left unexplained.' },
  { title: 'Personalized Treatment Plan', text: 'Get a treatment roadmap built specifically around your condition, lifestyle, and goals.' },
  { title: 'Treatment', text: 'Begin your treatment, whether that\'s a single session or an ongoing program, delivered by experienced practitioners.' },
  { title: 'Follow-Up Care', text: 'Attend follow-up visits to track progress and adjust your plan as needed, ensuring your recovery stays on course.' },
];

const multiSpecialtyBenefits = [
  'One clinic, multiple specialties. You don\'t need separate providers for physiotherapy, dermatology, dental care, and general medicine — it\'s all available in one place.',
  'Better communication between doctors. When specialists work under the same roof, they can consult each other directly, leading to more coordinated, accurate care.',
  'Faster referrals. If your general physician identifies a need for a specialist, that referral happens quickly and internally, without weeks of delay.',
  'More convenient healthcare overall. Fewer clinics to manage means fewer appointments to juggle and less time spent explaining your history repeatedly.',
  'Family-focused care. Every member of your household, regardless of age or health need, can be seen at the same trusted clinic.',
  'Time-saving for busy patients. Between work, travel, and daily life, consolidating your healthcare into one location saves real time.',
  'Better patient outcomes. Coordinated care between specialists tends to produce more accurate diagnoses and more effective, joined-up treatment plans.',
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
  { q: '1. Is RamaCare Polyclinic close to JBR?', a: 'Yes. RamaCare Polyclinic is located in Jumeirah 1, a short and manageable drive from Jumeirah Beach Residence via Jumeirah Beach Road or Sheikh Zayed Road.' },
  { q: '2. How long does it take to reach RamaCare from JBR?', a: 'Travel time depends on traffic conditions at the time of your journey, but the route from JBR to our Jumeirah 1 clinic is generally quick and straightforward by car or taxi.' },
  { q: '3. Do you provide same-day appointments?', a: 'Yes, we offer same-day appointments whenever slots are available, so you\'re not left waiting when a health concern comes up unexpectedly.' },
  { q: '4. Which specialties are available at RamaCare?', a: 'We offer general medicine, physiotherapy, dental care, dermatology and aesthetic medicine, Ayurveda, preventive health checkups, and wellness programs, all within one polyclinic.' },
  { q: '5. Is physiotherapy available at your clinic?', a: 'Yes, our physiotherapy department treats conditions like back pain, neck pain, shoulder pain, sciatica, frozen shoulder, and sports injuries.' },
  { q: '6. Do you provide dental treatments?', a: 'Yes, our dental team handles tooth pain, gum disease, teeth whitening, dental veneers, and general oral health care.' },
  { q: '7. Do you treat children?', a: 'Yes, RamaCare is a family-friendly clinic, and our doctors are experienced in treating patients across all age groups, including children.' },
  { q: '8. Are walk-ins accepted?', a: 'While we recommend booking ahead to minimize your wait, we do our best to accommodate walk-in patients depending on doctor availability.' },
  { q: '9. Is the clinic DHA licensed?', a: 'Yes, RamaCare Polyclinic is a fully DHA licensed facility, meeting all Dubai Health Authority regulatory and safety standards.' },
  { q: '10. Do you offer preventive health checkups?', a: 'Yes, we offer preventive health screenings designed to catch potential issues early and support long-term wellbeing.' },
  { q: '11. What insurance plans are accepted?', a: 'We work with a range of insurance providers. We recommend contacting our team directly to confirm whether your specific plan is accepted.' },
  { q: '12. How do I book an appointment?', a: 'You can book an appointment by calling the clinic, messaging us on WhatsApp, or submitting a request through our website.' },
  { q: '13. What are your clinic timings?', a: 'Our clinic timings are available on our contact page and by phone. We recommend confirming current hours before your visit.' },
  { q: '14. Do you have parking near the clinic?', a: 'Yes, parking near RamaCare Polyclinic is convenient, making it easy for patients coming from JBR and surrounding areas.' },
  { q: '15. Do you offer dermatology treatments like HydraFacial or PRP?', a: 'Yes, our dermatology and aesthetic medicine department offers treatments including HydraFacial, skin boosters, and PRP hair treatment.' },
  { q: '16. Can I get an Ayurvedic consultation for chronic pain?', a: 'Yes, our Ayurveda department supports patients dealing with chronic pain, joint issues, and stress through traditional, personalized treatment approaches.' },
  { q: '17. Is RamaCare suitable for tourists staying near JBR?', a: 'Yes, we regularly see tourists and hotel guests staying around JBR who need convenient, reliable medical care during their stay.' },
  { q: '18. Do you treat sports injuries?', a: 'Yes, our physiotherapy team assesses and treats a range of sports-related injuries with rehabilitation plans built around your activity level.' },
  { q: '19. How experienced are your doctors?', a: 'Our doctors bring years of clinical experience across their respective specialties and are all licensed under DHA regulatory standards.' },
  { q: '20. What should I bring to my first appointment?', a: 'Please bring a valid ID, insurance details if applicable, and any relevant previous medical records to help our doctors understand your history.' },
];

const areasServed = ['Jumeirah Beach Residence (JBR)', 'Dubai Marina', 'Bluewaters Island', 'Jumeirah 1', 'Jumeirah 2', 'Al Wasl', 'Dubai Harbour', 'Palm Jumeirah', 'Business Bay', 'Downtown Dubai'];

const commitments = [
  'DHA licensed doctors across every department, ensuring regulatory compliance and consistent quality',
  'Experienced specialists with real, demonstrated clinical expertise',
  'Evidence-based treatments, not trends or unnecessary procedures',
  'Ethical healthcare practices, including transparent pricing and honest diagnosis',
  'Personalized treatment plans built around each patient\'s actual needs',
  'Ongoing patient education, so you understand your condition and your options',
];

function buildSchema() {
  const medicalClinic = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'RamaCare Polyclinic',
    url: SITE_URL + '/',
    telephone: '+971566597878',
    priceRange: 'AED',
    address: { '@type': 'PostalAddress', streetAddress: '12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1', addressLocality: 'Dubai', addressCountry: 'AE' },
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

function IconTile({ name, className = 'w-5 h-5 text-[#1F5E4B]' }) {
  const Icon = LucideIcons[name] || LucideIcons.Circle;
  return <Icon className={className} />;
}

function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1F5E4B]/8 px-3.5 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-[#1F5E4B]">
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`mb-12 ${center ? 'mx-auto max-w-3xl text-center' : 'text-left max-w-4xl'}`}>
      {eyebrow && <div className="mb-4"><Eyebrow>{eyebrow}</Eyebrow></div>}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A1A1A] leading-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#5F5F5F] font-medium">{subtitle}</p>}
    </div>
  );
}

export default function PolyclinicNearJbrPage() {
  const { showToast, ToastComponent } = useToast();
  const [activeDept, setActiveDept] = useState(0);
  const [activeConditionTab, setActiveConditionTab] = useState(0);
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
        <title key="title">Polyclinic Near JBR | Trusted Multi-Specialty Healthcare at RamaCare Polyclinic</title>
        <meta
          name="description"
          content="Looking for a trusted polyclinic near JBR? RamaCare Polyclinic in Jumeirah 1 offers DHA-licensed multi-specialty care with same-day appointments. Book today."
          key="description"
        />
        <link rel="canonical" href={SITE_URL + PAGE_PATH} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Polyclinic Near JBR | Trusted Multi-Specialty Healthcare at RamaCare Polyclinic" />
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

      <div className="bg-white text-[#1A1A1A] antialiased pb-20 overflow-x-hidden">

        {/* ============ HERO — route/proximity motif ============ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#F9F7F2] via-white to-[#F9F7F2]/50 px-4 py-16 sm:py-24 border-b border-gray-100">
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
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#D4A574]/5 blur-3xl pointer-events-none"></div>

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Text Content & CTAs */}
              <div className="lg:col-span-7 text-left">
                <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm font-semibold text-[#5F5F5F]">
                  <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
                  <span aria-hidden="true" className="text-gray-300">/</span>
                  <Link href="/services" className="hover:text-[#1F5E4B] transition-colors">Services</Link>
                  <span aria-hidden="true" className="text-gray-300">/</span>
                  <span aria-current="page" className="text-[#1F5E4B]">Polyclinic Near JBR</span>
                </nav>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] leading-tight mb-6 tracking-tight">
                  Polyclinic Near JBR 
                  <span className="block mt-2 text-[#1F5E4B] font-semibold text-xl sm:text-2xl lg:text-3xl">
                    Trusted Multi-Specialty Healthcare at RamaCare Polyclinic
                  </span>
                </h1>
                
                <div className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed space-y-4 mb-8">
                  <p>
                    If you live, work, or are staying anywhere close to Jumeirah Beach Residence, finding a reliable polyclinic near JBR shouldn't mean crossing half the city or waiting weeks for an appointment. RamaCare Polyclinic, based in Jumeirah 1, sits just a short drive from JBR and has become a trusted healthcare destination for residents, hotel guests, tourists, office professionals, and families who want quality medical care without the hassle.
                  </p>
                  <p>
                    Getting to us from JBR is straightforward, whether you're driving down Jumeirah Beach Road, taking Sheikh Zayed Road, or simply hopping into a taxi. There's no need to navigate confusing routes or fight through unfamiliar traffic patterns — our location in Jumeirah 1 is easy to find and easy to reach.
                  </p>
                  <p>
                    What sets RamaCare apart isn't just proximity, though. As a DHA licensed polyclinic, we bring together experienced multi-specialty doctors under one roof, so you're never bounced between unrelated clinics for different health concerns. Need a general physician for a nagging cough, a physiotherapist for shoulder pain, a dermatologist for a skin concern, or a dentist for a toothache? You'll find all of it here, backed by modern medical equipment and a genuinely personalized approach to care.
                  </p>
                  <p>
                    We also understand that health issues rarely wait for a convenient time. That's why we offer same-day appointments whenever possible, so a busy schedule or a last-minute flare-up doesn't stand between you and the treatment you need.
                  </p>
                  <p className="hidden md:block">
                    Whether you're a long-term Dubai Marina resident, a tourist staying at a JBR beachfront hotel, or a professional working nearby, RamaCare Polyclinic is designed to be your dependable, family-friendly healthcare partner — close enough to visit easily, and experienced enough to trust with your care.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button onClick={handleBookAppointment} className="inline-flex items-center gap-2 rounded-xl bg-[#1F5E4B] px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-[#17493B] hover:shadow-xl transition-all hover:-translate-y-0.5 duration-200">
                    <LucideIcons.Calendar className="w-5 h-5" /> Book an Appointment
                  </button>
                  <button onClick={() => handleWhatsAppClick()} className="inline-flex items-center gap-2 rounded-xl border border-[#1F5E4B]/30 bg-white px-8 py-4 text-sm font-bold text-[#1F5E4B] hover:bg-[#F9F7F2] transition-colors">
                    <LucideIcons.MessageCircle className="w-5 h-5" /> WhatsApp Us
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Journey & Map Card */}
              <div className="lg:col-span-5 flex flex-col gap-6 w-full">
                
                {/* Visual Route Info Card */}
                <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl ring-1 ring-gray-100/50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5E4B]/5 rounded-bl-full pointer-events-none"></div>
                  
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1F5E4B] mb-6 flex items-center gap-2">
                    <LucideIcons.Compass className="w-4 h-4" /> Proximity & Location
                  </h3>

                  <div className="relative pl-6 border-l-2 border-dashed border-[#1F5E4B]/20 space-y-8">
                    {/* Start point */}
                    <div className="relative">
                      <div className="absolute -left-[31px] top-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#D4A574]">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <p className="text-sm font-bold text-[#1A1A1A]">Jumeirah Beach Residence (JBR)</p>
                      <p className="text-xs text-[#5F5F5F] mt-0.5">Your location/hotel/office</p>
                    </div>

                    {/* Path Info */}
                    <div className="relative py-1">
                      <div className="absolute -left-[38px] top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B]">
                        <LucideIcons.Car className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1F5E4B] bg-[#1F5E4B]/5 px-2 py-1 rounded">
                          <LucideIcons.Clock className="w-3 h-3" /> Quick Access
                        </span>
                        <span className="text-xs text-[#5F5F5F] font-medium">via Beach Road or SZR</span>
                      </div>
                    </div>

                    {/* End point */}
                    <div className="relative">
                      <div className="absolute -left-[33px] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-[#1F5E4B]">
                        <LucideIcons.MapPin className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-sm font-bold text-[#1A1A1A]">RamaCare Polyclinic</p>
                      <p className="text-xs text-[#1F5E4B] font-semibold mt-0.5">Jumeirah Terrace, Jumeirah 1</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs text-[#5F5F5F]">Parking status</p>
                      <p className="text-xs font-bold text-[#1A1A1A] flex items-center gap-1 mt-0.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span> Free & Stress-Free
                      </p>
                    </div>
                    <Link href="/contact-us" className="inline-flex items-center gap-1 text-xs font-bold text-[#1F5E4B] hover:underline">
                      View Map Route <LucideIcons.ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-[#F9F7F2] p-4 border border-gray-100 text-left hover:shadow-md transition-shadow">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B] mb-3">
                      <LucideIcons.ShieldCheck className="w-5 h-5" />
                    </div>
                    <p className="text-xs text-[#5F5F5F]">Licensing</p>
                    <p className="text-sm font-bold text-[#1A1A1A] mt-0.5">DHA Licensed Clinic</p>
                  </div>
                  <div className="rounded-2xl bg-[#F9F7F2] p-4 border border-gray-100 text-left hover:shadow-md transition-shadow">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D4A574]/10 text-[#D4A574] mb-3">
                      <LucideIcons.CalendarCheck className="w-5 h-5" />
                    </div>
                    <p className="text-xs text-[#5F5F5F]">Availability</p>
                    <p className="text-sm font-bold text-[#1A1A1A] mt-0.5">Same-Day Slots</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ============ Why choose — grid with icons ============ */}
        <section className="bg-[#F9F7F2]/60 py-24 px-6 border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              eyebrow="RamaCare Standards" 
              title="Why Choose RamaCare Polyclinic Near JBR" 
              subtitle="Choosing a healthcare provider is a decision that deserves more thought than picking the nearest signboard. When you're comparing options for a polyclinic near JBR, it helps to understand exactly what you're getting — and at RamaCare, that means licensed medical expertise, modern facilities, and a patient-first philosophy that shapes every visit." 
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {whyChoose.map((w) => (
                <div key={w.title} className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B] group-hover:bg-[#1F5E4B] group-hover:text-white transition-colors duration-300 mb-5">
                      <IconTile name={w.icon} className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-extrabold text-[#1A1A1A] tracking-tight">{w.title}</h3>
                    <p className="text-sm text-[#5F5F5F] leading-relaxed mt-3">{w.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Healthcare services — Split list & detail board ============ */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-b border-gray-100">
          <SectionHeading 
            eyebrow="Our Specialties" 
            title="Healthcare Services Available" 
            subtitle="As a full-service polyclinic near JBR, RamaCare brings together the following departments under one roof, so you can address multiple health needs in a single, convenient visit." 
          />
          
          <div className="grid lg:grid-cols-12 gap-8 items-start mt-12">
            
            {/* Left Column: Vertical tab list */}
            <div className="lg:col-span-4 space-y-2">
              {departments.map((d, idx) => {
                const isActive = activeDept === idx;
                return (
                  <button
                    key={d.name}
                    onClick={() => setActiveDept(idx)}
                    className={`w-full flex items-center gap-4 px-5 py-4 text-left rounded-2xl border transition-all duration-200 ${
                      isActive 
                        ? 'bg-[#1F5E4B] border-[#1F5E4B] text-white shadow-lg' 
                        : 'bg-white border-gray-100 hover:border-gray-200 text-[#1A1A1A] hover:bg-gray-50/50'
                    }`}
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isActive ? 'bg-white/10 text-white' : 'bg-[#1F5E4B]/10 text-[#1F5E4B]'
                    }`}>
                      <IconTile name={d.icon} className="w-5 h-5" />
                    </div>
                    <span className="font-extrabold text-sm sm:text-base tracking-tight">{d.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Department details view */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                {departments.map((d, idx) => {
                  if (idx !== activeDept) return null;
                  return (
                    <motion.div
                      key={d.name}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.25 }}
                      className="rounded-3xl border border-gray-100 bg-[#F9F7F2]/40 p-6 sm:p-10 shadow-sm relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-36 h-36 bg-[#1F5E4B]/5 rounded-bl-full pointer-events-none"></div>
                      
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1F5E4B] text-white shadow-md">
                          <IconTile name={d.icon} className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-[#D4A574]"> RamaCare Department </p>
                          <h3 className="text-xl sm:text-2xl font-extrabold text-[#1A1A1A] mt-0.5">{d.name}</h3>
                        </div>
                      </div>

                      <div className="space-y-4 text-sm sm:text-base text-[#5F5F5F] leading-relaxed">
                        {d.text.split('\n\n').map((para, pi) => (
                          <p key={pi}>{para}</p>
                        ))}
                      </div>

                      <div className="mt-8 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                        <button
                          onClick={() => handleWhatsAppClick(d.name.toLowerCase())}
                          className="inline-flex items-center gap-2 rounded-xl bg-[#1F5E4B] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#17493B] hover:shadow-lg transition-all"
                        >
                          <LucideIcons.MessageCircle className="w-4 h-4" /> {d.cta}
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

          </div>
        </section>

        {/* ============ Conditions — Grouped tabs & grid view ============ */}
        <section className="bg-[#F9F7F2]/60 py-24 px-6 border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              eyebrow="Clinical Care" 
              title="Conditions We Commonly Treat" 
              subtitle="Professional therapy and diagnosis for standard conditions, focusing on pain relief and long-term recovery." 
            />

            {/* Tab Selectors */}
            <div className="flex flex-wrap gap-2 mb-10 border-b border-gray-100 pb-4 overflow-x-auto">
              {conditionGroups.map((group, idx) => {
                const isActive = activeConditionTab === idx;
                return (
                  <button
                    key={group.dept}
                    onClick={() => setActiveConditionTab(idx)}
                    className={`px-6 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                      isActive 
                        ? 'bg-[#1F5E4B] text-white shadow-md' 
                        : 'bg-white border border-gray-100 hover:border-gray-200 text-[#5F5F5F] hover:text-[#1A1A1A]'
                    }`}
                  >
                    {group.dept}
                  </button>
                );
              })}
            </div>

            {/* Active Tab Condition Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {conditionGroups[activeConditionTab].items.map((c) => (
                <div key={c.name} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-2 w-2 rounded-full bg-[#D4A574]" />
                    <h4 className="text-base font-extrabold text-[#1A1A1A]">{c.name}</h4>
                  </div>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ============ Why JBR patients choose us ============ */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-b border-gray-100">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 text-left">
              <SectionHeading 
                eyebrow="Patient Confidence" 
                title="Why Patients from JBR Choose RamaCare" 
                subtitle="We pride ourselves on offering clinical standards that turn first-time visitors into long-term patients. Our patient-first mindset is integrated into every step of the clinic journey."
              />
              
              <div className="mt-8 rounded-2xl bg-[#F9F7F2] p-6 border border-gray-100">
                <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed font-semibold italic text-[#1F5E4B]">
                  "Together, these factors are why so many JBR residents, tourists, and professionals now consider RamaCare their default healthcare clinic near JBR."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {whyJbrPatients.map((w, idx) => (
                <div key={w} className="flex gap-4 bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B]">
                    <span className="font-extrabold text-sm">0{idx + 1}</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#1A1A1A] font-semibold leading-relaxed">{w}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ============ Treatment process — Horizontal journey timeline ============ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1F5E4B] via-[#103D30] to-[#0A241C] py-24 px-6 text-white border-b border-gray-100">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="border-b border-white/10 pb-6 mb-12">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#D4A574]">Patient Journey</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Our Treatment Process</h2>
              <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl">
                Every visit to our polyclinic near JBR follows a clear, patient-friendly process designed to get you the best outcomes.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
              {journeySteps.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="relative bg-white/5 rounded-2xl p-5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <span className="relative z-10 w-9 h-9 rounded-full bg-[#D4A574] text-white text-xs font-bold flex items-center justify-center mb-3 shadow-md">
                    0{i + 1}
                  </span>
                  <h4 className="text-sm sm:text-base font-extrabold text-white tracking-tight">{s.title}</h4>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed mt-2">{s.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Multi-specialty benefits + comparison table ============ */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-b border-gray-100">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left column: Benefits Cards */}
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="The Polyclinic Edge" title="Benefits of Visiting a Multi-Specialty Polyclinic" />
              <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed mb-6 font-medium">
                Choosing a multi-specialty polyclinic over scattered single-service clinics comes with real, practical advantages:
              </p>
              <div className="space-y-4">
                {multiSpecialtyBenefits.map((b) => (
                  <div key={b} className="flex gap-3 text-sm sm:text-base text-[#1A1A1A] font-semibold leading-relaxed bg-[#F9F7F2]/60 p-4 rounded-2xl border border-gray-50 hover:bg-[#F9F7F2] transition-colors">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] mt-0.5">
                      <LucideIcons.Check className="w-4.5 h-4.5" />
                    </div>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column: Comparison Board */}
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="Comparison" title="Why Choose RamaCare Instead of Multiple Clinics?" />
              <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-xl mt-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 bg-[#1F5E4B] text-white">
                      <th className="text-left px-5 py-4 font-bold text-white text-xs uppercase tracking-wider">Factor</th>
                      <th className="text-left px-5 py-4 font-bold text-white bg-white/10 text-xs uppercase tracking-wider">RamaCare Polyclinic</th>
                      <th className="text-left px-5 py-4 font-bold text-white/80 text-xs uppercase tracking-wider">Multiple Separate Clinics</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compareTable.map((row, i) => (
                      <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F9F7F2]/20'}>
                        <td className="px-5 py-4 border-b border-gray-100 font-extrabold text-[#1A1A1A] text-xs sm:text-sm">{row.feature}</td>
                        <td className="px-5 py-4 border-b border-gray-100 text-[#1F5E4B] text-xs sm:text-sm font-semibold bg-[#1F5E4B]/5">
                          <span className="flex items-start gap-2"><LucideIcons.Check className="mt-0.5 h-4.5 w-4.5 flex-shrink-0" /> {row.rama}</span>
                        </td>
                        <td className="px-5 py-4 border-b border-gray-100 text-[#5F5F5F] text-xs sm:text-sm font-medium">
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
        <section className="bg-[#F9F7F2]/60 py-24 px-6 border-b border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading eyebrow="Our Community" title="Areas We Serve" subtitle="As a well-connected polyclinic near JBR, our patients come from across the surrounding communities, including:" center={true} />
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1F5E4B] text-white px-5 py-2.5 mb-8 shadow-md">
              <LucideIcons.MapPin className="w-4 h-4 text-[#D4A574]" />
              <span className="text-sm font-bold">RamaCare · Jumeirah 1</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {areasServed.map((a) => (
                <span key={a} className="text-sm font-semibold text-[#1A1A1A] bg-white border border-gray-100 hover:border-[#1F5E4B]/30 hover:bg-[#1F5E4B]/5 px-5 py-3 rounded-full transition-colors duration-200 cursor-default shadow-sm">{a}</span>
              ))}
            </div>
            <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed mt-8 max-w-2xl mx-auto font-medium">
              Our Jumeirah 1 location, with easy access via Jumeirah Beach Road and Sheikh Zayed Road, makes us a practical healthcare choice for residents, office professionals, hotel guests, and tourists staying anywhere near these areas.
            </p>
          </div>
        </section>

        {/* ============ Patient experience & Ethical Care (Guarantees) ============ */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-b border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left: Patient Experience Card Stack */}
            <div>
              <SectionHeading eyebrow="Comfort First" title="Patient Experience at RamaCare" />
              <div className="space-y-4">
                <div className="rounded-2xl border border-gray-100 p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1F5E4B]/10 text-[#1F5E4B]">
                      <LucideIcons.Heart className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-extrabold text-[#1A1A1A]">Welcoming Reception</h4>
                  </div>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed pl-11">
                    From the moment you walk in, our goal is to make your visit as comfortable as possible. Our reception area is clean, calm, and welcoming, staffed by a friendly team ready to help with check-in and any questions you might have.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1F5E4B]/10 text-[#1F5E4B]">
                      <LucideIcons.Home className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-extrabold text-[#1A1A1A]">Private Treatment Rooms</h4>
                  </div>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed pl-11">
                    Consultations take place in modern, private treatment rooms, where our professional doctors take the time to listen before recommending anything. Whether you're seeing a physiotherapist, dermatologist, dentist, or general physician, the environment is designed to feel unhurried and respectful of your time and concerns.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1F5E4B]/10 text-[#1F5E4B]">
                      <LucideIcons.ShieldAlert className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-extrabold text-[#1A1A1A]">Dedicated Recovery Follow-up</h4>
                  </div>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed pl-11">
                    After treatment, we don't simply send you on your way. Our team follows up to check on your progress, answer any lingering questions, and adjust your care plan if needed — because a single visit is rarely the full picture of good healthcare.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Commitment cards */}
            <div>
              <SectionHeading eyebrow="Clinical Integrity" title="Our Commitment to Ethical Healthcare" />
              <div className="grid gap-4 sm:grid-cols-2">
                {commitments.map((c) => (
                  <div key={c} className="flex flex-col gap-3 bg-[#F9F7F2] rounded-2xl border border-gray-50 p-5 hover:shadow-md transition-all">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1F5E4B] text-white">
                      <LucideIcons.ShieldCheck className="w-4.5 h-4.5" />
                    </div>
                    <p className="text-xs sm:text-sm text-[#1A1A1A] font-extrabold leading-relaxed">{c}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ============ FAQ — two-column accordion ============ */}
        <section className="max-w-7xl mx-auto px-6 py-24 bg-white border-b border-gray-100">
          <SectionHeading eyebrow="Common Questions" title="Frequently Asked Questions" center={true} />
          
          <div className="grid lg:grid-cols-2 gap-6 mt-10">
            {[faqs.slice(0, 10), faqs.slice(10)].map((col, colIdx) => (
              <div key={colIdx} className="space-y-4">
                {col.map((f, idx) => {
                  const globalIdx = colIdx === 0 ? idx : idx + 10;
                  const isOpen = openFaq === globalIdx;
                  return (
                    <div key={f.q} className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:border-gray-200 transition-colors">
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
        <section className="bg-[#F9F7F2]/60 py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <SectionHeading 
              eyebrow="Get Started" 
              title="Book Your Appointment at RamaCare" 
              subtitle="If you've been searching for a dependable polyclinic near JBR, RamaCare Polyclinic in Jumeirah 1 offers the licensed expertise, modern facilities, and personalized care that make healthcare simpler — not more stressful. From same-day appointments to a full range of specialties under one roof, we're here to support your health and your family's, without the runaround of multiple clinics. Your health deserves a clinic that's easy to reach and easy to trust — and RamaCare Polyclinic is ready to welcome you." 
              center={true} 
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
              <button onClick={handleBookAppointment} className="flex flex-col items-center gap-3 rounded-2xl bg-white border border-gray-100 px-4 py-6 shadow-sm hover:border-[#1F5E4B] hover:shadow-md transition-all duration-200">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B]">
                  <LucideIcons.Calendar className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-[#1A1A1A]">Book Online</span>
              </button>
              <button onClick={handleCall} className="flex flex-col items-center gap-3 rounded-2xl bg-white border border-gray-100 px-4 py-6 shadow-sm hover:border-[#1F5E4B] hover:shadow-md transition-all duration-200">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B]">
                  <LucideIcons.Phone className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-[#1A1A1A]">Call Clinic</span>
              </button>
              <button onClick={() => handleWhatsAppClick()} className="flex flex-col items-center gap-3 rounded-2xl bg-white border border-gray-100 px-4 py-6 shadow-sm hover:border-[#1F5E4B] hover:shadow-md transition-all duration-200">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B]">
                  <LucideIcons.MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-[#1A1A1A]">WhatsApp</span>
              </button>
              <Link href="/contact-us" className="flex flex-col items-center gap-3 rounded-2xl bg-white border border-gray-100 px-4 py-6 shadow-sm hover:border-[#1F5E4B] hover:shadow-md transition-all duration-200">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B]">
                  <LucideIcons.MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-[#1A1A1A]">Visit Us</span>
              </Link>
            </div>
          </div>
        </section>
  
        {/* ============ Medical Disclaimer ============ */}
        <section className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-100">
          <p className="text-sm text-[#5F5F5F] leading-relaxed">
            <span className="font-bold text-[#1A1A1A]">Medical Disclaimer:</span> The information provided on this page is intended for general educational purposes only and does not constitute medical advice, diagnosis, or treatment. Every patient's condition is different, and treatment outcomes vary based on individual health factors. Please consult a qualified doctor at RamaCare Polyclinic or another DHA-licensed healthcare provider for a proper diagnosis and personalized treatment plan before making any healthcare decisions.
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
      </div>
    </Layout>
  );
}