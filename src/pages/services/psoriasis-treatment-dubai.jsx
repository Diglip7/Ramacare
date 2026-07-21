import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../../../components/Layout';
import {
  Sparkles,
  ShieldCheck,
  Flame,
  Dna,
  CloudRain,
  Cigarette,
  Wine,
  Scale,
  Pill,
  Stethoscope,
  ScanLine,
  FileSearch,
  Microscope,
  SprayCan,
  Sun,
  Syringe,
  FlaskConical,
  Hand,
  Leaf,
  HeartPulse,
  AlertTriangle,
  ChevronDown,
  Phone,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Smile,
  ShieldOff,
  Droplets,
  Salad,
  Ban,
  ClipboardCheck,
} from 'lucide-react';

/* =====================================================================
   PSORIASIS TREATMENT DUBAI — original page build (not the shared
   ServicePageTemplate). Brand colors reused for consistency:
     teal  #1F5E4B   gold  #D4A574   ink  #1A1A1A   muted #5F5F5F
     cream #F5F1E8   panel #F9F7F2
   Everything else — layout, components, interactions — is new.
   ===================================================================== */

const SEO = {
  title: 'Psoriasis Treatment Dubai | RamaCare Polyclinic',
  metaDescription:
    'Struggling with psoriasis flare-ups? Get expert Psoriasis Treatment Dubai at RamaCare Polyclinic — DHA-licensed dermatologists. Book a consultation today.',
  canonical: 'https://ramacarepolyclinic.ae/psoriasis-treatment-dubai',
  keywords:
    'Psoriasis Treatment Dubai, Best Psoriasis Treatment Dubai, Psoriasis Specialist Dubai, Psoriasis Clinic Dubai, Scalp Psoriasis Treatment Dubai, Ayurvedic Psoriasis Treatment Dubai, Psoriasis Dermatologist Dubai',
};

const WHATSAPP_NUMBER = '971566597878';

/* ------------------------------- Data ------------------------------- */

const TYPES = [
  { icon: Flame, name: 'Plaque Psoriasis', tag: 'Most common', desc: 'Raised, red patches covered with silvery-white scales, typically on the elbows, knees, scalp, and lower back.' },
  { icon: Sparkles, name: 'Guttate Psoriasis', tag: 'Often post-infection', desc: 'Small, drop-shaped spots, often triggered by strep throat, and more common in children and young adults.' },
  { icon: Hand, name: 'Inverse Psoriasis', tag: 'Skin folds', desc: 'Smooth, red, shiny patches in underarms, groin, or under the breasts, without the typical scaling.' },
  { icon: FlaskConical, name: 'Pustular Psoriasis', tag: 'Less common', desc: 'White, pus-filled blisters surrounded by red skin, on the hands and feet or more widely across the body.' },
  { icon: AlertTriangle, name: 'Erythrodermic Psoriasis', tag: 'Rare & urgent', desc: 'Widespread redness and shedding of skin over large areas of the body; requires urgent medical attention.' },
  { icon: ScanLine, name: 'Scalp Psoriasis', tag: 'Often mistaken for dandruff', desc: 'Flaking, redness, and thick scaling on the scalp, extending to the hairline, forehead, and neck.' },
  { icon: Microscope, name: 'Nail Psoriasis', tag: 'Nail bed involvement', desc: 'Pitting, discoloration, thickening, or separation of the nail from the nail bed.' },
];

const SYMPTOMS = [
  'Red or discolored patches',
  'Thick, silvery scales',
  'Dry, cracked skin',
  'Itching, burning, soreness',
  'Thickened or pitted nails',
  'Swollen, stiff joints',
  'Cyclical flare-ups',
];

