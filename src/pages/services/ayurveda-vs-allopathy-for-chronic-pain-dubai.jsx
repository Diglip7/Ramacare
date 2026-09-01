import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../../../components/Layout';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import DoctorsSection from '../../../components/DoctorsSection';
import { DOCTORS } from '../../data/doctors';
import {
  Leaf,
  Pill,
  Syringe,
  Stethoscope,
  ScanLine,
  Scale,
  Droplet,
  Flame,
  Wind,
  FlaskConical,
  Salad,
  Moon,
  HeartPulse,
  ShieldCheck,
  AlertTriangle,
  TrendingUp,
  Clock,
  CheckCircle2,
  ChevronDown,
  Phone,
  MessageCircle,
  ArrowRight,
  Activity,
  Bone,
  Brain,
  Zap,
  BookOpen,
  Compass,
} from 'lucide-react';

/* =====================================================================
   AYURVEDA VS ALLOPATHY FOR CHRONIC PAIN DUBAI — original page build.
   Seventh distinct layout on the site: a documentation-style page with a
   sticky, numbered table-of-contents rail running down the left margin
   on desktop, and a content column that deliberately alternates which
   side carries the label vs. the detail section-by-section — not the
   static split panels of the back-pain page, nor the toggle-switch of
   the arthritis page. Same brand tokens throughout:
     teal   #1F5E4B   dark teal #0F3B2E   gold  #D4A574
     ink    #1A1A1A   muted     #5F5F5F
     cream  #F5F1E8   panel     #F9F7F2
   Headings use font-semibold; generous vertical spacing (py-20/space-y).
   ===================================================================== */

const SEO = {
  title: 'Ayurveda vs Allopathy for Chronic Pain Dubai | RamaCare',
  metaDescription:
    'Comparing Ayurveda vs Allopathy for chronic pain in Dubai? Get an expert, unbiased guide and book a personalised pain consultation at RamaCare.',
  canonical: 'https://ramacarepolyclinic.ae/services/ayurveda-vs-allopathy-for-chronic-pain-dubai',
};

const WHATSAPP_NUMBER = '971566597878';
const waLink = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

/* Image slots — filenames/alt text match the doc's image prompts list. */
const IMAGES = {
  infographic: { src: '/images/ayurveda-vs-allopathy-chronic-pain-dubai-infographic.jpg', alt: 'Ayurveda vs Allopathy for Chronic Pain Dubai comparison infographic' },
  ayurvedaConsult: { src: '/images/ayurveda-consultation-ramacare-dubai.jpg', alt: 'Ayurveda treatment consultation at RamaCare Polyclinic Dubai' },
  physio: { src: '/images/physiotherapy-chronic-pain-treatment-dubai.jpg', alt: 'Physiotherapist treating chronic pain patient in Dubai' },
  panchakarma: { src: '/images/panchakarma-therapy-session-dubai.jpg', alt: 'Panchakarma therapy session for chronic pain at RamaCare Dubai' },
  anatomy: { src: '/images/chronic-pain-anatomy-illustration-dubai.jpg', alt: 'Illustration of common chronic pain areas including back, neck, and joints' },
  consultation: { src: '/images/patient-treatment-consultation-ramacare-dubai.jpg', alt: 'Patient consultation discussing Ayurveda and Allopathy treatment options in Dubai' },
};

/* ------------------------------- Data ------------------------------- */

const WHY_COMPARE = [
  'Long-term reliance on painkillers for arthritis or back pain leads many patients to ask whether a more root-cause-focused option like Ayurveda could reduce their dependency on NSAIDs.',
  'Slow or plateaued recovery after standard allopathic treatment prompts patients to explore Panchakarma, physiotherapy, or manual therapy as an add-on.',
  'A growing preference for personalised, lifestyle-integrated care, rather than a purely prescription-based approach.',
  'Genuine uncertainty about safety and evidence, especially around herbal therapies, since patients rightly want to know what is backed by research versus tradition alone.',
];

const PAIN_TYPES = [
  'Musculoskeletal pain (back, neck, shoulder, knee, joint pain)',
  'Neuropathic pain (sciatica, nerve compression)',
  'Inflammatory pain (arthritis, autoimmune joint disease)',
  'Post-surgical or post-injury persistent pain',
  'Myofascial pain involving trigger points and muscle tightness',
];

const PAIN_CAUSES = [
  'Joint degeneration and cartilage wear (osteoarthritis)',
  'Spinal disc issues, such as a slipped or herniated disc',
  'Repetitive strain, poor posture, and sedentary lifestyles',
  'Old injuries that never fully rehabilitated',
  'Systemic inflammation and metabolic factors',
];

const PAIN_SYMPTOMS = [
  'Persistent aching, stiffness, or burning pain',
  'Reduced mobility and flexibility',
  'Muscle weakness around the affected joint',
  'Sleep disruption due to pain flare-ups',
  'Fatigue and, in longstanding cases, low mood',
];

const AYURVEDA_ELEMENTS = [
  { icon: Wind, name: 'Panchakarma', desc: 'A structured detoxification and rejuvenation protocol involving therapies such as Abhyanga (medicated oil massage), Swedana (herbal steam therapy), Basti (medicated enema), and Nasya, aimed at reducing inflammation and restoring dosha balance.' },
  { icon: Leaf, name: 'Herbal Therapies', desc: 'Formulations using ingredients such as Ashwagandha, Guggulu, and Shallaki (Boswellia serrata), which have documented anti-inflammatory properties in some clinical studies.' },
  { icon: Droplet, name: 'External Therapies', desc: 'Ayurvedic oil-based treatments applied to affected joints and the spine to ease stiffness and improve local circulation.' },
  { icon: Salad, name: 'Lifestyle Modification', desc: "Dietary guidance, sleep routines, and daily regimens (Dinacharya) tailored to the patient's dosha constitution." },
  { icon: Flame, name: 'Long-Term Healing Philosophy', desc: 'Ayurveda generally prioritises gradual, root-cause-oriented healing over rapid symptom suppression, so results often build over weeks rather than days.' },
];

