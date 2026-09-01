import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../../../components/Layout';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import {
  Leaf,
  Activity,
  Droplet,
  Flame,
  Sparkles,
  Salad,
  Hand,
  Dumbbell,
  Zap,
  Waves,
  Target,
  Compass,
  ClipboardList,
  Stethoscope,
  FileSearch,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Phone,
  MessageCircle,
  ArrowRight,
  AlertTriangle,
  Bone,
} from 'lucide-react';

const SITE_URL = 'https://ramacarepolyclinic.ae';
const PAGE_PATH = '/services/ayurveda-vs-physiotherapy-for-arthritis-dubai/';
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;

const SEO = {
  title: 'Ayurveda vs Physiotherapy for Arthritis Dubai | RamaCare Polyclinic',
  metaDescription:
    'Comparing Ayurveda vs Physiotherapy for Arthritis Dubai? Explore both approaches with RamaCare Polyclinic and book a personalized joint care assessment today.',
  canonical: CANONICAL_URL,
  keywords:
    'Ayurveda vs Physiotherapy Arthritis Dubai, Arthritis treatment Dubai, Ayurveda for arthritis Dubai, Physiotherapy for arthritis Dubai, Knee arthritis treatment Dubai, Joint pain clinic Dubai, Rheumatoid arthritis treatment Dubai, Osteoarthritis treatment Dubai, Non-surgical arthritis Dubai, RamaCare Polyclinic arthritis',
  ogImage: `${SITE_URL}/images/ayurveda-vs-physiotherapy-arthritis-dubai.jpg`,
};

const WHATSAPP_NUMBER = '971566597878';
const IMAGE = {
  src: '/images/ayurveda-vs-physiotherapy-arthritis-dubai.jpg',
  alt: 'Ayurveda vs Physiotherapy for Arthritis Dubai — physiotherapist and Ayurvedic doctor consulting a patient at RamaCare Polyclinic',
  title: 'Ayurveda vs Physiotherapy for Arthritis Dubai — RamaCare Polyclinic',
  caption: 'Comparing Ayurveda and Physiotherapy for arthritis care at RamaCare Polyclinic, Dubai',
};

const waLink = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

/* ------------------------------- Data ------------------------------- */

const SYMPTOMS = [
  'Joint pain',
  'Swelling',
  'Stiffness, especially in the morning or after rest',
  'Reduced range of motion',
  'Visible joint deformity or muscle weakness in later stages',
];

const RISK_FACTORS = [
  'Age',
  'Genetics',
  'Previous joint injury',
  'Obesity',
  'Repetitive joint stress from certain occupations',
  'Autoimmune predisposition',
];