const CAUSES = [
  { icon: Dna, name: 'Genetics', desc: 'A family history of psoriasis increases your likelihood of developing it.' },
  { icon: ShieldCheck, name: 'Autoimmune response', desc: 'The immune system mistakenly attacks healthy skin cells, accelerating cell turnover.' },
  { icon: Flame, name: 'Skin injury', desc: 'Cuts, sunburn, or vaccinations can trigger new patches at the injury site (Koebner phenomenon).' },
  { icon: Microscope, name: 'Infections', desc: 'Particularly streptococcal infections, strongly linked to guttate psoriasis.' },
];

const RISK_FACTORS = [
  { icon: HeartPulse, name: 'Stress', desc: 'One of the most frequently reported flare-up triggers.' },
  { icon: Cigarette, name: 'Smoking', desc: 'Increases both risk of developing psoriasis and severity of flare-ups.' },
  { icon: Wine, name: 'Alcohol', desc: 'Can interfere with treatment effectiveness and worsen symptoms.' },
  { icon: Scale, name: 'Obesity', desc: 'Associated with more severe disease and reduced treatment response.' },
  { icon: CloudRain, name: 'Weather changes', desc: 'Cold, dry weather tends to worsen symptoms; sunlight can sometimes help.' },
  { icon: Pill, name: 'Certain medications', desc: 'Including lithium, some blood pressure medications, and antimalarial drugs.' },
];

const RED_FLAGS = [
  'Symptoms persisting more than a few weeks despite home care',
  'Itching or burning severe enough to disrupt sleep',
  'Lesions spreading or covering larger areas of the body',
  'New joint pain, stiffness, or swelling',
  'Flare-ups recurring despite over-the-counter treatments',
  'Skin symptoms affecting confidence, work, or social life',
];

const DIAGNOSIS_STEPS = [
  { icon: FileSearch, name: 'Medical History', desc: 'Symptom timeline, family history, and possible triggers.' },
  { icon: Stethoscope, name: 'Physical Exam', desc: 'Appearance, location, and pattern of skin lesions.' },
  { icon: ScanLine, name: 'Dermoscopy', desc: 'Magnified, non-invasive look at scale and vascular patterns.' },
  { icon: Microscope, name: 'Skin Biopsy', desc: 'A small sample examined to confirm diagnosis, if required.' },
  { icon: ShieldCheck, name: 'Differential Diagnosis', desc: 'Ruling out eczema, fungal infection, or seborrheic dermatitis.' },
];

const TREATMENTS = [
  { icon: ScanLine, name: 'Scalp Psoriasis Treatment', size: 'lg', desc: 'Medicated shampoos with salicylic acid or coal tar, targeted topicals, and scale-softening techniques for thicker scalp build-up.' },
  { icon: SprayCan, name: 'Topical Medications', size: 'lg', desc: 'Corticosteroids, Vitamin D analogues, calcineurin inhibitors, coal tar, salicylic acid, and moisturizers — first line for mild to moderate cases.' },
  { icon: Sun, name: 'Phototherapy', size: 'sm', desc: 'Controlled UV light exposure to slow skin cell turnover, carefully scheduled and monitored.' },
  { icon: Syringe, name: 'Systemic Medications', size: 'sm', desc: 'Oral or injectable options for moderate to severe cases or psoriatic arthritis.' },
  { icon: FlaskConical, name: 'Biologic Therapy', size: 'sm', desc: 'Targets specific immune pathways — an advanced option for chronic, treatment-resistant disease.' },
  { icon: Hand, name: 'Nail Psoriasis Care', size: 'sm', desc: 'Topical therapy and nail-bed-directed treatment, with guidance to protect nails from trauma.' },
  { icon: Leaf, name: 'Ayurvedic Supportive Care', size: 'sm', desc: 'Herbal and detox-focused therapies as a complement to — not a replacement for — dermatological care.' },
  { icon: HeartPulse, name: 'Lifestyle Counseling', size: 'sm', desc: 'Practical guidance on stress, diet, smoking, and alcohol to reduce flare-up frequency.' },
];

const WHY_US = [
  'DHA-Licensed Doctors',
  'Experienced Dermatology Team',
  'Personalized Treatment Plans',
  'Modern Facilities',
  'Evidence-Based Care',
  'Patient-Centered Approach',
  'Convenient Jumeirah 1 Location',
  'Comprehensive Follow-Up',
];

