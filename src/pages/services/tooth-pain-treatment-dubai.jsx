import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../../../components/Layout';
import {
  ShieldCheck,
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  AlertTriangle,
  Zap,
  CircleDot,
  Clock,
  Utensils,
  Thermometer,
  Bug,
  AlertCircle,
  Activity,
  Hammer,
  Wrench,
  ShieldAlert,
  Frown,
  Moon,
  Wind,
  Sparkles,
  FileSearch,
  Stethoscope,
  ScanLine,
  Box,
  Droplet,
  Syringe,
  XCircle,
  Pill,
  Crown,
  Siren,
} from 'lucide-react';

/* =====================================================================
   TOOTH PAIN TREATMENT DUBAI — original page build (not the shared
   ServicePageTemplate, and a different layout language from the
   psoriasis page). Brand tokens reused for consistency:
     teal       #1F5E4B   dark teal  #0F3B2E   gold  #D4A574
     ink        #1A1A1A   muted      #5F5F5F
     cream      #F5F1E8   panel      #F9F7F2   urgent #C1443B
   Layout structure, components, and interactions below are new.
   ===================================================================== */

const SEO = {
  title: 'Tooth Pain Treatment Dubai | RamaCare Polyclinic',
  metaDescription:
    'Struggling with a toothache? Get expert Tooth Pain Treatment Dubai at RamaCare Polyclinic — same-day appointments with DHA-licensed dentists. Book today.',
  canonical: 'https://ramacarepolyclinic.ae/tooth-pain-treatment-dubai',
  keywords:
    'Tooth Pain Treatment Dubai, Toothache Treatment Dubai, Emergency Dentist Dubai, Root Canal Treatment Dubai, Wisdom Tooth Pain Dubai, Dental Pain Relief Dubai, Best Dentist Dubai, Family Dental Clinic Dubai',
};

const WHATSAPP_NUMBER = '971566597878';

/* Image slots — filenames/alt text match your SEO image recommendations doc.
   Drop real files into /public/images/ using these exact filenames. */
const IMAGES = {
  hero: { src: '/images/', alt: 'Tooth Pain Treatment Dubai - dentist examining patient at RamaCare Polyclinic' },
  causes: { src: '/images/', alt: 'Illustration showing common causes of tooth pain including cavities and gum disease' },
  diagnosis: { src: '/images/', alt: 'Dental X-ray being reviewed to diagnose tooth pain at Dubai clinic' },
  treatment: { src: '/images/', alt: 'Root canal and filling treatment procedure for tooth pain relief in Dubai' },
  team: { src: '/images/', alt: 'Friendly RamaCare Polyclinic dental team providing family dental care in Dubai' },
};

/* ------------------------------- Data ------------------------------- */

const PAIN_TYPES = [
  { icon: Zap, name: 'Sharp Pain', desc: 'A sudden, stabbing sensation, often triggered by biting down or by hot and cold foods. Can indicate a cracked tooth, deep cavity, or exposed nerve.' },
  { icon: CircleDot, name: 'Dull, Aching Pain', desc: 'A constant, low-level discomfort that may point to gum inflammation, a developing infection, or teeth grinding (bruxism).' },
  { icon: Activity, name: 'Throbbing, Constant Pain', desc: 'Frequently associated with an infected tooth nerve (pulpitis) or a dental abscess, and often gets worse when lying down.' },
  { icon: Clock, name: 'Intermittent Pain', desc: 'Pain that comes and goes, which can still signal a real problem even if it seems to resolve on its own between episodes.' },
  { icon: Utensils, name: 'Pain While Chewing', desc: 'Usually linked to a cracked tooth, loose filling, or an infection at the tooth root.' },
  { icon: Thermometer, name: 'Temperature Sensitivity', desc: 'Sharp or lingering pain when consuming hot, cold, or sweet foods, often related to worn enamel, gum recession, or a cavity.' },
];