const ALLOPATHY_ELEMENTS = [
  { icon: Pill, name: 'Pain Medications', desc: 'Analgesics such as paracetamol and, for more severe pain, prescription options guided by a physician.' },
  { icon: AlertTriangle, name: 'Anti-Inflammatory Drugs (NSAIDs)', desc: 'Used to reduce inflammation and swelling around joints and soft tissue, though long-term use requires monitoring due to gastrointestinal and cardiovascular risk profiles.' },
  { icon: Syringe, name: 'Injections', desc: 'Corticosteroid or targeted injections for localised inflammation, such as in frozen shoulder or knee osteoarthritis.' },
  { icon: Bone, name: 'Surgery', desc: "Reserved for structural problems that don't respond to conservative care, such as advanced disc herniation or severe joint degeneration requiring joint replacement." },
  { icon: Activity, name: 'Rehabilitation', desc: 'Structured physiotherapy, electrotherapy, and exercise-based recovery programs following injury, surgery, or as a standalone treatment for musculoskeletal pain.' },
];

const COMPARISON = [
  { criteria: 'Treatment Philosophy', ayurveda: 'Root-cause, whole-body balance (dosha correction)', allopathy: 'Symptom- and structure-focused, diagnosis-driven' },
  { criteria: 'Speed of Pain Relief', ayurveda: 'Gradual, builds over weeks', allopathy: 'Often fast, especially with medication or injections' },
  { criteria: 'Root Cause Management', ayurveda: 'Strong focus on underlying imbalance and lifestyle', allopathy: 'Improving, especially with rehabilitation-led protocols' },
  { criteria: 'Side Effects', ayurveda: 'Generally low when supervised; herb-drug interactions possible', allopathy: 'Documented risk profile with NSAIDs, opioids, long-term use' },
  { criteria: 'Long-Term Effectiveness', ayurveda: 'Supportive of sustained lifestyle change', allopathy: 'Strong for structural correction; symptom control may need ongoing management' },
  { criteria: 'Scientific Evidence', ayurveda: 'Growing but still limited large-scale trial data', allopathy: 'Extensive, peer-reviewed evidence base (PubMed, Cochrane)' },
  { criteria: 'Recovery Approach', ayurveda: 'Gentle, therapy- and lifestyle-based', allopathy: 'Structured, protocol-based, often faster in acute phases' },
  { criteria: 'Personalisation', ayurveda: 'Highly individualised (dosha-based assessment)', allopathy: 'Individualised based on diagnosis and clinical guidelines' },
  { criteria: 'Cost Considerations', ayurveda: 'Often lower for conservative therapies; Panchakarma packages vary', allopathy: 'Can be higher with imaging, injections, or surgery' },
  { criteria: 'Best Candidates', ayurveda: 'Chronic, stable pain seeking holistic/lifestyle-based management', allopathy: 'Acute pain, structural damage, emergencies, rapid control needs' },
];

const AYURVEDA_BENEFITS = [
  'Holistic care — addresses diet, sleep, stress, and daily habits alongside the physical symptom.',
  'Reduced medication dependency — often used to taper long-term NSAID or analgesic use, under medical guidance.',
  'Lifestyle improvement — Dinacharya routines and dietary correction often improve digestion, sleep, and energy alongside pain relief.',
  'Stress reduction — therapies like Abhyanga and Shirodhara calm the nervous system, indirectly reducing pain perception.',
  'Better long-term wellness — sustained Ayurvedic lifestyle changes support joint health and inflammation control over years.',
];

const ALLOPATHY_BENEFITS = [
  'Fast symptom relief — medication and injections can meaningfully reduce pain within days.',
  'Emergency care — essential for trauma, fractures, or conditions requiring immediate stabilisation.',
  'Acute pain management — well suited to sudden flare-ups, post-injury pain, and infections.',
  'Advanced diagnostics — MRI, CT, and blood work allow precise identification of the pain source.',
  'Surgical interventions when required — for advanced disc herniation or severe joint degeneration.',
];

const CONDITIONS = [
  { icon: Bone, name: 'Arthritis Treatment Dubai', href: '/services/arthritis-treatment-dubai', approach: 'Allopathy (NSAIDs, injections) often controls acute inflammation, while Ayurveda and physiotherapy support long-term joint mobility.' },
  { icon: Activity, name: 'Back Pain Treatment Dubai', href: '/services/back-pain-treatment-dubai', approach: 'Physiotherapy and Ayurvedic therapies work well for chronic, non-structural back pain; allopathic imaging is important to rule out disc involvement first.' },
  { icon: Stethoscope, name: 'Neck Pain Treatment Dubai', href: '/services/neck-pain-treatment-dubai', approach: 'Often responds well to manual therapy, physiotherapy, and Ayurvedic oil-based treatments once serious structural causes are excluded.' },
  { icon: Zap, name: 'Sciatica Treatment Dubai', href: '/services/sciatica-treatment-dubai', approach: 'Requires accurate diagnosis (often via MRI); mild to moderate cases often respond to physiotherapy and Ayurvedic management, while severe nerve compression may need allopathic or surgical intervention.' },
  { icon: HeartPulse, name: 'Frozen Shoulder Treatment Dubai', href: '/services/frozen-shoulder-treatment-dubai', approach: 'A combination of physiotherapy, dry needling, and Ayurvedic therapy is common; allopathic injections can help in resistant cases.' },
  { icon: ScanLine, name: 'Slip Disc Treatment Dubai', href: '/services/slip-disc-treatment-dubai', approach: 'Requires allopathic diagnostic imaging; conservative management is usually tried first, with surgery reserved for severe cases.' },
  { icon: Bone, name: 'Joint Pain Treatment Dubai', href: '/services/joint-pain-treatment-dubai', approach: 'Best managed with anti-inflammatory care, physiotherapy, and lifestyle-based Ayurvedic support.' },
  { icon: Brain, name: 'Migraine Treatment Dubai', href: '/services/migraine-treatment-dubai', approach: 'Both stress-reduction-focused Ayurvedic therapies and allopathic preventive medication have roles, depending on frequency and severity.' },
  { icon: Activity, name: 'Sports Injury Rehabilitation Dubai', href: '/services/sports-injury-rehabilitation-dubai', approach: 'Typically allopathy-led in the acute phase, followed by physiotherapy-based rehabilitation.' },
];