const BENEFITS = [
  { icon: TrendingUp, name: 'Better Symptom Control', desc: 'Catching flare-ups early often means they respond faster to treatment.' },
  { icon: ClipboardCheck, name: 'Reduced Flare-Up Frequency', desc: 'Consistent management helps extend periods of remission.' },
  { icon: Sparkles, name: 'Improved Skin Appearance', desc: 'Reduces scaling, redness, and visible plaques over time.' },
  { icon: Smile, name: 'Better Quality of Life', desc: 'Less itching, discomfort, and self-consciousness in daily activities.' },
  { icon: ShieldOff, name: 'Reduced Risk of Complications', desc: 'Including psoriatic arthritis and related metabolic conditions.' },
];

const PREVENTION_TIPS = [
  { icon: Droplets, text: 'Moisturize regularly, especially after bathing' },
  { icon: AlertTriangle, text: 'Identify and avoid your personal triggers' },
  { icon: HeartPulse, text: 'Practice stress management techniques' },
  { icon: Salad, text: 'Maintain a balanced, anti-inflammatory diet' },
  { icon: Ban, text: 'Avoid smoking' },
  { icon: Wine, text: 'Limit alcohol consumption' },
  { icon: SprayCan, text: 'Use gentle, fragrance-free skincare products' },
  { icon: Sun, text: 'Practice sensible sun protection' },
  { icon: ClipboardCheck, text: 'Follow your prescribed treatment plan consistently' },
];

/* Image slots — filenames/alt text match your SEO image recommendations doc.
   Drop real files into /public/images/ using these exact filenames and
   these placeholders will pick them up automatically. */
const IMAGES = {
  hero: { src: '/images/psoriasis-treatment-dubai-hero.jpg', alt: 'Dermatologist consulting patient for Psoriasis Treatment Dubai at RamaCare Polyclinic' },
  types: { src: '/images/types-of-psoriasis-diagram.jpg', alt: 'Diagram illustrating different types of psoriasis including plaque and scalp psoriasis' },
  diagnosis: { src: '/images/psoriasis-diagnosis-dermatologist-dubai.jpg', alt: 'Dermatologist performing skin examination as part of psoriasis diagnosis in Dubai' },
  treatment: { src: '/images/scalp-psoriasis-treatment-dubai-clinic.jpg', alt: 'Scalp psoriasis treatment Dubai session at RamaCare Polyclinic dermatology clinic' },
  team: { src: '/images/ramacare-polyclinic-dermatology-team-dubai.jpg', alt: 'RamaCare Polyclinic DHA-licensed dermatology team in Dubai' },
};