const CAUSES = [
  { icon: Bug, name: 'Tooth Decay (Cavities)', desc: 'Bacterial acid erodes enamel and dentin, reaching the sensitive inner layers of the tooth.' },
  { icon: AlertCircle, name: 'Dental Abscess', desc: 'A pocket of infection, usually from untreated decay or trauma, causing severe, throbbing pain and swelling.' },
  { icon: Activity, name: 'Gum Disease', desc: 'Gingivitis or periodontitis can cause pain, sensitivity, and even tooth mobility.' },
  { icon: Hammer, name: 'Cracked Tooth', desc: 'Fractures, sometimes invisible to the eye, can expose inner tooth layers and nerves.' },
  { icon: Wrench, name: 'Worn or Damaged Fillings', desc: 'Old restorations can loosen or crack, allowing bacteria to re-enter the tooth.' },
  { icon: ShieldAlert, name: 'Tooth Fracture', desc: 'Often caused by trauma, biting hard objects, or untreated decay weakening the tooth structure.' },
  { icon: Frown, name: 'Impacted Wisdom Tooth', desc: "A wisdom tooth that hasn't fully erupted can press against neighboring teeth, causing significant discomfort." },
  { icon: Thermometer, name: 'Tooth Sensitivity', desc: 'Exposed dentin or receding gums can cause sharp pain triggered by temperature or sweetness.' },
  { icon: Moon, name: 'Bruxism (Teeth Grinding)', desc: 'Chronic grinding, often during sleep, wears down enamel and stresses the jaw joints and teeth.' },
  { icon: Wind, name: 'Sinus-Related Tooth Pain', desc: 'Sinus infections can create pressure that mimics pain in the upper back teeth.' },
  { icon: Sparkles, name: 'Orthodontic Discomfort', desc: 'Mild, temporary tooth pain is common after braces adjustments or aligner changes.' },
];

const SYMPTOMS_TABLE = [
  { symptom: 'Sharp, sudden pain', indication: 'Cavity, crack, or nerve exposure', level: 'moderate' },
  { symptom: 'Throbbing pain', indication: 'Infection or abscess', level: 'urgent' },
  { symptom: 'Swelling (face or gums)', indication: 'Spreading infection', level: 'urgent' },
  { symptom: 'Fever', indication: 'Systemic response to infection', level: 'urgent' },
  { symptom: 'Bad breath', indication: 'Bacterial buildup, decay, or gum disease', level: 'mild' },
  { symptom: 'Bleeding gums', indication: 'Gum disease or trauma', level: 'moderate' },
  { symptom: 'Difficulty chewing', indication: 'Structural damage or infection', level: 'moderate' },
  { symptom: 'Facial swelling', indication: 'Advanced infection requiring urgent care', level: 'urgent' },
  { symptom: 'Hot/cold sensitivity', indication: 'Enamel wear, decay, or exposed dentin', level: 'mild' },
  { symptom: 'Jaw discomfort', indication: 'Bruxism, TMJ issues, or wisdom tooth pressure', level: 'moderate' },
];

const LEVEL_STYLES = {
  urgent: 'bg-[#C1443B]/10 text-[#C1443B]',
  moderate: 'bg-[#D4A574]/15 text-[#8A6A3F]',
  mild: 'bg-[#1F5E4B]/10 text-[#1F5E4B]',
};

const EMERGENCY_SIGNS = [
  'Severe pain that persists for more than 24–48 hours',
  'Visible swelling of the face, gums, or jaw',
  'Pus discharge or a foul taste suggesting infection',
  'A broken, chipped, or knocked-out tooth',
  'Dental trauma from an accident or injury',
  'Fever accompanying tooth or gum pain',
  'Difficulty opening your mouth fully',
  "Persistent bleeding that doesn't stop with gentle pressure",
  'Any tooth injury following a fall, sports accident, or collision',
];

const DIAGNOSIS_STEPS = [
  { icon: Stethoscope, name: 'Dental Examination', desc: 'A visual and physical inspection of the affected tooth, gums, and surrounding tissue.' },
  { icon: FileSearch, name: 'Medical History Review', desc: 'Understanding your dental and general health history, medications, and prior treatments.' },
  { icon: ScanLine, name: 'Digital X-Rays', desc: 'Imaging to detect decay, bone loss, abscesses, or fractures not visible during a clinical exam.' },
  { icon: Utensils, name: 'Bite Assessment', desc: 'Checking how your teeth align and make contact, which can reveal pressure-related pain.' },
  { icon: Activity, name: 'Gum Examination', desc: 'Measuring gum pocket depth and checking for signs of periodontal disease.' },
  { icon: Zap, name: 'Pulp Vitality Testing', desc: "Assessing whether the tooth's nerve is alive, damaged, or infected." },
  { icon: Box, name: 'Advanced Imaging', desc: 'In complex cases, 3D imaging may be used to evaluate root structure or impacted teeth.' },
];