const PROCESS = [
  { name: 'Consultation', desc: 'A detailed discussion of your pain history, lifestyle, and prior treatments.' },
  { name: 'Assessment', desc: 'Physical examination and, where needed, coordination for relevant diagnostic imaging.' },
  { name: 'Diagnosis', desc: "A clear clinical picture of what's actually causing your pain." },
  { name: 'Personalised Treatment Planning', desc: 'A plan drawing on physiotherapy, Ayurveda, Panchakarma, dry needling, electrotherapy, or ultrasound therapy.' },
  { name: 'Follow-Up Care', desc: 'Progress is monitored and the plan adjusted as your pain and mobility change.' },
  { name: 'Lifestyle Recommendations', desc: 'Practical guidance on posture, ergonomics, diet, and daily routines to reduce recurrence.' },
];

const WHY_US = [
  'Experienced physiotherapists and Ayurvedic practitioners working from the same clinical record',
  'Modern diagnostic coordination alongside traditional therapies',
  'Individualised plans rather than one-size-fits-all protocols',
  'A patient-centred approach that respects both evidence-based medicine and traditional healing systems',
];

const FAQS = [
  { q: 'Is Ayurveda better than Allopathy for chronic pain?', a: 'Neither is universally "better" — it depends on your diagnosis, pain severity, and medical history. Ayurveda tends to suit gradual, lifestyle-based management of stable chronic pain, while Allopathy is often faster for acute flares or structural problems.' },
  { q: 'Can Ayurveda and Allopathy be combined for chronic pain?', a: 'Yes, many patients use both under professional supervision, particularly when transitioning from acute medical management to long-term lifestyle-based care.' },
  { q: 'Which treatment works faster for pain relief?', a: 'Allopathic medication and injections generally act faster. Ayurvedic therapies tend to build results gradually over several weeks.' },
  { q: 'Which treatment is safer for long-term use?', a: 'Both carry considerations. Long-term NSAID use has a documented side-effect profile; Ayurvedic herbs can also interact with medications, so long-term use of either should be professionally supervised.' },
  { q: 'Does Ayurveda have side effects?', a: 'When practised by qualified professionals, Ayurvedic therapies are generally well tolerated, though herb-drug interactions are possible — always disclose your Ayurvedic treatment to your treating doctor.' },
  { q: 'Can chronic pain be permanently cured?', a: 'Some causes of chronic pain can be substantially resolved, while others (such as osteoarthritis) are managed rather than cured. Your outlook depends on the underlying diagnosis.' },
  { q: 'Is Panchakarma effective for chronic pain?', a: 'Panchakarma therapies show promising results for some patients, particularly for stiffness and inflammation, though evidence quality varies and it works best alongside a proper diagnosis.' },
  { q: 'Which treatment is suitable for arthritis?', a: 'A combination is common — allopathic management for acute inflammation, with physiotherapy and Ayurveda supporting long-term joint health.' },
  { q: 'Which is best for back pain — Ayurveda or Allopathy?', a: 'For non-structural chronic back pain, physiotherapy and Ayurveda are commonly effective. Imaging is important first to rule out disc-related causes.' },
  { q: 'When should I consult a doctor instead of trying home remedies?', a: 'If pain lasts more than a few weeks, worsens, or comes with numbness, weakness, or fever, seek a professional assessment promptly.' },
  { q: 'Is physiotherapy part of Allopathy or a separate discipline?', a: "Physiotherapy is generally considered part of conventional (allopathic) rehabilitative care, though it's often combined with Ayurvedic therapies in integrative treatment plans." },
  { q: 'Can Ayurveda help with sciatica?', a: 'Mild to moderate sciatica may respond well to Ayurvedic therapies and physiotherapy; severe nerve compression needs allopathic evaluation first.' },
  { q: 'Is frozen shoulder treated differently in Ayurveda vs Allopathy?', a: 'Ayurveda uses oil-based therapies and Panchakarma to ease stiffness; Allopathy may use injections or physiotherapy-led mobilisation. Many patients benefit from both.' },
  { q: 'How long does Ayurvedic treatment take to show results for chronic pain?', a: 'Most patients notice gradual improvement over several weeks, depending on the condition and consistency of treatment.' },
  { q: 'Are Ayurvedic pain treatments approved and regulated in Dubai?', a: 'Reputable Ayurveda clinics in Dubai operate under DHA licensing and regulatory oversight, which is worth confirming before starting treatment.' },
  { q: 'What diagnostic tests are used before starting either treatment?', a: 'Clinical examination is standard for both; imaging (X-ray, MRI) or blood tests may be recommended when structural or inflammatory causes are suspected.' },
  { q: 'Can I try Ayurveda first before considering surgery?', a: 'For many non-emergency conditions, conservative approaches including Ayurveda and physiotherapy are reasonable to try before surgical evaluation — this should be discussed with your doctor.' },
  { q: 'Does insurance in Dubai cover Ayurveda or physiotherapy treatment?', a: "Coverage varies by provider and plan; it's best to check directly with your insurer and the clinic's billing team." },
];

