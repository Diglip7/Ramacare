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
  ExternalLink
} from 'lucide-react';

const SITE = 'https://ramacarepolyclinic.ae';
const PATH = '/services/ayurvedic-back-pain-treatment-dubai/';
const URL = `${SITE}${PATH}`;
const TITLE = 'Ayurvedic Back Pain Treatment in Dubai | RamaCare';
const DESCRIPTION =
  'Ayurvedic back pain treatment in Jumeirah 1, Dubai. A BAMS doctor assesses you first; therapies like Kizhi and Abhyanga follow. Enquire at RamaCare.';
const OG_IMAGE = `${SITE}/images/ayurvedic-back-pain-consultation-dubai.jpg`;
const DATE_PUBLISHED = '2026-10-15';
const DATE_MODIFIED = '2026-10-15';

export const faqs = [
  {
    q: 'What is Ayurvedic back pain treatment?',
    a: 'It is a doctor-led, traditional approach that may combine warm oil or herbal therapies, therapeutic massage and diet and routine guidance. At RamaCare it starts with a 45 to 60 minute consultation with Dr. Shamna Keloth Meethal (BAMS), who decides which therapies, if any, suit you. It is complementary care and does not replace medical assessment.',
  },
  {
    q: 'What is Kati Basti?',
    a: 'Kati Basti is an external therapy in which a ring of dough on the lower back holds warm medicated oil for a period of time. It is traditionally used for lower-back stiffness. It is not the same as Basti, the Ayurvedic enema.',
  },
  {
    q: 'Can Ayurvedic treatment help with lower-back discomfort?',
    a: 'Some people find warm oil therapies and massage comforting, and Ayurveda has long used them for back stiffness. Research is limited and mostly small studies, so results cannot be promised and vary from person to person. The doctor first checks that your symptoms are suitable for this approach.',
  },
  {
    q: 'Is Ayurvedic treatment appropriate for sciatica symptoms?',
    a: 'It depends on your symptoms and assessment. Pain that travels down the leg can come from nerve irritation, and some patterns need a general physician or physiotherapist first. Weakness, numbness around the groin or back passage, or bladder or bowel changes need urgent medical care.',
  },
  {
    q: 'What is the difference between Kati Basti and Greeva Basti?',
    a: 'They use the same method of holding warm medicated oil over the skin, on the lower back (Kati) and the neck (Greeva). Basti on its own is different: an internal therapy given as a medicated enema.',
  },
  {
    q: 'What happens during an Ayurvedic consultation?',
    a: 'The doctor reviews your pain history, medicines, sleep, digestion and routine, assesses your constitution (Prakriti), and gives you a written plan with the cost before any therapy starts. Bring your medicines and any recent reports.',
  },
  {
    q: 'How long does a treatment session take?',
    a: 'Abhyanga sessions at RamaCare usually run about 45 to 75 minutes. The time for Kati Basti, Greeva Basti and Kizhi depends on the therapy and is confirmed when you book.',
  },
  {
    q: 'How many sessions may be recommended?',
    a: 'There is no fixed number. The doctor sets a plan after your assessment and reviews your response at follow-up. Be cautious about any clinic that quotes a fixed package before assessing you.',
  },
  {
    q: 'Is Ayurvedic back pain treatment suitable for everyone?',
    a: 'No. Fever, skin infection or open wounds in the treated area, recent injury, pregnancy, heart, kidney or circulation problems, diabetes with reduced skin sensation and heat sensitivity can all mean a therapy is postponed or adapted. Tell the doctor about your full history.',
  },
  {
    q: 'Can Ayurvedic care be combined with physiotherapy?',
    a: "Often yes, when each practitioner knows what the other has advised. RamaCare's general physician and physiotherapists are in the same building. Never stop prescribed medicine on your own.",
  },
  {
    q: 'When should back pain receive urgent medical attention?',
    a: 'Go to an emergency department if back or leg pain comes with new bladder or bowel control problems, numbness around the groin, genitals or back passage, or leg weakness that is getting worse. See a doctor promptly for back pain with fever, significant injury, unexplained weight loss or a history of cancer.',
  },
  {
    q: 'How can I enquire about treatment at RamaCare Polyclinic?',
    a: 'WhatsApp or call 056 659 7878, call 04 286 2006, or use the online booking form. The clinic is open daily from 10am to 10pm in Jumeirah 1.',
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
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'en-AE',
      isPartOf: { '@type': 'WebSite', '@id': `${SITE}/#website`, url: SITE, name: 'RamaCare Polyclinic' },
      primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
      about: { '@type': 'MedicalCondition', name: 'Back pain' },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      publisher: { '@id': CLINIC_ID },
      lastReviewed: '2026-10-15',
      reviewedBy: {
        '@type': 'Person',
        name: 'Dr. Shamna Keloth Meethal',
        url: `${SITE}/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/`,
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Ayurveda', item: `${SITE}/services/ayurveda-dubai/` },
        { '@type': 'ListItem', position: 3, name: 'Ayurvedic Back Pain Treatment', item: URL },
      ],
    },
    {
      '@type': 'MedicalClinic',
      '@id': CLINIC_ID,
      name: 'RamaCare Polyclinic',
      url: SITE,
      telephone: '+97142862006',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor',
        addressLocality: 'Jumeirah 1, Dubai',
        addressCountry: 'AE',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:00',
          closes: '22:00',
        },
      ],
      hasMap: 'https://maps.google.com/maps?cid=4290863257518002596',
      sameAs: [
        'https://www.facebook.com/RamaCarePolyClinic/',
        'https://www.instagram.com/ramacarepolyclinic/',
        'https://www.linkedin.com/company/ramacarepolyclinics/',
        'https://www.youtube.com/@ramacarepolyclinic',
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

export default function AyurvedicBackPainTreatmentDubai() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/971566597878?text=Hi%20RamaCare%2C%20I%20would%20like%20to%20enquire%20about%20Ayurvedic%20Back%20Pain%20Treatment.', '_blank');
  };

  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={URL} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="RamaCare Polyclinic" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:url" content={URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Ayurvedic doctor listening to a patient describe lower back pain during a consultation" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
        />
      </Head>

      {/* TOP BREADCRUMB */}
      <div className="bg-[#FAF8F5]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-3.5">
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-gray-500">
            <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link href="/services/ayurveda-dubai/" className="hover:text-[#1F5E4B] transition-colors">Ayurveda</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#1F5E4B] font-semibold">Ayurvedic Back Pain Treatment</span>
          </nav>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F5EFE6] to-[#FAF8F5] pt-10 sm:pt-16 pb-16 sm:pb-24">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1F5E4B]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#C9A961]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading & Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#1F5E4B]/10 text-[#1F5E4B] transition-transform duration-300 hover:scale-105">
                  <BadgeCheck className="w-4 h-4" />
                  DHA Licensed Polyclinic #2036418
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#C9A961]/20 text-[#7D5E15] transition-transform duration-300 hover:scale-105">
                  <Sparkles className="w-4 h-4" />
                  Assessment-First Care
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-100/70 text-emerald-800 transition-transform duration-300 hover:scale-105">
                  <MapPin className="w-4 h-4" />
                  Jumeirah 1, Dubai
                </span>
              </div>

              {/* Exact H1 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight leading-[1.15]">
                Ayurvedic Back Pain Treatment in Dubai, Jumeirah 1
              </h1>

              {/* Exact Opening Paragraph */}
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                If you are looking for Ayurvedic back pain treatment in Dubai, it helps to know how care begins at RamaCare Polyclinic: with a consultation, not a massage. Our Ayurveda doctor,{' '}
                <Link
                  href="/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/"
                  className="text-[#1F5E4B] font-semibold hover:underline decoration-1 underline-offset-2"
                >
                  Dr. Shamna Keloth Meethal
                </Link>{' '}
                (BAMS), reviews your pain history, daily routine, and current medicines, then decides whether traditional therapies such as Abhyanga, Kizhi or Kati Basti suit you.
              </p>

              {/* Exact Complementary Care Paragraph */}
              <div className="p-5 rounded-2xl bg-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Ayurveda is offered here as complementary care. It does not replace a medical diagnosis, and it is not a promise of a cure for back pain, neck pain or sciatica.
                </p>
              </div>

              {/* CTA Action Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href="#book-consultation"
                  id="hero-cta-enquire"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#1F5E4B] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#1F5E4B]/20 hover:bg-[#164637] transition-all duration-300 transform hover:scale-[1.03] active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Enquire About an Ayurvedic Consultation</span>
                </a>
                <button
                  onClick={handleWhatsApp}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#25D366] text-white font-bold text-sm sm:text-base shadow-md hover:bg-[#1EBE5D] transition-all duration-300 transform hover:scale-[1.03] active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp 056 659 7878</span>
                </button>
              </div>

              {/* Quick Info Strip */}
              <div className="grid grid-cols-3 gap-3 pt-4 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/60 shadow-xs transition-transform duration-300 hover:scale-105">
                  <Clock className="w-4 h-4 text-[#1F5E4B] shrink-0" />
                  <span>10am – 10pm Daily</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/60 shadow-xs transition-transform duration-300 hover:scale-105">
                  <Users className="w-4 h-4 text-[#1F5E4B] shrink-0" />
                  <span>Same-Gender Therapists</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/60 shadow-xs transition-transform duration-300 hover:scale-105">
                  <Building2 className="w-4 h-4 text-[#1F5E4B] shrink-0" />
                  <span>GP & Physio On Site</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual with Zoom Effect */}
            <div className="lg:col-span-5">
              <div className="group relative rounded-3xl overflow-hidden shadow-2xl bg-white transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
                <div className="relative aspect-4/3 w-full bg-stone-100 overflow-hidden">
                  <Image
                    src="/images/ayurvedic-back-pain-consultation-dubai.webp"
                    alt="Ayurvedic doctor listening to a patient describe lower back pain during a consultation"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"></div>
                  
                  {/* Floating Doctor Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                    <p className="text-xs sm:text-sm font-bold text-[#1F5E4B]">Dr. Shamna Keloth Meethal (BAMS)</p>
                    <p className="text-[11px] sm:text-xs text-gray-600">DHA Licensed Ayurvedic Practitioner • 11+ Years Experience</p>
                  </div>
                </div>

                {/* Exact Caption */}
                <div className="p-4 bg-[#FAF8F5] text-center">
                  <p className="text-xs sm:text-sm font-medium text-stone-700 italic">
                    Every plan starts with a consultation.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Urgent Symptoms Callout Box */}
          <div className="mt-12 rounded-3xl bg-rose-50/95 p-6 sm:p-8 shadow-[0_8px_30px_rgba(244,63,94,0.08)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_12px_40px_rgba(244,63,94,0.14)]">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 hover:scale-110">
                <ShieldAlert className="w-6 h-6 animate-pulse" />
              </div>
              <div className="space-y-2.5 flex-1">
                <h2 className="text-base sm:text-lg font-bold text-rose-950 flex items-center gap-2">
                  <span>Urgent Medical Care Advisory</span>
                </h2>
                <p className="text-rose-900 text-sm sm:text-base leading-relaxed">
                  Before you read on: some symptoms need urgent medical care rather than an Ayurvedic appointment. If you have new difficulty controlling your bladder or bowels, numbness around your groin, genitals or back passage, or leg weakness that is getting worse, go to an emergency department. More detail is in the suitability section below.
                </p>
                <div className="pt-1 flex flex-wrap items-center gap-4 text-xs sm:text-sm">
                  <a
                    href="#suitability"
                    className="font-bold text-rose-800 underline hover:text-rose-950 inline-flex items-center gap-1 transition-transform duration-200 hover:translate-x-0.5"
                  >
                    <span>Read complete suitability guidance</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-rose-400">•</span>
                  <a href="tel:998" className="font-bold text-rose-700 hover:underline">
                    UAE Ambulance: 998
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* QUICK IN-PAGE NAVIGATION */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md shadow-sm hidden md:block">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between overflow-x-auto py-3.5 text-xs sm:text-sm font-semibold text-gray-600 gap-6">
            <a href="#what-is" className="hover:text-[#1F5E4B] transition-all duration-200 hover:scale-105 whitespace-nowrap">What Is It?</a>
            <a href="#types" className="hover:text-[#1F5E4B] transition-all duration-200 hover:scale-105 whitespace-nowrap">Types & Symptoms</a>
            <a href="#therapies" className="hover:text-[#1F5E4B] transition-all duration-200 hover:scale-105 whitespace-nowrap">Ayurvedic Therapies</a>
            <a href="#consultation" className="hover:text-[#1F5E4B] transition-all duration-200 hover:scale-105 whitespace-nowrap">The Consultation</a>
            <a href="#suitability" className="hover:text-[#1F5E4B] transition-all duration-200 hover:scale-105 whitespace-nowrap">Safety & Suitability</a>
            <a href="#alongside" className="hover:text-[#1F5E4B] transition-all duration-200 hover:scale-105 whitespace-nowrap">Integrated Care</a>
            <a href="#polyclinic" className="hover:text-[#1F5E4B] transition-all duration-200 hover:scale-105 whitespace-nowrap">RamaCare Clinic</a>
            <a href="#faq" className="hover:text-[#1F5E4B] transition-all duration-200 hover:scale-105 whitespace-nowrap">FAQs</a>
            <a
              href="#book-consultation"
              className="ml-auto px-4 py-2 rounded-xl bg-[#1F5E4B] text-white hover:bg-[#164637] transition-all duration-200 hover:scale-105 whitespace-nowrap shadow-sm"
            >
              Book AED 200 Assessment
            </a>
          </div>
        </div>
      </div>

      {/* SECTION 1: WHAT IS AYURVEDIC BACK PAIN TREATMENT? */}
      <section id="what-is" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="w-full max-w-[1440px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#7D5E15] uppercase tracking-wider bg-[#C9A961]/20 px-4 py-1.5 rounded-full inline-block">
              Foundational Concepts & Evidence
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              What Is Ayurvedic Back Pain Treatment?
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-10">
            
            {/* Dual Concepts Card: Traditional vs Modern */}
            <div className="lg:col-span-7 bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center font-bold">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A]">Traditional Concepts vs Modern View</h3>
                    <p className="text-xs text-gray-500">Keeping distinct frameworks clear and respected</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    In Ayurveda, pain in the lower back is traditionally called Kati Shoola and neck pain Greeva Shoola. Classical texts link this kind of pain to an imbalance of Vata, the dosha associated with movement, dryness and the nervous system. Modern medicine describes back pain differently, in terms of muscles, ligaments, joints, discs and nerves. The two ways of thinking are not interchangeable, and this page tries to keep them apart.
                  </p>
                  <p>
                    In practice, Ayurvedic care for back pain usually combines a few elements: warm oil or herbal therapies applied to the painful area, therapeutic massage, and guidance on diet and daily routine. Which of these you are offered depends on your assessment, not on a fixed package.
                  </p>
                </div>
              </div>

              {/* Three Pillars Badge Grid */}
              <div className="grid sm:grid-cols-3 gap-4 mt-8 pt-6">
                <div className="bg-white p-4 rounded-2xl text-center shadow-xs transition-transform duration-300 hover:scale-105">
                  <span className="block text-xs sm:text-sm font-bold text-[#1F5E4B]">Warm Oil & Herbs</span>
                  <span className="text-[11px] text-gray-500">Targeted external applications</span>
                </div>
                <div className="bg-white p-4 rounded-2xl text-center shadow-xs transition-transform duration-300 hover:scale-105">
                  <span className="block text-xs sm:text-sm font-bold text-[#1F5E4B]">Therapeutic Touch</span>
                  <span className="text-[11px] text-gray-500">Customised Kerala massage</span>
                </div>
                <div className="bg-white p-4 rounded-2xl text-center shadow-xs transition-transform duration-300 hover:scale-105">
                  <span className="block text-xs sm:text-sm font-bold text-[#1F5E4B]">Diet & Daily Routine</span>
                  <span className="text-[11px] text-gray-500">Personalised Vata balance</span>
                </div>
              </div>
            </div>

            {/* Evidence Status Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#1F5E4B] to-[#144234] text-white p-8 sm:p-10 rounded-3xl shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-[#E6D4AA] text-xs font-bold uppercase tracking-wider mb-4">
                  <Info className="w-4 h-4" />
                  <span>Clinical Perspective</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                  A Word on Evidence
                </h3>
                <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
                  A word on evidence. Some small clinical studies and reviews have looked at therapies such as Kati Basti for low back pain, but their authors themselves call for larger, better-designed trials. For that reason we describe these therapies as traditionally used, and as something that may help some people feel more comfortable, rather than as proven treatments. Results vary from person to person.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A961]" />
                  </div>
                  <p className="text-xs text-stone-300">
                    Care at RamaCare is grounded in clinical realism: no exaggerated percentages, no unsubstantiated claims.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: COMMON TYPES OF BACK PAIN AND RELATED SYMPTOMS */}
      <section id="types" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5]">
        <div className="w-full max-w-[1440px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider bg-[#1F5E4B]/10 px-4 py-1.5 rounded-full inline-block">
              Symptom Differentiation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              Common Types of Back Pain and Related Symptoms
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mb-6"></div>
            
            {/* Exact Intro Paragraph */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Back pain is very common, and most of it is musculoskeletal, meaning it comes from muscles, joints or ligaments. Many episodes ease over a few weeks. The same words, 'back pain', can still describe quite different problems, which is why assessment matters more than the label.
            </p>
          </div>

          {/* 4 Distinct Cards with Smooth Zoom Hover */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
            
            {/* Type 1: Lower-back discomfort */}
            <div className="group bg-white p-7 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.04)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B]">
                    Primary Ayurveda Focus
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-3">
                  Lower-back discomfort
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Aching or stiffness across the lower back, often worse after long periods of sitting or driving. It can build up gradually in people who spend many hours at a desk. This is the type most Ayurvedic lower back pain treatment in Dubai is aimed at.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs">
                <Link href="/services/back-pain-treatment-dubai/" className="text-[#1F5E4B] font-semibold hover:underline inline-flex items-center gap-1">
                  <span>physiotherapy for back pain</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Type 2: Persistent or recurring back pain */}
            <div className="group bg-white p-7 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.04)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#C9A961]/25 text-[#7D5E15]">
                    Medical Review Needed
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-3">
                  Persistent or recurring back pain
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Pain that lasts for weeks or keeps coming back. Persistent pain deserves a medical review in its own right, because the cause is not always muscular.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs">
                <Link href="/services/general-physician-dubai/" className="text-[#1F5E4B] font-semibold hover:underline inline-flex items-center gap-1">
                  <span>general physician review</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Type 3: Neck and upper-back discomfort */}
            <div className="group bg-white p-7 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.04)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-800">
                    Cervical & Trapezius
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-3">
                  Neck and upper-back discomfort
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Tightness around the neck, shoulders and upper back is common with long screen hours. Neck-focused therapies such as Greeva Basti are traditionally used for neck stiffness.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs">
                <Link href="/services/office-neck-treatment-dubai/" className="text-[#1F5E4B] font-semibold hover:underline inline-flex items-center gap-1">
                  <span>office-related neck pain care</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Type 4: Sciatica-type symptoms */}
            <div className="group bg-white p-7 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.04)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900">
                    Assessment First
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-3">
                  Sciatica-type symptoms
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Sciatica describes pain that travels from the lower back or buttock down the leg, sometimes with tingling or numbness. It is usually caused by irritation of a nerve root and is a description, not a diagnosis. Whether Ayurvedic therapy is appropriate for sciatica-type symptoms is a decision for the doctor after assessment, and some people will be advised to see a general physician or physiotherapist first.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs">
                <Link href="/services/physiotherapy-dubai/" className="text-[#1F5E4B] font-semibold hover:underline inline-flex items-center gap-1">
                  <span>physiotherapy at RamaCare</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

          {/* Exact Concluding Note */}
          <div className="p-5 rounded-2xl bg-[#F4EFE6] text-center max-w-3xl mx-auto shadow-xs">
            <p className="text-xs sm:text-sm font-medium text-stone-800">
              Two people with the same symptom do not necessarily have the same cause, and a web page cannot tell you which applies to you.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 3: AYURVEDIC THERAPIES THAT MAY BE CONSIDERED FOR BACK PAIN */}
      <section id="therapies" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="w-full max-w-[1440px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider bg-[#1F5E4B]/10 px-4 py-1.5 rounded-full inline-block">
              Prescribed After Assessment
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              Ayurvedic Therapies That May Be Considered for Back Pain
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mb-6"></div>
            
            {/* Exact Intro Paragraph */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              The therapies below are ones RamaCare lists in its Ayurveda department. None is given automatically. The doctor prescribes them after your consultation, and a Kerala-trained therapist of your own gender provides them.
            </p>
          </div>

          {/* Therapies Container */}
          <div className="space-y-10">
            
            {/* Therapy 1: Kati Basti (Featured Banner Card with Zoom) */}
            <div className="group bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#1F5E4B] text-white">
                      External Therapy
                    </span>
                    <span className="text-xs text-gray-500 font-medium">Lower Back Oil Retention</span>
                  </div>
                  
                  {/* Exact H3 */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                    Kati Basti
                  </h3>

                  {/* Exact Description */}
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Kati means lower back. In Kati Basti, a ring of dough is placed on the lower back and filled with warm medicated oil, which stays in place for a period of time. It is an external therapy traditionally used for lower-back stiffness, and it is different from Basti, the Ayurvedic enema. Because it involves sustained warmth on the skin, it is not suitable if you have a fever, a skin infection or an open wound in the area, or reduced sensitivity to heat.
                  </p>

                  <div className="p-4 rounded-2xl bg-amber-50 text-xs sm:text-sm text-amber-900 flex items-center gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>Contraindications: Fever, active skin infections, open wounds, heat insensitivity.</span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 lg:p-10">
                  <div className="relative aspect-3/2 rounded-2xl overflow-hidden shadow-md bg-stone-200">
                    <Image
                      src="/images/kati-basti-ayurvedic-therapy-dubai.webp"
                      alt="Warm medicated oil held in a dough ring over a patient's lower back during Kati Basti"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                  </div>
                  <p className="text-center text-xs text-gray-500 mt-2.5 italic">
                    Kati Basti: warm oil held over the lower back (illustrative image).
                  </p>
                </div>
              </div>
            </div>

            {/* Grid for Greeva Basti, Abhyanga, Pizhichil */}
            <div className="grid md:grid-cols-3 gap-6">
              
              {/* Therapy 2: Greeva Basti */}
              <div className="group bg-[#FAF8F5] p-8 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#1F5E4B] flex items-center justify-center font-bold mb-5 transition-transform duration-300 group-hover:scale-110">
                    <Thermometer className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-3">
                    Greeva Basti
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    The same oil-retention method applied over the neck, traditionally used for neck stiffness.
                  </p>
                </div>
                <div className="mt-6 pt-4 text-xs text-gray-500">
                  Target area: Cervical spine & neck muscles
                </div>
              </div>

              {/* Therapy 3: Abhyanga */}
              <div className="group bg-[#FAF8F5] p-8 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-[#7D5E15] flex items-center justify-center font-bold mb-5 transition-transform duration-300 group-hover:scale-110">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-3">
                    Abhyanga
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Abhyanga is a therapeutic massage with warm medicated oils chosen after the doctor's consultation. Sessions at RamaCare usually run about 45 to 75 minutes. People often seek it for muscle tension in the back and neck. It is best understood as supportive care for comfort and relaxation.
                  </p>
                </div>
                <div className="mt-6 pt-4 text-xs">
                  <Link href="/services/abhyanga-massage-dubai/" className="text-[#1F5E4B] font-semibold hover:underline inline-flex items-center gap-1">
                    <span>Abhyanga massage at RamaCare</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Therapy 5: Pizhichil */}
              <div className="group bg-[#FAF8F5] p-8 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-100 text-[#144930] flex items-center justify-center font-bold mb-5 transition-transform duration-300 group-hover:scale-110">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-3">
                    Pizhichil
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Pizhichil is listed among RamaCare's Ayurvedic therapies. It involves warm medicated oil poured over the body while the therapist massages. Your doctor will tell you whether it is part of your plan.
                  </p>
                </div>
                <div className="mt-6 pt-4 text-xs text-gray-500">
                  Continuous warm oil stream & simultaneous massage
                </div>
              </div>

            </div>

            {/* Therapy 4: Kizhi (Herbal Pouch) Therapy (Featured Banner Card with Zoom) */}
            <div className="group bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-5 p-6 lg:p-10 order-2 lg:order-1">
                  <div className="relative aspect-3/2 rounded-2xl overflow-hidden shadow-md bg-stone-200">
                    <Image
                      src="/images/kizhi-herbal-pouch-therapy-back-dubai.webp"
                      alt="Therapist pressing a warm herbal pouch along a patient's upper back during Kizhi therapy"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                  </div>
                  <p className="text-center text-xs text-gray-500 mt-2.5 italic">
                    Kizhi uses warm herbal pouches applied with medicated oil.
                  </p>
                </div>

                <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 space-y-4 order-1 lg:order-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#7D5E15] text-white">
                      Herbal Pouch Therapy
                    </span>
                    <span className="text-xs text-gray-500 font-medium">Podi, Ela & Njavara Kizhi</span>
                  </div>

                  {/* Exact H3 */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                    Kizhi (herbal pouch) therapy
                  </h3>

                  {/* Exact Description */}
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Kizhi uses warm pouches filled with herbal powder (Podi Kizhi), fresh leaves (Elakizhi) or cooked medicinal rice (Njavarakizhi), applied with medicated oil. It is traditionally used for muscle and joint stiffness. Modern research on Kizhi is limited, so keep expectations modest, and tell your therapist straight away if a pouch feels too hot.
                  </p>

                  <div className="pt-2">
                    <Link
                      href="/services/kizhi-therapy-dubai/"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1F5E4B] hover:underline"
                    >
                      <span>herbal pouch (Kizhi) therapy</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

            {/* Therapy 6: A note on Basti (Disambiguation Card) */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F5EFE6] shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.015]">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-[#1F5E4B] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Info className="w-6 h-6" />
                </div>
                <div className="space-y-2.5">
                  <h3 className="text-xl font-bold text-[#1A1A1A]">
                    A note on Basti (enema)
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Basti is a different, internal therapy and is not the same as Kati Basti. RamaCare's doctor may consider it for some Vata-related problems, including lower back stiffness. It is not suitable for everyone, and it is described on its own page.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/services/basti-therapy-dubai/"
                      className="text-[#1F5E4B] font-bold text-xs sm:text-sm underline hover:text-[#164637] inline-flex items-center gap-1"
                    >
                      <span>Basti, the Ayurvedic enema</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: WHAT HAPPENS DURING AN AYURVEDIC CONSULTATION? */}
      <section id="consultation" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5]">
        <div className="w-full max-w-[1440px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider bg-[#1F5E4B]/10 px-4 py-1.5 rounded-full inline-block">
              Your Patient Journey
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              What Happens During an Ayurvedic Consultation?
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto"></div>
          </div>

          {/* 3 Step Interactive Process Cards with Smooth Hover Zoom */}
          <div className="grid md:grid-cols-3 gap-7 mb-12">
            
            {/* Step 1 */}
            <div className="group bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
              <span className="w-10 h-10 rounded-2xl bg-[#1F5E4B] text-white flex items-center justify-center text-sm font-bold mb-5 transition-transform duration-300 group-hover:scale-110">
                01
              </span>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">
                45–60 Minute Comprehensive Review
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Your first visit is a 45 to 60 minute consultation with Dr. Shamna. She asks about the pain itself: when it started, what makes it better or worse, previous injuries and any scans. She also asks about sleep, digestion, daily routine, current medicines and other health conditions, and assesses your constitution (Prakriti) as part of the Ayurvedic review.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
              <span className="w-10 h-10 rounded-2xl bg-[#C9A961] text-stone-900 flex items-center justify-center text-sm font-bold mb-5 transition-transform duration-300 group-hover:scale-110">
                02
              </span>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">
                Written Plan & Polyclinic Coordination
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                You leave with a written plan that covers the therapies she recommends, diet and routine guidance, and the cost, which is confirmed in writing before any therapy begins. If she thinks you need a medical check or physiotherapy first, she can refer you to colleagues in the same building. A follow-up review lets the doctor adjust or stop the plan.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
              <span className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-sm font-bold mb-5 transition-transform duration-300 group-hover:scale-110">
                03
              </span>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">
                Preparation & Transparent Fee
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Please bring a list of your medicines and supplements and any recent scans or test reports. The first consultation fee is AED 200.
              </p>
            </div>

          </div>

          {/* Quick Doctor Profile Card */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:scale-[1.015]">
            <div className="flex flex-col sm:flex-row items-center gap-7">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden shrink-0 shadow-md">
                <Image
                  src="/images/Dr Shamna Keloth Meethal.jpeg"
                  alt="Dr. Shamna Keloth Meethal, Ayurvedic doctor at RamaCare Polyclinic"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 text-center sm:text-left flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2.5">
                  <h4 className="text-xl sm:text-2xl font-bold text-[#1A1A1A]">Dr. Shamna Keloth Meethal (BAMS)</h4>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] w-fit mx-auto sm:mx-0">
                    DHA Licensed Ayurvedic Doctor
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  11+ years of clinical experience in Kerala and UAE classical Ayurveda. Focus on musculoskeletal comfort, dosha analysis, and patient education.
                </p>
                <div className="pt-2">
                  <Link
                    href="/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/"
                    className="text-xs sm:text-sm font-bold text-[#1F5E4B] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Dr. Shamna Keloth Meethal</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
              <div className="shrink-0">
                <a
                  href="#book-consultation"
                  className="inline-block px-6 py-3.5 rounded-2xl bg-[#1F5E4B] text-white font-bold text-sm shadow-md hover:bg-[#164637] transition-all duration-300 hover:scale-105"
                >
                  Book Consultation (AED 200)
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: IS AYURVEDIC TREATMENT SUITABLE FOR EVERYONE? (SAFETY GRID) */}
      <section id="suitability" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="w-full max-w-[1440px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wider bg-rose-100/80 px-4 py-1.5 rounded-full inline-block">
              Safety First
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              Is Ayurvedic Treatment Suitable for Everyone?
            </h2>
            <div className="w-16 h-1 bg-rose-600 rounded-full mx-auto mb-4"></div>
            
            {/* Exact Lead */}
            <p className="text-gray-700 text-base sm:text-lg font-medium leading-relaxed">
              No. Suitability depends on a proper assessment, and some situations need conventional medical care first.
            </p>
          </div>

          {/* 3 Tier Wide Grid with Hover Zoom */}
          <div className="grid lg:grid-cols-3 gap-7 mb-10">
            
            {/* Tier 1: Emergency Department (Red Alert) */}
            <div className="group rounded-3xl bg-rose-50/90 p-8 shadow-[0_8px_30px_rgba(244,63,94,0.06)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(244,63,94,0.12)] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-2xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-rose-950">
                  Go to an emergency department urgently (UAE ambulance: 998) if back or leg pain comes with:
                </h3>
                <ul className="space-y-2.5 text-rose-900 text-sm sm:text-base">
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-rose-600 mt-2 shrink-0"></span>
                    <span>new difficulty controlling your bladder or bowels, or difficulty passing urine</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-rose-600 mt-2 shrink-0"></span>
                    <span>numbness or pins and needles around the groin, genitals, inner thighs or back passage</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-rose-600 mt-2 shrink-0"></span>
                    <span>leg weakness that is getting worse, or that affects both legs</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-rose-200/60">
                <a href="tel:998" className="text-xs font-bold text-rose-800 hover:underline">
                  Emergency: Call 998 &rarr;
                </a>
              </div>
            </div>

            {/* Tier 2: See a Doctor Promptly (Amber Alert) */}
            <div className="group rounded-3xl bg-amber-50/90 p-8 shadow-[0_8px_30px_rgba(245,158,11,0.06)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(245,158,11,0.12)] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-amber-950">
                  See a doctor promptly, before starting any therapy, if back pain comes with:
                </h3>
                <ul className="space-y-2.5 text-amber-950 text-sm sm:text-base">
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                    <span>fever</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                    <span>a recent fall, accident or other significant injury</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                    <span>unexplained weight loss</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                    <span>a history of cancer, or sudden severe pain that does not ease with rest or simple pain relief</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-amber-200/60">
                <Link href="/services/general-physician-dubai/" className="text-xs font-bold text-amber-900 hover:underline">
                  general physician review &rarr;
                </Link>
              </div>
            </div>

            {/* Tier 3: Therapies Postponed or Adapted */}
            <div className="group rounded-3xl bg-[#FAF8F5] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-2xl bg-[#1F5E4B] text-white flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Info className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A]">
                  When Therapies May Be Postponed or Adapted
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Therapies may be postponed or adapted if you have: a fever or acute illness; a skin infection or open wound in the treated area; a recent injury or swelling; pregnancy; heart, kidney or circulation problems; diabetes with reduced skin sensation; sensitivity to heat; or allergies to herbs or oils. Tell the doctor about all of these at your consultation.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-stone-200/60 text-xs text-gray-500">
                Personalized plan adjustments at consultation
              </div>
            </div>

          </div>

          {/* Exact Concluding Disclaimer */}
          <div className="p-5 rounded-2xl bg-stone-100/90 text-center max-w-4xl mx-auto">
            <p className="text-xs sm:text-sm font-semibold text-stone-700">
              This page cannot diagnose you, and Ayurvedic care should never delay medical evaluation of symptoms like the ones above.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 6: AYURVEDIC CARE ALONGSIDE PHYSIOTHERAPY OR CONVENTIONAL MEDICAL CARE */}
      <section id="alongside" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5]">
        <div className="w-full max-w-[1440px] mx-auto">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:scale-[1.01]">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-8 space-y-6">
                <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider bg-[#1F5E4B]/10 px-4 py-1.5 rounded-full inline-block">
                  Multidisciplinary Polyclinic
                </span>

                {/* Exact H2 */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                  Ayurvedic Care Alongside Physiotherapy or Conventional Medical Care
                </h2>

                {/* Exact Paragraph 1 */}
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Ayurvedic care at RamaCare sits alongside conventional care, not in place of it. RamaCare is a polyclinic, with a general physician and physiotherapists in the same building. Staying active and, where advised, doing physiotherapy exercises are mainstays of conventional advice for most back pain, and a physiotherapist can assess movement and strength in ways an Ayurvedic consultation does not.
                </p>

                {/* Exact Paragraph 2 */}
                <div className="p-5 rounded-2xl bg-amber-50/90 text-amber-950 text-sm sm:text-base leading-relaxed font-medium shadow-xs">
                  If you already take prescribed medicines or see a physiotherapist, tell the Ayurveda doctor, and tell your other clinicians about any Ayurvedic therapy you start. Never stop prescribed medicine on your own.
                </div>

                <div className="flex flex-wrap items-center gap-5 pt-2">
                  <Link
                    href="/services/physiotherapy-dubai/"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1F5E4B] hover:underline"
                  >
                    <span>physiotherapy at RamaCare</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <span className="text-gray-300">•</span>
                  <Link
                    href="/services/general-physician-dubai/"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1F5E4B] hover:underline"
                  >
                    <span>general physician</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Polyclinic Value Proposition Callout */}
              <div className="lg:col-span-4 bg-[#FAF8F5] p-8 rounded-3xl space-y-4 shadow-sm transition-transform duration-300 hover:scale-105">
                <h3 className="font-bold text-sm text-[#1A1A1A] uppercase tracking-wider text-center">
                  Why Polyclinic Co-Location Matters
                </h3>
                <div className="space-y-3.5 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" />
                    <span>Cross-department referrals without travelling across town</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" />
                    <span>Red-flag screening available immediately on site</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" />
                    <span>Rehabilitation + Ayurvedic soothing comfort under one coordinated roof</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 7: AYURVEDIC BACK PAIN TREATMENT AT RAMACARE POLYCLINIC */}
      <section id="polyclinic" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="w-full max-w-[1440px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider bg-[#1F5E4B]/10 px-4 py-1.5 rounded-full inline-block">
              Jumeirah 1 Facility
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              Ayurvedic Back Pain Treatment at RamaCare Polyclinic
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-12">
            
            {/* Facility Details & Team */}
            <div className="lg:col-span-7 bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.015]">
              <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                <p>
                  RamaCare Polyclinic is a DHA-licensed facility (licence 2036418) at 12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai. It is open every day from 10am to 10pm. Walk-ins are accepted, but booking ahead secures your therapist.
                </p>
                <p>
                  Your consultation is with Dr. Shamna Keloth Meethal (BAMS, 11+ years of experience, DHA licensed). Therapies are given by Syamkumar Sasidharan for male patients and Mariya Thayyil Muhammed for female patients, both Kerala-trained and DHA licensed. The team speaks English, Malayalam and Hindi.
                </p>
                <p>
                  Therapy costs depend on which therapies are recommended and how many sessions you need, and are confirmed in writing before treatment starts. Insurance is on a reimbursement basis, and itemised invoices are provided.
                </p>
                
                {/* Contact text */}
                <div className="p-5 rounded-2xl bg-white shadow-xs">
                  <p className="font-semibold text-stone-900 text-sm sm:text-base">
                    To enquire: WhatsApp or call 056 659 7878, call 04 286 2006, or use the online booking form.
                  </p>
                </div>
              </div>

              {/* Exact CTA Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#book-consultation"
                  id="polyclinic-cta-contact"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#1F5E4B] text-white font-bold text-sm sm:text-base shadow-lg hover:bg-[#164637] transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Contact RamaCare Polyclinic</span>
                </a>
                <button
                  onClick={handleWhatsApp}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#25D366] text-white font-bold text-sm sm:text-base shadow-md hover:bg-[#1EBE5D] transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>056 659 7878</span>
                </button>
              </div>
            </div>

            {/* Clinic Authentic Photo (Image 4 from Image Plan with Hover Zoom) */}
            <div className="group lg:col-span-5 flex flex-col">
              <div className="relative aspect-3/2 lg:aspect-auto lg:flex-1 rounded-3xl overflow-hidden shadow-xl bg-stone-200 transition-all duration-500 hover:shadow-2xl">
                <Image
                  src="/images/ayurvedic-treatment-room-jumeirah.webp"
                  alt="Ayurveda treatment room at RamaCare Polyclinic in Jumeirah 1"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-base font-bold">Ayurveda Therapy Room</p>
                  <p className="text-xs text-stone-200">RamaCare Polyclinic • Jumeirah Terrace Building, Ground Floor</p>
                </div>
              </div>
              <p className="text-center text-xs text-gray-500 mt-2.5 italic">
                Ayurveda treatment room at RamaCare Polyclinic in Jumeirah 1
              </p>
            </div>

          </div>

          {/* Clinical Staff Grid with Hover Zoom */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group bg-[#FAF8F5] p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] text-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <p className="font-bold text-stone-900 text-base">Dr. Shamna Keloth Meethal</p>
              <p className="text-xs text-[#1F5E4B] font-semibold mt-1">BAMS • Ayurveda Doctor</p>
              <p className="text-xs text-gray-500 mt-1.5">11+ Years Experience • Consultation & Prescriptions</p>
            </div>
            <div className="group bg-[#FAF8F5] p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] text-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <p className="font-bold text-stone-900 text-base">Syamkumar Sasidharan</p>
              <p className="text-xs text-[#1F5E4B] font-semibold mt-1">DHA Licensed Ayurvedic Therapist</p>
              <p className="text-xs text-gray-500 mt-1.5">Kerala-Trained • Male Patient Therapies</p>
            </div>
            <div className="group bg-[#FAF8F5] p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] text-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <p className="font-bold text-stone-900 text-base">Mariya Thayyil Muhammed</p>
              <p className="text-xs text-[#1F5E4B] font-semibold mt-1">DHA Licensed Ayurvedic Therapist</p>
              <p className="text-xs text-gray-500 mt-1.5">Kerala-Trained • Female Patient Therapies</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 8: FREQUENTLY ASKED QUESTIONS (2-COLUMN WIDE GRID) */}
      <section id="faq" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5]">
        <div className="w-full max-w-[1440px] mx-auto">
          
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider bg-[#1F5E4B]/10 px-4 py-1.5 rounded-full inline-block">
              Have Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Clear, transparent answers to common questions about Ayurvedic back pain care in Dubai.
            </p>
          </div>

          {/* Wide 2-Column Grid on Large Screens */}
          <div className="grid lg:grid-cols-2 gap-5 items-start">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    id={`faq-btn-${idx}`}
                    aria-expanded={isOpen}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-stone-50/60 transition-colors"
                  >
                    <span className="font-bold text-sm sm:text-base text-[#1A1A1A]">
                      {idx + 1}. {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#1F5E4B] text-white' : 'bg-stone-100 text-stone-500'}`}>
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
        pageSlug="ayurvedic-back-pain-treatment-dubai"
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
            <p className="text-xs font-bold text-[#1A1A1A]">Ayurvedic Back Pain</p>
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
              href="#book-consultation"
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
