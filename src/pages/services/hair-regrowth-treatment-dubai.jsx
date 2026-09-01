import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ChevronLeft,
  Search,
  X,
  Plus,
  ArrowUpRight,
  ArrowRight,
  MessageCircle,
  Shield,
  AlertCircle,
  Clock,
  Sparkles,
  Layers,
  Activity,
  Maximize2
} from 'lucide-react';

const SITE_URL = 'https://ramacarepolyclinic.ae';
const PAGE_PATH = '/services/hair-regrowth-treatment-dubai/';

export default function HairRegrowthTreatmentDubai() {
  const navRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [faqSearch, setFaqSearch] = useState('');
  const [activeComparisonTab, setActiveComparisonTab] = useState('meso');

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollNav = (direction) => {
    if (navRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      navRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: "What is hair regrowth treatment?",
      answer: "It refers to approaches — such as PRP, mesotherapy, medical management, or in some cases hair transplantation — aimed at supporting or restoring hair growth in areas of thinning, selected based on the underlying cause."
    },
    {
      question: "Can thinning hair grow back?",
      answer: "It depends on the cause and whether functioning follicles remain. Some causes, like temporary shedding, often resolve on their own; others, like advanced or scarring hair loss, generally do not respond to regrowth-focused treatment."
    },
    {
      question: "What causes hair loss?",
      answer: "Common causes include genetic (pattern) hair loss, hormonal changes, stress, nutritional deficiencies, thyroid conditions, scalp conditions, certain medications, and hairstyling-related damage."
    },
    {
      question: "What is the best treatment for hair regrowth?",
      answer: "There's no single best treatment for everyone — the right approach depends on your specific cause, severity, follicle health, and goals, determined through a professional assessment."
    },
    {
      question: "Does PRP help hair regrowth?",
      answer: "PRP may support the follicular environment in certain hair-loss conditions, though response varies and it isn't guaranteed to work for everyone or every cause."
    },
    {
      question: "How long does hair regrowth treatment take?",
      answer: "Timelines vary, but visible change generally isn't expected in the first few weeks. Many patients need several months, often across multiple sessions, before meaningful change (if any) becomes apparent."
    },
    {
      question: "How many PRP sessions may be needed?",
      answer: "This depends on your individual diagnosis and response and is best determined through consultation rather than a fixed number."
    },
    {
      question: "Are PRP results permanent?",
      answer: "No — most causes of hair loss are progressive, so PRP results, where achieved, often require maintenance sessions over time."
    },
    {
      question: "Does Hair Mesotherapy help hair growth?",
      answer: "It may play a role for some patients, depending on the formulation and underlying cause, though — like PRP — it isn't guaranteed to work for everyone."
    },
    {
      question: "Is PRP better than Hair Mesotherapy?",
      answer: "Neither is universally better — they work through different mechanisms, and suitability depends on your individual situation."
    },
    {
      question: "Can PRP replace a hair transplant?",
      answer: "Not necessarily. PRP supports the existing follicular environment, while a transplant physically relocates viable follicles. They address different degrees and types of hair loss and are sometimes used together."
    },
    {
      question: "Can women receive hair regrowth treatment?",
      answer: "Yes. Women experience hair thinning for a range of reasons — including hormonal, postpartum, and nutritional factors — and treatment options are available, tailored to the underlying cause."
    },
    {
      question: "Can men regrow thinning hair?",
      answer: "Possibly, depending on the cause and follicle health, particularly in earlier stages of thinning. Advanced pattern hair loss has more limited regrowth potential."
    },
    {
      question: "Can stress cause hair loss?",
      answer: "Yes. Significant stress can trigger a temporary shedding pattern known as telogen effluvium, which often improves once the underlying stressor is addressed."
    },
    {
      question: "Which vitamins are important for healthy hair?",
      answer: "Iron, vitamin D, vitamin B12, zinc, and adequate protein are commonly discussed in relation to hair health, though supplementation should be based on a confirmed deficiency rather than assumption."
    },
    {
      question: "Does nutrition affect hair growth?",
      answer: "Yes. Nutritional deficiencies can contribute to thinning, which is why a balanced diet — and, where needed, professional evaluation of deficiencies — is often part of a broader treatment plan."
    },
    {
      question: "What happens during a hair consultation?",
      answer: "Typically, a review of your medical and hair-loss history, a scalp examination, discussion of your goals, and a conversation about which treatment approach (if any) may be appropriate for you."
    },
    {
      question: "How much does hair regrowth treatment cost in Dubai?",
      answer: "Cost depends on the treatment type, number of sessions, and your specific plan. See our PRP Hair Treatment Cost in Dubai page for more detail, or discuss pricing during consultation."
    },
    {
      question: "When should I see a hair specialist?",
      answer: "If you're noticing ongoing thinning, a receding hairline, patchy loss, or sudden or excessive shedding — especially if it's sudden, painful, or accompanied by other symptoms — it's worth seeking a professional assessment."
    },
    {
      question: "How can I track my hair regrowth progress?",
      answer: "Use consistent baseline and follow-up photos — same lighting, angle, hairstyle, and scalp area — at regular intervals, and review progress with your clinician rather than relying on daily mirror checks."
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
    faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const tocItems = [
    { id: "what-is", label: "1. What Is Hair Regrowth?" },
    { id: "why-stop", label: "2. Why Does Hair Stop Growing?" },
    { id: "cycle", label: "3. Hair Growth Cycle and Regrowth" },
    { id: "can-grow-back", label: "4. Can Thinning Hair Grow Back?" },
    { id: "options", label: "5. Hair Regrowth Treatment Options" },
    { id: "prp-deep", label: "6. PRP for Hair Regrowth" },
    { id: "timeline", label: "7. Hair Regrowth Treatment Timeline" },
    { id: "factors", label: "8. Factors That Affect Hair Regrowth" },
    { id: "who-benefit", label: "9. Who May Benefit From Hair Regrowth Treatment?" },
    { id: "who-need-diff", label: "10. Who May Need a Different Approach?" },
    { id: "men", label: "11. Hair Regrowth for Men" },
    { id: "women", label: "12. Hair Regrowth for Women" },
    { id: "prp-vs-meso", label: "13. PRP vs Hair Mesotherapy" },
    { id: "prp-vs-transplant", label: "14. PRP vs Hair Transplant" },
    { id: "choose-clinic", label: "15. How to Choose a Hair Regrowth Clinic in Dubai" },
    { id: "cost", label: "16. Hair Regrowth Treatment Cost in Dubai" },
    { id: "tracking", label: "17. How to Track Hair Regrowth" },
    { id: "support", label: "18. How to Support Healthy Hair Growth" },
    { id: "myths", label: "19. Common Hair Regrowth Myths" },
    { id: "treatment-dubai", label: "20. Hair Regrowth Treatment in Dubai" },
    { id: "why-choose", label: "21. Why Choose RamaCare Polyclinic?" },
    { id: "faq", label: "22. Frequently Asked Questions" },
    { id: "disclaimer", label: "23. Medical Disclaimer" },
    { id: "guides", label: "24. Related Hair Treatment Guides" }
  ];

  const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;
  const OG_IMAGE = `${SITE_URL}/images/hair-regrowth-treatment-dubai-og.jpg`;
  const META_KEYWORDS =
    'Hair regrowth treatment Dubai, PRP hair treatment Dubai, Hair mesotherapy Dubai, Hair loss treatment Dubai, Hair thinning treatment Dubai, Best hair regrowth Dubai, Hair specialist Dubai, Scalp treatment Dubai, PRP vs mesotherapy hair, Hair regrowth clinic Dubai';

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${CANONICAL_URL}#webpage`,
        "url": CANONICAL_URL,
        "name": "Hair Regrowth Treatment Dubai: Options & Results",
        "description": "Explore hair regrowth treatment in Dubai — causes, options like PRP, realistic timelines, and what to expect. Book a personalized consultation today.",
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "url": `${SITE_URL}/`,
          "name": "RamaCare Polyclinic"
        },
        "about": {
          "@type": "MedicalCondition",
          "name": "Hair Loss / Hair Regrowth"
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
            { "@type": "ListItem", "position": 3, "name": "Hair Regrowth Treatment Dubai", "item": CANONICAL_URL }
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
        <title key="title">Hair Regrowth Treatment Dubai: Options & Results</title>
        <meta
          name="description"
          content="Explore hair regrowth treatment in Dubai — causes, options like PRP, realistic timelines, and what to expect. Book a personalized consultation today."
          key="description"
        />
        <meta name="keywords" content={META_KEYWORDS} key="keywords" />
        <meta name="robots" content="index, follow" key="robots" />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Hair Regrowth Treatment Dubai: Options & Results" key="og:title" />
        <meta property="og:description" content="Explore hair regrowth treatment in Dubai — causes, options like PRP, realistic timelines, and what to expect. Book a personalized consultation today." key="og:description" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:image" content={OG_IMAGE} key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Hair Regrowth Treatment Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Hair Regrowth Treatment Dubai: Options & Results" key="twitter:title" />
        <meta name="twitter:description" content="Explore hair regrowth treatment in Dubai — causes, options like PRP, realistic timelines, and what to expect. Book a personalized consultation today." key="twitter:description" />
        <meta name="twitter:image" content={OG_IMAGE} key="twitter:image" />

        {/* Unified JSON-LD @graph Schema */}
        <script
          key="schema-graph"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </Head>

      <div className="bg-[#FAF9F5] text-[#1E2E2A] font-sans antialiased min-h-screen relative selection:bg-[#A2E3C4] selection:text-[#12392D]">
        
        {/* ============ OVERLAY BACKGROUND LIGHT PATTERNS ============ */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-[#A2E3C4]/15 to-transparent blur-[120px] pointer-events-none z-0" />
        <div className="absolute top-[30%] left-0 w-[40vw] h-[60vh] rounded-full bg-gradient-to-tr from-[#1F5E4B]/5 to-transparent blur-[100px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center text-xs font-medium text-[#5F5F5F] gap-1.5">
            <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
            <span className="mx-1">/</span>
            <Link href="/services/" className="hover:text-[#1F5E4B] transition-colors">Services</Link>
            <span className="mx-1">/</span>
            <span className="text-[#1F5E4B]">Hair Regrowth Treatment Dubai</span>
          </nav>
        </div>

        {/* ============ EDITORIAL HEADER ============ */}
        <header className="relative z-10 pt-12 pb-16 px-4 md:px-12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-end border-b border-[#1E2E2A]/10 pb-16">
            <div className="lg:col-span-8 space-y-6">
              <span className="text-[#1F5E4B] uppercase tracking-[0.25em] text-xs font-bold block">
                RamaCare Clinical Publication
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#12392D] leading-[1.05]">
                Hair Regrowth <br />Treatment Dubai: <br />
                <span className="font-light text-[#1F5E4B]">Options, Results & Expectations</span>
              </h1>
            </div>
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-[#12392D]/5 border border-[#12392D]/10 rounded-2xl p-6 backdrop-blur-md">
                <p className="text-xs uppercase tracking-wider text-[#1F5E4B] font-bold mb-2">Location Status</p>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>RamaCare Polyclinic, Jumeirah, Dubai</span>
                </div>
                <div className="mt-4 pt-4 border-t border-[#1E2E2A]/10 flex gap-2">
                  <a
                    href="https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic%2C%20I%20would%20like%20to%20book%20a%20consultation%20for%20Hair%20Regrowth%20Treatment%20Dubai."
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex-1 bg-[#12392D] hover:bg-[#1F5E4B] text-[#FAF9F5] text-xs font-bold text-center py-3 rounded-lg transition-colors"
                  >
                    WhatsApp Consult
                  </a>
                  <a
                    href="/contact-us"
                    className="flex-1 border border-[#12392D] hover:bg-[#12392D]/10 text-[#12392D] text-xs font-bold text-center py-3 rounded-lg transition-colors"
                  >
                    View Clinic Page
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ============ ASYMMETRIC HERO TEXT BLOCK ============ */}
          <div className="grid lg:grid-cols-12 gap-8 pt-16 items-start">
            <div className="lg:col-span-7 space-y-6 lg:pr-12">
              <p className="text-xl md:text-2xl text-[#1F5E4B] leading-relaxed">
                If your hair has been thinning, your hairline has started to recede, your crown feels sparser than it used to, your part looks wider in photos, you're seeing more hair than usual in the shower drain, or your hair just seems to be growing more slowly and finely — you're probably here because you want to know one thing: can this be fixed, and how?
              </p>
              <p className="text-[#1E2E2A]/80 leading-relaxed text-base">
                It's a reasonable question, and it deserves an honest answer rather than a sales pitch. Hair regrowth isn't a single, guaranteed outcome that every treatment produces for every person. Whether — and how much — your hair can regrow depends heavily on what caused the thinning in the first place and on the condition of the hair follicles that remain. Two people with visually similar thinning can have completely different underlying causes, and therefore completely different treatment paths and expected outcomes.
              </p>
              <p className="text-[#1E2E2A]/80 leading-relaxed text-base">
                At RamaCare Polyclinic in Dubai, we approach hair regrowth as something that starts with understanding why your hair is behaving the way it is — not with jumping straight to a treatment menu. This page is designed to walk you through what hair regrowth actually means, why hair stops growing normally, what treatment approaches exist (including PRP hair treatment), what timelines are realistic, and how to evaluate whether a clinic is being straightforward with you. We won't promise you a permanent cure or a guaranteed result — no responsible clinic can — but we will give you a clear, medically grounded picture to bring into your consultation.
              </p>
            </div>

            {/* QUICK ANSWER FLOATING BANNER & IMAGE */}
            <div className="lg:col-span-5 space-y-6 mt-6 lg:mt-0">
              <div className="relative">
                <div className="absolute -top-6 -left-6 text-8xl font-serif text-[#1F5E4B]/10 select-none">“</div>
                <div className="bg-[#12392D] text-[#FAF9F5] rounded-3xl p-8 shadow-xl relative z-10 space-y-4">
                  <span className="text-[#A2E3C4] text-xs font-bold uppercase tracking-widest block">Quick Answer</span>
                  <h3 className="text-xl font-bold">What Is the Best Treatment for Hair Regrowth?</h3>
                  <p className="text-sm text-[#FAF9F5]/85 leading-relaxed font-sans">
                    There is no single treatment that is “best” for everyone. The most appropriate approach depends on the underlying cause of hair loss, its severity and duration, the condition of the remaining hair follicles, your medical history, and your personal goals. For some patients, PRP or nutritional correction may be part of the plan; for others, medical management or a hair transplant may be more relevant; and for some, a combination of approaches is used. The only reliable way to determine the right option for you is a proper hair and scalp assessment with a qualified healthcare professional.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-[#1E2E2A]/10 shadow-sm aspect-[4/3] group bg-white">
                <img
                  src="/images/Doctor consulting with a patient about hair regrowth treatment.jpg"
                  alt="Doctor consulting with a patient about hair regrowth treatment options in Dubai"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 text-white">
                  <p className="text-xs font-semibold font-sans">RamaCare Hair Consultation in Dubai</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ============ HORIZONTAL STICKY QUICK NAV ============ */}
        <div className="sticky top-[80px] z-30 bg-[#FAF9F5]/95 backdrop-blur-md border-y border-[#1E2E2A]/10 py-3.5 flex items-center relative">
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
            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/95 to-transparent px-3.5 z-20 text-[#1F5E4B] hover:text-[#12392D] transition-colors flex items-center justify-center cursor-pointer border-none outline-none"
            aria-label="Scroll left">
            <ChevronLeft className="w-5 h-5 md:w-6 h-6" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={navRef}
            className="w-full overflow-x-auto no-scrollbar whitespace-nowrap px-10 md:px-12 scroll-smooth"
          >
            <div className="flex gap-2">
              <span className="inline-block px-4 py-2 text-xs md:text-sm font-bold text-[#1F5E4B] uppercase tracking-wider self-center mr-2">
                Quick Navigation:
              </span>
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="inline-block px-4 py-2 rounded-full text-xs md:text-sm font-bold bg-[#12392D]/5 text-[#1E2E2A] hover:bg-[#1F5E4B] hover:text-white transition-all shadow-sm border border-[#1E2E2A]/10"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scrollNav('right')}
            className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-[#FAF9F5] via-[#FAF9F5]/95 to-transparent px-3.5 z-20 text-[#1F5E4B] hover:text-[#12392D] transition-colors flex items-center justify-center cursor-pointer border-none outline-none"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 md:w-6 h-6" />
          </button>
        </div>

        {/* ============ 1. WHAT IS HAIR REGROWTH? ============ */}
        <section id="what-is" className="py-24 px-4 md:px-12 max-w-7xl mx-auto scroll-mt-28">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <span className="text-mono text-xs uppercase tracking-widest text-[#1F5E4B] font-bold">01 / Assessment</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#12392D] tracking-tight">
                What Is <br />Hair Regrowth?
              </h2>
              <div className="w-16 h-1 bg-[#1F5E4B]"></div>
            </div>
            
            <div className="lg:col-span-8 space-y-8">
              <div className="p-8 bg-white border border-[#1E2E2A]/5 rounded-3xl space-y-4 shadow-sm">
                <p className="text-base text-[#1E2E2A]/90 leading-relaxed font-sans">
                  “Hair regrowth” gets used loosely online, so it's worth being precise about what it actually means — and what it doesn't.
                </p>
                <p className="text-base text-[#1E2E2A]/90 leading-relaxed font-sans">
                  At its core, hair regrowth refers to new hair emerging from follicles, whether that's a follicle that had gone dormant becoming active again, or a fine, miniaturized hair growing thicker and more visible over time. That's different from a few related but distinct concepts patients often conflate:
                </p>
              </div>

              {/* CONCEPT BLOCKS */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[#1F5E4B]/5 border border-[#1F5E4B]/10 rounded-2xl p-6 relative">
                  <div className="w-8 h-8 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] font-bold text-xs flex items-center justify-center mb-4">A</div>
                  <h4 className="font-bold text-[#12392D] mb-2">Regrowth vs. reduced shedding</h4>
                  <p className="text-xs text-[#1E2E2A]/80 leading-relaxed font-sans">
                    Shedding less hair than before is a positive sign, but it isn't the same as new growth — it may simply mean your existing hair is staying on your scalp longer.
                  </p>
                </div>
                
                <div className="bg-[#1F5E4B]/5 border border-[#1F5E4B]/10 rounded-2xl p-6 relative">
                  <div className="w-8 h-8 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] font-bold text-xs flex items-center justify-center mb-4">B</div>
                  <h4 className="font-bold text-[#12392D] mb-2">Hair density vs. hair thickness</h4>
                  <p className="text-xs text-[#1E2E2A]/80 leading-relaxed font-sans">
                    Density refers to how many hairs occupy a given area of scalp; thickness refers to how wide each individual strand is. You can have improved thickness without more density, or vice versa.
                  </p>
                </div>

                <div className="bg-[#1F5E4B]/5 border border-[#1F5E4B]/10 rounded-2xl p-6 relative">
                  <div className="w-8 h-8 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] font-bold text-xs flex items-center justify-center mb-4">C</div>
                  <h4 className="font-bold text-[#12392D] mb-2">Maintenance vs. new growth</h4>
                  <p className="text-xs text-[#1E2E2A]/80 leading-relaxed font-sans">
                    Some treatments and habits primarily help maintain the hair you currently have (slowing further loss), which is different from actively stimulating new growth.
                  </p>
                </div>
              </div>

              <div className="bg-red-50/50 border border-red-200/60 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-100/30 rounded-full blur-2xl pointer-events-none" />
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-red-100 rounded-xl text-red-700">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-red-950 text-lg">Crucial Follicle Fact</h4>
                    <p className="text-[#1E2E2A]/90 text-sm leading-relaxed font-sans">
                      It's also important to be direct about something many hair-loss websites gloss over: not all hair loss is reversible. Whether regrowth is possible at all depends on whether there are still living, functioning follicles under the scalp surface. If a follicle has been inactive for a very long time, or has been replaced by scar tissue, no topical, injectable, or oral treatment can bring it back — which is exactly why proper diagnosis has to come before any treatment discussion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 2. WHY DOES HAIR STOP GROWING? ============ */}
        <section id="why-stop" className="bg-[#12392D]/5 py-24 px-4 md:px-12 relative scroll-mt-28">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-mono text-xs uppercase tracking-widest text-[#1F5E4B] font-bold">02 / Underlying Causes</span>
                <h2 className="text-3xl md:text-5xl font-black text-[#12392D] tracking-tight">
                  Why Does Hair Stop Growing?
                </h2>
                <div className="w-16 h-1 bg-[#1F5E4B] my-2"></div>
                <p className="text-[#1E2E2A]/80 font-sans text-base max-w-2xl">
                  Hair loss and slowed growth can stem from a wide range of causes, often overlapping. Understanding the general categories helps explain why there's no one-size-fits-all treatment.
                </p>
              </div>
              <div className="lg:col-span-4">
                <div className="relative overflow-hidden rounded-3xl border border-[#1E2E2A]/10 shadow-sm aspect-[4/3] group bg-white">
                  <img
                    src="/images/Clinician examining a patient's scalp.jpg"
                    alt="Clinician examining a patient's scalp to assess hair thinning in Dubai"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-4 text-white">
                    <p className="text-xs font-semibold font-sans">Scalp Examination & Assessment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
              
              {/* Left Column (Genetic, Stress & Deficiencies) */}
              <div className="lg:col-span-4 space-y-8">
                <div className="bg-[#FAF9F5] p-8 rounded-3xl border border-[#1E2E2A]/5 relative shadow-sm">
                  <span className="text-xs font-semibold text-[#1F5E4B] uppercase tracking-wider block mb-2 font-sans">Category A</span>
                  <h3 className="text-xl font-bold text-[#12392D] mb-3">Genetic Hair Loss</h3>
                  <p className="text-sm text-[#1E2E2A]/85 leading-relaxed font-sans">
                    Androgenetic alopecia — commonly known as male or female pattern hair loss — is a genetically influenced, hormone-sensitive process where hair follicles gradually shrink (miniaturize) over time, producing progressively finer and shorter hairs until, in some cases, growth stops altogether. It's one of the most common causes of gradual thinning in both men and women.
                  </p>
                </div>

                <div className="bg-[#FAF9F5] p-8 rounded-3xl border border-[#1E2E2A]/5 relative shadow-sm">
                  <span className="text-xs font-semibold text-[#1F5E4B] uppercase tracking-wider block mb-2 font-sans">Category C</span>
                  <h3 className="text-xl font-bold text-[#12392D] mb-3">Stress</h3>
                  <p className="text-sm text-[#1E2E2A]/85 leading-relaxed font-sans">
                    Significant physical or emotional stress can trigger a temporary shedding pattern known as telogen effluvium, where a larger-than-usual number of hairs shift into the shedding phase at once. This type of hair loss is often — though not always — temporary once the underlying stressor resolves.
                  </p>
                </div>

                <div className="bg-[#FAF9F5] p-8 rounded-3xl border border-[#1E2E2A]/5 relative shadow-sm">
                  <span className="text-xs font-semibold text-[#1F5E4B] uppercase tracking-wider block mb-2 font-sans">Category D</span>
                  <h3 className="text-xl font-bold text-[#12392D] mb-3">Nutritional Factors</h3>
                  <p className="text-sm text-[#1E2E2A]/85 leading-relaxed mb-3 font-sans">
                    Certain nutritional deficiencies are associated with hair thinning, including insufficient:
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 font-sans">
                    {["Iron", "Vitamin D", "Vitamin B12", "Zinc", "Protein"].map((nut) => (
                      <span key={nut} className="bg-[#12392D]/5 text-[#12392D] text-xs font-semibold px-2.5 py-1 rounded-md">{nut}</span>
                    ))}
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs text-amber-900 leading-relaxed font-sans">
                    It's worth being clear here: supplements should not be taken unnecessarily, and any suspected deficiency should be properly assessed — ideally through blood testing — rather than self-treated. Taking high doses of vitamins or minerals without a confirmed deficiency does not speed up hair growth and can, in some cases, cause harm.
                  </div>
                </div>
              </div>

              {/* Middle Column (Hormonal & Other Influences) */}
              <div className="lg:col-span-4 space-y-8">
                <div className="bg-[#FAF9F5] p-8 rounded-3xl border border-[#1E2E2A]/5 relative shadow-sm">
                  <span className="text-xs font-semibold text-[#1F5E4B] uppercase tracking-wider block mb-2 font-sans">Category B</span>
                  <h3 className="text-xl font-bold text-[#12392D] mb-3">Hormonal Changes</h3>
                  <p className="text-sm text-[#1E2E2A]/85 leading-relaxed mb-4 font-sans">
                    Hormonal shifts can significantly affect hair growth, including those related to:
                  </p>
                  <ul className="space-y-2 text-xs text-[#1E2E2A]/85 pl-4 list-disc font-sans">
                    <li>Pregnancy — hormonal changes during pregnancy can temporarily affect the hair cycle</li>
                    <li>Postpartum changes — many women experience noticeable shedding in the months after childbirth as hormone levels normalize</li>
                    <li>Menopause — hormonal shifts during this transition can affect hair density and texture</li>
                    <li>PCOS (Polycystic Ovary Syndrome) — hormonal imbalances associated with PCOS can contribute to thinning</li>
                    <li>Other hormonal factors, including thyroid-related hormones, discussed further below</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-[#12392D] to-[#1F5E4B] text-[#FAF9F5] p-8 rounded-3xl relative overflow-hidden">
                  <h3 className="text-lg font-bold mb-3">Other Influences</h3>
                  <ul className="space-y-2 text-xs text-[#FAF9F5]/90 font-sans">
                    <li><strong>Medications:</strong> Certain medications list hair thinning as a potential side effect. If you suspect a medication may be contributing to your hair loss, this should be discussed with the prescribing doctor rather than self-managed.</li>
                    <li><strong>Rapid Weight Loss:</strong> Significant or rapid weight loss can act as a physical stressor on the body, sometimes triggering temporary shedding similar to stress-related hair loss.</li>
                    <li><strong>Aging:</strong> Hair naturally tends to thin somewhat with age as part of the normal aging process, independent of other specific causes.</li>
                    <li><strong>Traction Alopecia:</strong> Hairstyles that place consistent tension on the hair — tight ponytails, braids, or extensions — can gradually damage the follicle and, if prolonged, lead to permanent hair loss in the affected areas.</li>
                    <li><strong>Excessive Heat or Chemical Treatments:</strong> Frequent heat styling, chemical relaxing, or coloring can weaken the hair shaft over time, contributing to breakage that may be mistaken for hair loss from the root.</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-white/10 flex justify-end">
                    <Link href="/services/hair-loss-dubai/" className="inline-flex items-center gap-1.5 text-[#A2E3C4] text-xs font-bold hover:underline">
                      For a more complete breakdown of these causes, see our dedicated guide to Hair Loss Causes. <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column (Medical & Clinical) */}
              <div className="lg:col-span-4 space-y-8">
                <div className="bg-[#FAF9F5] p-8 rounded-3xl border border-[#1E2E2A]/5 relative shadow-sm">
                  <span className="text-xs font-semibold text-[#1F5E4B] uppercase tracking-wider block mb-2 font-sans">Category E</span>
                  <h3 className="text-xl font-bold text-[#12392D] mb-3">Medical & Clinical</h3>
                  
                  <div className="space-y-4 divide-y divide-[#1E2E2A]/5">
                    <div className="pt-2">
                      <h4 className="font-bold text-[#12392D] text-sm">Thyroid Problems</h4>
                      <p className="text-xs text-[#1E2E2A]/80 leading-relaxed mt-1 font-sans">Both underactive and overactive thyroid conditions can disrupt the hair growth cycle and contribute to diffuse thinning, which is one of many reasons unexplained hair loss often warrants a broader medical evaluation.</p>
                    </div>
                    <div className="pt-3">
                      <h4 className="font-bold text-[#12392D] text-sm">Alopecia Areata</h4>
                      <p className="text-xs text-[#1E2E2A]/80 leading-relaxed mt-1 font-sans">This is an autoimmune condition where the immune system mistakenly attacks hair follicles, often producing patchy hair loss. It behaves very differently from pattern hair loss and typically requires a different diagnostic and treatment pathway.</p>
                    </div>
                    <div className="pt-3">
                      <h4 className="font-bold text-[#12392D] text-sm">Scalp Conditions</h4>
                      <p className="text-xs text-[#1E2E2A]/80 leading-relaxed mt-1 font-sans">Various scalp conditions can affect hair growth, including: seborrheic dermatitis, psoriasis, scalp infections, and inflammation of the scalp more generally. Active scalp conditions often need to be addressed before — or alongside — any hair-regrowth treatment, since ongoing inflammation can interfere with the treatment environment.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ 3. HAIR GROWTH CYCLE AND REGROWTH ============ */}
        <section id="cycle" className="py-24 px-4 md:px-12 max-w-7xl mx-auto scroll-mt-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-mono text-xs uppercase tracking-widest text-[#1F5E4B] font-bold">03 / Biological Timeline</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#12392D] tracking-tight">
                Hair Growth Cycle <br />and Regrowth
              </h2>
              <div className="w-16 h-1 bg-[#1F5E4B]"></div>
              <p className="text-[#1E2E2A]/80 leading-relaxed text-base font-sans">
                To understand why regrowth takes time — and why no treatment works overnight — it helps to understand the natural hair growth cycle, which occurs in four stages:
              </p>
              <ul className="space-y-2 text-sm text-[#1E2E2A]/85 pl-6 list-disc font-sans">
                <li><strong>Anagen (growth phase)</strong> — the active phase where the follicle produces hair, typically lasting several years</li>
                <li><strong>Catagen (transition phase)</strong> — a brief phase where the follicle shrinks and growth stops</li>
                <li><strong>Telogen (resting phase)</strong> — a resting period, typically a few months, before the hair is eventually shed</li>
                <li><strong>Exogen (shedding phase)</strong> — the phase where the resting hair is released, making way for a new growth cycle to begin</li>
              </ul>
              <p className="text-[#1E2E2A]/80 leading-relaxed text-sm font-sans pt-2">
                At any given time, different hairs on your scalp are in different phases of this cycle. Hair regrowth treatments generally aim to influence this cycle — for example, by supporting more follicles in entering or remaining in the anagen phase — which is why meaningful change is measured in months, not days. For more detail, visit our guide to the <Link href="/services/hair-growth-cycle/" className="text-[#1F5E4B] font-bold hover:underline">Hair Growth Cycle</Link>.
              </p>
            </div>

            {/* FLOW OF CYCLE STAGES CARDS */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-[#1E2E2A]/5 shadow-sm">
                <div className="text-xs uppercase tracking-widest font-mono text-[#1F5E4B] mb-2 font-bold">Phase 1</div>
                <h4 className="font-bold text-lg text-[#12392D] mb-2">Anagen</h4>
                <p className="text-xs text-[#1E2E2A]/80 leading-relaxed font-sans">active phase where the follicle produces hair, lasting several years</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#1E2E2A]/5 shadow-sm">
                <div className="text-xs uppercase tracking-widest font-mono text-[#1F5E4B] mb-2 font-bold">Phase 2</div>
                <h4 className="font-bold text-lg text-[#12392D] mb-2">Catagen</h4>
                <p className="text-xs text-[#1E2E2A]/80 leading-relaxed font-sans">brief phase where the follicle shrinks and growth stops</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#1E2E2A]/5 shadow-sm">
                <div className="text-xs uppercase tracking-widest font-mono text-[#1F5E4B] mb-2 font-bold">Phase 3</div>
                <h4 className="font-bold text-lg text-[#12392D] mb-2">Telogen</h4>
                <p className="text-xs text-[#1E2E2A]/80 leading-relaxed font-sans">resting period, typically a few months, before the hair is shed</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#1E2E2A]/5 shadow-sm">
                <div className="text-xs uppercase tracking-widest font-mono text-[#1F5E4B] mb-2 font-bold">Phase 4</div>
                <h4 className="font-bold text-lg text-[#12392D] mb-2">Exogen</h4>
                <p className="text-xs text-[#1E2E2A]/80 leading-relaxed font-sans">phase where the resting hair is released, making way for a new growth cycle</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 4. CAN THINNING HAIR GROW BACK? ============ */}
        <section id="can-grow-back" className="bg-[#12392D] text-[#FAF9F5] py-24 px-4 md:px-12 relative overflow-hidden scroll-mt-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(162,227,196,0.1),transparent_60%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              <div className="lg:col-span-5 space-y-6">
                <span className="text-[#A2E3C4] text-xs font-bold uppercase tracking-widest block">04 / Prognosis</span>
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                  Can Thinning <br />Hair Grow Back?
                </h2>
                <p className="text-[#FAF9F5]/80 text-base leading-relaxed font-sans">
                  This is one of the most common — and most nuanced — questions we hear, and the honest answer is: it depends.
                </p>
                <div className="bg-[#FAF9F5]/5 border border-white/10 rounded-2xl p-6">
                  <p className="text-xs text-[#A2E3C4]/90 font-mono">
                    The determining factor in almost every case is whether functioning follicles remain and what originally caused the hair loss. This is general educational information, not a diagnosis — the only way to know which category applies to you is a proper in-person assessment.
                  </p>
                </div>
              </div>

              {/* SCENARIO PANELS */}
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                <div className="bg-[#FAF9F5]/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="font-bold text-[#A2E3C4] text-base mb-2 font-sans">Temporary shedding</h4>
                  <p className="text-xs text-[#FAF9F5]/80 leading-relaxed font-sans">
                    Temporary shedding (such as stress-related or postpartum shedding) often improves on its own once the underlying trigger resolves, sometimes without any specific treatment.
                  </p>
                </div>

                <div className="bg-[#FAF9F5]/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="font-bold text-[#A2E3C4] text-base mb-2 font-sans">Early-stage thinning</h4>
                  <p className="text-xs text-[#FAF9F5]/80 leading-relaxed font-sans">
                    Early-stage thinning, where follicles are miniaturized but still active, may respond to appropriate treatment and lifestyle changes, though outcomes vary.
                  </p>
                </div>

                <div className="bg-[#FAF9F5]/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="font-bold text-[#A2E3C4] text-base mb-2 font-sans">Genetic hair loss</h4>
                  <p className="text-xs text-[#FAF9F5]/80 leading-relaxed font-sans">
                    Genetic hair loss is progressive by nature; treatment may help slow the process or support existing follicles, but it does not reverse the underlying genetic tendency.
                  </p>
                </div>

                <div className="bg-[#FAF9F5]/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="font-bold text-[#A2E3C4] text-base mb-2 font-sans">Advanced follicular loss</h4>
                  <p className="text-xs text-[#FAF9F5]/80 leading-relaxed font-sans">
                    Advanced follicular loss, where follicles have been inactive for a long period, is much less likely to respond to non-surgical treatment.
                  </p>
                </div>

                <div className="bg-[#FAF9F5]/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="font-bold text-[#A2E3C4] text-base mb-2 font-sans">Scarring hair loss</h4>
                  <p className="text-xs text-[#FAF9F5]/80 leading-relaxed font-sans">
                    Scarring hair loss, where follicles have been structurally replaced by scar tissue, generally cannot regrow hair through medical treatment alone.
                  </p>
                </div>

                <div className="bg-[#FAF9F5]/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="font-bold text-[#A2E3C4] text-base mb-2 font-sans">Underlying medical causes</h4>
                  <p className="text-xs text-[#FAF9F5]/80 leading-relaxed font-sans">
                    Underlying medical causes (thyroid conditions, nutritional deficiencies, certain medications) may improve once the root cause is identified and addressed.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ 5. HAIR REGROWTH TREATMENT OPTIONS ============ */}
        <section id="options" className="py-24 px-4 md:px-12 max-w-7xl mx-auto scroll-mt-28">
          <div className="mb-16">
            <span className="text-mono text-xs uppercase tracking-widest text-[#1F5E4B] font-bold">05 / Options Matrix</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#12392D] mt-2 tracking-tight">
              Hair Regrowth Treatment Options
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] my-4"></div>
            <p className="text-[#1E2E2A]/70 max-w-2xl font-sans">
              There isn't one universal “hair regrowth treatment” — there's a range of approaches, often used individually or in combination depending on the diagnosis.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* PRP */}
            <div className="lg:col-span-6 bg-white border border-[#1E2E2A]/5 p-8 rounded-3xl shadow-sm space-y-4">
              <h3 className="text-2xl font-bold text-[#12392D]">PRP Hair Treatment</h3>
              <p className="text-sm text-[#1E2E2A]/85 leading-relaxed font-sans">
                PRP (Platelet-Rich Plasma) therapy involves drawing a small sample of your own blood, processing it to concentrate the platelets, and injecting that concentrate into thinning areas of the scalp. The idea is that growth factors within platelets may help support the follicular environment. PRP may be considered for certain hair-loss conditions, though candidacy depends on the underlying cause and follicle health, and results — where they occur — typically unfold gradually over multiple sessions, with limitations that should be discussed openly during consultation.
              </p>
              <div className="pt-2">
                <Link href="/services/hair-prp-dubai/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F5E4B] hover:underline">
                  Learn more on our Hair PRP Treatment in Dubai page <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Mesotherapy */}
            <div className="lg:col-span-6 bg-white border border-[#1E2E2A]/5 p-8 rounded-3xl shadow-sm space-y-4">
              <h3 className="text-2xl font-bold text-[#12392D]">Hair Mesotherapy</h3>
              <p className="text-sm text-[#1E2E2A]/85 leading-relaxed font-sans">
                Hair mesotherapy involves injecting a formulated solution — often containing vitamins, minerals, or other active ingredients — directly into the scalp. It works through a different mechanism than PRP, since it introduces external formulations rather than concentrating the patient's own blood components. Because the two treatments differ in approach, suitability can vary from patient to patient, and one is not universally “better” than the other.
              </p>
              <div className="pt-2">
                <Link href="/services/mesotherapy-dubai/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F5E4B] hover:underline">
                  See our guide to Hair Mesotherapy in Dubai for more detail <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Medical Management */}
            <div className="lg:col-span-6 bg-white border border-[#1E2E2A]/5 p-8 rounded-3xl shadow-sm space-y-4">
              <h3 className="text-2xl font-bold text-[#12392D]">Medical Management</h3>
              <p className="text-sm text-[#1E2E2A]/85 leading-relaxed font-sans">
                Some causes of hair loss — such as thyroid dysfunction, hormonal imbalances, or confirmed nutritional deficiencies — may require medical management based on a proper diagnosis. This might involve addressing the underlying condition directly rather than treating the scalp in isolation. We won't list specific medications or dosages here, since that decision belongs in a clinical consultation, not a blog post.
              </p>
            </div>

            {/* Lifestyle */}
            <div className="lg:col-span-6 bg-white border border-[#1E2E2A]/5 p-8 rounded-3xl shadow-sm space-y-4">
              <h3 className="text-2xl font-bold text-[#12392D]">Nutritional and Lifestyle Support</h3>
              <p className="text-sm text-[#1E2E2A]/85 leading-relaxed font-sans">
                Supporting overall hair health through nutrition and lifestyle can play a meaningful supporting role, including adequate protein intake, balanced, varied nutrition, sufficient sleep, stress management, gentle hair care practices, and good scalp hygiene. Lifestyle measures support a healthy environment for hair growth, but they cannot reverse every type of hair loss — particularly genetic or scarring causes.
              </p>
            </div>

            {/* Transplant */}
            <div className="lg:col-span-12 bg-[#1F5E4B] text-[#FAF9F5] p-8 rounded-3xl shadow-md space-y-4">
              <h3 className="text-2xl font-bold text-[#A2E3C4]">Hair Transplant</h3>
              <p className="text-sm text-[#FAF9F5]/90 leading-relaxed font-sans">
                A hair transplant is a surgical procedure that relocates hair follicles from a donor area (usually the back or sides of the scalp, where hair tends to be more resistant to thinning) to areas of significant hair loss. It may be considered when there is stable donor hair and more advanced or localized loss that isn't expected to respond well to non-surgical treatment. Candidate assessment, donor hair evaluation, and a defined recovery period are all part of this pathway — and, as with any hair treatment, diagnosis should always come before deciding on transplantation.
              </p>
              <div className="pt-2 border-t border-white/10">
                <Link href="/services/prp-vs-hair-transplant-dubai/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A2E3C4] hover:underline">
                  For a detailed comparison, see PRP vs Hair Transplant in Dubai <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* ============ 6. PRP FOR HAIR REGROWTH ============ */}
        <section id="prp-deep" className="bg-[#12392D]/5 py-24 px-4 md:px-12 scroll-mt-28">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <span className="text-mono text-xs uppercase tracking-widest text-[#1F5E4B] font-bold">06 / PRP Deep Dive</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#12392D] tracking-tight">
                PRP for <br />Hair Regrowth
              </h2>
              <div className="w-16 h-1 bg-[#1F5E4B]"></div>
              <p className="text-[#1E2E2A]/85 text-sm leading-relaxed font-sans">
                Because PRP is one of the more frequently asked-about options, it deserves a closer look. To be direct: PRP cannot regenerate every lost follicle, and it is not a guaranteed solution for every type or stage of hair loss.
              </p>
              <div className="space-y-2 pt-4">
                <Link href="/services/prp-hair-treatment-results/" className="flex justify-between items-center bg-white p-3 rounded-xl border border-[#1E2E2A]/5 text-xs font-bold text-[#1E2E2A] hover:bg-[#12392D] hover:text-white transition-colors">
                  <span>PRP Hair Treatment Results</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link href="/services/prp-hair-treatment-before-and-after/" className="flex justify-between items-center bg-white p-3 rounded-xl border border-[#1E2E2A]/5 text-xs font-bold text-[#1E2E2A] hover:bg-[#12392D] hover:text-white transition-colors">
                  <span>PRP Hair Treatment Before and After</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link href="/services/prp-hair-treatment-recovery/" className="flex justify-between items-center bg-white p-3 rounded-xl border border-[#1E2E2A]/5 text-xs font-bold text-[#1E2E2A] hover:bg-[#12392D] hover:text-white transition-colors">
                  <span>PRP Hair Treatment Recovery</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* HIGHLIGHT CARDS */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#1E2E2A]/5 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-[#12392D] mb-2">What PRP stands for:</h4>
                  <p className="text-xs text-[#1E2E2A]/80 leading-relaxed font-sans">
                    Platelet-Rich Plasma — a concentration of platelets derived from your own blood.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#1E2E2A]/5">
                <h4 className="font-bold text-[#12392D] mb-2">PRP Preparation:</h4>
                <p className="text-xs text-[#1E2E2A]/80 leading-relaxed font-sans">
                  The drawn blood is placed in a centrifuge to separate components, creating a highly concentrated plasma rich in growth factors.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#1E2E2A]/5">
                <h4 className="font-bold text-[#12392D] mb-2">How your blood is processed:</h4>
                <p className="text-xs text-[#1E2E2A]/80 leading-relaxed font-sans">
                  A small blood sample is drawn and placed in a centrifuge, which separates the blood components and concentrates the platelet-rich portion for use.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#1E2E2A]/5">
                <h4 className="font-bold text-[#12392D] mb-2">How PRP is applied to the scalp:</h4>
                <p className="text-xs text-[#1E2E2A]/80 leading-relaxed font-sans">
                  The concentrated plasma is injected into areas of the scalp experiencing thinning, typically using a fine needle across multiple small injection points.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#1E2E2A]/5">
                <h4 className="font-bold text-[#12392D] mb-2">Why treatment is planned individually:</h4>
                <p className="text-xs text-[#1E2E2A]/80 leading-relaxed font-sans">
                  The number of sessions, spacing between sessions, and overall protocol are typically tailored to the patient's diagnosis and how they respond, rather than following a fixed universal schedule.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#1E2E2A]/5">
                <h4 className="font-bold text-[#12392D] mb-2">Why results take time:</h4>
                <p className="text-xs text-[#1E2E2A]/80 leading-relaxed font-sans">
                  As explained above, hair growth follows a multi-month biological cycle. PRP doesn't produce instant visible change — any response, where it occurs, unfolds gradually.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#1E2E2A]/5">
                <h4 className="font-bold text-[#12392D] mb-2">What factors influence outcomes:</h4>
                <p className="text-xs text-[#1E2E2A]/80 leading-relaxed font-sans">
                  The underlying cause of hair loss, follicle health, severity and duration of thinning, age, overall health, and individual biological response all play a role — which is why the same treatment can produce different results in different people.
                </p>
              </div>

              <div className="sm:col-span-2 bg-[#12392D] text-white p-8 rounded-3xl">
                <h4 className="font-bold text-lg mb-2">Why follow-up matters:</h4>
                <p className="text-xs text-white/90 leading-relaxed font-sans">
                  Ongoing assessment allows your clinician to track your progress, decide whether to continue, adjust, or reconsider the treatment plan, rather than committing to a fixed number of sessions regardless of response.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ============ 7. HAIR REGROWTH TREATMENT TIMELINE ============ */}
        <section id="timeline" className="py-24 px-4 md:px-12 max-w-7xl mx-auto scroll-mt-28">
          <div className="mb-16 text-center max-w-xl mx-auto">
            <span className="text-mono text-xs uppercase tracking-widest text-[#1F5E4B] font-bold">07 / Timelines</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#12392D] mt-2 tracking-tight">
              Hair Regrowth <br />Treatment Timeline
            </h2>
            <p className="text-[#1E2E2A]/70 text-sm mt-4 font-sans">
              There is no single universal timeline that applies to every patient — the table below is a general guide, not a guarantee.
            </p>
          </div>

          {/* Stepper Timeline Details */}
          <div className="max-w-3xl mx-auto relative pl-8 border-l border-[#1E2E2A]/10 space-y-12 mb-16 font-sans">
            
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#12392D] border-4 border-[#FAF9F5] flex items-center justify-center shadow-sm"></div>
              <h4 className="text-xl font-bold text-[#12392D] mb-2">Before Treatment</h4>
              <p className="text-sm text-[#1E2E2A]/85 leading-relaxed">
                Everything starts with assessment and treatment planning — reviewing your history, examining your scalp, and, where relevant, discussing further diagnostic steps before deciding on a treatment approach.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#1F5E4B] border-4 border-[#FAF9F5] flex items-center justify-center shadow-sm"></div>
              <h4 className="text-xl font-bold text-[#12392D] mb-2">Immediately After Treatment</h4>
              <p className="text-sm text-[#1E2E2A]/85 leading-relaxed">
                Depending on the treatment chosen, you may experience temporary, treatment-related effects such as mild scalp tenderness, redness, or minor swelling. These reflect the treatment process itself, not an indication of how well it's working.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#1F5E4B] border-4 border-[#FAF9F5] flex items-center justify-center shadow-sm"></div>
              <h4 className="text-xl font-bold text-[#12392D] mb-2">Early Stage</h4>
              <p className="text-sm text-[#1E2E2A]/85 leading-relaxed">
                In the initial weeks, visible regrowth should not be expected. The scalp is settling, and any biological response your treatment may be supporting is still in its earliest stages.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#1F5E4B] border-4 border-[#FAF9F5] flex items-center justify-center shadow-sm"></div>
              <h4 className="text-xl font-bold text-[#12392D] mb-2">Developing Stage</h4>
              <p className="text-sm text-[#1E2E2A]/85 leading-relaxed">
                Over the following months, some patients begin to notice gradual changes worth monitoring — shifts in shedding pattern, hair texture, or early signs in consistent progress photos. This is typically when follow-up assessments become clinically useful.
              </p>
            </div>

            {/* Step 5 */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#A2E3C4] border-4 border-[#FAF9F5] flex items-center justify-center shadow-sm"></div>
              <h4 className="text-xl font-bold text-[#12392D] mb-2">Later Stage</h4>
              <p className="text-sm text-[#1E2E2A]/85 leading-relaxed">
                Further along in the treatment course, more noticeable results — where they occur — tend to become apparent. Outcomes still vary considerably between patients and require consistent, ongoing assessment rather than a single end-point evaluation.
              </p>
            </div>

          </div>

          {/* Matrix Table */}
          <div className="bg-white border border-[#1E2E2A]/5 rounded-3xl p-6 md:p-8 shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="border-b border-[#1E2E2A]/10 text-[#1F5E4B] font-bold">
                  <th className="py-4 pr-4">Stage</th>
                  <th className="py-4 px-4">What May Happen</th>
                  <th className="py-4 pl-4">What Patients Should Know</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E2E2A]/5 text-[#1E2E2A] font-sans">
                <tr>
                  <td className="py-4 pr-4 font-bold text-[#12392D]">Initial</td>
                  <td className="py-4 px-4">Assessment, diagnosis, and treatment planning take place</td>
                  <td className="py-4 pl-4">This stage determines whether treatment is appropriate at all, and which approach fits your situation</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-bold text-[#12392D]">Early</td>
                  <td className="py-4 px-4">Scalp recovers from any procedure; no visible regrowth expected yet</td>
                  <td className="py-4 pl-4">It's too early at this point to judge whether treatment is working</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-bold text-[#12392D]">Developing</td>
                  <td className="py-4 px-4">Some patients notice gradual shifts in shedding or texture</td>
                  <td className="py-4 pl-4">Response is inconsistent between patients and best tracked with structured photos and follow-up</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-bold text-[#12392D]">Later</td>
                  <td className="py-4 px-4">More noticeable change may become apparent in responders; others see limited change</td>
                  <td className="py-4 pl-4">Continued assessment helps determine whether to continue, adjust, or explore other options</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ============ 8. FACTORS THAT AFFECT HAIR REGROWTH ============ */}
        <section id="factors" className="bg-[#12392D] text-[#FAF9F5] py-24 px-4 md:px-12 relative overflow-hidden scroll-mt-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(162,227,196,0.08),transparent_60%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <span className="text-[#A2E3C4] text-xs font-bold uppercase tracking-widest block">08 / Variables</span>
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                  Factors That Affect <br />Hair Regrowth
                </h2>
                <p className="text-[#FAF9F5]/70 text-sm leading-relaxed font-sans">
                  A wide range of factors influence whether — and how much — hair regrowth is achievable:
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Cause of hair loss", desc: "different causes carry very different regrowth potential" },
                  { title: "Duration of hair loss", desc: "longer-standing thinning may involve more follicle miniaturization" },
                  { title: "Age", desc: "follicle activity and healing response can change with age" },
                  { title: "Genetics", desc: "particularly relevant in pattern hair loss" },
                  { title: "Follicle condition", desc: "whether follicles are dormant but viable, or no longer functional" },
                  { title: "Scalp health", desc: "active inflammation or infection can interfere with treatment response" },
                  { title: "Hormonal factors", desc: "imbalances may need to be addressed for treatment to be effective" },
                  { title: "Nutritional status", desc: "deficiencies can limit the hair's ability to grow well" },
                  { title: "Overall health", desc: "general health status affects healing and biological response" },
                  { title: "Treatment selection", desc: "the appropriateness of the chosen approach for your specific cause" },
                  { title: "Treatment consistency", desc: "attending the full recommended course and follow-ups" },
                  { title: "Individual response", desc: "ultimately, biology varies from person to person" }
                ].map((factor, i) => (
                  <div key={i} className="bg-[#FAF9F5]/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between font-sans">
                    <h5 className="font-bold text-sm text-[#A2E3C4]">{factor.title}</h5>
                    <p className="text-xs text-[#FAF9F5]/85 mt-1">{factor.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ 9. WHO MAY BENEFIT FROM HAIR REGROWTH TREATMENT? ============ */}
        <section id="who-benefit" className="py-24 px-4 md:px-12 max-w-7xl mx-auto scroll-mt-28">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            <div className="lg:col-span-6 bg-white border border-[#1E2E2A]/5 p-8 md:p-12 rounded-3xl shadow-sm flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl" />
              <div className="space-y-4">
                <span className="text-mono text-xs uppercase tracking-widest text-[#1F5E4B] font-bold">09 / Candidates</span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#12392D]">
                  Who May Benefit From <br />Hair Regrowth Treatment?
                </h3>
                <p className="text-sm text-[#1E2E2A]/85 leading-relaxed font-sans">
                  Generally speaking, people who may be reasonable candidates for regrowth-focused treatment include those with certain forms of non-scarring hair loss, patients with early or moderate thinning where follicles remain active, and patients whose contributing factors (such as a nutritional deficiency or manageable hormonal imbalance) can be identified and addressed. This is a general pattern, not a diagnosis — suitability always needs to be confirmed through a professional assessment rather than self-identification based on symptoms alone.
                </p>
              </div>
            </div>

            {/* 10. WHO MAY NEED A DIFFERENT APPROACH? */}
            <div id="who-need-diff" className="lg:col-span-6 bg-[#12392D] text-white p-8 md:p-12 rounded-3xl shadow-lg flex flex-col justify-between space-y-6 relative overflow-hidden scroll-mt-28">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#A2E3C4]/15 rounded-full blur-2xl" />
              <div className="space-y-4">
                <span className="text-mono text-xs uppercase tracking-widest text-[#A2E3C4] font-bold">10 / Exceptions</span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#FAF9F5]">
                  Who May Need <br />a Different Approach?
                </h3>
                <p className="text-sm text-[#FAF9F5]/85 leading-relaxed font-sans">
                  Some patients are better served by a different strategy than standard regrowth-focused treatment, including those with:
                </p>
                <ul className="space-y-2 text-xs text-[#FAF9F5]/80 pl-4 list-disc font-sans">
                  <li>Advanced follicular loss, where follicles are no longer viable</li>
                  <li>Scarring alopecia, where follicle structures have been replaced by scar tissue</li>
                  <li>Active scalp disease requiring treatment before any hair procedure</li>
                  <li>Unexplained sudden hair loss, which usually warrants diagnostic evaluation first</li>
                  <li>Certain medical conditions contributing to hair loss that need direct management</li>
                  <li>Situations where transplant or medical management may be more appropriate than injectable or topical treatments alone</li>
                </ul>
                <p className="text-xs text-[#A2E3C4]/90 font-mono pt-2">
                  This is general information, not a diagnosis of your specific situation — if any of this sounds like what you're experiencing, the right next step is a proper assessment rather than self-selecting a treatment.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ============ 11. HAIR REGROWTH FOR MEN & 12. WOMEN ============ */}
        <section id="men" className="bg-[#12392D]/5 py-24 px-4 md:px-12 scroll-mt-28">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Men */}
            <div className="lg:col-span-6 bg-white p-8 md:p-12 rounded-3xl border border-[#1E2E2A]/5 shadow-sm space-y-4">
              <span className="text-mono text-xs text-[#1F5E4B] font-bold block">11 / Male Patterns</span>
              <h3 className="text-2xl font-bold text-[#12392D]">Hair Regrowth for Men</h3>
              <p className="text-sm text-[#1E2E2A]/85 leading-relaxed font-sans">
                In men, thinning commonly presents as a receding hairline, crown thinning, or general diffuse thinning — most often related to male pattern hair loss, a genetically influenced condition. Treatment approaches and expected outcomes depend heavily on the underlying cause, stage of thinning, and individual response, which is why two men with visually similar hairlines may be offered different treatment plans.
              </p>
            </div>

            {/* Women */}
            <div id="women" className="lg:col-span-6 bg-white p-8 md:p-12 rounded-3xl border border-[#1E2E2A]/5 shadow-sm space-y-4 scroll-mt-28">
              <span className="text-mono text-xs text-[#1F5E4B] font-bold block">12 / Female Patterns</span>
              <h3 className="text-2xl font-bold text-[#12392D]">Hair Regrowth for Women</h3>
              <p className="text-sm text-[#1E2E2A]/85 leading-relaxed font-sans">
                Women more often experience diffuse thinning or a widening centre part rather than a receding hairline. Common contributing factors include postpartum shedding, menopause-related hormonal shifts, and other hormonal changes, alongside nutritional factors. Because women's hair loss frequently has an identifiable hormonal or nutritional component, unexplained thinning in women often warrants a broader assessment for underlying causes rather than assuming it's purely genetic.
              </p>
            </div>

          </div>
        </section>

        {/* ============ 13. PRP VS HAIR MESOTHERAPY & 14. PRP VS HAIR TRANSPLANT ============ */}
        <section id="prp-vs-meso" className="py-24 px-4 md:px-12 max-w-7xl mx-auto scroll-mt-28">
          <div className="mb-12 border-b border-[#1E2E2A]/10 pb-8 flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <span className="text-mono text-xs uppercase tracking-widest text-[#1F5E4B] font-bold">13 & 14 / Comparisons</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#12392D] mt-2 tracking-tight">
                Treatment Comparisons
              </h2>
            </div>
            
            {/* Switch Tab */}
            <div className="flex gap-2 mt-6 md:mt-0 bg-[#12392D]/5 p-1 rounded-xl">
              <button
                onClick={() => setActiveComparisonTab('meso')}
                className={`px-6 py-2.5 rounded-lg text-xs font-bold transition-all ${activeComparisonTab === 'meso' ? 'bg-[#12392D] text-white shadow-sm' : 'text-[#12392D] hover:bg-[#12392D]/10'}`}
              >
                PRP vs Mesotherapy
              </button>
              <button
                onClick={() => setActiveComparisonTab('transplant')}
                className={`px-6 py-2.5 rounded-lg text-xs font-bold transition-all ${activeComparisonTab === 'transplant' ? 'bg-[#12392D] text-white shadow-sm' : 'text-[#12392D] hover:bg-[#12392D]/10'}`}
              >
                PRP vs Hair Transplant
              </button>
            </div>
          </div>

          <div className="bg-white border border-[#1E2E2A]/5 rounded-3xl p-6 md:p-8 shadow-sm overflow-x-auto">
            <AnimatePresence mode="wait">
              {activeComparisonTab === 'meso' ? (
                <motion.div
                  key="meso"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="min-w-[600px]"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-[#12392D] text-lg">PRP vs Hair Mesotherapy</h4>
                    <Link href="/services/prp-vs-hair-mesotherapy-dubai/" className="text-xs font-bold text-[#1F5E4B] hover:underline inline-flex items-center gap-1">
                      Full PRP vs Mesotherapy Guide <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <table className="w-full text-left border-collapse text-xs md:text-sm">
                    <thead>
                      <tr className="border-b border-[#1E2E2A]/10 text-[#1F5E4B] font-bold">
                        <th className="py-4 pr-4">Feature</th>
                        <th className="py-4 px-4">PRP</th>
                        <th className="py-4 pl-4">Hair Mesotherapy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1E2E2A]/5 text-[#1E2E2A] font-sans">
                      <tr>
                        <td className="py-4 pr-4 font-bold">Basic approach</td>
                        <td className="py-4 px-4">Uses concentrated platelets from the patient's own blood</td>
                        <td className="py-4 pl-4">Uses an injected formulation of vitamins, minerals, or other active ingredients</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-4 font-bold">Main components</td>
                        <td className="py-4 px-4">Platelets and plasma from the patient's blood</td>
                        <td className="py-4 pl-4">Externally formulated solution, which can vary by protocol</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-4 font-bold">Procedure</td>
                        <td className="py-4 px-4">Blood draw, processing via centrifuge, then injection</td>
                        <td className="py-4 pl-4">Direct injection of the prepared solution, without a blood draw</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-4 font-bold">Treatment planning</td>
                        <td className="py-4 px-4">Series of sessions, spacing based on individual response</td>
                        <td className="py-4 pl-4">Follows its own protocol and schedule, often clinic-specific</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-4 font-bold">Expected timeline</td>
                        <td className="py-4 px-4">Gradual changes generally assessed over several months</td>
                        <td className="py-4 pl-4">Timeline depends on the specific formulation and protocol used</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-4 font-bold">Recovery</td>
                        <td className="py-4 px-4">Minimal downtime; mild, short-term scalp sensitivity</td>
                        <td className="py-4 pl-4">Generally minimal downtime, varying by formulation</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-4 font-bold">Candidate suitability</td>
                        <td className="py-4 px-4">Depends on hair-loss cause and follicle health</td>
                        <td className="py-4 pl-4">Depends on the specific formulation and patient needs</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-4 font-bold">Limitations</td>
                        <td className="py-4 px-4">Not effective for every cause of hair loss; response varies</td>
                        <td className="py-4 pl-4">Efficacy and consistency can vary depending on formulation</td>
                      </tr>
                    </tbody>
                  </table>
                </motion.div>
              ) : (
                <motion.div
                  key="transplant"
                  id="prp-vs-transplant"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="min-w-[600px] scroll-mt-28"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-[#12392D] text-lg">PRP vs Hair Transplant</h4>
                    <Link href="/services/prp-vs-hair-transplant-dubai/" className="text-xs font-bold text-[#1F5E4B] hover:underline inline-flex items-center gap-1">
                      Full PRP vs Transplant Guide <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <table className="w-full text-left border-collapse text-xs md:text-sm">
                    <thead>
                      <tr className="border-b border-[#1E2E2A]/10 text-[#1F5E4B] font-bold">
                        <th className="py-4 pr-4">Feature</th>
                        <th className="py-4 px-4">PRP</th>
                        <th className="py-4 pl-4">Hair Transplant</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1E2E2A]/5 text-[#1E2E2A] font-sans">
                      <tr>
                        <td className="py-4 pr-4 font-bold">Treatment type</td>
                        <td className="py-4 px-4">Non-surgical injectable treatment</td>
                        <td className="py-4 pl-4">Surgical procedure</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-4 font-bold">Surgical procedure</td>
                        <td className="py-4 px-4">No surgery involved</td>
                        <td className="py-4 pl-4">Involves relocating follicles from a donor area</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-4 font-bold">Main objective</td>
                        <td className="py-4 px-4">Supporting the existing follicular environment</td>
                        <td className="py-4 pl-4">Physically restoring hair in areas of significant permanent loss</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-4 font-bold">Recovery</td>
                        <td className="py-4 px-4">Minimal downtime; mild, short-term scalp sensitivity</td>
                        <td className="py-4 pl-4">Longer recovery period with specific aftercare requirements</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-4 font-bold">Candidate suitability</td>
                        <td className="py-4 px-4">Often considered for earlier-stage or diffuse thinning</td>
                        <td className="py-4 pl-4">Often considered for stable donor hair and more advanced localized loss</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-4 font-bold">Expected timeline</td>
                        <td className="py-4 px-4">Gradual changes assessed over months</td>
                        <td className="py-4 pl-4">Growth of transplanted follicles also occurs gradually, typically over many months</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-4 font-bold">Long-term considerations</td>
                        <td className="py-4 px-4">May require ongoing maintenance sessions</td>
                        <td className="py-4 pl-4">Transplanted follicles are generally more resistant to further loss, though native hair loss can still progress</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-[#1E2E2A]/70 mt-4 font-sans">
                    These approaches are sometimes combined rather than treated as competing alternatives — a decision best made with a qualified clinician. Read more in PRP vs Hair Transplant in Dubai.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* ============ 15. HOW TO CHOOSE A CLINIC & 16. COST ============ */}
        <section id="choose-clinic" className="bg-[#12392D]/5 py-24 px-4 md:px-12 scroll-mt-28">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              <div className="lg:col-span-5 space-y-6">
                <span className="text-mono text-xs uppercase tracking-widest text-[#1F5E4B] font-bold">15 / Clinic Choice</span>
                <h2 className="text-3xl md:text-5xl font-black text-[#12392D] tracking-tight">
                  How to Choose a Hair <br />Regrowth Clinic in Dubai
                </h2>
                <div className="w-16 h-1 bg-[#1F5E4B]"></div>
                <p className="text-sm text-[#1E2E2A]/85 leading-relaxed font-sans">
                  Not all clinics approach hair regrowth the same way, and the difference matters. When evaluating a clinic, look for:
                </p>
                
                {/* 16. COST */}
                <div id="cost" className="bg-[#12392D] text-white p-8 rounded-3xl space-y-3 scroll-mt-28">
                  <h4 className="font-bold text-lg text-[#A2E3C4]">Hair Regrowth Treatment Cost in Dubai</h4>
                  <p className="text-xs text-white/90 leading-relaxed font-sans">
                    We're not going to invent specific prices here, because accurate cost depends entirely on your individual treatment plan. In general, cost tends to be influenced by: the type of treatment selected, the number of sessions recommended, the severity of thinning being addressed, the initial consultation, any diagnostic assessment required, the specific treatment protocol followed, and follow-up requirements built into the plan.
                  </p>
                  <p className="text-xs text-[#A2E3C4] font-bold pt-2 font-sans">
                    For more detail specifically on PRP pricing structure, see our PRP Hair Treatment Cost in Dubai page, or discuss your specific situation during a consultation.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-8">
                
                {/* Look for list */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#1E2E2A]/5 space-y-4">
                  <ul className="space-y-3 text-xs text-[#1E2E2A]/85 pl-6 list-disc font-sans">
                    <li>Qualified healthcare professionals overseeing your assessment and treatment</li>
                    <li>Proper hair-loss assessment, including a review of your history and a scalp examination</li>
                    <li>Diagnosis before treatment — not treatment offered before the cause is understood</li>
                    <li>Personalized treatment planning rather than a fixed package applied to everyone</li>
                    <li>Realistic expectations communicated clearly, including limitations</li>
                    <li>Transparent pricing, without pressure to commit before you understand what's involved</li>
                    <li>Patient safety prioritized throughout the process</li>
                    <li>Follow-up built into the treatment plan, not treated as optional</li>
                    <li>Appropriate documentation of your assessment and treatment plan</li>
                    <li>No guaranteed-results claims, since no ethical clinic can promise a specific outcome</li>
                  </ul>
                </div>

                {/* Red flags */}
                <div className="bg-red-50 border border-red-200 p-8 rounded-3xl space-y-4 font-sans">
                  <div className="flex items-center gap-2 text-red-800">
                    <AlertCircle className="w-5 h-5" />
                    <h4 className="font-bold text-lg">Red Flags to Watch For</h4>
                  </div>
                  <p className="text-xs text-[#1E2E2A]/80">
                    Be cautious of clinics that show any of the following:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 text-xs text-red-950 pl-6 list-disc">
                    <li>Guaranteed regrowth claims</li>
                    <li>“One treatment works for everyone” messaging</li>
                    <li>No scalp assessment before recommending treatment</li>
                    <li>No review of your medical history</li>
                    <li>Pressure to purchase large treatment packages upfront</li>
                    <li>Before-and-after images that seem unrealistic or lack context</li>
                    <li>No discussion of the treatment's limitations</li>
                    <li>Unclear or unverifiable practitioner qualifications</li>
                  </ul>
                  <p className="text-xs text-[#1E2E2A]/80 pt-2 border-t border-red-200/50">
                    A clinic that's confident in its approach should have no problem being transparent about all of the above.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ============ 17. HOW TO TRACK & 18. SUPPORT HEALTHY HAIR ============ */}
        <section id="tracking" className="py-24 px-4 md:px-12 max-w-7xl mx-auto scroll-mt-28">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* 17. Tracking */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-mono text-xs uppercase tracking-widest text-[#1F5E4B] font-bold">17 / Tracking Progress</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#12392D] tracking-tight">
                How to Track <br />Hair Regrowth
              </h2>
              <div className="w-16 h-1 bg-[#1F5E4B]"></div>
              
              <div className="bg-[#12392D]/5 border border-[#12392D]/10 rounded-2xl p-6 text-sm text-[#1E2E2A]/85 space-y-3 font-sans">
                <p>
                  Because meaningful change happens gradually, a structured tracking approach gives you a far more accurate picture than daily observation. Consider:
                </p>
              </div>

              <div className="bg-white border border-[#1E2E2A]/5 p-6 rounded-2xl shadow-sm">
                <ul className="space-y-2 text-xs text-[#1E2E2A]/80 pl-6 list-disc font-sans">
                  <li>Baseline photographs taken before starting any treatment</li>
                  <li>Consistent lighting for every photo</li>
                  <li>Same camera angle each time</li>
                  <li>Similar hairstyle — ideally dry and unstyled</li>
                  <li>Same scalp areas photographed each time</li>
                  <li>Consistent intervals, such as monthly</li>
                  <li>Hair-density observations, noted alongside your photos</li>
                  <li>Shedding observations, such as approximate hair counts during washing or brushing</li>
                  <li>Professional follow-up, so your clinician can assess your photos and progress objectively</li>
                </ul>
              </div>
              <p className="text-xs text-[#1E2E2A]/70 font-sans pt-2">
                Daily mirror checking tends to make gradual change very difficult to notice — our eyes adapt to slow shifts over time, which is exactly why so many patients underestimate (or overestimate) their own progress without a structured comparison method.
              </p>
            </div>

            {/* 18. Support */}
            <div id="support" className="lg:col-span-6 bg-white border border-[#1E2E2A]/5 p-8 md:p-12 rounded-3xl shadow-sm space-y-6 scroll-mt-28">
              <span className="text-mono text-xs uppercase tracking-widest text-[#1F5E4B] font-bold">18 / Daily Support</span>
              <h3 className="text-2xl font-bold text-[#12392D]">
                How to Support <br />Healthy Hair Growth
              </h3>
              <p className="text-sm text-[#1E2E2A]/85 leading-relaxed font-sans">
                While no daily habit can reverse every type of hair loss, the following practices support the healthiest possible environment for hair growth:
              </p>
              
              <ul className="space-y-3 text-xs text-[#1E2E2A]/80 pl-6 list-disc font-sans">
                <li>Eat a balanced diet with a variety of nutrients</li>
                <li>Consume adequate protein, since hair is largely protein-based</li>
                <li>Avoid excessive heat styling</li>
                <li>Avoid tight hairstyles that place tension on the scalp</li>
                <li>Manage stress where possible</li>
                <li>Maintain good scalp hygiene</li>
                <li>Treat any scalp conditions appropriately, ideally under professional guidance</li>
                <li>Avoid unnecessary supplements taken without a confirmed deficiency</li>
                <li>Follow your clinician's specific treatment instructions closely</li>
              </ul>
              
              <div className="bg-[#1F5E4B]/5 border border-[#1F5E4B]/10 rounded-2xl p-6 text-xs text-[#1F5E4B] font-sans">
                <strong>Expectation Note:</strong> None of these steps guarantee regrowth on their own — they support the conditions under which any treatment you pursue has the best chance of working as intended.
              </div>
            </div>

          </div>
        </section>

        {/* ============ 19. COMMON HAIR REGROWTH MYTHS ============ */}
        <section id="myths" className="bg-[#12392D] text-white py-24 px-4 md:px-12 relative overflow-hidden scroll-mt-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(162,227,196,0.1),transparent_60%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto">
            
            <div className="grid lg:grid-cols-12 gap-12">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="text-[#A2E3C4] text-xs font-bold uppercase tracking-widest block">19 / Misconceptions</span>
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                  Common Hair Regrowth Myths
                </h2>
                
                <div className="space-y-4 pt-4 divide-y divide-white/10">
                  <div className="pt-2 font-sans">
                    <p className="text-xs text-[#A2E3C4] font-bold">Myth: Cutting hair makes it grow faster.</p>
                    <p className="text-sm text-[#FAF9F5]/90 mt-1">Fact: Cutting hair affects the hair shaft, not the follicle beneath the scalp. It doesn't influence how quickly hair grows from the root.</p>
                  </div>
                  <div className="pt-4 font-sans">
                    <p className="text-xs text-[#A2E3C4] font-bold">Myth: Every hair-loss problem can be reversed.</p>
                    <p className="text-sm text-[#FAF9F5]/90 mt-1">Fact: Reversibility depends on the cause and whether functioning follicles remain. Some forms of hair loss, such as advanced scarring alopecia, generally cannot be reversed with medical treatment.</p>
                  </div>
                  <div className="pt-4 font-sans">
                    <p className="text-xs text-[#A2E3C4] font-bold">Myth: More supplements always mean faster growth.</p>
                    <p className="text-sm text-[#FAF9F5]/90 mt-1">Fact: Supplements only help if you have a confirmed deficiency. Taking excess vitamins or minerals without one doesn't speed up growth and can, in some cases, cause harm.</p>
                  </div>
                  <div className="pt-4 font-sans">
                    <p className="text-xs text-[#A2E3C4] font-bold">Myth: PRP works for everyone.</p>
                    <p className="text-sm text-[#FAF9F5]/90 mt-1">Fact: Response to PRP varies significantly based on the cause of hair loss, follicle health, and individual biology. Some patients see limited or no benefit.</p>
                  </div>
                  <div className="pt-4 font-sans">
                    <p className="text-xs text-[#A2E3C4] font-bold">Myth: One treatment can permanently restore all lost hair.</p>
                    <p className="text-sm text-[#FAF9F5]/90 mt-1">Fact: Most causes of hair loss, particularly genetic hair loss, are progressive. Long-term management — not a single fix — is usually the more realistic framing.</p>
                  </div>
                  <div className="pt-4 font-sans">
                    <p className="text-xs text-[#A2E3C4] font-bold">Myth: Hair loss only affects older people.</p>
                    <p className="text-sm text-[#FAF9F5]/90 mt-1">Fact: Hair loss can begin at any adult age and can be triggered by genetics, stress, hormones, nutrition, or medical conditions, regardless of age.</p>
                  </div>
                  <div className="pt-4 font-sans">
                    <p className="text-xs text-[#A2E3C4] font-bold">Myth: Expensive treatment automatically means better results.</p>
                    <p className="text-sm text-[#FAF9F5]/90 mt-1">Fact: Price alone doesn't indicate treatment quality. A thorough assessment and appropriate treatment plan matter far more than cost.</p>
                  </div>
                </div>
              </div>

              {/* 20. HAIR REGROWTH TREATMENT IN DUBAI */}
              <div id="treatment-dubai" className="lg:col-span-5 space-y-6 bg-white/5 border border-white/10 rounded-3xl p-8 font-sans scroll-mt-28">
                <span className="text-[#A2E3C4] text-xs font-mono uppercase block">Regional Clinical Considerations</span>
                <h3 className="text-xl font-bold text-white">Hair Regrowth Treatment in Dubai</h3>
                <p className="text-sm text-[#FAF9F5]/95 leading-relaxed">
                  Dubai offers a wide range of clinics providing hair regrowth treatment, and the quality of care can vary significantly depending on how thoroughly a clinic approaches diagnosis and planning. When searching for hair regrowth treatment in Dubai, it's worth prioritizing a hair specialist in Dubai who starts with assessment rather than jumping straight to a treatment menu. A well-run hair clinic in Dubai should be able to explain why a particular approach is being recommended for your specific situation — not simply offer the same package to everyone who walks in.
                </p>
                <p className="text-sm text-[#FAF9F5]/95 leading-relaxed">
                  Given Dubai's climate — high heat, sun exposure, and frequent use of air conditioning — scalp health considerations may also factor into your consultation. Whether you're looking into a hair loss clinic in Dubai for pattern hair loss, postpartum shedding, or unexplained thinning, prioritizing realistic expectations and proper follow-up over dramatic marketing claims will serve you better in the long run.
                </p>
                <div className="pt-4 border-t border-white/10">
                  <Link href="/services/best-hair-specialist-dubai/" className="inline-flex items-center gap-1.5 text-[#A2E3C4] text-xs font-bold hover:underline">
                    Finding the best hair specialist in Dubai <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ============ 21. WHY CHOOSE RAMACARE POLYCLINIC? & 22. FAQ ============ */}
        <section id="why-choose" className="py-24 px-4 md:px-12 max-w-7xl mx-auto scroll-mt-28">
          
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Why Choose */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <span className="text-mono text-xs uppercase tracking-widest text-[#1F5E4B] font-bold">21 / Clinical Values</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#12392D] tracking-tight">
                Why Choose <br />RamaCare Polyclinic?
              </h2>
              <div className="w-16 h-1 bg-[#1F5E4B]"></div>
              
              <p className="text-sm text-[#1E2E2A]/85 leading-relaxed font-sans">
                At RamaCare Polyclinic, our approach to hair regrowth begins with understanding your specific situation, not assuming a one-size-fits-all path. This generally includes:
              </p>
              
              <ul className="space-y-2 text-xs text-[#1E2E2A]/80 pl-6 list-disc font-sans">
                <li>Personalized consultation to understand your history and concerns</li>
                <li>Hair and scalp assessment to help identify contributing factors</li>
                <li>Individualized treatment planning, rather than a fixed universal protocol</li>
                <li>Patient education, so you understand what's realistic at each stage</li>
                <li>A range of hair treatment options, including PRP, discussed based on your situation</li>
                <li>Follow-up guidance to monitor your progress over time</li>
                <li>A convenient Dubai location, making ongoing care practical</li>
              </ul>

              <div className="bg-[#12392D]/5 border border-[#12392D]/10 rounded-2xl p-6 text-xs text-[#12392D] font-sans">
                We believe informed patients make better decisions — which means being upfront about both the possibilities and the limits of what any treatment, including PRP, can realistically offer.
              </div>
            </div>

            {/* FAQs */}
            <div id="faq" className="lg:col-span-8 space-y-6 scroll-mt-28">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h3 className="text-2xl font-bold text-[#12392D]">Frequently Asked Questions</h3>
                
                {/* Search bar */}
                <div className="relative max-w-sm w-full">
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={faqSearch}
                    onChange={(e) => setFaqSearch(e.target.value)}
                    className="w-full bg-white border border-[#1E2E2A]/10 rounded-xl py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-[#1F5E4B] font-sans"
                  />
                  <Search className="w-4 h-4 text-[#1E2E2A]/40 absolute left-3.5 top-3.5" />
                </div>
              </div>

              <div className="space-y-4">
                {filteredFaqs.map((faq, i) => (
                  <div key={i} className="bg-white border border-[#1E2E2A]/5 rounded-2xl shadow-sm overflow-hidden">
                    <button
                      onClick={() => toggleFaq(i)}
                      className="w-full text-left p-6 flex justify-between items-center gap-4 text-[#12392D] font-bold text-sm md:text-base hover:bg-[#12392D]/5 transition-colors font-sans"
                    >
                      <span>{faq.question}</span>
                      {openFaq === i ? <X className="w-4 h-4 shrink-0" /> : <Plus className="w-4 h-4 shrink-0" />}
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 border-t border-[#1E2E2A]/5 text-xs md:text-sm text-[#1E2E2A]/85 leading-relaxed font-sans">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                
                {filteredFaqs.length === 0 && (
                  <p className="text-xs text-[#1E2E2A]/50 text-center py-8 font-sans">No matching questions found.</p>
                )}
              </div>
            </div>

          </div>
        </section>

        {/* ============ 23. MEDICAL DISCLAIMER ============ */}
        <section id="disclaimer" className="bg-amber-50/50 border-t border-b border-[#1E2E2A]/10 py-16 px-4 md:px-12 font-sans scroll-mt-28">
          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-900 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
              <Shield className="w-3 h-3" /> Medical Disclaimer
            </span>
            <p className="text-xs md:text-sm text-[#1E2E2A]/80 leading-relaxed max-w-2xl mx-auto">
              Hair loss has multiple possible causes, and hair regrowth potential differs significantly between patients. Treatment suitability requires a professional assessment and cannot be reliably determined from online information alone. This page is educational and general in nature and does not replace a consultation with a qualified healthcare professional. If you are experiencing sudden, severe, painful, or patchy hair loss, please seek professional medical evaluation rather than relying on self-assessment.
            </p>
          </div>
        </section>

        {/* ============ BOTTOM CALL TO ACTION ============ */}
        <section className="bg-[#12392D] text-[#FAF9F5] py-24 px-4 md:px-12 relative overflow-hidden font-sans">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(162,227,196,0.1),transparent_60%)] pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Book a Hair Regrowth Consultation in Dubai
            </h2>
            
            <p className="text-sm md:text-base text-[#FAF9F5]/80 max-w-2xl mx-auto leading-relaxed">
              The most useful next step isn't browsing more before-and-after photos — it's having an honest conversation about your specific hair and scalp with a qualified professional. At RamaCare Polyclinic, our consultations are built around understanding your hair-loss concerns, exploring possible underlying causes, assessing treatment suitability, discussing an expected timeline, and outlining personalized treatment options — without guarantees, pressure, or fear-based sales tactics.
            </p>
            <p className="text-xs text-[#FAF9F5]/80 max-w-2xl mx-auto leading-relaxed font-bold">
              Book a Hair Regrowth Consultation in Dubai to start with a proper assessment, not a generic treatment package.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic%2C%20I%20would%20like%20to%20book%20a%20consultation%20for%20Hair%20Regrowth%20Treatment%20Dubai."
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="bg-[#A2E3C4] text-[#12392D] hover:bg-white hover:text-[#12392D] px-8 py-4 rounded-xl text-sm font-bold transition-all shadow-md inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> Book a Hair Regrowth Consultation in Dubai
              </a>
              <Link
                href="/contact-us"
                className="border border-white/20 hover:border-white/50 px-8 py-4 rounded-xl text-sm font-bold transition-all inline-flex items-center gap-2"
              >
                <span>Contact Clinic</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ============ 24. RELATED HAIR TREATMENT GUIDES ============ */}
        <section id="guides" className="bg-[#FAF9F5] border-t border-[#1E2E2A]/5 py-20 px-4 md:px-12 scroll-mt-28">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <span className="text-mono text-xs uppercase tracking-widest text-[#1F5E4B] font-bold">Read More</span>
              <h3 className="text-2xl font-bold text-[#12392D] mt-2">Related Hair Treatment Guides</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
              <div className="bg-white border border-[#1E2E2A]/5 p-6 rounded-2xl shadow-sm space-y-2">
                <Link href="/services/hair-prp-dubai/" className="font-bold text-sm text-[#12392D] hover:underline flex items-center gap-1">
                  <span>Hair PRP Treatment in Dubai</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <p className="text-xs text-[#1E2E2A]/70 font-sans">A full overview of the PRP procedure, from consultation through to the injection process itself.</p>
              </div>

              <div className="bg-white border border-[#1E2E2A]/5 p-6 rounded-2xl shadow-sm space-y-2">
                <Link href="/services/hair-treatment-dubai/" className="font-bold text-sm text-[#12392D] hover:underline flex items-center gap-1">
                  <span>Hair Loss Treatment in Dubai</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <p className="text-xs text-[#1E2E2A]/70 font-sans">A broader look at the range of hair-loss treatment options available beyond regrowth-focused approaches.</p>
              </div>

              <div className="bg-white border border-[#1E2E2A]/5 p-6 rounded-2xl shadow-sm space-y-2">
                <Link href="/services/hair-loss-dubai/" className="font-bold text-sm text-[#12392D] hover:underline flex items-center gap-1">
                  <span>Hair Fall Treatment in Dubai</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <p className="text-xs text-[#1E2E2A]/70 font-sans">Guidance specifically addressing excessive hair shedding and its possible causes.</p>
              </div>

              <div className="bg-white border border-[#1E2E2A]/5 p-6 rounded-2xl shadow-sm space-y-2">
                <Link href="/services/hair-growth-cycle/" className="font-bold text-sm text-[#12392D] hover:underline flex items-center gap-1">
                  <span>Hair Growth Cycle</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <p className="text-xs text-[#1E2E2A]/70 font-sans">A breakdown of the anagen, catagen, telogen, and exogen phases underlying how hair treatments work over time.</p>
              </div>

              <div className="bg-white border border-[#1E2E2A]/5 p-6 rounded-2xl shadow-sm space-y-2">
                <Link href="/services/hair-loss-dubai/" className="font-bold text-sm text-[#12392D] hover:underline flex items-center gap-1">
                  <span>Hair Loss Causes</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <p className="text-xs text-[#1E2E2A]/70 font-sans">A detailed guide to the many possible underlying causes of hair loss.</p>
              </div>

              <div className="bg-white border border-[#1E2E2A]/5 p-6 rounded-2xl shadow-sm space-y-2">
                <Link href="/services/prp-hair-treatment-results/" className="font-bold text-sm text-[#12392D] hover:underline flex items-center gap-1">
                  <span>PRP Hair Treatment Results</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <p className="text-xs text-[#1E2E2A]/70 font-sans">What realistic PRP outcomes and timelines tend to look like.</p>
              </div>

              <div className="bg-white border border-[#1E2E2A]/5 p-6 rounded-2xl shadow-sm space-y-2">
                <Link href="/services/prp-hair-treatment-before-and-after/" className="font-bold text-sm text-[#12392D] hover:underline flex items-center gap-1">
                  <span>PRP Hair Treatment Before and After</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <p className="text-xs text-[#1E2E2A]/70 font-sans">How to properly interpret progress photography and avoid common comparison mistakes.</p>
              </div>

              <div className="bg-white border border-[#1E2E2A]/5 p-6 rounded-2xl shadow-sm space-y-2">
                <Link href="/services/prp-hair-treatment-recovery/" className="font-bold text-sm text-[#12392D] hover:underline flex items-center gap-1">
                  <span>PRP Hair Treatment Recovery</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <p className="text-xs text-[#1E2E2A]/70 font-sans">What to expect in the days immediately following a PRP session.</p>
              </div>

              <div className="bg-white border border-[#1E2E2A]/5 p-6 rounded-2xl shadow-sm space-y-2">
                <Link href="/services/hair-prp-cost-dubai/" className="font-bold text-sm text-[#12392D] hover:underline flex items-center gap-1">
                  <span>PRP Hair Treatment Cost in Dubai</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <p className="text-xs text-[#1E2E2A]/70 font-sans">The factors that influence PRP pricing and how treatment plans are structured.</p>
              </div>

              <div className="bg-white border border-[#1E2E2A]/5 p-6 rounded-2xl shadow-sm space-y-2">
                <Link href="/services/mesotherapy-dubai/" className="font-bold text-sm text-[#12392D] hover:underline flex items-center gap-1">
                  <span>Hair Mesotherapy in Dubai</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <p className="text-xs text-[#1E2E2A]/70 font-sans">An overview of mesotherapy as an alternative or complementary scalp treatment.</p>
              </div>

              <div className="bg-white border border-[#1E2E2A]/5 p-6 rounded-2xl shadow-sm space-y-2">
                <Link href="/services/prp-vs-hair-mesotherapy-dubai/" className="font-bold text-sm text-[#12392D] hover:underline flex items-center gap-1">
                  <span>PRP vs Hair Mesotherapy</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <p className="text-xs text-[#1E2E2A]/70 font-sans">A side-by-side comparison of these two injectable scalp treatments.</p>
              </div>

              <div className="bg-white border border-[#1E2E2A]/5 p-6 rounded-2xl shadow-sm space-y-2">
                <Link href="/services/prp-vs-hair-transplant-dubai/" className="font-bold text-sm text-[#12392D] hover:underline flex items-center gap-1">
                  <span>PRP vs Hair Transplant in Dubai</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <p className="text-xs text-[#1E2E2A]/70 font-sans">A comparison of non-surgical PRP and surgical hair transplantation.</p>
              </div>

              <div className="bg-white border border-[#1E2E2A]/5 p-6 rounded-2xl shadow-sm space-y-2">
                <Link href="/services/best-hair-specialist-dubai/" className="font-bold text-sm text-[#12392D] hover:underline flex items-center gap-1">
                  <span>Best Hair Specialist in Dubai</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <p className="text-xs text-[#1E2E2A]/70 font-sans">What to look for when choosing a hair-loss specialist.</p>
              </div>

              <div className="bg-white border border-[#1E2E2A]/5 p-6 rounded-2xl shadow-sm space-y-2">
                <Link href="/services/hair-loss-clinic-dubai/" className="font-bold text-sm text-[#12392D] hover:underline flex items-center gap-1">
                  <span>Hair Loss Clinic Dubai</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <p className="text-xs text-[#1E2E2A]/70 font-sans">What to expect from a comprehensive hair-loss clinic visit, from diagnosis to treatment planning.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#FAF9F5] border-t border-[#1E2E2A]/10 py-8 px-4 md:px-12 text-center text-xs text-[#1E2E2A]/60 font-sans">
          <p>
            This page is for educational purposes only and does not constitute medical advice. Individual results vary. Please consult a qualified healthcare professional to determine which hair regrowth options, if any, are suitable for you.
          </p>
        </footer>

        </div>
        <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="hair-regrowth-treatment-dubai" />
      </Layout>
  );
}
