import React, { useState, useEffect, useRef } from 'react';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useRouter } from 'next/router';

const SITE_URL = 'https://ramacarepolyclinic.ae';
const PAGE_PATH = '/services/hydrafacial-before-and-after/';

export default function HydrafacialBeforeAndAfterPage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const navRef = useRef(null);
  const timelineRef = useRef(null);

  const scrollNav = (direction) => {
    if (navRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      navRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Phone and appointment handlers
  const handleCall = () => {
    window.location.href = 'tel:+97142862006';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic%2C%20I%20would%20like%20to%20book%20a%20Hydrafacial%20treatment%20consultation.', '_blank');
  };

  const handleBookAppointment = () => {
    router.push('/book-appointment');
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const tocItems = [
    { id: 'intro', label: 'Introduction', num: '01' },
    { id: 'quick-answer', label: 'Quick Answer', num: '02' },
    { id: 'what-is', label: 'What Is Hydrafacial', num: '03' },
    { id: 'how-it-works', label: 'How Hydrafacial Works', num: '04' },
    { id: 'what-can-address', label: 'What Hydrafacial Can Address', num: '05' },
    { id: 'by-skin-concern', label: 'Before and After by Concern', num: '06' },
    { id: 'evaluate-photos', label: 'How to Evaluate Photos', num: '07' },
    { id: 'results-timeline', label: 'Results Timeline', num: '08' },
    { id: 'factors-affect', label: 'Factors That Affect Results', num: '09' },
    { id: 'sessions-needed', label: 'Sessions Needed', num: '10' },
    { id: 'vs-other-facials', label: 'Hydrafacial vs Other Facials', num: '11' },
    { id: 'good-candidate', label: 'Good Candidate', num: '12' },
    { id: 'consultation', label: 'What Happens During Consultation', num: '13' },
    { id: 'recovery-downtime', label: 'Recovery and Downtime', num: '14' },
    { id: 'maintaining-results', label: 'Maintaining Your Results', num: '15' },
    { id: 'cost-dubai', label: 'Hydrafacial Cost in Dubai', num: '16' },
    { id: 'choose-clinic', label: 'How to Choose a Clinic', num: '17' },
    { id: 'why-choose-us', label: 'Why Choose RamaCare Polyclinic', num: '18' },
    { id: 'faq', label: 'FAQ', num: '19' },
    { id: 'book-now', label: 'Book a Consultation', num: '20' }
  ];

  const timelineData = [
    {
      stage: 'Immediately After',
      observed: 'Skin often appears brighter, smoother, and more hydrated; pores may look visibly clearer',
      consideration: 'This immediate effect is partly due to hydration and extraction, and can be more pronounced than what remains days later'
    },
    {
      stage: '24–72 Hours',
      observed: 'Any mild redness or sensitivity, if present, typically settles; hydration effects may begin to normalize',
      consideration: 'Skin gradually returns toward its baseline without ongoing maintenance'
    },
    {
      stage: 'After a Single Session',
      observed: 'Some patients notice a temporary “glow” effect that fades over subsequent days',
      consideration: 'A single session is often chosen for short-term refreshment rather than long-term change'
    },
    {
      stage: 'After a Series of Sessions',
      observed: 'Cumulative improvements in texture, tone evenness, and pore appearance may become more noticeable over time',
      consideration: 'Consistency and spacing between sessions, as recommended during consultation, influence these longer-term results'
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Hydrafacial Before and After: What Results to Realistically Expect | RamaCare Polyclinic</title>
        <meta name="description" content="See what to realistically expect from Hydrafacial before and after treatment. Learn how results develop, what affects them, and how to read photos." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${SITE_URL}${PAGE_PATH}`} />

        {/* JSON-LD Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "@id": "https://ramacarepolyclinic.ae/#organization",
              "name": "RamaCare Polyclinic",
              "url": "https://ramacarepolyclinic.ae",
              "image": "https://ramacarepolyclinic.ae/images/Logo.png",
              "telephone": "+971 4 286 2006",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jumeirah 1",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "postalCode": "00000",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "25.2281",
                "longitude": "55.2588"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
                  "opens": "09:00",
                  "closes": "21:00"
                }
              ],
              "medicalSpecialty": "Dermatology",
              "availableService": {
                "@type": "MedicalProcedure",
                "name": "Hydrafacial Treatment"
              },
              "sameAs": [
                "https://www.instagram.com/ramacarepolyclinic/",
                "https://www.facebook.com/ramacarepolyclinic/"
              ]
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://ramacarepolyclinic.ae/services/hydrafacial-before-and-after/#webpage",
              "url": "https://ramacarepolyclinic.ae/services/hydrafacial-before-and-after/",
              "name": "Hydrafacial Before and After: What Results to Realistically Expect",
              "description": "See what to realistically expect from Hydrafacial before and after treatment. Learn how results develop, what affects them, and how to read photos.",
              "inLanguage": "en-AE",
              "isPartOf": {
                "@id": "https://ramacarepolyclinic.ae/#website"
              },
              "about": {
                "@id": "https://ramacarepolyclinic.ae/#organization"
              },
              "primaryImageOfPage": {
                "@type": "ImageObject",
                "url": "https://ramacarepolyclinic.ae/images/hydrafacial-treatment-dubai.jpg"
              },
              "datePublished": "2026-08-10",
              "dateModified": "2026-08-10"
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://ramacarepolyclinic.ae/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Skin Treatments",
                  "item": "https://ramacarepolyclinic.ae/services/skin-treatments/"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Hydrafacial Before and After",
                  "item": "https://ramacarepolyclinic.ae/services/hydrafacial-before-and-after/"
                }
              ]
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What does Hydrafacial before and after actually show?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It typically shows improved hydration, a brighter complexion, and clearer-looking pores immediately after treatment, with more cumulative texture and tone improvement visible after a series of sessions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long do Hydrafacial results last?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The immediate “glow” effect often fades over several days, while cumulative benefits from regular sessions may last longer with consistent maintenance and skincare."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is one Hydrafacial session enough to see results?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Many patients notice a visible difference after a single session, particularly in hydration and pore appearance, though more significant texture or tone changes generally develop with a series of sessions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are Hydrafacial before-and-after photos accurate?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "They can be informative but are also influenced by lighting, angle, skin preparation, and timing, so they should be viewed as illustrative rather than a guarantee of your own results."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Hydrafacial help with acne or congestion?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It can help reduce the visible appearance of congestion through extraction, though it is not typically considered a primary treatment for active acne, which may require a different approach."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Hydrafacial reduce wrinkles?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It may temporarily soften the appearance of fine, dehydration-related lines through hydration, but it does not significantly change deeper structural wrinkles."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How many Hydrafacial sessions do I need?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "This depends on your skin goals and concerns, and is best determined following a consultation rather than a fixed number."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is there downtime after Hydrafacial?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most patients experience little to no downtime, though mild, temporary redness is possible for some individuals."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can Hydrafacial help with dull skin?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, brightening is one of the more commonly reported immediate effects, largely due to exfoliation and hydration."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Hydrafacial suitable for sensitive skin?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is generally well tolerated, though individual suitability should be assessed during a consultation given your specific skin history."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How often should I get a Hydrafacial?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Frequency varies by individual goals; some patients get occasional sessions for events, while others schedule regular monthly maintenance sessions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can Hydrafacial treat pigmentation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It may offer mild support for overall tone evenness, but it is generally not considered a primary treatment for more significant or stubborn pigmentation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the difference between Hydrafacial and a regular facial?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hydrafacial uses a vacuum-based device to combine exfoliation, extraction, and hydration in one step, while a traditional facial typically relies on manual techniques and topical products."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can men get Hydrafacial?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Hydrafacial is not gender-specific and can be suitable for a range of skin types and concerns."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does Hydrafacial cost in Dubai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Cost depends on the specific treatment plan, add-ons, and number of sessions, and is best discussed during a consultation."
                  }
                }
              ]
            })
          }}
        />
      </Head>

      {/* Hero Section: Editorial visual design, oversized typography and asymmetric layout */}
      <header className="relative min-h-[90vh] flex flex-col justify-center bg-[#F5F1EA] overflow-hidden pt-24 pb-12 px-6">
        <div className="absolute inset-0 z-0 opacity-15">
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#1F5E4B] filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#D4A574] filter blur-3xl"></div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1F5E4B]/5 transform skew-x-12 origin-top-right"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center text-xs font-medium text-[#5F5F5F] gap-1.5">
            <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
            <span className="mx-1">/</span>
            <Link href="/services/skin-treatment-dubai/" className="hover:text-[#1F5E4B] transition-colors">Skin Treatments</Link>
            <span className="mx-1">/</span>
            <span className="text-[#1F5E4B]">Hydrafacial Before and After</span>
          </nav>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 border-b border-[#D4A574] pb-2">
              <span className="w-2 h-2 rounded-full bg-[#1F5E4B]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#1F5E4B]">RamaCare Polyclinic Dubai</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans text-[#1A1A1A] leading-tight font-extrabold tracking-tight">
              Hydrafacial Before and After: <span className="text-[#1F5E4B] block mt-2">What Results to Realistically Expect</span>
            </h1>

            <div id="intro" className="space-y-6 text-[#5F5F5F] max-w-2xl text-lg leading-relaxed font-light font-sans">
              <p>
                Searching “Hydrafacial before and after” usually means one thing: you want to know what this treatment can actually do before you book it. Maybe you’ve scrolled through glowing photos online and wondered how much of that is real, how much is lighting and filters, and what your own skin might realistically look like afterward.
              </p>
              <p>
                That’s a fair question, and an important one. Hydrafacial has become one of the most requested facial treatments precisely because it’s marketed as gentle, quick, and visible almost immediately — and for many patients, there is a noticeable change right after a session. But “noticeable” and “dramatic” aren’t always the same thing, and what shows up in a single treatment is different from what develops after a series of sessions tailored to your specific skin.
              </p>
              <p>
                At RamaCare Polyclinic in Dubai, we approach Hydrafacial the way we approach any skin treatment: with an assessment first, honest expectations second, and a treatment plan built around your actual skin — not a generic before-and-after photo you found online. This page walks through what Hydrafacial before-and-after results genuinely look like, how to interpret photos you see elsewhere, what influences your own outcome, and what a realistic timeline looks like.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={handleBookAppointment}
                  className="inline-flex items-center justify-center gap-2 bg-[#1F5E4B] text-white px-7 py-3.5 rounded-xl font-bold hover:bg-[#1a4f40] transition-all text-sm"
                >
                  <LucideIcons.CalendarDays className="w-4 h-4" />
                  Book a Consultation
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#1F5E4B]/20 text-[#1F5E4B] px-7 py-3.5 rounded-xl font-bold hover:border-[#1F5E4B] transition-all text-sm"
                >
                  <LucideIcons.MessageCircle className="w-4 h-4" />
                  WhatsApp
                </button>
              </div>
            </div>
          </div>

          <div className="relative w-full">
            <div className="relative border border-[#E9E2D6] rounded-3xl p-6 bg-white shadow-xl w-full max-w-xl lg:max-w-none mx-auto transform hover:scale-[1.01] transition-all duration-500">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#D4A574] text-white flex items-center justify-center font-sans text-xl rounded-full shadow-lg">01</div>
              <img 
                src="/images/skin-consultation-hydrafacial-assessment.jpg" 
                alt="Skin consultation for Hydrafacial assessment at RamaCare Polyclinic Dubai" 
                className="w-full h-[450px] object-cover rounded-2xl mb-4"
              />
              <p className="text-xs text-[#5F5F5F] leading-relaxed italic text-center">
                “A personalized skin assessment is the essential starting point for Hydrafacial.”
              </p>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#F0F7F4] border border-[#1F5E4B]/10 rounded-3xl -z-10 transform rotate-12"></div>
          </div>
        </div>
      </header>

      {/* Sticky Horizontal Editorial Index */}
      <div className="sticky top-20 bg-white/95 backdrop-blur-md border-b border-[#E9E2D6] z-30 py-4 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-6 text-xs font-bold uppercase tracking-wider relative overflow-hidden">
          <span className="text-[#1F5E4B] font-extrabold border-r border-[#E9E2D6] pr-6 shrink-0 flex items-center gap-2">
            <LucideIcons.BookOpen className="w-4 h-4 text-[#D4A574]" /> Editorial Index
          </span>

          <div className="relative flex-grow flex items-center overflow-hidden">
            {/* Scroll Left Button */}
            <button
              onClick={() => scrollNav('left')}
              className="absolute left-0 z-10 bg-gradient-to-r from-white via-white/80 to-transparent pr-4 pl-1 text-[#5F5F5F] hover:text-[#1F5E4B] transition-colors"
            >
              <LucideIcons.ChevronLeft className="w-5 h-5" />
            </button>

            <div
              ref={navRef}
              className="flex gap-6 overflow-x-auto scrollbar-none py-1 px-6 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-2 text-[#5F5F5F] hover:text-[#1F5E4B] transition-colors shrink-0"
                >
                  <span className="font-sans text-[#D4A574]">{item.num}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>

            {/* Scroll Right Button */}
            <button
              onClick={() => scrollNav('right')}
              className="absolute right-0 z-10 bg-gradient-to-l from-white via-white/80 to-transparent pl-4 pr-1 text-[#5F5F5F] hover:text-[#1F5E4B] transition-colors"
            >
              <LucideIcons.ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Layout with Horizontal Sticky Navigation & Editorial Content */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="space-y-28">

          {/* Quick Answer */}
          <article id="quick-answer" className="relative group bg-[#F0F7F4] border border-[#1F5E4B]/10 rounded-3xl p-8 lg:p-12 shadow-sm transition-all duration-300">
            <div className="absolute -top-6 left-8 bg-[#1F5E4B] text-white px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
              Quick Answer
            </div>
            <div className="space-y-6 pt-4">
              <h2 className="text-2xl lg:text-3xl font-sans text-[#1A1A1A] font-bold">
                What Does Hydrafacial Before and After Actually Show?
              </h2>
              <p className="text-[#5F5F5F] text-lg leading-relaxed font-light">
                Hydrafacial before-and-after photos typically show improvements in skin texture, tone evenness, hydration, and the appearance of congested pores immediately after a single session, with more cumulative improvement in tone and texture visible after a series of treatments. Results vary by skin type, concern, and consistency, and photos can be significantly influenced by lighting, angle, and skin preparation — so they should be viewed as illustrative rather than predictive of your own results.
              </p>
            </div>
          </article>

          {/* What Is Hydrafacial? */}
          <article id="what-is" className="grid md:grid-cols-[1.2fr_1fr] gap-8 items-stretch">
            <div className="space-y-6 flex flex-col justify-center">
              <div className="text-xs font-bold uppercase tracking-widest text-[#D4A574]">03 / Explanation</div>
              <h2 className="text-3xl font-sans text-[#1A1A1A] font-bold">What Is Hydrafacial?</h2>
              <div className="space-y-4 text-[#5F5F5F] leading-relaxed font-light">
                <p>
                  Hydrafacial is a multi-step skin treatment that combines cleansing, exfoliation, gentle extraction, and hydration in a single session using a specialized device. It’s often described as a “medical-grade” or “clinical” facial because it uses vacuum-based technology to lift debris from pores while simultaneously delivering hydrating and skin-supporting serums.
                </p>
                <p>
                  Unlike more aggressive resurfacing treatments, Hydrafacial is generally well tolerated with little to no downtime, which is part of why it’s frequently chosen by patients who want visible improvement without a lengthy recovery period. For a fuller look at the treatment itself, see our <Link href="/services/hydrafacial-dubai/" className="text-[#1F5E4B] underline font-semibold">Hydrafacial Treatment in Dubai</Link> page.
                </p>
              </div>
            </div>
            <div className="relative w-full">
              <div className="border border-[#E9E2D6] rounded-3xl p-4 bg-white shadow-lg flex flex-col justify-center h-full min-h-[420px]">
                <img 
                  src="/images/hydrafacial-device-extraction.jpg" 
                  alt="Close-up of Hydrafacial vacuum extraction tip on skin" 
                  className="w-full flex-grow object-cover rounded-2xl min-h-[350px]"
                />
                <p className="text-xs text-[#5F5F5F] leading-relaxed italic text-center mt-3 shrink-0">
                  “Suction-based extraction gently clears congested pores.”
                </p>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#D4A574]/10 rounded-full -z-10"></div>
            </div>
          </article>

          {/* How Hydrafacial Works */}
          <article id="how-it-works" className="relative bg-[#F5F1EA] rounded-3xl p-8 lg:p-12 overflow-hidden border border-[#E9E2D6]">
            <div className="absolute right-0 bottom-0 text-[#1F5E4B]/5 pointer-events-none">
              <LucideIcons.Sparkles className="w-80 h-80 translate-x-20 translate-y-20" />
            </div>
            <div className="relative z-10 max-w-4xl space-y-8">
              <div className="text-xs font-bold uppercase tracking-widest text-[#1F5E4B]">04 / Technology</div>
              <h2 className="text-3xl font-sans text-[#1A1A1A] font-bold">How Hydrafacial Works</h2>
              <p className="text-[#5F5F5F] leading-relaxed">
                A typical Hydrafacial session follows a structured sequence:
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                <div className="bg-white border border-[#E9E2D6]/40 p-6 rounded-2xl space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F0F7F4] flex items-center justify-center text-[#1F5E4B]">
                    <LucideIcons.CheckCircle className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#1A1A1A]">Cleanse and peel</h3>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">removes dead skin cells and surface debris while gently resurfacing the skin</p>
                </div>
                <div className="bg-white border border-[#E9E2D6]/40 p-6 rounded-2xl space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F0F7F4] flex items-center justify-center text-[#1F5E4B]">
                    <LucideIcons.Search className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#1A1A1A]">Extract</h3>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">uses painless suction to help clear out pores of built-up oil and debris</p>
                </div>
                <div className="bg-white border border-[#E9E2D6]/40 p-6 rounded-2xl space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F0F7F4] flex items-center justify-center text-[#1F5E4B]">
                    <LucideIcons.Droplet className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#1A1A1A]">Hydrate</h3>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed font-light font-light">infuses the skin with hydrating serums, often containing antioxidants and peptides</p>
                </div>
                <div className="bg-white border border-[#E9E2D6]/40 p-6 rounded-2xl space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F0F7F4] flex items-center justify-center text-[#1F5E4B]">
                    <LucideIcons.Shield className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#1A1A1A]">Protect</h3>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">a final step that may include additional serums tailored to specific skin concerns</p>
                </div>
              </div>
              <div className="border-t border-[#E9E2D6] pt-6">
                <p className="text-[#5F5F5F] leading-relaxed text-sm font-light">
                  The exact serums and settings used are typically adjusted based on your skin type and concerns, which is part of why two patients can have quite different Hydrafacial experiences and results even on the same day.
                </p>
              </div>
            </div>
          </article>

          {/* What Hydrafacial Can Address */}
          <article id="what-can-address" className="space-y-8">
            <div className="text-xs font-bold uppercase tracking-widest text-[#D4A574]">05 / Indication</div>
            <h2 className="text-3xl font-sans text-[#1A1A1A] font-bold">What Hydrafacial Can Address</h2>
            <p className="text-[#5F5F5F] leading-relaxed font-light">
              Hydrafacial is commonly used to help with the appearance of:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                'Dull or uneven skin tone',
                'Congested or visibly enlarged pores',
                'Mild texture irregularities',
                'Surface-level dryness or dehydration',
                'Fine lines associated with dehydration',
                'Mild, superficial pigmentation concerns',
                'General skin refreshment before an event'
              ].map((item, i) => (
                <div key={i} className="border border-[#E9E2D6] rounded-2xl p-6 bg-white hover:border-[#1F5E4B] transition-colors duration-300">
                  <span className="text-xs font-sans text-[#D4A574] block mb-2">Benefit 0{i + 1}</span>
                  <p className="text-sm font-semibold text-[#1A1A1A] leading-snug">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#F5F1EA] rounded-2xl p-6 border border-[#E9E2D6] max-w-3xl">
              <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">
                It’s worth noting that Hydrafacial is generally considered a supportive, maintenance-oriented treatment rather than a solution for deeper concerns such as significant scarring, deep wrinkles, or more advanced pigmentation — those may require a different treatment approach entirely, such as the options covered on our <Link href="/services/laser-rejuvenation-dubai/" className="text-[#1F5E4B] underline font-semibold">Skin Rejuvenation Dubai</Link> page, which is something a consultation can clarify.
              </p>
            </div>
          </article>

          {/* Hydrafacial Before and After by Skin Concern */}
          <article id="by-skin-concern" className="space-y-8">
            <div className="text-xs font-bold uppercase tracking-widest text-[#D4A574]">06 / Specific Concerns</div>
            <h2 className="text-3xl font-sans text-[#1A1A1A] font-bold">Hydrafacial Before and After by Skin Concern</h2>
            <p className="text-[#5F5F5F] leading-relaxed font-light">
              Because “before and after” looks different depending on what’s being treated, here’s a general breakdown of what patients commonly report noticing, by concern:
            </p>

            <div className="space-y-8">
              <div className="bg-white border-l-4 border-[#1F5E4B] p-6 shadow-sm rounded-r-2xl space-y-3">
                <h3 className="text-lg font-bold text-[#1A1A1A]">Congested or Oily Skin</h3>
                <p className="text-[#5F5F5F] text-sm leading-relaxed font-light font-sans">
                  Photos often show visibly less congestion and a smoother pore appearance immediately after treatment, as extracted debris is physically removed during the session. This effect on visible congestion tends to be more noticeable right after treatment than weeks later, since pores can gradually re-accumulate oil and debris over time.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#1F5E4B] p-6 shadow-sm rounded-r-2xl space-y-3">
                <h3 className="text-lg font-bold text-[#1A1A1A]">Dull, Tired-Looking Skin</h3>
                <p className="text-[#5F5F5F] text-sm leading-relaxed font-light font-sans">
                  Before-and-after images frequently highlight a brighter, more even-looking complexion immediately post-treatment, largely due to exfoliation and hydration. This “glow” effect is often one of the most immediately visible changes, though it is not necessarily permanent and can fade over days as the skin returns to its baseline hydration level without maintenance.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#1F5E4B] p-6 shadow-sm rounded-r-2xl space-y-3">
                <h3 className="text-lg font-bold text-[#1A1A1A]">Fine Lines and Dehydration Lines</h3>
                <p className="text-[#5F5F5F] text-sm leading-relaxed font-light font-sans">
                  Photos may show a temporary plumping effect from the hydration step, which can make fine dehydration-related lines look softer. This differs from a reduction in deeper, structural wrinkles, which Hydrafacial is not designed to significantly change.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#1F5E4B] p-6 shadow-sm rounded-r-2xl space-y-3">
                <h3 className="text-lg font-bold text-[#1A1A1A]">Uneven Tone or Mild Pigmentation</h3>
                <p className="text-[#5F5F5F] text-sm leading-relaxed font-light font-sans">
                  Some improvement in overall tone evenness may be visible after a series of sessions, though Hydrafacial alone is generally not considered a primary treatment for more significant or stubborn pigmentation, which may require additional or alternative approaches.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#1F5E4B] p-6 shadow-sm rounded-r-2xl space-y-3">
                <h3 className="text-lg font-bold text-[#1A1A1A]">Overall Skin Texture</h3>
                <p className="text-[#5F5F5F] text-sm leading-relaxed font-light font-sans">
                  A series of regular sessions, rather than a single treatment, tends to show more meaningful before-and-after differences in overall texture, as consistent exfoliation and hydration accumulate over time. Our broader <Link href="/services/facial-dubai/" className="text-[#1F5E4B] underline font-semibold">Facial Treatment in Dubai</Link> guide covers how Hydrafacial fits alongside other facial options for texture concerns.
                </p>
              </div>
            </div>
          </article>

          {/* How to Evaluate Before and After Photos */}
          <article id="evaluate-photos" className="relative overflow-hidden rounded-3xl border border-[#E9E2D6] bg-white p-8 lg:p-12 shadow-sm">
            <div className="absolute right-4 top-4 text-[#D4A574]/15">
              <LucideIcons.Quote className="w-24 h-24 rotate-180" />
            </div>
            <div className="relative z-10 space-y-8">
              <div className="text-xs font-bold uppercase tracking-widest text-[#D4A574]">07 / Critical View</div>
              <h2 className="text-3xl font-sans text-[#1A1A1A] font-bold">How to Evaluate Before and After Photos</h2>
              <p className="text-[#5F5F5F] leading-relaxed font-light max-w-3xl">
                Before-and-after photos — whether from a clinic’s marketing materials or patient testimonials online — should be read carefully. Several factors can significantly influence how dramatic a result appears:
              </p>

              <div className="grid sm:grid-cols-2 gap-6 text-sm">
                {[
                  { title: 'Lighting', text: 'softer or more flattering lighting in “after” photos can exaggerate improvement' },
                  { title: 'Angle and distance', text: 'small changes in camera position affect how skin texture appears' },
                  { title: 'Makeup or skincare products', text: 'some “after” photos are taken with light makeup, highlighter, or hydrating products applied' },
                  { title: 'Skin preparation', text: 'freshly cleansed, hydrated skin naturally looks different than skin photographed at the end of a day' },
                  { title: 'Time elapsed', text: 'a single session’s “after” photo taken minutes later reflects an immediate post-treatment glow, not a long-term outcome' },
                  { title: 'Camera and filter settings', text: 'some images may be softened or color-corrected' },
                  { title: 'Individual differences', text: 'skin type, concern, and starting condition vary significantly between patients' }
                ].map((f, i) => (
                  <div key={i} className="flex gap-3">
                    <LucideIcons.AlertTriangle className="w-5 h-5 text-[#D4A574] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <span className="font-bold text-[#1A1A1A]">{f.title}</span>
                      <p className="text-[#5F5F5F] font-light leading-relaxed">{f.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[#5F5F5F] leading-relaxed font-light border-t border-[#E9E2D6] pt-6 max-w-3xl">
                Because of these variables, someone else’s before-and-after result — however impressive — should not be used to predict what your own skin will look like after treatment. A consultation, where your skin is assessed directly, is a far more reliable way to understand what’s realistic for you.
              </p>
            </div>
          </article>

          {/* Hydrafacial Results Timeline */}
          <article id="results-timeline" className="space-y-8">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1F5E4B]">08 / Spacing & Timeline</div>
            <h2 className="text-3xl font-sans text-[#1A1A1A] font-bold">Hydrafacial Results Timeline</h2>

            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2 border-b border-[#E9E2D6] pb-2">
                  {timelineData.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-t-lg transition-colors ${activeTab === idx
                          ? 'bg-[#1F5E4B] text-white'
                          : 'text-[#5F5F5F] hover:bg-[#F5F1EA]'
                        }`}
                    >
                      {item.stage}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#F5F1EA] border border-[#E9E2D6] rounded-2xl p-6 space-y-4"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-[#D4A574] uppercase tracking-widest">What May Be Observed</h4>
                      <p className="text-base text-[#1A1A1A] font-semibold mt-1">
                        {timelineData[activeTab].observed}
                      </p>
                    </div>
                    <div className="border-t border-[#E9E2D6] pt-4">
                      <h4 className="text-xs font-bold text-[#1F5E4B] uppercase tracking-widest">Important Consideration</h4>
                      <p className="text-sm text-[#5F5F5F] leading-relaxed mt-1 font-light font-sans">
                        {timelineData[activeTab].consideration}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <p className="text-xs text-[#5F5F5F] italic">
                  This timeline is general and does not guarantee a specific outcome for any individual — skin response varies.
                </p>
              </div>

              <div className="border border-[#E9E2D6] rounded-3xl p-4 bg-white shadow-lg">
                <img
                  src="/images/hydrafacial-immediate-results.jpg"
                  alt="Skin appearance immediately after Hydrafacial treatment"
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <p className="text-xs text-[#5F5F5F] leading-relaxed italic text-center mt-3">
                  “Many patients notice a brighter, more hydrated look right after treatment.”
                </p>
              </div>
            </div>
          </article>

          {/* Factors That Affect Hydrafacial Results */}
          <article id="factors-affect" className="space-y-8">
            <div className="text-xs font-bold uppercase tracking-widest text-[#D4A574]">09 / Variables</div>
            <h2 className="text-3xl font-sans text-[#1A1A1A] font-bold">Factors That Affect Hydrafacial Results</h2>
            <p className="text-[#5F5F5F] leading-relaxed font-light">
              Outcomes are shaped by a combination of factors, including:
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                'Skin type and baseline condition',
                'The specific concern being addressed',
                'Frequency and consistency of sessions',
                'Skincare routine used between sessions',
                'Sun exposure and sun protection habits',
                'Hydration levels and general skin health',
                'Age and natural skin turnover rate',
                'Any underlying skin conditions',
                'Adherence to any pre- or post-treatment guidance provided'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-[#F0F7F4]/50 border border-[#1F5E4B]/10 rounded-2xl p-5">
                  <LucideIcons.Check className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-1" />
                  <span className="text-sm font-semibold text-[#1A1A1A] leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[#5F5F5F] leading-relaxed font-light max-w-3xl">
              Because these factors vary from person to person, results — including how visible they are in before-and-after comparisons — will also vary.
            </p>
          </article>

          {/* How Many Sessions Are Usually Needed? */}
          <article id="sessions-needed" className="bg-[#1F5E4B] text-[#F5F1EA] rounded-3xl p-8 lg:p-12 overflow-hidden relative shadow-md">
            <div className="absolute right-0 bottom-0 text-white/5 pointer-events-none">
              <LucideIcons.Clock className="w-80 h-80 translate-x-20 translate-y-20" />
            </div>
            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[#D4A574]">10 / Program Spacing</div>
              <h2 className="text-3xl font-sans font-bold text-white">How Many Sessions Are Usually Needed?</h2>
              <p className="text-[#F5F1EA]/80 leading-relaxed font-light text-lg">
                Some patients choose Hydrafacial as an occasional refresh, such as before an event, while others incorporate it into a regular skincare maintenance routine, often monthly. The right frequency depends on your skin goals, concern, and how your skin responds, and is best determined following an assessment rather than a fixed, one-size-fits-all schedule.
              </p>
            </div>
          </article>

          {/* Hydrafacial vs Other Facials */}
          <article id="vs-other-facials" className="space-y-8">
            <div className="text-xs font-bold uppercase tracking-widest text-[#D4A574]">11 / Treatment Comparison</div>
            <h2 className="text-3xl font-sans text-[#1A1A1A] font-bold">Hydrafacial vs Other Facials</h2>

            <div className="overflow-x-auto border border-[#E9E2D6] rounded-2xl">
              <table className="w-full text-left text-sm text-[#5F5F5F] border-collapse">
                <thead>
                  <tr className="bg-[#F5F1EA] text-[#1A1A1A] font-bold border-b border-[#E9E2D6]">
                    <th className="p-4">Feature</th>
                    <th className="p-4">Hydrafacial</th>
                    <th className="p-4">Traditional Facial</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E9E2D6]">
                  {[
                    { f: 'Technology', h: 'Vacuum-based device with simultaneous exfoliation, extraction, and hydration', t: 'Typically manual techniques, steam, and topical products' },
                    { f: 'Extraction method', h: 'Suction-based, generally gentle', t: 'Often manual extraction' },
                    { f: 'Downtime', h: 'Minimal to none for most patients', t: 'Minimal to none, similar' },
                    { f: 'Customization', h: 'Serums can often be adjusted to skin concern', t: 'Varies by provider and product line used' },
                    { f: 'Immediate visible effect', h: 'Often a noticeable “glow” right after treatment', t: 'Can also provide a refreshed look, though mechanism differs' },
                    { f: 'Best suited for', h: 'Congestion, dehydration, mild texture and tone concerns', t: 'General relaxation and basic skin maintenance' }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-[#F5F1EA]/10">
                      <td className="p-4 font-bold text-[#1A1A1A]">{row.f}</td>
                      <td className="p-4 font-light leading-relaxed font-sans">{row.h}</td>
                      <td className="p-4 font-light leading-relaxed font-sans">{row.t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">
              Suitability between these options depends on your specific skin concerns and goals, which is best discussed during a consultation. See our <Link href="/services/facial-dubai/" className="text-[#1F5E4B] underline font-semibold">Facial Treatment in Dubai</Link> page for a broader comparison of options.
            </p>
          </article>

          {/* Who Is a Good Candidate for Hydrafacial? */}
          <article id="good-candidate" className="relative group bg-[#F0F7F4] border border-[#1F5E4B]/10 rounded-3xl p-8 lg:p-12 shadow-sm transition-all duration-300">
            <div className="space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[#1F5E4B]">12 / Candidacy</div>
              <h2 className="text-3xl font-sans text-[#1A1A1A] font-bold">Who Is a Good Candidate for Hydrafacial?</h2>
              <p className="text-[#5F5F5F] leading-relaxed font-light text-lg font-sans">
                Hydrafacial is generally well tolerated across a range of skin types, which is part of its appeal. That said, candidacy still depends on individual factors such as active skin conditions, recent procedures, sensitivities, or specific medical history, all of which should be reviewed during a consultation before treatment is recommended.
              </p>
            </div>
          </article>

          {/* What Happens During a Hydrafacial Consultation? */}
          <article id="consultation" className="space-y-8 max-w-4xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#D4A574]">13 / Consultation Protocol</div>
            <h2 className="text-3xl font-sans text-[#1A1A1A] font-bold">What Happens During a Hydrafacial Consultation?</h2>

            <div className="space-y-6">
              {[
                { step: '1', title: 'Initial consultation', desc: 'discussing your skin concerns and goals' },
                { step: '2', title: 'Skin assessment', desc: 'evaluating your skin type, condition, and any relevant history' },
                { step: '3', title: 'Discussion of expected results', desc: 'a realistic conversation about what Hydrafacial can and cannot address for your skin' },
                { step: '4', title: 'Treatment customization', desc: 'selecting serums and settings appropriate to your skin' },
                { step: '5', title: 'The treatment session', desc: 'the cleanse, extract, hydrate, and protect sequence' },
                { step: '6', title: 'Aftercare guidance', desc: 'how to care for your skin in the days following treatment' },
                { step: '7', title: 'Follow-up planning', desc: 'if a series of sessions is recommended, discussing appropriate spacing' }
              ].map((s) => (
                <div key={s.step} className="flex gap-4 items-start">
                  <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#1F5E4B] text-white text-xs font-bold font-sans">{s.step}</span>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A]">{s.title}</h4>
                    <p className="text-sm text-[#5F5F5F] leading-relaxed font-light font-sans">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Recovery and Downtime */}
          <article id="recovery-downtime" className="bg-[#F5F1EA] border border-[#E9E2D6] rounded-3xl p-8 lg:p-12 space-y-6">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1F5E4B]">14 / Post-Treatment Recovery</div>
            <h2 className="text-3xl font-sans text-[#1A1A1A] font-bold">Recovery and Downtime</h2>
            <p className="text-[#5F5F5F] leading-relaxed font-light text-lg font-sans">
              Most patients experience little to no downtime after Hydrafacial. Mild, temporary redness or sensitivity is possible immediately after treatment for some individuals but generally resolves quickly. Most people can resume normal activities and makeup application shortly after their session, though any specific aftercare advice provided by your treating professional should be followed.
            </p>
          </article>

          {/* Maintaining Your Results */}
          <article id="maintaining-results" className="space-y-8 max-w-4xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#D4A574]">15 / Care Protocol</div>
            <h2 className="text-3xl font-sans text-[#1A1A1A] font-bold">Maintaining Your Results</h2>
            <p className="text-[#5F5F5F] leading-relaxed font-light">
              Because Hydrafacial’s effects on hydration, glow, and pore appearance are not permanent, maintaining results typically involves:
            </p>
            <div className="space-y-4">
              {[
                'Following a consistent, appropriate skincare routine between sessions',
                'Using sun protection regularly',
                'Staying adequately hydrated',
                'Scheduling sessions at a frequency suited to your skin and goals',
                'Avoiding habits that contribute to congestion or dehydration where possible'
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <LucideIcons.CheckCircle className="w-5 h-5 text-[#1F5E4B] shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-[#1A1A1A]">{item}</span>
                </div>
              ))}
            </div>
          </article>

          {/* Hydrafacial Cost in Dubai */}
          <article id="cost-dubai" className="space-y-6 bg-[#F0F7F4] border border-[#1F5E4B]/10 rounded-3xl p-8 lg:p-12">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1F5E4B]">16 / Price Considerations</div>
            <h2 className="text-3xl font-sans text-[#1A1A1A] font-bold">Hydrafacial Cost in Dubai</h2>
            <p className="text-[#5F5F5F] leading-relaxed font-light text-lg">
              We don’t list fixed prices here, since cost depends on factors such as:
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                'Whether add-on serums or boosters are included',
                'Number of sessions recommended',
                'Any combination with other treatments',
                'Individual treatment planning following consultation'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 bg-white border border-[#E9E2D6]/40 p-4 rounded-xl">
                  <span className="w-1.5 h-6 bg-[#D4A574] rounded-full"></span>
                  <span className="text-sm font-semibold text-[#1A1A1A]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#5F5F5F] leading-relaxed font-light border-t border-[#1F5E4B]/10 pt-4 text-sm">
              The most accurate way to understand cost for your specific skin plan is through a consultation. For a closer look at pricing considerations, visit our <Link href="/services/hydrafacial-cost-dubai/" className="text-[#1F5E4B] underline font-semibold">Hydrafacial Treatment in Dubai</Link> page.
            </p>
          </article>

          {/* How to Choose a Clinic for Hydrafacial in Dubai */}
          <article id="choose-clinic" className="space-y-8">
            <div className="text-xs font-bold uppercase tracking-widest text-[#D4A574]">17 / Clinic Criteria</div>
            <h2 className="text-3xl font-sans text-[#1A1A1A] font-bold">How to Choose a Clinic for Hydrafacial in Dubai</h2>
            <p className="text-[#5F5F5F] leading-relaxed font-light">
              Dubai has many clinics offering Hydrafacial, so it’s worth considering:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Whether the clinic performs a proper skin assessment before treatment',
                'Transparent explanation of what results are realistic for your skin',
                'Clear communication about the treatment process and any risks',
                'Appropriately trained staff performing the treatment',
                'Honest, non-exaggerated before-and-after examples, if shown',
                'No pressure to commit to lengthy packages before an initial assessment'
              ].map((item, i) => (
                <div key={i} className="border border-[#E9E2D6] rounded-2xl p-6 bg-white shadow-sm flex flex-col justify-between">
                  <span className="text-xs font-sans text-[#D4A574] block mb-2">Checkmark 0{i + 1}</span>
                  <p className="text-sm font-semibold text-[#1A1A1A] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#FFF3CD] border border-[#FFEBAA] rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#856404] font-bold">
                <LucideIcons.AlertTriangle className="w-5 h-5" />
                <h4>Red Flags to Watch For</h4>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-[#856404] font-semibold font-sans">
                <li className="flex items-center gap-2">• Guaranteed dramatic transformation claims</li>
                <li className="flex items-center gap-2">• Heavily edited or clearly unrealistic before-and-after photos</li>
                <li className="flex items-center gap-2">• No skin assessment offered before booking</li>
                <li className="flex items-center gap-2">• High-pressure package sales</li>
              </ul>
            </div>
          </article>

          {/* Why Choose RamaCare Polyclinic? */}
          <article id="why-choose-us" className="space-y-8 bg-[#F5F1EA] border border-[#E9E2D6] rounded-3xl p-8 lg:p-12">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1F5E4B]">18 / Clinic Integrity</div>
            <h2 className="text-3xl font-sans text-[#1A1A1A] font-bold">Why Choose RamaCare Polyclinic?</h2>
            <p className="text-[#5F5F5F] leading-relaxed font-light text-lg">
              At RamaCare Polyclinic, Hydrafacial treatment is approached with:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'A proper skin consultation and assessment before treatment',
                'Customization based on your individual skin concerns',
                'Honest discussion of what results are realistic for you',
                'Clear aftercare guidance',
                'A convenient Dubai location for ongoing sessions'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-[#E9E2D6]/40">
                  <LucideIcons.Check className="w-4 h-4 text-[#1F5E4B] shrink-0" />
                  <span className="text-sm font-semibold text-[#1A1A1A]">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[#5F5F5F] leading-relaxed font-light border-t border-[#E9E2D6] pt-4 text-sm font-sans">
              We do not use exaggerated marketing claims, invented success rates, or guaranteed outcomes — because informed patients make better decisions about their skin. Learn more about our approach to skin assessments on our <Link href="/services/best-skin-specialist-dubai/" className="text-[#1F5E4B] underline font-semibold">Best Skin Specialist in Dubai</Link> page.
            </p>
          </article>

        </div>
      </section>

      {/* Editorial Layout: FAQ & Footer Content (Google Reviews portal will auto-inject right before this section) */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="space-y-28">

          {/* FAQ Accordions */}
          <article id="faq" className="space-y-8">
            <div className="text-xs font-bold uppercase tracking-widest text-[#D4A574]">19 / Commonly Asked</div>
            <h2 className="text-3xl font-sans text-[#1A1A1A] font-bold">FAQ</h2>

            <div className="divide-y divide-[#E9E2D6] border-t border-b border-[#E9E2D6]">
              {[
                { q: 'What does Hydrafacial before and after actually show?', a: 'It typically shows improved hydration, a brighter complexion, and clearer-looking pores immediately after treatment, with more cumulative texture and tone improvement visible after a series of sessions.' },
                { q: 'How long do Hydrafacial results last?', a: 'The immediate “glow” effect often fades over several days, while cumulative benefits from regular sessions may last longer with consistent maintenance and skincare.' },
                { q: 'Is one Hydrafacial session enough to see results?', a: 'Many patients notice a visible difference after a single session, particularly in hydration and pore appearance, though more significant texture or tone changes generally develop with a series of sessions.' },
                { q: 'Are Hydrafacial before-and-after photos accurate?', a: 'They can be informative but are also influenced by lighting, angle, skin preparation, and timing, so they should be viewed as illustrative rather than a guarantee of your own results.' },
                { q: 'Does Hydrafacial help with acne or congestion?', a: 'It can help reduce the visible appearance of congestion through extraction, though it is not typically considered a primary treatment for active acne, which may require a different approach.' },
                { q: 'Does Hydrafacial reduce wrinkles?', a: 'It may temporarily soften the appearance of fine, dehydration-related lines through hydration, but it does not significantly change deeper structural wrinkles.' },
                { q: 'How many Hydrafacial sessions do I need?', a: 'This depends on your skin goals and concerns, and is best determined following a consultation rather than a fixed number.' },
                { q: 'Is there downtime after Hydrafacial?', a: 'Most patients experience little to no downtime, though mild, temporary redness is possible for some individuals.' },
                { q: 'Can Hydrafacial help with dull skin?', a: 'Yes, brightening is one of the more commonly reported immediate effects, largely due to exfoliation and hydration.' },
                { q: 'Is Hydrafacial suitable for sensitive skin?', a: 'It is generally well tolerated, though individual suitability should be assessed during a consultation given your specific skin history.' },
                { q: 'How often should I get a Hydrafacial?', a: 'Frequency varies by individual goals; some patients get occasional sessions for events, while others schedule regular monthly maintenance sessions.' },
                { q: 'Can Hydrafacial treat pigmentation?', a: 'It may offer mild support for overall tone evenness, but it is generally not considered a primary treatment for more significant or stubborn pigmentation.' },
                { q: 'What is the difference between Hydrafacial and a regular facial?', a: 'Hydrafacial uses a vacuum-based device to combine exfoliation, extraction, and hydration in one step, while a traditional facial typically relies on manual techniques and topical products.' },
                { q: 'Can men get Hydrafacial?', a: 'Yes, Hydrafacial is not gender-specific and can be suitable for a range of skin types and concerns.' },
                { q: 'How much does Hydrafacial cost in Dubai?', a: 'Cost depends on the specific treatment plan, add-ons, and number of sessions, and is best discussed during a consultation.' }
              ].map((faq, idx) => (
                <div key={idx} className="py-4 font-sans">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-start justify-between text-left py-2 focus:outline-none"
                  >
                    <span className="text-base font-bold text-[#1A1A1A]">{faq.q}</span>
                    <span className="shrink-0 text-[#1F5E4B] text-lg leading-none mt-1">
                      {openFaq === idx ? (
                        <LucideIcons.Minus className="w-4 h-4" />
                      ) : (
                        <LucideIcons.Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-[#5F5F5F] leading-relaxed pt-2 pb-2 pr-8 font-light">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </article>

          {/* Disclaimer block */}
          <div className="bg-[#F5F1EA] rounded-2xl p-6 border border-[#E9E2D6] text-xs text-[#5F5F5F] leading-relaxed font-light font-sans">
            <p className="font-bold text-[#1A1A1A] mb-1">Disclaimer</p>
            <p>
              Hydrafacial results vary between individuals based on skin type, concern, and consistency of treatment. Before-and-after images are illustrative and not guarantees of outcome. This content is educational and does not replace an in-person skin consultation with a qualified professional.
            </p>
          </div>

          {/* Book a Consultation Callout Block */}
          <article id="book-now" className="rounded-3xl border border-[#E9E2D6] bg-[#F5F1EA] p-8 sm:p-12 text-center relative overflow-hidden shadow-md">
            <div className="absolute right-0 bottom-0 text-[#1F5E4B]/5 pointer-events-none">
              <LucideIcons.Sparkles className="w-64 h-64 translate-x-20 translate-y-20" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A]">Book a Hydrafacial Consultation in Dubai</h2>
              <p className="text-base text-[#5F5F5F] leading-relaxed font-light font-sans">
                If you’re curious what Hydrafacial could realistically do for your skin, a consultation at RamaCare Polyclinic is the best place to start. We’ll assess your skin, discuss your goals, and give you an honest picture of what to expect — no exaggerated promises, just a plan built around your actual skin.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <button onClick={handleCall} className="inline-flex items-center gap-2 rounded-xl bg-white border border-[#E9E2D6] px-6 py-3.5 text-sm font-bold text-[#1A1A1A] hover:border-[#1F5E4B] transition-all shadow-sm">
                  <LucideIcons.Phone className="w-4 h-4 text-[#1F5E4B]" /> +971 4 286 2006
                </button>
                <button onClick={handleWhatsAppClick} className="inline-flex items-center gap-2 rounded-xl bg-white border border-[#E9E2D6] px-6 py-3.5 text-sm font-bold text-[#1A1A1A] hover:border-[#1F5E4B] transition-all shadow-sm">
                  <LucideIcons.MessageCircle className="w-4 h-4 text-[#1F5E4B]" /> +971 56 659 7878
                </button>
                <button onClick={handleBookAppointment} className="inline-flex items-center gap-2 rounded-xl bg-[#1F5E4B] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#17493A] transition-all shadow-md transform hover:-translate-y-0.5">
                  <LucideIcons.Calendar className="w-4 h-4" /> Book a Hydrafacial Consultation in Dubai →
                </button>
              </div>
            </div>
          </article>

          {/* Related Skin Treatment Guides */}
          <article className="space-y-6 border-t border-[#E9E2D6] pt-12">
            <h3 className="text-lg font-bold text-[#1A1A1A]">Related Skin Treatment Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Hydrafacial Treatment in Dubai', desc: 'An overview of the Hydrafacial treatment process and what it involves.', href: '/services/hydrafacial-dubai/' },
                { title: 'Facial Treatment in Dubai', desc: 'Explore the range of facial treatment options available.', href: '/services/facial-dubai/' },
                { title: 'Skin Rejuvenation Dubai', desc: 'Learn about broader approaches to improving skin tone and texture.', href: '/services/laser-rejuvenation-dubai/' },
                { title: 'Best Skin Specialist in Dubai', desc: 'Guidance on finding a qualified professional for your skin concerns.', href: '/services/best-skin-specialist-dubai/' }
              ].map((g, idx) => (
                <Link
                  key={idx}
                  href={g.href}
                  className="group border border-[#E9E2D6] rounded-2xl p-6 bg-white hover:border-[#1F5E4B] transition-colors"
                >
                  <h4 className="font-bold text-[#1F5E4B] group-hover:underline flex items-center justify-between">
                    {g.title}
                    <LucideIcons.ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </h4>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed mt-2 font-light">{g.desc}</p>
                </Link>
              ))}
            </div>
          </article>



        </div>
      </section>

      {/* Floating Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E9E2D6] shadow-lg z-40 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:block font-sans">
            <p className="text-sm font-semibold text-[#1A1A1A]">Hydrafacial Before and After</p>
            <p className="text-xs text-[#5F5F5F]">What Results to Realistically Expect</p>
          </div>
          <button
            onClick={handleBookAppointment}
            className="flex items-center gap-2 bg-[#1F5E4B] text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold whitespace-nowrap"
          >
            <LucideIcons.Calendar className="w-5 h-5" />
            Book a Hydrafacial Consultation
          </button>
        </div>
      </div>
    </Layout>
  );
}
