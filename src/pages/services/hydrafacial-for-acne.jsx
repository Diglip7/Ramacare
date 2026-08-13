import React, { useState, useRef } from 'react';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useRouter } from 'next/router';

const SITE_URL = 'https://ramacarepolyclinic.ae';
const PAGE_PATH = '/services/hydrafacial-for-acne/';

// Page Content Data
const sections = [
  { id: 'intro', label: 'Overview' },
  { id: 'quick-answer', label: 'Quick Answer' },
  { id: 'what-is', label: 'What Is Hydrafacial' },
  { id: 'benefits', label: 'How It Helps' },
  { id: 'acne-types', label: 'Suitable Acne Types' },
  { id: 'not-appropriate', label: 'When to Avoid' },
  { id: 'active-vs-scars', label: 'Active Acne vs Scars' },
  { id: 'acne-marks', label: 'Acne Marks' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'what-to-expect', label: 'What to Expect' },
  { id: 'results', label: 'Results' },
  { id: 'durability', label: 'How Long Results Last' },
  { id: 'frequency', label: 'Treatment Frequency' },
  { id: 'aftercare', label: 'Aftercare' },
  { id: 'side-effects', label: 'Side Effects' },
  { id: 'vs-other', label: 'Comparison' },
  { id: 'candidates', label: 'Ideal Candidates' },
  { id: 'men-women', label: 'Men vs Women' },
  { id: 'dubai-climate', label: 'Dubai Climate' },
  { id: 'why-ramacare', label: 'Why Choose Us' },
  { id: 'faqs', label: 'FAQs' }
];

const phases = [
  { title: 'Cleansing', desc: 'removing surface oil, makeup residue, and everyday buildup' },
  { title: 'Exfoliation', desc: 'loosening dead skin cells sitting on the surface of the skin' },
  { title: 'Extraction', desc: 'using gentle suction to help lift out debris from visibly congested pores' },
  { title: 'Hydration', desc: 'applying serums intended to replenish moisture and support the skin barrier' }
];

const benefitsList = [
  { title: 'Cleansing', desc: 'Deep cleansing may help remove everyday buildup — oil, sweat, sunscreen, and makeup residue — that can sit on the skin\'s surface and contribute to a congested look. This alone won\'t resolve acne, but for people whose skin looks dull or clogged due to surface debris, cleansing can be a meaningful first step.' },
  { title: 'Exfoliation', desc: 'Controlled exfoliation may help lift dead skin cells that build up on the surface, which can otherwise contribute to a rough or congested texture. This is generally gentler than more aggressive resurfacing procedures, which is one reason it\'s sometimes considered for sensitive or reactive skin — though this always depends on the individual.' },
  { title: 'Extraction', desc: 'Professional extraction may help address some forms of visible congestion, such as blackheads and certain whiteheads, in a more controlled way than at-home extraction. This is one of the more relevant benefits for acne-prone skin specifically, since manual or improper extraction at home can worsen irritation or lead to scarring.' },
  { title: 'Hydration', desc: 'It\'s a common misconception that oily or acne-prone skin doesn\'t need hydration. In reality, a compromised skin barrier can actually increase oil production as skin tries to compensate for dryness. Supporting hydration, even in oily skin types, may help maintain a healthier-looking skin barrier over time.' },
  { title: 'Temporary Improvement in Skin Texture', desc: 'Many people notice smoother-looking, cleaner-feeling skin immediately after treatment. This is generally considered a short-term cosmetic benefit rather than a long-term acne solution.' }
];

const suitableAcne = [
  { name: 'Blackheads', desc: 'often linked to surface oil and dead skin trapped in open pores' },
  { name: 'Whiteheads', desc: 'closed congestion that may respond to gentle exfoliation and extraction' },
  { name: 'Congested pores', desc: 'a generally dull, textured look without significant inflammation' },
  { name: 'Mild acne-prone skin', desc: 'occasional breakouts without deep, painful lesions' },
  { name: 'Oily or combination skin', desc: 'skin that tends to look shiny and congested but isn\'t currently inflamed' }
];

const contraindications = [
  'Severe inflammatory acne, where the skin is significantly red, swollen, or irritated',
  'Painful cystic acne, which sits deeper in the skin and generally needs medical management rather than a cosmetic facial',
  'Open or broken skin, including active lesions or wounds',
  'Active skin infections',
  'Significant inflammation anywhere on the treatment area',
  'Severe irritation from other products or treatments',
  'Recent aggressive skin procedures, such as certain lasers or peels, where the skin needs time to recover',
  'Certain active dermatological conditions that require a physician\'s evaluation first'
];

const activeVsScarsTable = [
  { concern: 'Blackheads', role: 'May help through cleansing, exfoliation, and extraction', note: 'Results are cosmetic and temporary; congestion can return' },
  { concern: 'Whiteheads', role: 'May help with gentle extraction in suitable cases', note: 'Not appropriate if the area is inflamed or tender' },
  { concern: 'Congested pores', role: 'May improve surface texture and appearance', note: 'Underlying oil production is not changed' },
  { concern: 'Active inflammatory acne', role: 'Generally not the primary treatment approach', note: 'May require medical evaluation before any facial treatment' },
  { concern: 'Post-acne marks (hyperpigmentation)', role: 'May offer mild cosmetic support as part of a broader plan', note: 'Marks often fade with time; treatment should target the specific pigmentation type' },
  { concern: 'Depressed acne scars', role: 'Not the appropriate treatment', note: 'Typically requires a dedicated scar-focused approach' }
];

const steps = [
  { label: 'Step 1: Skin Assessment', desc: 'Before anything else, your provider should look at your skin condition, ask about your acne history, and confirm the treatment is appropriate for you on that day.' },
  { label: 'Step 2: Cleansing', desc: 'The skin is cleansed to remove surface oil, makeup, and daily buildup.' },
  { label: 'Step 3: Exfoliation', desc: 'A gentle exfoliation step helps loosen dead skin cells on the surface.' },
  { label: 'Step 4: Extraction', desc: 'Controlled suction-based extraction may be used to help clear visible congestion, such as blackheads, where appropriate.' },
  { label: 'Step 5: Hydration', desc: 'Hydrating serums are applied to help support the skin barrier.' },
  { label: 'Step 6: Post-Treatment Skin Care', desc: 'Depending on your skin\'s condition, additional soothing or protective steps may be added at the end.' }
];

const firstSessionSteps = [
  { title: 'Consultation', desc: 'discussing your skin concerns and goals' },
  { title: 'Skin assessment', desc: 'a closer look at your current skin condition' },
  { title: 'Discussion of acne history', desc: 'including triggers, past treatments, and any medications you\'re using' },
  { title: 'Treatment suitability check', desc: 'confirming whether Hydrafacial is appropriate today, or whether a different approach is needed' },
  { title: 'Customized treatment', desc: 'the session itself, adjusted to your skin' },
  { title: 'Aftercare instructions', desc: 'practical guidance for the days following treatment' },
  { title: 'Follow-up, if appropriate', desc: 'discussing whether repeat sessions make sense for your goals' }
];

const resultsBenefits = [
  'Cleaner-looking skin',
  'Smoother texture',
  'A reduced appearance of surface congestion',
  'A more hydrated, less dull-looking complexion',
  'An overall fresher appearance'
];

const aftercareTips = [
  'Gentle cleansing — avoid harsh scrubbing in the days following treatment',
  'Moisturization — even oily or acne-prone skin benefits from appropriate hydration',
  'Sun protection — freshly treated skin can be more sensitive to UV exposure',
  'Avoiding unnecessary irritation — steer clear of strong actives (like retinoids or strong acids) immediately after treatment unless your provider says otherwise',
  'Avoiding aggressive exfoliation for a few days afterward',
  'Following your clinician\'s specific instructions, since these can vary based on your skin\'s condition',
  'Avoiding picking or squeezing acne, which can increase the risk of scarring and post-inflammatory marks regardless of any facial treatment'
];