const FAQS = [
  { q: 'Is psoriasis curable?', a: 'There is currently no permanent cure for psoriasis, as it is a chronic autoimmune condition. However, with the right combination of treatments, most patients achieve significant symptom control and extended periods of remission.' },
  { q: 'Is psoriasis contagious?', a: 'No. Psoriasis is an autoimmune condition, not an infection, so it cannot be spread through skin contact, sharing towels, or close contact with someone who has it.' },
  { q: 'Can stress trigger psoriasis?', a: 'Yes. Stress is one of the most commonly reported triggers for psoriasis flare-ups, and managing stress is often an important part of a treatment plan.' },
  { q: 'Can psoriasis affect the scalp?', a: 'Yes, scalp psoriasis is common and can cause flaking, redness, and thick scale buildup. Our scalp psoriasis treatment Dubai protocols are designed to address this area effectively.' },
  { q: 'What foods help psoriasis?', a: "While no single diet cures psoriasis, an anti-inflammatory diet rich in vegetables, fruits, whole grains, and omega-3 fatty acids may help some patients reduce flare-up frequency." },
  { q: 'Does psoriasis return after treatment?', a: 'Psoriasis is a chronic condition that tends to cycle between flare-ups and remission. Treatment controls symptoms effectively, but ongoing management is usually needed.' },
  { q: 'Can children develop psoriasis?', a: "Yes, though it's less common than in adults. Guttate psoriasis, in particular, can appear in children and young adults, often following a bacterial infection." },
  { q: 'What treatments work best for psoriasis?', a: 'This depends on the type and severity of your condition. Mild cases often respond well to topical treatments, while moderate to severe cases may require phototherapy or systemic medications.' },
  { q: 'How long does treatment take to show results?', a: 'Topical treatments may show improvement within a few weeks, while phototherapy and systemic treatments can take several weeks to months. Consistency is key.' },
  { q: 'When should I see a dermatologist for psoriasis?', a: "If you notice persistent red, scaly patches, unexplained itching, or joint pain alongside skin symptoms, it's a good idea to book a consultation rather than self-treat." },
  { q: 'Is psoriasis the same as eczema?', a: 'No. Psoriasis is driven by immune system-related overproduction of skin cells, while eczema is typically linked to skin barrier issues and allergic triggers.' },
  { q: 'Can psoriasis cause joint pain?', a: 'Yes. Some patients develop psoriatic arthritis, which causes joint pain, stiffness, and swelling alongside skin symptoms. Early evaluation helps prevent joint damage.' },
  { q: 'Are Ayurvedic treatments effective for psoriasis?', a: 'Ayurvedic approaches may offer supportive benefits for some patients alongside conventional care. They are not a substitute for evidence-based treatment but can complement it.' },
  { q: 'Does diet alone cure psoriasis?', a: 'No. Diet can support overall skin health and may help manage flare-ups, but it is not a standalone cure and should be combined with medical treatment.' },
  { q: 'Where can I get reliable Psoriasis Treatment Dubai?', a: 'RamaCare Polyclinic offers DHA-licensed dermatology care with personalized, evidence-based treatment plans for all types of psoriasis.' },
];

/* --------------------------- Small building blocks --------------------------- */

function SectionTag({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#1F5E4B]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1F5E4B]">
      {children}
    </span>
  );
}

/* ================================ PAGE ================================ */