const LINK_GROUPS = [
  {
    title: 'Related Comparison Pages',
    icon: Scale,
    color: '#1F5E4B',
    links: [
      { label: 'Ayurveda vs Physiotherapy for Back Pain Dubai', href: '/services/ayurveda-vs-physiotherapy-for-back-pain-dubai' },
      { label: 'Ayurveda vs Physiotherapy for Arthritis Dubai', href: '/services/ayurveda-vs-physiotherapy-for-arthritis-dubai' },
      { label: 'Dry Needling vs Massage Therapy Dubai', href: '/services/dry-needling-vs-massage-therapy-dubai' },
    ],
  },
  {
    title: 'Health Guides & Articles',
    icon: BookOpen,
    color: '#8A6A3F',
    links: [
      { label: 'Benefits of Panchakarma', href: '/blog/benefits-of-panchakarma' },
      { label: 'Chronic Pain Management Guide', href: '/blog/chronic-pain-management-guide' },
      { label: 'Back Pain Exercises', href: '/blog/back-pain-exercises' },
      { label: 'Arthritis Management Tips', href: '/blog/arthritis-management-tips' },
      { label: 'Sciatica Recovery Guide', href: '/blog/sciatica-recovery-guide' },
    ],
  },
  {
    title: 'Additional Therapies & Wellness',
    icon: Stethoscope,
    color: '#1F5E4B',
    links: [
      { label: 'Electrotherapy Dubai', href: '/services/electrotherapy-dubai' },
      { label: 'Ultrasound Therapy Dubai', href: '/services/ultrasound-therapy-dubai' },
      { label: 'Stress Treatment Dubai', href: '/services/stress-treatment-dubai' },
      { label: 'Anxiety Treatment Dubai', href: '/services/anxiety-treatment-dubai' },
    ],
  },
];

/* --------------------------- Small building blocks --------------------------- */

function Eyebrow({ children }) {
  return <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1F5E4B]/70">{children}</span>;
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-6">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-2 text-2xl font-semibold leading-snug text-[#1A1A1A] sm:text-[1.75rem]">{title}</h2>
    </div>
  );
}

function CtaLink({ label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#1F5E4B] px-5 py-2.5 text-base font-semibold text-white hover:bg-[#17493B]"
    >
      <MessageCircle className="h-3.5 w-3.5" /> {label} <ArrowRight className="h-3.5 w-3.5" />
    </a>
  );
}

function InlineLink({ href, children }) {
  return (
    <a
      href={href}
      className="font-medium text-[#1F5E4B] underline decoration-[#1F5E4B]/40 underline-offset-2 transition-colors hover:text-[#0F3B2E] hover:decoration-[#1F5E4B]"
    >
      {children}
    </a>
  );
}

// Icons used above are all imported at the top of this file.

/* ================================ PAGE ================================ */

export default function AyurvedaVsAllopathyPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const clinicSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'RamaCare Polyclinic',
    url: 'https://ramacarepolyclinic.ae/',
    image: `https://ramacarepolyclinic.ae${IMAGES.infographic.src}`,
    telephone: '+971566597878',
    priceRange: 'AED',
    medicalSpecialty: ['Ayurveda', 'Physiotherapy', 'General Medicine'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
  };

  const medicalWebPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: SEO.title,
    url: SEO.canonical,
    description: SEO.metaDescription,
    about: { '@type': 'MedicalCondition', name: 'Chronic Pain' },
    reviewedBy: {
      '@type': 'Person',
      name: 'Dr. Shamna Keloth Meethal',
      jobTitle: 'Ayurveda Doctor',
      alumniOf: 'BAMS',
      url: 'https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai',
    },
  };

  const medicalConditionSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: 'Chronic Pain',
    signOrSymptom: PAIN_SYMPTOMS,
    possibleTreatment: [
      { '@type': 'MedicalTherapy', name: 'Ayurveda' },
      { '@type': 'MedicalTherapy', name: 'Allopathy' },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ramacarepolyclinic.ae/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://ramacarepolyclinic.ae/services/' },
      { '@type': 'ListItem', position: 3, name: 'Ayurveda vs Allopathy for Chronic Pain Dubai' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
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
        <meta property="og:image" content={`https://ramacarepolyclinic.ae${IMAGES.infographic.src}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayurveda vs Allopathy for Chronic Pain Dubai | RamaCare" />
        <meta name="twitter:description" content="Comparing Ayurveda vs Allopathy for chronic pain in Dubai? Get an expert, unbiased guide and book a personalised pain consultation at RamaCare." />
        <meta name="twitter:image" content={`https://ramacarepolyclinic.ae${IMAGES.infographic.src}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <div className="bg-white text-[#1A1A1A] antialiased">

        {/* ============================ HERO — text left, image right ============================ */}
        <section className="w-full bg-gradient-to-b from-[#F0F7F4]/50 via-[#F9F7F2]/30 to-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium text-[#5F5F5F]">
              <a href="/" className="hover:text-[#1F5E4B]">Home</a>
              <span aria-hidden="true">/</span>
              <a href="/services" className="hover:text-[#1F5E4B]">Services</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-[#1F5E4B]">Ayurveda vs Allopathy for Chronic Pain Dubai</span>
            </nav>

            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-7">
                <Eyebrow>Chronic Pain Comparison Guide</Eyebrow>
                <h1 className="mt-3 text-3xl font-semibold leading-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
                  Ayurveda vs Allopathy for Chronic Pain Dubai — Which Treatment Is Right for You?
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-[#5F5F5F]">
                  Living with pain that never fully goes away changes how you move, sleep, work,
                  and even think. It's no surprise that when researching Ayurveda vs Allopathy for
                  Chronic Pain Dubai, most patients aren't looking for a quick opinion — they're
                  trying to make a genuinely informed decision about a condition that has already
                  disrupted their daily life for months or years.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#5F5F5F]">
                  <InlineLink href="/services/back-pain-treatment-dubai">Chronic back pain</InlineLink>, <InlineLink href="/services/knee-pain-treatment-dubai">knee osteoarthritis</InlineLink>, <InlineLink href="/services/cervical-spondylosis-treatment-dubai">cervical spondylosis</InlineLink>, <InlineLink href="/services/frozen-shoulder-treatment-dubai">frozen shoulder</InlineLink>,
                  and <InlineLink href="/services/sciatica-treatment-dubai">sciatica</InlineLink> are among the most common reasons people in Dubai search for both
                  Ayurvedic and allopathic (modern medicine) treatment options. Each system
                  approaches pain differently — one focused on restoring balance and addressing
                  root causes over time, the other on rapid symptom control, diagnostics, and,
                  where necessary, surgical correction.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#5F5F5F]">
                  Because no two patients experience pain the same way, the "right" approach
                  depends on your diagnosis, the severity and duration of your symptoms, your
                  medical history, and a qualified professional's assessment — not on which system
                  is trending online. This guide compares both approaches honestly, so you can
                  have a more informed conversation with your doctor.
                </p>
                <CtaLink label="Book a Pain Management Consultation" href={waLink("Hello RamaCare, I'd like to book a Pain Management Consultation.")} />
                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-[#5F5F5F]"><ShieldCheck className="h-3.5 w-3.5 text-[#1F5E4B]" /> DHA-Licensed Clinic</span>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-[#5F5F5F]"><Leaf className="h-3.5 w-3.5 text-[#1F5E4B]" /> Ayurveda &amp; Physiotherapy, One Roof</span>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-[#5F5F5F]"><CheckCircle2 className="h-3.5 w-3.5 text-[#1F5E4B]" /> Personalised Treatment Plans</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl lg:sticky lg:top-8 shadow-md">
                  <Image src={IMAGES.infographic.src} alt={IMAGES.infographic.alt} fill sizes="(max-width: 1024px) 100vw, 500px" className="object-cover" priority />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- 1. Why Compare ---- */}
        <section id="why-compare" className="w-full py-12 md:py-16 scroll-mt-24 bg-white border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Why Compare" title="Why Patients in Dubai Compare Ayurveda and Allopathy" />
            <div className="mt-6">
              <p className="text-base leading-relaxed text-[#5F5F5F]">
                Dubai's healthcare landscape is unusual in a good way: it gives residents
                access to advanced allopathic hospitals and DHA-licensed Ayurveda and
                physiotherapy clinics within the same city, sometimes the same building. That
                access is exactly why so many patients now search for <InlineLink href="/services/ayurveda-dubai">Ayurveda Treatment Dubai</InlineLink>
                and Allopathy Treatment Dubai side by side before committing to a plan.
              </p>
              <p className="mt-4 text-base font-semibold text-[#1A1A1A]">A few reasons this comparison has become so common:</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {WHY_COMPARE.map((w) => (
                  <li key={w} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-[#F9F7F2]/50 p-4 text-base leading-relaxed text-[#1A1A1A]">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#1F5E4B]" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base leading-relaxed text-[#5F5F5F]">
                The goal of this article isn't to declare a winner. It's to give you a clear,
                evidence-based, Dubai-specific comparison so you and your treating doctor can
                choose the approach — or combination of approaches — that fits your specific
                diagnosis.
              </p>
            </div>
          </div>
        </section>

        {/* ---- 2. Understanding Chronic Pain ---- */}
        <section id="understanding" className="w-full py-12 md:py-16 scroll-mt-24 bg-[#F9F7F2]/40 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 items-start">
              <div className="lg:col-span-7">
                <SectionHeading eyebrow="The Basics" title="Understanding Chronic Pain" />
                <p className="text-base leading-relaxed text-[#5F5F5F]">
                  Chronic pain is generally defined as pain that persists for more than three
                  months, beyond the normal tissue healing time. It differs fundamentally from
                  acute pain, which is a short-term warning signal following an injury.
                </p>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl border border-gray-100 bg-white p-5">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-[#5F5F5F]">Common Types</h4>
                    <ul className="mt-3 space-y-2.5">
                      {PAIN_TYPES.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-base leading-relaxed text-[#1A1A1A]">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1F5E4B]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-gray-100 bg-white p-5">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-[#5F5F5F]">Common Causes</h4>
                    <ul className="mt-3 space-y-2.5">
                      {PAIN_CAUSES.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-base leading-relaxed text-[#1A1A1A]">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#D4A574]" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-[#5F5F5F]">Symptoms</h4>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {PAIN_SYMPTOMS.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-base leading-relaxed text-[#1A1A1A]">
                        <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#D4A574]" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 space-y-3">
                  <p className="text-base leading-relaxed text-[#5F5F5F]">
                    <strong className="text-[#1A1A1A]">Risk Factors: </strong>
                    Age, obesity, sedentary desk-based work (extremely common in Dubai's corporate
                    environment), previous injuries, poor ergonomic posture, and underlying
                    inflammatory conditions all increase the risk of chronic musculoskeletal pain.
                  </p>
                  <p className="text-base leading-relaxed text-[#5F5F5F]">
                    <strong className="text-[#1A1A1A]">Diagnosis: </strong>
                    A proper diagnosis typically involves a clinical examination, a review of
                    medical history, and where indicated, imaging (X-ray, MRI, ultrasound) or
                    blood tests to rule out inflammatory or autoimmune causes. This diagnostic step
                    matters regardless of which treatment path you eventually choose — both
                    Ayurveda and Allopathy work best when guided by an accurate diagnosis.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl lg:sticky lg:top-8 shadow-md">
                  <Image src={IMAGES.anatomy.src} alt={IMAGES.anatomy.alt} fill sizes="(max-width: 1024px) 100vw, 500px" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- 3. What Is Ayurveda ---- */}
        <section id="what-is-ayurveda" className="w-full py-12 md:py-16 scroll-mt-24 bg-white border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 items-start">
              <div className="order-2 lg:order-1 lg:col-span-5">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl lg:sticky lg:top-8 shadow-md">
                  <Image src={IMAGES.ayurvedaConsult.src} alt={IMAGES.ayurvedaConsult.alt} fill sizes="(max-width: 1024px) 100vw, 500px" className="object-cover" />
                </div>
              </div>
              <div className="order-1 lg:order-2 lg:col-span-7">
                <SectionHeading eyebrow="Ayurvedic Approach" title="What Is Ayurveda?" />
                <p className="text-base leading-relaxed text-[#5F5F5F]">
                  Ayurveda is a traditional system of medicine, originating in India over 3,000
                  years ago, that views health as a balance between three biological energies,
                  or doshas — Vata, Pitta, and Kapha. According to Ayurvedic principles, chronic
                  pain and inflammation often reflect a dosha imbalance, particularly of Vata,
                  which governs movement and the nervous system.
                </p>
                <p className="mt-4 text-base font-semibold text-[#1A1A1A]">Core Elements of Ayurvedic Pain Treatment</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {AYURVEDA_ELEMENTS.map((e) => {
                    const Icon = e.icon;
                    return (
                      <div key={e.name} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-[#F9F7F2]/50 p-4 transition-colors hover:bg-[#D4A574]/10">
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#D4A574]/20 text-[#8A6A3F]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-base font-semibold text-[#1A1A1A]">{e.name}</p>
                          <p className="mt-1 text-sm leading-relaxed text-[#5F5F5F]">{e.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-6 text-base leading-relaxed text-[#5F5F5F]">
                  According to the National Center for Complementary and Integrative Health
                  (NCCIH), some Ayurvedic herbs have shown anti-inflammatory activity in
                  preliminary research, though NCCIH also notes that robust, large-scale clinical
                  evidence is still limited for many Ayurvedic protocols — which is why Ayurveda
                  is best used under qualified supervision and, for many chronic conditions,
                  alongside conventional diagnosis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---- 4. What Is Allopathy ---- */}
        <section id="what-is-allopathy" className="w-full py-12 md:py-16 scroll-mt-24 bg-[#F9F7F2]/40 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 items-start">
              <div className="lg:col-span-7">
                <SectionHeading eyebrow="Allopathic Approach" title="What Is Allopathy?" />
                <p className="text-base leading-relaxed text-[#5F5F5F]">
                  Allopathy refers to modern, evidence-based conventional medicine — the
                  diagnostic and treatment system practised in mainstream hospitals and clinics
                  worldwide, grounded in pharmacology, surgery, and clinical rehabilitation.
                </p>
                <p className="mt-4 text-base font-semibold text-[#1A1A1A]">Core Elements of Allopathic Pain Treatment</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {ALLOPATHY_ELEMENTS.map((e) => {
                    const Icon = e.icon;
                    return (
                      <div key={e.name} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 transition-colors hover:bg-[#1F5E4B]/5">
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-base font-semibold text-[#1A1A1A]">{e.name}</p>
                          <p className="mt-1 text-sm leading-relaxed text-[#5F5F5F]">{e.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-6 text-base leading-relaxed text-[#5F5F5F]">
                  The Mayo Clinic and the NHS both note that a stepped approach — starting with
                  conservative measures like physiotherapy and medication before considering
                  injections or surgery — is standard practice for most chronic musculoskeletal
                  pain conditions. The Cochrane Library has published multiple systematic reviews
                  confirming strong evidence for exercise-based physiotherapy in managing chronic
                  low back pain and knee osteoarthritis.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl lg:sticky lg:top-8 shadow-md">
                  <Image src={IMAGES.physio.src} alt={IMAGES.physio.alt} fill sizes="(max-width: 1024px) 100vw, 500px" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- 5. Comparison table ---- */}
        <section id="comparison" className="w-full py-12 md:py-16 scroll-mt-24 bg-white border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <SectionHeading eyebrow="Side-by-Side" title="Ayurveda vs Allopathy for Chronic Pain Dubai — Comparison Table" />
              </div>
              <div className="lg:col-span-5">
                <p className="text-base leading-relaxed text-[#5F5F5F]">
                  When comparing Ayurveda vs Allopathy for Chronic Pain Dubai, it helps to
                  look at both systems across the same practical criteria patients actually
                  care about.
                </p>
              </div>
            </div>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full min-w-[700px] border-collapse text-left text-base">
                <thead>
                  <tr className="bg-[#1F5E4B] text-white">
                    <th className="px-6 py-4 font-semibold w-1/4">Criteria</th>
                    <th className="px-6 py-4 font-semibold w-3/8 text-[#F5E6D3]">Ayurveda</th>
                    <th className="px-6 py-4 font-semibold w-3/8 text-white">Allopathy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {COMPARISON.map((row, i) => (
                    <tr key={row.criteria} className={i % 2 === 0 ? 'bg-white hover:bg-gray-50/80' : 'bg-[#F9F7F2]/60 hover:bg-gray-50/80'}>
                      <td className="px-6 py-4 font-medium text-[#1A1A1A]">{row.criteria}</td>
                      <td className="px-6 py-4 text-[#5F5F5F]">{row.ayurveda}</td>
                      <td className="px-6 py-4 text-[#5F5F5F]">{row.allopathy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-base leading-relaxed text-[#5F5F5F]">
              <InlineLink href="/services/ayurveda-dubai">Ayurveda Treatment Dubai</InlineLink> tends to appeal to patients managing long-standing,
              stable chronic pain who want to reduce medication dependency. Allopathy
              Treatment Dubai tends to be the faster, more evidence-heavy route for acute
              flare-ups, structural injuries, or situations requiring urgent diagnostics.
            </p>
          </div>
        </section>

        {/* ---- 6/7. Benefits ---- */}
        <section id="benefits" className="w-full py-12 md:py-16 scroll-mt-24 bg-[#F9F7F2]/40 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
            <SectionHeading eyebrow="The Upside" title="Benefits of Each Approach" />

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-amber-200/60 bg-amber-50/40 p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[#8A6A3F] mb-5 flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-[#8A6A3F]" /> Benefits of Ayurveda
                </h3>
                <ul className="space-y-3">
                  {AYURVEDA_BENEFITS.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-base leading-relaxed text-[#1A1A1A]">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-[#8A6A3F]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-emerald-200/60 bg-emerald-50/40 p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[#1F5E4B] mb-5 flex items-center gap-2">
                  <Pill className="h-5 w-5 text-[#1F5E4B]" /> Benefits of Allopathy
                </h3>
                <ul className="space-y-3">
                  {ALLOPATHY_BENEFITS.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-base leading-relaxed text-[#1A1A1A]">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-[#1F5E4B]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ---- 8. Combined Care ---- */}
        <section id="combined" className="w-full py-12 md:py-16 scroll-mt-24 bg-white border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 items-start">
              <div className="order-2 lg:order-1 lg:col-span-5">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl lg:sticky lg:top-8 shadow-md">
                  <Image src={IMAGES.consultation.src} alt={IMAGES.consultation.alt} fill sizes="(max-width: 1024px) 100vw, 500px" className="object-cover" />
                </div>
              </div>
              <div className="order-1 lg:order-2 lg:col-span-7">
                <SectionHeading eyebrow="Integrative Care" title="Can Ayurveda and Allopathy Be Combined?" />
                <p className="text-base leading-relaxed text-[#5F5F5F]">
                  Increasingly, yes — this is often called integrative healthcare, and it is one
                  of the fastest-growing approaches to Chronic Pain Management Dubai.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#5F5F5F]">
                  A combined approach might involve using allopathic diagnostics and medication
                  to control an acute flare-up, while introducing <InlineLink href="/services/physiotherapy-dubai">physiotherapy</InlineLink>, Ayurvedic
                  <InlineLink href="/services/panchakarma-treatment">Panchakarma</InlineLink>, or manual therapy to address underlying mobility, posture, and
                  lifestyle factors once the acute phase settles. Some patients also use Ayurveda
                  alongside ongoing <InlineLink href="/services/physiotherapy-dubai">physiotherapy</InlineLink> and <InlineLink href="/services/dry-needling-dubai">dry needling</InlineLink> to manage chronic stiffness
                  and reduce recurrence.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#5F5F5F]">
                  Collaborative treatment does require professional supervision. Certain
                  Ayurvedic herbs can interact with prescription medications (particularly blood
                  thinners and diabetes medication), so any integrative plan should be
                  coordinated between your treating physician and Ayurvedic practitioner — not
                  self-managed. At a multidisciplinary clinic, this coordination happens under
                  one roof, reducing the risk of conflicting or duplicated treatment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---- 9. Conditions ---- */}
        <section id="conditions" className="w-full py-12 md:py-16 scroll-mt-24 bg-[#F9F7F2]/40 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="By Condition" title="Which Treatment Is Better for Different Conditions?" />
            <p className="text-base leading-relaxed text-[#5F5F5F]">
              There's no universal answer — the better starting point depends on the specific
              condition:
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CONDITIONS.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.name}
                    href={c.href}
                    className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-[#1F5E4B]/30"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B] transition-colors group-hover:bg-[#1F5E4B] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-lg font-semibold text-[#1A1A1A] transition-colors group-hover:text-[#1F5E4B]">{c.name}</p>
                    <p className="mt-2 text-base leading-relaxed text-[#5F5F5F] flex-1">{c.approach}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F5E4B]">
                      Learn More <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                );
              })}
            </div>
            <p className="mt-6 text-base leading-relaxed text-[#5F5F5F]">
              In every case, the right starting point is a proper clinical assessment — not a
              guess based on what worked for someone else.
            </p>
          </div>
        </section>

        {/* ---- 10. Process ---- */}
        <section id="process" className="w-full py-12 md:py-16 scroll-mt-24 bg-white border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Your Journey" title="Treatment Process at RamaCare Polyclinic" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS.map((p, i) => (
                <div key={p.name} className="flex flex-col rounded-2xl border border-gray-100 bg-[#F9F7F2]/50 p-6 transition-all hover:shadow-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1F5E4B] text-sm font-bold text-white mb-4">
                    {i + 1}
                  </span>
                  <p className="text-lg font-semibold text-[#1A1A1A]">{p.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#5F5F5F]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Medically Reviewed Badge ---- */}
        <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurveda-vs-allopathy-for-chronic-pain-dubai" />

        {/* ---- 11. Why choose us ---- */}
        <section id="why-us" className="w-full py-12 md:py-16 scroll-mt-24 bg-[#F9F7F2] border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 items-center">
              <div className="lg:col-span-5">
                <SectionHeading title="Why Choose RamaCare Polyclinic?" />
                <p className="text-base leading-relaxed text-[#5F5F5F]">
                  RamaCare Polyclinic is a DHA-licensed, multi-specialty clinic in Jumeirah 1,
                  Dubai, offering <InlineLink href="/services/physiotherapy-dubai">Physiotherapy Dubai</InlineLink> and <InlineLink href="/services/ayurveda-dubai">Ayurveda Treatment Dubai</InlineLink> under one
                  roof — which is precisely what makes an honest Ayurveda vs Allopathy for
                  Chronic Pain Dubai comparison possible in practice, not just in theory.
                  Patients don't have to choose blind; they can be assessed by experienced
                  healthcare professionals on our team (view our <InlineLink href="/doctors">Doctor Profile Pages</InlineLink>) across both disciplines and receive an
                  individualised treatment plan based on their actual diagnosis.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#5F5F5F]">
                  Have questions before booking? Visit our <InlineLink href="/contact-us">Contact Page</InlineLink> or reserve your consultation directly on our <InlineLink href="/book-appointment">Book Appointment Page</InlineLink>.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  {WHY_US.map((w) => (
                    <div key={w} className="flex items-start gap-3 rounded-xl bg-white p-5 border border-gray-100 shadow-sm text-base leading-relaxed text-[#1A1A1A]">
                      <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1F5E4B]" />
                      <span>{w}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- 12. FAQ ---- */}
        <section id="faq" className="w-full py-12 md:py-16 scroll-mt-24 bg-white border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Common Questions" title="Frequently Asked Questions" />
            <div className="mt-8 columns-1 gap-6 sm:columns-2">
              {FAQS.map((f, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={f.q} className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-gray-200 transition-colors">
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left font-semibold text-[#1A1A1A] hover:bg-gray-50"
                    >
                      <span className="text-base">{f.q}</span>
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
                          <p className="border-t border-gray-100 px-5 pb-5 pt-3 text-base leading-relaxed text-[#5F5F5F]">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================ STRONG CTA + DISCLAIMER ============================ */}
        <section id="book-now" className="w-full py-12 md:py-16 bg-white border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-gray-200 bg-[#F9F7F2]/60 p-8 sm:p-12 shadow-sm">
              <div className="grid gap-8 lg:grid-cols-12 items-center">
                <div className="lg:col-span-7">
                  <p className="text-base leading-relaxed text-[#5F5F5F]">
                    Whether you're leaning toward Ayurveda, Allopathy, or a combination of both, the
                    safest first step is a proper professional assessment — not a guess. If you're
                    dealing with arthritis, back pain, neck pain, sciatica, joint pain, or ongoing
                    chronic pain that hasn't responded to previous treatment, book a Pain Management
                    Consultation at RamaCare Polyclinic and get a personalised plan built around your
                    actual diagnosis.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a
                      href={waLink("Hello RamaCare, I'd like to book a Pain Management Consultation.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1F5E4B] px-6 py-3.5 text-base font-semibold text-white hover:bg-[#17493B] shadow-md transition-all"
                    >
                      Book Your Consultation <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href="tel:+971042862006"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1F5E4B]/25 bg-white px-6 py-3.5 text-base font-semibold text-[#1F5E4B] hover:bg-[#F9F7F2] transition-all"
                    >
                      <Phone className="h-4 w-4" /> Call Now
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                    <p className="text-base font-semibold text-[#1A1A1A]">Medical Disclaimer</p>
                    <p className="mt-2 text-sm italic leading-relaxed text-[#5F5F5F]">
                      This page is for educational purposes only and does not constitute medical
                      advice. It is not a substitute for professional diagnosis or treatment.
                      Individual treatment recommendations, including any choice between Ayurveda,
                      Allopathy, or a combined approach, require in-person consultation with a
                      qualified healthcare professional who can assess your specific condition,
                      medical history, and needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ RELATED RESOURCES & DIRECTORY ============================ */}
        <section className="w-full py-12 md:py-16 bg-[#F9F7F2]/40 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <Eyebrow>Resource Hub</Eyebrow>
              <h2 className="mt-2 text-2xl font-semibold leading-snug text-[#1A1A1A] sm:text-[1.75rem]">
                Related Treatments &amp; Helpful Guides
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#5F5F5F]">
                Quick access to our specialized pain management services, condition pages, comparisons, and health articles.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {LINK_GROUPS.map((g) => {
                const Icon = g.icon;
                return (
                  <div
                    key={g.title}
                    className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-xl"
                        style={{ backgroundColor: `${g.color}1A`, color: g.color }}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-base font-semibold text-[#1A1A1A]">{g.title}</h3>
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      {g.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          className="flex items-center gap-2 rounded-lg border border-gray-100 bg-[#F9F7F2] px-3.5 py-2 text-xs font-medium text-[#1A1A1A] transition-colors hover:bg-[#1F5E4B] hover:text-white"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B]"></span>
                          {l.label}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---- Doctors Section ---- */}
        <DoctorsSection
          customDoctors={[
            DOCTORS['dr-shamna-keloth-meethal-ayurveda-doctor-dubai'],
            DOCTORS['jeena-mathew-physiotherapist-dubai']
          ].filter(Boolean)}
          content={{
            badge: 'Clinical Review & Team',
            title: 'Meet Our DHA-Licensed Doctors & Specialists',
            description: 'Clinically reviewed by Dr. Shamna Keloth Meethal (Ayurveda Practitioner) and supported by Jeena Mathew (Musculoskeletal Physiotherapist) at RamaCare Polyclinic Jumeirah 1, Dubai.'
          }}
        />

        <BookConsultation />

      </div>
    </Layout>
  );
}