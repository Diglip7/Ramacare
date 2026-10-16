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
  ArrowRight,
  Search,
  Microscope,
  BookOpen,
  Ban,
  AlertCircle,
  XCircle,
  Scale
} from 'lucide-react';

const SITE = 'https://ramacarepolyclinic.ae';
const PATH = '/services/leech-therapy-dubai/';
const URL = `${SITE}${PATH}`;
const TITLE = 'Leech Therapy in Dubai | Information & Safety | RamaCare';
const DESCRIPTION =
  'Understand leech therapy, its Ayurvedic roots, evidence limits and risks. Contact RamaCare Polyclinic in Jumeirah 1, Dubai, to ask about available services.';
const OG_IMAGE = `${SITE}/images/leech-therapy-consultation-dubai.jpg`;
const DATE_PUBLISHED = '2026-10-15';
const DATE_MODIFIED = '2026-10-15';

export const faqs = [
  {
    q: 'What is leech therapy?',
    a: 'It is the controlled use of medicinal leeches, which attach to the skin, draw a small amount of blood and release substances that slow clotting. It is used in traditional Ayurveda and in selected hospital situations.',
  },
  {
    q: 'What is Jalaukavacharana in Ayurveda?',
    a: 'It is the traditional Ayurvedic procedure of applying leeches, classed as a form of bloodletting and described in early classical texts such as the Sushruta Samhita.',
    sources: [
      { id: 'S9', num: 9, title: 'Whose Life is Water, Fluid Bodies in Ayurvedic Leech Therapy (ANU Press)' },
      { id: 'S11', num: 11, title: 'Fundamentals of Jalaukavacharan (Phytojournal 2024)' },
    ],
  },
  {
    q: 'What is medicinal leech therapy used for in modern medicine?',
    a: 'Its recognised use is relieving venous congestion in reconstructive or microsurgical cases, such as grafted or reattached tissue, under hospital supervision.',
    sources: [
      { id: 'S2', num: 2, title: 'PMC: Practical use of medicinal leeches in reconstructive plastic surgery' },
      { id: 'S3', num: 3, title: 'US FDA 2004 Medical Device clearance' },
    ],
  },
  {
    q: 'Is leech therapy proven for every condition?',
    a: 'No. The recognised surgical use does not extend to other conditions, and for many traditional uses the evidence is limited and still developing.',
    sources: [
      { id: 'S7', num: 7, title: 'Hirudotherapy and Jalaukavacharana review (Zenodo)' },
    ],
  },
  {
    q: 'Can leech therapy treat arthritis or joint pain?',
    a: 'Some small studies have looked at osteoarthritis, but the evidence is not strong enough to promise relief. A clinician can discuss better-established options with you.',
    sources: [
      { id: 'S5', num: 5, title: 'PMC: Leech therapy review, applications and complications' },
    ],
  },
  {
    q: 'What are the main risks, and can it cause infection?',
    a: 'Prolonged bleeding and infection are the main concerns, including infection with Aeromonas bacteria carried by leeches. Allergic reactions and skin irritation can also occur.',
    sources: [
      { id: 'S1', num: 1, title: 'NHS patient leaflet: Expected oozing and aftercare' },
      { id: 'S4', num: 4, title: 'PMC: Microbiota of Hirudo and postoperative infection' },
      { id: 'S5', num: 5, title: 'PMC literature review on adverse events' },
    ],
  },
  {
    q: 'Who should avoid leech therapy, and is it suitable with blood thinners?',
    a: 'People with anaemia, bleeding disorders, weakened immunity or an active infection need specialist advice. Anyone taking blood-thinning medicine must tell the clinician, because leech saliva also affects clotting. Do not stop your medicine without medical guidance.',
  },
  {
    q: 'Is leech therapy available at RamaCare Polyclinic in Dubai?',
    a: 'Availability has not been confirmed on this page. Please contact the clinic to ask what is currently offered.',
  },
  {
    q: 'Should leech therapy be done at home?',
    a: 'No. Home use risks uncontrolled bleeding, infection and unsuitable sourcing. It should only take place under qualified supervision.',
  },
  {
    q: 'How can I enquire about leech therapy in Jumeirah 1?',
    a: 'Call +971 4 286 2006 or message +971 56 659 7878 on WhatsApp. Bring a list of your medicines and any relevant medical reports.',
  },
];

const references = [
  { id: 'S1', title: 'NHS patient leaflet, Leech Therapy', url: 'https://www.hey.nhs.uk/patient-leaflet/leech-therapy/' },
  { id: 'S2', title: 'Practical use of medicinal leeches in reconstructive plastic surgery (PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3933224/' },
  { id: 'S3', title: 'FDA Consumer, Sept-Oct 2004, clearance of leeches as medical devices (abstract)', url: 'https://digitalcommons.unl.edu/manterlibrary/125' },
  { id: 'S4', title: 'Digestive-tract microbiota of Hirudo orientalis, Aeromonas and postoperative infection (PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2565982/' },
  { id: 'S5', title: 'Leech therapy review, applications and complications (PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4717768/' },
  { id: 'S6', title: 'Applications of leech therapy in medicine, systematic review (Frontiers in Medicine, 2024)', url: 'https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2024.1417041/pdf' },
  { id: 'S7', title: 'Hirudotherapy, medicinal leech therapy and Jalaukavacharana review (Zenodo record)', url: 'https://zenodo.org/records/19595679' },
  { id: 'S8', title: 'Brooks, The Vascularity of Ayurvedic Leech Therapy (PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8048440/' },
  { id: 'S9', title: 'Whose Life is Water, Fluid Bodies in Ayurvedic Leech Therapy (ANU Press)', url: 'https://press.anu.edu.au/downloads/press/n7034/html/04-whose-life/index.html' },
  { id: 'S10', title: 'Singh and Rajoria, Medical leech therapy in Ayurveda and biomedicine, 2020', url: 'https://agris.fao.org/search/fr/records/65df1e754c5aef494fdff4b2' },
  { id: 'S11', title: 'Fundamentals of Jalaukavacharan (Phytojournal, 2024)', url: 'https://www.phytojournal.com/archives/2024/vol13issue1/PartD/13-1-49-395.pdf' },
  { id: 'S12', title: 'Clinical Significance of Leech Therapy in Indian Medicine (SAGE)', url: 'https://journals.sagepub.com/doi/10.1177/2156587212466675' },
  { id: 'S13', title: 'Onmanorama, Jalaukavacharana feature, March 2025', url: 'https://onmanorama.com/lifestyle/health/2025/03/31/jalaukavacharana-leech-therapy-ayurveda.html' },
  { id: 'S14', title: 'RamaCare Ayurveda hub (fetched live)', url: 'https://ramacarepolyclinic.ae/services/ayurveda-dubai/' },
  { id: 'S15', title: 'Competitor and context pages: zavis.ai, gacrewa, medicalnewstoday', url: 'https://gacrewa.org.in/?p=9852' },
  { id: 'S16', title: 'Pharmacy Times, Leeches Approved as Medical Devices', url: 'https://www.pharmacytimes.com/publications/issue/2005/2005-11/2005-11-5004' },
  { id: 'S17', title: 'Regulatory history of medicinal leeches and maggots as devices (RAPS)', url: 'https://library.raps.org/SampleBook/25' },
];

const CLINIC_ID = `${SITE}/#clinic`;