const SIDES = {
  ayurveda: {
    label: 'Ayurveda',
    icon: Leaf,
    color: '#8A6A3F',
    bg: '#D4A574',
    heading: 'What Is Ayurveda?',
    paragraphs: [
      'Ayurveda is a traditional system of medicine that views health as a balance between three fundamental energies, or doshas: Vata, Pitta, and Kapha. In Ayurvedic thinking, joint disorders — referred to broadly as "Sandhivata" — are strongly associated with an aggravated Vata dosha, which governs movement, dryness, and the nervous system.',
      "From this lens, joint health isn't treated in isolation. An Ayurvedic doctor looks at digestion, sleep, stress levels, and diet as interconnected factors that influence how the body manages inflammation and tissue repair.",
    ],
    listIntro: 'Common Ayurvedic approaches for joint concerns include:',
    list: [
      { icon: Leaf, name: 'Herbal Therapies', desc: 'Formulations traditionally used to support joint comfort and reduce stiffness.' },
      { icon: Sparkles, name: 'Panchakarma', desc: 'A structured Ayurvedic detoxification protocol.' },
      { icon: Droplet, name: 'Abhyanga', desc: 'Full-body warm oil massage intended to improve circulation and ease muscular tension around joints.' },
      { icon: Flame, name: 'Kati Basti', desc: 'A localized warm-oil retention therapy often used for lower back and hip discomfort.' },
      { icon: Flame, name: 'Janu Basti', desc: 'A similar oil-retention therapy focused specifically on the knee joint.' },
      { icon: Salad, name: 'Lifestyle & Dietary Guidance', desc: 'Recommendations around food choices, daily routine (dinacharya), and seasonal adjustments believed to support joint health.' },
    ],
    note: "It's worth being clear: these therapies are traditionally used to support comfort, mobility, and general wellness — they are not a verified cure for arthritis, and any Ayurvedic treatment plan should be personalized only after a consultation with a DHA-licensed Ayurvedic doctor, ideally alongside your primary treating physician.",
    cta: 'Meet Our Ayurvedic Doctor',
    benefitsHeading: 'Benefits of Ayurveda for Joint Health',
    benefits: [
      'Holistic view of health that considers diet, stress, and routine alongside symptoms',
      'Lifestyle guidance that patients can sustain long-term, rather than a treatment that ends when a course of sessions finishes',
      'Herbal therapies that some patients find supportive for comfort and reducing perceived stiffness',
      'Reported improvements in flexibility and general wellness by many long-term patients, particularly when combined with consistent daily routine (dinacharya)',
      'Emphasis on stress reduction, which can indirectly affect pain perception since chronic stress is known to heighten sensitivity to pain',
      'A management style suited to ongoing, long-term joint care, especially for patients who prefer a gradual, whole-body approach over isolated symptom treatment',
      'Attention to dietary patterns that some patients associate with reduced joint puffiness and improved digestion, which Ayurvedic theory links closely to inflammation',
    ],
    benefitsNote: null,
  },
  physio: {
    label: 'Physiotherapy',
    icon: Activity,
    color: '#1F5E4B',
    bg: '#1F5E4B',
    heading: 'What Is Physiotherapy?',
    paragraphs: [
      "Physiotherapy takes a movement-and-function-first approach. Rather than looking at the body's internal balance, a physiotherapist assesses how a joint actually moves, where the weakness or compensation patterns are, and what specific interventions will restore function.",
    ],
    listIntro: 'A typical physiotherapy pathway for arthritis includes:',
    list: [
      { icon: FileSearch, name: 'Clinical Assessment', desc: 'Of joint range of motion, strength, gait, and posture.' },
      { icon: Target, name: 'Functional Movement Analysis', desc: 'Identifying which daily movements (sitting, climbing stairs, gripping) are affected.' },
      { icon: Dumbbell, name: 'Exercise Therapy', desc: 'Targeted strengthening and stretching programs designed around the specific joint involved.' },
      { icon: Hand, name: 'Manual Therapy', desc: 'Hands-on techniques to reduce stiffness and improve tissue mobility.' },
      { icon: Compass, name: 'Joint Mobilization', desc: 'Gentle, graded movement of the joint to restore range of motion.' },
      { icon: Zap, name: 'Electrotherapy', desc: 'Modalities such as TENS used for pain modulation.' },
      { icon: Waves, name: 'Ultrasound Therapy', desc: 'Used in some protocols to support soft tissue healing.' },
      { icon: Dumbbell, name: 'Strengthening Exercises', desc: 'For the muscles surrounding an arthritic joint, which reduces load on the joint itself.' },
      { icon: Activity, name: 'Balance & Mobility Training', desc: 'Particularly important for older adults at risk of falls.' },
      { icon: ClipboardList, name: 'Pain Management Strategies', desc: 'Including activity pacing and posture correction.' },
    ],
    note: 'Physiotherapy is widely supported in clinical guidelines, including those from bodies such as NICE, as a first-line, non-surgical approach for both osteoarthritis and rheumatoid arthritis, typically alongside medical management.',
    cta: 'Consult Our Physiotherapist',
    benefitsHeading: 'Benefits of Physiotherapy for Joint Health',
    benefits: [
      'Directly strengthens muscles supporting the affected joint, which reduces the mechanical load the joint itself has to bear',
      'Structured, measurable improvement in joint mobility, typically tracked session-to-session',
      'Improved balance, reducing fall risk in older adults — a particularly important consideration for seniors with knee or hip osteoarthritis',
      'Better flexibility through targeted stretching protocols tailored to the specific joint and movement pattern affected',
      'Supports functional independence — walking, climbing stairs, gripping objects, and other daily tasks that arthritis commonly interferes with',
      'Can reduce stiffness through consistent, guided movement, particularly first thing in the morning when joints tend to feel their worst',
      'Broadly associated with improved quality of life in clinical literature, including guidance referenced by organizations such as the Arthritis Foundation and the American College of Rheumatology',
      'Offers a clear, goal-oriented framework, which many patients find motivating because progress is visible and measurable over time',
    ],
    benefitsNote: null,
  },
};

const COMPARISON = [
  { feature: 'Treatment philosophy', ayurveda: 'Whole-body balance (doshas), lifestyle and internal wellness', physio: 'Movement, function, and biomechanics' },
  { feature: 'Pain management', ayurveda: 'Herbal formulations, warm oil therapies', physio: 'Manual therapy, electrotherapy, exercise-based pain modulation' },
  { feature: 'Joint mobility', ayurveda: 'Supported through oil therapies and gentle movement guidance', physio: 'Directly addressed via joint mobilization and stretching' },
  { feature: 'Inflammation management', ayurveda: 'Herbal and dietary approaches, Panchakarma protocols', physio: 'Modalities like ultrasound, activity modification' },
  { feature: 'Exercise therapy', ayurveda: 'Limited; focus is more on lifestyle than structured exercise', physio: 'Central and structured, progressively adjusted' },
  { feature: 'Lifestyle modification', ayurveda: 'Strong emphasis (diet, routine, stress)', physio: 'Included, but focused more on activity and ergonomics' },
  { feature: 'Long-term care', ayurveda: 'Supports maintenance through routine and herbal support', physio: 'Supports maintenance through strength and mobility programs' },
  { feature: 'Rehabilitation', ayurveda: 'Not the primary focus', physio: 'Core strength of the discipline' },
  { feature: 'Suitable for Osteoarthritis', ayurveda: 'Often used as a complementary/supportive approach', physio: 'Strongly indicated as first-line non-surgical care' },
  { feature: 'Suitable for Rheumatoid Arthritis', ayurveda: 'May support symptom comfort alongside medical treatment', physio: 'Recommended for maintaining joint function between flares' },
  { feature: 'Recovery approach', ayurveda: 'Gradual, holistic, routine-based', physio: 'Structured, goal-based, measurable progress' },
];

