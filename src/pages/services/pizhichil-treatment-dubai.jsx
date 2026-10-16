import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import {
  MessageCircle,
  Phone,
  Clock,
  Sparkles,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Activity,
  HeartPulse,
  Stethoscope,
  CheckSquare,
  ArrowRight,
  Search,
  Heart,
  Droplets,
  Calendar,
  Utensils,
  Thermometer,
  Feather,
  ShieldCheck,
  MapPin,
  Info,
  FileText,
  Sliders
} from 'lucide-react';

const SITE = 'https://ramacarepolyclinic.ae';
const PATH = '/services/pizhichil-treatment-dubai/';
const URL = `${SITE}${PATH}`;
const TITLE = 'Pizhichil Treatment in Dubai | RamaCare Polyclinic';
const DESCRIPTION =
  'Pizhichil treatment in Dubai explained: traditional warm oil therapy, possible benefits, precautions and who it suits. Doctor-led Ayurveda in Jumeirah 1.';
const OG_IMAGE = `${SITE}/images/pizhichil-treatment-setup-illustration.webp`;

export const faqs = [
  {
    q: 'What is Pizhichil treatment?',
    a: 'A traditional Ayurvedic therapy from Kerala in which warm medicated oil is poured over the body while therapists massage in a coordinated rhythm. It rests on traditional concepts rather than proof that it cures any condition, and suitability should be assessed first.',
  },
  {
    q: 'How does Pizhichil therapy work in traditional Ayurveda?',
    a: 'Traditionally it combines oleation (oil) and sudation (warmth) in one session, with the aim of leaving the body supple and relaxed. These are traditional explanations rather than established biomedical mechanisms, and practice varies between practitioners.',
  },
  {
    q: 'What are the potential benefits of Pizhichil?',
    a: 'Realistically, relaxation and temporary muscle comfort. Traditional texts describe wider uses, but good trials specific to Pizhichil are limited. It does not cure medical conditions, and results vary. Be wary of claims about detoxification or guaranteed relief.',
  },
  {
    q: 'Is Pizhichil treatment suitable for joint stiffness?',
    a: 'Some people explore it for stiffness within a wider care plan, but suitability depends on the cause. It does not treat arthritis or repair joints. Swelling, injury or severe pain should be medically assessed first.',
  },
  {
    q: 'Can Pizhichil help with back or neck discomfort?',
    a: 'It may feel soothing for tight muscles, but back and neck pain have many causes. Persistent symptoms need assessment, and weakness, numbness, bladder or bowel changes or fever need urgent medical care. It does not replace physiotherapy.',
  },
  {
    q: 'How is Pizhichil different from Abhyanga massage?',
    a: 'Abhyanga is an Ayurvedic oil massage done by hand. Pizhichil adds a continuous stream of warm oil poured over the body while massage continues, usually with two therapists. Neither is universally better; the right choice depends on assessment.',
  },
  {
    q: 'Is Pizhichil suitable for everyone?',
    a: 'No. Open wounds, skin infections, allergy to the oil, reduced heat sensation, circulatory problems, acute injury, recent surgery, pregnancy or complex medical conditions may call for changes, medical clearance or a different approach.',
  },
  {
    q: 'What are the possible risks or side effects of Pizhichil?',
    a: 'Burns from oil that is too hot, skin irritation or allergy, bruising or soreness from massage, dizziness, and slipping on oily floors. Careful temperature checks and speaking up early reduce the risk. Report any burning, rash or discomfort straight away.',
  },
  {
    q: 'How should I prepare for a Pizhichil session?',
    a: "Bring a list of your medicines, allergies and relevant reports, mention any skin condition or heat sensitivity, wear or bring clothing that oil may mark, and follow the clinic's instructions. Never attempt a heated-oil treatment yourself at home.",
  },
  {
    q: 'How long does a Pizhichil session take?',
    a: "There is no single answer, because duration depends on the protocol, the treatment area and your assessment. The clinic should confirm the expected length before you book, and RamaCare's team can tell you what applies to your plan.",
  },
  {
    q: 'How many Pizhichil sessions might someone need?',
    a: 'It varies with the reason for treatment, how you respond and whether Pizhichil is part of a wider plan such as Panchakarma. No responsible provider guarantees results from a set number of sessions.',
  },
  {
    q: 'Is Pizhichil treatment available in Jumeirah 1, Dubai?',
    a: 'RamaCare Polyclinic lists Pizhichil among its Ayurvedic therapies at its Al Dhiyafah Road clinic in Jumeirah 1. Therapies are prescribed after consultation with the Ayurvedic doctor, so contact the clinic to confirm availability and suitability.',
  },
];

// ============================================================================
// INTERNAL REFERENCE SPECIFICATIONS (RETAINED IN CODE ONLY - NOT RENDERED IN UI)
// ============================================================================
export const medicalResearchNotes = [
  {
    topic: 'Meaning and origin',
    sourcesSay:
      'Pizhichil is a Malayalam term meaning squeezing. Warm medicated oil is squeezed from a cloth over the body with simultaneous massage. Kerala tradition; also called Sarvangadhara or Kayaseka.',
    source: 'Arya Vaidya Sala; Amala Ayurveda; Nattika',
    evidenceType: 'Institutional and traditional description',
  },
  {
    topic: 'Rationale',
    sourcesSay: 'Combines snehana (oleation) and swedana (warmth) in one therapy.',
    source: 'Arya Vaidya Sala; Nattika',
    evidenceType: 'Traditional concept, not a biomedical mechanism',
  },
  {
    topic: 'How it is performed',
    sourcesSay:
      'Oil heated over a hot water bath, poured while massaging with the other hand, in a set sequence of positions, after vitals are checked.',
    source: 'Amrita eMAP SOP',
    evidenceType: 'Institutional protocol',
  },
  {
    topic: 'Staffing, duration, volume',
    sourcesSay:
      'Often two therapists working in step, about an hour per session, roughly 3 to 4 litres of oil. Some sources describe courses of 14 to 28 days.',
    source: 'Amala; Mayrveda; Amrita SOP; GlobalSpa',
    evidenceType: 'Provider statements; they vary, so the page does not state them as RamaCare facts',
  },
  {
    topic: 'Traditional indications',
    sourcesSay:
      'Vata-related conditions, post-fracture stiffness, osteoarthritis, sciatica, neuromuscular conditions.',
    source: 'Nattika; Arya Vaidya Sala',
    evidenceType: 'Traditional use only; not reproduced as claims',
  },
  {
    topic: 'Clinical evidence',
    sourcesSay:
      'In this pass I found no Pizhichil-specific randomised trials. NCCIH describes the Ayurvedic evidence base as limited and advises against using it to postpone conventional care; a 2024 review notes standardisation problems and the need for more evidence.',
    source: 'NCCIH; Verma et al., Bull Natl Res Cent 2024',
    evidenceType:
      'Limited. Please run a PubMed check for Pizhichil and Sarvanga Dhara before adding any evidence claim',
  },
  {
    topic: 'Safety (heat, allergy, slipping, skin, red flags)',
    sourcesSay:
      'Written from general clinical reasoning for warm-oil and massage therapies. I did not find a Pizhichil-specific safety study.',
    source: 'General practice',
    evidenceType: 'Needs sign-off from Dr. Shamna',
  },
  {
    topic: 'UAE advertising rules',
    sourcesSay:
      "RamaCare's site footer shows an advertisement licence number. I did not retrieve DHA's current health-advertising rules in this pass.",
    source: 'RamaCare site',
    evidenceType: 'Compliance check required',
  },
];