function Cite({ id, num, title, onClick }) {
  return (
    <sup className="inline-block mx-0.5 align-super text-[10px] sm:text-[11px] font-bold leading-none select-none">
      <a
        href={`#ref-${id}`}
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            onClick(id);
          }
        }}
        title={title}
        className="px-1.5 py-0.5 rounded text-[#1F5E4B] bg-[#1F5E4B]/10 hover:bg-[#1F5E4B] hover:text-white transition-colors duration-200 inline-flex items-center cursor-pointer"
        aria-label={`Citation ${num}: ${title}`}
      >
        [{num}]
      </a>
    </sup>
  );
}

export default function LeechTherapyPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [showReferences, setShowReferences] = useState(false);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleCiteClick = (id) => {
    setShowReferences(true);
    setTimeout(() => {
      const el = document.getElementById(`ref-${id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-2', 'ring-[#1F5E4B]', 'bg-emerald-50');
        setTimeout(() => {
          el.classList.remove('ring-2', 'ring-[#1F5E4B]', 'bg-emerald-50');
        }, 2500);
      }
    }, 120);
  };

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/971566597878?text=Hi%20RamaCare%2C%20I%20would%20like%20to%20enquire%20about%20Leech%20Therapy%20and%20Ayurvedic%20consultations.',
      '_blank'
    );
  };

  const handleCall = () => {
    window.location.href = 'tel:+97142862006';
  };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': `${URL}#webpage`,
        url: URL,
        name: 'Leech Therapy in Dubai, Jumeirah 1',
        description: DESCRIPTION,
        inLanguage: 'en-AE',
        isPartOf: { '@id': `${SITE}/#website` },
        about: {
          '@type': 'MedicalTherapy',
          name: 'Leech therapy',
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: OG_IMAGE,
        },
        publisher: { '@id': CLINIC_ID },
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
        lastReviewed: '2026-10-15',
        reviewedBy: {
          '@type': 'Person',
          name: 'Dr. Shamna Keloth Meethal',
          url: `${SITE}/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/`,
        },
        breadcrumb: { '@id': `${URL}#breadcrumb` },
      },
      {
        '@type': 'MedicalClinic',
        '@id': CLINIC_ID,
        name: 'RamaCare Polyclinic',
        url: `${SITE}/`,
        telephone: '+97142862006',
        email: 'query@ramacarepolyclinic.com',
        image: `${SITE}/images/ayurveda-therapy-room-jumeirah-1.jpg`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor',
          addressLocality: 'Jumeirah 1',
          addressRegion: 'Dubai',
          addressCountry: 'AE',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '10:00',
          closes: '22:00',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: '+971566597878',
          availableLanguage: ['English', 'Malayalam', 'Hindi'],
        },
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
            name: 'Ayurveda in Dubai',
            item: `${SITE}/services/ayurveda-dubai/`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Leech Therapy in Dubai',
            item: URL,
          },
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

  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={URL} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
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
        <meta property="og:image:alt" content="Doctor and adult patient discussing a treatment plan at a desk" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content="Doctor and adult patient discussing a treatment plan at a desk" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      {/* TOP CLINICAL STATUS BANNER — TRANSPARENCY NOTICE */}
      <div
        style={{ backgroundColor: '#143D31', color: '#FAF8F5' }}
        className="py-3.5 px-4 sm:px-8 text-xs sm:text-sm shadow-sm"
      >
        <div className="w-full max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C9A961] animate-pulse"></span>
            <span className="font-semibold text-white">Clinical &amp; Evidence Briefing:</span>
            <span style={{ color: '#E2E8F0' }}>Jalaukavacharana in Ayurveda vs. Hospital Microsurgery</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span style={{ color: '#E5C985' }} className="font-bold">RamaCare Polyclinic • Jumeirah 1</span>
            <span style={{ color: '#64748B' }} className="hidden md:inline">|</span>
            <a href="#availability" style={{ color: '#FAF8F5' }} className="hover:underline hidden md:inline font-medium">
              Check Service Availability Status
            </a>
          </div>
        </div>
      </div>

      {/* HERO SECTION — EDITORIAL MASTHEAD DESIGN */}
      <section
        style={{ backgroundColor: '#FAF8F5' }}
        className="relative pt-10 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-12 overflow-hidden"
      >
        
        {/* Subtle Decorative Background Glow Elements */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-emerald-100/30 blur-[130px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-[#C9A961]/15 blur-[100px] rounded-full pointer-events-none -z-10"></div>

        <div className="w-full max-w-[1440px] mx-auto">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold text-stone-600">
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
                Leech Therapy in Dubai
              </li>
            </ol>
          </nav>

          {/* Central Editorial Masthead Header */}
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
            
            <div
              style={{ backgroundColor: 'rgba(31, 94, 75, 0.1)', color: '#1F5E4B' }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-2xs"
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Evidence Appraisal &amp; Ayurvedic Foundations</span>
            </div>

            {/* Exact H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
              Leech Therapy in Dubai, Jumeirah&nbsp;1
            </h1>

            <div style={{ backgroundColor: '#1F5E4B' }} className="w-20 h-1 rounded-full mx-auto"></div>

            {/* Exact Paragraph 1 */}
            <p className="text-stone-800 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
              Leech therapy is the controlled use of medicinal leeches: freshwater worms that attach to the skin, take a small amount of blood and release substances that keep the blood from clotting while they feed. If you are searching for leech therapy in Dubai, it helps to know from the start that the phrase covers two quite different things.
            </p>
          </div>

          {/* Dual Perspective Highlight Box */}
          <div
            style={{ backgroundColor: '#FFFFFF' }}
            className="rounded-3xl p-8 sm:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)] mb-12 transition-all duration-300 hover:scale-[1.01]"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                
                {/* Exact Paragraph 2 with Interactive Citations */}
                <p className="text-stone-900 text-sm sm:text-base lg:text-lg leading-relaxed">
                  In traditional Ayurveda, the practice is called Jalaukavacharana and is described in classical texts dating to the early first millennium
                  <Cite id="S9" num={9} title="Sushruta Samhita & Classical Ayurvedic literature (ANU Press)" onClick={handleCiteClick} />.
                  In modern hospitals, medicinal leeches are used in a narrow set of surgical situations, mainly to relieve blood congestion in reattached or reconstructed tissue
                  <Cite id="S2" num={2} title="PMC: Practical use of medicinal leeches in reconstructive plastic surgery" onClick={handleCiteClick} />
                  <Cite id="S3" num={3} title="US FDA 2004 Medical Device clearance" onClick={handleCiteClick} />.
                  These are different contexts with different purposes and different levels of evidence. Support for one does not prove the other, and neither makes leech therapy a general answer for pain, skin disease or &quot;detox&quot;.
                </p>

                {/* Exact Paragraph 3 */}
                <p className="text-stone-800 text-sm sm:text-base leading-relaxed">
                  This page explains what leech therapy involves, what the evidence does and does not support, the risks that deserve to be taken seriously, and who should avoid it. RamaCare Polyclinic is a DHA-licensed clinic in Jumeirah 1 with an Ayurveda department, and you are welcome to contact the team to ask whether leech-based treatment is available and whether it could be appropriate for you. This page does not present it as a confirmed service.
                </p>

                {/* Key Insight Quick Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                  <div style={{ backgroundColor: '#F8F5EE' }} className="p-3.5 rounded-2xl text-center shadow-2xs">
                    <span className="block text-xs font-bold text-[#1F5E4B]">Classical Origin</span>
                    <span className="text-[11px] text-stone-600 font-medium">1st Millennium Texts</span>
                  </div>
                  <div style={{ backgroundColor: '#F8F5EE' }} className="p-3.5 rounded-2xl text-center shadow-2xs">
                    <span className="block text-xs font-bold text-[#1F5E4B]">FDA 2004 Cleared</span>
                    <span className="text-[11px] text-stone-600 font-medium">Surgical Tissue Flaps</span>
                  </div>
                  <div style={{ backgroundColor: '#F8F5EE' }} className="p-3.5 rounded-2xl text-center shadow-2xs">
                    <span className="block text-xs font-bold text-amber-800">Strict Bio-Waste</span>
                    <span className="text-[11px] text-stone-600 font-medium">Single-Use Regulated</span>
                  </div>
                  <div style={{ backgroundColor: '#F8F5EE' }} className="p-3.5 rounded-2xl text-center shadow-2xs">
                    <span className="block text-xs font-bold text-rose-800">No Detox Claims</span>
                    <span className="text-[11px] text-stone-600 font-medium">Evidence Demarcated</span>
                  </div>
                </div>

              </div>

              {/* Consultation & Assessment Visual (Image 1) */}
              <div className="lg:col-span-5">
                <figure
                  style={{ backgroundColor: '#FAF8F5' }}
                  className="group rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden" style={{ backgroundColor: '#EFEBE2' }}>
                    {/* Visual Fallback / Base Presentation */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center" style={{ backgroundColor: '#F3EFE7' }}>
                      <div
                        style={{ backgroundColor: '#1F5E4B', color: '#FFFFFF' }}
                        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-2.5 shadow-md"
                      >
                        <Stethoscope className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-bold text-[#1F5E4B]">Clinical Consultation</span>
                      <span className="text-xs text-stone-600 mt-1 font-medium">Assessment &amp; Consent First</span>
                    </div>

                    <picture className="relative z-10 w-full h-full block">
                      <source srcSet="/images/leech-therapy-consultation-dubai.webp" type="image/webp" />
                      <Image
                        src="/images/leech-therapy-consultation-dubai.webp"
                        alt="Doctor and adult patient discussing a treatment plan at a desk"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                    </picture>
                  </div>
                  <figcaption style={{ backgroundColor: '#F5EFE6', color: '#44403C' }} className="p-4 text-center text-xs font-semibold italic">
                    Assessment and consent come before any procedure.
                  </figcaption>
                </figure>
              </div>

            </div>
          </div>

          {/* Quick Contact & Action Ribbon */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
            <a
              href="#availability"
              className="px-6 py-3.5 rounded-2xl bg-[#1F5E4B] text-white font-bold shadow-md hover:bg-[#164637] transition-all duration-300 hover:scale-105"
            >
              Check Clinic Availability Status
            </a>
            <button
              onClick={handleWhatsApp}
              className="px-6 py-3.5 rounded-2xl bg-[#25D366] text-white font-bold shadow-md hover:bg-[#1EBE5D] transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp +971 56 659 7878</span>
            </button>
            <button
              onClick={handleCall}
              className="px-5 py-3.5 rounded-2xl bg-white text-stone-800 font-bold shadow-xs hover:bg-stone-50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#1F5E4B]" />
              <span>Call 04 286 2006</span>
            </button>
          </div>

        </div>
      </section>

      {/* QUICK IN-PAGE NAVIGATION DIRECTORY */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md shadow-xs hidden md:block">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between overflow-x-auto py-3.5 text-xs sm:text-sm font-semibold text-gray-600 gap-5">
            <a href="#what-is" className="hover:text-[#1F5E4B] transition-transform duration-200 hover:scale-105 whitespace-nowrap">What Is It?</a>
            <a href="#ayurveda-jalauka" className="hover:text-[#1F5E4B] transition-transform duration-200 hover:scale-105 whitespace-nowrap">Ayurvedic Jalaukavacharana</a>
            <a href="#modern-uses" className="hover:text-[#1F5E4B] transition-transform duration-200 hover:scale-105 whitespace-nowrap">Hospital vs Proposed Uses</a>
            <a href="#benefits-limits" className="hover:text-[#1F5E4B] transition-transform duration-200 hover:scale-105 whitespace-nowrap">Benefits &amp; Limits</a>
            <a href="#procedure" className="hover:text-[#1F5E4B] transition-transform duration-200 hover:scale-105 whitespace-nowrap">Procedure Overview</a>
            <a href="#risks" className="hover:text-[#1F5E4B] transition-transform duration-200 hover:scale-105 whitespace-nowrap">Risks &amp; Side Effects</a>
            <a href="#who-should-avoid" className="hover:text-[#1F5E4B] transition-transform duration-200 hover:scale-105 whitespace-nowrap">Who Should Avoid</a>
            <a href="#alternatives" className="hover:text-[#1F5E4B] transition-transform duration-200 hover:scale-105 whitespace-nowrap">Compared to Alternatives</a>
            <a href="#availability" className="hover:text-[#1F5E4B] transition-transform duration-200 hover:scale-105 whitespace-nowrap">RamaCare Availability</a>
            <a href="#faq" className="hover:text-[#1F5E4B] transition-transform duration-200 hover:scale-105 whitespace-nowrap">FAQs</a>
            <a
              href="#contact-ramacare"
              className="ml-auto px-4 py-2 rounded-xl bg-[#1F5E4B] text-white hover:bg-[#164637] transition-all duration-200 hover:scale-105 whitespace-nowrap shadow-xs"
            >
              Enquire Clinic
            </a>
          </div>
        </div>
      </div>

      {/* SECTION 1: WHAT IS LEECH THERAPY? */}
      <section id="what-is" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="w-full max-w-[1440px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#8C6D23] uppercase tracking-wider bg-[#C9A961]/20 px-4 py-1.5 rounded-full inline-block">
              Biological &amp; Clinical Fundamentals
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              What Is Leech Therapy?
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center mb-12">
            
            {/* Image 2 Side (Educational Illustration) */}
            <div className="lg:col-span-5">
              <figure style={{ backgroundColor: '#FAF8F5' }} className="group p-6 rounded-3xl shadow-xl transition-all duration-500 hover:scale-[1.02]">
                <div className="relative aspect-3/2 rounded-2xl overflow-hidden" style={{ backgroundColor: '#EFEBE2' }}>
                  {/* Visual Fallback / Base Presentation */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center" style={{ backgroundColor: '#F3EFE7' }}>
                    <div
                      style={{ backgroundColor: '#1F5E4B', color: '#FFFFFF' }}
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-2.5 shadow-md"
                    >
                      <Microscope className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-bold text-[#1F5E4B]">Medicinal Leech Morphology</span>
                    <span className="text-xs text-stone-600 mt-1 font-medium">Hirudo Medicinalis Anatomy</span>
                  </div>

                  <picture className="relative z-10 w-full h-full block">
                    <source srcSet="/images/medicinal-leech-educational-illustration.webp" type="image/webp" />
                    <Image
                      src="/images/medicinal-leech-educational-illustration.webp"
                      alt="Educational illustration of a medicinal leech on a neutral background"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                  </picture>
                </div>
                <figcaption style={{ color: '#44403C' }} className="text-center text-xs sm:text-sm font-semibold mt-4 italic">
                  Illustration for educational purposes.
                </figcaption>
              </figure>
            </div>

            {/* Narrative Breakdown */}
            <div className="lg:col-span-7 space-y-5 text-stone-700 text-sm sm:text-base leading-relaxed">
              
              {/* Exact Paragraph 1 with Citations */}
              <p>
                Medicinal leeches are bred for clinical use, most often <em>Hirudo medicinalis</em> or closely related European species. When a leech attaches, it releases a mild anaesthetic, which is why the bite is usually painless, along with compounds such as hirudin that inhibit clotting
                <Cite id="S1" num={1} title="NHS patient leaflet: Leech Therapy" onClick={handleCiteClick} />
                <Cite id="S16" num={16} title="Pharmacy Times: Leeches Approved as Medical Devices" onClick={handleCiteClick} />.
                A leech typically takes around 5 to 15 mL of blood over roughly 20 to 45 minutes, and oozing can continue after it detaches
                <Cite id="S5" num={5} title="PMC: Leech therapy review, applications and complications" onClick={handleCiteClick} />
                <Cite id="S1" num={1} title="NHS patient leaflet: Expected oozing" onClick={handleCiteClick} />.
              </p>

              {/* Exact Paragraph 2 with Citations */}
              <p>
                In a clinical setting, a trained professional decides whether the therapy is suitable, applies the leech to a chosen area and monitors the patient. A leech that has been used for one procedure is not reused, even on the same patient, and is disposed of as regulated medical waste.
                Leeches carry bacteria in their gut, which is one reason supervision matters
                <Cite id="S4" num={4} title="PMC: Digestive-tract microbiota of Hirudo and Aeromonas infection risk" onClick={handleCiteClick} />.
              </p>

              {/* Exact Paragraph 3 with Citations */}
              <p>
                Traditional Ayurvedic practice and hospital-based medicinal leech use differ in their reasoning, their setting and the monitoring they involve. Hospital use is tied to a defined surgical problem and usually comes with antibiotic cover and regular blood counts
                <Cite id="S1" num={1} title="NHS clinical guidelines on surgical leech monitoring and antibiotic cover" onClick={handleCiteClick} />.
                Traditional use rests on a different framework, discussed below.
              </p>

              {/* Exact Paragraph 4 */}
              <div className="p-5 rounded-2xl bg-amber-50/90 text-amber-950 font-medium shadow-xs">
                For these reasons, informed consent and professional assessment are essential. Leech therapy is not something to attempt on yourself, and leeches should never be sourced or applied at home.
              </div>

            </div>

          </div>

          {/* Key Biological Mechanics Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-[#FAF8F5] p-6 rounded-3xl shadow-xs transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1">
              <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider block mb-2">Feeding Volume</span>
              <p className="text-2xl font-bold text-[#1A1A1A] mb-1">5 – 15 mL</p>
              <p className="text-xs text-stone-600 leading-relaxed">Blood drawn per leech over 20 to 45 minutes, followed by local oozing.</p>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-3xl shadow-xs transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1">
              <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider block mb-2">Salivary Compounds</span>
              <p className="text-2xl font-bold text-[#1A1A1A] mb-1">Hirudin &amp; Enzymes</p>
              <p className="text-xs text-stone-600 leading-relaxed">Mild anaesthetic suppresses bite sensation while anticoagulants delay local clotting.</p>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-3xl shadow-xs transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-2">Infection Factor</span>
              <p className="text-2xl font-bold text-[#1A1A1A] mb-1">Aeromonas Flora</p>
              <p className="text-xs text-stone-600 leading-relaxed">Symbiotic gut bacteria required for blood digestion, necessitating clinical supervision.</p>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-3xl shadow-xs transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1">
              <span className="text-xs font-bold text-rose-800 uppercase tracking-wider block mb-2">Safety Rule</span>
              <p className="text-2xl font-bold text-[#1A1A1A] mb-1">Single-Use Only</p>
              <p className="text-xs text-stone-600 leading-relaxed">Never reused on any patient; strictly incinerated or disposed of as regulated medical waste.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: LEECH THERAPY IN AYURVEDA (JALAUKAVACHARANA) */}
      <section id="ayurveda-jalauka" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5]">
        <div className="w-full max-w-[1440px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider bg-[#1F5E4B]/10 px-4 py-1.5 rounded-full inline-block">
              Classical Manuscript Context
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              Leech Therapy in Ayurveda
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-8 transition-all duration-300 hover:scale-[1.01]">
            
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-5 text-stone-700 text-sm sm:text-base leading-relaxed">
                
                {/* Exact Paragraph 1 with Citations */}
                <p>
                  Ayurveda is a traditional Indian system of medicine. Jalaukavacharana comes from the Sanskrit <em>jalauka</em>, meaning leech, and refers to the application of leeches. It is classed within raktamokshana, the traditional family of bloodletting procedures, and is often described as a para-surgical technique
                  <Cite id="S11" num={11} title="Fundamentals of Jalaukavacharan (Phytojournal 2024)" onClick={handleCiteClick} />
                  <Cite id="S10" num={10} title="Medical leech therapy in Ayurveda and biomedicine (FAO 2020)" onClick={handleCiteClick} />.
                  The Sushruta Samhita, an early medical treatise, contains the first detailed description of the practice in the Ayurvedic literature
                  <Cite id="S9" num={9} title="Whose Life is Water, Fluid Bodies in Ayurvedic Leech Therapy (ANU Press)" onClick={handleCiteClick} />.
                </p>

                {/* Exact Paragraph 2 with Citations */}
                <p>
                  In the traditional view, leeches are used to remove what practitioners call excess or vitiated blood, a concept tied to the Ayurvedic theory of the doshas
                  <Cite id="S8" num={8} title="Brooks: The Vascularity of Ayurvedic Leech Therapy (PMC)" onClick={handleCiteClick} />.
                  That is a traditional explanation. It should not be read as a proven modern mechanism, and it does not mean that leech therapy purifies the blood or removes toxins.
                </p>

                {/* Exact Paragraph 3 with Citations */}
                <p>
                  Traditional sources and present-day Ayurvedic writers describe uses for skin complaints, varicose veins, joint pain and ulcers
                  <Cite id="S13" num={13} title="Onmanorama: Jalaukavacharana clinical feature (March 2025)" onClick={handleCiteClick} />.
                  These are traditional or proposed uses. A long history of use does not on its own establish that a treatment works, or that it is safe for a particular person with a particular condition.
                </p>

                {/* Exact Paragraph 4 */}
                <div className="p-5 rounded-2xl bg-[#FAF8F5] text-stone-800 text-xs sm:text-sm font-medium">
                  Methods also vary between practitioners and clinics. Nothing on this page should be read as describing how any specific clinic, including RamaCare, performs the procedure.
                </div>

              </div>

              {/* Classical Sanskrit Heritage Panel */}
              <div
                style={{
                  backgroundColor: '#16483A',
                  backgroundImage: 'linear-gradient(145deg, #1A5F4A 0%, #103328 100%)',
                  color: '#FFFFFF'
                }}
                className="lg:col-span-5 p-8 sm:p-10 rounded-3xl shadow-2xl space-y-6"
              >
                
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider" style={{ color: '#F3D89A' }}>
                  <BookOpen className="w-4 h-4" />
                  <span>Sushruta Samhita Treatise</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  Raktamokshana: The Para-Surgical Class
                </h3>

                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#F1F5F9' }}>
                  In classical Ayurveda, Jalaukavacharana is classified under Raktamokshana, indicated historically for specific blood and Pitta-related imbalances. Classical texts detail strict rules on leech species, water storage, and application seasons.
                </p>

                <div
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.28)', color: '#FFFFFF' }}
                  className="p-5 rounded-2xl space-y-2 shadow-inner"
                >
                  <p className="font-bold text-xs sm:text-sm" style={{ color: '#F3D89A' }}>
                    Modern Clinical Demarcation:
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#F8FAFC' }}>
                    Classical texts use traditional philosophical frameworks (Doshas, Dhatus, Vitiated Blood). RamaCare explicitly communicates that these ancient descriptors are not biomedical diagnoses and do not imply physiological detoxification.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/services/ayurveda-dubai/"
                    style={{ color: '#F3D89A' }}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold hover:underline"
                  >
                    <span>Explore confirmed Ayurveda in Dubai therapies</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: WHAT IS MEDICINAL LEECH THERAPY USED FOR? (MODERN VS PROPOSED) */}
      <section id="modern-uses" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="w-full max-w-[1440px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider bg-[#1F5E4B]/10 px-4 py-1.5 rounded-full inline-block">
              Evidence Demarcation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              What Is Medicinal Leech Therapy Used For?
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto"></div>
          </div>

          {/* Dual Evidence Track */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-8">
            
            {/* Left Track: Modern Hospital Reconstructive Surgery */}
            <div className="bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.015] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  <BadgeCheck className="w-4 h-4" />
                  <span>FDA-Cleared Reconstructive Surgery</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                  Venous Congestion in Microvascular Tissue Flaps
                </h3>

                {/* Exact Paragraph 1 with Citations */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  The best-recognised modern use is in reconstructive and microvascular surgery. When a skin flap, replanted finger, ear or similar tissue cannot drain blood properly, the tissue becomes congested. Medicinal leeches can provide temporary drainage until the body grows new vessels that restore normal flow
                  <Cite id="S2" num={2} title="PMC: Practical use of medicinal leeches in reconstructive plastic surgery" onClick={handleCiteClick} />.
                  In June 2004 the US Food and Drug Administration cleared medicinal leeches as medical devices, the first living animal cleared for this kind of use alongside medical maggots
                  <Cite id="S3" num={3} title="US FDA 2004 Medical Device clearance" onClick={handleCiteClick} />
                  <Cite id="S17" num={17} title="Regulatory history of medicinal leeches and maggots as devices (RAPS)" onClick={handleCiteClick} />.
                </p>

                {/* Exact Paragraph 2 with Citations */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  This is hospital care, delivered by surgical teams who monitor the patient closely. NHS patient information describes antibiotic cover during treatment, regular blood-count checks, a consent process and further surgery as an alternative
                  <Cite id="S1" num={1} title="NHS patient leaflet: Leech Therapy protocols" onClick={handleCiteClick} />.
                </p>
              </div>

              <div className="mt-6 pt-4 text-xs font-semibold text-stone-500">
                Hospital setting • Continuous monitoring • Prophylactic antibiotics • Haematology blood counts
              </div>
            </div>

            {/* Right Track: Proposed & Under-Studied Uses */}
            <div className="bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.015] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                  <AlertCircle className="w-4 h-4" />
                  <span>Proposed &amp; Investigational Uses</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                  Osteoarthritis, Varicose Veins &amp; Chronic Pain
                </h3>

                {/* Exact Paragraph 3 with Citations */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  Other proposed uses sit in a different category. Reviews describe leeches being studied or used for knee osteoarthritis, varicose veins, chronic ulcers and pain
                  <Cite id="S5" num={5} title="PMC: Leech therapy review, applications and complications" onClick={handleCiteClick} />
                  <Cite id="S6" num={6} title="Frontiers in Medicine 2024: Systematic review on leech therapy" onClick={handleCiteClick} />.
                  One German study of 51 people with knee osteoarthritis reported a larger drop in pain at seven days than a topical anti-inflammatory gel
                  <Cite id="S5" num={5} title="German trial of 51 osteoarthritis patients (PMC review)" onClick={handleCiteClick} />.
                  That is one small finding, not a settled conclusion. Even reviews that are positive in tone call for more rigorous research
                  <Cite id="S7" num={7} title="Hirudotherapy and Jalaukavacharana review (Zenodo)" onClick={handleCiteClick} />.
                </p>

                {/* Exact Paragraph 4 */}
                <div className="p-4 rounded-2xl bg-white shadow-2xs text-stone-900 text-xs sm:text-sm font-semibold leading-relaxed">
                  The key point is that results from reconstructive surgery cannot be carried over to arthritis, skin conditions, general pain or detox. Each proposed use needs its own evidence.
                </div>
              </div>

              <div className="mt-6 pt-4 text-xs font-semibold text-amber-800">
                Limited sample sizes • Short follow-up windows • Requires rigorous randomized trials
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: POTENTIAL BENEFITS AND LIMITATIONS */}
      <section id="benefits-limits" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5]">
        <div className="w-full max-w-[1440px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider bg-[#1F5E4B]/10 px-4 py-1.5 rounded-full inline-block">
              Clinical Transparency
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              Potential Benefits and Limitations
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-8">
            
            {/* Left Column: Recognized Roles */}
            <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Recognised Scope of Benefits</span>
                </div>

                {/* Exact Paragraph 1 with Citations */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  Benefits should be described only for the specific application they were studied in. In selected surgical situations with venous congestion, leeches can help keep compromised tissue alive while circulation recovers
                  <Cite id="S2" num={2} title="PMC: Practical use in reconstructive surgery" onClick={handleCiteClick} />.
                  That is a recognised and limited role.
                </p>

                {/* Exact Paragraph 2 */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  For most other uses, the picture is less clear. Studies tend to be few, varied in design and focused on particular conditions. Outcomes depend on the underlying problem, the clinical context and the quality of the research, and no particular result can be promised.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 text-emerald-900 text-xs sm:text-sm font-medium">
                Clinical reality: Effective tissue drainage is transient and serves as a temporary bridge while the body re-establishes capillary beds.
              </div>
            </div>

            {/* Right Column: Frank Discussion of What It Is Not */}
            <div className="lg:col-span-6 bg-rose-50/90 p-8 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgba(244,63,94,0.06)] space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-rose-900 font-bold text-base">
                  <XCircle className="w-5 h-5 text-rose-600" />
                  <span>What Leech Therapy Is Not</span>
                </div>

                {/* Exact Paragraph 3 */}
                <p className="text-rose-950 text-sm sm:text-base leading-relaxed">
                  It is also worth being plain about what leech therapy is not. It has not been shown to remove toxins, purify the blood, cure arthritis, repair damaged tissue or permanently relieve pain. It does not improve circulation in every patient. People who are interested in it should ask a qualified clinician to compare it with other options, rather than treating it as a first or only step.
                </p>

                <div className="space-y-2 pt-2 text-xs sm:text-sm text-rose-900">
                  <div className="flex items-center gap-2">
                    <Ban className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Does NOT remove metabolic toxins or "detoxify"</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ban className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Does NOT purify systemic bloodstream</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ban className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Does NOT cure osteoarthritis or reverse cartilage loss</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ban className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Does NOT provide permanent analgesia</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white text-stone-900 text-xs sm:text-sm font-semibold">
                RamaCare strict policy: No unsupported detoxification, purification, or curative arthritis claims.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: HOW IS A LEECH THERAPY PROCEDURE PERFORMED? */}
      <section id="procedure" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="w-full max-w-[1440px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider bg-[#1F5E4B]/10 px-4 py-1.5 rounded-full inline-block">
              Clinical Protocol Principles
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              How Is a Leech Therapy Procedure Performed?
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mb-6"></div>
            
            {/* Exact Paragraph 1 */}
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
              The exact approach depends on the clinical reason and the professional setting, so the following is a general overview rather than a protocol. It is not a guide to doing anything yourself.
            </p>
          </div>

          {/* 3 Step Protocol Cards with Smooth Hover Elevation */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            
            <div style={{ backgroundColor: '#FAF8F5' }} className="group p-8 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <span
                  style={{ backgroundColor: '#1F5E4B', color: '#FFFFFF' }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-xs font-bold shadow-sm"
                >
                  Phase 1
                </span>
                <h3 className="text-lg font-bold text-[#1A1A1A]">
                  Assessment &amp; Consent
                </h3>
                {/* Exact Paragraph 2 part 1 */}
                <p className="text-stone-800 text-sm leading-relaxed">
                  A supervised procedure generally begins with an assessment: your medical history, current medicines and supplements, allergies, and any bleeding or infection risks. The practitioner then explains the proposed procedure, its alternatives and its risks, and you decide whether to consent.
                </p>
              </div>
            </div>

            <div style={{ backgroundColor: '#FAF8F5' }} className="group p-8 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <span
                  style={{ backgroundColor: '#C9A961', color: '#1A1A1A' }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-xs font-bold shadow-sm"
                >
                  Phase 2
                </span>
                <h3 className="text-lg font-bold text-[#1A1A1A]">
                  Hygiene, Handling &amp; Disposal
                </h3>
                {/* Exact Paragraph 3 part 1 */}
                <p className="text-stone-800 text-sm leading-relaxed">
                  Before, during and after the procedure, appropriate clinical precautions apply, including attention to hygiene, the condition of the skin and the safe handling and disposal of the leeches.
                </p>
              </div>
            </div>

            <div style={{ backgroundColor: '#FAF8F5' }} className="group p-8 rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <span
                  style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF' }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-xs font-bold shadow-sm"
                >
                  Phase 3
                </span>
                <h3 className="text-lg font-bold text-[#1A1A1A]">
                  Post-Care Monitoring
                </h3>
                {/* Exact Paragraph 3 part 2 */}
                <p className="text-stone-800 text-sm leading-relaxed">
                  Afterwards you should be monitored for bleeding, signs of infection and other adverse effects, and given clear written instructions on aftercare and on whom to contact if something is wrong.
                </p>
              </div>
            </div>

          </div>

          {/* Exact Paragraph 4 Note */}
          <div className="p-6 rounded-3xl bg-[#FAF8F5] text-center max-w-3xl mx-auto shadow-xs">
            <p className="text-xs sm:text-sm font-medium text-stone-800 leading-relaxed">
              This page does not state how long a session lasts, how many leeches are used or how many sessions are needed. Those details depend on the clinician's judgement and, for any particular clinic, on its own confirmed protocol.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 6: RISKS AND SIDE EFFECTS OF LEECH THERAPY */}
      <section id="risks" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5]">
        <div className="w-full max-w-[1440px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-rose-800 uppercase tracking-wider bg-rose-100 px-4 py-1.5 rounded-full inline-block">
              Patient Safety &amp; Complications
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              Risks and Side Effects of Leech Therapy
            </h2>
            <div className="w-16 h-1 bg-rose-600 rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center mb-10">
            {/* Text Side */}
            <div className="lg:col-span-7 space-y-5 text-stone-700 text-sm sm:text-base leading-relaxed">
              {/* Exact Paragraph 1 with Citations */}
              <p>
                Leech therapy carries real risks and should not be described as harmless. Because leech saliva contains substances that affect clotting, bleeding can continue for some time after the leech has come off, and NHS information notes that some oozing is expected
                <Cite id="S1" num={1} title="NHS patient leaflet: Expected oozing and aftercare" onClick={handleCiteClick} />.
                Prolonged bleeding can lead to dizziness, weakness and, with significant or repeated blood loss, anaemia
                <Cite id="S1" num={1} title="NHS guidelines on blood loss monitoring" onClick={handleCiteClick} />
                <Cite id="S5" num={5} title="PMC: Complications and blood loss anaemia risk" onClick={handleCiteClick} />.
              </p>

              {/* Exact Paragraph 2 with Citations */}
              <p>
                Infection is the other main concern. Medicinal leeches carry <em>Aeromonas</em> bacteria in their gut, and <em>Aeromonas</em> wound infections after leech use are well documented in surgical literature
                <Cite id="S4" num={4} title="PMC: Microbiota of Hirudo and postoperative infection" onClick={handleCiteClick} />.
                For this reason, hospital protocols commonly include antibiotics during therapy
                <Cite id="S1" num={1} title="NHS prophylactic antibiotic protocol" onClick={handleCiteClick} />.
              </p>

              {/* Exact Paragraph 3 with Citations */}
              <p>
                Other possible problems include allergic reactions, local skin irritation or scarring, and complications from unsuitable or unsupervised use
                <Cite id="S5" num={5} title="PMC literature review on adverse events" onClick={handleCiteClick} />.
              </p>

              {/* Exact Paragraph 4 (Actionable Warning) */}
              <div className="p-5 rounded-2xl bg-rose-50/95 text-rose-950 font-medium space-y-2 shadow-xs">
                <div className="flex items-center gap-2 font-bold text-rose-900 text-base">
                  <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>Immediate Medical Attention Triggers</span>
                </div>
                <p>
                  Patients should be told what to do if problems arise. Seek prompt medical attention for bleeding that will not stop, fever, spreading redness, worsening swelling, increasing pain or any other symptom that concerns you. Do not wait for a scheduled follow-up.
                </p>
              </div>
            </div>

            {/* Image 3 Side (Risks Discussion) */}
            <div className="lg:col-span-5">
              <figure style={{ backgroundColor: '#FAF8F5' }} className="group p-6 rounded-3xl shadow-xl transition-all duration-500 hover:scale-[1.02]">
                <div className="relative aspect-3/2 rounded-2xl overflow-hidden" style={{ backgroundColor: '#EFEBE2' }}>
                  {/* Visual Fallback / Base Presentation */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center" style={{ backgroundColor: '#F3EFE7' }}>
                    <div
                      style={{ backgroundColor: '#B91C1C', color: '#FFFFFF' }}
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-2.5 shadow-md"
                    >
                      <ShieldAlert className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-bold text-rose-900">Safety &amp; Risks Discussion</span>
                    <span className="text-xs text-stone-600 mt-1 font-medium">Aftercare Protocol Guidance</span>
                  </div>

                  <picture className="relative z-10 w-full h-full block">
                    <source srcSet="/images/leech-therapy-risks-discussion.webp" type="image/webp" />
                    <Image
                      src="/images/leech-therapy-risks-discussion.webp"
                      alt="Healthcare professional explaining procedure risks to an adult patient"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                  </picture>
                </div>
                <figcaption style={{ color: '#44403C' }} className="text-center text-xs sm:text-sm font-semibold mt-4 italic">
                  Risks and aftercare should be explained clearly.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHO SHOULD AVOID LEECH THERAPY OR SEEK SPECIALIST ADVICE? */}
      <section id="who-should-avoid" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="w-full max-w-[1440px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-100 px-4 py-1.5 rounded-full inline-block">
              Contraindications &amp; Precautions
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              Who Should Avoid Leech Therapy or Seek Specialist Advice?
            </h2>
            <div className="w-16 h-1 bg-amber-600 rounded-full mx-auto mb-6"></div>
            
            {/* Exact Lead-in */}
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
              Suitability must be decided by a suitably qualified healthcare professional after an individual assessment. The following situations call for particular caution, and the list is not exhaustive:
            </p>
          </div>

          {/* 8 Distinct Contraindication Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            
            <div className="bg-[#FAF8F5] p-6 rounded-3xl shadow-xs transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block mb-3"></span>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2">Anaemia</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Anaemia or a history of significant blood loss
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-3xl shadow-xs transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block mb-3"></span>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2">Bleeding Disorders</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Bleeding disorders
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-3xl shadow-xs transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block mb-3"></span>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2">Anticoagulants</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Anticoagulants or other medicines that affect clotting
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-3xl shadow-xs transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block mb-3"></span>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2">Blood Pressure</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Low blood pressure or other conditions that raise procedural risk
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-3xl shadow-xs transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block mb-3"></span>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2">Immune Status</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Significant immune compromise
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-3xl shadow-xs transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block mb-3"></span>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2">Allergies</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                A known allergy or previous serious reaction
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-3xl shadow-xs transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block mb-3"></span>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2">Pregnancy</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Pregnancy, or other circumstances that need individual assessment
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-3xl shadow-xs transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block mb-3"></span>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2">Skin Condition</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Active infection, or unsuitable skin at the proposed site
              </p>
            </div>

          </div>

          {/* Exact Concluding Medical Guidance */}
          <div className="p-6 rounded-3xl bg-[#FAF8F5] text-center max-w-3xl mx-auto shadow-xs">
            <p className="text-xs sm:text-sm font-medium text-stone-800 leading-relaxed">
              This list is for general awareness, not self-diagnosis. Tell your clinician about every medicine and supplement you take, your medical conditions and your allergies before any procedure is considered. Never stop a prescribed medicine on your own because of something you have read online.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 8: LEECH THERAPY COMPARED WITH OTHER TREATMENT OPTIONS */}
      <section id="alternatives" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5]">
        <div className="w-full max-w-[1440px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider bg-[#1F5E4B]/10 px-4 py-1.5 rounded-full inline-block">
              Integrated Polyclinic Alternatives
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              Leech Therapy Compared With Other Treatment Options
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-8 transition-all duration-300 hover:scale-[1.01]">
            
            {/* Exact Paragraph 1 */}
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
              The right treatment depends on the underlying problem. Leech therapy is not a universal option for pain, joint problems or skin complaints, and where established treatments exist, they should be considered alongside it rather than replaced by it.
            </p>

            {/* Exact Paragraph 2 */}
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
              For persistent joint or back pain, a medical assessment and physiotherapy may be more appropriate starting points. For wounds, ulcers or skin conditions, wound care and dermatology input matter. When a problem needs surgery or a specialist, referral is the safer route. Traditional procedures should not be treated as substitutes for these where evidence favours other approaches.
            </p>

            {/* Exact Paragraph 3 with Link */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] text-stone-800 text-sm sm:text-base leading-relaxed">
              At RamaCare, the <Link href="/services/physiotherapy-dubai/" className="text-[#1F5E4B] font-semibold underline">physiotherapy at RamaCare</Link>, <Link href="/services/general-physician-dubai/" className="text-[#1F5E4B] font-semibold underline">seeing a general physician</Link> and <Link href="/services/aesthetic-dermatology-dubai/" className="text-[#1F5E4B] font-semibold underline">dermatology services</Link> teams share a building with the Ayurveda department, which makes it easier to discuss these options in one place
              <Cite id="S14" num={14} title="RamaCare Ayurveda hub (fetched live)" onClick={handleCiteClick} />.
            </div>

            {/* Multidisciplinary Pathways Grid */}
            <div className="grid md:grid-cols-3 gap-6 pt-4">
              
              <div className="p-6 rounded-2xl bg-[#FAF8F5] space-y-3 transition-transform duration-300 hover:scale-105">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1F5E4B]">Joint &amp; Spinal Pain</span>
                <h4 className="font-bold text-base text-[#1A1A1A]">Evidence-Based Physiotherapy</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Supervised exercise rehabilitation, manual mobilisation and posture alignment led by Jeena Mathew (BPT, MPT).
                </p>
                <Link href="/services/physiotherapy-dubai/" className="text-xs font-bold text-[#1F5E4B] inline-flex items-center gap-1 hover:underline">
                  <span>Explore physiotherapy</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF8F5] space-y-3 transition-transform duration-300 hover:scale-105">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1F5E4B]">Skin &amp; Wounds</span>
                <h4 className="font-bold text-base text-[#1A1A1A]">Clinical Dermatology</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Professional diagnostic skin assessment, wound management, and targeted medical therapies.
                </p>
                <Link href="/services/aesthetic-dermatology-dubai/" className="text-xs font-bold text-[#1F5E4B] inline-flex items-center gap-1 hover:underline">
                  <span>Explore dermatology</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF8F5] space-y-3 transition-transform duration-300 hover:scale-105">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1F5E4B]">Systemic Health</span>
                <h4 className="font-bold text-base text-[#1A1A1A]">General Physician Review</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Comprehensive health screening, blood investigations, medication review, and coordinated specialist referrals.
                </p>
                <Link href="/services/general-physician-dubai/" className="text-xs font-bold text-[#1F5E4B] inline-flex items-center gap-1 hover:underline">
                  <span>See general physician</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 9: IS LEECH THERAPY AVAILABLE AT RAMACARE POLYCLINIC IN DUBAI? */}
      <section id="availability" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="w-full max-w-[1440px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider bg-[#1F5E4B]/10 px-4 py-1.5 rounded-full inline-block">
              Clinic Transparency &amp; Enquiry
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              Is Leech Therapy Available at RamaCare Polyclinic in Dubai?
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-stretch mb-12">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-6 flex flex-col justify-between">
              
              <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
                
                {/* Exact Paragraph 1 */}
                <p>
                  RamaCare Polyclinic is a DHA-licensed clinic at 12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai. Its Ayurveda department is doctor-led: patients are assessed by a BAMS-qualified <Link href="/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/" className="text-[#1F5E4B] font-semibold underline">our Ayurveda doctor</Link> before any therapy
                  <Cite id="S14" num={14} title="RamaCare Ayurveda hub (fetched live)" onClick={handleCiteClick} />.
                </p>

                {/* Exact Paragraph 3 (Unconfirmed Statement) */}
                <div className="p-5 rounded-2xl bg-amber-50 text-amber-950 font-medium">
                  Leech therapy availability at RamaCare has not been confirmed on this page. If you would like to know whether it is offered, or whether another assessment or Ayurvedic option would suit you better, please contact the clinic before making any plans. The team can tell you what is currently available.
                </div>

                {/* Exact Practical Contact Listing */}
                <div className="space-y-3 pt-2 text-xs sm:text-sm text-stone-800">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#1F5E4B] shrink-0" />
                    <span>Phone: <a href="tel:+97142862006" className="font-bold text-[#1F5E4B] hover:underline">+971 4 286 2006</a></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                    <span>WhatsApp: <a href="https://wa.me/971566597878" className="font-bold text-[#1F5E4B] hover:underline">+971 56 659 7878</a></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-[#1F5E4B] shrink-0" />
                    <span>Email: <a href="mailto:query@ramacarepolyclinic.com" className="font-bold text-[#1F5E4B] hover:underline">query@ramacarepolyclinic.com</a></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#1F5E4B] shrink-0" />
                    <span>Hours: every day, 10am to 10pm, as listed on the Ayurveda page</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Compass className="w-4 h-4 text-[#1F5E4B] shrink-0" />
                    <span>Ayurveda services: see the <Link href="/services/ayurveda-dubai/" className="text-[#1F5E4B] font-semibold underline">Ayurveda in Dubai</Link> page</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link href="/services/polyclinic-in-jumeirah-1/" className="text-xs font-bold text-[#1F5E4B] hover:underline inline-flex items-center gap-1.5">
                    <span>Directions and details for visiting our Jumeirah 1 clinic</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

              {/* Direct Booking CTA */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://ramacarepolyclinic.ae/book-appointment/"
                  className="px-7 py-4 rounded-2xl bg-[#1F5E4B] text-white font-bold text-sm sm:text-base shadow-lg hover:bg-[#164637] transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  book an appointment
                </a>
                <button
                  onClick={handleWhatsApp}
                  className="px-6 py-4 rounded-2xl bg-[#25D366] text-white font-bold text-sm sm:text-base shadow-md hover:bg-[#1EBE5D] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp +971 56 659 7878</span>
                </button>
              </div>

            </div>

            {/* Right Column: Clinic Reception Image (Image 4) */}
            <div className="lg:col-span-5">
              <figure style={{ backgroundColor: '#FAF8F5' }} className="group p-5 rounded-3xl shadow-xl transition-all duration-500 hover:scale-[1.02]">
                <div className="relative aspect-16/9 rounded-2xl overflow-hidden" style={{ backgroundColor: '#EFEBE2' }}>
                  {/* Visual Fallback / Base Presentation */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center" style={{ backgroundColor: '#F3EFE7' }}>
                    <div
                      style={{ backgroundColor: '#1F5E4B', color: '#FFFFFF' }}
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-2.5 shadow-md"
                    >
                      <Building2 className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-bold text-[#1F5E4B]">RamaCare Polyclinic</span>
                    <span className="text-xs text-stone-600 mt-1 font-medium">Jumeirah 1 Facility Reception</span>
                  </div>

                  <picture className="relative z-10 w-full h-full block">
                    <source srcSet="/images/ramacare-jumeirah-1-clinic-reception.webp" type="image/webp" />
                    <Image
                      src="/images/ramacare-jumeirah-1-clinic-reception.webp"
                      alt="RamaCare Polyclinic Jumeirah 1 reception and consultation area"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                  </picture>
                </div>
                <figcaption style={{ color: '#44403C' }} className="text-center text-xs sm:text-sm font-semibold mt-4 italic">
                  Our Jumeirah 1 clinic setting on Al Dhiyafah Road.
                </figcaption>
              </figure>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS ABOUT LEECH THERAPY IN DUBAI */}
      <section id="faq" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5]">
        <div className="w-full max-w-[1440px] mx-auto">
          
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider bg-[#1F5E4B]/10 px-4 py-1.5 rounded-full inline-block">
              Patient Clarifications
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">
              Frequently Asked Questions About Leech Therapy in Dubai
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mb-4"></div>
          </div>

          {/* Expansive 2-Column Grid */}
          <div className="grid lg:grid-cols-2 gap-5 items-start mb-12">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    id={`faq-btn-${idx}`}
                    aria-expanded={isOpen}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors"
                  >
                    <span className="font-bold text-sm sm:text-base text-[#1A1A1A]">
                      {idx + 1}. {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#1F5E4B] text-white' : 'bg-[#FAF8F5] text-stone-500 shadow-2xs'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-stone-700 text-sm sm:text-base leading-relaxed">
                      <p>
                        {faq.a}
                        {faq.sources &&
                          faq.sources.map((src) => (
                            <Cite
                              key={src.id}
                              id={src.id}
                              num={src.num}
                              title={src.title}
                              onClick={handleCiteClick}
                            />
                          ))}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 11: CLINICAL CITATIONS DRAWER */}
      <section id="references" className="py-12 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-3xl shadow-xs border border-stone-200/60">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <Microscope className="w-5 h-5 text-[#1F5E4B]" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A]">
                    Scientific &amp; Historical Literature References (1 – 17)
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Peer-reviewed medical publications, US FDA regulatory clearances, NHS clinical leaflets, and classical manuscripts
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowReferences(!showReferences)}
                className="text-xs font-bold text-[#1F5E4B] hover:underline inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 transition-colors cursor-pointer"
              >
                <span>{showReferences ? 'Hide Citations List' : 'View All 17 Scientific References'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showReferences ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {showReferences && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 pt-4 text-xs text-stone-700">
                {references.map((ref) => {
                  const num = ref.id.replace('S', '');
                  return (
                    <div
                      key={ref.id}
                      id={`ref-${ref.id}`}
                      className="p-3.5 rounded-2xl bg-white shadow-2xs border border-stone-100 transition-all duration-300 hover:shadow-xs hover:border-emerald-200"
                    >
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-[#1F5E4B] bg-[#1F5E4B]/10 px-1.5 py-0.5 rounded text-[11px] shrink-0">
                          [{num}]
                        </span>
                        <div className="flex-1 min-w-0">
                          <a
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-stone-800 font-medium inline-flex items-center gap-1 group leading-snug"
                          >
                            <span>{ref.title}</span>
                            <ExternalLink className="w-3 h-3 text-[#1F5E4B] shrink-0 opacity-70 group-hover:opacity-100" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 12: CONTACT RAMACARE POLYCLINIC */}
      <section
        id="contact-ramacare"
        style={{ background: 'linear-gradient(to bottom, #FAF8F5, #FFFFFF)' }}
        className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12"
      >
        <div className="w-full max-w-[1440px] mx-auto text-center">
          
          <div className="bg-white p-8 sm:p-12 lg:p-16 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] max-w-4xl mx-auto space-y-6">
            <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider bg-[#1F5E4B]/10 px-4 py-1.5 rounded-full inline-block">
              Begin Your Enquiry
            </span>

            {/* Exact H2 */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Contact RamaCare Polyclinic
            </h2>

            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto"></div>

            {/* Exact Paragraph */}
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed text-left sm:text-center">
              If you would like to ask about leech therapy or other Ayurvedic and medical options, RamaCare Polyclinic in Jumeirah 1 is happy to hear from you. Contact the team to ask what is currently available and what a suitable consultation could involve.
            </p>

            {/* Direct Multi-channel Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="https://ramacarepolyclinic.ae/book-appointment/"
                className="px-8 py-4 rounded-2xl bg-[#1F5E4B] text-white font-bold text-sm sm:text-base shadow-xl hover:bg-[#164637] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                book an appointment
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

            {/* Exact Medical Review Disclaimer */}
            <aside className="mt-8 pt-6 text-xs sm:text-sm text-stone-600 space-y-1.5" aria-label="Medical information notice">
              <p>
                Medical review: this page must be reviewed by an appropriately qualified healthcare professional before publication.
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
        pageSlug="leech-therapy-dubai"
        lastReviewed="2026-10-15"
      />

      {/* BOOK CONSULTATION COMPONENT */}
      <div id="book-consultation">
        <BookConsultation />
      </div>

      {/* MOBILE STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-40 p-3.5 md:hidden">
        <div className="flex items-center justify-between gap-3">
          <div className="text-left">
            <p className="text-xs font-bold text-[#1A1A1A]">Leech Therapy Dubai</p>
            <p className="text-[11px] text-[#7D5E15] font-semibold">RamaCare Polyclinic • Jumeirah 1</p>
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
              href="#contact-ramacare"
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
        onClick={handleWhatsApp}
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </button>

    </Layout>
  );
}
