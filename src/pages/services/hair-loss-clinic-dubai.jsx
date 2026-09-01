import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  CheckCircle,
  ChevronDown,
  MessageCircle,
  Phone,
  Shield,
  Sparkles,
  ArrowRight,
  Check,
  Info,
  AlertCircle,
  Clock,
  TrendingUp,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  Sliders,
  User,
  Heart,
  Droplet,
  FileText,
  Search,
} from 'lucide-react';

const SITE_URL = 'https://ramacarepolyclinic.ae';
const PAGE_PATH = '/services/hair-loss-clinic-dubai/';

export default function HairLossClinicDubai() {
  const navRef = useRef(null);

  const scrollNav = (direction) => {
    if (navRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      navRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // State for interactive features
  const [symptoms, setSymptoms] = useState({
    shedding: false,
    thinning: false,
    receding: false,
    crown: false,
    part: false,
    scalpVisible: false,
    patchy: false,
    itching: false,
    redness: false,
    dandruff: false,
    breakage: false,
    otherSymptoms: false,
  });

  const [openFaq, setOpenFaq] = useState(null);
  const [faqSearch, setFaqSearch] = useState('');

  // FAQ toggle
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Symptoms list mapping
  const symptomsList = [
    { key: 'shedding', label: 'A sudden increase in hair shedding over a short period' },
    { key: 'thinning', label: "Persistent thinning that doesn't seem to be improving" },
    { key: 'receding', label: 'A receding hairline that is progressing' },
    { key: 'crown', label: 'Noticeable crown thinning' },
    { key: 'part', label: 'A widening hair part' },
    { key: 'scalpVisible', label: 'Visible scalp through the hair' },
    { key: 'patchy', label: 'One or more patchy bald spots' },
    { key: 'itching', label: 'Ongoing scalp itching' },
    { key: 'redness', label: 'Scalp redness or irritation' },
    { key: 'dandruff', label: 'Persistent dandruff or scaling' },
    { key: 'breakage', label: 'Increased hair breakage' },
    { key: 'otherSymptoms', label: 'Hair loss occurring alongside other symptoms (fatigue, weight changes, skin changes, etc.)' },
  ];

  // FAQ data (18 FAQs exactly from the content)
  const faqs = [
    {
      question: "What does a hair loss clinic do?",
      answer: "A hair loss clinic assesses your hair and scalp, reviews your medical history, and helps identify possible causes of your hair loss before discussing appropriate treatment options based on your individual findings."
    },
    {
      question: "Which doctor treats hair loss?",
      answer: "Hair loss can be evaluated by a dermatologist, a general practitioner, or a hair specialist depending on the suspected cause, and a multispecialty clinic can help direct you appropriately after an initial assessment."
    },
    {
      question: "When should I visit a hair loss clinic?",
      answer: "You should consider a visit if you notice sudden shedding, persistent thinning, a receding hairline, crown thinning, patchy bald spots, or scalp symptoms such as itching or redness that don't resolve on their own."
    },
    {
      question: "What causes hair loss?",
      answer: "Hair loss can result from genetics, hormonal changes, nutritional deficiencies, stress, thyroid disorders, scalp conditions, certain medications, or a combination of these factors, which is why individual assessment matters."
    },
    {
      question: "How is hair loss diagnosed?",
      answer: "Hair loss is generally assessed through a medical history review, scalp examination, hair-pattern evaluation, and, when clinically indicated, magnified scalp imaging or blood tests."
    },
    {
      question: "Can hair loss be reversed?",
      answer: "Some forms of hair loss, such as stress-related or nutritional shedding, can improve once the cause is addressed, while other forms, like genetic pattern hair loss, are typically managed rather than fully reversed."
    },
    {
      question: "Does PRP work for hair loss?",
      answer: "PRP may support hair health in certain hair-thinning patterns for suitable candidates, though it does not work identically for everyone and results are not guaranteed."
    },
    {
      question: "Is PRP suitable for everyone?",
      answer: "No. Suitability depends on the underlying cause of hair loss and an individual assessment, which is why PRP is not automatically recommended without evaluation."
    },
    {
      question: "How long does PRP take to show results?",
      answer: "Any visible changes from PRP typically develop gradually over several months, in line with the natural hair growth cycle, rather than appearing immediately."
    },
    {
      question: "How many PRP sessions may be needed?",
      answer: "The number of sessions depends on individual diagnosis, severity, and response to treatment, and is generally discussed as part of a personalized treatment plan rather than a fixed number for everyone."
    },
    {
      question: "Is Hair Mesotherapy better than PRP?",
      answer: "Neither is universally \"better\" — they differ in approach and components, and suitability depends on your specific diagnosis, which is best discussed during consultation."
    },
    {
      question: "Can PRP replace a hair transplant?",
      answer: "Not necessarily. PRP and hair transplant serve different purposes — PRP is non-surgical and may support hair health in select cases, while a transplant surgically relocates hair follicles. Some patients may be advised to consider one, the other, or both."
    },
    {
      question: "What does hair loss treatment cost in Dubai?",
      answer: "Cost depends on the type of treatment, number of sessions, and your specific treatment plan, so an accurate estimate can only be provided after consultation and assessment."
    },
    {
      question: "Can women visit a hair loss clinic?",
      answer: "Yes. Hair loss affects both men and women, and female pattern hair loss often has different presentations and causes that benefit from targeted assessment."
    },
    {
      question: "Can stress cause hair loss?",
      answer: "Yes, significant stress can trigger a temporary shedding pattern called telogen effluvium, though this is generally not exaggerated as a cause and often resolves once the stressor is addressed."
    },
    {
      question: "What tests may be needed for hair loss?",
      answer: "Depending on your presentation, blood tests such as thyroid function, iron studies, or vitamin levels may be considered, though not every patient requires every test."
    },
    {
      question: "How do I choose a hair loss clinic in Dubai?",
      answer: "Look for qualified professionals, a proper assessment process, individualized treatment planning, transparent communication, and realistic expectations — and be cautious of clinics that guarantee results or skip diagnosis."
    },
    {
      question: "What should I ask during my consultation?",
      answer: "Consider asking what the suspected cause of your hair loss is, what tests (if any) are recommended, what treatment options are appropriate for your case, what results are realistic, and what the expected timeline and follow-up plan look like."
    }
  ];

  // Filtering FAQs based on search input
  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
    faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  // TOC items for horizontal quick nav
  const tocItems = [
    { id: 'intro', label: 'Overview' },
    { id: 'what-is', label: 'What Is It' },
    { id: 'comparison-types', label: 'Clinic Types' },
    { id: 'when-to-visit', label: 'When to Visit' },
    { id: 'causes', label: 'Common Causes' },
    { id: 'normal-vs-loss', label: 'Normal vs Loss' },
    { id: 'how-assessed', label: 'How Assessed' },
    { id: 'first-visit', label: 'What to Expect' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'prp-deep-dive', label: 'PRP Hair' },
    { id: 'comparisons', label: 'PRP vs Others' },
    { id: 'growth-cycle', label: 'Growth Cycle' },
    { id: 'demographics', label: 'Demographics' },
    { id: 'climate', label: 'Climate Impact' },
    { id: 'choosing-clinic', label: 'Choosing a Clinic' },
    { id: 'why-ramacare', label: 'Why RamaCare' },
    { id: 'costs-sessions', label: 'Costs & Results' },
    { id: 'prevention', label: 'Daily Care' },
    { id: 'myths', label: 'Myths' },
    { id: 'faq', label: 'FAQs' },
  ];

  const relatedGuides = [
    { title: 'Hair Loss Causes', desc: 'A closer look at the medical, hormonal, and lifestyle factors that can contribute to hair thinning and shedding.', href: '/services/hair-loss-dubai/' },
    { title: 'Hair Growth Cycle', desc: 'Understand the four phases of hair growth and why most treatments take time to show visible results.', href: '/services/hair-growth-cycle/' },
    { title: 'Hair Loss Treatment in Dubai', desc: 'An overview of treatment approaches available for different types and causes of hair loss.', href: '/services/hair-treatment-dubai/' },
    { title: 'Hair Fall Treatment in Dubai', desc: 'Guidance specifically focused on managing excessive hair fall and shedding.', href: '/services/hair-loss-dubai/' },
    { title: 'Hair PRP Treatment in Dubai', desc: 'A detailed look at platelet-rich plasma treatment, including the process, candidacy, and what to expect.', href: '/services/hair-prp-dubai/' },
    { title: 'Hair Regrowth Treatment Dubai', desc: 'An overview of options that may support hair regrowth once an underlying cause has been identified.', href: '/services/hair-regrowth-treatment-dubai/' },
    { title: 'Hair Mesotherapy in Dubai', desc: 'Learn how mesotherapy works for hair and scalp concerns and how it compares to other treatments.', href: '/services/mesotherapy-dubai/' },
    { title: 'PRP Hair Treatment Before and After', desc: 'What realistic progress can look like over the course of PRP treatment.', href: '/services/prp-hair-treatment-before-and-after/' },
    { title: 'PRP Hair Treatment Recovery', desc: 'What to expect in the days and weeks following a PRP session.', href: '/services/prp-hair-treatment-recovery/' },
    { title: 'PRP Hair Treatment Cost in Dubai', desc: 'A breakdown of the factors that influence PRP treatment pricing.', href: '/services/hair-prp-cost-dubai/' },
    { title: 'PRP vs Hair Mesotherapy', desc: 'A side-by-side comparison to help you understand how these two treatments differ.', href: '/services/prp-vs-hair-mesotherapy-dubai/' },
    { title: 'PRP vs Hair Transplant in Dubai', desc: 'A comparison of non-surgical PRP and surgical hair transplant to help you understand which may suit your situation.', href: '/services/prp-vs-hair-transplant-dubai/' },
    { title: 'Best Hair Specialist in Dubai', desc: 'Guidance on what to look for when choosing a hair specialist for your assessment and care.', href: '/services/best-hair-specialist-dubai/' },
  ];

  const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;
  const OG_IMAGE = `${SITE_URL}/images/hair-loss-clinic-dubai-og.jpg`;
  const META_TITLE = 'Hair Loss Clinic Dubai | Diagnosis & Care – RamaCare';
  const META_DESCRIPTION =
    'Hair Loss Clinic Dubai — RamaCare Polyclinic offers professional hair & scalp assessment, diagnosis, and personalized care plans. Book a consultation today.';
  const META_KEYWORDS =
    'Hair Loss Clinic Dubai, Hair Loss Treatment Dubai, Trichologist Dubai, Hair Specialist Dubai, Scalp Assessment Dubai, PRP Hair Treatment Dubai, Hair Transplant Alternative Dubai, Female Hair Loss Dubai, Male Pattern Baldness Dubai';

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${CANONICAL_URL}#webpage`,
        "url": CANONICAL_URL,
        "name": META_TITLE,
        "description": META_DESCRIPTION,
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "url": `${SITE_URL}/`,
          "name": "RamaCare Polyclinic"
        },
        "about": {
          "@type": "MedicalCondition",
          "name": "Hair Loss"
        },
        "lastReviewed": "2026-08-29",
        "reviewedBy": {
          "@id": `${CANONICAL_URL}#physician`
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_URL}/services/` },
            { "@type": "ListItem", "position": 3, "name": "Hair Loss Clinic Dubai", "item": CANONICAL_URL }
          ]
        }
      },
      {
        "@type": "Physician",
        "@id": `${CANONICAL_URL}#physician`,
        "name": "Dr. Sahar Zomorrodi",
        "medicalSpecialty": "General Practice",
        "honorificSuffix": "MD",
        "hasCredential": "DHA Licensed General Practitioner",
        "worksFor": {
          "@type": "MedicalOrganization",
          "name": "RamaCare Polyclinic"
        },
        "url": `${SITE_URL}/doctors/dr-sahar-zomorrodi-general-practitioner-dubai/`
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title key="title">{META_TITLE}</title>
        <meta name="description" content={META_DESCRIPTION} key="description" />
        <meta name="keywords" content={META_KEYWORDS} key="keywords" />
        <meta name="robots" content="index, follow" key="robots" />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:title" content={META_TITLE} key="og:title" />
        <meta property="og:description" content={META_DESCRIPTION} key="og:description" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:image" content={OG_IMAGE} key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Hair Loss Clinic Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={META_TITLE} key="twitter:title" />
        <meta name="twitter:description" content={META_DESCRIPTION} key="twitter:description" />
        <meta name="twitter:image" content={OG_IMAGE} key="twitter:image" />

        {/* Unified JSON-LD @graph Schema */}
        <script
          key="schema-graph"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center text-xs font-medium text-[#5F5F5F] gap-1.5">
          <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/services/" className="hover:text-[#1F5E4B] transition-colors">Services</Link>
          <span className="mx-1">/</span>
          <span className="text-[#1F5E4B]">Hair Loss Clinic Dubai</span>
        </nav>
      </div>

      {/* ============ HERO SECTION ============ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1F5E4B] via-[#1B5241] to-[#12392D] text-white pt-28 pb-24 px-4 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(42,125,99,0.25),transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold text-white/95">
              <Sparkles className="w-4 h-4 text-[#A2E3C4]" />
              <span>Professional Scalp Assessment & Diagnosis</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Hair Loss Clinic Dubai:<br />
              <span className="text-[#A2E3C4]">Diagnosis, Treatment & Care</span>
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
              RamaCare Polyclinic approaches hair and scalp concerns with a structured, health-centered model. Understand what is happening before deciding on a treatment path, guided by honest clinical assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20the%20Hair%20Loss%20Clinic%20in%20Dubai."
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center justify-center gap-2 bg-[#A2E3C4] text-[#12392D] px-8 py-4 rounded-xl font-extrabold text-lg hover:bg-white hover:text-[#12392D] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                Book Consultation
              </a>
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-extrabold text-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                Contact Our Clinic
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#12392D]/40 to-transparent rounded-3xl z-10"></div>
            <img
              src="/images/hair-scalp-consultation-dubai.jpg"
              alt="Hair and scalp consultation at a hair loss clinic in Dubai"
              className="w-full h-[450px] object-cover rounded-3xl shadow-2xl border border-white/15 relative z-0"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-[#12392D]/90 backdrop-blur-md border border-white/15 p-4 rounded-2xl z-20">
              <p className="text-xs text-white/70 uppercase tracking-wider font-semibold">Location</p>
              <p className="text-sm font-bold text-white">RamaCare Polyclinic, Jumeirah 1, Dubai</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HORIZONTAL STICKY QUICK NAV ============ */}
      <div className="sticky top-[80px] z-30 bg-[#FDFCF7]/95 backdrop-blur-md border-b border-[#E6E2D8] py-3.5 relative flex items-center">
        {/* Hiding scrollbar CSS */}
        <style dangerouslySetInnerHTML={{__html: `
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}} />

        {/* Left Arrow Button */}
        <button
          onClick={() => scrollNav('left')}
          className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#FDFCF7] via-[#FDFCF7]/95 to-transparent px-3.5 z-20 text-[#1F5E4B] hover:text-[#12392D] transition-colors flex items-center justify-center cursor-pointer border-none outline-none"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 h-6" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={navRef}
          className="w-full overflow-x-auto no-scrollbar whitespace-nowrap px-10 md:px-12 scroll-smooth"
        >
          <div className="flex gap-2">
            {tocItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="inline-block px-4 py-2 rounded-full text-xs md:text-sm font-bold bg-[#F4F1EA] text-[#5F5F5F] hover:bg-[#1F5E4B] hover:text-white transition-all shadow-sm border border-[#E6E2D8]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => scrollNav('right')}
          className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-[#FDFCF7] via-[#FDFCF7]/95 to-transparent px-3.5 z-20 text-[#1F5E4B] hover:text-[#12392D] transition-colors flex items-center justify-center cursor-pointer border-none outline-none"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 md:w-6 h-6" />
        </button>
      </div>

      {/* ============ MAIN PAGE WRAPPER ============ */}
      <div className="bg-[#FDFCF7] min-h-screen text-[#1A1A1A] overflow-hidden">
        
        {/* ============ SECTION: INTRODUCTION ============ */}
        <section id="intro" className="scroll-mt-36 py-20 px-4 md:px-8 border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">
                Hair Loss Clinic Dubai: Diagnosis, Treatment & Care
              </h2>
              <div className="text-[#5F5F5F] space-y-4 leading-relaxed text-base">
                <p>
                  If you've noticed more hair on your pillow, in the shower drain, or on your hairbrush than usual, you're not alone — and you're not without options. Hair thinning, a receding hairline, a widening part, crown thinning, patchy bald spots, or sudden shedding can all feel unsettling, especially when the cause isn't obvious.
                </p>
                <p>
                  The truth is that hair loss rarely has a single explanation. It can be genetic, hormonal, nutritional, stress-related, linked to a scalp condition, or a combination of several factors at once. This is exactly why visiting a dedicated hair loss clinic in Dubai can be useful — a proper assessment helps identify what is actually happening before deciding on a treatment path, rather than guessing based on generic advice or unverified online remedies.
                </p>
                <p>
                  At RamaCare Polyclinic in Dubai, hair and scalp concerns are approached the way any health concern should be: with a structured consultation, a review of your history, an examination of your scalp and hair pattern, and — when clinically appropriate — further testing. From there, a treatment plan can be discussed based on what's realistic for your specific situation.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 bg-white border border-[#E6E2D8] p-8 rounded-3xl shadow-sm relative">
              <div className="absolute top-0 left-8 transform -translate-y-1/2 bg-[#1F5E4B] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Our Promise
              </div>
              <p className="italic text-[#5F5F5F] text-base leading-relaxed">
                "It's important to set expectations honestly from the start: no clinic can promise guaranteed regrowth, and no single treatment works identically for everyone. What a good hair loss clinic can offer is a clear diagnostic process, honest communication about what's possible, and ongoing guidance as you decide how to move forward."
              </p>
            </div>
          </div>
        </section>

        {/* ============ SECTION: WHAT IS A HAIR LOSS CLINIC ============ */}
        <section id="what-is" className="scroll-mt-36 py-20 px-4 md:px-8 bg-white border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-extrabold text-[#1A1A1A]">What Is a Hair Loss Clinic?</h2>
              <p className="text-[#5F5F5F] text-lg leading-relaxed">
                In short: A hair loss clinic assesses your hair and scalp, reviews your medical history, identifies possible causes of shedding or thinning, and helps plan a treatment approach — rather than offering the same solution to every patient.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Hair and scalp assessment", desc: "A visual and sometimes magnified examination of the scalp and hair shafts." },
                { title: "Medical history review", desc: "Covering general health, medications, family history, and recent life changes." },
                { title: "Hair-loss pattern evaluation", desc: "Determining whether the pattern is diffuse, localized, patchy, or following a recognizable pattern such as androgenetic alopecia." },
                { title: "Identification of possible causes", desc: "Genetic, hormonal, nutritional, inflammatory, or related to an underlying medical condition." },
                { title: "Treatment planning", desc: "Discussing options appropriate to the likely cause and the patient's goals." },
                { title: "Follow-up and progress monitoring", desc: "Since hair changes are gradual, reassessment over time matters." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-[#FDFCF7] p-6 rounded-2xl border border-[#E6E2D8] hover:border-[#1F5E4B] transition-all group">
                  <CheckCircle className="w-6 h-6 text-[#1F5E4B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-[#1A1A1A] text-base mb-1.5 group-hover:text-[#1F5E4B] transition-colors">{item.title}</h4>
                    <p className="text-sm text-[#5F5F5F] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SECTION: CLINIC TYPES OVERLAP ============ */}
        <section id="comparison-types" className="scroll-mt-36 py-20 px-4 md:px-8 border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-extrabold text-[#1A1A1A]">
                Clinic Differences & Overlaps
              </h2>
              <p className="text-[#5F5F5F] text-base leading-relaxed">
                These terms overlap but aren't identical, and no single type of professional is automatically the right choice for every case:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Dermatology Clinic",
                  desc: "Focuses on skin and scalp disease broadly, including conditions like psoriasis or seborrheic dermatitis that can affect hair."
                },
                {
                  title: "Trichologist",
                  desc: "Specializes specifically in hair and scalp health, though scope of practice varies by qualification and jurisdiction."
                },
                {
                  title: "Hair Specialist",
                  desc: "A general term that can refer to a dermatologist, cosmetic physician, or other clinician with a focus on hair concerns."
                },
                {
                  title: "Hair Transplant Clinic",
                  desc: "Focuses specifically on surgical hair restoration and is generally relevant only after non-surgical causes have been considered."
                }
              ].map((col, idx) => (
                <div key={idx} className="bg-white border border-[#E6E2D8] p-6 rounded-2xl shadow-sm space-y-3">
                  <h3 className="font-extrabold text-lg text-[#1F5E4B]">{col.title}</h3>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">{col.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#1F5E4B]/5 border border-[#1F5E4B]/15 p-6 rounded-2xl text-center max-w-4xl mx-auto">
              <p className="text-[#1F5E4B] font-bold text-base">
                A multispecialty setting such as a polyclinic can be a practical starting point, since it allows your case to be reviewed and, if needed, directed toward the right kind of further care.
              </p>
            </div>
          </div>
        </section>

        {/* ============ SECTION: WHEN TO VISIT (INTERACTIVE CHECKLIST) ============ */}
        <section id="when-to-visit" className="scroll-mt-36 py-20 px-4 md:px-8 bg-white border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-extrabold text-[#1A1A1A]">When Should You Visit a Hair Loss Clinic?</h2>
              <p className="text-[#5F5F5F] text-base leading-relaxed">
                Not every instance of shedding needs a clinic visit — but certain signs are worth having checked. Click on the signs below that apply to you to evaluate your current situation:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {symptomsList.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setSymptoms({ ...symptoms, [item.key]: !symptoms[item.key] })}
                  className={`text-left p-5 rounded-2xl border text-sm flex items-start gap-4 transition-all ${
                    symptoms[item.key]
                      ? 'border-[#1F5E4B] bg-[#E6EFEA] text-[#12392D] shadow-sm'
                      : 'border-[#E6E2D8] bg-[#FDFCF7] hover:border-[#1F5E4B]/50 text-[#5F5F5F]'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                    symptoms[item.key] ? 'bg-[#1F5E4B] border-[#1F5E4B] text-white' : 'border-[#E6E2D8] bg-white'
                  }`}>
                    {symptoms[item.key] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            <div className="bg-amber-50/50 border border-amber-200 p-6 rounded-2xl max-w-4xl mx-auto flex gap-4 items-start">
              <AlertCircle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-amber-900 text-base mb-1">Clinical Guidance</h4>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Sudden, severe, painful, or patchy hair loss in particular should be professionally assessed rather than managed with over-the-counter products alone, since these presentations can sometimes point to an underlying condition that benefits from timely evaluation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SECTION: COMMON CAUSES ============ */}
        <section id="causes" className="scroll-mt-36 py-20 px-4 md:px-8 border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-extrabold text-[#1A1A1A]">Common Hair Loss Causes</h2>
              <p className="text-[#5F5F5F] text-base leading-relaxed">
                In short: Hair loss can stem from genetics, hormones, nutrition, stress, thyroid function, scalp conditions, medications, or a combination of these — which is why identifying the specific cause matters more than treating symptoms alone.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Genetic Hair Loss (Androgenetic Alopecia)",
                  body: "The most common cause of progressive hair thinning in both men and women is androgenetic alopecia — a genetically influenced, hormone-sensitive process that typically follows a recognizable pattern (receding hairline and crown thinning in men; diffuse thinning and a widening part in women)."
                },
                {
                  title: "Hormonal Changes",
                  body: "Hormonal shifts can affect the hair growth cycle, including those related to: Pregnancy, the postpartum period, menopause, polycystic ovary syndrome (PCOS), or other hormonal imbalances."
                },
                {
                  title: "Stress",
                  body: "Significant physical or emotional stress can trigger a temporary shedding pattern known as telogen effluvium, where more hairs than usual enter the shedding phase a few months after the stressful event. This is generally temporary, though it should still be discussed with a clinician if persistent."
                },
                {
                  title: "Nutritional Factors",
                  body: "Deficiencies in certain nutrients have been associated with hair shedding, including: Iron, Vitamin D, Vitamin B12, Zinc, and Protein. Nutritional deficiencies should be confirmed through appropriate testing rather than assumed, and supplementation should be guided by a clinician."
                },
                {
                  title: "Thyroid Disorders",
                  body: "Both an underactive and overactive thyroid can be associated with hair thinning, which is one reason thyroid function may be assessed when hair loss is diffuse or unexplained."
                },
                {
                  title: "Alopecia Areata",
                  body: "An autoimmune condition that causes patchy hair loss, sometimes progressing further. This pattern typically warrants specific clinical evaluation."
                },
                {
                  title: "Scalp Conditions",
                  body: "Several scalp conditions can contribute to hair loss or make it more noticeable, including: Seborrheic dermatitis, psoriasis, scalp infections, or general inflammation of the scalp."
                },
                {
                  title: "Medications",
                  body: "Certain medications list hair shedding as a possible side effect. If you suspect a medication is contributing, this should be discussed with your prescribing doctor rather than stopped independently."
                },
                {
                  title: "Rapid Weight Loss",
                  body: "Significant or rapid weight loss, particularly from restrictive dieting or after certain medical procedures, can trigger temporary shedding."
                },
                {
                  title: "Aging",
                  body: "Hair naturally tends to thin and change texture with age, independent of other causes."
                },
                {
                  title: "Tight Hairstyles",
                  body: "Consistently tight hairstyles (tight ponytails, braids, or extensions) can cause traction alopecia, a gradual, mechanical form of hair loss along the hairline or areas under tension."
                },
                {
                  title: "Heat and Chemical Damage",
                  body: "Frequent heat styling and chemical treatments (coloring, relaxing, perming) can weaken the hair shaft, leading to breakage that may be mistaken for hair loss."
                },
                {
                  title: "Chronic Medical Conditions",
                  body: "Certain chronic illnesses can be associated with hair changes as part of a broader clinical picture, which is another reason a full medical history matters during assessment."
                }
              ].map((cause, idx) => (
                <div key={idx} className="bg-white border border-[#E6E2D8] p-6 rounded-2xl shadow-sm space-y-3">
                  <h3 className="font-extrabold text-[#1F5E4B] text-lg">{cause.title}</h3>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">{cause.body}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#1F5E4B]/5 border border-[#1F5E4B]/15 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4 max-w-4xl mx-auto">
              <p className="text-sm text-[#1F5E4B] font-semibold text-center sm:text-left">
                For a deeper look at individual causes, see our dedicated guide:
              </p>
              <Link
                href="/services/hair-loss-dubai/"
                className="inline-flex items-center gap-2 text-white bg-[#1F5E4B] hover:bg-[#17493A] transition-colors px-6 py-3 rounded-xl text-sm font-bold shrink-0"
              >
                Hair Loss Causes Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============ SECTION: NORMAL SHEDDING VS HAIR LOSS ============ */}
        <section id="normal-vs-loss" className="scroll-mt-36 py-20 px-4 md:px-8 bg-white border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-extrabold text-[#1A1A1A]">Normal Hair Shedding vs. Hair Loss</h2>
              <p className="text-[#5F5F5F] text-base leading-relaxed">
                It's normal to shed some hair every day as part of the natural hair growth cycle. The challenge is telling normal shedding apart from a pattern that needs attention.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Normal Shedding Column */}
              <div className="bg-[#FDFCF7] border border-[#E6E2D8] rounded-2xl p-6 space-y-4">
                <div className="bg-[#1F5E4B] text-white px-4 py-2 rounded-xl font-bold text-center">
                  Normal Shedding
                </div>
                <ul className="space-y-3.5 text-sm text-[#5F5F5F]">
                  {[
                    "Gradual, consistent daily shedding",
                    "Hair regrows to replace what's shed",
                    "No visible bald patches",
                    "Hairline and crown density remain stable",
                    "Shedding without scalp symptoms",
                    "Hair breakage limited to styling stress"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 items-center border-b border-[#F0ECE3] pb-2 last:border-b-0">
                      <Check className="w-4 h-4 text-[#1F5E4B] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Possible Hair Loss Column */}
              <div className="bg-red-50/35 border border-red-100 rounded-2xl p-6 space-y-4">
                <div className="bg-red-950/90 text-white px-4 py-2 rounded-xl font-bold text-center">
                  Possible Hair Loss
                </div>
                <ul className="space-y-3.5 text-sm text-[#5F5F5F]">
                  {[
                    "Sudden or dramatic increase in shedding",
                    "Visible thinning that doesn't recover over time",
                    "Patchy or localized bald spots",
                    "Receding hairline or widening crown/part",
                    "Shedding accompanied by itching, redness, or scaling",
                    "Hair thinning at the roots, not just breakage at the tips"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 items-center border-b border-red-100 pb-2 last:border-b-0">
                      <AlertCircle className="w-4 h-4 text-red-700 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-xs text-[#5F5F5F] leading-relaxed text-center max-w-3xl mx-auto">
              There is no single "correct" number of hairs a person should shed per day that applies to everyone, so this table is meant as a general guide rather than a diagnostic threshold. If you're unsure which category your experience falls into, that uncertainty itself is a reasonable reason to book an assessment.
            </p>
          </div>
        </section>

        {/* ============ SECTION: HOW HAIR LOSS IS ASSESSED ============ */}
        <section id="how-assessed" className="scroll-mt-36 py-20 px-4 md:px-8 border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-3xl font-extrabold text-[#1A1A1A]">How Hair Loss Is Assessed</h2>
                <p className="text-[#5F5F5F] leading-relaxed text-base">
                  In short: Hair loss is typically assessed through a medical history review, a scalp and hair examination, and — when clinically indicated — magnified scalp imaging (trichoscopy) or blood tests, rather than through a single standard test for everyone.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Medical history", desc: "General health background, recent illnesses, medications, and lifestyle factors." },
                    { title: "Family history", desc: "Since genetic hair loss patterns often run in families." },
                    { title: "Hair-loss pattern", desc: "Diffuse, patterned, patchy, or localized to specific areas." },
                    { title: "Scalp examination", desc: "Checking for redness, scaling, inflammation, or scarring." },
                    { title: "Hair density assessment", desc: "Comparing density across different areas of the scalp." },
                    { title: "Trichoscopy or dermoscopic assessment when appropriate", desc: "A magnified, non-invasive way to examine hair shafts and scalp skin more closely." },
                    { title: "Blood tests when clinically indicated", desc: "Such as thyroid function, iron studies, or vitamin levels, ordered based on your presentation." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <span className="w-6 h-6 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center font-bold text-xs shrink-0 mt-1">
                        {idx + 1}
                      </span>
                      <div>
                        <h4 className="font-bold text-[#1A1A1A] text-sm mb-0.5">{item.title}</h4>
                        <p className="text-xs text-[#5F5F5F]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-6 space-y-6">
                <img
                  src="/images/scalp-examination-hair-loss.jpg"
                  alt="Scalp examination for hair loss assessment"
                  className="w-full h-[350px] object-cover rounded-3xl shadow-lg border border-[#E6E2D8]"
                />
                <p className="text-sm text-[#5F5F5F] italic bg-white border border-[#E6E2D8] p-4 rounded-xl">
                  Which of these steps apply to you depends on your specific history and what the clinician observes during your consultation — not every patient needs every test.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SECTION: WHAT TO EXPECT DURING FIRST VISIT ============ */}
        <section id="first-visit" className="scroll-mt-36 py-20 px-4 md:px-8 bg-white border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <img
                  src="/images/hair-thinning-pattern-assessment.jpg"
                  alt="Hair thinning pattern being assessed by a clinician"
                  className="w-full h-[400px] object-cover rounded-3xl shadow-lg border border-[#E6E2D8]"
                />
              </div>
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-3xl font-extrabold text-[#1A1A1A]">What to Expect During Your First Visit</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { step: "1. Consultation", desc: "You'll discuss when your hair loss started, how it has progressed, and any related symptoms." },
                    { step: "2. Medical history", desc: "Your general health, medications, family history, and hair-care habits are reviewed." },
                    { step: "3. Scalp assessment", desc: "A visual and, where relevant, magnified examination of your scalp and hair." },
                    { step: "4. Possible causes", desc: "Based on findings, your clinician will discuss what might be contributing to your hair loss." },
                    { step: "5. Treatment options", desc: "If a treatment path is appropriate, options are discussed along with realistic expectations." },
                    { step: "6. Expected timeline", desc: "You'll be given a general sense of how long meaningful change typically takes to become visible." },
                    { step: "7. Aftercare", desc: "Guidance on hair care, scalp care, or lifestyle adjustments that may support your treatment plan." },
                    { step: "8. Follow-up", desc: "A plan for reassessment, since hair changes are best evaluated over time rather than after a single visit." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-[#FDFCF7] border border-[#E6E2D8] p-5 rounded-2xl shadow-sm space-y-2">
                      <h4 className="font-extrabold text-[#1F5E4B] text-sm uppercase tracking-wider">{item.step}</h4>
                      <p className="text-xs md:text-sm text-[#5F5F5F] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SECTION: HAIR LOSS TREATMENT OPTIONS ============ */}
        <section id="treatments" className="scroll-mt-36 py-20 px-4 md:px-8 border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-extrabold text-[#1A1A1A]">Hair Loss Treatment Options</h2>
              <p className="text-[#5F5F5F] text-base leading-relaxed">
                Treatment for hair loss depends entirely on the underlying cause identified during assessment — there is no universal treatment that suits every patient.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "PRP Hair Treatment",
                  desc: "Platelet-rich plasma (PRP) treatment involves preparing a concentration of platelets from a patient's own blood and applying it to the scalp. It may be considered for certain hair-thinning patterns, though suitability depends on individual assessment.",
                  link: "/services/hair-prp-dubai/",
                  linkText: "Read more on our Hair PRP Treatment page."
                },
                {
                  title: "Hair Mesotherapy",
                  desc: "Hair mesotherapy involves delivering a preparation of vitamins, minerals, or other agents directly into the scalp. It differs from PRP in composition and mechanism, and suitability varies by patient and underlying cause.",
                  link: "/services/mesotherapy-dubai/",
                  linkText: "Learn more about Hair Mesotherapy."
                },
                {
                  title: "Medical Management",
                  desc: "Some forms of hair loss, particularly those linked to hormonal imbalance, thyroid dysfunction, or inflammatory scalp conditions, may be addressed through medical management once a diagnosis is confirmed. This page does not offer prescribing guidance."
                },
                {
                  title: "Lifestyle and Nutritional Support",
                  desc: "General supportive measures can include a balanced diet, adequate protein intake, sufficient sleep, stress management, and gentle hair-care practices. These measures can support overall hair health."
                },
                {
                  title: "Hair Transplant",
                  desc: "A hair transplant is a surgical procedure that relocates hair follicles from a donor area to areas of thinning or baldness. It may be considered for appropriate candidates after non-surgical options have been discussed.",
                  link: "/services/prp-vs-hair-transplant-dubai/",
                  linkText: "See our PRP vs Hair Transplant guide."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-[#E6E2D8] p-6 rounded-2xl shadow-sm flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="font-extrabold text-[#1A1A1A] text-lg">{item.title}</h3>
                    <p className="text-sm text-[#5F5F5F] leading-relaxed">{item.desc}</p>
                  </div>
                  {item.link && (
                    <Link href={item.link} className="inline-flex items-center gap-1 text-[#1F5E4B] font-bold text-sm hover:underline mt-auto">
                      {item.linkText} <ChevronRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SECTION: PRP DEEP DIVE ============ */}
        <section id="prp-deep-dive" className="scroll-mt-36 py-20 px-4 md:px-8 bg-white border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-3xl font-extrabold text-[#1A1A1A]">PRP for Hair Loss</h2>
                <p className="text-[#5F5F5F] text-base leading-relaxed">
                  Because PRP is one of the more frequently asked-about treatments, here's a closer look at how it generally works:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "What PRP is", desc: "A treatment using a concentration of platelets separated from a small sample of the patient's own blood." },
                    { title: "How it's prepared", desc: "Blood is drawn and processed (typically using centrifugation) to isolate the platelet-rich portion." },
                    { title: "How it's administered", desc: "The prepared plasma is applied to the scalp, usually via injection, in the areas being treated." },
                    { title: "Why multiple sessions", desc: "Hair growth is a gradual biological process, so a treatment series is commonly discussed." },
                    { title: "How results develop", desc: "Any changes tend to appear gradually over a period of months, in line with the hair growth cycle." },
                    { title: "Patient suitability", desc: "Not every cause of hair loss responds to PRP, which is why assessment comes first." },
                    { title: "Temporary side effects", desc: "As with any injection-based procedure, temporary redness, tenderness, or mild swelling can occur." },
                    { title: "Recovery expectations", desc: "Most patients resume normal activities shortly afterward, though aftercare is provided." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-[#FDFCF7] border border-[#E6E2D8] p-5 rounded-2xl">
                      <h4 className="font-bold text-[#1F5E4B] text-sm mb-1">{item.title}</h4>
                      <p className="text-xs md:text-sm text-[#5F5F5F] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 space-y-6">
                <img
                  src="/images/prp-hair-treatment-procedure-dubai.jpg"
                  alt="PRP hair treatment procedure being performed at a Dubai clinic"
                  className="w-full h-[350px] object-cover rounded-3xl shadow-lg border border-[#E6E2D8]"
                />
                <div className="bg-[#F4F1EA] p-6 rounded-2xl space-y-4">
                  <p className="text-xs text-[#5F5F5F] leading-relaxed">
                    To explore this further, see: <Link href="/services/prp-hair-treatment-before-and-after/" className="underline font-bold text-[#1F5E4B]">PRP Hair Treatment Before and After</Link>, <Link href="/services/prp-hair-treatment-recovery/" className="underline font-bold text-[#1F5E4B]">PRP Hair Treatment Recovery</Link>, and <Link href="/services/hair-prp-cost-dubai/" className="underline font-bold text-[#1F5E4B]">PRP Hair Treatment Cost in Dubai</Link>. Results are not guaranteed and vary from patient to patient.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SECTION: PRP VS OTHERS (COMPARISONS) ============ */}
        <section id="comparisons" className="scroll-mt-36 py-20 px-4 md:px-8 border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto space-y-20">
            
            {/* PRP vs Mesotherapy */}
            <div className="space-y-8">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <h3 className="text-3xl font-extrabold text-[#1A1A1A]">PRP vs. Hair Mesotherapy</h3>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">
                    Neither option is universally "better" — suitability depends on your diagnosis and goals, which is why this is discussed during consultation.
                  </p>
                  <Link href="/services/prp-vs-hair-mesotherapy-dubai/" className="inline-flex items-center gap-1 text-[#1F5E4B] font-bold text-sm hover:underline">
                    Read the detailed PRP vs Mesotherapy comparison <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="lg:col-span-7 overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm bg-white border border-[#E6E2D8] rounded-2xl shadow-sm overflow-hidden">
                    <thead>
                      <tr className="bg-[#F4F1EA] text-[#1A1A1A] border-b border-[#E6E2D8]">
                        <th className="p-3 font-bold">Feature</th>
                        <th className="p-3 font-bold">PRP</th>
                        <th className="p-3 font-bold">Hair Mesotherapy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E6E2D8] text-[#5F5F5F]">
                      {[
                        { f: "Basic approach", prp: "Uses the patient's own blood-derived platelets", meso: "Uses injected vitamin, mineral, or nutrient-based preparations" },
                        { f: "Main components", prp: "Platelet-rich plasma from the patient", meso: "Formulated solutions (non-autologous)" },
                        { f: "Procedure", prp: "Blood draw, processing, then scalp injection", meso: "Direct scalp injection of a prepared solution" },
                        { f: "Recovery", prp: "Generally minimal downtime", meso: "Generally minimal downtime" },
                        { f: "Treatment planning", prp: "Typically planned as a session series", meso: "Typically planned as a session series" },
                        { f: "Limitations", prp: "Not suitable for every cause of hair loss", meso: "Not suitable for every cause of hair loss" }
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-[#FDFCF7]/50">
                          <td className="p-3 font-semibold text-[#1A1A1A]">{row.f}</td>
                          <td className="p-3">{row.prp}</td>
                          <td className="p-3">{row.meso}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* PRP vs Hair Transplant */}
            <div className="space-y-8">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm bg-white border border-[#E6E2D8] rounded-2xl shadow-sm overflow-hidden">
                    <thead>
                      <tr className="bg-[#F4F1EA] text-[#1A1A1A] border-b border-[#E6E2D8]">
                        <th className="p-3 font-bold">Feature</th>
                        <th className="p-3 font-bold">PRP</th>
                        <th className="p-3 font-bold">Hair Transplant</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E6E2D8] text-[#5F5F5F]">
                      {[
                        { f: "Treatment type", prp: "Non-surgical, injection-based", tx: "Surgical procedure" },
                        { f: "Surgical procedure", prp: "No", tx: "Yes" },
                        { f: "Main purpose", prp: "Supporting existing hair/scalp health in selected cases", tx: "Relocating hair follicles to thinning or bald areas" },
                        { f: "Recovery", prp: "Minimal downtime", tx: "Longer recovery period, with specific aftercare" },
                        { f: "Candidate suitability", prp: "Assessed individually; broader range of candidates", tx: "Requires specific donor-area and scalp assessment" },
                        { f: "Long-term considerations", prp: "May require maintenance sessions", tx: "Generally intended as a longer-term surgical solution" }
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-[#FDFCF7]/50">
                          <td className="p-3 font-semibold text-[#1A1A1A]">{row.f}</td>
                          <td className="p-3">{row.prp}</td>
                          <td className="p-3">{row.tx}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="lg:col-span-5 space-y-4">
                  <h3 className="text-3xl font-extrabold text-[#1A1A1A]">PRP vs. Hair Transplant</h3>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">
                    These treatments are not necessarily interchangeable, and some patients may be advised to consider one, the other, or a combination based on their diagnosis.
                  </p>
                  <Link href="/services/prp-vs-hair-transplant-dubai/" className="inline-flex items-center gap-1 text-[#1F5E4B] font-bold text-sm hover:underline">
                    Read the detailed PRP vs Transplant guide <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SECTION: UNDERSTANDING THE HAIR GROWTH CYCLE ============ */}
        <section id="growth-cycle" className="scroll-mt-36 py-20 px-4 md:px-8 bg-white border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-extrabold text-[#1A1A1A]">Understanding the Hair Growth Cycle</h2>
              <p className="text-[#5F5F5F] text-base leading-relaxed">
                Hair grows in a repeating cycle made up of four phases. Because hair follicles don't all cycle in sync, hair treatments generally do not produce instant visible changes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { phase: "Anagen", label: "Growth Phase", desc: "The active phase during which hair grows, lasting anywhere from two to several years." },
                { phase: "Catagen", label: "Transition Phase", desc: "A short transitional phase where hair growth slows and the follicle begins to shrink." },
                { phase: "Telogen", label: "Resting Phase", desc: "A resting phase where the hair is not actively growing but remains in the follicle." },
                { phase: "Exogen", label: "Shedding Phase", desc: "The phase where the resting hair is shed, making way for a new growth cycle." }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#FDFCF7] border border-[#E6E2D8] p-6 rounded-2xl shadow-sm text-center space-y-3 hover:border-[#1F5E4B] transition-all">
                  <span className="text-3xl font-black text-[#1F5E4B]/20">0{idx + 1}</span>
                  <h3 className="font-extrabold text-[#1F5E4B] text-xl leading-none">{item.phase}</h3>
                  <p className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">{item.label}</p>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-center pt-6">
              <div className="lg:col-span-7">
                <img
                  src="/images/hair-growth-cycle-diagram.jpg"
                  alt="Diagram of the anagen, catagen, telogen, and exogen hair growth cycle"
                  className="w-full h-[320px] object-cover rounded-3xl shadow-lg border border-[#E6E2D8]"
                />
              </div>
              <div className="lg:col-span-5 space-y-4">
                <p className="text-sm text-[#5F5F5F] leading-relaxed">
                  Meaningful results — where they occur — tend to unfold gradually. For a deeper understanding of the biological process, see our guide to the <Link href="/services/hair-growth-cycle/" className="underline font-bold text-[#1F5E4B]">Hair Growth Cycle</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>
      
        {/* ============ SECTION: DEMOGRAPHICS (MEN, WOMEN & AGE GROUPS) ============ */}
        <section id="demographics" className="scroll-mt-36 py-20 px-4 md:px-8 border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-[#E6E2D8] p-8 rounded-3xl shadow-sm space-y-4">
                <h3 className="font-extrabold text-2xl text-[#1F5E4B]">Hair Loss in Men</h3>
                <p className="text-sm text-[#5F5F5F] leading-relaxed">
                  In men, common presentations include a receding hairline and crown thinning, often associated with male pattern hair loss (androgenetic alopecia), which has a strong genetic component. However, not every male patient's hair loss is genetic — stress, scalp conditions, nutritional factors, medications, and other causes can also contribute or coexist with a genetic pattern, which is why assessment matters even when a pattern looks "typical."
                </p>
              </div>
              <div className="bg-white border border-[#E6E2D8] p-8 rounded-3xl shadow-sm space-y-4">
                <h3 className="font-extrabold text-2xl text-[#1F5E4B]">Hair Loss in Women</h3>
                <p className="text-sm text-[#5F5F5F] leading-relaxed">
                  In women, hair loss more often presents as diffuse thinning across the scalp or a widening part rather than a receding hairline. Common contributing factors include hormonal changes (pregnancy, postpartum shedding, menopause), nutritional factors, and underlying medical conditions. Because female pattern hair loss can resemble other causes on the surface, identifying the underlying driver is particularly important before choosing a treatment path.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#E6E2D8] p-8 rounded-3xl shadow-sm space-y-6">
              <h3 className="font-extrabold text-[#1A1A1A] text-xl border-b border-[#F0ECE3] pb-3">Hair Loss in Different Age Groups</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { group: "Young adults", desc: "Hair loss at a younger age can sometimes be genetic, but stress, nutritional gaps, or scalp conditions are also worth ruling out." },
                  { group: "Adults", desc: "This is when pattern hair loss most commonly becomes noticeable, though hormonal and lifestyle factors remain relevant." },
                  { group: "Middle-aged patients", desc: "Hormonal shifts (including menopause in women) and cumulative genetic pattern progression are common considerations." },
                  { group: "Older adults", desc: "Natural age-related thinning is common, but sudden changes still warrant assessment rather than being automatically attributed to age." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 text-sm bg-[#FDFCF7] p-4 rounded-xl border border-[#F0ECE3]">
                    <div className="font-extrabold text-[#1F5E4B] min-w-[120px]">{item.group}:</div>
                    <div className="text-[#5F5F5F]">{item.desc}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#5F5F5F] pt-4 border-t border-[#F0ECE3]">
                Regardless of age, sudden or unusual hair loss deserves professional evaluation rather than assumptions based on age alone.
              </p>
            </div>
          </div>
        </section>

        {/* ============ SECTION: CLIMATE IMPACT ============ */}
        <section id="climate" className="scroll-mt-36 py-20 px-4 md:px-8 bg-white border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-extrabold text-[#1A1A1A]">Hair Loss and Dubai's Climate</h2>
              <p className="text-[#5F5F5F] leading-relaxed text-base">
                Dubai's climate — intense heat, sun exposure, high humidity at times, and frequent swimming or sweating — can affect how your hair feels and behaves, even if it isn't a direct cause of permanent hair loss on its own. Considerations relevant to the local climate include:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#5F5F5F]">
                {[
                  "Sun exposure, which can dry out hair and make it more prone to breakage.",
                  "Sweating and frequent washing, which can affect scalp balance for some individuals.",
                  "Swimming, particularly in chlorinated pools, which can leave hair dry or brittle.",
                  "Hair-care habits adapted to heat (frequent heat styling to manage humidity, for example), which can contribute to breakage."
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-2 items-start">
                    <Check className="w-5 h-5 text-[#1F5E4B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 bg-[#FDFCF7] border border-[#E6E2D8] p-8 rounded-3xl relative">
              <p className="text-xs text-[#5F5F5F] leading-relaxed italic">
                "It's worth being clear that Dubai's climate is not established as a direct cause of permanent hair loss — but it can influence hair condition and, in some cases, make existing thinning more noticeable or contribute to breakage that's mistaken for hair loss."
              </p>
            </div>
          </div>
        </section>

        {/* ============ SECTION: CHOOSING A CLINIC ============ */}
        <section id="choosing-clinic" className="scroll-mt-36 py-20 px-4 md:px-8 border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-extrabold text-[#1A1A1A]">How to Choose a Hair Loss Clinic in Dubai</h2>
              <p className="text-[#5F5F5F] leading-relaxed text-base">
                Choosing where to seek care matters. Consider the following when evaluating a clinic:
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Guidelines */}
              <div className="bg-white border border-[#E6E2D8] p-8 rounded-3xl shadow-sm space-y-6">
                <h3 className="font-extrabold text-xl text-[#1F5E4B] border-b border-[#F0ECE3] pb-3">What to Look For:</h3>
                <ul className="space-y-3.5 text-sm text-[#5F5F5F]">
                  {[
                    "Qualified healthcare professionals involved in your assessment and care",
                    "Appropriate hair-loss assessment rather than treatment offered without evaluation",
                    "Individualized treatment plans based on your specific findings, not a one-size-fits-all package",
                    "Transparent communication about what a treatment can and cannot realistically achieve",
                    "Realistic expectations set from the first conversation",
                    "Patient safety prioritized throughout the process",
                    "Appropriate follow-up to monitor progress over time",
                    "Clear explanation of costs before you commit to treatment",
                    "Relevant treatment experience with hair and scalp concerns specifically",
                    "No guaranteed results promised — because no ethical clinic can guarantee biological outcomes"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-5 h-5 text-[#1F5E4B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Red Flags */}
              <div className="bg-amber-50/20 border border-amber-200 p-8 rounded-3xl shadow-sm space-y-6">
                <h3 className="font-extrabold text-xl text-amber-800 border-b border-amber-200 pb-3">Be Cautious of Clinics That:</h3>
                <ul className="space-y-3.5 text-sm text-[#5F5F5F]">
                  {[
                    "Promise guaranteed regrowth",
                    "Recommend the exact same treatment to every patient regardless of diagnosis",
                    "Skip assessment entirely and move straight to selling treatment",
                    "Pressure you into large upfront packages",
                    "Downplay or hide possible risks and limitations",
                    "Rely on unrealistic or unverifiable before-and-after claims"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SECTION: WHY RAMACARE ============ */}
        <section id="why-ramacare" className="scroll-mt-36 py-20 px-4 md:px-8 bg-white border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-3xl font-extrabold text-[#1A1A1A]">Why Choose RamaCare Polyclinic?</h2>
                <p className="text-base text-[#5F5F5F] leading-relaxed">
                  RamaCare Polyclinic approaches hair and scalp concerns as part of a broader, patient-centered healthcare model. What this generally means for patients:
                </p>
                <ul className="grid sm:grid-cols-2 gap-4 text-sm text-[#5F5F5F]">
                  {[
                    "A personalized consultation as the starting point for any hair or scalp concern",
                    "An individual hair and scalp assessment rather than a generic recommendation",
                    "Treatment planning based on your specific findings and goals, discussed openly with you",
                    "Access to PRP and other hair-treatment options, where clinically appropriate",
                    "Patient education so you understand your options, not just a sales pitch",
                    "Follow-up guidance to help track how your hair and scalp respond over time",
                    "A multispecialty healthcare environment, useful if your hair loss turns out to be connected to a broader health factor (thyroid, hormonal, nutritional, etc.)",
                    "A convenient Jumeirah Terrace location for consultations and follow-up visits"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 bg-[#FDFCF7] p-3.5 rounded-xl border border-[#F0ECE3]">
                      <Check className="w-5 h-5 text-[#1F5E4B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-5 space-y-6">
                <img
                  src="/images/ramacare-polyclinic-hair-loss-clinic-dubai.jpg"
                  alt="RamaCare Polyclinic hair loss clinic location in Dubai"
                  className="w-full h-[300px] object-cover rounded-3xl shadow-lg border border-[#E6E2D8]"
                />
                <p className="text-xs text-[#5F5F5F] leading-relaxed text-center italic">
                  RamaCare Polyclinic does not claim to be the only or automatically the "best" option for every patient — the right clinic is the one that takes the time to properly assess your specific situation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SECTION: COSTS & SESSIONS ============ */}
        <section id="costs-sessions" className="scroll-mt-36 py-20 px-4 md:px-8 border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-extrabold text-[#1A1A1A]">Costs, Sessions & Results Timeline</h2>
              <p className="text-[#5F5F5F] text-base leading-relaxed">
                Understanding pricing, required sessions, and expected timelines helps set realistic expectations from the start.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Cost Factors */}
              <div className="bg-white border border-[#E6E2D8] p-6 rounded-2xl shadow-sm space-y-4">
                <h3 className="font-extrabold text-xl text-[#1F5E4B]">Treatment Cost</h3>
                <p className="text-sm text-[#5F5F5F] leading-relaxed">
                  Hair loss treatment costs in Dubai vary considerably and depend on several factors rather than a single fixed price. These typically include:
                </p>
                <ul className="space-y-2 text-xs text-[#5F5F5F]">
                  <li>● The type of treatment recommended (PRP, mesotherapy, etc.)</li>
                  <li>● The number of sessions required based on response</li>
                  <li>● The severity and pattern of your hair loss</li>
                  <li>● Diagnostic assessment, such as blood tests</li>
                  <li>● Combined treatment plans</li>
                </ul>
                <p className="text-xs text-[#5F5F5F] pt-2 border-t border-[#F0ECE3]">
                  For more detail specific to PRP, see <Link href="/services/hair-prp-cost-dubai/" className="underline font-semibold text-[#1F5E4B]">PRP Hair Treatment Cost in Dubai</Link>.
                </p>
              </div>

              {/* Number of Treatments */}
              <div className="bg-white border border-[#E6E2D8] p-6 rounded-2xl shadow-sm space-y-4">
                <h3 className="font-extrabold text-xl text-[#1F5E4B]">Number of Treatments</h3>
                <p className="text-sm text-[#5F5F5F] leading-relaxed">
                  There's no universal number of sessions that applies to everyone. The number of treatments depends on:
                </p>
                <ul className="space-y-2 text-xs text-[#5F5F5F]">
                  <li>● The diagnosis behind your hair loss</li>
                  <li>● The severity of thinning or shedding at assessment</li>
                  <li>● The type of treatment chosen</li>
                  <li>● How you respond to treatment over time</li>
                  <li>● Your clinical goals</li>
                </ul>
                <p className="text-xs text-[#5F5F5F] pt-2 border-t border-[#F0ECE3]">
                  Rather than committing to a fixed package upfront, a reasonable approach is to begin with assessment and an initial treatment phase.
                </p>
              </div>

              {/* Timeline to Results */}
              <div className="bg-white border border-[#E6E2D8] p-6 rounded-2xl shadow-sm space-y-4">
                <h3 className="font-extrabold text-xl text-[#1F5E4B]">Expected Timeline</h3>
                <p className="text-sm text-[#5F5F5F] leading-relaxed">
                  Hair loss treatment results are generally gradual rather than immediate, because hair grows in cycles that unfold over months:
                </p>
                <ul className="space-y-2 text-xs text-[#5F5F5F]">
                  <li>● Hair grows in cycles, and progress takes time.</li>
                  <li>● PRP is not expected to produce instant changes.</li>
                  <li>● Hormonal/nutritional causes resolve differently.</li>
                  <li>● Regular follow-up is important to evaluate efficacy.</li>
                </ul>
                <p className="text-xs text-[#5F5F5F] pt-2 border-t border-[#F0ECE3]">
                  For more detail on PRP recovery, see <Link href="/services/prp-hair-treatment-recovery/" className="underline font-semibold text-[#1F5E4B]">PRP Hair Treatment Recovery</Link>.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ============ SECTION: PREVENTION & DAILY CARE ============ */}
        <section id="prevention" className="scroll-mt-36 py-20 px-4 md:px-8 bg-white border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-extrabold text-[#1A1A1A]">Hair Loss Prevention and Daily Care</h2>
              <p className="text-[#5F5F5F] text-base leading-relaxed">
                While not every form of hair loss is preventable, general hair and scalp care practices can support overall hair health:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Eat a balanced diet with adequate nutrients.",
                "Get sufficient protein intake.",
                "Avoid excessive heat styling where possible.",
                "Avoid overly tight hairstyles worn consistently.",
                "Manage stress through sustainable habits.",
                "Use gentle hair-care practices (avoid harsh brushing).",
                "Have scalp conditions assessed and treated appropriately.",
                "Avoid taking supplements without medical advice."
              ].map((item, idx) => (
                <div key={idx} className="bg-[#FDFCF7] border border-[#E6E2D8] p-5 rounded-2xl flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-[#1F5E4B] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#5F5F5F] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SECTION: COMMON MYTHS ============ */}
        <section id="myths" className="scroll-mt-36 py-20 px-4 md:px-8 border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-extrabold text-[#1A1A1A]">Common Hair Loss Myths</h2>
              <p className="text-[#5F5F5F] text-base leading-relaxed">
                Separating facts from common misconceptions is essential for understanding your hair loss path:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { myth: "All hair loss is permanent.", fact: "Many forms of hair loss — including stress-related shedding and some nutritional causes — are temporary and can improve once the underlying trigger is addressed." },
                { myth: "PRP works for everyone.", fact: "PRP may be appropriate for some hair-loss patterns but not others. Suitability depends on individual assessment." },
                { myth: "More supplements always mean faster hair growth.", fact: "Supplementing beyond what your body needs does not speed up hair growth and isn't a substitute for identifying the actual cause of shedding." },
                { myth: "Cutting hair makes it grow thicker.", fact: "Cutting hair affects the visible ends, not the follicle, and does not change the rate or thickness of new growth." },
                { myth: "Hair loss only affects older people.", fact: "Hair loss can occur at almost any adult age and, in some cases, in adolescence, depending on the cause." },
                { myth: "A single treatment can permanently stop hair loss.", fact: "Most causes of hair loss require ongoing management or maintenance rather than a one-time fix, particularly genetic pattern hair loss." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-[#E6E2D8] p-6 rounded-2xl shadow-sm space-y-3">
                  <p className="text-xs font-bold text-amber-800 uppercase tracking-wider">Myth: "{item.myth}"</p>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed"><span className="font-extrabold text-[#1A1A1A]">Fact:</span> {item.fact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SECTION: FAQS (18 QUESTIONS WITH ACCORDION & SEARCH) ============ */}
        <section id="faq" className="scroll-mt-36 py-20 px-4 md:px-8 bg-white border-b border-[#E6E2D8]">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#F0ECE3] pb-6">
              <h2 className="text-3xl font-extrabold text-[#1A1A1A] flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-[#1F5E4B]" />
                Frequently Asked Questions
              </h2>
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 border border-[#E6E2D8] rounded-xl text-sm focus:outline-none focus:border-[#1F5E4B] bg-[#FDFCF7]"
                />
              </div>
            </div>

            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => {
                const actualIndex = faqs.findIndex(f => f.question === faq.question);
                return (
                  <div
                    key={index}
                    className="border border-[#E6E2D8] rounded-2xl overflow-hidden bg-[#FDFCF7]/50"
                  >
                    <button
                      onClick={() => toggleFaq(actualIndex)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-white transition-colors"
                    >
                      <span className="font-extrabold text-[#1A1A1A] text-sm md:text-base">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-[#1F5E4B] shrink-0 transition-transform ${openFaq === actualIndex ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === actualIndex && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-white"
                        >
                          <p className="px-6 pb-6 pt-2 text-[#5F5F5F] leading-relaxed text-sm md:text-base border-t border-[#F0ECE3]">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              {filteredFaqs.length === 0 && (
                <p className="text-sm text-[#5F5F5F] text-center py-8 bg-[#FDFCF7] border border-[#E6E2D8] rounded-2xl">No matching FAQs found. Try searching for other keywords.</p>
              )}
            </div>
          </div>
        </section>

        {/* ============ MEDICAL DISCLAIMER ============ */}
        <section className="py-12 px-4 md:px-8 bg-red-50/30 border-b border-[#E6E2D8]">
          <div className="max-w-4xl mx-auto bg-white border border-red-200 rounded-3xl p-8 space-y-4 shadow-sm">
            <h3 className="text-red-900 font-extrabold text-xl flex items-center gap-3">
              <Info className="w-6 h-6 text-red-700" />
              Medical Disclaimer
            </h3>
            <p className="text-red-800 text-sm leading-relaxed">
              Hair loss can have many possible causes, and treatment suitability varies from person to person. The information on this page is intended for general educational purposes and cannot replace an in-person clinical assessment. If you are experiencing sudden, severe, painful, or patchy hair loss, please consult a qualified healthcare professional for proper evaluation.
            </p>
          </div>
        </section>

        {/* ============ BOOK CONSULTATION CTA ============ */}
        <section className="py-20 px-4 md:px-8 bg-white border-b border-[#E6E2D8]">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#1F5E4B] to-[#12392D] text-white rounded-3xl p-8 md:p-16 text-center space-y-8 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_50%)]"></div>
            <div className="max-w-3xl mx-auto space-y-6 relative z-10">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                Book a Hair Loss Consultation in Dubai
              </h2>
              <p className="text-white/95 leading-relaxed text-base md:text-lg">
                If you're concerned about hair thinning, shedding, or scalp changes, the most useful next step is a proper consultation rather than guesswork. Speak with a qualified healthcare professional at RamaCare Polyclinic about your hair and scalp concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href="https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20the%20Hair%20Loss%20Clinic%20in%20Dubai."
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center gap-3 bg-[#A2E3C4] text-[#12392D] px-8 py-5 rounded-2xl font-black text-lg hover:bg-white hover:text-[#12392D] transition-all shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  Book Your Consultation at RamaCare Polyclinic
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ RELATED GUIDES ============ */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            <h3 className="text-3xl font-extrabold text-[#1A1A1A] text-center">Related Hair Treatment Guides</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedGuides.map((guide, idx) => (
                <Link
                  key={idx}
                  href={guide.href}
                  className="group bg-white border border-[#E6E2D8] hover:border-[#1F5E4B]/40 hover:shadow-md p-6 rounded-2xl transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <h4 className="font-extrabold text-[#1A1A1A] group-hover:text-[#1F5E4B] transition-colors text-lg leading-snug">
                      {guide.title}
                    </h4>
                    <p className="text-sm text-[#5F5F5F] leading-relaxed">
                      {guide.desc}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-extrabold text-[#1F5E4B] mt-6 uppercase tracking-wider">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="hair-loss-clinic-dubai" />
      </div>
    </Layout>
  );
}