const TREATMENTS = [
  { icon: Droplet, name: 'Dental Fillings', desc: "Removes decayed tissue and restores the tooth's structure with a durable filling material, halting further decay." },
  { icon: Syringe, name: 'Root Canal Treatment', desc: 'Removes infected pulp tissue, disinfects the canal, and seals it to preserve the natural tooth rather than extracting it.' },
  { icon: XCircle, name: 'Tooth Extraction', desc: 'A last resort when a tooth is too damaged to save, followed by discussion of replacement options like implants or bridges.' },
  { icon: Frown, name: 'Wisdom Tooth Management', desc: 'Monitoring, treatment, or surgical removal of impacted or partially erupted wisdom teeth causing pain or crowding.' },
  { icon: Pill, name: 'Antibiotics (When Indicated)', desc: 'Prescribed alongside dental treatment for spreading infections — not a substitute for definitive treatment.' },
  { icon: Activity, name: 'Gum Disease Treatment', desc: 'Deep cleaning (scaling and root planing) and ongoing periodontal care address infection and inflammation.' },
  { icon: Crown, name: 'Dental Crowns', desc: 'Protects and restores teeth that are cracked, heavily filled, or weakened after root canal treatment.' },
  { icon: Siren, name: 'Emergency Dental Care', desc: 'Urgent evaluation and same-day management for sudden, severe pain, trauma, or swelling.' },
  { icon: ShieldCheck, name: 'Pain Management', desc: 'Appropriate pain relief measures keep patients comfortable while the underlying issue is treated.' },
  { icon: Sparkles, name: 'Preventive Dental Care', desc: 'Cleanings, sealants, and patient education to reduce the likelihood of future toothaches.' },
];

const DELAY_RISKS = [
  'Hidden infections can spread to the jawbone or surrounding tissue',
  'Untreated decay tends to worsen, often requiring more invasive treatment later',
  'Pain may return more severely, sometimes as a dental emergency',
  'Early-stage problems that could have been treated conservatively may progress to requiring extraction',
];

const PREVENTION_TIPS = [
  'Brush twice daily with fluoride toothpaste',
  'Floss regularly to remove plaque between teeth',
  'Attend routine dental checkups every six months',
  'Maintain a balanced, low-sugar diet',
  'Limit sugary and acidic foods and drinks',
  'Wear a mouthguard during contact sports',
  'Avoid smoking and tobacco use',
  'Treat cavities early, before they progress',
];

const WHY_US = [
  'DHA-Licensed Dentists',
  'Experienced Dental Team',
  'Modern Digital Diagnostics',
  'Personalized Treatment Plans',
  'Comfortable Patient Experience',
  'Family-Friendly Care',
  'Advanced Dental Technology',
  'Convenient Dubai Location',
  'Comprehensive Follow-Up Care',
];

const FAQS = [
  { q: 'What causes severe tooth pain?', a: 'Severe tooth pain is most often caused by deep decay, a dental abscess, a cracked tooth, or advanced gum disease. A dental examination is needed to confirm the exact cause.' },
  { q: 'Can tooth pain disappear without treatment?', a: "Pain can temporarily subside, but this doesn't mean the underlying issue has resolved. In many cases, it signals the nerve has died while infection continues underneath." },
  { q: 'Do I always need a root canal for tooth pain?', a: 'Not always. Root canal treatment is only necessary when the tooth\'s nerve is infected or damaged. Many cases are resolved with fillings, gum treatment, or other conservative options.' },
  { q: 'When is tooth extraction necessary?', a: 'Extraction is generally a last resort, used when a tooth is too damaged or infected to be restored through other treatments.' },
  { q: 'Is wisdom tooth pain dangerous?', a: "Wisdom tooth pain itself isn't always dangerous, but impacted wisdom teeth can lead to infection, crowding, or cyst formation if left unaddressed." },
  { q: 'What should I do before visiting a dentist for tooth pain?', a: 'You can rinse gently with warm salt water and take over-the-counter pain relief as directed, but this is only temporary support — it doesn\'t replace professional treatment.' },
  { q: 'Can gum disease cause tooth pain?', a: 'Yes. Gum disease can cause inflammation, sensitivity, and even tooth mobility, which may present as ongoing dental pain.' },
  { q: 'Are antibiotics enough to treat a tooth infection?', a: "Antibiotics can help control the spread of infection, but they don't address the underlying dental problem. Definitive treatment is usually still required." },
  { q: 'How long does tooth pain treatment take?', a: 'This depends on the cause. A simple filling may take one visit, while root canal treatment or wisdom tooth management may require multiple appointments.' },
  { q: 'When should I seek emergency dental care?', a: 'Seek emergency care immediately if you have severe swelling, fever, uncontrolled bleeding, or trauma to a tooth.' },
  { q: 'Is tooth sensitivity the same as tooth pain?', a: 'Not exactly. Tooth sensitivity is usually milder and temperature-triggered, while tooth pain can be more constant or severe.' },
  { q: 'Can sinus problems cause tooth pain?', a: "Yes, sinus infections can create pressure that's felt in the upper back teeth, sometimes mimicking a toothache." },
  { q: 'Is it normal to have tooth pain after a filling?', a: 'Mild sensitivity after a filling is common and usually temporary. Persistent or worsening pain should be evaluated by your dentist.' },
  { q: 'Can children experience the same tooth pain causes as adults?', a: 'Children can experience cavities, gum irritation, and eruption-related discomfort, which is why routine visits to a family dental clinic are important.' },
  { q: 'How can I prevent tooth pain in the future?', a: 'Consistent brushing, flossing, routine dental checkups, and a low-sugar diet significantly reduce the risk of developing painful dental conditions.' },
];