const sideEffectsList = [
  'Mild redness',
  'Temporary sensitivity',
  'Mild irritation',
  'Temporary tightness',
  'General skin sensitivity for a short period after treatment'
];

const chemicalPeelTable = [
  { feat: 'Basic approach', hydra: 'Multi-step device-based cleansing, exfoliation, extraction, hydration', peel: 'Controlled chemical exfoliation using an acid-based solution' },
  { feat: 'Main purpose', hydra: 'Surface cleansing, mild exfoliation, hydration', peel: 'Deeper exfoliation, may target texture or pigmentation depending on peel strength' },
  { feat: 'Exfoliation', hydra: 'Generally gentle', peel: 'Can range from light to more intensive, depending on the peel used' },
  { feat: 'Extraction', hydra: 'Included as part of the treatment', peel: 'Not typically included' },
  { feat: 'Downtime', hydra: 'Generally minimal', peel: 'Varies from minimal to several days, depending on peel depth' },
  { feat: 'Skin suitability', hydra: 'Often considered for sensitive or reactive skin, subject to assessment', peel: 'Suitability depends heavily on peel type and current skin condition' },
  { feat: 'Acne considerations', hydra: 'May help with surface congestion; not for inflamed or broken skin', peel: 'Certain peels may be considered for specific acne-related concerns, but require careful assessment' },
  { feat: 'Professional assessment', hydra: 'Recommended before treatment', peel: 'Strongly recommended, as peel strength must match skin condition' }
];

const whyChooseUsPoints = [
  'Personalized skin consultation before any treatment is recommended',
  'A genuine skin assessment, rather than a one-size-fits-all package',
  'Individualized treatment planning based on your specific skin concerns and goals',
  'Patient-focused care, with time taken to understand your acne history and current routine',
  'Aesthetic dermatology services alongside general skin and acne-related treatment options',
  'Professional aftercare guidance tailored to your skin',
  'A convenient Jumeirah 1 location, accessible for patients across Dubai'
];

const faqData = [
  { q: "Is Hydrafacial good for acne?", a: "It may help some people with mild, non-inflammatory acne-prone skin by supporting cleansing, exfoliation, and hydration. It isn't a universal solution and suitability depends on your specific skin condition." },
  { q: "Can Hydrafacial remove acne?", a: "No. Hydrafacial does not remove or cure acne. It may improve the surface appearance of congested skin, but it doesn't address the underlying causes of breakouts." },
  { q: "Does Hydrafacial help blackheads?", a: "It may help with blackheads through its cleansing, exfoliation, and extraction steps, though results are generally cosmetic and can be temporary." },
  { q: "Can Hydrafacial unclog pores?", a: "It may help reduce the appearance of clogged pores through gentle exfoliation and extraction, but pores can become congested again over time depending on your skin and routine." },
  { q: "Can I get Hydrafacial if I have active acne?", a: "It depends on the type and severity. Mild, non-inflamed congestion may be suitable, but active inflammatory or painful acne generally needs to be assessed first, and treatment may be postponed if the skin is too irritated." },
  { q: "Is Hydrafacial suitable for cystic acne?", a: "Generally, cystic acne is not considered appropriate for standard Hydrafacial treatment, since it involves deeper, often painful inflammation that typically requires medical evaluation." },
  { q: "Does Hydrafacial help acne scars?", a: "Hydrafacial is not designed as a scar treatment. Depressed or textured scars typically require a different, more targeted approach — see our Acne Scar Treatment page for more information." },
  { q: "Does Hydrafacial help acne marks?", a: "It may offer a mild cosmetic supporting role for surface marks, but it isn't a guaranteed pigmentation treatment, and results vary." },
  { q: "How long do Hydrafacial results last?", a: "This varies by individual. Skin condition, acne triggers, and your skincare routine all affect how long cosmetic improvements appear to last." },
  { q: "How often can I get Hydrafacial for acne?", a: "Frequency depends on your skin condition, goals, and professional recommendation — there's no single schedule that applies to everyone." },
  { q: "Is Hydrafacial suitable for oily skin?", a: "It's often considered suitable for oily skin, since hydration steps can help support the skin barrier without necessarily adding excess oil, but individual suitability should be assessed." },
  { q: "Can Hydrafacial make acne worse?", a: "It's generally well tolerated, but treating actively inflamed or broken skin can potentially cause irritation. This is why a pre-treatment assessment matters, and why treatment may be postponed on inflamed skin." },
  { q: "What should I do after Hydrafacial?", a: "Focus on gentle cleansing, appropriate moisturizing, sun protection, and avoiding harsh actives or aggressive exfoliation for a few days, following your provider's specific instructions." },
  { q: "Does Hydrafacial have downtime?", a: "Generally minimal, though some people experience temporary redness or sensitivity for a short period afterward." },
  { q: "Is Hydrafacial better than a chemical peel for acne?", a: "Neither is universally better — it depends on your skin type, the nature of your acne, and your goals. See our Hydrafacial vs Chemical Peel comparison for more detail." },
  { q: "How much does Hydrafacial cost in Dubai?", a: "Pricing depends on the treatment protocol, number of sessions, and individual requirements. Visit our Hydrafacial Price in Dubai page for current information." },
  { q: "Can men get Hydrafacial for acne?", a: "Yes, subject to a skin assessment. Considerations for men often include shaving-related irritation and typically higher oil production." },
  { q: "Can women with hormonal acne get Hydrafacial?", a: "It may be considered as a supporting cosmetic treatment, but persistent hormonal acne is often better addressed through medical evaluation first." },
  { q: "Should I see a dermatologist for acne?", a: "If your acne is painful, cystic, persistent, worsening, or affecting your confidence, a professional medical evaluation is a reasonable next step before or alongside any cosmetic treatment." },
  { q: "Can Hydrafacial prevent future acne?", a: "No. It does not prevent acne, since it doesn't address the underlying causes such as hormones, genetics, or bacterial activity. It may support overall skin cleanliness and hydration as part of a broader routine." }
];