export default function PsoriasisTreatmentPage() {
  const [activeType, setActiveType] = useState(0);
  const [pickedSymptoms, setPickedSymptoms] = useState([]);
  const [openFaq, setOpenFaq] = useState(0);

  const toggleSymptom = (s) =>
    setPickedSymptoms((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  const waMessage =
    pickedSymptoms.length > 0
      ? `Hello RamaCare, I'm dealing with these psoriasis symptoms: ${pickedSymptoms.join(', ')}. Can I book a dermatology consultation?`
      : "Hello RamaCare, I'd like to book a consultation for Psoriasis Treatment Dubai.";

  // JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const medicalConditionSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: 'Psoriasis',
    alternateName: TYPES.map((t) => t.name),
    signOrSymptom: SYMPTOMS.map((s) => ({ '@type': 'MedicalSignOrSymptom', name: s })),
    riskFactor: RISK_FACTORS.map((r) => ({ '@type': 'MedicalRiskFactor', name: r.name })),
    possibleTreatment: TREATMENTS.map((t) => ({
      '@type': 'MedicalTherapy',
      name: t.name,
      description: t.desc,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ramacarepolyclinic.ae/' },
      { '@type': 'ListItem', position: 2, name: 'Dermatology', item: 'https://ramacarepolyclinic.ae/dermatology' },
      { '@type': 'ListItem', position: 3, name: 'Psoriasis Treatment Dubai', item: SEO.canonical },
    ],
  };

  const clinicSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'RamaCare Polyclinic',
    url: 'https://ramacarepolyclinic.ae/',
    logo: 'https://ramacarepolyclinic.ae/images/Logo.png',
    telephone: '+971566597878',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jumeirah 1, Ground Floor, Jumeirah Terrace Building',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
  };

  return (
    <Layout>
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.metaDescription} />
        <meta name="keywords" content={SEO.keywords} />
        <link rel="canonical" href={SEO.canonical} />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SEO.canonical} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      </Head>

      <div className="bg-white text-[#1A1A1A] antialiased">

        {/* ============================ HERO — diagonal split ============================ */}
        <section className="relative overflow-hidden bg-[#0F3B2E]">
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, #0F3B2E 0%, #1F5E4B 55%, #1F5E4B 100%)',
            }}
          />
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#D4A574]/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
           <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF]">
                <a href="/" className="hover:text-[#D4A574]">Home</a>
                <span aria-hidden="true">/</span>
                <a href="/services/dental-dubai" className="hover:text-[#D4A574]">Dental Services</a>
                <span aria-hidden="true">/</span>
                <span aria-current="page" className="text-[#FFFFFF]">Psoriasis Treatment Dubai</span>
                </nav>

            <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#D4A574]/40 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#D4A574]">
                  <ShieldCheck className="h-4 w-4" /> DHA-Licensed Dermatology
                </span>
                <h1 className="mt-6 max-w-2xl text-4xl font-black leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
                  Psoriasis Treatment Dubai — Clear Skin Starts With a Real Diagnosis
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
                  If your skin has been breaking out in red, scaly patches that just won't heal,
                  you don't have to keep guessing. Our DHA-licensed dermatology team builds a
                  personalized plan around your exact type, triggers, and lifestyle.
                </p>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#book"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A574] px-8 py-4 text-sm font-bold uppercase tracking-wide text-[#0F3B2E] shadow-lg transition-transform hover:-translate-y-0.5"
                  >
                    Book Free Consultation <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="tel:+971566597878"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4" /> Call Now
                  </a>
                </div>
              </div>

              {/* Hero image + floating stat cluster */}
              <div className="lg:col-span-4">
                <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                  <Image
                    src={IMAGES.hero.src}
                    alt={IMAGES.hero.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                {[
                  { k: '7', v: 'Psoriasis types treated' },
                  { k: '15', v: 'FAQs answered by our team' },
                  { k: 'DHA', v: 'Licensed facility' },
                  { k: '1:1', v: 'Personalized plans' },
                ].map((s) => (
                  <div key={s.v} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <p className="text-3xl font-black text-[#D4A574]">{s.k}</p>
                    <p className="mt-1 text-xs leading-snug text-white/70">{s.v}</p>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ WHY EARLY DIAGNOSIS — editorial split ============================ */}
        <section className="bg-white py-20 px-4">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionTag>Why It Matters</SectionTag>
              <h2 className="mt-4 text-3xl font-black leading-tight text-[#1A1A1A] sm:text-4xl">
                Early diagnosis changes the outcome
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="border-l-4 border-[#D4A574] pl-6 text-xl font-medium leading-relaxed text-[#1A1A1A]">
                "Psoriasis, while chronic, is very manageable with the right care — early diagnosis
                helps control flare-ups before they spread and lowers the risk of related
                complications such as psoriatic arthritis."
              </p>
              <p className="mt-6 text-base leading-relaxed text-[#5F5F5F]">
                At RamaCare Polyclinic in Jumeirah 1, Dubai, our DHA-licensed dermatology team
                combines evidence-based dermatology with lifestyle and skincare guidance — so your
                treatment plan actually fits your life, not the other way around.
              </p>
              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-[#F9F7F2] p-5">
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1F5E4B]" />
                <p className="text-sm text-[#5F5F5F]">
                  <strong className="text-[#1A1A1A]">Not contagious:</strong> psoriasis is
                  autoimmune, not infectious — you cannot catch it from touching someone or
                  sharing personal items.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ TYPES — selector + detail panel ============================ */}
        <section className="bg-[#F5F1E8] py-20 px-4">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <SectionTag>7 Types</SectionTag>
              <h2 className="mt-4 text-3xl font-black text-[#1A1A1A] sm:text-4xl">What Is Psoriasis?</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#5F5F5F]">
                An autoimmune condition that speeds up skin cell turnover, causing thick, scaly
                patches. It shows up differently from person to person — some patients experience
                more than one type at once.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-12">
              <div className="flex flex-wrap gap-3 lg:col-span-5 lg:flex-col">
                {TYPES.map((t, i) => {
                  const Icon = t.icon;
                  const active = activeType === i;
                  return (
                    <button
                      key={t.name}
                      onClick={() => setActiveType(i)}
                      className={`flex flex-1 items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all lg:flex-none ${
                        active
                          ? 'border-[#1F5E4B] bg-[#1F5E4B] text-white shadow-md'
                          : 'border-gray-200 bg-white text-[#1A1A1A] hover:border-[#1F5E4B]/40'
                      }`}
                    >
                      <Icon className={`h-5 w-5 flex-shrink-0 ${active ? 'text-[#D4A574]' : 'text-[#1F5E4B]'}`} />
                      <span className="text-sm font-bold">{t.name}</span>
                    </button>
                  );
                })}

                <div className="relative mt-2 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#1F5E4B]/5 lg:mt-4">
                  <Image
                    src={IMAGES.types.src}
                    alt={IMAGES.types.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeType}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.18 }}
                    className="h-full rounded-3xl bg-white p-8 shadow-sm"
                  >
                    <span className="inline-block rounded-full bg-[#D4A574]/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#D4A574]">
                      {TYPES[activeType].tag}
                    </span>
                    <h3 className="mt-4 text-2xl font-black text-[#1A1A1A]">{TYPES[activeType].name}</h3>
                    <p className="mt-4 text-base leading-relaxed text-[#5F5F5F]">{TYPES[activeType].desc}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ SYMPTOMS — chip cloud ============================ */}
        <section className="bg-white py-20 px-4">
          <div className="mx-auto max-w-5xl text-center">
            <SectionTag>Recognize the Signs</SectionTag>
            <h2 className="mt-4 text-3xl font-black text-[#1A1A1A] sm:text-4xl">Symptoms of Psoriasis</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#5F5F5F]">
              Tap what applies to you — it helps frame the conversation when you reach out.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {SYMPTOMS.map((s) => {
                const picked = pickedSymptoms.includes(s);
                return (
                  <button
                    key={s}
                    onClick={() => toggleSymptom(s)}
                    className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                      picked
                        ? 'border-[#1F5E4B] bg-[#1F5E4B] text-white'
                        : 'border-gray-200 bg-[#F9F7F2] text-[#1A1A1A] hover:border-[#1F5E4B]/40'
                    }`}
                  >
                    {picked && <CheckCircle2 className="mr-1.5 inline h-4 w-4" />}
                    {s}
                  </button>
                );
              })}
            </div>

            <AnimatePresence>
              {pickedSymptoms.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mx-auto mt-8 max-w-md overflow-hidden"
                >
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-[#1F5E4B] px-6 py-4 text-sm font-bold text-white shadow-md"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Discuss These {pickedSymptoms.length} Symptoms With a Dermatologist
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* ============================ CAUSES + RISK FACTORS — contrast columns ============================ */}
        <section className="grid bg-[#F5F1E8] py-20 px-4 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-lg px-2">
            <SectionTag>Root Causes</SectionTag>
            <h2 className="mt-4 text-2xl font-black text-[#1A1A1A]">What Causes Psoriasis</h2>
            <p className="mt-3 text-sm text-[#5F5F5F]">
              A multifactorial autoimmune disease — a mix of genetic and environmental factors.
            </p>
            <div className="mt-6 space-y-3">
              {CAUSES.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={c.name} className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1A1A1A]">{c.name}</h4>
                      <p className="mt-0.5 text-xs leading-relaxed text-[#5F5F5F]">{c.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mx-auto mt-14 w-full max-w-lg px-2 lg:mt-0">
            <SectionTag>Flare-Up Triggers</SectionTag>
            <h2 className="mt-4 text-2xl font-black text-[#1A1A1A]">Risk Factors to Watch</h2>
            <p className="mt-3 text-sm text-[#5F5F5F]">
              Triggers vary between individuals — identifying your pattern is key.
            </p>
            <div className="mt-6 space-y-3">
              {RISK_FACTORS.map((r) => {
                const Icon = r.icon;
                return (
                  <div key={r.name} className="flex items-start gap-4 rounded-2xl bg-[#1F5E4B] p-4 shadow-sm">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#D4A574]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{r.name}</h4>
                      <p className="mt-0.5 text-xs leading-relaxed text-white/70">{r.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================ WHEN TO SEE A DOCTOR — bold banner ============================ */}
        <section className="bg-[#0F3B2E] py-20 px-4 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <AlertTriangle className="mx-auto h-10 w-10 text-[#D4A574]" />
            <h2 className="mt-4 text-3xl font-black">When Should You See a Doctor?</h2>
            <p className="mt-3 text-white/70">Self-treating the wrong way can make symptoms worse. Here's when to stop waiting:</p>
            <div className="mt-10 grid gap-3 text-left sm:grid-cols-2">
              {RED_FLAGS.map((f) => (
                <div key={f} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
                  <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#D4A574]" />
                  <span className="text-sm leading-relaxed text-white/85">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ DIAGNOSIS — connected timeline ============================ */}
        <section className="bg-white py-20 px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <SectionTag>Our Process</SectionTag>
              <h2 className="mt-4 text-3xl font-black text-[#1A1A1A] sm:text-4xl">Diagnosis of Psoriasis</h2>
              <p className="mt-4 text-lg text-[#5F5F5F]">A careful, evidence-based process — not guesswork.</p>
            </div>

            <div className="relative grid gap-8 sm:grid-cols-5">
              <div className="absolute left-0 right-0 top-6 hidden h-px bg-gray-200 sm:block" />
              {DIAGNOSIS_STEPS.map((d, i) => {
                const Icon = d.icon;
                return (
                  <div key={d.name} className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#1F5E4B] text-white shadow-md">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-4 text-sm font-bold text-[#1A1A1A]">{d.name}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-[#5F5F5F]">{d.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="relative mx-auto mt-14 aspect-[21/9] w-full max-w-4xl overflow-hidden rounded-3xl shadow-sm">
              <Image
                src={IMAGES.diagnosis.src}
                alt={IMAGES.diagnosis.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ============================ TREATMENT — bento mosaic ============================ */}
        <section className="bg-[#F5F1E8] py-20 px-4">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <SectionTag>Treatment Options</SectionTag>
              <h2 className="mt-4 text-3xl font-black text-[#1A1A1A] sm:text-4xl">
                Built Around Your Type, Not a Generic Protocol
              </h2>
              <p className="mt-4 text-lg text-[#5F5F5F]">
                What works for plaque psoriasis on the elbows isn't right for scalp or nail involvement.
              </p>
            </div>

            <div className="relative mb-10 aspect-[21/8] w-full overflow-hidden rounded-3xl shadow-sm">
              <Image
                src={IMAGES.treatment.src}
                alt={IMAGES.treatment.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {TREATMENTS.map((t) => {
                const Icon = t.icon;
                const spanClass = t.size === 'lg' ? 'sm:col-span-2' : '';
                return (
                  <div
                    key={t.name}
                    className={`${spanClass} rounded-3xl border border-gray-150 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md`}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1F5E4B]/10 text-[#1F5E4B]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-4 text-base font-bold text-[#1A1A1A]">{t.name}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-[#5F5F5F]">{t.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================ BENEFITS OF EARLY TREATMENT — icon row ============================ */}
        <section className="bg-white py-20 px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <SectionTag>Why Not Wait</SectionTag>
              <h2 className="mt-4 text-3xl font-black text-[#1A1A1A] sm:text-4xl">
                Benefits of Early Treatment
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#5F5F5F]">
                Psoriasis management works best as an ongoing, proactive process — not something
                addressed only during severe flare-ups.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {BENEFITS.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.name} className="rounded-2xl border border-gray-100 p-6 text-center shadow-sm">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4A574]/15 text-[#D4A574]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="mt-4 text-sm font-bold text-[#1A1A1A]">{b.name}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-[#5F5F5F]">{b.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================ PREVENTION & SELF-CARE — checklist ============================ */}
        <section className="bg-[#F5F1E8] py-20 px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <SectionTag>Day-to-Day</SectionTag>
              <h2 className="mt-4 text-3xl font-black text-[#1A1A1A] sm:text-4xl">
                Prevention &amp; Self-Care Tips
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#5F5F5F]">
                Small, consistent habits often make a bigger long-term difference than occasional
                intensive treatment — alongside, not instead of, your prescribed plan.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {PREVENTION_TIPS.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.text} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold text-[#1A1A1A]">{p.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================ WHY CHOOSE US — stat strip ============================ */}
        <section className="bg-white py-20 px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <SectionTag>Our Promise</SectionTag>
              <h2 className="mt-4 text-3xl font-black text-[#1A1A1A] sm:text-4xl">
                Why Choose RamaCare Polyclinic
              </h2>
            </div>

            <div className="relative mb-10 aspect-[21/8] w-full overflow-hidden rounded-3xl shadow-sm">
              <Image
                src={IMAGES.team.src}
                alt={IMAGES.team.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {WHY_US.map((w) => (
                <div key={w} className="rounded-2xl bg-[#F9F7F2] p-5 text-center">
                  <CheckCircle2 className="mx-auto h-6 w-6 text-[#1F5E4B]" />
                  <p className="mt-3 text-sm font-bold leading-snug text-[#1A1A1A]">{w}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ FAQ — numbered two-column accordion ============================ */}
        <section className="bg-[#F5F1E8] py-20 px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <SectionTag>FAQ</SectionTag>
              <h2 className="mt-4 text-3xl font-black text-[#1A1A1A] sm:text-4xl">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {FAQS.map((f, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={f.q} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="flex w-full items-center gap-4 p-5 text-left"
                    >
                      <span
                        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-black ${
                          isOpen ? 'bg-[#1F5E4B] text-white' : 'bg-[#1F5E4B]/10 text-[#1F5E4B]'
                        }`}
                      >
                        {idx + 1}
                      </span>
                      <span className="flex-1 text-sm font-bold text-[#1A1A1A] sm:text-base">{f.q}</span>
                      <ChevronDown className={`h-5 w-5 flex-shrink-0 text-[#5F5F5F] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="border-t border-gray-100 px-5 pb-5 pt-3 pl-[3.25rem] text-sm leading-relaxed text-[#5F5F5F]">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================ CTA / CONCLUSION ============================ */}
        <section id="book" className="bg-[#1F5E4B] py-20 px-4 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black sm:text-4xl">Start Your Psoriasis Treatment Journey</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/85">
              Psoriasis can feel frustrating and unpredictable, but it doesn't have to control your
              life. With an accurate diagnosis and a plan built around your specific triggers, most
              patients see real, lasting improvement.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello RamaCare, I'd like to book a consultation for Psoriasis Treatment Dubai.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A574] px-8 py-4 text-sm font-bold uppercase tracking-wide text-[#0F3B2E] shadow-lg"
              >
                <MessageCircle className="h-4 w-4" /> Book on WhatsApp
              </a>
              <a
                href="tel:+971566597878"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> +971 56 659 7878
              </a>
            </div>
            <div className="mx-auto mt-10 h-px w-16 bg-white/30" />
            <p className="mx-auto mt-6 max-w-lg text-xs italic text-white/60">
              This article is intended for general educational purposes and does not replace
              professional medical advice. Please consult a qualified dermatologist for diagnosis
              and treatment tailored to your individual condition.
            </p>
          </div>
        </section>

      </div>
    </Layout>
  );
}