const JOINT_TYPES = [
  {
    name: 'Osteoarthritis',
    text: 'Physiotherapy is generally considered a strong first-line option here, since strengthening the muscles around a worn joint directly reduces load and pain. A structured program typically starts with low-impact strengthening and gradually builds toward functional movements like walking on uneven ground or climbing stairs without discomfort. Ayurveda may be beneficial as a complementary approach for stiffness, general comfort, and lifestyle management — particularly dietary adjustments that some patients find helpful for managing morning stiffness. An integrated plan is often appropriate for moderate-to-long-standing OA, where both the mechanical and lifestyle dimensions of the condition need attention.',
  },
  {
    name: 'Rheumatoid Arthritis',
    text: 'Because rheumatoid arthritis is autoimmune rather than purely mechanical, medical management (typically involving a rheumatologist) is the primary treatment path. Physiotherapy plays a supportive but important role here — helping maintain joint range of motion, muscle strength, and function between flares, and adapting exercise intensity during active flare periods rather than pushing through pain. Ayurveda may be considered as a complementary approach for general comfort, stress management, and lifestyle support alongside — not instead of — prescribed medical treatment, since RA requires ongoing immunological management that falls outside either discipline alone.',
  },
  {
    name: 'Knee Arthritis',
    text: 'Knee osteoarthritis is one of the most common presentations physiotherapists treat, and structured quadriceps and hip-strengthening programs are well-supported for reducing knee joint load and improving function. Ayurvedic approaches such as Janu Basti (localized warm-oil retention therapy for the knee) are sometimes used by patients seeking additional comfort and stiffness relief. For many patients, a combined plan — physiotherapy-led strengthening alongside Ayurvedic comfort-focused therapies — is a reasonable option to discuss during a joint assessment.',
  },
  {
    name: 'Hip Arthritis',
    text: 'Hip arthritis often responds well to targeted physiotherapy focused on hip mobility, glute and core strengthening, and gait retraining, particularly in earlier stages before significant structural changes occur. Ayurvedic therapies like Kati Basti (localized warm-oil therapy over the lower back and hip region) are sometimes used to support comfort and reduce perceived stiffness. As with other joints, the right balance between the two approaches depends on the severity and progression of the condition, which is best assessed in person.',
  },
  {
    name: 'Shoulder Arthritis',
    text: 'Shoulder arthritis frequently affects range of motion more noticeably than other joints, making physiotherapy\'s focus on mobility work, scapular stabilization, and progressive strengthening particularly relevant. Ayurvedic warm oil therapies and lifestyle guidance may offer additional comfort, especially for patients managing stiffness that limits daily activities like reaching or dressing. A joint assessment can help determine whether shoulder-specific physiotherapy alone, or a combined approach, better fits your situation.',
  },
  {
    name: 'Hand Arthritis',
    text: 'Hand arthritis, which can affect fine motor tasks like gripping and writing, often benefits from physiotherapy or occupational-therapy-style approaches focused on joint protection techniques, splinting guidance, and targeted hand exercises. Ayurvedic herbal formulations and warm oil applications are sometimes used by patients for general comfort, though the small, numerous joints in the hand mean a precise, individualized assessment matters more here than with larger joints.',
  },
  {
    name: 'Cervical Arthritis',
    text: 'Cervical (neck) arthritis requires particular care given the proximity to the spinal cord and nerve roots. Physiotherapy typically focuses on posture correction, targeted mobility and strengthening exercises, and ergonomic adjustments, especially for patients with desk-based work. Ayurvedic approaches may support general relaxation and comfort but should be approached cautiously and only under professional guidance for neck-related conditions, given the sensitivity of this region.',
  },
  {
    name: 'Post-Traumatic Arthritis',
    text: 'Post-traumatic arthritis develops after a joint injury or fracture and often has its own distinct rehabilitation timeline. Physiotherapy plays a central role in restoring strength, stability, and range of motion following the original injury, working closely with the joint\'s specific healing pattern. Ayurvedic lifestyle and comfort-focused therapies may be considered as a complementary addition once the primary rehabilitation plan is underway, based on individual assessment.',
  },
];

const COMBINED_FITS = [
  'Chronic, long-standing arthritis where both structural and lifestyle factors are involved',
  'Patients seeking broader pain reduction alongside functional rehabilitation',
  "Individuals who want a personalized treatment plan that isn't limited to a single discipline",
];

const WHY_US = [
  'Experienced, licensed Ayurvedic doctors',
  'Experienced, qualified physiotherapists',
  'Personalized care plans built around your specific diagnosis, not a one-size-fits-all protocol',
  'Modern rehabilitation facilities equipped for joint-focused therapy',
  'A patient-centered approach that starts with listening, not prescribing',
  'Genuine multidisciplinary care when it\'s clinically appropriate',
  'A convenient, accessible Dubai location',
];

const JOURNEY = [
  { icon: MessageCircle, text: 'Initial consultation — a conversation about your symptoms, history, and goals' },
  { icon: FileSearch, text: 'Medical history review — including past injuries, medications, and other conditions' },
  { icon: Stethoscope, text: 'Physical examination — hands-on assessment of the affected joint(s)' },
  { icon: Bone, text: 'Joint assessment — range of motion, strength, and functional testing' },
  { icon: Target, text: 'Diagnosis — clarifying the type and severity of arthritis involved' },
  { icon: ClipboardList, text: 'Individual treatment plan — Ayurveda, physiotherapy, or an integrated combination' },
  { icon: Salad, text: 'Lifestyle recommendations — diet, activity, ergonomics, and routine adjustments' },
  { icon: Dumbbell, text: 'Exercise guidance — a structured, progressive program where physiotherapy is involved' },
  { icon: Activity, text: 'Progress monitoring — tracking mobility, pain levels, and function over time' },
  { icon: CalendarCheck, text: 'Follow-up appointments — adjusting the plan as your condition evolves' },
];