export default function HydrafacialForAcnePage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);
  const navRef = useRef(null);

  const scrollNav = (direction) => {
    if (navRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      navRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleBookAppointment = () => {
    router.push('/book-appointment');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic%2C%20I%20would%20like%20to%20book%20a%20Hydrafacial%20for%20Acne%20treatment%20consultation.', '_blank');
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <Layout>
      <Head>
        <title key="title">Hydrafacial for Acne in Dubai | RamaCare Polyclinic</title>
        <meta
          name="description"
          content="Wondering if Hydrafacial is good for acne-prone skin? Learn benefits, limitations & suitability, then book a skin assessment at RamaCare Dubai."
          key="description"
        />
        <link rel="canonical" href={`${SITE_URL}${PAGE_PATH}`} />
        <script
          key="schema-webpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              '@id': `${SITE_URL}${PAGE_PATH}#webpage`,
              url: `${SITE_URL}${PAGE_PATH}`,
              name: 'Hydrafacial for Acne: Benefits, Suitability & What to Expect',
              description: 'Wondering if Hydrafacial is good for acne-prone skin? Learn benefits, limitations & suitability, then book a skin assessment at RamaCare Dubai.',
              inLanguage: 'en-AE',
              isPartOf: { '@id': `${SITE_URL}/#website` },
              about: { '@id': `${SITE_URL}/#organization` },
              primaryImageOfPage: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/images/skin-consultation-hydrafacial-assessment.jpg`
              },
              datePublished: '2026-08-10',
              dateModified: '2026-08-10'
            })
          }}
        />
        <script
          key="schema-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
                { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services/` },
                { '@type': 'ListItem', position: 3, name: 'Aesthetic Dermatology', item: `${SITE_URL}/services/aesthetic-dermatology-dubai/` },
                { '@type': 'ListItem', position: 4, name: 'Hydrafacial for Acne', item: `${SITE_URL}${PAGE_PATH}` }
              ]
            })
          }}
        />
        <script
          key="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqData.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a }
              }))
            })
          }}
        />
      </Head>

      {/* ============ BOLD EDITORIAL HERO ============ */}
      <header className="relative min-h-[95vh] flex flex-col justify-center bg-[#FDFCF7] overflow-hidden pt-28 pb-16 px-6 border-b border-[#E6E2D8]">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#1F5E4B] filter blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#D4A574] filter blur-3xl" />
        </div>

        {/* Asymmetrical Skew Grid Background */}
        <div className="absolute top-0 right-0 w-5/12 h-full bg-[#1F5E4B]/5 transform skew-x-12 origin-top-right hidden lg:block" />

        <div className="relative z-10 max-w-7xl mx-auto w-full mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center text-xs font-medium text-[#5F5F5F] gap-1.5">
            <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
            <span className="mx-1">/</span>
            <Link href="/services/" className="hover:text-[#1F5E4B] transition-colors">Services</Link>
            <span className="mx-1">/</span>
            <Link href="/services/aesthetic-dermatology-dubai/" className="hover:text-[#1F5E4B] transition-colors">Aesthetic Dermatology</Link>
            <span className="mx-1">/</span>
            <span className="text-[#1F5E4B]">Hydrafacial for Acne</span>
          </nav>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 border-b border-[#D4A574] pb-2">
              <span className="w-2 h-2 rounded-full bg-[#1F5E4B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#1F5E4B]">RamaCare Polyclinic Dubai</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-sans text-[#1A1A1A] leading-tight font-extrabold tracking-tight">
              Hydrafacial for Acne: <span className="text-[#1F5E4B] block mt-2">Benefits, Suitability &amp; What to Expect</span>
            </h1>

            <div className="space-y-6 text-[#5F5F5F] max-w-2xl text-lg leading-relaxed font-light font-sans">
              <p>
                If you&apos;ve noticed blackheads, whiteheads, congested pores, or skin that always seems to look oily and uneven no matter what you try, you&apos;ve probably come across Hydrafacial as a treatment option. It&apos;s one of the most searched skin treatments in Dubai, and it&apos;s often mentioned alongside acne-prone skin — but the honest answer to “does it treat acne?” is more nuanced than most marketing pages let on.
              </p>
              <p>
                Acne can show up in very different ways. For some people it&apos;s mostly blackheads and a dull, congested complexion. For others it&apos;s inflamed, painful, cystic breakouts that need proper medical attention. Hydrafacial was never designed to replace acne treatment as prescribed by a physician — but as a cleansing and resurfacing facial, it may be considered by some people with mild, non-inflammatory, congestion-related acne concerns as part of an overall skincare approach.
              </p>
              <p>
                This page looks specifically at Hydrafacial for acne — not Hydrafacial in general — so you can understand where it may genuinely help, where it falls short, and how a proper skin assessment at RamaCare Polyclinic in Dubai can help you figure out if it&apos;s the right fit for your skin.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={handleBookAppointment}
                className="inline-flex items-center justify-center gap-2 bg-[#1F5E4B] text-white px-7 py-3.5 rounded-xl font-bold hover:bg-[#1a4f40] transition-all text-sm shadow-md"
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

          {/* Premium Overlapping Visual Card */}
          <div className="relative w-full">
            <div className="relative border border-[#E9E2D6] rounded-3xl p-6 bg-white shadow-xl w-full max-w-xl lg:max-w-none mx-auto transform hover:scale-[1.01] transition-all duration-500">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#D4A574] text-white flex items-center justify-center font-sans text-xl rounded-full shadow-lg">01</div>
              <img
                src="/images/acne-prone-skin-consultation-dubai.jpg"
                alt="Skin consultation for acne-prone skin at a Dubai clinic"
                className="w-full h-[450px] object-cover rounded-2xl mb-4"
              />
              <p className="text-xs text-[#5F5F5F] leading-relaxed italic text-center">
                “A personalized skin assessment is the essential starting point for acne-prone skin.”
              </p>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#F0F7F4] border border-[#1F5E4B]/10 rounded-3xl -z-10 transform rotate-12" />
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
              {sections.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-2 text-[#5F5F5F] hover:text-[#1F5E4B] transition-colors shrink-0"
                >
                  <span className="font-sans text-[#D4A574]">•</span>
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

      {/* ============ EDITORIAL CONTENT GRID ============ */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="w-full space-y-24">

          {/* QUICK ANSWER */}
          <section id="quick-answer" className="scroll-mt-32">
            <div className="bg-[#F9F7F2] border border-[#E9E2D6] rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4A574]/10 rounded-bl-full" />
              <div className="max-w-3xl space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4A574]">Quick Answer</h3>
                <h2 className="text-2xl md:text-3xl font-sans text-[#1A1A1A] font-bold">Is Hydrafacial Good for Acne?</h2>
                <p className="text-base text-[#5F5F5F] leading-relaxed font-light">
                  Hydrafacial may help some people with acne-prone skin by supporting deep cleansing, gentle exfoliation, extraction of surface debris, and hydration — all of which can improve the look of congested, oily-looking, or dull skin. It is not a cure for acne, it does not treat the underlying causes of acne (such as hormones, bacteria, or excess oil production), and it is generally not appropriate for active inflammatory or cystic acne without prior medical evaluation. Suitability depends on the type and severity of your acne, which is best determined during an in-person skin assessment.
                </p>
              </div>
            </div>
          </section>

          {/* WHAT IS HYDRAFACIAL */}
          <section id="what-is" className="scroll-mt-32 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A]">What Is a Hydrafacial?</h2>
              <p className="text-base text-[#5F5F5F] leading-relaxed">
                Hydrafacial is a multi-step facial treatment that combines cleansing, gentle exfoliation, extraction, and hydration in one session. Unlike a purely manual facial, it uses a device that moves across the skin in stages, each designed to address a different part of the skin&apos;s surface condition.
              </p>
              <p className="text-base text-[#5F5F5F] leading-relaxed">
                In simple terms, the treatment generally works through a few broad phases:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {phases.map((p, idx) => (
                  <div key={idx} className="border border-gray-100 rounded-xl p-4 bg-white shadow-sm">
                    <span className="font-sans text-[#D4A574] text-xs font-bold block mb-1">Phase {idx + 1}</span>
                    <h4 className="font-bold text-[#1A1A1A] text-sm mb-1">{p.title}</h4>
                    <p className="text-xs text-[#5F5F5F] leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#5F5F5F] leading-relaxed italic bg-gray-50 p-4 rounded-xl">
                It&apos;s important to understand that Hydrafacial is a cosmetic skin treatment, not a medical acne treatment. It doesn&apos;t contain prescription-strength active ingredients, and it isn&apos;t designed to address the internal drivers of acne, such as hormonal fluctuations or bacterial activity beneath the skin.
              </p>
              <p className="text-sm text-[#5F5F5F]">
                For a full overview of the treatment itself, see our main{' '}
                <a href="/services/hydrafacial-dubai/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                  Hydrafacial in Dubai
                </a>{' '}
                page.
              </p>
            </div>
            <div className="border border-gray-200 rounded-3xl p-4 bg-white shadow-md">
              <img
                src="/images/hydrafacial-treatment-session-dubai.jpg"
                alt="Hydrafacial treatment being performed on a patient"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <p className="text-xs text-[#5F5F5F] leading-relaxed italic text-center mt-3">
                “Hydrafacial combines mechanical exfoliation and customized serums.”
              </p>
            </div>
          </section>

          {/* HOW CAN IT HELP */}
          <section id="benefits" className="scroll-mt-32 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A]">How Can Hydrafacial Help Acne-Prone Skin?</h2>
              <p className="text-[#5F5F5F] leading-relaxed">
                This is where nuance matters. Hydrafacial doesn&apos;t “treat acne” the way an oral medication or a prescribed topical might. What it can potentially do is support some of the surface-level factors that contribute to a congested, acne-prone appearance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefitsList.map((b, idx) => (
                <div key={idx} className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B]" />
                    {b.title}
                  </h4>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#5F5F5F] leading-relaxed">
              Across all of the above, the language matters: Hydrafacial may help or can support some acne-prone skin concerns in suitable patients, depending on skin condition — it is not a guaranteed or universal fix, and results vary from person to person.
            </p>
          </section>

          {/* SUITABLE ACNE TYPES */}
          <section id="acne-types" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A]">What Types of Acne May Benefit From Hydrafacial?</h2>
            <p className="text-[#5F5F5F] leading-relaxed">
              Not all acne is the same, and suitability really does depend on what&apos;s actually happening with your skin. Generally speaking, Hydrafacial is more commonly considered for:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {suitableAcne.map((item, idx) => (
                <div key={idx} className="bg-[#F9F7F2] border border-[#E9E2D6] rounded-xl p-5 text-center">
                  <h4 className="font-bold text-[#1F5E4B] text-sm mb-2">{item.name}</h4>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#5F5F5F] leading-relaxed">
              Even within these categories, suitability is individual. Two people with “blackheads” can have very different underlying skin conditions, sensitivities, and triggers. This is why an in-person skin assessment — rather than a generic online description — is the only reliable way to know if Hydrafacial fits your specific skin.
            </p>
          </section>

          {/* CONTRAINDICATIONS */}
          <section id="not-appropriate" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A]">When Hydrafacial May Not Be Appropriate</h2>
            <p className="text-[#5F5F5F] leading-relaxed">
              This is one of the most important sections on this page, and any clinic that skips it isn&apos;t giving you the full picture. A qualified provider will typically want to evaluate your skin before treatment, and may recommend postponing or avoiding Hydrafacial in situations such as:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {contraindications.map((c, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-red-50/30 border border-red-100 rounded-xl p-4">
                  <LucideIcons.AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#5F5F5F] leading-relaxed">{c}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#5F5F5F] leading-relaxed bg-[#FDFCF7] border border-[#E9E2D6] p-5 rounded-2xl">
              If any of the above applies to you, a facial treatment should not be used as a substitute for appropriate medical acne care. This page cannot diagnose your skin — only an in-person assessment can determine whether Hydrafacial is currently appropriate for you, or whether you should be seen by a doctor first.
            </p>
          </section>

          {/* ACTIVE VS SCARS TABLE */}
          <section id="active-vs-scars" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A]">Hydrafacial for Active Acne vs Acne Scars</h2>
            <p className="text-[#5F5F5F] leading-relaxed">
              People often use “acne” as a catch-all term, but active breakouts and the marks or scars left behind are genuinely different concerns — and they don&apos;t always respond to the same treatment.
            </p>
            <div className="overflow-x-auto border border-gray-200 rounded-2xl bg-white shadow-sm">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500">Concern</th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500">Hydrafacial&apos;s Potential Role</th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500">Important Consideration</th>
                  </tr>
                </thead>
                <tbody>
                  {activeVsScarsTable.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50/50">
                      <td className="p-4 text-sm font-bold text-[#1A1A1A]">{row.concern}</td>
                      <td className="p-4 text-sm text-[#5F5F5F] leading-relaxed">{row.role}</td>
                      <td className="p-4 text-sm text-[#5F5F5F] leading-relaxed">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              If your main concern is textural scarring or depressed marks left behind after acne has healed, that&apos;s a different treatment conversation. Our{' '}
              <a href="/services/acne-scar-treatment-dubai/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                Acne Scar Treatment in Dubai
              </a>{' '}
              page goes into more detail on approaches specifically designed for scarring rather than active breakouts.
            </p>
          </section>

          {/* ACNE MARKS */}
          <section id="acne-marks" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A]">Hydrafacial for Acne Marks</h2>
            <div className="bg-[#FDFCF7] border border-[#E9E2D6] rounded-3xl p-6 md:p-8 space-y-6">
              <p className="text-[#5F5F5F] leading-relaxed">
                “Acne marks” usually refers to the flat, discolored patches — often pink, red, or brown — that remain after a breakout has healed. These are different from acne scars, which involve actual changes to the skin&apos;s texture, such as depressed (pitted) areas.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-sm text-[#5F5F5F] leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B] mt-2 flex-shrink-0" />
                  Marks are generally surface-level pigmentation changes and often fade on their own over weeks to months, though this varies by skin tone and how the acne healed.
                </li>
                <li className="flex items-start gap-2.5 text-sm text-[#5F5F5F] leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B] mt-2 flex-shrink-0" />
                  Scars involve structural changes to the skin and typically don&apos;t resolve without targeted intervention.
                </li>
              </ul>
              <p className="text-sm text-[#5F5F5F] leading-relaxed">
                Because ongoing active acne can continue to generate new marks, addressing any current breakouts is often an important first step before focusing heavily on pigmentation. Hydrafacial should not be presented — by us or anyone else — as a guaranteed treatment for acne marks or hyperpigmentation. It may offer a mild cosmetic supporting role as part of a broader, individually assessed skincare plan, but it is not a substitute for pigmentation-specific treatment when that&apos;s genuinely what&apos;s needed.
              </p>
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section id="how-it-works" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A]">How Does Hydrafacial for Acne Work?</h2>
            <p className="text-[#5F5F5F] leading-relaxed">
              While every provider will adjust the process slightly for acne-prone skin, a typical session generally follows these steps:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((s, idx) => (
                <div key={idx} className="border border-gray-100 rounded-2xl p-6 bg-[#FDFCF7] shadow-sm relative overflow-hidden">
                  <div className="text-4xl font-serif font-bold text-[#D4A574]/20 absolute top-2 right-4">{idx + 1}</div>
                  <h4 className="font-bold text-[#1A1A1A] mb-2">{s.label}</h4>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#5F5F5F] leading-relaxed">
              The exact protocol, pressure, and product selection may be adjusted based on how your skin looks and feels on the day of treatment — which is one reason a proper in-clinic assessment matters more than following a fixed, one-size-fits-all routine.
            </p>
          </section>

          {/* WHAT TO EXPECT */}
          <section id="what-to-expect" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A]">What to Expect During Your First Hydrafacial for Acne</h2>
            <p className="text-[#5F5F5F] leading-relaxed">
              If you&apos;re booking your first session for acne-prone skin, the process generally looks like this:
            </p>
            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              {firstSessionSteps.map((step, idx) => (
                <div key={idx} className={`flex items-start gap-4 px-6 py-4 border-b border-gray-100 ${idx % 2 === 1 ? 'bg-[#FDFCF7]' : 'bg-white'}`}>
                  <span className="font-serif text-[#1F5E4B] font-bold text-sm shrink-0 mt-0.5">{idx + 1}.</span>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-sm mb-0.5">{step.title}</h4>
                    <p className="text-xs text-[#5F5F5F] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#5F5F5F] leading-relaxed bg-[#F9F7F2] p-4 rounded-xl border border-[#E9E2D6]">
              A responsible provider may modify the treatment, use lighter settings, or postpone the session altogether if your skin appears too inflamed, irritated, or compromised on the day. This isn&apos;t a sign that something has gone wrong — it&apos;s part of treating your skin safely.
            </p>
          </section>

          {/* RESULTS */}
          <section id="results" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A]">Hydrafacial for Acne: Results</h2>
            <p className="text-[#5F5F5F] leading-relaxed">
              It&apos;s worth being upfront: Hydrafacial does not eliminate acne, and results are cosmetic and short-term rather than a lasting fix for breakouts. That said, many people notice some visible changes shortly after treatment, such as:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {resultsBenefits.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
                  <LucideIcons.Check className="w-5 h-5 text-[#1F5E4B] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1A1A1A]">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#5F5F5F] leading-relaxed">
              These changes tend to reflect the removal of surface debris and short-term hydration — not a change in the underlying causes of acne. Because of that, results vary considerably between individuals, acne can return, and Hydrafacial does not address every possible cause of breakouts (such as hormonal factors, certain medications, or bacterial activity). For ongoing or recurring acne, long-term management may require a different or combined treatment approach, ideally guided by a professional assessment.
            </p>
            <p className="text-sm text-[#5F5F5F]">
              You can find more general information on what to expect from treatment on our{' '}
              <a href="/services/hydrafacial-dubai/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                Hydrafacial in Dubai
              </a>{' '}
              page.
            </p>
          </section>

          {/* DURABILITY */}
          <section id="durability" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A]">How Long Do Hydrafacial Results Last?</h2>
            <p className="text-[#5F5F5F] leading-relaxed">
              There&apos;s no universal answer here, because it depends heavily on individual skin condition. A few honest points:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-[#5F5F5F] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B] mt-2 flex-shrink-0" />
                Skin condition and acne triggers vary significantly between patients, so results that last for one person may not last as long for another.
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[#5F5F5F] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B] mt-2 flex-shrink-0" />
                Congestion and acne can return, especially if underlying triggers (like excess oil production or hormonal factors) are still active.
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[#5F5F5F] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B] mt-2 flex-shrink-0" />
                Your day-to-day skincare routine plays a meaningful role in how long the cosmetic benefits of a session appear to last.
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[#5F5F5F] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B] mt-2 flex-shrink-0" />
                Some patients discuss maintenance sessions with their provider as part of an ongoing skincare plan, but this should be based on your specific skin, not a fixed schedule applied to everyone.
              </li>
            </ul>
          </section>

          {/* FREQUENCY */}
          <section id="frequency" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A]">How Often Should You Get Hydrafacial for Acne?</h2>
            <div className="bg-[#FDFCF7] border border-[#E9E2D6] p-6 md:p-8 rounded-3xl space-y-4">
              <p className="text-sm text-[#5F5F5F] leading-relaxed">
                Frequency isn&apos;t one-size-fits-all. It generally depends on:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-[#5F5F5F]">
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1F5E4B] rounded-full shrink-0" /> Your current skin condition</div>
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1F5E4B] rounded-full shrink-0" /> The severity of your acne or congestion</div>
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1F5E4B] rounded-full shrink-0" /> How sensitive or reactive your skin tends to be</div>
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1F5E4B] rounded-full shrink-0" /> Your specific goals for treatment</div>
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1F5E4B] rounded-full shrink-0" /> Any other active treatments you&apos;re using (medical or cosmetic)</div>
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1F5E4B] rounded-full shrink-0" /> Your provider&apos;s professional recommendation after assessing your skin</div>
              </div>
              <p className="text-xs text-[#5F5F5F] leading-relaxed border-t border-gray-100 pt-4 mt-4">
                Be cautious of any source that presents a fixed monthly schedule as something everyone medically needs — that kind of blanket claim doesn&apos;t account for individual skin variation, and a responsible provider will tailor frequency to you specifically.
              </p>
            </div>
          </section>

          {/* AFTERCARE */}
          <section id="aftercare" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A]">Hydrafacial for Acne Aftercare</h2>
            <p className="text-[#5F5F5F] leading-relaxed">
              Good aftercare can help support your results and reduce the chance of irritation. General guidance typically includes:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {aftercareTips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                  <LucideIcons.CheckCircle className="w-4 h-4 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#5F5F5F] leading-relaxed">{tip}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#5F5F5F] leading-relaxed">
              If you&apos;re on any prescribed topical or oral acne medication, always check with your prescribing doctor about how it should be combined with cosmetic facial treatments.
            </p>
          </section>

          {/* SIDE EFFECTS */}
          <section id="side-effects" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A]">Hydrafacial Side Effects and Risks</h2>
            <p className="text-[#5F5F5F] leading-relaxed">
              Hydrafacial is generally well tolerated, but like any skin treatment, it can carry some temporary effects, including:
            </p>
            <div className="flex flex-wrap gap-2">
              {sideEffectsList.map((effect, idx) => (
                <span key={idx} className="bg-red-50 text-red-800 text-xs font-semibold px-4 py-2 rounded-full border border-red-100">
                  {effect}
                </span>
              ))}
            </div>
            <p className="text-xs text-[#5F5F5F] leading-relaxed bg-[#F9F7F2] p-5 rounded-2xl border border-[#E9E2D6]">
              These effects are usually short-lived and tend to settle within a short time after the session. That said, individual reactions can vary depending on skin type, current skin condition, and the specific treatment protocol used. If you notice an unusual, severe, or persistent reaction after treatment — such as significant swelling, pain, or a reaction that doesn&apos;t improve — contact a healthcare professional rather than waiting it out.
            </p>
          </section>

          {/* COMPARISONS */}
          <section id="vs-other" className="scroll-mt-32 space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A]">Hydrafacial vs Other Acne Treatments</h2>
              <p className="text-[#5F5F5F] leading-relaxed">
                Hydrafacial and medical acne treatments generally serve different purposes, and it&apos;s important not to view them as interchangeable.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-[#5F5F5F]">
                <div className="border border-gray-100 p-5 rounded-2xl bg-[#FDFCF7] shadow-sm">
                  <h4 className="font-bold text-[#1A1A1A] mb-2">Medical Acne Treatment</h4>
                  <p className="leading-relaxed text-xs">Targets the underlying causes of acne, such as excess oil production, inflammation, or bacteria, and is generally the appropriate route for moderate-to-severe or persistent acne.</p>
                </div>
                <div className="border border-gray-100 p-5 rounded-2xl bg-[#FDFCF7] shadow-sm">
                  <h4 className="font-bold text-[#1A1A1A] mb-2">Chemical Peels</h4>
                  <p className="leading-relaxed text-xs">Use controlled chemical exfoliation and may be considered for certain types of congestion or pigmentation, depending on the peel type and skin condition.</p>
                </div>
                <div className="border border-gray-100 p-5 rounded-2xl bg-[#FDFCF7] shadow-sm">
                  <h4 className="font-bold text-[#1A1A1A] mb-2">Extraction-Based Treatments</h4>
                  <p className="leading-relaxed text-xs">Focus specifically on manually clearing visible congestion, similar to one component of Hydrafacial.</p>
                </div>
                <div className="border border-gray-100 p-5 rounded-2xl bg-[#FDFCF7] shadow-sm">
                  <h4 className="font-bold text-[#1A1A1A] mb-2">Laser-Based Treatments</h4>
                  <p className="leading-relaxed text-xs">Can address specific concerns like certain types of scarring or pigmentation, depending on the laser type and the skin&apos;s condition.</p>
                </div>
                <div className="border border-gray-100 p-5 rounded-2xl bg-[#FDFCF7] shadow-sm">
                  <h4 className="font-bold text-[#1A1A1A] mb-2">Microneedling</h4>
                  <p className="leading-relaxed text-xs">More commonly discussed in the context of certain scarring and texture concerns rather than active acne itself.</p>
                </div>
                <div className="border border-gray-100 p-5 rounded-2xl bg-[#FDFCF7] shadow-sm">
                  <h4 className="font-bold text-[#1A1A1A] mb-2">Acne Scar Treatments</h4>
                  <p className="leading-relaxed text-xs">A distinct category aimed at textural changes left behind by acne, not the active breakouts themselves.</p>
                </div>
              </div>
              <p className="text-xs text-[#5F5F5F]">
                Hydrafacial is not presented here as superior to medical acne treatment — for many forms of acne, medical management is the appropriate first step, and cosmetic facials play a supporting role at most. The right choice always depends on the type of acne, its severity, and your overall skin condition, which is best determined through a proper assessment rather than guesswork.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-sans font-bold text-[#1A1A1A]">Hydrafacial vs Chemical Peel for Acne</h3>
              <p className="text-[#5F5F5F] leading-relaxed">
                Both treatments are commonly asked about together, but they work differently and suit different situations.
              </p>
              <div className="overflow-x-auto border border-gray-200 rounded-2xl bg-white shadow-sm">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500">Feature</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500">Hydrafacial</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500">Chemical Peel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemicalPeelTable.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50/50">
                        <td className="p-4 text-sm font-bold text-[#1A1A1A]">{row.feat}</td>
                        <td className="p-4 text-sm text-[#5F5F5F] leading-relaxed">{row.hydra}</td>
                        <td className="p-4 text-sm text-[#5F5F5F] leading-relaxed">{row.peel}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#5F5F5F]">
                Neither treatment is universally “better” for acne — it depends entirely on your skin type, the nature of your acne, and your goals. For a deeper look at this comparison, see our dedicated{' '}
                <a href="/services/hydrafacial-vs-chemical-peel-dubai/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                  Hydrafacial vs Chemical Peel
                </a>{' '}
                page.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-sans font-bold text-[#1A1A1A]">Hydrafacial vs Acne Scar Treatment</h3>
              <p className="text-[#5F5F5F] leading-relaxed">
                It&apos;s worth repeating this distinction because it&apos;s one of the most common points of confusion: treating active acne is not the same as treating acne scars.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-[#5F5F5F]">
                <div className="border border-gray-200 rounded-xl p-4 bg-white">
                  <h5 className="font-bold text-[#1A1A1A] mb-1">Ice-pick scars</h5>
                  <p className="text-xs leading-relaxed">narrow, deep, pin-point-like scars</p>
                </div>
                <div className="border border-gray-200 rounded-xl p-4 bg-white">
                  <h5 className="font-bold text-[#1A1A1A] mb-1">Boxcar scars</h5>
                  <p className="text-xs leading-relaxed">broader, defined depressions with sharper edges</p>
                </div>
                <div className="border border-gray-200 rounded-xl p-4 bg-white">
                  <h5 className="font-bold text-[#1A1A1A] mb-1">Rolling scars</h5>
                  <p className="text-xs leading-relaxed">wider, shallower depressions that create an uneven, wave-like texture</p>
                </div>
                <div className="border border-gray-200 rounded-xl p-4 bg-white">
                  <h5 className="font-bold text-[#1A1A1A] mb-1">Pigmented marks</h5>
                  <p className="text-xs leading-relaxed">flat discoloration rather than textural change</p>
                </div>
              </div>
              <p className="text-sm text-[#5F5F5F] leading-relaxed">
                Hydrafacial is not designed as a scar-focused treatment. Genuine improvement in depressed or textured scarring typically requires a different, more targeted procedure, selected based on the specific scar type and skin condition. If acne scarring rather than active breakouts is your primary concern, our{' '}
                <a href="/services/acne-scar-treatment-dubai/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                  Acne Scar Treatment in Dubai
                </a>{' '}
                page covers this topic specifically.
              </p>
            </div>
          </section>

          {/* CANDIDATES */}
          <section id="candidates" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A]">Who Is a Good Candidate for Hydrafacial for Acne?</h2>
            <p className="text-[#5F5F5F] leading-relaxed">
              Generally speaking, people who may be reasonable candidates for a Hydrafacial-based approach to acne-prone skin include those with:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="bg-[#F9F7F2] p-4 rounded-xl border border-[#E9E2D6] text-center text-xs font-semibold text-[#1F5E4B]">Mild surface congestion</div>
              <div className="bg-[#F9F7F2] p-4 rounded-xl border border-[#E9E2D6] text-center text-xs font-semibold text-[#1F5E4B]">Blackheads</div>
              <div className="bg-[#F9F7F2] p-4 rounded-xl border border-[#E9E2D6] text-center text-xs font-semibold text-[#1F5E4B]">Whiteheads</div>
              <div className="bg-[#F9F7F2] p-4 rounded-xl border border-[#E9E2D6] text-center text-xs font-semibold text-[#1F5E4B]">A dull or rough-looking complexion without significant inflammation</div>
              <div className="bg-[#F9F7F2] p-4 rounded-xl border border-[#E9E2D6] text-center text-xs font-semibold text-[#1F5E4B]">Certain acne-prone skin types that are otherwise not currently inflamed or irritated</div>
            </div>
            <p className="text-xs text-[#5F5F5F] leading-relaxed">
              This list is general — actual candidacy has to be confirmed individually. Skin that looks similar from the outside can have very different underlying conditions, so a proper in-person assessment is the only reliable way to know if you&apos;re a good fit.
            </p>

            <h3 className="text-2xl font-sans font-bold text-[#1A1A1A] mt-10 mb-4">Who Should Seek Professional Acne Care?</h3>
            <p className="text-[#5F5F5F] leading-relaxed">
              Some situations call for a medical evaluation rather than (or before) a cosmetic facial treatment. Consider speaking with a healthcare professional if you&apos;re experiencing:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs text-[#5F5F5F]">
              <div className="border border-gray-200 p-4 rounded-xl">Painful acne</div>
              <div className="border border-gray-200 p-4 rounded-xl">Cystic acne</div>
              <div className="border border-gray-200 p-4 rounded-xl">Nodules under the skin</div>
              <div className="border border-gray-200 p-4 rounded-xl">Persistent inflammatory breakouts that don&apos;t seem to settle</div>
              <div className="border border-gray-200 p-4 rounded-xl">Acne that appears to be causing scarring</div>
              <div className="border border-gray-200 p-4 rounded-xl">Rapidly worsening breakouts</div>
              <div className="border border-gray-200 p-4 rounded-xl">Significant pigmentation developing after acne</div>
              <div className="border border-gray-200 p-4 rounded-xl">Acne that is affecting your confidence or day-to-day quality of life</div>
            </div>
            <p className="text-xs text-[#5F5F5F] leading-relaxed mt-4">
              This page cannot diagnose your specific situation — if any of the above applies to you, it&apos;s worth having a proper conversation with a clinician before deciding on any cosmetic treatment.
            </p>
          </section>

          {/* MEN VS WOMEN & CLIMATE */}
          <section id="men-women" className="scroll-mt-32 space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A] mb-6">Acne and Skin Type</h2>
              <p className="text-[#5F5F5F] leading-relaxed mb-6">
                Skin type plays a real role in how acne shows up and how it should be approached:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 text-sm text-[#5F5F5F]">
                <div className="border border-gray-200 rounded-xl p-5">
                  <h4 className="font-bold text-[#1A1A1A] mb-2">Oily Skin</h4>
                  <p className="text-xs leading-relaxed">Tends toward more visible congestion and shine, but still needs appropriate hydration to support a healthy barrier.</p>
                </div>
                <div className="border border-gray-200 rounded-xl p-5">
                  <h4 className="font-bold text-[#1A1A1A] mb-2">Dry Skin</h4>
                  <p className="text-xs leading-relaxed">Dry skin with acne can be more prone to irritation from harsh products, so gentler approaches are often preferred.</p>
                </div>
                <div className="border border-gray-200 rounded-xl p-5">
                  <h4 className="font-bold text-[#1A1A1A] mb-2">Combination</h4>
                  <p className="text-xs leading-relaxed">May need different care in different areas — for example, more oil control around the T-zone and more hydration elsewhere.</p>
                </div>
                <div className="border border-gray-200 rounded-xl p-5">
                  <h4 className="font-bold text-[#1A1A1A] mb-2">Sensitive</h4>
                  <p className="text-xs leading-relaxed">Generally requires a cautious, closely assessed approach to any exfoliation or extraction step.</p>
                </div>
                <div className="border border-gray-200 rounded-xl p-5">
                  <h4 className="font-bold text-[#1A1A1A] mb-2">Acne-Prone</h4>
                  <p className="text-xs leading-relaxed">In general benefits from consistent, non-aggressive care rather than harsh or inconsistent treatment.</p>
                </div>
              </div>
              <p className="text-xs text-[#5F5F5F] leading-relaxed mt-4">
                A common misconception is that oily or acne-prone skin should avoid moisturizing altogether. In reality, disrupting the skin barrier with overly aggressive products can sometimes worsen oil production and irritation — which is why hydration remains part of a balanced approach even for oily skin.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#FDFCF7] border border-[#E9E2D6] rounded-3xl p-8 space-y-4">
                <h4 className="text-xl font-bold text-[#1F5E4B] flex items-center gap-2">
                  <LucideIcons.Mars className="w-5 h-5" /> Hydrafacial for Acne in Men
                </h4>
                <p className="text-sm text-[#5F5F5F] leading-relaxed">
                  Men dealing with acne-prone skin often have a few additional considerations:
                </p>
                <ul className="space-y-2 text-xs text-[#5F5F5F]">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1F5E4B] rounded-full shrink-0" /> Shaving-related irritation, which can aggravate existing congestion or breakouts</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1F5E4B] rounded-full shrink-0" /> Higher oil production, which is common in male skin and can contribute to a congested appearance</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1F5E4B] rounded-full shrink-0" /> Congestion, particularly around areas affected by regular shaving</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1F5E4B] rounded-full shrink-0" /> Acne-prone skin that may respond differently to products marketed primarily toward other skin types</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1F5E4B] rounded-full shrink-0" /> Skincare after treatment, including adjusting shaving routines around treatment days to avoid unnecessary irritation</li>
                </ul>
                <p className="text-xs text-[#5F5F5F] leading-relaxed pt-2 border-t border-gray-100">
                  A skin assessment can help determine whether Hydrafacial fits into a broader skincare routine alongside shaving habits and grooming products.
                </p>
              </div>

              <div className="bg-[#FDFCF7] border border-[#E9E2D6] rounded-3xl p-8 space-y-4">
                <h4 className="text-xl font-bold text-[#1F5E4B] flex items-center gap-2">
                  <LucideIcons.Venus className="w-5 h-5" /> Hydrafacial for Acne in Women
                </h4>
                <p className="text-sm text-[#5F5F5F] leading-relaxed">
                  For women, acne-prone skin often involves a few specific factors:
                </p>
                <ul className="space-y-2 text-xs text-[#5F5F5F]">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1F5E4B] rounded-full shrink-0" /> Hormonal acne, which can flare around certain times of the month and often appears along the jawline or lower face</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1F5E4B] rounded-full shrink-0" /> Makeup and congestion, especially with daily makeup wear that can contribute to clogged pores if not properly removed</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1F5E4B] rounded-full shrink-0" /> Sensitive skin reactions to certain skincare or cosmetic products</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1F5E4B] rounded-full shrink-0" /> Skincare routines that may need adjusting around treatment sessions</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1F5E4B] rounded-full shrink-0" /> Jawline acne, which is frequently linked to hormonal patterns</li>
                </ul>
                <p className="text-xs text-[#5F5F5F] leading-relaxed pt-2 border-t border-gray-100">
                  If your acne appears cyclical, persistent, or clearly hormone-related, that&apos;s a pattern worth discussing with a doctor, since hormonal acne often requires a medical approach rather than cosmetic treatment alone.
                </p>
              </div>
            </div>
          </section>

          {/* DUBAI CLIMATE */}
          <section id="dubai-climate" className="scroll-mt-32 grid lg:grid-cols-2 gap-12 items-stretch bg-[#FDFCF7] border border-[#E9E2D6] rounded-3xl p-8 md:p-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-sans font-bold text-[#1A1A1A]">Hydrafacial for Acne in Dubai</h2>
              <p className="text-[#5F5F5F] leading-relaxed">
                Dubai&apos;s climate — heat, humidity, sun exposure, and air conditioning switching throughout the day — can be tough on acne-prone skin, often contributing to excess oil production, dehydration, and congestion at the same time. This is part of why Hydrafacial for acne in Dubai and general acne treatment in Dubai are such commonly searched terms.
              </p>
              <p className="text-[#5F5F5F] leading-relaxed">
                If you&apos;re specifically looking for a skin clinic in Dubai or a dermatology clinic in Dubai to assess acne-prone skin, it&apos;s worth choosing a provider who evaluates your skin condition before recommending any treatment — rather than one offering the same generic acne facial in Dubai package to every patient regardless of their skin type or acne severity. RamaCare Polyclinic is located in Jumeirah 1, easily accessible for patients across Dubai looking for both cosmetic skin support and, where appropriate, medical dermatology guidance under one roof.
              </p>

              <h4 className="font-bold text-[#1A1A1A] text-sm">How to Choose a Clinic for Acne Facial Treatment in Dubai</h4>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs text-[#5F5F5F]">
                <li className="flex items-center gap-1.5"><span className="w-1 bg-[#1F5E4B] h-1.5 rounded-full" /> Qualified professionals delivering the treatment</li>
                <li className="flex items-center gap-1.5"><span className="w-1 bg-[#1F5E4B] h-1.5 rounded-full" /> A proper skin assessment before treatment</li>
                <li className="flex items-center gap-1.5"><span className="w-1 bg-[#1F5E4B] h-1.5 rounded-full" /> Appropriate treatment selection</li>
                <li className="flex items-center gap-1.5"><span className="w-1 bg-[#1F5E4B] h-1.5 rounded-full" /> Clear hygiene and safety standards</li>
                <li className="flex items-center gap-1.5"><span className="w-1 bg-[#1F5E4B] h-1.5 rounded-full" /> Individualized treatment protocol</li>
                <li className="flex items-center gap-1.5"><span className="w-1 bg-[#1F5E4B] h-1.5 rounded-full" /> Realistic expectations communicated</li>
                <li className="flex items-center gap-1.5"><span className="w-1 bg-[#1F5E4B] h-1.5 rounded-full" /> Transparent pricing policies</li>
                <li className="flex items-center gap-1.5"><span className="w-1 bg-[#1F5E4B] h-1.5 rounded-full" /> Clear aftercare guidelines</li>
                <li className="flex items-center gap-1.5"><span className="w-1 bg-[#1F5E4B] h-1.5 rounded-full" /> No claims of a guaranteed acne cure</li>
              </ul>

              <div className="bg-red-50/40 border border-red-100 p-4 rounded-xl text-xs text-[#5F5F5F] leading-relaxed">
                <strong>Red Flags to Watch For:</strong> Be cautious of any clinic that claims Hydrafacial permanently cures acne, offers the exact same treatment to every patient, skips a skin assessment, pressures you into packages, or doesn&apos;t discuss contraindications.
              </div>
            </div>

            {/* Visual Treatment Room Card */}
            <div className="border border-gray-200 rounded-3xl p-4 bg-white shadow-md flex flex-col justify-center h-full min-h-[450px]">
              <img
                src="/images/ramacare-hydrafacial-treatment-room.jpg"
                alt="Aesthetic treatment room at RamaCare Polyclinic Dubai"
                className="w-full flex-grow object-cover rounded-2xl min-h-[380px]"
              />
              <p className="text-xs text-[#5F5F5F] leading-relaxed italic text-center mt-3 shrink-0">
                “Our aesthetic dermatology team in Jumeirah 1 prioritizes clinical skin health.”
              </p>
            </div>
          </section>

          {/* COST FACTOR */}
          <section className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-sans font-bold text-[#1A1A1A]">Hydrafacial Price for Acne in Dubai</h2>
            <p className="text-[#5F5F5F] leading-relaxed">
              Rather than quoting a fixed number, it&apos;s more useful to understand what typically affects pricing, since costs can vary meaningfully between patients and providers based on:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-[#5F5F5F]">
              <div className="border border-gray-200 rounded-xl p-4">The specific treatment protocol used for your skin</div>
              <div className="border border-gray-200 rounded-xl p-4">Whether a prior skin assessment is included</div>
              <div className="border border-gray-200 rounded-xl p-4">The number of sessions recommended for your goals</div>
              <div className="border border-gray-200 rounded-xl p-4">Any add-ons included as part of the treatment</div>
              <div className="border border-gray-200 rounded-xl p-4">The provider and clinic offering the service</div>
              <div className="border border-gray-200 rounded-xl p-4">Your individual skin requirements and treatment plan</div>
            </div>
            <p className="text-sm text-[#5F5F5F]">
              For current, accurate pricing information, visit our{' '}
              <a href="/services/hydrafacial-cost-dubai/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                Hydrafacial Price in Dubai
              </a>{' '}
              page or speak with our team directly.
            </p>
          </section>

          {/* WHY CHOOSE RAMACARE */}
          <section id="why-ramacare" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A]">Why Choose RamaCare Polyclinic?</h2>
            <p className="text-[#5F5F5F] leading-relaxed">
              RamaCare Polyclinic is a DHA-licensed healthcare clinic in Jumeirah 1, Dubai, offering aesthetic dermatology and facial treatments alongside broader medical services. When it comes to acne-prone skin, our approach centers on a few core principles:
            </p>
            <div className="w-full border border-gray-200 rounded-2xl overflow-hidden">
              {whyChooseUsPoints.map((item, idx) => (
                <div key={idx} className={`flex items-center gap-3 px-6 py-4 border-b border-gray-100 ${idx % 2 === 1 ? 'bg-[#F9F7F2]' : 'bg-white'}`}>
                  <LucideIcons.Award className="w-5 h-5 text-[#1F5E4B] shrink-0" />
                  <span className="text-sm text-[#5F5F5F] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#5F5F5F] leading-relaxed">
              We don&apos;t present Hydrafacial — or any single treatment — as a guaranteed fix for acne. Our focus is on understanding your skin first, and recommending an approach that&apos;s realistic and appropriate for you.
            </p>
          </section>

        </div>
      </div>

      {/* Editorial Layout: FAQ & Footer Content (Google Reviews portal will auto-inject right before this section) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="w-full space-y-20">

          {/* FAQ — accordion */}
          <section id="faqs" className="scroll-mt-32">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A] mb-8">Frequently Asked Questions</h2>
            <div className="w-full divide-y divide-gray-100 border-t border-b border-gray-100">
              {faqData.map((faq, idx) => (
                <div key={idx}>
                  <button onClick={() => toggleFaq(idx)} className="w-full py-5 text-left flex items-center gap-4 hover:bg-[#F9F7F2]/40 transition-colors px-2">
                    <span className="font-semibold text-[#1A1A1A] text-sm flex-1">{faq.q}</span>
                    <LucideIcons.ChevronDown className={`w-4 h-4 text-[#5F5F5F] transition-transform ${openFaq === idx ? 'transform rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === idx && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden bg-[#FDFCF7]/60">
                        <div className="p-4 text-sm text-[#5F5F5F] leading-relaxed border-t border-gray-50">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>

          {/* RELATED GUIDES */}
          <section className="border-t border-gray-200 pt-16">
            <h3 className="text-xl font-sans font-bold text-[#1A1A1A] mb-6">Related Skin &amp; Facial Treatment Guides</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { title: 'Hydrafacial in Dubai', desc: 'A full overview of the Hydrafacial treatment itself, including what it involves and general skin benefits beyond acne.', href: '/services/hydrafacial-dubai/' },
                { title: 'Acne Scar Treatment in Dubai', desc: 'Dedicated information on treating textural scarring left behind after acne has healed.', href: '/services/acne-scar-treatment-dubai/' },
                { title: 'Acne Treatment in Dubai', desc: 'A broader look at approaches to managing active acne beyond cosmetic facials.', href: '/services/acne-treatment-dubai/' },
                { title: 'Hydrafacial Price in Dubai', desc: 'What typically affects Hydrafacial pricing at our clinic.', href: '/services/hydrafacial-cost-dubai/' },
                { title: 'Hydrafacial vs Chemical Peel in Dubai', desc: 'A closer comparison for anyone deciding between the two treatments.', href: '/services/hydrafacial-vs-chemical-peel-dubai/' },
                { title: 'Aesthetic Dermatology in Dubai', desc: 'Our broader dermatology and skin treatment department.', href: '/services/aesthetic-dermatology-dubai/' },
                { title: 'Pigmentation Treatment in Dubai', desc: 'For concerns specifically related to pigmentation and discoloration, including post-acne marks.', href: '/services/pigmentation-dubai/' }
              ].map((guide, idx) => (
                <a key={idx} href={guide.href} className="block border border-gray-200 hover:border-[#1F5E4B] rounded-2xl p-5 bg-white transition-all hover:shadow-sm">
                  <h4 className="font-bold text-[#1A1A1A] text-sm mb-1.5 flex items-center justify-between">
                    {guide.title} <LucideIcons.ArrowUpRight className="w-4 h-4 text-[#1F5E4B]" />
                  </h4>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed">{guide.desc}</p>
                </a>
              ))}
            </div>
          </section>

          {/* MEDICAL DISCLAIMER */}
          <section className="bg-gray-50 border border-gray-100 rounded-3xl p-8 text-xs text-[#5F5F5F] leading-relaxed max-w-4xl">
            <h4 className="font-bold text-[#1A1A1A] mb-2 uppercase tracking-wide">Medical Disclaimer</h4>
            <p>
              Acne has multiple possible causes, including hormonal factors, genetics, bacteria, and skincare habits, and it can vary significantly from person to person. Hydrafacial is a cosmetic skin treatment and is not a guaranteed cure for acne. Treatment suitability depends on your individual skin condition and should be confirmed through an in-person assessment. Severe, persistent, painful, or worsening acne may require evaluation by a qualified healthcare professional. The information on this page is general and educational in nature and is not a substitute for individual medical advice or an in-person consultation.
            </p>
          </section>

          {/* BOOKING CALLOUT */}
          <section id="book-now" className="bg-[#1F5E4B] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4A574]/10 rounded-bl-full" />
            <div className="max-w-3xl space-y-6">
              <h2 className="text-2xl md:text-4xl font-sans font-bold">Book a Skin Consultation for Acne-Prone Skin in Dubai</h2>
              <p className="text-white/80 leading-relaxed text-sm">
                If you&apos;re dealing with congestion, blackheads, or acne-prone skin and want an honest assessment of whether Hydrafacial fits your skin, our team at RamaCare Polyclinic in Jumeirah 1 is here to help. During your consultation, we&apos;ll take the time to discuss:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 text-xs text-white/90">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4A574] rounded-full shrink-0" /> Your specific acne concerns and history</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4A574] rounded-full shrink-0" /> Your skin type and current condition</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4A574] rounded-full shrink-0" /> Your existing skincare routine</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4A574] rounded-full shrink-0" /> Whether Hydrafacial — or another approach — is appropriate</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4A574] rounded-full shrink-0" /> What results you can realistically expect</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4A574] rounded-full shrink-0" /> The treatment options available to support your skin</li>
              </ul>
              <p className="text-xs text-white/70 leading-relaxed pt-4 border-t border-white/10">
                There&apos;s no such thing as a treatment that works for everyone or a guaranteed acne cure — but there is a right starting point for your skin, and that begins with a proper conversation, not a generic package.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleBookAppointment}
                  className="inline-flex items-center justify-center gap-2 bg-[#D4A574] text-white px-7 py-3.5 rounded-xl font-bold hover:bg-[#c29665] transition-all text-sm shadow-md"
                >
                  Book your consultation
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/20 text-white px-7 py-3.5 rounded-xl font-bold hover:border-white transition-all text-sm"
                >
                  Reach out via WhatsApp
                </button>
              </div>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
}
