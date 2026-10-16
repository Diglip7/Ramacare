import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../../components/Layout';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import DoctorsSection from '../../../components/DoctorsSection';
import { DOCTORS } from '../../data/doctors';
import {
  Calendar,
  MessageCircle,
  Phone,
  Clock,
  MapPin,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Info,
  Sparkles,
  Layers,
  Thermometer,
  Building2,
  Users,
  Compass,
  BadgeCheck,
  ExternalLink,
  Activity,
  HeartPulse,
  Stethoscope,
  HelpCircle,
  FileText,
  CheckSquare,
  ClipboardList,
  Flame,
  ArrowRight
} from 'lucide-react';

const SITE = 'https://ramacarepolyclinic.ae';
const PATH = '/services/ayurvedic-arthritis-knee-pain-treatment-dubai/';
const URL = `${SITE}${PATH}`;
const TITLE = 'Ayurvedic Knee Pain Treatment in Dubai | RamaCare';
const DESCRIPTION =
  'Explore Ayurvedic knee pain treatment at RamaCare Polyclinic, Jumeirah 1, Dubai: traditional therapies, assessment and how to enquire about a consultation.';
const OG_IMAGE = `${SITE}/images/ayurvedic-knee-consultation-jumeirah-1.jpg`;
const DATE_PUBLISHED = '2026-10-15';
const DATE_MODIFIED = '2026-10-15';

export const faqs = [
  {
    q: 'Can Ayurveda cure arthritis?',
    a: 'No. Arthritis covers many conditions, and osteoarthritis is long-term and cannot be cured, although symptoms can be managed. Ayurvedic therapies are used traditionally to support comfort and mobility. They should not be expected to reverse joint damage or rebuild cartilage. Inflammatory arthritis needs medical diagnosis and treatment.',
  },
  {
    q: 'What is Janu Basti, and is it used for knee discomfort?',
    a: 'Janu Basti is the traditional knee oil-retention therapy described above. It is used traditionally for knee stiffness and discomfort, not as a proven treatment for joint damage. Whether it suits you is decided after assessment.',
  },
  {
    q: 'Can Ayurvedic treatment help with osteoarthritis symptoms?',
    a: 'Some people find warm oil or herbal therapies comforting and report easier movement for a time. Scientific evidence is limited and results vary. Exercise, staying active and medical advice remain the usual foundation, so ask how an Ayurvedic therapy could fit alongside them.',
  },
  {
    q: 'Is Ayurvedic treatment suitable for knee stiffness?',
    a: 'It may be considered for some people once the cause is clearer. Stiffness that is new, keeps returning, affects several joints, is worse in the morning, or comes with swelling, heat or fever should be assessed by a doctor first.',
  },
  {
    q: 'Can Ayurvedic therapy be combined with physiotherapy?',
    a: 'Often yes, with both practitioners aware of the plan. What suits your knee on a given day, for example when it is swollen or after a hard exercise session, is a decision for your clinicians. At RamaCare both services are in the same clinic.',
  },
  {
    q: 'Is traditional Ayurvedic massage suitable for a swollen knee?',
    a: 'Usually not until the cause of the swelling is understood. Swelling can point to injury, inflammation, infection or fluid in the joint, and heat or massage may not be appropriate. Have the knee assessed first.',
  },
  {
    q: 'When should knee pain receive urgent medical attention?',
    a: 'Seek same-day assessment for a hot, red, swollen knee (especially with fever), severe pain or inability to bear weight after an injury, visible deformity, a locked knee, or calf pain and swelling. Call 998 in an emergency.',
  },
  {
    q: 'Does RamaCare Polyclinic offer Janu Basti or Kizhi therapy?',
    a: "RamaCare's website lists Kizhi therapy among its Ayurveda therapies, and its knee pain page states that the Ayurveda doctor offers Janu Basti. Therapies are prescribed after consultation, so call or WhatsApp to confirm current availability and which would suit you.",
  },
  {
    q: 'Do I need an X-ray or scan before an Ayurvedic consultation?',
    a: "Bring any reports you already have. Whether further tests are needed is for the doctor to decide. RamaCare's knee pain page says X-ray and ultrasound can be done on site when needed, and the GP can arrange other referrals.",
  },
  {
    q: 'How many sessions will I need?',
    a: 'There is no fixed number. It depends on your assessment, the therapy and how you respond, and a number quoted before an assessment would not reflect your needs. RamaCare states that costs are confirmed in writing before therapy starts and that the doctor reviews progress.',
  },
  {
    q: 'How can I enquire about an Ayurvedic consultation in Jumeirah 1?',
    a: 'Call +971 4 286 2006, WhatsApp +971 56 659 7878, email query@ramacarepolyclinic.com, or use the booking form on the RamaCare Ayurveda page. Mention your knee symptoms, how long you have had them, any injuries, your medicines, and which therapy you are asking about.',
  },
];

const CLINIC_ID = `${SITE}/#clinic`;

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': `${URL}#webpage`,
      url: URL,
      name: 'Ayurvedic Knee Pain & Arthritis Treatment in Dubai, Jumeirah 1',
      description: DESCRIPTION,
      inLanguage: 'en-AE',
      about: {
        '@type': 'MedicalCondition',
        name: 'Knee pain and osteoarthritis',
      },
      audience: {
        '@type': 'MedicalAudience',
        audienceType: 'Adults',
      },
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        name: 'RamaCare Polyclinic',
        url: `${SITE}/`,
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: OG_IMAGE,
      },
      breadcrumb: {
        '@id': `${URL}#breadcrumb`,
      },
      mainEntity: {
        '@id': CLINIC_ID,
      },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      lastReviewed: '2026-10-15',
      reviewedBy: {
        '@type': 'Person',
        name: 'Dr. Shamna Keloth Meethal',
        url: `${SITE}/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/`,
      },
    },
    {
      '@type': 'MedicalClinic',
      '@id': CLINIC_ID,
      name: 'RamaCare Polyclinic',
      url: `${SITE}/`,
      image: `${SITE}/images/ayurveda-therapy-room-jumeirah-1.jpg`,
      telephone: '+97142862006',
      email: 'query@ramacarepolyclinic.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor',
        addressLocality: 'Jumeirah 1',
        addressRegion: 'Dubai',
        addressCountry: 'AE',
      },
      hasMap: 'https://maps.google.com/maps?cid=4290863257518002596',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '10:00',
          closes: '22:00',
        },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'appointments',
        telephone: '+971566597878',
        availableLanguage: ['English', 'Malayalam', 'Hindi'],
      },
      sameAs: [
        'https://www.facebook.com/RamaCarePolyClinic/',
        'https://www.instagram.com/ramacarepolyclinic/',
        'https://www.linkedin.com/company/ramacarepolyclinics/',
        'https://www.youtube.com/@ramacarepolyclinic',
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${URL}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${SITE}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: `${SITE}/services/`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Ayurveda',
          item: `${SITE}/services/ayurveda-dubai/`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Ayurvedic Knee Pain & Arthritis Treatment',
          item: URL,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
};