const FAQS = [
  { q: 'Which is better for arthritis — Ayurveda or Physiotherapy?', a: 'Neither is universally "better." The right choice depends on your type of arthritis, symptom severity, and personal goals — often decided after a proper clinical assessment.' },
  { q: 'Can Ayurveda cure arthritis?', a: 'No treatment, Ayurvedic or otherwise, is currently proven to cure arthritis. Ayurveda may support comfort, mobility, and overall wellness as part of a broader management plan.' },
  { q: 'Can physiotherapy reduce arthritis pain?', a: 'Yes, physiotherapy is widely used to reduce pain by strengthening supporting muscles, improving joint mechanics, and using targeted pain-relief techniques.' },
  { q: 'Can both treatments be combined?', a: "Yes, many patients benefit from an integrated approach combining physiotherapy's functional focus with Ayurveda's holistic, lifestyle-based support." },
  { q: 'How many sessions are needed?', a: 'This varies significantly by patient and condition. Your treating clinician will outline an expected timeline after your initial assessment.' },
  { q: 'Which is better for knee arthritis?', a: 'Physiotherapy is typically a strong first-line option for knee arthritis, though some patients also use Ayurvedic therapies like Janu Basti for additional comfort.' },
  { q: 'Is surgery always necessary for arthritis?', a: 'No. Many patients manage arthritis effectively with non-surgical approaches like physiotherapy, Ayurveda, or medical management, especially when addressed early.' },
  { q: 'Can physiotherapy help rheumatoid arthritis?', a: 'Yes, physiotherapy can help preserve joint function and mobility in RA, typically alongside medical/rheumatological treatment.' },
  { q: 'Can Ayurveda help osteoarthritis?', a: 'Ayurveda may offer supportive benefits for comfort and stiffness in osteoarthritis, often used alongside — rather than instead of — structured rehabilitation.' },
  { q: 'How long does arthritis treatment take to show results?', a: 'Timelines vary by individual and severity; some patients notice changes within weeks, while others require months of consistent care.' },
  { q: 'Who should choose Ayurveda?', a: 'Patients seeking a holistic, lifestyle-integrated approach, or those looking to complement other treatments, often consider Ayurveda.' },
  { q: 'Who should choose Physiotherapy?', a: 'Patients focused on restoring specific joint function, strength, and mobility — especially post-injury or in early-to-moderate arthritis — often benefit most from physiotherapy.' },
  { q: 'How much does arthritis treatment cost in Dubai?', a: 'Costs vary based on the treatment plan, number of sessions, and whether insurance coverage applies. Contact our clinic for a personalized estimate.' },
  { q: 'Can exercise worsen arthritis?', a: 'Incorrect or excessive exercise can aggravate symptoms, which is why a physiotherapist-guided program tailored to your joint condition is recommended over generic workouts.' },
  { q: 'How do I book an appointment at RamaCare Polyclinic?', a: 'You can book directly through our website, call our clinic, or message us on WhatsApp to schedule a consultation.' },
  { q: 'Is Panchakarma safe for arthritis patients?', a: 'Panchakarma protocols should only be undertaken under the guidance of a licensed Ayurvedic doctor, who can adjust intensity based on your joint condition and overall health.' },
  { q: 'Does insurance cover physiotherapy or Ayurveda treatment in Dubai?', a: 'Coverage depends on your specific insurance provider and policy. Our front desk team can help verify your coverage before treatment begins.' },
  { q: 'Can younger adults get arthritis, or is it only an aging condition?', a: 'While osteoarthritis is more common with age, younger adults can develop arthritis due to injury, autoimmune conditions, or genetic factors.' },
];