export const secondaryKeywords = [
  { keyword: 'Pizhichil treatment Dubai', placement: 'Title, H1, first paragraph, clinic-choice heading, FAQ heading, closing' },
  { keyword: 'Pizhichil therapy Dubai', placement: 'Section 2 heading, FAQ 2' },
  { keyword: 'Pizhichil treatment in Dubai', placement: 'Meta description, Section 12 heading' },
  { keyword: 'Pizhichil Ayurvedic treatment', placement: 'Introduction, Section 2' },
  { keyword: 'Pizhichil massage Dubai', placement: 'Section 10 (one mention, explaining the difference from massage)' },
  { keyword: 'Ayurvedic oil bath treatment Dubai', placement: 'Section 2 (one mention)' },
  { keyword: 'Pizhichil treatment benefits / therapy benefits', placement: 'Section 4 heading, FAQ 3' },
  { keyword: 'Traditional Ayurvedic oil treatment', placement: 'Section 2' },
  { keyword: 'Pizhichil for joint stiffness / muscle stiffness', placement: 'Section 5 heading, FAQ 4' },
  { keyword: 'Pizhichil for back pain', placement: 'Section 6 (phrased as back and neck discomfort), FAQ 5' },
  { keyword: 'Pizhichil for relaxation', placement: 'Section 4, FAQ 3' },
  { keyword: 'Ayurvedic clinic in Dubai', placement: 'Section 12' },
  { keyword: 'Ayurveda treatment in Jumeirah 1', placement: 'Section 13, FAQ 12' },
  { keyword: 'Ayurvedic therapies in Dubai', placement: 'Section 10' },
  { keyword: 'Kerala Ayurvedic treatment Dubai', placement: 'Section 2, Section 13' },
];

export const internalLinksTable = [
  { source: 'Pizhichil page', dest: 'https://ramacarepolyclinic.ae/services/ayurveda-dubai/', anchor: 'Ayurvedic treatments', placement: 'Introduction, third paragraph' },
  { source: 'Pizhichil page', dest: 'https://ramacarepolyclinic.ae/services/physiotherapy-dubai/', anchor: 'Physiotherapy', placement: 'Back and neck section' },
  { source: 'Pizhichil page', dest: 'https://ramacarepolyclinic.ae/services/back-pain-treatment-dubai/', anchor: 'back pain treatment', placement: 'Back and neck section' },
  { source: 'Pizhichil page', dest: 'https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/', anchor: 'Dr. Shamna Keloth Meethal', placement: 'Consultation section' },
  { source: 'Pizhichil page', dest: 'https://ramacarepolyclinic.ae/services/prakriti-dosha-assessment-dubai/', anchor: 'Prakriti assessment', placement: 'Consultation section' },
  { source: 'Pizhichil page', dest: 'https://ramacarepolyclinic.ae/services/abhyanga-massage-dubai/', anchor: 'Abhyanga', placement: 'Comparison section' },
  { source: 'Pizhichil page', dest: 'https://ramacarepolyclinic.ae/services/kizhi-therapy-dubai/', anchor: 'Kizhi', placement: 'Comparison section' },
  { source: 'Pizhichil page', dest: 'https://ramacarepolyclinic.ae/services/shirodhara-therapy-in-dubai/', anchor: 'Shirodhara', placement: 'Comparison section' },
  { source: 'Pizhichil page', dest: 'https://ramacarepolyclinic.ae/services/panchakarma-treatment-dubai/', anchor: 'Panchakarma', placement: 'FAQ 11' },
  { source: 'Pizhichil page', dest: 'https://ramacarepolyclinic.ae/services/polyclinic-in-jumeirah-1/', anchor: 'visiting the Jumeirah 1 clinic', placement: 'RamaCare section' },
  { source: 'Pizhichil page', dest: 'https://ramacarepolyclinic.ae/book-appointment/', anchor: 'book an appointment', placement: 'Closing paragraph' },
];

