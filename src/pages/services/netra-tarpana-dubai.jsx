import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import {
  MessageCircle,
  Phone,
  Calendar,
  ChevronDown,
  AlertTriangle,
  CheckCircle2,
  CheckSquare,
  Shield,
  Sparkles
} from 'lucide-react';

const SITE = 'https://ramacarepolyclinic.ae';
const PATH = '/services/netra-tarpana-dubai/';
const URL = `${SITE}${PATH}`;
const TITLE = 'Netra Tarpana Dubai | Ayurvedic Eye Therapy | RamaCare';
const DESCRIPTION =
  'Netra Tarpana in Dubai explained: the traditional Ayurvedic eye therapy, how it is performed, evidence limits and precautions. Ayurveda in Jumeirah 1.';
const OG_IMAGE = `${SITE}/images/netra-tarpana-traditional-setup-illustration.webp`;

export const faqs = [
  {
    q: 'What is Netra Tarpana?',
    a: 'A traditional Ayurvedic eye therapy in which medicated ghee is retained over the closed eyes within a ring of dough for a period set by the practitioner. It is based on traditional concepts, and traditional use does not establish that it treats eye disease.',
  },
  {
    q: 'What is Netra Tarpana called in English?',
    a: 'There is no standard English name. It is often described as an Ayurvedic ghee eye bath or eye-nourishing therapy. These are loose descriptions, and the procedure is not the same as an ophthalmic eye wash or treatment.',
  },
  {
    q: 'How is Netra Tarpana traditionally performed?',
    a: 'Traditionally, lukewarm medicated ghee is held over the closed eyes inside a ring of black gram dough for a set time. Details vary, so a practitioner should explain the exact method and materials. It should never be attempted at home.',
  },
  {
    q: 'What are the potential benefits of Netra Tarpana?',
    a: 'Traditional texts describe it for tired and dry eyes, and a quiet supervised session may feel restful. Reliable clinical evidence is limited, and results vary. It should not be expected to improve eyesight or treat any eye condition.',
  },
  {
    q: 'Is Netra Tarpana proven to improve eyesight?',
    a: 'No. Claims about improved vision are traditional, and I found no reliable evidence that the therapy changes eyesight or a prescription. Anyone with changing or blurred vision should have an eye examination rather than rely on a traditional therapy.',
  },
  {
    q: 'Can Netra Tarpana treat dry eyes?',
    a: 'It is traditionally used for dryness, but the evidence is limited. One small study compared two kinds of Tarpana with each other, not with standard care. Persistent dry eyes deserve an eye assessment, and nothing should be put in the eyes unadvised.',
  },
  {
    q: 'Is Netra Tarpana suitable for digital eye strain?',
    a: 'It is not an established treatment for digital eye strain. Regular screen breaks, fuller blinking, better lighting and screen position, artificial tears and an eye test have better support. Ayurvedic care, if chosen, should sit alongside those measures.',
  },
  {
    q: 'What are the possible precautions or side effects?',
    a: 'Irritation, allergic reaction, and contamination leading to infection are the main concerns, and the risk is not well measured. Hygiene, suitable materials and professional assessment matter. Stop and seek medical care for pain, redness, discharge or blurred vision.',
  },
  {
    q: 'Who should avoid Netra Tarpana?',
    a: 'People with eye pain, redness, discharge or suspected infection, recent eye surgery or injury, known eye disease, unexplained vision changes, eye allergies, or significant inflammation around the eyes should get professional advice first. The list is not exhaustive.',
  },
  {
    q: 'Is Netra Tarpana the same as Netra Basti?',
    a: 'Sometimes. Some sources use Netra Basti or Netra Vasti as another name for Netra Tarpana, while others describe separate procedures. Ask the provider exactly which method, materials and steps they mean before agreeing to anything.',
  },
  {
    q: 'How long does a Netra Tarpana session take?',
    a: 'There is no verified standard duration, because it depends on the practitioner\'s protocol and your assessment. Any provider should state the expected length and process in advance, and you should be free to stop if you are uncomfortable.',
  },
  {
    q: 'Is Netra Tarpana available in Jumeirah 1, Dubai?',
    a: 'Netra Tarpana is not among the therapies currently listed by RamaCare Polyclinic\'s Ayurveda department in Jumeirah 1. Please contact the clinic to ask whether it is offered and who would assess suitability. Do not assume availability from this guide.',
  },
];

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalClinic',
      '@id': 'https://ramacarepolyclinic.ae/#clinic',
      name: 'RamaCare Polyclinic',
      url: 'https://ramacarepolyclinic.ae/',
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
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: '+971566597878',
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
      '@id': 'https://ramacarepolyclinic.ae/#website',
      url: 'https://ramacarepolyclinic.ae/',
      name: 'RamaCare Polyclinic',
      inLanguage: 'en-AE',
      publisher: {
        '@id': 'https://ramacarepolyclinic.ae/#clinic',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#person',
      name: 'Dr. Shamna Keloth Meethal',
      jobTitle: 'Ayurveda Doctor (BAMS)',
      url: 'https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/',
      worksFor: {
        '@id': 'https://ramacarepolyclinic.ae/#clinic',
      },
    },
    {
      '@type': 'MedicalTherapy',
      '@id': 'https://ramacarepolyclinic.ae/services/netra-tarpana-dubai/#therapy',
      name: 'Netra Tarpana',
      alternateName: ['Netra Tarpan'],
      description:
        'A traditional Ayurvedic eye therapy in which medicated ghee is retained over the closed eyes within a ring of dough. It rests on traditional concepts and is not an established treatment for eye disease.',
    },
    {
      '@type': 'MedicalWebPage',
      '@id': 'https://ramacarepolyclinic.ae/services/netra-tarpana-dubai/#webpage',
      url: 'https://ramacarepolyclinic.ae/services/netra-tarpana-dubai/',
      name: 'Netra Tarpana Dubai | Ayurvedic Eye Therapy | RamaCare',
      headline: 'Netra Tarpana in Dubai, Jumeirah 1',
      description:
        'Netra Tarpana in Dubai explained: the traditional Ayurvedic eye therapy, how it is performed, evidence limits and precautions. Ayurveda in Jumeirah 1.',
      inLanguage: 'en-AE',
      isPartOf: {
        '@id': 'https://ramacarepolyclinic.ae/#website',
      },
      publisher: {
        '@id': 'https://ramacarepolyclinic.ae/#clinic',
      },
      breadcrumb: {
        '@id': 'https://ramacarepolyclinic.ae/services/netra-tarpana-dubai/#breadcrumb',
      },
      about: {
        '@id': 'https://ramacarepolyclinic.ae/services/netra-tarpana-dubai/#therapy',
      },
      lastReviewed: '2026-10-16',
      reviewedBy: {
        '@id': 'https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#person',
      },
      mainEntity: {
        '@id': 'https://ramacarepolyclinic.ae/services/netra-tarpana-dubai/#faq',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://ramacarepolyclinic.ae/services/netra-tarpana-dubai/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://ramacarepolyclinic.ae/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://ramacarepolyclinic.ae/services/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Ayurveda',
          item: 'https://ramacarepolyclinic.ae/services/ayurveda-dubai/',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Netra Tarpana Dubai',
          item: 'https://ramacarepolyclinic.ae/services/netra-tarpana-dubai/',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://ramacarepolyclinic.ae/services/netra-tarpana-dubai/#faq',
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

export default function NetraTarpanaDubai() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleWhatsApp = () => {
    window.open(
      'https://api.whatsapp.com/send?phone=971566597878&text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Ayurvedic%20therapies%20at%20RamaCare%20Polyclinic.',
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
        <meta name="robots" content="index, follow" />

        {/* OpenGraph */}
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={URL} />
        <meta property="og:site_name" content="RamaCare Polyclinic" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta
          property="og:image:alt"
          content="Illustration of a tray with a small bowl, a dough ring and sterile gauze for a traditional Ayurvedic eye therapy"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta
          name="twitter:image:alt"
          content="Illustration of a tray with a small bowl, a dough ring and sterile gauze for a traditional Ayurvedic eye therapy"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </Head>

      <main className="min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-[#1F5E4B] selection:text-white">
        
        {/* STICKY QUICK NAVIGATION BAR */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 px-4 py-3 hidden lg:block shadow-2xs">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between text-xs font-semibold text-stone-600">
            <nav className="flex items-center gap-4">
              <a href="#introduction" className="hover:text-[#1F5E4B] transition-colors">Introduction</a>
              <span>•</span>
              <a href="#what-is-netra-tarpana" className="hover:text-[#1F5E4B] transition-colors">What Is It</a>
              <span>•</span>
              <a href="#how-performed" className="hover:text-[#1F5E4B] transition-colors">Procedure</a>
              <span>•</span>
              <a href="#potential-benefits" className="hover:text-[#1F5E4B] transition-colors">Benefits & Limits</a>
              <span>•</span>
              <a href="#digital-eye-strain" className="hover:text-[#1F5E4B] transition-colors">Digital Strain</a>
              <span>•</span>
              <a href="#dry-eyes" className="hover:text-[#1F5E4B] transition-colors">Dry Eyes</a>
              <span>•</span>
              <a href="#suitability" className="hover:text-[#1F5E4B] transition-colors">Suitability</a>
              <span>•</span>
              <a href="#precautions" className="hover:text-[#1F5E4B] transition-colors">Precautions</a>
              <span>•</span>
              <a href="#comparison" className="hover:text-[#1F5E4B] transition-colors">Comparison</a>
              <span>•</span>
              <a href="#what-to-ask" className="hover:text-[#1F5E4B] transition-colors">What to Ask</a>
              <span>•</span>
              <a href="#ramacare" className="hover:text-[#1F5E4B] transition-colors">RamaCare Polyclinic</a>
              <span>•</span>
              <a href="#faqs" className="hover:text-[#1F5E4B] transition-colors">FAQs</a>
            </nav>
            <a
              href="#conclusion"
              className="px-4 py-1.5 rounded-full bg-[#1F5E4B] text-white font-bold hover:bg-[#143D31] transition-all shadow-xs"
            >
              Contact Clinic
            </a>
          </div>
        </div>

        {/* HERO SECTION / INTRODUCTION (BALANCED 2-COLUMN COMPOSITION) */}
        <section id="introduction" className="relative pt-10 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-12 bg-white border-b border-stone-200 overflow-hidden">
          <div className="max-w-[1440px] mx-auto">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-8">
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
                  Netra Tarpana Dubai
                </li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left 7 Columns: Editorial Headings and Text */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ayurveda in Jumeirah 1</span>
                </div>

                {/* EXACT H1 */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tight leading-tight">
                  Netra Tarpana in Dubai, Jumeirah 1
                </h1>

                {/* EXACT H2 */}
                <h2 className="text-xl sm:text-2xl font-bold text-[#1F5E4B] tracking-tight">
                  Netra Tarpana in Dubai: A Plain-English Introduction
                </h2>

                {/* 3 VERBATIM PARAGRAPHS */}
                <div className="space-y-4 text-stone-800 text-base sm:text-lg leading-relaxed">
                  <p>
                    Netra Tarpana is a traditional Ayurvedic eye therapy in which medicated ghee is held around the closed eyes, inside a ring of dough, for a set period. The name joins netra, meaning eye, with tarpana, a Sanskrit word for nourishing. It belongs to a group of classical Ayurvedic eye procedures called kriyakalpa.
                  </p>
                  <p>
                    People searching for Netra Tarpana Dubai usually want to know three things: what the procedure involves, whether it helps tired or dry eyes, and whether it is safe to put anything near the eyes. This guide answers those questions plainly, separates tradition from evidence, and explains when an eye examination should come first.
                  </p>
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-stone-900 font-medium text-sm sm:text-base">
                    One point up front. Traditional use does not show that Netra Tarpana treats eye disease or improves eyesight. Readers in Dubai, including those near Jumeirah 1, will also find a section on what RamaCare Polyclinic can and cannot confirm about this therapy.
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1F5E4B] hover:bg-[#143D31] text-white font-bold text-xs sm:text-sm shadow-md transition cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-300" />
                    <span>WhatsApp (+971 56 659 7878)</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleCall}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF8F5] hover:bg-stone-100 text-stone-800 border border-stone-300 font-bold text-xs sm:text-sm shadow-xs transition cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-[#1F5E4B]" />
                    <span>Call Clinic (+971 4 286 2006)</span>
                  </button>
                </div>
              </div>

              {/* Right 5 Columns: IMAGE 1 Prominently Featured */}
              <div className="lg:col-span-5">
                <figure className="bg-[#FAF8F5] p-4 sm:p-5 rounded-3xl border border-stone-200 shadow-md">
                  <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-stone-100 shadow-inner">
                    <img
                      src="/images/netra-tarpana-traditional-setup-illustration.webp"
                      alt="Illustration of a tray with a small bowl, a dough ring and sterile gauze for a traditional Ayurvedic eye therapy"
                      width={1200}
                      height={675}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: WHAT IS NETRA TARPANA? */}
        <section id="what-is-netra-tarpana" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] border-b border-stone-200">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-black text-[#1F5E4B] uppercase tracking-widest block mb-2">
                Classical Heritage
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                What Is Netra Tarpana?
              </h2>
              <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4"></div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-sm space-y-5 text-stone-800 text-base sm:text-lg leading-relaxed">
                <p>
                  In Sanskrit, tarpana means nourishment, so Netra Tarpana means nourishing the tissues of the eye. Classical texts treat it as the foremost of the kriyakalpa, a family of local eye procedures that also includes seka (a fine stream of liquid over the closed eyes) and aschyotana (medicated drops).
                </p>

                <p>
                  In the usual description, lukewarm medicated ghee is retained over the closed eyes within a well formed from a ring of black gram dough, for a period the practitioner decides. Ingredients, preparation and timing differ between texts and practitioners, so there is no single standard version. You may also see it spelt Netra Tarpan.
                </p>
              </div>

              <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-sm space-y-5 text-stone-800 text-base sm:text-lg leading-relaxed flex flex-col justify-between">
                <p>
                  Terminology is loose. Some sources use Netra Basti or Netra Vasti as another name for the same practice, while others treat tarpana, putapaka and basti as separate procedures. Ask any provider exactly which one they mean.
                </p>

                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-stone-900 font-semibold text-sm sm:text-base">
                  Finally, this is a traditional therapy rooted in Ayurvedic concepts. It is not a modern ophthalmic treatment, and it is not an established treatment for any eye disease.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: HOW IS NETRA TARPANA TRADITIONALLY PERFORMED? */}
        <section id="how-performed" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white border-b border-stone-200">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-black text-[#1F5E4B] uppercase tracking-widest block mb-2">
                Procedure & Steps
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                How Is Netra Tarpana Traditionally Performed?
              </h2>
              <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4"></div>
              <p className="text-stone-600 text-sm sm:text-base mt-4 font-medium">
                Procedures differ, so this is a general outline rather than any clinic&apos;s protocol.
              </p>
            </div>

            {/* 7 Clinical Steps Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
              {[
                { num: '01', title: 'Consultation.', desc: 'The practitioner reviews your health history.' },
                { num: '02', title: 'Eye and health review.', desc: 'Symptoms, allergies, existing eye conditions and medications are discussed.' },
                { num: '03', title: 'Referral check.', desc: 'The practitioner decides whether you should see an eye-care professional first.' },
                { num: '04', title: 'Explanation and consent.', desc: 'The proposed procedure, materials and precautions are explained and you agree to proceed.' },
                { num: '05', title: 'Supervised treatment.', desc: 'If suitable, the procedure is carried out in a hygienic setting under supervision.' },
                { num: '06', title: 'Monitoring.', desc: 'Discomfort or irritation is watched for, and you can stop at any time.' },
                { num: '07', title: 'Aftercare.', desc: 'You receive guidance and are told when to seek medical help.' },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF8F5] p-6 rounded-3xl border border-stone-200 shadow-xs flex flex-col justify-between"
                >
                  <span className="w-8 h-8 rounded-full bg-[#1F5E4B] text-white text-xs font-bold flex items-center justify-center mb-4">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-stone-900 mb-1.5">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Verbatim Caveat Box */}
            <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-3xl border border-stone-200 text-stone-800 text-sm sm:text-base leading-relaxed text-center font-medium max-w-4xl mx-auto">
              This page does not give a standard duration, ingredient list or dosage, because these vary and should come from the treating practitioner. It also does not describe how to prepare or apply anything yourself. Please do not try this at home.
            </div>
          </div>
        </section>

        {/* SECTION 3: POTENTIAL BENEFITS AND TRADITIONAL USES */}
        <section id="potential-benefits" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] border-b border-stone-200">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-black text-[#1F5E4B] uppercase tracking-widest block mb-2">
                Traditional Claims & Evidence Limits
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                Potential Benefits and Traditional Uses
              </h2>
              <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4"></div>
              <p className="text-stone-600 text-sm sm:text-base mt-4 font-medium">
                It helps to label each claim by the kind of support behind it.
              </p>
            </div>

            {/* 5 Claims in Balanced Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {[
                {
                  title: 'A restful session.',
                  desc: 'A plausible short-term effect. A quiet, supervised break away from screens may feel restful, but that is not specific to this therapy.',
                },
                {
                  title: 'Tired eyes.',
                  desc: 'Traditional use. Ayurvedic texts describe the therapy for eye fatigue, and some people explore Ayurvedic treatment for tired eyes. Reliable clinical evidence is limited.',
                },
                {
                  title: 'Dry eyes.',
                  desc: 'Traditional use. A small study of 30 people compared two kinds of Tarpana with each other. That cannot show Tarpana works better than standard dry-eye care.',
                },
                {
                  title: 'Eyesight.',
                  desc: 'A traditional claim only. There is no reliable evidence that Netra Tarpana improves eyesight or changes a prescription.',
                },
                {
                  title: 'Nourishment and rejuvenation.',
                  desc: 'A traditional concept that cannot be measured in modern terms.',
                },
              ].map((claim, idx) => (
                <div key={idx} className="bg-white p-7 rounded-3xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="text-lg font-bold text-stone-900">{claim.title}</h3>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">{claim.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 text-stone-800 text-sm sm:text-base leading-relaxed text-center font-medium max-w-4xl mx-auto">
              Review articles by Ayurvedic authors list many traditional indications. They summarise tradition and practice rather than test it. Results vary, and nobody should expect symptom relief or sharper vision.
            </div>
          </div>
        </section>

        {/* SECTION 4: NETRA TARPANA AND DIGITAL EYE STRAIN */}
        <section id="digital-eye-strain" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white border-b border-stone-200">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-black text-[#1F5E4B] uppercase tracking-widest block mb-2">
                Screen Fatigue & Practical Care
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                Netra Tarpana and Digital Eye Strain
              </h2>
              <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4"></div>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Context and Boundaries */}
              <div className="lg:col-span-6 space-y-6 text-stone-800 text-base sm:text-lg leading-relaxed">
                <p>
                  Digital eye strain is a group of problems that can follow long periods of screen use, including tired, dry eyes, headaches and blurred vision. Ophthalmologists note that screen use can cut blinking by a third to a half, and that viewing distance, glare and poor lighting all contribute.
                </p>

                <p className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-stone-900 font-semibold text-sm sm:text-base">
                  Netra Tarpana is not an established substitute for an eye examination or for these measures. If you choose to explore digital eye strain and Ayurvedic care together, keep the Ayurvedic part alongside them, and see an eye professional if symptoms persist.
                </p>
              </div>

              {/* Right Column: Evidence-based Measures List */}
              <div className="lg:col-span-6 bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-sm space-y-4">
                <p className="text-stone-900 font-bold text-base sm:text-lg">
                  Evidence-based measures are simple:
                </p>

                <div className="space-y-3">
                  {[
                    'Take regular breaks. The 20-20-20 rule means looking at something 20 feet away for 20 seconds every 20 minutes.',
                    'Blink fully and often.',
                    'Position the screen slightly below eye level, reduce glare and adjust room lighting.',
                    'Use artificial tears if your eyes feel dry, and consider a humidifier in dry rooms.',
                    'Have your eyes tested, because uncorrected vision is a common cause. Ophthalmology bodies do not recommend blue-light glasses for this.',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-stone-200 text-xs sm:text-sm font-medium text-stone-800">
                      <CheckCircle2 className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: NETRA TARPANA AND DRY EYES */}
        <section id="dry-eyes" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] border-b border-stone-200">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-black text-[#1F5E4B] uppercase tracking-widest block mb-2">
                Ocular Surface Assessment
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                Netra Tarpana and Dry Eyes
              </h2>
              <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4"></div>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Text */}
              <div className="lg:col-span-6 space-y-5 text-stone-800 text-base sm:text-lg leading-relaxed">
                <p>
                  Dry-eye symptoms include grittiness, burning, redness, watering and blurred vision that comes and goes. Causes can include reduced blinking, dry indoor air, contact lens wear, eyelid problems, allergy, medicines and age.
                </p>

                <p>
                  Persistent dryness should not automatically be blamed on screens. It deserves a proper assessment, because the right treatment depends on the cause, and because some serious eye problems look similar at first.
                </p>

                <div className="p-5 rounded-2xl bg-white border border-stone-200 text-stone-900 font-semibold text-sm sm:text-base shadow-xs">
                  Claims that Netra Tarpana treats dry-eye disease go further than the evidence. Please do not put ghee, oils, herbal extracts or any unapproved substance into your eyes. If dryness is troubling you, an eye professional can recommend appropriate drops and tests.
                </div>
              </div>

              {/* Right Column: IMAGE 3 */}
              <div className="lg:col-span-6">
                <figure className="bg-white p-4 sm:p-5 rounded-3xl border border-stone-200 shadow-md">
                  <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-stone-100">
                    <img
                      src="/images/ayurvedic-consultation-vs-eye-examination-illustration.webp"
                      alt="Two-panel illustration comparing an Ayurvedic consultation with an eye examination"
                      width={1200}
                      height={675}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: CANDIDATE SUITABILITY & CONTRAINDICATIONS */}
        <section id="suitability" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white border-b border-stone-200">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-black text-[#1F5E4B] uppercase tracking-widest block mb-2">
                Candidate Evaluation & Safety
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                Candidate Suitability & Contraindications
              </h2>
              <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4"></div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column (5 cols): Who May Consider */}
              <div className="lg:col-span-5 bg-[#FAF8F5] p-6 sm:p-8 lg:p-9 rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Candidate Evaluation</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1A1A1A] tracking-tight">
                    Who May Consider Learning About Netra Tarpana?
                  </h3>

                  <p className="text-stone-800 text-base sm:text-lg leading-relaxed">
                    People curious about traditional Ayurvedic wellness practices may want to understand this one, including what it involves, how limited the evidence is and what the risks are, before deciding anything. That does not mean any group is automatically suitable. A qualified practitioner must assess suitability, and an ophthalmologist should evaluate eye symptoms or diagnosed eye conditions when appropriate.
                  </p>
                </div>
              </div>

              {/* Right Column (7 cols): Who Should Avoid */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-9 rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-black uppercase tracking-wider">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-700" />
                    <span>Safety First</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1A1A1A] tracking-tight">
                    Who Should Avoid It or Seek Medical Advice First?
                  </h3>

                  <p className="text-stone-700 text-xs sm:text-sm font-semibold">
                    Get professional advice first, and do not let this therapy delay eye care, if you have:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
                    {[
                      'Eye pain, redness, discharge or a suspected infection',
                      'Recent eye surgery or an eye injury',
                      'Known eye disease, or unexplained changes in your vision',
                      'Eye allergies, or sensitivity to the proposed ingredients',
                      'Significant inflammation or a skin condition around the eyes',
                      'Fever or other illness, or any medical situation that could affect safety',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF8F5] border border-stone-200 text-xs sm:text-sm text-stone-800 font-medium">
                        <span className="w-2 h-2 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 text-xs sm:text-sm leading-relaxed font-medium">
                  This list is not exhaustive. Seek prompt medical evaluation for eye pain, significant redness, discharge, light sensitivity or sudden blurred vision. Sudden vision loss or a serious eye injury needs urgent medical care.
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 7: PRECAUTIONS AND POSSIBLE SIDE EFFECTS */}
        <section id="precautions" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] border-b border-stone-200">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-black text-[#1F5E4B] uppercase tracking-widest block mb-2">
                Safety First
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                Netra Tarpana Precautions and Possible Side Effects
              </h2>
              <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4"></div>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: IMAGE 2 */}
              <div className="lg:col-span-6">
                <figure className="bg-white p-4 sm:p-5 rounded-3xl border border-stone-200 shadow-md">
                  <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-stone-100">
                    <img
                      src="/images/ayurvedic-eye-care-hygiene-supervision.webp"
                      alt="Gloved hands preparing a clean tray beside hand sanitiser in a treatment room"
                      width={1200}
                      height={675}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </figure>
              </div>

              {/* Right Column: Verbatim Content */}
              <div className="lg:col-span-6 space-y-5 text-stone-800 text-base sm:text-lg leading-relaxed">
                <p>
                  Anything placed near the eyes carries risks that depend on hygiene and materials. The main concerns are irritation, allergic reaction, and contamination leading to infection, particularly if ingredients are unsuitable or poorly prepared.
                </p>

                <p>
                  I found no safety studies specific to Netra Tarpana, so its risk is not well measured. It would be wrong to call it completely safe, and equally wrong to call it inherently dangerous. What can be said is that careful practice matters:
                </p>

                <div className="space-y-2.5">
                  {[
                    'Clean, appropriate materials and a hygienic setting',
                    'A qualified practitioner using clinical judgement',
                    'A frank discussion of eye conditions, contact lenses and medications beforehand',
                    'Stopping straight away if there is stinging, pain or blurring',
                    'Seeking medical care for symptoms that persist or are severe',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm text-stone-800 font-medium">
                      <Shield className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 font-semibold text-xs sm:text-sm">
                  Risky home versions, such as using an eye cup with ghee, are exactly what this page advises against.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: COMPARISON TABLE */}
        <section id="comparison" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white border-b border-stone-200">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-black text-[#1F5E4B] uppercase tracking-widest block mb-2">
                Comparative Overview
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                Netra Tarpana Compared With Other Ayurvedic Eye-Care Practices
              </h2>
              <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4"></div>
              <p className="text-stone-600 text-sm sm:text-base mt-4 font-medium">
                Treatment names and methods vary between sources, so treat this as a rough guide.
              </p>
            </div>

            {/* Full Width Comparison Table */}
            <div className="bg-white rounded-3xl border border-stone-200 shadow-md overflow-hidden mb-8 max-w-5xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-[#1F5E4B] text-white text-xs sm:text-sm font-bold uppercase tracking-wider">
                      <th className="py-4 px-6 border-b border-emerald-900/30">Practice</th>
                      <th className="py-4 px-6 border-b border-emerald-900/30">General description</th>
                      <th className="py-4 px-6 border-b border-emerald-900/30">Note</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm text-stone-800">
                    <tr className="hover:bg-stone-50/80 transition-colors">
                      <td className="py-4 px-6 font-bold text-stone-900">Netra Tarpana</td>
                      <td className="py-4 px-6">Medicated ghee retained over closed eyes in a dough ring</td>
                      <td className="py-4 px-6 text-stone-600">Methods and terms vary</td>
                    </tr>
                    <tr className="hover:bg-stone-50/80 transition-colors bg-[#FAF8F5]/60">
                      <td className="py-4 px-6 font-bold text-stone-900">Seka</td>
                      <td className="py-4 px-6">A fine stream of medicated liquid over the closed eyes</td>
                      <td className="py-4 px-6 text-stone-600">A different technique</td>
                    </tr>
                    <tr className="hover:bg-stone-50/80 transition-colors">
                      <td className="py-4 px-6 font-bold text-stone-900">Aschyotana</td>
                      <td className="py-4 px-6">Medicated drops placed in the eye</td>
                      <td className="py-4 px-6 text-stone-600">Carries its own hygiene risks</td>
                    </tr>
                    <tr className="hover:bg-stone-50/80 transition-colors bg-[#FAF8F5]/60">
                      <td className="py-4 px-6 font-bold text-stone-900">Anjana</td>
                      <td className="py-4 px-6">Medicinal paste or powder applied to the inner lower lid</td>
                      <td className="py-4 px-6 text-stone-600">Not interchangeable with Tarpana</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-3xl border border-stone-200 text-stone-800 text-sm sm:text-base leading-relaxed text-center font-medium max-w-4xl mx-auto">
              None of these is proven superior, and none replaces ophthalmology. RamaCare&apos;s{' '}
              <Link
                href="/services/shirodhara-therapy-in-dubai/"
                className="text-[#1F5E4B] font-bold underline underline-offset-4 hover:text-[#143D31]"
              >
                Shirodhara
              </Link>{' '}
              is a forehead therapy rather than an eye procedure. Anyone exploring Ayurvedic eye care in Dubai should ask each provider which procedure they mean.
            </div>
          </div>
        </section>

        {/* SECTION 9: WHAT TO ASK BEFORE CONSIDERING NETRA TARPANA */}
        <section id="what-to-ask" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] border-b border-stone-200">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-black text-[#1F5E4B] uppercase tracking-widest block mb-2">
                Patient Checklist
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                What to Ask Before Considering Netra Tarpana
              </h2>
              <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4"></div>
              <p className="text-stone-600 text-sm sm:text-base mt-4 font-medium">
                Useful questions for any Ayurveda clinic in Dubai:
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: 7 Questions */}
              <div className="lg:col-span-7 space-y-3">
                {[
                  'What are the practitioner\'s qualifications and licensing?',
                  'Is the procedure currently offered here?',
                  'What materials are used, and how is hygiene maintained?',
                  'What risks or contraindications apply to my situation?',
                  'Should I have an eye examination or medical clearance first?',
                  'What evidence supports the proposed purpose?',
                  'What symptoms should make me stop and seek medical care?',
                ].map((question, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 shadow-2xs">
                    <CheckSquare className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" />
                    <span>{question}</span>
                  </div>
                ))}
                <p className="pt-2 text-stone-700 italic text-sm font-medium">
                  A good provider answers these plainly and does not promise results.
                </p>
              </div>

              {/* Right Column: IMAGE 4 */}
              <div className="lg:col-span-5">
                <figure className="bg-white p-4 sm:p-5 rounded-3xl border border-stone-200 shadow-md">
                  <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-stone-100">
                    <img
                      src="/images/eye-care-suitability-consultation.webp"
                      alt="Two people talking at a desk about health history in a quiet consultation room"
                      width={1200}
                      height={675}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <figcaption className="text-center text-xs sm:text-sm font-semibold text-stone-600 mt-2.5 italic">
                    Illustrative image.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10: NETRA TARPANA AT RAMACARE POLYCLINIC */}
        <section id="ramacare" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white border-b border-stone-200">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-black text-[#1F5E4B] uppercase tracking-widest block mb-2">
                Clinic Verification
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                Netra Tarpana at RamaCare Polyclinic
              </h2>
              <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4"></div>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 bg-[#FAF8F5] p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm space-y-6 text-stone-800 text-base sm:text-lg leading-relaxed">
                

                <p>
                  RamaCare Polyclinic is a DHA-licensed clinic at 12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai. Its{' '}
                  <Link
                    href="/services/ayurveda-dubai/"
                    className="text-[#1F5E4B] font-bold underline underline-offset-4 hover:text-[#143D31]"
                  >
                    Ayurveda department
                  </Link>{' '}
                  starts every patient with a consultation with the clinic&apos;s Ayurvedic doctor, and its therapies include Panchakarma, Abhyanga, Kizhi and Shirodhara. Netra Tarpana is not among the therapies currently listed, so please ask the team whether it is offered rather than assuming it is.
                </p>
              </div>

              {/* Right Column: Contact Details Card */}
              <div className="lg:col-span-5 bg-gradient-to-br from-white to-[#FAF8F5] p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-md space-y-5">
                <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                  For Ayurvedic therapies in Dubai, including questions about eye-care suitability and practitioner qualifications:
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-stone-800">
                  <div className="p-3.5 rounded-2xl bg-white border border-stone-200 flex items-center justify-between">
                    <span className="font-semibold text-stone-500">Website:</span>
                    <a href="https://ramacarepolyclinic.ae/" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1F5E4B] hover:underline">
                      https://ramacarepolyclinic.ae/
                    </a>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-stone-200 flex items-center justify-between">
                    <span className="font-semibold text-stone-500">Phone:</span>
                    <a href="tel:+97142862006" className="font-bold text-stone-900 hover:text-[#1F5E4B]">
                      +971 4 286 2006
                    </a>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-stone-200 flex items-center justify-between">
                    <span className="font-semibold text-stone-500">WhatsApp:</span>
                    <button onClick={handleWhatsApp} className="font-bold text-[#25D366] hover:underline">
                      +971 56 659 7878
                    </button>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-stone-200 flex items-center justify-between">
                    <span className="font-semibold text-stone-500">Email:</span>
                    <a href="mailto:query@ramacarepolyclinic.ae" className="font-bold text-stone-900 hover:underline">
                      query@ramacarepolyclinic.ae
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 11: FREQUENTLY ASKED QUESTIONS ABOUT NETRA TARPANA DUBAI */}
        <section id="faqs" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] border-b border-stone-200">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-black text-[#1F5E4B] uppercase tracking-widest block mb-2">
                Questions & Answers
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                Frequently Asked Questions About Netra Tarpana Dubai
              </h2>
              <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-stone-200 rounded-2xl overflow-hidden transition-all shadow-2xs"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left py-4 sm:py-5 px-6 sm:px-7 flex items-center justify-between gap-4 font-bold text-stone-900 text-sm sm:text-base hover:text-[#1F5E4B] transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span>{idx + 1}. {faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#1F5E4B]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 sm:px-7 pb-6 pt-1 text-stone-700 text-sm sm:text-base leading-relaxed border-t border-stone-100 bg-[#FAF8F5]/50">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 12: CONCLUSION AND NEXT STEP */}
        <section id="conclusion" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#143D31] text-[#FAF8F5]">
          <div className="max-w-[1440px] mx-auto">
            <div className="w-full bg-[#11352a] rounded-3xl p-8 sm:p-14 lg:p-16 border border-white/10 shadow-2xl text-center space-y-6 max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Conclusion and Next Step
              </h2>
              <div className="w-20 h-1 bg-[#C9A961] rounded-full mx-auto"></div>

              <div className="space-y-4 text-stone-200 text-base sm:text-lg leading-relaxed">
                <p>
                  Netra Tarpana is a traditional Ayurvedic eye therapy built around retaining medicated ghee over the closed eyes. Its place in tradition is clear. Its effectiveness for eye conditions is not established, and eye safety has to come first, which means proper hygiene, professional assessment and an eye examination when symptoms call for one.
                </p>

                <p className="text-stone-400 text-xs sm:text-sm italic pt-2">
                  This page is general information and does not replace advice from an eye-care professional.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C9A961] hover:bg-[#d5b66d] text-stone-950 font-bold text-sm sm:text-base shadow-md transition cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-stone-950" />
                  <span>WhatsApp (+971 56 659 7878)</span>
                </button>
                <button
                  type="button"
                  onClick={handleCall}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm sm:text-base shadow-xs transition cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-[#C9A961]" />
                  <span>Call Clinic (+971 4 286 2006)</span>
                </button>
                <Link
                  href="/book-appointment/"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#143D31] hover:bg-stone-100 font-bold text-sm sm:text-base shadow-xs transition cursor-pointer"
                >
                  <Calendar className="w-5 h-5 text-[#143D31]"/>
                  <span>Book an Appointment</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FLOATING ACTION BOTTOM BAR (MOBILE ONLY) */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-4 py-3 shadow-lg">
          <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
            <button
              type="button"
              onClick={handleWhatsApp}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
            <button
              type="button"
              onClick={handleCall}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#1F5E4B] text-white font-bold text-xs shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call Clinic</span>
            </button>
            <Link
              href="/book-appointment/"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full bg-stone-900 text-white font-bold text-xs shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>Enquire</span>
            </Link>
          </div>
        </div>

        {/* FLOATING WHATSAPP BUTTON (DESKTOP) */}
        <button
          type="button"
          onClick={handleWhatsApp}
          className="hidden md:flex fixed bottom-6 right-6 z-50 items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
        </button>

      </main>
    </Layout>
  );
}