export default function AyurvedicKneePainArthritisDubai() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/971566597878?text=Hi%20RamaCare%2C%20I%27d%20like%20to%20ask%20about%20an%20Ayurvedic%20consultation%20for%20knee%20discomfort.",
      '_blank'
    );
  };

  const handleCall = () => {
    window.location.href = 'tel:+97142862006';
  };

  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={URL} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

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
        <meta property="og:image:alt" content="Ayurvedic doctor discussing knee symptoms with an adult patient during a consultation" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
        />
      </Head>

      {/* TOP STREAMLINED BREADCRUMB */}
      <div className="bg-[#FAF8F5]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-3.5">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
              </li>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <li>
                <Link href="/services/" className="hover:text-[#1F5E4B] transition-colors">Services</Link>
              </li>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <li>
                <Link href="/services/ayurveda-dubai/" className="hover:text-[#1F5E4B] transition-colors">Ayurveda</Link>
              </li>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <li aria-current="page" className="text-[#1F5E4B] font-semibold">
                Ayurvedic Knee Pain &amp; Arthritis Treatment
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* FRESH HERO: LAYERED COMPOSITION WITH ASYMMETRIC VISUAL & DIRECT CLINICAL REALISM */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FBF9F5] via-[#F4ECE1] to-[#FAF6EE] pt-12 sm:pt-16 pb-20 sm:pb-28">
        {/* Soft atmospheric gradient accents */}
        <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#C9A961]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">

              {/* Distinctive Hero Pills */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-[#1F5E4B] text-white shadow-xs transition-transform duration-300 hover:scale-105">
                  <BadgeCheck className="w-4 h-4" />
                  DHA-Licensed Facility #2036418
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-white text-[#8C6D23] shadow-xs transition-transform duration-300 hover:scale-105">
                  <Sparkles className="w-4 h-4 text-[#C9A961]" />
                  Kerala Classical Ayurveda &amp; Janu Basti
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-100/70 text-emerald-900 transition-transform duration-300 hover:scale-105">
                  <MapPin className="w-3.5 h-3.5" />
                  Jumeirah 1, Dubai
                </span>
              </div>

              {/* Exact H1 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight leading-[1.12]">
                Ayurvedic Knee Pain &amp; Arthritis Treatment in Dubai, Jumeirah 1
              </h1>

              {/* Exact Paragraph 1 */}
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Knee pain has a way of shaping your day: the extra thought before the stairs, the stiff first steps after a long meeting, the plans you quietly drop. If you are exploring Ayurvedic knee pain treatment, this page explains what it involves in plain terms. Traditionally, it starts with a conversation and may include warm medicated oil held over the knee (Janu Basti), herbal pouch therapy (Kizhi) or oil massage (Abhyanga), alongside advice on diet and routine. At RamaCare Polyclinic in Jumeirah 1, you can ask whether any of these might suit your knee.
              </p>

              {/* Exact Paragraph 2 */}
              <div className="p-5 sm:p-6 rounded-3xl bg-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.015]">
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Knee pain has many possible causes, from age-related osteoarthritis to injury or an inflammatory condition. A therapy that is reasonable for one cause can be unsuitable for another, so assessment comes first. Ayurvedic therapies are offered as complementary care. They are not a cure for arthritis, they do not replace medical assessment or prescribed treatment, and results vary from person to person.
                </p>
              </div>

              {/* CTA Action Deck */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#talk-to-ramacare"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#1F5E4B] text-white font-bold text-sm sm:text-base shadow-xl shadow-[#1F5E4B]/20 hover:bg-[#164637] transition-all duration-300 transform hover:scale-[1.03] active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request an appointment</span>
                </a>
                <button
                  onClick={handleWhatsApp}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#25D366] text-white font-bold text-sm sm:text-base shadow-md hover:bg-[#1EBE5D] transition-all duration-300 transform hover:scale-[1.03] active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp +971 56 659 7878</span>
                </button>
                <button
                  onClick={handleCall}
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-white text-stone-800 font-bold text-sm shadow-sm hover:bg-stone-50 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-4 h-4 text-[#1F5E4B]" />
                  <span>Call 04 286 2006</span>
                </button>
              </div>
            </div>

            {/* Right Column: Hero Visual with Overlaid Floating Capsule */}
            <div className="lg:col-span-5 relative">
              <figure className="group relative rounded-3xl overflow-hidden shadow-2xl bg-white transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
                <div className="relative aspect-16/10 w-full bg-stone-100 overflow-hidden">
                  <picture>
                    <source srcSet="/images/ayurvedic-knee-consultation-jumeirah-1.webp" type="image/webp" />
                    <Image
                      src="/images/ayurvedic-knee-consultation-jumeirah-1.webp"
                      alt="Ayurvedic doctor discussing knee symptoms with an adult patient during a consultation"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Floating Doctor Credential Chip */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                    <p className="text-xs sm:text-sm font-bold text-[#1F5E4B]">Dr. Shamna Keloth Meethal (BAMS)</p>
                    <p className="text-[11px] sm:text-xs text-gray-600">Ayurveda Doctor • 11+ Years Experience • DHA Licensed</p>
                  </div>
                </div>

                {/* Exact Caption */}
                <figcaption className="p-4 bg-[#FAF8F5] text-center text-xs sm:text-sm font-medium text-stone-700 italic">
                  Assessment comes before any therapy is considered.
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Exact Paragraph 3 (Urgent Pre-Check Callout) */}
          <div className="mt-12 rounded-3xl bg-rose-50/95 p-6 sm:p-8 shadow-[0_8px_30px_rgba(244,63,94,0.06)] transition-all duration-300 hover:scale-[1.01]">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 hover:scale-110">
                <ShieldAlert className="w-6 h-6 animate-pulse" />
              </div>
              <div className="space-y-2 flex-1">
                <h2 className="text-base sm:text-lg font-bold text-rose-950 flex items-center gap-2">
                  <span>Urgent Medical Attention Notice</span>
                </h2>
                <p className="text-rose-900 text-sm sm:text-base leading-relaxed">
                  If your knee is hot, red or very swollen, if you have a fever with joint pain, or if you cannot put weight on your leg after an injury, get medical assessment first. The signs are listed below.
                </p>
                <div className="pt-1 flex flex-wrap items-center gap-4 text-xs sm:text-sm">
                  <a href="#suitability" className="font-bold text-rose-800 underline hover:text-rose-950 inline-flex items-center gap-1">
                    <span>Jump to safety &amp; urgent signs</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-rose-400">•</span>
                  <a href="tel:998" className="font-bold text-rose-700 hover:underline">
                    In an emergency in Dubai, call 998
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SECTION DIRECTORY */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md shadow-xs hidden md:block">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between overflow-x-auto py-3.5 text-xs sm:text-sm font-semibold text-gray-600 gap-6">
            <a href="#what-is" className="hover:text-[#1F5E4B] transition-transform duration-200 hover:scale-105 whitespace-nowrap">What Is It?</a>
            <a href="#daily-life" className="hover:text-[#1F5E4B] transition-transform duration-200 hover:scale-105 whitespace-nowrap">Daily Life Knee Strain</a>
            <a href="#common-causes" className="hover:text-[#1F5E4B] transition-transform duration-200 hover:scale-105 whitespace-nowrap">Common Causes</a>
            <a href="#understanding-arthritis" className="hover:text-[#1F5E4B] transition-transform duration-200 hover:scale-105 whitespace-nowrap">Understanding Arthritis</a>
            <a href="#therapies" className="hover:text-[#1F5E4B] transition-transform duration-200 hover:scale-105 whitespace-nowrap">Traditional Therapies</a>
            <a href="#consultation" className="hover:text-[#1F5E4B] transition-transform duration-200 hover:scale-105 whitespace-nowrap">The Consultation</a>
            <a href="#suitability" className="hover:text-[#1F5E4B] transition-transform duration-200 hover:scale-105 whitespace-nowrap">Suitability &amp; Safety</a>
            <a href="#physiotherapy-care" className="hover:text-[#1F5E4B] transition-transform duration-200 hover:scale-105 whitespace-nowrap">Alongside Physio</a>
            <a href="#ramacare-clinic" className="hover:text-[#1F5E4B] transition-transform duration-200 hover:scale-105 whitespace-nowrap">RamaCare Clinic</a>
            <a href="#faq" className="hover:text-[#1F5E4B] transition-transform duration-200 hover:scale-105 whitespace-nowrap">FAQs</a>
            <a
              href="#talk-to-ramacare"
              className="ml-auto px-4 py-2 rounded-xl bg-[#1F5E4B] text-white hover:bg-[#164637] transition-all duration-200 hover:scale-105 whitespace-nowrap shadow-xs"
            >
              Enquire (AED 200)
            </a>
          </div>
        </div>
      </div>

      {/* SECTION 1: WHAT IS AYURVEDIC KNEE PAIN TREATMENT? */}
      <section id="what-is" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="w-full max-w-[1440px] mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#8C6D23] uppercase tracking-wider bg-[#C9A961]/20 px-4 py-1.5 rounded-full inline-block">
              Philosophy &amp; Realism
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              What Is Ayurvedic Knee Pain Treatment?
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">

            {/* Left Narrative Card */}
            <div className="lg:col-span-7 bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.015] flex flex-col justify-between">
              <div className="space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-11 h-11 rounded-2xl bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center font-bold">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">Traditional Concepts &amp; Individualized Guidance</h3>
                </div>

                {/* Exact Paragraph 1 */}
                <p>
                  Ayurveda is a traditional system of medicine that developed in India. It describes health through ideas such as the three doshas (Vata, Pitta and Kapha) and looks at how diet, digestion, sleep and daily routine affect the body. In this framework, joint stiffness and pain are often associated with Vata, linked with movement and dryness. Treatment therefore tends to focus on warmth, oils and routine guidance, adapted to the individual.
                </p>

                {/* Exact Paragraph 3 */}
                <p>
                  When treatment options are considered, the cause of the pain (if known), its severity and duration, and its effect on stairs, walking, sitting on the floor, work or exercise all matter. So do other health conditions and the medicines you take.
                </p>
              </div>

              {/* Three Dosha Insight Strip */}
              <div className="grid grid-cols-3 gap-3 mt-8 pt-6">
                <div className="bg-white p-3.5 rounded-2xl text-center shadow-2xs transition-transform duration-300 hover:scale-105">
                  <span className="block text-xs font-bold text-[#1F5E4B]">Vata Balance</span>
                  <span className="text-[11px] text-gray-500">Movement &amp; Dryness</span>
                </div>
                <div className="bg-white p-3.5 rounded-2xl text-center shadow-2xs transition-transform duration-300 hover:scale-105">
                  <span className="block text-xs font-bold text-[#1F5E4B]">Warm Oils</span>
                  <span className="text-[11px] text-gray-500">Soothing Nourishment</span>
                </div>
                <div className="bg-white p-3.5 rounded-2xl text-center shadow-2xs transition-transform duration-300 hover:scale-105">
                  <span className="block text-xs font-bold text-[#1F5E4B]">Daily Routine</span>
                  <span className="text-[11px] text-gray-500">Habit Modification</span>
                </div>
              </div>
            </div>

            {/* Right Evidence Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#1F5E4B] to-[#144234] text-white p-8 sm:p-10 rounded-3xl shadow-xl transition-all duration-300 hover:scale-[1.015] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#E6D4AA] text-xs font-bold uppercase tracking-wider">
                  <Info className="w-4 h-4" />
                  <span>Honest Evidence Appraisal</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Evidence Status in Plain Language
                </h3>

                {/* Exact Paragraph 2 */}
                <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
                  These are traditional concepts, not biomedical diagnoses, and they are not proven mechanisms. Research on Ayurvedic therapies for knee problems is limited, and the US National Center for Complementary and Integrative Health notes that scientific evidence for Ayurveda is limited for many conditions. Many people find warm, unhurried treatment comforting. That experience is real, but it is not evidence that a therapy changes the underlying condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY KNEE DISCOMFORT COMES UP SO OFTEN IN DAILY LIFE */}
      <section id="daily-life" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5]">
        <div className="w-full max-w-[1440px] mx-auto">

          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.01]">
            <div className="max-w-4xl mx-auto space-y-6 text-center">
              <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider bg-[#1F5E4B]/10 px-4 py-1.5 rounded-full inline-block">
                Lifestyle &amp; Activity Loading
              </span>

              {/* Exact H2 */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                Why Knee Discomfort Comes Up So Often in Daily Life
              </h2>

              <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto"></div>

              {/* Exact Paragraph 1 */}
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-left sm:text-center">
                Many adults in Dubai spend long hours at a desk or behind the wheel, then climb stairs, walk through malls, play padel or run at the weekend. Sitting for a long time can leave the knees stiff when you stand up, and a sudden jump in activity can irritate them. None of this means something is wrong, and none of it can be diagnosed from a distance.
              </p>

              {/* Exact Paragraph 2 */}
              <div className="p-6 rounded-3xl bg-[#FAF8F5] shadow-xs text-left sm:text-center">
                <p className="text-stone-800 text-base sm:text-lg font-medium leading-relaxed">
                  But if the discomfort keeps returning, or starts to limit things you enjoy, it is reasonable to have it looked at rather than waiting for it to settle. That is the point where an assessment, and a conversation about your options, becomes useful.
                </p>
              </div>

              {/* Visual Lifestyle Scenarios Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 text-xs font-semibold text-gray-700">
                <div className="p-4 rounded-2xl bg-stone-50 shadow-2xs">Desk &amp; Screen Hours</div>
                <div className="p-4 rounded-2xl bg-stone-50 shadow-2xs">Long Driving Commutes</div>
                <div className="p-4 rounded-2xl bg-stone-50 shadow-2xs">Mall Walking &amp; Stairs</div>
                <div className="p-4 rounded-2xl bg-stone-50 shadow-2xs">Weekend Padel &amp; Running</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: COMMON CAUSES OF KNEE PAIN AND JOINT DISCOMFORT */}
      <section id="common-causes" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="w-full max-w-[1440px] mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider bg-[#1F5E4B]/10 px-4 py-1.5 rounded-full inline-block">
              Clinical Assessment First
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              Common Causes of Knee Pain and Joint Discomfort
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mb-6"></div>

            {/* Exact Intro Paragraph */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Knee pain is a symptom, not a diagnosis. Common contributors include:
            </p>
          </div>

          {/* 6 Responsive Cause Cards with Hover Zoom */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

            <div className="group bg-[#FAF8F5] p-7 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-xl">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B]">Age &amp; Joint Surface</span>
              <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] mt-3 mb-2">
                Osteoarthritis and age-related joint changes
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                gradual changes in the joint, often with pain on stairs or long walks and stiffness after rest.
              </p>
            </div>

            <div className="group bg-[#FAF8F5] p-7 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-xl">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#C9A961]/25 text-[#7D5E15]">Static Posture</span>
              <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] mt-3 mb-2">
                Stiffness and discomfort
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                after sitting for long periods or first thing in the morning.
              </p>
            </div>

            <div className="group bg-[#FAF8F5] p-7 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-xl">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-800">Activity Spike</span>
              <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] mt-3 mb-2">
                Overuse or activity-related strain
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                a sudden rise in walking, running, cycling or kneeling.
              </p>
            </div>

            <div className="group bg-[#FAF8F5] p-7 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-xl">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900">Mechanical Damage</span>
              <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] mt-3 mb-2">
                Injury
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                a twist, fall or sports injury affecting ligaments or cartilage, often with swelling.
              </p>
            </div>

            <div className="group bg-[#FAF8F5] p-7 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-xl">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-100 text-rose-900">Systemic &amp; Medical</span>
              <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] mt-3 mb-2">
                Inflammatory joint conditions
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                such as rheumatoid arthritis or gout, which can cause a hot, swollen joint.
              </p>
            </div>

            <div className="group bg-[#FAF8F5] p-7 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-100 text-teal-900">Biomechanics</span>
                <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] mt-3">
                  Reduced mobility, muscle weakness or extra load on the knees.
                </h3>
              </div>
            </div>

          </div>

          {/* Exact Concluding Sentence */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] text-center max-w-3xl mx-auto shadow-xs">
            <p className="text-sm sm:text-base font-medium text-stone-800">
              These conditions are not interchangeable and need different assessment and management. Symptoms alone cannot tell you which one you have.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 4: UNDERSTANDING ARTHRITIS AND OSTEOARTHRITIS */}
      <section id="understanding-arthritis" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5]">
        <div className="w-full max-w-[1440px] mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider bg-[#1F5E4B]/10 px-4 py-1.5 rounded-full inline-block">
              Clinical Clarification
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              Understanding Arthritis and Osteoarthritis
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center mb-10">

            {/* Text Side */}
            <div className="lg:col-span-7 space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">
              {/* Exact Paragraph 1 */}
              <p>
                “Arthritis” is a broad term for joint inflammation or joint disease. It covers many conditions, including osteoarthritis, rheumatoid arthritis and gout.
              </p>

              {/* Exact Paragraph 2 */}
              <div className="p-6 rounded-3xl bg-white shadow-xs space-y-3">
                <p>
                  Osteoarthritis involves changes in the joint over time, including breakdown of the protective cartilage at the ends of the bones. The knees, hips and small joints of the hands are most often affected. Common symptoms are pain, stiffness (especially after rest), difficulty moving the joint, and sometimes swelling, tenderness or a grating sensation. Severity varies widely and symptoms can come and go. The NHS describes osteoarthritis as a long-term condition that cannot be cured, with treatments available to reduce symptoms.
                </p>
              </div>

              {/* Exact Paragraph 3 */}
              <p>
                Inflammatory types such as rheumatoid arthritis involve the immune system and need medical diagnosis. Persistent joint symptoms are worth having assessed by a doctor.
              </p>

              {/* Exact Paragraph 4 */}
              <div className="p-5 rounded-2xl bg-amber-50/80 text-amber-950 font-medium">
                Traditional Ayurvedic therapies should not be presented as reversing joint damage, rebuilding cartilage or curing arthritis, and RamaCare does not present them that way. Where they are used, the aim is comfort and ease of movement as part of a wider plan.
              </div>

              <div className="pt-2">
                <Link
                  href="/services/arthritis-treatment-dubai/"
                  className="text-sm font-bold text-[#1F5E4B] hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Explore arthritis care at RamaCare</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Image 2 Side (Anatomy Illustration) */}
            <div className="lg:col-span-5">
              <figure className="group bg-white p-6 rounded-3xl shadow-xl transition-all duration-500 hover:scale-[1.02]">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-stone-100">
                  <picture>
                    <source srcSet="/images/knee-joint-anatomy-illustration.webp" type="image/webp" />
                    <Image
                      src="/images/knee-joint-anatomy-illustration.webp"
                      alt="Side view illustration of the knee joint showing the thigh bone, shin bone, kneecap, cartilage and meniscus"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                  </picture>
                </div>
                <figcaption className="text-center text-xs sm:text-sm font-medium text-stone-600 mt-4 italic">
                  A simplified side view of the knee joint.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TRADITIONAL AYURVEDIC THERAPIES THAT MAY BE CONSIDERED FOR KNEE DISCOMFORT */}
      <section id="therapies" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="w-full max-w-[1440px] mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider bg-[#1F5E4B]/10 px-4 py-1.5 rounded-full inline-block">
              Therapeutic Modalities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              Traditional Ayurvedic Therapies That May Be Considered for Knee Discomfort
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mb-6"></div>

            {/* Exact Intro Paragraph */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              The descriptions below explain traditional therapies for education. Procedures differ between practitioners, and suitability depends on your assessment. Availability at RamaCare is covered further down.
            </p>
          </div>

          <div className="space-y-12">

            {/* JANU BASTI (Feature Card with Image 3) */}
            <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.01]">
              <div className="grid lg:grid-cols-12 gap-10 items-center">

                <div className="lg:col-span-7 space-y-4">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#1F5E4B] text-white">
                    Targeted Oil Reservoir
                  </span>

                  {/* Exact H3 */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                    Janu Basti
                  </h3>

                  {/* Exact Paragraph 1 */}
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Janu means knee. In this therapy, basti refers to keeping oil in one place. A ring of dough or paste is placed around the knee to form a small reservoir. Warm medicated oil chosen by the practitioner is poured in and kept warm for a period, then removed and the skin wiped clean.
                  </p>

                  {/* Exact Paragraph 2 */}
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Traditionally it is used for knee stiffness and discomfort, in line with Ayurvedic ideas about Vata. Warmth and oil can feel soothing. There is no good evidence that Janu Basti repairs cartilage, reverses joint damage or gives lasting pain relief, and no result can be promised.
                  </p>

                  {/* Exact Paragraph 3 */}
                  <div className="p-5 rounded-2xl bg-amber-50 text-amber-950 text-xs sm:text-sm leading-relaxed space-y-2">
                    <p className="font-bold flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                      <span>Suitability &amp; Clinical Boundaries</span>
                    </p>
                    <p>
                      Suitability depends on your condition, skin health, sensitivity to heat (or reduced skin sensation, which can raise burn risk), allergies to oils or herbs, and whether the knee is swollen or recently injured. Janu Basti is applied externally and is a different procedure from Basti therapy, the internal medicated enema used in Panchakarma.
                    </p>
                  </div>
                </div>

                {/* Image 3: Janu Basti Set-Up */}
                <div className="lg:col-span-5">
                  <figure className="group bg-white p-4 rounded-3xl shadow-xl transition-all duration-500 hover:scale-[1.02]">
                    <div className="relative aspect-3/2 rounded-2xl overflow-hidden bg-stone-100">
                      <picture>
                        <source srcSet="/images/janu-basti-knee-oil-therapy-illustration.webp" type="image/webp" />
                        <Image
                          src="/images/janu-basti-knee-oil-therapy-illustration.webp"
                          alt="Warm medicated oil held in a dough ring around a knee during Janu Basti therapy"
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                        />
                      </picture>
                    </div>
                    <figcaption className="text-center text-xs text-stone-600 mt-3 italic">
                      Illustration of the traditional Janu Basti set-up. Procedure varies by practitioner.
                    </figcaption>
                  </figure>
                </div>

              </div>
            </div>

            {/* ABHYANGA & KIZHI (Side by Side Distinctive Cards) */}
            <div className="grid lg:grid-cols-2 gap-8">

              {/* Abhyanga Card */}
              <div className="group bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-[#7D5E15] flex items-center justify-center font-bold transition-transform duration-300 group-hover:scale-110">
                    <Sparkles className="w-6 h-6" />
                  </div>

                  {/* Exact H3 */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                    Abhyanga
                  </h3>

                  {/* Exact Paragraph 1 */}
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Abhyanga is a traditional Ayurvedic oil massage using warm medicated oils selected for the person. It is usually a regional or whole-body massage rather than a treatment aimed at the knee joint itself. People often seek it for muscle tension and relaxation. It is not a medical diagnosis and it does not replace evidence-based rehabilitation, such as the exercise-based physiotherapy commonly recommended for knee osteoarthritis.
                  </p>

                  {/* Exact Paragraph 2 */}
                  <div className="p-4 rounded-2xl bg-white shadow-2xs text-xs sm:text-sm text-gray-700 leading-relaxed">
                    <p className="font-semibold text-stone-900 mb-1">Practical points:</p>
                    <p>
                      tell the therapist about skin sensitivity, oil allergies, swelling or recent injury. Firm pressure or kneading is not appropriate over a swollen, painful or recently injured knee, and technique should be adjusted or stopped if anything is uncomfortable.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 text-xs font-semibold">
                  <Link href="/services/abhyanga-massage-dubai/" className="text-[#1F5E4B] hover:underline inline-flex items-center gap-1.5">
                    <span>Learn about Kerala Ayurvedic massage</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Kizhi Card */}
              <div className="group bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#1F5E4B] flex items-center justify-center font-bold transition-transform duration-300 group-hover:scale-110">
                    <Layers className="w-6 h-6" />
                  </div>

                  {/* Exact H3 */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                    Kizhi Therapy
                  </h3>

                  {/* Exact Paragraph 1 */}
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Kizhi is a Malayalam word for a small pouch or bundle. Herbs, powders, leaves or cooked medicinal rice are tied in cloth, warmed (often with medicated oil) and applied to the body with rhythmic movements. Dry powder pouches (Podi Kizhi), fresh leaf pouches (Elakizhi) and cooked rice pouches (Njavarakizhi) are among the types described on RamaCare's <Link href="/services/kizhi-therapy-dubai/" className="text-[#1F5E4B] font-semibold underline">Kizhi therapy page</Link>. Ingredients, temperature and technique are not standardised and vary between practitioners.
                  </p>

                  {/* Exact Paragraph 2 */}
                  <div className="p-4 rounded-2xl bg-white shadow-2xs text-xs sm:text-sm text-gray-700 leading-relaxed">
                    <p>
                      Pouch therapies are traditionally used for stiffness in muscles and joints, including the knees. Take extra care with heat sensitivity or reduced skin sensation, skin conditions or broken skin, allergies, and acute swelling or injury. A pouch should never be uncomfortably hot.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 text-xs font-semibold">
                  <Link href="/services/kizhi-therapy-dubai/" className="text-[#1F5E4B] hover:underline inline-flex items-center gap-1.5">
                    <span>Explore the Kizhi therapy page</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>

            {/* Other Relevant Approaches */}
            <div className="bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.01]">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-teal-100 text-teal-900 flex items-center justify-center font-bold shrink-0 mt-0.5">
                  <Thermometer className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[#1A1A1A]">
                    Other Relevant Ayurvedic Approaches
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    A consultation may also include diet and daily-routine guidance and, in some cases, herbal medicines. Herbal products vary in quality and can interact with prescription medicines, so give your doctor a full list of everything you take. RamaCare's <Link href="/services/ayurveda-dubai/" className="text-[#1F5E4B] font-semibold underline">Ayurveda department</Link> page also lists therapies such as Njavarakizhi, Pizhichil, Udwarthanam and Basti. Whether any of them is relevant to knee symptoms is a question for the Ayurveda doctor after assessment.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: WHAT HAPPENS DURING AN AYURVEDIC CONSULTATION? */}
      <section id="consultation" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5]">
        <div className="w-full max-w-[1440px] mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider bg-[#1F5E4B]/10 px-4 py-1.5 rounded-full inline-block">
              Doctor-Led Assessment
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              What Happens During an Ayurvedic Consultation?
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mb-6"></div>

            {/* Exact Intro Paragraph */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              RamaCare's Ayurveda page describes a first consultation of 45 to 60 minutes with its Ayurveda doctor, covering health history, current medicines and a written plan. For a knee concern, a consultation may include:
            </p>
          </div>

          {/* 6 Structured Consultation Steps with Smooth Zoom */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

            <div className="group bg-white p-7 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-xl">
              <span className="w-9 h-9 rounded-2xl bg-[#1F5E4B] text-white flex items-center justify-center text-xs font-bold mb-4">01</span>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2">Symptom History</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Your symptoms: where, since when, what helps or worsens them, and which daily activities are affected.
              </p>
            </div>

            <div className="group bg-white p-7 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-xl">
              <span className="w-9 h-9 rounded-2xl bg-[#C9A961] text-stone-900 flex items-center justify-center text-xs font-bold mb-4">02</span>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2">Medicines &amp; Supplements</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Medical history, current medicines, supplements and herbal products.
              </p>
            </div>

            <div className="group bg-white p-7 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-xl">
              <span className="w-9 h-9 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xs font-bold mb-4">03</span>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2">Imaging &amp; Records Review</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Previous injuries, diagnoses, scans and treatments. Bring X-ray or MRI reports and doctors' letters if you have them.
              </p>
            </div>

            <div className="group bg-white p-7 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-xl">
              <span className="w-9 h-9 rounded-2xl bg-teal-600 text-white flex items-center justify-center text-xs font-bold mb-4">04</span>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2">Suitability &amp; Warning Signs</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                An assessment of whether an Ayurvedic therapy is suitable for you now, including skin, heat tolerance and any warning signs.
              </p>
            </div>

            <div className="group bg-white p-7 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-xl">
              <span className="w-9 h-9 rounded-2xl bg-amber-600 text-white flex items-center justify-center text-xs font-bold mb-4">05</span>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2">Options &amp; Costs</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                An explanation of the options, precautions and cost.
              </p>
            </div>

            <div className="group bg-white p-7 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-xl">
              <span className="w-9 h-9 rounded-2xl bg-stone-700 text-white flex items-center justify-center text-xs font-bold mb-4">06</span>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2">Progress Monitoring</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Follow-up review, where appropriate.
              </p>
            </div>

          </div>

          {/* Exact Concluding Possibility Note */}
          <div className="p-5 rounded-2xl bg-white shadow-xs text-center max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm font-medium text-stone-800">
              These are general possibilities. If the doctor thinks a medical check, imaging or physiotherapy would help first, colleagues are in the same building.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 7: HOW TO PREPARE FOR YOUR VISIT */}
      <section id="prepare" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="w-full max-w-[1440px] mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider bg-[#1F5E4B]/10 px-4 py-1.5 rounded-full inline-block">
              Practical Advice
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              How to Prepare for Your Visit
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-8">

            {/* Checklist 1: What to Bring */}
            <div className="bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.015] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <ClipboardList className="w-6 h-6 text-[#1F5E4B]" />
                  <h3 className="text-xl font-bold text-[#1A1A1A]">A little preparation helps you get more from the appointment. It is worth bringing:</h3>
                </div>
                <ul className="space-y-3.5 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1F5E4B] shrink-0 mt-0.5" />
                    <span>A list of your medicines, supplements and any herbal products.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1F5E4B] shrink-0 mt-0.5" />
                    <span>Previous X-ray, MRI or blood test reports, and any doctors' letters.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1F5E4B] shrink-0 mt-0.5" />
                    <span>Notes on when the pain started, what makes it better or worse, and what you can no longer do comfortably.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1F5E4B] shrink-0 mt-0.5" />
                    <span>Loose clothing that lets the knee be examined easily.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Checklist 2: Questions to Ask */}
            <div className="bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.015] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <HelpCircle className="w-6 h-6 text-[#7D5E15]" />
                  <h3 className="text-xl font-bold text-[#1A1A1A]">You may also want to ask:</h3>
                </div>
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-[#C9A961] shrink-0 mt-1" />
                    <span>Is an Ayurvedic therapy suitable for my knee right now, or should I see a doctor or physiotherapist first?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-[#C9A961] shrink-0 mt-1" />
                    <span>Which therapy do you suggest, and what will a session involve?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-[#C9A961] shrink-0 mt-1" />
                    <span>What precautions apply to me?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-[#C9A961] shrink-0 mt-1" />
                    <span>How will we know whether it is helping, and when will you review the plan?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-[#C9A961] shrink-0 mt-1" />
                    <span>What will it cost, and can I have that in writing?</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Exact Concluding Note */}
          <div className="p-5 rounded-2xl bg-[#F5EFE6] text-center max-w-3xl mx-auto shadow-xs">
            <p className="text-xs sm:text-sm font-medium text-stone-800">
              Good questions are welcome. A practitioner who explains things clearly is usually a good sign.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 8: IS AYURVEDIC KNEE PAIN TREATMENT SUITABLE FOR EVERYONE? (SAFETY & RED FLAGS) */}
      <section id="suitability" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5]">
        <div className="w-full max-w-[1440px] mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wider bg-rose-100 px-4 py-1.5 rounded-full inline-block">
              Safety Screening &amp; Red Flags
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              Is Ayurvedic Knee Pain Treatment Suitable for Everyone?
            </h2>
            <div className="w-16 h-1 bg-rose-600 rounded-full mx-auto mb-4"></div>

            {/* Exact Lead */}
            <p className="text-gray-700 text-base sm:text-lg font-medium leading-relaxed">
              No. Suitability depends on the cause of the pain, your medical history and the therapy being considered. Extra care, adjustment or postponement may be needed if you have:
            </p>
          </div>

          {/* Dual Column Safety Breakdown */}
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-10">

            {/* Left Column: Postponement / Extra Care Items */}
            <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-4">
              <h3 className="text-lg font-bold text-[#1A1A1A] flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <span>Therapies Postponed or Adapted</span>
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                  <span>A newly injured knee.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                  <span>Significant or unexplained swelling.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                  <span>A hot or red joint, or fever with joint symptoms.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                  <span>Skin irritation, a rash, a wound or a skin infection near the knee.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                  <span>Reduced skin sensation or heat sensitivity, which raises the risk of burns (for example some people with diabetes or circulation problems).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                  <span>Allergies to oils, herbs or other ingredients.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                  <span>Pregnancy or breastfeeding, a heart condition, uncontrolled blood pressure, or recovery from surgery or a knee replacement. These need individual advice.</span>
                </li>
              </ul>
            </div>

            {/* Right Column: Emergency & Urgent Signs */}
            <div className="lg:col-span-6 bg-rose-50/95 p-8 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgba(244,63,94,0.06)] space-y-4">
              <div className="flex items-center gap-2.5 text-rose-900 font-bold text-lg mb-2">
                <ShieldAlert className="w-6 h-6 text-rose-600" />
                <span>Medical Assessment Must Come First</span>
              </div>
              <p className="text-rose-950 text-sm sm:text-base leading-relaxed">
                Medical assessment should come first if you have a hot, red or significantly swollen knee, especially with fever; severe pain after an injury; visible deformity; inability to bear weight; a knee that locks and will not straighten; or calf pain and swelling. Do not use heat or massage on an acute injury or unexplained swelling without clinical guidance. In an emergency in Dubai, call 998.
              </p>
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm">
                <Link
                  href="/services/general-physician-dubai/"
                  className="font-bold text-rose-800 underline hover:text-rose-950 inline-flex items-center gap-1"
                >
                  <span>See general physician in Jumeirah 1</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
                <span className="text-rose-300">•</span>
                <a href="tel:998" className="font-bold text-rose-700 hover:underline">
                  Dubai Ambulance: 998
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 9: AYURVEDIC CARE ALONGSIDE PHYSIOTHERAPY AND CONVENTIONAL TREATMENT */}
      <section id="physiotherapy-care" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="w-full max-w-[1440px] mx-auto">

          <div className="grid lg:grid-cols-12 gap-10 items-center">

            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider bg-[#1F5E4B]/10 px-4 py-1.5 rounded-full inline-block">
                Collaborative Polyclinic Care
              </span>

              {/* Exact H2 */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                Ayurvedic Care Alongside Physiotherapy and Conventional Treatment
              </h2>

              {/* Exact Paragraph 1 */}
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Managing knee pain often involves medical assessment, exercise prescribed for your knee, activity changes, weight management where relevant, medicines and, for some people, injections or surgery after specialist review. Ayurvedic therapies may be discussed as a complementary option for some people. They should not replace necessary medical care.
              </p>

              {/* Exact Paragraph 2 */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                At RamaCare, the Ayurveda doctor, physiotherapist (<Link href="/doctors/jeena-mathew-physiotherapist-dubai/" className="text-[#1F5E4B] font-semibold underline">Jeena Mathew</Link>, BPT, MPT) and GP work in the same clinic, and the knee pain page states that X-ray and ultrasound are available on site when needed. You can ask about a coordinated plan. RamaCare does not give knee injections or perform surgery, and refers patients when those are being considered. See <Link href="/services/knee-pain-treatment-dubai/" className="text-[#1F5E4B] font-semibold underline">knee pain treatment at RamaCare</Link> and <Link href="/ayurveda-vs-physiotherapy-for-arthritis-dubai" className="text-[#1F5E4B] font-semibold underline">Ayurveda vs physiotherapy for arthritis</Link> for the physiotherapy side.
              </p>

              {/* Exact Paragraph 3 */}
              <div className="p-5 rounded-2xl bg-amber-50/90 text-amber-950 text-sm sm:text-base font-medium shadow-xs">
                Never stop prescribed medicines, delay a recommended operation or skip a medical review because of an Ayurvedic therapy. Tell every practitioner about the other treatments you are having.
              </div>

              <div className="pt-2">
                <Link
                  href="/services/physiotherapy-dubai/"
                  className="text-sm font-bold text-[#1F5E4B] hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Explore physiotherapy in Jumeirah 1</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Image 4 (Physiotherapist Guiding Knee Mobility) */}
            <div className="lg:col-span-5">
              <figure className="group bg-[#FAF8F5] p-5 rounded-3xl shadow-xl transition-all duration-500 hover:scale-[1.02]">
                <div className="relative aspect-3/2 rounded-2xl overflow-hidden bg-stone-100">
                  <picture>
                    <source srcSet="/images/physiotherapy-knee-mobility-exercise-guidance.webp" type="image/webp" />
                    <Image
                      src="/images/physiotherapy-knee-mobility-exercise-guidance.webp"
                      alt="Physiotherapist guiding an adult through a seated knee extension exercise"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                  </picture>
                </div>
                <figcaption className="text-center text-xs sm:text-sm font-medium text-stone-600 mt-3.5 italic">
                  Exercise is a core part of knee care, tailored to the individual.
                </figcaption>
              </figure>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 10: AYURVEDIC KNEE PAIN TREATMENT AT RAMACARE POLYCLINIC, JUMEIRAH 1 */}
      <section id="ramacare-clinic" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5]">
        <div className="w-full max-w-[1440px] mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider bg-[#1F5E4B]/10 px-4 py-1.5 rounded-full inline-block">
              Clinic &amp; Team Details
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              Ayurvedic Knee Pain Treatment at RamaCare Polyclinic, Jumeirah 1
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-12">

            {/* Clinic Narrative */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-5 flex flex-col justify-between">
              <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                {/* Exact Paragraph 1 */}
                <p>
                  RamaCare Polyclinic is a DHA-licensed polyclinic (facility licence 2036418) on Al Dhiyafah Road in Jumeirah 1. Its <Link href="/services/ayurveda-dubai/" className="text-[#1F5E4B] font-semibold underline">Ayurveda department</Link> is led by <Link href="/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/" className="text-[#1F5E4B] font-semibold underline">Dr. Shamna Keloth Meethal</Link> (BAMS). Therapies are given by Kerala-trained therapists, with a male therapist for men and a female therapist for women.
                </p>

                {/* Exact Paragraph 2 */}
                <p>
                  For knee concerns, RamaCare lists Janu Basti, Kizhi therapy and Abhyanga (Kerala Ayurvedic massage), prescribed after consultation. Availability and suitability can change, so please confirm when you enquire that a particular therapy is currently available and appropriate for you.
                </p>

                {/* Exact Paragraph 3 */}
                <p>
                  The clinic states that you receive your plan and its cost in writing before therapy starts. The Ayurveda consultation is currently listed at AED 200. Insurance is on a reimbursement basis, with itemised invoices provided.
                </p>

                <div className="pt-2">
                  <Link href="/services/polyclinic-in-jumeirah-1/" className="text-xs sm:text-sm font-bold text-[#1F5E4B] hover:underline inline-flex items-center gap-1.5">
                    <span>Learn more about our Jumeirah 1 clinic facility</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Direct Booking CTA Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#talk-to-ramacare"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#1F5E4B] text-white font-bold text-sm sm:text-base shadow-lg hover:bg-[#164637] transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>book an appointment</span>
                </a>
                <button
                  onClick={handleWhatsApp}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#25D366] text-white font-bold text-sm sm:text-base shadow-md hover:bg-[#1EBE5D] transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp +971 56 659 7878</span>
                </button>
              </div>
            </div>

            {/* Practical Contact Info Card */}
            <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-4">
              <h3 className="text-lg font-bold text-[#1A1A1A] pb-2">
                Facility &amp; Appointment Essentials
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" />
                  <span>Location: 12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai, UAE. Free and paid parking nearby.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" />
                  <span>Hours: every day, 10am to 10pm. Walk-ins are accepted; booking ahead secures your therapist.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" />
                  <span>Phone: <a href="tel:+97142862006" className="text-[#1F5E4B] font-semibold hover:underline">+971 4 286 2006</a></span>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>WhatsApp: <a href="https://wa.me/971566597878" className="text-[#1F5E4B] font-semibold hover:underline">+971 56 659 7878</a></span>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" />
                  <span>Email: <a href="mailto:query@ramacarepolyclinic.com" className="text-[#1F5E4B] font-semibold hover:underline">query@ramacarepolyclinic.com</a></span>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" />
                  <span>Languages (Ayurveda team): English, Malayalam and Hindi.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 11: FREQUENTLY ASKED QUESTIONS ABOUT AYURVEDIC KNEE PAIN TREATMENT */}
      <section id="faq" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="w-full max-w-[1440px] mx-auto">

          <div className="text-center mb-14">
            <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider bg-[#1F5E4B]/10 px-4 py-1.5 rounded-full inline-block">
              Patient Clarifications
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              Frequently Asked Questions About Ayurvedic Knee Pain Treatment
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mb-4"></div>
          </div>

          {/* Expansive 2-Column Grid */}
          <div className="grid lg:grid-cols-2 gap-5 items-start">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    id={`faq-btn-${idx}`}
                    aria-expanded={isOpen}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-stone-100/50 transition-colors"
                  >
                    <span className="font-bold text-sm sm:text-base text-[#1A1A1A]">
                      {idx + 1}. {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#1F5E4B] text-white' : 'bg-white text-stone-500 shadow-2xs'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-gray-700 text-sm sm:text-base leading-relaxed">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 12: TALK TO RAMACARE ABOUT YOUR KNEE */}
      <section id="talk-to-ramacare" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#FAF8F5] to-white">
        <div className="w-full max-w-[1440px] mx-auto text-center">

          <div className="bg-white p-8 sm:p-12 lg:p-16 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] max-w-4xl mx-auto space-y-6">
            <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider bg-[#1F5E4B]/10 px-4 py-1.5 rounded-full inline-block">
              Begin Your Enquiry
            </span>

            {/* Exact H2 */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Talk to RamaCare About Your Knee
            </h2>

            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto"></div>

            {/* Exact Paragraph */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-left sm:text-center">
              If knee pain or stiffness is making everyday life harder, you are welcome to get in touch with RamaCare Polyclinic in Jumeirah 1. You can describe what you are experiencing, ask which services are currently available, and find out whether a consultation makes sense for you. There is no pressure to book a therapy, and the team can tell you honestly if a medical check or physiotherapy should come first.
            </p>

            {/* Direct Multi-channel CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="https://ramacarepolyclinic.ae/book-appointment/"
                className="px-8 py-4 rounded-2xl bg-[#1F5E4B] text-white font-bold text-sm sm:text-base shadow-xl hover:bg-[#164637] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Request an appointment
              </a>
              <button
                onClick={handleWhatsApp}
                className="px-7 py-4 rounded-2xl bg-[#25D366] text-white font-bold text-sm sm:text-base shadow-md hover:bg-[#1EBE5D] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp +971 56 659 7878</span>
              </button>
              <a
                href="mailto:query@ramacarepolyclinic.com"
                className="px-6 py-4 rounded-2xl bg-stone-100 text-stone-800 font-bold text-sm shadow-xs hover:bg-stone-200 transition-all duration-300 hover:scale-105"
              >
                Email query@ramacarepolyclinic.com
              </a>
            </div>

            {/* Exact Medical Disclaimer & Review Block */}
            <aside className="mt-8 pt-6 text-xs sm:text-sm text-stone-600 space-y-1.5" aria-label="Medical information notice">
              <p>
                This page is general information, not medical advice or a diagnosis. Outcomes vary between individuals and no result is guaranteed.
              </p>
              <p>
                Content last reviewed by Dr. Shamna Keloth Meethal (BAMS) on 15 Oct 2026.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* DOCTORS SECTION */}
      <DoctorsSection
        customDoctors={[
          DOCTORS['dr-shamna-keloth-meethal-ayurveda-doctor-dubai'],
          DOCTORS.syamkumar,
          DOCTORS.mariya,
          DOCTORS['jeena-mathew-physiotherapist-dubai'],
        ]}
      />

      {/* CONTENT REVIEW BADGE */}
      <ContentReviewBadge
        doctorName="Dr. Shamna Keloth Meethal"
        pageSlug="ayurvedic-arthritis-knee-pain-treatment-dubai"
        lastReviewed="2026-10-15"
      />

      {/* BOOK CONSULTATION SECTION */}
      <div id="book-consultation">
        <BookConsultation />
      </div>

      {/* MOBILE STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-40 p-3.5 md:hidden">
        <div className="flex items-center justify-between gap-3">
          <div className="text-left">
            <p className="text-xs font-bold text-[#1A1A1A]">Ayurvedic Knee Care</p>
            <p className="text-[11px] text-[#7D5E15] font-semibold">AED 200 Initial Assessment</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleWhatsApp}
              className="p-2.5 rounded-2xl bg-[#25D366] text-white shadow-sm"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            <a
              href="#talk-to-ramacare"
              className="flex items-center gap-1.5 bg-[#1F5E4B] text-white px-4 py-2.5 rounded-2xl font-bold text-xs shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Doctor</span>
            </a>
          </div>
        </div>
      </div>

      {/* FLOATING WHATSAPP BUTTON (DESKTOP) */}
      <button
        onClick={handleWhatsApp}
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </button>

    </Layout>
  );
}