const RELATED_LINKS = [
  { label: 'Arthritis Treatment Dubai', href: '/services/arthritis-treatment-dubai' },
  { label: 'Joint Pain Treatment Dubai', href: '/services/joint-pain-treatment-dubai' },
  { label: 'Physiotherapy Dubai', href: '/services/physiotherapy-dubai' },
  { label: 'Ayurveda Treatment Dubai', href: '/services/ayurveda-dubai' },
  { label: 'Knee Pain Treatment Dubai', href: '/services/knee-pain-treatment-dubai' },
  { label: 'Shoulder Pain Treatment Dubai', href: '/services/shoulder-pain-treatment-dubai' },
  { label: 'Panchakarma Dubai', href: '/services/panchakarma-treatment' },
  { label: 'Electrotherapy Dubai', href: '/services/electrotherapy-dubai' },
  { label: 'Ultrasound Therapy Dubai', href: '/services/ultrasound-therapy' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Book Appointment', href: '#book-now' },
  { label: 'Home', href: '/' },
];

/* --------------------------- Small building blocks --------------------------- */

function Eyebrow({ children }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1F5E4B]/70">
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, center = false }) {
  return (
    <div className={`mb-8 ${center ? 'mx-auto max-w-2xl text-center' : ''}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-2 text-2xl font-semibold leading-snug text-[#1A1A1A] sm:text-[1.75rem]">
        {title}
      </h2>
    </div>
  );
}

function CtaLink({ label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#1F5E4B] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#17493B]"
    >
      <MessageCircle className="h-3.5 w-3.5" /> {label} <ArrowRight className="h-3.5 w-3.5" />
    </a>
  );
}

/* ================================ PAGE ================================ */

export default function AyurvedaVsPhysiotherapyArthritisPage() {
  const [side, setSide] = useState('ayurveda');
  const [openJoint, setOpenJoint] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const active = SIDES[side];
  const ActiveIcon = active.icon;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${CANONICAL_URL}#webpage`,
        "url": CANONICAL_URL,
        "name": "Ayurveda vs Physiotherapy for Arthritis Dubai",
        "description": SEO.metaDescription,
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "url": `${SITE_URL}/`,
          "name": "RamaCare Polyclinic"
        },
        "about": {
          "@type": "MedicalCondition",
          "name": "Arthritis (Osteoarthritis & Rheumatoid Arthritis)"
        },
        "lastReviewed": "2026-08-29",
        "reviewedBy": {
          "@id": `${CANONICAL_URL}#physician`
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_URL}/services` },
            { "@type": "ListItem", "position": 3, "name": "Ayurveda vs Physiotherapy for Arthritis", "item": CANONICAL_URL }
          ]
        }
      },
      {
        "@type": "Physician",
        "@id": `${CANONICAL_URL}#physician`,
        "name": "Dr. Shamna Keloth Meethal",
        "medicalSpecialty": "Ayurveda",
        "honorificSuffix": "BAMS",
        "hasCredential": "DHA Licensed Ayurveda Doctor",
        "worksFor": {
          "@type": "MedicalOrganization",
          "name": "RamaCare Polyclinic"
        },
        "url": `${SITE_URL}/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/`
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        "mainEntity": FAQS.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title key="title">{SEO.title}</title>
        <meta name="description" content={SEO.metaDescription} key="description" />
        <meta name="keywords" content={SEO.keywords} key="keywords" />
        <meta name="robots" content="index, follow" key="robots" />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
        <link rel="canonical" href={SEO.canonical} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:title" content={SEO.title} key="og:title" />
        <meta property="og:description" content={SEO.metaDescription} key="og:description" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:image" content={SEO.ogImage} key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Ayurveda vs Physiotherapy for Arthritis Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurveda vs Physiotherapy for Arthritis Dubai" key="twitter:title" />
        <meta name="twitter:description" content="Comparing Ayurveda vs Physiotherapy for Arthritis in Dubai? Explore both approaches with RamaCare Polyclinic and book a personalized joint care assessment." key="twitter:description" />
        <meta name="twitter:image" content={SEO.ogImage} key="twitter:image" />

        {/* Unified JSON-LD @graph Schema */}
        <script
          key="schema-graph"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </Head>

      <div className="bg-white text-[#1A1A1A] antialiased">

        {/* ============================ HERO — asymmetric, text left / image right ============================ */}
        <section className="px-4 pb-10 pt-12 sm:pt-16">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium text-[#5F5F5F]">
              <a href="/" className="hover:text-[#1F5E4B]">Home</a>
              <span aria-hidden="true">/</span>
              <a href="/services" className="hover:text-[#1F5E4B]">Services</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-[#1F5E4B]">Ayurveda vs Physiotherapy for Arthritis Dubai</span>
            </nav>

            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-7">
                <Eyebrow>Joint Care Comparison</Eyebrow>
                <h1 className="mt-3 text-3xl font-semibold leading-tight text-[#1A1A1A] sm:text-4xl">
                  Ayurveda vs Physiotherapy for Arthritis Dubai
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5F5F5F]">
                  If you're living with stiff knees, aching hips, or swollen finger joints, you've
                  probably already searched for Ayurveda vs Physiotherapy for Arthritis Dubai and
                  found no shortage of conflicting opinions. Some clinics promise that herbal oils and
                  Panchakarma will "reverse" your arthritis. Others insist that exercise-based
                  rehabilitation is the only evidence-based path forward. The truth, as is usually the
                  case in medicine, sits somewhere more nuanced.
                </p>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-[#5F5F5F]">
                  At RamaCare Polyclinic, we see patients every week who are genuinely confused about
                  which direction to take — and honestly, that confusion is understandable. Both
                  Ayurveda and physiotherapy have real, documented roles in arthritis care, but they
                  work differently, suit different patients, and often work best together rather than
                  as competing alternatives. This guide breaks down Ayurveda vs Physiotherapy for
                  Arthritis Dubai in plain language, so you can walk into your next consultation with
                  informed questions rather than guesswork.
                </p>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-[#5F5F5F]">
                  Nothing here is meant to replace a one-on-one clinical assessment. Arthritis is not
                  a single disease — it's a category of joint conditions with very different causes,
                  and the right treatment plan depends on your specific diagnosis, how far the
                  condition has progressed, and your broader health picture. That's really the heart
                  of the Ayurveda vs Physiotherapy for Arthritis Dubai question: it isn't about
                  picking a "winner," it's about matching the right tool to the right joint problem at
                  the right stage.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl lg:sticky lg:top-8">
                  <Image src={IMAGE.src} alt={IMAGE.alt} title={IMAGE.title} fill sizes="(max-width: 1024px) 100vw, 420px" className="object-cover" priority />
                </div>
                <p className="mt-3 text-xs italic text-[#5F5F5F]">{IMAGE.caption}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ UNDERSTANDING ARTHRITIS — sticky left label, content right ============================ */}
        <section className="bg-[#F9F7F2] px-4 py-16">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-8">
                <SectionHeading title="Understanding Arthritis Before Comparing Treatments" />
                <p className="text-sm leading-relaxed text-[#5F5F5F]">
                  "Arthritis" is an umbrella term for joint inflammation, but the two most common
                  forms — osteoarthritis and rheumatoid arthritis — behave quite differently.
                </p>
                <div className="mt-6 rounded-2xl bg-white p-5">
                  <h3 className="text-sm font-semibold text-[#1A1A1A]">
                    Why the Ayurveda vs Physiotherapy for Arthritis Dubai Decision Matters Early
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#5F5F5F]">
                    Choosing between an Ayurveda Clinic Dubai and a Physiotherapy Clinic Dubai isn't
                    just a matter of preference — it can shape how well your joints hold up over the
                    next decade. Patients who explore Non-Surgical Arthritis Treatment Dubai options
                    early, whether through Ayurveda, physiotherapy, or both, tend to preserve more
                    function than those who wait until symptoms are severe. RamaCare Polyclinic is
                    positioned as a Best Arthritis Clinic Dubai option specifically because it offers
                    both disciplines under one roof, so patients don't have to guess which door to
                    walk through first.
                  </p>
                  <CtaLink label="Book an Arthritis Assessment" href={waLink("Hello RamaCare, I'd like to book an Arthritis Assessment.")} />
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-100 bg-white p-5">
                  <h3 className="text-sm font-semibold text-[#1A1A1A]">Osteoarthritis (OA)</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#5F5F5F]">
                    The wear-and-tear type most people associate with aging. Cartilage that cushions
                    the joint gradually thins, bones can develop small spurs, and movement becomes
                    stiffer and more painful over time. It commonly affects the knees, hips, hands,
                    and spine.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white p-5">
                  <h3 className="text-sm font-semibold text-[#1A1A1A]">Rheumatoid Arthritis (RA)</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#5F5F5F]">
                    An autoimmune condition, meaning the body's own immune system mistakenly attacks
                    the joint lining. It tends to appear symmetrically (both hands, both knees),
                    often comes with morning stiffness lasting over an hour, and can affect other
                    organs if left unmanaged.
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-[#5F5F5F]">
                Other patterns clinicians see regularly include age-related joint degeneration,
                post-traumatic arthritis following an old injury or fracture, and inflammatory
                arthritis linked to broader autoimmune disorders.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-[#5F5F5F]">Common Symptoms</h4>
                  <ul className="mt-3 space-y-2">
                    {SYMPTOMS.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-[#1A1A1A]">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1F5E4B]" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-[#5F5F5F]">Risk Factors</h4>
                  <ul className="mt-3 space-y-2">
                    {RISK_FACTORS.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-[#1A1A1A]">
                        <AlertTriangle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#D4A574]" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-6 text-xs leading-relaxed text-[#5F5F5F]">
                Diagnosis typically involves a clinical examination, a review of symptom history,
                and imaging such as X-ray or MRI, sometimes supported by blood tests to rule out
                inflammatory or autoimmune causes.
              </p>
              <p className="mt-3 text-xs leading-relaxed text-[#5F5F5F]">
                Early treatment matters. Left unaddressed, joint damage in both OA and RA tends to
                progress, muscles around the joint weaken from disuse, and daily function —
                walking, climbing stairs, gripping objects — becomes harder to preserve. This is
                exactly why the Ayurveda vs Physiotherapy for Arthritis Dubai decision is worth
                making early and deliberately, rather than after years of unmanaged discomfort.
              </p>
            </div>
          </div>
        </section>

        {/* ============================ TOGGLE-DRIVEN: WHAT IS + BENEFITS ============================ */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <SectionHeading title="Explore Each Approach" eyebrow="Toggle to Compare" />

            {/* Segmented toggle switch */}
            <div className="mx-auto flex w-fit rounded-full bg-[#F9F7F2] p-1">
              {Object.entries(SIDES).map(([key, s]) => {
                const Icon = s.icon;
                const isActive = side === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSide(key)}
                    className="relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
                    style={{ color: isActive ? '#fff' : '#5F5F5F' }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="side-toggle-bg"
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: s.bg }}
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <Icon className="relative z-10 h-4 w-4" />
                    <span className="relative z-10">{s.label}</span>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={side}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="mt-10 space-y-8"
              >
                {/* Top balanced grid: What Is vs Approaches/Pathway list */}
                <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                  {/* Left Column: What Is */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-2">
                      <ActiveIcon className="h-5 w-5" style={{ color: active.color }} />
                      <h3 className="text-lg font-semibold text-[#1A1A1A]">{active.heading}</h3>
                    </div>
                    {active.paragraphs.map((p) => (
                      <p key={p.slice(0, 20)} className="mt-3 text-sm leading-relaxed text-[#5F5F5F]">
                        {p}
                      </p>
                    ))}
                    <p className="mt-4 text-xs leading-relaxed text-[#5F5F5F]">{active.note}</p>
                    <CtaLink label={active.cta} href={waLink(`Hello RamaCare, I'd like to ${active.cta.toLowerCase()} regarding arthritis care.`)} />
                  </div>

                  {/* Right Column: Approaches List */}
                  <div className="lg:col-span-7">
                    <div className="rounded-2xl border border-gray-100 p-6 bg-white">
                      <p className="text-xs font-semibold text-[#1A1A1A]">{active.listIntro}</p>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {active.list.map((item) => {
                          const Icon = item.icon;
                          return (
                            <div key={item.name} className="flex items-start gap-2.5">
                              <Icon className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: active.color }} />
                              <div>
                                <p className="text-sm font-semibold text-[#1A1A1A]">{item.name}</p>
                                <p className="text-xs leading-relaxed text-[#5F5F5F]">{item.desc}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Full-Width Column: Benefits section with 2-column layout */}
                <div className="rounded-2xl p-6 sm:p-8" style={{ backgroundColor: `${active.bg}0D` }}>
                  <h3 className="text-lg font-semibold" style={{ color: active.color }}>
                    {active.benefitsHeading}
                  </h3>
                  <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                    {active.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#1A1A1A]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 animate-pulse" style={{ color: active.color }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ============================ COMPARISON TABLE ============================ */}
        <section className="bg-[#F9F7F2] px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <SectionHeading title="Ayurveda vs Physiotherapy for Arthritis Dubai — Side-by-Side Comparison" />
              </div>
              <div className="lg:col-span-5">
                <p className="text-sm leading-relaxed text-[#5F5F5F]">
                  No single row in this table should be read as one approach being universally
                  "better." They measure success differently — Ayurveda through overall balance and
                  comfort, physiotherapy through measurable functional gains.
                </p>
              </div>
            </div>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-100 bg-white">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="px-5 py-3 font-semibold text-[#1A1A1A]">Feature</th>
                    <th className="px-5 py-3 font-semibold text-[#1A1A1A]">Ayurveda</th>
                    <th className="px-5 py-3 font-semibold text-[#1A1A1A]">Physiotherapy</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr key={row.feature} className="border-b border-gray-50 hover:bg-[#F9F7F2]">
                      <td className="px-5 py-3 font-medium text-[#1A1A1A]">{row.feature}</td>
                      <td className="px-5 py-3 text-[#5F5F5F]">{row.ayurveda}</td>
                      <td className="px-5 py-3 text-[#5F5F5F]">{row.physio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ============================ JOINT TYPE ACCORDION — left list, right sticky note ============================ */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionHeading title="Which Treatment Is Better for Different Types of Arthritis?" />
              <div className="divide-y divide-gray-100 rounded-2xl border border-gray-100">
                {JOINT_TYPES.map((j, idx) => {
                  const isOpen = openJoint === idx;
                  return (
                    <div key={j.name}>
                      <button
                        onClick={() => setOpenJoint(isOpen ? -1 : idx)}
                        className="flex w-full items-center gap-3 px-5 py-4 text-left"
                      >
                        <Bone className="h-4 w-4 flex-shrink-0 text-[#1F5E4B]" />
                        <span className="flex-1 text-sm font-semibold text-[#1A1A1A]">{j.name}</span>
                        <ChevronDown className={`h-4 w-4 flex-shrink-0 text-[#5F5F5F] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                          >
                            <p className="px-5 pb-4 pl-12 text-sm leading-relaxed text-[#5F5F5F]">{j.text}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-8">
                <p className="text-sm leading-relaxed text-[#5F5F5F]">
                  This is usually where the Ayurveda vs Physiotherapy for Arthritis Dubai
                  conversation gets genuinely useful, because the honest answer changes depending
                  on which joint is involved and what's causing the wear.
                </p>
                <div className="mt-6 rounded-2xl bg-[#F9F7F2] p-5">
                  <p className="text-xs leading-relaxed text-[#5F5F5F]">
                    It's worth repeating: none of these approaches should be presented as a cure.
                    Arthritis management is about reducing symptoms, preserving function, and
                    slowing progression — and an integrated, individually assessed plan tends to
                    serve patients best.
                  </p>
                  <CtaLink label="Schedule Your Consultation" href={waLink("Hello RamaCare, I'd like to schedule a joint care consultation.")} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ COMBINED APPROACH ============================ */}
        <section className="px-4 py-16">
          <div
            className="mx-auto max-w-7xl rounded-2xl p-8 text-white sm:p-10"
            style={{ background: 'linear-gradient(120deg, #8A6A3F 0%, #0F3B2E 100%)' }}
          >
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <h2 className="text-2xl font-semibold sm:text-[1.75rem]">Can Ayurveda and Physiotherapy Be Combined?</h2>
                <p className="mt-4 text-sm leading-relaxed text-white/85">
                  In many cases, yes — and this is often where patients see the most well-rounded
                  results. An integrated, multidisciplinary approach allows a physiotherapist to
                  address strength, mobility, and function, while an Ayurvedic doctor supports
                  lifestyle, diet, and general comfort in parallel.
                </p>
                <a
                  href={waLink("Hello RamaCare, I'd like to book an appointment for a combined Ayurveda and Physiotherapy arthritis plan.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs font-semibold text-[#1A1A1A] hover:bg-white/90"
                >
                  <MessageCircle className="h-3.5 w-3.5" /> Book Your Appointment Today
                </a>
              </div>

              <div className="lg:col-span-6">
                <p className="text-sm font-semibold text-white">This combined model tends to make the most sense for:</p>
                <ul className="mt-3 space-y-2">
                  {COMBINED_FITS.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/90">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-relaxed text-white/85">
                  At RamaCare Polyclinic, patients have access to multiple specialties under one roof,
                  so where clinically appropriate, an Ayurvedic doctor and a physiotherapist can
                  coordinate care rather than working in isolation. This doesn't mean every patient
                  needs both — it means the option exists when a combined plan genuinely fits the
                  clinical picture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ WHY CHOOSE US ============================ */}
        <section className="bg-[#F9F7F2] px-4 py-16">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading title="Why Choose RamaCare Polyclinic?" />
              <p className="text-sm leading-relaxed text-[#5F5F5F]">
                RamaCare Polyclinic is a DHA-licensed clinic in Dubai offering both Ayurvedic and
                physiotherapy services under one roof, with a few things patients tell us they
                value most:
              </p>
              <p className="mt-5 text-xs leading-relaxed text-[#5F5F5F]">
                Whether you're leaning toward Ayurveda, physiotherapy, or want a professional
                opinion on which fits your situation, our team is here to walk through the
                options with you.
              </p>
              <CtaLink label="WhatsApp Now" href={waLink("Hello RamaCare, I'd like to discuss arthritis treatment options.")} />
            </div>
            <div className="lg:col-span-8">
              <div className="grid gap-3 sm:grid-cols-2">
                {WHY_US.map((w) => (
                  <div key={w} className="flex items-start gap-2.5 rounded-xl bg-white p-4 text-sm leading-relaxed text-[#1A1A1A]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1F5E4B]" />
                    {w}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================ TREATMENT JOURNEY — left sticky label, right timeline ============================ */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-8">
                <SectionHeading title="Your Treatment Journey at RamaCare Polyclinic" />
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="relative border-l-2 border-[#1F5E4B]/15 pl-8">
                {JOURNEY.map((j, i) => {
                  const Icon = j.icon;
                  return (
                    <div key={j.text} className="relative pb-8 last:pb-0">
                      <span className="absolute -left-[calc(2rem+9px)] top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#1F5E4B] text-[10px] font-bold text-white">
                        {i + 1}
                      </span>
                      <div className="flex items-start gap-3">
                        <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#D4A574]" />
                        <p className="text-sm leading-relaxed text-[#1A1A1A]">{j.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ============================ FAQ — two columns ============================ */}
        <section className="bg-[#F9F7F2] px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Common Questions" title="Frequently Asked Questions" />
            <div className="grid gap-x-10 md:grid-cols-2">
              {[FAQS.slice(0, 9), FAQS.slice(9)].map((col, colIdx) => (
                <div key={colIdx} className="divide-y divide-gray-200">
                  {col.map((f, i) => {
                    const idx = colIdx * 9 + i;
                    const isOpen = openFaq === idx;
                    return (
                      <div key={f.q}>
                        <button
                          onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                          className="flex w-full items-center gap-3 py-4 text-left"
                        >
                          <span className="flex-1 text-sm font-semibold text-[#1A1A1A]">
                            {idx + 1}. {f.q}
                          </span>
                          <ChevronDown className={`h-4 w-4 flex-shrink-0 text-[#5F5F5F] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.18 }}
                            >
                              <p className="pb-4 text-sm leading-relaxed text-[#5F5F5F]">{f.a}</p>
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

        {/* ============================ RELATED LINKS ============================ */}
        <section className="px-4 py-12">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5F5F5F]">Related Treatments</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {RELATED_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-full border border-[#1F5E4B]/15 bg-[#F9F7F2] px-3.5 py-1.5 text-xs font-medium text-[#1F5E4B] hover:bg-[#1F5E4B]/10"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ CONCLUSION / CTA ============================ */}
        <section id="book-now" className="px-4 pb-16">
          <div className="mx-auto max-w-7xl rounded-2xl border border-gray-100 p-8 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-12">
                <Eyebrow>Conclusion</Eyebrow>
                <h2 className="mt-2 text-2xl font-semibold text-[#1A1A1A] sm:text-[1.75rem]">
                  Matching the Right Tool to the Right Joint Problem
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#5F5F5F]">
                  There's no single right answer to Ayurveda vs Physiotherapy for Arthritis Dubai —
                  and if a clinic tells you otherwise, that's usually a sign they're selling one
                  service rather than assessing your joints. For mechanical, wear-related conditions
                  like knee or hip osteoarthritis, structured Exercise Therapy Dubai and Manual
                  Therapy Dubai programs often deliver the fastest, most measurable functional gains.
                  For patients looking for a broader, lifestyle-integrated approach to Chronic Joint
                  Pain Dubai, Ayurvedic Arthritis Treatment Dubai offers meaningful support around
                  comfort, routine, and general wellness. And for many patients, particularly those
                  managing long-standing Rheumatoid Arthritis Dubai cases or advanced Osteoarthritis
                  Treatment Dubai needs, a combination of both — coordinated through a proper clinical
                  assessment — tends to offer the most complete picture of care. If you'd like a
                  Natural Arthritis Treatment Dubai option evaluated alongside a structured
                  rehabilitation plan, RamaCare Polyclinic's team can walk you through what's
                  clinically appropriate for your specific joints.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurveda-vs-physiotherapy-for-arthritis-dubai" />

        <BookConsultation />

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs italic text-gray-600">
          Medical Disclaimer: This content is provided for general educational purposes
          only and does not constitute medical advice. It is not a substitute for
          professional diagnosis, treatment, or consultation with a qualified healthcare
          provider. Arthritis presents differently in every patient, and treatment
          recommendations require an individual clinical assessment by a licensed
          physician, Ayurvedic doctor, or physiotherapist. Patient outcomes vary, and no
          treatment mentioned in this article is guaranteed to cure or reverse arthritis.
          Always consult a DHA-licensed healthcare professional before starting or
          changing any treatment plan.
        </p>
      </div>
    </Layout>
  );
}