export default function PizhichilTreatmentDubai() {
  const [openFaq, setOpenFaq] = useState(null);
  const [faqSearch, setFaqSearch] = useState('');
  const [activeStep, setActiveStep] = useState(0);
  const [selectedTherapyTab, setSelectedTherapyTab] = useState(0);
  const [dhaChecked, setDhaChecked] = useState([false, false, false, false, false, false, false]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/971566597878', '_blank', 'noopener,noreferrer');
  };

  const handleCall = () => {
    window.location.href = 'tel:+97142862006';
  };

  const toggleDhaCheck = (index) => {
    const updated = [...dhaChecked];
    updated[index] = !updated[index];
    setDhaChecked(updated);
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalClinic',
        '@id': `${SITE}/#clinic`,
        name: 'RamaCare Polyclinic',
        url: `${SITE}/`,
        telephone: '+97142862006',
        email: 'query@ramacarepolyclinic.ae',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor',
          addressLocality: 'Jumeirah 1',
          addressRegion: 'Dubai',
          addressCountry: 'AE',
        },
        hasMap: 'https://maps.google.com/?cid=4290863257518002596',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '10:00',
          closes: '22:00',
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            telephone: '+971566597878',
            availableLanguage: ['English', 'Hindi', 'Malayalam', 'Arabic', 'Tagalog'],
            description: 'Phone and WhatsApp',
          },
        ],
        sameAs: [
          'https://www.facebook.com/RamaCarePolyClinic/',
          'https://www.instagram.com/ramacarepolyclinic/',
          'https://www.linkedin.com/company/ramacarepolyclinics/',
          'https://www.youtube.com/@ramacarepolyclinic',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: `${SITE}/`,
        name: 'RamaCare Polyclinic',
        inLanguage: 'en-AE',
        publisher: { '@id': `${SITE}/#clinic` },
      },
      {
        '@type': 'Person',
        '@id': `${SITE}/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#person`,
        name: 'Dr. Shamna Keloth Meethal',
        jobTitle: 'Ayurveda Doctor (BAMS)',
        url: `${SITE}/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/`,
        worksFor: { '@id': `${SITE}/#clinic` },
        knowsLanguage: ['English', 'Malayalam', 'Hindi'],
      },
      {
        '@type': 'ImageObject',
        '@id': `${URL}#primaryimage`,
        url: `${SITE}/images/pizhichil-treatment-setup-illustration.webp`,
        contentUrl: `${SITE}/images/pizhichil-treatment-setup-illustration.webp`,
        caption: 'Illustration of a traditional Pizhichil setup.',
        width: 1200,
        height: 630,
      },
      {
        '@type': 'MedicalTherapy',
        '@id': `${URL}#therapy`,
        name: 'Pizhichil',
        alternateName: ['Sarvanga Dhara', 'Kayaseka'],
        description:
          'A traditional Ayurvedic therapy from Kerala in which warm medicated oil is poured over the body while therapists massage in a coordinated rhythm. It rests on traditional concepts, and suitability should be assessed by a qualified practitioner.',
      },
      {
        '@type': 'MedicalWebPage',
        '@id': `${URL}#webpage`,
        url: URL,
        name: TITLE,
        headline: 'Pizhichil Treatment in Dubai, Jumeirah 1',
        description: DESCRIPTION,
        inLanguage: 'en-AE',
        isPartOf: { '@id': `${SITE}/#website` },
        publisher: { '@id': `${SITE}/#clinic` },
        primaryImageOfPage: { '@id': `${URL}#primaryimage` },
        breadcrumb: { '@id': `${URL}#breadcrumb` },
        about: { '@id': `${URL}#therapy` },
        mainContentOfPage: { '@type': 'WebPageElement', cssSelector: 'main' },
        lastReviewed: '2026-10-16',
        reviewedBy: {
          '@id': `${SITE}/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#person`,
        },
        mainEntity: { '@id': `${URL}#faq` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${URL}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services/` },
          { '@type': 'ListItem', position: 3, name: 'Ayurveda', item: `${SITE}/services/ayurveda-dubai/` },
          { '@type': 'ListItem', position: 4, name: 'Pizhichil Treatment Dubai', item: URL },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${URL}#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
  };

  const performanceSteps = [
    {
      num: '01',
      title: 'Consultation',
      desc: 'The practitioner asks about your symptoms, goals and previous treatment.',
      icon: Stethoscope,
      detail: 'Initial dialogue establishes clinical boundaries, patient expectations, and whether warm oil therapy aligns with current medical status.'
    },
    {
      num: '02',
      title: 'Health review',
      desc: 'Medical history, current medication, allergies, skin sensitivity and tolerance of heat are checked.',
      icon: FileText,
      detail: 'Vital screening for circulatory stability, skin integrity, thermal awareness, and pharmaceutical interactions.'
    },
    {
      num: '03',
      title: 'Choosing a protocol',
      desc: 'If Pizhichil seems suitable, the oil, treatment area and approach are selected.',
      icon: Sliders,
      detail: 'Selection of specific herbalized base oils (e.g., tailored to Vata balancing) and determination of whole-body vs localized flow.'
    },
    {
      num: '04',
      title: 'Preparation',
      desc: 'The room is set up for safe footing, and the oil is warmed with its temperature checked before it touches the skin.',
      icon: Thermometer,
      detail: 'Water bath warming method prevents oil burning. Anti-slip safety mats and towels are arranged to secure room traction.'
    },
    {
      num: '05',
      title: 'Treatment',
      desc: 'Therapists pour the oil and massage with traditional movements, usually across several body positions.',
      icon: Droplets,
      detail: 'Typically two trained therapists of the same gender coordinate continuous pouring via soft cloths while applying light, rhythmic touch.'
    },
    {
      num: '06',
      title: 'Monitoring',
      desc: 'Comfort, skin response and temperature are watched throughout, and you can ask to stop.',
      icon: Activity,
      detail: 'Continuous thermal check on skin and verbal comfort checks ensure you maintain full autonomy at every minute.'
    },
    {
      num: '07',
      title: 'Aftercare',
      desc: 'You receive guidance on what to do next, and any reaction is noted.',
      icon: ShieldCheck,
      detail: 'Practical hygiene guidance, hydration, gentle transition back to everyday tasks, and post-session monitoring.'
    },
  ];

  const comparisonData = [
    {
      therapy: 'Pizhichil',
      technique: 'Continuous warm oil poured over the body with simultaneous massage',
      focus: 'Whole body or a chosen area',
      link: '/services/pizhichil-treatment-dubai/',
      badge: 'Continuous Oil Stream (Sarvanga Dhara)',
      color: 'border-[#1F5E4B] bg-[#1F5E4B]/5 text-[#1F5E4B]'
    },
    {
      therapy: 'Abhyanga',
      technique: 'Oil massage by hand, without continuous pouring',
      focus: 'General oil massage of the body',
      link: '/services/abhyanga-massage-dubai/',
      badge: 'Manual Warm Herbal Massage',
      color: 'border-stone-300 bg-stone-50 text-stone-800'
    },
    {
      therapy: 'Kizhi',
      technique: 'Warm herbal boluses or poultices pressed onto the body',
      focus: 'Stiff muscles and joints',
      link: '/services/kizhi-therapy-dubai/',
      badge: 'Herbal Pouch Compress Therapy',
      color: 'border-stone-300 bg-stone-50 text-stone-800'
    },
    {
      therapy: 'Shirodhara',
      technique: 'A slow stream of warm oil over the forehead',
      focus: 'Head-centred relaxation',
      link: '/services/shirodhara-therapy-in-dubai/',
      badge: 'Cranial Stream Relaxation',
      color: 'border-stone-300 bg-stone-50 text-stone-800'
    },
  ];

  const clinicVettingQuestions = [
    'Are the clinic and the practitioners licensed? In Dubai you can check licences on the DHA Sheryan directory.',
    'Is Pizhichil genuinely offered, and who performs it?',
    'How is suitability assessed, and what would rule you out?',
    'How are oil temperature, hygiene and comfort managed?',
    'Are risks and limits explained honestly?',
    'Will the clinic refer you for medical assessment when needed?',
    'Are advertising claims realistic, with no promises of cures?',
  ];

  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={URL} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="alternate" hrefLang="en-ae" href={URL} />
        <meta name="alternate" hrefLang="x-default" href={URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="RamaCare Polyclinic" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:url" content={URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Illustration of a traditional Pizhichil setup with a wooden treatment table and warm oil vessels" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content="Illustration of a traditional Pizhichil setup with a wooden treatment table and warm oil vessels" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </Head>

      <main className="min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-[#1F5E4B] selection:text-white">
        
        {/* TOP EDITORIAL RADAR / QUICK ANCHOR BAR */}
        <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-stone-200/80 px-4 py-2.5 hidden lg:block shadow-2xs">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-stone-500 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#1F5E4B] animate-pulse"></span>
              <span>RamaCare Jumeirah 1 Clinical Guide:</span>
              <span className="text-stone-900 font-bold">Pizhichil (Sarvanga Dhara)</span>
            </div>
            <nav className="flex items-center gap-4 text-stone-600 font-medium">
              <a href="#what-is-pizhichil" className="hover:text-[#1F5E4B] transition-colors">What It Is</a>
              <span>•</span>
              <a href="#how-it-is-performed" className="hover:text-[#1F5E4B] transition-colors">7-Phase Protocol</a>
              <span>•</span>
              <a href="#potential-benefits" className="hover:text-[#1F5E4B] transition-colors">Evidence & Benefits</a>
              <span>•</span>
              <a href="#stiffness-spine" className="hover:text-[#1F5E4B] transition-colors">Joints & Spine</a>
              <span>•</span>
              <a href="#who-suits" className="hover:text-[#1F5E4B] transition-colors">Suitability & Risks</a>
              <span>•</span>
              <a href="#comparison" className="hover:text-[#1F5E4B] transition-colors">Therapy Comparison</a>
              <span>•</span>
              <a href="#faqs" className="hover:text-[#1F5E4B] transition-colors">12 FAQs</a>
              <span>•</span>
              <a href="#closing-summary" className="px-3.5 py-1.5 rounded-full bg-[#1F5E4B] text-white font-bold hover:bg-[#143D31] transition-all shadow-xs">
                Book Consultation
              </a>
            </nav>
          </div>
        </div>

        {/* HERO SECTION: ROYAL KERALA OIL BATH ARCHITECTURE */}
        <section className="relative pt-8 sm:pt-14 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-12 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] border-b border-stone-200">
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-10 left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-[#C9A961]/10 rounded-full blur-[140px] pointer-events-none -z-0" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#1F5E4B]/5 rounded-full blur-[120px] pointer-events-none -z-0" />

          <div className="max-w-[1440px] mx-auto relative z-10">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold text-stone-500">
                <li>
                  <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/services/" className="hover:text-[#1F5E4B] transition-colors">Services</Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/services/ayurveda-dubai/" className="hover:text-[#1F5E4B] transition-colors">Ayurveda in Dubai</Link>
                </li>
                <li>/</li>
                <li aria-current="page" className="text-[#1F5E4B] font-bold">
                  Pizhichil Treatment Dubai
                </li>
              </ol>
            </nav>

            {/* Asymmetrical Grid Hero Composition */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left 7 Columns: Editorial Introduction */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#1F5E4B]/10 via-[#C9A961]/20 to-[#1F5E4B]/10 border border-[#1F5E4B]/20 text-[#1F5E4B] text-xs font-black tracking-widest uppercase shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A961]" />
                  <span>Doctor-Led Kerala Ayurveda • Jumeirah 1</span>
                </div>

                {/* EXACT H1 */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-black text-[#1A1A1A] tracking-tight leading-[1.12]">
                  Pizhichil Treatment in Dubai, Jumeirah 1
                </h1>

                <div className="flex items-center gap-3">
                  <div className="h-1.5 w-20 bg-gradient-to-r from-[#1F5E4B] to-[#C9A961] rounded-full" />
                  <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                    Classical Sarvanga Dhara • Kayaseka
                  </span>
                </div>

                {/* 3 Verbatim Intro Paragraphs */}
                <div className="space-y-4 text-stone-800 text-base sm:text-lg leading-relaxed">
                  <p className="first-letter:float-left first-letter:text-4xl first-letter:font-black first-letter:text-[#1F5E4B] first-letter:mr-3 first-letter:leading-none">
                    Pizhichil is a traditional Ayurvedic therapy in which warm medicated oil is poured over the body in a steady stream while two therapists massage in a coordinated rhythm. The name comes from a Malayalam word meaning squeezing, a nod to the oil-soaked cloth traditionally used to deliver the flow. It comes from Kerala&apos;s Ayurvedic tradition and is sometimes called Sarvanga Dhara or Kayaseka.
                  </p>

                  <p>
                    If you are searching for Pizhichil treatment Dubai, you probably want to know three things: what happens, whether it might ease stiffness or tension, and whether it is safe. Unlike an ordinary massage, Pizhichil involves continuous warm oil, careful temperature control and an assessment beforehand. It is also a traditional therapy, not a proven cure.
                  </p>

                  <p className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs text-stone-900 font-medium">
                    RamaCare Polyclinic lists Pizhichil among the therapies in its{' '}
                    <Link
                      href="/services/ayurveda-dubai/"
                      className="text-[#1F5E4B] font-bold underline underline-offset-4 decoration-2 decoration-[#1F5E4B]/40 hover:decoration-[#1F5E4B] hover:text-[#143D31] transition-all"
                    >
                      Ayurvedic treatments
                    </Link>{' '}
                    at its clinic on Al Dhiyafah Road in Jumeirah 1, Dubai. Therapies there follow a consultation with the Ayurvedic doctor, so suitability and availability are confirmed with the clinic before you book.
                  </p>
                </div>

                {/* Interactive Action Triggers */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#1F5E4B] hover:bg-[#143D31] text-white font-bold text-sm shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    <span>Enquire on WhatsApp (+971 56 659 7878)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCall}
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-stone-50 text-stone-900 border border-stone-300 font-bold text-sm shadow-2xs hover:shadow-sm transition cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-[#1F5E4B]" />
                    <span>Call +971 4 286 2006</span>
                  </button>

                  <Link
                    href="/book-appointment/"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1F5E4B] hover:text-[#143D31] underline underline-offset-4"
                  >
                    <span>book an appointment</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Clinical Trust Anchor Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-stone-200/80">
                  <div className="p-3 rounded-xl bg-white/70 border border-stone-200/60">
                    <span className="text-[11px] font-bold text-stone-500 uppercase block">Dual Tradition</span>
                    <span className="text-xs font-black text-stone-900">Snehana & Swedana</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/70 border border-stone-200/60">
                    <span className="text-[11px] font-bold text-stone-500 uppercase block">Therapist Team</span>
                    <span className="text-xs font-black text-stone-900">2 Kerala-Trained Staff</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/70 border border-stone-200/60">
                    <span className="text-[11px] font-bold text-stone-500 uppercase block">Medical Lead</span>
                    <span className="text-xs font-black text-stone-900">Dr. Shamna (BAMS)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/70 border border-stone-200/60">
                    <span className="text-[11px] font-bold text-stone-500 uppercase block">Facility Type</span>
                    <span className="text-xs font-black text-stone-900">DHA Polyclinic with GP</span>
                  </div>
                </div>

              </div>

              {/* Right 5 Columns: Visual Presentation of Treatment Environment */}
              <div className="lg:col-span-5">
                <figure className="relative bg-gradient-to-br from-white via-[#FAF8F5] to-white p-4 sm:p-5 rounded-3xl shadow-xl border border-stone-200/90 group">
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-stone-100 shadow-inner">
                    <img
                      src="/images/pizhichil-treatment-setup-illustration.webp"
                      alt="Illustration of a traditional Pizhichil setup with a wooden treatment table and warm oil vessels"
                      width={1200}
                      height={630}
                      fetchPriority="high"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#1A1A1A]/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Droplets className="w-3.5 h-3.5 text-[#C9A961]" />
                      <span>Traditional Droni & Warm Vessel Setup</span>
                    </div>
                  </div>
                  <figcaption className="text-center text-xs font-semibold text-stone-600 mt-3.5 italic px-2">
                    Illustration of a traditional Pizhichil setup.
                  </figcaption>
                </figure>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 2: WHAT IS PIZHICHIL THERAPY? (SNEHANA + SWEDANA SYNTHESIS) */}
        <section id="what-is-pizhichil" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white border-b border-stone-200">
          <div className="max-w-[1440px] mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-black text-[#1F5E4B] uppercase tracking-widest block mb-2">
                Classical Foundations
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                What Is Pizhichil Therapy?
              </h2>
              <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4"></div>
            </div>

            {/* Split Duality Architectural Cards */}
            <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-10">
              
              {/* Pillar 1: Classical Rationale (Snehana + Swedana) */}
              <div className="lg:col-span-7 bg-[#FAF8F5] p-8 sm:p-12 rounded-3xl border border-stone-200/90 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-5 text-stone-800 text-base sm:text-lg leading-relaxed">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center font-black">
                      <Droplets className="w-5 h-5 text-[#1F5E4B]" />
                    </span>
                    <h3 className="text-xl font-bold text-stone-900">Oleation (Snehana) & Warmth (Swedana)</h3>
                  </div>

                  <p>
                    In classical Kerala Ayurveda, Pizhichil combines two traditional ideas: snehana, the application of oil, and swedana, the application of warmth. Pizhichil delivers both at once. Warm medicated oil is poured, or squeezed from a cloth, over the whole body or a chosen area while the therapists massage. Some people describe it as an Ayurvedic oil bath, and it is one of the best-known traditional Ayurvedic oil treatments in Kerala-style practice.
                  </p>

                  <p>
                    Why warm oil? In Ayurvedic thinking, oil and heat make the body feel supple and loose. That is a traditional explanation, not a biomedical mechanism. In modern terms the claim is more modest: warmth, touch and a calm, unhurried setting tend to help people relax, at least for a while.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#C9A961]/40 text-xs sm:text-sm text-stone-700 italic">
                  Traditional rationale: Snehana soothes tissues while Swedana provides gentle thermotherapy.
                </div>
              </div>

              {/* Pillar 2: Clinical Execution & Trained Oversight */}
              <div className="lg:col-span-5 bg-white p-8 sm:p-12 rounded-3xl border border-stone-200/90 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-5 text-stone-800 text-base sm:text-lg leading-relaxed">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-[#C9A961]/20 text-[#7D5E15] flex items-center justify-center font-black">
                      <Stethoscope className="w-5 h-5 text-[#7D5E15]" />
                    </span>
                    <h3 className="text-xl font-bold text-stone-900">Doctor&apos;s Supervision & Calibration</h3>
                  </div>

                  <p>
                    Trained practitioners are central. Descriptions from Kerala institutions commonly involve two therapists working in step under a doctor&apos;s supervision, because temperature, flow and pressure need constant adjustment. Protocols differ between traditions, practitioners and clinics. The choice of oil, the temperature, the body positions and the length of a session are clinical decisions rather than fixed rules.
                  </p>
                </div>

                {/* Verbatim Plain Caution Box */}
                <div className="p-5 rounded-2xl bg-amber-50/80 border-l-4 border-amber-600 text-amber-950 text-sm sm:text-base leading-relaxed font-medium">
                  A plain caution belongs here. Pizhichil is not a proven cure for arthritis, nerve damage, paralysis or chronic pain, and a trustworthy provider will not present it as one.
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 3: HOW IS PIZHICHIL TRADITIONALLY PERFORMED? (7-STAGE FLOW RIVER) */}
        <section id="how-it-is-performed" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] border-b border-stone-200">
          <div className="max-w-[1440px] mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-black text-[#1F5E4B] uppercase tracking-widest block mb-2">
                Clinical Workflow
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                How Is Pizhichil Traditionally Performed?
              </h2>
              <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4 mb-5"></div>
              <p className="text-stone-700 text-base sm:text-lg italic">
                Practice varies between providers, so treat this as a general outline rather than a description of any one clinic&apos;s protocol.
              </p>
            </div>

            {/* Stepper Interactive Timeline */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-3 mb-12">
              {performanceSteps.map((step, idx) => {
                const isSelected = activeStep === idx;
                const StepIcon = step.icon;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`p-4 rounded-2xl text-left border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#1F5E4B] text-white border-[#1F5E4B] shadow-md scale-102'
                        : 'bg-white text-stone-800 border-stone-200 hover:border-[#1F5E4B]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-3">
                      <span className={`text-xs font-black px-2 py-0.5 rounded-md ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-stone-100 text-[#1F5E4B]'
                      }`}>
                        {step.num}
                      </span>
                      <StepIcon className={`w-4 h-4 ${isSelected ? 'text-[#C9A961]' : 'text-stone-400'}`} />
                    </div>
                    <span className="font-bold text-sm leading-snug">{step.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Step Feature Box + Image 2 */}
            <div className="grid lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 rounded-3xl border border-stone-200/90 shadow-sm mb-10">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-black">
                    Step {performanceSteps[activeStep].num} of 07
                  </span>
                  <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                    Detailed Protocol Observation
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                  {performanceSteps[activeStep].title}
                </h3>

                <p className="text-stone-900 text-lg sm:text-xl font-medium leading-relaxed">
                  {performanceSteps[activeStep].desc}
                </p>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed border-l-2 border-[#1F5E4B] pl-4">
                  {performanceSteps[activeStep].detail}
                </p>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 6))}
                    className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-xs font-bold text-stone-700 transition"
                  >
                    ← Previous Phase
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveStep((prev) => (prev < 6 ? prev + 1 : 0))}
                    className="px-4 py-2 rounded-xl bg-[#1F5E4B] hover:bg-[#143D31] text-xs font-bold text-white transition"
                  >
                    Next Phase →
                  </button>
                </div>
              </div>

              {/* Image 2: Therapist Hands Guided Stream */}
              <div className="lg:col-span-5">
                <figure className="relative bg-[#FAF8F5] p-3 sm:p-4 rounded-3xl shadow-md border border-stone-200/80 group">
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-stone-100 shadow-inner">
                    <img
                      src="/images/ayurvedic-therapist-hands-warm-oil.webp"
                      alt="Close view of a therapist's hands guiding warm oil in a controlled stream"
                      width={1200}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#1A1A1A]/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Feather className="w-3.5 h-3.5 text-[#C9A961]" />
                      <span>Coordinated Stream Dynamics</span>
                    </div>
                  </div>
                  <figcaption className="text-center text-xs font-semibold text-stone-600 mt-3 italic px-2">
                    Illustrative image. Technique and protocol vary by provider.
                  </figcaption>
                </figure>
              </div>

            </div>

            {/* Verbatim Concluding Paragraphs on Sessions & Safety Warning */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 text-stone-800 text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                Session length, oil volume, temperature and the number of visits all depend on the protocol and the provider. Some Kerala descriptions mention a run of consecutive daily sessions, while a single session may be offered elsewhere, so ask the clinic what it actually does. This is not something to try at home: heated oil and slippery floors are a poor mix without trained hands.
              </p>
            </div>

          </div>
        </section>

        {/* SECTION 4: POTENTIAL BENEFITS OF PIZHICHIL TREATMENT (EVIDENCE-LABELLED QUADRANTS) */}
        <section id="potential-benefits" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white border-b border-stone-200">
          <div className="max-w-[1440px] mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-black text-[#1F5E4B] uppercase tracking-widest block mb-2">
                Honest Assessment
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                Potential Benefits of Pizhichil Treatment
              </h2>
              <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4 mb-5"></div>
              <p className="text-stone-700 text-base sm:text-lg italic">
                Here is what can reasonably be said, with each point labelled by the kind of support behind it.
              </p>
            </div>

            {/* 4 Quadrants Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              
              {/* Quadrant 1: Relaxation */}
              <div className="bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl border border-stone-200/90 shadow-2xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                      <span>A plausible short-term effect</span>
                    </span>
                    <span className="text-xs font-bold text-stone-400">Pillar 01</span>
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 tracking-tight">Relaxation</h3>
                  <p className="text-stone-800 text-base sm:text-lg leading-relaxed mt-3">
                    A plausible short-term effect. Warmth, rhythmic touch and a quiet room help many people unwind. This is a general response to massage-type care rather than something specific to Pizhichil.
                  </p>
                </div>
              </div>

              {/* Quadrant 2: Temporary muscle comfort */}
              <div className="bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl border border-stone-200/90 shadow-2xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                      <span>A plausible short-term effect</span>
                    </span>
                    <span className="text-xs font-bold text-stone-400">Pillar 02</span>
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 tracking-tight">Temporary muscle comfort</h3>
                  <p className="text-stone-800 text-base sm:text-lg leading-relaxed mt-3">
                    A plausible short-term effect. Some people feel looser afterwards. How long it lasts varies, and it should not be mistaken for treating the cause of tension.
                  </p>
                </div>
              </div>

              {/* Quadrant 3: Stiffness and discomfort */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-2xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black">
                      <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                      <span>Traditional use</span>
                    </span>
                    <span className="text-xs font-bold text-stone-400">Pillar 03</span>
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 tracking-tight">Stiffness and discomfort</h3>
                  <p className="text-stone-800 text-base sm:text-lg leading-relaxed mt-3">
                    Traditional use. Ayurvedic texts describe warm oil therapies for stiffness, but good-quality trials specific to Pizhichil are limited.
                  </p>
                </div>
              </div>

              {/* Quadrant 4: The experience itself */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-2xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-black">
                      <Heart className="w-3.5 h-3.5 text-[#1F5E4B]" />
                      <span>Patient experience value</span>
                    </span>
                    <span className="text-xs font-bold text-stone-400">Pillar 04</span>
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 tracking-tight">The experience itself</h3>
                  <p className="text-stone-800 text-base sm:text-lg leading-relaxed mt-3">
                    Many people value a supervised, unhurried session with a trained practitioner. That counts for something, but it is not a clinical outcome.
                  </p>
                </div>
              </div>

            </div>

            {/* Verbatim Disclaimer Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-stone-50 border border-stone-200 text-stone-900 text-base sm:text-lg font-medium leading-relaxed">
              <p>
                Pizhichil does not treat the underlying cause of a medical condition, and results differ from person to person. Anyone promising detoxification, permanent relief or guaranteed improvement is going beyond the evidence.
              </p>
            </div>

          </div>
        </section>

        {/* SECTION 5: JOINT STIFFNESS & BACK/NECK DISCOMFORT (CLINICAL DELINEATION) */}
        <section id="stiffness-spine" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] border-b border-stone-200">
          <div className="max-w-[1440px] mx-auto space-y-14">
            
            {/* SUB-SECTION A: JOINT STIFFNESS */}
            <div>
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-xs font-black text-[#1F5E4B] uppercase tracking-widest block mb-2">
                  Mobility Perspective
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                  Pizhichil for Joint Stiffness and Muscle Discomfort
                </h2>
                <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4"></div>
              </div>

              <div className="bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm space-y-6 text-stone-800 text-base sm:text-lg leading-relaxed">
                <p>
                  People explore warm oil therapies for stiffness because the sensation is soothing and the tradition is long. It helps to separate two ideas: feeling more comfortable for a while, and treating why the stiffness is there. Pizhichil may offer the first to some people. It does not repair joints, restore damaged nerves or treat arthritis.
                </p>

                <p>
                  Persistent or unexplained pain needs assessment. Stiffness can come from overuse, posture, inflammation, injury or a joint condition, and the right care depends on which. Where evidence-based treatment is indicated, such as physiotherapy, medication or imaging, that should lead.
                </p>

                <div className="p-5 rounded-2xl bg-amber-50/90 border-l-4 border-amber-600 text-amber-950 font-medium">
                  See a doctor before any massage-based therapy if you have significant swelling, a recent injury, severe or worsening pain, a hot and red joint, or numbness, tingling or weakness.
                </div>
              </div>
            </div>

            {/* SUB-SECTION B: BACK AND NECK DISCOMFORT */}
            <div>
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-xs font-black text-[#1F5E4B] uppercase tracking-widest block mb-2">
                  Spine & Muscle Care
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                  Pizhichil for Back and Neck Discomfort
                </h2>
                <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4"></div>
              </div>

              <div className="bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm space-y-6 text-stone-800 text-base sm:text-lg leading-relaxed">
                <p>
                  Back and neck discomfort has many causes, including muscle strain, desk posture, disc problems, nerve irritation and joint wear. Not every pain pattern suits heated oil, and a therapy that feels good for tight muscles may be the wrong choice for something else.
                </p>

                <p>
                  If symptoms are persistent or keep returning, get a clinical assessment first.{' '}
                  <Link
                    href="/services/physiotherapy-dubai/"
                    className="text-[#1F5E4B] font-bold underline underline-offset-4 decoration-2 decoration-[#1F5E4B]/40 hover:decoration-[#1F5E4B] hover:text-[#143D31] transition-all"
                  >
                    Physiotherapy
                  </Link>{' '}
                  often plays a central role, and RamaCare&apos;s Ayurvedic doctor can point you to the physiotherapists in the same building. If back pain is your main concern, the clinic&apos;s page on{' '}
                  <Link
                    href="/services/back-pain-treatment-dubai/"
                    className="text-[#1F5E4B] font-bold underline underline-offset-4 decoration-2 decoration-[#1F5E4B]/40 hover:decoration-[#1F5E4B] hover:text-[#143D31] transition-all"
                  >
                    back pain treatment
                  </Link>{' '}
                  is a better starting point.
                </p>

                {/* Urgent Medical Red Flags Callout Grid */}
                <div className="p-6 sm:p-8 rounded-3xl bg-rose-50/80 border-2 border-rose-300 space-y-4">
                  <div className="flex items-center gap-2.5 text-rose-900 font-extrabold text-base sm:text-lg">
                    <ShieldAlert className="w-6 h-6 text-rose-600 shrink-0" />
                    <span>Seek urgent medical care, not a massage appointment, if back or neck pain comes with:</span>
                  </div>

                  <ul className="grid sm:grid-cols-2 gap-3 text-rose-950 font-semibold text-sm sm:text-base pt-2">
                    {[
                      'Weakness or numbness in an arm or leg',
                      'Loss of bladder or bowel control',
                      'Fever, or pain after a significant fall or accident',
                      'Unexplained weight loss',
                      'Chest pain, or pain that is rapidly getting worse',
                    ].map((flag, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 bg-white/80 p-3.5 rounded-xl border border-rose-200">
                        <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                        <span>{flag}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-stone-700 italic font-semibold text-sm sm:text-base">
                  Pizhichil is not a substitute for diagnosis, physiotherapy or prescribed treatment.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 6: CANDIDATE COMPASS (WHO MAY CONSIDER VS WHO SHOULD AVOID) */}
        <section id="who-suits" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white border-b border-stone-200">
          <div className="max-w-[1440px] mx-auto">
            
            <div className="grid lg:grid-cols-12 gap-10 items-stretch">
              
              {/* Left 6 Columns: Who May Consider */}
              <div className="lg:col-span-6 bg-[#FAF8F5] p-6 sm:p-8 lg:p-10 rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black uppercase">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Assessment Prerequisites</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                    Who May Consider Pizhichil?
                  </h2>

                  <p className="text-stone-800 text-base sm:text-lg leading-relaxed">
                    Pizhichil may be worth asking about if you are an adult curious about traditional Ayurvedic therapies, if you want to understand an oil-based treatment before deciding, or if you live with stiffness or discomfort and have already had medical advice. None of these groups is automatically suitable. That depends on your health history, symptoms, skin condition, sensitivity to heat and the protocol proposed. A treatment that suits one person can be wrong for another, which is why assessment comes first.
                  </p>

                  <div className="p-4 rounded-2xl bg-white border border-stone-200 text-xs sm:text-sm text-stone-700 font-semibold flex items-center gap-2.5 shadow-2xs">
                    <Info className="w-4 h-4 text-[#1F5E4B] shrink-0" />
                    <span>Clinical consultation confirms personal eligibility prior to any treatment.</span>
                  </div>
                </div>

                {/* Image 3: Safety-Focused Preparation */}
                <figure className="relative bg-white p-3.5 rounded-2xl border border-stone-200 shadow-2xs">
                  <div className="relative aspect-16/9 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="/images/ayurvedic-oil-temperature-check-preparation.webp"
                      alt="Oil vessel with a thermometer and non-slip mat prepared before an Ayurvedic treatment"
                      width={1200}
                      height={675}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <figcaption className="text-center text-xs font-semibold text-stone-600 mt-2.5 italic">
                    Temperature and footing are checked before treatment begins.
                  </figcaption>
                </figure>
              </div>

              {/* Right 6 Columns: Who Should Avoid It or Seek Medical Advice First? */}
              <div className="lg:col-span-6 bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-black uppercase">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-700" />
                    <span>Safety First</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                    Who Should Avoid It or Seek Medical Advice First?
                  </h2>

                  <p className="text-stone-700 text-sm sm:text-base font-semibold">
                    Pizhichil may be unsuitable, or need extra precautions, if you have:
                  </p>

                  <div className="space-y-2">
                    {[
                      'Open wounds, an active skin infection or inflamed skin',
                      'Known allergies or sensitivities to the oil or its ingredients',
                      'Reduced sensation, or difficulty noticing excessive heat',
                      'Circulatory problems or a higher risk of burns',
                      'An acute injury, unexplained swelling, or severe or worsening pain',
                      'Recent surgery, or advice from a clinician to avoid massage or heat',
                      'Pregnancy, frailty or complex medical conditions',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-stone-50 hover:bg-rose-50/40 border border-stone-200/80 text-stone-800 text-xs sm:text-sm font-medium transition-colors">
                        <span className="w-2 h-2 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-950 text-xs sm:text-sm leading-relaxed font-medium">
                  <p>
                    This list is not exhaustive. Risks of any warm oil therapy include burns from oil that is too hot, skin irritation or allergy, bruising or tenderness from manual techniques, dizziness, and slips on oily floors. A qualified professional should review your situation before treatment, and you should tell the therapist straight away if anything feels too hot or uncomfortable.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 7: WHAT HAPPENS DURING AN INITIAL CONSULTATION? (DR. SHAMNA PROFILE) */}
        <section id="consultation" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] border-b border-stone-200">
          <div className="max-w-[1440px] mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-black text-[#1F5E4B] uppercase tracking-widest block mb-2">
                Clinical Pathway
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                What Happens During an Initial Consultation?
              </h2>
              <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4"></div>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm space-y-6 text-stone-800 text-base sm:text-lg leading-relaxed">
                <p>
                  A responsible consultation covers your main symptoms and goals, medical history and current medication, allergies, skin conditions and heat sensitivity, and previous treatments and diagnoses. It should also decide whether you need medical assessment first, and include an honest discussion of expected comfort, limitations, risks and alternatives. You should be asked for informed consent and told that you can stop at any point.
                </p>

                <p>
                  At RamaCare, the first Ayurvedic appointment is with{' '}
                  <Link
                    href="/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/"
                    className="text-[#1F5E4B] font-bold underline underline-offset-4 decoration-2 decoration-[#1F5E4B]/40 hover:decoration-[#1F5E4B] hover:text-[#143D31] transition-all"
                  >
                    Dr. Shamna Keloth Meethal
                  </Link>
                  , who reviews your history and medicines and carries out a{' '}
                  <Link
                    href="/services/prakriti-dosha-assessment-dubai/"
                    className="text-[#1F5E4B] font-bold underline underline-offset-4 decoration-2 decoration-[#1F5E4B]/40 hover:decoration-[#1F5E4B] hover:text-[#143D31] transition-all"
                  >
                    Prakriti assessment
                  </Link>{' '}
                  before recommending therapies. Bring your prescriptions and any recent reports.
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-sm font-semibold text-stone-800 flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-[#1F5E4B]" />
                    <span>Bring medication list & recent imaging</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-sm font-semibold text-stone-800 flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-[#1F5E4B]" />
                    <span>Informed consent prior to treatment</span>
                  </div>
                </div>
              </div>

              {/* Doctor Card */}
              <div className="lg:col-span-5 bg-gradient-to-br from-white to-[#FAF8F5] p-8 rounded-3xl border border-stone-200 shadow-md text-center space-y-4">
                <div className="w-28 h-28 rounded-full overflow-hidden mx-auto shadow-md border-4 border-white bg-stone-100">
                  <img
                    src="/images/Dr Shamna Keloth Meethal.jpeg"
                    alt="Dr. Shamna Keloth Meethal - Ayurvedic Doctor at RamaCare Polyclinic Dubai"
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900">Dr. Shamna Keloth Meethal</h3>
                  <p className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider">Ayurveda Doctor (BAMS)</p>
                  <p className="text-xs text-stone-500 mt-1">DHA-Licensed • RamaCare Polyclinic Jumeirah 1</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-stone-200 text-xs text-stone-600 leading-relaxed text-left">
                  Conducts comprehensive personal Prakriti constitution assessment, thermal risk review, and coordinates therapy with our Kerala-trained therapists.
                </div>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-3 rounded-full bg-[#1F5E4B] hover:bg-[#143D31] text-white font-bold text-xs shadow-sm transition"
                >
                  Book Doctor Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: PIZHICHIL COMPARED WITH OTHER AYURVEDIC THERAPIES (DECK & TABLE) */}
        <section id="comparison" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white border-b border-stone-200">
          <div className="max-w-[1440px] mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-black text-[#1F5E4B] uppercase tracking-widest block mb-2">
                Comparative Perspective
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                Pizhichil Compared With Other Ayurvedic Therapies
              </h2>
              <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4 mb-4"></div>
              <p className="text-stone-800 text-base sm:text-lg leading-relaxed">
                Many Ayurvedic therapies in Dubai use oil and warmth, which makes them easy to confuse. Pizhichil is sometimes marketed as a Pizhichil massage, but the pouring is what sets it apart.
              </p>
            </div>

            {/* Image 4: Pizhichil, Abhyanga and Kizhi Comparison Illustration */}
            <div className="mb-10 max-w-4xl mx-auto">
              <figure className="bg-[#FAF8F5] p-4 rounded-3xl border border-stone-200 shadow-sm">
                <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-white">
                  <img
                    src="/images/pizhichil-abhyanga-kizhi-comparison-illustration.webp"
                    alt="Three-panel illustration comparing poured oil, hand oil massage and herbal bolus therapy"
                    width={1200}
                    height={675}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="text-center text-xs font-semibold text-stone-600 mt-3 italic">
                  The three techniques differ in how oil and warmth are applied.
                </figcaption>
              </figure>
            </div>

            {/* Responsive Comparison Table Container */}
            <div className="overflow-x-auto rounded-3xl border border-stone-200 shadow-sm mb-8 bg-white">
              <table className="w-full text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-[#FAF8F5] border-b border-stone-200 text-stone-900 text-sm uppercase tracking-wider font-extrabold">
                    <th scope="col" className="p-5 sm:p-6">Therapy</th>
                    <th scope="col" className="p-5 sm:p-6">Technique</th>
                    <th scope="col" className="p-5 sm:p-6">Traditional focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-800 text-sm sm:text-base">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className={row.therapy === 'Pizhichil' ? 'bg-[#1F5E4B]/5 font-semibold' : 'hover:bg-stone-50/60 transition-colors'}>
                      <td className="p-5 sm:p-6 font-bold text-stone-900">
                        <div className="flex items-center gap-2">
                          <Link href={row.link} className="hover:text-[#1F5E4B] underline underline-offset-4 decoration-stone-300">
                            {row.therapy}
                          </Link>
                          {row.therapy === 'Pizhichil' && (
                            <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded-full bg-[#1F5E4B] text-white">
                              Current Page
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-normal text-stone-500 block mt-1">{row.badge}</span>
                      </td>
                      <td className="p-5 sm:p-6 leading-relaxed">{row.technique}</td>
                      <td className="p-5 sm:p-6 leading-relaxed">{row.focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Verbatim Concluding Paragraph with Links */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-stone-200 text-stone-800 text-base sm:text-lg leading-relaxed">
              <p>
                In short,{' '}
                <Link
                  href="/services/abhyanga-massage-dubai/"
                  className="text-[#1F5E4B] font-bold underline underline-offset-4 hover:text-[#143D31]"
                >
                  Abhyanga
                </Link>{' '}
                centres on massage, Pizhichil adds poured warm oil, and{' '}
                <Link
                  href="/services/kizhi-therapy-dubai/"
                  className="text-[#1F5E4B] font-bold underline underline-offset-4 hover:text-[#143D31]"
                >
                  Kizhi
                </Link>{' '}
                uses warmed herbal boluses instead.{' '}
                <Link
                  href="/services/shirodhara-therapy-in-dubai/"
                  className="text-[#1F5E4B] font-bold underline underline-offset-4 hover:text-[#143D31]"
                >
                  Shirodhara
                </Link>{' '}
                is a different, head-focused experience. None is universally better, and they are not interchangeable. Your doctor decides which, if any, suits you.
              </p>
            </div>

          </div>
        </section>

        {/* SECTION 9: WHAT SHOULD YOU EXPECT AFTER TREATMENT? */}
        <section id="post-care" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] border-b border-stone-200">
          <div className="max-w-[1440px] mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-black text-[#1F5E4B] uppercase tracking-widest block mb-2">
                Recovery Guidance
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                What Should You Expect After Treatment?
              </h2>
              <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4"></div>
            </div>

            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm text-stone-800 text-base sm:text-lg leading-relaxed space-y-6">
              <p>
                Give yourself time to notice how your body responds, and avoid rushing straight into a demanding schedule. Keep your skin clean as your practitioner advises. Report persistent irritation, burning, dizziness or unusual discomfort to the clinic. Do not assume that soreness or a flare-up means the treatment is working; it may mean the opposite. Seek medical attention for concerning symptoms such as chest pain, sudden weakness or severe pain. Do not expect a detox effect, and follow only the restrictions your practitioner actually gives you.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-stone-100">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-sm font-semibold text-stone-800">
                  ✓ Rest before demanding tasks
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-sm font-semibold text-stone-800">
                  ✓ Keep skin clean as guided
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-sm font-semibold text-stone-800">
                  ✓ Report irritation or dizziness immediately
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-sm font-semibold text-stone-800">
                  ✓ Soreness is not &ldquo;proof of detox&rdquo;
                </div>
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-sm font-bold text-rose-950">
                  ⚠ Seek emergency care for chest pain or weakness
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-sm font-semibold text-stone-800">
                  ✓ Follow only clinician-given restrictions
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 10: CHOOSING AN AYURVEDIC CLINIC FOR PIZHICHIL IN DUBAI */}
        <section id="clinic-checklist" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white border-b border-stone-200">
          <div className="max-w-[1440px] mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-black text-[#1F5E4B] uppercase tracking-widest block mb-2">
                Consumer Safety & Standards
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                Choosing an Ayurvedic Clinic for Pizhichil in Dubai
              </h2>
              <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4 mb-4"></div>
              <p className="text-stone-700 text-base sm:text-lg">
                Whoever you choose, these questions help you judge a provider for Pizhichil treatment in Dubai:
              </p>
            </div>

            {/* Interactive 7-Item Vetting Checklist */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {clinicVettingQuestions.map((q, idx) => {
                const isChecked = dhaChecked[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleDhaCheck(idx)}
                    className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      isChecked
                        ? 'bg-[#1F5E4B]/5 border-[#1F5E4B] shadow-sm'
                        : 'bg-[#FAF8F5] border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="text-xs font-bold text-stone-500">Question {idx + 1}</span>
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        isChecked ? 'bg-[#1F5E4B] text-white' : 'bg-stone-200 text-stone-600'
                      }`}>
                        {isChecked ? '✓' : idx + 1}
                      </span>
                    </div>
                    <p className="text-stone-900 font-bold text-sm sm:text-base leading-snug">
                      {q}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Verbatim Concluding Paragraph */}
            <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-stone-200 text-stone-800 text-base sm:text-lg leading-relaxed space-y-3">
              <p>
                A polyclinic setting can help, because a medical or physiotherapy opinion is down the corridor rather than across the city. Whatever you decide, be wary of any Ayurvedic clinic in Dubai that guarantees results.
              </p>
            </div>

          </div>
        </section>

        {/* SECTION 11: PIZHICHIL TREATMENT AT RAMACARE POLYCLINIC (JUMEIRAH 1) */}
        <section id="ramacare-polyclinic" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] border-b border-stone-200">
          <div className="max-w-[1440px] mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-black text-[#1F5E4B] uppercase tracking-widest block mb-2">
                Our Facility & Team
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                Pizhichil Treatment at RamaCare Polyclinic
              </h2>
              <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4"></div>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 items-stretch">
              
              {/* Left 7 Columns: Polyclinic Narrative */}
              <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm space-y-6 flex flex-col justify-between">
                <div className="space-y-5 text-stone-800 text-base sm:text-lg leading-relaxed">
                  <p>
                    RamaCare Polyclinic is a DHA-licensed clinic at 12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai. Its Ayurveda department lists Pizhichil alongside Abhyanga, Kizhi, Shirodhara and Panchakarma. Every patient first sees Dr. Shamna Keloth Meethal (BAMS), and therapies are given by a Kerala-trained, DHA-licensed therapist of the same gender as the patient, in the spirit of Kerala Ayurvedic treatment in Dubai. The clinic is open every day from 10am to 10pm. You can read more about{' '}
                    <Link
                      href="/services/polyclinic-in-jumeirah-1/"
                      className="text-[#1F5E4B] font-bold underline underline-offset-4 decoration-2 decoration-[#1F5E4B]/40 hover:decoration-[#1F5E4B] hover:text-[#143D31] transition-all"
                    >
                      visiting the Jumeirah 1 clinic
                    </Link>
                    .
                  </p>

                  <p>
                    For Ayurveda treatment in Jumeirah 1, ask the team whether Pizhichil suits you, how long a session takes and when appointments are available:
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-2">
                  <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider block">Integrated Care Environment</span>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    Benefit from immediate inter-departmental collaboration with our General Physician and Physiotherapists under the same roof.
                  </p>
                </div>
              </div>

              {/* Right 5 Columns: Verified Contact Block */}
              <div className="lg:col-span-5 bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm space-y-5 flex flex-col justify-between">
                
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-1">Website</span>
                    <a href="https://ramacarepolyclinic.ae/" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1F5E4B] text-base hover:underline flex items-center gap-1.5">
                      <span>https://ramacarepolyclinic.ae/</span>
                      <ExternalLink className="w-4 h-4 text-stone-400" />
                    </a>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-1">Phone</span>
                    <a href="tel:+97142862006" className="font-bold text-[#1F5E4B] text-lg hover:underline flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      +971 4 286 2006
                    </a>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-1">WhatsApp</span>
                    <a href="https://wa.me/971566597878" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1F5E4B] text-lg hover:underline flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
                      +971 56 659 7878
                    </a>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-1">Email</span>
                    <a href="mailto:query@ramacarepolyclinic.ae" className="font-bold text-[#1F5E4B] text-base hover:underline block">
                      query@ramacarepolyclinic.ae
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="w-full py-3.5 px-6 rounded-full bg-[#1F5E4B] hover:bg-[#143D31] text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Enquire on WhatsApp</span>
                  </button>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* SECTION 12: FREQUENTLY ASKED QUESTIONS (12 COMPLETE FAQS) */}
        <section id="faqs" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white border-b border-stone-200">
          <div className="max-w-[1440px] mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-black text-[#1F5E4B] uppercase tracking-widest block mb-2">
                Patient Inquiries
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                Frequently Asked Questions About Pizhichil Treatment Dubai
              </h2>
              <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4 mb-6"></div>

              {/* Interactive Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  placeholder="Search Pizhichil questions (e.g. benefits, risks, cost)..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-full bg-[#FAF8F5] border border-stone-300 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#1F5E4B] shadow-2xs"
                />
              </div>
            </div>

            {/* All 12 Exact FAQs in an Asymmetrical 2-Column Grid */}
            <div className="grid lg:grid-cols-2 gap-5 items-start">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-[#FAF8F5] rounded-3xl border border-stone-200/90 overflow-hidden transition-all duration-300 shadow-2xs hover:border-[#1F5E4B]/40"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                      className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/70 transition-colors"
                    >
                      <span className="font-bold text-stone-900 text-sm sm:text-base leading-snug">
                        {idx + 1}. {faq.q}
                      </span>
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'bg-[#1F5E4B] text-white rotate-180' : 'bg-white text-stone-600 border border-stone-200'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 sm:px-7 pb-6 pt-1 text-stone-700 text-sm sm:text-base leading-relaxed border-t border-stone-200/60 bg-white">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* SECTION 13: CLOSING SUMMARY AND NEXT STEP */}
        <section id="closing-summary" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#143D31] text-[#FAF8F5] relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto relative z-10">
            
            <div className="w-full bg-[#11352a] rounded-3xl p-8 sm:p-14 lg:p-16 border border-white/10 shadow-2xl text-center space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C9A961]">
                Patient Next Steps
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Closing Summary and Next Step
              </h2>
              <div className="w-20 h-1 bg-[#C9A961] rounded-full mx-auto"></div>

              <div className="space-y-5 text-stone-200 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
                <p>
                  Pizhichil is a traditional Ayurvedic therapy in which warm oil is poured over the body alongside coordinated massage. For some people it offers relaxation and temporary comfort. Claims beyond that rest on tradition and limited evidence, which is why a good provider is candid about both. Suitability depends on your health, your symptoms and your skin, so the assessment matters more than the name of the therapy.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C9A961] hover:bg-[#d5b66d] text-stone-950 font-bold text-sm sm:text-base shadow-md transition cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-stone-950" />
                  <span>WhatsApp </span>
                </button>
                <button
                  type="button"
                  onClick={handleCall}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm sm:text-base shadow-xs transition cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-[#C9A961]" />
                  <span>Call Clinic</span>
                </button>
                <Link
                  href="/book-appointment/"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#C9A961] hover:text-white underline underline-offset-4"
                >
                  <span>book an appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Exact Medical Disclaimer Line */}
              <div className="pt-8 border-t border-white/10 text-xs sm:text-sm text-stone-300 italic max-w-2xl mx-auto">
                This page is general information and does not replace advice from your doctor.
              </div>
            </div>

          </div>
        </section>

        {/* MOBILE STICKY BOTTOM ACTION BAR */}
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl z-40 p-3.5 md:hidden border-t border-stone-200">
          <div className="flex items-center justify-between gap-3">
            <div className="text-left">
              <p className="text-xs font-bold text-[#1A1A1A]">Pizhichil Treatment Dubai</p>
              <p className="text-[11px] text-[#7D5E15] font-semibold">RamaCare Polyclinic • Jumeirah 1</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="p-2.5 rounded-2xl bg-[#25D366] text-white shadow-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              <a
                href="#closing-summary"
                className="flex items-center gap-1.5 bg-[#1F5E4B] text-white px-4 py-2.5 rounded-2xl font-bold text-xs shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Enquire Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* FLOATING WHATSAPP BUTTON (DESKTOP) */}
        <button
          type="button"
          onClick={handleWhatsApp}
          className="hidden md:flex fixed bottom-6 right-6 z-50 items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
        </button>

      </main>
    </Layout>
  );
}