/* --------------------------- Small building blocks --------------------------- */

function SectionTag({ children, tone = 'teal' }) {
  const tones = {
    teal: 'bg-[#1F5E4B]/10 text-[#1F5E4B]',
    gold: 'bg-[#D4A574]/15 text-[#8A6A3F]',
    light: 'bg-white/10 text-white',
  };
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest ${tones[tone]}`}>
      {children}
    </span>
  );
}
/* ================================ PAGE ================================ */

export default function ToothPainTreatmentPage() {
  const [activePain, setActivePain] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ramacarepolyclinic.ae/' },
      { '@type': 'ListItem', position: 2, name: 'Dental Services', item: 'https://ramacarepolyclinic.ae/dental-services-dubai' },
      { '@type': 'ListItem', position: 3, name: 'Tooth Pain Treatment Dubai', item: SEO.canonical },
    ],
  };

  const medicalConditionSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: 'Tooth Pain (Odontalgia)',
    alternateName: PAIN_TYPES.map((p) => p.name),
    signOrSymptom: SYMPTOMS_TABLE.map((s) => ({ '@type': 'MedicalSignOrSymptom', name: s.symptom })),
    riskFactor: CAUSES.map((c) => ({ '@type': 'MedicalRiskFactor', name: c.name })),
    possibleTreatment: TREATMENTS.map((t) => ({
      '@type': 'MedicalTherapy',
      name: t.name,
      description: t.desc,
    })),
  };

  const dentistSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'RamaCare Polyclinic — Dental Services',
    url: SEO.canonical,
    telephone: '+971566597878',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jumeirah 1, Ground Floor, Jumeirah Terrace Building',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
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

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: SEO.title,
    url: SEO.canonical,
    description: SEO.metaDescription,
    reviewedBy: {
      '@type': 'Dentist',
      name: 'RamaCare Polyclinic Dental Team',
    },
    author: {
      '@type': 'MedicalOrganization',
      name: 'RamaCare Polyclinic Editorial Team',
      url: 'https://ramacarepolyclinic.ae',
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      </Head>

      <div className="bg-white text-[#1A1A1A] antialiased">

        {/* ============================ HERO — centered copy + framed image ============================ */}
        <section className="bg-[#F5F1E8] py-16 px-4 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5F5F5F]">
                <a href="/" className="hover:text-[#1F5E4B]">Home</a>
                <span aria-hidden="true">/</span>
                <a href="/services/dental-dubai" className="hover:text-[#1F5E4B]">Dental Services</a>
                <span aria-hidden="true">/</span>
                <span aria-current="page" className="text-[#1F5E4B]">Tooth Pain Treatment Dubai</span>
             </nav>

            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <SectionTag>DHA-Licensed Dental Care</SectionTag>
                <h1 className="mt-5 text-4xl font-black leading-[1.1] text-[#1A1A1A] sm:text-5xl">
                  Tooth Pain Treatment Dubai
                  <span className="mt-2 block text-2xl font-bold text-[#1F5E4B] sm:text-3xl">
                    Fast Relief. Clear Diagnosis. Lasting Care.
                  </span>
                </h1>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#5F5F5F]">
                  If you're searching for reliable Tooth Pain Treatment Dubai, you're probably
                  dealing with discomfort right now — and you want answers you can trust, not
                  just a quick fix. Tooth pain is one of the most common reasons people visit a
                  dentist, and it's also one of the easiest problems to make worse by waiting. A
                  toothache is your body's way of signaling that something isn't right, whether
                  it's a small cavity, an infected nerve, or a cracked tooth that needs attention
                  before it becomes a bigger problem.
                </p>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-[#5F5F5F]">
                  At RamaCare Polyclinic in Dubai, our dental team sees patients every week who
                  arrive in pain, unsure of the cause, and unsure of what to do next. That
                  uncertainty is normal — but it's also exactly why timely diagnosis matters.
                  Ignoring a toothache, or simply masking it with painkillers, can allow an
                  underlying infection to spread, sometimes affecting the jaw, gums, or even
                  general health. This guide walks you through what causes tooth pain, when it's
                  urgent, how it's diagnosed, and the treatment options available so you know
                  what to expect before you even step into the clinic.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello RamaCare, I have tooth pain and would like to book appointment.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1F5E4B] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-transform hover:-translate-y-0.5"
                  >
                    Book Same-Day Appointment <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="tel:+971566597878"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1F5E4B]/25 px-7 py-4 text-sm font-bold uppercase tracking-wide text-[#1F5E4B] hover:bg-white"
                  >
                    <Phone className="h-4 w-4" /> Call Now
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-[#5F5F5F]">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-[#1F5E4B]" /> Same-day appointments</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-[#1F5E4B]" /> Digital X-ray diagnostics</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-[#1F5E4B]" /> Jumeirah 1, Dubai</span>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-xl">
                  <Image
                    src={IMAGES.hero.src}
                    alt={IMAGES.hero.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ PAIN TYPE SELECTOR — segmented control ============================ */}
        <section className="bg-white py-20 px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <SectionTag>What Is Tooth Pain?</SectionTag>
              <h2 className="mt-4 text-3xl font-black text-[#1A1A1A] sm:text-4xl">
                What is Tooth Pain?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#5F5F5F]">
                Tooth pain, medically referred to as odontalgia, is any discomfort felt in or
                around a tooth. It can originate from the tooth itself, the surrounding gum
                tissue, the jawbone, or nearby structures like the sinuses. Not all tooth pain
                feels the same, and the type of pain you experience often gives dentists
                important clues about what's causing it. Some of the common ways tooth pain
                presents itself include:
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 rounded-2xl bg-[#F9F7F2] p-2">
              {PAIN_TYPES.map((p, i) => {
                const Icon = p.icon;
                const active = activePain === i;
                return (
                  <button
                    key={p.name}
                    onClick={() => setActivePain(i)}
                    className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:text-sm ${
                      active ? 'bg-[#1F5E4B] text-white shadow-sm' : 'text-[#5F5F5F] hover:bg-white'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {p.name}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activePain}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.18 }}
                className="mt-6 rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm"
              >
                <p className="text-base leading-relaxed text-[#5F5F5F]">{PAIN_TYPES[activePain].desc}</p>
              </motion.div>
            </AnimatePresence>

            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-[#5F5F5F]">
              Understanding the pattern of your pain is a useful first step, but it isn't a
              substitute for a clinical diagnosis. Many conditions share overlapping symptoms,
              which is why professional evaluation is essential before starting any treatment —
              and why patients across the city turn to specialized Tooth Pain Treatment Dubai
              providers rather than guessing at home remedies.
            </p>
          </div>
        </section>

        {/* ============================ CAUSES — image + grid ============================ */}
        <section className="bg-[#F5F1E8] py-20 px-4">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <SectionTag>11 Common Causes</SectionTag>
                <h2 className="mt-4 text-3xl font-black leading-tight text-[#1A1A1A]">
                  Common Causes of Tooth Pain
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#5F5F5F]">
                  There are many possible causes behind a toothache, ranging from minor
                  irritation to conditions that require urgent care. Understanding these
                  toothache causes can help you describe your symptoms more accurately to your
                  dentist.
                </p>
                <div className="relative mt-6 aspect-square w-full overflow-hidden rounded-3xl shadow-sm">
                  <Image
                    src={IMAGES.causes.src}
                    alt={IMAGES.causes.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {CAUSES.map((c) => {
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
                <p className="mt-6 text-sm leading-relaxed text-[#5F5F5F]">
                  Because so many conditions can cause similar symptoms, self-diagnosis is
                  unreliable. A professional dental clinic in Dubai can confirm the exact cause
                  using clinical examination and imaging, which is the foundation of effective
                  Tooth Pain Treatment Dubai.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ SYMPTOMS — real table ============================ */}
        <section className="bg-white py-20 px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <SectionTag>Read the Signs</SectionTag>
              <h2 className="mt-4 text-3xl font-black text-[#1A1A1A] sm:text-4xl">
                Symptoms Associated with Tooth Pain
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#5F5F5F]">
                Tooth pain rarely occurs in isolation. Accompanying symptoms help determine how
                urgently you need care.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-[#1F5E4B] text-white">
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide">Symptom</th>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide">Possible Indication</th>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide">Urgency</th>
                  </tr>
                </thead>
                <tbody>
                  {SYMPTOMS_TABLE.map((row, i) => (
                    <tr key={row.symptom} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F9F7F2]'}>
                      <td className="px-5 py-4 text-sm font-bold text-[#1A1A1A]">{row.symptom}</td>
                      <td className="px-5 py-4 text-sm text-[#5F5F5F]">{row.indication}</td>
                      <td className="px-5 py-4">
                        <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold capitalize ${LEVEL_STYLES[row.level]}`}>
                          {row.level}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-center text-sm text-[#5F5F5F]">
              If you notice more than one of these symptoms together, it's a strong signal to
              seek Dental Pain Relief Dubai from a licensed clinic rather than waiting it out.
              Recognizing these signs early makes Tooth Pain Treatment Dubai simpler, faster, and
              far less invasive.
            </p>
          </div>
        </section>

        {/* ============================ EMERGENCY BANNER ============================ */}
        <section className="bg-[#C1443B] py-20 px-4 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <Siren className="mx-auto h-10 w-10" />
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              When Should You Visit a Dentist Immediately?
            </h2>
            <p className="mt-3 text-white/85">
              Some symptoms indicate a dental emergency that shouldn't wait for a routine appointment.
            </p>
            <div className="mt-10 grid gap-3 text-left sm:grid-cols-2">
              {EMERGENCY_SIGNS.map((f) => (
                <div key={f} className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                  <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{f}</span>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-white/75">
              These symptoms can indicate a spreading infection or structural damage that, left
              untreated, may lead to more serious complications. According to general guidance
              from organizations like the World Health Organization (WHO) and the American
              Dental Association (ADA), prompt treatment of dental infections reduces the risk
              of complications spreading beyond the mouth. RamaCare Polyclinic offers timely
              evaluation for patients experiencing these warning signs.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello RamaCare, I think I have a dental emergency and need urgent care.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-[#C1443B] shadow-lg"
            >
              <MessageCircle className="h-4 w-4" /> Get Emergency Help Now
            </a>
          </div>
        </section>

        {/* ============================ DIAGNOSIS — vertical stepper ============================ */}
        <section className="bg-white py-20 px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-14 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <SectionTag>Our Process</SectionTag>
                <h2 className="mt-4 text-3xl font-black text-[#1A1A1A] sm:text-4xl">
                  Diagnosis of Tooth Pain
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#5F5F5F]">
                  A structured evaluation process to identify the exact source of discomfort
                  before recommending treatment.
                </p>

                <div className="relative mt-10 space-y-8 border-l-2 border-[#1F5E4B]/15 pl-8">
                  {DIAGNOSIS_STEPS.map((d, i) => {
                    const Icon = d.icon;
                    return (
                      <div key={d.name} className="relative">
                        <span className="absolute -left-[calc(2rem+9px)] top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#1F5E4B] text-[10px] font-black text-white">
                          {i + 1}
                        </span>
                        <div className="flex items-start gap-3">
                          <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#D4A574]" />
                          <div>
                            <h4 className="text-sm font-bold text-[#1A1A1A]">{d.name}</h4>
                            <p className="mt-0.5 text-xs leading-relaxed text-[#5F5F5F]">{d.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-8 text-sm leading-relaxed text-[#5F5F5F]">
                  This step-by-step diagnostic approach ensures that treatment addresses the
                  actual cause of pain rather than just the symptoms, giving every patient a
                  clear, personalized path to Tooth Pain Treatment Dubai.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-sm lg:sticky lg:top-24">
                  <Image
                    src={IMAGES.diagnosis.src}
                    alt={IMAGES.diagnosis.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ TREATMENT — alternating rows ============================ */}
        <section className="bg-[#F5F1E8] py-20 px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto mb-4 max-w-2xl text-center">
              <SectionTag>Treatment Options</SectionTag>
              <h2 className="mt-4 text-3xl font-black text-[#1A1A1A] sm:text-4xl">
                Tooth Pain Treatment Dubai: Options at RamaCare Polyclinic
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#5F5F5F]">
                Treatment always depends on the underlying cause identified during diagnosis.
                There is no single "one-size-fits-all" solution — that's why a proper clinical
                evaluation comes first. Below are the main treatment options available for Severe
                Tooth Pain Treatment at our clinic offering trusted Tooth Pain Treatment Dubai
                patients can rely on.
              </p>
            </div>

            <div className="relative my-10 aspect-[21/9] w-full overflow-hidden rounded-3xl shadow-sm">
              <Image
                src={IMAGES.treatment.src}
                alt={IMAGES.treatment.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <div className="mb-8 text-center">
              <h3 className="text-xl font-black text-[#1A1A1A]">
                How RamaCare Personalizes Tooth Pain Treatment Dubai Plans
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[#5F5F5F]">
                No two toothaches are identical, which is why our dentists build every plan
                around your specific diagnosis rather than a generic protocol. Below is a summary
                of the treatments most commonly used.
              </p>
            </div>

            <div className="divide-y divide-gray-200 rounded-3xl bg-white shadow-sm">
              {TREATMENTS.map((t) => {
                const Icon = t.icon;
                return (
                  <div key={t.name} className="flex items-start gap-5 p-6">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#1F5E4B]/10 text-[#1F5E4B]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#1A1A1A]">{t.name}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-[#5F5F5F]">{t.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-6 text-center text-xs text-[#5F5F5F]">
              Please note: Treatment recommendations vary from patient to patient based on
              clinical findings. The information above is educational and general in nature; only
              a qualified dentist can determine the right treatment plan after an in-person
              examination.
            </p>
          </div>
        </section>

        {/* ============================ MYTH: DOES IT GO AWAY? — dark callout ============================ */}
        <section className="bg-[#0F3B2E] py-20 px-4 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <SectionTag tone="light">Common Misconception</SectionTag>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">Can Tooth Pain Go Away on Its Own?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/80">
              Sometimes tooth pain seems to fade — but that doesn't always mean the problem has
              resolved. In many cases, pain subsides temporarily because the nerve inside the
              tooth has died, which can create a false sense of relief while an infection
              continues to develop silently beneath the surface. This is one of the most
              misunderstood aspects of dental health.
            </p>
            <p className="mt-6 text-sm font-bold uppercase tracking-wide text-[#D4A574]">
              Delaying treatment carries real risks:
            </p>
            <div className="mt-4 grid gap-3 text-left sm:grid-cols-2">
              {DELAY_RISKS.map((r) => (
                <div key={r} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
                  <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#D4A574]" />
                  <span className="text-sm leading-relaxed text-white/85">{r}</span>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-white/80">
              Early diagnosis is almost always associated with simpler, less invasive treatment.
              If you're experiencing any tooth discomfort, even mild or intermittent, it's worth
              having it evaluated rather than assuming it will resolve on its own — timely Tooth
              Pain Treatment Dubai now can prevent a far more complex procedure later.
            </p>
          </div>
        </section>

        {/* ============================ PREVENTION — checklist strip ============================ */}
        <section className="bg-white py-20 px-4">
          <div className="mx-auto max-w-4xl text-center">
            <SectionTag>Day-to-Day Habits</SectionTag>
            <h2 className="mt-4 text-3xl font-black text-[#1A1A1A] sm:text-4xl">Preventing Tooth Pain</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#5F5F5F]">
              Many causes of tooth pain are preventable with consistent oral care habits. Dental
              organizations such as the ADA and FDI World Dental Federation recommend the
              following everyday practices:
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {PREVENTION_TIPS.map((tip) => (
                <span
                  key={tip}
                  className="inline-flex items-center gap-2 rounded-full border border-[#1F5E4B]/15 bg-[#F9F7F2] px-4 py-2.5 text-sm font-semibold text-[#1A1A1A]"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#1F5E4B]" />
                  {tip}
                </span>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-[#5F5F5F]">
              Consistent preventive care, combined with regular visits to a trusted Dental Clinic
              Dubai, significantly reduces the risk of painful dental emergencies and the need
              for urgent Tooth Pain Treatment Dubai later on.
            </p>
          </div>
        </section>

        {/* ============================ WHY CHOOSE US — image + flowing badges ============================ */}
        <section className="bg-[#F5F1E8] py-20 px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <SectionTag>Our Promise</SectionTag>
              <h2 className="mt-4 text-3xl font-black text-[#1A1A1A] sm:text-4xl">Why Choose RamaCare Polyclinic?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5F5F5F]">
                Choosing the right clinic for Tooth Pain Treatment Dubai matters — both for your
                comfort and for the long-term health of your teeth. Here's what sets RamaCare
                Polyclinic apart:
              </p>
            </div>

            <div className="relative mb-10 aspect-[21/8] w-full overflow-hidden rounded-3xl shadow-sm">
              <Image src={IMAGES.team.src} alt={IMAGES.team.alt} fill sizes="100vw" className="object-cover" />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {WHY_US.map((w, i) => (
                <span
                  key={w}
                  className={`rounded-full px-5 py-2.5 text-sm font-bold ${
                    i % 2 === 0 ? 'bg-[#1F5E4B] text-white' : 'bg-white text-[#1A1A1A] shadow-sm'
                  }`}
                >
                  {w}
                </span>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-[#5F5F5F]">
              If you're looking for the Best Dentist Dubai for tooth pain and comprehensive oral
              healthcare, our team is ready to help you get out of pain and back to normal life.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm font-bold text-[#1F5E4B]">
              Experiencing tooth pain right now? Book an appointment with RamaCare Polyclinic
              today and get the relief you need.
            </p>
          </div>
        </section>

        {/* ============================ FAQ — two-column cards ============================ */}
        <section className="bg-white py-20 px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <SectionTag>FAQ</SectionTag>
              <h2 className="mt-4 text-3xl font-black text-[#1A1A1A] sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5F5F5F]">
                Below are the questions we hear most often from patients researching Tooth Pain
                Treatment Dubai before booking a visit.
              </p>
            </div>
            <div className="columns-1 gap-4 sm:columns-2">
              {FAQS.map((f, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={f.q} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="flex w-full items-center gap-3 p-5 text-left"
                    >
                      <span className="flex-1 text-sm font-bold text-[#1A1A1A]">{f.q}</span>
                      <ChevronDown className={`h-4 w-4 flex-shrink-0 text-[#5F5F5F] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="border-t border-gray-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-[#5F5F5F]">
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

        {/* ============================ RELATED SERVICES — internal links ============================ */}
        <section className="bg-white py-14 px-4">
          <div className="mx-auto max-w-5xl text-center">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#5F5F5F]">Related Dental Services</h3>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {[
                { label: 'Dental Services Dubai', href: '/services/dental-dubai' },
                { label: 'Root Canal Treatment Dubai', href: '/services/root-canal-treatment-dubai' },
                { label: 'Teeth Whitening Dubai', href: '/services/teeth-bleaching-dubai' },
                { label: 'Gum Disease Treatment Dubai', href: '/services/gum-disease-treatment-dubai' },
                { label: 'Composite Veneers Dubai', href: '/services/composite-veneers' },
                { label: 'General Physician', href: '/services/general-physician-dubai' },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-full border border-[#1F5E4B]/15 px-4 py-2 text-xs font-semibold text-[#1F5E4B] hover:bg-[#1F5E4B]/5"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ CONCLUSION / CTA — gold banner ============================ */}
        <section id="book" className="bg-[#FDF5E6] py-20 px-4">
          <div className="mx-auto max-w-3xl text-center">
            <SectionTag tone="gold">Conclusion</SectionTag>
            <h2 className="mt-4 text-3xl font-black text-[#1A1A1A] sm:text-4xl">
              Don't Wait for Tooth Pain to Get Worse
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#3A2F22]">
              Tooth pain is never something to ignore. Whether it's a dull ache or a sharp,
              throbbing sensation, it's your body signaling that something needs attention. Early
              diagnosis leads to simpler, more comfortable treatment, while delaying care can
              allow small problems to become bigger, more complicated ones. Professional Tooth
              Pain Treatment Dubai — backed by accurate diagnosis and a personalized treatment
              plan — offers the most reliable path to lasting relief.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#3A2F22]">
              At RamaCare Polyclinic, our DHA-licensed dental team is here to help you understand
              what's causing your pain and guide you toward the right treatment, delivered with
              care and clear communication every step of the way.
            </p>
            <p className="mt-4 text-base font-bold leading-relaxed text-[#1A1A1A]">
              Don't wait for tooth pain to get worse. Book your appointment with RamaCare
              Polyclinic today and take the first step toward lasting relief.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello RamaCare, I'd like to book an appointment for Tooth Pain Treatment Dubai.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F3B2E] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg"
              >
                <MessageCircle className="h-4 w-4" /> Book on WhatsApp
              </a>
              <a
                href="tel:+971566597878"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#0F3B2E]/25 px-8 py-4 text-sm font-bold uppercase tracking-wide text-[#0F3B2E] hover:bg-white/40"
              >
                <Phone className="h-4 w-4" /> +971 56 659 7878
              </a>
            </div>
            <div className="mx-auto mt-10 h-px w-16 bg-[#0F3B2E]/20" />
            <p className="mx-auto mt-6 max-w-lg text-xs italic text-[#3A2F22]/70">
              This article is intended for general educational purposes and does not replace
              professional dental advice. Treatment recommendations vary based on individual
              diagnosis — please consult a qualified dentist for an accurate assessment of your
              condition.
            </p>
          </div>
        </section>

      </div>
    </Layout>
  );
}